import { createBaseModel } from "./BaseModel";
import {
  COURSE_STATUS,
  SEO_SCHEMA_TYPES,
} from "../constants/enums";

export const createCourseModel = ({
  id = null,

  title = "",
  slug = "",
  shortDescription = "",
  description = "",

  duration = "",
  courseType = "subject-course",
  accessType = "free-learning",

  certificationAvailable = false,
  certificationFee = 0,
  currency = "INR",

  featured = false,
  order = 0,

  imageUrl = "",
  thumbnailUrl = "",
  desktopImageUrl = "",
  mobileImageUrl = "",

  totalSemesters = 0,
  totalSubjects = 0,
  totalChapters = 0,

  seo = {},

  status = COURSE_STATUS.DRAFT,

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

  title,
  slug,
  shortDescription,
  description,

  duration,
  courseType,
  accessType,

  certification: {
    available: certificationAvailable,
    fee: certificationFee,
    currency,
  },

  featured,
  order,

  media: {
    imageUrl,
    thumbnailUrl,
    desktopImageUrl,
    mobileImageUrl,
  },

  totals: {
    semesters: totalSemesters,
    subjects: totalSubjects,
    chapters: totalChapters,
  },

  seo: {
    title: seo.title || "",
    description: seo.description || "",
    focusKeyword: seo.focusKeyword || "",
    secondaryKeywords: seo.secondaryKeywords || [],
    canonicalUrl: seo.canonicalUrl || "",
    ogTitle: seo.ogTitle || "",
    ogDescription: seo.ogDescription || "",
    ogImageUrl: seo.ogImageUrl || "",
    schemaType: seo.schemaType || SEO_SCHEMA_TYPES.COURSE,
    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    },
    sitemap: {
      include: seo.sitemap?.include ?? true,
      priority: seo.sitemap?.priority ?? 0.7,
      changeFrequency:
        seo.sitemap?.changeFrequency || "monthly",
    },
  },

  searchKeywords: [],
});