import {
  createPostModel,
} from "../models/PostModel";

import postRepository from "../repositories/PostRepository";

// =========================================================
// HELPERS
// =========================================================

const normalizeSlug = (
  value = "",
) =>
  value
    .trim()
    .toLowerCase()
    .replace(
      /[^a-z0-9\s-]/g,
      "",
    )
    .replace(
      /\s+/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    );

// =========================================================
// ADMIN - ALL POSTS
// =========================================================

export const getAllPosts =
  async () =>
    postRepository.getAllPosts();

// =========================================================
// PUBLIC - PUBLISHED POSTS
// =========================================================

export const getPublishedPosts =
  async (
    options = {},
  ) =>
    postRepository.getPublished(
      options,
    );

// =========================================================
// PUBLIC - POST BY SLUG
// =========================================================

export const getPostBySlug =
  async (
    slug,
  ) => {
    if (!slug) {
      return null;
    }

    return postRepository.getBySlug(
      normalizeSlug(
        slug,
      ),
    );
  };

// =========================================================
// POST BY ID
// =========================================================

export const getPostById =
  async (
    id,
  ) => {
    if (!id) {
      return null;
    }

    return postRepository.getById(
      id,
    );
  };

// =========================================================
// CREATE POST
// =========================================================

export const createPost =
  async (
    postData,
    createdBy = "system",
  ) => {
    if (
      !postData
        ?.title
        ?.trim()
    ) {
      throw new Error(
        "Post title is required.",
      );
    }

    const slug =
      normalizeSlug(
        postData.slug ||
          postData.title,
      );

    if (!slug) {
      throw new Error(
        "A valid post slug is required.",
      );
    }

    const allPosts =
      await postRepository.getAllPosts();

    const duplicate =
      allPosts.find(
        (
          post,
        ) =>
          !post.deleted &&
          post.slug ===
            slug,
      );

    if (
      duplicate
    ) {
      throw new Error(
        "A post with this slug already exists.",
      );
    }

    const documentId =
      postData.id ||
      slug;

    const post =
      createPostModel({
        ...postData,

        id:
          documentId,

        slug,

        createdBy,

        updatedBy:
          createdBy,
      });

    return postRepository.create(
      documentId,
      post,
    );
  };

// =========================================================
// UPDATE POST
// =========================================================

export const updatePost =
  async (
    postId,
    postData,
    updatedBy = "system",
  ) => {
    if (
      !postId
    ) {
      throw new Error(
        "Post ID is required.",
      );
    }

    const existing =
      await postRepository.getById(
        postId,
      );

    if (
      !existing
    ) {
      throw new Error(
        "Post not found.",
      );
    }

    const slug =
      normalizeSlug(
        postData.slug ||
          postData.title ||
          existing.slug,
      );

    if (!slug) {
      throw new Error(
        "A valid post slug is required.",
      );
    }

    const allPosts =
      await postRepository.getAllPosts();

    const duplicate =
      allPosts.find(
        (
          post,
        ) =>
          !post.deleted &&
          post.id !==
            postId &&
          post.slug ===
            slug,
      );

    if (
      duplicate
    ) {
      throw new Error(
        "Another post already uses this slug.",
      );
    }

    return postRepository.update(
      postId,
      {
        ...postData,

        slug,

        updatedBy,

        version:
          Number(
            existing.version ||
              1,
          ) + 1,
      },
    );
  };

// =========================================================
// PUBLISH POST
// =========================================================

export const publishPost =
  async (
    postId,
  ) =>
    postRepository.publish(
      postId,
    );

// =========================================================
// ARCHIVE POST
// =========================================================

export const archivePost =
  async (
    postId,
  ) =>
    postRepository.archive(
      postId,
    );

// =========================================================
// FEATURE POST
// =========================================================

export const setPostFeatured =
  async (
    postId,
    featured,
  ) =>
    postRepository.setFeatured(
      postId,
      featured,
    );

// =========================================================
// DELETE POST
// =========================================================

export const deletePost =
  async (
    postId,
    deletedBy = "system",
  ) =>
    postRepository.softDelete(
      postId,
      deletedBy,
    );

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getAllPosts,
  getPublishedPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  publishPost,
  archivePost,
  setPostFeatured,
  deletePost,
};