import {
  CERTIFICATION_PAYMENT_STATUS,
  CERTIFICATION_STATUS,
  ENROLLMENT_ACCESS_TYPE,
  ENROLLMENT_STATUS,
  createStudentEnrollmentModel,
} from "../models/StudentEnrollmentModel";

import courseRepository from "../repositories/CourseRepository";
import studentEnrollmentRepository from "../repositories/StudentEnrollmentRepository";

// =========================================================
// CREATE ENROLLMENT ID
// =========================================================

const createEnrollmentId = (
  studentId,
  courseId,
) => `${studentId}_${courseId}`;

// =========================================================
// GET STUDENT ENROLLMENTS
// =========================================================

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

// =========================================================
// GET STUDENT ENROLLMENT FOR COURSE
// =========================================================

export const getStudentEnrollment = async (
  studentId,
  courseId,
) =>
  studentEnrollmentRepository.getStudentCourse(
    studentId,
    courseId,
  );

// A student receives course access only after the individual
// course payment has been confirmed. Keeping this check in one
// place prevents list, details and chapter pages from disagreeing.
export const hasPaidCourseAccess = (enrollment) =>
  Boolean(
    enrollment &&
      enrollment.status !== "cancelled" &&
      !enrollment.deleted &&
      enrollment?.certification?.payment?.status ===
        CERTIFICATION_PAYMENT_STATUS.PAID,
  );

// =========================================================
// NORMAL COURSE ENROLLMENT
// =========================================================

export const enrollStudent = async (
  studentId,
  courseId,
  createdBy = "system",
) => {
  if (!studentId) {
    throw new Error(
      "Student ID is required.",
    );
  }

  if (!courseId) {
    throw new Error(
      "Course ID is required.",
    );
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
    await courseRepository.getById(
      courseId,
    );

  if (!course) {
    throw new Error(
      "Course not found.",
    );
  }

  const enrollmentId =
    createEnrollmentId(
      studentId,
      courseId,
    );

  const enrollment =
    createStudentEnrollmentModel({
      id: enrollmentId,

      studentId,
      courseId,

      status:
        ENROLLMENT_STATUS.ACTIVE,

      enrolledAt:
        new Date(),

      accessType:
        course.accessType ||
        ENROLLMENT_ACCESS_TYPE
          .FREE_LEARNING,

      totalChapters:
        course.totals?.chapters ||
        0,

      createdBy,
      updatedBy:
        createdBy,
    });

  return studentEnrollmentRepository.create(
    enrollmentId,
    enrollment,
  );
};

// =========================================================
// UPDATE COURSE PROGRESS
// =========================================================

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
    throw new Error(
      "Enrollment not found.",
    );
  }

  const normalizedPercentage =
    Math.min(
      100,
      Math.max(
        0,
        Number(
          percentage || 0,
        ),
      ),
    );

  const completed =
    normalizedPercentage >= 100;

  return studentEnrollmentRepository.update(
    enrollmentId,
    {
      progress: {
        percentage:
          normalizedPercentage,

        completedChapters:
          Number(
            completedChapters ||
              0,
          ),

        totalChapters:
          Number(
            totalChapters ||
              0,
          ),
      },

      status: completed
        ? ENROLLMENT_STATUS.COMPLETED
        : ENROLLMENT_STATUS.ACTIVE,

      completedAt: completed
        ? new Date()
        : existing.completedAt ||
          null,

      updatedBy,

      version:
        Number(
          existing.version ||
            1,
        ) + 1,
    },
  );
};

// =========================================================
// CERTIFICATION HELPERS
// =========================================================

const getCertification = (
  enrollment,
) =>
  enrollment?.certification ||
  {};

// =========================================================
// ACTIVE CERTIFICATION CHECK
// =========================================================

export const hasActiveCertification = (
  enrollment,
) => {
  const status =
    getCertification(
      enrollment,
    ).status;

  return (
    status ===
      CERTIFICATION_STATUS.ACTIVE ||
    status ===
      CERTIFICATION_STATUS.COMPLETED
  );
};

