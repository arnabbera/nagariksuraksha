import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const MEDIA_LAW_COURSE_ID = "media-law";

export const mediaLawCourse = createCourseModel({
  id: MEDIA_LAW_COURSE_ID,
  title: "Media Law",
  slug: MEDIA_LAW_COURSE_ID,
  shortDescription:
    "Study Indian media law across print, broadcasting, cinema, journalism, digital platforms, advertising and constitutional freedoms.",
  description:
    "A structured eight-unit course covering the development of media, constitutional freedom and restrictions, defamation and contempt, copyright and broadcasting, ethics and self-regulation, broadcast legislation, internet regulation, and advertising law.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 10,
  totalChapters: 8,
  status: "published",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Media Law Course | NagarikSuraksha",
    description:
      "Study Media Law through eight structured units covering press freedom, defamation, contempt, broadcasting, copyright, internet regulation and advertising law.",
    focusKeyword: "media law course",
    secondaryKeywords: [
      "media law notes",
      "press law India",
      "broadcasting law India",
      "digital media law",
      "advertising law India",
      "media law certificate course",
    ],
    canonicalUrl: "/courses/media-law",
    robots: { index: false, follow: false },
    sitemap: { include: false },
  },
});

const units = [
  {
    title: "Introduction and Development of Media",
    shortDescription:
      "Concept, history, theories and evolution of media, Indian media legislation, print media and registration.",
    overview:
      "This unit introduces the meaning and functions of media, traces the history and evolution of communication institutions, examines principal theories of media, and outlines the development of Indian media legislation with particular attention to print-media regulation and registration.",
    objectives: [
      "Define media and distinguish its principal forms and functions.",
      "Trace the historical development of print, broadcast and digital media.",
      "Compare the principal normative theories of the press and media.",
      "Explain the evolution of media legislation in India.",
      "Examine the present legal framework governing newspapers and periodicals.",
    ],
    topics: [
      "Meaning, scope and functions of media",
      "History and evolution of mass communication",
      "Authoritarian, libertarian, social-responsibility and democratic-participant theories",
      "Colonial and post-Independence development of Indian media law",
      "Print media, publishers, printers and periodicals",
      "Registration of newspapers and periodicals",
    ],
    provisions: [
      "Press and Registration of Periodicals Act, 2023",
      "Press and Registration of Periodicals Rules, 2024",
      "Historical development from the Press and Registration of Books Act, 1867",
    ],
  },
  {
    title: "Media in the Constitutional Framework",
    shortDescription:
      "Freedom of expression, constitutional restrictions, privacy, information, press privileges and public-interest litigation.",
    overview:
      "This unit places media freedom within the Constitution of India. It studies freedom of speech and expression, reasonable restrictions, privacy and informational rights, the absence of a separate textual freedom of the press, legal privileges and responsibilities of journalists, and constitutional remedies including public-interest litigation.",
    objectives: [
      "Explain the constitutional source of media and press freedom.",
      "Apply the grounds of restriction under Article 19(2).",
      "Balance free expression with privacy, dignity and reputation.",
      "Explain the relationship between media freedom and the right to information.",
      "Evaluate constitutional remedies and media-related public-interest litigation.",
    ],
    topics: [
      "Articles 19(1)(a) and 19(2)",
      "Judicial interpretation of press and media freedom",
      "Privacy, dignity, reputation and proportionality",
      "Right to information and public accountability",
      "Journalistic privilege, source protection and legal responsibility",
      "Print-media law and public-interest litigation",
    ],
    provisions: [
      "Constitution of India: Articles 14, 19, 21, 32 and 226",
      "Right to Information Act, 2005",
      "Digital Personal Data Protection Act, 2023",
    ],
  },
  {
    title: "Legal Dimensions of Media I",
    shortDescription:
      "Defamation, obscenity, national-security speech, negligence, legislative privilege, contempt, official secrets and journalist protection.",
    overview:
      "This unit examines civil and criminal liability arising from media activity. It covers defamation, obscenity, the current treatment of speech affecting sovereignty and security, negligence, legislative privilege, contempt of court, official secrets, the protection of working journalists and the role of the Press Council of India.",
    objectives: [
      "Distinguish civil and criminal defamation and their defences.",
      "Apply obscenity and harmful-publication standards.",
      "Explain legislative privilege, contempt and fair reporting.",
      "Assess official-secrets restrictions and public-interest reporting.",
      "Describe the statutory protection of working journalists and the Press Council's role.",
    ],
    topics: [
      "Criminal defamation, obscenity and sovereignty-related offences",
      "Tortious defamation, negligence and available defences",
      "Privileges of Parliament and State Legislatures",
      "Contempt of court and responsible court reporting",
      "Official secrets and access to government information",
      "Working journalists and the Press Council of India",
    ],
    provisions: [
      "Bharatiya Nyaya Sanhita, 2023",
      "Contempt of Courts Act, 1971",
      "Official Secrets Act, 1923",
      "Working Journalists and Other Newspaper Employees Act, 1955 and subsequent labour-law developments",
      "Press Council Act, 1978",
    ],
  },
  {
    title: "Legal Dimensions of Media II",
    shortDescription:
      "Copyright, broadcasting and performers' rights, national security, media trials and sting operations.",
    overview:
      "This unit studies proprietary and public-law limits on media activity. It covers copyright and neighbouring rights in broadcasts and performances, national-security concerns, the effect of prejudicial publicity on fair trial, and the legality, ethics and evidentiary implications of sting operations.",
    objectives: [
      "Explain copyright ownership, licensing, exceptions and media use.",
      "Distinguish broadcasting reproduction rights and performers' rights.",
      "Balance national security with press freedom and public interest.",
      "Evaluate trial by media against fair-trial rights.",
      "Analyse the legality and ethics of sting operations.",
    ],
    topics: [
      "Copyright in literary, artistic, musical, film and sound-recording works",
      "Broadcast reproduction rights and performers' rights",
      "Fair dealing, reporting current events and licensing",
      "Security of the nation and restricted information",
      "Trial by media, presumption of innocence and postponement orders",
      "Sting operations, privacy, entrapment, authenticity and public interest",
    ],
    provisions: [
      "Copyright Act, 1957",
      "Copyright Rules, 2013",
      "Contempt of Courts Act, 1971",
      "Indian Evidence Act, 1872 and Bharatiya Sakshya Adhiniyam, 2023 transition",
    ],
  },
  {
    title: "Self-Regulation, Ethics and Contemporary Issues",
    shortDescription:
      "Media ethics, self-regulation and legal regulation, human rights and foreign investment in print media.",
    overview:
      "This unit examines how ethical standards, industry bodies and statutory regulation interact. It studies accuracy, fairness, independence, conflicts of interest, correction and accountability; media's relationship with human rights; and the policy and legal questions surrounding foreign investment in Indian print media.",
    objectives: [
      "Explain the foundations of responsible media ethics.",
      "Compare self-regulation, co-regulation and statutory regulation.",
      "Apply human-rights principles to reporting and editorial decisions.",
      "Assess accountability mechanisms for news and entertainment media.",
      "Explain the policy framework governing foreign investment in print media.",
    ],
    topics: [
      "Accuracy, fairness, independence and conflicts of interest",
      "Privacy, dignity, vulnerable persons and reporting trauma",
      "Self-regulatory and statutory accountability models",
      "Media, democracy and human rights",
      "Foreign direct investment in news and non-news print media",
      "Corrections, complaints and public accountability",
    ],
    provisions: [
      "Press Council Act, 1978 and Norms of Journalistic Conduct",
      "News Broadcasters and Digital Association self-regulatory framework",
      "Cable Television Networks Programme Code",
      "Consolidated FDI Policy and applicable government approvals",
    ],
  },
  {
    title: "Legislative Framework for Broadcasting and Cinema",
    shortDescription:
      "Evolution of broadcasting, airwaves and government control, Prasar Bharati, cinematograph regulation and cable television networks.",
    overview:
      "This unit traces the evolution of India's broadcast sector and the constitutional treatment of airwaves as a public resource. It focuses on the Prasar Bharati framework, film certification and exhibition under cinematograph law, and regulation of cable television networks, programmes and advertisements.",
    objectives: [
      "Trace the evolution of radio, television and public broadcasting in India.",
      "Explain the public-resource doctrine governing airwaves.",
      "Describe the structure and functions of Prasar Bharati.",
      "Analyse film certification and exhibition regulation.",
      "Apply cable-network registration, Programme Code and Advertising Code requirements.",
    ],
    topics: [
      "Evolution and liberalisation of the broadcast sector",
      "Airwaves as public property and licensing control",
      "Prasar Bharati's structure, objectives and functions",
      "Film certification, classification and appeals",
      "Cable-operator registration and transmission duties",
      "Programme Code, Advertising Code and enforcement",
    ],
    provisions: [
      "Prasar Bharati (Broadcasting Corporation of India) Act, 1990",
      "Cinematograph Act, 1952, as amended",
      "Cinematograph (Certification) Rules, 2024",
      "Cable Television Networks (Regulation) Act, 1995",
      "Cable Television Networks Rules, 1994",
    ],
  },
  {
    title: "Internet and New Media",
    shortDescription:
      "Evolution and regulation of internet media, information-technology law, telecommunications and social networks.",
    overview:
      "This unit examines the internet as a distinct, interactive and transnational medium. It studies intermediary liability, blocking, content governance, cyber offences, platform responsibility, social-network regulation and the transition from the Indian Telegraph Act framework to current telecommunications legislation.",
    objectives: [
      "Explain how internet media differs from print and broadcasting.",
      "Apply the Information Technology Act to online content and intermediaries.",
      "Analyse safe-harbour conditions, takedown and blocking powers.",
      "Explain social-media duties and user protections.",
      "Identify the current telecommunications framework and its historical development.",
    ],
    topics: [
      "Evolution and characteristics of internet media",
      "Online speech, jurisdiction and platform governance",
      "Intermediary safe harbour and due diligence",
      "Blocking, takedown, investigation and cyber offences",
      "Social networks, significant intermediaries and grievance mechanisms",
      "Telecommunications regulation: historical and current framework",
    ],
    provisions: [
      "Information Technology Act, 2000",
      "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended",
      "Telecommunications Act, 2023",
      "Historical role of the Indian Telegraph Act, 1885",
    ],
  },
  {
    title: "Media, Advertising and Law",
    shortDescription:
      "Advertising concepts and ethics, indecent representation, objectionable advertisements, magic remedies and consumer protection.",
    overview:
      "This unit examines commercial communication and the legal responsibilities of advertisers, agencies, publishers, broadcasters, endorsers and platforms. It covers advertising ethics, misleading claims, surrogate and prohibited advertising, indecent representation, drugs and magic remedies, and consumer-protection enforcement.",
    objectives: [
      "Define advertising and explain its commercial and social functions.",
      "Apply ethical standards to claims, endorsements and vulnerable audiences.",
      "Explain prohibitions concerning indecent representation and objectionable advertisements.",
      "Analyse restrictions on drugs and magic-remedy claims.",
      "Apply consumer-protection law to misleading advertisements and endorsers.",
    ],
    topics: [
      "Concept, forms and functions of advertising",
      "Advertising ethics, substantiation and disclosure",
      "Indecent representation and harmful stereotypes",
      "Drugs, cures and magic-remedy advertisements",
      "Misleading advertisements, endorsements and consumer rights",
      "Sectoral codes, digital advertising and platform responsibility",
    ],
    provisions: [
      "Consumer Protection Act, 2019",
      "Guidelines for Prevention of Misleading Advertisements and Endorsements, 2022",
      "Indecent Representation of Women (Prohibition) Act, 1986",
      "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
      "Cable Television Networks Advertising Code",
    ],
  },
];

