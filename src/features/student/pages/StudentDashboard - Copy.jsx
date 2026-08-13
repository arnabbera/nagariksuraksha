import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCertificate,
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaCrown,
  FaFilePdf,
  FaGraduationCap,
  FaLock,
  FaPlayCircle,
  FaRegClock,
  FaShieldAlt,
  FaTasks,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

import {
  getCourseById,
} from "../../../services/courseService";

import {
  getCertificationAccess,
  getStudentEnrollments,
  hasActiveCertification,
} from "../../../services/studentEnrollmentService";

// =========================================================
// HELPERS
// =========================================================

const normalizePercentage = (value) =>
  Math.min(
    100,
    Math.max(
      0,
      Number(value || 0),
    ),
  );

const getCourseSlug = (course) =>
  course?.slug ||
  course?.id ||
  "";

const getCourseTitle = (
  course,
  enrollment,
) =>
  course?.title ||
  enrollment?.courseTitle ||
  "Course";

const formatCurrency = (value) => {
  const amount =
    Number(value || 0);

  if (amount <= 0) {
    return "Free";
  }

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    },
  ).format(amount);
};

const getMockStatus = (
  certification,
  testNumber,
) =>
  certification?.mockTests?.[
    `test${testNumber}`
  ]?.status ||
  "locked";

const prettyStatus = (value) => {
  if (!value) {
    return "Not Available";
  }

  return String(value)
    .replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase(),
    );
};

