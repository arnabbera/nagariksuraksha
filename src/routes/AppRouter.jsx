import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";
import AdminLayout from "../shared/layouts/AdminLayout";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public Website */}
      <Route path="/" element={<PublicLayout />} />

      {/* Student Portal */}
      <Route path="/student/*" element={<StudentLayout />} />

      {/* Admin Portal */}
      <Route path="/admin/*" element={<AdminLayout />} />

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}