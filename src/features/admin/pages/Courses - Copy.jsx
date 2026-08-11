import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaArchive,
  FaEdit,
  FaPlus,
  FaSearch,
  FaStar,
  FaTrash,
} from "react-icons/fa";

import CourseForm from "../course-management/components/CourseForm";

import { useAuth } from "../../../hooks/useAuth";

import {
  archiveCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  publishCourse,
  setCourseFeatured,
  updateCourse,
} from "../../../services/courseService";

import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import EmptyState from "../../../shared/components/EmptyState";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import PageHeader from "../../../shared/components/PageHeader";

export default function Courses() {
  const { profile, firebaseUser } = useAuth();

  const courseFormRef = useRef(null);

  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] =
    useState(null);

  const [searchText, setSearchText] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const result =
        await getAllCourses();

      setCourses(
        result
          .filter(
            (course) =>
              !course.deleted,
          )
          .sort(
            (first, second) =>
              Number(first.order || 0) -
              Number(second.order || 0),
          ),
      );
    } catch (loadError) {
      console.error(
        "Unable to load courses:",
        loadError,
      );

      setError(
        "Unable to load courses.",
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = useMemo(() => {
    const searchQuery =
      searchText
        .trim()
        .toLowerCase();

    return courses.filter(
      (course) => {
        const matchesStatus =
          statusFilter === "all" ||
          course.status ===
            statusFilter;

        const matchesSearch =
          !searchQuery ||
          course.title
            ?.toLowerCase()
            .includes(searchQuery) ||
          course.slug
            ?.toLowerCase()
            .includes(searchQuery) ||
          course.shortDescription
            ?.toLowerCase()
            .includes(searchQuery);

        return (
          matchesStatus &&
          matchesSearch
        );
      },
    );
  }, [
    courses,
    searchText,
    statusFilter,
  ]);

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const scrollToCourseForm = () => {
    window.setTimeout(() => {
      courseFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleNewCourse = () => {
    clearMessages();

    setEditingCourse(null);

    scrollToCourseForm();
  };

  const handleEdit = (course) => {
    clearMessages();

    console.log(
      "EDIT CLICKED:",
      course,
    );

    setEditingCourse(course);

    scrollToCourseForm();
  };

  const handleCancelEdit = () => {
    clearMessages();

    setEditingCourse(null);

    scrollToCourseForm();
  };

  const handleSave = async (
    courseData,
  ) => {
    try {
      setSaving(true);
      clearMessages();

      if (editingCourse?.id) {
        await updateCourse(
          editingCourse.id,
          courseData,
          currentUserId,
        );

        setMessage(
          "Course updated successfully.",
        );
      } else {
        await createCourse(
          courseData,
          currentUserId,
        );

        setMessage(
          "Course created successfully.",
        );
      }

      setEditingCourse(null);

      await loadCourses();
    } catch (saveError) {
      console.error(
        "Unable to save course:",
        saveError,
      );

      setError(
        saveError?.message ||
          "Unable to save the course.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async (
    courseId,
  ) => {
    try {
      clearMessages();

      await publishCourse(
        courseId,
      );

      setMessage(
        "Course published successfully.",
      );

      await loadCourses();
    } catch (publishError) {
      console.error(
        "Unable to publish course:",
        publishError,
      );

      setError(
        "Unable to publish the course.",
      );
    }
  };

  const handleArchive = async (
    courseId,
  ) => {
    try {
      clearMessages();

      await archiveCourse(
        courseId,
      );

      setMessage(
        "Course archived successfully.",
      );

      await loadCourses();
    } catch (archiveError) {
      console.error(
        "Unable to archive course:",
        archiveError,
      );

      setError(
        "Unable to archive the course.",
      );
    }
  };

  const handleFeatured = async (
    courseId,
    featured,
  ) => {
    try {
      clearMessages();

      await setCourseFeatured(
        courseId,
        !featured,
      );

      setMessage(
        featured
          ? "Course removed from featured list."
          : "Course marked as featured.",
      );

      await loadCourses();
    } catch (featuredError) {
      console.error(
        "Unable to update featured status:",
        featuredError,
      );

      setError(
        "Unable to update featured status.",
      );
    }
  };

  const handleDelete = async (
    courseId,
  ) => {
    const confirmed =
      window.confirm(
        "Delete this course? It will be soft-deleted and can be restored later.",
      );

    if (!confirmed) {
      return;
    }

    try {
      clearMessages();

      await deleteCourse(
        courseId,
        currentUserId,
      );

      if (
        editingCourse?.id ===
        courseId
      ) {
        setEditingCourse(null);
      }

      setMessage(
        "Course deleted successfully.",
      );

      await loadCourses();
    } catch (deleteError) {
      console.error(
        "Unable to delete course:",
        deleteError,
      );

      setError(
        "Unable to delete the course.",
      );
    }
  };

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading courses..."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Course Management"
        description="Create, edit, publish and manage NagarikSuraksha learning courses."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Courses",
        ]}
        actions={
          <Button
            leftIcon={<FaPlus />}
            onClick={
              handleNewCourse
            }
          >
            New Course
          </Button>
        }
      />

      {message && (
        <div className="ns-course-alert ns-course-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-course-alert ns-course-error">
          {error}
        </div>
      )}

      <div
        className="ns-course-layout"
        ref={courseFormRef}
      >
        <Card
          title={
            editingCourse
              ? "Edit Course"
              : "Create Course"
          }
          subtitle={
            editingCourse
              ? `Editing: ${editingCourse.title}`
              : "Enter the course details, images and SEO information."
          }
        >
          <CourseForm
            course={
              editingCourse
            }
            saving={saving}
            onSubmit={
              handleSave
            }
            onCancel={
              editingCourse
                ? handleCancelEdit
                : undefined
            }
          />
        </Card>

        <Card
          title="Courses"
          subtitle={`${filteredCourses.length} course(s) found`}
        >
          <div className="ns-course-toolbar">
            <div className="ns-course-search">
              <FaSearch />

              <input
                value={
                  searchText
                }
                onChange={(
                  event,
                ) =>
                  setSearchText(
                    event.target
                      .value,
                  )
                }
                placeholder="Search courses..."
              />
            </div>

            <select
              value={
                statusFilter
              }
              onChange={(
                event,
              ) =>
                setStatusFilter(
                  event.target
                    .value,
                )
              }
            >
              <option value="all">
                All statuses
              </option>

              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>

              <option value="archived">
                Archived
              </option>
            </select>
          </div>

          {filteredCourses.length ===
          0 ? (
            <EmptyState
              icon="📚"
              title="No courses found"
              description="Create the first NagarikSuraksha course using the form."
            />
          ) : (
            <div className="ns-course-list">
              {filteredCourses.map(
                (course) => {
                  const thumbnailUrl =
                    course.media
                      ?.thumbnailUrl ||
                    course.thumbnailUrl ||
                    "";

                  return (
                    <article
                      key={
                        course.id
                      }
                      className="ns-course-item"
                    >
                      <div className="ns-course-item-main">
                        {thumbnailUrl ? (
                          <img
                            src={
                              thumbnailUrl
                            }
                            alt={
                              course.title
                            }
                          />
                        ) : (
                          <div className="ns-course-placeholder">
                            📘
                          </div>
                        )}

                        <div>
                          <div className="ns-course-title-row">
                            <h3>
                              {
                                course.title
                              }
                            </h3>

                            {course.featured && (
                              <FaStar
                                title="Featured course"
                                className="ns-featured-star"
                              />
                            )}
                          </div>

                          <p>
                            {course.shortDescription ||
                              "No description available."}
                          </p>

                          <div className="ns-course-meta">
                            <span>
                              {course.duration ||
                                "—"}
                            </span>

                            <span>
                              {course.courseType ||
                                "—"}
                            </span>

                            <span
                              className={`ns-status-badge is-${course.status}`}
                            >
                              {
                                course.status
                              }
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ns-course-actions">
                        <button
                          type="button"
                          title="Edit course"
                          onClick={() =>
                            handleEdit(
                              course,
                            )
                          }
                        >
                          <FaEdit />
                        </button>

                        <button
                          type="button"
                          title={
                            course.featured
                              ? "Remove featured status"
                              : "Mark as featured"
                          }
                          onClick={() =>
                            handleFeatured(
                              course.id,
                              course.featured,
                            )
                          }
                        >
                          <FaStar />
                        </button>

                        {course.status !==
                        "published" ? (
                          <button
                            type="button"
                            title="Publish course"
                            onClick={() =>
                              handlePublish(
                                course.id,
                              )
                            }
                          >
                            ✓
                          </button>
                        ) : (
                          <button
                            type="button"
                            title="Archive course"
                            onClick={() =>
                              handleArchive(
                                course.id,
                              )
                            }
                          >
                            <FaArchive />
                          </button>
                        )}

                        <button
                          type="button"
                          title="Delete course"
                          className="is-danger"
                          onClick={() =>
                            handleDelete(
                              course.id,
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          )}
        </Card>
      </div>

      <style>
        {`
          .ns-course-layout {
            display: grid;
            grid-template-columns:
              minmax(360px, 0.9fr)
              minmax(0, 1.35fr);
            gap: 22px;
            align-items: start;
            scroll-margin-top: 20px;
          }

          .ns-course-toolbar {
            display: flex;
            gap: 12px;
            margin-bottom: 18px;
          }

          .ns-course-search {
            position: relative;
            flex: 1;
          }

          .ns-course-search svg {
            position: absolute;
            top: 50%;
            left: 13px;
            color: #94a3b8;
            transform:
              translateY(-50%);
          }

          .ns-course-toolbar input,
          .ns-course-toolbar select {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            color: #0f172a;
            padding: 11px 12px;
            font: inherit;
            outline: none;
          }

          .ns-course-search input {
            padding-left: 38px;
          }

          .ns-course-toolbar input:focus,
          .ns-course-toolbar select:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(
                37,
                99,
                235,
                0.12
              );
          }

          .ns-course-list {
            display: flex;
            flex-direction: column;
            gap: 13px;
          }

          .ns-course-item {
            display: flex;
            align-items: center;
            justify-content:
              space-between;
            gap: 18px;
            border:
              1px solid #e2e8f0;
            border-radius: 15px;
            background: #ffffff;
            padding: 15px;
          }

          .ns-course-item-main {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 15px;
          }

          .ns-course-item-main img,
          .ns-course-placeholder {
            width: 90px;
            height: 64px;
            flex-shrink: 0;
            border-radius: 11px;
          }

          .ns-course-item-main img {
            object-fit: cover;
          }

          .ns-course-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eff6ff;
            font-size: 27px;
          }

          .ns-course-title-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .ns-course-title-row h3 {
            margin: 0;
            color: #0f172a;
            font-size: 15px;
          }

          .ns-featured-star {
            color: #eab308;
          }

          .ns-course-item-main p {
            margin: 6px 0 0;
            color: #64748b;
            font-size: 12px;
            line-height: 1.5;
          }

          .ns-course-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 9px;
          }

          .ns-course-meta span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 4px 8px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-status-badge.is-published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-status-badge.is-draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-status-badge.is-archived {
            background: #e2e8f0;
            color: #475569;
          }

          .ns-course-actions {
            display: flex;
            flex-shrink: 0;
            gap: 7px;
          }

          .ns-course-actions button {
            display: flex;
            width: 35px;
            height: 35px;
            align-items: center;
            justify-content: center;
            border:
              1px solid #dbeafe;
            border-radius: 9px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
          }

          .ns-course-actions button:hover {
            background: #dbeafe;
          }

          .ns-course-actions button.is-danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-course-alert {
            margin-bottom: 18px;
            border-radius: 11px;
            padding: 13px 15px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-course-success {
            border:
              1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-course-error {
            border:
              1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (
            max-width: 1150px
          ) {
            .ns-course-layout {
              grid-template-columns:
                1fr;
            }
          }

          @media (
            max-width: 700px
          ) {
            .ns-course-toolbar,
            .ns-course-item {
              align-items: stretch;
              flex-direction: column;
            }

            .ns-course-actions {
              justify-content:
                flex-end;
            }
          }
        `}
      </style>
    </div>
  );
}