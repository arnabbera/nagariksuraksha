import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const ENVIRONMENTAL_LAW_COURSE_ID =
  "environmental-law";

export const environmentalLawCourse = createCourseModel({
  id: ENVIRONMENTAL_LAW_COURSE_ID,
  title: "Environmental Law",
  slug: ENVIRONMENTAL_LAW_COURSE_ID,
  shortDescription:
    "Study Indian environmental law, constitutional protections, pollution-control legislation, biodiversity, wildlife, forests and the National Green Tribunal.",
  description:
    "A structured eight-unit course covering international environmental declarations, India's constitutional and policy framework, pollution-control statutes and institutions, environmental public-interest litigation, liability and enforcement, forest and wildlife protection, biological diversity and the National Green Tribunal.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 8,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Environmental Law Course | NagarikSuraksha",
    description:
      "Study environmental law through eight structured units covering constitutional protection, pollution-control laws, forests, wildlife, biodiversity and the National Green Tribunal.",
    focusKeyword: "environmental law course",
    secondaryKeywords: [
      "environmental law notes",
      "Environment Protection Act 1986",
      "Air Act 1981",
      "Water Act 1974",
      "National Green Tribunal Act 2010",
      "LLB environmental law course",
    ],
    canonicalUrl: "/courses/environmental-law",
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
    title: "International Environmental Policy and Sustainable Development",
    shortDescription:
      "Environmental consequences of development policies and the Stockholm, Rio, Johannesburg and Rio+20 declarations.",
    overview:
      "This unit introduces the adverse environmental impact of major development policies and traces the evolution of international environmental principles through the 1972 Stockholm Declaration, 1992 Rio Declaration, 2002 Johannesburg Declaration and the Rio+20 process.",
    detailedContent:
      "Adverse impact of industrial, developmental and resource-use policies on the natural environment; human environment and sustainable development; Stockholm Declaration, 1972; Rio Declaration, 1992; Agenda 21; Johannesburg Declaration, 2002; and Rio+20, including the development of precaution, prevention, polluter-pays, intergenerational equity, public participation and common but differentiated responsibilities.",
    keyPoints: [
      "Environment and development policy",
      "Stockholm Declaration, 1972",
      "Rio Declaration and Agenda 21, 1992",
      "Johannesburg Declaration, 2002",
      "Rio+20 and sustainable development",
    ],
    provisions: [
      "Stockholm Declaration on the Human Environment, 1972",
      "Rio Declaration on Environment and Development, 1992",
      "Johannesburg Declaration on Sustainable Development, 2002",
      "Rio+20 Outcome Document, 2012",
    ],
  },
  {
    title: "Environmental Policy and Constitutional Mandates in India",
    shortDescription:
      "India's environmental policy, constitutional duties and the judicial enlargement of Article 21.",
    overview:
      "This unit examines the constitutional foundations of environmental governance in India and the interpretation of the right to life under Article 21 as including the right to a clean and healthy environment.",
    detailedContent:
      "Development of environmental policy in India; constitutional distribution of legislative powers; Articles 14, 19 and 21; Directive Principles, including Article 48A; Fundamental Duty under Article 51A(g); judicial enlargement of Article 21; duties of the State and citizens; and the relationship between constitutional remedies and environmental protection.",
    keyPoints: [
      "Environmental policy in India",
      "Article 21 and environmental quality",
      "Article 48A",
      "Article 51A(g)",
      "Constitutional remedies",
    ],
    provisions: [
      "Constitution of India — Articles 14, 19 and 21",
      "Constitution of India — Article 48A",
      "Constitution of India — Article 51A(g)",
      "Constitution of India — Articles 32 and 226",
    ],
  },
  {
    title: "Environmental Protection and Pollution-Control Laws",
    shortDescription:
      "The Environment Protection Act, Air Act, Water Act, Pollution Control Boards and regulation of major environmental hazards.",
    overview:
      "This unit studies India's principal framework legislation for environmental protection, air pollution and water pollution, together with the administration and functions of the Central and State Pollution Control Boards.",
    detailedContent:
      "Environment (Protection) Act, 1986; Air (Prevention and Control of Pollution) Act, 1981; Water (Prevention and Control of Pollution) Act, 1974; powers of the Central Government; environmental standards and directions; consent mechanisms; administration, powers and functions of Pollution Control Boards; water, air and noise pollution; nuclear radiation; and protection of wildlife, land use, irrigation, forests and other non-human components of the environment.",
    keyPoints: [
      "Environment Protection Act, 1986",
      "Air Act, 1981",
      "Water Act, 1974",
      "Central and State Pollution Control Boards",
      "Human and ecological pollution concerns",
    ],
    provisions: [
      "Environment (Protection) Act, 1986",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Water (Prevention and Control of Pollution) Act, 1974",
      "Noise Pollution (Regulation and Control) Rules, 2000",
    ],
  },
  {
    title: "Judicial Protection, Public Interest Litigation and Environmental Principles",
    shortDescription:
      "The judiciary's role, expanded locus standi, environmental PIL and principles evolved by Indian courts.",
    overview:
      "This unit explains how constitutional courts expanded access to environmental justice through public-interest litigation and developed principles that now guide environmental decision-making and remedies.",
    detailedContent:
      "Role of the Supreme Court and High Courts in preventing and remedying environmental pollution; enlargement of locus standi; development and procedure of public-interest litigation; continuing mandamus; precautionary principle; polluter-pays principle; sustainable development; public-trust doctrine; intergenerational equity; absolute liability; environmental rule of law; expert decision-making; compensation and restoration.",
    keyPoints: [
      "Expanded locus standi",
      "Environmental public-interest litigation",
      "Precautionary and polluter-pays principles",
      "Public-trust doctrine",
      "Sustainable development and environmental remedies",
    ],
    provisions: [
      "Constitution of India — Articles 21, 32 and 226",
      "Environment (Protection) Act, 1986",
    ],
  },
  {
    title: "Environmental Liability, Sanctions and Enforcement Strategies",
    shortDescription:
      "Civil, criminal and statutory controls under environmental legislation and liability statutes.",
    overview:
      "This unit examines legal sanctions and enforcement strategies for controlling pollution, including regulatory directions, prosecution, compensation, insurance-based relief and specialised environmental adjudication.",
    detailedContent:
      "Legal sanctions and strategies under the Environment (Protection) Act, Air Act and Water Act; closure and prohibition directions; consent violations; offences by companies and government departments; prosecution and penalties; compensation and restoration; Public Liability Insurance Act, 1991; the historical National Environment Tribunal Act, 1995; transition to the National Green Tribunal framework; and coordination among regulators, courts and tribunals.",
    keyPoints: [
      "Administrative directions and consent enforcement",
      "Criminal and civil consequences",
      "Environmental compensation and restoration",
      "Public Liability Insurance Act, 1991",
      "Historical tribunal framework and transition to the NGT",
    ],
    provisions: [
      "Environment (Protection) Act, 1986",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Water (Prevention and Control of Pollution) Act, 1974",
      "Public Liability Insurance Act, 1991",
      "National Environment Tribunal Act, 1995",
    ],
  },
  {
    title: "Forests, Wildlife and Animal Protection",
    shortDescription:
      "The Indian Forest Act, Prevention of Cruelty to Animals Act and Wild Life Protection Act.",
    overview:
      "This unit introduces the statutory regimes governing forests, wildlife conservation and prevention of cruelty to animals, together with their institutions, prohibitions, permissions and enforcement mechanisms.",
    detailedContent:
      "Indian Forest Act, 1927; categories and regulation of forests and forest produce; Prevention of Cruelty to Animals Act, 1960; duties, prohibited conduct and institutional protection; Wild Life (Protection) Act, 1972; protected species, hunting restrictions, protected areas, trade controls, authorities, offences and penalties; and the relationship between conservation, community interests and animal welfare.",
    keyPoints: [
      "Indian Forest Act, 1927",
      "Forest administration and forest produce",
      "Prevention of Cruelty to Animals Act, 1960",
      "Wild Life Protection Act, 1972",
      "Protected areas, species and enforcement",
    ],
    provisions: [
      "Indian Forest Act, 1927",
      "Prevention of Cruelty to Animals Act, 1960",
      "Wild Life (Protection) Act, 1972",
    ],
  },
  {
    title: "Biological Diversity Act, 2002",
    shortDescription:
      "Conservation, sustainable use, access regulation and equitable benefit sharing under biodiversity law.",
    overview:
      "This unit studies India's legal framework for conserving biological diversity, ensuring sustainable use and regulating access to biological resources and associated knowledge.",
    detailedContent:
      "Objectives and scope of the Biological Diversity Act, 2002; conservation and sustainable use; fair and equitable benefit sharing; National Biodiversity Authority, State Biodiversity Boards and Biodiversity Management Committees; People's Biodiversity Registers; access to biological resources and associated knowledge; approvals and intimations; benefit-sharing mechanisms; biodiversity heritage sites; offences, enforcement and the relationship with intellectual-property applications.",
    keyPoints: [
      "Conservation and sustainable use",
      "Access and benefit sharing",
      "National and State biodiversity authorities",
      "Biodiversity Management Committees",
      "Traditional knowledge and biological resources",
    ],
    provisions: [
      "Biological Diversity Act, 2002",
      "Biological Diversity Rules, 2004",
    ],
  },
  {
    title: "National Green Tribunal Act, 2010",
    shortDescription:
      "Establishment, jurisdiction, procedure, relief, compensation and appellate functions of the National Green Tribunal.",
    overview:
      "This unit explains the constitution and specialised jurisdiction of the National Green Tribunal, the environmental disputes it may hear and the principles governing relief, compensation and restoration.",
    detailedContent:
      "Objects and scheme of the National Green Tribunal Act, 2010; establishment, composition and qualifications; territorial and subject-matter jurisdiction; original and appellate jurisdiction; limitation; procedure and powers; application of natural justice; relief, compensation and restitution; liability principles; scheduled enactments; execution and appeal; exclusion and interaction of jurisdiction; and application of sustainable development, precautionary principle and polluter-pays principle.",
    keyPoints: [
      "Composition and jurisdiction of the NGT",
      "Original and appellate proceedings",
      "Limitation and procedure",
      "Compensation and environmental restoration",
      "Statutory environmental principles",
    ],
    provisions: [
      "National Green Tribunal Act, 2010 — Sections 14–22",
      "National Green Tribunal Act, 2010 — Section 20",
      "National Green Tribunal Act, 2010 — Schedule I",
    ],
  },
];

