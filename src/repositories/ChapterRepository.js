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
  async getAll() {
    const q = query(
      collection(db, COLLECTION),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getByCourse(courseId) {
    const q = query(
      collection(db, COLLECTION),
      where("courseId", "==", courseId),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getById(id) {
    const snapshot = await getDoc(
      doc(db, COLLECTION, id),
    );

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }

  async create(chapter) {
    if (chapter.id) {
      await setDoc(
        doc(db, COLLECTION, chapter.id),
        {
          ...chapter,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
      );

      return chapter;
    }

    const reference = await addDoc(
      collection(db, COLLECTION),
      {
        ...chapter,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
    );

    return {
      id: reference.id,
      ...chapter,
    };
  }

  async update(id, data) {
    await updateDoc(
      doc(db, COLLECTION, id),
      {
        ...data,
        updatedAt: serverTimestamp(),
      },
    );

    return this.getById(id);
  }

  async delete(id) {
    await deleteDoc(
      doc(db, COLLECTION, id),
    );
  }

  async publish(id) {
    return this.update(id, {
      published: true,
      status: "published",
    });
  }

  async unpublish(id) {
    return this.update(id, {
      published: false,
      status: "draft",
    });
  }

  async reorder(chapterId, order) {
    return this.update(chapterId, {
      displayOrder: Number(order),
    });
  }
}

const chapterRepository =
  new ChapterRepository();

export default chapterRepository;