import {
  collection,
  deleteDoc,
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

import { db } from "../firebase/firebase";

export class BaseRepository {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  collection() {
    return collection(db, this.collectionName);
  }

  document(id) {
    return doc(db, this.collectionName, id);
  }

  async getById(id) {
    const snapshot = await getDoc(this.document(id));

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }

  async getAll() {
    const snapshot = await getDocs(this.collection());

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async create(id, data) {
    await setDoc(this.document(id), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return this.getById(id);
  }

  async update(id, data) {
    await updateDoc(this.document(id), {
      ...data,
      updatedAt: serverTimestamp(),
    });

    return this.getById(id);
  }

  async delete(id) {
    await deleteDoc(this.document(id));
  }

  async exists(id) {
    const snapshot = await getDoc(this.document(id));
    return snapshot.exists();
  }

  async findBy(field, value) {
    const q = query(
      this.collection(),
      where(field, "==", value)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getLatest(field = "createdAt", count = 10) {
    const q = query(
      this.collection(),
      orderBy(field, "desc"),
      limit(count)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }
}