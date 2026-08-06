export const createBaseModel = ({
  id = null,
  status = "active",
  createdBy = "system",
  updatedBy = "system",
  deleted = false,
  deletedAt = null,
  deletedBy = null,
  version = 1,
} = {}) => ({
  id,
  status,

  createdAt: null,
  updatedAt: null,

  createdBy,
  updatedBy,

  deleted,
  deletedAt,
  deletedBy,

  version,
});