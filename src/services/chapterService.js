import { createChapterModel } from "../models/ChapterModel";
import chapterRepository from "../repositories/ChapterRepository";

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// =========================================================
// ADMIN - ALL CHAPTERS
// =========================================================

export const getAllChapters = async () =>
  chapterRepository.getAll();

// =========================================================
// ADMIN - ALL CHAPTERS FOR COURSE
// =========================================================

export const getChaptersByCourse = async (courseId) => {
  if (!courseId) {
    return [];
  }

  return chapterRepository.getByCourse(courseId);
};

// =========================================================
// STUDENT - PUBLISHED CHAPTERS FOR COURSE
// =========================================================

export const getPublishedChaptersByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  return chapterRepository.getPublishedByCourse(courseId);
};

// =========================================================
// GET CHAPTER
// =========================================================

export const getChapterById = async (chapterId) => {
  if (!chapterId) {
    throw new Error("Chapter ID is required.");
  }

  return chapterRepository.getById(chapterId);
};

// =========================================================
// CREATE
// =========================================================

export const createChapter = async (
  chapterData,
  createdBy = "system",
) => {
  if (!chapterData?.courseId) {
    throw new Error("Course ID is required.");
  }

  if (!chapterData?.title?.trim()) {
    throw new Error("Chapter title is required.");
  }

  const slug = createSlug(
    chapterData.slug || chapterData.title,
  );

  const chapterModel = createChapterModel({
    ...chapterData,
    slug,
    createdBy,
    updatedBy: createdBy,
  });

  return chapterRepository.create(chapterModel);
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
    throw new Error("Chapter ID is required.");
  }

  const existingChapter =
    await chapterRepository.getById(chapterId);

  if (!existingChapter) {
    throw new Error("Chapter not found.");
  }

  const slug = createSlug(
    chapterData.slug ||
      chapterData.title ||
      existingChapter.slug,
  );

  return chapterRepository.update(chapterId, {
    ...chapterData,
    slug,
    updatedBy,
    version:
      Number(existingChapter.version || 1) + 1,
  });
};

// =========================================================
// PUBLISH
// =========================================================

export const publishChapter = async (chapterId) =>
  chapterRepository.publish(chapterId);

// =========================================================
// UNPUBLISH
// =========================================================

export const unpublishChapter = async (chapterId) =>
  chapterRepository.unpublish(chapterId);

// =========================================================
// REORDER
// =========================================================

export const reorderChapter = async (
  chapterId,
  displayOrder,
) =>
  chapterRepository.reorder(
    chapterId,
    Number(displayOrder || 0),
  );

// =========================================================
// DELETE
// =========================================================

export const deleteChapter = async (chapterId) => {
  if (!chapterId) {
    throw new Error("Chapter ID is required.");
  }

  return chapterRepository.delete(chapterId);
};

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