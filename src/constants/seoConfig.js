// =========================================================
// NAGARIKSURAKSHA SEO CONFIGURATION
// =========================================================
//
// Central SEO configuration.
//
// Public pages should reuse these values instead of
// hardcoding NagarikSuraksha branding repeatedly.
//
// =========================================================

export const SEO_CONFIG = Object.freeze({
  siteName:
    "NagarikSuraksha",

  siteUrl:
    "https://www.nagariksuraksha.com",

  locale:
    "en_IN",

  language:
    "en-IN",

  defaultTitle:
    "NagarikSuraksha | LL.B Courses, Law Notes, Study Materials & Mock Tests",

  titleTemplate:
    "%s | NagarikSuraksha",

  defaultDescription:
    "NagarikSuraksha provides LL.B learning, chapter-wise law notes, law study materials, legal topics, mock tests, case law resources and certification preparation for law students.",

  defaultKeywords: [
    "LLB course",
    "LLB courses",
    "LLB study material",
    "LLB study materials",
    "law study material",
    "law study materials",
    "law notes",
    "LLB notes",
    "law mock test",
    "law mock tests",
    "LLB mock test",
    "LLB mock tests",
    "online law course",
    "legal education",
    "law exam preparation",
    "law of torts notes",
    "constitutional law notes",
    "family law notes",
    "contract law notes",
    "consumer protection law",
  ],

  organization: {
    name:
      "NagarikSuraksha",

    type:
      "EducationalOrganization",

    id:
      "https://www.nagariksuraksha.com/#organization",
  },

  social: {
    twitterCard:
      "summary_large_image",
  },
});

// =========================================================
// HOMEPAGE SEO
// =========================================================

export const HOME_SEO = Object.freeze({
  title:
    "LL.B Courses, Law Notes, Study Materials & Mock Tests",

  description:
    "Study law with NagarikSuraksha. Access chapter-wise LL.B courses, law notes, legal study materials, important legal topics, mock tests, case law resources and certification preparation.",

  canonical:
    "/",

  keywords: [
    "LLB course",
    "LLB study material",
    "law notes",
    "law study materials",
    "law mock test",
    "LLB mock test",
    "online law learning",
    "legal education India",
    "law exam preparation",
    "law of torts notes",
  ],
});

// =========================================================
// PRIVATE PAGE SEO
// =========================================================

export const PRIVATE_PAGE_SEO =
  Object.freeze({
    robots:
      "noindex, nofollow, noarchive",
  });

export default SEO_CONFIG;