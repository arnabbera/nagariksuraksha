// src/features/home/components/Header.jsx

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBalanceScale,
  FaChevronDown,
  FaUserGraduate,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);

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
        {/* Logo */}

        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <FaBalanceScale
            size={36}
            color="#2563eb"
          />

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

        {/* Desktop Menu */}

        <nav
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/"
            style={navStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={navStyle}
          >
            About
          </NavLink>

          {/* Legal Services */}

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

          {/* Learning */}

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
                <Link
                  to="/learning"
                  style={dropdownLink}
                >
                  LL.B Learning
                </Link>

                <Link
                  to="/certification"
                  style={dropdownLink}
                >
                  Certification
                </Link>

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

          <NavLink
            to="/videos"
            style={navStyle}
          >
            Videos
          </NavLink>

          <NavLink
            to="/contact"
            style={navStyle}
          >
            Contact
          </NavLink>

          <Link
            to="/login"
            style={{
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              padding: "11px 22px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 600,
            }}
          >
            <FaUserGraduate />
            Student Login
          </Link>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
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

      {/* Mobile Menu */}

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Legal Services</Link>
          <Link to="/learning">LL.B Learning</Link>
          <Link to="/legal-updates">Legal Updates</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            style={{
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            Student Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;