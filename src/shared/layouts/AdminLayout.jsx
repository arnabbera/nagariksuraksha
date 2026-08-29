import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { isAdminEmail } from "../../services/authService";

import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const {
    firebaseUser,
    loading,
    role,
  } = useAuth();

  if (loading) {
    return (
      <div className="ns-admin-auth-loading">
        Verifying administrator access...
      </div>
    );
  }

  if (
    !firebaseUser ||
    role !== "admin" ||
    !isAdminEmail(firebaseUser.email)
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
      <AdminHeader />

      <main className="ns-admin-content">
        <div className="ns-admin-content-inner">
          <Outlet />
        </div>
      </main>

      <style>
        {`
          .ns-admin-shell {
            min-height: 100vh;
            background: #f8fafc;
            color: #0f172a;
          }

          .ns-admin-content {
            min-height: calc(100vh - 78px);
            padding: 36px 24px 64px;
          }

          .ns-admin-content-inner {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
          }

          @media (max-width: 1023px) {
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
