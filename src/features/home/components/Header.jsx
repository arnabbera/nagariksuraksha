// src/features/home/components/Header.jsx

import { useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBalanceScale,
  FaChevronDown,
  FaUserGraduate,
} from "react-icons/fa";

import { loginWithGoogle } from "../../../services/authService";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#1e293b",
    textDecoration: "none",
    fontWeight: 600,
    padding: "8px 0",
  });

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "#fff",
    minWidth: "240px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,.12)",
    overflow: "hidden",
    zIndex: 999,
  };

  const dropdownLink = {
    display: "block",
    padding: "12px 18px",
    color: "#1e293b",
    textDecoration: "none",
    borderBottom: "1px solid #f1f5f9",
  };

  const handleGoogleLogin = async () => {
    try {
      setLoginLoading(true);
      setLoginError("");

      const { profile } = await loginWithGoogle();

      setMenuOpen(false);

      navigate(
        profile?.role === "admin" ? "/admin" : "/student",
        { replace: true },
      );
    } catch (error) {
      console.error("Google login failed:", error);

      if (error?.code === "auth/popup-closed-by-user") {
        setLoginError("");
      } else if (error?.code === "auth/popup-blocked") {
        setLoginError(
          "Google login popup was blocked. Please allow popups and try again.",
        );
      } else {
        setLoginError(
          error?.message ||
            "Google login failed. Please try again.",
        );
      }
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <FaBalanceScale size={36} color="#2563eb" />

          <div>
            <h2
              style={{
                margin: 0,
                color: "#0f172a",
              }}
            >
              NagarikSuraksha
            </h2>

            <small
              style={{
                color: "#64748b",
              }}
            >
              Legal Learning & Consultancy
            </small>
          </div>
        </Link>

        <nav
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>

          <NavLink to="/about" style={navStyle}>
            About
          </NavLink>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Legal Services
              <FaChevronDown size={12} />
            </span>

            {servicesOpen && (
              <div style={dropdownStyle}>
                {[
                  "Civil Law",
                  "Criminal Law",
                  "Consumer Law",
                  "Property Law",
                  "Cyber Law",
                  "Banking & SARFAESI",
                  "Family Law",
                  "Constitutional Law",
                ].map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    style={dropdownLink}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setLearningOpen(true)}
            onMouseLeave={() => setLearningOpen(false)}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Legal Learning
              <FaChevronDown size={12} />
            </span>

            {learningOpen && (
              <div style={dropdownStyle}>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loginLoading}
                  style={{
                    ...dropdownLink,
                    width: "100%",
                    border: "none",
                    background: "#ffffff",
                    textAlign: "left",
                    cursor: loginLoading
                      ? "not-allowed"
                      : "pointer",
                    opacity: loginLoading ? 0.7 : 1,
                  }}
                >
                  LL.B Learning
                </button>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loginLoading}
                  style={{
                    ...dropdownLink,
                    width: "100%",
                    border: "none",
                    background: "#ffffff",
                    textAlign: "left",
                    cursor: loginLoading
                      ? "not-allowed"
                      : "pointer",
                    opacity: loginLoading ? 0.7 : 1,
                  }}
                >
                  Certification
                </button>

                <Link
                  to="/resources"
                  style={dropdownLink}
                >
                  Free Legal Resources
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/legal-updates"
            style={navStyle}
          >
            Legal Updates
          </NavLink>

          <NavLink to="/videos" style={navStyle}>
            Videos
          </NavLink>

          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loginLoading}
            style={{
              border: "none",
              background: "#2563eb",
              color: "#fff",
              padding: "11px 22px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 600,
              cursor: loginLoading
                ? "not-allowed"
                : "pointer",
              opacity: loginLoading ? 0.7 : 1,
            }}
          >
            <FaUserGraduate />
            {loginLoading
              ? "Signing in..."
              : "Student Login"}
          </button>
        </nav>

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => setMenuOpen((current) => !current)}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "28px",
            display: "none",
          }}
          className="mobile-toggle"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {loginError && (
        <div
          style={{
            background: "#fef2f2",
            color: "#b91c1c",
            textAlign: "center",
            padding: "10px 20px",
            fontSize: "14px",
            borderTop: "1px solid #fecaca",
          }}
        >
          {loginError}
        </div>
      )}

      {menuOpen && (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "#fff",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Legal Services
          </Link>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loginLoading}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              textAlign: "left",
              color: "#2563eb",
              cursor: loginLoading
                ? "not-allowed"
                : "pointer",
              fontSize: "16px",
            }}
          >
            LL.B Learning
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loginLoading}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              textAlign: "left",
              color: "#2563eb",
              cursor: loginLoading
                ? "not-allowed"
                : "pointer",
              fontSize: "16px",
            }}
          >
            Certification
          </button>

          <Link
            to="/legal-updates"
            onClick={() => setMenuOpen(false)}
          >
            Legal Updates
          </Link>

          <Link
            to="/videos"
            onClick={() => setMenuOpen(false)}
          >
            Videos
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loginLoading}
            style={{
              border: "none",
              background: "#2563eb",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
              cursor: loginLoading
                ? "not-allowed"
                : "pointer",
              opacity: loginLoading ? 0.7 : 1,
            }}
          >
            {loginLoading
              ? "Signing in..."
              : "Student Login"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;