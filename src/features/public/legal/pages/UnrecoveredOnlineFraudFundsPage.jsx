import {
  FaArrowLeft,
  FaBalanceScale,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFileInvoice,
  FaGavel,
  FaLandmark,
  FaPhoneAlt,
  FaShieldAlt,
  FaUniversity,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import LegalUpdateShare from "../components/LegalUpdateShare";

const steps = [
  {
    icon: FaShieldAlt,
    title: "Check the complaint and frozen-fund status",
    text: "Track the complaint with the NCRP acknowledgement number and contact the investigating officer or cybercrime police station. Ask which beneficiary accounts were traced, whether any amount is on hold, and what document or court direction is required for restoration.",
  },
  {
    icon: FaUniversity,
    title: "Use the Money Restoration Module when eligible",
    text: "The official MRM portal permits an eligible complainant to raise a refund request using the 14-digit NCRP acknowledgement ID and OTP verification. Eligibility generally depends on money having been placed on hold and the case meeting the applicable restoration workflow; filing a request does not itself guarantee recovery.",
    link: "https://mrm-ncrp.mha.gov.in/",
    linkText: "Open the official MRM portal",
  },
  {
    icon: FaFileInvoice,
    title: "Seek registration and investigation of the FIR",
    text: "An NCRP complaint is not necessarily the same as a registered FIR. If the facts disclose a cognizable offence and no FIR has been registered, give the cybercrime police station or local police a signed written complaint with the transaction trail, NCRP acknowledgement and supporting evidence, and obtain an acknowledgement.",
  },
  {
    icon: FaLandmark,
    title: "Escalate police inaction to the Superintendent of Police",
    text: "If the officer in charge refuses to record information relating to a cognizable offence, Section 173(4) of the Bharatiya Nagarik Suraksha Sanhita, 2023 permits the substance of that information to be sent in writing and by post to the Superintendent of Police. This is the current counterpart of Section 154(3) CrPC.",
  },
  {
    icon: FaGavel,
    title: "Approach the Judicial Magistrate where justified",
    text: "After documenting the police complaint and escalation, legal advice may be taken on an application under Section 175(3) BNSS for a Magistrate-ordered investigation. The Magistrate may require an affidavit and conduct an inquiry considered necessary. This is the current counterpart of Section 156(3) CrPC—not an automatic refund application.",
  },
  {
    icon: FaBalanceScale,
    title: "Pursue bank, Ombudsman or consumer remedies",
    text: "Dispute the transaction with the bank or regulated entity in writing and use its grievance escalation process. If there is no timely satisfactory resolution, an eligible deficiency-of-service complaint may be made through RBI's Complaint Management System. A Consumer Commission claim may be considered where a bank, payment provider or platform independently committed a legally provable deficiency or unfair practice; the fraud alone does not make that intermediary liable.",
  },
];

const evidence = [
  "NCRP acknowledgement and 1930 call details",
  "Bank complaint numbers and written replies",
  "Account statements, UTR/reference numbers and beneficiary details",
  "Screenshots, URLs, phone numbers, email headers and chat history",
  "Advertisements, invoices, contracts and platform communications",
  "Police acknowledgements, FIR copy and investigating-officer details",
];

export default function UnrecoveredOnlineFraudFundsPage() {
  return (
    <>
      <SEO
        title="Next Steps for Unrecovered Online Fraud Funds"
        description="Legal and practical options in India when money lost to an online financial fraud remains unrecovered after a cybercrime complaint."
        canonical="/legal-updates/next-steps-unrecovered-online-fraud-funds"
        image="/images/legal-updates/unrecovered-online-fraud-funds.jpg"
        keywords={["online fraud money recovery India", "cybercrime complaint follow up", "Money Restoration Module", "BNSS cyber fraud FIR", "RBI Ombudsman fraud complaint"]}
      />

      <Header />

      <main className="ns-fraud-page">
        <section className="ns-fraud-hero">
          <div className="ns-fraud-wrap ns-fraud-hero-grid">
            <div>
              <Link to="/#legal-updates" className="ns-fraud-back"><FaArrowLeft /> Legal Updates</Link>
              <span className="ns-fraud-eyebrow"><FaShieldAlt /> Citizen Cyber-Fraud Guidance</span>
              <h1>Next Steps for Unrecovered Online Fraud Funds</h1>
              <p>If money has not returned after a cybercrime complaint, the matter is not necessarily over. A nagarik can follow the frozen funds, seek proper criminal investigation, pursue the bank's grievance route and consider regulatory or consumer remedies where the facts support them.</p>
            </div>
            <img src="/images/legal-updates/unrecovered-online-fraud-funds.jpg" alt="Legal options for unrecovered online financial fraud funds" />
          </div>
        </section>

        <article className="ns-fraud-wrap ns-fraud-article">
          <LegalUpdateShare
            canonicalPath="/legal-updates/next-steps-unrecovered-online-fraud-funds"
            shareVersion="unrecovered-fraud-funds-card-v1"
            message="Know the next legal steps when online fraud funds remain unrecovered."
          />
          <section className="ns-fraud-alert">
            <FaPhoneAlt />
            <div>
              <h2>Act immediately when fraud is discovered</h2>
              <p>Call <strong>1930</strong>, report the transaction at the National Cyber Crime Reporting Portal and notify the bank or payment provider through its official fraud channel. Speed matters because the reporting system is designed to trace and place suspect funds on hold before they move further.</p>
              <div className="ns-fraud-links">
                <a href="https://cybercrime.gov.in/" target="_blank" rel="noreferrer">National Cyber Crime Reporting Portal <FaExternalLinkAlt /></a>
                <a href="https://i4c.mha.gov.in/ncrp.aspx" target="_blank" rel="noreferrer">Official I4C guidance <FaExternalLinkAlt /></a>
              </div>
            </div>
          </section>

          <section className="ns-fraud-section">
            <span className="ns-fraud-label">After the Initial Complaint</span>
            <h2>Six Routes a Citizen Can Consider</h2>
            <p className="ns-fraud-lead">These routes serve different purposes. Criminal investigation traces offenders; MRM concerns eligible held funds; RBI and consumer remedies examine service deficiency. One route does not automatically replace another.</p>
            <div className="ns-fraud-steps">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <section key={step.title} className="ns-fraud-step">
                    <div className="ns-fraud-step-icon"><Icon /></div>
                    <div>
                      <span>Step {index + 1}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                      {step.link && <a href={step.link} target="_blank" rel="noreferrer">{step.linkText} <FaExternalLinkAlt /></a>}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="ns-fraud-grid">
            <div>
              <span className="ns-fraud-label">Build the Record</span>
              <h2>Evidence to Preserve</h2>
              <div className="ns-fraud-evidence">
                {evidence.map((item) => <div key={item}><FaCheckCircle />{item}</div>)}
              </div>
            </div>
            <aside>
              <h2>Bank liability is fact-specific</h2>
              <p>Whether a bank must reimburse depends on matters such as whether the transaction was authorised, how credentials were obtained, whether the bank or customer was negligent, how quickly the incident was reported and the RBI rules applicable to the regulated entity.</p>
              <p>Ask the bank for a reasoned written decision, its customer-protection policy and the evidence relied upon. Do not treat a police closure or inability to trace the fraudster as automatically deciding a separate deficiency-of-service complaint.</p>
              <a href="https://cms.rbi.org.in/" target="_blank" rel="noreferrer">RBI Complaint Management System <FaExternalLinkAlt /></a>
            </aside>
          </section>

          <section className="ns-fraud-section ns-fraud-mrm">
            <span className="ns-fraud-label">Money Restoration Module</span>
            <h2>What the MRM Process Does</h2>
            <ol>
              <li>Open the official MRM portal and select <strong>Raise Refund Request</strong>.</li>
              <li>Enter the 14-digit NCRP acknowledgement ID and verify the registered mobile number by OTP.</li>
              <li>Review the complaint and held-fund information shown for an eligible case.</li>
              <li>Submit the requested particulars and follow the status or instructions generated by the portal and investigating agency.</li>
            </ol>
            <p>The existence of frozen funds improves the possibility of restoration but does not amount to an immediate or guaranteed refund. Follow only official portals and never pay an agent who promises recovery.</p>
          </section>

          <section className="ns-fraud-sources">
            <h2>Official Legal and Regulatory Sources</h2>
            <div>
              <a href="https://i4c.mha.gov.in/theme/resources/SOP_Layout_04_with%20Cover%20and%20back.pdf" target="_blank" rel="noreferrer">I4C SOP for CFCFRMS fund hold and restoration <FaExternalLinkAlt /></a>
              <a href="https://www.indiacode.nic.in/bitstream/123456789/20099/1/a2023-46.pdf" target="_blank" rel="noreferrer">Bharatiya Nagarik Suraksha Sanhita, 2023 <FaExternalLinkAlt /></a>
              <a href="https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3407" target="_blank" rel="noreferrer">RBI Integrated Ombudsman Scheme, 2026 FAQ <FaExternalLinkAlt /></a>
              <a href="https://www.rbi.org.in/commonman/english/scripts/Notification.aspx?Id=2336" target="_blank" rel="noreferrer">RBI customer-liability guidance <FaExternalLinkAlt /></a>
            </div>
          </section>

          <p className="ns-fraud-disclaimer">This article provides general legal information, not a promise of recovery or legal advice. The proper remedy depends on the transaction, evidence, territorial jurisdiction, limitation, police action and the conduct of each intermediary. Consider advice from a qualified advocate for court proceedings.</p>
        </article>
      </main>

      <Footer />

      <style>{`
        .ns-fraud-page, .ns-fraud-page * { box-sizing: border-box; }
        .ns-fraud-page { color: #17243a; background: #f6f8fb; }
        .ns-fraud-wrap { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }
        .ns-fraud-hero { padding: 72px 0; color: #fff; background: radial-gradient(circle at 82% 16%, #205a8a 0, transparent 34%), linear-gradient(135deg, #06182d, #0a2d4d); }
        .ns-fraud-hero-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(390px, 1.1fr); gap: 42px; align-items: center; }
        .ns-fraud-hero-grid img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border: 1px solid rgba(220, 166, 68, .6); border-radius: 18px; box-shadow: 0 22px 55px rgba(0,0,0,.34); }
        .ns-fraud-back, .ns-fraud-eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .ns-fraud-back { margin-bottom: 28px; color: #dce9f4; font-weight: 750; text-decoration: none; }
        .ns-fraud-eyebrow, .ns-fraud-label { color: #dda640; font-size: .78rem; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
        .ns-fraud-hero h1 { margin: 14px 0; font-size: clamp(2.15rem, 4.5vw, 3.75rem); line-height: 1.08; }
        .ns-fraud-hero p { margin: 0; color: #dbe6ef; font-size: 1.05rem; line-height: 1.75; }
        .ns-fraud-article { padding: 58px 0 76px; }
        .ns-fraud-alert { display: flex; gap: 22px; padding: 28px; border: 1px solid #dfb76b; border-radius: 17px; background: #fff8e9; }
        .ns-fraud-alert > svg { flex: 0 0 auto; margin-top: 5px; color: #a66510; font-size: 1.7rem; }
        .ns-fraud-alert h2, .ns-fraud-section h2, .ns-fraud-grid h2, .ns-fraud-sources h2 { margin: 0 0 13px; color: #0b203a; font-size: clamp(1.55rem, 3vw, 2.25rem); }
        .ns-fraud-alert p, .ns-fraud-lead, .ns-fraud-step p, .ns-fraud-grid p, .ns-fraud-mrm li, .ns-fraud-mrm > p { color: #52647a; line-height: 1.75; }
        .ns-fraud-links, .ns-fraud-sources > div { display: flex; flex-wrap: wrap; gap: 12px 22px; }
        .ns-fraud-alert a, .ns-fraud-step a, .ns-fraud-grid a, .ns-fraud-sources a { display: inline-flex; align-items: center; gap: 7px; color: #1658b7; font-weight: 750; text-decoration: none; }
        .ns-fraud-section { margin-top: 58px; }
        .ns-fraud-section > h2 { margin-top: 8px; }
        .ns-fraud-lead { max-width: 900px; }
        .ns-fraud-steps { display: grid; gap: 18px; margin-top: 26px; }
        .ns-fraud-step { display: grid; grid-template-columns: 58px 1fr; gap: 19px; padding: 25px; border: 1px solid #dae4ef; border-radius: 15px; background: #fff; box-shadow: 0 8px 22px rgba(10,35,62,.05); }
        .ns-fraud-step-icon { display: grid; width: 50px; height: 50px; place-items: center; border-radius: 50%; color: #fff; background: #0c355b; font-size: 1.2rem; }
        .ns-fraud-step span { color: #a66917; font-size: .75rem; font-weight: 850; text-transform: uppercase; }
        .ns-fraud-step h3 { margin: 5px 0 8px; color: #102a47; font-size: 1.22rem; }
        .ns-fraud-step p { margin: 0 0 8px; }
        .ns-fraud-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 28px; margin-top: 58px; }
        .ns-fraud-grid h2 { margin-top: 8px; }
        .ns-fraud-evidence { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .ns-fraud-evidence div { display: flex; gap: 10px; padding: 17px; border: 1px solid #dce5ef; border-radius: 12px; background: #fff; line-height: 1.5; }
        .ns-fraud-evidence svg { flex: 0 0 auto; margin-top: 4px; color: #b5771d; }
        .ns-fraud-grid aside { padding: 27px; border-radius: 16px; color: #fff; background: #092743; }
        .ns-fraud-grid aside h2 { color: #fff; }
        .ns-fraud-grid aside p { color: #dce7f1; }
        .ns-fraud-grid aside a { color: #f0b750; }
        .ns-fraud-mrm { padding: 30px; border-radius: 17px; background: #eaf2fa; }
        .ns-fraud-mrm ol { padding-left: 22px; }
        .ns-fraud-mrm li { margin-bottom: 10px; }
        .ns-fraud-sources { margin-top: 40px; padding: 27px; border: 1px solid #dbe5ef; border-radius: 16px; background: #fff; }
        .ns-fraud-sources h2 { font-size: 1.4rem; }
        .ns-fraud-sources a { font-size: .93rem; }
        .ns-fraud-disclaimer { margin: 28px 0 0; padding: 18px 20px; border-left: 4px solid #d9a243; color: #627286; background: #edf2f7; line-height: 1.65; }
        @media (max-width: 780px) {
          .ns-fraud-wrap { width: min(100% - 28px, 1100px); }
          .ns-fraud-hero { padding: 52px 0; }
          .ns-fraud-hero-grid, .ns-fraud-grid { grid-template-columns: 1fr; }
          .ns-fraud-evidence { grid-template-columns: 1fr; }
          .ns-fraud-step { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
