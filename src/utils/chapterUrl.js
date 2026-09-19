const courseChapterPrefixes = {
  "code-of-civil-procedure-and-limitation": "cpc",
  "general-principles-of-contract": "contract",
  "constitutional-law-i": "constitutional-law-1",
  "criminal-law-i": "criminal-law-1",
  "family-law-i": "family-law-1",
  "public-international-law": "public-international-law",
  "environmental-law": "environmental-law",
  "human-rights-law-and-practice": "human-rights-law",
  "media-law": "media-law",
};

const slugify = (value = "") =>
  String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

const removeChapterLabel = (title = "") =>
  String(title)
    .replace(
      /^\s*(?:chapter|unit)\s+(?:\d+|[ivxlcdm]+)\s*[:.\-)–—]*\s*/i,
      "",
    )
    .trim();

const isCriminalLawIChapterOne = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  (String(chapter?.title || chapter?.name || "") ===
    "Concept of Crime, Criminal Liability and General Exceptions" ||
    String(chapter?.id || "").endsWith("-unit-1"));

const isCriminalLawIChapterTwo = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-2");

const isCriminalLawIChapterThree = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-3");

const isCriminalLawIChapterFour = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-4");

const isCriminalLawIChapterFive = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-5");

const CRIMINAL_LAW_I_CHAPTER_ONE_LEGACY_SEGMENT =
  "criminal-law-i-transitioning-from-ipc-to-bns-concept-of-crime-criminal-liability-and-general-exceptions";

const CRIMINAL_LAW_I_CHAPTER_TWO_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-abetment",
  "criminal-law-1-general-explanations-ipc-sections-6-52a-and-bns-sections-2-3",
]);

const CRIMINAL_LAW_I_CHAPTER_THREE_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-criminal-conspiracy",
  "criminal-law-1-punishments-ipc-sections-53-75-and-bns-sections-4-13",
]);

const CRIMINAL_LAW_I_CHAPTER_FOUR_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-offences-against-the-state",
  "criminal-law-1-general-exceptions-ipc-sections-76-106-and-bns-sections-14-44",
]);

const CRIMINAL_LAW_I_CHAPTER_FIVE_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-offences-against-public-tranquillity",
  "criminal-law-1-abetment-ipc-sections-107-120-and-bns-sections-45-60",
]);

export const getChapterPathSegment = (courseSlug, chapter) => {
  if (isCriminalLawIChapterOne(courseSlug, chapter)) {
    return "ipc-to-bns-chapter1-Itroduction";
  }

  if (isCriminalLawIChapterTwo(courseSlug, chapter)) {
    return "ipc-to-bns-chapter2-General-Explanations";
  }

  if (isCriminalLawIChapterThree(courseSlug, chapter)) {
    return "ipc-to-bns-chapter3-Punishments";
  }

  if (isCriminalLawIChapterFour(courseSlug, chapter)) {
    return "ipc-to-bns-chapter4-General-Exceptions";
  }

  if (isCriminalLawIChapterFive(courseSlug, chapter)) {
    return "ipc-to-bns-chapter5-Abetment";
  }

  const prefix =
    courseChapterPrefixes[courseSlug] || slugify(courseSlug) || "chapter";
  const readableTitle = slugify(
    removeChapterLabel(chapter?.title || chapter?.name || ""),
  );

  return readableTitle
    ? `${prefix}-${readableTitle}`
    : String(chapter?.slug || chapter?.id || "");
};

export const getChapterLearningPath = (courseSlug, chapter) => {
  if (isCriminalLawIChapterOne(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter1-Itroduction";
  }

  if (isCriminalLawIChapterTwo(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter2-General-Explanations";
  }

  if (isCriminalLawIChapterThree(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter3-Punishments";
  }

  if (isCriminalLawIChapterFour(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter4-General-Exceptions";
  }

  if (isCriminalLawIChapterFive(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter5-Abetment";
  }

  return `/student/learn/${courseSlug}/${getChapterPathSegment(courseSlug, chapter)}`;
};

export const resolveChapterPathSegment = (
  chapters,
  courseSlug,
  pathSegment,
) =>
  (Array.isArray(chapters) ? chapters : []).find(
    (chapter) =>
      chapter?.id === pathSegment ||
      chapter?.slug === pathSegment ||
      (isCriminalLawIChapterOne(courseSlug, chapter) &&
        pathSegment === CRIMINAL_LAW_I_CHAPTER_ONE_LEGACY_SEGMENT) ||
      (isCriminalLawIChapterTwo(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_TWO_LEGACY_SEGMENTS.has(pathSegment)) ||
      (isCriminalLawIChapterThree(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_THREE_LEGACY_SEGMENTS.has(pathSegment)) ||
      (isCriminalLawIChapterFour(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_FOUR_LEGACY_SEGMENTS.has(pathSegment)) ||
      (isCriminalLawIChapterFive(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_FIVE_LEGACY_SEGMENTS.has(pathSegment)) ||
      getChapterPathSegment(courseSlug, chapter) === pathSegment,
  ) || null;
