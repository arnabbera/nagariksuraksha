import {
  RESOURCE_TYPES,
  createChapterResourceModel,
} from "../models/ChapterResourceModel";

import chapterResourceRepository from "../repositories/ChapterResourceRepository";

const getYouTubeVideoId = (url = "") => {
  if (!url) {
    return "";
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    const parts = parsedUrl.pathname.split("/");

    const embedIndex = parts.indexOf("embed");

    if (
      embedIndex >= 0 &&
      parts[embedIndex + 1]
    ) {
      return parts[embedIndex + 1];
    }
  } catch {
    return "";
  }

  return "";
};

export const getChapterResources = async (
  chapterId,
) =>
  chapterResourceRepository.getByChapter(
    chapterId,
  );

export const getPublishedChapterResources = async (
  chapterId,
) =>
  chapterResourceRepository.getPublishedByChapter(
    chapterId,
  );

export const createChapterResource = async (
  resourceData,
  createdBy = "system",
) => {
  if (!resourceData?.courseId) {
    throw new Error("Course ID is required.");
  }

  if (!resourceData?.chapterId) {
    throw new Error("Chapter ID is required.");
  }

  if (!resourceData?.title?.trim()) {
    throw new Error("Resource title is required.");
  }

  const resourceId =
    resourceData.id ||
    crypto.randomUUID();

  const resource = createChapterResourceModel({
    ...resourceData,

    id: resourceId,

    youtubeVideoId:
      resourceData.type === RESOURCE_TYPES.VIDEO
        ? getYouTubeVideoId(
            resourceData.youtubeUrl,
          )
        : "",

    createdBy,
    updatedBy: createdBy,
  });

  return chapterResourceRepository.create(
    resourceId,
    resource,
  );
};

export const updateChapterResource = async (
  resourceId,
  resourceData,
  updatedBy = "system",
) => {
  if (!resourceId) {
    throw new Error("Resource ID is required.");
  }

  const existing =
    await chapterResourceRepository.getById(
      resourceId,
    );

  if (!existing) {
    throw new Error("Resource not found.");
  }

  return chapterResourceRepository.update(
    resourceId,
    {
      ...resourceData,

      youtubeVideoId:
        resourceData.type === RESOURCE_TYPES.VIDEO
          ? getYouTubeVideoId(
              resourceData.youtubeUrl,
            )
          : "",

      updatedBy,

      version:
        Number(existing.version || 1) + 1,
    },
  );
};

export const publishChapterResource = (
  resourceId,
) =>
  chapterResourceRepository.publish(resourceId);

export const unpublishChapterResource = (
  resourceId,
) =>
  chapterResourceRepository.unpublish(
    resourceId,
  );

export const deleteChapterResource = (
  resourceId,
  deletedBy = "system",
) =>
  chapterResourceRepository.softDelete(
    resourceId,
    deletedBy,
  );

export default {
  getChapterResources,
  getPublishedChapterResources,
  createChapterResource,
  updateChapterResource,
  publishChapterResource,
  unpublishChapterResource,
  deleteChapterResource,
};