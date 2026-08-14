import {
  createLawNotePdfAssetModel,
} from "../models/LawNotePdfAssetModel";

import lawNotePdfAssetRepository from "../repositories/LawNotePdfAssetRepository";

import {
  uploadLawNotePdf,
} from "../firebase/storage";

// =========================================================
// GET ACTIVE PDF ASSET
// =========================================================

export const getActiveLawNotePdfAsset =
  async (
    lawNoteId,
  ) => {
    if (!lawNoteId) {
      return null;
    }

    return lawNotePdfAssetRepository.getActiveByLawNoteId(
      lawNoteId,
    );
  };

// =========================================================
// GET ALL PDF ASSETS FOR LAW NOTE
// =========================================================

export const getLawNotePdfAssets =
  async (
    lawNoteId,
  ) => {
    if (!lawNoteId) {
      return [];
    }

    return lawNotePdfAssetRepository.getByLawNoteId(
      lawNoteId,
    );
  };

// =========================================================
// UPLOAD + SAVE PDF ASSET
// =========================================================

export const uploadAndSaveLawNotePdf =
  async ({
    file,

    lawNoteId,
    lawNoteSlug = "",

    courseId = "",
    courseTitle = "",

    title = "",
    description = "",

    uploadedBy = "system",

    onProgress,
  }) => {
    if (!file) {
      throw new Error(
        "Please select a PDF file.",
      );
    }

    if (!lawNoteId) {
      throw new Error(
        "Law Note ID is required before uploading a PDF.",
      );
    }

    // =======================================================
    // UPLOAD TO CLOUDINARY
    // =======================================================

    const uploadResult =
      await uploadLawNotePdf({
        file,
        courseId,
        lawNoteId,
        onProgress,
      });

    // =======================================================
    // DEACTIVATE PREVIOUS PDF
    // =======================================================

    await lawNotePdfAssetRepository.deactivateByLawNoteId(
      lawNoteId,
    );

    // =======================================================
    // CREATE ASSET MODEL
    // =======================================================

    const assetId =
      `${lawNoteId}-${Date.now()}`;

    const asset =
      createLawNotePdfAssetModel({
        id:
          assetId,

        lawNoteId,

        lawNoteSlug,

        courseId,

        courseTitle,

        title:
          title ||
          file.name,

        description,

        downloadURL:
          uploadResult.downloadURL ||
          "",

        secureUrl:
          uploadResult.secureUrl ||
          "",

        storagePath:
          uploadResult.storagePath ||
          "",

        publicId:
          uploadResult.publicId ||
          "",

        fileName:
          uploadResult.fileName ||
          "",

        originalFileName:
          uploadResult.originalFileName ||
          file.name,

        contentType:
          uploadResult.contentType ||
          "application/pdf",

        size:
          uploadResult.size ||
          file.size,

        resourceType:
          uploadResult.resourceType ||
          "",

        format:
          uploadResult.format ||
          "",

        assetId:
          uploadResult.assetId ||
          "",

        version:
          uploadResult.version ??
          null,

        uploadedAt:
          new Date(),

        uploadedBy,

        active:
          true,

        status:
          "active",

        createdBy:
          uploadedBy,

        updatedBy:
          uploadedBy,
      });

    // =======================================================
    // SAVE TO FIRESTORE
    // =======================================================

    return lawNotePdfAssetRepository.create(
      assetId,
      asset,
    );
  };

// =========================================================
// DELETE PDF ASSET
// =========================================================

export const deleteLawNotePdfAsset =
  async (
    assetId,
    deletedBy = "system",
  ) => {
    if (!assetId) {
      throw new Error(
        "PDF Asset ID is required.",
      );
    }

    return lawNotePdfAssetRepository.softDelete(
      assetId,
      deletedBy,
    );
  };

// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
  getActiveLawNotePdfAsset,
  getLawNotePdfAssets,
  uploadAndSaveLawNotePdf,
  deleteLawNotePdfAsset,
};