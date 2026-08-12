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

        {/* -----------------------------------------------
            COURSES
        ------------------------------------------------ */}

        <Route
          path="courses"
          element={<MyCourses />}
        />

        <Route
          path="courses/:courseId"
          element={<CourseDetails />}
        />

        {/* -----------------------------------------------
            CHAPTER LEARNING
        ------------------------------------------------ */}

        <Route
          path="learn/:courseId/:chapterId"
          element={<ChapterLearning />}
        />

        {/* -----------------------------------------------
            CERTIFICATION / MOCK TESTS
        ------------------------------------------------ */}

        <Route
          path="mock-test/torts/:testNumber"
          element={<MockTestPage />}
        />

        {/* -----------------------------------------------
            FINAL EXAM
        ------------------------------------------------ */}

        <Route
          path="final-exam/torts"
          element={<FinalExamPage />}
        />

        {/* -----------------------------------------------
            CERTIFICATES
        ------------------------------------------------ */}

        <Route
          path="certificates"
          element={
            <h2>
              Certificates
            </h2>
          }
        />

        {/* -----------------------------------------------
            DOWNLOADS
        ------------------------------------------------ */}

        <Route
          path="downloads"
          element={
            <h2>
              Downloads
            </h2>
          }
        />

        {/* -----------------------------------------------
            NOTIFICATIONS
        ------------------------------------------------ */}

        <Route
          path="notifications"
          element={
            <h2>
              Notifications
            </h2>
          }
        />

        {/* -----------------------------------------------
            PROFILE
        ------------------------------------------------ */}

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

        {/* -----------------------------------------------
            HOMEPAGE CMS
        ------------------------------------------------ */}

        <Route
          path="homepage"
          element={<HomepageCms />}
        />

        {/* -----------------------------------------------
            COURSES
        ------------------------------------------------ */}

        <Route
          path="courses"
          element={<Courses />}
        />

        {/* -----------------------------------------------
            CHAPTERS
        ------------------------------------------------ */}

        <Route
          path="chapters"
          element={<ChapterManagement />}
        />

        {/* -----------------------------------------------
            CHAPTER RESOURCES
        ------------------------------------------------ */}

        <Route
          path="resources"
          element={<ResourceManagement />}
        />

        {/* -----------------------------------------------
            RECOMMENDED BOOKS
        ------------------------------------------------ */}

        <Route
          path="books"
          element={<CourseBookManagement />}
        />

        {/* -----------------------------------------------
            EXAMINATION MANAGEMENT
        ------------------------------------------------ */}

        <Route
          path="exams"
          element={<ExamManagement />}
        />

        {/* -----------------------------------------------
            TORTS - MOCK TEST ADMIN PREVIEW
        ------------------------------------------------ */}

        <Route
          path="exams/torts/mock/:testNumber"
          element={<MockTestPage />}
        />

        {/* -----------------------------------------------
            TORTS - FINAL EXAM ADMIN PREVIEW
        ------------------------------------------------ */}

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