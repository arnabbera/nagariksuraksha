import { useEffect, useRef, useState } from "react";

import {
  FaBalanceScale,
  FaBars,
  FaBook,
  FaBookOpen,
  FaChevronDown,
  FaClipboardCheck,
  FaFileAlt,
  FaFolderOpen,
  FaHome,
  FaImage,
  FaSignOutAlt,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const learningLinks = [
  {
    label: "Admin Overview",
    description: "Legal Learning dashboard",
    path: "/admin",
    icon: FaHome,
    end: true,
  },
  {
    label: "Posts & Legal Articles",
    description: "Write articles and upload 16:9 / 9:16 images",
    path: "/admin/posts",
    icon: FaImage,
  },
  {
    label: "Courses",
    description: "Manage courses and course images",
    path: "/admin/courses",
    icon: FaBook,
  },
  {
    label: "Chapters",
    description: "Manage course chapters",
    path: "/admin/chapters",
    icon: FaBookOpen,
  },
  {
    label: "YouTube Videos & Resources",
    description: "Attach videos, PDFs and learning resources",
    path: "/admin/resources",
    icon: FaVideo,
  },
  {
    label: "Law Notes",
    description: "Publish downloadable legal study notes",
    path: "/admin/law-notes",
    icon: FaFileAlt,
  },
  {
    label: "Recommended Books",
    description: "Manage course reading lists",
    path: "/admin/books",
    icon: FaFolderOpen,
  },
  {
    label: "Examinations",
    description: "Manage mock tests and final examinations",
    path: "/admin/exams",
    icon: FaClipboardCheck,
  },
];

export default function AdminHeader() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const { firebaseUser, profile, signOut } = useAuth();

  const [learningOpen, setLearningOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const displayName =
    profile?.displayName || firebaseUser?.displayName || "Administrator";
  const email = profile?.email || firebaseUser?.email || "";
  const photoURL = profile?.photoURL || firebaseUser?.photoURL || "";

  useEffect(() => {
    const closeOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setLearningOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOutside);
    return () => document.removeEventListener("mousedown", closeOutside);
  }, []);

  const closeMenus = () => {
    setLearningOpen(false);
    setMobileOpen(false);
  };

  const handleLogout = async () => {
    try {
      setSigningOut(true);
      await signOut();
      navigate("/", { replace: true });
    } finally {
      setSigningOut(false);
    }
  };

  const renderLinks = (mobile = false) =>
    learningLinks.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.end}
          onClick={closeMenus}
          className={({ isActive }) =>
            `ns-admin-learning-link${isActive ? " active" : ""}${
              mobile ? " mobile" : ""
            }`
          }
        >
          <Icon />
          <span>
            <strong>{item.label}</strong>
            <small>{item.description}</small>
          </span>
        </NavLink>
      );
    });

  return (
    <header className="ns-admin-public-header">
      <div className="ns-admin-header-container">
        <Link to="/admin" className="ns-admin-brand" onClick={closeMenus}>
          <FaBalanceScale />
          <span>
            <strong>NagarikSuraksha</strong>
            <small>Legal Learning Administration</small>
          </span>
        </Link>

        <nav className="ns-admin-desktop-nav" ref={menuRef}>
          <div className="ns-admin-learning-menu">
            <button
              type="button"
              className="ns-admin-learning-trigger"
              onClick={() => setLearningOpen((current) => !current)}
              aria-expanded={learningOpen}
            >
              Legal Learning
              <FaChevronDown className={learningOpen ? "open" : ""} />
            </button>

            {learningOpen && (
              <div className="ns-admin-learning-dropdown">
                {renderLinks()}
              </div>
            )}
          </div>

          <div className="ns-admin-account">
            {photoURL ? (
              <img src={photoURL} alt={displayName} referrerPolicy="no-referrer" />
            ) : (
              <span className="ns-admin-account-placeholder">
                {displayName.charAt(0).toUpperCase() || "A"}
              </span>
            )}
            <span className="ns-admin-account-copy">
              <strong>{displayName}</strong>
              <small>{email}</small>
            </span>
            <button type="button" onClick={handleLogout} disabled={signingOut}>
              <FaSignOutAlt />
              {signingOut ? "Signing out" : "Logout"}
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="ns-admin-mobile-toggle"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Close Legal Learning menu" : "Open Legal Learning menu"}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <div className="ns-admin-mobile-panel">
          <p>Legal Learning</p>
          {renderLinks(true)}
          <button type="button" className="ns-admin-mobile-logout" onClick={handleLogout}>
            <FaSignOutAlt />
            {signingOut ? "Signing out" : `Logout ${email}`}
          </button>
        </div>
      )}

      <style>{`
        .ns-admin-public-header,
        .ns-admin-public-header * { box-sizing: border-box; }
        .ns-admin-public-header {
          position: sticky; top: 0; z-index: 1000;
          border-bottom: 1px solid #e2e8f0;
          background: rgba(255,255,255,.97);
          box-shadow: 0 6px 24px rgba(15,23,42,.06);
          backdrop-filter: blur(14px);
        }
        .ns-admin-header-container {
          width: min(1280px, calc(100% - 40px)); min-height: 78px;
          margin: 0 auto; display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .ns-admin-brand {
          display: inline-flex; align-items: center; gap: 12px;
          color: #0f172a; text-decoration: none;
        }
        .ns-admin-brand > svg { color: #2563eb; font-size: 34px; }
        .ns-admin-brand span, .ns-admin-account-copy { display: flex; flex-direction: column; }
        .ns-admin-brand strong { font-family: Georgia,serif; font-size: 23px; line-height: 1.05; }
        .ns-admin-brand small { margin-top: 4px; color: #64748b; font-size: 10px; letter-spacing: .04em; }
        .ns-admin-desktop-nav { display: flex; align-items: center; gap: 28px; }
        .ns-admin-learning-menu { position: relative; }
        .ns-admin-learning-trigger {
          display: inline-flex; min-height: 44px; align-items: center; gap: 8px;
          border: 0; background: transparent; color: #1e293b; cursor: pointer;
          font: inherit; font-weight: 700;
        }
        .ns-admin-learning-trigger svg { font-size: 11px; transition: transform .2s ease; }
        .ns-admin-learning-trigger svg.open { transform: rotate(180deg); }
        .ns-admin-learning-dropdown {
          position: absolute; top: calc(100% + 8px); right: 0; width: 390px;
          overflow: hidden; padding: 8px; border: 1px solid #e2e8f0;
          border-radius: 16px; background: #fff;
          box-shadow: 0 22px 60px rgba(15,23,42,.16);
        }
        .ns-admin-learning-link {
          display: flex; align-items: center; gap: 12px; padding: 12px;
          border-radius: 10px; color: #334155; text-decoration: none;
          transition: background .18s ease, color .18s ease;
        }
        .ns-admin-learning-link:hover, .ns-admin-learning-link.active { background: #eff6ff; color: #1d4ed8; }
        .ns-admin-learning-link > svg { flex: 0 0 18px; font-size: 17px; }
        .ns-admin-learning-link span { display: flex; min-width: 0; flex-direction: column; }
        .ns-admin-learning-link strong { font-size: 12px; }
        .ns-admin-learning-link small { margin-top: 3px; color: #64748b; font-size: 10px; line-height: 1.4; }
        .ns-admin-account { display: flex; align-items: center; gap: 9px; }
        .ns-admin-account img, .ns-admin-account-placeholder {
          width: 38px; height: 38px; border-radius: 50%; object-fit: cover;
        }
        .ns-admin-account-placeholder { display: grid; place-items: center; background: #dbeafe; color: #1d4ed8; font-weight: 800; }
        .ns-admin-account-copy strong { max-width: 150px; overflow: hidden; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
        .ns-admin-account-copy small { max-width: 170px; overflow: hidden; color: #64748b; font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }
        .ns-admin-account > button, .ns-admin-mobile-logout {
          display: inline-flex; min-height: 36px; align-items: center; gap: 7px;
          border: 1px solid #fecaca; border-radius: 9px; background: #fff1f2;
          color: #dc2626; cursor: pointer; font: inherit; font-size: 10px; font-weight: 800;
          padding: 0 11px;
        }
        .ns-admin-mobile-toggle { display: none; border: 0; background: transparent; color: #1e293b; font-size: 23px; }
        .ns-admin-mobile-panel { display: none; }
        @media (max-width: 900px) {
          .ns-admin-header-container { width: min(100% - 28px,1280px); min-height: 70px; }
          .ns-admin-desktop-nav { display: none; }
          .ns-admin-mobile-toggle { display: inline-flex; padding: 8px; }
          .ns-admin-mobile-panel {
            display: block; max-height: calc(100vh - 70px); overflow-y: auto;
            padding: 12px 14px 18px; border-top: 1px solid #e2e8f0; background: #fff;
          }
          .ns-admin-mobile-panel > p { margin: 0 10px 8px; color: #2563eb; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
          .ns-admin-learning-link.mobile { padding: 12px 10px; }
          .ns-admin-mobile-logout { width: 100%; justify-content: center; margin-top: 10px; }
        }
        @media (max-width: 480px) {
          .ns-admin-brand strong { font-size: 20px; }
          .ns-admin-brand small { font-size: 8px; }
          .ns-admin-brand > svg { font-size: 29px; }
        }
      `}</style>
    </header>
  );
}
