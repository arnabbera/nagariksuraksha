import {
  createBaseModel,
} from "./BaseModel";

export const createPublicLawTopicModel = ({
  id = null,

  courseId = "",

  title = "",
  slug = "",

  shortDescription = "",

  overview = "",

  detailedContent = "",

  learningObjectives = [],

  keyPoints = [],

  statutoryProvisions = [],

  importantCases = [],

  examFocus = "",

  revisionNotes = "",

  relatedTopics = [],

  displayOrder = 1,

  featured = false,

  published = false,

  publishedAt = null,

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
  // COURSE
  // =========================================================

  courseId,

  // =========================================================
  // PUBLIC TOPIC
  // =========================================================

  title,

  slug,

  shortDescription,

  overview,

  detailedContent,

  learningObjectives:
    Array.isArray(
      learningObjectives,
    )
      ? learningObjectives
      : [],

  keyPoints:
    Array.isArray(
      keyPoints,
    )
      ? keyPoints
      : [],

  statutoryProvisions:
    Array.isArray(
      statutoryProvisions,
    )
      ? statutoryProvisions
      : [],

  importantCases:
    Array.isArray(
      importantCases,
    )
      ? importantCases
      : [],

  examFocus,

  revisionNotes,

  relatedTopics:
    Array.isArray(
      relatedTopics,
    )
      ? relatedTopics
      : [],

  displayOrder:
    Number(
      displayOrder || 1,
    ),

  featured:
    Boolean(
      featured,
    ),

  published:
    Boolean(
      published,
    ),

  publishedAt,

  // =========================================================
  // SEO
  // =========================================================

  seo: {
    title:
      seo.title || "",

    description:
      seo.description || "",

    focusKeyword:
      seo.focusKeyword || "",

    secondaryKeywords:
      Array.isArray(
        seo.secondaryKeywords,
      )
        ? seo.secondaryKeywords
        : [],

    canonicalUrl:
      seo.canonicalUrl || "",

    ogTitle:
      seo.ogTitle || "",

    ogDescription:
      seo.ogDescription || "",

    ogImageUrl:
      seo.ogImageUrl || "",

    robots: {
      index:
        seo.robots?.index ??
        true,

      follow:
        seo.robots?.follow ??
        true,
    },

    sitemap: {
      include:
        seo.sitemap?.include ??
        true,

      priority:
        Number(
          seo.sitemap?.priority ??
            0.7,
        ),

      changeFrequency:
        seo.sitemap
          ?.changeFrequency ||
        "monthly",
    },
  },

  // =========================================================
  // SEARCH
  // =========================================================

  searchKeywords: [
    title,

    slug,

    shortDescription,

    seo.focusKeyword,

    ...(Array.isArray(
      seo.secondaryKeywords,
    )
      ? seo.secondaryKeywords
      : []),
  ]
    .filter(Boolean)
    .flatMap(
      (
        value,
      ) =>
        String(value)
          .toLowerCase()
          .split(
            /\s+/,
          ),
    )
    .filter(
      (
        value,
        index,
        items,
      ) =>
        value &&
        items.indexOf(
          value,
        ) === index,
    ),
});

export default createPublicLawTopicModel;