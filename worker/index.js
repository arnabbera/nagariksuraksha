const json = (body, init = {}) =>
  Response.json(body, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...init.headers,
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      if (request.method !== "GET") {
        return json({ error: "Method not allowed" }, { status: 405 });
      }

      return json({
        ok: true,
        service: "nagariksuraksha",
        runtime: "cloudflare-worker",
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "API endpoint not found" }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};
