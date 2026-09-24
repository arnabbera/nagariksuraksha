import test from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import worker from "./index.js";

test("the 100th course order gets ₹99 and the next order gets ₹299", async () => {
  const keys = await crypto.subtle.generateKey(
    { name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
    true, ["sign", "verify"],
  );
  const pemBytes = Buffer.from(await crypto.subtle.exportKey("pkcs8", keys.privateKey));
  const pem = `-----BEGIN PRIVATE KEY-----\n${pemBytes.toString("base64").match(/.{1,64}/g).join("\n")}\n-----END PRIVATE KEY-----`;
  const jwk = await crypto.subtle.exportKey("jwk", keys.publicKey);
  const env = {
    FIREBASE_SERVICE_ACCOUNT_JSON: JSON.stringify({
      client_email: "test@example.iam.gserviceaccount.com", private_key: pem,
      project_id: "nagariksuraksha-60adb",
    }),
    RAZORPAY_KEY_ID: "rzp_test_local", RAZORPAY_KEY_SECRET: "test-secret",
    ASSETS: { fetch: async () => new Response("<?xml version=\"1.0\"?><urlset></urlset>", {
      headers: { "content-type": "application/xml" },
    }) },
  };
  const originalFetch = globalThis.fetch;
  let reserved = 99;
  let orderNumber = 0;
  const orders = [];
  const writes = [];
  const reservations = new Map();
  const enrollments = new Map();
  globalThis.fetch = async (input, options = {}) => {
    const url = String(input);
    if (url.includes("service_accounts/v1/jwk/")) return Response.json({ keys: [{ ...jwk, kid: "pricing-key" }] });
    if (url.includes("oauth2.googleapis.com/token")) return Response.json({ access_token: "local-test-token", expires_in: 3600 });
    if (url.endsWith("/coursePricing/introductory-2026")) return Response.json({
      name: "pricing", updateTime: `2026-09-24T00:00:${reserved}Z`,
      fields: { reserved: { integerValue: String(reserved) } },
    });
    if (url.endsWith("documents:commit")) {
      const body = JSON.parse(options.body);
      if (body.writes[0].update.name.includes("/courseFunnelMarkers/")) {
        return Response.json({ writeResults: [] });
      }
      writes.push(body.writes);
      reserved = Number(body.writes[0].update.fields.reserved.integerValue);
      reservations.set(body.writes[1].update.name.split("/").at(-1), body.writes[1].update);
      return Response.json({ writeResults: [] });
    }
    if (url.includes("/coursePricingReservations/")) {
      const document = reservations.get(url.split("/").at(-1));
      return document ? Response.json(document) : new Response(null, { status: 404 });
    }
    if (url.endsWith("documents:runQuery")) return Response.json([
      { document: { fields: { slug: { stringValue: "environmental-law" }, status: { stringValue: "published" } } } },
      { document: { fields: { slug: { stringValue: "draft-course" }, status: { stringValue: "draft" } } } },
    ]);
    if (url.endsWith("/v1/orders") && options.method === "POST") {
      const inputOrder = JSON.parse(options.body);
      const order = { id: `order_${++orderNumber}abcdefgh`, ...inputOrder };
      orders.push(order);
      return Response.json(order);
    }
    if (url.includes("/v1/orders/order_")) {
      const order = orders.find((item) => url.endsWith(item.id));
      return Response.json({ ...order, status: "paid" });
    }
    if (url.includes("/v1/payments/")) {
      const orderId = url.split("/").at(-1).replace("pay_", "order_");
      const order = orders.find((item) => item.id === orderId);
      return Response.json({ order_id: order.id, status: "captured", amount: order.amount, currency: "INR" });
    }
    if (url.includes("/studentEnrollments/")) {
      const studentId = decodeURIComponent(url.split("/studentEnrollments/")[1]).split("_environmental-law")[0];
      const document = enrollments.get(studentId) || {
        name: `projects/nagariksuraksha-60adb/databases/(default)/documents/studentEnrollments/${studentId}_environmental-law`,
        updateTime: "2026-09-24T00:00:00Z",
        fields: { studentId: { stringValue: studentId }, courseId: { stringValue: "environmental-law" } },
      };
      if (options.method === "PATCH") {
        Object.assign(document.fields, JSON.parse(options.body).fields);
        enrollments.set(studentId, document);
      }
      return Response.json(document);
    }
    throw new Error(`Unexpected request: ${url}`);
  };
  try {
    const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
    const userToken = async (sub) => {
      const now = Math.floor(Date.now() / 1000);
      const unsigned = `${encode({ alg: "RS256", kid: "pricing-key" })}.${encode({
        aud: "nagariksuraksha-60adb", iss: "https://securetoken.google.com/nagariksuraksha-60adb",
        sub, iat: now, exp: now + 3600,
      })}`;
      const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", keys.privateKey, new TextEncoder().encode(unsigned));
      return `${unsigned}.${Buffer.from(signature).toString("base64url")}`;
    };
    const create = async (sub) => worker.fetch(new Request("https://www.sanhita360.com/api/razorpay/create-order", {
      method: "POST",
      headers: { authorization: `Bearer ${await userToken(sub)}`, "content-type": "application/json" },
      body: JSON.stringify({ courseId: "environmental-law", purchaseType: "certification" }),
    }), env);
    assert.equal((await (await create("buyer-one")).json()).amount, 9900);
    assert.equal(reserved, 100);
    assert.equal(writes.length, 1);
    assert.equal(writes[0][1].update.fields.studentId.stringValue, "buyer-one");
    assert.equal((await (await create("buyer-two")).json()).amount, 29900);
    assert.equal(reserved, 100);
    assert.deepEqual(orders.map((order) => order.amount), [9900, 29900]);
    for (const [studentId, order] of [["buyer-one", orders[0]], ["buyer-two", orders[1]]]) {
      const paymentId = order.id.replace("order_", "pay_");
      const signature = createHmac("sha256", "test-secret").update(`${order.id}|${paymentId}`).digest("hex");
      const verified = await worker.fetch(new Request("https://www.sanhita360.com/api/razorpay/verify-payment", {
        method: "POST",
        headers: { authorization: `Bearer ${await userToken(studentId)}`, "content-type": "application/json" },
        body: JSON.stringify({ courseId: "environmental-law", purchaseType: "certification",
          razorpayOrderId: order.id, razorpayPaymentId: paymentId, razorpaySignature: signature }),
      }), env);
      assert.equal(verified.status, 200);
      assert.equal(enrollments.get(studentId).fields.certification.mapValue.fields.fee.integerValue, String(order.amount / 100));
    }
    assert.equal((await (await worker.fetch(new Request("https://www.sanhita360.com/api/course-pricing"), env)).json()).amount, 29900);
    const sitemap = await (await worker.fetch(new Request("https://www.sanhita360.com/sitemap.xml"), env)).text();
    assert.match(sitemap, /\/courses\/environmental-law/);
    assert.doesNotMatch(sitemap, /\/courses\/draft-course/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
