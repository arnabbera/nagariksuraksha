import {
  FaBalanceScale,
  FaBookOpen,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";

const pillars = [
  {
    icon: <FaBalanceScale />,
    title: "Legal Awareness",
    description:
      "Clear information that helps citizens understand legal rights, remedies and processes.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Structured Learning",
    description:
      "Organised legal learning resources for students, supported by courses, notes and assessments.",
  },
  {
    icon: <FaHandshake />,
    title: "Practical Guidance",
    description:
      "A practical starting point for identifying documents, next steps and suitable professional support.",
  },
];

const values = [
  {
    icon: <FaBookOpen />,
    title: "Accessible",
    text: "Legal knowledge should be understandable and available to everyone.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Responsible",
    text: "Information is presented carefully, with respect for facts, documents and applicable law.",
  },
  {
    icon: <FaLightbulb />,
    title: "Practical",
    text: "Learning connects legal principles with real situations and useful next steps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about NagarikSuraksha, a platform for legal awareness, structured legal learning and practical guidance."
        canonical="/about"
        keywords={[
          "about NagarikSuraksha",
          "legal learning platform",
          "legal awareness India",
        ]}
      />

      <Header />

      <main className="ns-about-page">
        <section className="ns-about-hero">
          <div className="ns-about-wrap">
            <p className="ns-about-eyebrow">About NagarikSuraksha</p>
            <h1>Making legal knowledge clear, practical and accessible</h1>
            <p className="ns-about-intro">
              NagarikSuraksha brings legal awareness, legal learning and
              practical guidance together on one citizen-focused platform.
            </p>
          </div>
        </section>

        <section className="ns-about-section">
          <div className="ns-about-wrap ns-about-story-grid">
            <div>
              <p className="ns-about-kicker">Our purpose</p>
              <h2>Knowledge is the first step towards protection</h2>
            </div>

            <div className="ns-about-copy">
              <p>
                Legal language and procedures can often feel difficult to
                understand. NagarikSuraksha is being developed to make reliable
                legal information easier to discover, learn and apply.
              </p>
              <p>
                The platform supports citizens seeking general legal awareness,
                students building their understanding of law, and people who
                need a clearer view of the options available for their concerns.
              </p>
            </div>
          </div>
        </section>

        <section className="ns-about-section ns-about-soft">
          <div className="ns-about-wrap">
            <div className="ns-about-heading">
              <p className="ns-about-kicker">What we do</p>
              <h2>One platform, three connected areas</h2>
            </div>

            <div className="ns-about-cards">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="ns-about-card">
                  <div className="ns-about-icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ns-about-section">
          <div className="ns-about-wrap">
            <div className="ns-about-heading">
              <p className="ns-about-kicker">Our approach</p>
              <h2>Built around clarity and trust</h2>
            </div>

            <div className="ns-about-values">
              {values.map((value) => (
                <article key={value.title}>
                  <span>{value.icon}</span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ns-about-cta">
          <div className="ns-about-wrap">
            <div>
              <p className="ns-about-eyebrow">Explore NagarikSuraksha</p>
              <h2>Learn the law. Understand your options.</h2>
            </div>
            <div className="ns-about-actions">
              <Link to="/llb-courses">Explore Courses</Link>
              <Link to="/contact" className="secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Styles />
    </>
  );
}

function Styles() {
  return (
    <style>{`
      .ns-about-page,.ns-about-page *{box-sizing:border-box}
      .ns-about-wrap{width:min(100% - 40px,1180px);margin:0 auto}
      .ns-about-hero{padding:84px 0 92px;background:linear-gradient(135deg,#0f172a 0%,#1e3a8a 68%,#2563eb 100%);color:#fff}
      .ns-about-eyebrow,.ns-about-kicker{margin:0 0 12px;color:#93c5fd;font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
      .ns-about-hero h1{max-width:850px;margin:0;font-size:clamp(38px,6vw,68px);line-height:1.08}
      .ns-about-intro{max-width:760px;margin:24px 0 0;color:#dbeafe;font-size:clamp(17px,2vw,21px);line-height:1.75}
      .ns-about-section{padding:78px 0;background:#fff}
      .ns-about-soft{background:#f8fafc}
      .ns-about-story-grid{display:grid;grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr);gap:70px;align-items:start}
      .ns-about-section h2{margin:0;color:#0f172a;font-size:clamp(30px,4vw,44px);line-height:1.18}
      .ns-about-kicker{color:#2563eb}
      .ns-about-copy p{margin:0 0 18px;color:#475569;font-size:17px;line-height:1.85}
      .ns-about-heading{max-width:700px;margin:0 auto 42px;text-align:center}
      .ns-about-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
      .ns-about-card{padding:30px;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 12px 30px rgba(15,23,42,.06)}
      .ns-about-icon{display:flex;width:62px;height:62px;align-items:center;justify-content:center;margin-bottom:22px;border-radius:16px;background:#dbeafe;color:#2563eb;font-size:27px}
      .ns-about-card h3,.ns-about-values h3{margin:0 0 10px;color:#0f172a;font-size:21px}
      .ns-about-card p,.ns-about-values p{margin:0;color:#64748b;line-height:1.75}
      .ns-about-values{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
      .ns-about-values article{display:flex;gap:16px;padding:24px;border-radius:16px;background:#f8fafc}
      .ns-about-values article>span{display:flex;width:44px;height:44px;flex:none;align-items:center;justify-content:center;border-radius:12px;background:#dbeafe;color:#2563eb;font-size:19px}
      .ns-about-cta{padding:62px 0;background:#1d4ed8;color:#fff}
      .ns-about-cta .ns-about-wrap{display:flex;align-items:center;justify-content:space-between;gap:32px}
      .ns-about-cta h2{margin:0;font-size:clamp(28px,4vw,42px)}
      .ns-about-actions{display:flex;flex-wrap:wrap;gap:12px}
      .ns-about-actions a{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;border:2px solid #fff;border-radius:10px;background:#fff;color:#1d4ed8;text-decoration:none;font-weight:800;white-space:nowrap}
      .ns-about-actions a.secondary{background:transparent;color:#fff}
      @media(max-width:850px){.ns-about-story-grid{grid-template-columns:1fr;gap:24px}.ns-about-cards,.ns-about-values{grid-template-columns:1fr}.ns-about-cta .ns-about-wrap{align-items:flex-start;flex-direction:column}}
      @media(max-width:640px){.ns-about-wrap{width:min(100% - 28px,1180px)}.ns-about-hero{padding:58px 0 64px}.ns-about-section{padding:56px 0}.ns-about-card{padding:24px}.ns-about-values article{padding:20px}.ns-about-cta{padding:48px 0}}
    `}</style>
  );
}
