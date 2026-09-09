import {
  FaArrowLeft,
  FaBalanceScale,
  FaBuilding,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileContract,
  FaGavel,
  FaHome,
  FaLandmark,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import LegalUpdateShare from "../components/LegalUpdateShare";

const actions = [
  {
    icon: FaFileContract,
    title: "Secure every document and payment trail",
    text: "Preserve the registered sale deed, agreement, bank-sanction and disbursement records, title-search report, legal opinion, CERSAI/search fee receipts, payment proofs, possession papers, tax records, advertisements and all communications with the seller, broker and lenders. Obtain certified copies where originals are unavailable.",
  },
  {
    icon: FaLandmark,
    title: "Notify both the prior lender and your financing bank",
    text: "Write immediately to the secured creditor claiming the earlier mortgage and, if you used a home loan, to your lender. Seek copies of the security-interest particulars, demand and possession notices, valuation or auction notices, and the basis on which each lender verified title. Acknowledged written notice is far safer than oral discussion.",
  },
  {
    icon: FaShieldAlt,
    title: "Report cheating and document fraud",
    text: "Give the jurisdictional police station a signed complaint explaining the seller's representations, concealed mortgage, payments, title documents and resulting loss. Depending on the evidence, cheating under Section 318 BNS and offences involving false or forged documents may be investigated. Ask for the FIR number or written acknowledgement; do not select penal sections without legal review.",
  },
  {
    icon: FaGavel,
    title: "Protect against SARFAESI measures without delay",
    text: "If a bank takes a measure under Section 13(4) of the SARFAESI Act, any aggrieved person may seek relief before the competent Debts Recovery Tribunal under Section 17, ordinarily within 45 days of that measure. A police complaint or civil suit does not by itself stop possession or auction. Obtain urgent advice on interim protection, jurisdiction and limitation.",
  },
  {
    icon: FaBalanceScale,
    title: "Consider civil recovery and protective orders",
    text: "Depending on the pleadings and relief required, a purchaser may consider rescission or cancellation, declaration, refund with interest, damages, injunction, attachment before judgment, or enforcement of contractual indemnities against the seller and other responsible parties. The correct forum, valuation, court fee and limitation require case-specific advice.",
  },
  {
    icon: FaBuilding,
    title: "Examine lender, professional and consumer remedies",
    text: "Where a financing bank, lawyer, search agency, broker or platform separately undertook paid due diligence but failed to exercise the promised standard of care, preserve the engagement terms and reports. A regulatory, professional-negligence or consumer claim may be possible if maintainability and actual deficiency are proved; payment of a verification fee does not automatically establish liability.",
  },
];

const checks = [
  "Search CERSAI by asset and, where appropriate, borrower details",
  "Search West Bengal registration indexes by name and property",
  "Obtain certified copies and trace the chain of title",
  "Inspect original title deeds and explain every missing original",
  "Check pending litigation, attachment, acquisition and insolvency risks",
  "Verify mutation, municipal tax and possession—but never treat them as title proof",
];

export default function MortgagedPropertyFraudPage() {
  return (
    <>
      <SEO
        title="Bought a Mortgaged Property by Fraud? Protect Your Home and Money"
        description="Practical legal steps in Kolkata when a seller conceals an earlier mortgage: police complaint, lender notice, SARFAESI and DRT remedies, civil recovery and title verification."
        canonical="/legal-updates/bought-mortgaged-property-by-fraud"
        image="/images/legal-updates/mortgaged-property-fraud.jpg"
        keywords={["mortgaged property fraud Kolkata", "property sold with bank loan", "SARFAESI purchaser remedy", "DRT Section 17", "CERSAI property search", "property cheating BNS"]}
      />

      <Header />

      <main className="ns-property-page">
        <section className="ns-property-hero">
          <div className="ns-property-wrap ns-property-hero-grid">
            <div>
              <Link to="/#legal-updates" className="ns-property-back"><FaArrowLeft /> Legal Updates</Link>
              <span className="ns-property-eyebrow"><FaHome /> Property Fraud and Mortgage Claims</span>
              <h1>Bought a Mortgaged Property by Fraud?</h1>
              <p>Here is how a nagarik can act to protect the home, challenge unlawful conduct and pursue recovery when a seller concealed an earlier mortgage or lien.</p>
            </div>
            <img src="/images/legal-updates/mortgaged-property-fraud.jpg" alt="Protecting a home and money after mortgaged property fraud" />
          </div>
        </section>

        <article className="ns-property-wrap ns-property-article">
          <LegalUpdateShare
            canonicalPath="/legal-updates/bought-mortgaged-property-by-fraud"
            shareVersion="mortgaged-property-fraud-card-v1"
            message="Bought a property with a concealed mortgage? Know how to protect your home and money."
          />
          <section className="ns-property-warning">
            <FaExclamationTriangle />
            <div>
              <h2>The registered sale deed may not remove the earlier mortgage</h2>
              <p>A seller generally cannot give a purchaser a better unencumbered interest than the seller lawfully holds. Under Section 48 of the Transfer of Property Act, competing rights created at different times ordinarily operate in order of priority. Section 55 also places duties on a seller to disclose material defects in title and, unless the sale is expressly subject to encumbrances, to discharge existing encumbrances.</p>
              <p>The exact result depends on the mortgage, notice, registration, fraud, contract and statutory proceedings. A sale is not automatically void in every case, but the purchaser may take the property subject to the prior enforceable security and face possession or auction if the secured debt remains unpaid.</p>
            </div>
          </section>

          <section className="ns-property-section">
            <span className="ns-property-label">Immediate Action Plan</span>
            <h2>Six Protective Steps</h2>
            <div className="ns-property-actions">
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <section key={action.title} className="ns-property-action">
                    <div className="ns-property-action-icon"><Icon /></div>
                    <div>
                      <span>Action {index + 1}</span>
                      <h3>{action.title}</h3>
                      <p>{action.text}</p>
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="ns-property-risks">
            <div>
              <span className="ns-property-label">Why Urgency Matters</span>
              <h2>Risks the Purchaser May Face</h2>
              <ul>
                <li><strong>Loss of possession:</strong> the earlier secured creditor may enforce its security, subject to applicable law and tribunal review.</li>
                <li><strong>Double financial burden:</strong> the purchase money may remain with the seller while the buyer continues servicing a separate home loan.</li>
                <li><strong>Auction and third-party rights:</strong> delay may allow an auction process or later transfer to advance, making relief more complex.</li>
                <li><strong>Limitation:</strong> police, DRT, civil, consumer and regulatory remedies have different triggers and time limits.</li>
              </ul>
            </div>
            <aside>
              <FaSearch />
              <h2>An Encumbrance Certificate is not enough</h2>
              <p>A registration search is essential, but it may not reveal every risk. A mortgage by deposit of title deeds can arise through delivery of title documents with the required intent, and older or imperfectly indexed interests may require additional investigation.</p>
              <p>Combine registration records with CERSAI, original-title inspection, lender enquiries, litigation searches, physical inspection and a documented advocate's title opinion.</p>
            </aside>
          </section>

          <section className="ns-property-section ns-property-kolkata">
            <span className="ns-property-label">Kolkata and West Bengal</span>
            <h2>Where to Verify and Escalate</h2>
            <div className="ns-property-kolkata-grid">
              <div>
                <h3>Registration records</h3>
                <p>Use the Directorate of Registration and Stamp Revenue's deed-search facilities, identify the correct registration office and obtain certified copies. Search by both parties' names and property particulars for the appropriate historical period.</p>
                <a href="https://wbregistration.gov.in/" target="_blank" rel="noreferrer">West Bengal Registration Portal <FaExternalLinkAlt /></a>
              </div>
              <div>
                <h3>Central security-interest search</h3>
                <p>Use CERSAI's public asset-based search and preserve the report. Treat a “no record” result as one part of due diligence, not a conclusive guarantee that no encumbrance exists.</p>
                <a href="https://www.cersai.org.in/" target="_blank" rel="noreferrer">CERSAI Public Search <FaExternalLinkAlt /></a>
              </div>
              <div>
                <h3>Police and complex fraud</h3>
                <p>Approach the jurisdictional Kolkata Police station with the complete documentary trail. Complex, organised or high-value allegations may be examined by the appropriate detective or economic-offence unit as allocated by the police; Lalbazar can guide a complainant to the proper department.</p>
                <a href="https://kolkatapolice.gov.in/contact/" target="_blank" rel="noreferrer">Kolkata Police Contacts <FaExternalLinkAlt /></a>
              </div>
            </div>
          </section>

          <section className="ns-property-section ns-property-checks">
            <span className="ns-property-label">Before Any Property Purchase</span>
            <h2>Minimum Verification Checklist</h2>
            <div>
              {checks.map((check) => <p key={check}><FaCheckCircle />{check}</p>)}
            </div>
          </section>

          <section className="ns-property-sources">
            <h2>Primary Legal Resources</h2>
            <div>
              <a href="https://www.indiacode.nic.in/handle/123456789/2338?view_type=browse" target="_blank" rel="noreferrer">Transfer of Property Act, 1882 <FaExternalLinkAlt /></a>
              <a href="https://www.indiacode.nic.in/handle/123456789/2006?view_type=browse" target="_blank" rel="noreferrer">SARFAESI Act, 2002 <FaExternalLinkAlt /></a>
              <a href="https://www.indiacode.nic.in/handle/123456789/20062" target="_blank" rel="noreferrer">Bharatiya Nyaya Sanhita, 2023 <FaExternalLinkAlt /></a>
            </div>
          </section>

          <p className="ns-property-disclaimer">This article provides general legal education and does not determine title, lender priority or liability in any individual dispute. Property and SARFAESI matters are document-sensitive and time-critical. Obtain case-specific advice immediately after receiving any demand, possession or auction notice.</p>
        </article>
      </main>

      <Footer />

      <style>{`
        .ns-property-page, .ns-property-page * { box-sizing: border-box; }
        .ns-property-page { color: #17243a; background: #f6f8fb; }
        .ns-property-wrap { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }
        .ns-property-hero { padding: 72px 0; color: #fff; background: radial-gradient(circle at 82% 16%, #255d88 0, transparent 34%), linear-gradient(135deg, #06182d, #0a2d4d); }
        .ns-property-hero-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(390px, 1.1fr); gap: 42px; align-items: center; }
        .ns-property-hero-grid img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border: 1px solid rgba(220,166,68,.6); border-radius: 18px; box-shadow: 0 22px 55px rgba(0,0,0,.34); }
        .ns-property-back, .ns-property-eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .ns-property-back { margin-bottom: 28px; color: #dce9f4; font-weight: 750; text-decoration: none; }
        .ns-property-eyebrow, .ns-property-label { color: #dda640; font-size: .78rem; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
        .ns-property-hero h1 { margin: 14px 0; font-size: clamp(2.15rem, 4.5vw, 3.75rem); line-height: 1.08; }
        .ns-property-hero p { margin: 0; color: #dbe6ef; font-size: 1.08rem; line-height: 1.75; }
        .ns-property-article { padding: 58px 0 76px; }
        .ns-property-warning { display: flex; gap: 22px; padding: 29px; border: 1px solid #dfb76b; border-radius: 17px; background: #fff8e9; }
        .ns-property-warning > svg { flex: 0 0 auto; margin-top: 5px; color: #a66510; font-size: 1.7rem; }
        .ns-property-warning h2, .ns-property-section h2, .ns-property-risks h2, .ns-property-sources h2 { margin: 0 0 13px; color: #0b203a; font-size: clamp(1.55rem, 3vw, 2.25rem); }
        .ns-property-warning p, .ns-property-action p, .ns-property-risks li, .ns-property-risks p, .ns-property-kolkata p { color: #52647a; line-height: 1.75; }
        .ns-property-section { margin-top: 58px; }
        .ns-property-section > h2 { margin-top: 8px; }
        .ns-property-actions { display: grid; gap: 18px; margin-top: 25px; }
        .ns-property-action { display: grid; grid-template-columns: 58px 1fr; gap: 19px; padding: 25px; border: 1px solid #dae4ef; border-radius: 15px; background: #fff; box-shadow: 0 8px 22px rgba(10,35,62,.05); }
        .ns-property-action-icon { display: grid; width: 50px; height: 50px; place-items: center; border-radius: 50%; color: #fff; background: #0c355b; font-size: 1.2rem; }
        .ns-property-action span { color: #a66917; font-size: .75rem; font-weight: 850; text-transform: uppercase; }
        .ns-property-action h3 { margin: 5px 0 8px; color: #102a47; font-size: 1.22rem; }
        .ns-property-action p { margin: 0; }
        .ns-property-risks { display: grid; grid-template-columns: 1.05fr .95fr; gap: 28px; margin-top: 58px; }
        .ns-property-risks h2 { margin-top: 8px; }
        .ns-property-risks li { margin-bottom: 11px; }
        .ns-property-risks aside { padding: 28px; border-radius: 16px; color: #fff; background: #092743; }
        .ns-property-risks aside > svg { color: #efb34b; font-size: 1.5rem; }
        .ns-property-risks aside h2 { color: #fff; font-size: 1.55rem; }
        .ns-property-risks aside p { color: #dce7f1; }
        .ns-property-kolkata { padding: 31px; border-radius: 18px; background: #eaf2fa; }
        .ns-property-kolkata-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 16px; }
        .ns-property-kolkata-grid > div { padding: 20px; border-radius: 13px; background: #fff; }
        .ns-property-kolkata h3 { margin: 0; color: #102a47; }
        .ns-property-kolkata a, .ns-property-sources a { display: inline-flex; align-items: center; gap: 7px; color: #1658b7; font-weight: 750; text-decoration: none; }
        .ns-property-checks > div { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 13px; }
        .ns-property-checks p { display: flex; gap: 10px; margin: 0; padding: 18px; border: 1px solid #dce5ef; border-radius: 12px; background: #fff; line-height: 1.55; }
        .ns-property-checks svg { flex: 0 0 auto; margin-top: 4px; color: #b5771d; }
        .ns-property-sources { margin-top: 40px; padding: 27px; border: 1px solid #dbe5ef; border-radius: 16px; background: #fff; }
        .ns-property-sources h2 { font-size: 1.4rem; }
        .ns-property-sources > div { display: flex; flex-wrap: wrap; gap: 12px 22px; }
        .ns-property-disclaimer { margin: 28px 0 0; padding: 18px 20px; border-left: 4px solid #d9a243; color: #627286; background: #edf2f7; line-height: 1.65; }
        @media (max-width: 820px) {
          .ns-property-wrap { width: min(100% - 28px,1100px); }
          .ns-property-hero { padding: 52px 0; }
          .ns-property-hero-grid, .ns-property-risks { grid-template-columns: 1fr; }
          .ns-property-kolkata-grid, .ns-property-checks > div { grid-template-columns: 1fr; }
          .ns-property-action { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
