import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const SETTINGS_DOCUMENT_PATH = "settings/general";

export async function seedSettings() {
  const settingsReference = doc(db, SETTINGS_DOCUMENT_PATH);
  const settingsSnapshot = await getDoc(settingsReference);

  if (settingsSnapshot.exists()) {
    return {
      status: "skipped",
      message: "General settings already exist.",
    };
  }

  const settingsData = {
    siteName: "NagarikSuraksha",
    tagline: "Legal Learning & Consultancy",
    adminEmail: "beraarnab@gmail.com",

    contact: {
      email: "info@nagariksuraksha.com",
      phone: "",
      whatsapp: "",
      address: "Kolkata, West Bengal, India",
      mapEmbedUrl: "",
    },

    socialLinks: {
      facebook: "",
      youtube: "https://www.youtube.com/@nagariksuraksha-ab",
      instagram: "",
      linkedin: "",
    },

    comments: {
      enabled: true,
      moderationRequired: true,
      maximumLength: 2000,
      allowGuestComments: true,
    },

    registration: {
      studentRegistrationEnabled: true,
      automaticEnrollmentId: true,
      enrollmentPrefix: "NS",
    },

    seo: {
      defaultTitle: "NagarikSuraksha",
      defaultDescription:
        "Legal learning, legal awareness and legal consultancy services.",
      defaultKeywords: [
        "legal services Kolkata",
        "LLB learning",
        "property registration Kolkata",
        "consumer law",
        "legal consultancy",
      ],
      canonicalBaseUrl: "https://www.nagariksuraksha.com",
      defaultOgImageUrl: "",
      robotsIndex: true,
      robotsFollow: true,
    },

    databaseVersion: "1.0.0",

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(settingsReference, settingsData);

  return {
    status: "created",
    message: "General settings created successfully.",
  };
}