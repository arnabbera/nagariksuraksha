import { createBaseModel } from "./BaseModel";

// =========================================================
// ENROLLMENT STATUS
// =========================================================

export const ENROLLMENT_STATUS =
  Object.freeze({
    ACTIVE: "active",
    COMPLETED: "completed",
    CANCELLED: "cancelled",
    EXPIRED: "expired",
  });

// =========================================================
// ACCESS TYPE
// =========================================================

export const ENROLLMENT_ACCESS_TYPE =
  Object.freeze({
    FREE_LEARNING:
      "free-learning",

    CERTIFICATION:
      "certification",
  });

// =========================================================
// CERTIFICATION STATUS
// =========================================================

export const CERTIFICATION_STATUS =
  Object.freeze({
    NOT_ENROLLED:
      "not-enrolled",

    PENDING_PAYMENT:
      "pending-payment",

    ACTIVE:
      "active",

    COMPLETED:
      "completed",

    CANCELLED:
      "cancelled",
  });

// =========================================================
// PAYMENT STATUS
// =========================================================

export const CERTIFICATION_PAYMENT_STATUS =
  Object.freeze({
    NOT_REQUIRED:
      "not-required",

    PENDING:
      "pending",

    PAID:
      "paid",

    FAILED:
      "failed",

    REFUNDED:
      "refunded",
  });

// =========================================================
// MOCK TEST STATUS
// =========================================================

export const MOCK_TEST_STATUS =
  Object.freeze({
    LOCKED:
      "locked",

    AVAILABLE:
      "available",

    IN_PROGRESS:
      "in-progress",

    COMPLETED:
      "completed",

    PASSED:
      "passed",

    FAILED:
      "failed",
  });

// =========================================================
// FINAL EXAM STATUS
// =========================================================

export const FINAL_EXAM_STATUS =
  Object.freeze({
    LOCKED:
      "locked",

    ELIGIBLE:
      "eligible",

    NOT_SCHEDULED:
      "not-scheduled",

    SCHEDULED:
      "scheduled",

    IN_PROGRESS:
      "in-progress",

    SUBMITTED:
      "submitted",

    PASSED:
      "passed",

    FAILED:
      "failed",

    ABSENT:
      "absent",
  });

// =========================================================
// CERTIFICATE STATUS
// =========================================================

export const CERTIFICATE_STATUS =
  Object.freeze({
    NOT_ELIGIBLE:
      "not-eligible",

    ELIGIBLE:
      "eligible",

    PENDING:
      "pending",

    ISSUED:
      "issued",

    REVOKED:
      "revoked",
  });

// =========================================================
// MOCK TEST FACTORY
// =========================================================

const createMockTestState = (
  testNumber,
) => ({
  testNumber,

  status:
    testNumber === 1
      ? MOCK_TEST_STATUS.LOCKED
      : MOCK_TEST_STATUS.LOCKED,

  attempts: 0,

  bestScore: 0,
  maximumScore: 0,
  percentage: 0,

  passed: false,

  startedAt: null,
  completedAt: null,
});

// =========================================================
// STUDENT ENROLLMENT MODEL
// =========================================================

