import { createBaseModel } from "./BaseModel";
import {
  COMMENT_STATUS,
  CONTENT_STATUS,
  CONTENT_TYPES,
  SEO_SCHEMA_TYPES,
} from "../constants/enums";

const createImageModel = ({
  url = "",
  storagePath = "",
  fileName = "",
  altText = "",
  caption = "",
  width = null,
  height = null,
  ratio = "",
} = {}) => ({
  url,
  storagePath,
  fileName,
  altText,
  caption,
  width,
  height,
  ratio,
});

const createSeoModel = ({
  title = "",
  description = "",
  focusKeyword = "",
  secondaryKeywords = [],
  canonicalUrl = "",
  ogTitle = "",
  ogDescription = "",
  ogImageUrl = "",
  twitterTitle = "",
  twitterDescription = "",
  twitterImageUrl = "",
  schemaType = SEO_SCHEMA_TYPES.ARTICLE,
  breadcrumbLabel = "",
  index = true,
  follow = true,
  includeInSitemap = true,
  sitemapPriority = 0.7,
  changeFrequency = "monthly",
} = {}) => ({
  title,
  description,
  focusKeyword,
  secondaryKeywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImageUrl,
  twitterTitle,
  twitterDescription,
  twitterImageUrl,
  schemaType,
  breadcrumbLabel,

  robots: {
    index,
    follow,
  },

  sitemap: {
    include: includeInSitemap,
    priority: sitemapPriority,
    changeFrequency,
  },
});

export const createContentModel = ({
  id = null,

  contentType = CONTENT_TYPES.POST,
  status = CONTENT_STATUS.DRAFT,

  title = "",
  slug = "",
  summary = "",
  body = "",

  categoryId = "",
  categoryName = "",
  tags = [],

  authorId = "",
  authorName = "",
  authorEmail = "",

  thumbnail = {},
  desktopImage = {},
  mobileImage = {},

  gallery = [],
  attachments = [],

  youtubeUrl = "",
  videoId = "",
  embedUrl = "",
  videoThumbnailUrl = "",
  videoDuration = "",

  location = "",
  serviceId = "",
  courseId = "",

  seo = {},

  commentsEnabled = true,
  commentModerationRequired = true,
  commentCount = 0,
  defaultCommentStatus = COMMENT_STATUS.PENDING,

  featured = false,
  pinned = false,

  scheduledAt = null,
  publishedAt = null,

  viewCount = 0,
  likeCount = 0,
  shareCount = 0,

  searchKeywords = [],

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

  contentType,

  title,
  slug,
  summary,
  body,

  categoryId,
  categoryName,
  tags,

  author: {
    uid: authorId,
    name: authorName,
    email: authorEmail,
  },

  media: {
    thumbnail: createImageModel({
      ratio: "1:1",
      ...thumbnail,
    }),

    desktopImage: createImageModel({
      ratio: "16:9",
      ...desktopImage,
    }),

    mobileImage: createImageModel({
      ratio: "9:16",
      ...mobileImage,
    }),

    gallery,
  },

  video: {
    youtubeUrl,
    videoId,
    embedUrl,
    thumbnailUrl: videoThumbnailUrl,
    duration: videoDuration,
  },

  attachments,

  location,
  serviceId,
  courseId,

  seo: createSeoModel(seo),

  comments: {
    enabled: commentsEnabled,
    moderationRequired: commentModerationRequired,
    count: commentCount,
    defaultStatus: defaultCommentStatus,
  },

  featured,
  pinned,

  scheduledAt,
  publishedAt,

  analytics: {
    viewCount,
    likeCount,
    shareCount,
  },

  searchKeywords,
});