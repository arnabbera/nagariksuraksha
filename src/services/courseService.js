import { createCourseModel } from "../models/CourseModel";
import courseRepository from "../repositories/CourseRepository";
import { generalPrinciplesOfContractCourse } from "../data/courses/generalPrinciplesOfContract";
import { criminalLawICourse } from "../data/courses/criminalLawI";
import { publicInternationalLawCourse } from "../data/courses/publicInternationalLaw";
import { environmentalLawCourse } from "../data/courses/environmentalLaw";

const bundledCourses = [
  generalPrinciplesOfContractCourse,
  criminalLawICourse,
  publicInternationalLawCourse,
  environmentalLawCourse,
];

const mergeCourses = (courses = []) => {
  const courseMap = new Map(
    bundledCourses.map((course) => [course.id, course]),
  );

  for (const course of courses || []) {
    if (course?.id) courseMap.set(course.id, course);
  }

  return [...courseMap.values()].sort(
    (first, second) =>
      Number(first.order || 0) - Number(second.order || 0) ||
      String(first.title || "").localeCompare(String(second.title || "")),
  );
};

const normalizeSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const getPublishedCourses = async (options = {}) => {
  const storedCourses = await courseRepository.getPublishedCourses(options);
  const pageSize = Math.max(1, Number(options.pageSize || 20));

  return mergeCourses(storedCourses)
    .filter((course) => course.status === "published" && course.deleted !== true)
    .filter((course) =>
      options.featured === null || options.featured === undefined
        ? true
        : Boolean(course.featured) === Boolean(options.featured),
    )
    .filter((course) =>
      options.courseType ? course.courseType === options.courseType : true,
    )
    .filter((course) =>
      options.accessType ? course.accessType === options.accessType : true,
    )
    .slice(0, pageSize);
};

export const getFeaturedCourses = async (pageSize = 6) =>
  getPublishedCourses({ featured: true, pageSize });

export const getCourseById = async (courseId) => {
  if (!courseId) {
    throw new Error("Course ID is required.");
  }

  const storedCourse = await courseRepository.getById(courseId);

  return storedCourse || bundledCourses.find((course) => course.id === courseId) || null;
};

export const getCourseBySlug = async (slug) => {
  if (!slug) {
    return null;
  }

  const normalizedSlug = normalizeSlug(slug);
  const storedCourse = await courseRepository.getBySlug(normalizedSlug);

  return storedCourse || bundledCourses.find((course) => course.slug === normalizedSlug) || null;
};

export const getAllCourses = async () =>
  mergeCourses(await courseRepository.getAll());

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

  const storedCourse =
    await courseRepository.getById(courseId);

  const existingCourse =
    storedCourse ||
    bundledCourses.find(
      (course) => course.id === courseId,
    );

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

  if (!storedCourse) {
    const persistedDraft = createCourseModel({
      ...courseData,
      id: courseId,
      slug,
      totalSemesters:
        courseData.totalSemesters ??
        existingCourse.totals?.semesters ??
        0,
      totalSubjects:
        courseData.totalSubjects ??
        existingCourse.totals?.subjects ??
        0,
      totalChapters:
        courseData.totalChapters ??
        existingCourse.totals?.chapters ??
        0,
      status: "draft",
      createdBy:
        existingCourse.createdBy || updatedBy,
      updatedBy,
      version:
        Number(existingCourse.version || 1) + 1,
    });

    return courseRepository.create(
      courseId,
      persistedDraft,
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

export const publishCourse = async (courseId) => {
  const storedCourse =
    await courseRepository.getById(courseId);

  if (!storedCourse) {
    const bundledCourse = bundledCourses.find(
      (course) => course.id === courseId,
    );

    if (bundledCourse) {
      throw new Error(
        "Edit and save this draft course before final approval.",
      );
    }

    throw new Error("Course not found.");
  }

  return courseRepository.publish(courseId);
};

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
