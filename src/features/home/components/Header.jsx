import { useState } from "react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaBalanceScale,
  FaChevronDown,
} from "react-icons/fa";

import { LEGAL_SERVICES } from "../../public/services/data/legalServices";

const Header = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [learningOpen, setLearningOpen] =
    useState(false);

  const navStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#1e293b",
    textDecoration: "none",
    fontWeight: 600,
    padding: "8px 0",
    whiteSpace: "nowrap",
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

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setLearningOpen(false);
  };

  return (
    <>
      <header className="ns-public-header">
        <div className="ns-header-container">
          {/* BRAND */}

          <Link
            to="/"
            className="ns-header-brand"
            onClick={closeMenu}
          >
            <FaBalanceScale className="ns-header-logo" />

            <div className="ns-header-brand-text">
              <h2>NagarikSuraksha</h2>

              <small>
                Legal Learning & Consultancy
              </small>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="ns-desktop-menu">
            <NavLink to="/" style={navStyle}>
              Home
            </NavLink>

            <NavLink
              to="/about"
              style={navStyle}
            >
              About
            </NavLink>

            {/* SERVICES */}

            <div
              className="ns-header-dropdown"
              onMouseEnter={() =>
                setServicesOpen(true)
              }
              onMouseLeave={() =>
                setServicesOpen(false)
              }
            >
              <button
                type="button"
                className="ns-dropdown-trigger"
                onClick={() =>
                  setServicesOpen(
                    (current) => !current,
                  )
                }
              >
                Legal Services
                <FaChevronDown size={11} />
              </button>

              {servicesOpen && (
                <div style={dropdownStyle}>
                  {LEGAL_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      style={dropdownLink}
                      onClick={() =>
                        setServicesOpen(false)
                      }
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* LEARNING */}

            <div
              className="ns-header-dropdown"
              onMouseEnter={() =>
                setLearningOpen(true)
              }
              onMouseLeave={() =>
                setLearningOpen(false)
              }
            >
              <button
                type="button"
                className="ns-dropdown-trigger"
                onClick={() =>
                  setLearningOpen(
                    (current) => !current,
                  )
                }
              >
                Legal Learning
                <FaChevronDown size={11} />
              </button>

              {learningOpen && (
                <div style={dropdownStyle}>
                  <Link
                    to="/llb-courses"
                    style={dropdownLink}
                    onClick={closeMenu}
                  >
                    LL.B Learning
                  </Link>

                  <Link
                    to="/login"
                    style={dropdownLink}
                    onClick={closeMenu}
                  >
                    Certification
                  </Link>

                  <Link
                    to="/law-notes"
                    style={dropdownLink}
                    onClick={closeMenu}
                  >
                    Free Legal Resources
                  </Link>

                  <Link to="/#legal-updates" style={dropdownLink} onClick={closeMenu}>
                    Legal Updates
                  </Link>

                  <Link to="/#latest-videos" style={dropdownLink} onClick={closeMenu}>
                    Learning Videos
                  </Link>

                  <Link to="/posts" style={dropdownLink} onClick={closeMenu}>
                    Posts
                  </Link>

                  <Link to="/articles" style={dropdownLink} onClick={closeMenu}>
                    Articles
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/#legal-consultation"
              style={navStyle}
            >
              Contact
            </NavLink>
          </nav>

          {/* MOBILE HAMBURGER */}

          <button
            type="button"
            className="ns-mobile-toggle"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (current) => !current,
              )
            }
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <nav className="ns-mobile-menu">
            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>

            <div className="ns-mobile-group">
              <button
                type="button"
                onClick={() =>
                  setServicesOpen(
                    (current) => !current,
                  )
                }
              >
                <span>
                  Legal Services
                </span>

                <FaChevronDown
                  className={
                    servicesOpen
                      ? "is-open"
                      : ""
                  }
                />
              </button>

              {servicesOpen && (
                <div className="ns-mobile-submenu">
                  {LEGAL_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="ns-mobile-group">
              <button
                type="button"
                onClick={() =>
                  setLearningOpen(
                    (current) => !current,
                  )
                }
              >
                <span>
                  Legal Learning
                </span>

                <FaChevronDown
                  className={
                    learningOpen
                      ? "is-open"
                      : ""
                  }
                />
              </button>

              {learningOpen && (
                <div className="ns-mobile-submenu">
                  <Link
                    to="/llb-courses"
                    onClick={closeMenu}
                  >
                    LL.B Learning
                  </Link>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                  >
                    Certification
                  </Link>

                  <Link
                    to="/law-notes"
                    onClick={closeMenu}
                  >
                    Free Legal Resources
                  </Link>

                  <Link to="/#legal-updates" onClick={closeMenu}>
                    Legal Updates
                  </Link>

                  <Link to="/#latest-videos" onClick={closeMenu}>
                    Learning Videos
                  </Link>

                  <Link to="/posts" onClick={closeMenu}>
                    Posts
                  </Link>

                  <Link to="/articles" onClick={closeMenu}>
                    Articles
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/#legal-consultation"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        )}
      </header>

      <style>
        {`
          .ns-public-header,
          .ns-public-header * {
            box-sizing: border-box;
          }

          .ns-public-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            width: 100%;
            max-width: 100vw;
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
          }

          .ns-header-container {
            width: 100%;
            max-width: 1280px;
            min-width: 0;
            margin: 0 auto;
            padding: 15px 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 24px;
          }

          .ns-header-brand {
            display: flex;
            min-width: 0;
            flex-shrink: 0;
            align-items: center;
            gap: 11px;

            color: inherit;
            text-decoration: none;
          }

          .ns-header-logo {
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            color: #2563eb;
          }

          .ns-header-brand-text {
            min-width: 0;
          }

          .ns-header-brand h2 {
            margin: 0;
            color: #0f172a;
            font-size: 21px;
            line-height: 1.15;
          }

          .ns-header-brand small {
            display: block;
            margin-top: 3px;
            color: #64748b;
            font-size: 11px;
            white-space: nowrap;
          }

          .ns-desktop-menu {
            display: flex;
            min-width: 0;
            align-items: center;
            justify-content: flex-end;
            gap: clamp(15px, 1.7vw, 28px);
          }

          .ns-header-dropdown {
            position: relative;
            flex-shrink: 0;
          }

          .ns-dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 5px;

            border: 0;
            background: transparent;
            color: #1e293b;

            padding: 8px 0;

            cursor: pointer;

            font-family: inherit;
            font-size: inherit;
            font-weight: 600;
            white-space: nowrap;
          }

          .ns-header-login {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            gap: 8px;

            border: 0;
            border-radius: 999px;

            background: #2563eb;
            color: #ffffff;

            padding: 11px 18px;

            cursor: pointer;

            font-family: inherit;
            font-weight: 700;
            white-space: nowrap;
          }

          .ns-header-login:disabled {
            cursor: not-allowed;
            opacity: .65;
          }

          /*
           * Critical:
           * hamburger is hidden on desktop,
           * but CSS—not inline style—controls it.
           */

          .ns-mobile-toggle {
            display: none;
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            border: 1px solid #e2e8f0;
            border-radius: 11px;

            background: #ffffff;
            color: #1e293b;

            cursor: pointer;
            font-size: 22px;
          }

          .ns-mobile-menu {
            display: none;
          }

          .ns-header-error {
            border-top: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
            padding: 9px 16px;
            text-align: center;
            font-size: 12px;
          }

          /*
           * Tablet/mobile navigation breakpoint.
           * We use 1050px rather than 768px because this
           * navigation has several menu items.
           */

          @media (max-width: 1050px) {
            .ns-desktop-menu {
              display: none;
            }

            .ns-mobile-toggle {
              display: flex;
            }

            .ns-mobile-menu {
              display: flex;
              width: 100%;
              max-height: calc(100vh - 75px);
              overflow-y: auto;
              flex-direction: column;

              border-top: 1px solid #e2e8f0;
              background: #ffffff;

              padding: 8px 18px 20px;
            }

            .ns-mobile-menu > a,
            .ns-mobile-group > button {
              display: flex;
              width: 100%;
              min-height: 48px;
              align-items: center;
              justify-content: space-between;

              border: 0;
              border-bottom: 1px solid #f1f5f9;
              background: transparent;
              color: #1e293b;

              padding: 11px 4px;

              cursor: pointer;

              font-family: inherit;
              font-size: 14px;
              font-weight: 650;
              text-align: left;
              text-decoration: none;
            }

            .ns-mobile-group > button svg {
              transition: transform .2s ease;
            }

            .ns-mobile-group > button svg.is-open {
              transform: rotate(180deg);
            }

            .ns-mobile-submenu {
              display: flex;
              flex-direction: column;
              border-bottom: 1px solid #e2e8f0;
              background: #f8fafc;
              padding: 5px 13px;
            }

            .ns-mobile-submenu a,
            .ns-mobile-submenu button {
              display: block;
              width: 100%;

              border: 0;
              border-bottom: 1px solid #eef2f7;
              background: transparent;
              color: #475569;

              padding: 11px 4px;

              cursor: pointer;

              font-family: inherit;
              font-size: 13px;
              text-align: left;
              text-decoration: none;
            }

            .ns-mobile-submenu a:last-child,
            .ns-mobile-submenu button:last-child {
              border-bottom: 0;
            }

            .ns-mobile-login {
              display: flex;
              width: 100%;
              min-height: 46px;
              align-items: center;
              justify-content: center;
              gap: 8px;

              margin-top: 14px;

              border: 0;
              border-radius: 10px;

              background: #2563eb;
              color: #ffffff;

              cursor: pointer;

              font-family: inherit;
              font-size: 14px;
              font-weight: 700;
            }
          }

          @media (max-width: 640px) {
            .ns-header-container {
              min-height: 66px;
              padding: 10px 14px;
              gap: 10px;
            }

            .ns-header-logo {
              width: 28px;
              height: 28px;
            }

            .ns-header-brand {
              gap: 8px;
            }

            .ns-header-brand h2 {
              font-size: 18px;
            }

            .ns-header-brand small {
              display: none;
            }

            .ns-mobile-toggle {
              width: 40px;
              height: 40px;
              border-radius: 9px;
              font-size: 20px;
            }

            .ns-mobile-menu {
              padding-left: 14px;
              padding-right: 14px;
            }
          }

          @media (max-width: 360px) {
            .ns-header-brand h2 {
              font-size: 16px;
            }

            .ns-header-logo {
              width: 25px;
              height: 25px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
