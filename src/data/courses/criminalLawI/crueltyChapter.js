import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./crueltyOffences.json";
import study from "./crueltyStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const crueltyOffencesChapter = createChapterModel({
  id: `${courseId}-unit-24`,
  courseId,
  title: "CHAPTER XXA  OF CRUELTY BY HUSBAND OR RELATIVES OF HUSBAND",
  slug: "unit-24-cruelty-by-husband-or-relatives",
  shortDescription: "Study IPC Section 498A alongside BNS Sections 85 and 86, including both statutory branches of cruelty, with an indexed PDF, provision-level mapping and practical revision problems.",
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
    id: `unit-24-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-20a-cruelty-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XXA - Cruelty by Husband or Relatives of Husband.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 23,
  displayOrder: 23,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
