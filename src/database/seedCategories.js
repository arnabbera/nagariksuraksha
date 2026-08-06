import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const categories = [
  {
    id: "property-law",
    name: "Property Law",
    description:
      "Property registration, mutation, title verification, sale deed, gift deed and property disputes.",
    order: 1,
  },
  {
    id: "consumer-law",
    name: "Consumer Law",
    description:
      "Consumer complaints, defective products, unfair trade practices and compensation claims.",
    order: 2,
  },
  {
    id: "cyber-law",
    name: "Cyber Law",
    description:
      "Cyber crime, online fraud, social media issues, digital evidence and data protection.",
    order: 3,
  },
  {
    id: "criminal-law",
    name: "Criminal Law",
    description:
      "FIR, bail, anticipatory bail, criminal defence, trial and related legal guidance.",
    order: 4,
  },
  {
    id: "civil-law",
    name: "Civil Law",
    description:
      "Civil disputes, injunctions, recovery suits, partition and contractual matters.",
    order: 5,
  },
  {
    id: "constitutional-law",
    name: "Constitutional Law",
    description:
      "Fundamental rights, constitutional remedies, writs and public law matters.",
    order: 6,
  },
  {
    id: "banking-law",
    name: "Banking Law",
    description:
      "Banking disputes, home loan issues, SARFAESI, DRT and financial legal matters.",
    order: 7,
  },
  {
    id: "family-law",
    name: "Family Law",
    description:
      "Marriage, divorce, maintenance, child custody and domestic disputes.",
    order: 8,
  },
  {
    id: "corporate-law",
    name: "Corporate Law",
    description:
      "Business registration, contracts, compliance, company matters and legal advisory.",
    order: 9,
  },
  {
    id: "llb-notes",
    name: "LL.B Notes",
    description:
      "Study notes, summaries and learning resources for LL.B students.",
    order: 10,
  },
  {
    id: "legal-updates",
    name: "Legal Updates",
    description:
      "Recent legal developments, notifications, amendments and important updates.",
    order: 11,
  },
  {
    id: "judgements",
    name: "Judgements",
    description:
      "Important judgments from the Supreme Court, High Courts and tribunals.",
    order: 12,
  },
  {
    id: "bare-acts",
    name: "Bare Acts",
    description:
      "Acts, sections, rules and statutory legal materials.",
    order: 13,
  },
  {
    id: "templates",
    name: "Templates",
    description:
      "Legal notices, agreements, affidavits, applications and drafting templates.",
    order: 14,
  },
  {
    id: "videos",
    name: "Videos",
    description:
      "Legal awareness videos, LL.B lessons and practical legal guidance.",
    order: 15,
  },
  {
    id: "courses",
    name: "Courses",
    description:
      "LL.B learning programs, certification courses and legal education modules.",
    order: 16,
  },
  {
    id: "faq",
    name: "FAQ",
    description:
      "Frequently asked legal questions and simple answers for citizens and students.",
    order: 17,
  },
];

export async function seedCategories() {
  const results = {
    created: 0,
    skipped: 0,
    failed: 0,
  };

  for (const category of categories) {
    try {
      const categoryRef = doc(db, "categories", category.id);
      const categorySnapshot = await getDoc(categoryRef);

      if (categorySnapshot.exists()) {
        results.skipped += 1;
        continue;
      }

      await setDoc(categoryRef, {
        name: category.name,
        slug: category.id,
        description: category.description,
        contentTypes: [
          "post",
          "article",
          "legal-update",
          "guide",
          "video",
          "service",
          "faq",
          "judgment",
          "bare-act",
          "template",
          "course",
        ],
        status: "active",
        order: category.order,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      results.created += 1;
    } catch (error) {
      console.error(`Failed to seed category: ${category.id}`, error);
      results.failed += 1;
    }
  }

  return {
    status: results.failed > 0 ? "partial" : "success",
    message: `Categories completed. Created: ${results.created}, Skipped: ${results.skipped}, Failed: ${results.failed}.`,
    ...results,
  };
}