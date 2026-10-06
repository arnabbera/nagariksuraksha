import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./marriageOffences.json";
import study from "./marriageStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const marriageOffencesChapter = createChapterModel({
  id: `${courseId}-unit-23`,
  courseId,
  title: "CHAPTER XX  OF OFFENCES RELATING TO MARRIAGE",
  slug: "unit-23-offences-relating-to-marriage",
  shortDescription: "Read the supplied IPC Sections 493-498 in full, including the bigamy exceptions and historical adultery text, with BNS mappings, explanations, revision problems and an indexed PDF.",
  chapterOverview: study.overview,
  learningObjectives: study.objectives,
  detailedContent: [
    study.title, "Transition and application", study.transition,
    ...study.groups.flatMap((group) => [
      group.title, group.explanation,
      ...rows.filter((row) => group.sections.includes(row.ipc))
        .map((row) => `IPC ${row.ipc} - ${row.title}\nLegal status: ${row.statusNote}\nSupplied IPC text\n${row.statutoryText}\nBNS mapping: ${row.bns}\nStudy explanation\n${row.note}`),
    ]),
    "Practice questions and model answers",
    ...study.practice.map((item, index) => `${index + 1}. ${item.question}\nAnswer: ${item.answer}`),
    "Official reading", ...study.sources.map((source) => `${source.title}\n${source.url}`),
  ].join("\n\n"),
  keyPoints: study.keyPoints,
  statutoryProvisions: study.sources.map((source, index) => ({
    id: `unit-23-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-20-marriage-offences-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XX - Offences Relating to Marriage.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 22,
  displayOrder: 22,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
