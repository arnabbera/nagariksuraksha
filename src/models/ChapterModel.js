import { createBaseModel } from "./BaseModel";

// =========================================================
// NORMALIZERS
// =========================================================

const normalizeStringArray = (
  values = [],
) => {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map((value) =>
      String(
        value || "",
      ).trim(),
    )
    .filter(Boolean);
};

const normalizeImportantCases = (
  cases = [],
) => {
  if (!Array.isArray(cases)) {
    return [];
  }

  return cases
    .map(
      (
        item,
        index,
      ) => ({
        id:
          item?.id ||
          `case-${index + 1}`,

        caseName:
          String(
            item?.caseName ||
              "",
          ).trim(),

        citation:
          String(
            item?.citation ||
              "",
          ).trim(),

        principle:
          String(
            item?.principle ||
              "",
          ).trim(),

        summary:
          String(
            item?.summary ||
              "",
          ).trim(),
      }),
    )
    .filter(
      (item) =>
        item.caseName ||
        item.citation ||
        item.principle ||
        item.summary,
    );
};

const normalizeStatutoryProvisions = (
  provisions = [],
) => {
  if (!Array.isArray(provisions)) {
    return [];
  }

  return provisions
    .map(
      (
        item,
        index,
      ) => ({
        id:
          item?.id ||
          `provision-${index + 1}`,

        title:
          String(
            item?.title ||
              "",
          ).trim(),

        provision:
          String(
            item?.provision ||
              "",
          ).trim(),

        description:
          String(
            item?.description ||
              "",
          ).trim(),
      }),
    )
    .filter(
      (item) =>
        item.title ||
        item.provision ||
        item.description,
    );
};

// =========================================================
// CHAPTER MODEL
// =========================================================

export const createChapterModel = ({
  id = null,

  courseId = "",

  title = "",
  slug = "",

  // =======================================================
  // CHAPTER OVERVIEW
  // =======================================================

  shortDescription = "",

  chapterOverview = "",

  learningObjectives = [],

  detailedContent = "",

  keyPoints = [],

  statutoryProvisions = [],

  importantCases = [],

  examFocus = "",

  revisionNotes = "",

  notes = "",

  chapterNumber = 1,
  displayOrder = 1,

  // =======================================================
  // VIDEO
  // =======================================================

  youtubeUrl = "",
  youtubeVideoId = "",
  videoDuration = "",

  // =======================================================
  // PDF / STUDY MATERIAL
  // =======================================================

  pdfUrl = "",
  pdfStoragePath = "",
  pdfPublicId = "",
  pdfFileName = "",
  pdfFileSize = 0,
  pdfContentType = "",
  pdfAssetId = "",

  // =======================================================
  // QUIZ
  // =======================================================

  quizId = "",
  quizRequired = true,
  passingPercentage = 80,
  maximumAttempts = 3,

  // =======================================================
  // STATUS
  // =======================================================

  published = false,
  previewAvailable = false,

  status = "draft",

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => {
  const normalizedLearningObjectives =
    normalizeStringArray(
      learningObjectives,
    );

  const normalizedKeyPoints =
    normalizeStringArray(
      keyPoints,
    );

  const normalizedStatutoryProvisions =
    normalizeStatutoryProvisions(
      statutoryProvisions,
    );

  const normalizedImportantCases =
    normalizeImportantCases(
      importantCases,
    );

  return {
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

    // =====================================================
    // COURSE
    // =====================================================

    courseId,

    // =====================================================
    // CHAPTER BASIC INFORMATION
    // =====================================================

    title:
      String(
        title || "",
      ).trim(),

    slug:
      String(
        slug || "",
      ).trim(),

    shortDescription:
      String(
        shortDescription ||
          "",
      ).trim(),

    chapterNumber:
      Number(
        chapterNumber ||
          1,
      ),

    displayOrder:
      Number(
        displayOrder ||
          1,
      ),

    // =====================================================
    // ACADEMIC CONTENT
    // =====================================================

    content: {
      overview:
        String(
          chapterOverview ||
            "",
        ).trim(),

      learningObjectives:
        normalizedLearningObjectives,

      detailedContent:
        String(
          detailedContent ||
            "",
        ).trim(),

      keyPoints:
        normalizedKeyPoints,

      statutoryProvisions:
        normalizedStatutoryProvisions,

      importantCases:
        normalizedImportantCases,

      examFocus:
        String(
          examFocus ||
            "",
        ).trim(),

      revisionNotes:
        String(
          revisionNotes ||
            "",
        ).trim(),
    },

    // =====================================================
    // LEGACY NOTES FIELD
    // =====================================================
    //
    // Keep this because your current Admin/Student code may
    // already depend on chapter.notes.
    // =====================================================

    notes:
      String(
        notes || "",
      ).trim(),

    // =====================================================
    // VIDEO
    // =====================================================

    video: {
      youtubeUrl:
        youtubeUrl || "",

      youtubeVideoId:
        youtubeVideoId || "",

      duration:
        videoDuration ||
        "",
    },

    // =====================================================
    // PDF / STUDY MATERIAL
    // =====================================================
    //
    // PDF is uploaded from Admin Portal to Cloudinary.
    //
    // Students will read the PDF inside Chapter Learning.
    //
    // Download permission is NOT controlled here.
    // It is determined from certification entitlement.
    // =====================================================

    pdf: {
      url:
        pdfUrl || "",

      storagePath:
        pdfStoragePath ||
        "",

      publicId:
        pdfPublicId ||
        "",

      fileName:
        pdfFileName ||
        "",

      fileSize:
        Number(
          pdfFileSize ||
            0,
        ),

      contentType:
        pdfContentType ||
        "",

      assetId:
        pdfAssetId ||
        "",
    },

    // =====================================================
    // QUIZ
    // =====================================================

    quiz: {
      quizId:
        quizId || "",

      required:
        Boolean(
          quizRequired,
        ),

      passingPercentage:
        Number(
          passingPercentage ||
            80,
        ),

      maximumAttempts:
        Number(
          maximumAttempts ||
            3,
        ),
    },

    // =====================================================
    // ACCESS
    // =====================================================

    published:
      Boolean(
        published,
      ),

    previewAvailable:
      Boolean(
        previewAvailable,
      ),

    // =====================================================
    // SEARCH
    // =====================================================

    searchKeywords: [
      title,
      slug,
      shortDescription,
      chapterOverview,
      detailedContent,
      examFocus,
      revisionNotes,
      ...normalizedLearningObjectives,
      ...normalizedKeyPoints,
      ...normalizedImportantCases.flatMap(
        (item) => [
          item.caseName,
          item.citation,
          item.principle,
        ],
      ),
      ...normalizedStatutoryProvisions.flatMap(
        (item) => [
          item.title,
          item.provision,
        ],
      ),
    ]
      .filter(Boolean)
      .flatMap((value) =>
        String(value)
          .toLowerCase()
          .split(/\s+/),
      )
      .filter(
        (
          value,
          index,
          items,
        ) =>
          value &&
          items.indexOf(
            value,
          ) === index,
      ),
  };
};

export default createChapterModel;