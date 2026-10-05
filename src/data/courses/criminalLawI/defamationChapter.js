import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./defamationOffences.json";
import study from "./defamationStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const defamationOffencesChapter = createChapterModel({
  id: `${courseId}-unit-25`,
  courseId,
  title: "CHAPTER XXI  OF DEFAMATION",
  slug: "unit-25-defamation",
  shortDescription: "Study IPC Sections 499-502 alongside BNS Section 356, including all ten exceptions, with an indexed PDF, provision-level mapping and practical revision problems.",
  chapterOverview: study.overview,
  learningObjectives: study.objectives,
  detailedContent: [
    study.title, "Transition and application", study.transition,
    ...study.groups.flatMap((group) => [
      group.title, group.explanation,
      ...rows.filter((row) => group.sections.includes(row.ipc))
        .map((row) => `IPC ${row.ipc} - ${row.title}\nBNS ${row.bns}\n${row.note}`),
    ]),
    "Practice questions and model answers",
    ...study.practice.map((item, index) => `${index + 1}. ${item.question}\nAnswer: ${item.answer}`),
    "Official reading", ...study.sources.map((source) => `${source.title}\n${source.url}`),
  ].join("\n\n"),
  keyPoints: study.keyPoints,
  statutoryProvisions: study.sources.map((source, index) => ({
    id: `unit-25-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-21-defamation-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XXI - Defamation.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 24,
  displayOrder: 24,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
