import {
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import {
  CONTENT_STATUS,
  CONTENT_TYPES,
} from "../constants/enums";
import { BaseRepository } from "./BaseRepository";

class ContentRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.CONTENT);
  }

  async getPublished({
    contentType = null,
    categoryId = null,
    featured = null,
    pageSize = 10,
    lastDocument = null,
  } = {}) {
    const constraints = [
      where("status", "==", CONTENT_STATUS.PUBLISHED),
      where("deleted", "==", false),
    ];

    if (contentType) {
      constraints.push(where("contentType", "==", contentType));
    }

    if (categoryId) {
      constraints.push(where("categoryId", "==", categoryId));
    }

    if (featured !== null) {
      constraints.push(where("featured", "==", featured));
    }

    constraints.push(orderBy("publishedAt", "desc"));
    constraints.push(limit(pageSize));

    if (lastDocument) {
      constraints.push(startAfter(lastDocument));
    }

    const contentQuery = query(
      this.collection(),
      ...constraints,
    );

    const snapshot = await getDocs(contentQuery);

    return {
      items: snapshot.docs.map((contentDocument) => ({
        id: contentDocument.id,
        ...contentDocument.data(),
      })),
      lastDocument:
        snapshot.docs.length > 0
          ? snapshot.docs[snapshot.docs.length - 1]
          : null,
      hasMore: snapshot.docs.length === pageSize,
    };
  }

  async getByType(contentType, options = {}) {
    return this.getPublished({
      contentType,
      ...options,
    });
  }

  async getPosts(options = {}) {
    return this.getByType(CONTENT_TYPES.POST, options);
  }

  async getArticles(options = {}) {
    return this.getByType(CONTENT_TYPES.ARTICLE, options);
  }

  async getVideos(options = {}) {
    return this.getByType(CONTENT_TYPES.VIDEO, options);
  }

  async getServices(options = {}) {
    return this.getByType(CONTENT_TYPES.SERVICE, options);
  }

  async getFaqs(options = {}) {
    return this.getByType(CONTENT_TYPES.FAQ, options);
  }

  async getJudgements(options = {}) {
    return this.getByType(CONTENT_TYPES.JUDGEMENT, options);
  }

  async getBareActs(options = {}) {
    return this.getByType(CONTENT_TYPES.BARE_ACT, options);
  }

  async getTemplates(options = {}) {
    return this.getByType(CONTENT_TYPES.TEMPLATE, options);
  }

  async getLegalUpdates(options = {}) {
    return this.getByType(
      CONTENT_TYPES.LEGAL_UPDATE,
      options,
    );
  }

  async getFeatured(contentType = null, pageSize = 6) {
    return this.getPublished({
      contentType,
      featured: true,
      pageSize,
    });
  }

  async getBySlug(slug, contentType = null) {
    const constraints = [
      where("slug", "==", slug),
      where("deleted", "==", false),
    ];

    if (contentType) {
      constraints.push(where("contentType", "==", contentType));
    }

    const contentQuery = query(
      this.collection(),
      ...constraints,
      limit(1),
    );

    const snapshot = await getDocs(contentQuery);

    if (snapshot.empty) {
      return null;
    }

    const contentDocument = snapshot.docs[0];

    return {
      id: contentDocument.id,
      ...contentDocument.data(),
    };
  }

  async getDrafts(contentType = null, pageSize = 20) {
    const constraints = [
      where("status", "==", CONTENT_STATUS.DRAFT),
      where("deleted", "==", false),
    ];

    if (contentType) {
      constraints.push(where("contentType", "==", contentType));
    }

    constraints.push(orderBy("updatedAt", "desc"));
    constraints.push(limit(pageSize));

    const contentQuery = query(
      this.collection(),
      ...constraints,
    );

    const snapshot = await getDocs(contentQuery);

    return snapshot.docs.map((contentDocument) => ({
      id: contentDocument.id,
      ...contentDocument.data(),
    }));
  }

  async publish(id, publishedAt = new Date()) {
    return this.update(id, {
      status: CONTENT_STATUS.PUBLISHED,
      publishedAt,
      scheduledAt: null,
    });
  }

  async schedule(id, scheduledAt) {
    return this.update(id, {
      status: CONTENT_STATUS.SCHEDULED,
      scheduledAt,
      publishedAt: null,
    });
  }

  async archive(id) {
    return this.update(id, {
      status: CONTENT_STATUS.ARCHIVED,
    });
  }

  async softDelete(id, deletedBy = "system") {
    return this.update(id, {
      deleted: true,
      deletedAt: new Date(),
      deletedBy,
      status: CONTENT_STATUS.ARCHIVED,
    });
  }

  async restore(id, updatedBy = "system") {
    return this.update(id, {
      deleted: false,
      deletedAt: null,
      deletedBy: null,
      updatedBy,
    });
  }

  async incrementCommentCount(id, currentCount = 0) {
    return this.update(id, {
      "comments.count": Number(currentCount || 0) + 1,
    });
  }
}

export const contentRepository = new ContentRepository();

export default contentRepository;