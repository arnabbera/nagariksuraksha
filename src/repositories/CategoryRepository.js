import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class CategoryRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.CATEGORIES);
  }

  async getActiveCategories({
    contentType = null,
    pageSize = 100,
  } = {}) {
    const constraints = [
      where("status", "==", "active"),
      where("deleted", "==", false),
    ];

    if (contentType) {
      constraints.push(
        where("contentTypes", "array-contains", contentType),
      );
    }

    constraints.push(orderBy("displayOrder", "asc"));
    constraints.push(limit(pageSize));

    const categoriesQuery = query(
      this.collection(),
      ...constraints,
    );

    const snapshot = await getDocs(categoriesQuery);

    return snapshot.docs.map((categoryDocument) => ({
      id: categoryDocument.id,
      ...categoryDocument.data(),
    }));
  }

  async getBySlug(slug) {
    if (!slug) {
      return null;
    }

    const categoriesQuery = query(
      this.collection(),
      where("slug", "==", slug),
      where("deleted", "==", false),
      limit(1),
    );

    const snapshot = await getDocs(categoriesQuery);

    if (snapshot.empty) {
      return null;
    }

    const categoryDocument = snapshot.docs[0];

    return {
      id: categoryDocument.id,
      ...categoryDocument.data(),
    };
  }

  async getByContentType(contentType) {
    if (!contentType) {
      return [];
    }

    return this.getActiveCategories({
      contentType,
      pageSize: 100,
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

  async updateDisplayOrder(id, displayOrder) {
    return this.update(id, {
      displayOrder: Number(displayOrder || 0),
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

export const categoryRepository = new CategoryRepository();

export default categoryRepository;