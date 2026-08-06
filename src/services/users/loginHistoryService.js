import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { COLLECTIONS } from "../../constants/firestoreCollections";
import { db } from "../../firebase/firebase";

const detectDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/tablet|ipad/.test(userAgent)) {
    return "tablet";
  }

  if (/mobile|android|iphone/.test(userAgent)) {
    return "mobile";
  }

  return "desktop";
};

export const recordLoginHistory = async ({
  userId,
  email,
  role,
  enrollmentId = null,
}) => {
  if (!userId || !email) {
    throw new Error("User ID and email are required.");
  }

  const loginHistoryReference = collection(
    db,
    COLLECTIONS.LOGIN_HISTORY,
  );

  const documentReference = await addDoc(
    loginHistoryReference,
    {
      userId,
      email: email.toLowerCase(),
      role,
      enrollmentId,
      loginAt: serverTimestamp(),
      logoutAt: null,
      deviceType: detectDeviceType(),
      userAgent: navigator.userAgent,
      language: navigator.language || "",
      platform: navigator.platform || "",
      createdAt: serverTimestamp(),
    },
  );

  return documentReference.id;
};