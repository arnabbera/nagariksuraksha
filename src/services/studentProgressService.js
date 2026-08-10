import { createStudentProgressModel } from "../models/StudentProgressModel";

import studentProgressRepository from "../repositories/StudentProgressRepository";

const createProgressId = (
  studentId,
  chapterId,
) => `${studentId}_${chapterId}`;

export const getStudentCourseProgress = (
  studentId,
  courseId,
) =>
  studentProgressRepository.getByStudentCourse(
    studentId,
    courseId,
  );

export const getStudentChapterProgress = (
  studentId,
  chapterId,
) =>
  studentProgressRepository.getChapterProgress(
    studentId,
    chapterId,
  );

export const startChapter = async (
  {
    studentId,
    courseId,
    chapterId,
  },
  updatedBy = "system",
) => {
  const existing =
    await studentProgressRepository.getChapterProgress(
      studentId,
      chapterId,
    );

  if (existing) {
    return studentProgressRepository.update(
      existing.id,
      {
        started: true,
        startedAt:
          existing.startedAt || new Date(),
        lastAccessedAt: new Date(),
        updatedBy,
        version:
          Number(existing.version || 1) + 1,
      },
    );
  }

  const progressId = createProgressId(
    studentId,
    chapterId,
  );

  const progress =
    createStudentProgressModel({
      id: progressId,

      studentId,
      courseId,
      chapterId,

      started: true,

      startedAt: new Date(),
      lastAccessedAt: new Date(),

      createdBy: updatedBy,
      updatedBy,
    });

  return studentProgressRepository.create(
    progressId,
    progress,
  );
};

export const markResourceComplete = async ({
  studentId,
  courseId,
  chapterId,
  resourceId,
  totalResources = 0,
  updatedBy = "system",
}) => {
  let progress =
    await studentProgressRepository.getChapterProgress(
      studentId,
      chapterId,
    );

  if (!progress) {
    progress = await startChapter(
      {
        studentId,
        courseId,
        chapterId,
      },
      updatedBy,
    );
  }

  const existingIds =
    progress.resources?.completedIds || [];

  const completedIds = Array.from(
    new Set([...existingIds, resourceId]),
  );

  const safeTotal = Number(totalResources || 0);

  const percentage =
    safeTotal > 0
      ? Math.min(
          100,
          Math.round(
            (completedIds.length / safeTotal) *
              100,
          ),
        )
      : 0;

  return studentProgressRepository.update(
    progress.id,
    {
      resources: {
        completedIds,
        total: safeTotal,
      },

      progressPercentage: percentage,

      lastAccessedAt: new Date(),

      updatedBy,

      version:
        Number(progress.version || 1) + 1,
    },
  );
};

export const markChapterComplete = async (
  studentId,
  chapterId,
  updatedBy = "system",
) => {
  const progress =
    await studentProgressRepository.getChapterProgress(
      studentId,
      chapterId,
    );

  if (!progress) {
    throw new Error(
      "Chapter progress record not found.",
    );
  }

  return studentProgressRepository.update(
    progress.id,
    {
      completed: true,
      status: "completed",
      progressPercentage: 100,

      completedAt: new Date(),
      lastAccessedAt: new Date(),

      updatedBy,

      version:
        Number(progress.version || 1) + 1,
    },
  );
};

export const updateQuizProgress = async ({
  studentId,
  chapterId,
  attempted = true,
  passed = false,
  score = 0,
  updatedBy = "system",
}) => {
  const progress =
    await studentProgressRepository.getChapterProgress(
      studentId,
      chapterId,
    );

  if (!progress) {
    throw new Error(
      "Chapter progress record not found.",
    );
  }

  return studentProgressRepository.update(
    progress.id,
    {
      quiz: {
        attempted: Boolean(attempted),
        passed: Boolean(passed),
        score: Number(score || 0),
      },

      lastAccessedAt: new Date(),

      updatedBy,

      version:
        Number(progress.version || 1) + 1,
    },
  );
};

export default {
  getStudentCourseProgress,
  getStudentChapterProgress,
  startChapter,
  markResourceComplete,
  markChapterComplete,
  updateQuizProgress,
};