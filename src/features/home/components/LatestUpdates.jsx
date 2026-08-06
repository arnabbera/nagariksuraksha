import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const updates = [
  {
    id: 1,
    category: "Supreme Court",
    title: "Important Judgement on Consumer Rights",
    date: "05 Aug 2026",
    description:
      "Read the latest Supreme Court judgement strengthening consumer protection and compensation rights.",
  },
  {
    id: 2,
    category: "Property Law",
    title: "Property Registration Process Simplified",
    date: "03 Aug 2026",
    description:
      "Step-by-step guide for property verification, registration, mutation and title search.",
  },
  {
    id: 3,
    category: "Cyber Law",
    title: "How to Report Online Financial Fraud",
    date: "01 Aug 2026",
    description:
      "Know the legal process for reporting cyber fraud, digital payment scams and online cheating.",
  },
];

const LatestUpdates = () => {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "42px",
                color: "#0f172a",
                marginBottom: "10px",
              }}
            >
              Latest Legal Updates
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "18px",
                margin: 0,
              }}
            >
              Stay updated with important legal news and landmark judgments.
            </p>
          </div>

          <Link
            to="/legal-updates"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            View All
            <FaArrowRight />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {updates.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#f8fafc",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,.06)",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg,#1d4ed8,#2563eb,#0f172a)",
                }}
              />

              <div
                style={{
                  padding: "28px",
                }}
              >
                <span
                  style={{
                    background: "#dbeafe",
                    color: "#2563eb",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {item.category}
                </span>

                <h3
                  style={{
                    marginTop: "18px",
                    color: "#0f172a",
                    lineHeight: "1.5",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#64748b",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                >
                  <FaCalendarAlt />
                  {item.date}
                </div>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.8",
                    marginBottom: "25px",
                  }}
                >
                  {item.description}
                </p>

                <Link
                  to="/legal-updates"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;