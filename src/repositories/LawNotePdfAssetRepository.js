import {
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";

import {
  COLLECTIONS,
} from "../constants/firestoreCollections";

import {
  BaseRepository,
} from "./BaseRepository";

class LawNotePdfAssetRepository extends BaseRepository {
  constructor() {
    super(
      COLLECTIONS.LAW_NOTE_PDF_ASSETS,
    );
  }

  // =========================================================
  // GET ACTIVE PDF BY LAW NOTE
  // =========================================================

  async getActiveByLawNoteId(
    lawNoteId,
  ) {
    if (!lawNoteId) {
      return null;
    }

    const assetQuery =
      query(
        this.collection(),

        where(
          "lawNoteId",
          "==",
          lawNoteId,
        ),

        where(
          "active",
          "==",
          true,
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
        assetQuery,
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
  // GET ALL PDF ASSETS FOR LAW NOTE
  // =========================================================

  async getByLawNoteId(
    lawNoteId,
  ) {
    if (!lawNoteId) {
      return [];
    }

    const assetQuery =
      query(
        this.collection(),

        where(
          "lawNoteId",
          "==",
          lawNoteId,
        ),
      );

    const snapshot =
      await getDocs(
        assetQuery,
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
  // DEACTIVATE EXISTING ASSETS
  // =========================================================

  async deactivateByLawNoteId(
    lawNoteId,
  ) {
    const assets =
      await this.getByLawNoteId(
        lawNoteId,
      );

    const activeAssets =
      assets.filter(
        (
          asset,
        ) =>
          asset.active &&
          !asset.deleted,
      );

    await Promise.all(
      activeAssets.map(
        (
          asset,
        ) =>
          this.update(
            asset.id,
            {
              active:
                false,
            },
          ),
      ),
    );

    return true;
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
        active:
          false,

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

export const lawNotePdfAssetRepository =
  new LawNotePdfAssetRepository();

export default lawNotePdfAssetRepository;