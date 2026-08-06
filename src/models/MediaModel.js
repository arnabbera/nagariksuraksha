import { createBaseModel } from "./BaseModel";
import {
  IMAGE_PURPOSE,
  MEDIA_TYPES,
} from "../constants/enums";

export const createMediaModel = ({
  id = null,

  name = "",
  originalName = "",
  fileName = "",

  type = MEDIA_TYPES.IMAGE,
  purpose = IMAGE_PURPOSE.THUMBNAIL,

  url = "",
  storagePath = "",

  contentType = "",
  size = 0,

  width = null,
  height = null,
  ratio = "",

  altText = "",
  caption = "",
  description = "",

  folder = "",
  tags = [],

  linkedContentIds = [],

  uploadedBy = "system",

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
  originalName,
  fileName,

  type,
  purpose,

  file: {
    url,
    storagePath,
    contentType,
    size,
  },

  dimensions: {
    width,
    height,
    ratio,
  },

  seo: {
    altText,
    caption,
    description,
  },

  organization: {
    folder,
    tags,
  },

  relations: {
    linkedContentIds,
  },

  uploadedBy,
});