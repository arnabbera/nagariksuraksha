const COURSE_FEE_PAISE = 4900;
const CURRENCY = "INR";
const FIREBASE_PROJECT_ID = "nagariksuraksha-60adb";
const FIREBASE_ISSUER = `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`;
const FIREBASE_JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";

let firebaseKeysCache = null;
let googleAccessTokenCache = null;

const json = (body, init = {}) => Response.json(body, {
  ...init,
  headers: { "cache-control": "no-store", ...init.headers },
});

const fail = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

const base64UrlToBytes = (value) => {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
};

const bytesToBase64Url = (value) => {
  let binary = "";
  for (const byte of new Uint8Array(value)) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const encodeJson = (value) => bytesToBase64Url(
  new TextEncoder().encode(JSON.stringify(value)),
);
const decodeJson = (value) => JSON.parse(
  new TextDecoder().decode(base64UrlToBytes(value)),
);

const getFirebaseKeys = async () => {
  if (firebaseKeysCache?.expiresAt > Date.now()) return firebaseKeysCache.keys;
  const response = await fetch(FIREBASE_JWKS_URL);
  if (!response.ok) fail("Unable to validate your login session.", 503);
  const maxAge = Number(
    (response.headers.get("cache-control") || "").match(/max-age=(\d+)/)?.[1] || 3600,
  );
  const keys = await response.json();
  firebaseKeysCache = { keys, expiresAt: Date.now() + Math.max(300, maxAge) * 1000 };
  return keys;
};

const requireStudent = async (request) => {
  const authorization = request.headers.get("authorization") || "";
  const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) fail("Please sign in before making a payment.", 401);
  const parts = token.split(".");
  if (parts.length !== 3) fail("Your login session is invalid. Please sign in again.", 401);

  let header;
  let payload;
  try {
    header = decodeJson(parts[0]);
    payload = decodeJson(parts[1]);
  } catch {
    fail("Your login session is invalid. Please sign in again.", 401);
  }

  const now = Math.floor(Date.now() / 1000);
  if (
    header.alg !== "RS256" || !header.kid || payload.aud !== FIREBASE_PROJECT_ID ||
    payload.iss !== FIREBASE_ISSUER || typeof payload.sub !== "string" ||
    !payload.sub || payload.sub.length > 128 || Number(payload.exp) <= now ||
    Number(payload.iat) > now + 300
  ) fail("Your login session has expired. Please sign in again.", 401);

  const keys = await getFirebaseKeys();
  const jwk = keys.keys?.find((candidate) => candidate.kid === header.kid);
  if (!jwk) {
    firebaseKeysCache = null;
    fail("Unable to validate your login session. Please sign in again.", 401);
  }
  const publicKey = await crypto.subtle.importKey(
    "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"],
  );
  const verified = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5", publicKey, base64UrlToBytes(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  );
  if (!verified) fail("Your login session is invalid. Please sign in again.", 401);
  return payload.sub;
};

const getFirebaseServiceAccountJson = (env) =>
  env.FIREBASE_SERVICE_ACCOUNT_JSON ||
  env.FIREBASE_SERVICE_ACCOUNT ||
  env.FIREBASE_SERVICE_ACCOUNT_;

const getRazorpayCredentials = (env) => ({
  keyId: env.RAZORPAY_KEY_ID || env.key_id,
  keySecret: env.RAZORPAY_KEY_SECRET || env.key_secret,
});

const parseServiceAccount = (env) => {
  const serviceAccountJson = getFirebaseServiceAccountJson(env);
  if (!serviceAccountJson) {
    fail("Firebase backend credentials are not configured.", 503);
  }
  try {
    const account = JSON.parse(serviceAccountJson);
    if (!account.client_email || !account.private_key) throw new Error();
    if (account.project_id && account.project_id !== FIREBASE_PROJECT_ID) throw new Error();
    return account;
  } catch {
    fail("Firebase backend credentials are invalid.", 503);
  }
};

