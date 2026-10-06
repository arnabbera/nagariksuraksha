import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./intimidationOffences.json";
import study from "./intimidationStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const intimidationOffencesChapter = createChapterModel({
  id: `${courseId}-unit-26`,
  courseId,
  title: "CHAPTER XXII  OF CRIMINAL INTIMIDATION, INSULT AND ANNOYANCE",
  slug: "unit-26-criminal-intimidation-insult-annoyance",
  shortDescription: "Study IPC Sections 503-510 with BNS mappings, historical Chhattisgarh amendments, practical revision problems and an indexed PDF.",
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
    id: `unit-26-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-22-intimidation-insult-annoyance-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XXII - Criminal Intimidation, Insult and Annoyance.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 25,
  displayOrder: 25,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