const StudentDashboard = () => {
  const navigate =
    useNavigate();

  const {
    profile,
    firebaseUser,
  } = useAuth();

  // =========================================================
  // AUTHENTICATED STUDENT
  // =========================================================

  /*
   * IMPORTANT:
   *
   * CourseDetails and ChapterLearning use Firebase UID
   * as studentId.
   *
   * Dashboard must use the SAME identifier.
   */

  const studentId =
    firebaseUser?.uid ||
    profile?.uid ||
    "";

  const displayName =
    profile?.displayName ||
    firebaseUser?.displayName ||
    "Student";

  const firstName =
    displayName
      .trim()
      .split(/\s+/)[0] ||
    "Student";

  const email =
    profile?.email ||
    firebaseUser?.email ||
    "";

  const publicEnrollmentId =
    profile?.enrollmentId ||
    "Student";

  // =========================================================
  // STATE
  // =========================================================

  const [
    enrollmentRows,
    setEnrollmentRows,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  // =========================================================
  // LOAD ENROLLMENTS + COURSES
  // =========================================================

  useEffect(() => {
    if (!studentId) {
      setEnrollmentRows([]);
      setLoading(false);
      return;
    }

    let active = true;

    const loadDashboard =
      async () => {
        try {
          setLoading(true);
          setError("");

          const enrollments =
            await getStudentEnrollments(
              studentId,
            );

          const safeEnrollments =
            Array.isArray(
              enrollments,
            )
              ? enrollments
              : [];

          const rows =
            await Promise.all(
              safeEnrollments.map(
                async (
                  enrollment,
                ) => {
                  try {
                    const course =
                      await getCourseById(
                        enrollment.courseId,
                      );

                    return {
                      enrollment,
                      course,
                    };
                  } catch (
                    courseError
                  ) {
                    console.error(
                      "Unable to load enrolled course:",
                      enrollment.courseId,
                      courseError,
                    );

                    return {
                      enrollment,
                      course: null,
                    };
                  }
                },
              ),
            );

          if (active) {
            setEnrollmentRows(
              rows,
            );
          }
        } catch (
          dashboardError
        ) {
          console.error(
            "Unable to load student dashboard:",
            dashboardError,
          );

          if (active) {
            setError(
              dashboardError
                ?.message ||
                "Unable to load your learning dashboard.",
            );

            setEnrollmentRows(
              [],
            );
          }
        } finally {
          if (active) {
            setLoading(false);
          }
        }
      };

    loadDashboard();

    return () => {
      active = false;
    };
  }, [studentId]);

  // =========================================================
  // SUMMARY
  // =========================================================

  const dashboardSummary =
    useMemo(() => {
      const totalCourses =
        enrollmentRows.length;

      const certificationCourses =
        enrollmentRows.filter(
          ({ enrollment }) =>
            hasActiveCertification(
              enrollment,
            ),
        ).length;

      const completedCourses =
        enrollmentRows.filter(
          ({ enrollment }) =>
            normalizePercentage(
              enrollment
                ?.progress
                ?.percentage,
            ) >= 100 ||
            enrollment?.status ===
              "completed",
        ).length;

      const certificates =
        enrollmentRows.filter(
          ({ enrollment }) =>
            enrollment
              ?.certification
              ?.certificate
              ?.status ===
              "issued",
        ).length;

      const overallProgress =
        totalCourses > 0
          ? Math.round(
              enrollmentRows.reduce(
                (
                  total,
                  {
                    enrollment,
                  },
                ) =>
                  total +
                  normalizePercentage(
                    enrollment
                      ?.progress
                      ?.percentage,
                  ),
                0,
              ) /
                totalCourses,
            )
          : 0;

      return {
        totalCourses,
        certificationCourses,
        completedCourses,
        certificates,
        overallProgress,
      };
    }, [enrollmentRows]);

  // =========================================================
  // NAVIGATION
  // =========================================================

  const openCourse = (
    course,
  ) => {
    const slug =
      getCourseSlug(
        course,
      );

    if (!slug) {
      return;
    }

    navigate(
      `/student/courses/${slug}`,
    );
  };

  const openCourses = () => {
    navigate(
      "/student/courses",
    );
  };

  const openCertificates =
    () => {
      navigate(
        "/student/certificates",
      );
    };

  // =========================================================
  // COURSE CARD
  // =========================================================

  const renderCourseCard = ({
    enrollment,
    course,
  }) => {
    const title =
      getCourseTitle(
        course,
        enrollment,
      );

    const progress =
      normalizePercentage(
        enrollment?.progress
          ?.percentage,
      );

    const completedChapters =
      Number(
        enrollment?.progress
          ?.completedChapters ||
          0,
      );

    const totalChapters =
      Number(
        enrollment?.progress
          ?.totalChapters ||
          course?.totals
            ?.chapters ||
          0,
      );

    const certification =
      enrollment
        ?.certification ||
      {};

    const certificationActive =
      hasActiveCertification(
        enrollment,
      );

    const certificationStatus =
      certification?.status ||
      "not-enrolled";

    const paymentStatus =
      certification?.payment
        ?.status ||
      "not-required";

    const certificationFee =
      Number(
        certification?.fee ??
          course
            ?.certification
            ?.fee ??
          course
            ?.certificationFee ??
          0,
      );

    const certificationAvailable =
      course?.certification
        ?.available ??
      course
        ?.certificationAvailable ??
      false;

    const access =
      getCertificationAccess(
        enrollment,
      );

    const certificateStatus =
      certification
        ?.certificate
        ?.status ||
      "not-eligible";

    const finalExamStatus =
      certification
        ?.finalExam
        ?.status ||
      "locked";

    const mock1 =
      getMockStatus(
        certification,
        1,
      );

    const mock2 =
      getMockStatus(
        certification,
        2,
      );

    const mock3 =
      getMockStatus(
        certification,
        3,
      );

    const paymentPending =
      certificationStatus ===
        "pending-payment" ||
      paymentStatus ===
        "pending";

    const statusClass =
      certificationActive
        ? "active"
        : paymentPending
          ? "pending"
          : "free";

    const statusLabel =
      certificationActive
        ? "Certification Active"
        : paymentPending
          ? "Payment Pending"
          : "Free Learning";

    return (
      <article
        className="ns-course-card"
        key={
          enrollment?.id ||
          course?.id
        }
      >
        <div className="ns-course-card-top">
          <div className="ns-course-title-wrap">
            <span
              className={`ns-course-access-badge ${statusClass}`}
            >
              {certificationActive ? (
                <FaCrown />
              ) : paymentPending ? (
                <FaRegClock />
              ) : (
                <FaBookOpen />
              )}

              {statusLabel}
            </span>

            <h3>
              {title}
            </h3>

            {course
              ?.shortDescription && (
              <p>
                {
                  course.shortDescription
                }
              </p>
            )}
          </div>

          <div className="ns-course-percent">
            {progress}%
          </div>
        </div>

        <div className="ns-progress-header">
          <span>
            Course Progress
          </span>

          <span>
            {completedChapters}
            {totalChapters > 0
              ? ` / ${totalChapters} chapters`
              : " chapters"}
          </span>
        </div>

        <div className="ns-progress-track">
          <div
            className="ns-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="ns-course-access-grid">
          <div className="ns-access-item allowed">
            <FaCheckCircle />

            <div>
              <strong>
                Online Learning
              </strong>

              <span>
                Read course chapters
              </span>
            </div>
          </div>

          <div
            className={`ns-access-item ${
              access.pdfDownload
                ? "allowed"
                : "locked"
            }`}
          >
            {access.pdfDownload ? (
              <FaCheckCircle />
            ) : (
              <FaLock />
            )}

            <div>
              <strong>
                PDF Download
              </strong>

              <span>
                {access.pdfDownload
                  ? "Enabled"
                  : "Certification benefit"}
              </span>
            </div>
          </div>

          <div
            className={`ns-access-item ${
              access.mockTests
                ? "allowed"
                : "locked"
            }`}
          >
            {access.mockTests ? (
              <FaCheckCircle />
            ) : (
              <FaLock />
            )}

            <div>
              <strong>
                Mock Tests
              </strong>

              <span>
                {access.mockTests
                  ? "Certification access"
                  : "Locked"}
              </span>
            </div>
          </div>

          <div
            className={`ns-access-item ${
              access.finalExam
                ? "allowed"
                : "locked"
            }`}
          >
            {access.finalExam ? (
              <FaCheckCircle />
            ) : (
              <FaLock />
            )}

            <div>
              <strong>
                Final Exam
              </strong>

              <span>
                {access.finalExam
                  ? "Eligible"
                  : prettyStatus(
                      finalExamStatus,
                    )}
              </span>
            </div>
          </div>
        </div>

        {certificationActive && (
          <div className="ns-certification-progress">
            <div className="ns-certification-progress-title">
              <FaGraduationCap />

              Certification Progress
            </div>

            <div className="ns-exam-status-grid">
              <div>
                <span>
                  Mock 1
                </span>

                <strong>
                  {prettyStatus(
                    mock1,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Mock 2
                </span>

                <strong>
                  {prettyStatus(
                    mock2,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Mock 3
                </span>

                <strong>
                  {prettyStatus(
                    mock3,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  Certificate
                </span>

                <strong>
                  {prettyStatus(
                    certificateStatus,
                  )}
                </strong>
              </div>
            </div>
          </div>
        )}

        {paymentPending && (
          <div className="ns-payment-message">
            <FaRegClock />

            <div>
              <strong>
                Certification enrollment pending
              </strong>

              <span>
                Complete payment to unlock PDF
                downloads, mock tests and the
                certification track.
              </span>
            </div>
          </div>
        )}

        {!certificationActive &&
          !paymentPending &&
          certificationAvailable && (
            <div className="ns-upgrade-message">
              <FaAward />

              <div>
                <strong>
                  Upgrade to Certification
                </strong>

                <span>
                  Certification fee:{" "}
                  {formatCurrency(
                    certificationFee,
                  )}
                </span>
              </div>
            </div>
          )}

        <div className="ns-course-actions">
          <button
            type="button"
            className="ns-primary-action"
            onClick={() =>
              openCourse(
                course,
              )
            }
            disabled={
              !getCourseSlug(
                course,
              )
            }
          >
            <FaPlayCircle />

            {progress > 0
              ? "Continue Learning"
              : "Open Course"}

            <FaArrowRight />
          </button>

          {!certificationActive &&
            certificationAvailable && (
              <button
                type="button"
                className="ns-secondary-action"
                onClick={() =>
                  openCourse(
                    course,
                  )
                }
              >
                {paymentPending
                  ? "View Enrollment"
                  : "Certification Details"}
              </button>
            )}
        </div>
      </article>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="ns-student-dashboard">
      {/* =====================================================
          WELCOME
      ====================================================== */}

      <section className="ns-dashboard-hero">
        <div className="ns-dashboard-hero-content">
          <span className="ns-dashboard-eyebrow">
            <FaUserGraduate />
            Student Learning Portal
          </span>

          <h1>
            Welcome back,{" "}
            {firstName}
          </h1>

          <p>
            Continue your legal learning,
            monitor your course progress and
            manage your certification journey
            from one place.
          </p>

          <div className="ns-dashboard-hero-actions">
            <button
              type="button"
              onClick={
                openCourses
              }
            >
              <FaBookOpen />
              My Courses
            </button>

            <button
              type="button"
              onClick={
                openCertificates
              }
            >
              <FaCertificate />
              Certificates
            </button>
          </div>
        </div>

        <div className="ns-dashboard-profile">
          <div className="ns-dashboard-avatar">
            {firebaseUser
              ?.photoURL ? (
              <img
                src={
                  firebaseUser.photoURL
                }
                alt={
                  displayName
                }
              />
            ) : (
              <FaUserGraduate />
            )}
          </div>

          <div>
            <strong>
              {displayName}
            </strong>

            <span>
              {email}
            </span>

            <small>
              {
                publicEnrollmentId
              }
            </small>
          </div>
        </div>
      </section>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="ns-dashboard-error">
          {error}
        </div>
      )}

      {/* =====================================================
          SUMMARY CARDS
      ====================================================== */}

      <section className="ns-summary-grid">
        <div className="ns-summary-card">
          <div className="ns-summary-icon blue">
            <FaBookOpen />
          </div>

          <div>
            <span>
              Enrolled Courses
            </span>

            <strong>
              {
                dashboardSummary
                  .totalCourses
              }
            </strong>
          </div>
        </div>

        <div className="ns-summary-card">
          <div className="ns-summary-icon green">
            <FaCrown />
          </div>

          <div>
            <span>
              Certification Active
            </span>

            <strong>
              {
                dashboardSummary
                  .certificationCourses
              }
            </strong>
          </div>
        </div>

        <div className="ns-summary-card">
          <div className="ns-summary-icon orange">
            <FaTasks />
          </div>

          <div>
            <span>
              Overall Progress
            </span>

            <strong>
              {
                dashboardSummary
                  .overallProgress
              }
              %
            </strong>
          </div>
        </div>

        <div className="ns-summary-card">
          <div className="ns-summary-icon purple">
            <FaCertificate />
          </div>

          <div>
            <span>
              Certificates Earned
            </span>

            <strong>
              {
                dashboardSummary
                  .certificates
              }
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="ns-dashboard-section">
        <div className="ns-section-heading">
          <div>
            <span className="ns-section-kicker">
              Your Learning Journey
            </span>

            <h2>
              What You Get with
              NagarikSuraksha
            </h2>

            <p>
              Learn law through structured
              course material and upgrade to
              certification when you are ready
              to test your knowledge.
            </p>
          </div>
        </div>

        <div className="ns-benefit-grid">
          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <FaBookOpen />
            </div>

            <h3>
              Structured Learning
            </h3>

            <p>
              Study chapter-wise legal content,
              notes and learning resources in a
              guided course structure.
            </p>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <FaFilePdf />
            </div>

            <h3>
              Study Materials
            </h3>

            <p>
              Read available chapter PDFs online.
              Certification students can receive
              PDF download access where enabled.
            </p>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <FaTasks />
            </div>

            <h3>
              Test Your Knowledge
            </h3>

            <p>
              Certification courses provide
              structured mock tests to help you
              evaluate your preparation.
            </p>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <FaTrophy />
            </div>

            <h3>
              Earn Certification
            </h3>

            <p>
              Complete the required assessment
              pathway and become eligible for a
              NagarikSuraksha course certificate.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES
      ====================================================== */}

      <section className="ns-dashboard-section">
        <div className="ns-section-heading ns-heading-row">
          <div>
            <span className="ns-section-kicker">
              Continue Learning
            </span>

            <h2>
              My Courses
            </h2>

            <p>
              Your enrolled courses,
              learning progress and
              certification access.
            </p>
          </div>

          <button
            type="button"
            className="ns-view-all"
            onClick={
              openCourses
            }
          >
            View All Courses
            <FaArrowRight />
          </button>
        </div>

        {loading ? (
          <div className="ns-dashboard-loading">
            <div className="ns-loading-spinner" />

            <span>
              Loading your courses...
            </span>
          </div>
        ) : enrollmentRows.length >
          0 ? (
          <div className="ns-course-list">
            {enrollmentRows.map(
              renderCourseCard,
            )}
          </div>
        ) : (
          <div className="ns-empty-learning">
            <div className="ns-empty-icon">
              <FaBookOpen />
            </div>

            <h3>
              Start your learning journey
            </h3>

            <p>
              You have not enrolled in a course
              yet. Browse available courses and
              begin learning.
            </p>

            <button
              type="button"
              onClick={
                openCourses
              }
            >
              Browse Courses
              <FaArrowRight />
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          CERTIFICATION BENEFITS
      ====================================================== */}

      <section className="ns-certification-banner">
        <div className="ns-certification-copy">
          <span className="ns-certification-label">
            <FaCrown />
            Paid Certification
          </span>

          <h2>
            Go Beyond Learning.
            Prove Your Knowledge.
          </h2>

          <p>
            Certification enrollment adds
            assessment and credential benefits
            to eligible NagarikSuraksha courses.
          </p>

          <div className="ns-certification-benefits">
            <span>
              <FaCheckCircle />
              Protected PDF downloads
            </span>

            <span>
              <FaCheckCircle />
              Three course mock tests
            </span>

            <span>
              <FaCheckCircle />
              Final certification examination
            </span>

            <span>
              <FaCheckCircle />
              Result and progress tracking
            </span>

            <span>
              <FaCheckCircle />
              Digital course certificate
            </span>

            <span>
              <FaCheckCircle />
              Certificate verification record
            </span>
          </div>

          <button
            type="button"
            onClick={
              openCourses
            }
          >
            Explore Certification Courses
            <FaArrowRight />
          </button>
        </div>

        <div className="ns-certification-visual">
          <div className="ns-certificate-circle">
            <FaCertificate />
          </div>

          <h3>
            Certification Track
          </h3>

          <div className="ns-cert-step">
            <span>1</span>
            Complete Learning
          </div>

          <div className="ns-cert-step">
            <span>2</span>
            Complete Mock Tests
          </div>

          <div className="ns-cert-step">
            <span>3</span>
            Final Examination
          </div>

          <div className="ns-cert-step">
            <span>4</span>
            Earn Certificate
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFORMATION
      ====================================================== */}

      <section className="ns-dashboard-bottom-grid">
        <div className="ns-info-panel">
          <div className="ns-info-panel-icon">
            <FaShieldAlt />
          </div>

          <div>
            <h3>
              Free Learning Access
            </h3>

            <p>
              Course enrollment gives you access
              to the learning pathway available
              for that course. You can read
              chapter material online and track
              your learning progress.
            </p>
          </div>
        </div>

        <div className="ns-info-panel">
          <div className="ns-info-panel-icon premium">
            <FaCloudDownloadAlt />
          </div>

          <div>
            <h3>
              Certification Access
            </h3>

            <p>
              Paid or activated certification
              unlocks the additional benefits
              configured for that course,
              including protected downloads and
              assessment access.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>
        {`
          .ns-student-dashboard,
          .ns-student-dashboard * {
            box-sizing: border-box;
          }

          .ns-student-dashboard {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            padding-bottom: 36px;
            color: #0f172a;
            overflow-x: clip;
          }

          button {
            font-family: inherit;
          }

          /* ================================================
             HERO
          ================================================= */

          .ns-dashboard-hero {
            position: relative;
            overflow: hidden;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;

            margin-bottom: 22px;
            padding: 30px;

            border-radius: 20px;

            background:
              radial-gradient(
                circle at 90% 20%,
                rgba(255,255,255,.16),
                transparent 30%
              ),
              linear-gradient(
                135deg,
                #0f3d91 0%,
                #2563eb 58%,
                #1d4ed8 100%
              );

            color: #ffffff;

            box-shadow:
              0 12px 30px
              rgba(37,99,235,.16);
          }

          .ns-dashboard-hero-content {
            min-width: 0;
            max-width: 700px;
          }

          .ns-dashboard-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            margin-bottom: 10px;

            color: #dbeafe;

            font-size: 12px;
            font-weight: 800;
            letter-spacing: .08em;
            text-transform: uppercase;
          }

          .ns-dashboard-hero h1 {
            margin: 0 0 9px;

            color: #ffffff;

            font-size:
              clamp(
                25px,
                3vw,
                38px
              );

            line-height: 1.12;
          }

          .ns-dashboard-hero-content > p {
            max-width: 640px;

            margin: 0;

            color: #dbeafe;

            font-size: 15px;
            line-height: 1.7;
          }

          .ns-dashboard-hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            margin-top: 20px;
          }

          .ns-dashboard-hero-actions button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            min-height: 42px;

            padding: 0 16px;

            border: 1px solid
              rgba(255,255,255,.4);

            border-radius: 10px;

            background: #ffffff;
            color: #1d4ed8;

            cursor: pointer;

            font-size: 13px;
            font-weight: 800;
          }

          .ns-dashboard-hero-actions
          button:last-child {
            background:
              rgba(255,255,255,.10);

            color: #ffffff;
          }

          .ns-dashboard-profile {
            display: flex;
            width: min(100%, 290px);
            flex-shrink: 0;
            align-items: center;
            gap: 13px;

            padding: 16px;

            border: 1px solid
              rgba(255,255,255,.22);

            border-radius: 16px;

            background:
              rgba(255,255,255,.10);

            backdrop-filter:
              blur(8px);
          }

          .ns-dashboard-avatar {
            display: flex;
            width: 58px;
            height: 58px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            overflow: hidden;

            border: 2px solid
              rgba(255,255,255,.7);

            border-radius: 50%;

            background: #ffffff;
            color: #2563eb;

            font-size: 23px;
          }

          .ns-dashboard-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ns-dashboard-profile > div:last-child {
            min-width: 0;
          }

          .ns-dashboard-profile strong,
          .ns-dashboard-profile span,
          .ns-dashboard-profile small {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-dashboard-profile strong {
            color: #ffffff;
            font-size: 15px;
          }

          .ns-dashboard-profile span {
            margin-top: 3px;
            color: #dbeafe;
            font-size: 11px;
          }

          .ns-dashboard-profile small {
            margin-top: 5px;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
          }

          /* ================================================
             SUMMARY
          ================================================= */

          .ns-summary-grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap: 14px;

            margin-bottom: 24px;
          }

          .ns-summary-card {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 13px;

            padding: 18px;

            border: 1px solid #e2e8f0;
            border-radius: 15px;

            background: #ffffff;

            box-shadow:
              0 5px 16px
              rgba(15,23,42,.045);
          }

          .ns-summary-icon {
            display: flex;
            width: 46px;
            height: 46px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            border-radius: 13px;

            font-size: 18px;
          }

          .ns-summary-icon.blue {
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-summary-icon.green {
            background: #ecfdf5;
            color: #059669;
          }

          .ns-summary-icon.orange {
            background: #fff7ed;
            color: #ea580c;
          }

          .ns-summary-icon.purple {
            background: #faf5ff;
            color: #9333ea;
          }

          .ns-summary-card > div:last-child {
            min-width: 0;
          }

          .ns-summary-card span {
            display: block;

            color: #64748b;

            font-size: 11px;
            font-weight: 700;
          }

          .ns-summary-card strong {
            display: block;

            margin-top: 3px;

            color: #0f172a;

            font-size: 23px;
            line-height: 1.1;
          }

          /* ================================================
             SECTIONS
          ================================================= */

          .ns-dashboard-section {
            margin-bottom: 24px;
            padding: 24px;

            border: 1px solid #e2e8f0;
            border-radius: 18px;

            background: #ffffff;

            box-shadow:
              0 5px 18px
              rgba(15,23,42,.04);
          }

          .ns-section-heading {
            margin-bottom: 20px;
          }

          .ns-heading-row {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 20px;
          }

          .ns-section-kicker {
            display: block;

            margin-bottom: 5px;

            color: #2563eb;

            font-size: 11px;
            font-weight: 800;
            letter-spacing: .08em;
            text-transform: uppercase;
          }

          .ns-section-heading h2 {
            margin: 0;

            color: #0f172a;

            font-size: 22px;
          }

          .ns-section-heading p {
            max-width: 760px;

            margin:
              6px 0 0;

            color: #64748b;

            font-size: 13px;
            line-height: 1.6;
          }

          .ns-view-all {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            gap: 7px;

            border: 0;
            background: transparent;
            color: #2563eb;

            padding: 8px 0;

            cursor: pointer;

            font-size: 12px;
            font-weight: 800;
          }

          /* ================================================
             BENEFITS
          ================================================= */

          .ns-benefit-grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap: 14px;
          }

          .ns-benefit-card {
            min-width: 0;

            padding: 18px;

            border: 1px solid #e2e8f0;
            border-radius: 14px;

            background: #f8fafc;
          }

          .ns-benefit-icon {
            display: flex;
            width: 42px;
            height: 42px;
            align-items: center;
            justify-content: center;

            margin-bottom: 13px;

            border-radius: 11px;

            background: #eff6ff;
            color: #2563eb;

            font-size: 17px;
          }

          .ns-benefit-card h3 {
            margin: 0 0 7px;

            color: #0f172a;

            font-size: 14px;
          }

          .ns-benefit-card p {
            margin: 0;

            color: #64748b;

            font-size: 12px;
            line-height: 1.6;
          }

          /* ================================================
             COURSES
          ================================================= */

          .ns-course-list {
            display: grid;
            gap: 16px;
          }

          .ns-course-card {
            min-width: 0;

            padding: 20px;

            border: 1px solid #dbe3ef;
            border-radius: 16px;

            background:
              linear-gradient(
                180deg,
                #ffffff,
                #fbfdff
              );
          }

          .ns-course-card-top {
            display: flex;
            justify-content: space-between;
            gap: 18px;
          }

          .ns-course-title-wrap {
            min-width: 0;
          }

          .ns-course-access-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;

            margin-bottom: 9px;
            padding: 5px 9px;

            border-radius: 999px;

            font-size: 10px;
            font-weight: 800;
            letter-spacing: .03em;
            text-transform: uppercase;
          }

          .ns-course-access-badge.free {
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-course-access-badge.active {
            background: #ecfdf5;
            color: #047857;
          }

          .ns-course-access-badge.pending {
            background: #fff7ed;
            color: #c2410c;
          }

          .ns-course-card h3 {
            margin: 0;

            color: #0f172a;

            font-size: 18px;
          }

          .ns-course-card-top p {
            max-width: 750px;

            margin:
              6px 0 0;

            color: #64748b;

            font-size: 12px;
            line-height: 1.55;
          }

          .ns-course-percent {
            flex-shrink: 0;

            color: #2563eb;

            font-size: 20px;
            font-weight: 800;
          }

          .ns-progress-header {
            display: flex;
            justify-content: space-between;
            gap: 10px;

            margin:
              16px 0 7px;

            color: #64748b;

            font-size: 10px;
            font-weight: 700;
          }

          .ns-progress-track {
            width: 100%;
            height: 8px;

            overflow: hidden;

            border-radius: 999px;

            background: #e2e8f0;
          }

          .ns-progress-fill {
            height: 100%;

            border-radius: inherit;

            background:
              linear-gradient(
                90deg,
                #2563eb,
                #60a5fa
              );

            transition:
              width .3s ease;
          }

          .ns-course-access-grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap: 9px;

            margin-top: 16px;
          }

          .ns-access-item {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 9px;

            padding: 11px;

            border-radius: 10px;
          }

          .ns-access-item.allowed {
            background: #f0fdf4;
            color: #15803d;
          }

          .ns-access-item.locked {
            background: #f8fafc;
            color: #94a3b8;
          }

          .ns-access-item > svg {
            flex-shrink: 0;
          }

          .ns-access-item div {
            min-width: 0;
          }

          .ns-access-item strong,
          .ns-access-item span {
            display: block;
          }

          .ns-access-item strong {
            color: #334155;
            font-size: 10px;
          }

          .ns-access-item span {
            margin-top: 2px;
            color: #64748b;
            font-size: 9px;
          }

          /* ================================================
             CERTIFICATION PROGRESS
          ================================================= */

          .ns-certification-progress {
            margin-top: 14px;
            padding: 14px;

            border: 1px solid #d1fae5;
            border-radius: 12px;

            background: #f0fdf4;
          }

          .ns-certification-progress-title {
            display: flex;
            align-items: center;
            gap: 7px;

            margin-bottom: 11px;

            color: #047857;

            font-size: 11px;
            font-weight: 800;
          }

          .ns-exam-status-grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap: 8px;
          }

          .ns-exam-status-grid div {
            min-width: 0;

            padding: 9px;

            border-radius: 8px;

            background: #ffffff;
          }

          .ns-exam-status-grid span,
          .ns-exam-status-grid strong {
            display: block;
          }

          .ns-exam-status-grid span {
            color: #64748b;
            font-size: 9px;
          }

          .ns-exam-status-grid strong {
            margin-top: 3px;

            overflow: hidden;
            color: #0f172a;

            font-size: 10px;
            text-overflow: ellipsis;
          }

          .ns-payment-message,
          .ns-upgrade-message {
            display: flex;
            align-items: center;
            gap: 10px;

            margin-top: 14px;
            padding: 12px;

            border-radius: 10px;
          }

          .ns-payment-message {
            background: #fff7ed;
            color: #c2410c;
          }

          .ns-upgrade-message {
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-payment-message > svg,
          .ns-upgrade-message > svg {
            flex-shrink: 0;
          }

          .ns-payment-message strong,
          .ns-payment-message span,
          .ns-upgrade-message strong,
          .ns-upgrade-message span {
            display: block;
          }

          .ns-payment-message strong,
          .ns-upgrade-message strong {
            font-size: 11px;
          }

          .ns-payment-message span,
          .ns-upgrade-message span {
            margin-top: 2px;
            color: #64748b;
            font-size: 10px;
            line-height: 1.4;
          }

          .ns-course-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;

            margin-top: 16px;
          }

          .ns-primary-action,
          .ns-secondary-action {
            display: inline-flex;
            min-height: 40px;
            align-items: center;
            justify-content: center;
            gap: 7px;

            padding: 0 14px;

            border-radius: 9px;

            cursor: pointer;

            font-size: 11px;
            font-weight: 800;
          }

          .ns-primary-action {
            border: 1px solid #2563eb;

            background: #2563eb;
            color: #ffffff;
          }

          .ns-primary-action:disabled {
            cursor: not-allowed;
            opacity: .55;
          }

          .ns-secondary-action {
            border: 1px solid #cbd5e1;

            background: #ffffff;
            color: #334155;
          }

          /* ================================================
             CERTIFICATION BANNER
          ================================================= */

          .ns-certification-banner {
            display: grid;
            grid-template-columns:
              minmax(0, 1.45fr)
              minmax(260px, .55fr);

            gap: 28px;

            margin-bottom: 24px;
            padding: 30px;

            overflow: hidden;

            border-radius: 20px;

            background:
              linear-gradient(
                135deg,
                #111827,
                #1e3a8a
              );

            color: #ffffff;
          }

          .ns-certification-copy {
            min-width: 0;
          }

          .ns-certification-label {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            margin-bottom: 10px;
            padding: 6px 10px;

            border-radius: 999px;

            background:
              rgba(250,204,21,.15);

            color: #fde047;

            font-size: 10px;
            font-weight: 800;
            letter-spacing: .05em;
            text-transform: uppercase;
          }

          .ns-certification-copy h2 {
            max-width: 650px;

            margin: 0;

            color: #ffffff;

            font-size:
              clamp(
                23px,
                3vw,
                34px
              );

            line-height: 1.15;
          }

          .ns-certification-copy > p {
            max-width: 700px;

            margin:
              10px 0 0;

            color: #cbd5e1;

            font-size: 13px;
            line-height: 1.65;
          }

          .ns-certification-benefits {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 9px 18px;

            margin-top: 19px;
          }

          .ns-certification-benefits span {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 8px;

            color: #e2e8f0;

            font-size: 11px;
          }

          .ns-certification-benefits svg {
            flex-shrink: 0;
            color: #4ade80;
          }

          .ns-certification-copy > button {
            display: inline-flex;
            min-height: 42px;
            align-items: center;
            justify-content: center;
            gap: 8px;

            margin-top: 21px;
            padding: 0 16px;

            border: 0;
            border-radius: 9px;

            background: #facc15;
            color: #111827;

            cursor: pointer;

            font-size: 11px;
            font-weight: 800;
          }

          .ns-certification-visual {
            align-self: center;

            padding: 20px;

            border: 1px solid
              rgba(255,255,255,.15);

            border-radius: 16px;

            background:
              rgba(255,255,255,.07);
          }

          .ns-certificate-circle {
            display: flex;
            width: 55px;
            height: 55px;
            align-items: center;
            justify-content: center;

            margin-bottom: 12px;

            border-radius: 50%;

            background:
              rgba(250,204,21,.16);

            color: #fde047;

            font-size: 24px;
          }

          .ns-certification-visual h3 {
            margin:
              0 0 13px;

            color: #ffffff;

            font-size: 15px;
          }

          .ns-cert-step {
            display: flex;
            align-items: center;
            gap: 9px;

            margin-top: 8px;

            color: #e2e8f0;

            font-size: 10px;
          }

          .ns-cert-step span {
            display: flex;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background:
              rgba(255,255,255,.12);

            color: #ffffff;

            font-size: 9px;
            font-weight: 800;
          }

          /* ================================================
             BOTTOM INFO
          ================================================= */

          .ns-dashboard-bottom-grid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .ns-info-panel {
            display: flex;
            min-width: 0;
            align-items: flex-start;
            gap: 14px;

            padding: 19px;

            border: 1px solid #e2e8f0;
            border-radius: 14px;

            background: #ffffff;
          }

          .ns-info-panel-icon {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            border-radius: 11px;

            background: #eff6ff;
            color: #2563eb;
          }

          .ns-info-panel-icon.premium {
            background: #fff7ed;
            color: #ea580c;
          }

          .ns-info-panel h3 {
            margin: 0 0 5px;

            font-size: 13px;
          }

          .ns-info-panel p {
            margin: 0;

            color: #64748b;

            font-size: 11px;
            line-height: 1.6;
          }

          /* ================================================
             EMPTY / LOADING / ERROR
          ================================================= */

          .ns-dashboard-loading,
          .ns-empty-learning {
            display: flex;
            min-height: 220px;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            text-align: center;
          }

          .ns-loading-spinner {
            width: 34px;
            height: 34px;

            margin-bottom: 12px;

            border: 3px solid #dbeafe;
            border-top-color: #2563eb;
            border-radius: 50%;

            animation:
              ns-spin .8s linear infinite;
          }

          @keyframes ns-spin {
            to {
              transform:
                rotate(360deg);
            }
          }

          .ns-dashboard-loading span {
            color: #64748b;
            font-size: 12px;
          }

          .ns-empty-icon {
            display: flex;
            width: 55px;
            height: 55px;
            align-items: center;
            justify-content: center;

            margin-bottom: 12px;

            border-radius: 50%;

            background: #eff6ff;
            color: #2563eb;

            font-size: 21px;
          }

          .ns-empty-learning h3 {
            margin: 0;

            font-size: 16px;
          }

          .ns-empty-learning p {
            max-width: 450px;

            margin:
              7px 0 15px;

            color: #64748b;

            font-size: 12px;
            line-height: 1.6;
          }

          .ns-empty-learning button {
            display: inline-flex;
            align-items: center;
            gap: 7px;

            padding: 11px 15px;

            border: 0;
            border-radius: 9px;

            background: #2563eb;
            color: #ffffff;

            cursor: pointer;

            font-size: 11px;
            font-weight: 800;
          }

          .ns-dashboard-error {
            margin-bottom: 16px;
            padding: 12px 14px;

            border: 1px solid #fecaca;
            border-radius: 10px;

            background: #fef2f2;
            color: #b91c1c;

            font-size: 12px;
          }

          /* ================================================
             LAPTOP / TABLET
          ================================================= */

          @media (
            max-width: 1180px
          ) {
            .ns-summary-grid,
            .ns-benefit-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );
            }

            .ns-course-access-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );
            }
          }

          @media (
            max-width: 900px
          ) {
            .ns-dashboard-hero {
              align-items:
                flex-start;
              flex-direction:
                column;
            }

            .ns-dashboard-profile {
              width: 100%;
              max-width: 420px;
            }

            .ns-certification-banner {
              grid-template-columns:
                1fr;
            }

            .ns-certification-visual {
              width: 100%;
            }
          }

          /* ================================================
             MOBILE
          ================================================= */

          @media (
            max-width: 640px
          ) {
            .ns-student-dashboard {
              width: 100%;
              max-width: 100vw;
              overflow-x: hidden;
            }

            .ns-dashboard-hero {
              gap: 20px;

              margin-bottom: 15px;
              padding: 20px 16px;

              border-radius: 14px;
            }

            .ns-dashboard-hero h1 {
              font-size: 25px;
            }

            .ns-dashboard-hero-content > p {
              font-size: 13px;
            }

            .ns-dashboard-hero-actions {
              display: grid;
              grid-template-columns:
                1fr;
              width: 100%;
            }

            .ns-dashboard-hero-actions button {
              width: 100%;
            }

            .ns-dashboard-profile {
              max-width: none;
              padding: 13px;
            }

            .ns-dashboard-avatar {
              width: 50px;
              height: 50px;
            }

            .ns-summary-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );

              gap: 9px;

              margin-bottom: 15px;
            }

            .ns-summary-card {
              align-items:
                flex-start;
              flex-direction:
                column;
              gap: 9px;

              padding: 13px;
            }

            .ns-summary-icon {
              width: 38px;
              height: 38px;
              border-radius: 10px;
              font-size: 15px;
            }

            .ns-summary-card strong {
              font-size: 20px;
            }

            .ns-dashboard-section {
              margin-bottom: 15px;
              padding: 16px;

              border-radius: 14px;
            }

            .ns-heading-row {
              align-items:
                flex-start;
              flex-direction:
                column;
              gap: 5px;
            }

            .ns-section-heading h2 {
              font-size: 19px;
            }

            .ns-benefit-grid {
              grid-template-columns:
                1fr;
              gap: 9px;
            }

            .ns-benefit-card {
              padding: 14px;
            }

            .ns-course-card {
              padding: 15px;
            }

            .ns-course-card-top {
              gap: 10px;
            }

            .ns-course-card h3 {
              font-size: 16px;
            }

            .ns-course-percent {
              font-size: 17px;
            }

            .ns-course-access-grid {
              grid-template-columns:
                1fr;
            }

            .ns-exam-status-grid {
              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );
            }

            .ns-course-actions {
              display: grid;
              grid-template-columns:
                1fr;
            }

            .ns-primary-action,
            .ns-secondary-action {
              width: 100%;
            }

            .ns-certification-banner {
              gap: 20px;

              margin-bottom: 15px;
              padding: 20px 16px;

              border-radius: 14px;
            }

            .ns-certification-copy h2 {
              font-size: 24px;
            }

            .ns-certification-benefits {
              grid-template-columns:
                1fr;
            }

            .ns-certification-copy > button {
              width: 100%;
            }

            .ns-dashboard-bottom-grid {
              grid-template-columns:
                1fr;
              gap: 9px;
            }
          }

          /* ================================================
             SMALL MOBILE
          ================================================= */

          @media (
            max-width: 390px
          ) {
            .ns-summary-grid {
              grid-template-columns:
                1fr;
            }

            .ns-dashboard-hero {
              padding:
                18px 14px;
            }

            .ns-dashboard-section {
              padding: 14px;
            }

            .ns-course-card {
              padding: 13px;
            }

            .ns-course-card-top {
              flex-direction:
                column;
            }

            .ns-course-percent {
              align-self:
                flex-start;
            }

            .ns-progress-header {
              flex-direction:
                column;
              gap: 3px;
            }

            .ns-exam-status-grid {
              grid-template-columns:
                1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudentDashboard;