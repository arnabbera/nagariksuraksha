import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./serviceOffences.json";
import study from "./serviceStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const serviceOffencesChapter = createChapterModel({
  id: `${courseId}-unit-22`,
  courseId,
  title: "CHAPTER XIX  OF THE CRIMINAL BREACH OF CONTRACTS OF SERVICE",
  slug: "unit-22-criminal-breach-contracts-service",
  shortDescription: "Study IPC Sections 490-492 and BNS Section 357, including the two historical repeals, with an indexed PDF, provision-level mapping and practical revision problems.",
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
    id: `unit-22-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-19-service-contracts-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XIX - Criminal Breach of Contracts of Service.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 21,
  displayOrder: 21,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
