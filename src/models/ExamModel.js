import { createBaseModel } from "./BaseModel";

// =========================================================
// EXAM TYPES
// =========================================================

export const EXAM_TYPE =
  Object.freeze({
    MOCK: "mock",
    FINAL: "final",
  });

// =========================================================
// EXAM STATUS
// =========================================================

export const EXAM_STATUS =
  Object.freeze({
    DRAFT: "draft",
    PUBLISHED: "published",
    SCHEDULED: "scheduled",
    ACTIVE: "active",
    COMPLETED: "completed",
    CANCELLED: "cancelled",
  });

// =========================================================
// MOCK TEST NUMBER
// =========================================================

export const MOCK_TEST_NUMBER =
  Object.freeze({
    MOCK_1: 1,
    MOCK_2: 2,
    MOCK_3: 3,
  });

// =========================================================
// QUESTION SELECTION
// =========================================================

export const QUESTION_SELECTION_MODE =
  Object.freeze({
    MANUAL: "manual",
    RANDOM: "random",
  });

// =========================================================
// EXAM MODEL
// =========================================================

export const createExamModel = ({
  id = null,

  courseId = "",

  title = "",
  description = "",
  instructions = "",

  examType =
    EXAM_TYPE.MOCK,

  mockTestNumber = null,

  status =
    EXAM_STATUS.DRAFT,

  // =======================================================
  // QUESTION CONFIGURATION
  // =======================================================

  totalQuestions = 30,

  marksPerQuestion = 2,

  negativeMarking = false,

  negativeMarksPerQuestion = 0,

  questionSelectionMode =
    QUESTION_SELECTION_MODE.MANUAL,

  randomizeQuestions = true,

  randomizeOptions = true,

  // =======================================================
  // PASSING RULE
  // =======================================================

  passPercentage = 50,

  // =======================================================
  // ATTEMPT RULES
  // =======================================================

  maxAttempts = 3,

  // =======================================================
  // TIME
  // =======================================================

  durationMinutes = 30,

  scheduledStartAt = null,

  scheduledEndAt = null,

  // =======================================================
  // ACCESS
  // =======================================================

  certificationRequired = true,

  requiresPreviousMockTest = true,

  // =======================================================
  // RESULT
  // =======================================================

  showResultImmediately = true,

  showCorrectAnswersAfterSubmission =
    true,

  // =======================================================
  // ADMIN CONTROL
  // =======================================================

  adminApprovalRequired = false,

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => {
  const normalizedQuestions =
    Math.max(
      1,
      Number(
        totalQuestions || 30,
      ),
    );

  const normalizedMarks =
    Math.max(
      0,
      Number(
        marksPerQuestion || 0,
      ),
    );

  const maximumMarks =
    normalizedQuestions *
    normalizedMarks;

  const normalizedPassPercentage =
    Math.min(
      100,
      Math.max(
        0,
        Number(
          passPercentage || 0,
        ),
      ),
    );

  const passingMarks =
    Math.ceil(
      maximumMarks *
        (
          normalizedPassPercentage /
          100
        ),
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
    // EXAM INFORMATION
    // =====================================================

    title:
      String(
        title || "",
      ).trim(),

    description:
      String(
        description || "",
      ).trim(),

    instructions:
      String(
        instructions || "",
      ).trim(),

    examType,

    mockTestNumber:
      examType ===
      EXAM_TYPE.MOCK
        ? Number(
            mockTestNumber ||
              1,
          )
        : null,

    // =====================================================
    // QUESTION CONFIGURATION
    // =====================================================

    questions: {
      total:
        normalizedQuestions,

      marksPerQuestion:
        normalizedMarks,

      maximumMarks,

      selectionMode:
        questionSelectionMode,

      randomizeQuestions:
        Boolean(
          randomizeQuestions,
        ),

      randomizeOptions:
        Boolean(
          randomizeOptions,
        ),
    },

    // =====================================================
    // MARKING
    // =====================================================

    marking: {
      negativeMarking:
        Boolean(
          negativeMarking,
        ),

      negativeMarksPerQuestion:
        negativeMarking
          ? Math.max(
              0,
              Number(
                negativeMarksPerQuestion ||
                  0,
              ),
            )
          : 0,

      passPercentage:
        normalizedPassPercentage,

      passingMarks,
    },

    // =====================================================
    // ATTEMPTS
    // =====================================================

    attempts: {
      maximum:
        examType ===
        EXAM_TYPE.FINAL
          ? 1
          : Math.max(
              1,
              Number(
                maxAttempts ||
                  3,
              ),
            ),
    },

    // =====================================================
    // TIMING
    // =====================================================

    timing: {
      durationMinutes:
        Math.max(
          1,
          Number(
            durationMinutes ||
              30,
          ),
        ),

      scheduledStartAt,

      scheduledEndAt,
    },

    // =====================================================
    // ACCESS RULES
    // =====================================================

    access: {
      certificationRequired:
        Boolean(
          certificationRequired,
        ),

      requiresPreviousMockTest:
        examType ===
          EXAM_TYPE.MOCK &&
        Number(
          mockTestNumber ||
            1,
        ) > 1
          ? Boolean(
              requiresPreviousMockTest,
            )
          : false,

      adminApprovalRequired:
        examType ===
        EXAM_TYPE.FINAL
          ? true
          : Boolean(
              adminApprovalRequired,
            ),
    },

    // =====================================================
    // RESULT SETTINGS
    // =====================================================

    resultSettings: {
      showResultImmediately:
        examType ===
        EXAM_TYPE.FINAL
          ? false
          : Boolean(
              showResultImmediately,
            ),

      showCorrectAnswersAfterSubmission:
        examType ===
        EXAM_TYPE.FINAL
          ? false
          : Boolean(
              showCorrectAnswersAfterSubmission,
            ),
    },
  };
};

export default createExamModel;