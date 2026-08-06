import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "../features/admin/pages/Dashboard";
import LoginPage from "../features/auth/pages/LoginPage";
import AdminLayout from "../shared/layouts/AdminLayout";
import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public website */}
      <Route path="/" element={<PublicLayout />} />

      {/* Authentication */}
      <Route path="/login" element={<LoginPage />} />

      {/* Student portal */}
      <Route
        path="/student/*"
        element={<StudentLayout />}
      />

      {/* Admin portal */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Unknown routes */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}