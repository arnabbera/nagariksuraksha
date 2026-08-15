import {
  doc,
  getDoc,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { db } from "../firebase/firebase";

const normalizeCount = (value) => {
  const count = Number(value);
  return Number.isFinite(count) && count >= 0 ? count : null;
};

const loadHomepageStatistics = async () => {
  try {
    const snapshot = await getDoc(
      doc(db, COLLECTIONS.HOMEPAGE, "main"),
    );

    if (!snapshot.exists()) {
      return {
        students: null,
        courses: null,
        chapters: null,
        certifications: null,
      };
    }

    const statistics = snapshot.data().liveStatistics || {};

    return {
      students: normalizeCount(statistics.students),
      courses: normalizeCount(statistics.courses),
      chapters: normalizeCount(statistics.chapters),
      certifications: normalizeCount(statistics.certifications),
    };
  } catch (error) {
    console.error("Unable to load public homepage statistics:", error);

    return {
      students: null,
      courses: null,
      chapters: null,
      certifications: null,
    };
  }
};

let statisticsRequest = null;

export const getHomepageStatistics = () => {
  if (!statisticsRequest) {
    statisticsRequest = loadHomepageStatistics();
  }

  return statisticsRequest;
};

export default getHomepageStatistics;
