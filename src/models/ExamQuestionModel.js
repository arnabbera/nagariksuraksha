import { createBaseModel } from "./BaseModel";

// =========================================================
// QUESTION TYPES
// =========================================================

export const QUESTION_TYPE =
  Object.freeze({
    SINGLE_CHOICE:
      "single-choice",

    MULTIPLE_CHOICE:
      "multiple-choice",

    TRUE_FALSE:
      "true-false",
  });

// =========================================================
// DIFFICULTY
// =========================================================

export const QUESTION_DIFFICULTY =
  Object.freeze({
    EASY: "easy",
    MEDIUM: "medium",
    HARD: "hard",
  });

// =========================================================
// QUESTION MODEL
// =========================================================

export const createExamQuestionModel = ({
  id = null,

  courseId = "",

  chapterId = "",

  question = "",

  questionType =
    QUESTION_TYPE.SINGLE_CHOICE,

  options = [],

  correctOptionIds = [],

  explanation = "",

  difficulty =
    QUESTION_DIFFICULTY.MEDIUM,

  marks = 2,

  negativeMarks = 0,

  mockTestEligible = true,

  finalExamEligible = true,

  published = true,

  displayOrder = 1,

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => {
  const normalizedOptions =
    Array.isArray(options)
      ? options
          .map(
            (
              option,
              index,
            ) => ({
              id:
                option?.id ||
                `option-${index + 1}`,

              text:
                String(
                  option?.text ||
                    "",
                ).trim(),
            }),
          )
          .filter(
            (option) =>
              option.text,
          )
      : [];

  const normalizedCorrectOptionIds =
    Array.isArray(
      correctOptionIds,
    )
      ? correctOptionIds.filter(
          Boolean,
        )
      : [];

  return {
    ...createBaseModel({
      id,

      status:
        published
          ? "published"
          : "draft",

      createdBy,
      updatedBy,

      deleted,
      deletedAt,
      deletedBy,

      version,
    }),

    courseId,

    chapterId,

    question:
      String(
        question || "",
      ).trim(),

    questionType,

    options:
      normalizedOptions,

    correctOptionIds:
      normalizedCorrectOptionIds,

    explanation:
      String(
        explanation || "",
      ).trim(),

    difficulty,

    marks:
      Math.max(
        0,
        Number(
          marks || 0,
        ),
      ),

    negativeMarks:
      Math.max(
        0,
        Number(
          negativeMarks ||
            0,
        ),
      ),

    eligibility: {
      mockTest:
        Boolean(
          mockTestEligible,
        ),

      finalExam:
        Boolean(
          finalExamEligible,
        ),
    },

    published:
      Boolean(
        published,
      ),

    displayOrder:
      Number(
        displayOrder ||
          1,
      ),

    searchKeywords: [
      question,
      explanation,
      difficulty,
      chapterId,
      courseId,
    ]
      .filter(Boolean)
      .flatMap(
        (value) =>
          String(value)
            .toLowerCase()
            .split(/\s+/),
      )
      .filter(
        (
          value,
          index,
          values,
        ) =>
          value &&
          values.indexOf(
            value,
          ) === index,
      ),
  };
};

export default createExamQuestionModel;