import {
  useMemo,
  useState,
} from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaRedo,
  FaTimesCircle,
} from "react-icons/fa";

import {
  useParams,
} from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import mockTest1 from "../../../../data/exams/torts/mockTest1";
import mockTest2 from "../../../../data/exams/torts/mockTest2";
import mockTest3 from "../../../../data/exams/torts/mockTest3";

import Card from "../../../../shared/components/Card";
import PageHeader from "../../../../shared/components/PageHeader";

// =========================================================
// MOCK TEST PAGE
// =========================================================

export default function MockTestPage() {
  const {
    role,
  } = useAuth();

  const {
    testNumber,
  } = useParams();

  const isAdmin =
    role === "admin";

  // =========================================================
  // SELECT MOCK TEST FROM URL
  // =========================================================

  const testMap = {
    1: mockTest1,
    2: mockTest2,
    3: mockTest3,
  };

  const selectedTestNumber =
    Number(
      testNumber || 1,
    );

  const test =
    testMap[
      selectedTestNumber
    ] || mockTest1;

  const questions =
    Array.isArray(
      test?.questions,
    )
      ? test.questions
      : [];

  const marksPerQuestion =
    Number(
      test?.marksPerQuestion ||
        2,
    );

  const passPercentage =
    Number(
      test?.passPercentage ||
        50,
    );

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    answers,
    setAnswers,
  ] = useState({});

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  const [
    reviewMode,
    setReviewMode,
  ] = useState(false);

  const currentQuestion =
    questions[
      currentIndex
    ] || null;

  // =========================================================
  // ANSWER SELECTION
  // =========================================================

  const handleSelectAnswer = (
    questionId,
    optionId,
  ) => {
    if (submitted) {
      return;
    }

    setAnswers(
      (
        previousAnswers,
      ) => ({
        ...previousAnswers,

        [questionId]:
          optionId,
      }),
    );
  };

  // =========================================================
  // TEST RESULT
  // =========================================================

  const result =
    useMemo(
      () => {
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        questions.forEach(
          (
            question,
          ) => {
            const selected =
              answers[
                question.id
              ];

            if (!selected) {
              unanswered += 1;
              return;
            }

            if (
              Array.isArray(
                question
                  .correctOptionIds,
              ) &&
              question.correctOptionIds.includes(
                selected,
              )
            ) {
              correct += 1;
            } else {
              wrong += 1;
            }
          },
        );

        const maximumMarks =
          questions.length *
          marksPerQuestion;

        const score =
          correct *
          marksPerQuestion;

        const percentage =
          maximumMarks >
          0
            ? Math.round(
                (
                  score /
                  maximumMarks
                ) *
                  100,
              )
            : 0;

        const passed =
          percentage >=
          passPercentage;

        return {
          correct,
          wrong,
          unanswered,
          score,
          maximumMarks,
          percentage,
          passed,
        };
      },
      [
        answers,
        questions,
        marksPerQuestion,
        passPercentage,
      ],
    );

  // =========================================================
  // NAVIGATION
  // =========================================================

  const handlePrevious =
    () => {
      setCurrentIndex(
        (
          previous,
        ) =>
          Math.max(
            0,
            previous - 1,
          ),
      );
    };

  const handleNext =
    () => {
      setCurrentIndex(
        (
          previous,
        ) =>
          Math.min(
            questions.length -
              1,

            previous + 1,
          ),
      );
    };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit =
    () => {
      const confirmed =
        window.confirm(
          `Submit ${test.title}? You will not be able to change answers after submission.`,
        );

      if (
        !confirmed
      ) {
        return;
      }

      setSubmitted(
        true,
      );

      setReviewMode(
        false,
      );
    };

  // =========================================================
  // RETAKE
  // =========================================================

  const handleRetake =
    () => {
      setAnswers(
        {},
      );

      setCurrentIndex(
        0,
      );

      setSubmitted(
        false,
      );

      setReviewMode(
        false,
      );
    };

  // =========================================================
  // EMPTY TEST
  // =========================================================

  if (
    questions.length ===
    0
  ) {
    return (
      <div className="ns-mock-test-page">
        {isAdmin && (
          <AdminPreviewBanner />
        )}

        <PageHeader
          title={
            test?.title ||
            `Mock Test ${selectedTestNumber}`
          }
          description="No questions available."
          breadcrumbs={[
            isAdmin
              ? "Admin"
              : "Student",
            "Certification",
            `Mock Test ${selectedTestNumber}`,
          ]}
        />

        <Card>
          No questions have been configured for this mock test.
        </Card>

        <MockTestStyles />
      </div>
    );
  }

  // =========================================================
  // RESULT SCREEN
  // =========================================================

  if (
    submitted &&
    !reviewMode
  ) {
    return (
      <div className="ns-mock-test-page">
        {isAdmin && (
          <AdminPreviewBanner />
        )}

        <PageHeader
          title={
            test.title
          }
          description="Mock Test Result"
          breadcrumbs={[
            isAdmin
              ? "Admin"
              : "Student",
            "Certification",
            `Mock Test ${test.testNumber}`,
          ]}
        />

        <Card>
          <div className="ns-result-panel">
            <div
              className={`ns-result-status ${
                result.passed
                  ? "is-pass"
                  : "is-fail"
              }`}
            >
              {result.passed ? (
                <FaCheckCircle />
              ) : (
                <FaTimesCircle />
              )}

              <div>
                <span>
                  Result
                </span>

                <strong>
                  {result.passed
                    ? "PASS"
                    : "FAIL"}
                </strong>
              </div>
            </div>

            <div className="ns-result-score">
              <span>
                Your Score
              </span>

              <strong>
                {
                  result.score
                }{" "}
                /{" "}
                {
                  result.maximumMarks
                }
              </strong>

              <small>
                {
                  result.percentage
                }
                %
              </small>
            </div>

            <div className="ns-result-grid">
              <div>
                <strong>
                  {
                    result.correct
                  }
                </strong>

                <span>
                  Correct
                </span>
              </div>

              <div>
                <strong>
                  {
                    result.wrong
                  }
                </strong>

                <span>
                  Wrong
                </span>
              </div>

              <div>
                <strong>
                  {
                    result.unanswered
                  }
                </strong>

                <span>
                  Unanswered
                </span>
              </div>

              <div>
                <strong>
                  {
                    result.percentage
                  }
                  %
                </strong>

                <span>
                  Percentage
                </span>
              </div>
            </div>

            <div className="ns-result-actions">
              <button
                type="button"
                onClick={() =>
                  setReviewMode(
                    true,
                  )
                }
              >
                Review Answers
              </button>

              <button
                type="button"
                className="is-secondary"
                onClick={
                  handleRetake
                }
              >
                <FaRedo />

                Retake Test
              </button>
            </div>
          </div>
        </Card>

        <MockTestStyles />
      </div>
    );
  }

  // =========================================================
  // REVIEW SCREEN
  // =========================================================

  if (
    submitted &&
    reviewMode
  ) {
    return (
      <div className="ns-mock-test-page">
        {isAdmin && (
          <AdminPreviewBanner />
        )}

        <PageHeader
          title="Review Answers"
          description={
            test.title
          }
          breadcrumbs={[
            isAdmin
              ? "Admin"
              : "Student",
            "Certification",
            `Mock Test ${test.testNumber}`,
            "Review",
          ]}
        />

        <div className="ns-review-list">
          {questions.map(
            (
              question,
              index,
            ) => {
              const selected =
                answers[
                  question.id
                ];

              const correctId =
                Array.isArray(
                  question
                    .correctOptionIds,
                )
                  ? question
                      .correctOptionIds[
                      0
                    ]
                  : "";

              const selectedOption =
                question.options.find(
                  (
                    option,
                  ) =>
                    option.id ===
                    selected,
                );

              const correctOption =
                question.options.find(
                  (
                    option,
                  ) =>
                    option.id ===
                    correctId,
                );

              const correct =
                selected ===
                correctId;

              return (
                <Card
                  key={
                    question.id
                  }
                >
                  <div className="ns-review-question">
                    <h3>
                      {index +
                        1}
                      .{" "}
                      {
                        question.question
                      }
                    </h3>

                    <div
                      className={`ns-review-answer ${
                        correct
                          ? "is-correct"
                          : "is-wrong"
                      }`}
                    >
                      <strong>
                        Your Answer:
                      </strong>

                      <span>
                        {selectedOption
                          ?.text ||
                          "Not answered"}
                      </span>
                    </div>

                    <div className="ns-review-answer is-correct">
                      <strong>
                        Correct Answer:
                      </strong>

                      <span>
                        {
                          correctOption
                            ?.text
                        }
                      </span>
                    </div>

                    <div className="ns-review-explanation">
                      <strong>
                        Explanation
                      </strong>

                      <p>
                        {
                          question.explanation
                        }
                      </p>
                    </div>
                  </div>
                </Card>
              );
            },
          )}
        </div>

        <div className="ns-review-footer">
          <button
            type="button"
            onClick={() =>
              setReviewMode(
                false,
              )
            }
          >
            Back to Result
          </button>
        </div>

        <MockTestStyles />
      </div>
    );
  }

  // =========================================================
  // TEST SCREEN
  // =========================================================

  const selectedAnswer =
    answers[
      currentQuestion.id
    ] || "";

  return (
    <div className="ns-mock-test-page">
      {isAdmin && (
        <AdminPreviewBanner />
      )}

      <PageHeader
        title={
          test.title
        }
        description={
          test.description ||
          "Certification mock test"
        }
        breadcrumbs={[
          isAdmin
            ? "Admin"
            : "Student",
          "Certification",
          `Mock Test ${test.testNumber}`,
        ]}
      />

      <div className="ns-test-summary">
        <span>
          Question{" "}
          {currentIndex +
            1}{" "}
          of{" "}
          {
            questions.length
          }
        </span>

        <span>
          {
            marksPerQuestion
          }{" "}
          marks each
        </span>

        <span>
          Total:{" "}
          {
            test.maximumMarks
          }{" "}
          marks
        </span>

        <span>
          Pass:{" "}
          {
            passPercentage
          }
          %
        </span>

        {test.durationMinutes && (
          <span>
            Duration:{" "}
            {
              test.durationMinutes
            }{" "}
            minutes
          </span>
        )}
      </div>

      <Card>
        <div className="ns-question-panel">
          <h2>
            {
              currentQuestion.question
            }
          </h2>

          <div className="ns-option-list">
            {currentQuestion.options.map(
              (
                option,
              ) => (
                <label
                  key={
                    option.id
                  }
                  className={`ns-option ${
                    selectedAnswer ===
                    option.id
                      ? "is-selected"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={
                      currentQuestion.id
                    }
                    checked={
                      selectedAnswer ===
                      option.id
                    }
                    onChange={() =>
                      handleSelectAnswer(
                        currentQuestion.id,
                        option.id,
                      )
                    }
                  />

                  <span className="ns-option-letter">
                    {
                      option.id
                        .toUpperCase()
                    }
                  </span>

                  <span>
                    {
                      option.text
                    }
                  </span>
                </label>
              ),
            )}
          </div>
        </div>
      </Card>

      <div className="ns-test-navigation">
        <button
          type="button"
          className="is-secondary"
          disabled={
            currentIndex ===
            0
          }
          onClick={
            handlePrevious
          }
        >
          <FaArrowLeft />

          Previous
        </button>

        <div className="ns-question-dots">
          {questions.map(
            (
              question,
              index,
            ) => (
              <button
                type="button"
                key={
                  question.id
                }
                className={`${
                  index ===
                  currentIndex
                    ? "is-current"
                    : ""
                } ${
                  answers[
                    question.id
                  ]
                    ? "is-answered"
                    : ""
                }`}
                onClick={() =>
                  setCurrentIndex(
                    index,
                  )
                }
              >
                {index +
                  1}
              </button>
            ),
          )}
        </div>

        {currentIndex <
        questions.length -
          1 ? (
          <button
            type="button"
            onClick={
              handleNext
            }
          >
            Next

            <FaArrowRight />
          </button>
        ) : (
          <button
            type="button"
            className="is-submit"
            onClick={
              handleSubmit
            }
          >
            Submit Test
          </button>
        )}
      </div>

      <MockTestStyles />
    </div>
  );
}

// =========================================================
// ADMIN PREVIEW BANNER
// =========================================================

function AdminPreviewBanner() {
  return (
    <div className="ns-admin-preview-banner">
      <strong>
        ADMIN PREVIEW
      </strong>

      <span>
        You are viewing this test with full certification access.
      </span>
    </div>
  );
}

// =========================================================
// STYLES
// =========================================================

function MockTestStyles() {
  return (
    <style>
      {`
        .ns-mock-test-page {
          width: 100%;
          min-width: 0;
        }

        .ns-admin-preview-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          background: #eff6ff;
          color: #1e40af;
          padding: 11px 14px;
        }

        .ns-admin-preview-banner strong {
          border-radius: 999px;
          background: #2563eb;
          color: #ffffff;
          padding: 5px 8px;
          font-size: 10px;
          letter-spacing: .04em;
        }

        .ns-admin-preview-banner span {
          font-size: 11px;
          line-height: 1.5;
        }

        .ns-test-summary {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }

        .ns-test-summary span {
          border-radius: 999px;
          background: #eff6ff;
          color: #1d4ed8;
          padding: 7px 11px;
          font-size: 11px;
          font-weight: 700;
        }

        .ns-question-panel h2 {
          margin: 0 0 20px;
          color: #0f172a;
          font-size: 20px;
          line-height: 1.55;
        }

        .ns-option-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .ns-option {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          padding: 13px 14px;
          transition:
            border-color .2s ease,
            background .2s ease;
        }

        .ns-option:hover {
          border-color: #93c5fd;
          background: #f8fbff;
        }

        .ns-option.is-selected {
          border-color: #2563eb;
          background: #eff6ff;
        }

        .ns-option input {
          display: none;
        }

        .ns-option-letter {
          display: flex;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f1f5f9;
          color: #475569;
          font-size: 11px;
          font-weight: 800;
        }

        .ns-option.is-selected
          .ns-option-letter {
          background: #2563eb;
          color: #ffffff;
        }

        .ns-test-navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 18px;
        }

        .ns-test-navigation > button,
        .ns-result-actions button,
        .ns-review-footer button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: none;
          border-radius: 10px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          padding: 11px 15px;
          font-weight: 700;
        }

        .ns-test-navigation
          > button:disabled {
          cursor: not-allowed;
          opacity: .45;
        }

        .ns-test-navigation
          > button.is-secondary,
        .ns-result-actions
          button.is-secondary {
          background: #e2e8f0;
          color: #334155;
        }

        .ns-test-navigation
          > button.is-submit {
          background: #16a34a;
        }

        .ns-question-dots {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
        }

        .ns-question-dots button {
          width: 32px;
          height: 32px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #ffffff;
          color: #475569;
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
        }

        .ns-question-dots
          button.is-answered {
          border-color: #86efac;
          background: #f0fdf4;
          color: #15803d;
        }

        .ns-question-dots
          button.is-current {
          border-color: #2563eb;
          background: #2563eb;
          color: #ffffff;
        }

        .ns-result-panel {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .ns-result-status {
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 14px;
          padding: 16px;
        }

        .ns-result-status > svg {
          font-size: 27px;
        }

        .ns-result-status div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ns-result-status span {
          font-size: 11px;
        }

        .ns-result-status strong {
          font-size: 20px;
        }

        .ns-result-status.is-pass {
          background: #f0fdf4;
          color: #166534;
        }

        .ns-result-status.is-fail {
          background: #fef2f2;
          color: #b91c1c;
        }

        .ns-result-score {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .ns-result-score span {
          color: #64748b;
          font-size: 12px;
        }

        .ns-result-score strong {
          color: #0f172a;
          font-size: 27px;
        }

        .ns-result-score small {
          color: #2563eb;
          font-size: 15px;
          font-weight: 800;
        }

        .ns-result-grid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .ns-result-grid > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
          padding: 14px;
          text-align: center;
        }

        .ns-result-grid strong {
          color: #0f172a;
          font-size: 20px;
        }

        .ns-result-grid span {
          color: #64748b;
          font-size: 10px;
        }

        .ns-result-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ns-review-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ns-review-question h3 {
          margin: 0 0 13px;
          color: #0f172a;
          font-size: 15px;
          line-height: 1.5;
        }

        .ns-review-answer {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          border-radius: 9px;
          padding: 10px 12px;
          font-size: 12px;
        }

        .ns-review-answer.is-correct {
          background: #f0fdf4;
          color: #166534;
        }

        .ns-review-answer.is-wrong {
          background: #fef2f2;
          color: #b91c1c;
        }

        .ns-review-explanation {
          margin-top: 12px;
          border-radius: 10px;
          background: #f8fafc;
          padding: 12px;
        }

        .ns-review-explanation strong {
          color: #334155;
          font-size: 11px;
        }

        .ns-review-explanation p {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.6;
        }

        .ns-review-footer {
          margin-top: 18px;
        }

        @media (max-width: 700px) {
          .ns-admin-preview-banner {
            align-items: flex-start;
            flex-direction: column;
          }

          .ns-test-navigation {
            align-items: stretch;
            flex-direction: column;
          }

          .ns-test-navigation
            > button {
            width: 100%;
          }

          .ns-question-dots {
            order: -1;
          }

          .ns-result-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }

          .ns-result-actions {
            flex-direction: column;
          }

          .ns-result-actions button {
            width: 100%;
          }
        }
      `}
    </style>
  );
}