import { doc, runTransaction } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { COLLECTIONS } from "../../constants/firestoreCollections";
import { APP_CONFIG } from "../../constants/appConfig";

export async function generateEnrollmentId() {
  const counterRef = doc(
    db,
    COLLECTIONS.COUNTERS,
    "students"
  );

  const today = new Date();

  const datePart =
    String(today.getDate()).padStart(2, "0") +
    String(today.getMonth() + 1).padStart(2, "0") +
    String(today.getFullYear());

  return await runTransaction(db, async (transaction) => {
    const counterDoc = await transaction.get(counterRef);

    let current = 0;

    if (counterDoc.exists()) {
      current = counterDoc.data().current || 0;
    }

    current++;

    transaction.set(
      counterRef,
      {
        current,
        updatedAt: new Date(),
      },
      { merge: true }
    );

    return `${APP_CONFIG.ENROLLMENT_PREFIX}-${datePart}-${String(
      current
    ).padStart(APP_CONFIG.ENROLLMENT_SEQUENCE_LENGTH, "0")}`;
  });
}