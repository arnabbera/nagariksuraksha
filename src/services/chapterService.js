import { createChapterModel } from "../models/ChapterModel";
import chapterRepository from "../repositories/ChapterRepository";
import { generalPrinciplesOfContractChapters } from "../data/courses/generalPrinciplesOfContract";
import { familyLawIChapters } from "../data/courses/familyLawI";
import { criminalLawIChapters } from "../data/courses/criminalLawI";

const bundledChapters = [
  ...generalPrinciplesOfContractChapters,
  ...familyLawIChapters,
  ...criminalLawIChapters,
];

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const getDetailedContentLength = (chapter) =>
  String(
    chapter?.content?.detailedContent ||
      chapter?.detailedContent ||
      chapter?.notes ||
      "",
  ).trim().length;

// Bundled course chapters are updated through reviewed source changes, while
// Firestore may still contain an older chapter created during course setup.
// Prefer the richer academic content, but retain Firestore-controlled fields
// such as publication state, uploaded media, quiz settings and audit metadata.
const mergeStoredAndBundledChapter = (
  storedChapter,
  bundledChapter,
) => {
  if (!storedChapter) {
    return bundledChapter || null;
  }

  if (!bundledChapter) {
    return storedChapter;
  }

  if (
    getDetailedContentLength(bundledChapter) <=
    getDetailedContentLength(storedChapter)
  ) {
    return storedChapter;
  }

  return {
    ...bundledChapter,
    ...storedChapter,
    shortDescription:
      bundledChapter.shortDescription ||
      storedChapter.shortDescription,
    content: {
      ...(storedChapter.content || {}),
      ...(bundledChapter.content || {}),
    },
    notes:
      bundledChapter.notes ||
      storedChapter.notes,
  };
};

// =========================================================
// ADMIN - ALL CHAPTERS
// =========================================================

export const getAllChapters = async () =>
  chapterRepository.getAll();

// =========================================================
// ADMIN - ALL CHAPTERS FOR COURSE
// =========================================================

export const getChaptersByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  const storedChapters =
    await chapterRepository.getByCourse(
      courseId,
    );

  const chapterMap = new Map(
    bundledChapters
      .filter(
        (chapter) =>
          chapter.courseId === courseId,
      )
      .map(
        (chapter) => [
          chapter.id,
          chapter,
        ],
      ),
  );

  for (const chapter of storedChapters || []) {
    if (chapter?.id) {
      const bundledChapter =
        chapterMap.get(chapter.id);

      chapterMap.set(
        chapter.id,
        mergeStoredAndBundledChapter(
          chapter,
          bundledChapter,
        ),
      );
    }
  }

  return [...chapterMap.values()].sort(
    (first, second) =>
      Number(
        first.displayOrder ||
          first.chapterNumber ||
          0,
      ) -
      Number(
        second.displayOrder ||
          second.chapterNumber ||
          0,
      ),
  );
};

// =========================================================
// STUDENT - PUBLISHED CHAPTERS FOR COURSE
// =========================================================

export const getPublishedChaptersByCourse =
  async (
    courseId,
  ) => {
    if (!courseId) {
      return [];
    }

    const storedChapters =
      await chapterRepository.getPublishedByCourse(
        courseId,
      );

    const chapterMap = new Map(
      bundledChapters
        .filter((chapter) => chapter.courseId === courseId)
        .map((chapter) => [chapter.slug || chapter.id, chapter]),
    );

    for (const chapter of storedChapters || []) {
      if (chapter?.id) {
        const chapterKey =
          chapter.slug || chapter.id;
        const bundledChapter =
          chapterMap.get(chapterKey) ||
          bundledChapters.find(
            (item) =>
              item.id === chapter.id,
          );

        chapterMap.set(
          chapterKey,
          mergeStoredAndBundledChapter(
            chapter,
            bundledChapter,
          ),
        );
      }
    }

    return [...chapterMap.values()].sort(
      (first, second) =>
        Number(first.displayOrder || first.chapterNumber || 0) -
        Number(second.displayOrder || second.chapterNumber || 0),
    );
  };

