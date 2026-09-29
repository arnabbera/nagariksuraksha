import { createCourseBookModel } from "../../models/CourseBookModel";

const COURSE_ID = "law-of-torts-mv-and-cp-laws";

const recommendedBooks = [
  { author: "S. S. Chatterji", title: "D. D. Basu's Law of Torts" },
  { author: "R. K. Bangia", title: "Law of Torts" },
  { author: "Ratanlal and Dhirajlal", title: "Law of Torts" },
  {
    author: "Avtar Singh",
    title: "Introduction to the Law of Torts and Consumer Protection",
  },
  { author: "Winfield", title: "Cases on the Law of Torts" },
  { author: "Salmond", title: "A Summary of Law of Torts" },
];

export const lawOfTortsBooks = recommendedBooks.map((book, index) =>
  createCourseBookModel({
    id: `${COURSE_ID}-book-${index + 1}`,
    courseId: COURSE_ID,
    ...book,
    description: "Recommended reading for Law of Torts, MV and CP Laws.",
    displayOrder: index + 1,
    recommended: true,
    published: true,
  }),
);
