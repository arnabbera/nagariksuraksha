import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  FaBookOpen,
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaFolderOpen,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";

import { useAuth } from "../../../hooks/useAuth";

import {
  getAllCourses,
} from "../../../services/courseService";

import {
  createChapter,
  deleteChapter,
  getChaptersByCourse,
  publishChapter,
  unpublishChapter,
  updateChapter,
} from "../../../services/chapterService";

import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import EmptyState from "../../../shared/components/EmptyState";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import PageHeader from "../../../shared/components/PageHeader";

const initialForm = {
  courseId: "",
  title: "",
  slug: "",
  shortDescription: "",
  notes: "",
  chapterNumber: 1,
  displayOrder: 1,
  youtubeUrl: "",
  youtubeVideoId: "",
  videoDuration: "",
  pdfUrl: "",
  pdfStoragePath: "",
  downloadable: false,
  quizId: "",
  quizRequired: true,
  passingPercentage: 80,
  maximumAttempts: 3,
  published: false,
  previewAvailable: false,
  status: "draft",
};

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const normalizeChapter = (chapter) => ({
  ...initialForm,
  ...chapter,

  youtubeUrl:
    chapter?.video?.youtubeUrl ??
    chapter?.youtubeUrl ??
    "",

  youtubeVideoId:
    chapter?.video?.youtubeVideoId ??
    chapter?.youtubeVideoId ??
    "",

  videoDuration:
    chapter?.video?.duration ??
    chapter?.videoDuration ??
    "",

  pdfUrl:
    chapter?.pdf?.url ??
    chapter?.pdfUrl ??
    "",

  pdfStoragePath:
    chapter?.pdf?.storagePath ??
    chapter?.pdfStoragePath ??
    "",

  downloadable:
    chapter?.pdf?.downloadable ??
    chapter?.downloadable ??
    false,

  quizId:
    chapter?.quiz?.quizId ??
    chapter?.quizId ??
    "",

  quizRequired:
    chapter?.quiz?.required ??
    chapter?.quizRequired ??
    true,

  passingPercentage:
    chapter?.quiz?.passingPercentage ??
    chapter?.passingPercentage ??
    80,

  maximumAttempts:
    chapter?.quiz?.maximumAttempts ??
    chapter?.maximumAttempts ??
    3,
});

