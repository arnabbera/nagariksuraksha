import {
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class StudentEnrollmentRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.STUDENT_ENROLLMENTS);
  }

  async getByStudent(studentId) {
    if (!studentId) {
      return [];
    }

    const enrollmentQuery = query(
      this.collection(),
      where("studentId", "==", studentId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(enrollmentQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getByCourse(courseId) {
    if (!courseId) {
      return [];
    }

    const enrollmentQuery = query(
      this.collection(),
      where("courseId", "==", courseId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(enrollmentQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getStudentCourse(
    studentId,
    courseId,
  ) {
    if (!studentId || !courseId) {
      return null;
    }

    const enrollmentQuery = query(
      this.collection(),
      where("studentId", "==", studentId),
      where("courseId", "==", courseId),
      where("deleted", "==", false),
    );

    const snapshot = await getDocs(enrollmentQuery);

    if (snapshot.empty) {
      return null;
    }

    const document = snapshot.docs[0];

    return {
      id: document.id,
      ...document.data(),
    };
  }
}

export const studentEnrollmentRepository =
  new StudentEnrollmentRepository();

export default studentEnrollmentRepository;