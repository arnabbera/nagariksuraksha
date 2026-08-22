import { useEffect } from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
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

import PostManagement from "../features/admin/posts/pages/PostManagement";

// =========================================================
// LAW NOTES - ADMIN
// =========================================================

import LawNoteManagement from "../features/admin/law-notes/pages/LawNoteManagement";

// =========================================================
// AUTH
// =========================================================

import LoginPage from "../features/auth/pages/LoginPage";

// =========================================================
// PUBLIC SEO PAGES
// =========================================================

import AboutPage from "../features/public/about/pages/AboutPage";

import PublicCoursesPage from "../features/public/courses/pages/PublicCoursesPage";

import PublicCourseDetailsPage from "../features/public/courses/pages/PublicCourseDetailsPage";

import LegalServiceDetailsPage from "../features/public/services/pages/LegalServiceDetailsPage";

import DisclaimerPage from "../features/public/legal/pages/DisclaimerPage";
import PrivacyPolicyPage from "../features/public/legal/pages/PrivacyPolicyPage";
import TermsPage from "../features/public/legal/pages/TermsPage";

// =========================================================
// PUBLIC LAW NOTES
// =========================================================

import LawNotesIndexPage from "../features/public/lawNotes/pages/LawNotesIndexPage";

import LawNoteDetailsPage from "../features/public/lawNotes/pages/LawNoteDetailsPage";

// =========================================================
// PUBLIC POSTS
// =========================================================

import PostsPage from "../features/public/posts/pages/PostsPage";

import PostDetailsPage from "../features/public/posts/pages/PostDetailsPage";

// =========================================================
// STUDENT
// =========================================================

import StudentDashboard from "../features/student/pages/StudentDashboard";

import MyCourses from "../features/student/courses/pages/MyCourses";

import CourseDetails from "../features/student/courses/pages/CourseDetails";

import ChapterLearning from "../features/student/learning/pages/ChapterLearning";

import MockTestPage from "../features/student/exams/pages/MockTestPage";

import FinalExamPage from "../features/student/exams/pages/FinalExamPage";

import StudentCertificatesPage from "../features/student/certificates/pages/StudentCertificatesPage";

import StudentProfilePage from "../features/student/profile/pages/StudentProfilePage";

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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return undefined;
  }, [pathname, hash]);

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
          ABOUT
      ====================================================== */}

      <Route
        path="/about"
        element={<AboutPage />}
      />

      {/* =====================================================
          PUBLIC LEGAL INFORMATION
      ====================================================== */}

      <Route
        path="/disclaimer"
        element={<DisclaimerPage />}
      />

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicyPage />}
      />

      <Route
        path="/terms"
        element={<TermsPage />}
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
          PUBLIC LEGAL SERVICES
      ====================================================== */}

      <Route
        path="/services/:serviceSlug"
        element={
          <LegalServiceDetailsPage />
        }
      />

      {/* =====================================================
          PUBLIC LAW NOTES
      ====================================================== */}

      <Route
        path="/law-notes"
        element={
          <LawNotesIndexPage />
        }
      />

      <Route
        path="/law-notes/:noteSlug"
        element={
          <LawNoteDetailsPage />
        }
      />

      {/* =====================================================
          PUBLIC POSTS
      ====================================================== */}

      <Route
        path="/posts"
        element={
          <PostsPage />
        }
      />

      <Route
        path="/posts/:postSlug"
        element={
          <PostDetailsPage />
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
          element={<Navigate to="/student/available-courses" replace />}
        />

        <Route
          path="available-courses"
          element={<MyCourses view="available" />}
        />

        <Route
          path="enrolled-courses"
          element={<MyCourses view="enrolled" />}
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
          path="certification"
          element={<StudentCertificatesPage />}
        />

        <Route
          path="certificates"
          element={
            <Navigate
              to="/student/certification"
              replace
            />
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
          element={<StudentProfilePage />}
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

        {/* =================================================
            CONTENT MANAGER - POSTS
        ================================================== */}

        <Route
          path="posts"
          element={<PostManagement />}
        />

        {/* =================================================
            COURSES
        ================================================== */}

        <Route
          path="courses"
          element={<Courses />}
        />

        <Route
          path="chapters"
          element={<ChapterManagement />}
        />

        {/* =================================================
            LAW NOTES
        ================================================== */}

        <Route
          path="law-notes"
          element={<LawNoteManagement />}
        />

        {/* =================================================
            RESOURCES / BOOKS
        ================================================== */}

        <Route
          path="resources"
          element={<ResourceManagement />}
        />

        <Route
          path="books"
          element={<CourseBookManagement />}
        />

        {/* =================================================
            EXAMINATION
        ================================================== */}

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
