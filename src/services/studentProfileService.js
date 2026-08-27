import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { userRepository } from "../repositories/UserRepository";

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
export const MAX_PROFILE_IMAGE_SIZE = 2 * 1024 * 1024;

const clean = (value, maxLength = 160) =>
  String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);

const validateImage = (file) => {
  if (!file) return;
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    throw new Error("Please upload a JPG, PNG or WebP image.");
  }
  if (file.size > MAX_PROFILE_IMAGE_SIZE) {
    throw new Error("Profile image must be 2 MB or smaller.");
  }
};

const uploadProfileImage = async (uid, file) => {
  validateImage(file);
  const extension = file.name?.split(".").pop()?.toLowerCase() || "jpg";
  const imageRef = ref(storage, `student-profiles/${uid}/profile-${Date.now()}.${extension}`);
  await uploadBytes(imageRef, file, {
    contentType: file.type,
    cacheControl: "public,max-age=3600",
  });
  return getDownloadURL(imageRef);
};

export const updateStudentProfile = async ({
  firebaseUser,
  profileData,
  currentPhotoURL = "",
  photoFile = null,
}) => {
  if (!firebaseUser?.uid) {
    throw new Error("You must be signed in to update your profile.");
  }

  const firstName = clean(profileData.firstName, 50);
  const lastName = clean(profileData.lastName, 50);
  if (firstName.length < 2 || lastName.length < 1) {
    throw new Error("Please enter your first and last name.");
  }

  const title = clean(profileData.title, 12);
  const displayName = [title, firstName, lastName].filter(Boolean).join(" ");
  const educationStatus = profileData.educationStatus === "completed" ? "completed" : "pursuing";
  const graduationCourse = clean(profileData.graduationCourse, 100);
  const university = clean(profileData.university, 140);
  if (!graduationCourse || !university) {
    throw new Error("Please enter your graduation course and university.");
  }

  let photoURL = currentPhotoURL;
  if (photoFile) photoURL = await uploadProfileImage(firebaseUser.uid, photoFile);

  const studentDetails = {
    title,
    firstName,
    lastName,
    displayName,
    dateOfBirth: profileData.dateOfBirth || "",
    education: {
      level: "Graduation",
      course: graduationCourse,
      university,
      status: educationStatus,
      passingYear: educationStatus === "completed" ? clean(profileData.passingYear, 4) : "",
      finalYearMarks: clean(profileData.finalYearMarks, 30),
    },
    address: clean(profileData.address, 500),
    photoURL: photoURL || "",
    profileUpdatedBy: firebaseUser.uid,
  };

  await updateProfile(firebaseUser, {
    displayName,
    photoURL: photoURL || null,
  });

  return userRepository.update(firebaseUser.uid, studentDetails);
};
