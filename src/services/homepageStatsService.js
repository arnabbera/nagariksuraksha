import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { db } from "../firebase/firebase";

const getCount = async (source) => {
  const snapshot = await getCountFromServer(source);
  return snapshot.data().count;
};

const getStudentCount = async () => {
  try {
    return await getCount(
      query(
        collection(db, COLLECTIONS.USERS),
        where("role", "==", "student"),
      ),
    );
  } catch (error) {
    // The enrollment counter contains one entry for every student account
    // and remains a safe fallback when public user-list access is restricted.
    const counterSnapshot = await getDoc(
      doc(db, COLLECTIONS.COUNTERS, "enrollments"),
    );

    if (!counterSnapshot.exists()) {
      throw error;
    }

    return Number(counterSnapshot.data().currentValue || 0);
  }
};

const resolveCount = async (counter) => {
  try {
    return await counter();
  } catch (error) {
    console.error("Unable to load a homepage statistic:", error);
    return null;
  }
};

export const getHomepageStatistics = async () => {
  const [students, courses, chapters, certifications] =
    await Promise.all([
      resolveCount(getStudentCount),
      resolveCount(() =>
        getCount(
          query(
            collection(db, COLLECTIONS.COURSES),
            where("deleted", "==", false),
          ),
        ),
      ),
      resolveCount(() =>
        getCount(
          query(
            collection(db, COLLECTIONS.COURSE_CHAPTERS),
            where("deleted", "==", false),
          ),
        ),
      ),
      resolveCount(() =>
        getCount(collection(db, COLLECTIONS.CERTIFICATES)),
      ),
    ]);

  return {
    students,
    courses,
    chapters,
    certifications,
  };
};

export default getHomepageStatistics;
