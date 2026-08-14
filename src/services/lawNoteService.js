import {
  createLawNoteModel,
} from "../models/LawNoteModel";

import lawNoteRepository from "../repositories/LawNoteRepository";

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
// ADMIN - ALL LAW NOTES
// =========================================================

export const getAllLawNotes =
  async () =>
    lawNoteRepository.getAll();

// =========================================================
// PUBLIC - PUBLISHED LAW NOTES
// =========================================================

export const getPublishedLawNotes =
  async (
    pageSize = 100,
  ) =>
    lawNoteRepository.getPublished(
      pageSize,
    );

// =========================================================
// PUBLIC - FEATURED LAW NOTES
// =========================================================

export const getFeaturedLawNotes =
  async (
    pageSize = 6,
  ) =>
    lawNoteRepository.getFeatured(
      pageSize,
    );

// =========================================================
// GET LAW NOTE BY ID
// =========================================================

export const getLawNoteById =
  async (
    id,
  ) => {
    if (!id) {
      return null;
    }

    return lawNoteRepository.getById(
      id,
    );
  };

// =========================================================
// GET PUBLISHED LAW NOTE BY SLUG
// =========================================================

export const getLawNoteBySlug =
  async (
    slug,
  ) => {
    if (!slug) {
      return null;
    }

    return lawNoteRepository.getBySlug(
      normalizeSlug(
        slug,
      ),
    );
  };

// =========================================================
// CREATE LAW NOTE
// =========================================================

export const createLawNote =
  async (
    lawNoteData,
    createdBy = "system",
  ) => {
    if (
      !lawNoteData
        ?.title
        ?.trim()
    ) {
      throw new Error(
        "Law note title is required.",
      );
    }

    const slug =
      normalizeSlug(
        lawNoteData.slug ||
          lawNoteData.title,
      );

    if (!slug) {
      throw new Error(
        "A valid law note slug is required.",
      );
    }

    /*
     * getBySlug() returns only published
     * documents, so check all admin records
     * for duplicate slugs.
     */
    const allLawNotes =
      await lawNoteRepository.getAll();

    const duplicate =
      allLawNotes.find(
        (
          note,
        ) =>
          !note.deleted &&
          note.slug ===
            slug,
      );

    if (
      duplicate
    ) {
      throw new Error(
        "A law note with this slug already exists.",
      );
    }

    const documentId =
      lawNoteData.id ||
      slug;

    const lawNote =
      createLawNoteModel({
        ...lawNoteData,

        id:
          documentId,

        slug,

        createdBy,

        updatedBy:
          createdBy,
      });

    return lawNoteRepository.create(
      documentId,
      lawNote,
    );
  };

// =========================================================
// UPDATE LAW NOTE
// =========================================================

export const updateLawNote =
  async (
    lawNoteId,
    lawNoteData,
    updatedBy = "system",
  ) => {
    if (
      !lawNoteId
    ) {
      throw new Error(
        "Law note ID is required.",
      );
    }

    const existing =
      await lawNoteRepository.getById(
        lawNoteId,
      );

    if (
      !existing
    ) {
      throw new Error(
        "Law note not found.",
      );
    }

    const slug =
      normalizeSlug(
        lawNoteData.slug ||
          lawNoteData.title ||
          existing.slug,
      );

    if (!slug) {
      throw new Error(
        "A valid law note slug is required.",
      );
    }

    const allLawNotes =
      await lawNoteRepository.getAll();

    const duplicate =
      allLawNotes.find(
        (
          note,
        ) =>
          !note.deleted &&
          note.id !==
            lawNoteId &&
          note.slug ===
            slug,
      );

    if (
      duplicate
    ) {
      throw new Error(
        "Another law note already uses this slug.",
      );
    }

    return lawNoteRepository.update(
      lawNoteId,
      {
        ...lawNoteData,

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
// PUBLISH LAW NOTE
// =========================================================

export const publishLawNote =
  async (
    id,
  ) =>
    lawNoteRepository.publish(
      id,
    );

// =========================================================
// ARCHIVE LAW NOTE
// =========================================================

export const archiveLawNote =
  async (
    id,
  ) =>
    lawNoteRepository.archive(
      id,
    );

// =========================================================
// FEATURE LAW NOTE
// =========================================================

export const setLawNoteFeatured =
  async (
    id,
    featured,
  ) =>
    lawNoteRepository.setFeatured(
      id,
      featured,
    );

// =========================================================
// DELETE LAW NOTE
// =========================================================

export const deleteLawNote =
  async (
    id,
    deletedBy = "system",
  ) =>
    lawNoteRepository.softDelete(
      id,
      deletedBy,
    );

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getAllLawNotes,
  getPublishedLawNotes,
  getFeaturedLawNotes,
  getLawNoteById,
  getLawNoteBySlug,
  createLawNote,
  updateLawNote,
  publishLawNote,
  archiveLawNote,
  setLawNoteFeatured,
  deleteLawNote,
};