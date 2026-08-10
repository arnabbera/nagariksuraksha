import { useEffect, useMemo, useState } from "react";
import {
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaFileAlt,
  FaFilePdf,
  FaLink,
  FaTrash,
  FaVideo,
} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getChaptersByCourse,
} from "../../../../services/chapterService";

import {
  deleteChapterResource,
  getChapterResources,
  publishChapterResource,
  unpublishChapterResource,
  updateChapterResource,
  createChapterResource,
} from "../../../../services/chapterResourceService";

import {
  getAllCourses,
} from "../../../../services/courseService";

import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

import ResourceForm from "../components/ResourceForm";

const getResourceIcon = (type) => {
  switch (type) {
    case "video":
      return <FaVideo />;

    case "pdf":
      return <FaFilePdf />;

    case "link":
    case "download":
      return <FaLink />;

    default:
      return <FaFileAlt />;
  }
};

export default function ResourceManagement() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const { profile, firebaseUser } = useAuth();

  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [resources, setResources] = useState([]);

  const [courseId, setCourseId] = useState(
    searchParams.get("course") || "",
  );

  const [chapterId, setChapterId] = useState(
    searchParams.get("chapter") || "",
  );

  const [editingResource, setEditingResource] =
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
    if (courseId) {
      loadChapters(courseId);
    } else {
      setChapters([]);
      setChapterId("");
    }
  }, [courseId]);

  useEffect(() => {
    if (chapterId) {
      loadResources(chapterId);
    } else {
      setResources([]);
    }
  }, [chapterId]);

  const loadCourses = async () => {
    try {
      setLoading(true);

      const result = await getAllCourses();

      setCourses(
        result.filter(
          (course) => !course.deleted,
        ),
      );
    } catch (loadError) {
      console.error(loadError);
      setError("Unable to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const loadChapters = async (
    selectedCourseId,
  ) => {
    try {
      const result =
        await getChaptersByCourse(
          selectedCourseId,
        );

      setChapters(result);

      if (
        chapterId &&
        !result.some(
          (chapter) =>
            chapter.id === chapterId,
        )
      ) {
        setChapterId("");
      }
    } catch (loadError) {
      console.error(loadError);

      setError("Unable to load chapters.");
    }
  };

  const loadResources = async (
    selectedChapterId,
  ) => {
    try {
      const result =
        await getChapterResources(
          selectedChapterId,
        );

      setResources(
        [...result].sort(
          (first, second) =>
            Number(first.displayOrder || 0) -
            Number(second.displayOrder || 0),
        ),
      );
    } catch (loadError) {
      console.error(loadError);

      setError("Unable to load resources.");
    }
  };

  const selectedChapter = useMemo(
    () =>
      chapters.find(
        (chapter) =>
          chapter.id === chapterId,
      ),
    [chapters, chapterId],
  );

  const updateUrl = (
    selectedCourseId,
    selectedChapterId,
  ) => {
    const params = {};

    if (selectedCourseId) {
      params.course = selectedCourseId;
    }

    if (selectedChapterId) {
      params.chapter =
        selectedChapterId;
    }

    setSearchParams(params);
  };

  const handleCourseChange = (value) => {
    setCourseId(value);
    setChapterId("");
    setEditingResource(null);

    updateUrl(value, "");
  };

  const handleChapterChange = (value) => {
    setChapterId(value);
    setEditingResource(null);

    updateUrl(courseId, value);
  };

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const handleSave = async (
    resourceData,
  ) => {
    try {
      setSaving(true);
      clearMessages();

      if (editingResource?.id) {
        await updateChapterResource(
          editingResource.id,
          resourceData,
          currentUserId,
        );

        setMessage(
          "Resource updated successfully.",
        );
      } else {
        await createChapterResource(
          resourceData,
          currentUserId,
        );

        setMessage(
          "Resource added successfully.",
        );
      }

      setEditingResource(null);

      await loadResources(chapterId);
    } catch (saveError) {
      console.error(saveError);

      setError(
        saveError?.message ||
          "Unable to save resource.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async (
    resource,
  ) => {
    try {
      clearMessages();

      if (resource.published) {
        await unpublishChapterResource(
          resource.id,
        );

        setMessage(
          "Resource moved to draft.",
        );
      } else {
        await publishChapterResource(
          resource.id,
        );

        setMessage(
          "Resource published successfully.",
        );
      }

      await loadResources(chapterId);
    } catch (publishError) {
      console.error(publishError);

      setError(
        "Unable to update resource status.",
      );
    }
  };

  const handleDelete = async (
    resource,
  ) => {
    const confirmed = window.confirm(
      `Delete "${resource.title}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      clearMessages();

      await deleteChapterResource(
        resource.id,
        currentUserId,
      );

      setMessage(
        "Resource deleted successfully.",
      );

      if (
        editingResource?.id === resource.id
      ) {
        setEditingResource(null);
      }

      await loadResources(chapterId);
    } catch (deleteError) {
      console.error(deleteError);

      setError("Unable to delete resource.");
    }
  };

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading resources..."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Resource Management"
        description="Add videos, PDFs, notes, links, downloads and assignments to course chapters."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Resources",
        ]}
      />

      {message && (
        <div className="ns-resource-message success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-resource-message error">
          {error}
        </div>
      )}

      <Card>
        <div className="ns-resource-selectors">
          <div>
            <label>Course</label>

            <select
              value={courseId}
              onChange={(event) =>
                handleCourseChange(
                  event.target.value,
                )
              }
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

          <div>
            <label>Chapter</label>

            <select
              disabled={!courseId}
              value={chapterId}
              onChange={(event) =>
                handleChapterChange(
                  event.target.value,
                )
              }
            >
              <option value="">
                Select chapter
              </option>

              {chapters.map((chapter) => (
                <option
                  key={chapter.id}
                  value={chapter.id}
                >
                  {chapter.chapterNumber}.{" "}
                  {chapter.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {!chapterId ? (
        <div style={{ marginTop: 22 }}>
          <Card>
            <EmptyState
              icon="📚"
              title="Select a chapter"
              description="Choose a course and chapter to manage its learning resources."
            />
          </Card>
        </div>
      ) : (
        <div className="ns-resource-layout">
          <Card
            title={
              editingResource
                ? "Edit Resource"
                : "Add Resource"
            }
            subtitle={
              selectedChapter?.title || ""
            }
          >
            <ResourceForm
              resource={editingResource}
              courseId={courseId}
              chapterId={chapterId}
              saving={saving}
              onSubmit={handleSave}
              onCancel={
                editingResource
                  ? () =>
                      setEditingResource(
                        null,
                      )
                  : undefined
              }
            />
          </Card>

          <Card
            title="Chapter Resources"
            subtitle={`${resources.length} resource(s)`}
          >
            {resources.length === 0 ? (
              <EmptyState
                icon="📂"
                title="No resources"
                description="Add the first learning resource to this chapter."
              />
            ) : (
              <div className="ns-resource-list">
                {resources.map(
                  (resource) => (
                    <article
                      key={resource.id}
                      className="ns-resource-item"
                    >
                      <div className="ns-resource-icon">
                        {getResourceIcon(
                          resource.type,
                        )}
                      </div>

                      <div className="ns-resource-info">
                        <div>
                          <h3>
                            {resource.title}
                          </h3>

                          <span>
                            {resource.type}
                          </span>

                          {resource.required && (
                            <span>
                              Required
                            </span>
                          )}

                          <span
                            className={
                              resource.published
                                ? "published"
                                : "draft"
                            }
                          >
                            {resource.published
                              ? "Published"
                              : "Draft"}
                          </span>
                        </div>

                        <p>
                          {resource.description ||
                            "No description."}
                        </p>
                      </div>

                      <div className="ns-resource-buttons">
                        <button
                          type="button"
                          title="Edit"
                          onClick={() =>
                            setEditingResource(
                              resource,
                            )
                          }
                        >
                          <FaEdit />
                        </button>

                        <button
                          type="button"
                          title={
                            resource.published
                              ? "Move to draft"
                              : "Publish"
                          }
                          onClick={() =>
                            handlePublish(
                              resource,
                            )
                          }
                        >
                          {resource.published ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )}
                        </button>

                        <button
                          type="button"
                          className="danger"
                          title="Delete"
                          onClick={() =>
                            handleDelete(
                              resource,
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </article>
                  ),
                )}
              </div>
            )}
          </Card>
        </div>
      )}

      <style>
        {`
          .ns-resource-selectors {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .ns-resource-selectors div {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-resource-selectors label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-resource-selectors select {
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: white;
            padding: 11px;
          }

          .ns-resource-layout {
            display: grid;
            grid-template-columns:
              minmax(350px, 0.85fr)
              minmax(0, 1.35fr);
            gap: 22px;
            margin-top: 22px;
            align-items: start;
          }

          .ns-resource-list {
            display: flex;
            flex-direction: column;
            gap: 11px;
          }

          .ns-resource-item {
            display: flex;
            align-items: center;
            gap: 13px;
            border: 1px solid #e2e8f0;
            border-radius: 13px;
            padding: 13px;
          }

          .ns-resource-icon {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 11px;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-resource-info {
            min-width: 0;
            flex: 1;
          }

          .ns-resource-info > div {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 6px;
          }

          .ns-resource-info h3 {
            margin: 0 5px 0 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-resource-info span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 7px;
            font-size: 9px;
            font-weight: 800;
            text-transform: uppercase;
          }

          .ns-resource-info span.published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-resource-info span.draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-resource-info p {
            margin: 6px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-resource-buttons {
            display: flex;
            gap: 6px;
          }

          .ns-resource-buttons button {
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

          .ns-resource-buttons button.danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-resource-message {
            margin-bottom: 16px;
            border-radius: 10px;
            padding: 12px 14px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-resource-message.success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-resource-message.error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1100px) {
            .ns-resource-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .ns-resource-selectors {
              grid-template-columns: 1fr;
            }

            .ns-resource-item {
              align-items: stretch;
              flex-direction: column;
            }

            .ns-resource-buttons {
              justify-content: flex-end;
            }
          }
        `}
      </style>
    </div>
  );
}