const importPrivateKey = (privateKey) => {
  const encoded = privateKey.replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "").replace(/\s/g, "");
  return crypto.subtle.importKey(
    "pkcs8", Uint8Array.from(atob(encoded), (character) => character.charCodeAt(0)),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"],
  );
};

const getGoogleAccessToken = async (env) => {
  if (googleAccessTokenCache?.expiresAt > Date.now() + 60_000) {
    return googleAccessTokenCache.token;
  }
  const account = parseServiceAccount(env);
  const now = Math.floor(Date.now() / 1000);
  const encodedHeader = encodeJson({ alg: "RS256", typ: "JWT" });
  const encodedPayload = encodeJson({
    iss: account.client_email,
    scope: FIRESTORE_SCOPE,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  });
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5", await importPrivateKey(account.private_key),
    new TextEncoder().encode(unsignedToken),
  );
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsignedToken}.${bytesToBase64Url(signature)}`,
    }),
  });
  const result = await response.json();
  if (!response.ok || !result.access_token) {
    console.error("Unable to obtain Firestore access token", result.error);
    fail("Unable to connect to enrollment storage.", 503);
  }
  googleAccessTokenCache = {
    token: result.access_token,
    expiresAt: Date.now() + Number(result.expires_in || 3600) * 1000,
  };
  return result.access_token;
};

const enrollmentUrl = (studentId, courseId) =>
  `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/studentEnrollments/${encodeURIComponent(`${studentId}_${courseId}`)}`;

const getEnrollment = async (env, studentId, courseId) => {
  const token = await getGoogleAccessToken(env);
  const response = await fetch(enrollmentUrl(studentId, courseId), {
    headers: { authorization: `Bearer ${token}` },
  });
  if (response.status === 404) {
    fail("Start the course enrollment before continuing to payment.", 409);
  }
  if (!response.ok) {
    console.error("Unable to load enrollment", response.status, await response.text());
    fail("Unable to load your course enrollment.", 503);
  }
  const enrollment = await response.json();
  const fields = enrollment.fields || {};
  if (
    fields.studentId?.stringValue !== studentId ||
    fields.courseId?.stringValue !== courseId || fields.deleted?.booleanValue === true
  ) fail("This enrollment does not belong to your account.", 403);
  return { enrollment, token };
};

const ensureMapFields = (value) => {
  value.mapValue ||= { fields: {} };
  value.mapValue.fields ||= {};
  return value.mapValue.fields;
};

const setFirestoreValue = (root, path, value) => {
  const parts = path.split(".");
  let fields = root;
  for (let index = 0; index < parts.length - 1; index += 1) {
    fields[parts[index]] ||= { mapValue: { fields: {} } };
    fields = ensureMapFields(fields[parts[index]]);
  }
  fields[parts.at(-1)] = value;
};

const getFirestoreValue = (root, path) => {
  const parts = path.split(".");
  let value = null;
  for (let index = 0; index < parts.length; index += 1) {
    const fields = index === 0 ? root : value?.mapValue?.fields;
    value = fields?.[parts[index]];
    if (!value) return null;
  }
  return value;
};

const updateEnrollment = async ({ enrollment, token, topLevelFields }) => {
  const query = new URLSearchParams();
  for (const fieldPath of Object.keys(topLevelFields)) {
    query.append("updateMask.fieldPaths", fieldPath);
  }
  if (enrollment.updateTime) query.set("currentDocument.updateTime", enrollment.updateTime);
  const url = enrollment.name.replace(
    "projects/", "https://firestore.googleapis.com/v1/projects/",
  );
  const response = await fetch(`${url}?${query}`, {
    method: "PATCH",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ name: enrollment.name, fields: topLevelFields }),
  });
  if (!response.ok) {
    console.error("Unable to update enrollment", response.status, await response.text());
    fail("Unable to update your course enrollment. Please try again.", 409);
  }
  return response.json();
};

const razorpayRequest = async (env, path, init = {}) => {
  const { keyId, keySecret } = getRazorpayCredentials(env);
  if (!keyId || !keySecret) {
    fail("Razorpay is not configured yet.", 503);
  }
  const response = await fetch(`https://api.razorpay.com/v1${path}`, {
    ...init,
    headers: {
      authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
      "content-type": "application/json",
      ...init.headers,
    },
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error("Razorpay request failed", response.status, result.error?.code);
    fail(result.error?.description || "Razorpay is temporarily unavailable.", 502);
  }
  return result;
};

