import { getFunctions, httpsCallable } from "firebase/functions";

import app from "../firebase/firebase";

const functions = getFunctions(app, "asia-south1");
const createCoursePayment = httpsCallable(functions, "createCoursePayment");
const verifyCoursePayment = httpsCallable(functions, "verifyCoursePayment");

const CHECKOUT_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

const loadRazorpayCheckout = () => {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${CHECKOUT_SCRIPT}"]`);

    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Unable to load Razorpay Checkout.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = CHECKOUT_SCRIPT;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Unable to load Razorpay Checkout."));
    document.body.appendChild(script);
  });
};

const callableMessage = (error, fallback) =>
  error?.message?.replace(/^Firebase:\s*/i, "") || fallback;

export const payForCourseWithRazorpay = async ({
  courseId,
  courseTitle,
  studentName,
  studentEmail,
}) => {
  await loadRazorpayCheckout();

  let order;

  try {
    const response = await createCoursePayment({ courseId });
    order = response.data;
  } catch (error) {
    throw new Error(callableMessage(error, "Unable to start payment."), {
      cause: error,
    });
  }

  return new Promise((resolve, reject) => {
    let settled = false;

    const finishWithError = (message) => {
      if (!settled) {
        settled = true;
        reject(new Error(message));
      }
    };

    const checkout = new window.Razorpay({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      order_id: order.orderId,
      name: "Nagarik Suraksha",
      description: `${courseTitle || "Course"} certification enrollment`,
      prefill: {
        name: studentName || "",
        email: studentEmail || "",
      },
      theme: { color: "#2563eb" },
      modal: {
        ondismiss: () => finishWithError("Payment was cancelled. You can continue it at any time."),
      },
      handler: async (payment) => {
        try {
          const response = await verifyCoursePayment({
            courseId,
            razorpayOrderId: payment.razorpay_order_id,
            razorpayPaymentId: payment.razorpay_payment_id,
            razorpaySignature: payment.razorpay_signature,
          });

          settled = true;
          resolve(response.data);
        } catch (error) {
          finishWithError(callableMessage(error, "Payment verification failed."));
        }
      },
    });

    checkout.on("payment.failed", (response) => {
      finishWithError(
        response?.error?.description || "Payment failed. Please try again.",
      );
    });

    checkout.open();
  });
};

export default payForCourseWithRazorpay;
