import {
  createExamQuestionModel,
} from "../models/ExamQuestionModel";

import examQuestionRepository from "../repositories/ExamQuestionRepository";

// =========================================================
// GET ALL QUESTIONS FOR ADMIN BY COURSE
// =========================================================

export const getQuestionsByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  return examQuestionRepository.getExamQuestionsByCourse(
    courseId,
  );
};

// =========================================================
// GET QUESTIONS BY CHAPTER
// =========================================================

export const getQuestionsByChapter = async (
  courseId,
  chapterId,
) => {
  if (
    !courseId ||
    !chapterId
  ) {
    return [];
  }

  return examQuestionRepository.getExamQuestionsByChapter(
    courseId,
    chapterId,
  );
};

// =========================================================
// GET QUESTION BY ID
// =========================================================

export const getQuestionById = async (
  questionId,
) => {
  if (!questionId) {
    return null;
  }

  return examQuestionRepository.getExamQuestionById(
    questionId,
  );
};

// =========================================================
// CREATE QUESTION
// =========================================================

export const addExamQuestion = async (
  questionData,
  createdBy = "system",
) => {
  if (!questionData?.courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  if (
    !questionData?.question?.trim()
  ) {
    throw new Error(
      "Question text is required.",
    );
  }

  if (
    !Array.isArray(
      questionData.options,
    ) ||
    questionData.options.length <
      2
  ) {
    throw new Error(
      "At least two answer options are required.",
    );
  }

  if (
    !Array.isArray(
      questionData.correctOptionIds,
    ) ||
    questionData
      .correctOptionIds
      .length === 0
  ) {
    throw new Error(
      "At least one correct answer is required.",
    );
  }

  const model =
    createExamQuestionModel({
      ...questionData,

      createdBy,
      updatedBy:
        createdBy,
    });

  return examQuestionRepository.createExamQuestion(
    model,
  );
};

// =========================================================
// UPDATE QUESTION
// =========================================================

export const editExamQuestion = async (
  questionId,
  questionData,
  updatedBy = "system",
) => {
  if (!questionId) {
    throw new Error(
      "Question ID is required.",
    );
  }

  if (
    !questionData?.question?.trim()
  ) {
    throw new Error(
      "Question text is required.",
    );
  }

  if (
    !Array.isArray(
      questionData.options,
    ) ||
    questionData.options.length <
      2
  ) {
    throw new Error(
      "At least two answer options are required.",
    );
  }

  if (
    !Array.isArray(
      questionData.correctOptionIds,
    ) ||
    questionData
      .correctOptionIds
      .length === 0
  ) {
    throw new Error(
      "At least one correct answer is required.",
    );
  }

  const existing =
    await examQuestionRepository.getExamQuestionById(
      questionId,
    );

  if (!existing) {
    throw new Error(
      "Question not found.",
    );
  }

  const model =
    createExamQuestionModel({
      ...existing,

      ...questionData,

      id:
        questionId,

      createdBy:
        existing.createdBy ||
        "system",

      updatedBy,

      version:
        Number(
          existing.version ||
            1,
        ) + 1,
    });

  return examQuestionRepository.updateExamQuestion(
    questionId,
    model,
  );
};

// =========================================================
// SOFT DELETE QUESTION
// =========================================================

export const removeExamQuestion = async (
  questionId,
  deletedBy = "system",
) => {
  if (!questionId) {
    throw new Error(
      "Question ID is required.",
    );
  }

  return examQuestionRepository.softDeleteExamQuestion(
    questionId,
    deletedBy,
  );
};

// =========================================================
// PUBLISH / UNPUBLISH
// =========================================================

export const setExamQuestionPublished = async (
  questionId,
  published,
  updatedBy = "system",
) => {
  const existing =
    await examQuestionRepository.getExamQuestionById(
      questionId,
    );

  if (!existing) {
    throw new Error(
      "Question not found.",
    );
  }

  return examQuestionRepository.updateExamQuestion(
    questionId,
    {
      published:
        Boolean(
          published,
        ),

      status:
        published
          ? "published"
          : "draft",

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
// GET PUBLISHED MOCK QUESTIONS
// =========================================================

export const getMockQuestionsByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  return examQuestionRepository.getPublishedMockQuestions(
    courseId,
  );
};

// =========================================================
// GET PUBLISHED FINAL EXAM QUESTIONS
// =========================================================

export const getFinalExamQuestionsByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  return examQuestionRepository.getPublishedFinalExamQuestions(
    courseId,
  );
};

// =========================================================
// COUNT QUESTIONS
// =========================================================

export const getCourseQuestionCount = async (
  courseId,
) => {
  if (!courseId) {
    return 0;
  }

  return examQuestionRepository.countExamQuestions(
    courseId,
  );
};

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getQuestionsByCourse,

  getQuestionsByChapter,

  getQuestionById,

  addExamQuestion,

  editExamQuestion,

  removeExamQuestion,

  setExamQuestionPublished,

  getMockQuestionsByCourse,

  getFinalExamQuestionsByCourse,

  getCourseQuestionCount,
};