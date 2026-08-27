import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { defineSecret } from "firebase-functions/params";
import { HttpsError, onCall, onRequest } from "firebase-functions/v2/https";
import Razorpay from "razorpay";
import { Buffer } from "node:buffer";
import crypto from "node:crypto";

initializeApp();

const db = getFirestore();

const SITE_URL = "https://www.nagariksuraksha.com";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;
const COURSE_FEE_PAISE = 4900;
const RAZORPAY_KEY_ID = defineSecret("RAZORPAY_KEY_ID");
const RAZORPAY_KEY_SECRET = defineSecret("RAZORPAY_KEY_SECRET");

const paymentFunctionOptions = {
  region: "asia-south1",
  secrets: [RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET],
};

const requireStudent = (request) => {
  const studentId = request.auth?.uid;

  if (!studentId) {
    throw new HttpsError("unauthenticated", "Please sign in before making a payment.");
  }

  return studentId;
};

const getEnrollment = async (studentId, courseId) => {
  const enrollmentDocument = await db
    .collection("studentEnrollments")
    .doc(`${studentId}_${courseId}`)
    .get();

  if (
    !enrollmentDocument.exists ||
    enrollmentDocument.data()?.studentId !== studentId ||
    enrollmentDocument.data()?.courseId !== courseId ||
    enrollmentDocument.data()?.deleted === true
  ) {
    throw new HttpsError(
      "failed-precondition",
      "Start the course enrollment before continuing to payment.",
    );
  }

  return enrollmentDocument;
};

