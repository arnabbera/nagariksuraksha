import {
  ENROLLMENT_STATUS,
  createStudentEnrollmentModel,
} from "../models/StudentEnrollmentModel";

import courseRepository from "../repositories/CourseRepository";
import studentEnrollmentRepository from "../repositories/StudentEnrollmentRepository";

const createEnrollmentId = (
  studentId,
  courseId,
) => `${studentId}_${courseId}`;

export const getStudentEnrollments = async (
  studentId,
) => {
  if (!studentId) {
    return [];
  }

  return studentEnrollmentRepository.getByStudent(
    studentId,
  );
};

export const getStudentEnrollment = async (
  studentId,
  courseId,
) =>
  studentEnrollmentRepository.getStudentCourse(
    studentId,
    courseId,
  );

export const enrollStudent = async (
  studentId,
  courseId,
  createdBy = "system",
) => {
  if (!studentId) {
    throw new Error("Student ID is required.");
  }

  if (!courseId) {
    throw new Error("Course ID is required.");
  }

  const existing =
    await studentEnrollmentRepository.getStudentCourse(
      studentId,
      courseId,
    );

  if (existing) {
    return existing;
  }

  const course =
    await courseRepository.getById(courseId);

  if (!course) {
    throw new Error("Course not found.");
  }

  const enrollmentId = createEnrollmentId(
    studentId,
    courseId,
  );

  const enrollment =
    createStudentEnrollmentModel({
      id: enrollmentId,

      studentId,
      courseId,

      status: ENROLLMENT_STATUS.ACTIVE,

      enrolledAt: new Date(),

      accessType:
        course.accessType || "free-learning",

      totalChapters:
        course.totals?.chapters || 0,

      createdBy,
      updatedBy: createdBy,
    });

  return studentEnrollmentRepository.create(
    enrollmentId,
    enrollment,
  );
};

export const updateEnrollmentProgress = async (
  enrollmentId,
  {
    percentage = 0,
    completedChapters = 0,
    totalChapters = 0,
  },
  updatedBy = "system",
) => {
  const existing =
    await studentEnrollmentRepository.getById(
      enrollmentId,
    );

  if (!existing) {
    throw new Error("Enrollment not found.");
  }

  const normalizedPercentage = Math.min(
    100,
    Math.max(0, Number(percentage || 0)),
  );

  const completed =
    normalizedPercentage >= 100;

  return studentEnrollmentRepository.update(
    enrollmentId,
    {
      progress: {
        percentage: normalizedPercentage,
        completedChapters: Number(
          completedChapters || 0,
        ),
        totalChapters: Number(
          totalChapters || 0,
        ),
      },

      status: completed
        ? ENROLLMENT_STATUS.COMPLETED
        : ENROLLMENT_STATUS.ACTIVE,

      completedAt: completed
        ? new Date()
        : existing.completedAt || null,

      updatedBy,

      version:
        Number(existing.version || 1) + 1,
    },
  );
};

export default {
  getStudentEnrollments,
  getStudentEnrollment,
  enrollStudent,
  updateEnrollmentProgress,
};