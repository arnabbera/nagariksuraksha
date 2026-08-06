import { createBaseModel } from "./BaseModel";
import { COMMENT_STATUS } from "../constants/enums";

export const createCommentModel = ({
  id = null,

  contentId = "",
  parentCommentId = null,

  userId = null,
  enrollmentId = null,

  guestName = "",
  guestEmail = "",

  message = "",

  status = COMMENT_STATUS.PENDING,

  adminReplyMessage = "",
  adminReplyBy = null,
  adminReplyAt = null,

  approvedBy = null,
  approvedAt = null,

  rejectedBy = null,
  rejectedAt = null,

  spamReason = "",

  ipHash = "",
  userAgent = "",

  createdBy = "guest",
  updatedBy = "guest",

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

  contentId,
  parentCommentId,

  user: {
    uid: userId,
    enrollmentId,
  },

  guest: {
    name: guestName,
    email: guestEmail,
  },

  message,

  adminReply: {
    message: adminReplyMessage,
    repliedBy: adminReplyBy,
    repliedAt: adminReplyAt,
  },

  moderation: {
    approvedBy,
    approvedAt,
    rejectedBy,
    rejectedAt,
    spamReason,
  },

  security: {
    ipHash,
    userAgent,
  },
});