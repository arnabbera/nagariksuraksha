import { useEffect, useMemo, useState } from "react";
import {
  FaBookOpen,
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import {
  createChapter,
  deleteChapter,
  getChaptersByCourse,
  publishChapter,
  unpublishChapter,
  updateChapter,
} from "../../../../services/chapterService";

import {
  getAllCourses,
} from "../../../../services/courseService";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

import ChapterForm from "../components/ChapterForm";

export default function ChapterManagement() {
  const navigate = useNavigate();

  const { profile, firebaseUser } = useAuth();

  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [selectedCourseId, setSelectedCourseId] =
    useState("");

  const [editingChapter, setEditingChapter] =
    useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      loadChapters(selectedCourseId);
    } else {
      setChapters([]);
    }
  }, [selectedCourseId]);

  const loadCourses = async () => {
    try {
      setLoading(true);

      const result = await getAllCourses();

      const availableCourses = result.filter(
        (course) => !course.deleted,
      );

      setCourses(availableCourses);

      if (
        availableCourses.length > 0 &&
        !selectedCourseId
      ) {
        setSelectedCourseId(
          availableCourses[0].id,
        );
      }
    } catch (loadError) {
      console.error(loadError);

      setError("Unable to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const loadChapters = async (courseId) => {
    try {
      setError("");

      const result =
        await getChaptersByCourse(courseId);

      setChapters(
        [...result].sort(
          (first, second) =>
            Number(first.displayOrder || 0) -
            Number(second.displayOrder || 0),
        ),
      );
    } catch (loadError) {
      console.error(loadError);

      setError(
        "Unable to load chapters for this course.",
      );
    }
  };

  const selectedCourse = useMemo(
    () =>
      courses.find(
        (course) =>
          course.id === selectedCourseId,
      ),
    [courses, selectedCourseId],
  );

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const handleSave = async (chapterData) => {
    try {
      setSaving(true);
      clearMessages();

      if (editingChapter?.id) {
        await updateChapter(
          editingChapter.id,
          chapterData,
          currentUserId,
        );

        setMessage(
          "Chapter updated successfully.",
        );
      } else {
        await createChapter(
          chapterData,
          currentUserId,
        );

        setMessage(
          "Chapter created successfully.",
        );
      }

      setEditingChapter(null);

      await loadChapters(
        chapterData.courseId,
      );

      setSelectedCourseId(
        chapterData.courseId,
      );
    } catch (saveError) {
      console.error(saveError);

      setError(
        saveError?.message ||
          "Unable to save chapter.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async (chapter) => {
    try {
      clearMessages();

      if (chapter.published) {
        await unpublishChapter(chapter.id);

        setMessage(
          "Chapter moved to draft.",
        );
      } else {
        await publishChapter(chapter.id);

        setMessage(
          "Chapter published successfully.",
        );
      }

      await loadChapters(selectedCourseId);
    } catch (publishError) {
      console.error(publishError);

      setError(
        "Unable to change chapter status.",
      );
    }
  };

  const handleDelete = async (chapter) => {
    const confirmed = window.confirm(
      `Delete "${chapter.title}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      clearMessages();

      await deleteChapter(chapter.id);

      if (
        editingChapter?.id === chapter.id
      ) {
        setEditingChapter(null);
      }

      setMessage(
        "Chapter deleted successfully.",
      );

      await loadChapters(selectedCourseId);
    } catch (deleteError) {
      console.error(deleteError);

      setError("Unable to delete chapter.");
    }
  };

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading chapter management..."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Chapter Management"
        description="Build and organise the learning structure for every course."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Chapters",
        ]}
        actions={
          <Button
            leftIcon={<FaPlus />}
            onClick={() =>
              setEditingChapter(null)
            }
          >
            New Chapter
          </Button>
        }
      />

      {message && (
        <div className="ns-admin-message success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-admin-message error">
          {error}
        </div>
      )}

      <Card>
        <div className="ns-course-selector">
          <div>
            <strong>Course</strong>

            <p>
              Select the course whose chapters
              you want to manage.
            </p>
          </div>

          <select
            value={selectedCourseId}
            onChange={(event) => {
              setSelectedCourseId(
                event.target.value,
              );

              setEditingChapter(null);
            }}
          >
            <option value="">
              Select course
            </option>

            {courses.map((course) => (
              <option
                key={course.id}
                value={course.id}
              >
                {course.title}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <div className="ns-chapter-layout">
        <Card
          title={
            editingChapter
              ? "Edit Chapter"
              : "Create Chapter"
          }
          subtitle={
            selectedCourse
              ? selectedCourse.title
              : "Select a course first"
          }
        >
          <ChapterForm
            courses={courses}
            chapter={editingChapter}
            selectedCourseId={
              selectedCourseId
            }
            saving={saving}
            onSubmit={handleSave}
            onCancel={
              editingChapter
                ? () =>
                    setEditingChapter(null)
                : undefined
            }
          />
        </Card>

        <Card
          title="Course Chapters"
          subtitle={`${chapters.length} chapter(s)`}
        >
          {!selectedCourseId ? (
            <EmptyState
              icon="📚"
              title="Select a course"
              description="Choose a course to manage its chapters."
            />
          ) : chapters.length === 0 ? (
            <EmptyState
              icon="📖"
              title="No chapters yet"
              description="Create the first chapter for this course."
            />
          ) : (
            <div className="ns-chapter-list">
              {chapters.map((chapter) => (
                <article
                  key={chapter.id}
                  className="ns-chapter-card"
                >
                  <div className="ns-chapter-number">
                    {chapter.chapterNumber ||
                      chapter.displayOrder}
                  </div>

                  <div className="ns-chapter-info">
                    <div className="ns-chapter-heading">
                      <h3>
                        {chapter.title}
                      </h3>

                      <span
                        className={
                          chapter.published
                            ? "published"
                            : "draft"
                        }
                      >
                        {chapter.published
                          ? "Published"
                          : "Draft"}
                      </span>
                    </div>

                    <p>
                      {chapter.shortDescription ||
                        "No description provided."}
                    </p>

                    <div className="ns-chapter-tags">
                      {chapter.previewAvailable && (
                        <span>
                          Free Preview
                        </span>
                      )}

                      <span>
                        Order{" "}
                        {chapter.displayOrder}
                      </span>
                    </div>
                  </div>

                  <div className="ns-chapter-buttons">
                    <button
                      type="button"
                      title="Manage resources"
                      onClick={() =>
                        navigate(
                          `/admin/resources?course=${selectedCourseId}&chapter=${chapter.id}`,
                        )
                      }
                    >
                      <FaBookOpen />
                    </button>

                    <button
                      type="button"
                      title="Edit chapter"
                      onClick={() =>
                        setEditingChapter(
                          chapter,
                        )
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      type="button"
                      title={
                        chapter.published
                          ? "Move to draft"
                          : "Publish"
                      }
                      onClick={() =>
                        handlePublish(chapter)
                      }
                    >
                      {chapter.published ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                    <button
                      type="button"
                      className="danger"
                      title="Delete chapter"
                      onClick={() =>
                        handleDelete(chapter)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Card>
      </div>

      <style>
        {`
          .ns-course-selector {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .ns-course-selector strong {
            color: #0f172a;
          }

          .ns-course-selector p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-course-selector select {
            min-width: 280px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: white;
            padding: 11px 12px;
          }

          .ns-chapter-layout {
            display: grid;
            grid-template-columns:
              minmax(350px, 0.85fr)
              minmax(0, 1.35fr);
            gap: 22px;
            margin-top: 22px;
            align-items: start;
          }

          .ns-chapter-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ns-chapter-card {
            display: flex;
            align-items: center;
            gap: 14px;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 14px;
          }

          .ns-chapter-number {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: #eff6ff;
            color: #2563eb;
            font-weight: 800;
          }

          .ns-chapter-info {
            min-width: 0;
            flex: 1;
          }

          .ns-chapter-heading {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
          }

          .ns-chapter-heading h3 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-chapter-heading span {
            border-radius: 999px;
            padding: 3px 8px;
            font-size: 10px;
            font-weight: 800;
          }

          .ns-chapter-heading .published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-chapter-heading .draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-chapter-info p {
            margin: 5px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-chapter-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 8px;
          }

          .ns-chapter-tags span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 7px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-chapter-buttons {
            display: flex;
            gap: 6px;
          }

          .ns-chapter-buttons button {
            display: flex;
            width: 34px;
            height: 34px;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbeafe;
            border-radius: 9px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
          }

          .ns-chapter-buttons .danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-admin-message {
            margin-bottom: 16px;
            border-radius: 10px;
            padding: 12px 14px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-admin-message.success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-admin-message.error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1100px) {
            .ns-chapter-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .ns-course-selector,
            .ns-chapter-card {
              align-items: stretch;
              flex-direction: column;
            }

            .ns-course-selector select {
              width: 100%;
              min-width: 0;
            }

            .ns-chapter-buttons {
              justify-content: flex-end;
            }
          }
        `}
      </style>
    </div>
  );
}