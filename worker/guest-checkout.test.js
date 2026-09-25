import test from "node:test";
import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import worker from "./index.js";

test("guest payment is verified before a single account can claim course access", async () => {
  const keys = await crypto.subtle.generateKey(
    { name: "RSASSA-PKCS1-v1_5", modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
    true, ["sign", "verify"],
  );
  const privateKey = Buffer.from(await crypto.subtle.exportKey("pkcs8", keys.privateKey));
  const pem = `-----BEGIN PRIVATE KEY-----\n${privateKey.toString("base64").match(/.{1,64}/g).join("\n")}\n-----END PRIVATE KEY-----`;
  const jwk = await crypto.subtle.exportKey("jwk", keys.publicKey);
  const env = {
    FIREBASE_SERVICE_ACCOUNT_JSON: JSON.stringify({ client_email: "test@example.iam.gserviceaccount.com",
      private_key: pem, project_id: "nagariksuraksha-60adb" }),
    RAZORPAY_KEY_ID: "rzp_test_local", RAZORPAY_KEY_SECRET: "test-secret",
  };
  const originalFetch = globalThis.fetch;
  let purchase;
  let claimedEnrollment;
  let order;
  let reserved = 0;
  globalThis.fetch = async (input, options = {}) => {
    const url = String(input);
    const body = options.body && !url.includes("oauth2.googleapis.com/token")
      ? JSON.parse(options.body) : {};
    if (url.includes("service_accounts/v1/jwk/")) return Response.json({ keys: [{ ...jwk, kid: "guest-key" }] });
    if (url.includes("oauth2.googleapis.com/token")) return Response.json({ access_token: "local-test-token", expires_in: 3600 });
    if (url.endsWith("/courses/environmental-law")) return Response.json({ fields: { status: { stringValue: "published" } } });
    if (url.endsWith("/coursePricing/introductory-2026")) return Response.json({
      updateTime: "2026-09-24T00:00:00Z", fields: { reserved: { integerValue: String(reserved) } },
    });
    if (url.endsWith("documents:runQuery")) return Response.json(
      body.structuredQuery.where.fieldFilter.value.stringValue === purchase?.fields.email.stringValue
        ? [{ document: purchase }] : [],
    );
    if (url.endsWith("documents:commit")) {
      if (body.writes[0].update.name.includes("/coursePricing/")) {
        reserved += 1;
      } else if (body.writes[0].update.name.includes("studentEnrollments")) {
        assert.equal(purchase.fields.status.stringValue, "paid");
        claimedEnrollment = body.writes[0].update;
        Object.assign(purchase.fields, body.writes[1].update.fields);
        purchase.updateTime = "v3";
      }
      return Response.json({ writeResults: [] });
    }
    if (url.endsWith("/v1/orders") && options.method === "POST") {
      order = { id: "order_guestabcdefgh", status: "created", ...body };
      return Response.json(order);
    }
    if (url.endsWith("/v1/orders/order_guestabcdefgh")) return Response.json(order);
    if (url.endsWith("/v1/orders/order_guestabcdefgh/payments")) return Response.json({ items: [{
      id: "pay_guestabcdefgh", status: "captured", order_id: order.id,
      amount: order.amount, currency: "INR",
    }] });
    if (url.includes("/coursePricingReservations/order_guestabcdefgh")) return Response.json({ fields: {
      studentId: { stringValue: `guest_${order.notes.guestId}` },
    } });
    if (url.includes("/studentEnrollments/")) return claimedEnrollment
      ? Response.json(claimedEnrollment) : new Response(null, { status: 404 });
    if (url.includes("/guestPurchases/")) {
      if (options.method === "PATCH") {
        if (url.includes("currentDocument.exists=false")) {
          purchase = { name: body.name, fields: body.fields, updateTime: "v1" };
        } else {
          Object.assign(purchase.fields, body.fields);
          purchase.updateTime = "v2";
        }
        return Response.json(purchase);
      }
      return purchase ? Response.json(purchase) : new Response(null, { status: 404 });
    }
    throw new Error(`Unexpected request: ${url}`);
  };
  try {
    const request = (path, data, token) => worker.fetch(new Request(`https://www.sanhita360.com${path}`, {
      method: "POST", headers: { origin: "https://www.sanhita360.com",
        ...(token ? { authorization: `Bearer ${token}` } : {}), "content-type": "application/json" },
      body: JSON.stringify(data),
    }), env);
    const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
    const userToken = async (sub, email = "buyer@example.com", emailVerified = true) => {
      const now = Math.floor(Date.now() / 1000);
      const unsigned = `${encode({ alg: "RS256", kid: "guest-key" })}.${encode({
        aud: "nagariksuraksha-60adb", iss: "https://securetoken.google.com/nagariksuraksha-60adb",
        sub, email, email_verified: emailVerified, iat: now, exp: now + 3600,
      })}`;
      const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", keys.privateKey,
        new TextEncoder().encode(unsigned));
      return `${unsigned}.${Buffer.from(signature).toString("base64url")}`;
    };
    const created = await request("/api/guest/create-order", {
      courseId: "environmental-law", email: "buyer@example.com", name: "Buyer",
    });
    assert.equal(created.status, 200);
    const { purchaseCode, amount } = await created.json();
    assert.equal(amount, 9900);
    assert.match(purchaseCode, /^[a-f0-9]{64}$/);
    const retry = await request("/api/guest/create-order", {
      courseId: "environmental-law", email: "buyer@example.com", name: "Buyer", purchaseCode,
    });
    assert.equal((await retry.json()).purchaseCode, purchaseCode);
    assert.equal(reserved, 1);
    assert.equal((await request("/api/guest/verify-payment", { purchaseCode })).status, 409);
    assert.equal((await request("/api/guest/claim", { purchaseCode }, await userToken("buyer"))).status, 409);
    order.status = "paid";
    const verified = await request("/api/guest/verify-payment", { purchaseCode });
    assert.equal(verified.status, 200);
    assert.equal((await verified.json()).status, "paid");
    assert.equal((await request("/api/guest/claim-email", {},
      await userToken("unverified", "buyer@example.com", false))).status, 403);
    assert.deepEqual((await (await request("/api/guest/claim-email", {},
      await userToken("other", "other@example.com"))).json()).claimed, []);
    assert.deepEqual((await (await request("/api/guest/claim-email", {},
      await userToken("buyer"))).json()).claimed, ["environmental-law"]);
    assert.equal((await request("/api/guest/claim", { purchaseCode }, await userToken("buyer"))).status, 200);
    assert.equal(claimedEnrollment.fields.certification.mapValue.fields.payment.mapValue.fields.status.stringValue, "paid");
    assert.equal((await request("/api/guest/claim", { purchaseCode }, await userToken("buyer"))).status, 200);
    assert.equal((await request("/api/guest/claim", { purchaseCode }, await userToken("other"))).status, 409);
  } finally { globalThis.fetch = originalFetch; }
});
