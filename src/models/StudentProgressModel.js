import { createBaseModel } from "./BaseModel";

export const createStudentProgressModel = ({
  id = null,

  studentId = "",
  courseId = "",
  chapterId = "",

  started = false,
  completed = false,

  startedAt = null,
  completedAt = null,
  lastAccessedAt = null,

  progressPercentage = 0,

  completedResourceIds = [],
  totalResources = 0,

  quizAttempted = false,
  quizPassed = false,
  quizScore = 0,

  notesViewed = false,

  createdBy = "system",
  updatedBy = "system",

  deleted = false,
  deletedAt = null,
  deletedBy = null,

  version = 1,
} = {}) => ({
  ...createBaseModel({
    id,
    status: completed ? "completed" : "active",
    createdBy,
    updatedBy,
    deleted,
    deletedAt,
    deletedBy,
    version,
  }),

  studentId,
  courseId,
  chapterId,

  started: Boolean(started),
  completed: Boolean(completed),

  startedAt,
  completedAt,
  lastAccessedAt,

  progressPercentage: Number(
    progressPercentage || 0,
  ),

  resources: {
    completedIds: Array.isArray(completedResourceIds)
      ? completedResourceIds
      : [],

    total: Number(totalResources || 0),
  },

  quiz: {
    attempted: Boolean(quizAttempted),
    passed: Boolean(quizPassed),
    score: Number(quizScore || 0),
  },

  notesViewed: Boolean(notesViewed),
});