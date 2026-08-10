import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  course,
  enrollment = null,
  onEnroll,
  enrolling = false,
}) => {
  const navigate = useNavigate();

  const progress =
    Number(
      enrollment?.progress?.percentage || 0,
    );

  const enrolled = Boolean(enrollment);

  const thumbnail =
    course?.media?.thumbnailUrl ||
    course?.thumbnailUrl ||
    "";

  const handleOpen = () => {
    navigate(
      `/student/courses/${course.id}`,
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

        {enrolled && (
          <span className="ns-enrolled-badge">
            <FaCheckCircle />
            Enrolled
          </span>
        )}
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

        {enrolled && (
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
          {enrolled ? (
            <button
              type="button"
              onClick={handleOpen}
            >
              <FaBookOpen />
              {progress > 0
                ? "Continue Learning"
                : "Start Learning"}
            </button>
          ) : (
            <>
              <button
                type="button"
                className="secondary"
                onClick={handleOpen}
              >
                View Course
              </button>

              <button
                type="button"
                disabled={enrolling}
                onClick={() =>
                  onEnroll?.(course)
                }
              >
                {enrolling
                  ? "Enrolling..."
                  : "Enroll"}
              </button>
            </>
          )}
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

          .ns-enrolled-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
            border-radius: 999px;
            background: #dcfce7;
            color: #166534;
            padding: 7px 10px;
            font-size: 11px;
            font-weight: 800;
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
            display: flex;
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

          .ns-student-course-actions button.secondary {
            border: 1px solid #bfdbfe;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-student-course-actions button:disabled {
            cursor: not-allowed;
            opacity: .6;
          }
        `}
      </style>
    </article>
  );
};

export default CourseCard;