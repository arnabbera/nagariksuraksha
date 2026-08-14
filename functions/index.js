import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v2/https";

initializeApp();

const db = getFirestore();

const SITE_URL = "https://www.nagariksuraksha.com";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

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
