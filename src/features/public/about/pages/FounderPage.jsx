import { Link } from "react-router-dom";
import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";

export default function FounderPage() {
  return (
    <>
      <SEO title="Founder — Arnab Bera" description="Meet Arnab Bera, founder of Sanhita360: an ICT engineering professional with over 20 years of experience, pursuing an LL.B. at Bankura University." canonical="/about/founder" />
      <Header />
      <main className="ns-founder">
        <div className="ns-founder-wrap">
          <nav className="ns-founder-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/about">About</Link><span>/</span><span>Founder</span></nav>
          <p className="ns-founder-eyebrow">Founder of Sanhita360</p>
          <h1>Arnab Bera</h1>
          <p className="ns-founder-intro">Eminent engineering professional with over 20 years of experience in technical and managerial leadership across the Information and Communications Technology (ICT) industry.</p>
          <div className="ns-founder-grid">
            <article>
              <h2>Engineering &amp; Leadership</h2>
              <p>A proven architect with extensive expertise in delivering large-scale solutions for global telecom and digital environments.</p>
              <h2>Legal Studies &amp; Practical Experience</h2>
              <p>Transitioning into the legal domain, currently pursuing an LL.B. degree at Bankura University while actively engaging in legal internships and practical court matters.</p>
              <p>Leveraging two decades of structured analytical, technical, and problem-solving expertise to assist clients with legal awareness, education, and advisory support.</p>
              <p>Deeply involved in matters concerning civil and criminal law, property fraud investigations, land title due diligence, and financial debt recovery litigation before Debt Recovery Tribunals (DRT) and Debt Recovery Appellate Tribunals (DRAT).</p>
              <p className="ns-founder-qualification"><strong>Qualifications:</strong> MTech, B.E; LL.B. (pursuing), Bankura University</p>
              <h2>Professional Affiliations &amp; Mentoring</h2>
              <ul>
                <li>Associate Member – The Institute of Engineers (India) | Since 2002</li>
                <li>Member – Indian Society for Technical Education (ISTE, IIT New Delhi)</li>
                <li>Mentor – Integration Engineers (JS6), GIAP Mentoring Programme</li>
              </ul>
              <h2>Professional Scope</h2>
              <p>Consultation and coordination do not replace a formal legal opinion or representation by an appropriately qualified professional. The scope should be confirmed for each matter.</p>
              <Link className="ns-founder-button" to="/recognition">View Recognition</Link>
            </article>
            <aside>
              <img src="/arnab-founder.jpg" alt="Arnab Bera, founder of Sanhita360" />
              <div className="ns-founder-contact">
                <h2>Connect on LinkedIn</h2>
                <p>View Arnab Bera’s professional profile on LinkedIn.</p>
                <a className="ns-founder-button" href="https://www.linkedin.com/in/beraarnab/" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a>
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
