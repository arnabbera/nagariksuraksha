import {
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { COLLECTIONS } from "../constants/firestoreCollections";
import { BaseRepository } from "./BaseRepository";

class ChapterResourceRepository extends BaseRepository {
  constructor() {
    super(COLLECTIONS.CHAPTER_RESOURCES);
  }

  async getByChapter(chapterId) {
    if (!chapterId) {
      return [];
    }

    const resourcesQuery = query(
      this.collection(),
      where("chapterId", "==", chapterId),
      where("deleted", "==", false),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(resourcesQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getPublishedByChapter(chapterId) {
    if (!chapterId) {
      return [];
    }

    const resourcesQuery = query(
      this.collection(),
      where("chapterId", "==", chapterId),
      where("published", "==", true),
      where("deleted", "==", false),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(resourcesQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async getByCourse(courseId) {
    if (!courseId) {
      return [];
    }

    const resourcesQuery = query(
      this.collection(),
      where("courseId", "==", courseId),
      where("deleted", "==", false),
      orderBy("displayOrder", "asc"),
    );

    const snapshot = await getDocs(resourcesQuery);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  }

  async publish(resourceId) {
    return this.update(resourceId, {
      published: true,
      status: "published",
    });
  }

  async unpublish(resourceId) {
    return this.update(resourceId, {
      published: false,
      status: "draft",
    });
  }

  async softDelete(
    resourceId,
    deletedBy = "system",
  ) {
    return this.update(resourceId, {
      deleted: true,
      deletedAt: new Date(),
      deletedBy,
      status: "deleted",
    });
  }
}

export const chapterResourceRepository =
  new ChapterResourceRepository();

export default chapterResourceRepository;