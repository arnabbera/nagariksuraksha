import {
  FaBookOpen,
  FaCertificate,
  FaInfoCircle,
  FaUniversity,
} from "react-icons/fa";

import Footer from "../../../home/components/Footer";
import Header from "../../../home/components/Header";
import SEO from "../../../../shared/seo/SEO";

export default function DisclaimerPage() {
  return (
    <>
      <SEO
        title="Terms & Disclaimer | NagarikSuraksha"
        description="NagarikSuraksha terms covering independent status, paid course access and completion certification."
        canonical="/disclaimer"
        robots="index, follow"
      />

      <Header />

      <main className="ns-terms-page">
        <section className="ns-terms-hero">
          <div className="ns-terms-container">
            <span>LEGAL INFORMATION</span>
            <h1>Terms &amp; Disclaimer</h1>
            <p>
              Important information about individual course enrollment,
              certification and the status of Nagarik Suraksha.
            </p>
          </div>
        </section>

        <section className="ns-terms-content">
          <div className="ns-terms-container">
            <div className="ns-terms-intro">
              <FaInfoCircle />
              <p>
                Please read this information before using learning materials,
                mock tests, downloads or certification services.
              </p>
            </div>

            <article className="ns-terms-card">
              <div className="ns-terms-icon"><FaUniversity /></div>
              <div>
                <h2>1. Independent Entity Disclaimer</h2>
                <p>
                  Nagarik Suraksha is an independent, private educational
                  portal. We are <strong>not</strong> affiliated with, endorsed
                  by, accredited by, or connected to any government agency,
                  university, or official educational board.
                </p>
              </div>
            </article>

            <article className="ns-terms-card">
              <div className="ns-terms-icon"><FaBookOpen /></div>
              <div>
                <h2>2. Course Access and Fee</h2>
                <p>
                  Each course requires a one-time <strong>₹49 enrollment fee</strong>.
                  Successful payment unlocks that individual course, its chapter
                  materials, downloadable PDFs, three mock tests and final test.
                </p>
              </div>
            </article>

            <article className="ns-terms-card">
              <div className="ns-terms-icon"><FaCertificate /></div>
              <div>
                <h2>3. Completion Certification</h2>
                <p>
                  The <strong>₹49 individual course fee</strong> covers course access,
                  access to downloadable course PDFs, practice mock tests, and
                  a digital Certificate of Completion.
                </p>

                <div className="ns-terms-notice">
                  <FaInfoCircle />
                  <p>
                    <strong>Important Notice:</strong> The certificate issued
                    by Nagarik Suraksha is an appreciation/completion document
                    for personal learning only. It <strong>does not</strong>{" "}
                    constitute an accredited academic degree, official diploma,
                    professional licence, or government qualification.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <style>{`
          .ns-terms-page,.ns-terms-page *{box-sizing:border-box}
          .ns-terms-page{width:100%;overflow-x:hidden;background:#f8fafc;color:#0f172a}
          .ns-terms-container{width:min(1120px,calc(100% - 40px));margin:0 auto}
          .ns-terms-hero{padding:76px 0;background:radial-gradient(circle at 88% 18%,rgba(96,165,250,.25),transparent 31%),linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;text-align:center}
          .ns-terms-hero span{display:inline-block;color:#93c5fd;font-family:Arial,sans-serif;font-size:12px;font-weight:800;letter-spacing:.18em}
          .ns-terms-hero h1{margin:13px 0 0;color:#fff;font-size:clamp(38px,6vw,62px);line-height:1.1}
          .ns-terms-hero p{max-width:720px;margin:18px auto 0;color:#dbeafe;font-family:Arial,sans-serif;font-size:17px;line-height:1.7}
          .ns-terms-content{padding:64px 0 80px}
          .ns-terms-intro{display:flex;align-items:flex-start;gap:13px;margin-bottom:28px;padding:20px 22px;border:1px solid #bfdbfe;border-radius:14px;background:#eff6ff;color:#334155;font-family:Arial,sans-serif;line-height:1.65}
          .ns-terms-intro>svg{flex:none;margin-top:3px;color:#2563eb;font-size:20px}.ns-terms-intro p{margin:0}
          .ns-terms-card{display:grid;grid-template-columns:58px minmax(0,1fr);gap:20px;margin-top:22px;padding:30px;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 10px 30px rgba(15,23,42,.06)}
          .ns-terms-icon{width:58px;height:58px;display:grid;place-items:center;border-radius:15px;background:#dbeafe;color:#2563eb;font-size:24px}
          .ns-terms-card h2{margin:2px 0 10px;color:#0f172a;font-size:23px}
          .ns-terms-card p{margin:0;color:#475569;font-family:Arial,sans-serif;font-size:15px;line-height:1.8}
          .ns-terms-notice{display:flex;align-items:flex-start;gap:12px;margin-top:20px;padding:17px 18px;border-left:4px solid #f59e0b;border-radius:10px;background:#fffbeb}
          .ns-terms-notice>svg{flex:none;margin-top:4px;color:#d97706}.ns-terms-notice p{color:#78350f}
          @media(max-width:640px){.ns-terms-container{width:min(100% - 28px,1120px)}.ns-terms-hero{padding:54px 0}.ns-terms-hero p{font-size:15px}.ns-terms-content{padding:42px 0 56px}.ns-terms-card{grid-template-columns:1fr;gap:15px;padding:22px}.ns-terms-icon{width:50px;height:50px;font-size:21px}.ns-terms-card h2{font-size:20px}.ns-terms-card p{font-size:14px}}
        `}</style>
      </main>

      <Footer />
    </>
  );
}
