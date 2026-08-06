import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";

export const ADMIN_EMAIL = "beraarnab@gmail.com";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const getUserRole = (email) =>
  email?.toLowerCase() === ADMIN_EMAIL ? "admin" : "student";