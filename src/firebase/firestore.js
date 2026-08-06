import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

export const COLLECTIONS = Object.freeze({
  USERS: "users",
  LOGIN_HISTORY: "loginHistory",
  POSTS: "posts",
  VIDEOS: "videos",
  COMMENTS: "comments",
  COURSES: "courses",
  SUBJECTS: "subjects",
  CHAPTERS: "chapters",
  STUDENT_PROGRESS: "studentProgress",
  CERTIFICATES: "certificates",
  SETTINGS: "settings",
  COUNTERS: "counters",
});

export const getUserByUid = async (uid) => {
  if (!uid) {
    throw new Error("User UID is required.");
  }

  const userSnapshot = await getDoc(
    doc(db, COLLECTIONS.USERS, uid),
  );

  return userSnapshot.exists()
    ? {
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }
    : null;
};

export const createUserProfile = async ({
  uid,
  name,
  email,
  photoURL,
  role,
  enrollmentId = null,
}) => {
  if (!uid || !email || !role) {
    throw new Error(
      "UID, email and role are required to create a user profile.",
    );
  }

  const userReference = doc(db, COLLECTIONS.USERS, uid);

  const profile = {
    uid,
    name: name || "",
    email: email.toLowerCase(),
    photoURL: photoURL || "",
    role,
    enrollmentId,
    status: "active",
    loginCount: 1,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    lastLoginAt: serverTimestamp(),
  };

  await setDoc(userReference, profile);

  return profile;
};

export const updateExistingUserLogin = async (uid, loginCount) => {
  const userReference = doc(db, COLLECTIONS.USERS, uid);

  await updateDoc(userReference, {
    loginCount: Number(loginCount || 0) + 1,
    lastLoginAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const recordLoginHistory = async ({
  uid,
  email,
  role,
  enrollmentId = null,
}) => {
  const loginReference = doc(
    collection(db, COLLECTIONS.LOGIN_HISTORY),
  );

  await setDoc(loginReference, {
    uid,
    email: email.toLowerCase(),
    role,
    enrollmentId,
    loggedInAt: serverTimestamp(),
    userAgent:
      typeof navigator !== "undefined"
        ? navigator.userAgent
        : "",
  });
};

export const getPublishedVideos = async (maximumResults = 6) => {
  const videosQuery = query(
    collection(db, COLLECTIONS.VIDEOS),
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    limit(maximumResults),
  );

  const snapshot = await getDocs(videosQuery);

  return snapshot.docs.map((videoDocument) => ({
    id: videoDocument.id,
    ...videoDocument.data(),
  }));
};

export const getPublishedPosts = async (maximumResults = 6) => {
  const postsQuery = query(
    collection(db, COLLECTIONS.POSTS),
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    limit(maximumResults),
  );

  const snapshot = await getDocs(postsQuery);

  return snapshot.docs.map((postDocument) => ({
    id: postDocument.id,
    ...postDocument.data(),
  }));
};

export const toJavaScriptDate = (value) => {
  if (value instanceof Timestamp) {
    return value.toDate();
  }

  return value instanceof Date ? value : null;
};