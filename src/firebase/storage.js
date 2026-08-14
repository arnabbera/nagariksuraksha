// src/firebase/storage.js

const CLOUDINARY_CLOUD_NAME = "udxty7iy";
const CLOUDINARY_UPLOAD_PRESET =
  "nagariksuraksha_courses";

// =========================================================
// FILE LIMITS
// =========================================================

const MAX_PDF_SIZE =
  25 * 1024 * 1024;

// =========================================================
// FILE NAME HELPER
// =========================================================

const sanitiseFileName = (
  fileName = "",
) =>
  fileName
    .trim()
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(
      /[^a-z0-9_-]+/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    )
    .replace(
      /^-|-$/g,
      "",
    );

// =========================================================
// SAFE PATH HELPER
// =========================================================

const sanitisePathPart = (
  value = "",
) =>
  String(value)
    .trim()
    .replace(
      /[^a-zA-Z0-9_-]/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    )
    .replace(
      /^-|-$/g,
      "",
    );

// =========================================================
// PDF VALIDATION
// =========================================================

const validatePdf = (
  file,
  label = "PDF",
) => {
  if (!file) {
    throw new Error(
      `Please select a ${label} file.`,
    );
  }

  const isPdf =
    file.type ===
      "application/pdf" ||
    file.name
      ?.toLowerCase()
      .endsWith(".pdf");

  if (!isPdf) {
    throw new Error(
      `Only PDF files can be uploaded as ${label}.`,
    );
  }

  if (
    file.size >
    MAX_PDF_SIZE
  ) {
    throw new Error(
      `${label} must be 25 MB or smaller.`,
    );
  }
};

// =========================================================
// GENERIC CLOUDINARY UPLOAD
// =========================================================

const uploadToCloudinary = ({
  file,
  folder,
  resourceType = "auto",
  onProgress,
}) => {
  if (!file) {
    return Promise.reject(
      new Error(
        "Please select a file.",
      ),
    );
  }

  if (!folder) {
    return Promise.reject(
      new Error(
        "An upload folder is required.",
      ),
    );
  }

  const safeFileName =
    sanitiseFileName(
      file.name,
    ) ||
    `file-${Date.now()}`;

  const publicId =
    `${Date.now()}-${safeFileName}`;

  const formData =
    new FormData();

  formData.append(
    "file",
    file,
  );

  formData.append(
    "upload_preset",
    CLOUDINARY_UPLOAD_PRESET,
  );

  formData.append(
    "folder",
    folder,
  );

  formData.append(
    "public_id",
    publicId,
  );

  const uploadUrl =
    `https://api.cloudinary.com/v1_1/` +
    `${CLOUDINARY_CLOUD_NAME}/` +
    `${resourceType}/upload`;

  return new Promise(
    (
      resolve,
      reject,
    ) => {
      const xhr =
        new XMLHttpRequest();

      xhr.open(
        "POST",
        uploadUrl,
        true,
      );

      // =====================================================
      // UPLOAD PROGRESS
      // =====================================================

      xhr.upload.onprogress =
        (
          event,
        ) => {
          if (
            !event.lengthComputable
          ) {
            return;
          }

          const progress =
            Math.round(
              (
                event.loaded /
                event.total
              ) *
                100,
            );

          onProgress?.(
            progress,
          );
        };

      // =====================================================
      // NETWORK ERROR
      // =====================================================

      xhr.onerror =
        () => {
          reject(
            new Error(
              "Unable to connect to Cloudinary. Please check your internet connection.",
            ),
          );
        };

      // =====================================================
      // CLOUDINARY RESPONSE
      // =====================================================

      xhr.onload =
        () => {
          let result;

          try {
            result =
              JSON.parse(
                xhr.responseText,
              );
          } catch {
            reject(
              new Error(
                "Cloudinary returned an invalid response.",
              ),
            );

            return;
          }

          if (
            xhr.status <
              200 ||
            xhr.status >=
              300
          ) {
            reject(
              new Error(
                result
                  ?.error
                  ?.message ||
                  `Cloudinary upload failed (${xhr.status}).`,
              ),
            );

            return;
          }

          onProgress?.(
            100,
          );

          resolve({
            downloadURL:
              result.secure_url,

            storagePath:
              result.public_id,

            publicId:
              result.public_id,

            fileName:
              result.public_id,

            originalFileName:
              file.name,

            contentType:
              file.type,

            size:
              result.bytes ??
              file.size,

            secureUrl:
              result.secure_url,

            resourceType:
              result.resource_type,

            format:
              result.format ??
              "",

            width:
              result.width ??
              null,

            height:
              result.height ??
              null,

            version:
              result.version ??
              null,

            assetId:
              result.asset_id ??
              "",
          });
        };

      xhr.send(
        formData,
      );
    },
  );
};

