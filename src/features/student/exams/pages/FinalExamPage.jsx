import {
  useMemo,
  useState,
} from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";

import {
  useParams,
} from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import finalExam from "../../../../data/exams/torts/finalExam";

import ExamAccessGuard from "../components/ExamAccessGuard";

import Card from "../../../../shared/components/Card";
import PageHeader from "../../../../shared/components/PageHeader";

// =========================================================
// FINAL EXAM PAGE
// =========================================================

export default function FinalExamPage({
  enrollment = null,
}) {
  const {
    role,
  } = useAuth();

  const {
    courseKey,
  } = useParams();

  const isAdmin =
    role === "admin";

  const exam =
    finalExam;

  const questions =
    Array.isArray(
      exam?.questions,
    )
      ? exam.questions
      : [];

  const marksPerQuestion =
    Number(
      exam?.marksPerQuestion ||
        2,
    );

  const passPercentage =
    Number(
      exam?.passPercentage ||
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

  const currentQuestion =
    questions[
      currentIndex
    ] || null;

  // =========================================================
  // SELECT ANSWER
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
        previous,
      ) => ({
        ...previous,
        [questionId]:
          optionId,
      }),
    );
  };

  // =========================================================
  // RESULT
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
          "Submit the Final Examination? You will not be able to change your answers after submission.",
        );

      if (!confirmed) {
        return;
      }

      setSubmitted(
        true,
      );
    };

  // =========================================================
  // EMPTY EXAM
  // =========================================================

  if (
    questions.length ===
    0
  ) {
    return (
      <div className="ns-final-exam-page">
        <PageHeader
          title="Final Examination"
          description="No questions available."
          breadcrumbs={[
            isAdmin
              ? "Admin"
              : "Student",
            "Certification",
            "Final Examination",
          ]}
        />

        <Card>
          No questions have been configured for this examination.
        </Card>
      </div>
    );
  }

  // =========================================================
  // SUBMITTED SCREEN
  // =========================================================

  const submittedContent = (
    <div className="ns-final-exam-page">
      {isAdmin && (
        <AdminPreviewBanner />
      )}

      <PageHeader
        title={
          exam.title
        }
        description="Final Examination Submitted"
        breadcrumbs={[
          isAdmin
            ? "Admin"
            : "Student",
          "Certification",
          "Final Examination",
        ]}
      />

      <Card>
        <div className="ns-final-submit-panel">
          <div className="ns-final-submit-icon">
            <FaCheckCircle />
          </div>

          <h2>
            Examination Submitted
          </h2>

          <p>
            Your Final Examination has been submitted successfully.
          </p>

          {isAdmin ? (
            <div className="ns-admin-result-preview">
              <strong>
                Admin Preview Result
              </strong>

              <span>
                Score:{" "}
                {
                  result.score
                }{" "}
                /{" "}
                {
                  result.maximumMarks
                }
              </span>

              <span>
                Percentage:{" "}
                {
                  result.percentage
                }
                %
              </span>

              <span>
                Result:{" "}
                {result.passed
                  ? "PASS"
                  : "FAIL"}
              </span>
            </div>
          ) : (
            <div className="ns-student-result-pending">
              <strong>
                Result Pending
              </strong>

              <span>
                Your result will be published by NagarikSuraksha Admin.
              </span>
            </div>
          )}

          <div className="ns-final-security-note">
            Correct answers and explanations are not displayed for the Final Examination.
          </div>
        </div>
      </Card>

      <FinalExamStyles />
    </div>
  );

  // =========================================================
  // EXAM CONTENT
  // =========================================================

  const examContent = submitted
    ? submittedContent
    : (
      <div className="ns-final-exam-page">
        {isAdmin && (
          <AdminPreviewBanner />
        )}

        <PageHeader
          title={
            exam.title
          }
          description={
            exam.description
          }
          breadcrumbs={[
            isAdmin
              ? "Admin"
              : "Student",
            "Certification",
            "Final Examination",
          ]}
        />

        <div className="ns-final-exam-notice">
          <FaClipboardCheck />

          <div>
            <strong>
              Final Certification Examination
            </strong>

            <span>
              {
                questions.length
              }{" "}
              questions ·{" "}
              {
                marksPerQuestion
              }{" "}
              marks each ·{" "}
              {
                exam.maximumMarks
              }{" "}
              marks total · Pass:{" "}
              {
                passPercentage
              }
              %
            </span>
          </div>
        </div>

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
              exam.maximumMarks
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

          <span>
            Duration:{" "}
            {
              exam.durationMinutes
            }{" "}
            minutes
          </span>
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
                ) => {
                  const selectedAnswer =
                    answers[
                      currentQuestion.id
                    ] || "";

                  return (
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
                  );
                },
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
              Submit Final Exam
            </button>
          )}
        </div>

        <FinalExamStyles />
      </div>
    );

  // =========================================================
  // ADMIN BYPASSES ALL RESTRICTIONS
  // STUDENT USES EXAM ACCESS GUARD
  // =========================================================

  if (isAdmin) {
    return examContent;
  }

  return (
    <ExamAccessGuard
      enrollment={
        enrollment
      }
      examType="final"
    >
      {examContent}
    </ExamAccessGuard>
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
        Final Exam restrictions are bypassed for administrator testing.
      </span>
    </div>
  );
}

