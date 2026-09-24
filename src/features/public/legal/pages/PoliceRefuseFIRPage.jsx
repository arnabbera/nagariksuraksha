import { Link } from "react-router-dom";
import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import LegalUpdateShare from "../components/LegalUpdateShare";

const path = "/legal-updates/remedies-when-police-refuse-to-register-fir";
const crpc = "https://www.indiacode.nic.in/bitstream/123456789/15273/1/1598345331915_the_code_of_criminal_procedure%2C_1973.pdf";
const ipc = "https://www.indiacode.nic.in/bitstream/123456789/4219/1/THE-INDIAN-PENAL-CODE-1860.pdf";
const bns = "https://www.indiacode.nic.in/bitstream/123456789/20062/1/a202345.pdf";
const law = "https://www.indiacode.nic.in/bitstream/123456789/21920/1/the_bharatiya_nagarik_suraksha_sanhita%2C_2023.pdf";

export default function PoliceRefuseFIRPage() {
  return <>
    <SEO title="Legal Remedies When Police Refuse to Register an FIR" description="What to do if police refuse an FIR: approach the SP under BNSS 173(4), apply to a Magistrate under 175(3), file a private complaint, and preserve records." canonical={path} image="/images/legal-updates/police-refuse-fir-remedies-v2.jpg" keywords={["police refuse FIR", "section 173(4) BNSS", "section 175(3) BNSS", "private complaint section 223 BNSS"]} />
    <Header />
    <main className="fir-page">
      <div className="fir-wrap">
        <Link className="fir-back" to="/#legal-remedies">← Legal Remedies</Link>
        <div className="fir-hero">
          <div><span className="fir-kicker">CITIZEN GUIDE · CRIMINAL PROCEDURE</span>
            <h1>Legal Remedies When Police Refuse to Register an FIR</h1>
            <p>A refusal at the police station is not the end of the process. The BNSS provides a route through senior police officers and a Magistrate, with other remedies where appropriate.</p>
            <small>Updated 24 September 2026 · Indian law</small>
          </div>
          <img src="/images/legal-updates/police-refuse-fir-remedies-v2.jpg" alt="Sanhita360 guide to legal remedies when police refuse to register an FIR" />
        </div>
        <LegalUpdateShare canonicalPath={path} shareVersion="fir-remedies-v2" message="Know the legal remedies when police refuse to register an FIR under the BNSS." />
        <article className="fir-article">
          <p>An FIR records information about an alleged <strong>cognizable offence</strong>, one that police may investigate without a Magistrate’s prior order. If a police station refuses to record such information, keep a copy of your complaint and use the following remedies. Whether a particular allegation is cognizable depends on the applicable offence and its classification.</p>
          <aside className="fir-callout"><strong>Important qualification</strong><p>Registration is generally required when the information discloses a cognizable offence. BNSS section 173(3) also permits a time limited preliminary inquiry for certain offences punishable with three years or more but less than seven years, subject to prior permission from a prescribed senior officer. A lawful inquiry should not be confused with an indefinite refusal. The Supreme Court has explained this distinction.</p></aside>

          <h2>Which law applies: CrPC, IPC, BNSS or BNS?</h2>
          <p>The <strong>CrPC and BNSS govern procedure</strong> such as recording an FIR and approaching a Magistrate. The <strong>IPC and BNS define many offences</strong> alleged in that FIR. The BNSS and BNS generally apply from 1 July 2024, while the applicable law for older conduct and pending proceedings needs to be assessed under the transition and saving provisions.</p>
          <div className="fir-table-wrap"><table className="fir-table"><caption>Procedural steps: older CrPC and current BNSS provisions</caption><thead><tr><th>Step</th><th>CrPC, 1973</th><th>BNSS, 2023</th></tr></thead><tbody>
            <tr><td>Information about a cognizable offence</td><td>Section 154(1)</td><td>Section 173(1)</td></tr>
            <tr><td>Written information to SP after police refusal</td><td>Section 154(3)</td><td>Section 173(4)</td></tr>
            <tr><td>Magistrate's direction for police investigation</td><td>Section 156(3)</td><td>Section 175(3)</td></tr>
            <tr><td>Examination of private complainant</td><td>Section 200</td><td>Section 223</td></tr>
          </tbody></table></div>
          <p>These are corresponding routes, not identical wording. BNSS section 173(3) provides for a limited preliminary inquiry in specified cases, and section 175(3) expressly addresses the affidavit, inquiry and police submission.</p>
          <div className="fir-table-wrap"><table className="fir-table"><caption>Illustrative offence provisions: older IPC and current BNS</caption><thead><tr><th>Allegation</th><th>IPC, 1860</th><th>BNS, 2023</th></tr></thead><tbody>
            <tr><td>Cheating that dishonestly induces delivery of property</td><td>Section 420</td><td>Section 318(4)</td></tr>
            <tr><td>Criminal breach of trust</td><td>Section 406</td><td>Section 316(2)</td></tr>
            <tr><td>Punishment for murder</td><td>Section 302</td><td>Section 103(1)</td></tr>
          </tbody></table></div>
          <p>These offence examples do not mean every financial dispute is criminal. The alleged facts must satisfy the elements of the applicable offence, and other special laws may apply.</p>

          <h2>1. Write to the Superintendent of Police</h2>
          <p>Under <a href={law}>section 173(4) BNSS</a>, a person aggrieved by the officer in charge’s refusal may send the substance of the information <strong>in writing and by post</strong> to the Superintendent of Police concerned. Attach the original complaint and available supporting documents. You may also use an official email or meet a senior officer, but retain proof of the statutory postal submission.</p>
          <p>If satisfied that the information discloses a cognizable offence, the SP shall investigate personally or direct a subordinate police officer to investigate. The provision then allows an aggrieved person to apply to a Magistrate if that route does not resolve the matter.</p>

          <h2>2. Apply to a Magistrate for police investigation</h2>
          <p>Under <a href={law}>section 175(3) BNSS</a>, a Magistrate empowered under section 210 may order investigation after considering an application supported by an affidavit, making any inquiry considered necessary, and considering the police officer’s submission. Include the earlier police complaint, proof of the section 173(4) approach and the facts showing why police investigation is needed.</p>
          <p>This is a request for a judicial direction to investigate. An order is not automatic, and the provision should not be presented as an automatic direction to register an FIR or as a guarantee of court monitoring.</p>

          <h2>3. File a private complaint before the Magistrate</h2>
          <p>A separate route is a complaint made directly to the Magistrate. <a href={law}>Section 223 BNSS</a> deals with examination of the complainant and witnesses present on oath, subject to its exceptions and procedural safeguards. The Magistrate may then follow sections 225–227, including inquiry where appropriate, dismissal if there is insufficient ground, or issue of process if sufficient ground exists.</p>
          <p>This route differs from asking for police investigation under section 175(3). The Magistrate does not automatically summon an accused merely because a complaint has been filed.</p>

          <h2>4. Consider the High Court in exceptional circumstances</h2>
          <p>Article 226 of the Constitution allows the High Court to issue appropriate writs and directions. Exceptional cases may warrant relief concerning investigation or protection of legal rights. Courts ordinarily expect the statutory police and Magistrate remedies to be used first; the facts and urgency matter.</p>

          <h2>5. Use relevant commissions and grievance channels</h2>
          <p>Depending on the facts, a complaint may also be sent to the appropriate Human Rights Commission, Women’s Commission, Child Rights Commission, or SC/ST commission. State police grievance portals, helplines and official email channels can create a useful record. Their powers and jurisdiction vary, and they do not replace the statutory police and Magistrate routes.</p>

          <h2>6. Report misconduct through supervisory channels</h2>
          <p>A deliberate refusal can be reported to senior police officers or a competent police complaints or vigilance authority where available. An inquiry or disciplinary consequence depends on the facts and the authority’s rules.</p>

          <h2>Preserve evidence of every step</h2>
          <ul><li>A dated copy of your signed complaint and its attachments.</li><li>Postal receipt, delivery tracking and any police acknowledgment.</li><li>Official email or online complaint reference numbers.</li><li>Names, designations and dates of officers approached.</li><li>Relevant documents and any recordings lawfully obtained.</li></ul>
          <div className="fir-summary"><h2>In short</h2><p>Submit the complaint to the police, send the written information by post to the SP under section 173(4) if refused, and, if necessary, seek a Magistrate’s order under section 175(3) or file a private complaint under section 223. Consider other forums according to the circumstances and preserve proof of each step.</p></div>
          <p className="fir-source">Primary sources: <a href={law}>BNSS, 2023</a>; <a href={crpc}>CrPC, 1973</a>; <a href={bns}>BNS, 2023</a>; <a href={ipc}>IPC, 1860</a>; <a href="https://api.sci.gov.in/supremecourt/2025/25001/25001_2025_11_1501_64020_Judgement_11-Sep-2025.pdf">Supreme Court on BNSS section 173(3)</a>.</p>
        </article>
      </div>
    </main>
    <Footer />
    <style>{`
      .fir-page { background:#f7f9fc; color:#15263d; padding:42px 20px 85px; }
      .fir-wrap { max-width:1120px; margin:auto; }
      .fir-back { color:#a66b19; font-weight:800; text-decoration:none; display:inline-block; margin-bottom:25px; }
      .fir-hero { display:grid; grid-template-columns:1fr 1fr; gap:42px; align-items:center; margin-bottom:45px; }
      .fir-hero h1 { font-size:clamp(2.2rem,4vw,3.65rem); line-height:1.13; color:#0b203a; margin:14px 0 20px; }
      .fir-hero p { font-size:1.16rem; line-height:1.7; color:#52647a; }
      .fir-hero small { color:#6d7887; }
      .fir-hero img { width:100%; border-radius:18px; box-shadow:0 18px 40px #10243b25; aspect-ratio:16/9; object-fit:cover; }
      .fir-kicker { font-size:.8rem; letter-spacing:.1em; color:#ad701c; font-weight:900; }
      .fir-article { background:white; border-radius:19px; padding:clamp(24px,5vw,70px); max-width:860px; margin:auto; box-shadow:0 12px 35px #10243b0b; font-size:1.08rem; line-height:1.82; }
      .fir-article h2 { color:#0b203a; line-height:1.3; margin:42px 0 14px; font-size:1.65rem; }
      .fir-article p { margin:0 0 19px; }
      .fir-article a { color:#165c9b; text-underline-offset:3px; overflow-wrap:anywhere; }
      .fir-article li { margin-bottom:9px; }
      .fir-table-wrap { overflow-x:auto; margin:22px 0; }
      .fir-table { border-collapse:collapse; width:100%; min-width:600px; line-height:1.5; font-size:.95rem; }
      .fir-table caption { text-align:left; font-weight:800; color:#0b203a; padding-bottom:9px; }
      .fir-table th,.fir-table td { text-align:left; padding:12px 14px; border:1px solid #dce5ed; }
      .fir-table th { background:#eaf2fa; color:#0b203a; }
      .fir-callout,.fir-summary { background:#edf4fc; border-left:5px solid #c58b31; padding:20px 23px; border-radius:8px; margin:29px 0; }
      .fir-callout p,.fir-summary p { margin:8px 0 0; }
      .fir-summary h2 { margin:0; }
      .fir-source { border-top:1px solid #e1e7ee; padding-top:20px; margin-top:42px!important; font-size:.88rem; }
      @media(max-width:760px) { .fir-page { padding-top:26px; } .fir-hero { grid-template-columns:1fr; gap:18px; } .fir-hero img { order:-1; } }
    `}</style>
  </>;
}
