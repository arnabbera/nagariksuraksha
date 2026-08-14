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

export const createLawNoteModel = ({
  id = null,

  title = "",
  slug = "",

  subject = "",
  courseId = "",
  courseTitle = "",

  shortDescription = "",

  overview = "",
  detailedNotes = "",

  learningObjectives = [],
  keyPoints = [],
  statutoryProvisions = [],
  importantCases = [],

  examFocus = "",
  revisionNotes = "",

  // =========================================================
  // PDF STUDY MATERIAL
  // =========================================================

  pdfAvailable = false,

  pdfUrl = "",
  pdfFileName = "",
  pdfStoragePath = "",
  pdfMimeType = "application/pdf",
  pdfSize = 0,

  pdfTitle = "",
  pdfDescription = "",

  pdfUploadedAt = null,
  pdfUploadedBy = "",

  featured = false,
  displayOrder = 0,

  status = "draft",

  seo = {},

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
  // BASIC INFORMATION
  // =========================================================

  title:
    title?.trim?.() || "",

  slug:
    slug?.trim?.() || "",

  subject:
    subject?.trim?.() || "",

  courseId:
    courseId || "",

  courseTitle:
    courseTitle?.trim?.() || "",

  shortDescription:
    shortDescription?.trim?.() || "",

  // =========================================================
  // PUBLIC LAW NOTE CONTENT
  // =========================================================

  content: {
    overview:
      overview?.trim?.() || "",

    detailedNotes:
      detailedNotes?.trim?.() || "",

    learningObjectives:
      normalizeArray(
        learningObjectives,
      ),

    keyPoints:
      normalizeArray(
        keyPoints,
      ),

    statutoryProvisions:
      normalizeArray(
        statutoryProvisions,
      ),

    importantCases:
      normalizeArray(
        importantCases,
      ),

    examFocus:
      examFocus?.trim?.() || "",

    revisionNotes:
      revisionNotes?.trim?.() || "",
  },

  // =========================================================
  // PDF STUDY MATERIAL
  // =========================================================
  //
  // The PDF is optional.
  //
  // Actual upload will be handled separately by the
  // Law Note admin form / storage service.
  // =========================================================

  pdf: {
    available:
      Boolean(
        pdfAvailable ||
          pdfUrl,
      ),

    url:
      pdfUrl?.trim?.() || "",

    fileName:
      pdfFileName?.trim?.() || "",

    storagePath:
      pdfStoragePath?.trim?.() || "",

    mimeType:
      pdfMimeType?.trim?.() ||
      "application/pdf",

    size:
      Number(
        pdfSize || 0,
      ),

    title:
      pdfTitle?.trim?.() || "",

    description:
      pdfDescription?.trim?.() || "",

    uploadedAt:
      pdfUploadedAt || null,

    uploadedBy:
      pdfUploadedBy?.trim?.() || "",
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
          seo?.sitemap?.priority ??
            0.8,
        ),

      changeFrequency:
        seo?.sitemap
          ?.changeFrequency ||
        "monthly",
    },
  },

  // =========================================================
  // SEARCH
  // =========================================================

  searchKeywords:
    normalizeArray([
      title,
      subject,
      seo?.focusKeyword,
      ...(
        seo?.secondaryKeywords ||
        []
      ),
    ]),
});

export default createLawNoteModel;