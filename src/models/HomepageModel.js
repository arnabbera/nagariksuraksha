import { createBaseModel } from "./BaseModel";
import { SEO_SCHEMA_TYPES } from "../constants/enums";

export const createHomepageModel = ({
  id = "main",

  announcement = {},
  hero = {},
  sections = {},
  statistics = {},
  latestContent = {},
  seo = {},

  publishedVersion = 1,
  published = true,

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

  announcement: {
    enabled: announcement.enabled ?? true,
    text:
      announcement.text ||
      "Welcome to NagarikSuraksha - Legal Learning & Consultancy Platform",
    buttonText: announcement.buttonText || "Contact Us",
    buttonLink: announcement.buttonLink || "/contact",
    backgroundColor:
      announcement.backgroundColor || "#0F172A",
    textColor: announcement.textColor || "#FFFFFF",
  },

  hero: {
    enabled: hero.enabled ?? true,
    heading:
      hero.heading ||
      "Empowering Every Citizen Through Law & Education",
    subHeading:
      hero.subHeading ||
      "Legal Learning | Legal Awareness | Legal Consultancy",
    description:
      hero.description ||
      "Learn law, understand your rights and access professional legal guidance through NagarikSuraksha.",

    primaryButton: {
      text: hero.primaryButton?.text || "Start Learning",
      link: hero.primaryButton?.link || "/learning",
    },

    secondaryButton: {
      text:
        hero.secondaryButton?.text ||
        "Get Legal Consultation",
      link: hero.secondaryButton?.link || "/contact",
    },

    desktopImage: hero.desktopImage || "",
    mobileImage: hero.mobileImage || "",
    videoBackground: hero.videoBackground || "",
  },

  sections: {
    legalServices: sections.legalServices ?? true,
    latestPosts: sections.latestPosts ?? true,
    latestVideos: sections.latestVideos ?? true,
    testimonials: sections.testimonials ?? true,
    faq: sections.faq ?? true,
    statistics: sections.statistics ?? true,
    courses: sections.courses ?? true,
    contact: sections.contact ?? true,
    footer: sections.footer ?? true,
  },

  statistics: {
    students: statistics.students ?? true,
    courses: statistics.courses ?? true,
    certificates: statistics.certificates ?? true,
    articles: statistics.articles ?? true,
    videos: statistics.videos ?? true,
  },

  latestContent: {
    latestPosts:
      Number(latestContent.latestPosts) || 6,
    latestVideos:
      Number(latestContent.latestVideos) || 6,
    featuredOnly:
      latestContent.featuredOnly ?? false,
  },

  seo: {
    title:
      seo.title ||
      "NagarikSuraksha | Legal Learning & Consultancy",

    description:
      seo.description ||
      "Legal learning, legal consultancy, legal awareness, property registration, consumer law and legal education platform.",

    focusKeyword:
      seo.focusKeyword || "legal services Kolkata",

    secondaryKeywords:
      seo.secondaryKeywords || [
        "LLB learning",
        "property registration Kolkata",
        "consumer law",
        "legal consultancy",
      ],

    canonicalUrl:
      seo.canonicalUrl ||
      "https://www.nagariksuraksha.com",

    ogTitle:
      seo.ogTitle ||
      "NagarikSuraksha | Legal Learning & Consultancy",

    ogDescription:
      seo.ogDescription ||
      "Legal learning, legal awareness and professional legal consultancy services.",

    ogImageUrl: seo.ogImageUrl || "",

    schemaType:
      seo.schemaType || SEO_SCHEMA_TYPES.WEBSITE,

    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    },

    sitemap: {
      include: seo.sitemap?.include ?? true,
      priority: seo.sitemap?.priority ?? 1,
      changeFrequency:
        seo.sitemap?.changeFrequency || "weekly",
    },
  },

  publishedVersion,
  published,
});