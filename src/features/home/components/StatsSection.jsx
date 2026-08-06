import { FaUsers, FaBookOpen, FaGraduationCap, FaBalanceScale } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={38} />,
    value: "1000+",
    label: "Registered Students",
  },
  {
    icon: <FaBookOpen size={38} />,
    value: "500+",
    label: "Legal Articles",
  },
  {
    icon: <FaGraduationCap size={38} />,
    value: "100+",
    label: "Video Lessons",
  },
  {
    icon: <FaBalanceScale size={38} />,
    value: "20+",
    label: "Practice Areas",
  },
];

const StatsSection = () => {
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
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
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
          Our mission is to make legal knowledge accessible, affordable and
          practical for every citizen.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "30px",
          }}
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
                {item.value}
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