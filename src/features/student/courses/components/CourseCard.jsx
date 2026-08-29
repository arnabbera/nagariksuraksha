import {
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaLock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  course,
  enrollment = null,
  adminDraft = false,
}) => {
  const navigate = useNavigate();

  const progress =
    Number(
      enrollment?.progress?.percentage || 0,
    );

  const certificationPaymentCompleted =
    enrollment?.certification?.payment
      ?.status === "paid";

  const thumbnail =
    course?.media?.thumbnailUrl ||
    course?.thumbnailUrl ||
    "";

  const handleOpen = () => {
    if (adminDraft) {
      navigate(`/admin/courses?edit=${encodeURIComponent(course.id)}`);
      return;
    }

    navigate(
      `/student/courses/${course.id}${
        certificationPaymentCompleted
          ? ""
          : "#certification-enrollment"
      }`,
    );
  };

  return (
    <article className="ns-student-course-card">
      <div className="ns-student-course-image">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={course.title}
          />
        ) : (
          <div className="ns-student-course-placeholder">
            <FaGraduationCap />
          </div>
        )}

        <div className="ns-course-status-badges">
          <span
            className={`ns-course-status-badge ${
              certificationPaymentCompleted
                ? "is-active"
                : "is-inactive"
            }`}
          >
            {certificationPaymentCompleted ? (
              <FaCheckCircle />
            ) : (
              <FaLock />
            )}
            {adminDraft
              ? "Draft Review"
              : certificationPaymentCompleted
                ? "Enrolled"
                : "Available"}
          </span>
        </div>
      </div>

      <div className="ns-student-course-body">
        <h3>{course.title}</h3>

        <p>
          {course.shortDescription ||
            "Start learning with NagarikSuraksha."}
        </p>

        <div className="ns-student-course-meta">
          <span>
            <FaClock />
            {course.duration || "Self-paced"}
          </span>

          <span>
            <FaBookOpen />
            {course.totals?.chapters || 0} Chapters
          </span>
        </div>

        {certificationPaymentCompleted && (
          <div className="ns-student-progress">
            <div className="ns-student-progress-heading">
              <span>Progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className="ns-student-progress-track">
              <div
                className="ns-student-progress-fill"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, progress),
                  )}%`,
                }}
              />
            </div>
          </div>
        )}

        <div className="ns-student-course-actions">
          <button
            type="button"
            onClick={handleOpen}
          >
            {adminDraft || certificationPaymentCompleted ? <FaBookOpen /> : <FaAward />}
            {adminDraft
              ? "Edit & Verify Course"
              : certificationPaymentCompleted
              ? "Continue Course"
              : "Join Course — ₹49"}
          </button>
        </div>
      </div>

      <style>
        {`
          .ns-student-course-card {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            background: #ffffff;
            box-shadow: 0 6px 24px rgba(15,23,42,.06);
          }

          .ns-student-course-image {
            position: relative;
            height: 180px;
            background: #eff6ff;
          }

          .ns-student-course-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ns-student-course-placeholder {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            color: #2563eb;
            font-size: 52px;
          }

          .ns-course-status-badges {
            position: absolute;
            top: 12px;
            right: 12px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
            max-width: calc(100% - 24px);
          }

          .ns-course-status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid transparent;
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 11px;
            font-weight: 800;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
          }

          .ns-course-status-badge.is-active {
            border-color: #86efac;
            background: #dcfce7;
            color: #166534;
          }

          .ns-course-status-badge.is-inactive {
            border-color: #cbd5e1;
            background: rgba(248, 250, 252, 0.96);
            color: #64748b;
          }

          .ns-student-course-body {
            padding: 20px;
          }

          .ns-student-course-body h3 {
            margin: 0;
            color: #0f172a;
            font-size: 18px;
          }

          .ns-student-course-body > p {
            min-height: 44px;
            margin: 9px 0 0;
            color: #64748b;
            font-size: 13px;
            line-height: 1.6;
          }

          .ns-student-course-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 16px;
          }

          .ns-student-course-meta span {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #64748b;
            font-size: 12px;
            font-weight: 600;
          }

          .ns-student-progress {
            margin-top: 18px;
          }

          .ns-student-progress-heading {
            display: flex;
            justify-content: space-between;
            color: #475569;
            font-size: 12px;
          }

          .ns-student-progress-heading strong {
            color: #2563eb;
          }

          .ns-student-progress-track {
            height: 8px;
            margin-top: 8px;
            overflow: hidden;
            border-radius: 999px;
            background: #e2e8f0;
          }

          .ns-student-progress-fill {
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(
              90deg,
              #2563eb,
              #0ea5e9
            );
          }

          .ns-student-course-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 20px;
          }

          .ns-student-course-actions button {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: none;
            border-radius: 11px;
            background: #2563eb;
            color: #ffffff;
            cursor: pointer;
            padding: 11px 14px;
            font-weight: 700;
          }

          .ns-student-course-actions button.certification {
            border: 1px solid #f59e0b;
            background: #fffbeb;
            color: #b45309;
          }

          .ns-student-course-actions button.certification:hover {
            background: #fef3c7;
          }

          .ns-student-course-actions button:disabled {
            cursor: not-allowed;
            opacity: .6;
          }

          @media (max-width: 420px) {
            .ns-course-status-badges {
              left: 10px;
              right: 10px;
              justify-content: flex-end;
            }

            .ns-course-status-badge {
              padding: 6px 8px;
              font-size: 10px;
            }
          }
        `}
      </style>
    </article>
  );
};

export default CourseCard;
