import { createBaseModel } from "./BaseModel";

export const RESOURCE_TYPES = Object.freeze({
  VIDEO: "video",
  PDF: "pdf",
  NOTE: "note",
  LINK: "link",
  DOWNLOAD: "download",
  ASSIGNMENT: "assignment",
});

export const createChapterResourceModel = ({
  id = null,

  courseId = "",
  chapterId = "",

  title = "",
  description = "",

  type = RESOURCE_TYPES.NOTE,

  displayOrder = 1,

  url = "",
  storagePath = "",

  youtubeUrl = "",
  youtubeVideoId = "",
  duration = "",

  content = "",

  downloadable = false,
  required = true,

  previewAvailable = false,
  published = false,

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
  chapterId,

  title,
  description,

  type,

  displayOrder: Number(displayOrder || 1),

  file: {
    url,
    storagePath,
    downloadable: Boolean(downloadable),
  },

  video: {
    youtubeUrl,
    youtubeVideoId,
    duration,
  },

  content,

  required: Boolean(required),
  previewAvailable: Boolean(previewAvailable),
  published: Boolean(published),

  searchKeywords: [
    title,
    description,
    type,
  ]
    .filter(Boolean)
    .flatMap((value) =>
      String(value).toLowerCase().split(/\s+/),
    )
    .filter(
      (value, index, values) =>
        value && values.indexOf(value) === index,
    ),
});