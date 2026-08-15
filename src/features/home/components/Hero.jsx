import {
  FaArrowRight,
  FaBalanceScale,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      icon: <FaBalanceScale />,
      title: "Legal Services",
    },
    {
      icon: <FaGraduationCap />,
      title: "LL.B Learning",
    },
    {
      icon: <FaBookOpen />,
      title: "Legal Resources",
    },
    {
      icon: "🏆",
      title: "Certification",
    },
  ];

  return (
    <section className="ns-hero">
      <div className="ns-hero-container">
        {/* LEFT */}

        <motion.div
          className="ns-hero-content"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="ns-hero-badge">
            ⚖ Legal Consultancy • Legal Learning • Legal Awareness
          </div>

          <h1>
            Empowering Every Citizen
            Through{" "}
            <span>
              Law & Education
            </span>
          </h1>

          <p className="ns-hero-description">
            Learn Law. Protect Your Rights.
            <br />
            Get Professional Legal
            Consultation.
            <br />
            Earn Verified Certifications.
          </p>

          <div className="ns-hero-actions">
            <Link
              to="/#legal-consultation"
              className="ns-hero-primary"
            >
              Free Legal Consultation
              <FaArrowRight />
            </Link>

            <Link
              to="/llb-courses"
              className="ns-hero-secondary"
            >
              Start Free LL.B Learning
              <FaArrowRight />
            </Link>
          </div>

          <div className="ns-hero-stats">
            <div>
              <strong>1000+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>
                Legal Articles
              </span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Courses</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="ns-hero-panel"
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="ns-hero-feature-grid">
            {features.map(
              (item) => (
                <div
                  key={item.title}
                  className="ns-hero-feature"
                >
                  <div className="ns-hero-feature-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>
                </div>
              ),
            )}
          </div>

          <div className="ns-hero-enrollment">
            <strong>
              🎓 Student Login
            </strong>

            <span>
              Automatic Enrollment ID
              Generation
            </span>

            <small>
              Example:
              NS-05082026-000001
            </small>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          .ns-hero,
          .ns-hero * {
            box-sizing: border-box;
          }

          .ns-hero {
            width: 100%;
            overflow: hidden;

            background:
              linear-gradient(
                135deg,
                #0f172a 0%,
                #1e3a8a 45%,
                #2563eb 100%
              );

            color: #ffffff;

            padding:
              clamp(55px, 7vw, 90px)
              20px;
          }

          .ns-hero-container {
            width: 100%;
            max-width: 1280px;

            margin: 0 auto;

            display: grid;

            grid-template-columns:
              minmax(0, 1.08fr)
              minmax(380px, 0.92fr);

            gap:
              clamp(35px, 5vw, 65px);

            align-items: center;
          }

          .ns-hero-content,
          .ns-hero-panel {
            min-width: 0;
          }

          /* BADGE */

          .ns-hero-badge {
            display: inline-block;

            max-width: 100%;

            margin-bottom: 20px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.14
              );

            border-radius: 999px;

            background:
              rgba(
                255,
                255,
                255,
                0.12
              );

            padding: 9px 17px;

            font-size: 14px;
            font-weight: 600;

            line-height: 1.5;
          }

          /* HEADING */

          .ns-hero h1 {
            max-width: 720px;

            margin:
              0 0 24px;

            font-size:
              clamp(
                40px,
                4.5vw,
                62px
              );

            line-height: 1.08;

            letter-spacing:
              -1.5px;

            font-weight: 800;

            overflow-wrap:
              anywhere;
          }

          .ns-hero h1 span {
            color: #bfdbfe;
          }

          .ns-hero-description {
            margin:
              0 0 32px;

            color: #dbeafe;

            font-size:
              clamp(
                17px,
                1.6vw,
                20px
              );

            line-height: 1.75;
          }

          /* BUTTONS */

          .ns-hero-actions {
            display: flex;
            flex-wrap: wrap;

            gap: 14px;
          }

          .ns-hero-primary,
          .ns-hero-secondary {
            display:
              inline-flex;

            min-height: 52px;

            align-items: center;
            justify-content: center;

            gap: 9px;

            border-radius: 999px;

            padding:
              13px 24px;

            font-size: 15px;
            font-weight: 700;

            line-height: 1.3;

            text-align: center;
            text-decoration: none;

            transition:
              transform .2s ease,
              background .2s ease;
          }

          .ns-hero-primary {
            background: #ffffff;
            color: #1e3a8a;
          }

          .ns-hero-secondary {
            border:
              2px solid #ffffff;

            color: #ffffff;
          }

          .ns-hero-primary:hover,
          .ns-hero-secondary:hover {
            transform:
              translateY(-2px);
          }

          /* STATS */

          .ns-hero-stats {
            display: flex;
            flex-wrap: wrap;

            gap:
              clamp(
                24px,
                4vw,
                45px
              );

            margin-top: 45px;
          }

          .ns-hero-stats > div {
            display: flex;
            flex-direction: column;

            gap: 3px;
          }

          .ns-hero-stats strong {
            color: #ffffff;

            font-size:
              clamp(
                26px,
                3vw,
                34px
              );

            line-height: 1;
          }

          .ns-hero-stats span {
            color: #bfdbfe;

            font-size: 13px;
          }

          /* RIGHT PANEL */

          .ns-hero-panel {
            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.15
              );

            border-radius: 24px;

            background:
              rgba(
                255,
                255,
                255,
                0.08
              );

            padding:
              clamp(
                22px,
                3vw,
                40px
              );

            backdrop-filter:
              blur(10px);
          }

          .ns-hero-feature-grid {
            display: grid;

            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 18px;
          }

          .ns-hero-feature {
            min-width: 0;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );

            border-radius: 17px;

            background:
              rgba(
                255,
                255,
                255,
                0.08
              );

            padding: 25px 15px;

            text-align: center;
          }

          .ns-hero-feature-icon {
            display: flex;

            min-height: 48px;

            align-items: center;
            justify-content: center;

            margin-bottom: 13px;

            color: #facc15;

            font-size: 40px;
          }

          .ns-hero-feature-icon svg {
            width: 42px;
            height: 42px;
          }

          .ns-hero-feature h3 {
            margin: 0;

            font-size: 15px;

            overflow-wrap:
              anywhere;
          }

          /* ENROLLMENT */

          .ns-hero-enrollment {
            display: flex;

            margin-top: 24px;

            flex-direction: column;

            align-items: center;

            gap: 4px;

            border-radius: 15px;

            background: #ffffff;

            color: #1e3a8a;

            padding: 17px;

            text-align: center;
          }

          .ns-hero-enrollment strong {
            font-size: 14px;
          }

          .ns-hero-enrollment span {
            font-size: 12px;
            font-weight: 700;
          }

          .ns-hero-enrollment small {
            max-width: 100%;

            color: #64748b;

            font-size: 10px;

            overflow-wrap:
              anywhere;
          }

          /* TABLET */

          @media (
            max-width: 1000px
          ) {
            .ns-hero-container {
              grid-template-columns:
                1fr;

              max-width: 760px;
            }

            .ns-hero-content {
              text-align: center;
            }

            .ns-hero h1 {
              margin-left: auto;
              margin-right: auto;
            }

            .ns-hero-actions,
            .ns-hero-stats {
              justify-content:
                center;
            }
          }

          /* MOBILE */

          @media (
            max-width: 640px
          ) {
            .ns-hero {
              padding:
                42px 16px
                48px;
            }

            .ns-hero-container {
              gap: 32px;
            }

            .ns-hero-badge {
              margin-bottom:
                17px;

              border-radius:
                14px;

              padding:
                8px 12px;

              font-size: 11px;
            }

            .ns-hero h1 {
              margin-bottom:
                18px;

              font-size:
                clamp(
                  34px,
                  10vw,
                  44px
                );

              line-height: 1.08;

              letter-spacing:
                -1px;
            }

            .ns-hero-description {
              margin-bottom:
                25px;

              font-size: 15px;
              line-height: 1.65;
            }

            .ns-hero-actions {
              flex-direction:
                column;

              gap: 11px;
            }

            .ns-hero-primary,
            .ns-hero-secondary {
              width: 100%;

              min-height: 50px;

              padding:
                12px 15px;

              font-size: 14px;
            }

            .ns-hero-stats {
              display: grid;

              grid-template-columns:
                repeat(
                  3,
                  minmax(0, 1fr)
                );

              gap: 8px;

              margin-top: 34px;
            }

            .ns-hero-stats > div {
              align-items:
                center;

              text-align: center;
            }

            .ns-hero-stats strong {
              font-size: 24px;
            }

            .ns-hero-stats span {
              font-size: 10px;
            }

            .ns-hero-panel {
              border-radius: 18px;

              padding: 15px;
            }

            .ns-hero-feature-grid {
              gap: 10px;
            }

            .ns-hero-feature {
              border-radius: 13px;

              padding:
                19px 8px;
            }

            .ns-hero-feature-icon {
              min-height: 38px;

              margin-bottom: 9px;

              font-size: 31px;
            }

            .ns-hero-feature-icon svg {
              width: 32px;
              height: 32px;
            }

            .ns-hero-feature h3 {
              font-size: 12px;
            }

            .ns-hero-enrollment {
              margin-top: 14px;

              padding: 14px 10px;
            }
          }

          /* VERY SMALL MOBILE */

          @media (
            max-width: 360px
          ) {
            .ns-hero {
              padding-left: 12px;
              padding-right: 12px;
            }

            .ns-hero h1 {
              font-size: 31px;
            }

            .ns-hero-feature-grid {
              grid-template-columns:
                1fr;
            }

            .ns-hero-stats {
              grid-template-columns:
                1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;