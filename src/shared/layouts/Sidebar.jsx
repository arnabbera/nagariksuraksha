import { useState } from "react";

import {
  FaBalanceScale,
  FaBell,
  FaBook,
  FaBookOpen,
  FaChartBar,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaClipboardCheck,
  FaCog,
  FaComments,
  FaDatabase,
  FaFileAlt,
  FaFolderOpen,
  FaHome,
  FaImage,
  FaLayerGroup,
  FaList,
  FaQuestionCircle,
  FaSearch,
  FaTimes,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuGroups = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/admin",
        icon: FaHome,
        end: true,
      },
      {
        label: "Homepage CMS",
        path: "/admin/homepage",
        icon: FaLayerGroup,
      },
    ],
  },

  {
    title: "Content",
    items: [
      {
        label: "Content Manager",
        icon: FaFileAlt,
        children: [
          {
            label: "Posts",
            path: "/admin/posts",
          },
          {
            label: "Articles",
            path: "/admin/articles",
          },
          {
            label: "Legal Updates",
            path: "/admin/legal-updates",
          },
          {
            label: "Services",
            path: "/admin/services",
          },
          {
            label: "Judgements",
            path: "/admin/judgements",
          },
          {
            label: "Bare Acts",
            path: "/admin/bare-acts",
          },
          {
            label: "Templates",
            path: "/admin/templates",
          },
        ],
      },

      {
        label: "Videos",
        path: "/admin/videos",
        icon: FaVideo,
      },

      {
        label: "Categories",
        path: "/admin/categories",
        icon: FaList,
      },

      {
        label: "Keyword Groups",
        path: "/admin/keywords",
        icon: FaSearch,
      },
    ],
  },

  {
    title: "Learning",
    items: [
      {
        label: "Courses",
        path: "/admin/courses",
        icon: FaBook,
      },

      {
        label: "Chapters",
        path: "/admin/chapters",
        icon: FaBookOpen,
      },
	  
	  {
      label: "Law Notes",
      path: "/admin/law-notes",
      icon: FaFileAlt,
	},

      {
        label: "Resources",
        path: "/admin/resources",
        icon: FaFolderOpen,
      },

      {
        label: "Recommended Books",
        path: "/admin/books",
        icon: FaBookOpen,
      },

      // =====================================================
      // EXAMINATIONS
      // =====================================================

      {
        label: "Examinations",
        path: "/admin/exams",
        icon: FaClipboardCheck,
      },

      {
        label: "Students",
        path: "/admin/students",
        icon: FaUserGraduate,
      },

      {
        label: "Certificates",
        path: "/admin/certificates",
        icon: FaBalanceScale,
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        label: "Media Library",
        path: "/admin/media",
        icon: FaImage,
      },

      {
        label: "Comments",
        path: "/admin/comments",
        icon: FaComments,
      },

      {
        label: "Notifications",
        path: "/admin/notifications",
        icon: FaBell,
      },

      {
        label: "SEO Manager",
        path: "/admin/seo",
        icon: FaSearch,
      },

      {
        label: "Analytics",
        path: "/admin/analytics",
        icon: FaChartBar,
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        label: "Database Installer",
        path: "/admin/database",
        icon: FaDatabase,
      },

      {
        label: "Settings",
        path: "/admin/settings",
        icon: FaCog,
      },

      {
        label: "Help",
        path: "/admin/help",
        icon: FaQuestionCircle,
      },
    ],
  },
];