// =========================================================
// STYLES
// =========================================================

function FinalExamStyles() {
  return (
    <style>
      {`
        .ns-final-exam-page {
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

        .ns-final-exam-notice {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          border: 1px solid #c7d2fe;
          border-radius: 14px;
          background: #eef2ff;
          color: #3730a3;
          padding: 14px 16px;
        }

        .ns-final-exam-notice > svg {
          flex-shrink: 0;
          font-size: 22px;
        }

        .ns-final-exam-notice div {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ns-final-exam-notice strong {
          font-size: 12px;
        }

        .ns-final-exam-notice span {
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
          border-color: #4f46e5;
          background: #eef2ff;
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
          background: #4f46e5;
          color: #ffffff;
        }

        .ns-test-navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 18px;
        }

        .ns-test-navigation > button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: none;
          border-radius: 10px;
          background: #4f46e5;
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
          > button.is-secondary {
          background: #e2e8f0;
          color: #334155;
        }

        .ns-test-navigation
          > button.is-submit {
          background: #dc2626;
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
          border-color: #4f46e5;
          background: #4f46e5;
          color: #ffffff;
        }

        .ns-final-submit-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .ns-final-submit-icon {
          display: flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f0fdf4;
          color: #16a34a;
          font-size: 26px;
        }

        .ns-final-submit-panel h2 {
          margin: 0;
          color: #0f172a;
          font-size: 22px;
        }

        .ns-final-submit-panel > p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        .ns-admin-result-preview,
        .ns-student-result-pending {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          flex-direction: column;
          gap: 5px;
          border-radius: 12px;
          padding: 14px;
        }

        .ns-admin-result-preview {
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1e40af;
        }

        .ns-student-result-pending {
          border: 1px solid #fde68a;
          background: #fffbeb;
          color: #92400e;
        }

        .ns-admin-result-preview strong,
        .ns-student-result-pending strong {
          font-size: 12px;
        }

        .ns-admin-result-preview span,
        .ns-student-result-pending span {
          font-size: 11px;
        }

        .ns-final-security-note {
          width: 100%;
          box-sizing: border-box;
          border-radius: 10px;
          background: #f8fafc;
          color: #64748b;
          padding: 11px 12px;
          font-size: 11px;
          line-height: 1.6;
        }

        @media (max-width: 700px) {
          .ns-admin-preview-banner,
          .ns-final-exam-notice {
            align-items: flex-start;
            flex-direction: column;
          }

          .ns-test-navigation {
            align-items: stretch;
            flex-direction: column;
          }

          .ns-test-navigation > button {
            width: 100%;
          }

          .ns-question-dots {
            order: -1;
          }
        }
      `}
    </style>
  );
}