const readBody = async (request) => {
  if (request.method !== "POST") fail("Method not allowed.", 405);
  try {
    return await request.json();
  } catch {
    fail("Invalid request.");
  }
};

const createOrder = async (request, env) => {
  const studentId = await requireStudent(request);
  const { courseId: rawCourseId } = await readBody(request);
  const courseId = String(rawCourseId || "").trim();
  if (!courseId || courseId.length > 160) fail("Course ID is required.");
  const { enrollment, token } = await getEnrollment(env, studentId, courseId);
  const fields = structuredClone(enrollment.fields || {});
  if (getFirestoreValue(fields, "certification.payment.status")?.stringValue === "paid") {
    fail("This course is already paid and enrolled.", 409);
  }
  const order = await razorpayRequest(env, "/orders", {
    method: "POST",
    body: JSON.stringify({
      amount: COURSE_FEE_PAISE,
      currency: CURRENCY,
      receipt: `ns_${Date.now()}_${studentId.slice(0, 8)}`,
      notes: { studentId, courseId, enrollmentId: `${studentId}_${courseId}` },
    }),
  });
  const now = new Date().toISOString();
  setFirestoreValue(fields, "certification.status", { stringValue: "pending-payment" });
  setFirestoreValue(fields, "certification.fee", { integerValue: "49" });
  setFirestoreValue(fields, "certification.payment.status", { stringValue: "pending" });
  setFirestoreValue(fields, "certification.payment.provider", { stringValue: "razorpay" });
  setFirestoreValue(fields, "certification.payment.orderId", { stringValue: order.id });
  setFirestoreValue(fields, "certification.payment.amount", { integerValue: String(COURSE_FEE_PAISE) });
  setFirestoreValue(fields, "certification.payment.currency", { stringValue: CURRENCY });
  setFirestoreValue(fields, "certification.payment.createdAt", { timestampValue: now });
  await updateEnrollment({ enrollment, token, topLevelFields: {
    certification: fields.certification,
    updatedAt: { timestampValue: now },
    updatedBy: { stringValue: studentId },
  } });
  return {
    keyId: getRazorpayCredentials(env).keyId,
    orderId: order.id,
    amount: COURSE_FEE_PAISE,
    currency: CURRENCY,
    courseId,
  };
};

const hexToBytes = (value) => {
  if (!/^[a-f0-9]+$/i.test(value) || value.length % 2 !== 0) return new Uint8Array();
  return Uint8Array.from(value.match(/.{2}/g), (byte) => Number.parseInt(byte, 16));
};

const signaturesMatch = async (secret, message, suppliedHex) => {
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const expected = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message)),
  );
  const supplied = hexToBytes(suppliedHex);
  if (expected.length !== supplied.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= expected[index] ^ supplied[index];
  }
  return difference === 0;
};

