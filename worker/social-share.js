const DEFAULT_SITE_URL = "https://www.nagariksuraksha.com";

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

const absoluteUrl = (value, siteUrl) => {
  if (!value) {
    return "";
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
};

const readFirestoreValue = (value) => {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  if ("stringValue" in value) {
    return value.stringValue;
  }

  if ("booleanValue" in value) {
    return value.booleanValue;
  }

  if ("integerValue" in value) {
    return Number(value.integerValue);
  }

  if ("doubleValue" in value) {
    return value.doubleValue;
  }

  if ("timestampValue" in value) {
    return value.timestampValue;
  }

  if ("nullValue" in value) {
    return null;
  }

  if (value.mapValue?.fields) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields).map(([key, nestedValue]) => [
        key,
        readFirestoreValue(nestedValue),
      ]),
    );
  }

  if (Array.isArray(value.arrayValue?.values)) {
    return value.arrayValue.values.map(readFirestoreValue);
  }

  return undefined;
};

const deserializeDocument = (document) =>
  Object.fromEntries(
    Object.entries(document?.fields || {}).map(([key, value]) => [
      key,
      readFirestoreValue(value),
    ]),
  );

const getPublishedPost = async (slug, env) => {
  const projectId = env.FIREBASE_PROJECT_ID;
  const apiKey = env.FIREBASE_API_KEY;

  if (!projectId || !apiKey) {
    throw new Error("Cloudflare Worker Firebase configuration is incomplete.");
  }

  const endpoint =
    `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
      projectId,
    )}/databases/(default)/documents:runQuery?key=${encodeURIComponent(apiKey)}`;

  const firestoreResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      structuredQuery: {
        from: [
          {
            collectionId: "posts",
          },
        ],
        where: {
          fieldFilter: {
            field: {
              fieldPath: "slug",
            },
            op: "EQUAL",
            value: {
              stringValue: slug,
            },
          },
        },
        limit: 1,
      },
    }),
  });

  if (!firestoreResponse.ok) {
    const details = await firestoreResponse.text();
    throw new Error(
      `Firestore request failed (${firestoreResponse.status}): ${details}`,
    );
  }

  const results = await firestoreResponse.json();
  const document = results.find((result) => result.document)?.document;

  if (!document) {
    return null;
  }

  const post = deserializeDocument(document);

  if (post.status !== "published" || post.deleted === true) {
    return null;
  }

  return post;
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

export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const siteUrl = String(env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
    const fallbackImage = `${siteUrl}/favicon.svg`;
    const slug = normalizeSlug(requestUrl.searchParams.get("slug"));

    const headers = {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=300, s-maxage=900",
      "x-content-type-options": "nosniff",
    };

    if (!slug) {
      return new Response(
        renderPage({
          title: "Post Not Found | NagarikSuraksha",
          description: "The requested NagarikSuraksha post could not be found.",
          image: fallbackImage,
          postUrl: `${siteUrl}/posts`,
          notFound: true,
        }),
        {
          status: 400,
          headers,
        },
      );
    }

    try {
      const post = await getPublishedPost(slug, env);
      const defaultPostUrl = `${siteUrl}/posts/${encodeURIComponent(slug)}`;

      if (!post) {
        return new Response(
          renderPage({
            title: "Post Not Found | NagarikSuraksha",
            description: "The requested NagarikSuraksha post could not be found.",
            image: fallbackImage,
            postUrl: defaultPostUrl,
            notFound: true,
          }),
          {
            status: 404,
            headers,
          },
        );
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
          siteUrl,
        ) || fallbackImage;
      const canonicalUrl =
        absoluteUrl(post.seo?.canonicalUrl, siteUrl) || defaultPostUrl;

      return new Response(
        renderPage({
          title,
          description,
          image,
          postUrl: canonicalUrl,
        }),
        {
          status: 200,
          headers,
        },
      );
    } catch (error) {
      console.error("Unable to render social share page:", error);

      return new Response(
        renderPage({
          title: "NagarikSuraksha",
          description: "Legal learning, law notes and legal awareness.",
          image: fallbackImage,
          postUrl: siteUrl,
          notFound: true,
        }),
        {
          status: 500,
          headers,
        },
      );
    }
  },
};
