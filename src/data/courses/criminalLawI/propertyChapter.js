import { createChapterModel } from "../../../models/ChapterModel";
import rows from "./propertyOffences.json";
import study from "./propertyStudy.json";

const courseId = "criminal-law-i-transitioning-from-ipc-to-bns";
export const propertyOffencesChapter = createChapterModel({
  id: `${courseId}-unit-20`,
  courseId,
  title: "CHAPTER XVII  OF OFFENCES AGAINST PROPERTY",
  slug: "unit-20-offences-against-property",
  shortDescription: "Study all IPC Sections 378-462 alongside BNS Sections 303-334, with an indexed PDF, provision-level mapping and practical revision problems.",
  chapterOverview: study.overview,
  learningObjectives: study.objectives,
  detailedContent: [
    study.title, "Transition and application", study.transition,
    ...study.groups.flatMap((group) => [
      group.title, group.explanation,
      ...rows.filter((row) => row.ipc >= group.start && row.ipc <= group.end)
        .map((row) => `IPC ${row.ipc} - ${row.title}\nBNS ${row.bns}\n${row.note}`),
    ]),
    "Practice questions and model answers",
    ...study.practice.map((item, index) => `${index + 1}. ${item.question}\nAnswer: ${item.answer}`),
    "Official reading", ...study.sources.map((source) => `${source.title}\n${source.url}`),
  ].join("\n\n"),
  keyPoints: study.keyPoints,
  statutoryProvisions: study.sources.map((source, index) => ({
    id: `unit-20-provision-${index + 1}`, title: source.title,
    provision: source.title, description: source.url,
  })),
  examFocus: study.examFocus,
  revisionNotes: study.keyPoints.join("\n"),
  pdfUrl: "/documents/criminal-law-i/chapter-17-property-offences-ipc-bns.pdf",
  pdfFileName: "Criminal Law I - Chapter XVII - Offences Against Property.pdf",
  pdfContentType: "application/pdf",
  chapterNumber: 19,
  displayOrder: 19,
  quizRequired: false,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: true,
  status: "published",
  previewAvailable: false,
});