const buildDetailedContent = (unit, index) => `
Unit ${index + 1}: ${unit.title}

Chapter scope

${unit.overview}

Principal topics

${unit.topics.map((topic, topicIndex) => `${topicIndex + 1}. ${topic}`).join("\n")}

Study approach

Read the governing constitutional provision, statute, rule, code or regulatory direction together with its purpose, scope, responsible authority, prohibited conduct, available defence and remedy. Distinguish enforceable law from ethical or self-regulatory standards and identify transitions from repealed or superseded legislation.

Examination method

Begin with the governing right or regulatory objective, state the applicable rule, identify competing interests, apply proportionality or the relevant statutory test, and support the conclusion with leading decisions and current legislation.
`.trim();

export const mediaLawChapters = units.map((unit, index) =>
  createChapterModel({
    id: `${MEDIA_LAW_COURSE_ID}-unit-${index + 1}-${unit.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")}`,
    courseId: MEDIA_LAW_COURSE_ID,
    title: unit.title,
    slug: `unit-${index + 1}-${unit.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")}`,
    shortDescription: unit.shortDescription,
    chapterOverview: unit.overview,
    learningObjectives: unit.objectives,
    detailedContent: buildDetailedContent(unit, index),
    keyPoints: unit.topics,
    statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
      id: `media-law-unit-${index + 1}-provision-${provisionIndex + 1}`,
      title: provision,
      provision,
      description: `Core legal reading for Media Law Unit ${index + 1}.`,
    })),
    importantCases: [],
    examFocus: unit.topics.join("; "),
    revisionNotes: unit.topics.join("; "),
    notes: buildDetailedContent(unit, index),
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

const recommendedBooks = [
  { title: "Facets of Media Law", author: "Madhavi Goradia Divan" },
  { title: "Media, Press and Telecommunication Law", author: "Madhavi Goradia Divan", publicationYear: "2007" },
  { title: "Cyber Crimes and Law", author: "Dr. A. Verma" },
  { title: "Media Law and Right to Information", author: "Dr. S.R. Myneni" },
];

export const mediaLawBooks = recommendedBooks.map((book, index) =>
  createCourseBookModel({
    id: `${MEDIA_LAW_COURSE_ID}-book-${index + 1}`,
    courseId: MEDIA_LAW_COURSE_ID,
    title: book.title,
    author: book.author,
    publicationYear: book.publicationYear || "",
    description: "Recommended reading for the Media Law course.",
    displayOrder: index + 1,
    recommended: true,
    published: true,
  }),
);
