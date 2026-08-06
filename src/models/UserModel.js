import { createBaseModel } from "./BaseModel";
import { USER_ROLES, USER_STATUS } from "../constants/enums";

export const createUserModel = ({
  uid = "",
  enrollmentId = "",

  email = "",
  displayName = "",
  firstName = "",
  lastName = "",

  phone = "",

  photoURL = "",

  role = USER_ROLES.STUDENT,

  status = USER_STATUS.ACTIVE,

  dateOfBirth = "",

  gender = "",

  address = "",

  city = "",

  state = "",

  country = "India",

  pincode = "",

  university = "",

  college = "",

  course = "",

  semester = "",

  year = "",

  bio = "",

  emailVerified = false,

  phoneVerified = false,

  loginCount = 0,

  previousLoginAt = null,

  lastLoginAt = null,

  notificationEnabled = true,

  darkMode = false,

  language = "en",

  profileCompleted = false,

  createdBy = "system",

  updatedBy = "system",
} = {}) => {

  return {

    ...createBaseModel({
      status,
      createdBy,
      updatedBy,
    }),

    uid,

    enrollmentId,

    email,

    displayName,

    firstName,

    lastName,

    phone,

    photoURL,

    role,

    dateOfBirth,

    gender,

    address,

    city,

    state,

    country,

    pincode,

    university,

    college,

    course,

    semester,

    year,

    bio,

    emailVerified,

    phoneVerified,

    loginCount,

    previousLoginAt,

    lastLoginAt,

    notificationEnabled,

    darkMode,

    language,

    profileCompleted,

  };

};