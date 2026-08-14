import { createBaseModel } from "./BaseModel";

const normalizeArray = (value) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

export const createPostModel = ({
  id = null,

  title = "",
  slug = "",

  excerpt = "",
  content = "",

  category = "",
  tags = [],

  // =========================================================
  // IMAGES
  // =========================================================

  desktopImageUrl = "",
  desktopImagePublicId = "",
  desktopImageStoragePath = "",
  desktopImageFileName = "",
  desktopImageSize = 0,

  mobileImageUrl = "",
  mobileImagePublicId = "",
  mobileImageStoragePath = "",
  mobileImageFileName = "",
  mobileImageSize = 0,

  // =========================================================
  // DISPLAY / PUBLICATION
  // =========================================================

  featured = false,
  displayOrder = 0,

  publishedAt = null,

  // =========================================================
  // SEO
  // =========================================================

  seo = {},

  status = "draft",

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => ({
  ...createBaseModel({
    id,
    status,
    createdBy,
    updatedBy,
    deleted,
    deletedAt,
    deletedBy,
    version,
  }),

  // =========================================================
  // POST CONTENT
  // =========================================================

  title:
    title?.trim?.() || "",

  slug:
    slug?.trim?.() || "",

  excerpt:
    excerpt?.trim?.() || "",

  content:
    content?.trim?.() || "",

  category:
    category?.trim?.() || "",

  tags:
    normalizeArray(tags),

  // =========================================================
  // MEDIA
  // =========================================================

  media: {
    desktop: {
      url:
        desktopImageUrl?.trim?.() || "",

      publicId:
        desktopImagePublicId?.trim?.() || "",

      storagePath:
        desktopImageStoragePath?.trim?.() || "",

      fileName:
        desktopImageFileName?.trim?.() || "",

      size:
        Number(
          desktopImageSize || 0,
        ),

      ratio:
        "16:9",
    },

    mobile: {
      url:
        mobileImageUrl?.trim?.() || "",

      publicId:
        mobileImagePublicId?.trim?.() || "",

      storagePath:
        mobileImageStoragePath?.trim?.() || "",

      fileName:
        mobileImageFileName?.trim?.() || "",

      size:
        Number(
          mobileImageSize || 0,
        ),

      ratio:
        "9:16",
    },
  },

  // =========================================================
  // DISPLAY
  // =========================================================

  featured:
    Boolean(featured),

  displayOrder:
    Number(
      displayOrder || 0,
    ),

  publishedAt:
    publishedAt || null,

  // =========================================================
  // SEO
  // =========================================================

  seo: {
    title:
      seo?.title?.trim?.() || "",

    description:
      seo?.description?.trim?.() || "",

    focusKeyword:
      seo?.focusKeyword?.trim?.() || "",

    secondaryKeywords:
      normalizeArray(
        seo?.secondaryKeywords,
      ),

    canonicalUrl:
      seo?.canonicalUrl?.trim?.() || "",

    ogTitle:
      seo?.ogTitle?.trim?.() || "",

    ogDescription:
      seo?.ogDescription?.trim?.() || "",

    ogImageUrl:
      seo?.ogImageUrl?.trim?.() || "",

    robots: {
      index:
        seo?.robots?.index ?? true,

      follow:
        seo?.robots?.follow ?? true,
    },

    sitemap: {
      include:
        seo?.sitemap?.include ?? true,

      priority:
        Number(
          seo?.sitemap?.priority ?? 0.7,
        ),

      changeFrequency:
        seo?.sitemap?.changeFrequency ||
        "weekly",
    },
  },

  // =========================================================
  // SEARCH
  // =========================================================

  searchKeywords:
    normalizeArray([
      title,
      category,
      seo?.focusKeyword,
      ...(seo?.secondaryKeywords || []),
      ...(tags || []),
    ]),
});

export default createPostModel;