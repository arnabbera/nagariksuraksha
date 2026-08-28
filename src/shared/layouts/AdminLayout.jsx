import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = () => {
  const {
    firebaseUser,
    loading,
    role,
  } = useAuth();

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  if (loading) {
    return (
      <div className="ns-admin-auth-loading">
        Verifying administrator access...
      </div>
    );
  }

  if (
    !firebaseUser ||
    role !== "admin"
  ) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <div className="ns-admin-shell">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() =>
          setMobileSidebarOpen(false)
        }
      />

      <div className="ns-admin-main">
        <Topbar
          onOpenSidebar={() =>
            setMobileSidebarOpen(true)
          }
        />

        <main className="ns-admin-content">
          <div className="ns-admin-content-inner">
            <Outlet />
          </div>
        </main>
      </div>

      <style>
        {`
          .ns-admin-shell {
            min-height: 100vh;
            background: #f8fafc;
            color: #0f172a;
          }

          .ns-admin-main {
            min-height: 100vh;
            margin-left: 288px;
            transition: margin-left 0.25s ease;
          }

          .ns-admin-content {
            min-height: calc(100vh - 80px);
            padding: 28px;
          }

          .ns-admin-content-inner {
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
          }

          @media (max-width: 1023px) {
            .ns-admin-main {
              margin-left: 0;
            }

            .ns-admin-content {
              padding: 20px;
            }
          }

          @media (max-width: 640px) {
            .ns-admin-content {
              padding: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AdminLayout;
