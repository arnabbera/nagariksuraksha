import { createBaseModel } from "./BaseModel";

export const ENROLLMENT_STATUS = Object.freeze({
  ACTIVE: "active",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
});

export const createStudentEnrollmentModel = ({
  id = null,

  studentId = "",
  courseId = "",

  status = ENROLLMENT_STATUS.ACTIVE,

  enrolledAt = null,
  startedAt = null,
  completedAt = null,
  expiresAt = null,

  progressPercentage = 0,

  completedChapters = 0,
  totalChapters = 0,

  certificateEligible = false,
  certificateId = "",

  accessType = "free-learning",

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

  studentId,
  courseId,

  enrolledAt,
  startedAt,
  completedAt,
  expiresAt,

  progress: {
    percentage: Number(progressPercentage || 0),
    completedChapters: Number(
      completedChapters || 0,
    ),
    totalChapters: Number(totalChapters || 0),
  },

  certificate: {
    eligible: Boolean(certificateEligible),
    certificateId,
  },

  accessType,
});