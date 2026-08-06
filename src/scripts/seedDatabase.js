import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const categories = [
  { id: "property-law", name: "Property Law", order: 1 },
  { id: "consumer-law", name: "Consumer Law", order: 2 },
  { id: "cyber-law", name: "Cyber Law", order: 3 },
  { id: "criminal-law", name: "Criminal Law", order: 4 },
  { id: "civil-law", name: "Civil Law", order: 5 },
  { id: "constitutional-law", name: "Constitutional Law", order: 6 },
  { id: "banking-law", name: "Banking Law", order: 7 },
  { id: "family-law", name: "Family Law", order: 8 },
  { id: "llb-notes", name: "LL.B Notes", order: 9 },
  { id: "legal-updates", name: "Legal Updates", order: 10 },
  { id: "judgements", name: "Judgements", order: 11 },
  { id: "bare-acts", name: "Bare Acts", order: 12 },
  { id: "templates", name: "Templates", order: 13 },
  { id: "videos", name: "Videos", order: 14 },
  { id: "courses", name: "Courses", order: 15 },
  { id: "faq", name: "FAQ", order: 16 }
];

export async function seedCategories() {
  for (const category of categories) {
    await setDoc(doc(db, "categories", category.id), {
      ...category,
      slug: category.id,
      status: "active",
      createdAt: new Date()
    });
  }

  console.log("Categories created successfully.");
}