import {
  FaArrowDown,
  FaArrowLeft,
  FaBalanceScale,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileSignature,
  FaGavel,
  FaSearch,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import LegalUpdateShare from "../components/LegalUpdateShare";

const oldFlow = [
  ["Section 200", "Examination of complainant and witnesses on oath"],
  ["Section 202", "Postponement of process; inquiry or investigation where appropriate"],
  ["Section 203", "Dismissal if there is no sufficient ground for proceeding"],
  ["Section 204", "Issue of summons or warrant when sufficient ground exists"],
];

const newFlow = [
  ["Section 223", "Examination of complainant; new hearing safeguards before cognizance"],
  ["Section 225", "Postponement of process; inquiry or investigation where appropriate"],
  ["Section 226", "Dismissal if there is no sufficient ground for proceeding"],
  ["Section 227", "Issue of process when sufficient ground exists"],
];

export default function Section200CrpcSection223BnssPage() {
  return (
    <>
      <SEO
        title="Section 200 CrPC and Section 223 BNSS Explained"
        description="Understand the private-complaint procedure before a Magistrate, the Section 200 CrPC to Section 223 BNSS transition, accused-hearing proviso and difference from a police-investigation request."
        canonical="/legal-updates/section-200-crpc-section-223-bnss-private-complaint"
        image="/images/legal-updates/section-200-crpc-section-223-bnss.jpg"
        keywords={["Section 200 CrPC", "Section 223 BNSS", "private complaint Magistrate", "Section 175(3) BNSS", "criminal complaint India"]}
      />

      <Header />

      <main className="ns-complaint-page">
        <section className="ns-complaint-hero">
          <div className="ns-complaint-wrap ns-complaint-hero-grid">
            <div>
              <Link to="/#legal-updates" className="ns-complaint-back"><FaArrowLeft /> Legal Updates</Link>
              <span className="ns-complaint-eyebrow"><FaGavel /> Criminal Procedure Explained</span>
              <h1>What Was Section 200 CrPC—and What Is Section 223 BNSS?</h1>
              <p>Both provisions concern a private criminal complaint presented directly before a Magistrate, but the BNSS is not merely a renumbering exercise. It introduces important pre-cognizance hearing safeguards.</p>
            </div>
            <img src="/images/legal-updates/section-200-crpc-section-223-bnss.jpg" alt="Section 200 CrPC to Section 223 BNSS private complaint procedure" />
          </div>
        </section>

        <article className="ns-complaint-wrap ns-complaint-article">
          <LegalUpdateShare
            canonicalPath="/legal-updates/section-200-crpc-section-223-bnss-private-complaint"
            shareVersion="section-200-crpc-section-223-bnss-card-v1"
            message="Understand Section 200 CrPC, its Section 223 BNSS equivalent and the private-complaint procedure before a Magistrate."
          />

          <section className="ns-complaint-intro">
            <div>
              <span className="ns-complaint-label">The Old Provision</span>
              <h2>What did Section 200 CrPC provide?</h2>
              <p>Section 200 of the Code of Criminal Procedure, 1973 governed the Magistrate’s examination of a complainant when taking cognizance of an offence on a complaint. It formed the opening provision of the private-complaint procedure in Chapter XV.</p>
              <p>The Magistrate ordinarily examined the complainant and witnesses present on oath, reduced the substance to writing, and obtained the signatures of the complainant, witnesses and Magistrate.</p>
            </div>
            <aside>
              <FaFileSignature />
              <h3>Statutory exceptions existed</h3>
              <p>The examination could be dispensed with for specified written complaints by a public servant acting in official duties or by a court. Re-examination was also unnecessary in the transfer situation described by the provision.</p>
            </aside>
          </section>

          <section className="ns-complaint-section">
            <span className="ns-complaint-label">Old CrPC Sequence</span>
            <h2>Filing did not automatically produce a summons</h2>
            <p className="ns-complaint-lead">The Magistrate first assessed whether sufficient ground existed to proceed. Depending on the material, the complaint could move through these stages:</p>
            <div className="ns-complaint-flow">
              {oldFlow.map(([section, text], index) => <div key={section}><section><strong>{section} CrPC</strong><span>{text}</span></section>{index < oldFlow.length - 1 && <FaArrowDown />}</div>)}
            </div>
          </section>

          <section className="ns-complaint-section ns-complaint-compare">
            <span className="ns-complaint-label">Frequently Confused Routes</span>
            <h2>Section 156(3) versus Section 200 CrPC</h2>
            <div className="ns-complaint-columns">
              <section>
                <FaSearch />
                <h3>Section 156(3) CrPC</h3>
                <p>Generally invoked at the pre-cognizance stage to request a Magistrate’s direction for police investigation of a cognizable offence.</p>
                <strong>“Please direct the police to investigate.”</strong>
                <small>Broad BNSS counterpart: Section 175(3).</small>
              </section>
              <section>
                <FaGavel />
                <h3>Section 200 CrPC</h3>
                <p>Commenced the private-complaint procedure before the Magistrate, including examination of the complainant and present witnesses.</p>
                <strong>“I bring this complaint before the court.”</strong>
                <small>Broad BNSS counterpart: Section 223.</small>
              </section>
            </div>
            <p className="ns-complaint-caution">The correct route depends on the facts, the evidence already available, and whether police powers such as tracing, seizure or custodial investigation are genuinely required.</p>
          </section>

          <section className="ns-complaint-section ns-complaint-newlaw">
            <div>
              <span className="ns-complaint-label">Current Law</span>
              <h2>Section 223 BNSS: examination of complainant</h2>
              <p>The Bharatiya Nagarik Suraksha Sanhita, 2023 came into force on 1 July 2024. Section 223 broadly succeeds Section 200 CrPC and retains examination on oath, a written record and signatures, subject to statutory exceptions.</p>
              <p>The surrounding new-law sequence should also be cited correctly:</p>
            </div>
            <div className="ns-complaint-mini-flow">
              {newFlow.map(([section, text]) => <div key={section}><strong>{section} BNSS</strong><span>{text}</span></div>)}
            </div>
          </section>

          <section className="ns-complaint-section ns-complaint-change">
            <FaExclamationTriangle />
            <div>
              <span className="ns-complaint-label">Important Procedural Change</span>
              <h2>The accused-hearing proviso</h2>
              <p>The first proviso to Section 223(1) states that a Magistrate shall not take cognizance of an offence on a complaint without giving the accused an opportunity of being heard. This was not part of Section 200 CrPC.</p>
              <p>High Courts have examined the timing and content of this opportunity. Decisions have generally treated it as a pre-cognizance safeguard after examination of the complainant and witnesses, but the precise scope continues to develop. It should not be described casually as a full trial before cognizance.</p>
            </div>
          </section>

          <section className="ns-complaint-section">
            <span className="ns-complaint-label">Public Servants</span>
            <h2>An additional safeguard under Section 223(2)</h2>
            <div className="ns-complaint-public">
              <FaUserShield />
              <p>Where a complaint is made against a public servant for an offence alleged to have occurred in the discharge of official functions or duties, the Magistrate must follow the special statutory conditions: the public servant receives an opportunity to make assertions about the situation, and the Magistrate receives a report containing facts and circumstances from the officer superior to that public servant.</p>
            </div>
          </section>

          <section className="ns-complaint-section ns-complaint-memory">
            <span className="ns-complaint-label">Easy Revision</span>
            <h2>Remember the mapping</h2>
            <div><FaCheckCircle /><p><strong>Old law:</strong> Section 200 CrPC = private complaint and examination by Magistrate.</p></div>
            <div><FaCheckCircle /><p><strong>Current law:</strong> Section 223 BNSS = examination of complainant plus new hearing safeguards.</p></div>
            <div><FaCheckCircle /><p><strong>Investigation request:</strong> Section 156(3) CrPC broadly maps to Section 175(3) BNSS.</p></div>
          </section>

          <section className="ns-complaint-section ns-complaint-savings">
            <FaBalanceScale />
            <div>
              <h2>Which procedural law applies?</h2>
              <p>Do not decide solely from the date of the alleged offence. BNSS Section 531 contains repeal-and-savings rules for pending appeals, applications, trials, inquiries and investigations. The filing date, procedural stage and any applicable judicial direction may matter. Verify whether the matter proceeds under BNSS or remains governed by saved CrPC procedure before citing a section.</p>
            </div>
          </section>

          <section className="ns-complaint-sources">
            <h2>Primary Legal Sources</h2>
            <div>
              <a href="https://www.mha.gov.in/sites/default/files/2024-04/250884_2_english_01042024.pdf" target="_blank" rel="noreferrer">Official BNSS, 2023 text <FaExternalLinkAlt /></a>
              <a href="https://www.indiacode.nic.in/bitstream/123456789/15272/1/the_code_of_criminal_procedure%2C_1973.pdf" target="_blank" rel="noreferrer">Code of Criminal Procedure, 1973 <FaExternalLinkAlt /></a>
            </div>
          </section>

          <p className="ns-complaint-disclaimer">This article is for general legal education and does not constitute legal advice. Private complaints must satisfy jurisdiction, limitation, sanction and substantive-law requirements. Procedure may also vary with the special statute involved and binding decisions of the jurisdictional court.</p>
        </article>
      </main>

      <Footer />

      <style>{`
        .ns-complaint-page,.ns-complaint-page *{box-sizing:border-box}.ns-complaint-page{color:#18263a;background:#f6f8fb}.ns-complaint-wrap{width:min(1100px,calc(100% - 40px));margin:0 auto}.ns-complaint-hero{padding:72px 0;color:#fff;background:radial-gradient(circle at 82% 16%,#245784 0,transparent 34%),linear-gradient(135deg,#06172a,#0b2c4d)}.ns-complaint-hero-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(410px,1.1fr);gap:42px;align-items:center}.ns-complaint-hero img{width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid rgba(221,166,64,.65);border-radius:18px;box-shadow:0 22px 55px rgba(0,0,0,.35)}.ns-complaint-back,.ns-complaint-eyebrow{display:inline-flex;align-items:center;gap:8px}.ns-complaint-back{margin-bottom:28px;color:#dce8f3;font-weight:750;text-decoration:none}.ns-complaint-eyebrow,.ns-complaint-label{color:#e0aa45;font-size:.78rem;font-weight:850;letter-spacing:.1em;text-transform:uppercase}.ns-complaint-hero h1{margin:14px 0;font-size:clamp(2.1rem,4.5vw,3.7rem);line-height:1.08}.ns-complaint-hero p{margin:0;color:#dce7f0;font-size:1.06rem;line-height:1.75}.ns-complaint-article{padding:58px 0 76px}.ns-complaint-intro{display:grid;grid-template-columns:1.4fr .6fr;gap:30px;align-items:start}.ns-complaint-intro h2,.ns-complaint-section h2,.ns-complaint-sources h2{margin:8px 0 16px;color:#0b203a;font-size:clamp(1.6rem,3vw,2.3rem)}.ns-complaint-intro p,.ns-complaint-lead,.ns-complaint-columns p,.ns-complaint-newlaw p,.ns-complaint-change p,.ns-complaint-public p,.ns-complaint-savings p{color:#53677c;line-height:1.78}.ns-complaint-intro aside{padding:25px;border:1px solid #dfb76a;border-radius:16px;background:#fff8e9}.ns-complaint-intro aside>svg{color:#a76812;font-size:1.6rem}.ns-complaint-intro aside h3{margin:12px 0 7px;color:#69440e}.ns-complaint-intro aside p{margin:0;color:#765f39}.ns-complaint-section{margin-top:60px}.ns-complaint-flow{display:grid;gap:5px;max-width:850px;margin:25px auto 0}.ns-complaint-flow>div{display:grid;justify-items:center}.ns-complaint-flow section{display:grid;grid-template-columns:150px 1fr;width:100%;border:1px solid #dbe4ed;border-radius:13px;overflow:hidden;background:#fff}.ns-complaint-flow strong{padding:19px;color:#fff;background:#0b355b}.ns-complaint-flow span{padding:19px;color:#52667a}.ns-complaint-flow svg{margin:7px;color:#c28728}.ns-complaint-compare{padding:32px;border-radius:18px;background:#eaf1f8}.ns-complaint-columns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.ns-complaint-columns section{padding:25px;border-radius:15px;background:#fff}.ns-complaint-columns svg{color:#b5781c;font-size:1.5rem}.ns-complaint-columns h3{margin:12px 0 7px;color:#102b47}.ns-complaint-columns strong,.ns-complaint-columns small{display:block}.ns-complaint-columns strong{color:#0a3559}.ns-complaint-columns small{margin-top:12px;color:#8b631f}.ns-complaint-caution{margin:20px 0 0;color:#405872;line-height:1.7}.ns-complaint-newlaw{display:grid;grid-template-columns:1fr 1fr;gap:28px}.ns-complaint-mini-flow{display:grid;gap:10px}.ns-complaint-mini-flow>div{display:grid;gap:5px;padding:17px;border-left:4px solid #c48928;border-radius:8px;background:#fff}.ns-complaint-mini-flow strong{color:#0c355b}.ns-complaint-mini-flow span{color:#5c6e81;line-height:1.55}.ns-complaint-change,.ns-complaint-savings{display:flex;gap:21px;padding:30px;border-radius:17px}.ns-complaint-change{border:1px solid #e0b765;background:#fff8e8}.ns-complaint-change>svg,.ns-complaint-savings>svg{flex:0 0 auto;margin-top:5px;font-size:1.7rem}.ns-complaint-change>svg{color:#a76610}.ns-complaint-public{display:flex;gap:20px;padding:26px;border:1px solid #dbe5ee;border-radius:15px;background:#fff}.ns-complaint-public>svg{flex:0 0 auto;margin-top:5px;color:#155b89;font-size:1.7rem}.ns-complaint-public p{margin:0}.ns-complaint-memory{padding:30px;border-radius:17px;color:#fff;background:#092844}.ns-complaint-memory h2{color:#fff}.ns-complaint-memory>div{display:flex;gap:11px;align-items:flex-start}.ns-complaint-memory svg{flex:0 0 auto;margin-top:5px;color:#e2ab46}.ns-complaint-memory p{margin:5px 0;color:#dce7f0;line-height:1.65}.ns-complaint-savings{background:#e7f1ed}.ns-complaint-savings>svg{color:#1b7c5c}.ns-complaint-savings h2{margin-top:0}.ns-complaint-sources{margin-top:40px;padding:27px;border:1px solid #dbe5ee;border-radius:16px;background:#fff}.ns-complaint-sources h2{font-size:1.4rem}.ns-complaint-sources>div{display:flex;flex-wrap:wrap;gap:12px 22px}.ns-complaint-sources a{display:inline-flex;align-items:center;gap:7px;color:#1658b7;font-weight:750;text-decoration:none}.ns-complaint-disclaimer{margin:28px 0 0;padding:18px 20px;border-left:4px solid #d9a243;color:#617487;background:#eaf0f4;line-height:1.65}
        @media(max-width:820px){.ns-complaint-wrap{width:min(100% - 28px,1100px)}.ns-complaint-hero{padding:50px 0}.ns-complaint-hero-grid,.ns-complaint-intro,.ns-complaint-columns,.ns-complaint-newlaw{grid-template-columns:1fr}.ns-complaint-hero-grid{gap:28px}.ns-complaint-grid>div{order:1}.ns-complaint-hero img{order:2}.ns-complaint-article{padding-top:40px}}@media(max-width:500px){.ns-complaint-wrap{width:min(100% - 22px,1100px)}.ns-complaint-hero h1{font-size:2.08rem}.ns-complaint-flow section{grid-template-columns:1fr}.ns-complaint-section{margin-top:46px}.ns-complaint-compare,.ns-complaint-change,.ns-complaint-savings{padding:22px}.ns-complaint-change,.ns-complaint-savings{align-items:flex-start}.ns-complaint-sources>div{display:grid}}
      `}</style>
    </>
  );
}
