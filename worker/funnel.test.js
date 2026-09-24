import test from "node:test";
import assert from "node:assert/strict";
import worker from "./index.js";

test("course visits write atomic daily counts and deduplicate repeat visits", async () => {
  const keyPair = await crypto.subtle.generateKey(
    { name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
    true, ["sign", "verify"],
  );
  const privateKey = Buffer.from(await crypto.subtle.exportKey("pkcs8", keyPair.privateKey));
  const pem = `-----BEGIN PRIVATE KEY-----\n${privateKey.toString("base64").match(/.{1,64}/g).join("\n")}\n-----END PRIVATE KEY-----`;
  const jwk = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
  const environment = {
    FIREBASE_SERVICE_ACCOUNT_JSON: JSON.stringify({
      client_email: "test@example.iam.gserviceaccount.com",
      private_key: pem,
      project_id: "nagariksuraksha-60adb",
    }),
  };
  const originalFetch = globalThis.fetch;
  const markers = new Set();
  const committed = [];
  globalThis.fetch = async (input, options) => {
    if (String(input).includes("/service_accounts/v1/jwk/")) {
      return Response.json({ keys: [{ ...jwk, kid: "local-key" }] });
    }
    if (String(input).includes("oauth2.googleapis.com/token")) {
      return Response.json({ access_token: "local-test-token", expires_in: 3600 });
    }
    if (String(input).endsWith("documents:commit")) {
      const writes = JSON.parse(options.body).writes;
      const marker = writes[0].update.name;
      if (markers.has(marker)) return Response.json({ error: { status: "ALREADY_EXISTS" } }, { status: 409 });
      markers.add(marker);
      committed.push(writes);
      return Response.json({ writeResults: [] });
    }
    if (String(input).endsWith("documents:runQuery")) {
      return Response.json([{ document: { fields: {
        date: { stringValue: "2026-09-24" },
        visits: { integerValue: "1" },
        courses: { mapValue: { fields: {
          "environmental-law": { mapValue: { fields: { visits: { integerValue: "1" } } } },
        } } },
      } } }]);
    }
    throw new Error(`Unexpected request: ${input}`);
  };
  try {
    const visit = (cookie) => worker.fetch(new Request("https://www.sanhita360.com/api/funnel/event", {
      method: "POST",
      headers: {
        origin: "https://www.sanhita360.com",
        "content-type": "application/json",
        ...(cookie ? { cookie } : {}),
      },
      body: JSON.stringify({ courseId: "environmental-law", event: "course_visit" }),
    }), environment);
    const first = await visit();
    assert.equal(first.status, 200);
    const cookie = first.headers.get("set-cookie").split(";")[0];
    assert.equal((await visit(cookie)).status, 200);
    assert.equal(committed.length, 1);
    assert.deepEqual(committed[0][1].updateMask.fieldPaths, ["date"]);
    assert.deepEqual(committed[0][1].updateTransforms.map((item) => item.fieldPath), [
      "visits", "courses.`environmental-law`.visits",
    ]);
    const denied = await worker.fetch(new Request("https://www.sanhita360.com/api/admin/funnel"), environment);
    assert.equal(denied.status, 401);
    const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
    const signIn = async (emailVerified) => {
      const now = Math.floor(Date.now() / 1000);
      const unsigned = `${encode({ alg: "RS256", kid: "local-key" })}.${encode({
        aud: "nagariksuraksha-60adb", iss: "https://securetoken.google.com/nagariksuraksha-60adb",
        sub: "admin-uid", email: "beraarnab@gmail.com", email_verified: emailVerified,
        iat: now, exp: now + 3600,
      })}`;
      const signature = await crypto.subtle.sign(
        "RSASSA-PKCS1-v1_5", keyPair.privateKey, new TextEncoder().encode(unsigned),
      );
      return `${unsigned}.${Buffer.from(signature).toString("base64url")}`;
    };
    const report = (token) => worker.fetch(new Request("https://www.sanhita360.com/api/admin/funnel", {
      headers: { authorization: `Bearer ${token}` },
    }), environment);
    assert.equal((await report(await signIn(false))).status, 403);
    const authorized = await report(await signIn(true));
    assert.equal(authorized.status, 200);
    assert.equal((await authorized.json()).days[0].courses["environmental-law"].visits, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
