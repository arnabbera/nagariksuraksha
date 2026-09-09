import {
  FaArrowLeft,
  FaBalanceScale,
  FaBookOpen,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGavel,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import LegalUpdateShare from "../components/LegalUpdateShare";

const judgments = [
  {
    name: "Indian Medical Association v. V.P. Shantha",
    citation: "(1995) 6 SCC 651",
    principle: "Paid medical treatment is a consumer service",
    details: [
      "The Supreme Court held that medical practitioners, nursing homes and hospitals ordinarily provide a ‘service’ when treatment is supplied for consideration.",
      "A service rendered entirely free of charge to every patient is generally outside consumer jurisdiction. Where a hospital charges some patients while treating others without charge, beneficiaries of the free treatment may also remain covered because the service is supported by the paying category.",
      "The judgment opened an accessible consumer-law remedy for proven deficiency in paid medical services, while preserving the need to establish negligence through the applicable standard of care.",
    ],
    source: "https://indiankanoon.org/doc/723973/",
  },
  {
    name: "Laxmi Engineering Works v. P.S.G. Industrial Institute",
    citation: "(1995) 3 SCC 583",
    principle: "Meaning of ‘commercial purpose’ and the livelihood exception",
    details: [
      "The Court explained that a person buying goods for resale or a large commercial activity is not ordinarily a consumer.",
      "A purchase made exclusively to earn one’s livelihood through self-employment can fall within the statutory exception. The inquiry is fact-specific and considers the scale, purpose and manner in which the goods are used.",
      "On the facts, the purchaser’s industrial activity was treated as commercial; the ruling nevertheless became the leading authority protecting genuine small self-employment purchases.",
    ],
    source: "https://indiankanoon.org/doc/501668/",
  },
  {
    name: "Ireo Grace Realtech Pvt. Ltd. v. Abhishek Khanna",
    citation: "(2021) 3 SCC 241",
    principle: "One-sided builder agreements cannot defeat homebuyer rights",
    details: [
      "The Supreme Court held that wholly one-sided and unreasonable clauses in an apartment buyer’s agreement constitute an unfair trade practice and cannot bind a homebuyer merely because the agreement was signed.",
      "A builder responsible for an inordinate delay cannot compel the allottee to accept delayed possession. Depending on the facts, the consumer may seek refund with appropriate interest or possession with compensation.",
      "The decision strengthens scrutiny of unequal contractual terms and affirms that consumer remedies protect homebuyers against delay and deficient housing services.",
    ],
    source: "https://api.sci.gov.in/pdfdate/index1.php?dno=232352019&dt=2021-01-11&filename=supremecourt%2F2019%2F23235%2F23235_2019_38_1501_25365_Judgement_11-Jan-2021.pdf",
  },
  {
    name: "Vodafone Idea Cellular Ltd. v. Ajay Kumar Agarwal",
    citation: "(2022) 6 SCC 496",
    principle: "Consumer forums may decide telecom-service complaints",
    details: [
      "The Supreme Court held that the remedy under consumer legislation is an additional and special remedy for telecom consumers.",
      "The arbitration provision in the Indian Telegraph Act does not bar the jurisdiction of consumer commissions over a complaint alleging deficiency in telecom service.",
      "A consumer therefore does not lose access to the consumer redressal system merely because another statute or contractual mechanism provides a separate route.",
    ],
    source: "https://consumer-voice.org/legal/important-judgments-of-the-year-2022-part-1/",
  },
];

const rights = [
  ["Right to Safety", "Protection against goods and services hazardous to life and property."],
  ["Right to Information", "Accurate information about quality, quantity, potency, purity, standard and price."],
  ["Right to Choose", "Access, wherever possible, to a variety of goods and services at competitive prices."],
  ["Right to be Heard", "Assurance that consumer interests receive due consideration at appropriate forums."],
  ["Right to Seek Redressal", "Remedies against unfair or restrictive trade practices and unscrupulous exploitation."],
  ["Right to Consumer Awareness", "Knowledge and education needed to make informed consumer decisions."],
];

const remedies = [
  "Removal of defects or deficiencies in goods or services",
  "Replacement of defective goods or refund of the price paid",
  "Compensation for loss or injury caused by negligence or deficiency",
  "Discontinuance of unfair trade practices or misleading advertisements",
  "Withdrawal of hazardous goods and corrective advertising where ordered",
  "Reasonable litigation costs and other relief appropriate to the dispute",
];

export default function ConsumerRightsJudgmentsPage() {
  return (
    <>
      <SEO
        title="Important Judgments on Consumer Rights"
        description="Understand consumer rights in India and landmark Supreme Court judgments concerning medical services, commercial purpose, homebuyers and telecom disputes."
        canonical="/legal-updates/important-judgement-on-consumer-rights"
        image="/images/legal-updates/consumer-rights-landmark-judgments.jpg"
        keywords={["consumer rights India", "Consumer Protection Act 2019", "consumer court judgments", "medical negligence consumer law", "homebuyer consumer rights"]}
      />

      <Header />

      <main className="ns-consumer-page">
        <section className="ns-consumer-hero">
          <div className="ns-consumer-wrap">
            <div className="ns-consumer-hero-grid">
              <div>
                <Link to="/#legal-updates" className="ns-consumer-back"><FaArrowLeft /> Legal Updates</Link>
                <span className="ns-consumer-eyebrow"><FaGavel /> Landmark Supreme Court Decisions</span>
                <h1>Important Judgments on Consumer Rights</h1>
                <p>
                  Landmark judgments of the Supreme Court of India have shaped consumer protection by extending effective remedies to areas including medical treatment, housing and telecommunications, while clarifying who qualifies as a consumer.
                </p>
              </div>
              <img src="/images/legal-updates/consumer-rights-landmark-judgments.jpg" alt="Important judgments on consumer rights in India" />
            </div>
          </div>
        </section>

        <article className="ns-consumer-wrap ns-consumer-article">
          <LegalUpdateShare
            canonicalPath="/legal-updates/important-judgement-on-consumer-rights"
            shareVersion="consumer-rights-card-v1"
            message="Understand landmark Supreme Court judgments and consumer rights in India."
          />
          <section className="ns-consumer-intro">
            <div>
              <span className="ns-consumer-label">For Every Nagrik</span>
              <h2>Understanding Your Consumer Rights</h2>
              <p>
                A consumer is generally a person who buys goods or hires or avails services for consideration. Protection can apply to purchases made offline or online, including electronic transactions, direct selling and multi-level marketing. A person obtaining goods for resale or a commercial purpose is ordinarily excluded, subject to the statutory self-employment livelihood exception.
              </p>
              <p>
                Consumer law can be invoked for defective goods, deficient services, unfair contracts, unfair or restrictive trade practices, overcharging, hazardous products and misleading advertisements. The Consumer Protection Act, 2019 also establishes the Central Consumer Protection Authority to protect consumers as a class.
              </p>
            </div>

            <aside>
              <FaShieldAlt />
              <h3>Before You Complain</h3>
              <p>Preserve the invoice, payment proof, warranty, agreement, correspondence, screenshots, photographs and every written complaint made to the seller or service provider.</p>
            </aside>
          </section>

          <section className="ns-consumer-section">
            <span className="ns-consumer-label">CPA 2019</span>
            <h2>Six Core Consumer Rights</h2>
            <div className="ns-rights-grid">
              {rights.map(([title, description]) => (
                <div key={title}><FaCheckCircle /><span><strong>{title}</strong>{description}</span></div>
              ))}
            </div>
            <a className="ns-source-link" href="https://consumeraffairs.gov.in/pages/consumer-rights" target="_blank" rel="noreferrer">Government of India: Consumer Rights <FaExternalLinkAlt /></a>
          </section>

          <section className="ns-consumer-section">
            <span className="ns-consumer-label">Key Authorities</span>
            <h2>Landmark Supreme Court Judgments</h2>
            <div className="ns-judgment-list">
              {judgments.map((judgment, index) => (
                <article key={judgment.name} className="ns-judgment-card">
                  <div className="ns-judgment-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{judgment.name}</h3>
                    <p className="ns-citation">{judgment.citation} · {judgment.principle}</p>
                    {judgment.details.map((detail) => <p key={detail}>{detail}</p>)}
                    <a href={judgment.source} target="_blank" rel="noreferrer">Read source <FaExternalLinkAlt /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="ns-consumer-section ns-remedies">
            <span className="ns-consumer-label">Available Relief</span>
            <h2>What a Consumer May Seek</h2>
            <div className="ns-remedy-grid">
              {remedies.map((remedy) => <div key={remedy}><FaBalanceScale />{remedy}</div>)}
            </div>
          </section>

          <section className="ns-consumer-section ns-action">
            <div>
              <span className="ns-consumer-label">Practical Steps</span>
              <h2>How to Protect Your Claim</h2>
            </div>
            <ol>
              <li><strong>Notify the business:</strong> describe the defect or deficiency and request a specific remedy in writing.</li>
              <li><strong>Organise evidence:</strong> keep invoices, contracts, payment records, messages, expert reports and proof of loss.</li>
              <li><strong>Use consumer assistance:</strong> approach the <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noreferrer">National Consumer Helpline</a> for guidance or pre-litigation support.</li>
              <li><strong>File before the proper commission:</strong> jurisdiction depends on the consideration paid and applicable territorial rules.</li>
              <li><strong>Act within limitation:</strong> Section 69 generally prescribes two years from the cause of action, subject to condonation for sufficient cause.</li>
            </ol>
          </section>

          <section className="ns-consumer-sources">
            <FaBookOpen />
            <div>
              <h2>Primary Legal Material</h2>
              <p>The statutory rights and remedies discussed above should be read with the current Act, rules and the facts of each dispute.</p>
              <a href="https://ncdrc.nic.in/bare_acts/CPA2019.pdf" target="_blank" rel="noreferrer"><FaFileAlt /> Consumer Protection Act, 2019</a>
            </div>
          </section>

          <p className="ns-consumer-disclaimer">
            This article provides general legal education and does not constitute legal advice. Outcomes depend on the facts, evidence, limitation and applicable law in each case.
          </p>
        </article>
      </main>

      <Footer />

      <style>{`
        .ns-consumer-page, .ns-consumer-page * { box-sizing: border-box; }
        .ns-consumer-page { color: #17243a; background: #f7f9fc; }
        .ns-consumer-wrap { width: min(1080px, calc(100% - 40px)); margin: 0 auto; }
        .ns-consumer-hero { padding: 78px 0; color: #fff; background: radial-gradient(circle at 82% 18%, #245e90 0, transparent 34%), linear-gradient(135deg, #06182d, #0b2d4d); }
        .ns-consumer-hero-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(390px, 1.1fr); gap: 42px; align-items: center; }
        .ns-consumer-hero-grid img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border: 1px solid rgba(217, 162, 67, .55); border-radius: 18px; box-shadow: 0 22px 55px rgba(0, 0, 0, .32); }
        .ns-consumer-back, .ns-consumer-eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .ns-consumer-back { margin-bottom: 30px; color: #dbe9f5; font-weight: 700; text-decoration: none; }
        .ns-consumer-eyebrow, .ns-consumer-label { color: #d9a243; font-size: .78rem; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
        .ns-consumer-eyebrow { display: flex; }
        .ns-consumer-hero h1 { max-width: 900px; margin: 14px 0; font-size: clamp(2.25rem, 5vw, 4rem); line-height: 1.08; }
        .ns-consumer-hero p { max-width: 860px; margin: 0; color: #dae6f0; font-size: 1.08rem; line-height: 1.8; }
        .ns-consumer-article { padding: 64px 0 78px; }
        .ns-consumer-section { margin-top: 62px; }
        .ns-consumer-section h2, .ns-consumer-intro h2, .ns-consumer-sources h2 { margin: 8px 0 18px; color: #0b203a; font-size: clamp(1.65rem, 3vw, 2.35rem); }
        .ns-consumer-intro { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, .55fr); gap: 34px; align-items: start; }
        .ns-consumer-intro p, .ns-judgment-card p, .ns-consumer-sources p { color: #52647a; line-height: 1.8; }
        .ns-consumer-intro aside { padding: 25px; border: 1px solid #dfb86d; border-radius: 16px; background: #fff8e9; }
        .ns-consumer-intro aside > svg { color: #a76512; font-size: 1.6rem; }
        .ns-consumer-intro aside h3 { margin: 12px 0 7px; color: #6b430e; }
        .ns-consumer-intro aside p { margin: 0; color: #765c36; }
        .ns-rights-grid, .ns-remedy-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px; }
        .ns-rights-grid > div, .ns-remedy-grid > div { display: flex; align-items: flex-start; gap: 12px; padding: 20px; border: 1px solid #dce5ef; border-radius: 13px; background: #fff; }
        .ns-rights-grid svg, .ns-remedy-grid svg { flex: 0 0 auto; margin-top: 4px; color: #b7781f; }
        .ns-rights-grid strong { display: block; margin-bottom: 5px; color: #132b47; }
        .ns-rights-grid span { color: #5a6c81; line-height: 1.6; }
        .ns-source-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 18px; color: #1757b7; font-weight: 750; text-decoration: none; }
        .ns-judgment-list { display: grid; gap: 20px; }
        .ns-judgment-card { display: grid; grid-template-columns: 56px 1fr; gap: 20px; padding: 28px; border: 1px solid #dce5ef; border-radius: 16px; background: #fff; box-shadow: 0 9px 24px rgba(12, 35, 62, .06); }
        .ns-judgment-number { display: grid; width: 48px; height: 48px; place-items: center; border-radius: 50%; color: #fff; background: #0c355b; font-weight: 850; }
        .ns-judgment-card h3 { margin: 0; color: #0b203a; font-size: 1.28rem; }
        .ns-judgment-card .ns-citation { margin: 7px 0 15px; color: #9a6418; font-weight: 750; }
        .ns-judgment-card p { margin: 9px 0; }
        .ns-judgment-card a { display: inline-flex; align-items: center; gap: 7px; margin-top: 8px; color: #1757b7; font-weight: 750; text-decoration: none; }
        .ns-action { display: grid; grid-template-columns: .6fr 1.4fr; gap: 38px; padding: 34px; border-radius: 18px; color: #fff; background: #092743; }
        .ns-action h2 { color: #fff; }
        .ns-action ol { margin: 0; padding-left: 22px; }
        .ns-action li { margin: 0 0 13px; color: #dce8f2; line-height: 1.65; }
        .ns-action a { color: #f2bd5d; font-weight: 750; }
        .ns-consumer-sources { display: flex; gap: 20px; margin-top: 38px; padding: 28px; border: 1px solid #d7e2ee; border-radius: 16px; background: #fff; }
        .ns-consumer-sources > svg { flex: 0 0 auto; margin-top: 5px; color: #b7781f; font-size: 1.5rem; }
        .ns-consumer-sources h2 { margin-top: 0; font-size: 1.35rem; }
        .ns-consumer-sources a { display: inline-flex; align-items: center; gap: 8px; color: #1757b7; font-weight: 750; text-decoration: none; }
        .ns-consumer-disclaimer { margin: 30px 0 0; padding: 18px 20px; border-left: 4px solid #d9a243; color: #637286; background: #eef3f8; line-height: 1.65; }
        @media (max-width: 760px) {
          .ns-consumer-wrap { width: min(100% - 28px, 1080px); }
          .ns-consumer-hero { padding: 54px 0; }
          .ns-consumer-hero-grid { grid-template-columns: 1fr; }
          .ns-consumer-intro, .ns-action { grid-template-columns: 1fr; }
          .ns-rights-grid, .ns-remedy-grid { grid-template-columns: 1fr; }
          .ns-judgment-card { grid-template-columns: 1fr; padding: 22px; }
        }
      `}</style>
    </>
  );
}
