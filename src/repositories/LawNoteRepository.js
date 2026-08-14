import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import {
  COLLECTIONS,
} from "../constants/firestoreCollections";

import {
  BaseRepository,
} from "./BaseRepository";

class LawNoteRepository extends BaseRepository {
  constructor() {
    super(
      COLLECTIONS.PUBLIC_LAW_TOPICS,
    );
  }

  // =========================================================
  // PUBLIC - GET NOTE BY SLUG
  // =========================================================

  async getBySlug(slug) {
    if (!slug) {
      return null;
    }

    const lawNoteQuery =
      query(
        this.collection(),

        where(
          "slug",
          "==",
          slug,
        ),

        where(
          "status",
          "==",
          "published",
        ),

        where(
          "deleted",
          "==",
          false,
        ),

        limit(1),
      );

    const snapshot =
      await getDocs(
        lawNoteQuery,
      );

    if (snapshot.empty) {
      return null;
    }

    const document =
      snapshot.docs[0];

    return {
      ...document.data(),
      id: document.id,
    };
  }

  // =========================================================
  // PUBLIC - PUBLISHED NOTES
  // =========================================================

  async getPublished(
    pageSize = 100,
  ) {
    const lawNoteQuery =
      query(
        this.collection(),

        where(
          "status",
          "==",
          "published",
        ),

        where(
          "deleted",
          "==",
          false,
        ),

        orderBy(
          "displayOrder",
          "asc",
        ),

        limit(
          pageSize,
        ),
      );

    const snapshot =
      await getDocs(
        lawNoteQuery,
      );

    return snapshot.docs.map(
      (
        document,
      ) => ({
        ...document.data(),
        id: document.id,
      }),
    );
  }

  // =========================================================
  // PUBLIC - FEATURED NOTES
  // =========================================================

  async getFeatured(
    pageSize = 6,
  ) {
    const lawNoteQuery =
      query(
        this.collection(),

        where(
          "status",
          "==",
          "published",
        ),

        where(
          "deleted",
          "==",
          false,
        ),

        where(
          "featured",
          "==",
          true,
        ),

        orderBy(
          "displayOrder",
          "asc",
        ),

        limit(
          pageSize,
        ),
      );

    const snapshot =
      await getDocs(
        lawNoteQuery,
      );

    return snapshot.docs.map(
      (
        document,
      ) => ({
        ...document.data(),
        id: document.id,
      }),
    );
  }

  // =========================================================
  // PUBLISH
  // =========================================================

  async publish(id) {
    return this.update(
      id,
      {
        status:
          "published",

        publishedAt:
          new Date(),
      },
    );
  }

  // =========================================================
  // ARCHIVE
  // =========================================================

  async archive(id) {
    return this.update(
      id,
      {
        status:
          "archived",
      },
    );
  }

  // =========================================================
  // FEATURE
  // =========================================================

  async setFeatured(
    id,
    featured = true,
  ) {
    return this.update(
      id,
      {
        featured:
          Boolean(
            featured,
          ),
      },
    );
  }

  // =========================================================
  // SOFT DELETE
  // =========================================================

  async softDelete(
    id,
    deletedBy = "system",
  ) {
    return this.update(
      id,
      {
        deleted:
          true,

        deletedAt:
          new Date(),

        deletedBy,

        status:
          "archived",
      },
    );
  }
}

export const lawNoteRepository =
  new LawNoteRepository();

export default lawNoteRepository;