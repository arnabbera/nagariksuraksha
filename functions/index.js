import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { defineSecret } from "firebase-functions/params";
import { HttpsError, onCall, onRequest } from "firebase-functions/v2/https";
import Razorpay from "razorpay";
import { Buffer } from "node:buffer";
import crypto from "node:crypto";

initializeApp();

const db = getFirestore();

const SITE_URL = "https://www.sanhita360.com";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;
const INTRO_COURSE_FEE_PAISE = 9900;
const REGULAR_COURSE_FEE_PAISE = 29900;
const INTRO_OFFER_LIMIT = 100;
const pricingRef = db.collection("coursePricing").doc("introductory-2026");
const reservationRef = (orderId) => db.collection("coursePricingReservations").doc(orderId);

const coursePrice = async () => {
  const snapshot = await pricingRef.get();
  return Number(snapshot.data()?.reserved || 0) < INTRO_OFFER_LIMIT
    ? INTRO_COURSE_FEE_PAISE : REGULAR_COURSE_FEE_PAISE;
};

const reserveIntroOrder = (orderId, studentId, courseId) => db.runTransaction(async (transaction) => {
  const snapshot = await transaction.get(pricingRef);
  const reserved = Number(snapshot.data()?.reserved || 0);
  if (reserved >= INTRO_OFFER_LIMIT) return false;
  transaction.set(pricingRef, { reserved: reserved + 1, limit: INTRO_OFFER_LIMIT });
  transaction.create(reservationRef(orderId), {
    studentId, courseId, purchaseType: "certification", amount: INTRO_COURSE_FEE_PAISE,
    reservedAt: FieldValue.serverTimestamp(),
  });
  return true;
});

const releaseIntroOrder = (orderId) => db.runTransaction(async (transaction) => {
  const [pricing, reservation] = await Promise.all([
    transaction.get(pricingRef), transaction.get(reservationRef(orderId)),
  ]);
  if (!reservation.exists) return;
  transaction.delete(reservationRef(orderId));
  transaction.update(pricingRef, { reserved: Math.max(0, Number(pricing.data()?.reserved || 0) - 1) });
});
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
    <meta property="og:site_name" content="Sanhita360" />
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
            title: "Post Not Found | Sanhita360",
            description: "The requested Sanhita360 post could not be found.",
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
            title: "Post Not Found | Sanhita360",
            description: "The requested Sanhita360 post could not be found.",
            image: DEFAULT_IMAGE,
            postUrl,
            notFound: true,
          }),
        );
        return;
      }

      const title = (post.seo?.title || post.title || "Sanhita360").replace(/NagarikSuraksha/gi, "Sanhita360");
      const description = (
        post.seo?.description ||
        post.excerpt ||
        `Read ${post.title || "this post"} on Sanhita360.`
      ).replace(/NagarikSuraksha/gi, "Sanhita360");
      const image =
        absoluteUrl(
          post.seo?.ogImageUrl ||
            post.media?.desktop?.url ||
            post.media?.mobile?.url,
        ) || DEFAULT_IMAGE;
      const canonicalUrl = absoluteUrl(post.seo?.canonicalUrl)
        .replace(/^https?:\/\/(?:www\.)?nagariksuraksha\.com(?=\/|$)/i, SITE_URL) || postUrl;

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
          title: "Sanhita360",
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

    const razorpay = getRazorpay();
    const pending = enrollment.certification?.payment;
    if (pending?.status === "pending" && pending?.orderId && Number(pending?.amount) > 0) {
      const previous = await razorpay.orders.fetch(pending.orderId);
      if (previous.id === pending.orderId && Number(previous.amount) === Number(pending.amount) &&
          previous.notes?.studentId === studentId && previous.notes?.courseId === courseId) {
        return { keyId: RAZORPAY_KEY_ID.value(), orderId: previous.id,
          amount: previous.amount, currency: "INR", courseId };
      }
    }

    let reserved = false;
    let order;
    try {
      const makeOrder = (amount) => razorpay.orders.create({
        amount, currency: "INR",
        receipt: `ns_${Date.now()}_${studentId.slice(0, 8)}`,
        notes: { studentId, courseId, purchaseType: "certification", enrollmentId: enrollmentDocument.id },
      });
      let amount = await coursePrice();
      order = await makeOrder(amount);
      if (amount === INTRO_COURSE_FEE_PAISE) {
        reserved = await reserveIntroOrder(order.id, studentId, courseId);
        if (!reserved) {
          amount = REGULAR_COURSE_FEE_PAISE;
          order = await makeOrder(amount);
        }
      }

      await enrollmentDocument.ref.update({
        "certification.status": "pending-payment",
        "certification.fee": amount / 100,
        "certification.payment.status": "pending",
        "certification.payment.provider": "razorpay",
        "certification.payment.orderId": order.id,
        "certification.payment.amount": amount,
        "certification.payment.currency": "INR",
        "certification.payment.purchaseType": "certification",
        "certification.payment.createdAt": FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        updatedBy: studentId,
      }, { lastUpdateTime: enrollmentDocument.updateTime });

      return {
        keyId: RAZORPAY_KEY_ID.value(),
        orderId: order.id,
        amount,
        currency: "INR",
        courseId,
      };
    } catch (error) {
      if (reserved && order?.id) {
        try { await releaseIntroOrder(order.id); } catch (releaseError) {
          console.error("Unable to release introductory price", releaseError);
        }
      }
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

      const expectedAmount = Number(enrollment.certification?.payment?.amount);
      const validPayment =
        [4900, INTRO_COURSE_FEE_PAISE, REGULAR_COURSE_FEE_PAISE].includes(expectedAmount) &&
        order.status === "paid" &&
        payment.status === "captured" &&
        payment.order_id === orderId &&
        Number(order.amount) === expectedAmount &&
        Number(payment.amount) === expectedAmount &&
        order.currency === "INR" &&
        payment.currency === "INR" &&
        order.notes?.studentId === studentId && order.notes?.courseId === courseId;

      if (!validPayment) {
        throw new HttpsError(
          "failed-precondition",
          "Payment is not captured yet. Please wait briefly and try again.",
        );
      }

      if (expectedAmount === INTRO_COURSE_FEE_PAISE) {
        const reservation = await reservationRef(orderId).get();
        if (!reservation.exists || reservation.data()?.studentId !== studentId ||
            reservation.data()?.courseId !== courseId) {
          throw new HttpsError("failed-precondition", "The introductory order could not be verified.");
        }
      }

      await enrollmentDocument.ref.update({
        accessType: "certification",
        "certification.status": "active",
        "certification.fee": expectedAmount / 100,
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
