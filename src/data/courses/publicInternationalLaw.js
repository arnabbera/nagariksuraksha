import { createChapterModel } from "../../models/ChapterModel";
import { createCourseModel } from "../../models/CourseModel";

export const PUBLIC_INTERNATIONAL_LAW_COURSE_ID =
  "public-international-law";

export const publicInternationalLawCourse = createCourseModel({
  id: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
  title: "Public International Law",
  slug: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
  shortDescription:
    "Study the foundations, sources, subjects and institutions of public international law, including treaties, jurisdiction, dispute settlement and the United Nations.",
  description:
    "A structured eight-unit course covering the nature, origin and basis of international law; its sources and subjects; the relationship between international and municipal law; recognition and jurisdiction; nationality, extradition and asylum; treaties; peaceful dispute settlement; and the United Nations.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 7,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Public International Law Course | NagarikSuraksha",
    description:
      "Study public international law through eight structured units covering sources, States, jurisdiction, treaties, dispute settlement and the United Nations.",
    focusKeyword: "public international law course",
    secondaryKeywords: [
      "international law notes",
      "sources of international law",
      "law of treaties",
      "United Nations law",
      "LLB international law course",
    ],
    canonicalUrl: "/courses/public-international-law",
    robots: {
      index: false,
      follow: false,
    },
    sitemap: {
      include: false,
    },
  },
});

