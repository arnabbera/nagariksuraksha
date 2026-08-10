// src/firebase/storage.js

const CLOUDINARY_CLOUD_NAME = "udxty7iy";
const CLOUDINARY_UPLOAD_PRESET = "nagariksuraksha_courses";

const sanitiseFileName = (fileName) =>
  fileName
    .trim()
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Upload a file directly to Cloudinary.
 *
 * Keeps the same function interface previously used by
 * Firebase Storage so existing components do not need
 * major changes.
 */
export const uploadFile = async ({
  file,
  folder,
  onProgress,
}) => {
  if (!file) {
    throw new Error("Please select a file.");
  }

  if (!folder) {
    throw new Error("An upload folder is required.");
  }

  const safeFileName =
    sanitiseFileName(file.name) || `file-${Date.now()}`;

  const publicId = `${Date.now()}-${safeFileName}`;

  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    CLOUDINARY_UPLOAD_PRESET,
  );

  formData.append("folder", folder);
  formData.append("public_id", publicId);

  const uploadUrl =
    `https://api.cloudinary.com/v1_1/` +
    `${CLOUDINARY_CLOUD_NAME}/auto/upload`;

  // Your existing UI expects progress.
  // We use XMLHttpRequest because fetch() does not provide
  // browser upload progress events.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", uploadUrl, true);

    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) {
        return;
      }

      const progress = Math.round(
        (event.loaded / event.total) * 100,
      );

      onProgress?.(progress);
    };

    xhr.onerror = () => {
      reject(
        new Error(
          "Unable to connect to Cloudinary. Please check your internet connection.",
        ),
      );
    };

    xhr.onload = () => {
      let result;

      try {
        result = JSON.parse(xhr.responseText);
      } catch {
        reject(
          new Error(
            "Cloudinary returned an invalid response.",
          ),
        );
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        reject(
          new Error(
            result?.error?.message ||
              `Cloudinary upload failed (${xhr.status}).`,
          ),
        );
        return;
      }

      onProgress?.(100);

      resolve({
        // Keep these property names because the existing
        // CourseForm may already depend on them.
        downloadURL: result.secure_url,
        storagePath: result.public_id,
        fileName: result.public_id,

        originalFileName: file.name,
        contentType:
          result.resource_type === "image"
            ? file.type
            : file.type,
        size: result.bytes ?? file.size,

        // Additional Cloudinary information.
        publicId: result.public_id,
        secureUrl: result.secure_url,
        resourceType: result.resource_type,
        format: result.format ?? "",
        width: result.width ?? null,
        height: result.height ?? null,
      });
    };

    xhr.send(formData);
  });
};

/**
 * Deleting a Cloudinary asset requires an authenticated
 * server-side API call containing the Cloudinary API secret.
 *
 * Never put the API secret in a React/Vite application.
 *
 * For now this method intentionally does not attempt to
 * delete the remote Cloudinary asset.
 */
export const deleteStoredFile = async (storagePath) => {
  if (!storagePath) {
    return;
  }

  console.warn(
    "Cloudinary asset deletion requires a secure server-side endpoint:",
    storagePath,
  );
};

/**
 * Upload images used by posts.
 *
 * Preserves the interface used by the previous Firebase
 * Storage implementation.
 */
export const uploadPostImages = async ({
  thumbnailFile,
  desktopFile,
  mobileFile,
  onProgress,
}) => {
  const uploads = {};

  if (thumbnailFile) {
    uploads.thumbnail = await uploadFile({
      file: thumbnailFile,
      folder: "posts/thumbnail",
      onProgress: (progress) =>
        onProgress?.("thumbnail", progress),
    });
  }

  if (desktopFile) {
    uploads.desktop = await uploadFile({
      file: desktopFile,
      folder: "posts/desktop-16x9",
      onProgress: (progress) =>
        onProgress?.("desktop", progress),
    });
  }

  if (mobileFile) {
    uploads.mobile = await uploadFile({
      file: mobileFile,
      folder: "posts/mobile-9x16",
      onProgress: (progress) =>
        onProgress?.("mobile", progress),
    });
  }

  return uploads;
};