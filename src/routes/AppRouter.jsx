import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// =========================================================
// ADMIN
// =========================================================

import Courses from "../features/admin/pages/Courses";
import Dashboard from "../features/admin/pages/Dashboard";
import HomepageCms from "../features/admin/pages/HomepageCms";

import ChapterManagement from "../features/admin/chapters/pages/ChapterManagement";

import ResourceManagement from "../features/admin/resources/pages/ResourceManagement";

import CourseBookManagement from "../features/admin/books/pages/CourseBookManagement";

import ExamManagement from "../features/admin/exams/pages/ExamManagement";

// =========================================================
// AUTH
// =========================================================

import LoginPage from "../features/auth/pages/LoginPage";

// =========================================================
// PUBLIC SEO PAGES
// =========================================================

import PublicCoursesPage from "../features/public/courses/pages/PublicCoursesPage";

import PublicCourseDetailsPage from "../features/public/courses/pages/PublicCourseDetailsPage";

// =========================================================
// STUDENT
// =========================================================

import StudentDashboard from "../features/student/pages/StudentDashboard";

import MyCourses from "../features/student/courses/pages/MyCourses";

import CourseDetails from "../features/student/courses/pages/CourseDetails";

import ChapterLearning from "../features/student/learning/pages/ChapterLearning";

import MockTestPage from "../features/student/exams/pages/MockTestPage";

import FinalExamPage from "../features/student/exams/pages/FinalExamPage";

// =========================================================
// LAYOUTS
// =========================================================

import AdminLayout from "../shared/layouts/AdminLayout";
import PublicLayout from "../shared/layouts/PublicLayout";
import StudentLayout from "../shared/layouts/StudentLayout";

// =========================================================
// ROUTER
// =========================================================

export default function AppRouter() {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC HOMEPAGE
      ====================================================== */}

      <Route
        path="/"
        element={<PublicLayout />}
      />

      {/* =====================================================
          PUBLIC SEO COURSE PAGES
      ====================================================== */}

      <Route
        path="/llb-courses"
        element={
          <PublicCoursesPage />
        }
      />

      <Route
        path="/courses/:courseSlug"
        element={
          <PublicCourseDetailsPage />
        }
      />

      {/* =====================================================
          LOGIN
      ====================================================== */}

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
          path="mock-test/torts/:testNumber"
          element={<MockTestPage />}
        />

        <Route
          path="final-exam/torts"
          element={<FinalExamPage />}
        />

        <Route
          path="certificates"
          element={
            <h2>
              Certificates
            </h2>
          }
        />

        <Route
          path="downloads"
          element={
            <h2>
              Downloads
            </h2>
          }
        />

        <Route
          path="notifications"
          element={
            <h2>
              Notifications
            </h2>
          }
        />

        <Route
          path="profile"
          element={
            <h2>
              Profile
            </h2>
          }
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

        <Route
          path="books"
          element={<CourseBookManagement />}
        />

        <Route
          path="exams"
          element={<ExamManagement />}
        />

        <Route
          path="exams/torts/mock/:testNumber"
          element={<MockTestPage />}
        />

        <Route
          path="exams/torts/final"
          element={<FinalExamPage />}
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