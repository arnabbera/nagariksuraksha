import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const CONTRACT_COURSE_ID =
  "general-principles-of-contract-and-specific-relief";

export const generalPrinciplesOfContractCourse = createCourseModel({
  id: CONTRACT_COURSE_ID,
  title: "General Principles of Contract and Specific Relief",
  slug: CONTRACT_COURSE_ID,
  shortDescription:
    "Study the formation, validity, performance and enforcement of contracts together with remedies under the Specific Relief Act, 1963.",
  description:
    "A structured eight-unit course covering the general principles of contract law, including offer and acceptance, consideration, capacity, free consent, void agreements, discharge, remedies for breach and the Specific Relief Act, 1963.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 5,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title:
      "General Principles of Contract and Specific Relief Course | NagarikSuraksha",
    description:
      "Study Indian contract law and the Specific Relief Act through eight structured units, downloadable learning material, mock tests and certification.",
    focusKeyword: "general principles of contract law",
    secondaryKeywords: [
      "Indian Contract Act course",
      "Specific Relief Act notes",
      "law of contract notes",
      "contract law mock test",
    ],
    canonicalUrl:
      "/courses/general-principles-of-contract-and-specific-relief",
  },
});

const units = [
  {
    title: "Formation and Essential Elements of Contract",
    shortDescription:
      "History and formation of contracts, agreements, definitions, classification, offer, acceptance and communication.",
    overview:
      "This unit introduces the historical development and formation of contracts and explains the distinction between an agreement and a legally enforceable contract.",
    detailedContent:
      "History and formation of contract; agreement and contract; statutory definitions; classification of contracts; offer and acceptance; communication and revocation of proposals and acceptances; essential elements of a valid contract; invitation to offer; tenders; and standard-form contracts.",
    keyPoints: [
      "Agreement and contract",
      "Offer, acceptance, communication and revocation",
      "Essential elements of a valid contract",
      "Invitation to offer and tenders",
      "Standard-form contracts",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 2–10",
    ],
  },
  {
    title: "Consideration and Privity of Contract",
    shortDescription:
      "Consideration, privity of contract, exceptions and the effect of unlawful consideration.",
    overview:
      "This unit examines consideration as an essential element of a valid contract and the rules governing privity of contract and consideration.",
    detailedContent:
      "Meaning, nature and legal requirements of consideration; privity of contract and privity of consideration; recognized exceptions to the doctrine of privity; unlawful consideration; and the legal effect of unlawful consideration on an agreement.",
    keyPoints: [
      "Meaning and essentials of consideration",
      "Privity of contract and consideration",
      "Exceptions to privity",
      "Unlawful consideration and its effect",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 2(d), 23–25",
    ],
  },
  {
    title: "Capacity to Contract",
    shortDescription:
      "Minor’s agreements, persons of unsound mind and persons disqualified by law.",
    overview:
      "This unit explains who is legally competent to enter into a contract and the consequences of agreements made by persons lacking contractual capacity.",
    detailedContent:
      "Legal capacity to contract; minor’s agreements and their effects; liability for necessaries; persons of unsound mind; and persons disqualified from contracting by law.",
    keyPoints: [
      "Competency to contract",
      "Nature and effect of a minor’s agreement",
      "Persons of unsound mind",
      "Persons disqualified by law",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 11–12 and 68",
    ],
  },
  {
    title: "Free Consent and Legality of Object",
    shortDescription:
      "Coercion, undue influence, misrepresentation, fraud, mistake and legality of object.",
    overview:
      "This unit studies the requirement of free consent and identifies the circumstances in which consent is impaired or the object of an agreement is unlawful.",
    detailedContent:
      "Meaning of consent and free consent; coercion; undue influence; misrepresentation; fraud; mistake of fact and law; consequences of defective consent; and legality of the object of an agreement.",
    keyPoints: [
      "Consent and free consent",
      "Coercion and undue influence",
      "Fraud and misrepresentation",
      "Mistake",
      "Legality of object",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 13–22 and 23",
    ],
  },
  {
    title: "Void Agreements and Contingent Contracts",
    shortDescription:
      "Agreements against public policy, wagering agreements, exceptions and contingent contracts.",
    overview:
      "This unit explains agreements that are void or opposed to public policy and distinguishes wagering agreements from enforceable contingent contracts.",
    detailedContent:
      "Void agreements; agreements against public policy; wagering agreements and their exceptions; the nature of contingent contracts; enforcement of contingent contracts; and the distinction between wagers and contingencies.",
    keyPoints: [
      "Void agreements",
      "Public-policy restrictions",
      "Wagering agreements and exceptions",
      "Contingent contracts",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 26–36",
    ],
  },
  {
    title: "Discharge of Contracts",
    shortDescription:
      "The various modes by which contractual obligations are discharged.",
    overview:
      "This unit examines how contractual rights and obligations come to an end through performance or other legally recognized modes of discharge.",
    detailedContent:
      "Discharge by performance; mutual agreement; novation, rescission and alteration; impossibility and frustration; lapse of time; operation of law; breach; remission; waiver; and accord and satisfaction.",
    keyPoints: [
      "Performance",
      "Mutual agreement and novation",
      "Impossibility and frustration",
      "Lapse of time and operation of law",
      "Discharge by breach",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 37–67",
    ],
  },
  {
    title: "Remedies for Breach and Specific Performance",
    shortDescription:
      "Damages, remoteness, injunction, restitution, specific performance and quasi-contracts.",
    overview:
      "This unit covers the principal remedies available after a breach of contract and the circumstances in which equitable and restitutionary relief may be granted.",
    detailedContent:
      "Remedies for breach of contract; damages; remoteness and ascertainment of damages; injunctions and the circumstances in which they are granted or refused; restitution; specific performance and when it may be granted; and obligations resembling contracts, commonly described as quasi-contracts.",
    keyPoints: [
      "Damages and remoteness",
      "Ascertainment of damages",
      "Injunctions",
      "Restitution and specific performance",
      "Quasi-contractual obligations",
    ],
    provisions: [
      "Indian Contract Act, 1872 — Sections 68–75",
      "Specific Relief Act, 1963",
    ],
  },
  {
    title: "The Specific Relief Act, 1963",
    shortDescription:
      "Specific relief under Sections 9–24 and preventive relief under Sections 36–42.",
    overview:
      "This unit provides a focused study of the statutory framework governing specific performance, related relief and injunctions under the Specific Relief Act, 1963.",
    detailedContent:
      "The Specific Relief Act, 1963: recovery and enforcement principles relevant to Sections 9–24; contracts that may be specifically enforced; substituted performance; persons for or against whom contracts may be enforced; bars and defenses; and preventive relief by injunction under Sections 36–42.",
    keyPoints: [
      "Specific performance",
      "Substituted performance",
      "Personal bars to relief",
      "Preventive relief",
      "Temporary, perpetual and mandatory injunctions",
    ],
    provisions: [
      "Specific Relief Act, 1963 — Sections 9–24",
      "Specific Relief Act, 1963 — Sections 36–42",
    ],
  },
];

export const generalPrinciplesOfContractChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${CONTRACT_COURSE_ID}-unit-${index + 1}`,
      courseId: CONTRACT_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: [
        `Explain the principal rules covered in Unit ${index + 1}.`,
        "Apply the relevant statutory provisions to legal problems.",
        "Identify important distinctions and examination-focused concepts.",
      ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core statutory reading for Unit ${index + 1}.`,
      })),
      examFocus:
        "Revise the statutory elements, exceptions, distinctions and available remedies. Support answers with the applicable provisions and leading principles.",
      revisionNotes: unit.keyPoints.join("; "),
      notes: unit.detailedContent,
      chapterNumber: index + 1,
      displayOrder: index + 1,
      quizRequired: true,
      passingPercentage: 80,
      maximumAttempts: 3,
      published: true,
      status: "published",
      previewAvailable: false,
    }),
);

export const generalPrinciplesOfContractBooks = [
  createCourseBookModel({
    id: `${CONTRACT_COURSE_ID}-book-1`,
    courseId: CONTRACT_COURSE_ID,
    title: "Law of Contract",
    author: "R.K. Bangia",
    description:
      "Recommended reading for the General Principles of Contract and Specific Relief course.",
    displayOrder: 1,
    recommended: true,
    published: true,
  }),
];
