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

const isCriminalLawIChapterSix = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-6");

const isCriminalLawIChapterSeven = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-7");

const isCriminalLawIStateOffencesChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-9");

const isCriminalLawIPublicTranquillityChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-10");

const isCriminalLawIPublicServantsChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-11");

const isCriminalLawIElectionOffencesChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-12");

const isCriminalLawILawfulAuthorityChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-13");

const isCriminalLawIPublicJusticeChapter = (courseSlug, chapter) =>
  [
    "criminal-law-i",
    "criminal-law-i-transitioning-from-ipc-to-bns",
  ].includes(courseSlug) &&
  String(chapter?.id || "").endsWith("-unit-14");

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

const CRIMINAL_LAW_I_CHAPTER_SIX_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-false-evidence-and-offences-against-public-justice",
  "criminal-law-1-criminal-conspiracy-ipc-sections-120a-120b-and-bns-section-61",
]);

const CRIMINAL_LAW_I_CHAPTER_SEVEN_LEGACY_SEGMENTS = new Set([
  "criminal-law-i-transitioning-from-ipc-to-bns-offences-against-the-human-body",
  "criminal-law-1-offences-relating-to-the-armed-forces-ipc-sections-131-140-and-bns-sections-159-168",
]);

export const getChapterPathSegment = (courseSlug, chapter) => {
  if (isCriminalLawIPublicJusticeChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter13-False-Evidence-and-Public-Justice";
  }

  if (isCriminalLawILawfulAuthorityChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter12-Lawful-Authority-of-Public-Servants";
  }

  if (isCriminalLawIElectionOffencesChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter11-Election-Offences";
  }

  if (isCriminalLawIPublicServantsChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter10-Public-Servants";
  }

  if (isCriminalLawIPublicTranquillityChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter9-Public-Tranquillity";
  }

  if (isCriminalLawIStateOffencesChapter(courseSlug, chapter)) {
    return "ipc-to-bns-chapter7-Offences-Against-the-State";
  }

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

  if (isCriminalLawIChapterSix(courseSlug, chapter)) {
    return "ipc-to-bns-chapter6-Criminal-Conspiracy";
  }

  if (isCriminalLawIChapterSeven(courseSlug, chapter)) {
    return "ipc-to-bns-chapter7-Armed-Forces-Offences";
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
  if (isCriminalLawIPublicJusticeChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter13-False-Evidence-and-Public-Justice";
  }

  if (isCriminalLawILawfulAuthorityChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter12-Lawful-Authority-of-Public-Servants";
  }

  if (isCriminalLawIElectionOffencesChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter11-Election-Offences";
  }

  if (isCriminalLawIPublicServantsChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter10-Public-Servants";
  }

  if (isCriminalLawIPublicTranquillityChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter9-Public-Tranquillity";
  }

  if (isCriminalLawIStateOffencesChapter(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter7-Offences-Against-the-State";
  }

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

  if (isCriminalLawIChapterSix(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter6-Criminal-Conspiracy";
  }

  if (isCriminalLawIChapterSeven(courseSlug, chapter)) {
    return "/student/learn/criminal-law-i/ipc-to-bns-chapter7-Armed-Forces-Offences";
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
      (isCriminalLawIChapterSix(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_SIX_LEGACY_SEGMENTS.has(pathSegment)) ||
      (isCriminalLawIChapterSeven(courseSlug, chapter) &&
        CRIMINAL_LAW_I_CHAPTER_SEVEN_LEGACY_SEGMENTS.has(pathSegment)) ||
      getChapterPathSegment(courseSlug, chapter) === pathSegment,
  ) || null;
