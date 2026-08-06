import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaBell,
  FaChevronDown,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const Topbar = ({ onOpenSidebar }) => {
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  const {
    firebaseUser,
    profile,
    signOut,
  } = useAuth();

  const [profileMenuOpen, setProfileMenuOpen] =
    useState(false);
  const [logoutLoading, setLogoutLoading] =
    useState(false);

  const displayName =
    profile?.displayName ||
    firebaseUser?.displayName ||
    "Administrator";

  const email =
    profile?.email ||
    firebaseUser?.email ||
    "";

  const photoURL =
    profile?.photoURL ||
    firebaseUser?.photoURL ||
    "";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      await signOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLogoutLoading(false);
      setProfileMenuOpen(false);
    }
  };

  return (
    <header className="ns-admin-topbar">
      <div className="ns-topbar-left">
        <button
          type="button"
          aria-label="Open sidebar"
          onClick={onOpenSidebar}
          className="ns-topbar-icon-button ns-mobile-menu-button"
        >
          <FaBars />
        </button>

        <div>
          <p className="ns-topbar-eyebrow">
            Administration
          </p>

          <h1 className="ns-topbar-title">
            NagarikSuraksha CMS
          </h1>
        </div>
      </div>

      <div className="ns-topbar-actions">
        <button
          type="button"
          aria-label="Notifications"
          className="ns-topbar-icon-button ns-notification-button"
          onClick={() => navigate("/admin/notifications")}
        >
          <FaBell />

          <span className="ns-notification-count">
            0
          </span>
        </button>

        <div
          ref={profileMenuRef}
          className="ns-profile-menu-wrapper"
        >
          <button
            type="button"
            onClick={() =>
              setProfileMenuOpen(
                (current) => !current,
              )
            }
            className="ns-profile-button"
            aria-expanded={profileMenuOpen}
          >
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                className="ns-profile-image"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="ns-profile-initials">
                {initials || "A"}
              </span>
            )}

            <span className="ns-profile-text">
              <strong>{displayName}</strong>
              <small>{email}</small>
            </span>

            <FaChevronDown
              className={`ns-profile-chevron ${
                profileMenuOpen ? "is-open" : ""
              }`}
            />
          </button>

          {profileMenuOpen && (
            <div className="ns-profile-dropdown">
              <div className="ns-profile-dropdown-header">
                <strong>{displayName}</strong>
                <span>{email}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setProfileMenuOpen(false);
                  navigate("/admin/profile");
                }}
                className="ns-profile-dropdown-item"
              >
                <FaUser />
                Profile
              </button>

              <button
                type="button"
                onClick={handleLogout}
                disabled={logoutLoading}
                className="ns-profile-dropdown-item ns-logout-item"
              >
                <FaSignOutAlt />
                {logoutLoading
                  ? "Signing out..."
                  : "Logout"}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .ns-admin-topbar {
            position: sticky;
            top: 0;
            z-index: 30;
            display: flex;
            min-height: 80px;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            border-bottom: 1px solid #e2e8f0;
            background: rgba(255, 255, 255, 0.96);
            padding: 14px 24px;
            backdrop-filter: blur(12px);
          }

          .ns-topbar-left {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 14px;
          }

          .ns-topbar-eyebrow {
            margin: 0;
            color: #64748b;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .ns-topbar-title {
            margin: 3px 0 0;
            color: #0f172a;
            font-size: 22px;
            font-weight: 700;
          }

          .ns-topbar-actions {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .ns-topbar-icon-button {
            position: relative;
            display: inline-flex;
            height: 44px;
            width: 44px;
            align-items: center;
            justify-content: center;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            color: #334155;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .ns-topbar-icon-button:hover {
            border-color: #bfdbfe;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-mobile-menu-button {
            display: none;
          }

          .ns-notification-count {
            position: absolute;
            top: -5px;
            right: -5px;
            display: flex;
            min-width: 20px;
            height: 20px;
            align-items: center;
            justify-content: center;
            border: 2px solid #ffffff;
            border-radius: 999px;
            background: #dc2626;
            color: #ffffff;
            padding: 0 5px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-profile-menu-wrapper {
            position: relative;
          }

          .ns-profile-button {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 10px;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            background: #ffffff;
            color: #0f172a;
            cursor: pointer;
            padding: 6px 10px 6px 6px;
            transition: all 0.2s ease;
          }

          .ns-profile-button:hover {
            border-color: #bfdbfe;
            background: #f8fafc;
          }

          .ns-profile-image,
          .ns-profile-initials {
            display: flex;
            height: 40px;
            width: 40px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
          }

          .ns-profile-image {
            object-fit: cover;
          }

          .ns-profile-initials {
            background: #2563eb;
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-profile-text {
            display: block;
            min-width: 0;
            max-width: 190px;
            text-align: left;
          }

          .ns-profile-text strong,
          .ns-profile-text small {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-profile-text strong {
            color: #0f172a;
            font-size: 13px;
          }

          .ns-profile-text small {
            margin-top: 3px;
            color: #64748b;
            font-size: 11px;
          }

          .ns-profile-chevron {
            flex-shrink: 0;
            color: #94a3b8;
            font-size: 11px;
            transition: transform 0.2s ease;
          }

          .ns-profile-chevron.is-open {
            transform: rotate(180deg);
          }

          .ns-profile-dropdown {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            z-index: 100;
            width: 260px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #ffffff;
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.15);
          }

          .ns-profile-dropdown-header {
            border-bottom: 1px solid #f1f5f9;
            padding: 16px;
          }

          .ns-profile-dropdown-header strong,
          .ns-profile-dropdown-header span {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-profile-dropdown-header strong {
            color: #0f172a;
            font-size: 14px;
          }

          .ns-profile-dropdown-header span {
            margin-top: 5px;
            color: #64748b;
            font-size: 12px;
          }

          .ns-profile-dropdown-item {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 10px;
            border: none;
            background: transparent;
            color: #334155;
            cursor: pointer;
            padding: 13px 16px;
            text-align: left;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .ns-profile-dropdown-item:hover {
            background: #f8fafc;
            color: #2563eb;
          }

          .ns-profile-dropdown-item:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }

          .ns-logout-item {
            color: #dc2626;
          }

          .ns-logout-item:hover {
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1023px) {
            .ns-mobile-menu-button {
              display: inline-flex;
            }
          }

          @media (max-width: 640px) {
            .ns-admin-topbar {
              min-height: 72px;
              padding: 12px 14px;
            }

            .ns-topbar-title {
              font-size: 17px;
            }

            .ns-topbar-eyebrow {
              display: none;
            }

            .ns-profile-text,
            .ns-profile-chevron {
              display: none;
            }

            .ns-profile-button {
              padding: 5px;
            }

            .ns-notification-count {
              min-width: 18px;
              height: 18px;
              font-size: 9px;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Topbar;