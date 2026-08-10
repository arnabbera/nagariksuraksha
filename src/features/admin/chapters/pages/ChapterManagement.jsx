import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaBookOpen,
  FaEdit,
  FaEye,
  FaEyeSlash,
  FaFilePdf,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../../../../hooks/useAuth";

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

import {
  deleteStoredFile,
  uploadPdf,
} from "../../../../firebase/storage";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

import ChapterForm from "../components/ChapterForm";

export default function ChapterManagement() {
  const navigate =
    useNavigate();

  const {
    profile,
    firebaseUser,
  } = useAuth();

  const [
    courses,
    setCourses,
  ] = useState([]);

  const [
    chapters,
    setChapters,
  ] = useState([]);

  const [
    selectedCourseId,
    setSelectedCourseId,
  ] = useState("");

  const [
    editingChapter,
    setEditingChapter,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    uploadingPdf,
    setUploadingPdf,
  ] = useState(false);

  const [
    pdfUploadProgress,
    setPdfUploadProgress,
  ] = useState(0);

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      loadChapters(
        selectedCourseId,
      );
    } else {
      setChapters([]);
    }
  }, [
    selectedCourseId,
  ]);

  // =========================================================
  // LOAD COURSES
  // =========================================================

  const loadCourses =
    async () => {
      try {
        setLoading(true);
        setError("");

        const result =
          await getAllCourses();

        const availableCourses =
          (
            Array.isArray(result)
              ? result
              : []
          )
            .filter(
              (course) =>
                !course.deleted,
            )
            .sort(
              (
                first,
                second,
              ) =>
                Number(
                  first.order ||
                    0,
                ) -
                Number(
                  second.order ||
                    0,
                ),
            );

        setCourses(
          availableCourses,
        );

        if (
          availableCourses.length >
            0 &&
          !selectedCourseId
        ) {
          setSelectedCourseId(
            availableCourses[0]
              .id,
          );
        }
      } catch (
        loadError
      ) {
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

  // =========================================================
  // LOAD CHAPTERS
  // =========================================================

  const loadChapters =
    async (
      courseId,
    ) => {
      try {
        setError("");

        const result =
          await getChaptersByCourse(
            courseId,
          );

        const chapterList =
          Array.isArray(result)
            ? result
            : [];

        setChapters(
          [...chapterList].sort(
            (
              first,
              second,
            ) =>
              Number(
                first.displayOrder ||
                  0,
              ) -
              Number(
                second.displayOrder ||
                  0,
              ),
          ),
        );
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load chapters:",
          loadError,
        );

        setError(
          "Unable to load chapters for this course.",
        );
      }
    };

  // =========================================================
  // SELECTED COURSE
  // =========================================================

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

  // =========================================================
  // HELPERS
  // =========================================================

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  const resetUploadState =
    () => {
      setUploadingPdf(
        false,
      );

      setPdfUploadProgress(
        0,
      );
    };

  // =========================================================
  // SAVE CHAPTER
  // =========================================================

  const handleSave =
    async (
      chapterData,
    ) => {
      let newPdfUpload =
        null;

      try {
        setSaving(true);
        clearMessages();

        setPdfUploadProgress(
          0,
        );

        // -----------------------------------------------------
        // Extract temporary UI-only values.
        // NEVER save File objects into Firestore.
        // -----------------------------------------------------

        const {
          pdfFile,
          removeExistingPdf,
          ...cleanChapterData
        } = chapterData;

        // -----------------------------------------------------
        // Existing PDF metadata
        // -----------------------------------------------------

        let finalPdfUrl =
          cleanChapterData.pdfUrl ||
          "";

        let finalPdfStoragePath =
          cleanChapterData.pdfStoragePath ||
          "";

        let finalPdfPublicId =
          cleanChapterData.pdfPublicId ||
          "";

        let finalPdfFileName =
          cleanChapterData.pdfFileName ||
          "";

        let finalPdfFileSize =
          Number(
            cleanChapterData.pdfFileSize ||
              0,
          );

        let finalPdfContentType =
          cleanChapterData.pdfContentType ||
          "";

        let finalPdfAssetId =
          cleanChapterData.pdfAssetId ||
          "";

        const previousPdfStoragePath =
          editingChapter?.pdf
            ?.storagePath ||
          editingChapter
            ?.pdfStoragePath ||
          "";

        // =====================================================
        // UPLOAD NEW PDF TO CLOUDINARY
        // =====================================================

        if (pdfFile) {
          setUploadingPdf(
            true,
          );

          const chapterUploadId =
            editingChapter?.id ||
            cleanChapterData.slug ||
            cleanChapterData.title ||
            `chapter-${Date.now()}`;

          newPdfUpload =
            await uploadPdf({
              file:
                pdfFile,

              courseId:
                cleanChapterData.courseId,

              chapterId:
                chapterUploadId,

              onProgress:
                setPdfUploadProgress,
            });

          finalPdfUrl =
            newPdfUpload.downloadURL ||
            newPdfUpload.secureUrl ||
            "";

          finalPdfStoragePath =
            newPdfUpload.storagePath ||
            newPdfUpload.publicId ||
            "";

          finalPdfPublicId =
            newPdfUpload.publicId ||
            newPdfUpload.storagePath ||
            "";

          finalPdfFileName =
            newPdfUpload.originalFileName ||
            pdfFile.name ||
            "";

          finalPdfFileSize =
            Number(
              newPdfUpload.size ||
                pdfFile.size ||
                0,
            );

          finalPdfContentType =
            newPdfUpload.contentType ||
            "application/pdf";

          finalPdfAssetId =
            newPdfUpload.assetId ||
            "";
        }

        // =====================================================
        // REMOVE EXISTING PDF
        // =====================================================

        if (
          removeExistingPdf &&
          !pdfFile
        ) {
          finalPdfUrl =
            "";

          finalPdfStoragePath =
            "";

          finalPdfPublicId =
            "";

          finalPdfFileName =
            "";

          finalPdfFileSize =
            0;

          finalPdfContentType =
            "";

          finalPdfAssetId =
            "";
        }

        // =====================================================
        // FINAL FIRESTORE PAYLOAD
        // =====================================================

        const finalChapterData = {
          ...cleanChapterData,

          pdfUrl:
            finalPdfUrl,

          pdfStoragePath:
            finalPdfStoragePath,

          pdfPublicId:
            finalPdfPublicId,

          pdfFileName:
            finalPdfFileName,

          pdfFileSize:
            finalPdfFileSize,

          pdfContentType:
            finalPdfContentType,

          pdfAssetId:
            finalPdfAssetId,
        };

        // =====================================================
        // UPDATE OR CREATE CHAPTER
        // =====================================================

        if (
          editingChapter?.id
        ) {
          await updateChapter(
            editingChapter.id,
            finalChapterData,
            currentUserId,
          );

          setMessage(
            "Chapter updated successfully.",
          );
        } else {
          await createChapter(
            finalChapterData,
            currentUserId,
          );

          setMessage(
            "Chapter created successfully.",
          );
        }

        // =====================================================
        // OLD CLOUDINARY PDF CLEANUP
        // =====================================================
        //
        // deleteStoredFile() currently does not physically
        // delete Cloudinary assets because Cloudinary deletion
        // requires an API secret on a backend.
        //
        // Calling it here keeps the architecture prepared for
        // a future secure deletion endpoint.
        // =====================================================

        if (
          previousPdfStoragePath &&
          (
            newPdfUpload ||
            removeExistingPdf
          ) &&
          previousPdfStoragePath !==
            finalPdfStoragePath
        ) {
          try {
            await deleteStoredFile(
              previousPdfStoragePath,
            );
          } catch (
            deleteError
          ) {
            console.warn(
              "Unable to remove previous PDF:",
              deleteError,
            );
          }
        }

        // =====================================================
        // REFRESH UI
        // =====================================================

        setEditingChapter(
          null,
        );

        setSelectedCourseId(
          finalChapterData.courseId,
        );

        await loadChapters(
          finalChapterData.courseId,
        );

        resetUploadState();
      } catch (
        saveError
      ) {
        console.error(
          "Unable to save chapter:",
          saveError,
        );

        setError(
          saveError?.message ||
            "Unable to save chapter.",
        );
      } finally {
        setSaving(false);

        setUploadingPdf(
          false,
        );
      }
    };

  // =========================================================
  // PUBLISH / UNPUBLISH
  // =========================================================

  const handlePublish =
    async (
      chapter,
    ) => {
      try {
        clearMessages();

        if (
          chapter.published
        ) {
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
      } catch (
        publishError
      ) {
        console.error(
          "Unable to change chapter status:",
          publishError,
        );

        setError(
          "Unable to change chapter status.",
        );
      }
    };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDelete =
    async (
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
          setEditingChapter(
            null,
          );
        }

        setMessage(
          "Chapter deleted successfully.",
        );

        await loadChapters(
          selectedCourseId,
        );
      } catch (
        deleteError
      ) {
        console.error(
          "Unable to delete chapter:",
          deleteError,
        );

        setError(
          "Unable to delete chapter.",
        );
      }
    };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading chapter management..."
      />
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div>
      <PageHeader
        title="Chapter Management"
        description="Build chapters, upload study PDFs and organise the learning structure for every course."
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
            onClick={() => {
              clearMessages();

              resetUploadState();

              setEditingChapter(
                null,
              );
            }}
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

      {/* =====================================================
          COURSE SELECTOR
      ====================================================== */}

      <Card>
        <div className="ns-course-selector">
          <div>
            <strong>
              Course
            </strong>

            <p>
              Select the course
              whose chapters you
              want to manage.
            </p>
          </div>

          <select
            value={
              selectedCourseId
            }
            onChange={(
              event,
            ) => {
              setSelectedCourseId(
                event.target.value,
              );

              setEditingChapter(
                null,
              );

              resetUploadState();

              clearMessages();
            }}
          >
            <option value="">
              Select course
            </option>

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
        </div>
      </Card>

      {/* =====================================================
          CHAPTER MANAGEMENT
      ====================================================== */}

      <div className="ns-chapter-layout">
        {/* ===================================================
            FORM
        ==================================================== */}

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
            courses={
              courses
            }
            chapter={
              editingChapter
            }
            selectedCourseId={
              selectedCourseId
            }
            saving={
              saving
            }
            uploadingPdf={
              uploadingPdf
            }
            uploadProgress={
              pdfUploadProgress
            }
            onSubmit={
              handleSave
            }
            onCancel={
              editingChapter
                ? () => {
                    setEditingChapter(
                      null,
                    );

                    resetUploadState();

                    clearMessages();
                  }
                : undefined
            }
          />
        </Card>

        {/* ===================================================
            CHAPTER LIST
        ==================================================== */}

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
          ) : chapters.length ===
            0 ? (
            <EmptyState
              icon="📖"
              title="No chapters yet"
              description="Create the first chapter for this course."
            />
          ) : (
            <div className="ns-chapter-list">
              {chapters.map(
                (chapter) => {
                  const hasPdf =
                    Boolean(
                      chapter
                        ?.pdf?.url ||
                        chapter
                          ?.pdfUrl,
                    );

                  return (
                    <article
                      key={
                        chapter.id
                      }
                      className="ns-chapter-card"
                    >
                      <div className="ns-chapter-number">
                        {chapter.chapterNumber ||
                          chapter.displayOrder}
                      </div>

                      <div className="ns-chapter-info">
                        <div className="ns-chapter-heading">
                          <h3>
                            {
                              chapter.title
                            }
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
                            {
                              chapter.displayOrder
                            }
                          </span>

                          {hasPdf && (
                            <span className="pdf">
                              <FaFilePdf />
                              PDF
                            </span>
                          )}
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
                          onClick={() => {
                            clearMessages();

                            resetUploadState();

                            setEditingChapter(
                              chapter,
                            );
                          }}
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
                          className="danger"
                          title="Delete chapter"
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
                  );
                },
              )}
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
            display: inline-flex;
            align-items: center;
            gap: 4px;
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 7px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-chapter-tags .pdf {
            background: #fee2e2;
            color: #b91c1c;
          }

          .ns-chapter-buttons {
            display: flex;
            flex-shrink: 0;
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

          .ns-chapter-buttons button:hover {
            background: #dbeafe;
          }

          .ns-chapter-buttons .danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-chapter-buttons .danger:hover {
            background: #fee2e2;
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