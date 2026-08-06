import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Courses from "../features/admin/pages/Courses";
import Dashboard from "../features/admin/pages/Dashboard";
import HomepageCms from "../features/admin/pages/HomepageCms";
import LoginPage from "../features/auth/pages/LoginPage";
import StudentDashboard from "../features/student/pages/StudentDashboard";

import AdminLayout from "../shared/layouts/AdminLayout";
import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public website */}
      <Route
        path="/"
        element={<PublicLayout />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* Student portal */}
      <Route
        path="/student"
        element={<StudentLayout />}
      >
        <Route
          index
          element={<StudentDashboard />}
        />

        <Route
          path="courses"
          element={<h2>My Courses</h2>}
        />

        <Route
          path="certificates"
          element={<h2>Certificates</h2>}
        />

        <Route
          path="downloads"
          element={<h2>Downloads</h2>}
        />

        <Route
          path="notifications"
          element={<h2>Notifications</h2>}
        />

        <Route
          path="profile"
          element={<h2>Profile</h2>}
        />
      </Route>

      {/* Admin portal */}
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="homepage"
          element={<HomepageCms />}
        />

        <Route
          path="courses"
          element={<Courses />}
        />
      </Route>

      {/* Unknown routes */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}