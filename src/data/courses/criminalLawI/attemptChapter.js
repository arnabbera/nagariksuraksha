import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./attemptOffences.json";
import study from "./attemptStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const attemptOffencesChapter = createChapterModel({
  id: `${courseId}-unit-27`,
  courseId,
  title: "CHAPTER XXIII  OF ATTEMPTS TO COMMIT OFFENCES",
  slug: "unit-27-attempts-to-commit-offences",
  shortDescription: "Study IPC 511 and BNS 62 with both statutory illustrations, preparation-versus-attempt analysis, punishment calculations, revision questions and an indexed PDF.",
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
    id: `unit-27-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-23-attempts-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XXIII - Attempts to Commit Offences.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 26,
  displayOrder: 26,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
