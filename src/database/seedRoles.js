import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const roles = [
  {
    id: "admin",
    name: "Administrator",
    description:
      "Full access to NagarikSuraksha administration, content, students, courses, SEO, comments and settings.",
    permissions: [
      "dashboard.view",
      "homepage.manage",
      "content.create",
      "content.read",
      "content.update",
      "content.delete",
      "videos.manage",
      "media.manage",
      "courses.manage",
      "students.manage",
      "comments.manage",
      "seo.manage",
      "settings.manage",
      "activityLogs.view",
    ],
    order: 1,
  },
  {
    id: "student",
    name: "Student",
    description:
      "Access to the student portal, learning materials, quizzes, progress and certificates.",
    permissions: [
      "student.dashboard.view",
      "courses.view",
      "chapters.view",
      "videos.view",
      "notes.view",
      "quizzes.attempt",
      "progress.view",
      "certificates.view",
      "profile.update",
    ],
    order: 2,
  },
  {
    id: "guest",
    name: "Guest",
    description:
      "Public access to published pages, posts, legal updates, videos and guest comments.",
    permissions: [
      "public.pages.view",
      "published.content.view",
      "published.videos.view",
      "comments.create",
      "contact.submit",
    ],
    order: 3,
  },
];

export async function seedRoles() {
  const results = {
    created: 0,
    skipped: 0,
    failed: 0,
  };

  for (const role of roles) {
    try {
      const roleRef = doc(db, "roles", role.id);
      const roleSnapshot = await getDoc(roleRef);

      if (roleSnapshot.exists()) {
        results.skipped += 1;
        continue;
      }

      await setDoc(roleRef, {
        name: role.name,
        description: role.description,
        permissions: role.permissions,
        status: "active",
        order: role.order,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      results.created += 1;
    } catch (error) {
      console.error(`Failed to seed role: ${role.id}`, error);
      results.failed += 1;
    }
  }

  return {
    status: results.failed > 0 ? "partial" : "success",
    message: `Roles completed. Created: ${results.created}, Skipped: ${results.skipped}, Failed: ${results.failed}.`,
    ...results,
  };
}