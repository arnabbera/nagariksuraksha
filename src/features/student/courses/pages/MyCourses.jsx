import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaSearch } from "react-icons/fa";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getPublishedCourses,
} from "../../../../services/courseService";

import {
  getStudentEnrollments,
  hasPaidCourseAccess,
} from "../../../../services/studentEnrollmentService";

import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

import CourseCard from "../components/CourseCard";

export default function MyCourses({ view = "available" }) {
  const { firebaseUser, profile } = useAuth();

  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const studentId =
    firebaseUser?.uid || profile?.uid || "";

  useEffect(() => {
    if (studentId) {
      loadData();
    }
  }, [studentId]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [
        publishedCourses,
        studentEnrollments,
      ] = await Promise.all([
        getPublishedCourses({
          pageSize: 100,
        }),
        getStudentEnrollments(studentId),
      ]);

      setCourses(
        Array.isArray(publishedCourses)
          ? publishedCourses
          : [],
      );

      setEnrollments(
        Array.isArray(studentEnrollments)
          ? studentEnrollments
          : [],
      );
    } catch (loadError) {
      console.error(
        "Unable to load student courses:",
        loadError,
      );

      setError(
        "Unable to load courses at the moment.",
      );
    } finally {
      setLoading(false);
    }
  };

  const enrollmentMap = useMemo(() => {
    return Object.fromEntries(
      enrollments
        .filter(
          (enrollment) =>
            enrollment?.courseId,
        )
        .map((enrollment) => [
          enrollment.courseId,
          enrollment,
        ]),
    );
  }, [enrollments]);

  const filteredCourses = useMemo(() => {
    const query =
      searchText.trim().toLowerCase();

    return courses.filter((course) => {
      if (!course) {
        return false;
      }

      const paid = hasPaidCourseAccess(
        enrollmentMap[course.id],
      );

      if (view === "enrolled" && !paid) return false;
      if (view === "available" && paid) return false;

      if (!query) return true;

      return (
        course.title
          ?.toLowerCase()
          .includes(query) ||
        course.shortDescription
          ?.toLowerCase()
          .includes(query)
      );
    });
  }, [courses, enrollmentMap, searchText, view]);

  const enrolledCount = enrollments.filter(
    hasPaidCourseAccess,
  ).length;

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading your courses..."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title={view === "enrolled" ? "Enrolled Courses" : "Available Courses"}
        description={view === "enrolled"
          ? `${enrolledCount} paid course(s). Continue your enrolled courses.`
          : "Choose a course and complete the ₹49 payment to join and view it."}
        breadcrumbs={[
          "Student",
          view === "enrolled" ? "Enrolled Courses" : "Available Courses",
        ]}
      />

      {error && (
        <div className="ns-student-course-error">
          {error}
        </div>
      )}

      <div className="ns-course-searchbar">
        <FaSearch />

        <input
          type="text"
          value={searchText}
          onChange={(event) =>
            setSearchText(
              event.target.value,
            )
          }
          placeholder="Search courses..."
        />
      </div>

      {filteredCourses.length === 0 ? (
        <EmptyState
          icon="📚"
          title="No courses available"
          description={view === "enrolled"
            ? "Courses appear here after successful ₹49 payment."
            : "All published courses have already been enrolled."}
        />
      ) : (
        <div className="ns-student-course-grid">
          {filteredCourses
            .filter(
              (course) =>
                course && course.id,
            )
            .map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                enrollment={
                  enrollmentMap[
                    course.id
                  ] || null
                }
                view={view}
              />
            ))}
        </div>
      )}

      <style>
        {`
          .ns-course-searchbar {
            position: relative;
            max-width: 520px;
            margin-bottom: 22px;
          }

          .ns-course-searchbar svg {
            position: absolute;
            top: 50%;
            left: 15px;
            color: #94a3b8;
            transform: translateY(-50%);
          }

          .ns-course-searchbar input {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            background: #ffffff;
            padding: 12px 14px 12px 42px;
            color: #0f172a;
            outline: none;
          }

          .ns-course-searchbar input:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37, 99, 235, 0.1);
          }

          .ns-student-course-grid {
            display: grid;
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .ns-student-course-error {
            margin-bottom: 18px;
            border: 1px solid #fecaca;
            border-radius: 11px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 13px 15px;
            font-size: 13px;
            font-weight: 700;
          }

          @media (max-width: 1100px) {
            .ns-student-course-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 700px) {
            .ns-student-course-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}