const Sidebar = ({
  mobileOpen = false,
  onCloseMobile,
}) => {
  const [collapsed, setCollapsed] =
    useState(false);

  const [openMenus, setOpenMenus] =
    useState({
      "Content Manager": true,
    });

  const toggleSubmenu = (label) => {
    setOpenMenus((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  const closeMobile = () => {
    onCloseMobile?.();
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeMobile}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            border: "none",
            background:
              "rgba(2, 6, 23, 0.65)",
          }}
          className="ns-sidebar-overlay"
        />
      )}

      <aside
        className={`ns-admin-sidebar ${
          collapsed
            ? "is-collapsed"
            : ""
        } ${
          mobileOpen
            ? "is-mobile-open"
            : ""
        }`}
      >
        <div className="ns-sidebar-header">
          <div className="ns-sidebar-brand">
            <div className="ns-sidebar-logo">
              <FaBalanceScale />
            </div>

            {!collapsed && (
              <div>
                <h2>
                  NagarikSuraksha
                </h2>

                <p>
                  Admin CMS
                </p>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close sidebar"
            className="ns-mobile-close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="ns-sidebar-scroll">
          {menuGroups.map(
            (group) => (
              <section
                key={
                  group.title
                }
                className="ns-sidebar-group"
              >
                {!collapsed && (
                  <p className="ns-sidebar-group-title">
                    {
                      group.title
                    }
                  </p>
                )}

                <div className="ns-sidebar-items">
                  {group.items.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      if (
                        item.children
                      ) {
                        const isOpen =
                          Boolean(
                            openMenus[
                              item
                                .label
                            ],
                          );

                        return (
                          <div
                            key={
                              item.label
                            }
                            className="ns-sidebar-parent"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                toggleSubmenu(
                                  item.label,
                                )
                              }
                              className="ns-sidebar-link ns-sidebar-button"
                              title={
                                collapsed
                                  ? item.label
                                  : ""
                              }
                            >
                              <span className="ns-sidebar-link-main">
                                {Icon && (
                                  <Icon />
                                )}

                                {!collapsed && (
                                  <span>
                                    {
                                      item.label
                                    }
                                  </span>
                                )}
                              </span>

                              {!collapsed && (
                                <FaChevronDown
                                  className={`ns-sidebar-chevron ${
                                    isOpen
                                      ? "is-open"
                                      : ""
                                  }`}
                                />
                              )}
                            </button>

                            {isOpen &&
                              !collapsed && (
                                <div className="ns-sidebar-submenu">
                                  {item.children.map(
                                    (
                                      child,
                                    ) => (
                                      <NavLink
                                        key={
                                          child.path
                                        }
                                        to={
                                          child.path
                                        }
                                        onClick={
                                          closeMobile
                                        }
                                        className={({
                                          isActive,
                                        }) =>
                                          `ns-sidebar-sublink ${
                                            isActive
                                              ? "is-active"
                                              : ""
                                          }`
                                        }
                                      >
                                        <span className="ns-sidebar-dot" />

                                        <span>
                                          {
                                            child.label
                                          }
                                        </span>
                                      </NavLink>
                                    ),
                                  )}
                                </div>
                              )}
                          </div>
                        );
                      }

                      return (
                        <NavLink
                          key={
                            item.path
                          }
                          to={
                            item.path
                          }
                          end={
                            item.end
                          }
                          onClick={
                            closeMobile
                          }
                          title={
                            collapsed
                              ? item.label
                              : ""
                          }
                          className={({
                            isActive,
                          }) =>
                            `ns-sidebar-link ${
                              isActive
                                ? "is-active"
                                : ""
                            }`
                          }
                        >
                          <span className="ns-sidebar-link-main">
                            {Icon && (
                              <Icon />
                            )}

                            {!collapsed && (
                              <span>
                                {
                                  item.label
                                }
                              </span>
                            )}
                          </span>
                        </NavLink>
                      );
                    },
                  )}
                </div>
              </section>
            ),
          )}
        </div>

        <div className="ns-sidebar-footer">
          {!collapsed && (
            <div className="ns-sidebar-status">
              <span className="ns-status-dot" />

              <div>
                <strong>
                  Firebase Connected
                </strong>

                <small>
                  Version 1.1.0
                </small>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              setCollapsed(
                (current) =>
                  !current,
              )
            }
            className="ns-sidebar-collapse"
            aria-label={
              collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
            }
          >
            {collapsed ? (
              <FaChevronRight />
            ) : (
              <>
                <FaChevronLeft />

                <span>
                  Collapse
                </span>
              </>
            )}
          </button>
        </div>
      </aside>

      <style>
        {`
          .ns-admin-sidebar {
            position: fixed;
            inset: 0 auto 0 0;
            z-index: 50;
            display: flex;
            width: 288px;
            flex-direction: column;
            background: #020617;
            color: #ffffff;
            box-shadow: 16px 0 40px rgba(15, 23, 42, 0.14);
            transition:
              width 0.25s ease,
              transform 0.25s ease;
          }

          .ns-admin-sidebar.is-collapsed {
            width: 88px;
          }

          .ns-sidebar-header {
            display: flex;
            min-height: 80px;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-bottom: 1px solid #1e293b;
            padding: 16px 18px;
          }

          .ns-sidebar-brand {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 12px;
          }

          .ns-sidebar-logo {
            display: flex;
            height: 44px;
            width: 44px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 14px;
            background: #2563eb;
            color: #ffffff;
            font-size: 22px;
            box-shadow:
              0 10px 24px
              rgba(
                37,
                99,
                235,
                0.3
              );
          }

          .ns-sidebar-brand h2 {
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            font-weight: 700;
          }

          .ns-sidebar-brand p {
            margin: 4px 0 0;
            color: #94a3b8;
            font-size: 12px;
          }

          .ns-mobile-close {
            display: none;
            border: none;
            border-radius: 10px;
            background: transparent;
            color: #94a3b8;
            cursor: pointer;
            padding: 10px;
          }

          .ns-sidebar-scroll {
            flex: 1;
            overflow-y: auto;
            padding: 18px 12px;
          }

          .ns-sidebar-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .ns-sidebar-scroll::-webkit-scrollbar-thumb {
            border-radius: 999px;
            background: #334155;
          }

          .ns-sidebar-group + .ns-sidebar-group {
            margin-top: 24px;
          }

          .ns-sidebar-group-title {
            margin: 0 0 8px;
            padding: 0 12px;
            color: #64748b;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .ns-sidebar-items {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .ns-sidebar-link,
          .ns-sidebar-button {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border: none;
            border-radius: 12px;
            background: transparent;
            color: #cbd5e1;
            cursor: pointer;
            padding: 12px 14px;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .ns-sidebar-link:hover,
          .ns-sidebar-button:hover {
            background: #0f172a;
            color: #ffffff;
          }

          .ns-sidebar-link.is-active {
            background: #2563eb;
            color: #ffffff;
            box-shadow:
              0 10px 22px
              rgba(
                37,
                99,
                235,
                0.24
              );
          }

          .ns-sidebar-link-main {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
          }

          .ns-sidebar-link-main svg {
            flex-shrink: 0;
            font-size: 16px;
          }

          .ns-sidebar-chevron {
            flex-shrink: 0;
            font-size: 12px;
            transition:
              transform 0.2s ease;
          }

          .ns-sidebar-chevron.is-open {
            transform: rotate(180deg);
          }

          .ns-sidebar-submenu {
            display: flex;
            flex-direction: column;
            gap: 2px;
            margin: 4px 0 6px 24px;
            border-left: 1px solid #334155;
            padding-left: 12px;
          }

          .ns-sidebar-sublink {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            color: #94a3b8;
            padding: 10px 12px;
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .ns-sidebar-sublink:hover,
          .ns-sidebar-sublink.is-active {
            background: #0f172a;
            color: #ffffff;
          }

          .ns-sidebar-dot {
            height: 6px;
            width: 6px;
            border-radius: 50%;
            background: currentColor;
          }

          .ns-sidebar-footer {
            border-top: 1px solid #1e293b;
            padding: 14px 12px;
          }

          .ns-sidebar-status {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            border-radius: 12px;
            background: #0f172a;
            padding: 12px;
          }

          .ns-status-dot {
            height: 9px;
            width: 9px;
            flex-shrink: 0;
            border-radius: 50%;
            background: #22c55e;
            box-shadow:
              0 0 0 4px
              rgba(
                34,
                197,
                94,
                0.12
              );
          }

          .ns-sidebar-status strong,
          .ns-sidebar-status small {
            display: block;
          }

          .ns-sidebar-status strong {
            font-size: 12px;
          }

          .ns-sidebar-status small {
            margin-top: 3px;
            color: #64748b;
            font-size: 11px;
          }

          .ns-sidebar-collapse {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: none;
            border-radius: 12px;
            background: transparent;
            color: #94a3b8;
            cursor: pointer;
            padding: 11px 12px;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .ns-sidebar-collapse:hover {
            background: #0f172a;
            color: #ffffff;
          }

          .ns-admin-sidebar.is-collapsed
            .ns-sidebar-header {
            justify-content: center;
          }

          .ns-admin-sidebar.is-collapsed
            .ns-sidebar-link,
          .ns-admin-sidebar.is-collapsed
            .ns-sidebar-button {
            justify-content: center;
            padding-inline: 12px;
          }

          .ns-admin-sidebar.is-collapsed
            .ns-sidebar-link-main {
            justify-content: center;
          }

          @media (max-width: 1023px) {
            .ns-admin-sidebar {
              width: 288px;
              transform:
                translateX(-100%);
            }

            .ns-admin-sidebar.is-mobile-open {
              transform:
                translateX(0);
            }

            .ns-admin-sidebar.is-collapsed {
              width: 288px;
            }

            .ns-mobile-close {
              display: inline-flex;
            }

            .ns-sidebar-collapse {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;