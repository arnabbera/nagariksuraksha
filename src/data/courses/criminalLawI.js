import { createChapterModel } from "../../models/ChapterModel";
import { createCourseModel } from "../../models/CourseModel";

export const CRIMINAL_LAW_I_COURSE_ID =
  "criminal-law-i-transitioning-from-ipc-to-bns";

export const criminalLawICourse = createCourseModel({
  id: CRIMINAL_LAW_I_COURSE_ID,
  title: "Criminal Law I (Transitioning from IPC to BNS)",
  slug: CRIMINAL_LAW_I_COURSE_ID,
  shortDescription:
    "Study the foundational principles of Indian criminal law while understanding the transition from the Indian Penal Code, 1860 to the Bharatiya Nyaya Sanhita, 2023.",
  description:
    "A structured eight-unit course covering the general principles of criminal liability, general exceptions, abetment, conspiracy, offences against the State and public tranquillity, false evidence, offences against the human body, property offences and other major offences, with comparative guidance for the transition from the IPC to the BNS.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 6,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title:
      "Criminal Law I: IPC to BNS Course | NagarikSuraksha",
    description:
      "Study Indian criminal law through eight structured units covering IPC principles, offences and their transition to the Bharatiya Nyaya Sanhita, 2023.",
    focusKeyword: "criminal law IPC to BNS course",
    secondaryKeywords: [
      "Bharatiya Nyaya Sanhita course",
      "IPC criminal law notes",
      "criminal law I LLB",
      "IPC to BNS transition",
    ],
    canonicalUrl:
      "/courses/criminal-law-i-transitioning-from-ipc-to-bns",
  },
});

