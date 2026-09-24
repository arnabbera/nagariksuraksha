import { useEffect, useState } from "react";

export const formatINR = (paise) => `₹${(paise / 100).toLocaleString("en-IN")}`;

export default function useCoursePricing() {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/course-pricing", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Course pricing is unavailable.");
        return response.json();
      })
      .then(setPricing)
      .catch((error) => {
        if (error.name !== "AbortError") console.warn(error.message);
      });
    return () => controller.abort();
  }, []);

  return pricing;
}
