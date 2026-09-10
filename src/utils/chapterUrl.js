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

export const getChapterPathSegment = (courseSlug, chapter) => {
  const prefix =
    courseChapterPrefixes[courseSlug] || slugify(courseSlug) || "chapter";
  const readableTitle = slugify(
    removeChapterLabel(chapter?.title || chapter?.name || ""),
  );

  return readableTitle
    ? `${prefix}-${readableTitle}`
    : String(chapter?.slug || chapter?.id || "");
};

export const getChapterLearningPath = (courseSlug, chapter) =>
  `/student/learn/${courseSlug}/${getChapterPathSegment(courseSlug, chapter)}`;

export const resolveChapterPathSegment = (
  chapters,
  courseSlug,
  pathSegment,
) =>
  (Array.isArray(chapters) ? chapters : []).find(
    (chapter) =>
      chapter?.id === pathSegment ||
      chapter?.slug === pathSegment ||
      getChapterPathSegment(courseSlug, chapter) === pathSegment,
  ) || null;
