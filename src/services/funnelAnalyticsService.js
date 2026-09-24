import { auth } from "../firebase/firebase";

// Analytics failures never interrupt course navigation or a payment.
export const trackFunnelEvent = async (event, courseId, extra = {}) => {
  if (!courseId) return;
  try {
    const token = event === "checkout_open" ? await auth.currentUser?.getIdToken() : null;
    const response = await fetch("/api/funnel/event", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ event, courseId, ...extra }),
    });
    if (!response.ok) console.warn("Funnel event could not be saved", event, response.status);
  } catch (error) {
    console.warn("Funnel event could not be saved", event, error);
  }
};

export const getFunnelReport = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("Please sign in as the administrator.");
  const response = await fetch("/api/admin/funnel", {
    headers: { authorization: `Bearer ${await user.getIdToken()}` },
    cache: "no-store",
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Unable to load funnel analytics.");
  return result;
};