export const environmentalLawChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${ENVIRONMENTAL_LAW_COURSE_ID}-unit-${index + 1}`,
      courseId: ENVIRONMENTAL_LAW_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: [
        `Explain the principal environmental-law rules covered in Unit ${index + 1}.`,
        "Identify and interpret the relevant constitutional, statutory and international materials.",
        "Apply environmental principles and enforcement mechanisms to legal problems.",
      ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core legal reading for Environmental Law Unit ${index + 1}.`,
      })),
      examFocus:
        "Revise the relevant provisions, institutional powers, environmental principles, remedies and leading judicial developments. Apply them to problem questions with clear statutory references.",
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

const recommendedBooks = [
  {
    title: "International Law and the Environment",
    author: "Patricia Birnie and Alan Boyle",
  },
  {
    title: "Environmental Law in India",
    author: "P. Leelakrishnan",
    publisher: "Butterworths",
  },
  {
    title: "International Environmental Law",
    author: "Elli Louka",
    publisher: "Cambridge University Press",
  },
  {
    title: "Environmental Law",
    author: "V.N. Paranjape",
  },
  {
    title: "Environmental Law",
    author: "P.S. Jaswal",
  },
];

export const environmentalLawBooks = recommendedBooks.map(
  (book, index) =>
    createCourseBookModel({
      id: `${ENVIRONMENTAL_LAW_COURSE_ID}-book-${index + 1}`,
      courseId: ENVIRONMENTAL_LAW_COURSE_ID,
      title: book.title,
      author: book.author,
      publisher: book.publisher || "",
      description:
        "Recommended reading for the Environmental Law course.",
      displayOrder: index + 1,
      recommended: true,
      published: true,
    }),
);
