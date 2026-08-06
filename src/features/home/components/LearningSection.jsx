import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaGraduationCap,
  FaFilePdf,
  FaArrowRight,
} from "react-icons/fa";

const courses = [
  {
    title: "LL.B Learning",
    icon: <FaBookOpen size={42} />,
    description:
      "Comprehensive LL.B learning portal with notes, videos, quizzes and progress tracking.",
    button: "Start Learning",
    link: "/learning",
    color: "#2563eb",
  },
  {
    title: "Certification",
    icon: <FaGraduationCap size={42} />,
    description:
      "Complete assessments and earn professional digital certificates after successful completion.",
    button: "Get Certified",
    link: "/certification",
    color: "#16a34a",
  },
  {
    title: "Free Legal Resources",
    icon: <FaFilePdf size={42} />,
    description:
      "Access free Bare Acts, important judgments, legal articles and study materials.",
    button: "Explore Resources",
    link: "/resources",
    color: "#ea580c",
  },
];

const LearningSection = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#0f172a",
              marginBottom: "15px",
            }}
          >
            Legal Learning Platform
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "auto",
              color: "#64748b",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Learn law through structured courses, professional certification and
            free legal resources designed for students and citizens.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.title}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                borderTop: `5px solid ${course.color}`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: `${course.color}15`,
                  color: course.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                {course.icon}
              </div>

              <h3
                style={{
                  color: "#0f172a",
                  marginBottom: "18px",
                  fontSize: "28px",
                }}
              >
                {course.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  flex: 1,
                }}
              >
                {course.description}
              </p>

              <Link
                to={course.link}
                style={{
                  background: course.color,
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 600,
                  width: "fit-content",
                }}
              >
                {course.button}
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;