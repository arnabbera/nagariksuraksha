import {
  doc,
  runTransaction,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { COLLECTIONS } from "../../constants/firestoreCollections";
import { APP_CONFIG } from "../../constants/appConfig";

export async function generateEnrollmentId() {

  const counterRef = doc(
    db,
    COLLECTIONS.COUNTERS,
    "students"
  );

  const enrollmentId = await runTransaction(
    db,
    async (transaction) => {

      const counter = await transaction.get(counterRef);

      let nextNumber = 1;

      if (counter.exists()) {
        nextNumber = Number(counter.data().current || 0) + 1;
      }

      transaction.set(
        counterRef,
        {
          current: nextNumber,
        },
        {
          merge: true,
        }
      );

      return `${APP_CONFIG.ENROLLMENT_PREFIX}${String(
        nextNumber
      ).padStart(
        APP_CONFIG.ENROLLMENT_SEQUENCE_LENGTH,
        "0"
      )}`;

    }
  );

  return enrollmentId;
}