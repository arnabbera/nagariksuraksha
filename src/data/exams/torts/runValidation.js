import validateTortsMockTests from "./validateExamQuestions";

const result =
  validateTortsMockTests();

console.log(
  "Torts Mock Test Validation:",
  result,
);

if (!result.valid) {
  throw new Error(
    `Torts mock-test validation failed:\n${result.errors.join(
      "\n",
    )}`,
  );
}