export const createStudentEnrollmentModel = ({
  id = null,

  studentId = "",
  courseId = "",

  status =
    ENROLLMENT_STATUS.ACTIVE,

  enrolledAt = null,
  startedAt = null,
  completedAt = null,
  expiresAt = null,

  progressPercentage = 0,

  completedChapters = 0,
  totalChapters = 0,

  accessType =
    ENROLLMENT_ACCESS_TYPE
      .FREE_LEARNING,

  // =======================================================
  // CERTIFICATION
  // =======================================================

  certificationStatus =
    CERTIFICATION_STATUS
      .NOT_ENROLLED,

  certificationEnrolledAt =
    null,

  certificationActivatedAt =
    null,

  certificationFee = 0,

  paymentStatus =
    CERTIFICATION_PAYMENT_STATUS
      .NOT_REQUIRED,

  paymentId = "",
  paymentReference = "",
  paidAt = null,

  pdfDownloadAccess = false,

  mockTest1 = null,
  mockTest2 = null,
  mockTest3 = null,

  finalExamEligible = false,

  finalExamStatus =
    FINAL_EXAM_STATUS.LOCKED,

  finalExamId = "",

  finalExamScheduledAt =
    null,

  finalExamStartedAt =
    null,

  finalExamSubmittedAt =
    null,

  finalExamScore = 0,

  finalExamMaximumScore = 0,

  finalExamPercentage = 0,

  finalExamPassed = false,

  certificateEligible = false,

  certificateStatus =
    CERTIFICATE_STATUS
      .NOT_ELIGIBLE,

  certificateId = "",

  certificateIssuedAt = null,

  certificateVerificationCode =
    "",

  certificatePdfUrl = "",

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => ({
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

  // =======================================================
  // BASIC ENROLLMENT
  // =======================================================

  studentId,
  courseId,

  enrolledAt,
  startedAt,
  completedAt,
  expiresAt,

  progress: {
    percentage:
      Number(
        progressPercentage ||
          0,
      ),

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

  accessType,

  // =======================================================
  // CERTIFICATION ENROLLMENT
  // =======================================================

  certification: {
    status:
      certificationStatus,

    enrolledAt:
      certificationEnrolledAt,

    activatedAt:
      certificationActivatedAt,

    fee:
      Number(
        certificationFee ||
          0,
      ),

    // -----------------------------------------------------
    // PAYMENT
    // -----------------------------------------------------

    payment: {
      status:
        paymentStatus,

      paymentId,

      reference:
        paymentReference,

      paidAt,
    },

    // -----------------------------------------------------
    // CERTIFICATION ACCESS
    // -----------------------------------------------------

    access: {
      pdfDownload:
        Boolean(
          pdfDownloadAccess,
        ),

      mockTests:
        certificationStatus ===
          CERTIFICATION_STATUS
            .ACTIVE,

      finalExam:
        Boolean(
          finalExamEligible,
        ),
    },

    // -----------------------------------------------------
    // THREE MOCK TESTS
    // -----------------------------------------------------

    mockTests: {
      test1:
        mockTest1 || {
          ...createMockTestState(
            1,
          ),

          status:
            certificationStatus ===
            CERTIFICATION_STATUS
              .ACTIVE
              ? MOCK_TEST_STATUS
                  .AVAILABLE
              : MOCK_TEST_STATUS
                  .LOCKED,
        },

      test2:
        mockTest2 ||
        createMockTestState(
          2,
        ),

      test3:
        mockTest3 ||
        createMockTestState(
          3,
        ),
    },

    // -----------------------------------------------------
    // FINAL EXAM
    // -----------------------------------------------------

    finalExam: {
      eligible:
        Boolean(
          finalExamEligible,
        ),

      status:
        finalExamStatus,

      examId:
        finalExamId,

      scheduledAt:
        finalExamScheduledAt,

      startedAt:
        finalExamStartedAt,

      submittedAt:
        finalExamSubmittedAt,

      score:
        Number(
          finalExamScore ||
            0,
        ),

      maximumScore:
        Number(
          finalExamMaximumScore ||
            0,
        ),

      percentage:
        Number(
          finalExamPercentage ||
            0,
        ),

      passed:
        Boolean(
          finalExamPassed,
        ),
    },

    // -----------------------------------------------------
    // CERTIFICATE
    // -----------------------------------------------------

    certificate: {
      eligible:
        Boolean(
          certificateEligible,
        ),

      status:
        certificateStatus,

      certificateId,

      issuedAt:
        certificateIssuedAt,

      verificationCode:
        certificateVerificationCode,

      pdfUrl:
        certificatePdfUrl,
    },
  },
});

export default createStudentEnrollmentModel;