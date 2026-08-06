import {
  FaBalanceScale,
  FaGraduationCap,
  FaUserShield,
  FaBookOpen,
  FaCertificate,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBalanceScale size={34} />,
    title: "Expert Legal Guidance",
    description:
      "Professional legal consultation from experienced advocates across multiple practice areas.",
  },
  {
    icon: <FaGraduationCap size={34} />,
    title: "Structured LL.B Learning",
    description:
      "Well-organized study materials, video lectures, quizzes and certification.",
  },
  {
    icon: <FaBookOpen size={34} />,
    title: "Practical Knowledge",
    description:
      "Real-life case studies, important judgments and practical legal drafting.",
  },
  {
    icon: <FaCertificate size={34} />,
    title: "Certification Programs",
    description:
      "Earn certificates after successfully completing learning modules and assessments.",
  },
  {
    icon: <FaUserShield size={34} />,
    title: "Secure Student Portal",
    description:
      "Personal dashboard with enrollment ID, progress tracking and login history.",
  },
  {
    icon: <FaHeadset size={34} />,
    title: "Continuous Support",
    description:
      "Get assistance whenever you need help with legal concepts or platform services.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#ffffff",
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
            Why Choose NagarikSuraksha?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "auto",
              color: "#64748b",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            We combine legal consultancy, legal education and technology to
            create one complete platform for citizens, law students and legal
            professionals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                gap: "20px",
                padding: "30px",
                background: "#f8fafc",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  minWidth: "70px",
                  width: "70px",
                  height: "70px",
                  background: "#dbeafe",
                  color: "#2563eb",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  style={{
                    marginBottom: "12px",
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;