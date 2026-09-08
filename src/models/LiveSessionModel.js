import { createBaseModel } from "./BaseModel";

export const createLiveSessionModel = ({
  id = null,
  courseId = "",
  chapterId = "",
  chapterNumber = 0,
  title = "",
  scheduledAt = null,
  durationMinutes = 60,
  meetingLink = "",
  recordingUrl = "",
  published = true,
  createdBy = "system",
  updatedBy = "system",
} = {}) => ({
  ...createBaseModel({ id, status: published ? "published" : "draft", createdBy, updatedBy }),
  courseId,
  chapterId,
  chapterNumber: Number(chapterNumber || 0),
  title,
  scheduledAt,
  durationMinutes: Number(durationMinutes || 60),
  meetingLink,
  recordingUrl,
  published: Boolean(published),
});

export default createLiveSessionModel;
