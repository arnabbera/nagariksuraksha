import { createBaseModel } from "./BaseModel";

// =========================================================
// EXAM MATERIAL STATUS
// =========================================================

export const EXAM_MATERIAL_STATUS =
  Object.freeze({
    DRAFT: "draft",
    PUBLISHED: "published",
    ARCHIVED: "archived",
  });

// =========================================================
// EMPTY PDF MATERIAL
// =========================================================

const createPdfMaterial = (
  material = {},
) => ({
  url:
    material?.url || "",

  publicId:
    material?.publicId || "",

  fileName:
    material?.fileName || "",

  fileSize:
    Number(
      material?.fileSize || 0,
    ),

  mimeType:
    material?.mimeType ||
    "application/pdf",

  uploadedAt:
    material?.uploadedAt ||
    null,

  uploadedBy:
    material?.uploadedBy ||
    "",
});

// =========================================================
// CHAPTER EXAM MATERIAL MODEL
// =========================================================

export const createChapterExamMaterialModel =
  ({
    id = null,

    courseId = "",
    chapterId = "",

    chapterNumber = 0,
    chapterTitle = "",

    // -----------------------------------------------------
    // MOCK TEST QUESTION PDF
    // -----------------------------------------------------

    mockTestPdf = null,

    mockTestPublished =
      false,

    // -----------------------------------------------------
    // FINAL EXAM QUESTION PDF
    // -----------------------------------------------------

    finalExamPdf = null,

    finalExamPublished =
      false,

    // -----------------------------------------------------
    // GENERAL STATUS
    // -----------------------------------------------------

    status =
      EXAM_MATERIAL_STATUS.DRAFT,

    createdBy = "system",
    updatedBy = "system",

    deleted = false,
    deletedAt = null,
    deletedBy = null,

    version = 1,
  } = {}) => ({
    ...createBaseModel({
      id,

      status,

      createdBy,
      updatedBy,

      deleted,
      deletedAt,
      deletedBy,

      version,
    }),

    // =====================================================
    // COURSE / CHAPTER
    // =====================================================

    courseId,
    chapterId,

    chapterNumber:
      Number(
        chapterNumber || 0,
      ),

    chapterTitle:
      String(
        chapterTitle || "",
      ).trim(),

    // =====================================================
    // MOCK TEST
    // =====================================================

    mockTest: {
      pdf:
        createPdfMaterial(
          mockTestPdf,
        ),

      published:
        Boolean(
          mockTestPublished,
        ),
    },

    // =====================================================
    // FINAL EXAM
    // =====================================================

    finalExam: {
      pdf:
        createPdfMaterial(
          finalExamPdf,
        ),

      published:
        Boolean(
          finalExamPublished,
        ),

      /*
       * Final-exam material must NOT become publicly
       * accessible merely because it has been uploaded.
       *
       * Student access will later be controlled by:
       *
       * certification status
       * + Admin eligibility
       * + scheduled exam
       * + exam start/end window.
       */
      studentAccess:
        false,
    },
  });

export default createChapterExamMaterialModel;