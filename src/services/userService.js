import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { generateEnrollmentId } from "./enrollmentService";

const ADMIN_EMAIL = "beraarnab@gmail.com";

export const getUserProfile = async (uid) => {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const userReference = doc(db, "users", uid);
  const userSnapshot = await getDoc(userReference);

  if (!userSnapshot.exists()) {
    return null;
  }

  return {
    id: userSnapshot.id,
    ...userSnapshot.data(),
  };
};

export const createOrUpdateUserProfile = async (firebaseUser) => {
  if (!firebaseUser?.uid || !firebaseUser?.email) {
    throw new Error("A valid authenticated user is required.");
  }

  const userReference = doc(db, "users", firebaseUser.uid);
  const existingSnapshot = await getDoc(userReference);

  const email = firebaseUser.email.toLowerCase();
  const isAdmin = email === ADMIN_EMAIL;

  if (!existingSnapshot.exists()) {
    const enrollmentId = isAdmin
      ? null
      : await generateEnrollmentId();

    const newProfile = {
      uid: firebaseUser.uid,
      email,
      displayName: firebaseUser.displayName || "",
      photoURL: firebaseUser.photoURL || "",
      phone: firebaseUser.phoneNumber || "",
      role: isAdmin ? "admin" : "student",
      status: "active",
      enrollmentId,
      college: "",
      university: "",
      llbYear: "",
      semester: "",
      loginCount: 1,
      previousLoginAt: null,
      lastLoginAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(userReference, newProfile);

    return newProfile;
  }

  const existingProfile = existingSnapshot.data();

  await updateDoc(userReference, {
    displayName:
      firebaseUser.displayName ||
      existingProfile.displayName ||
      "",
    photoURL:
      firebaseUser.photoURL ||
      existingProfile.photoURL ||
      "",
    role: isAdmin ? "admin" : "student",
    previousLoginAt: existingProfile.lastLoginAt || null,
    lastLoginAt: serverTimestamp(),
    loginCount: Number(existingProfile.loginCount || 0) + 1,
    updatedAt: serverTimestamp(),
  });

  const updatedSnapshot = await getDoc(userReference);

  return {
    id: updatedSnapshot.id,
    ...updatedSnapshot.data(),
  };
};