const getRazorpay = () =>
  new Razorpay({
    key_id: RAZORPAY_KEY_ID.value(),
    key_secret: RAZORPAY_KEY_SECRET.value(),
  });

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const normalizeSlug = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const absoluteUrl = (value = "") => {
  if (!value) {
    return "";
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

const getPublishedPost = async (slug) => {
  const snapshot = await db
    .collection("posts")
    .where("slug", "==", slug)
    .where("status", "==", "published")
    .limit(1)
    .get();

  const document = snapshot.docs.find(
    (candidate) => candidate.data()?.deleted !== true,
  );

  return document
    ? {
        id: document.id,
        ...document.data(),
      }
    : null;
};

const renderPage = ({
  title,
  description,
  image,
  postUrl,
  notFound = false,
}) => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeImage = escapeHtml(image);
  const safePostUrl = escapeHtml(postUrl);

  return `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}" />
    <meta name="robots" content="${notFound ? "noindex, follow" : "index, follow"}" />
    <link rel="canonical" href="${safePostUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="NagarikSuraksha" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="${safePostUrl}" />
    <meta property="og:image" content="${safeImage}" />
    <meta property="og:image:alt" content="${safeTitle}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${safeImage}" />
    <meta http-equiv="refresh" content="0;url=${safePostUrl}" />
    <script>window.location.replace(${JSON.stringify(postUrl)});</script>
  </head>
  <body>
    <p>Opening <a href="${safePostUrl}">${safeTitle}</a>…</p>
  </body>
</html>`;
};

export const socialShare = onRequest(
  {
    region: "asia-south1",
    cors: false,
  },
  async (request, response) => {
    response.set("Cache-Control", "public, max-age=300, s-maxage=900");

    try {
      const slug = normalizeSlug(request.query.slug);

      if (!slug) {
        response.status(400).type("html").send(
          renderPage({
            title: "Post Not Found | NagarikSuraksha",
            description: "The requested NagarikSuraksha post could not be found.",
            image: DEFAULT_IMAGE,
            postUrl: `${SITE_URL}/posts`,
            notFound: true,
          }),
        );
        return;
      }

      const post = await getPublishedPost(slug);
      const postUrl = `${SITE_URL}/posts/${encodeURIComponent(slug)}`;

      if (!post) {
        response.status(404).type("html").send(
          renderPage({
            title: "Post Not Found | NagarikSuraksha",
            description: "The requested NagarikSuraksha post could not be found.",
            image: DEFAULT_IMAGE,
            postUrl,
            notFound: true,
          }),
        );
        return;
      }

      const title = post.seo?.title || post.title || "NagarikSuraksha";
      const description =
        post.seo?.description ||
        post.excerpt ||
        `Read ${post.title || "this post"} on NagarikSuraksha.`;
      const image =
        absoluteUrl(
          post.seo?.ogImageUrl ||
            post.media?.desktop?.url ||
            post.media?.mobile?.url,
        ) || DEFAULT_IMAGE;
      const canonicalUrl = absoluteUrl(post.seo?.canonicalUrl) || postUrl;

      response.status(200).type("html").send(
        renderPage({
          title,
          description,
          image,
          postUrl: canonicalUrl,
        }),
      );
    } catch (error) {
      console.error("Unable to render social share page:", error);

      response.status(500).type("html").send(
        renderPage({
          title: "NagarikSuraksha",
          description: "Legal learning, law notes and legal awareness.",
          image: DEFAULT_IMAGE,
          postUrl: SITE_URL,
          notFound: true,
        }),
      );
    }
  },
);

export const createCoursePayment = onCall(
  paymentFunctionOptions,
  async (request) => {
    const studentId = requireStudent(request);
    const courseId = String(request.data?.courseId || "").trim();

    if (!courseId) {
      throw new HttpsError("invalid-argument", "Course ID is required.");
    }

    const enrollmentDocument = await getEnrollment(studentId, courseId);
    const enrollment = enrollmentDocument.data();

    if (enrollment.certification?.payment?.status === "paid") {
      throw new HttpsError("already-exists", "This course is already paid and enrolled.");
    }

    try {
      const order = await getRazorpay().orders.create({
        amount: COURSE_FEE_PAISE,
        currency: "INR",
        receipt: `ns_${Date.now()}_${studentId.slice(0, 8)}`,
        notes: {
          studentId,
          courseId,
          enrollmentId: enrollmentDocument.id,
        },
      });

      await enrollmentDocument.ref.update({
        "certification.status": "pending-payment",
        "certification.fee": 49,
        "certification.payment.status": "pending",
        "certification.payment.provider": "razorpay",
        "certification.payment.orderId": order.id,
        "certification.payment.amount": COURSE_FEE_PAISE,
        "certification.payment.currency": "INR",
        "certification.payment.createdAt": FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        updatedBy: studentId,
      });

      return {
        keyId: RAZORPAY_KEY_ID.value(),
        orderId: order.id,
        amount: COURSE_FEE_PAISE,
        currency: "INR",
        courseId,
      };
    } catch (error) {
      console.error("Unable to create Razorpay course order:", error);
      throw new HttpsError("internal", "Unable to start payment. Please try again.");
    }
  },
);

export const verifyCoursePayment = onCall(
  paymentFunctionOptions,
  async (request) => {
    const studentId = requireStudent(request);
    const courseId = String(request.data?.courseId || "").trim();
    const orderId = String(request.data?.razorpayOrderId || "").trim();
    const paymentId = String(request.data?.razorpayPaymentId || "").trim();
    const signature = String(request.data?.razorpaySignature || "").trim();

    if (!courseId || !orderId || !paymentId || !signature) {
      throw new HttpsError("invalid-argument", "Incomplete Razorpay payment details.");
    }

    const enrollmentDocument = await getEnrollment(studentId, courseId);
    const enrollment = enrollmentDocument.data();
    const storedOrderId = enrollment.certification?.payment?.orderId;

    if (enrollment.certification?.payment?.status === "paid") {
      return { enrollmentId: enrollmentDocument.id, status: "paid" };
    }

    if (!storedOrderId || storedOrderId !== orderId) {
      throw new HttpsError("permission-denied", "Payment order does not match this enrollment.");
    }

    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET.value())
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const suppliedSignature = Buffer.from(signature, "utf8");
    const verifiedSignature = Buffer.from(expectedSignature, "utf8");

    if (
      suppliedSignature.length !== verifiedSignature.length ||
      !crypto.timingSafeEqual(suppliedSignature, verifiedSignature)
    ) {
      throw new HttpsError("permission-denied", "Payment verification failed.");
    }

    try {
      const razorpay = getRazorpay();
      const [order, payment] = await Promise.all([
        razorpay.orders.fetch(orderId),
        razorpay.payments.fetch(paymentId),
      ]);

      const validPayment =
        order.status === "paid" &&
        payment.status === "captured" &&
        payment.order_id === orderId &&
        Number(order.amount) === COURSE_FEE_PAISE &&
        Number(payment.amount) === COURSE_FEE_PAISE &&
        order.currency === "INR" &&
        payment.currency === "INR";

      if (!validPayment) {
        throw new HttpsError(
          "failed-precondition",
          "Payment is not captured yet. Please wait briefly and try again.",
        );
      }

      await enrollmentDocument.ref.update({
        accessType: "certification",
        "certification.status": "active",
        "certification.activatedAt": FieldValue.serverTimestamp(),
        "certification.payment.status": "paid",
        "certification.payment.provider": "razorpay",
        "certification.payment.paymentId": paymentId,
        "certification.payment.reference": orderId,
        "certification.payment.paidAt": FieldValue.serverTimestamp(),
        "certification.access.pdfDownload": true,
        "certification.access.mockTests": true,
        "certification.access.finalExam": false,
        "certification.mockTests.test1.status": "available",
        updatedAt: FieldValue.serverTimestamp(),
        updatedBy: "razorpay-verification",
      });

      return { enrollmentId: enrollmentDocument.id, status: "paid" };
    } catch (error) {
      if (error instanceof HttpsError) {
        throw error;
      }

      console.error("Unable to verify Razorpay course payment:", error);
      throw new HttpsError("internal", "Unable to verify payment. Please contact support.");
    }
  },
);
