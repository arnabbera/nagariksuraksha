import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Courses from "../features/admin/pages/Courses";
import Dashboard from "../features/admin/pages/Dashboard";
import HomepageCms from "../features/admin/pages/HomepageCms";

import ChapterManagement from "../features/admin/chapters/pages/ChapterManagement";
import ResourceManagement from "../features/admin/resources/pages/ResourceManagement";
import CourseBookManagement from "../features/admin/books/pages/CourseBookManagement";

import LoginPage from "../features/auth/pages/LoginPage";

import StudentDashboard from "../features/student/pages/StudentDashboard";

import MyCourses from "../features/student/courses/pages/MyCourses";
import CourseDetails from "../features/student/courses/pages/CourseDetails";

import ChapterLearning from "../features/student/learning/pages/ChapterLearning";

import AdminLayout from "../shared/layouts/AdminLayout";
import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";

export default function AppRouter() {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC
      ====================================================== */}

      <Route
        path="/"
        element={<PublicLayout />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* =====================================================
          STUDENT PORTAL
      ====================================================== */}

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
          element={<MyCourses />}
        />

        <Route
          path="courses/:courseId"
          element={<CourseDetails />}
        />

        <Route
          path="learn/:courseId/:chapterId"
          element={<ChapterLearning />}
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

      {/* =====================================================
          ADMIN PORTAL
      ====================================================== */}

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

        <Route
          path="chapters"
          element={<ChapterManagement />}
        />

        <Route
          path="resources"
          element={<ResourceManagement />}
        />

        {/* Recommended Books */}

        <Route
          path="books"
          element={<CourseBookManagement />}
        />
      </Route>

      {/* =====================================================
          404
      ====================================================== */}

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