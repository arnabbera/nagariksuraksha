import {
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { MEDIA_TYPES } from "../constants/enums";
import { BaseRepository } from "./BaseRepository";

class MediaRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.MEDIA);
  }

  async getActiveMedia({
    type = null,
    purpose = null,
    folder = null,
    pageSize = 50,
  } = {}) {
    const constraints = [
      where("status", "==", "active"),
      where("deleted", "==", false),
    ];

    if (type) {
      constraints.push(where("type", "==", type));
    }

    if (purpose) {
      constraints.push(where("purpose", "==", purpose));
    }

    if (folder) {
      constraints.push(
        where("organization.folder", "==", folder),
      );
    }

    constraints.push(orderBy("createdAt", "desc"));
    constraints.push(limit(pageSize));

    const mediaQuery = query(
      this.collection(),
      ...constraints,
    );

    const snapshot = await getDocs(mediaQuery);

    return snapshot.docs.map((mediaDocument) => ({
      id: mediaDocument.id,
      ...mediaDocument.data(),
    }));
  }

  async getImages(options = {}) {
    return this.getActiveMedia({
      ...options,
      type: MEDIA_TYPES.IMAGE,
    });
  }

  async getPdfs(options = {}) {
    return this.getActiveMedia({
      ...options,
      type: MEDIA_TYPES.PDF,
    });
  }

  async getDocuments(options = {}) {
    return this.getActiveMedia({
      ...options,
      type: MEDIA_TYPES.DOCUMENT,
    });
  }

  async getVideos(options = {}) {
    return this.getActiveMedia({
      ...options,
      type: MEDIA_TYPES.VIDEO,
    });
  }

  async getByStoragePath(storagePath) {
    if (!storagePath) {
      return null;
    }

    const mediaQuery = query(
      this.collection(),
      where("file.storagePath", "==", storagePath),
      where("deleted", "==", false),
      limit(1),
    );

    const snapshot = await getDocs(mediaQuery);

    if (snapshot.empty) {
      return null;
    }

    const mediaDocument = snapshot.docs[0];

    return {
      id: mediaDocument.id,
      ...mediaDocument.data(),
    };
  }

  async getByTag(tag, pageSize = 50) {
    if (!tag) {
      return [];
    }

    const mediaQuery = query(
      this.collection(),
      where(
        "organization.tags",
        "array-contains",
        tag.toLowerCase(),
      ),
      where("deleted", "==", false),
      orderBy("createdAt", "desc"),
      limit(pageSize),
    );

    const snapshot = await getDocs(mediaQuery);

    return snapshot.docs.map((mediaDocument) => ({
      id: mediaDocument.id,
      ...mediaDocument.data(),
    }));
  }

  async linkToContent(mediaId, contentIds = []) {
    return this.update(mediaId, {
      relations: {
        linkedContentIds: contentIds,
      },
    });
  }

  async updateSeo(
    mediaId,
    {
      altText = "",
      caption = "",
      description = "",
    } = {},
  ) {
    return this.update(mediaId, {
      seo: {
        altText,
        caption,
        description,
      },
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

export const mediaRepository = new MediaRepository();

export default mediaRepository;