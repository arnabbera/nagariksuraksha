import {
  addDoc,
  collection,
  deleteDoc,
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
  "courseBooks";

const courseBooksCollection =
  collection(
    db,
    COLLECTION_NAME,
  );

// =========================================================
// CREATE COURSE BOOK
// =========================================================

export async function createCourseBook(
  bookData,
) {
  if (!bookData?.courseId) {
    throw new Error(
      "Course ID is required.",
    );
  }

  const payload = {
    ...bookData,

    createdAt:
      serverTimestamp(),

    updatedAt:
      serverTimestamp(),
  };

  const documentReference =
    await addDoc(
      courseBooksCollection,
      payload,
    );

  return {
    id:
      documentReference.id,

    ...bookData,
  };
}

// =========================================================
// GET COURSE BOOK BY ID
// =========================================================

export async function getCourseBookById(
  bookId,
) {
  if (!bookId) {
    return null;
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      bookId,
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
// GET ALL BOOKS FOR A COURSE
// ADMIN PORTAL
// =========================================================

export async function getCourseBooks(
  courseId,
) {
  if (!courseId) {
    return [];
  }

  const booksQuery =
    query(
      courseBooksCollection,

      where(
        "courseId",
        "==",
        courseId,
      ),
    );

  const snapshot =
    await getDocs(
      booksQuery,
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
      (book) =>
        book.deleted !==
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
// GET PUBLISHED BOOKS FOR STUDENT PORTAL
// =========================================================

export async function getPublishedCourseBooks(
  courseId,
) {
  if (!courseId) {
    return [];
  }

  /*
   * IMPORTANT:
   *
   * Firestore security rules allow students to read
   * only documents where published == true.
   *
   * Therefore published == true must be part of the
   * Firestore query itself.
   */

  const booksQuery =
    query(
      courseBooksCollection,

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
    );

  const snapshot =
    await getDocs(
      booksQuery,
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
      (book) =>
        book.deleted !==
          true &&
        book.recommended ===
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
// UPDATE COURSE BOOK
// =========================================================

export async function updateCourseBook(
  bookId,
  updates,
) {
  if (!bookId) {
    throw new Error(
      "Book ID is required.",
    );
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      bookId,
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
      bookId,

    ...updates,
  };
}

// =========================================================
// SOFT DELETE COURSE BOOK
// =========================================================

export async function softDeleteCourseBook(
  bookId,
  deletedBy = "system",
) {
  if (!bookId) {
    throw new Error(
      "Book ID is required.",
    );
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      bookId,
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
// HARD DELETE COURSE BOOK
// =========================================================

export async function deleteCourseBook(
  bookId,
) {
  if (!bookId) {
    throw new Error(
      "Book ID is required.",
    );
  }

  const documentReference =
    doc(
      db,
      COLLECTION_NAME,
      bookId,
    );

  await deleteDoc(
    documentReference,
  );

  return true;
}

// =========================================================
// COUNT COURSE BOOKS
// =========================================================

export async function countCourseBooks(
  courseId,
) {
  if (!courseId) {
    return 0;
  }

  const books =
    await getCourseBooks(
      courseId,
    );

  return books.length;
}

// =========================================================
// CHECK MINIMUM RECOMMENDED BOOKS
// =========================================================

export async function hasMinimumRecommendedBooks(
  courseId,
  minimumBooks = 10,
) {
  if (!courseId) {
    return false;
  }

  const books =
    await getCourseBooks(
      courseId,
    );

  const recommendedBooks =
    books.filter(
      (book) =>
        book.recommended ===
          true &&
        book.deleted !==
          true,
    );

  return (
    recommendedBooks.length >=
    minimumBooks
  );
}

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  createCourseBook,
  getCourseBookById,
  getCourseBooks,
  getPublishedCourseBooks,
  updateCourseBook,
  softDeleteCourseBook,
  deleteCourseBook,
  countCourseBooks,
  hasMinimumRecommendedBooks,
};