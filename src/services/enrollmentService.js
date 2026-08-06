import {
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const COUNTER_DOCUMENT_PATH = "counters/enrollments";

const formatDate = (date = new Date()) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}${month}${year}`;
};

const formatSequence = (value) =>
  String(value).padStart(6, "0");

export const generateEnrollmentId = async () => {
  const counterReference = doc(db, COUNTER_DOCUMENT_PATH);

  return runTransaction(db, async (transaction) => {
    const counterSnapshot = await transaction.get(counterReference);

    const currentValue = counterSnapshot.exists()
      ? Number(counterSnapshot.data().currentValue || 0)
      : 0;

    const nextValue = currentValue + 1;

    transaction.set(
      counterReference,
      {
        currentValue: nextValue,
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    return `NS-${formatDate()}-${formatSequence(nextValue)}`;
  });
};