// =========================================================
// GENERAL FILE UPLOAD
// =========================================================
//
// CourseForm currently uses this function for the working
// 16:9 and 9:16 course images.
//
// Keep this interface unchanged.
// =========================================================

export const uploadFile =
  async ({
    file,
    folder,
    onProgress,
  }) => {
    return uploadToCloudinary({
      file,
      folder,
      resourceType:
        "auto",
      onProgress,
    });
  };

// =========================================================
// CHAPTER PDF UPLOAD
// =========================================================

export const uploadPdf =
  async ({
    file,
    courseId,
    chapterId,
    onProgress,
  }) => {
    validatePdf(
      file,
      "chapter PDF",
    );

    if (!courseId) {
      throw new Error(
        "Course ID is required before uploading the chapter PDF.",
      );
    }

    const safeCourseId =
      sanitisePathPart(
        courseId,
      );

    const safeChapterId =
      chapterId
        ? sanitisePathPart(
            chapterId,
          )
        : "new-chapter";

    const folder =
      `nagariksuraksha/chapters/` +
      `${safeCourseId}/` +
      `${safeChapterId}`;

    const result =
      await uploadToCloudinary({
        file,
        folder,
        resourceType:
          "auto",
        onProgress,
      });

    return {
      ...result,

      originalFileName:
        file.name,

      contentType:
        "application/pdf",

      size:
        result.size ??
        file.size,
    };
  };

// =========================================================
// LAW NOTE PDF UPLOAD
// =========================================================
//
// Used from Admin -> Law Notes.
//
// IMPORTANT:
//
// Uploading the PDF does not make the corresponding
// publicLawTopics Firestore document responsible for
// protecting access.
//
// We will store protected PDF access information separately
// so anonymous visitors cannot simply retrieve the PDF URL
// from the public SEO document.
// =========================================================

export const uploadLawNotePdf =
  async ({
    file,

    courseId = "",

    lawNoteId = "",

    onProgress,
  }) => {
    validatePdf(
      file,
      "law note PDF",
    );

    const safeCourseId =
      courseId
        ? sanitisePathPart(
            courseId,
          )
        : "general";

    const safeLawNoteId =
      lawNoteId
        ? sanitisePathPart(
            lawNoteId,
          )
        : "new-law-note";

    const folder =
      `nagariksuraksha/law-notes/` +
      `${safeCourseId}/` +
      `${safeLawNoteId}`;

    const result =
      await uploadToCloudinary({
        file,

        folder,

        resourceType:
          "auto",

        onProgress,
      });

    return {
      ...result,

      originalFileName:
        file.name,

      contentType:
        "application/pdf",

      size:
        result.size ??
        file.size,

      lawNoteId:
        lawNoteId || "",

      courseId:
        courseId || "",
    };
  };

// =========================================================
// DELETE CLOUDINARY FILE
// =========================================================
//
// IMPORTANT:
//
// Cloudinary deletion requires API Secret authentication.
//
// API Secret must NEVER be stored in a React/Vite frontend.
//
// We therefore keep this safe placeholder until we create a
// backend/serverless deletion endpoint.
// =========================================================

export const deleteStoredFile =
  async (
    storagePath,
  ) => {
    if (
      !storagePath
    ) {
      return;
    }

    console.warn(
      "Cloudinary asset deletion requires a secure server-side endpoint:",
      storagePath,
    );
  };

// =========================================================
// POST IMAGE UPLOAD
// =========================================================
//
// Preserve existing functionality.
// =========================================================

export const uploadPostImages =
  async ({
    thumbnailFile,
    desktopFile,
    mobileFile,
    onProgress,
  }) => {
    const uploads = {};

    if (
      thumbnailFile
    ) {
      uploads.thumbnail =
        await uploadFile({
          file:
            thumbnailFile,

          folder:
            "posts/thumbnail",

          onProgress: (
            progress,
          ) =>
            onProgress?.(
              "thumbnail",
              progress,
            ),
        });
    }

    if (
      desktopFile
    ) {
      uploads.desktop =
        await uploadFile({
          file:
            desktopFile,

          folder:
            "posts/desktop-16x9",

          onProgress: (
            progress,
          ) =>
            onProgress?.(
              "desktop",
              progress,
            ),
        });
    }

    if (
      mobileFile
    ) {
      uploads.mobile =
        await uploadFile({
          file:
            mobileFile,

          folder:
            "posts/mobile-9x16",

          onProgress: (
            progress,
          ) =>
            onProgress?.(
              "mobile",
              progress,
            ),
        });
    }

    return uploads;
  };