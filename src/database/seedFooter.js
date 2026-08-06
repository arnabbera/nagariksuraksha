import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const footerData = {
  brand: {
    name: "NagarikSuraksha",
    tagline: "Legal Learning & Consultancy",
    description:
      "Empowering citizens through legal awareness, professional legal guidance and structured legal education.",
    logoUrl: "",
  },

  quickLinks: [
    {
      label: "Home",
      path: "/",
      order: 1,
      enabled: true,
    },
    {
      label: "About Us",
      path: "/about",
      order: 2,
      enabled: true,
    },
    {
      label: "Legal Services",
      path: "/services",
      order: 3,
      enabled: true,
    },
    {
      label: "LL.B Learning",
      path: "/learning",
      order: 4,
      enabled: true,
    },
    {
      label: "Legal Updates",
      path: "/legal-updates",
      order: 5,
      enabled: true,
    },
    {
      label: "Videos",
      path: "/videos",
      order: 6,
      enabled: true,
    },
    {
      label: "Contact",
      path: "/contact",
      order: 7,
      enabled: true,
    },
  ],

  practiceAreas: [
    {
      label: "Property Law",
      path: "/services/property-law",
      order: 1,
      enabled: true,
    },
    {
      label: "Consumer Law",
      path: "/services/consumer-law",
      order: 2,
      enabled: true,
    },
    {
      label: "Cyber Law",
      path: "/services/cyber-law",
      order: 3,
      enabled: true,
    },
    {
      label: "Criminal Law",
      path: "/services/criminal-law",
      order: 4,
      enabled: true,
    },
    {
      label: "Civil Law",
      path: "/services/civil-law",
      order: 5,
      enabled: true,
    },
    {
      label: "Banking & SARFAESI",
      path: "/services/banking-law",
      order: 6,
      enabled: true,
    },
    {
      label: "Family Law",
      path: "/services/family-law",
      order: 7,
      enabled: true,
    },
  ],

  contact: {
    email: "info@nagariksuraksha.com",
    phone: "",
    whatsapp: "",
    address: "Kolkata, West Bengal, India",
    mapUrl: "",
  },

  socialLinks: {
    facebook: "",
    youtube: "https://www.youtube.com/@nagariksuraksha-ab",
    instagram: "",
    linkedin: "",
    twitter: "",
  },

  legalLinks: [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
      order: 1,
      enabled: true,
    },
    {
      label: "Terms & Conditions",
      path: "/terms",
      order: 2,
      enabled: true,
    },
    {
      label: "Disclaimer",
      path: "/disclaimer",
      order: 3,
      enabled: true,
    },
  ],

  copyrightText:
    "© {year} NagarikSuraksha. All Rights Reserved.",

  status: "active",
};

export async function seedFooter() {
  const footerReference = doc(db, "footer", "main");
  const footerSnapshot = await getDoc(footerReference);

  if (footerSnapshot.exists()) {
    return {
      status: "skipped",
      message: "Footer settings already exist.",
    };
  }

  await setDoc(footerReference, {
    ...footerData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return {
    status: "created",
    message: "Footer settings created successfully.",
  };
}