import { FaArrowRight } from "react-icons/fa";
import {
  FaBalanceScale,
  FaGavel,
  FaHome,
  FaLaptopCode,
  FaUsers,
  FaUniversity,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Civil Law",
    icon: <FaBalanceScale size={36} />,
    description:
      "Property disputes, injunctions, recovery suits, partition, contracts and civil litigation.",
  },
  {
    title: "Criminal Law",
    icon: <FaGavel size={36} />,
    description:
      "Criminal defence, FIR assistance, anticipatory bail, regular bail and trial matters.",
  },
  {
    title: "Property Law",
    icon: <FaHome size={36} />,
    description:
      "Property verification, registration, mutation, title search and legal due diligence.",
  },
  {
    title: "Cyber Law",
    icon: <FaLaptopCode size={36} />,
    description:
      "Online fraud, cyber crime, social media complaints and digital evidence guidance.",
  },
  {
    title: "Family Law",
    icon: <FaUsers size={36} />,
    description:
      "Divorce, maintenance, child custody, domestic violence and family settlements.",
  },
  {
    title: "Consumer Protection",
    icon: <FaShieldAlt size={36} />,
    description:
      "Consumer complaints, defective products, banking disputes and compensation claims.",
  },
  {
    title: "Banking & SARFAESI",
    icon: <FaUniversity size={36} />,
    description:
      "Home loan disputes, SARFAESI matters, DRT proceedings and banking litigation.",
  },
  {
    title: "Corporate Law",
    icon: <FaBuilding size={36} />,
    description:
      "Business registration, agreements, contracts, compliance and legal advisory.",
  },
];

const ServicesSection = () => {
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
            Our Legal Services
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "#64748b",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Professional legal consultancy and practical solutions across
            multiple areas of law.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "28px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#ffffff",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 10px 30px rgba(0,0,0,.06)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "18px",
                  background: "#dbeafe",
                  color: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "#0f172a",
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                }}
              >
                {service.description}
              </p>

              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#2563eb",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;