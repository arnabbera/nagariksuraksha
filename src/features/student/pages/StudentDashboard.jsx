import {
  FaBell,
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaClock,
  FaIdCard,
  FaSignInAlt,
  FaUserGraduate,
} from "react-icons/fa";

import { useAuth } from "../../../hooks/useAuth";
import Card from "../../../shared/components/Card";
import PageHeader from "../../../shared/components/PageHeader";

const StudentDashboard = () => {
  const { profile, firebaseUser } = useAuth();

  const displayName =
    profile?.displayName ||
    firebaseUser?.displayName ||
    "Student";

  const email =
    profile?.email ||
    firebaseUser?.email ||
    "";

  const enrollmentId =
    profile?.enrollmentId || "Not assigned yet";

  const loginCount = Number(profile?.loginCount || 0);

  const lastLogin = profile?.lastLoginAt?.toDate
    ? profile.lastLoginAt.toDate()
    : profile?.lastLoginAt
      ? new Date(profile.lastLoginAt)
      : null;

  const createdAt = profile?.createdAt?.toDate
    ? profile.createdAt.toDate()
    : profile?.createdAt
      ? new Date(profile.createdAt)
      : null;

  const formatDateTime = (date) => {
    if (!date || Number.isNaN(date.getTime())) {
      return "Not available";
    }

    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  const summaryCards = [
    {
      label: "Enrollment ID",
      value: enrollmentId,
      icon: FaIdCard,
      background: "#eff6ff",
      color: "#2563eb",
    },
    {
      label: "Login Count",
      value: loginCount,
      icon: FaSignInAlt,
      background: "#f0fdf4",
      color: "#16a34a",
    },
    {
      label: "Last Login",
      value: formatDateTime(lastLogin),
      icon: FaClock,
      background: "#fff7ed",
      color: "#ea580c",
    },
    {
      label: "Member Since",
      value: formatDateTime(createdAt),
      icon: FaCalendarAlt,
      background: "#faf5ff",
      color: "#9333ea",
    },
  ];

  const courseProgress = [
    {
      id: "legal-awareness",
      title: "Legal Awareness Foundation",
      progress: 0,
      status: "Not started",
    },
    {
      id: "consumer-protection",
      title: "Consumer Protection Law",
      progress: 0,
      status: "Not started",
    },
    {
      id: "constitutional-law",
      title: "Constitutional Law",
      progress: 0,
      status: "Not started",
    },
  ];

  return (
    <div className="ns-student-dashboard">
      <section className="ns-student-welcome">
        <div>
          <p className="ns-student-eyebrow">
            Student Portal
          </p>

          <h1>
            Welcome, {displayName}
          </h1>

          <p>
            Access your courses, track progress and manage
            your NagarikSuraksha learning account.
          </p>
        </div>

        <div className="ns-student-profile-summary">
          <div className="ns-student-avatar">
            {firebaseUser?.photoURL ? (
              <img
                src={firebaseUser.photoURL}
                alt={displayName}
                referrerPolicy="no-referrer"
              />
            ) : (
              <FaUserGraduate />
            )}
          </div>

          <div>
            <strong>{displayName}</strong>
            <span>{email}</span>
          </div>
        </div>
      </section>

      <PageHeader
        title="My Dashboard"
        description="View your account details, learning progress, notifications and certificates."
        breadcrumbs={["Student", "Dashboard"]}
      />

      <section className="ns-student-summary-grid">
        {summaryCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.label}
              padding="22px"
            >
              <div className="ns-student-summary-card">
                <div>
                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                </div>

                <div
                  className="ns-student-summary-icon"
                  style={{
                    background: item.background,
                    color: item.color,
                  }}
                >
                  <Icon />
                </div>
              </div>
            </Card>
          );
        })}
      </section>

      <section className="ns-student-main-grid">
        <Card
          title="Continue Learning"
          subtitle="Your enrolled courses and current progress"
        >
          <div className="ns-course-progress-list">
            {courseProgress.map((course) => (
              <article
                key={course.id}
                className="ns-course-progress-item"
              >
                <div className="ns-course-progress-header">
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.status}</p>
                  </div>

                  <strong>
                    {course.progress}%
                  </strong>
                </div>

                <div className="ns-progress-track">
                  <div
                    className="ns-progress-fill"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>

                <button
                  type="button"
                  className="ns-course-button"
                >
                  <FaBookOpen />
                  Open Course
                </button>
              </article>
            ))}
          </div>
        </Card>

        <div className="ns-student-side-column">
          <Card
            title="Notifications"
            subtitle="Latest account and learning updates"
          >
            <div className="ns-student-empty-box">
              <FaBell />
              <h3>No notifications</h3>
              <p>
                New announcements and course updates will
                appear here.
              </p>
            </div>
          </Card>

          <Card
            title="Certificates"
            subtitle="Your earned course certificates"
          >
            <div className="ns-student-empty-box">
              <FaCertificate />
              <h3>No certificates yet</h3>
              <p>
                Certificates will appear after successful
                course completion.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <style>
        {`
          .ns-student-dashboard {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .ns-student-welcome {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            border-radius: 24px;
            background:
              linear-gradient(
                135deg,
                #1d4ed8 0%,
                #2563eb 55%,
                #0ea5e9 100%
              );
            color: #ffffff;
            padding: 30px;
            box-shadow:
              0 20px 50px rgba(37, 99, 235, 0.2);
          }

          .ns-student-eyebrow {
            margin: 0 0 8px;
            color: #dbeafe;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .ns-student-welcome h1 {
            margin: 0;
            font-size: 32px;
            line-height: 1.2;
          }

          .ns-student-welcome p {
            max-width: 680px;
            margin: 12px 0 0;
            color: #dbeafe;
            line-height: 1.7;
          }

          .ns-student-profile-summary {
            display: flex;
            min-width: 260px;
            align-items: center;
            gap: 14px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.12);
            padding: 14px 16px;
            backdrop-filter: blur(10px);
          }

          .ns-student-avatar {
            display: flex;
            width: 52px;
            height: 52px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.18);
            font-size: 22px;
          }

          .ns-student-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ns-student-profile-summary strong,
          .ns-student-profile-summary span {
            display: block;
          }

          .ns-student-profile-summary strong {
            font-size: 15px;
          }

          .ns-student-profile-summary span {
            max-width: 190px;
            margin-top: 4px;
            overflow: hidden;
            color: #dbeafe;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-student-summary-grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .ns-student-summary-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }

          .ns-student-summary-card p {
            margin: 0;
            color: #64748b;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-student-summary-card h3 {
            margin: 12px 0 0;
            color: #0f172a;
            font-size: 20px;
            line-height: 1.35;
          }

          .ns-student-summary-icon {
            display: flex;
            width: 52px;
            height: 52px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            font-size: 21px;
          }

          .ns-student-main-grid {
            display: grid;
            grid-template-columns:
              minmax(0, 1.6fr) minmax(300px, 0.8fr);
            gap: 20px;
          }

          .ns-student-side-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .ns-course-progress-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .ns-course-progress-item {
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #ffffff;
            padding: 18px;
          }

          .ns-course-progress-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
          }

          .ns-course-progress-header h3 {
            margin: 0;
            color: #0f172a;
            font-size: 16px;
          }

          .ns-course-progress-header p {
            margin: 6px 0 0;
            color: #64748b;
            font-size: 13px;
          }

          .ns-course-progress-header strong {
            color: #2563eb;
            font-size: 18px;
          }

          .ns-progress-track {
            height: 9px;
            margin-top: 16px;
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
                #0ea5e9
              );
            transition: width 0.3s ease;
          }

          .ns-course-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
            border: none;
            border-radius: 10px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
            padding: 10px 14px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-course-button:hover {
            background: #dbeafe;
          }

          .ns-student-empty-box {
            display: flex;
            min-height: 190px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .ns-student-empty-box svg {
            color: #93c5fd;
            font-size: 34px;
          }

          .ns-student-empty-box h3 {
            margin: 14px 0 0;
            color: #0f172a;
            font-size: 17px;
          }

          .ns-student-empty-box p {
            margin: 8px 0 0;
            color: #64748b;
            font-size: 13px;
            line-height: 1.6;
          }

          @media (max-width: 1200px) {
            .ns-student-summary-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 900px) {
            .ns-student-welcome {
              align-items: flex-start;
              flex-direction: column;
            }

            .ns-student-profile-summary {
              width: 100%;
            }

            .ns-student-main-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .ns-student-welcome {
              padding: 22px;
            }

            .ns-student-welcome h1 {
              font-size: 25px;
            }

            .ns-student-summary-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default StudentDashboard;