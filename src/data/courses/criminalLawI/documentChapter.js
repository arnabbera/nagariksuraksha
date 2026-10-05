import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./documentOffences.json";
import study from "./documentStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const documentOffencesChapter = createChapterModel({
  id: `${courseId}-unit-21`,
  courseId,
  title: "CHAPTER XVIII  OF OFFENCES RELATING TO DOCUMENTS AND TO PROPERTY MARKS",
  slug: "unit-21-documents-and-property-marks",
  shortDescription: "Study IPC Sections 463-489E alongside BNS Sections 335-350 and 178-182, with an indexed PDF, provision-level mapping and practical revision problems.",
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
    id: `unit-21-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-18-documents-property-marks-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XVIII - Documents and Property Marks.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 20,
  displayOrder: 20,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
