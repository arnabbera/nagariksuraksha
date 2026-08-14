import {
  createPublicLawTopicModel,
} from "../models/PublicLawTopicModel";

import publicLawTopicRepository from "../repositories/PublicLawTopicRepository";

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
// PUBLIC
// =========================================================

export const getPublishedLawTopics =
  async (
    options = {},
  ) =>
    publicLawTopicRepository.getPublished(
      options,
    );

export const getPublicLawTopicBySlug =
  async (
    slug,
  ) => {
    if (!slug) {
      return null;
    }

    return publicLawTopicRepository.getBySlug(
      normalizeSlug(
        slug,
      ),
    );
  };

// =========================================================
// ADMIN
// =========================================================

export const getAllLawTopics =
  async () =>
    publicLawTopicRepository.getAllTopics();

// =========================================================
// CREATE
// =========================================================

export const createLawTopic =
  async (
    topicData,
    createdBy = "system",
  ) => {
    if (
      !topicData
        ?.title
        ?.trim()
    ) {
      throw new Error(
        "Law topic title is required.",
      );
    }

    const slug =
      normalizeSlug(
        topicData.slug ||
          topicData.title,
      );

    if (!slug) {
      throw new Error(
        "A valid law topic slug is required.",
      );
    }

    const existing =
      await publicLawTopicRepository.getBySlug(
        slug,
      );

    if (
      existing
    ) {
      throw new Error(
        "A public law topic with this slug already exists.",
      );
    }

    const documentId =
      topicData.id ||
      slug;

    const model =
      createPublicLawTopicModel({
        ...topicData,

        id:
          documentId,

        slug,

        createdBy,

        updatedBy:
          createdBy,
      });

    return publicLawTopicRepository.create(
      documentId,
      model,
    );
  };

// =========================================================
// UPDATE
// =========================================================

export const updateLawTopic =
  async (
    topicId,
    topicData,
    updatedBy = "system",
  ) => {
    if (
      !topicId
    ) {
      throw new Error(
        "Law topic ID is required.",
      );
    }

    const existing =
      await publicLawTopicRepository.getById(
        topicId,
      );

    if (
      !existing
    ) {
      throw new Error(
        "Law topic not found.",
      );
    }

    const slug =
      normalizeSlug(
        topicData.slug ||
          topicData.title ||
          existing.slug,
      );

    return publicLawTopicRepository.update(
      topicId,
      {
        ...topicData,

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
// PUBLISH
// =========================================================

export const publishLawTopic =
  async (
    topicId,
    updatedBy = "system",
  ) =>
    publicLawTopicRepository.update(
      topicId,
      {
        published: true,

        publishedAt:
          new Date(),

        status:
          "published",

        updatedBy,
      },
    );

// =========================================================
// UNPUBLISH
// =========================================================

export const unpublishLawTopic =
  async (
    topicId,
    updatedBy = "system",
  ) =>
    publicLawTopicRepository.update(
      topicId,
      {
        published: false,

        status:
          "draft",

        updatedBy,
      },
    );

// =========================================================
// DELETE
// =========================================================

export const deleteLawTopic =
  async (
    topicId,
    deletedBy = "system",
  ) =>
    publicLawTopicRepository.update(
      topicId,
      {
        deleted: true,

        deletedAt:
          new Date(),

        deletedBy,

        published:
          false,

        status:
          "archived",

        updatedBy:
          deletedBy,
      },
    );

export default {
  getPublishedLawTopics,
  getPublicLawTopicBySlug,
  getAllLawTopics,
  createLawTopic,
  updateLawTopic,
  publishLawTopic,
  unpublishLawTopic,
  deleteLawTopic,
};