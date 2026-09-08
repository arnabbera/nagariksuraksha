import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID =
  "human-rights-law-and-practice";

export const humanRightsLawAndPracticeCourse = createCourseModel({
  id: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
  title: "Human Rights Law and Practice",
  slug: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
  shortDescription:
    "Study the foundations, international framework, constitutional enforcement and practical protection of human rights in India.",
  description:
    "A structured eight-unit course covering human-rights theories, the International Bill of Human Rights, protection against inhuman wrongs, Indian constitutional remedies, the rights of women, children, persons with disabilities and indigenous peoples, and the Protection of Human Rights Act, 1993.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 9,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Human Rights Law and Practice Course | NagarikSuraksha",
    description:
      "Study Human Rights Law and Practice through eight structured units covering international law, constitutional remedies and the protection of vulnerable groups.",
    focusKeyword: "human rights law course",
    secondaryKeywords: [
      "human rights law notes",
      "International Bill of Human Rights",
      "Protection of Human Rights Act 1993",
      "Indian constitutional human rights",
      "LLB human rights law course",
    ],
    canonicalUrl: "/courses/human-rights-law-and-practice",
    robots: { index: false, follow: false },
    sitemap: { include: false },
  },
});

const units = [
  {
    title: "Theoretical Foundations of Human Rights Law",
    shortDescription:
      "Meaning, historical development and the principal philosophical theories underlying human rights.",
    overview:
      "This unit introduces the definition, nature and characteristics of human rights and traces their international and Indian development through ancient, medieval, colonial and post-Independence perspectives. It examines natural-rights theory, equality of respect and concern, human dignity, John Rawls's theory of justice and Amartya Sen's capability-oriented understanding of rights and freedom.",
    objectives: [
      "Define human rights and explain their universality, indivisibility and interdependence.",
      "Trace the historical development of human-rights ideas internationally and in India.",
      "Compare natural-rights, equality, dignity, justice and capability-based theories.",
      "Apply the theories of John Rawls and Amartya Sen to contemporary human-rights questions.",
    ],
    topics: [
      "Definition, nature and classification of human rights",
      "International development of human-rights thought",
      "Ancient and medieval Indian perspectives",
      "British rule and the freedom movement",
      "Post-Independence constitutional development",
      "Natural-rights theories",
      "Equality of respect and concern",
      "Human dignity as a foundation of rights",
      "John Rawls's theory of justice",
      "Amartya Sen's theory of human rights and capabilities",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948 — Articles 1 and 2",
      "Constitution of India — Preamble and Part III",
      "Vienna Declaration and Programme of Action, 1993",
    ],
    examFocus:
      "Prepare the meaning and characteristics of human rights, their historical development in India, and a comparative account of natural rights, dignity, equality, Rawlsian justice and Sen's capability approach.",
  },
  {
    title: "International Bill of Human Rights",
    shortDescription:
      "The UDHR, ICCPR and ICESCR, generations of rights, treaty reservations and Indian practice.",
    overview:
      "This unit studies the formulation and components of the International Bill of Human Rights: the 1948 Universal Declaration, the 1966 International Covenant on Civil and Political Rights and the 1966 International Covenant on Economic, Social and Cultural Rights. It considers the relationship between the two sets of rights, the three generations of human rights, reservations to human-rights treaties and India's treaty practice.",
    objectives: [
      "Explain the formulation and legal significance of the International Bill of Human Rights.",
      "Identify and compare the rights protected by the UDHR, ICCPR and ICESCR.",
      "Analyse the relationship between civil-political and economic-social-cultural rights.",
      "Evaluate generations of rights and the law governing treaty reservations.",
    ],
    topics: [
      "Formulation of the International Bill of Human Rights",
      "Universal Declaration of Human Rights, 1948",
      "ICCPR, 1966 and its Optional Protocols",
      "ICESCR, 1966 and progressive realisation",
      "Relationship between ICCPR and ICESCR rights",
      "First generation: civil and political rights",
      "Second generation: economic, social and cultural rights",
      "Third generation: solidarity and collective rights",
      "Reservations to human-rights treaties",
      "India's ratification, declarations and reservations practice",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948",
      "International Covenant on Civil and Political Rights, 1966",
      "International Covenant on Economic, Social and Cultural Rights, 1966",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 19–23",
    ],
    examFocus:
      "Compare the UDHR, ICCPR and ICESCR; explain indivisibility and progressive realisation; classify the generations of rights; and discuss the validity and effect of reservations with reference to Indian practice.",
  },
  {
    title: "Protection Against Inhuman Wrongs",
    shortDescription:
      "International protection against genocide, apartheid, torture, racial discrimination, slavery and capital punishment.",
    overview:
      "This unit examines grave wrongs that deny equality, dignity and physical integrity. It covers genocide, apartheid, torture and other cruel, inhuman or degrading treatment or punishment, racial discrimination, slavery and the slave trade, and the international movement toward abolition of the death penalty.",
    objectives: [
      "Identify the legal elements of genocide and apartheid.",
      "Explain the absolute prohibition of torture and related treatment.",
      "Analyse international duties concerning racial discrimination, slavery and the slave trade.",
      "Evaluate international standards and Indian law concerning the death penalty.",
    ],
    topics: [
      "Genocide: protected groups, prohibited acts and specific intent",
      "Apartheid and institutionalised racial domination",
      "Torture and cruel, inhuman or degrading treatment",
      "Non-refoulement and prevention duties",
      "Elimination of racial discrimination",
      "Slavery, servitude, forced labour and the slave trade",
      "Trafficking and contemporary forms of exploitation",
      "Abolition of the death penalty",
      "International fair-trial and sentencing safeguards",
      "Indian constitutional position on capital punishment",
    ],
    provisions: [
      "Genocide Convention, 1948",
      "International Convention on the Elimination of All Forms of Racial Discrimination, 1965",
      "International Convention on the Suppression and Punishment of the Crime of Apartheid, 1973",
      "Convention against Torture, 1984",
      "Slavery Convention, 1926 and Supplementary Convention, 1956",
      "ICCPR — Articles 6, 7 and 8",
    ],
    examFocus:
      "Distinguish genocide, apartheid, torture, racial discrimination, slavery and trafficking by their legal ingredients. Discuss the abolitionist framework and India's rarest-of-rare constitutional doctrine on capital punishment.",
  },
  {
    title: "Human Rights in Indian Constitutional Law",
    shortDescription:
      "The constitutional status, judicial cognizability and enforcement of internationally recognised human rights in India.",
    overview:
      "This unit compares rights recognised by the ICCPR and ICESCR with Fundamental Rights, Directive Principles and other provisions of the Constitution of India. It considers which rights are judicially enforceable or judicially cognizable and examines their enforcement by High Courts and the Supreme Court through constitutional remedies, public-interest litigation and judicial interpretation.",
    objectives: [
      "Map principal ICCPR and ICESCR rights to the Constitution of India.",
      "Distinguish enforceable Fundamental Rights from judicially cognizable Directive Principles.",
      "Explain the domestic use of international human-rights instruments.",
      "Apply Articles 32 and 226 and public-law remedies to human-rights violations.",
    ],
    topics: [
      "ICCPR rights and Part III of the Constitution",
      "ICESCR rights and the Directive Principles",
      "Preamble, Fundamental Rights and Fundamental Duties",
      "Judicial enforceability and judicial cognizability",
      "Enlargement of Article 21",
      "Equality and non-discrimination under Articles 14–18",
      "Freedoms and permissible restrictions under Article 19",
      "Constitutional remedies under Articles 32 and 226",
      "Public-interest litigation and epistolary jurisdiction",
      "Compensation and continuing mandamus",
      "Use of international law by Indian courts",
    ],
    provisions: [
      "Constitution of India — Preamble",
      "Constitution of India — Articles 12–35",
      "Constitution of India — Articles 36–51 and 51A",
      "Constitution of India — Articles 32, 136, 141, 142 and 226",
      "Protection of Human Rights Act, 1993",
    ],
    examFocus:
      "Prepare the relationship between the Covenants and the Constitution, enforceable and cognizable rights, Article 21 expansion, writ jurisdiction, PIL, compensation and the judicial use of international norms.",
  },
  {
    title: "Protection of Women and Children",
    shortDescription:
      "International and Indian protection of women and children, including equality, workplace safety and child rights.",
    overview:
      "This unit applies gender-neutral human-rights guarantees from the perspective of women and also studies gender-specific protections. It covers elimination of discrimination against women, prevention and redress of sexual harassment at the workplace, and the international and Indian frameworks protecting children from discrimination, violence, exploitation, abuse and neglect.",
    objectives: [
      "Explain substantive equality and non-discrimination from a gender perspective.",
      "Analyse CEDAW and India's constitutional and statutory obligations.",
      "Explain prevention and redress under workplace sexual-harassment law.",
      "Apply the CRC and Indian child-protection laws to rights-based problems.",
    ],
    topics: [
      "Gender-neutral rights in women's lived experience",
      "Formal equality, substantive equality and intersectionality",
      "CEDAW and elimination of discrimination against women",
      "Constitutional protection under Articles 14, 15, 16 and 21",
      "Gender-specific protective measures",
      "Sexual harassment at the workplace",
      "Convention on the Rights of the Child",
      "Best interests, participation, survival and development",
      "Protection from child labour, trafficking and sexual offences",
      "Juvenile justice, care and rehabilitation",
      "Education, health, identity and family environment",
    ],
    provisions: [
      "Convention on the Elimination of All Forms of Discrimination against Women, 1979",
      "Convention on the Rights of the Child, 1989",
      "Constitution of India — Articles 14–16, 21, 21A, 23, 24, 39 and 42",
      "Sexual Harassment of Women at Workplace Act, 2013",
      "Protection of Children from Sexual Offences Act, 2012",
      "Juvenile Justice (Care and Protection of Children) Act, 2015",
      "Right of Children to Free and Compulsory Education Act, 2009",
    ],
    examFocus:
      "Discuss substantive equality, CEDAW, constitutional protection, workplace sexual-harassment institutions and remedies, the four CRC principles, and India's principal child-protection statutes.",
  },
  {
    title: "Protection of Persons with Disabilities",
    shortDescription:
      "Changing approaches to disability, the UNCRPD and the rights of persons with disabilities in India.",
    overview:
      "This unit examines the magnitude and lived experience of disability from a human-rights perspective. It compares religious, charitable, medical, social-relations and human-rights approaches, studies the United Nations Convention on the Rights of Persons with Disabilities, and analyses constitutional and statutory rights in India.",
    objectives: [
      "Explain disability as a human-rights and equality issue.",
      "Compare religious, charitable, medical, social and human-rights models.",
      "Analyse the purpose and key principles of the UNCRPD.",
      "Apply Indian disability law concerning equality, accessibility, education, employment and legal capacity.",
    ],
    topics: [
      "Magnitude and diversity of disability",
      "Religious and charitable approaches",
      "Medical or individual-deficit model",
      "Social-relations and barrier-based approaches",
      "Human-rights model of disability",
      "UNCRPD principles and general obligations",
      "Equality, non-discrimination and reasonable accommodation",
      "Accessibility and universal design",
      "Legal capacity and supported decision-making",
      "Inclusive education, health, work and community living",
      "Rights of persons with disabilities in India",
    ],
    provisions: [
      "Convention on the Rights of Persons with Disabilities, 2006",
      "Constitution of India — Articles 14, 15, 16 and 21",
      "Rights of Persons with Disabilities Act, 2016",
      "Mental Healthcare Act, 2017",
      "Rehabilitation Council of India Act, 1992",
      "National Trust Act, 1999",
    ],
    examFocus:
      "Compare the principal disability models, explain the UNCRPD paradigm shift, and prepare equality, reasonable accommodation, accessibility, legal capacity, education and employment under the 2016 Act.",
  },
  {
    title: "Protection of Indigenous Peoples",
    shortDescription:
      "International development, self-determination and constitutional protection under India's Fifth and Sixth Schedules.",
    overview:
      "This unit studies discrimination against indigenous peoples and the development of their rights at the international level. It analyses self-determination and its substantive contents, including culture, land, resources, participation and development, before examining protection of Scheduled Tribes and tribal areas under the Constitution of India, especially the Fifth and Sixth Schedules.",
    objectives: [
      "Explain historical and contemporary discrimination against indigenous peoples.",
      "Trace the international development of indigenous rights.",
      "Analyse self-determination and its relationship with land, culture and participation.",
      "Compare the Fifth and Sixth Schedule systems under the Constitution of India.",
    ],
    topics: [
      "Discrimination, dispossession and cultural assimilation",
      "ILO standards concerning indigenous and tribal peoples",
      "United Nations Declaration on the Rights of Indigenous Peoples",
      "Self-determination and internal autonomy",
      "Culture, language, identity and traditional institutions",
      "Land, territories and natural resources",
      "Participation, consultation and free, prior and informed consent",
      "Scheduled Tribes under the Constitution of India",
      "Fifth Schedule and Tribes Advisory Councils",
      "Sixth Schedule and Autonomous District Councils",
      "Forest rights, self-governance and protection from displacement",
    ],
    provisions: [
      "United Nations Declaration on the Rights of Indigenous Peoples, 2007",
      "ILO Indigenous and Tribal Populations Convention, 1957 (No. 107)",
      "Constitution of India — Articles 244, 275, 330, 332, 338A and 342",
      "Constitution of India — Fifth and Sixth Schedules",
      "Panchayats (Extension to Scheduled Areas) Act, 1996",
      "Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006",
    ],
    examFocus:
      "Prepare international indigenous-rights development, the components of self-determination, land and participation rights, and a clear comparison of the Fifth and Sixth Schedule constitutional frameworks.",
  },
  {
    title: "Protection of Human Rights Act, 1993",
    shortDescription:
      "The structure, powers and functions of Human Rights Commissions and Human Rights Courts in India.",
    overview:
      "This unit studies the Protection of Human Rights Act, 1993 and its institutional framework. It examines the constitution, jurisdiction, functions, inquiry powers and practical role of the National and State Human Rights Commissions, the statutory treatment of armed-forces complaints, reporting and follow-up, and the establishment and operation of Human Rights Courts.",
    objectives: [
      "Explain the scope and key definitions of the Protection of Human Rights Act, 1993.",
      "Describe the composition and appointment framework of the NHRC and State Commissions.",
      "Analyse their inquiry powers, functions, limitations and recommendations.",
      "Evaluate the statutory role and practical functioning of Human Rights Courts.",
    ],
    topics: [
      "Purpose, scope and definition of human rights",
      "National Human Rights Commission: composition and appointments",
      "State Human Rights Commissions",
      "Functions of the Commissions",
      "Complaint, inquiry and investigation procedure",
      "Civil-court powers and use of investigative agencies",
      "Intervention in court proceedings and visits to institutions",
      "Recommendations, reports and follow-up",
      "Armed-forces complaints",
      "Jurisdictional and limitation constraints",
      "Human Rights Courts and Special Public Prosecutors",
      "Role, achievements and institutional challenges",
    ],
    provisions: [
      "Protection of Human Rights Act, 1993 — Sections 2–16",
      "Protection of Human Rights Act, 1993 — Sections 17–20",
      "Protection of Human Rights Act, 1993 — Sections 21–29",
      "Protection of Human Rights Act, 1993 — Sections 30 and 31",
      "Protection of Human Rights Act, 1993 — Sections 36 and 37",
      "Protection of Human Rights (Amendment) Act, 2019",
    ],
    examFocus:
      "Prepare the structure, appointment, jurisdiction, functions, inquiry powers, recommendations and limitations of the NHRC and State Commissions, and explain Human Rights Courts under Sections 30 and 31.",
  },
];

