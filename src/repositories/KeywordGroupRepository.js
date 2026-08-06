import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class KeywordGroupRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.KEYWORD_GROUPS);
  }

  async getActiveKeywordGroups(pageSize = 100) {
    const keywordQuery = query(
      this.collection(),
      where("status", "==", "active"),
      where("deleted", "==", false),
      orderBy("displayOrder", "asc"),
      limit(pageSize)
    );

    const snapshot = await getDocs(keywordQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getByCategory(categoryId) {
    if (!categoryId) return [];

    const keywordQuery = query(
      this.collection(),
      where("categoryId", "==", categoryId),
      where("status", "==", "active"),
      where("deleted", "==", false),
      orderBy("displayOrder", "asc")
    );

    const snapshot = await getDocs(keywordQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getByPrimaryKeyword(keyword) {
    if (!keyword) return null;

    const keywordQuery = query(
      this.collection(),
      where("primaryKeyword", "==", keyword),
      where("deleted", "==", false),
      limit(1)
    );

    const snapshot = await getDocs(keywordQuery);

    if (snapshot.empty) {
      return null;
    }

    const documentSnapshot = snapshot.docs[0];

    return {
      id: documentSnapshot.id,
      ...documentSnapshot.data(),
    };
  }

  async search(keyword) {
    if (!keyword) return [];

    const keywordQuery = query(
      this.collection(),
      where("searchKeywords", "array-contains", keyword.toLowerCase()),
      where("deleted", "==", false)
    );

    const snapshot = await getDocs(keywordQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async updateDisplayOrder(id, displayOrder) {
    return this.update(id, {
      displayOrder: Number(displayOrder),
    });
  }

  async activate(id) {
    return this.update(id, {
      status: "active",
    });
  }

  async deactivate(id) {
    return this.update(id, {
      status: "inactive",
    });
  }

  async softDelete(id, deletedBy = "system") {
    return this.update(id, {
      deleted: true,
      deletedAt: new Date(),
      deletedBy,
      status: "inactive",
    });
  }

  async restore(id, updatedBy = "system") {
    return this.update(id, {
      deleted: false,
      deletedAt: null,
      deletedBy: null,
      updatedBy,
      status: "active",
    });
  }
}

export const keywordGroupRepository = new KeywordGroupRepository();

export default keywordGroupRepository;