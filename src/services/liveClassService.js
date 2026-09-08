import { auth } from "../firebase/firebase";

export const getLiveSessions = async (courseId) => {
  const user = auth.currentUser;
  if (!user || !courseId) return [];

  const token = await user.getIdToken();
  const response = await fetch(
    `/api/live-classes?courseId=${encodeURIComponent(courseId)}`,
    { headers: { authorization: `Bearer ${token}` } },
  );
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Unable to load live-class sessions.");
  }

  return Array.isArray(result.sessions) ? result.sessions : [];
};

export const canJoinLiveSession = (session, now = Date.now()) => {
  const scheduledTime = new Date(session?.scheduledAt || "").getTime();
  if (!Number.isFinite(scheduledTime) || !session?.meetingLink) return false;
  const duration = Number(session.durationMinutes || 60) * 60_000;
  return now >= scheduledTime - 10 * 60_000 && now <= scheduledTime + duration;
};

export default { getLiveSessions, canJoinLiveSession };
