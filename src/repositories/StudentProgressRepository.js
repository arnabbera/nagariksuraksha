import {
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class StudentProgressRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.STUDENT_PROGRESS);
  }

  async getByStudent(studentId) {
    if (!studentId) {
      return [];
    }

    const progressQuery = query(
      this.collection(),
      where("studentId", "==", studentId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(progressQuery);

    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  async getByStudentCourse(
    studentId,
    courseId,
  ) {
    if (!studentId || !courseId) {
      return [];
    }

    const progressQuery = query(
      this.collection(),
      where("studentId", "==", studentId),
      where("courseId", "==", courseId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(progressQuery);

    return snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  }

  async getChapterProgress(
    studentId,
    chapterId,
  ) {
    if (!studentId || !chapterId) {
      return null;
    }

    const progressQuery = query(
      this.collection(),
      where("studentId", "==", studentId),
      where("chapterId", "==", chapterId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(progressQuery);

    if (snapshot.empty) {
      return null;
    }

    const document = snapshot.docs[0];

    return {
      ...document.data(),
      id: document.id,
    };
  }
}

export const studentProgressRepository =
  new StudentProgressRepository();

export default studentProgressRepository;