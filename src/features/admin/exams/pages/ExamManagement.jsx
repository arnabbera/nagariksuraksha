import {
  FaClipboardCheck,
  FaEye,
  FaFileAlt,
  FaGraduationCap,
  FaLockOpen,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import Card from "../../../../shared/components/Card";
import PageHeader from "../../../../shared/components/PageHeader";

// =========================================================
// SAMPLE COURSE EXAM CONFIGURATION
// =========================================================

const EXAM_COURSES = [
  {
    id:
      "law-of-torts-mv-and-cp-laws",

    title:
      "Law of Torts, MV and CP Laws",

    description:
      "Certification examination preview and testing.",

    tests: [
      {
        id:
          "mock-1",

        type:
          "mock",

        testNumber:
          1,

        title:
          "Mock Test 1",

        questions:
          20,

        route:
          "/admin/exams/torts/mock/1",
      },

      {
        id:
          "mock-2",

        type:
          "mock",

        testNumber:
          2,

        title:
          "Mock Test 2",

        questions:
          20,

        route:
          "/admin/exams/torts/mock/2",
      },

      {
        id:
          "mock-3",

        type:
          "mock",

        testNumber:
          3,

        title:
          "Mock Test 3",

        questions:
          20,

        route:
          "/admin/exams/torts/mock/3",
      },

      {
        id:
          "final",

        type:
          "final",

        title:
          "Final Examination",

        questions:
          30,

        route:
          "/admin/exams/torts/final",
      },
    ],
  },
];

// =========================================================
// EXAM MANAGEMENT
// =========================================================

export default function ExamManagement() {
  const navigate =
    useNavigate();

  const handlePreview = (
    route,
  ) => {
    navigate(
      route,
    );
  };

  return (
    <div>
      <PageHeader
        title="Examinations"
        description="Preview and test NagarikSuraksha certification Mock Tests and Final Examinations."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Examinations",
        ]}
      />

      <div className="ns-admin-exam-notice">
        <FaLockOpen />

        <div>
          <strong>
            Administrator Preview Access
          </strong>

          <span>
            Admin can open all Mock Tests and Final Examinations without certification payment, student progression or exam scheduling restrictions.
          </span>
        </div>
      </div>

      <div className="ns-admin-exam-course-list">
        {EXAM_COURSES.map(
          (
            course,
          ) => (
            <Card
              key={
                course.id
              }
            >
              <div className="ns-admin-exam-course">
                <div className="ns-admin-exam-course-heading">
                  <div className="ns-admin-exam-course-icon">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <h2>
                      {
                        course.title
                      }
                    </h2>

                    <p>
                      {
                        course.description
                      }
                    </p>
                  </div>
                </div>

                <div className="ns-admin-exam-grid">
                  {course.tests.map(
                    (
                      test,
                    ) => (
                      <article
                        key={
                          test.id
                        }
                        className={`ns-admin-exam-test-card ${
                          test.type ===
                          "final"
                            ? "is-final"
                            : ""
                        }`}
                      >
                        <div className="ns-admin-exam-test-icon">
                          {test.type ===
                          "final" ? (
                            <FaClipboardCheck />
                          ) : (
                            <FaFileAlt />
                          )}
                        </div>

                        <div className="ns-admin-exam-test-info">
                          <span className="ns-admin-exam-test-type">
                            {test.type ===
                            "final"
                              ? "FINAL EXAM"
                              : `MOCK TEST ${test.testNumber}`}
                          </span>

                          <h3>
                            {
                              test.title
                            }
                          </h3>

                          <p>
                            {
                              test.questions
                            }{" "}
                            Questions
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handlePreview(
                              test.route,
                            )
                          }
                        >
                          <FaEye />
                          Preview
                        </button>
                      </article>
                    ),
                  )}
                </div>
              </div>
            </Card>
          ),
        )}
      </div>

      <style>
        {`
          .ns-admin-exam-notice {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            border: 1px solid #bfdbfe;
            border-radius: 14px;
            background: #eff6ff;
            color: #1e40af;
            padding: 14px 16px;
          }

          .ns-admin-exam-notice > svg {
            flex-shrink: 0;
            font-size: 20px;
          }

          .ns-admin-exam-notice div {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }

          .ns-admin-exam-notice strong {
            font-size: 12px;
          }

          .ns-admin-exam-notice span {
            font-size: 11px;
            line-height: 1.5;
          }

          .ns-admin-exam-course-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .ns-admin-exam-course {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .ns-admin-exam-course-heading {
            display: flex;
            align-items: center;
            gap: 13px;
          }

          .ns-admin-exam-course-icon {
            display: flex;
            width: 46px;
            height: 46px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: #eff6ff;
            color: #2563eb;
            font-size: 21px;
          }

          .ns-admin-exam-course-heading h2 {
            margin: 0;
            color: #0f172a;
            font-size: 18px;
          }

          .ns-admin-exam-course-heading p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-admin-exam-grid {
            display: grid;
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
            gap: 14px;
          }

          .ns-admin-exam-test-card {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 13px;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            background: #ffffff;
            padding: 15px;
          }

          .ns-admin-exam-test-card.is-final {
            border-color: #c7d2fe;
            background: #f8faff;
          }

          .ns-admin-exam-test-icon {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 11px;
            background: #f1f5f9;
            color: #475569;
            font-size: 17px;
          }

          .ns-admin-exam-test-card.is-final
            .ns-admin-exam-test-icon {
            background: #eef2ff;
            color: #4338ca;
          }

          .ns-admin-exam-test-info {
            min-width: 0;
            flex: 1;
          }

          .ns-admin-exam-test-type {
            display: block;
            margin-bottom: 3px;
            color: #64748b;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: .05em;
          }

          .ns-admin-exam-test-info h3 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-admin-exam-test-info p {
            margin: 5px 0 0;
            color: #64748b;
            font-size: 11px;
          }

          .ns-admin-exam-test-card button {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: none;
            border-radius: 9px;
            background: #2563eb;
            color: #ffffff;
            cursor: pointer;
            padding: 9px 12px;
            font-size: 11px;
            font-weight: 700;
          }

          .ns-admin-exam-test-card button:hover {
            background: #1d4ed8;
          }

          .ns-admin-exam-test-card.is-final
            button {
            background: #4f46e5;
          }

          .ns-admin-exam-test-card.is-final
            button:hover {
            background: #4338ca;
          }

          @media (
            max-width: 800px
          ) {
            .ns-admin-exam-grid {
              grid-template-columns:
                1fr;
            }
          }

          @media (
            max-width: 560px
          ) {
            .ns-admin-exam-notice,
            .ns-admin-exam-course-heading,
            .ns-admin-exam-test-card {
              align-items: flex-start;
            }

            .ns-admin-exam-test-card {
              flex-wrap: wrap;
            }

            .ns-admin-exam-test-card button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}