import {
  createCourseBookModel,
} from "../models/CourseBookModel";

import {
  countCourseBooks,
  createCourseBook,
  getCourseBookById,
  getCourseBooks,
  getPublishedCourseBooks,
  hasMinimumRecommendedBooks,
  softDeleteCourseBook,
  updateCourseBook,
} from "../repositories/CourseBookRepository";

import { generalPrinciplesOfContractBooks } from "../data/courses/generalPrinciplesOfContract";
import { environmentalLawBooks } from "../data/courses/environmentalLaw";

const bundledCourseBooks = [
  ...generalPrinciplesOfContractBooks,
  ...environmentalLawBooks,
];

// =========================================================
// GET ALL BOOKS FOR ADMIN
// =========================================================

export const getBooksByCourse = async (
  courseId,
) => {
  if (!courseId) {
    return [];
  }

  const storedBooks = await getCourseBooks(
    courseId,
  );

  const bookMap = new Map(
    bundledCourseBooks
      .filter((book) => book.courseId === courseId)
      .map((book) => [book.id, book]),
  );

  for (const book of storedBooks || []) {
    if (book?.id) bookMap.set(book.id, book);
  }

  return [...bookMap.values()].sort(
    (first, second) =>
      Number(first.displayOrder || 0) - Number(second.displayOrder || 0),
  );
};

// =========================================================
// GET PUBLISHED BOOKS FOR STUDENTS
// =========================================================

export const getPublishedBooksByCourse =
  async (
    courseId,
  ) => {
    if (!courseId) {
      return [];
    }

    const storedBooks =
      await getPublishedCourseBooks(
        courseId,
      );

    const bookMap = new Map(
      bundledCourseBooks
        .filter((book) => book.courseId === courseId)
        .map((book) => [book.id, book]),
    );

    for (const book of storedBooks || []) {
      if (book?.id) bookMap.set(book.id, book);
    }

    return [...bookMap.values()].sort(
      (first, second) =>
        Number(first.displayOrder || 0) - Number(second.displayOrder || 0),
    );
  };

// =========================================================
// GET SINGLE BOOK
// =========================================================

export const getBookById = async (
  bookId,
) => {
  if (!bookId) {
    return null;
  }

  return getCourseBookById(
    bookId,
  );
};

// =========================================================
// CREATE BOOK
// =========================================================

export const addCourseBook = async (
  bookData,
  createdBy = "system",
) => {
  if (!bookData?.courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  if (
    !bookData?.title?.trim()
  ) {
    throw new Error(
      "Book title is required.",
    );
  }

  const model =
    createCourseBookModel({
      ...bookData,

      createdBy,
      updatedBy:
        createdBy,
    });

  return createCourseBook(
    model,
  );
};

// =========================================================
// UPDATE BOOK
// =========================================================

export const editCourseBook = async (
  bookId,
  bookData,
  updatedBy = "system",
) => {
  if (!bookId) {
    throw new Error(
      "Book ID is required.",
    );
  }

  if (
    !bookData?.title?.trim()
  ) {
    throw new Error(
      "Book title is required.",
    );
  }

  const updates = {
    ...bookData,

    updatedBy,
  };

  return updateCourseBook(
    bookId,
    updates,
  );
};

// =========================================================
// DELETE BOOK
// =========================================================

export const removeCourseBook = async (
  bookId,
  deletedBy = "system",
) => {
  if (!bookId) {
    throw new Error(
      "Book ID is required.",
    );
  }

  return softDeleteCourseBook(
    bookId,
    deletedBy,
  );
};

// =========================================================
// COUNT BOOKS
// =========================================================

export const getCourseBookCount = async (
  courseId,
) => {
  return countCourseBooks(
    courseId,
  );
};

// =========================================================
// MINIMUM 10 RECOMMENDED BOOKS
// =========================================================

export const checkRecommendedBookRequirement =
  async (
    courseId,
  ) => {
    const minimumRequired =
      10;

    const books =
      await getCourseBooks(
        courseId,
      );

    const recommendedCount =
      books.filter(
        (book) =>
          book.recommended ===
          true,
      ).length;

    return {
      minimumRequired,

      currentCount:
        recommendedCount,

      remaining:
        Math.max(
          0,
          minimumRequired -
            recommendedCount,
        ),

      satisfied:
        recommendedCount >=
        minimumRequired,
    };
  };

// =========================================================
// SIMPLE BOOLEAN CHECK
// =========================================================

export const hasRequiredRecommendedBooks =
  async (
    courseId,
  ) =>
    hasMinimumRecommendedBooks(
      courseId,
      10,
    );

export default {
  getBooksByCourse,
  getPublishedBooksByCourse,
  getBookById,
  addCourseBook,
  editCourseBook,
  removeCourseBook,
  getCourseBookCount,
  checkRecommendedBookRequirement,
  hasRequiredRecommendedBooks,
};
