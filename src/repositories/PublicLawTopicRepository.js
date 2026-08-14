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

class PublicLawTopicRepository extends BaseRepository {
  constructor() {
    super(
      COLLECTIONS.PUBLIC_LAW_TOPICS,
    );
  }

  // =========================================================
  // PUBLIC - PUBLISHED TOPICS
  // =========================================================

  async getPublished({
    courseId = null,
    featured = null,
    pageSize = 100,
  } = {}) {
    const publicQuery =
      query(
        this.collection(),

        where(
          "published",
          "==",
          true,
        ),

        where(
          "deleted",
          "==",
          false,
        ),
      );

    const snapshot =
      await getDocs(
        publicQuery,
      );

    let topics =
      snapshot.docs.map(
        (
          topicDocument,
        ) => ({
          ...topicDocument.data(),

          id:
            topicDocument.id,
        }),
      );

    // =======================================================
    // COURSE FILTER
    // =======================================================

    if (
      courseId
    ) {
      topics =
        topics.filter(
          (
            topic,
          ) =>
            topic.courseId ===
            courseId,
        );
    }

    // =======================================================
    // FEATURED FILTER
    // =======================================================

    if (
      featured !==
      null
    ) {
      topics =
        topics.filter(
          (
            topic,
          ) =>
            Boolean(
              topic.featured,
            ) ===
            Boolean(
              featured,
            ),
        );
    }

    // =======================================================
    // SORT
    // =======================================================

    topics.sort(
      (
        first,
        second,
      ) => {
        const firstOrder =
          Number(
            first.displayOrder ||
              0,
          );

        const secondOrder =
          Number(
            second.displayOrder ||
              0,
          );

        if (
          firstOrder !==
          secondOrder
        ) {
          return (
            firstOrder -
            secondOrder
          );
        }

        return String(
          first.title ||
            "",
        ).localeCompare(
          String(
            second.title ||
              "",
          ),
        );
      },
    );

    return topics.slice(
      0,
      Math.max(
        1,
        Number(
          pageSize || 100,
        ),
      ),
    );
  }

  // =========================================================
  // PUBLIC - TOPIC BY SLUG
  // =========================================================

  async getBySlug(
    slug,
  ) {
    if (!slug) {
      return null;
    }

    const publicQuery =
      query(
        this.collection(),

        where(
          "slug",
          "==",
          slug,
        ),

        where(
          "published",
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
        publicQuery,
      );

    if (
      snapshot.empty
    ) {
      return null;
    }

    const topicDocument =
      snapshot.docs[0];

    return {
      ...topicDocument.data(),

      id:
        topicDocument.id,
    };
  }

  // =========================================================
  // ADMIN - ALL TOPICS
  // =========================================================

  async getAllTopics() {
    const snapshot =
      await getDocs(
        this.collection(),
      );

    const topics =
      snapshot.docs.map(
        (
          topicDocument,
        ) => ({
          ...topicDocument.data(),

          id:
            topicDocument.id,
        }),
      );

    topics.sort(
      (
        first,
        second,
      ) =>
        Number(
          first.displayOrder ||
            0,
        ) -
        Number(
          second.displayOrder ||
            0,
        ),
    );

    return topics;
  }
}

export const publicLawTopicRepository =
  new PublicLawTopicRepository();

export default publicLawTopicRepository;