const units = [
  {
    title: "Concept of Crime, Criminal Liability and General Exceptions",
    shortDescription:
      "The concept of crime and offence, mens rea, jurisdiction, general explanations and general exceptions.",
    overview:
      "This unit introduces the foundations of criminal responsibility and the circumstances in which an act may be excused or justified by law.",
    detailedContent:
      "Concept of crime and offence; the principle actus non facit reum nisi mens sit rea; territorial and extra-territorial jurisdiction; General Explanations under Sections 6–52A of the Indian Penal Code, 1860; General Exceptions under Sections 76–106; and comparative understanding of the corresponding framework under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Crime, offence, actus reus and mens rea",
      "Territorial and extra-territorial jurisdiction",
      "General explanations and joint liability",
      "Mistake, accident, necessity and consent",
      "Private defence of person and property",
      "Transition from IPC principles to the BNS",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 1–5",
      "Indian Penal Code, 1860 — Sections 6–52A",
      "Indian Penal Code, 1860 — Sections 76–106",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Abetment",
    shortDescription:
      "Instigation, conspiracy and intentional aid constituting abetment, together with liability and punishment.",
    overview:
      "This unit examines how a person may incur criminal liability by encouraging, facilitating or assisting the commission of an offence.",
    detailedContent:
      "Abetment by instigation, conspiracy or intentional aid; abettor; abetment in India and outside India; liability where the act abetted is committed or differs from the intended act; punishment of abetment; and the corresponding treatment of abetment under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Meaning and essential elements of abetment",
      "Instigation, conspiracy and intentional aid",
      "Liability of an abettor",
      "Punishment where the offence is or is not committed",
      "IPC-to-BNS comparison",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 107–113",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Criminal Conspiracy",
    shortDescription:
      "Agreement to commit an illegal act or a legal act by illegal means and the resulting criminal liability.",
    overview:
      "This unit explains the offence of criminal conspiracy, its essential agreement, evidentiary features and punishment.",
    detailedContent:
      "Meaning and ingredients of criminal conspiracy; agreement as the foundation of liability; distinction between conspiracy and abetment by conspiracy; proof through direct and circumstantial evidence; punishment; and the corresponding BNS framework.",
    keyPoints: [
      "Agreement as the essence of conspiracy",
      "Illegal act and legal act by illegal means",
      "Overt act requirements",
      "Proof of conspiracy",
      "Distinction from abetment",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 120A–120B",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against the State",
    shortDescription:
      "Waging war, conspiracy against the State and the historical law of sedition during the transition from IPC to BNS.",
    overview:
      "This unit studies serious offences affecting the sovereignty, security and authority of the State, with special attention to the legal transition concerning sedition.",
    detailedContent:
      "Waging war against the Government of India; conspiracy and preparation to wage war; collecting arms; concealing plans; assault on high constitutional authorities; the historical offence of sedition under Section 124A of the IPC; constitutional controversies; and the corresponding sovereignty, unity and integrity provisions under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Waging war and related preparatory offences",
      "Conspiracy against the State",
      "Collection of arms and concealment",
      "Historical scope of sedition under the IPC",
      "Transition to the BNS sovereignty framework",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 121–124A",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against Public Tranquillity",
    shortDescription:
      "Unlawful assembly, rioting, common object, affray and related offences affecting public peace.",
    overview:
      "This unit examines group-based criminality and offences that disturb public order and communal peace.",
    detailedContent:
      "Unlawful assembly and common object; liability of members; rioting and armed rioting; provocation and suppression of riots; promoting enmity; imputations prejudicial to national integration; affray; and comparative treatment under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Unlawful assembly and common object",
      "Constructive liability of members",
      "Rioting and armed rioting",
      "Promoting enmity",
      "Affray and public peace",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 141–152",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "False Evidence and Offences against Public Justice",
    shortDescription:
      "Giving and fabricating false evidence and related offences that interfere with the administration of justice.",
    overview:
      "This unit explains offences that corrupt evidence, obstruct judicial proceedings or otherwise undermine public justice.",
    detailedContent:
      "Giving false evidence; fabricating false evidence; punishment for false evidence; aggravated forms; using evidence known to be false; issuing false certificates and declarations; causing disappearance of evidence; giving false information; and corresponding provisions under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Giving and fabricating false evidence",
      "False certificates and declarations",
      "Use of evidence known to be false",
      "Disappearance of evidence",
      "Protection of the administration of justice",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 191–200",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against the Human Body",
    shortDescription:
      "Culpable homicide, murder, suicide, hurt, restraint, confinement, assault, kidnapping, abduction and sexual offences.",
    overview:
      "This unit provides a systematic study of the principal offences affecting life, bodily integrity, liberty and sexual autonomy.",
    detailedContent:
      "Culpable homicide and murder; exceptions and punishment; causing death by negligence; abetment of suicide; attempt to murder; hurt and grievous hurt; wrongful restraint and wrongful confinement; criminal force and assault; kidnapping and abduction; rape and other sexual offences; and the transition from IPC Sections 299–377 to the corresponding BNS provisions.",
    keyPoints: [
      "Culpable homicide and murder",
      "Suicide-related offences and attempts",
      "Hurt and grievous hurt",
      "Wrongful restraint and confinement",
      "Assault and criminal force",
      "Kidnapping, abduction and sexual offences",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 299–377",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Property, Marriage, Defamation, Intimidation and Attempts",
    shortDescription:
      "Property offences and selected offences relating to marriage, cruelty, reputation, intimidation and attempts.",
    overview:
      "This unit studies major property offences together with important offences relating to marriage, cruelty, reputation, threats and incomplete offences.",
    detailedContent:
      "Theft, extortion, robbery and dacoity; criminal misappropriation; criminal breach of trust; receiving stolen property; cheating; mischief; criminal trespass; offences relating to marriage; cruelty by husband or relatives of husband; defamation; criminal intimidation, insult and annoyance; attempt to commit offences; and comparative treatment under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Theft, extortion, robbery and dacoity",
      "Misappropriation and criminal breach of trust",
      "Cheating, mischief and criminal trespass",
      "Marriage-related offences and cruelty",
      "Defamation and criminal intimidation",
      "Liability for attempt",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 378–462",
      "Indian Penal Code, 1860 — Sections 493–498A",
      "Indian Penal Code, 1860 — Sections 499–502",
      "Indian Penal Code, 1860 — Sections 503–511",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
];

export const criminalLawIChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${CRIMINAL_LAW_I_COURSE_ID}-unit-${index + 1}`,
      courseId: CRIMINAL_LAW_I_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: [
        `Explain the principal criminal-law rules covered in Unit ${index + 1}.`,
        "Apply the relevant IPC principles to legal problems.",
        "Identify the corresponding transition from the IPC to the BNS.",
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
        "Revise the ingredients of each offence, applicable exceptions, distinctions, punishments and the corresponding transition from the IPC to the BNS. Support answers with statutory provisions and leading judicial principles.",
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
