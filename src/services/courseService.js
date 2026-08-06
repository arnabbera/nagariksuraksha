import { createCourseModel } from "../models/CourseModel";
import courseRepository from "../repositories/CourseRepository";

const normalizeSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const getPublishedCourses = async (options = {}) =>
  courseRepository.getPublishedCourses(options);

export const getFeaturedCourses = async (pageSize = 6) =>
  courseRepository.getFeaturedCourses(pageSize);

export const getCourseById = async (courseId) => {
  if (!courseId) {
    throw new Error("Course ID is required.");
  }

  return courseRepository.getById(courseId);
};

export const getCourseBySlug = async (slug) => {
  if (!slug) {
    return null;
  }

  return courseRepository.getBySlug(normalizeSlug(slug));
};

export const getAllCourses = async () =>
  courseRepository.getAll();

export const createCourse = async (
  courseData,
  createdBy = "system",
) => {
  if (!courseData?.title?.trim()) {
    throw new Error("Course title is required.");
  }

  const slug = normalizeSlug(
    courseData.slug || courseData.title,
  );

  if (!slug) {
    throw new Error("A valid course slug is required.");
  }

  const existingCourse =
    await courseRepository.getBySlug(slug);

  if (existingCourse) {
    throw new Error(
      "A course with this slug already exists.",
    );
  }

  const documentId =
    courseData.id || slug;

  const courseModel = createCourseModel({
    ...courseData,
    id: documentId,
    slug,
    createdBy,
    updatedBy: createdBy,
  });

  return courseRepository.create(
    documentId,
    courseModel,
  );
};

export const updateCourse = async (
  courseId,
  courseData,
  updatedBy = "system",
) => {
  if (!courseId) {
    throw new Error("Course ID is required.");
  }

  const existingCourse =
    await courseRepository.getById(courseId);

  if (!existingCourse) {
    throw new Error("Course not found.");
  }

  const slug = normalizeSlug(
    courseData.slug ||
      courseData.title ||
      existingCourse.slug,
  );

  const courseWithSameSlug =
    await courseRepository.getBySlug(slug);

  if (
    courseWithSameSlug &&
    courseWithSameSlug.id !== courseId
  ) {
    throw new Error(
      "Another course already uses this slug.",
    );
  }

  return courseRepository.update(courseId, {
    ...courseData,
    slug,
    updatedBy,
    version:
      Number(existingCourse.version || 1) + 1,
  });
};

export const publishCourse = async (courseId) =>
  courseRepository.publish(courseId);

export const archiveCourse = async (courseId) =>
  courseRepository.archive(courseId);

export const setCourseFeatured = async (
  courseId,
  featured,
) =>
  courseRepository.setFeatured(
    courseId,
    Boolean(featured),
  );

export const deleteCourse = async (
  courseId,
  deletedBy = "system",
) =>
  courseRepository.softDelete(
    courseId,
    deletedBy,
  );

export const restoreCourse = async (
  courseId,
  updatedBy = "system",
) =>
  courseRepository.restore(
    courseId,
    updatedBy,
  );

export default {
  getPublishedCourses,
  getFeaturedCourses,
  getCourseById,
  getCourseBySlug,
  getAllCourses,
  createCourse,
  updateCourse,
  publishCourse,
  archiveCourse,
  setCourseFeatured,
  deleteCourse,
  restoreCourse,
};