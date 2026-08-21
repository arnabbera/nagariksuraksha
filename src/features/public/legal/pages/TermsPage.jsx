import {
  FaBan,
  FaEnvelope,
  FaFileContract,
  FaIdCard,
  FaMoneyCheckAlt,
  FaRegCopyright,
  FaShieldAlt,
  FaUniversity,
} from "react-icons/fa";

import Footer from "../../../home/components/Footer";
import Header from "../../../home/components/Header";
import SEO from "../../../../shared/seo/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions | NagarikSuraksha"
        description="Read the NagarikSuraksha terms for course enrollment, certification, accounts, payments, permitted use and liability."
        canonical="/terms"
        robots="index, follow"
      />

      <Header />

      <main className="ns-terms-policy-page">
        <section className="ns-terms-policy-hero">
          <div className="ns-terms-policy-container">
            <span>LEGAL INFORMATION</span>
            <h1>Terms and Conditions</h1>
            <p>Last Updated: August 15, 2026</p>
          </div>
        </section>

        <section className="ns-terms-policy-content">
          <div className="ns-terms-policy-container">
            <div className="ns-terms-policy-intro">
              <FaFileContract />
              <p>
                Welcome to <strong>Nagarik Suraksha</strong> (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;). By accessing or using our
                web portal located at{" "}
                <a href="https://www.nagariksuraksha.com">
                  www.nagariksuraksha.com
                </a>
                , you agree to comply with and be bound by the following Terms
                and Conditions. Please read them carefully before using our
                services.
              </p>
            </div>

            <TermsCard icon={<FaFileContract />} title="1. Scope of Services">
              <ul>
                <li>
                  <strong>Individual Course Access:</strong> Each Nagarik Suraksha
                  course requires a ₹99 one-time enrollment fee. Successful
                  payment unlocks only the selected course.
                </li>
                <li>
                  <strong>Included Benefits:</strong> The course fee includes
                  course viewing, downloadable PDF study materials, three mock
                  tests, the final examination, and certificate eligibility.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaUniversity />} title="2. Independent Portal Disclaimer">
              <ul>
                <li>
                  Nagarik Suraksha is an{" "}
                  <strong>independent, private educational portal</strong>.
                </li>
                <li>
                  We are <strong>not</strong> affiliated with, endorsed by,
                  accredited by, or connected to any government agency,
                  educational board, university, or official licensing body.
                </li>
                <li>
                  The certificates issued by Nagarik Suraksha are purely{" "}
                  <strong>appreciation/completion documents</strong> for
                  personal skill development. They do <strong>not</strong>{" "}
                  constitute an accredited academic degree, official diploma,
                  professional qualification, or government licence.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaIdCard />} title="3. Account Registration & Name on Certificate">
              <ul>
                <li>
                  <strong>Google Authentication:</strong> Users must
                  authenticate using a valid Google account via Google
                  Sign-In.
                </li>
                <li>
                  <strong>Profile Data Capture:</strong> Our platform
                  automatically captures your name and profile image directly
                  from your connected Google Account.
                </li>
                <li>
                  <strong>Name on Certificate:</strong> The name printed on
                  your Completion Certificate will automatically match the
                  actual name on your Google Account profile.
                </li>
                <li>
                  <strong>User Responsibility:</strong> We strongly advise you
                  to check and update your legal full name in your Google
                  Account settings prior to attempting the test or requesting
                  certification to ensure your certificate displays your
                  accurate name.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaMoneyCheckAlt />} title="4. Payments & Refunds">
              <ul>
                <li>
                  All payments of ₹99 for certification access are processed
                  securely through authorized third-party payment gateways
                  (e.g., Razorpay, Paytm, Cashfree).
                </li>
                <li>
                  <strong>Refund Policy:</strong> The ₹99 fee is{" "}
                  <strong>non-refundable</strong> once payment is completed and
                  access to PDFs, mock tests, or certificate generation
                  features has been unlocked.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaRegCopyright />} title="5. Intellectual Property & Usage Restrictions">
              <ul>
                <li>
                  All course content, mock test questions, PDFs, website
                  design, graphics, and logos are the property of Nagarik
                  Suraksha.
                </li>
                <li>
                  You are granted a limited, personal, non-exclusive licence to
                  view and download study materials for personal,
                  non-commercial use only.
                </li>
                <li>
                  You may <strong>not</strong> copy, redistribute, resell,
                  modify, or commercially exploit any course materials or test
                  content without our prior written consent.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaBan />} title="6. Prohibited Activities">
              <p>When using the portal, you agree <strong>not</strong> to:</p>
              <ul>
                <li>
                  Attempt to cheat, exploit, or bypass mock test rules and
                  automated certificate generation mechanisms.
                </li>
                <li>
                  Scrape, reverse-engineer, or overload the portal&apos;s
                  infrastructure.
                </li>
                <li>
                  Misrepresent your Nagarik Suraksha certificate as a
                  government-issued or university-accredited credential to
                  third parties or employers.
                </li>
              </ul>
            </TermsCard>

            <TermsCard icon={<FaShieldAlt />} title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Nagarik Suraksha shall
                not be liable for any direct, indirect, incidental, or
                consequential damages resulting from your use or inability to
                use the portal, reliance on course materials, or the
                acceptance/rejection of our certificates by third-party
                employers or institutions.
              </p>
            </TermsCard>

            <TermsCard icon={<FaFileContract />} title="8. Changes to Terms">
              <p>
                We reserve the right to modify these Terms and Conditions at
                any time. Updated versions will be posted on this page with a
                revised &quot;Last Updated&quot; date. Continued use of the
                portal after changes constitutes acceptance of the new terms.
              </p>
            </TermsCard>

            <TermsCard icon={<FaEnvelope />} title="9. Contact Us">
              <p>
                For any questions or concerns regarding these Terms, please
                contact:
              </p>

              <dl className="ns-terms-policy-contact">
                <div>
                  <dt>Platform Name</dt>
                  <dd>Nagarik Suraksha</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:nagariksuraksha@gmail.com">
                      nagariksuraksha@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </TermsCard>
          </div>
        </section>

        <style>{`
          .ns-terms-policy-page,.ns-terms-policy-page *{box-sizing:border-box}
          .ns-terms-policy-page{width:100%;overflow-x:hidden;background:#f8fafc;color:#0f172a}
          .ns-terms-policy-container{width:min(1120px,calc(100% - 40px));margin:0 auto}
          .ns-terms-policy-hero{padding:76px 0;background:radial-gradient(circle at 88% 18%,rgba(96,165,250,.25),transparent 31%),linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;text-align:center}
          .ns-terms-policy-hero span{display:inline-block;color:#93c5fd;font-family:Arial,sans-serif;font-size:12px;font-weight:800;letter-spacing:.18em}
          .ns-terms-policy-hero h1{margin:13px 0 0;color:#fff;font-size:clamp(38px,6vw,62px);line-height:1.1}
          .ns-terms-policy-hero p{margin:16px 0 0;color:#dbeafe;font-family:Arial,sans-serif;font-size:15px}
          .ns-terms-policy-content{padding:64px 0 80px}
          .ns-terms-policy-intro{display:flex;align-items:flex-start;gap:14px;margin-bottom:28px;padding:22px;border:1px solid #bfdbfe;border-radius:14px;background:#eff6ff;color:#334155;font-family:Arial,sans-serif;font-size:15px;line-height:1.7}
          .ns-terms-policy-intro>svg{flex:none;margin-top:3px;color:#2563eb;font-size:22px}.ns-terms-policy-intro p{margin:0}.ns-terms-policy-intro a{color:#2563eb;font-weight:700;text-decoration:none}
          .ns-terms-policy-card{display:grid;grid-template-columns:58px minmax(0,1fr);gap:20px;margin-top:22px;padding:30px;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 10px 30px rgba(15,23,42,.06)}
          .ns-terms-policy-icon{width:58px;height:58px;display:grid;place-items:center;border-radius:15px;background:#dbeafe;color:#2563eb;font-size:24px}
          .ns-terms-policy-card h2{margin:2px 0 12px;color:#0f172a;font-size:23px}
          .ns-terms-policy-card p,.ns-terms-policy-card li,.ns-terms-policy-contact{color:#475569;font-family:Arial,sans-serif;font-size:15px;line-height:1.8}
          .ns-terms-policy-card p{margin:0}.ns-terms-policy-card ul{margin:10px 0 0;padding-left:22px}.ns-terms-policy-card li+li{margin-top:11px}
          .ns-terms-policy-contact{display:grid;gap:10px;margin:18px 0 0}.ns-terms-policy-contact>div{display:grid;grid-template-columns:140px 1fr;gap:14px;padding:12px 14px;border-radius:9px;background:#f8fafc}
          .ns-terms-policy-contact dt{font-weight:700;color:#334155}.ns-terms-policy-contact dd{margin:0}.ns-terms-policy-contact a{color:#2563eb;text-decoration:none;font-weight:700}.ns-terms-policy-contact a:hover{text-decoration:underline}
          @media(max-width:640px){.ns-terms-policy-container{width:min(100% - 28px,1120px)}.ns-terms-policy-hero{padding:54px 0}.ns-terms-policy-content{padding:42px 0 56px}.ns-terms-policy-card{grid-template-columns:1fr;gap:15px;padding:22px}.ns-terms-policy-icon{width:50px;height:50px;font-size:21px}.ns-terms-policy-card h2{font-size:20px}.ns-terms-policy-card p,.ns-terms-policy-card li,.ns-terms-policy-contact{font-size:14px}.ns-terms-policy-contact>div{grid-template-columns:1fr;gap:2px}}
        `}</style>
      </main>

      <Footer />
    </>
  );
}

function TermsCard({ icon, title, children }) {
  return (
    <article className="ns-terms-policy-card">
      <div className="ns-terms-policy-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </article>
  );
}
