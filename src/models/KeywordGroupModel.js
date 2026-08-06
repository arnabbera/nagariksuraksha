import { createBaseModel } from "./BaseModel";
import { SEO_SCHEMA_TYPES } from "../constants/enums";

export const createKeywordGroupModel = ({
  id = null,

  name = "",

  primaryKeyword = "",

  secondaryKeywords = [],

  suggestedTags = [],

  suggestedFaqs = [],

  categoryId = "",

  location = "",

  relatedContentIds = [],

  relatedServiceIds = [],

  recommendedSchemaType = SEO_SCHEMA_TYPES.LEGAL_SERVICE,

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

  primaryKeyword,

  secondaryKeywords,

  suggestedTags,

  suggestedFaqs,

  categoryId,

  location,

  relatedContentIds,

  relatedServiceIds,

  recommendedSchemaType,

  displayOrder,

  searchKeywords: [
    primaryKeyword,
    ...secondaryKeywords,
    ...suggestedTags,
  ]
    .filter(Boolean)
    .map((keyword) => keyword.toLowerCase()),
});