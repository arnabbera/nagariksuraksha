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

  youtubeUrl = "",
  youtubeVideoId = "",
  videoDuration = "",

  pdfUrl = "",
  pdfStoragePath = "",
  downloadable = false,

  quizId = "",
  quizRequired = true,
  passingPercentage = 80,
  maximumAttempts = 3,

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

  courseId,

  title,
  slug,
  shortDescription,
  notes,

  chapterNumber: Number(chapterNumber || 1),
  displayOrder: Number(displayOrder || 1),

  video: {
    youtubeUrl,
    youtubeVideoId,
    duration: videoDuration,
  },

  pdf: {
    url: pdfUrl,
    storagePath: pdfStoragePath,
    downloadable: Boolean(downloadable),
  },

  quiz: {
    quizId,
    required: Boolean(quizRequired),
    passingPercentage: Number(
      passingPercentage || 80,
    ),
    maximumAttempts: Number(
      maximumAttempts || 3,
    ),
  },

  published: Boolean(published),
  previewAvailable: Boolean(previewAvailable),

  searchKeywords: [
    title,
    slug,
    shortDescription,
  ]
    .filter(Boolean)
    .flatMap((value) =>
      String(value).toLowerCase().split(/\s+/),
    )
    .filter(
      (value, index, items) =>
        value && items.indexOf(value) === index,
    ),
});