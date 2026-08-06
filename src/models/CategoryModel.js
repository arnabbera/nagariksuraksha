import { createBaseModel } from "./BaseModel";

export const createCategoryModel = ({
  id = null,

  name = "",
  slug = "",
  description = "",

  contentTypes = [],

  seoTitle = "",
  seoDescription = "",
  seoKeywords = [],

  displayOrder = 0,

  status = "active",

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

  name,
  slug,
  description,

  contentTypes,

  seo: {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
  },

  displayOrder,

  searchKeywords: [
    name,
    slug,
    ...seoKeywords,
  ]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase()),
});