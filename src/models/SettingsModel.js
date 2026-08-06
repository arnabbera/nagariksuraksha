import { createBaseModel } from "./BaseModel";
import { APP_CONFIG } from "../constants/appConfig";

export const createSettingsModel = ({
  id = "general",

  siteName = APP_CONFIG.APP_NAME,
  tagline = "Legal Learning & Consultancy",

  adminEmail = APP_CONFIG.ADMIN_EMAIL,

  contact = {},
  socialLinks = {},
  comments = {},
  registration = {},
  seo = {},
  analytics = {},
  maintenance = {},

  databaseVersion = APP_CONFIG.DATABASE_VERSION,

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

  siteName,
  tagline,
  adminEmail,

  contact: {
    email: contact.email || APP_CONFIG.SUPPORT_EMAIL,
    phone: contact.phone || APP_CONFIG.SUPPORT_PHONE,
    whatsapp:
      contact.whatsapp || APP_CONFIG.SUPPORT_WHATSAPP,
    address:
      contact.address ||
      `${APP_CONFIG.DEFAULT_CITY}, ${APP_CONFIG.DEFAULT_STATE}, ${APP_CONFIG.DEFAULT_COUNTRY}`,
    mapEmbedUrl: contact.mapEmbedUrl || "",
  },

  socialLinks: {
    facebook: socialLinks.facebook || "",
    youtube:
      socialLinks.youtube ||
      APP_CONFIG.YOUTUBE_CHANNEL_URL,
    instagram: socialLinks.instagram || "",
    linkedin: socialLinks.linkedin || "",
    twitter: socialLinks.twitter || "",
  },

  comments: {
    enabled:
      comments.enabled ??
      APP_CONFIG.COMMENTS.GUEST_COMMENTS_ENABLED,
    allowGuestComments:
      comments.allowGuestComments ??
      APP_CONFIG.COMMENTS.GUEST_COMMENTS_ENABLED,
    moderationRequired:
      comments.moderationRequired ??
      APP_CONFIG.COMMENTS.MODERATION_REQUIRED,
    maximumLength:
      comments.maximumLength ||
      APP_CONFIG.COMMENTS.MAX_LENGTH,
  },

  registration: {
    studentRegistrationEnabled:
      registration.studentRegistrationEnabled ?? true,
    automaticEnrollmentId:
      registration.automaticEnrollmentId ?? true,
    enrollmentPrefix:
      registration.enrollmentPrefix ||
      APP_CONFIG.ENROLLMENT_PREFIX,
  },

  seo: {
    defaultTitle:
      seo.defaultTitle ||
      APP_CONFIG.SEO.DEFAULT_TITLE,

    defaultDescription:
      seo.defaultDescription ||
      APP_CONFIG.SEO.DEFAULT_DESCRIPTION,

    defaultKeywords: seo.defaultKeywords || [
      "legal services Kolkata",
      "legal consultancy Kolkata",
      "property registration Kolkata",
      "consumer law",
      "LLB learning",
    ],

    canonicalBaseUrl:
      seo.canonicalBaseUrl ||
      APP_CONFIG.WEBSITE_URL,

    defaultOgImageUrl:
      seo.defaultOgImageUrl || "",

    defaultSchemaType:
      seo.defaultSchemaType ||
      APP_CONFIG.SEO.DEFAULT_SCHEMA_TYPE,

    robots: {
      index:
        seo.robots?.index ??
        APP_CONFIG.SEO.ROBOTS_INDEX,

      follow:
        seo.robots?.follow ??
        APP_CONFIG.SEO.ROBOTS_FOLLOW,
    },
  },

  analytics: {
    googleAnalyticsEnabled:
      analytics.googleAnalyticsEnabled ?? true,
    googleAnalyticsId:
      analytics.googleAnalyticsId || "",
    searchConsoleEnabled:
      analytics.searchConsoleEnabled ?? false,
  },

  maintenance: {
    enabled: maintenance.enabled ?? false,
    message:
      maintenance.message ||
      "NagarikSuraksha is temporarily under maintenance.",
  },

  databaseVersion,
});