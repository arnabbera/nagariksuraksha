import {
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { db } from "../firebase/firebase";
import { BaseRepository } from "./BaseRepository";

class UserRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.USERS);
  }

  async getByUid(uid) {
    return this.getById(uid);
  }

  async getByEmail(email) {
    if (!email) {
      return null;
    }

    const usersQuery = query(
      this.collection(),
      where("email", "==", email.toLowerCase()),
    );

    const snapshot = await getDocs(usersQuery);

    if (snapshot.empty) {
      return null;
    }

    const userDocument = snapshot.docs[0];

    return {
      id: userDocument.id,
      ...userDocument.data(),
    };
  }

  async getByEnrollmentId(enrollmentId) {
    if (!enrollmentId) {
      return null;
    }

    const usersQuery = query(
      this.collection(),
      where("enrollmentId", "==", enrollmentId),
    );

    const snapshot = await getDocs(usersQuery);

    if (snapshot.empty) {
      return null;
    }

    const userDocument = snapshot.docs[0];

    return {
      id: userDocument.id,
      ...userDocument.data(),
    };
  }

  async updateLoginData(uid, {
    loginCount,
    previousLoginAt,
    lastLoginAt,
  }) {
    const userReference = doc(
      db,
      COLLECTIONS.USERS,
      uid,
    );

    const userSnapshot = await getDoc(userReference);

    if (!userSnapshot.exists()) {
      throw new Error("User profile not found.");
    }

    await updateDoc(userReference, {
      loginCount,
      previousLoginAt,
      lastLoginAt,
    });

    return this.getById(uid);
  }

  async getStudents() {
    const studentsQuery = query(
      this.collection(),
      where("role", "==", "student"),
    );

    const snapshot = await getDocs(studentsQuery);

    return snapshot.docs.map((userDocument) => ({
      id: userDocument.id,
      ...userDocument.data(),
    }));
  }

  async getAdmins() {
    const adminsQuery = query(
      this.collection(),
      where("role", "==", "admin"),
    );

    const snapshot = await getDocs(adminsQuery);

    return snapshot.docs.map((userDocument) => ({
      id: userDocument.id,
      ...userDocument.data(),
    }));
  }
}

export const userRepository = new UserRepository();
export default userRepository;