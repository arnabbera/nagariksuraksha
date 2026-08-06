import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import AdminLayout from "../shared/layouts/AdminLayout";
import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/student/*" element={<StudentLayout />} />

      <Route path="/admin/*" element={<AdminLayout />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}