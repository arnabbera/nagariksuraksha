import { createBaseModel } from "./BaseModel";

export const createLawNotePdfAssetModel = ({
  id = null,

  lawNoteId = "",
  lawNoteSlug = "",

  courseId = "",
  courseTitle = "",

  title = "",
  description = "",

  downloadURL = "",
  secureUrl = "",

  storagePath = "",
  publicId = "",

  fileName = "",
  originalFileName = "",

  contentType = "application/pdf",
  size = 0,

  resourceType = "",
  format = "",

  assetId = "",
  version = null,

  uploadedAt = null,
  uploadedBy = "",

  active = true,

  status = "active",

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  versionNumber = 1,
} = {}) => ({
  ...createBaseModel({
    id,
    status,
    createdBy,
    updatedBy,
    deleted,
    deletedAt,
    deletedBy,
    version: versionNumber,
  }),

  // =========================================================
  // LAW NOTE
  // =========================================================

  lawNoteId:
    lawNoteId || "",

  lawNoteSlug:
    lawNoteSlug?.trim?.() || "",

  // =========================================================
  // COURSE
  // =========================================================

  courseId:
    courseId || "",

  courseTitle:
    courseTitle?.trim?.() || "",

  // =========================================================
  // PDF INFORMATION
  // =========================================================

  title:
    title?.trim?.() || "",

  description:
    description?.trim?.() || "",

  downloadURL:
    downloadURL?.trim?.() || "",

  secureUrl:
    secureUrl?.trim?.() || "",

  storagePath:
    storagePath?.trim?.() || "",

  publicId:
    publicId?.trim?.() || "",

  fileName:
    fileName?.trim?.() || "",

  originalFileName:
    originalFileName?.trim?.() || "",

  contentType:
    contentType?.trim?.() ||
    "application/pdf",

  size:
    Number(size || 0),

  resourceType:
    resourceType?.trim?.() || "",

  format:
    format?.trim?.() || "",

  assetId:
    assetId?.trim?.() || "",

  version:
    version ?? null,

  // =========================================================
  // UPLOAD
  // =========================================================

  uploadedAt:
    uploadedAt || null,

  uploadedBy:
    uploadedBy?.trim?.() || "",

  // =========================================================
  // ACCESS
  // =========================================================

  active:
    Boolean(active),

  // =========================================================
  // SEARCH
  // =========================================================

  searchKeywords: [
    lawNoteSlug,
    courseTitle,
    title,
    originalFileName,
  ]
    .filter(Boolean)
    .flatMap((value) =>
      String(value)
        .toLowerCase()
        .split(/\s+/),
    )
    .filter(
      (value, index, items) =>
        value &&
        items.indexOf(value) === index,
    ),
});

export default createLawNotePdfAssetModel;