import { createBaseModel } from "./BaseModel";

export const createChapterModel = ({
  id = null,

  courseId = "",

  title = "",
  slug = "",
  shortDescription = "",
  notes = "",

  chapterNumber = 1,
  displayOrder = 1,

  // =========================================================
  // VIDEO
  // =========================================================

  youtubeUrl = "",
  youtubeVideoId = "",
  videoDuration = "",

  // =========================================================
  // PDF / STUDY MATERIAL
  // =========================================================

  pdfUrl = "",
  pdfStoragePath = "",
  pdfPublicId = "",
  pdfFileName = "",
  pdfFileSize = 0,
  pdfContentType = "",
  pdfAssetId = "",

  // =========================================================
  // QUIZ
  // =========================================================

  quizId = "",
  quizRequired = true,
  passingPercentage = 80,
  maximumAttempts = 3,

  // =========================================================
  // STATUS
  // =========================================================

  published = false,
  previewAvailable = false,

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
  // CHAPTER
  // =========================================================

  title,
  slug,
  shortDescription,
  notes,

  chapterNumber:
    Number(
      chapterNumber || 1,
    ),

  displayOrder:
    Number(
      displayOrder || 1,
    ),

  // =========================================================
  // VIDEO
  // =========================================================

  video: {
    youtubeUrl:
      youtubeUrl || "",

    youtubeVideoId:
      youtubeVideoId || "",

    duration:
      videoDuration || "",
  },

  // =========================================================
  // PDF / STUDY MATERIAL
  // =========================================================
  //
  // PDF is uploaded from Admin Portal to Cloudinary.
  //
  // Students will read the PDF inside Chapter Learning.
  //
  // Download permission will NOT be controlled here.
  // It will be determined from the student's certification
  // entitlement.
  // =========================================================

  pdf: {
    url:
      pdfUrl || "",

    storagePath:
      pdfStoragePath || "",

    publicId:
      pdfPublicId || "",

    fileName:
      pdfFileName || "",

    fileSize:
      Number(
        pdfFileSize || 0,
      ),

    contentType:
      pdfContentType || "",

    assetId:
      pdfAssetId || "",
  },

  // =========================================================
  // QUIZ
  // =========================================================

  quiz: {
    quizId:
      quizId || "",

    required:
      Boolean(
        quizRequired,
      ),

    passingPercentage:
      Number(
        passingPercentage ||
          80,
      ),

    maximumAttempts:
      Number(
        maximumAttempts ||
          3,
      ),
  },

  // =========================================================
  // ACCESS
  // =========================================================

  published:
    Boolean(
      published,
    ),

  previewAvailable:
    Boolean(
      previewAvailable,
    ),

  // =========================================================
  // SEARCH
  // =========================================================

  searchKeywords: [
    title,
    slug,
    shortDescription,
  ]
    .filter(Boolean)
    .flatMap((value) =>
      String(value)
        .toLowerCase()
        .split(/\s+/),
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