const buildDetailedContent = (unit, index) => `
Unit ${index + 1}: ${unit.title}

Chapter scope

${unit.overview}

Principal topics

${unit.topics.map((topic, topicIndex) => `${topicIndex + 1}. ${topic}`).join("\n")}

Study approach

Read the relevant international instrument, constitutional provision or statute together with its purpose, scope, protected right, duty-bearing authority, enforcement mechanism and available remedy. Distinguish binding treaty obligations from declarations and other soft-law standards. In Indian-law answers, connect international norms with the Constitution, legislation and judicial remedies without assuming that every treaty provision is automatically enforceable as domestic law.

Examination method

Begin with the governing concept or instrument, state the applicable legal rule, identify the responsible institution, explain the nature and limitation of the right, and apply the rule to the facts. Support conclusions with constitutional provisions, statutory sections and leading judicial principles wherever relevant.
  `.trim();

export const humanRightsLawAndPracticeChapters = units.map((unit, index) =>
  createChapterModel({
    id: `${HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID}-unit-${index + 1}`,
    courseId: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
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
      id: `human-rights-unit-${index + 1}-provision-${provisionIndex + 1}`,
      title: provision,
      provision,
      description: `Core legal reading for Human Rights Law and Practice Unit ${index + 1}.`,
    })),
    importantCases: [],
    examFocus: unit.examFocus,
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
  {
    title: "Human Rights Law and Practice",
    author: "Jatindra Kumar Das",
    publisher: "PHI Learning",
    publicationYear: "2019",
  },
  {
    title: "Human Rights in Constitutional Law",
    author: "D.D. Basu",
  },
  {
    title: "Human Rights and the Law",
    author: "Nagendra Singh",
  },
  {
    title: "Human Rights and Inhuman Wrongs",
    author: "V.R. Krishna Iyer",
  },
  {
    title: "Human Rights in India",
    author: "R.C. Hingorani",
  },
  {
    title: "Human Rights and the Law",
    author: "Paras Diwan",
  },
  {
    title: "Human Rights in a Posthuman World",
    author: "Upendra Baxi",
  },
  {
    title: "The Future of Human Rights",
    author: "Upendra Baxi",
  },
];

export const humanRightsLawAndPracticeBooks = recommendedBooks.map(
  (book, index) =>
    createCourseBookModel({
      id: `${HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID}-book-${index + 1}`,
      courseId: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
      title: book.title,
      author: book.author,
      publisher: book.publisher || "",
      publicationYear: book.publicationYear || "",
      description:
        "Recommended reading for the Human Rights Law and Practice course.",
      displayOrder: index + 1,
      recommended: true,
      published: true,
    }),
);
