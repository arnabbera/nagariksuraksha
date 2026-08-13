import {
  useEffect,
} from "react";

import {
  SEO_CONFIG,
} from "../../constants/seoConfig";

// =========================================================
// HELPERS
// =========================================================

const createAbsoluteUrl = (
  value = "",
) => {
  if (!value) {
    return SEO_CONFIG.siteUrl;
  }

  if (
    /^https?:\/\//i.test(
      value,
    )
  ) {
    return value;
  }

  const normalized =
    value.startsWith("/")
      ? value
      : `/${value}`;

  return `${SEO_CONFIG.siteUrl}${normalized}`;
};

const setMetaByName = (
  name,
  content,
) => {
  if (!content) {
    return;
  }

  let element =
    document.head.querySelector(
      `meta[name="${name}"]`,
    );

  if (!element) {
    element =
      document.createElement(
        "meta",
      );

    element.setAttribute(
      "name",
      name,
    );

    document.head.appendChild(
      element,
    );
  }

  element.setAttribute(
    "content",
    content,
  );
};

const setMetaByProperty = (
  property,
  content,
) => {
  if (!content) {
    return;
  }

  let element =
    document.head.querySelector(
      `meta[property="${property}"]`,
    );

  if (!element) {
    element =
      document.createElement(
        "meta",
      );

    element.setAttribute(
      "property",
      property,
    );

    document.head.appendChild(
      element,
    );
  }

  element.setAttribute(
    "content",
    content,
  );
};

const setCanonical = (
  url,
) => {
  let element =
    document.head.querySelector(
      'link[rel="canonical"]',
    );

  if (!element) {
    element =
      document.createElement(
        "link",
      );

    element.setAttribute(
      "rel",
      "canonical",
    );

    document.head.appendChild(
      element,
    );
  }

  element.setAttribute(
    "href",
    url,
  );
};

const removeStructuredData = (
  id,
) => {
  const existing =
    document.getElementById(
      id,
    );

  if (existing) {
    existing.remove();
  }
};

const addStructuredData = (
  id,
  data,
) => {
  removeStructuredData(
    id,
  );

  if (!data) {
    return;
  }

  const script =
    document.createElement(
      "script",
    );

  script.id =
    id;

  script.type =
    "application/ld+json";

  script.text =
    JSON.stringify(
      data,
    );

  document.head.appendChild(
    script,
  );
};

// =========================================================
// SEO COMPONENT
// =========================================================

export default function SEO({
  title = "",
  description = "",
  keywords = [],
  canonical = "/",

  image = "",

  type = "website",

  robots =
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  structuredData = null,
}) {
  useEffect(() => {
    // =====================================================
    // TITLE
    // =====================================================

    const resolvedTitle =
      title
        ? `${title} | ${SEO_CONFIG.siteName}`
        : SEO_CONFIG.defaultTitle;

    document.title =
      resolvedTitle;

    // =====================================================
    // DESCRIPTION
    // =====================================================

    const resolvedDescription =
      description ||
      SEO_CONFIG.defaultDescription;

    setMetaByName(
      "description",
      resolvedDescription,
    );

    // =====================================================
    // KEYWORDS
    // =====================================================

    const resolvedKeywords =
      (
        Array.isArray(
          keywords,
        ) &&
        keywords.length >
          0
          ? keywords
          : SEO_CONFIG.defaultKeywords
      )
        .filter(Boolean)
        .join(", ");

    setMetaByName(
      "keywords",
      resolvedKeywords,
    );

    // =====================================================
    // ROBOTS
    // =====================================================

    setMetaByName(
      "robots",
      robots,
    );

    setMetaByName(
      "googlebot",
      robots,
    );

    // =====================================================
    // CANONICAL
    // =====================================================

    const canonicalUrl =
      createAbsoluteUrl(
        canonical,
      );

    setCanonical(
      canonicalUrl,
    );

    // =====================================================
    // OPEN GRAPH
    // =====================================================

    setMetaByProperty(
      "og:type",
      type,
    );

    setMetaByProperty(
      "og:site_name",
      SEO_CONFIG.siteName,
    );

    setMetaByProperty(
      "og:title",
      resolvedTitle,
    );

    setMetaByProperty(
      "og:description",
      resolvedDescription,
    );

    setMetaByProperty(
      "og:url",
      canonicalUrl,
    );

    setMetaByProperty(
      "og:locale",
      SEO_CONFIG.locale,
    );

    if (image) {
      setMetaByProperty(
        "og:image",
        createAbsoluteUrl(
          image,
        ),
      );
    }

    // =====================================================
    // TWITTER / X
    // =====================================================

    setMetaByName(
      "twitter:card",
      SEO_CONFIG.social
        .twitterCard,
    );

    setMetaByName(
      "twitter:title",
      resolvedTitle,
    );

    setMetaByName(
      "twitter:description",
      resolvedDescription,
    );

    if (image) {
      setMetaByName(
        "twitter:image",
        createAbsoluteUrl(
          image,
        ),
      );
    }

    // =====================================================
    // PAGE STRUCTURED DATA
    // =====================================================

    addStructuredData(
      "ns-page-structured-data",
      structuredData,
    );

    return () => {
      removeStructuredData(
        "ns-page-structured-data",
      );
    };
  }, [
    title,
    description,
    canonical,
    image,
    type,
    robots,
    structuredData,
    keywords,
  ]);

  return null;
}