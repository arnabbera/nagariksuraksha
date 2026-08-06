import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaBalanceScale, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#0f172a 0%, #1e3a8a 45%, #2563eb 100%)",
        color: "#fff",
        padding: "90px 20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,.15)",
              padding: "8px 18px",
              borderRadius: "50px",
              marginBottom: "20px",
              fontWeight: 600,
            }}
          >
            ⚖ Legal Consultancy • Legal Learning • Legal Awareness
          </span>

          <h1
            style={{
              fontSize: "58px",
              lineHeight: 1.15,
              marginBottom: "25px",
              fontWeight: 800,
            }}
          >
            Empowering Every Citizen Through
            <br />
            Law & Education
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#dbeafe",
              lineHeight: 1.8,
              marginBottom: "35px",
            }}
          >
            Learn Law. Protect Your Rights.
            <br />
            Get Professional Legal Consultation.
            <br />
            Earn Verified Certifications.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/services"
              style={{
                background: "#fff",
                color: "#1e3a8a",
                padding: "15px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Get Legal Consultation
              <FaArrowRight />
            </Link>

            <Link
              to="/learning"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "15px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Start LL.B Learning
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "45px",
              marginTop: "55px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "34px",
                }}
              >
                1000+
              </h2>

              <small>Students</small>
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "34px",
                }}
              >
                500+
              </h2>

              <small>Legal Articles</small>
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "34px",
                }}
              >
                50+
              </h2>

              <small>Courses</small>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.08)",
              borderRadius: "25px",
              padding: "45px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,.15)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "25px",
              }}
            >
              {[
                {
                  icon: <FaBalanceScale size={45} />,
                  title: "Legal Services",
                },
                {
                  icon: <FaGraduationCap size={45} />,
                  title: "LL.B Learning",
                },
                {
                  icon: <FaBookOpen size={45} />,
                  title: "Legal Resources",
                },
                {
                  icon: "🏆",
                  title: "Certification",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,.08)",
                    padding: "30px",
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "18px",
                      color: "#FFD700",
                      fontSize: "40px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "35px",
                background: "#fff",
                color: "#1e3a8a",
                padding: "20px",
                borderRadius: "18px",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              🎓 Student Login → Auto Enrollment ID Generation
              <br />
              Example: <strong>NS-05082026-000001</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;