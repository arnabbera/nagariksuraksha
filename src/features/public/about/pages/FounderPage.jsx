import { Link } from "react-router-dom";
import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";

export default function FounderPage() {
  return (
    <>
      <SEO title="Founder — Arnab Bera" description="Meet Arnab Bera, founder of Sanhita360. Read about his background and experience in property consultancy." canonical="/about/founder" />
      <Header />
      <main className="ns-founder">
        <div className="ns-founder-wrap">
          <nav className="ns-founder-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/about">About</Link><span>/</span><span>Founder</span></nav>
          <p className="ns-founder-eyebrow">Founder of Sanhita360</p>
          <h1>Arnab Bera</h1>
          <p className="ns-founder-intro">Meet Arnab Bera, a ConsultKaro property registration consultant with more than 10 years of property consultancy experience in Kolkata.</p>
          <div className="ns-founder-grid">
            <article>
              <h2>Property Registration Consultant — Gariahat</h2>
              <p>Arnab Bera has more than 10 years of property consultancy experience in Kolkata. He assists buyers, sellers, owners and families through the practical stages of property registration with a structured, document-first approach. His work covers property and document search coordination, agreement and deed preparation, valuation and registration readiness, mutation, and post-registration record updates across Gariahat, Ballygunge and other parts of South Kolkata.</p>
              <p>With an Engineering background and legal studies as an LL.B Intern, he combines technical attention to detail with practical understanding of property documentation and registration workflows. His focus is to help clients organise information, identify missing requirements and coordinate the appropriate professionals before important property decisions are made.</p>
              <p className="ns-founder-qualification"><strong>Qualification:</strong> MTech, B.E, LL.B (Intern)</p>
              <ul>
                <li>More than 10 years of property consultancy experience</li>
                <li>Property and document search coordination</li>
                <li>Agreement and deed drafting coordination</li>
                <li>Valuation, registration and mutation guidance</li>
              </ul>
              <h2>Professional Scope</h2>
              <p>Consultation and coordination do not replace a formal legal opinion or representation by an appropriately qualified professional. The scope should be confirmed for each matter.</p>
              <Link className="ns-founder-button" to="/recognition">View Recognition</Link>
            </article>
            <aside>
              <img src="/arnab-founder.jpg" alt="Arnab Bera, founder of Sanhita360" />
              <div className="ns-founder-contact">
                <h2>Talk to ConsultKaro</h2>
                <p>Share your location, property type and registration requirements with our team.</p>
                <a className="ns-founder-button" href="https://www.consultkaro.org/consultants/arnab-bera/" target="_blank" rel="noopener noreferrer">Visit ConsultKaro Profile</a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .ns-founder,.ns-founder *{box-sizing:border-box}
        .ns-founder{background:#f8fafc;color:#172640;padding:30px 0 70px}
        .ns-founder-wrap{max-width:1180px;width:calc(100% - 40px);margin:auto}
        .ns-founder-breadcrumb{display:flex;flex-wrap:wrap;gap:10px;font-size:14px;margin-bottom:38px;color:#64748b}
        .ns-founder a{color:#1d4ed8}
        .ns-founder-eyebrow{color:#2563eb;font-weight:800;letter-spacing:.12em;text-transform:uppercase;font-size:13px}
        .ns-founder h1{font-size:clamp(36px,5vw,58px);margin:10px 0 16px;line-height:1.15}
        .ns-founder-intro{max-width:800px;font-size:19px;line-height:1.7;color:#475569;margin-bottom:36px}
        .ns-founder-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:44px;align-items:start}
        .ns-founder h2{font-size:23px;line-height:1.35;margin:0 0 18px}
        .ns-founder article p,.ns-founder li,.ns-founder-contact p{line-height:1.85;color:#475569}
        .ns-founder article p{margin:0 0 22px}
        .ns-founder ul{padding-left:22px;margin:0 0 30px}
        .ns-founder aside img{display:block;width:100%;height:auto;border-radius:12px;background:#fff}
        .ns-founder-contact{padding:26px;background:white;border:1px solid #e2e8f0;border-radius:12px;margin-top:20px}
        .ns-founder .ns-founder-button{display:inline-flex;padding:12px 20px;background:#1d4ed8;color:white;border-radius:8px;text-decoration:none;font-weight:700;line-height:1.5}
        .ns-founder-button:hover{background:#1e40af}
        @media(max-width:760px){.ns-founder-grid{grid-template-columns:1fr;gap:28px}.ns-founder-wrap{width:calc(100% - 28px)}.ns-founder aside{max-width:460px;width:100%;margin:auto}.ns-founder h2{font-size:21px}}
      `}</style>
    </>
  );
}
