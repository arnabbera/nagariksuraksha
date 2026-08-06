import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const keywordGroups = [
  {
    id: "property-registration-kolkata",
    name: "Property Registration Kolkata",
    primaryKeyword: "property registration Kolkata",
    secondaryKeywords: [
      "property lawyer Kolkata",
      "property registration lawyer Kolkata",
      "sale deed registration Kolkata",
      "property verification Kolkata",
      "mutation Kolkata",
      "title search Kolkata",
      "stamp duty Kolkata",
      "registration office Kolkata",
    ],
    suggestedTags: [
      "property registration",
      "property law",
      "sale deed",
      "mutation",
      "title search",
      "Kolkata",
    ],
    suggestedFaqs: [
      "What documents are required for property registration in Kolkata?",
      "How long does property registration take in Kolkata?",
      "How is stamp duty calculated in West Bengal?",
      "Why is title verification important before registration?",
      "Is mutation compulsory after property registration?",
    ],
    recommendedSchemaType: "LegalService",
    categoryId: "property-law",
    location: "Kolkata",
    order: 1,
  },
  {
    id: "property-verification-kolkata",
    name: "Property Verification Kolkata",
    primaryKeyword: "property verification Kolkata",
    secondaryKeywords: [
      "property title search Kolkata",
      "legal verification of property Kolkata",
      "property document verification Kolkata",
      "encumbrance check Kolkata",
      "property due diligence Kolkata",
    ],
    suggestedTags: [
      "property verification",
      "title search",
      "due diligence",
      "encumbrance",
      "Kolkata",
    ],
    suggestedFaqs: [
      "What documents are checked during property verification?",
      "How can I verify whether a property is mortgaged?",
      "Why should a buyer conduct a title search?",
      "Can a lawyer verify property ownership documents?",
    ],
    recommendedSchemaType: "LegalService",
    categoryId: "property-law",
    location: "Kolkata",
    order: 2,
  },
  {
    id: "consumer-complaint-kolkata",
    name: "Consumer Complaint Kolkata",
    primaryKeyword: "consumer complaint lawyer Kolkata",
    secondaryKeywords: [
      "consumer court lawyer Kolkata",
      "consumer complaint filing Kolkata",
      "defective product complaint Kolkata",
      "unfair trade practice lawyer Kolkata",
      "consumer compensation claim Kolkata",
    ],
    suggestedTags: [
      "consumer complaint",
      "consumer court",
      "unfair trade practice",
      "compensation",
      "Kolkata",
    ],
    suggestedFaqs: [
      "How can I file a consumer complaint in Kolkata?",
      "What is the time limit for filing a consumer case?",
      "Can I claim compensation for defective goods?",
      "Is a lawyer required for a consumer complaint?",
    ],
    recommendedSchemaType: "LegalService",
    categoryId: "consumer-law",
    location: "Kolkata",
    order: 3,
  },
  {
    id: "cyber-fraud-kolkata",
    name: "Cyber Fraud Kolkata",
    primaryKeyword: "cyber fraud lawyer Kolkata",
    secondaryKeywords: [
      "online fraud complaint Kolkata",
      "cyber crime lawyer Kolkata",
      "digital payment fraud Kolkata",
      "social media fraud complaint Kolkata",
      "banking cyber fraud lawyer Kolkata",
    ],
    suggestedTags: [
      "cyber fraud",
      "online fraud",
      "cyber crime",
      "digital payment",
      "Kolkata",
    ],
    suggestedFaqs: [
      "How can I report online financial fraud?",
      "Where should I file a cyber crime complaint in Kolkata?",
      "What evidence is required for a cyber fraud complaint?",
      "Can money lost in online fraud be recovered?",
    ],
    recommendedSchemaType: "LegalService",
    categoryId: "cyber-law",
    location: "Kolkata",
    order: 4,
  },
  {
    id: "sarfaesi-lawyer-kolkata",
    name: "SARFAESI Lawyer Kolkata",
    primaryKeyword: "SARFAESI lawyer Kolkata",
    secondaryKeywords: [
      "DRT lawyer Kolkata",
      "bank loan dispute lawyer Kolkata",
      "home loan dispute Kolkata",
      "SARFAESI notice lawyer Kolkata",
      "property auction dispute Kolkata",
    ],
    suggestedTags: [
      "SARFAESI",
      "DRT",
      "banking law",
      "loan dispute",
      "property auction",
      "Kolkata",
    ],
    suggestedFaqs: [
      "What should I do after receiving a SARFAESI notice?",
      "Can a borrower challenge a bank auction?",
      "What is the role of the DRT in SARFAESI matters?",
      "Can a bank take possession without court permission?",
    ],
    recommendedSchemaType: "LegalService",
    categoryId: "banking-law",
    location: "Kolkata",
    order: 5,
  },
  {
    id: "llb-notes-india",
    name: "LL.B Notes India",
    primaryKeyword: "free LL.B notes",
    secondaryKeywords: [
      "LLB study material",
      "LLB notes PDF",
      "constitutional law notes",
      "law of torts notes",
      "family law notes",
      "criminal law notes",
    ],
    suggestedTags: [
      "LLB notes",
      "law students",
      "study material",
      "legal education",
      "India",
    ],
    suggestedFaqs: [
      "Where can I find free LL.B notes?",
      "Are LL.B notes available subject-wise?",
      "Can students access legal PDFs after login?",
      "Are quizzes available after every subject?",
    ],
    recommendedSchemaType: "Course",
    categoryId: "llb-notes",
    location: "India",
    order: 6,
  },
];

export async function seedKeywordGroups() {
  const results = {
    created: 0,
    skipped: 0,
    failed: 0,
  };

  for (const group of keywordGroups) {
    try {
      const keywordGroupRef = doc(
        db,
        "keywordGroups",
        group.id,
      );

      const keywordGroupSnapshot = await getDoc(
        keywordGroupRef,
      );

      if (keywordGroupSnapshot.exists()) {
        results.skipped += 1;
        continue;
      }

      await setDoc(keywordGroupRef, {
        name: group.name,
        primaryKeyword: group.primaryKeyword,
        secondaryKeywords: group.secondaryKeywords,
        suggestedTags: group.suggestedTags,
        suggestedFaqs: group.suggestedFaqs,
        suggestedFaqIds: [],
        relatedContentIds: [],
        relatedServiceIds: [],
        recommendedSchemaType:
          group.recommendedSchemaType,
        categoryId: group.categoryId,
        location: group.location,
        status: "active",
        order: group.order,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      results.created += 1;
    } catch (error) {
      console.error(
        `Failed to seed keyword group: ${group.id}`,
        error,
      );

      results.failed += 1;
    }
  }

  return {
    status: results.failed > 0 ? "partial" : "success",
    message: `Keyword groups completed. Created: ${results.created}, Skipped: ${results.skipped}, Failed: ${results.failed}.`,
    ...results,
  };
}