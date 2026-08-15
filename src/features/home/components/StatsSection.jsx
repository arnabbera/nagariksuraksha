import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaCertificate,
  FaListOl,
  FaUsers,
} from "react-icons/fa";

import { getHomepageStatistics } from "../../../services/homepageStatsService";

const initialStatistics = {
  students: null,
  courses: null,
  chapters: null,
  certifications: null,
};

const formatCount = (value, loading) => {
  if (loading) return "…";
  return Number.isFinite(value) ? value.toLocaleString("en-IN") : "—";
};

const StatsSection = () => {
  const [statistics, setStatistics] = useState(initialStatistics);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getHomepageStatistics()
      .then((result) => {
        if (active) setStatistics(result);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const stats = [
    {
      icon: <FaUsers size={38} />,
      value: statistics.students,
      label: "Registered Students",
    },
    {
      icon: <FaBookOpen size={38} />,
      value: statistics.courses,
      label: "Courses",
    },
    {
      icon: <FaListOl size={38} />,
      value: statistics.chapters,
      label: "Chapters",
    },
    {
      icon: <FaCertificate size={38} />,
      value: statistics.certifications,
      label: "Certifications",
    },
  ];

  return (
    <section
      style={{
        background: "#0f172a",
        color: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
          NagarikSuraksha in Numbers
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Live figures from the NagarikSuraksha learning platform.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "30px",
          }}
          aria-busy={loading}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                background: "#1e293b",
                padding: "40px 25px",
                borderRadius: "18px",
                border: "1px solid #334155",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              <h2
                style={{
                  fontSize: "46px",
                  margin: "0 0 10px",
                  color: "#ffffff",
                }}
              >
                {formatCount(item.value, loading)}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  fontSize: "18px",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
