import { createBaseModel } from "./BaseModel";

export const createNotificationModel = ({
  id = null,

  title = "",

  message = "",

  type = "info",

  audience = "student",

  recipientId = null,

  recipientEmail = "",

  link = "",

  icon = "",

  imageUrl = "",

  read = false,

  readAt = null,

  sendEmail = false,

  sendSms = false,

  sendWhatsapp = false,

  sendPush = true,

  expiresAt = null,

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

  title,

  message,

  type,

  audience,

  recipient: {
    uid: recipientId,
    email: recipientEmail,
  },

  action: {
    link,
    icon,
    imageUrl,
  },

  delivery: {
    email: sendEmail,
    sms: sendSms,
    whatsapp: sendWhatsapp,
    push: sendPush,
  },

  read: {
    isRead: read,
    readAt,
  },

  expiresAt,

});