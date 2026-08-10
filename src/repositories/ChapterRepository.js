import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const COLLECTION = "courseChapters";

class ChapterRepository {
  // =========================================================
  // ADMIN - ALL CHAPTERS
  // =========================================================

  async getAll() {
    const q = query(
      collection(db, COLLECTION),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  // =========================================================
  // ADMIN - ALL CHAPTERS FOR A COURSE
  // =========================================================

  async getByCourse(courseId) {
    if (!courseId) {
      return [];
    }

    /*
     * Admin query.
     *
     * This intentionally returns both published and
     * unpublished chapters so Chapter Management
     * continues to work correctly.
     */
    const q = query(
      collection(db, COLLECTION),
      where("courseId", "==", courseId),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  // =========================================================
  // STUDENT - PUBLISHED CHAPTERS FOR A COURSE
  // =========================================================

  async getPublishedByCourse(courseId) {
    if (!courseId) {
      return [];
    }

    /*
     * IMPORTANT:
     *
     * Firestore rules allow normal signed-in students
     * to read courseChapters only when:
     *
     * resource.data.published == true
     *
     * Firestore security rules are not filters.
     * Therefore the student query itself must contain
     * published == true.
     */
    const q = query(
      collection(db, COLLECTION),
      where("courseId", "==", courseId),
      where("published", "==", true),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  // =========================================================
  // GET CHAPTER BY FIRESTORE ID
  // =========================================================

  async getById(id) {
    if (!id) {
      return null;
    }

    const snapshot = await getDoc(
      doc(db, COLLECTION, id),
    );

    if (!snapshot.exists()) {
      return null;
    }

    return {
      ...snapshot.data(),
      id: snapshot.id,
    };
  }

  // =========================================================
  // CREATE
  // =========================================================

  async create(chapter) {
    if (!chapter) {
      throw new Error("Chapter data is required.");
    }

    /*
     * If an explicit Firestore document ID is supplied,
     * do not store the id field inside the document.
     */
    if (chapter.id) {
      const {
        id,
        ...chapterData
      } = chapter;

      await setDoc(
        doc(db, COLLECTION, id),
        {
          ...chapterData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
      );

      return {
        ...chapterData,
        id,
      };
    }

    /*
     * Remove id before addDoc().
     *
     * This prevents id: null or another stored ID
     * from overwriting the real Firestore document ID.
     */
    const {
      id: ignoredId,
      ...chapterData
    } = chapter;

    const reference = await addDoc(
      collection(db, COLLECTION),
      {
        ...chapterData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
    );

    return {
      ...chapterData,
      id: reference.id,
    };
  }

  // =========================================================
  // UPDATE
  // =========================================================

  async update(id, data) {
    if (!id) {
      throw new Error("Chapter ID is required.");
    }

    /*
     * Never persist the Firestore document ID
     * inside the chapter document.
     */
    const {
      id: ignoredId,
      ...updateData
    } = data || {};

    await updateDoc(
      doc(db, COLLECTION, id),
      {
        ...updateData,
        updatedAt: serverTimestamp(),
      },
    );

    return this.getById(id);
  }

  // =========================================================
  // DELETE
  // =========================================================

  async delete(id) {
    if (!id) {
      throw new Error("Chapter ID is required.");
    }

    await deleteDoc(
      doc(db, COLLECTION, id),
    );
  }

  // =========================================================
  // PUBLISH
  // =========================================================

  async publish(id) {
    return this.update(id, {
      published: true,
      status: "published",
    });
  }

  // =========================================================
  // UNPUBLISH
  // =========================================================

  async unpublish(id) {
    return this.update(id, {
      published: false,
      status: "draft",
    });
  }

  // =========================================================
  // REORDER
  // =========================================================

  async reorder(chapterId, order) {
    return this.update(chapterId, {
      displayOrder: Number(order),
    });
  }
}

const chapterRepository =
  new ChapterRepository();

export default chapterRepository;