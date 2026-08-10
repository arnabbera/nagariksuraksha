import { createBaseModel } from "./BaseModel";

export const createCourseBookModel = ({
  id = null,

  courseId = "",

  title = "",
  author = "",
  publisher = "",
  edition = "",
  publicationYear = "",
  isbn = "",

  description = "",

  coverImageUrl = "",
  referenceUrl = "",

  displayOrder = 1,

  recommended = true,
  published = true,

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => ({
  ...createBaseModel({
    id,

    status:
      published
        ? "published"
        : "draft",

    createdBy,
    updatedBy,

    deleted,
    deletedAt,
    deletedBy,

    version,
  }),

  courseId,

  title,
  author,
  publisher,
  edition,
  publicationYear,
  isbn,

  description,

  coverImageUrl,
  referenceUrl,

  displayOrder:
    Number(
      displayOrder || 1,
    ),

  recommended:
    Boolean(
      recommended,
    ),

  published:
    Boolean(
      published,
    ),

  searchKeywords: [
    title,
    author,
    publisher,
    isbn,
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
        items.indexOf(value) ===
          index,
    ),
});

export default createCourseBookModel;