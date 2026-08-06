import { useMemo, useState } from "react";
import {
  FaBars,
  FaBell,
  FaBook,
  FaChartBar,
  FaComments,
  FaFileAlt,
  FaHome,
  FaImage,
  FaSearch,
  FaSignOutAlt,
  FaTimes,
  FaUser,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { logoutUser } from "../../firebase/auth";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: FaHome,
    end: true,
  },
  {
    label: "Homepage CMS",
    path: "/admin/homepage",
    icon: FaFileAlt,
  },
  {
    label: "Posts",
    path: "/admin/posts",
    icon: FaFileAlt,
  },
  {
    label: "Videos",
    path: "/admin/videos",
    icon: FaVideo,
  },
  {
    label: "Media Library",
    path: "/admin/media",
    icon: FaImage,
  },
  {
    label: "Courses",
    path: "/admin/courses",
    icon: FaBook,
  },
  {
    label: "Students",
    path: "/admin/students",
    icon: FaUsers,
  },
  {
    label: "Comments",
    path: "/admin/comments",
    icon: FaComments,
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
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const adminName = "Arnab Bera";
  const adminEmail = "beraarnab@gmail.com";

  const initials = useMemo(
    () =>
      adminName
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [],
  );

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const closeMobileSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <div>
            <h1 className="text-xl font-bold">NagarikSuraksha</h1>
            <p className="mt-1 text-xs text-slate-400">Admin CMS</p>
          </div>

          <button
            type="button"
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
            onClick={closeMobileSidebar}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon className="shrink-0 text-base" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-800 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 hover:text-red-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-4">
              <button
                type="button"
                aria-label="Open sidebar"
                className="rounded-xl border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <FaBars />
              </button>

              <div className="min-w-0">
                <p className="text-sm text-slate-500">Administration</p>
                <h2 className="truncate text-xl font-bold text-slate-950">
                  NagarikSuraksha Dashboard
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifications"
                className="relative rounded-xl border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100"
              >
                <FaBell />

                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  3
                </span>
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((current) => !current)}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {initials}
                  </span>

                  <span className="hidden text-left sm:block">
                    <span className="block text-sm font-semibold text-slate-900">
                      {adminName}
                    </span>
                    <span className="block max-w-44 truncate text-xs text-slate-500">
                      {adminEmail}
                    </span>
                  </span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                    <div className="border-b border-slate-100 px-3 py-3">
                      <p className="font-semibold text-slate-900">{adminName}</p>
                      <p className="mt-1 truncate text-sm text-slate-500">
                        {adminEmail}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      <FaUser />
                      Profile
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;