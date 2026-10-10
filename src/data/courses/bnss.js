import syllabus from "./bnssSyllabus.json";
import preliminary from "./bnssChapter1.json";
import { createCourseModel } from "../../models/CourseModel";
import { createChapterModel } from "../../models/ChapterModel";

export const BNSS_COURSE_ID = "bharatiya-nagarik-suraksha-sanhita-2023-bnss";

export const bnssCourse = createCourseModel({
  id: BNSS_COURSE_ID,
  title: syllabus.title,
  slug: BNSS_COURSE_ID,
  shortDescription:
    "A chapter-wise course structure for criminal procedure under BNSS, covering criminal courts, arrest, investigation, trials, judgments, appeals, bail and the two schedules.",
  description: [
    "Study the Bharatiya Nagarik Suraksha Sanhita, 2023 through 39 chapters in the statutory sequence. The course begins with preliminary provisions and criminal courts, then follows arrest, appearance and search processes, investigation, cognizance, charges and the different forms of trial.",
    "Later chapters cover evidence, general trial procedure, accused persons of unsound mind, administration of justice, judgment, death-sentence confirmation, appeals, revision, transfer, execution of sentences, bail, disposal of property, procedural irregularities, limitation and miscellaneous provisions. The First Schedule and Second Schedule are included as supplementary syllabus references.",
    "This draft contains the course syllabus, chapter outlines and the Chapter I statutory lesson covering sections 1–5. Further lessons, case-law study notes, lesson PDFs, quizzes and certification assessments are to be developed before the course is released for enrollment.",
  ].join("\n\n"),
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: false,
  featured: false,
  order: 12,
  totalChapters: syllabus.chapters.length,
  status: "draft",
  seo: {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) Course",
    description:
      "Explore the BNSS criminal procedure syllabus in 39 chapters, covering courts, arrest, investigation, trials, appeals, bail and statutory schedules.",
    focusKeyword: "BNSS criminal procedure course",
    secondaryKeywords: ["Bharatiya Nagarik Suraksha Sanhita 2023", "criminal procedure syllabus", "BNSS chapters"],
    canonicalUrl: `/courses/${BNSS_COURSE_ID}`,
    robots: { index: false, follow: false },
    sitemap: { include: false },
  },
});

const sectionRange = ({ sectionStart, sectionEnd }) =>
  `BNSS Sections ${sectionStart}–${sectionEnd}`;

export const bnssChapters = syllabus.chapters.map((chapter) => {
  const range = sectionRange(chapter);
  const topics = [...new Set(chapter.topics.map(({ title }) => title))];
  const outline = [];
  const seenTopics = new Set();
  let previousGroup = "";
  for (const { title, group } of chapter.topics) {
    if (seenTopics.has(title)) continue;
    seenTopics.add(title);
    if (group && group !== previousGroup) outline.push(`\n${group}\n`);
    previousGroup = group;
    outline.push(`• ${title}`);
  }
  const schedules = chapter.number === 39
    ? `\n\nSupplementary Schedules\n\n${syllabus.schedules.map(({ title, description }) => `${title}: ${description}`).join("\n")}`
    : "";

  return createChapterModel({
    id: `${BNSS_COURSE_ID}-chapter-${chapter.number}`,
    courseId: BNSS_COURSE_ID,
    title: `CHAPTER ${chapter.roman} — ${chapter.title}`,
    slug: `bnss-chapter-${chapter.number}-${chapter.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    shortDescription: `${range}. ${topics.slice(0, 3).join(" ")}`,
    chapterOverview:
      `Chapter outline for ${chapter.title.toLowerCase()}, covering ${range}. Use the topic list to plan the chapter's detailed study.`,
    learningObjectives: [
      `Locate this chapter within the criminal procedure framework and identify ${range}.`,
      "Organise the syllabus topics by the relevant authority, procedural stage, safeguards and remedies.",
      "Read the enacted provisions before applying the procedure to a factual problem.",
    ],
    detailedContent: [
      `CHAPTER ${chapter.roman} — ${chapter.title}`,
      "Chapter Outline",
      `${range}. This is a syllabus outline; detailed lesson notes and assessments have not yet been added.`,
      "Syllabus Topics from the Supplied Arrangement",
      outline.join("\n"),
      "Statutory Reading",
      `Read ${range} in the enacted Bharatiya Nagarik Suraksha Sanhita, 2023. The supplied arrangement contains draft clause labels; those labels are not an enacted section crosswalk. The statutory chapter label and section range above follow the enacted Act.`,
      syllabus.officialSource,
    ].join("\n\n") + schedules,
    keyPoints: [range, "Course structure prepared; detailed teaching materials remain to be developed."],
    statutoryProvisions: [{
      id: `bnss-${chapter.number}-statute`,
      title: range,
      provision: `Bharatiya Nagarik Suraksha Sanhita, 2023 — Chapter ${chapter.roman}, Sections ${chapter.sectionStart}–${chapter.sectionEnd}`,
      description: "Enacted statutory reading for this chapter.",
    }],
    revisionNotes: `Study outline: ${topics.join(" ")}`,
    chapterNumber: chapter.number,
    displayOrder: chapter.number,
    quizRequired: false,
    published: false,
    previewAvailable: false,
    status: "draft",
    ...(chapter.number === 1 ? {
      shortDescription: preliminary.shortDescription,
      chapterOverview: preliminary.chapterOverview,
      learningObjectives: preliminary.learningObjectives,
      detailedContent: [
        "CHAPTER I — PRELIMINARY",
        "Bharatiya Nagarik Suraksha Sanhita, 2023 — Sections 1–5",
        ...preliminary.sections.map(({ number, title, text }) => `${number}. ${title}\n\n${text}`),
        `Editorial Note\n\n${preliminary.editorialNote}`,
        `Official Statutory Source\n\n${preliminary.source}`,
      ].join("\n\n"),
      keyPoints: preliminary.keyPoints,
      statutoryProvisions: preliminary.sections.map(({ number, title }) => ({
        id: `bnss-section-${number}`,
        title: `Section ${number} — ${title}`,
        provision: `Bharatiya Nagarik Suraksha Sanhita, 2023 — Section ${number}`,
        description: title,
      })),
      revisionNotes: preliminary.revisionNotes,
    } : {}),
  });
});
