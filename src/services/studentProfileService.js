import {
  updateProfile,
} from "firebase/auth";
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import {
  storage,
} from "../firebase/firebase";
import {
  userRepository,
} from "../repositories/UserRepository";

const ALLOWED_IMAGE_TYPES =
  new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
  ]);

const MAX_PROFILE_IMAGE_SIZE =
  5 * 1024 * 1024;

const normalizeDisplayName = (
  value,
) =>
  String(
    value || "",
  )
    .trim()
    .replace(
      /\s+/g,
      " ",
    );

const validateProfileImage = (
  file,
) => {
  if (!file) {
    return;
  }

  if (
    !ALLOWED_IMAGE_TYPES.has(
      file.type,
    )
  ) {
    throw new Error(
      "Please choose a JPG, PNG or WebP image.",
    );
  }

  if (
    file.size >
    MAX_PROFILE_IMAGE_SIZE
  ) {
    throw new Error(
      "Profile picture must be 5 MB or smaller.",
    );
  }
};

const uploadProfileImage = async (
  uid,
  file,
) => {
  validateProfileImage(
    file,
  );

  const extension =
    file.name
      ?.split(".")
      .pop()
      ?.toLowerCase() ||
    "jpg";

  const imageReference =
    ref(
      storage,
      `student-profiles/${uid}/profile-${Date.now()}.${extension}`,
    );

  await uploadBytes(
    imageReference,
    file,
    {
      contentType:
        file.type,
      cacheControl:
        "public,max-age=3600",
    },
  );

  return getDownloadURL(
    imageReference,
  );
};

export const updateStudentProfile =
  async ({
    firebaseUser,
    displayName,
    currentPhotoURL = "",
    photoFile = null,
  }) => {
    if (
      !firebaseUser?.uid
    ) {
      throw new Error(
        "You must be signed in to update your profile.",
      );
    }

    const normalizedName =
      normalizeDisplayName(
        displayName,
      );

    if (
      normalizedName.length <
      2
    ) {
      throw new Error(
        "Please enter your full name.",
      );
    }

    if (
      normalizedName.length >
      80
    ) {
      throw new Error(
        "Name must be 80 characters or fewer.",
      );
    }

    let photoURL =
      currentPhotoURL || "";

    if (photoFile) {
      photoURL =
        await uploadProfileImage(
          firebaseUser.uid,
          photoFile,
        );
    }

    await updateProfile(
      firebaseUser,
      {
        displayName:
          normalizedName,
        photoURL:
          photoURL || null,
      },
    );

    return userRepository.update(
      firebaseUser.uid,
      {
        displayName:
          normalizedName,
        photoURL,
        profileUpdatedBy:
          firebaseUser.uid,
      },
    );
  };

export default {
  updateStudentProfile,
};
