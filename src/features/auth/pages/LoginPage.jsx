import { useState } from "react";
import {
  FaGoogle,
  FaInfoCircle,
} from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");

      const { profile } = await signIn();

      const next = searchParams.get("next");
      const safeNext = (next === "/claim-purchase" || next?.startsWith("/student/courses/")) &&
        !next.startsWith("//") && !next.includes("\\") &&
        !next.includes("?") && !next.includes("#")
        ? next
        : "/student";

      navigate(profile?.role === "admin" ? "/admin" : safeNext, {
        replace: true,
      });
    } catch (loginError) {
      console.error(loginError);

      if (loginError.code === "auth/popup-closed-by-user") {
        setError("Google login was cancelled.");
      } else if (loginError.code === "auth/popup-blocked") {
        setError("Please allow pop-ups and try again.");
      } else {
        setError("Google login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="student-login-page">
      <section className="student-login-card">
        <div className="student-login-brand" aria-hidden="true">
          <img src="/sanhita360-logo.png" alt="Sanhita360" style={{ width: 175, maxWidth: "100%", height: "auto" }} />
        </div>

        <div className="student-login-heading">
          <p className="student-login-eyebrow">
            Sanhita360
          </p>

          <h1>Student Login</h1>

          <p>
            Sign in securely with your Google account to access courses,
            learning materials, mock tests and certificates.
          </p>
        </div>

        {error && (
          <div className="student-login-error" role="alert">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="student-login-google"
        >
          <FaGoogle />

          {isLoading ? "Signing in..." : "Continue with Google"}
        </button>

        <p className="student-login-role-note">
          Students and administrators use the same secure sign-in. You will
          automatically be directed to the correct dashboard.
        </p>

        <div className="student-login-benefits">
          <h2>What you get with a course</h2>
          <ul>
            <li>Chapter-wise learning materials and downloadable PDFs</li>
            <li>Practice mock tests and progress in your student portal</li>
            <li>A digital Certificate of Completion</li>
          </ul>
        </div>

        <aside className="student-login-disclaimers" aria-label="Terms and disclaimer">
          <details>
            <summary className="student-login-disclaimer-title">
              <FaInfoCircle aria-hidden="true" />
              <span>
                <strong>Terms &amp; Disclaimer</strong>
                <small>Independent portal; certificate is for personal learning, not an accredited qualification. Read before enrolling.</small>
              </span>
              <span className="student-login-disclaimer-toggle" aria-hidden="true">⌄</span>
            </summary>

            <div className="student-login-disclaimer-section">
              <h3>1. Independent Entity Disclaimer</h3>
              <p>
                Sanhita360 is an independent, private educational portal.
                We are <strong>not</strong> affiliated with, endorsed by,
                accredited by, or connected to any government agency,
                university, or official educational board.
              </p>
            </div>

            <div className="student-login-disclaimer-section">
              <h3>2. Individual Course Enrollment</h3>
              <p>
                Each course requires a one-time <strong>₹99 introductory fee for the first 100 checkout reservations, then ₹299</strong>.
                After successful payment, that course and its learning materials
                become available under Enrolled Courses in the student portal.
              </p>
            </div>

            <div className="student-login-disclaimer-section">
              <h3>3. Certification Included</h3>
              <p>
                The <strong>individual course fee</strong> covers course access,
                access to downloadable course PDFs, practice mock tests, and a
                digital Certificate of Completion.
              </p>

              <p className="student-login-important-notice">
                <strong>Important Notice:</strong> The certificate issued by
                Sanhita360 is an appreciation/completion document for
                personal learning only. It <strong>does not</strong> constitute
                an accredited academic degree, official diploma, professional
                licence, or government qualification.
              </p>
            </div>
            <p className="student-login-legal-links">
              <Link to="/terms">Full Terms</Link>
              <Link to="/disclaimer">Full Disclaimer</Link>
            </p>
          </details>
        </aside>
      </section>

      <style>{`
        .student-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background:
            radial-gradient(circle at top right, rgba(37, 99, 235, 0.18), transparent 34%),
            linear-gradient(145deg, #0f172a 0%, #173376 58%, #2563eb 100%);
          font-family: Georgia, "Times New Roman", serif;
        }

        .student-login-card {
          width: min(100%, 680px);
          padding: 42px;
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
        }

        .student-login-brand {
          width: 190px;
          height: 78px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          border-radius: 18px;
          background: #dbeafe;
          color: #2563eb;
          font-size: 28px;
        }

        .student-login-heading {
          text-align: center;
        }

        .student-login-eyebrow {
          margin: 0;
          color: #2563eb;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .student-login-heading h1 {
          margin: 10px 0 0;
          color: #0f172a;
          font-size: clamp(32px, 6vw, 44px);
          line-height: 1.1;
        }

        .student-login-heading > p:last-child {
          max-width: 460px;
          margin: 14px auto 0;
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .student-login-error {
          margin-top: 22px;
          padding: 12px 14px;
          border: 1px solid #fecaca;
          border-radius: 12px;
          background: #fef2f2;
          color: #b91c1c;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .student-login-google {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          padding: 15px 20px;
          border: 0;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 700;
          box-shadow: 0 12px 24px rgba(37, 99, 235, 0.24);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .student-login-google:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .student-login-google:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .student-login-role-note {
          margin: 16px 0 0;
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.55;
          text-align: center;
        }

        .student-login-disclaimers {
          margin-top: 26px;
          padding: 20px;
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          background: #eff6ff;
        }

        .student-login-benefits {
          margin-top: 26px;
          font-family: Arial, sans-serif;
        }

        .student-login-benefits h2 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 17px;
        }

        .student-login-benefits ul {
          margin: 0;
          padding-left: 21px;
          color: #475569;
          font-size: 14px;
          line-height: 1.8;
        }

        .student-login-disclaimer-title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #1d4ed8;
          cursor: pointer;
          list-style: none;
        }

        .student-login-disclaimer-title::-webkit-details-marker {
          display: none;
        }

        .student-login-disclaimer-title:focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 5px;
        }

        .student-login-disclaimer-title strong {
          display: block;
          font-family: Arial, sans-serif;
          font-size: 16px;
        }

        .student-login-disclaimer-title small {
          display: block;
          margin-top: 5px;
          color: #475569;
          font-family: Arial, sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        .student-login-disclaimer-title svg {
          flex-shrink: 0;
        }

        .student-login-disclaimer-toggle {
          margin-left: auto;
          font-size: 25px;
          line-height: 1;
          transition: transform .2s ease;
        }

        .student-login-disclaimers details[open] .student-login-disclaimer-toggle {
          transform: rotate(180deg);
        }

        .student-login-disclaimer-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #bfdbfe;
          color: #334155;
          font-family: Arial, sans-serif;
        }

        .student-login-disclaimer-section h3 {
          margin: 0 0 7px;
          color: #0f172a;
          font-size: 14px;
          line-height: 1.45;
        }

        .student-login-disclaimer-section p {
          margin: 0;
          font-size: 13px;
          line-height: 1.65;
        }

        .student-login-important-notice {
          margin-top: 12px !important;
          padding: 12px 14px;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          background: #fffbeb;
          color: #78350f;
        }

        .student-login-legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin: 18px 0 0;
          font-family: Arial, sans-serif;
          font-size: 13px;
        }

        .student-login-legal-links a {
          color: #1d4ed8;
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .student-login-page {
            align-items: flex-start;
            padding: 22px 14px;
          }

          .student-login-card {
            padding: 28px 20px;
            border-radius: 18px;
          }

          .student-login-brand {
            width: 54px;
            height: 54px;
            font-size: 24px;
          }

          .student-login-disclaimers {
            padding: 16px;
          }
        }
      `}</style>
    </main>
  );
}