const verifyPayment = async (request, env) => {
  const studentId = await requireStudent(request);
  const body = await readBody(request);
  const courseId = String(body.courseId || "").trim();
  const orderId = String(body.razorpayOrderId || "").trim();
  const paymentId = String(body.razorpayPaymentId || "").trim();
  const signature = String(body.razorpaySignature || "").trim();
  if (!courseId || !orderId || !paymentId || !signature) {
    fail("Incomplete Razorpay payment details.");
  }
  const { enrollment, token } = await getEnrollment(env, studentId, courseId);
  const fields = structuredClone(enrollment.fields || {});
  if (getFirestoreValue(fields, "certification.payment.status")?.stringValue === "paid") {
    return { enrollmentId: `${studentId}_${courseId}`, status: "paid" };
  }
  if (getFirestoreValue(fields, "certification.payment.orderId")?.stringValue !== orderId) {
    fail("Payment order does not match this enrollment.", 403);
  }
  const { keySecret } = getRazorpayCredentials(env);
  if (!keySecret) fail("Razorpay is not configured yet.", 503);
  if (!(await signaturesMatch(keySecret, `${orderId}|${paymentId}`, signature))) {
    fail("Payment verification failed.", 403);
  }
  const [order, payment] = await Promise.all([
    razorpayRequest(env, `/orders/${encodeURIComponent(orderId)}`),
    razorpayRequest(env, `/payments/${encodeURIComponent(paymentId)}`),
  ]);
  const validPayment = order.status === "paid" && payment.status === "captured" &&
    payment.order_id === orderId && Number(order.amount) === COURSE_FEE_PAISE &&
    Number(payment.amount) === COURSE_FEE_PAISE && order.currency === CURRENCY &&
    payment.currency === CURRENCY && order.notes?.studentId === studentId &&
    order.notes?.courseId === courseId;
  if (!validPayment) {
    fail("Payment is not captured yet. Please wait briefly and try again.", 409);
  }
  const now = new Date().toISOString();
  setFirestoreValue(fields, "certification.status", { stringValue: "active" });
  setFirestoreValue(fields, "certification.activatedAt", { timestampValue: now });
  setFirestoreValue(fields, "certification.payment.status", { stringValue: "paid" });
  setFirestoreValue(fields, "certification.payment.provider", { stringValue: "razorpay" });
  setFirestoreValue(fields, "certification.payment.paymentId", { stringValue: paymentId });
  setFirestoreValue(fields, "certification.payment.reference", { stringValue: orderId });
  setFirestoreValue(fields, "certification.payment.paidAt", { timestampValue: now });
  setFirestoreValue(fields, "certification.access.pdfDownload", { booleanValue: true });
  setFirestoreValue(fields, "certification.access.mockTests", { booleanValue: true });
  setFirestoreValue(fields, "certification.access.finalExam", { booleanValue: false });
  setFirestoreValue(fields, "certification.mockTests.test1.status", { stringValue: "available" });
  await updateEnrollment({ enrollment, token, topLevelFields: {
    accessType: { stringValue: "certification" },
    certification: fields.certification,
    updatedAt: { timestampValue: now },
    updatedBy: { stringValue: "razorpay-verification" },
  } });
  return { enrollmentId: `${studentId}_${courseId}`, status: "paid" };
};

const handleApi = async (request, env, url) => {
  if (url.pathname === "/api/health") {
    if (request.method !== "GET") fail("Method not allowed.", 405);
    const { keyId, keySecret } = getRazorpayCredentials(env);
    return {
      ok: true,
      service: "nagariksuraksha",
      runtime: "cloudflare-worker",
      configuration: {
        razorpay: Boolean(keyId && keySecret),
        firebaseAdmin: Boolean(getFirebaseServiceAccountJson(env)),
      },
    };
  }
  if (url.pathname === "/api/razorpay/create-order") return createOrder(request, env);
  if (url.pathname === "/api/razorpay/verify-payment") return verifyPayment(request, env);
  fail("API endpoint not found.", 404);
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      try {
        return json(await handleApi(request, env, url));
      } catch (error) {
        console.error("API request failed", url.pathname, error.message);
        return json(
          { error: error.message || "Unexpected payment service error." },
          { status: Number(error.status) || 500 },
        );
      }
    }
    return env.ASSETS.fetch(request);
  },
};
