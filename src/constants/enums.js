/**
 * ==========================================================
 * NagarikSuraksha
 * Application Enums
 * ==========================================================
 */

export const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  STUDENT: "student",
  GUEST: "guest",
});

export const USER_STATUS = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
  BLOCKED: "blocked",
  DELETED: "deleted",
});

export const CONTENT_TYPES = Object.freeze({
  POST: "post",
  ARTICLE: "article",
  VIDEO: "video",
  SERVICE: "service",
  FAQ: "faq",
  COURSE: "course",
  JUDGEMENT: "judgement",
  BARE_ACT: "bare-act",
  TEMPLATE: "template",
  LEGAL_UPDATE: "legal-update",
});

export const CONTENT_STATUS = Object.freeze({
  DRAFT: "draft",
  REVIEW: "review",
  SCHEDULED: "scheduled",
  PUBLISHED: "published",
  ARCHIVED: "archived",
});

export const COMMENT_STATUS = Object.freeze({
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  SPAM: "spam",
});

export const COURSE_STATUS = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
});

export const QUIZ_STATUS = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  CLOSED: "closed",
});

export const CERTIFICATE_STATUS = Object.freeze({
  PENDING: "pending",
  ISSUED: "issued",
  REVOKED: "revoked",
});

export const PAYMENT_STATUS = Object.freeze({
  PENDING: "pending",
  PAID: "paid",
  FAILED: "failed",
  REFUNDED: "refunded",
});

export const SUBSCRIPTION_STATUS = Object.freeze({
  INACTIVE: "inactive",
  ACTIVE: "active",
  EXPIRED: "expired",
  CANCELLED: "cancelled",
});

export const MEDIA_TYPES = Object.freeze({
  IMAGE: "image",
  VIDEO: "video",
  PDF: "pdf",
  DOCUMENT: "document",
  AUDIO: "audio",
});

export const IMAGE_PURPOSE = Object.freeze({
  THUMBNAIL: "thumbnail",
  DESKTOP_BANNER: "desktop-banner",
  MOBILE_BANNER: "mobile-banner",
  GALLERY: "gallery",
  PROFILE: "profile",
});

export const LOGIN_PROVIDER = Object.freeze({
  GOOGLE: "google",
});

export const SEO_SCHEMA_TYPES = Object.freeze({
  WEBSITE: "WebSite",
  ARTICLE: "Article",
  COURSE: "Course",
  FAQ: "FAQPage",
  LEGAL_SERVICE: "LegalService",
  ORGANIZATION: "Organization",
  PERSON: "Person",
  VIDEO: "VideoObject",
});

export const NOTIFICATION_CHANNELS = Object.freeze({
  IN_APP: "inApp",
  EMAIL: "email",
  SMS: "sms",
  WHATSAPP: "whatsapp",
});

export const NOTIFICATION_AUDIENCE = Object.freeze({
  ADMIN: "admin",
  STUDENT: "student",
  ALL_STUDENTS: "all-students",
  GUEST: "guest",
});

export const DATABASE_STATUS = Object.freeze({
  CREATED: "created",
  SKIPPED: "skipped",
  FAILED: "failed",
});

export const ACTIVITY_ACTIONS = Object.freeze({
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
  LOGIN: "login",
  LOGOUT: "logout",
  APPROVE: "approve",
  REJECT: "reject",
  PUBLISH: "publish",
});

export const ENROLLMENT_STATUS = Object.freeze({
  NEW: "new",
  ENROLLED: "enrolled",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
});

export const YES_NO = Object.freeze({
  YES: true,
  NO: false,
});