export default function ChapterManagement() {
  const navigate = useNavigate();

  const { profile, firebaseUser } = useAuth();

  const formRef = useRef(null);

  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [selectedCourseId, setSelectedCourseId] =
    useState("");

  const [editingChapter, setEditingChapter] =
    useState(null);

  const [form, setForm] =
    useState(initialForm);

  const [searchText, setSearchText] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [chapterLoading, setChapterLoading] =
    useState(false);

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

  useEffect(() => {
    if (!selectedCourseId) {
      setChapters([]);
      return;
    }

    loadChapters(selectedCourseId);
  }, [selectedCourseId]);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const result =
        await getAllCourses();

      const activeCourses = (
        Array.isArray(result)
          ? result
          : []
      )
        .filter(
          (course) =>
            !course.deleted,
        )
        .sort(
          (first, second) =>
            Number(first.order || 0) -
            Number(second.order || 0),
        );

      setCourses(activeCourses);

      if (
        activeCourses.length > 0
      ) {
        setSelectedCourseId(
          activeCourses[0].id,
        );

        setForm((current) => ({
          ...current,
          courseId:
            activeCourses[0].id,
        }));
      }
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

  const loadChapters = async (
    courseId,
  ) => {
    try {
      setChapterLoading(true);
      setError("");

      const result =
        await getChaptersByCourse(
          courseId,
        );

      const chapterList =
        Array.isArray(result)
          ? result
          : [];

      setChapters(chapterList);
    } catch (loadError) {
      console.error(
        "Unable to load chapters:",
        loadError,
      );

      setError(
        "Unable to load chapters.",
      );
    } finally {
      setChapterLoading(false);
    }
  };

  const selectedCourse =
    useMemo(
      () =>
        courses.find(
          (course) =>
            course.id ===
            selectedCourseId,
        ) || null,
      [
        courses,
        selectedCourseId,
      ],
    );

  const filteredChapters =
    useMemo(() => {
      const query =
        searchText
          .trim()
          .toLowerCase();

      if (!query) {
        return chapters;
      }

      return chapters.filter(
        (chapter) =>
          chapter.title
            ?.toLowerCase()
            .includes(query) ||
          chapter.slug
            ?.toLowerCase()
            .includes(query) ||
          chapter.shortDescription
            ?.toLowerCase()
            .includes(query),
      );
    }, [
      chapters,
      searchText,
    ]);

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const scrollToForm = () => {
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const resetForm = (
    courseId =
      selectedCourseId,
  ) => {
    setEditingChapter(null);

    setForm({
      ...initialForm,
      courseId,
      chapterNumber:
        chapters.length + 1,
      displayOrder:
        chapters.length + 1,
    });
  };

  const handleCourseChange = (
    event,
  ) => {
    const courseId =
      event.target.value;

    clearMessages();

    setSelectedCourseId(
      courseId,
    );

    setEditingChapter(null);

    setForm({
      ...initialForm,
      courseId,
    });
  };

  const handleNewChapter = () => {
    clearMessages();

    resetForm();

    scrollToForm();
  };

  const handleEdit = (
    chapter,
  ) => {
    clearMessages();

    setEditingChapter(
      chapter,
    );

    setForm(
      normalizeChapter(
        chapter,
      ),
    );

    scrollToForm();
  };

  const handleCancelEdit = () => {
    clearMessages();

    resetForm();
  };

  /*
   * Open the Resource Management page.
   *
   * IMPORTANT:
   * selectedCourseId = actual Firestore course document ID
   * chapter.id       = actual Firestore chapter document ID
   */
  const handleManageResources = (
    chapter,
  ) => {
    if (
      !selectedCourseId ||
      !chapter?.id
    ) {
      setError(
        "Unable to open resources because the course or chapter ID is missing.",
      );

      return;
    }

    const params =
      new URLSearchParams({
        course:
          selectedCourseId,
        chapter:
          chapter.id,
      });

    navigate(
      `/admin/resources?${params.toString()}`,
    );
  };

  const updateField = (
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTitleChange = (
    value,
  ) => {
    setForm((current) => ({
      ...current,
      title: value,

      slug:
        editingChapter ||
        current.slug
          ? current.slug
          : createSlug(value),
    }));
  };

  const validate = () => {
    if (!form.courseId) {
      return "Please select a course.";
    }

    if (!form.title.trim()) {
      return "Chapter title is required.";
    }

    if (
      Number(
        form.chapterNumber,
      ) < 1
    ) {
      return "Chapter number must be at least 1.";
    }

    if (
      Number(
        form.displayOrder,
      ) < 0
    ) {
      return "Display order cannot be negative.";
    }

    return "";
  };

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    const validationError =
      validate();

    if (validationError) {
      setError(
        validationError,
      );
      return;
    }

    try {
      setSaving(true);
      clearMessages();

      const payload = {
        ...form,

        slug: createSlug(
          form.slug ||
            form.title,
        ),

        chapterNumber:
          Number(
            form.chapterNumber ||
              1,
          ),

        displayOrder:
          Number(
            form.displayOrder ||
              1,
          ),

        passingPercentage:
          Number(
            form.passingPercentage ||
              80,
          ),

        maximumAttempts:
          Number(
            form.maximumAttempts ||
              3,
          ),

        published:
          Boolean(
            form.published,
          ),

        status:
          form.published
            ? "published"
            : "draft",
      };

      if (
        editingChapter?.id
      ) {
        await updateChapter(
          editingChapter.id,
          payload,
          currentUserId,
        );

        setMessage(
          "Chapter updated successfully.",
        );
      } else {
        await createChapter(
          payload,
          currentUserId,
        );

        setMessage(
          "Chapter created successfully.",
        );
      }

      await loadChapters(
        selectedCourseId,
      );

      setEditingChapter(
        null,
      );

      setForm({
        ...initialForm,
        courseId:
          selectedCourseId,
      });
    } catch (saveError) {
      console.error(
        "Unable to save chapter:",
        saveError,
      );

      setError(
        saveError?.message ||
          "Unable to save the chapter.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async (
    chapter,
  ) => {
    try {
      clearMessages();

      if (chapter.published) {
        await unpublishChapter(
          chapter.id,
        );

        setMessage(
          "Chapter moved to draft.",
        );
      } else {
        await publishChapter(
          chapter.id,
        );

        setMessage(
          "Chapter published successfully.",
        );
      }

      await loadChapters(
        selectedCourseId,
      );
    } catch (publishError) {
      console.error(
        "Unable to change chapter status:",
        publishError,
      );

      setError(
        "Unable to change chapter status.",
      );
    }
  };

  const handleDelete = async (
    chapter,
  ) => {
    const confirmed =
      window.confirm(
        `Delete "${chapter.title}"?`,
      );

    if (!confirmed) {
      return;
    }

    try {
      clearMessages();

      await deleteChapter(
        chapter.id,
      );

      if (
        editingChapter?.id ===
        chapter.id
      ) {
        resetForm();
      }

      setMessage(
        "Chapter deleted successfully.",
      );

      await loadChapters(
        selectedCourseId,
      );
    } catch (deleteError) {
      console.error(
        "Unable to delete chapter:",
        deleteError,
      );

      setError(
        "Unable to delete the chapter.",
      );
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
        description="Create and manage learning chapters for NagarikSuraksha courses."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Chapters",
        ]}
        actions={
          <Button
            leftIcon={
              <FaPlus />
            }
            onClick={
              handleNewChapter
            }
            disabled={
              !selectedCourseId
            }
          >
            New Chapter
          </Button>
        }
      />

      {message && (
        <div className="ns-chapter-alert ns-chapter-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-chapter-alert ns-chapter-error">
          {error}
        </div>
      )}

      <Card
        title="Select Course"
        subtitle="Choose the course whose chapters you want to manage."
      >
        {courses.length === 0 ? (
          <EmptyState
            icon="📚"
            title="No courses available"
            description="Create a course before adding chapters."
          />
        ) : (
          <div className="ns-course-selector">
            <label htmlFor="chapter-course">
              Course
            </label>

            <select
              id="chapter-course"
              value={
                selectedCourseId
              }
              onChange={
                handleCourseChange
              }
            >
              {courses.map(
                (course) => (
                  <option
                    key={
                      course.id
                    }
                    value={
                      course.id
                    }
                  >
                    {
                      course.title
                    }
                  </option>
                ),
              )}
            </select>

            {selectedCourse && (
              <div className="ns-selected-course">
                <FaBookOpen />

                <div>
                  <strong>
                    {
                      selectedCourse.title
                    }
                  </strong>

                  <span>
                    {chapters.length}{" "}
                    chapter(s)
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      {selectedCourseId && (
        <div
          className="ns-chapter-layout"
          ref={formRef}
        >
          <Card
            title={
              editingChapter
                ? "Edit Chapter"
                : "Create Chapter"
            }
            subtitle={
              editingChapter
                ? `Editing: ${editingChapter.title}`
                : `Add learning content to ${selectedCourse?.title || "the selected course"}.`
            }
          >
            <form
              className="ns-chapter-form"
              onSubmit={
                handleSubmit
              }
            >
              <div className="ns-chapter-field ns-full-width">
                <label>
                  Chapter title *
                </label>

                <input
                  required
                  value={
                    form.title
                  }
                  onChange={(
                    event,
                  ) =>
                    handleTitleChange(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Introduction to Consumer Rights"
                />
              </div>

              <div className="ns-chapter-field ns-full-width">
                <label>
                  Slug
                </label>

                <input
                  value={
                    form.slug
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "slug",
                      createSlug(
                        event.target
                          .value,
                      ),
                    )
                  }
                  placeholder="introduction-to-consumer-rights"
                />
              </div>

              <div className="ns-chapter-field">
                <label>
                  Chapter number
                </label>

                <input
                  type="number"
                  min="1"
                  value={
                    form.chapterNumber
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "chapterNumber",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-chapter-field">
                <label>
                  Display order
                </label>

                <input
                  type="number"
                  min="0"
                  value={
                    form.displayOrder
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "displayOrder",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-chapter-field ns-full-width">
                <label>
                  Short description
                </label>

                <textarea
                  rows="3"
                  value={
                    form.shortDescription
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "shortDescription",
                      event.target
                        .value,
                    )
                  }
                  placeholder="Brief chapter description"
                />
              </div>

              <div className="ns-chapter-field ns-full-width">
                <label>
                  Chapter notes / content
                </label>

                <textarea
                  rows="10"
                  value={
                    form.notes
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "notes",
                      event.target
                        .value,
                    )
                  }
                  placeholder="Enter the chapter learning content..."
                />
              </div>

              <h3 className="ns-chapter-section-title">
                Video
              </h3>

              <div className="ns-chapter-field ns-full-width">
                <label>
                  YouTube URL
                </label>

                <input
                  value={
                    form.youtubeUrl
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "youtubeUrl",
                      event.target
                        .value,
                    )
                  }
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="ns-chapter-field">
                <label>
                  YouTube video ID
                </label>

                <input
                  value={
                    form.youtubeVideoId
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "youtubeVideoId",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-chapter-field">
                <label>
                  Video duration
                </label>

                <input
                  value={
                    form.videoDuration
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "videoDuration",
                      event.target
                        .value,
                    )
                  }
                  placeholder="12:30"
                />
              </div>

              <h3 className="ns-chapter-section-title">
                PDF / Study Material
              </h3>

              <div className="ns-chapter-field ns-full-width">
                <label>
                  PDF URL
                </label>

                <input
                  value={
                    form.pdfUrl
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "pdfUrl",
                      event.target
                        .value,
                    )
                  }
                  placeholder="Study material URL"
                />
              </div>

              <label className="ns-chapter-checkbox ns-full-width">
                <input
                  type="checkbox"
                  checked={
                    form.downloadable
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "downloadable",
                      event.target
                        .checked,
                    )
                  }
                />

                Allow PDF download
              </label>

              <h3 className="ns-chapter-section-title">
                Quiz Settings
              </h3>

              <div className="ns-chapter-field">
                <label>
                  Passing percentage
                </label>

                <input
                  type="number"
                  min="0"
                  max="100"
                  value={
                    form.passingPercentage
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "passingPercentage",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-chapter-field">
                <label>
                  Maximum attempts
                </label>

                <input
                  type="number"
                  min="1"
                  value={
                    form.maximumAttempts
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "maximumAttempts",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-chapter-options ns-full-width">
                <label className="ns-chapter-checkbox">
                  <input
                    type="checkbox"
                    checked={
                      form.quizRequired
                    }
                    onChange={(
                      event,
                    ) =>
                      updateField(
                        "quizRequired",
                        event.target
                          .checked,
                      )
                    }
                  />

                  Quiz required
                </label>

                <label className="ns-chapter-checkbox">
                  <input
                    type="checkbox"
                    checked={
                      form.previewAvailable
                    }
                    onChange={(
                      event,
                    ) =>
                      updateField(
                        "previewAvailable",
                        event.target
                          .checked,
                      )
                    }
                  />

                  Free preview
                </label>

                <label className="ns-chapter-checkbox">
                  <input
                    type="checkbox"
                    checked={
                      form.published
                    }
                    onChange={(
                      event,
                    ) =>
                      updateField(
                        "published",
                        event.target
                          .checked,
                      )
                    }
                  />

                  Published
                </label>
              </div>

              <div className="ns-chapter-form-actions ns-full-width">
                {editingChapter && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={
                      handleCancelEdit
                    }
                  >
                    Cancel
                  </Button>
                )}

                <Button
                  type="submit"
                  loading={saving}
                >
                  {editingChapter
                    ? "Update Chapter"
                    : "Create Chapter"}
                </Button>
              </div>
            </form>
          </Card>

          <Card
            title="Chapters"
            subtitle={`${filteredChapters.length} chapter(s) found`}
          >
            <div className="ns-chapter-search">
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
                placeholder="Search chapters..."
              />
            </div>

            {chapterLoading ? (
              <LoadingSpinner
                text="Loading chapters..."
              />
            ) : filteredChapters.length ===
              0 ? (
              <EmptyState
                icon="📖"
                title="No chapters found"
                description="Create the first chapter for this course."
              />
            ) : (
              <div className="ns-chapter-list">
                {filteredChapters.map(
                  (chapter) => (
                    <article
                      key={
                        chapter.id
                      }
                      className="ns-chapter-item"
                    >
                      <div className="ns-chapter-number">
                        {
                          chapter.chapterNumber
                        }
                      </div>

                      <div className="ns-chapter-info">
                        <h3>
                          {
                            chapter.title
                          }
                        </h3>

                        <p>
                          {chapter.shortDescription ||
                            "No description available."}
                        </p>

                        <div className="ns-chapter-meta">
                          <span>
                            Order{" "}
                            {
                              chapter.displayOrder
                            }
                          </span>

                          <span
                            className={
                              chapter.published
                                ? "is-published"
                                : "is-draft"
                            }
                          >
                            {chapter.published
                              ? "Published"
                              : "Draft"}
                          </span>

                          {chapter.previewAvailable && (
                            <span>
                              Preview
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="ns-chapter-actions">
                        {/* RESOURCE MANAGEMENT */}
                        <button
                          type="button"
                          title="Manage resources"
                          className="is-resource"
                          onClick={() =>
                            handleManageResources(
                              chapter,
                            )
                          }
                        >
                          <FaFolderOpen />
                        </button>

                        <button
                          type="button"
                          title="Edit chapter"
                          onClick={() =>
                            handleEdit(
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
                              : "Publish chapter"
                          }
                          onClick={() =>
                            handlePublish(
                              chapter,
                            )
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
                          title="Delete chapter"
                          className="is-danger"
                          onClick={() =>
                            handleDelete(
                              chapter,
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
          .ns-course-selector {
            display: grid;
            grid-template-columns:
              minmax(240px, 1fr)
              minmax(240px, 1fr);
            gap: 18px;
            align-items: end;
          }

          .ns-course-selector > label {
            grid-column: 1 / -1;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-course-selector select {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            padding: 11px 12px;
            color: #0f172a;
            font: inherit;
            outline: none;
          }

          .ns-selected-course {
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 11px;
            background: #eff6ff;
            color: #2563eb;
            padding: 10px 14px;
          }

          .ns-selected-course div {
            display: flex;
            flex-direction: column;
          }

          .ns-selected-course span {
            margin-top: 2px;
            color: #64748b;
            font-size: 11px;
          }

          .ns-chapter-layout {
            display: grid;
            grid-template-columns:
              minmax(380px, 0.95fr)
              minmax(0, 1.25fr);
            gap: 22px;
            align-items: start;
            margin-top: 22px;
            scroll-margin-top: 20px;
          }

          .ns-chapter-form {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .ns-chapter-field {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-chapter-field label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-chapter-field input,
          .ns-chapter-field textarea {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            color: #0f172a;
            padding: 11px 12px;
            font: inherit;
            outline: none;
          }

          .ns-chapter-field input:focus,
          .ns-chapter-field textarea:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37,99,235,.12);
          }

          .ns-full-width {
            grid-column: 1 / -1;
          }

          .ns-chapter-section-title {
            grid-column: 1 / -1;
            margin: 8px 0 0;
            border-top: 1px solid #e2e8f0;
            padding-top: 18px;
            color: #0f172a;
            font-size: 16px;
          }

          .ns-chapter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .ns-chapter-checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-chapter-form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }

          .ns-chapter-search {
            position: relative;
            margin-bottom: 18px;
          }

          .ns-chapter-search svg {
            position: absolute;
            top: 50%;
            left: 13px;
            color: #94a3b8;
            transform: translateY(-50%);
          }

          .ns-chapter-search input {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            padding: 11px 12px 11px 38px;
            outline: none;
          }

          .ns-chapter-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ns-chapter-item {
            display: flex;
            align-items: center;
            gap: 14px;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            background: #ffffff;
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

          .ns-chapter-info h3 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-chapter-info p {
            margin: 5px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-chapter-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 8px;
          }

          .ns-chapter-meta span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 4px 8px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-chapter-meta span.is-published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-chapter-meta span.is-draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-chapter-actions {
            display: flex;
            flex-shrink: 0;
            gap: 7px;
          }

          .ns-chapter-actions button {
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

          .ns-chapter-actions button:hover {
            background: #dbeafe;
          }

          .ns-chapter-actions button.is-resource {
            border-color: #bfdbfe;
            background: #eff6ff;
            color: #1d4ed8;
          }

          .ns-chapter-actions button.is-resource:hover {
            background: #dbeafe;
          }

          .ns-chapter-actions button.is-danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-chapter-actions button.is-danger:hover {
            background: #fee2e2;
          }

          .ns-chapter-alert {
            margin-bottom: 18px;
            border-radius: 11px;
            padding: 13px 15px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-chapter-success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-chapter-error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1150px) {
            .ns-chapter-layout,
            .ns-course-selector {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .ns-chapter-form {
              grid-template-columns: 1fr;
            }

            .ns-full-width,
            .ns-chapter-section-title {
              grid-column: auto;
            }

            .ns-chapter-item {
              align-items: flex-start;
              flex-wrap: wrap;
            }

            .ns-chapter-actions {
              width: 100%;
              justify-content: flex-end;
            }
          }
        `}
      </style>
    </div>
  );
}