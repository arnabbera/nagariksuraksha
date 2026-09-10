import {
  createPostModel,
} from "../models/PostModel";

import postRepository from "../repositories/PostRepository";

import {
  MASTERDA_SURYA_SEN_POST,
} from "../features/public/posts/data/masterdaSuryaSenPost";

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
  ) => {
    let repositoryPosts = [];

    try {
      repositoryPosts =
        await postRepository.getPublished(
          options,
        );
    } catch (
      repositoryError
    ) {
      console.error(
        "Unable to load Firebase posts; showing bundled posts:",
        repositoryError,
      );
    }

    const bundledPosts = [
      MASTERDA_SURYA_SEN_POST,
    ];

    const mergedPosts = [
      ...bundledPosts,
      ...(Array.isArray(repositoryPosts)
        ? repositoryPosts
        : []),
    ].filter(
      (post, index, posts) =>
        posts.findIndex(
          (candidate) =>
            candidate.slug === post.slug,
        ) === index,
    );

    return mergedPosts
      .filter((post) =>
        options.featured === null ||
        options.featured === undefined
          ? true
          : Boolean(post.featured) === Boolean(options.featured),
      )
      .filter((post) =>
        options.category
          ? post.category === options.category
          : true,
      )
      .sort(
        (first, second) =>
          Number(first.displayOrder || 0) -
          Number(second.displayOrder || 0),
      )
      .slice(0, options.pageSize || 50);
  };

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

    const normalizedSlug =
      normalizeSlug(
        slug,
      );

    if (
      normalizedSlug ===
      MASTERDA_SURYA_SEN_POST.slug
    ) {
      return MASTERDA_SURYA_SEN_POST;
    }

    return postRepository.getBySlug(
      normalizedSlug,
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

    const {
      desktopImageUrl =
        existing
          ?.media
          ?.desktop
          ?.url ||
        "",

      desktopImagePublicId =
        existing
          ?.media
          ?.desktop
          ?.publicId ||
        "",

      desktopImageStoragePath =
        existing
          ?.media
          ?.desktop
          ?.storagePath ||
        "",

      desktopImageFileName =
        existing
          ?.media
          ?.desktop
          ?.fileName ||
        "",

      desktopImageSize =
        existing
          ?.media
          ?.desktop
          ?.size ||
        0,

      mobileImageUrl =
        existing
          ?.media
          ?.mobile
          ?.url ||
        "",

      mobileImagePublicId =
        existing
          ?.media
          ?.mobile
          ?.publicId ||
        "",

      mobileImageStoragePath =
        existing
          ?.media
          ?.mobile
          ?.storagePath ||
        "",

      mobileImageFileName =
        existing
          ?.media
          ?.mobile
          ?.fileName ||
        "",

      mobileImageSize =
        existing
          ?.media
          ?.mobile
          ?.size ||
        0,

      ...postFields
    } = postData;

    const media = {
      desktop: {
        ...existing
          ?.media
          ?.desktop,

        url:
          desktopImageUrl,

        publicId:
          desktopImagePublicId,

        storagePath:
          desktopImageStoragePath,

        fileName:
          desktopImageFileName,

        size:
          Number(
            desktopImageSize ||
              0,
          ),

        ratio:
          "16:9",
      },

      mobile: {
        ...existing
          ?.media
          ?.mobile,

        url:
          mobileImageUrl,

        publicId:
          mobileImagePublicId,

        storagePath:
          mobileImageStoragePath,

        fileName:
          mobileImageFileName,

        size:
          Number(
            mobileImageSize ||
              0,
          ),

        ratio:
          "9:16",
      },
    };

    return postRepository.update(
      postId,
      {
        ...postFields,

        slug,

        media,

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
