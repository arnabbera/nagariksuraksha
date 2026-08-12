import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

// =========================================================
// COLLECTION
// =========================================================

const COLLECTION_NAME =
  "examQuestions";

const examQuestionsCollection =
  collection(
    db,
    COLLECTION_NAME,
  );

// =========================================================
// CREATE QUESTION
// =========================================================

export async function createExamQuestion(
  questionData,
) {
  const payload = {
    ...questionData,

    createdAt:
      serverTimestamp(),

    updatedAt:
      serverTimestamp(),
  };

  const documentReference =
    await addDoc(
      examQuestionsCollection,
      payload,
    );

  return {
    id:
      documentReference.id,

    ...questionData,
  };
}

// =========================================================
// GET QUESTION BY ID
// =========================================================

export async function getExamQuestionById(
  questionId,
) {
  if (!questionId) {
    return null;
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      questionId,
    );

  const snapshot =
    await getDoc(
      documentReference,
    );

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id:
      snapshot.id,

    ...snapshot.data(),
  };
}

// =========================================================
// GET QUESTIONS BY COURSE
// ADMIN
// =========================================================

export async function getExamQuestionsByCourse(
  courseId,
) {
  if (!courseId) {
    return [];
  }

  const questionsQuery =
    query(
      examQuestionsCollection,

      where(
        "courseId",
        "==",
        courseId,
      ),
    );

  const snapshot =
    await getDocs(
      questionsQuery,
    );

  return snapshot.docs
    .map(
      (document) => ({
        id:
          document.id,

        ...document.data(),
      }),
    )
    .filter(
      (question) =>
        question.deleted !==
        true,
    )
    .sort(
      (
        first,
        second,
      ) =>
        Number(
          first.displayOrder ||
            0,
        ) -
        Number(
          second.displayOrder ||
            0,
        ),
    );
}

// =========================================================
// GET QUESTIONS BY CHAPTER
// =========================================================

export async function getExamQuestionsByChapter(
  courseId,
  chapterId,
) {
  if (
    !courseId ||
    !chapterId
  ) {
    return [];
  }

  const questionsQuery =
    query(
      examQuestionsCollection,

      where(
        "courseId",
        "==",
        courseId,
      ),

      where(
        "chapterId",
        "==",
        chapterId,
      ),
    );

  const snapshot =
    await getDocs(
      questionsQuery,
    );

  return snapshot.docs
    .map(
      (document) => ({
        id:
          document.id,

        ...document.data(),
      }),
    )
    .filter(
      (question) =>
        question.deleted !==
        true,
    )
    .sort(
      (
        first,
        second,
      ) =>
        Number(
          first.displayOrder ||
            0,
        ) -
        Number(
          second.displayOrder ||
            0,
        ),
    );
}

// =========================================================
// GET PUBLISHED MOCK TEST QUESTIONS
// =========================================================

export async function getPublishedMockQuestions(
  courseId,
) {
  if (!courseId) {
    return [];
  }

  const questionsQuery =
    query(
      examQuestionsCollection,

      where(
        "courseId",
        "==",
        courseId,
      ),

      where(
        "published",
        "==",
        true,
      ),

      where(
        "eligibility.mockTest",
        "==",
        true,
      ),
    );

  const snapshot =
    await getDocs(
      questionsQuery,
    );

  return snapshot.docs
    .map(
      (document) => ({
        id:
          document.id,

        ...document.data(),
      }),
    )
    .filter(
      (question) =>
        question.deleted !==
        true,
    );
}

// =========================================================
// GET PUBLISHED FINAL EXAM QUESTIONS
// =========================================================

export async function getPublishedFinalExamQuestions(
  courseId,
) {
  if (!courseId) {
    return [];
  }

  const questionsQuery =
    query(
      examQuestionsCollection,

      where(
        "courseId",
        "==",
        courseId,
      ),

      where(
        "published",
        "==",
        true,
      ),

      where(
        "eligibility.finalExam",
        "==",
        true,
      ),
    );

  const snapshot =
    await getDocs(
      questionsQuery,
    );

  return snapshot.docs
    .map(
      (document) => ({
        id:
          document.id,

        ...document.data(),
      }),
    )
    .filter(
      (question) =>
        question.deleted !==
        true,
    );
}

// =========================================================
// UPDATE QUESTION
// =========================================================

export async function updateExamQuestion(
  questionId,
  updates,
) {
  if (!questionId) {
    throw new Error(
      "Question ID is required.",
    );
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      questionId,
    );

  await updateDoc(
    documentReference,
    {
      ...updates,

      updatedAt:
        serverTimestamp(),
    },
  );

  return {
    id:
      questionId,

    ...updates,
  };
}

// =========================================================
// SOFT DELETE QUESTION
// =========================================================

export async function softDeleteExamQuestion(
  questionId,
  deletedBy = "system",
) {
  if (!questionId) {
    throw new Error(
      "Question ID is required.",
    );
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      questionId,
    );

  await updateDoc(
    documentReference,
    {
      deleted:
        true,

      deletedAt:
        serverTimestamp(),

      deletedBy,

      updatedAt:
        serverTimestamp(),
    },
  );

  return true;
}

// =========================================================
// COUNT COURSE QUESTIONS
// =========================================================

export async function countExamQuestions(
  courseId,
) {
  const questions =
    await getExamQuestionsByCourse(
      courseId,
    );

  return questions.length;
}

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  createExamQuestion,
  getExamQuestionById,
  getExamQuestionsByCourse,
  getExamQuestionsByChapter,
  getPublishedMockQuestions,
  getPublishedFinalExamQuestions,
  updateExamQuestion,
  softDeleteExamQuestion,
  countExamQuestions,
};