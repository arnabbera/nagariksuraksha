import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { storage } from "./firebase";

const sanitiseFileName = (fileName) =>
  fileName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-");

export const uploadFile = ({
  file,
  folder,
  onProgress,
}) =>
  new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("Please select a file."));
      return;
    }

    if (!folder) {
      reject(new Error("A storage folder is required."));
      return;
    }

    const safeFileName = sanitiseFileName(file.name);
    const uniqueFileName = `${Date.now()}-${safeFileName}`;
    const storagePath = `${folder}/${uniqueFileName}`;
    const storageReference = ref(storage, storagePath);

    const uploadTask = uploadBytesResumable(
      storageReference,
      file,
      {
        contentType: file.type,
      },
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100;

        onProgress?.(Math.round(progress));
      },
      reject,
      async () => {
        const downloadURL = await getDownloadURL(
          uploadTask.snapshot.ref,
        );

        resolve({
          downloadURL,
          storagePath,
          fileName: uniqueFileName,
          originalFileName: file.name,
          contentType: file.type,
          size: file.size,
        });
      },
    );
  });

export const deleteStoredFile = async (storagePath) => {
  if (!storagePath) {
    return;
  }

  await deleteObject(ref(storage, storagePath));
};

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