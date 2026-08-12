import mockTest1 from "./mockTest1";
import mockTest2 from "./mockTest2";
import mockTest3 from "./mockTest3";

// =========================================================
// NORMALIZE QUESTION TEXT
// =========================================================

const normalizeQuestion = (
  text = "",
) =>
  String(text)
    .toLowerCase()
    .replace(
      /[^a-z0-9\s]/g,
      " ",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim();

// =========================================================
// COLLECT ALL QUESTIONS
// =========================================================

const tests = [
  {
    name:
      "Mock Test 1",

    questions:
      mockTest1.questions,
  },

  {
    name:
      "Mock Test 2",

    questions:
      mockTest2.questions,
  },

  {
    name:
      "Mock Test 3",

    questions:
      mockTest3.questions,
  },
];

// =========================================================
// VALIDATE QUESTION COUNTS
// =========================================================

export const validateQuestionCounts =
  () => {
    const errors = [];

    tests.forEach(
      (test) => {
        if (
          !Array.isArray(
            test.questions,
          )
        ) {
          errors.push(
            `${test.name}: questions is not an array.`,
          );

          return;
        }

        if (
          test.questions.length !==
          20
        ) {
          errors.push(
            `${test.name}: expected 20 questions, found ${test.questions.length}.`,
          );
        }
      },
    );

    return errors;
  };

// =========================================================
// VALIDATE UNIQUE IDS
// =========================================================

export const validateQuestionIds =
  () => {
    const errors = [];

    const seenIds =
      new Map();

    tests.forEach(
      (test) => {
        test.questions.forEach(
          (
            question,
            index,
          ) => {
            const id =
              question?.id;

            if (!id) {
              errors.push(
                `${test.name}: question ${index + 1} has no ID.`,
              );

              return;
            }

            if (
              seenIds.has(
                id,
              )
            ) {
              errors.push(
                `Duplicate question ID "${id}" found in ${seenIds.get(
                  id,
                )} and ${test.name}.`,
              );
            } else {
              seenIds.set(
                id,
                test.name,
              );
            }
          },
        );
      },
    );

    return errors;
  };

// =========================================================
// VALIDATE EXACT DUPLICATE QUESTIONS
// =========================================================

export const validateDuplicateQuestions =
  () => {
    const errors = [];

    const seenQuestions =
      new Map();

    tests.forEach(
      (test) => {
        test.questions.forEach(
          (
            question,
            index,
          ) => {
            const normalized =
              normalizeQuestion(
                question
                  ?.question,
              );

            if (!normalized) {
              errors.push(
                `${test.name}: question ${index + 1} has empty question text.`,
              );

              return;
            }

            if (
              seenQuestions.has(
                normalized,
              )
            ) {
              const previous =
                seenQuestions.get(
                  normalized,
                );

              errors.push(
                `Duplicate question text found between ${previous.testName} (${previous.questionId}) and ${test.name} (${question.id}).`,
              );
            } else {
              seenQuestions.set(
                normalized,
                {
                  testName:
                    test.name,

                  questionId:
                    question.id,
                },
              );
            }
          },
        );
      },
    );

    return errors;
  };

// =========================================================
// VALIDATE OPTION STRUCTURE
// =========================================================

export const validateOptions =
  () => {
    const errors = [];

    tests.forEach(
      (test) => {
        test.questions.forEach(
          (
            question,
            index,
          ) => {
            const options =
              Array.isArray(
                question.options,
              )
                ? question.options
                : [];

            if (
              options.length <
              2
            ) {
              errors.push(
                `${test.name}: ${question.id || `question ${index + 1}`} has fewer than 2 options.`,
              );

              return;
            }

            const optionIds =
              options.map(
                (option) =>
                  option.id,
              );

            const uniqueOptionIds =
              new Set(
                optionIds,
              );

            if (
              uniqueOptionIds.size !==
              optionIds.length
            ) {
              errors.push(
                `${test.name}: ${question.id} contains duplicate option IDs.`,
              );
            }

            const correctIds =
              Array.isArray(
                question.correctOptionIds,
              )
                ? question.correctOptionIds
                : [];

            if (
              correctIds.length ===
              0
            ) {
              errors.push(
                `${test.name}: ${question.id} has no correct answer.`,
              );
            }

            correctIds.forEach(
              (
                correctId,
              ) => {
                if (
                  !uniqueOptionIds.has(
                    correctId,
                  )
                ) {
                  errors.push(
                    `${test.name}: ${question.id} references missing correct option "${correctId}".`,
                  );
                }
              },
            );
          },
        );
      },
    );

    return errors;
  };

// =========================================================
// RUN COMPLETE VALIDATION
// =========================================================

export const validateTortsMockTests =
  () => {
    const errors = [
      ...validateQuestionCounts(),
      ...validateQuestionIds(),
      ...validateDuplicateQuestions(),
      ...validateOptions(),
    ];

    return {
      valid:
        errors.length ===
        0,

      errors,

      totalQuestions:
        tests.reduce(
          (
            total,
            test,
          ) =>
            total +
            test.questions
              .length,
          0,
        ),
    };
  };

export default validateTortsMockTests;