// =========================================================
// PDF DOWNLOAD ACCESS CHECK
// =========================================================

export const canDownloadCoursePdf = (
  enrollment,
) =>
  hasActiveCertification(
    enrollment,
  ) &&
  getCertification(
    enrollment,
  ).access?.pdfDownload ===
    true;

// =========================================================
// GET CERTIFICATION ACCESS
// =========================================================

export const getCertificationAccess = (
  enrollment,
) => ({
  active:
    hasActiveCertification(
      enrollment,
    ),

  pdfDownload:
    canDownloadCoursePdf(
      enrollment,
    ),

  mockTests:
    hasActiveCertification(
      enrollment,
    ) &&
    getCertification(
      enrollment,
    ).access?.mockTests ===
      true,

  finalExam:
    getCertification(
      enrollment,
    ).access?.finalExam ===
      true,
});

// =========================================================
// ENROLL FOR CERTIFICATION
// =========================================================

export const enrollForCertification = async (
  studentId,
  courseId,
  updatedBy = "system",
) => {
  if (!studentId) {
    throw new Error(
      "Student ID is required.",
    );
  }

  if (!courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  // -------------------------------------------------------
  // GET EXISTING COURSE ENROLLMENT
  // -------------------------------------------------------

  let enrollment =
    await studentEnrollmentRepository.getStudentCourse(
      studentId,
      courseId,
    );

  // -------------------------------------------------------
  // AUTO ENROLL IN COURSE IF NECESSARY
  // -------------------------------------------------------

  if (!enrollment) {
    enrollment =
      await enrollStudent(
        studentId,
        courseId,
        updatedBy,
      );
  }

  // -------------------------------------------------------
  // GET COURSE
  // -------------------------------------------------------

  const course =
    await courseRepository.getById(
      courseId,
    );

  if (!course) {
    throw new Error(
      "Course not found.",
    );
  }

  // -------------------------------------------------------
  // CHECK CERTIFICATION AVAILABILITY
  // -------------------------------------------------------

  const certification =
    getCertification(
      enrollment,
    );

  // -------------------------------------------------------
  // ALREADY ACTIVE
  // -------------------------------------------------------

  if (
    certification.status ===
      CERTIFICATION_STATUS.ACTIVE ||
    certification.status ===
      CERTIFICATION_STATUS.COMPLETED
  ) {
    return enrollment;
  }

  // -------------------------------------------------------
  // CERTIFICATION FEE
  // -------------------------------------------------------

  const fee = 49;

  const freeCertification =
    fee <= 0;

  // -------------------------------------------------------
  // CREATE / UPDATE CERTIFICATION ENROLLMENT
  // -------------------------------------------------------

  return studentEnrollmentRepository.update(
    enrollment.id,
    {
      accessType:
        freeCertification
          ? ENROLLMENT_ACCESS_TYPE
              .CERTIFICATION
          : enrollment.accessType ||
            ENROLLMENT_ACCESS_TYPE
              .FREE_LEARNING,

      certification: {
        ...certification,

        status:
          freeCertification
            ? CERTIFICATION_STATUS
                .ACTIVE
            : CERTIFICATION_STATUS
                .PENDING_PAYMENT,

        enrolledAt:
          certification
            .enrolledAt ||
          new Date(),

        activatedAt:
          freeCertification
            ? certification
                .activatedAt ||
              new Date()
            : certification
                .activatedAt ||
              null,

        fee,

        // =================================================
        // PAYMENT
        // =================================================

        payment: {
          ...(
            certification.payment ||
            {}
          ),

          status:
            freeCertification
              ? CERTIFICATION_PAYMENT_STATUS
                  .NOT_REQUIRED
              : CERTIFICATION_PAYMENT_STATUS
                  .PENDING,

          paymentId:
            certification.payment
              ?.paymentId ||
            "",

          reference:
            certification.payment
              ?.reference ||
            "",

          paidAt:
            certification.payment
              ?.paidAt ||
            null,
        },

        // =================================================
        // ACCESS RIGHTS
        // =================================================

        access: {
          ...(
            certification.access ||
            {}
          ),

          pdfDownload:
            freeCertification,

          mockTests:
            freeCertification,

          finalExam:
            false,
        },

        // =================================================
        // THREE MOCK TESTS
        // =================================================

        mockTests: {
          ...(
            certification.mockTests ||
            {}
          ),

          // -----------------------------------------------
          // MOCK TEST 1
          // -----------------------------------------------

          test1: {
            ...(
              certification
                .mockTests
                ?.test1 ||
              {}
            ),

            testNumber: 1,

            status:
              freeCertification
                ? "available"
                : "locked",
          },

          // -----------------------------------------------
          // MOCK TEST 2
          // -----------------------------------------------

          test2: {
            ...(
              certification
                .mockTests
                ?.test2 ||
              {}
            ),

            testNumber: 2,

            status:
              certification
                .mockTests
                ?.test2
                ?.status ||
              "locked",
          },

          // -----------------------------------------------
          // MOCK TEST 3
          // -----------------------------------------------

          test3: {
            ...(
              certification
                .mockTests
                ?.test3 ||
              {}
            ),

            testNumber: 3,

            status:
              certification
                .mockTests
                ?.test3
                ?.status ||
              "locked",
          },
        },
      },

      updatedBy,

      version:
        Number(
          enrollment.version ||
            1,
        ) + 1,
    },
  );
};

// =========================================================
// ACTIVATE CERTIFICATION
//
// This function will be called after:
//
// 1. Successful online payment
//
// OR
//
// 2. Admin manually approves certification enrollment
// =========================================================

export const activateCertification = async (
  studentId,
  courseId,
  {
    paymentId = "",
    paymentReference = "",
    paidAt = new Date(),
  } = {},
  updatedBy = "system",
) => {
  if (!studentId) {
    throw new Error(
      "Student ID is required.",
    );
  }

  if (!courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  const enrollment =
    await studentEnrollmentRepository.getStudentCourse(
      studentId,
      courseId,
    );

  if (!enrollment) {
    throw new Error(
      "Enrollment not found.",
    );
  }

  const certification =
    getCertification(
      enrollment,
    );

  return studentEnrollmentRepository.update(
    enrollment.id,
    {
      accessType:
        ENROLLMENT_ACCESS_TYPE
          .CERTIFICATION,

      certification: {
        ...certification,

        status:
          CERTIFICATION_STATUS
            .ACTIVE,

        enrolledAt:
          certification
            .enrolledAt ||
          new Date(),

        activatedAt:
          new Date(),

        // =================================================
        // PAYMENT
        // =================================================

        payment: {
          ...(
            certification.payment ||
            {}
          ),

          status:
            CERTIFICATION_PAYMENT_STATUS
              .PAID,

          paymentId,

          reference:
            paymentReference,

          paidAt,
        },

        // =================================================
        // UNLOCK CERTIFICATION ACCESS
        // =================================================

        access: {
          ...(
            certification.access ||
            {}
          ),

          pdfDownload:
            true,

          mockTests:
            true,

          // Final exam remains locked.
          // It will be unlocked only after
          // all three mock tests are completed.
          finalExam:
            false,
        },

        // =================================================
        // MOCK TESTS
        // =================================================

        mockTests: {
          ...(
            certification.mockTests ||
            {}
          ),

          // Mock Test 1 becomes available immediately.

          test1: {
            ...(
              certification
                .mockTests
                ?.test1 ||
              {}
            ),

            testNumber: 1,

            status:
              certification
                .mockTests
                ?.test1
                ?.passed ===
              true
                ? "passed"
                : "available",
          },

          // Mock Test 2 remains locked until
          // Mock Test 1 requirement is satisfied.

          test2: {
            ...(
              certification
                .mockTests
                ?.test2 ||
              {}
            ),

            testNumber: 2,

            status:
              certification
                .mockTests
                ?.test2
                ?.status ||
              "locked",
          },

          // Mock Test 3 remains locked until
          // Mock Test 2 requirement is satisfied.

          test3: {
            ...(
              certification
                .mockTests
                ?.test3 ||
              {}
            ),

            testNumber: 3,

            status:
              certification
                .mockTests
                ?.test3
                ?.status ||
              "locked",
          },
        },
      },

      updatedBy,

      version:
        Number(
          enrollment.version ||
            1,
        ) + 1,
    },
  );
};

// =========================================================
// COURSE ASSESSMENT RESULTS
// =========================================================

export const saveMockTestResult = async (
  studentId,
  courseId,
  testNumber,
  result,
) => {
  const enrollment =
    await getStudentEnrollment(studentId, courseId);

  if (!hasPaidCourseAccess(enrollment)) {
    throw new Error("Paid course enrollment is required.");
  }

  const number = Number(testNumber);
  if (![1, 2, 3].includes(number)) {
    throw new Error("Invalid mock test number.");
  }

  const certification = enrollment.certification || {};
  const mockTests = certification.mockTests || {};
  const completedAt = new Date();
  const passed = result.percentage >= Number(result.passPercentage || 50);
  const updatedMockTests = {
    ...mockTests,
    [`test${number}`]: {
      ...(mockTests[`test${number}`] || {}),
      testNumber: number,
      status: passed ? "passed" : "failed",
      passed,
      score: result.score,
      maximumMarks: result.maximumMarks,
      percentage: result.percentage,
      completedAt,
    },
  };

  if (number < 3) {
    updatedMockTests[`test${number + 1}`] = {
      ...(mockTests[`test${number + 1}`] || {}),
      testNumber: number + 1,
      status: "available",
    };
  }

  const allCompleted = [1, 2, 3].every((candidate) =>
    ["passed", "failed", "completed"].includes(
      updatedMockTests[`test${candidate}`]?.status,
    ),
  );

  return studentEnrollmentRepository.update(enrollment.id, {
    certification: {
      ...certification,
      access: {
        ...(certification.access || {}),
        finalExam: allCompleted,
      },
      mockTests: updatedMockTests,
      finalExam: {
        ...(certification.finalExam || {}),
        eligible: allCompleted,
        status: allCompleted
          ? "available"
          : certification.finalExam?.status || "locked",
      },
    },
    updatedBy: studentId,
  });
};

export const saveFinalExamResult = async (
  studentId,
  courseId,
  result,
) => {
  const enrollment =
    await getStudentEnrollment(studentId, courseId);

  if (!hasPaidCourseAccess(enrollment)) {
    throw new Error("Paid course enrollment is required.");
  }

  const certification = enrollment.certification || {};
  const allMocksCompleted = [1, 2, 3].every((number) =>
    ["passed", "failed", "completed"].includes(
      certification.mockTests?.[`test${number}`]?.status,
    ),
  );

  if (!allMocksCompleted) {
    throw new Error("Complete all three mock tests first.");
  }

  const passed = result.percentage >= Number(result.passPercentage || 80);
  const completedAt = new Date();

  return studentEnrollmentRepository.update(enrollment.id, {
    certification: {
      ...certification,
      status: passed ? CERTIFICATION_STATUS.COMPLETED : CERTIFICATION_STATUS.ACTIVE,
      completedAt: passed ? completedAt : certification.completedAt || null,
      finalExam: {
        ...(certification.finalExam || {}),
        eligible: true,
        status: passed ? "passed" : "failed",
        passed,
        score: result.score,
        maximumMarks: result.maximumMarks,
        percentage: result.percentage,
        completedAt,
      },
    },
    updatedBy: studentId,
  });
};

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getStudentEnrollments,

  getStudentEnrollment,

  hasPaidCourseAccess,

  enrollStudent,

  updateEnrollmentProgress,

  enrollForCertification,

  activateCertification,

  saveMockTestResult,

  saveFinalExamResult,

  hasActiveCertification,

  canDownloadCoursePdf,

  getCertificationAccess,
};