const units = [
  {
    title: "Nature, Origin and Basis of International Law",
    shortDescription:
      "The meaning, development, characteristics and binding basis of public international law.",
    overview:
      "This unit introduces public international law, traces its historical development and examines the principal theories explaining its legal and binding character.",
    detailedContent:
      "Meaning and scope of public international law; distinction from private international law; historical development from early inter-State practice to the modern international legal order; characteristics of a decentralised legal system; relationship between law, morality and international comity; Austinian criticism; natural-law, positivist, consent, pacta sunt servanda and community-interest theories; enforcement, sanctions and compliance; and the contemporary basis of international legal obligation.",
    keyPoints: [
      "Meaning and scope of public international law",
      "Historical origin and development",
      "International law and international morality",
      "Theories concerning its binding force",
      "Enforcement and compliance",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Preamble and Articles 1–2",
      "Statute of the International Court of Justice — Article 38",
    ],
  },
  {
    title: "Sources of International Law",
    shortDescription:
      "Treaties, custom, general principles, judicial decisions, scholarly writings and other law-forming materials.",
    overview:
      "This unit examines the recognised sources used to identify rules of international law and the interaction among treaty, custom and general legal principles.",
    detailedContent:
      "Article 38(1) of the Statute of the International Court of Justice; international conventions; international custom as general practice accepted as law; State practice and opinio juris; persistent objection; regional and local custom; general principles of law; judicial decisions and teachings as subsidiary means; resolutions of international organisations; unilateral acts; soft law; equity; jus cogens obligations; and questions of hierarchy and conflict among sources.",
    keyPoints: [
      "Article 38(1) of the ICJ Statute",
      "Treaties and conventions",
      "State practice and opinio juris",
      "General principles of law",
      "Subsidiary means and soft law",
      "Jus cogens and hierarchy",
    ],
    provisions: [
      "Statute of the International Court of Justice — Article 38",
      "Vienna Convention on the Law of Treaties, 1969 — Article 53",
    ],
  },
  {
    title:
      "Subjects of International Law and Relation with Municipal Law",
    shortDescription:
      "International legal personality and the interaction between international and domestic legal systems.",
    overview:
      "This unit identifies the entities capable of possessing international rights and duties and explains how international law operates within municipal legal systems.",
    detailedContent:
      "Meaning of international legal personality; States as primary subjects; international organisations; individuals; peoples and self-determination; corporations, non-governmental organisations and other participants; acquisition and extent of rights, duties and capacity; monism and dualism; transformation, incorporation and adoption; international-law rules in domestic courts; treaty implementation; customary international law; conflict between international and municipal law; and the approach of the Constitution and courts of India.",
    keyPoints: [
      "International legal personality",
      "States and international organisations",
      "Individuals and other participants",
      "Monism and dualism",
      "Incorporation and transformation",
      "Indian constitutional approach",
    ],
    provisions: [
      "Constitution of India — Articles 51(c), 73, 246 and 253",
      "Charter of the United Nations, 1945",
    ],
  },
  {
    title: "Recognition and State Jurisdiction",
    shortDescription:
      "Recognition of States and governments and the bases, limits and immunities connected with State jurisdiction.",
    overview:
      "This unit studies recognition in international law and the principles determining when a State may prescribe, adjudicate and enforce its laws.",
    detailedContent:
      "Statehood and recognition; declaratory and constitutive theories; recognition de facto and de jure; express and implied recognition; conditional recognition; recognition of governments, belligerency and insurgency; legal consequences and withdrawal; non-recognition; territorial, nationality, passive-personality, protective and universal jurisdiction; conflicts of jurisdiction; extraterritorial jurisdiction; enforcement limits; sovereign immunity; diplomatic and consular immunities; and jurisdiction over ships and aircraft.",
    keyPoints: [
      "Criteria of Statehood",
      "Declaratory and constitutive theories",
      "De facto and de jure recognition",
      "Bases of State jurisdiction",
      "Extraterritorial jurisdiction",
      "State and diplomatic immunities",
    ],
    provisions: [
      "Montevideo Convention on the Rights and Duties of States, 1933 — Article 1",
      "Vienna Convention on Diplomatic Relations, 1961",
      "Vienna Convention on Consular Relations, 1963",
    ],
  },
  {
    title: "Nationality, Extradition and Asylum",
    shortDescription:
      "Nationality, statelessness, diplomatic protection, extradition and territorial or diplomatic asylum.",
    overview:
      "This unit examines the legal bond of nationality and the rules governing surrender and protection of persons across national boundaries.",
    detailedContent:
      "Meaning and importance of nationality; acquisition by birth, descent, naturalisation, registration and incorporation of territory; loss, renunciation and deprivation; dual nationality and statelessness; nationality of corporations; genuine-link principle; diplomatic protection; meaning and basis of extradition; extradition treaties and domestic law; double criminality, speciality, political-offence exception, non bis in idem, human-rights limitations and rule of non-inquiry; meaning and forms of asylum; territorial and diplomatic asylum; refugees, non-refoulement and distinction between asylum and extradition.",
    keyPoints: [
      "Acquisition and loss of nationality",
      "Dual nationality and statelessness",
      "Diplomatic protection",
      "Principles of extradition",
      "Territorial and diplomatic asylum",
      "Refugees and non-refoulement",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948 — Articles 14–15",
      "Convention Relating to the Status of Refugees, 1951 — Article 33",
      "Extradition Act, 1962 (India)",
    ],
  },
  {
    title: "Treaties",
    shortDescription:
      "Formation, application, interpretation, validity, amendment, termination and suspension of treaties.",
    overview:
      "This unit studies the law of treaties with primary reference to the Vienna Convention on the Law of Treaties, 1969.",
    detailedContent:
      "Meaning and classification of treaties; treaty-making capacity and authority; negotiation, adoption and authentication; signature, ratification, accession and entry into force; reservations and objections; pacta sunt servanda and good-faith performance; treaties and third States; interpretation under Articles 31–33; amendment and modification; invalidity arising from error, fraud, corruption, coercion or conflict with jus cogens; termination, withdrawal and suspension; material breach, supervening impossibility and fundamental change of circumstances; depositaries and registration; and treaty-making and implementation in India.",
    keyPoints: [
      "Formation and entry into force",
      "Reservations and objections",
      "Pacta sunt servanda",
      "Treaty interpretation",
      "Invalidity and jus cogens",
      "Termination and suspension",
    ],
    provisions: [
      "Vienna Convention on the Law of Treaties, 1969",
      "Charter of the United Nations, 1945 — Article 102",
      "Constitution of India — Article 253",
    ],
  },
  {
    title: "Amicable Means of Settlement of Disputes",
    shortDescription:
      "Negotiation, good offices, mediation, inquiry, conciliation, arbitration, judicial settlement and regional arrangements.",
    overview:
      "This unit explains the obligation to settle international disputes peacefully and compares diplomatic, political, arbitral and judicial methods.",
    detailedContent:
      "Meaning of an international dispute; prohibition on threat or use of force and the duty of peaceful settlement; negotiation; consultation; good offices; mediation; inquiry and fact-finding; conciliation; arbitration; judicial settlement before the International Court of Justice and other tribunals; jurisdiction based on consent; contentious and advisory proceedings; settlement through regional agencies or arrangements; role of the Security Council and General Assembly; differences among binding and non-binding procedures; and selection of an appropriate settlement method.",
    keyPoints: [
      "Duty of peaceful settlement",
      "Negotiation and consultation",
      "Good offices and mediation",
      "Inquiry and conciliation",
      "Arbitration and judicial settlement",
      "United Nations and regional mechanisms",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 2(3), 2(4) and 33–38",
      "Statute of the International Court of Justice",
      "Hague Conventions for the Pacific Settlement of International Disputes",
    ],
  },
  {
    title:
      "United Nations: Purposes, Principles, Membership and Principal Organs",
    shortDescription:
      "The constitutional structure of the United Nations, its membership and six principal organs.",
    overview:
      "This unit studies the establishment, purposes and governing principles of the United Nations and the composition and functions of its principal organs.",
    detailedContent:
      "Historical background and establishment of the United Nations; legal personality; purposes under Article 1; principles under Article 2; original and admitted members; admission, suspension and expulsion; representation and withdrawal questions; General Assembly composition, voting and functions; Security Council composition, voting, veto and primary responsibility for international peace and security; Economic and Social Council; Trusteeship Council; International Court of Justice; Secretariat and Secretary-General; subsidiary organs and specialised agencies; Charter amendment; privileges and immunities; and contemporary questions of United Nations reform.",
    keyPoints: [
      "Establishment and legal personality of the UN",
      "Purposes and principles",
      "Membership, suspension and expulsion",
      "General Assembly and Security Council",
      "ECOSOC and Trusteeship Council",
      "International Court of Justice and Secretariat",
      "Voting, veto and UN reform",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 1–2",
      "Charter of the United Nations, 1945 — Articles 3–6",
      "Charter of the United Nations, 1945 — Articles 7–101",
      "Statute of the International Court of Justice",
    ],
  },
];

export const publicInternationalLawChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${PUBLIC_INTERNATIONAL_LAW_COURSE_ID}-unit-${index + 1}`,
      courseId: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: [
        `Explain the principal international-law rules covered in Unit ${index + 1}.`,
        "Apply the relevant international instruments and legal principles to problems.",
        "Identify important distinctions, doctrines and examination-focused concepts.",
      ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core international instrument or statutory reading for Unit ${index + 1}.`,
      })),
      examFocus:
        "Define the governing doctrine, distinguish related concepts, apply the relevant treaty or customary rule, and support the answer with authoritative international instruments and leading principles.",
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