// =========================================================
// GET CHAPTER
// =========================================================

export const getChapterById = async (
  chapterId,
) => {
  if (!chapterId) {
    throw new Error(
      "Chapter ID is required.",
    );
  }

  const storedChapter =
    await chapterRepository.getById(
      chapterId,
    );

  const bundledChapter =
    bundledChapters.find(
      (chapter) =>
        chapter.id === chapterId,
    );

  return mergeStoredAndBundledChapter(
    storedChapter,
    bundledChapter,
  );
};

// =========================================================
// CREATE
// =========================================================

export const createChapter = async (
  chapterData,
  createdBy = "system",
) => {
  if (!chapterData?.courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  if (
    !chapterData?.title?.trim()
  ) {
    throw new Error(
      "Chapter title is required.",
    );
  }

  const slug =
    createSlug(
      chapterData.slug ||
        chapterData.title,
    );

  const chapterModel =
    createChapterModel({
      ...chapterData,

      slug,

      createdBy,

      updatedBy:
        createdBy,
    });

  return chapterRepository.create(
    chapterModel,
  );
};

// =========================================================
// UPDATE
// =========================================================

export const updateChapter = async (
  chapterId,
  chapterData,
  updatedBy = "system",
) => {
  if (!chapterId) {
    throw new Error(
      "Chapter ID is required.",
    );
  }

  const storedChapter =
    await chapterRepository.getById(
      chapterId,
    );

  const existingChapter =
    storedChapter ||
    bundledChapters.find(
      (chapter) =>
        chapter.id === chapterId,
    );

  if (!existingChapter) {
    throw new Error(
      "Chapter not found.",
    );
  }

  const slug =
    createSlug(
      chapterData.slug ||
        chapterData.title ||
        existingChapter.slug ||
        "",
    );

  /*
   * IMPORTANT:
   *
   * ChapterModel accepts the academic-content fields
   * as flat input:
   *
   * chapterOverview
   * learningObjectives
   * detailedContent
   * keyPoints
   * statutoryProvisions
   * importantCases
   * examFocus
   * revisionNotes
   *
   * Existing Firestore chapters store those fields under
   * chapter.content after passing through ChapterModel.
   *
   * We therefore rebuild the complete chapter model here
   * instead of writing chapterData directly to Firestore.
   */

  const updatedChapter =
    createChapterModel({
      // ===================================================
      // EXISTING BASIC DATA
      // ===================================================

      id:
        existingChapter.id ||
        chapterId,

      courseId:
        chapterData.courseId ??
        existingChapter.courseId ??
        "",

      title:
        chapterData.title ??
        existingChapter.title ??
        "",

      slug,

      shortDescription:
        chapterData.shortDescription ??
        existingChapter.shortDescription ??
        "",

      notes:
        chapterData.notes ??
        existingChapter.notes ??
        "",

      chapterNumber:
        chapterData.chapterNumber ??
        existingChapter.chapterNumber ??
        1,

      displayOrder:
        chapterData.displayOrder ??
        existingChapter.displayOrder ??
        1,

      // ===================================================
      // ACADEMIC CONTENT
      // ===================================================

      chapterOverview:
        chapterData.chapterOverview ??
        existingChapter.content?.overview ??
        "",

      learningObjectives:
        chapterData.learningObjectives ??
        existingChapter.content
          ?.learningObjectives ??
        [],

      detailedContent:
        chapterData.detailedContent ??
        existingChapter.content
          ?.detailedContent ??
        "",

      keyPoints:
        chapterData.keyPoints ??
        existingChapter.content
          ?.keyPoints ??
        [],

      statutoryProvisions:
        chapterData.statutoryProvisions ??
        existingChapter.content
          ?.statutoryProvisions ??
        [],

      importantCases:
        chapterData.importantCases ??
        existingChapter.content
          ?.importantCases ??
        [],

      examFocus:
        chapterData.examFocus ??
        existingChapter.content
          ?.examFocus ??
        "",

      revisionNotes:
        chapterData.revisionNotes ??
        existingChapter.content
          ?.revisionNotes ??
        "",

      // ===================================================
      // VIDEO
      // ===================================================

      youtubeUrl:
        chapterData.youtubeUrl ??
        existingChapter.video
          ?.youtubeUrl ??
        "",

      youtubeVideoId:
        chapterData.youtubeVideoId ??
        existingChapter.video
          ?.youtubeVideoId ??
        "",

      videoDuration:
        chapterData.videoDuration ??
        existingChapter.video
          ?.duration ??
        "",

      // ===================================================
      // PDF
      // ===================================================

      pdfUrl:
        chapterData.pdfUrl ??
        existingChapter.pdf
          ?.url ??
        "",

      pdfStoragePath:
        chapterData.pdfStoragePath ??
        existingChapter.pdf
          ?.storagePath ??
        "",

      pdfPublicId:
        chapterData.pdfPublicId ??
        existingChapter.pdf
          ?.publicId ??
        "",

      pdfFileName:
        chapterData.pdfFileName ??
        existingChapter.pdf
          ?.fileName ??
        "",

      pdfFileSize:
        chapterData.pdfFileSize ??
        existingChapter.pdf
          ?.fileSize ??
        0,

      pdfContentType:
        chapterData.pdfContentType ??
        existingChapter.pdf
          ?.contentType ??
        "",

      pdfAssetId:
        chapterData.pdfAssetId ??
        existingChapter.pdf
          ?.assetId ??
        "",

      // ===================================================
      // QUIZ
      // ===================================================

      quizId:
        chapterData.quizId ??
        existingChapter.quiz
          ?.quizId ??
        "",

      quizRequired:
        chapterData.quizRequired ??
        existingChapter.quiz
          ?.required ??
        true,

      passingPercentage:
        chapterData.passingPercentage ??
        existingChapter.quiz
          ?.passingPercentage ??
        80,

      maximumAttempts:
        chapterData.maximumAttempts ??
        existingChapter.quiz
          ?.maximumAttempts ??
        3,

      // ===================================================
      // ACCESS / STATUS
      // ===================================================

      published:
        chapterData.published ??
        existingChapter.published ??
        false,

      previewAvailable:
        chapterData.previewAvailable ??
        existingChapter.previewAvailable ??
        false,

      status:
        chapterData.status ??
        existingChapter.status ??
        "draft",

      // ===================================================
      // AUDIT
      // ===================================================

      createdBy:
        existingChapter.createdBy ??
        "system",

      updatedBy,

      deleted:
        existingChapter.deleted ??
        false,

      deletedAt:
        existingChapter.deletedAt ??
        null,

      deletedBy:
        existingChapter.deletedBy ??
        null,

      version:
        Number(
          existingChapter.version ||
            1,
        ) + 1,
    });

  if (!storedChapter) {
    return chapterRepository.create(
      updatedChapter,
    );
  }

  return chapterRepository.update(
    chapterId,
    updatedChapter,
  );
};

// =========================================================
// PUBLISH
// =========================================================

export const publishChapter = async (
  chapterId,
) =>
  chapterRepository.publish(
    chapterId,
  );

// =========================================================
// UNPUBLISH
// =========================================================

export const unpublishChapter = async (
  chapterId,
) =>
  chapterRepository.unpublish(
    chapterId,
  );

// =========================================================
// REORDER
// =========================================================

export const reorderChapter = async (
  chapterId,
  displayOrder,
) =>
  chapterRepository.reorder(
    chapterId,
    Number(
      displayOrder || 0,
    ),
  );

// =========================================================
// DELETE
// =========================================================

export const deleteChapter = async (
  chapterId,
) => {
  if (!chapterId) {
    throw new Error(
      "Chapter ID is required.",
    );
  }

  return chapterRepository.delete(
    chapterId,
  );
};

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getAllChapters,
  getChaptersByCourse,
  getPublishedChaptersByCourse,
  getChapterById,
  createChapter,
  updateChapter,
  publishChapter,
  unpublishChapter,
  reorderChapter,
  deleteChapter,
};
