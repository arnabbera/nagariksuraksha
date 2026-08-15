import {
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaUserCircle,
} from "react-icons/fa";

import Footer from "../../../home/components/Footer";
import Header from "../../../home/components/Header";
import SEO from "../../../../shared/seo/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | NagarikSuraksha"
        description="Learn what information NagarikSuraksha collects and how account, learning progress and payment-related data is handled."
        canonical="/privacy-policy"
        robots="index, follow"
      />

      <Header />

      <main className="ns-privacy-page">
        <section className="ns-privacy-hero">
          <div className="ns-privacy-container">
            <span>YOUR PRIVACY MATTERS</span>
            <h1>Privacy Policy</h1>
            <p>Last Updated: August 15, 2026</p>
          </div>
        </section>

        <section className="ns-privacy-content">
          <div className="ns-privacy-container">
            <div className="ns-privacy-intro">
              <FaShieldAlt />
              <p>
                At <strong>Nagarik Suraksha</strong> (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;), we respect your privacy.
                This policy explains what information we collect when you use
                our portal and how it is handled.
              </p>
            </div>

            <article className="ns-privacy-card">
              <div className="ns-privacy-icon"><FaUserCircle /></div>
              <div>
                <h2>1. Information We Collect</h2>
                <p>
                  We keep data collection to a minimum to ensure a simple and
                  secure experience:
                </p>

                <ul>
                  <li>
                    <strong>Google Account Information:</strong> When you log
                    in using Google Sign-In, we only receive basic profile
                    information provided by Google: your <strong>name</strong>,
                    <strong> email address</strong>, and{" "}
                    <strong>profile picture URL</strong>. We do not collect or
                    store your Google password.
                  </li>
                  <li>
                    <strong>Academic &amp; Progress Data:</strong> Your mock
                    test scores, final exam attempts, and certificate
                    generation history.
                  </li>
                  <li>
                    <strong>Payment Details:</strong> When you pay the ₹99 fee
                    for certification, your payment is processed directly by
                    our authorized payment gateway partners (e.g., Razorpay,
                    Paytm, Cashfree). <strong>We never receive or store your
                    debit/credit card details, UPI PINs, or banking
                    passwords.</strong>
                  </li>
                </ul>
              </div>
            </article>

            <article className="ns-privacy-card">
              <div className="ns-privacy-icon"><FaShieldAlt /></div>
              <div>
                <h2>2. How We Use Your Information</h2>
                <p>We use the minimal data collected solely to:</p>

                <ul>
                  <li>Authenticate your account and grant access to free courses.</li>
                  <li>Display your correct name on your Completion Certificate.</li>
                  <li>Maintain your test history and course progress.</li>
                  <li>
                    Send payment receipts and essential account notifications
                    to your registered email.
                  </li>
                </ul>
              </div>
            </article>

            <article className="ns-privacy-card">
              <div className="ns-privacy-icon"><FaLock /></div>
              <div>
                <h2>3. Data Protection &amp; Sharing</h2>
                <ul>
                  <li>
                    <strong>No Data Selling:</strong> We do not sell, trade, or
                    share your personal information or email address with
                    third parties for marketing purposes.
                  </li>
                  <li>
                    <strong>Third-Party Services:</strong> Your data is only
                    processed by essential services required to run the portal
                    (Google for authentication and authorized payment gateways
                    for transactions).
                  </li>
                </ul>
              </div>
            </article>

            <article className="ns-privacy-card">
              <div className="ns-privacy-icon"><FaEnvelope /></div>
              <div>
                <h2>4. Contact Us</h2>
                <p>
                  If you have any questions regarding your account or data
                  privacy, please contact:
                </p>

                <dl className="ns-privacy-contact">
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
              </div>
            </article>
          </div>
        </section>

        <style>{`
          .ns-privacy-page,.ns-privacy-page *{box-sizing:border-box}
          .ns-privacy-page{width:100%;overflow-x:hidden;background:#f8fafc;color:#0f172a}
          .ns-privacy-container{width:min(1120px,calc(100% - 40px));margin:0 auto}
          .ns-privacy-hero{padding:76px 0;background:radial-gradient(circle at 88% 18%,rgba(96,165,250,.25),transparent 31%),linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;text-align:center}
          .ns-privacy-hero span{display:inline-block;color:#93c5fd;font-family:Arial,sans-serif;font-size:12px;font-weight:800;letter-spacing:.18em}
          .ns-privacy-hero h1{margin:13px 0 0;color:#fff;font-size:clamp(38px,6vw,62px);line-height:1.1}
          .ns-privacy-hero p{margin:16px 0 0;color:#dbeafe;font-family:Arial,sans-serif;font-size:15px}
          .ns-privacy-content{padding:64px 0 80px}
          .ns-privacy-intro{display:flex;align-items:flex-start;gap:14px;margin-bottom:28px;padding:22px;border:1px solid #bfdbfe;border-radius:14px;background:#eff6ff;color:#334155;font-family:Arial,sans-serif;font-size:15px;line-height:1.7}
          .ns-privacy-intro>svg{flex:none;margin-top:3px;color:#2563eb;font-size:22px}.ns-privacy-intro p{margin:0}
          .ns-privacy-card{display:grid;grid-template-columns:58px minmax(0,1fr);gap:20px;margin-top:22px;padding:30px;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 10px 30px rgba(15,23,42,.06)}
          .ns-privacy-icon{width:58px;height:58px;display:grid;place-items:center;border-radius:15px;background:#dbeafe;color:#2563eb;font-size:24px}
          .ns-privacy-card h2{margin:2px 0 12px;color:#0f172a;font-size:23px}
          .ns-privacy-card p,.ns-privacy-card li,.ns-privacy-contact{color:#475569;font-family:Arial,sans-serif;font-size:15px;line-height:1.8}
          .ns-privacy-card p{margin:0}.ns-privacy-card ul{margin:14px 0 0;padding-left:22px}.ns-privacy-card li+li{margin-top:11px}
          .ns-privacy-contact{display:grid;gap:10px;margin:18px 0 0}.ns-privacy-contact>div{display:grid;grid-template-columns:140px 1fr;gap:14px;padding:12px 14px;border-radius:9px;background:#f8fafc}
          .ns-privacy-contact dt{font-weight:700;color:#334155}.ns-privacy-contact dd{margin:0}.ns-privacy-contact a{color:#2563eb;text-decoration:none;font-weight:700}.ns-privacy-contact a:hover{text-decoration:underline}
          @media(max-width:640px){.ns-privacy-container{width:min(100% - 28px,1120px)}.ns-privacy-hero{padding:54px 0}.ns-privacy-content{padding:42px 0 56px}.ns-privacy-card{grid-template-columns:1fr;gap:15px;padding:22px}.ns-privacy-icon{width:50px;height:50px;font-size:21px}.ns-privacy-card h2{font-size:20px}.ns-privacy-card p,.ns-privacy-card li,.ns-privacy-contact{font-size:14px}.ns-privacy-contact>div{grid-template-columns:1fr;gap:2px}}
        `}</style>
      </main>

      <Footer />
    </>
  );
}
