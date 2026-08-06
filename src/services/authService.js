import {
  GoogleAuthProvider,
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { APP_CONFIG } from "../constants/appConfig";
import { USER_ROLES } from "../constants/enums";
import { auth } from "../firebase/firebase";
import { createUserModel } from "../models/UserModel";
import { userRepository } from "../repositories/UserRepository";
import { generateEnrollmentId } from "./users/enrollmentService";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const normalizeEmail = (email = "") =>
  email.trim().toLowerCase();

export const getRoleFromEmail = (email) =>
  normalizeEmail(email) ===
  normalizeEmail(APP_CONFIG.ADMIN_EMAIL)
    ? USER_ROLES.ADMIN
    : USER_ROLES.STUDENT;

export const createAuthenticatedUserProfile = async (
  firebaseUser,
) => {
  if (!firebaseUser?.uid || !firebaseUser?.email) {
    throw new Error("A valid authenticated user is required.");
  }

  const existingUser = await userRepository.getByUid(
    firebaseUser.uid,
  );

  if (existingUser) {
    const currentLoginCount = Number(
      existingUser.loginCount || 0,
    );

    return userRepository.update(firebaseUser.uid, {
      displayName:
        firebaseUser.displayName ||
        existingUser.displayName ||
        "",
      photoURL:
        firebaseUser.photoURL ||
        existingUser.photoURL ||
        "",
      emailVerified:
        firebaseUser.emailVerified ??
        existingUser.emailVerified ??
        false,
      previousLoginAt: existingUser.lastLoginAt || null,
      lastLoginAt: new Date(),
      loginCount: currentLoginCount + 1,
      updatedBy: firebaseUser.uid,
      version: Number(existingUser.version || 1) + 1,
    });
  }

  const role = getRoleFromEmail(firebaseUser.email);


	  
const enrollmentId = null;

  const userModel = createUserModel({
    uid: firebaseUser.uid,
    enrollmentId,
    email: normalizeEmail(firebaseUser.email),
    displayName: firebaseUser.displayName || "",
    photoURL: firebaseUser.photoURL || "",
    phone: firebaseUser.phoneNumber || "",
    role,
    emailVerified: firebaseUser.emailVerified || false,
    loginCount: 1,
    lastLoginAt: new Date(),
    createdBy: firebaseUser.uid,
    updatedBy: firebaseUser.uid,
  });

  return userRepository.create(
    firebaseUser.uid,
    userModel,
  );
};

export const loginWithGoogle = async () => {
  await setPersistence(auth, browserLocalPersistence);

  const loginResult = await signInWithPopup(
    auth,
    googleProvider,
  );

  const profile = await createAuthenticatedUserProfile(
    loginResult.user,
  );

  return {
    firebaseUser: loginResult.user,
    profile,
  };
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const subscribeToAuthentication = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentFirebaseUser = () =>
  auth.currentUser;

export const isAdminEmail = (email) =>
  getRoleFromEmail(email) === USER_ROLES.ADMIN;