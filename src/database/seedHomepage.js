import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const HOMEPAGE_DOCUMENT = "homepage/main";

export async function seedHomepage() {
  const homepageRef = doc(db, HOMEPAGE_DOCUMENT);

  const snapshot = await getDoc(homepageRef);

  if (snapshot.exists()) {
    return {
      status: "skipped",
      message: "Homepage already initialized.",
    };
  }

  const homepage = {
    announcement: {
      enabled: true,
      text: "🎉 Welcome to NagarikSuraksha - Legal Learning & Consultancy Platform",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      backgroundColor: "#0F172A",
      textColor: "#FFFFFF",
    },

    hero: {
      enabled: true,

      heading:
        "Empowering Every Citizen Through Law & Education",

      subHeading:
        "Legal Learning | Legal Awareness | Legal Consultancy",

      description:
        "NagarikSuraksha helps students, citizens and professionals with legal education, consultancy and practical guidance.",

      primaryButton: {
        text: "Start Learning",
        link: "/learning",
      },

      secondaryButton: {
        text: "Get Legal Consultation",
        link: "/contact",
      },

      desktopImage: "",

      mobileImage: "",

      videoBackground: "",
    },

    sections: {
      legalServices: true,
      latestPosts: true,
      latestVideos: true,
      testimonials: true,
      faq: true,
      statistics: true,
      courses: true,
      contact: true,
      footer: true,
    },

    statistics: {
      students: true,
      courses: true,
      certificates: true,
      articles: true,
      videos: true,
    },

    latestContent: {
      latestPosts: 6,
      latestVideos: 6,
      featuredOnly: false,
    },

    seo: {
      title:
        "NagarikSuraksha | Legal Learning & Consultancy",

      description:
        "Legal Learning, Legal Consultancy, Consumer Law, Property Registration, Cyber Law, Constitutional Law and Legal Awareness Platform.",

      keywords: [
        "Legal Consultancy",
        "LLB Notes",
        "Property Registration",
        "Consumer Law",
        "Cyber Law",
        "Legal Learning",
      ],

      canonical:
        "https://www.nagariksuraksha.com",

      schema: "WebSite",

      robots: {
        index: true,
        follow: true,
      },

      ogImage: "",
    },

    publishedVersion: 1,

    published: true,

    createdAt: serverTimestamp(),

    updatedAt: serverTimestamp(),
  };

  await setDoc(homepageRef, homepage);

  return {
    status: "created",
    message: "Homepage initialized successfully.",
  };
}