import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const publicMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
    order: 1,
    enabled: true,
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    order: 2,
    enabled: true,
  },
  {
    id: "legal-services",
    label: "Legal Services",
    path: "/services",
    order: 3,
    enabled: true,
    children: [
      {
        label: "Property Law",
        path: "/services/property-law",
        order: 1,
      },
      {
        label: "Consumer Law",
        path: "/services/consumer-law",
        order: 2,
      },
      {
        label: "Cyber Law",
        path: "/services/cyber-law",
        order: 3,
      },
      {
        label: "Criminal Law",
        path: "/services/criminal-law",
        order: 4,
      },
      {
        label: "Civil Law",
        path: "/services/civil-law",
        order: 5,
      },
      {
        label: "Banking & SARFAESI",
        path: "/services/banking-law",
        order: 6,
      },
    ],
  },
  {
    id: "legal-learning",
    label: "Legal Learning",
    path: "/learning",
    order: 4,
    enabled: true,
    children: [
      {
        label: "LL.B Learning",
        path: "/learning",
        order: 1,
        loginRequired: true,
      },
      {
        label: "Certification",
        path: "/certification",
        order: 2,
        loginRequired: true,
      },
      {
        label: "Free Legal Resources",
        path: "/resources",
        order: 3,
        loginRequired: false,
      },
    ],
  },
  {
    id: "legal-updates",
    label: "Legal Updates",
    path: "/legal-updates",
    order: 5,
    enabled: true,
  },
  {
    id: "videos",
    label: "Videos",
    path: "/videos",
    order: 6,
    enabled: true,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    order: 7,
    enabled: true,
  },
  {
    id: "student-login",
    label: "Student Login",
    path: "/login",
    order: 8,
    enabled: true,
    style: "button",
  },
];

const adminMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin",
    icon: "dashboard",
    order: 1,
    enabled: true,
  },
  {
    id: "homepage-cms",
    label: "Homepage CMS",
    path: "/admin/homepage",
    icon: "home",
    order: 2,
    enabled: true,
  },
  {
    id: "content",
    label: "Content",
    path: "/admin/content",
    icon: "content",
    order: 3,
    enabled: true,
    children: [
      {
        label: "Posts",
        path: "/admin/posts",
        order: 1,
      },
      {
        label: "Articles",
        path: "/admin/articles",
        order: 2,
      },
      {
        label: "Legal Updates",
        path: "/admin/legal-updates",
        order: 3,
      },
      {
        label: "Judgements",
        path: "/admin/judgements",
        order: 4,
      },
      {
        label: "Bare Acts",
        path: "/admin/bare-acts",
        order: 5,
      },
      {
        label: "Templates",
        path: "/admin/templates",
        order: 6,
      },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    path: "/admin/videos",
    icon: "video",
    order: 4,
    enabled: true,
  },
  {
    id: "media-library",
    label: "Media Library",
    path: "/admin/media",
    icon: "media",
    order: 5,
    enabled: true,
  },
  {
    id: "learning",
    label: "Learning",
    path: "/admin/courses",
    icon: "learning",
    order: 6,
    enabled: true,
    children: [
      {
        label: "Courses",
        path: "/admin/courses",
        order: 1,
      },
      {
        label: "Subjects",
        path: "/admin/subjects",
        order: 2,
      },
      {
        label: "Chapters",
        path: "/admin/chapters",
        order: 3,
      },
      {
        label: "Quizzes",
        path: "/admin/quizzes",
        order: 4,
      },
      {
        label: "Questions",
        path: "/admin/questions",
        order: 5,
      },
      {
        label: "Certificates",
        path: "/admin/certificates",
        order: 6,
      },
    ],
  },
  {
    id: "students",
    label: "Students",
    path: "/admin/students",
    icon: "students",
    order: 7,
    enabled: true,
  },
  {
    id: "comments",
    label: "Comments",
    path: "/admin/comments",
    icon: "comments",
    order: 8,
    enabled: true,
  },
  {
    id: "seo-manager",
    label: "SEO Manager",
    path: "/admin/seo",
    icon: "seo",
    order: 9,
    enabled: true,
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "/admin/notifications",
    icon: "notifications",
    order: 10,
    enabled: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    path: "/admin/analytics",
    icon: "analytics",
    order: 11,
    enabled: true,
  },
  {
    id: "database-installer",
    label: "Database Installer",
    path: "/admin/database",
    icon: "database",
    order: 12,
    enabled: true,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: "settings",
    order: 13,
    enabled: true,
  },
];

const menuDocuments = [
  {
    id: "public",
    name: "Public Navigation",
    type: "public",
    items: publicMenuItems,
  },
  {
    id: "admin",
    name: "Admin Navigation",
    type: "admin",
    items: adminMenuItems,
  },
];

export async function seedMenus() {
  const results = {
    created: 0,
    skipped: 0,
    failed: 0,
  };

  for (const menu of menuDocuments) {
    try {
      const menuReference = doc(db, "menus", menu.id);
      const menuSnapshot = await getDoc(menuReference);

      if (menuSnapshot.exists()) {
        results.skipped += 1;
        continue;
      }

      await setDoc(menuReference, {
        name: menu.name,
        type: menu.type,
        items: menu.items,
        status: "active",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      results.created += 1;
    } catch (error) {
      console.error(`Failed to seed menu: ${menu.id}`, error);
      results.failed += 1;
    }
  }

  return {
    status: results.failed > 0 ? "partial" : "success",
    message: `Menus completed. Created: ${results.created}, Skipped: ${results.skipped}, Failed: ${results.failed}.`,
    ...results,
  };
}