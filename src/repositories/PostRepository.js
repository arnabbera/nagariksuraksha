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

class PostRepository extends BaseRepository {
  constructor() {
    super(
      COLLECTIONS.POSTS,
    );
  }

  // =========================================================
  // PUBLIC - PUBLISHED POSTS
  // =========================================================

  async getPublished({
    featured = null,
    category = null,
    pageSize = 50,
  } = {}) {
    const postsQuery =
      query(
        this.collection(),

        where(
          "status",
          "==",
          "published",
        ),

        limit(
          pageSize,
        ),
      );

    const snapshot =
      await getDocs(
        postsQuery,
      );

    let posts =
      snapshot.docs.map(
        (
          document,
        ) => ({
          ...document.data(),

          id:
            document.id,
        }),
      );

    // =========================================================
    // REMOVE SOFT-DELETED POSTS
    // =========================================================

    posts =
      posts.filter(
        (
          post,
        ) =>
          post.deleted !==
          true,
      );

    // =========================================================
    // SORT BY DISPLAY ORDER
    // =========================================================

    posts =
      posts.sort(
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

    // =========================================================
    // OPTIONAL FEATURED FILTER
    // =========================================================

    if (
      featured !==
      null
    ) {
      posts =
        posts.filter(
          (
            post,
          ) =>
            Boolean(
              post.featured,
            ) ===
            Boolean(
              featured,
            ),
        );
    }

    // =========================================================
    // OPTIONAL CATEGORY FILTER
    // =========================================================

    if (
      category
    ) {
      posts =
        posts.filter(
          (
            post,
          ) =>
            post.category ===
            category,
        );
    }

    return posts;
  }

  // =========================================================
  // PUBLIC - POST BY SLUG
  // =========================================================

  async getBySlug(
    slug,
  ) {
    if (!slug) {
      return null;
    }

    const postQuery =
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
        postQuery,
      );

    if (
      snapshot.empty
    ) {
      return null;
    }

    const document =
      snapshot.docs[0];

    return {
      ...document.data(),

      id:
        document.id,
    };
  }

  // =========================================================
  // ADMIN - ALL POSTS
  // =========================================================

  async getAllPosts() {
    const snapshot =
      await getDocs(
        this.collection(),
      );

    const posts =
      snapshot.docs.map(
        (
          document,
        ) => ({
          ...document.data(),

          id:
            document.id,
        }),
      );

    posts.sort(
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

    return posts;
  }

  // =========================================================
  // PUBLISH
  // =========================================================

  async publish(
    id,
  ) {
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

  async archive(
    id,
  ) {
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

export const postRepository =
  new PostRepository();

export default postRepository;