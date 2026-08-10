import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFilePdf,
  FaLink,
  FaLock,
} from "react-icons/fa";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getChapterById,
  getPublishedChaptersByCourse,
} from "../../../../services/chapterService";

import {
  getCourseBySlug,
} from "../../../../services/courseService";

import {
  getPublishedChapterResources,
} from "../../../../services/chapterResourceService";

import {
  getStudentChapterProgress,
  markChapterComplete,
  markResourceComplete,
  startChapter,
} from "../../../../services/studentProgressService";

import Card from "../../../../shared/components/Card";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

import ChapterNavigation from "../components/ChapterNavigation";

const getYouTubeEmbedUrl = (
  videoId,
  youtubeUrl,
) => {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  try {
    const url = new URL(youtubeUrl);

    if (url.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${url.pathname.replace(
        "/",
        "",
      )}`;
    }

    const id = url.searchParams.get("v");

    return id
      ? `https://www.youtube.com/embed/${id}`
      : "";
  } catch {
    return "";
  }
};

const formatFileSize = (bytes = 0) => {
  const size = Number(bytes || 0);

  if (!size) {
    return "";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

export default function ChapterLearning() {
  /*
   * Route:
   *
   * /student/learn/:courseId/:chapterId
   *
   * courseId currently contains the course slug.
   */

  const {
    courseId: courseSlug,
    chapterId,
  } = useParams();

  const navigate = useNavigate();

  const {
    firebaseUser,
    profile,
  } = useAuth();

  const studentId =
    firebaseUser?.uid ||
    profile?.uid ||
    "";

  const [course, setCourse] =
    useState(null);

  const [chapter, setChapter] =
    useState(null);

  const [chapters, setChapters] =
    useState([]);

  const [resources, setResources] =
    useState([]);

  const [progress, setProgress] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [completing, setCompleting] =
    useState(false);

  const [
    resourceCompletingId,
    setResourceCompletingId,
  ] = useState("");

  const [error, setError] =
    useState("");

  // =========================================================
  // LOAD LEARNING PAGE
  // =========================================================

  useEffect(() => {
    if (
      courseSlug &&
      chapterId &&
      studentId
    ) {
      loadLearningPage();
    }
  }, [
    courseSlug,
    chapterId,
    studentId,
  ]);

  const loadLearningPage = async () => {
    try {
      setLoading(true);
      setError("");

      // -------------------------------------------------------
      // Resolve course slug
      // -------------------------------------------------------

      const courseData =
        await getCourseBySlug(
          courseSlug,
        );

      if (!courseData) {
        setCourse(null);
        setChapter(null);
        return;
      }

      const realCourseId =
        courseData.id;

      if (!realCourseId) {
        throw new Error(
          "Course document ID is missing.",
        );
      }

      setCourse(courseData);

      // -------------------------------------------------------
      // Load chapter + resources + progress
      // -------------------------------------------------------

      const [
        chapterData,
        chapterList,
        resourceList,
        existingProgress,
      ] = await Promise.all([
        getChapterById(
          chapterId,
        ),

        getPublishedChaptersByCourse(
          realCourseId,
        ),

        getPublishedChapterResources(
          chapterId,
        ),

        getStudentChapterProgress(
          studentId,
          chapterId,
        ),
      ]);

      // -------------------------------------------------------
      // Validate chapter
      // -------------------------------------------------------

      if (
        !chapterData ||
        chapterData.published !== true ||
        chapterData.deleted === true ||
        chapterData.courseId !== realCourseId
      ) {
        setChapter(null);
        setChapters([]);
        setResources([]);
        setProgress(null);
        return;
      }

      setChapter(
        chapterData,
      );

      // -------------------------------------------------------
      // Published chapters
      // -------------------------------------------------------

      const safeChapterList =
        Array.isArray(chapterList)
          ? chapterList
              .filter(
                (item) =>
                  item.published === true &&
                  item.deleted !== true,
              )
              .sort(
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
              )
          : [];

      setChapters(
        safeChapterList,
      );

      // -------------------------------------------------------
      // Published additional resources
      // -------------------------------------------------------

      setResources(
        Array.isArray(resourceList)
          ? resourceList
          : [],
      );

      // -------------------------------------------------------
      // Progress
      // -------------------------------------------------------

      if (existingProgress) {
        setProgress(
          existingProgress,
        );
      } else {
        const started =
          await startChapter(
            {
              studentId,
              courseId:
                realCourseId,
              chapterId,
            },
            studentId,
          );

        setProgress(
          started,
        );
      }
    } catch (loadError) {
      console.error(
        "Unable to load chapter:",
        loadError,
      );

      setError(
        loadError?.message ||
          "Unable to load this chapter.",
      );

      setChapter(null);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // CHAPTER PDF
  // =========================================================

  /*
   * Supports both structures:
   *
   * New/nested:
   * chapter.pdf.url
   *
   * Current compatibility fields:
   * chapter.pdfUrl
   */

  const chapterPdfUrl =
    chapter?.pdf?.url ||
    chapter?.pdfUrl ||
    "";

  const chapterPdfFileName =
    chapter?.pdf?.fileName ||
    chapter?.pdfFileName ||
    "Chapter Study Material.pdf";

  const chapterPdfFileSize =
    chapter?.pdf?.fileSize ||
    chapter?.pdfFileSize ||
    0;

  const hasChapterPdf =
    Boolean(chapterPdfUrl);

  /*
   * UI download permission.
   *
   * Keep false until certification/payment entitlement
   * is connected.
   */
  const canDownloadChapterPdf =
    false;

  // =========================================================
  // CURRENT CHAPTER POSITION
  // =========================================================

  const currentIndex =
    useMemo(
      () =>
        chapters.findIndex(
          (item) =>
            item.id ===
            chapterId,
        ),
      [
        chapters,
        chapterId,
      ],
    );

  const previousChapter =
    currentIndex > 0
      ? chapters[
          currentIndex - 1
        ]
      : null;

  const nextChapter =
    currentIndex >= 0 &&
    currentIndex <
      chapters.length - 1
      ? chapters[
          currentIndex + 1
        ]
      : null;

  // =========================================================
  // COMPLETED RESOURCES
  // =========================================================

  const completedResourceIds =
    Array.isArray(
      progress?.resources
        ?.completedIds,
    )
      ? progress.resources
          .completedIds
      : [];

  // =========================================================
  // RESOURCE COMPLETION
  // =========================================================

  const handleResourceComplete =
    async (
      resourceId,
    ) => {
      if (
        !course?.id ||
        !resourceId
      ) {
        return;
      }

      try {
        setResourceCompletingId(
          resourceId,
        );

        setError("");

        const updated =
          await markResourceComplete({
            studentId,

            courseId:
              course.id,

            chapterId,

            resourceId,

            totalResources:
              resources.length,

            updatedBy:
              studentId,
          });

        setProgress(
          updated,
        );
      } catch (progressError) {
        console.error(
          "Unable to update resource progress:",
          progressError,
        );

        setError(
          progressError?.message ||
            "Unable to update learning progress.",
        );
      } finally {
        setResourceCompletingId(
          "",
        );
      }
    };

  // =========================================================
  // CHAPTER COMPLETION
  // =========================================================

  const handleChapterComplete =
    async () => {
      try {
        setCompleting(true);
        setError("");

        const updated =
          await markChapterComplete(
            studentId,
            chapterId,
            studentId,
          );

        setProgress(
          updated,
        );
      } catch (completeError) {
        console.error(
          "Unable to complete chapter:",
          completeError,
        );

        setError(
          completeError?.message ||
            "Unable to complete chapter.",
        );
      } finally {
        setCompleting(false);
      }
    };

  // =========================================================
  // NAVIGATION
  // =========================================================

  const navigateChapter = (
    targetChapter,
  ) => {
    if (
      !targetChapter?.id ||
      !course?.slug
    ) {
      return;
    }

    navigate(
      `/student/learn/${course.slug}/${targetChapter.id}`,
    );
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading chapter..."
      />
    );
  }

  // =========================================================
  // NOT FOUND
  // =========================================================

  if (
    !chapter ||
    !course
  ) {
    return (
      <div>
        {error && (
          <div className="ns-learning-error">
            {error}
          </div>
        )}

        <Card>
          Chapter not found.
        </Card>
      </div>
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div>
      <PageHeader
        title={
          chapter.title
        }
        description={
          course.title
        }
        breadcrumbs={[
          "Student",
          "My Courses",
          course.title,
          chapter.title,
        ]}
      />

      {error && (
        <div className="ns-learning-error">
          {error}
        </div>
      )}

      {/* =====================================================
          PROGRESS
      ====================================================== */}

      <div className="ns-learning-progress-summary">
        <div>
          <span>
            Chapter Progress
          </span>

          <strong>
            {Number(
              progress
                ?.progressPercentage ||
                0,
            )}
            %
          </strong>
        </div>

        <div className="ns-learning-progress-track">
          <div
            style={{
              width: `${Number(
                progress
                  ?.progressPercentage ||
                  0,
              )}%`,
            }}
          />
        </div>
      </div>

      {/* =====================================================
          CHAPTER INTRODUCTION
      ====================================================== */}

      {chapter.notes && (
        <Card
          title="Chapter Introduction"
          style={{
            marginBottom: 20,
          }}
        >
          <div className="ns-chapter-notes">
            {
              chapter.notes
            }
          </div>
        </Card>
      )}

      {/* =====================================================
          MAIN CHAPTER PDF
      ====================================================== */}

      {hasChapterPdf && (
        <div className="ns-chapter-pdf-section">
          <div className="ns-chapter-pdf-heading">
            <div className="ns-chapter-pdf-title">
              <div className="ns-chapter-pdf-icon">
                <FaFilePdf />
              </div>

              <div>
                <h2>
                  Chapter Study Material
                </h2>

                <p>
                  Read the chapter material below.
                </p>
              </div>
            </div>

            <div className="ns-chapter-pdf-file">
              <strong>
                {chapterPdfFileName}
              </strong>

              {chapterPdfFileSize >
                0 && (
                <span>
                  {formatFileSize(
                    chapterPdfFileSize,
                  )}
                </span>
              )}
            </div>
          </div>

          <div className="ns-pdf-reader">
            <iframe
              src={`${chapterPdfUrl}#toolbar=0&navpanes=0`}
              title={`${chapter.title} PDF`}
            />
          </div>

          <div className="ns-pdf-access">
            {canDownloadChapterPdf ? (
              <a
                href={
                  chapterPdfUrl
                }
                target="_blank"
                rel="noreferrer"
                download
                className="ns-pdf-download"
              >
                <FaFilePdf />

                Download PDF
              </a>
            ) : (
              <div className="ns-pdf-locked">
                <FaLock />

                <div>
                  <strong>
                    Read-only study material
                  </strong>

                  <span>
                    PDF download is available
                    with eligible paid
                    certification access.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          ADDITIONAL RESOURCES
      ====================================================== */}

      <div className="ns-learning-resource-list">
        {resources.length ===
        0 ? (
          !hasChapterPdf && (
            <Card>
              No learning resources
              have been published for
              this chapter yet.
            </Card>
          )
        ) : (
          resources.map(
            (resource) => {
              const completed =
                completedResourceIds.includes(
                  resource.id,
                );

              const embedUrl =
                resource.type ===
                "video"
                  ? getYouTubeEmbedUrl(
                      resource.video
                        ?.youtubeVideoId,

                      resource.video
                        ?.youtubeUrl,
                    )
                  : "";

              const resourceBusy =
                resourceCompletingId ===
                resource.id;

              return (
                <Card
                  key={
                    resource.id
                  }
                  title={
                    resource.title
                  }
                  subtitle={
                    resource.description
                  }
                  actions={
                    completed ? (
                      <span className="ns-resource-completed">
                        <FaCheckCircle />
                        Completed
                      </span>
                    ) : null
                  }
                >
                  {resource.type ===
                    "video" &&
                    embedUrl && (
                      <div className="ns-video-wrapper">
                        <iframe
                          src={
                            embedUrl
                          }
                          title={
                            resource.title
                          }
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                  {resource.type ===
                    "note" && (
                    <div className="ns-resource-text">
                      <FaFileAlt />

                      <div>
                        {
                          resource.content
                        }
                      </div>
                    </div>
                  )}

                  {resource.type ===
                    "assignment" && (
                    <div className="ns-resource-text">
                      <FaFileAlt />

                      <div>
                        {
                          resource.content
                        }
                      </div>
                    </div>
                  )}

                  {resource.type ===
                    "pdf" &&
                    resource.file
                      ?.url && (
                      <a
                        href={
                          resource.file
                            .url
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="ns-learning-link"
                      >
                        <FaFilePdf />

                        Open PDF

                        <FaExternalLinkAlt />
                      </a>
                    )}

                  {[
                    "link",
                    "download",
                  ].includes(
                    resource.type,
                  ) &&
                    resource.file
                      ?.url && (
                      <a
                        href={
                          resource.file
                            .url
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="ns-learning-link"
                      >
                        <FaLink />

                        Open Resource

                        <FaExternalLinkAlt />
                      </a>
                    )}

                  {!completed && (
                    <button
                      type="button"
                      className="ns-mark-resource-complete"
                      disabled={
                        resourceBusy
                      }
                      onClick={() =>
                        handleResourceComplete(
                          resource.id,
                        )
                      }
                    >
                      <FaCheckCircle />

                      {resourceBusy
                        ? "Saving..."
                        : "Mark Resource Complete"}
                    </button>
                  )}
                </Card>
              );
            },
          )
        )}
      </div>

      {/* =====================================================
          CHAPTER NAVIGATION
      ====================================================== */}

      <ChapterNavigation
        previousChapter={
          previousChapter
        }
        nextChapter={
          nextChapter
        }
        completed={
          Boolean(
            progress?.completed,
          )
        }
        completing={
          completing
        }
        onPrevious={() =>
          navigateChapter(
            previousChapter,
          )
        }
        onNext={() =>
          navigateChapter(
            nextChapter,
          )
        }
        onComplete={
          handleChapterComplete
        }
      />

      <style>
        {`
          .ns-learning-progress-summary {
            margin-bottom: 22px;
            border: 1px solid #dbeafe;
            border-radius: 14px;
            background: #eff6ff;
            padding: 16px;
          }

          .ns-learning-progress-summary > div:first-child {
            display: flex;
            justify-content: space-between;
            color: #475569;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-learning-progress-summary strong {
            color: #2563eb;
          }

          .ns-learning-progress-track {
            height: 9px;
            margin-top: 10px;
            overflow: hidden;
            border-radius: 999px;
            background: #dbeafe;
          }

          .ns-learning-progress-track div {
            height: 100%;
            border-radius: inherit;
            background: #2563eb;
            transition: width .25s ease;
          }

          /* ================================================
             CHAPTER PDF
          ================================================= */

          .ns-chapter-pdf-section {
            margin-bottom: 22px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #ffffff;
            box-shadow:
              0 4px 18px
              rgba(15, 23, 42, 0.05);
          }

          .ns-chapter-pdf-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 17px 20px;
            border-bottom: 1px solid #e2e8f0;
          }

          .ns-chapter-pdf-title {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .ns-chapter-pdf-icon {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: #fee2e2;
            color: #dc2626;
            font-size: 21px;
          }

          .ns-chapter-pdf-title h2 {
            margin: 0;
            color: #0f172a;
            font-size: 16px;
          }

          .ns-chapter-pdf-title p {
            margin: 3px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-chapter-pdf-file {
            display: flex;
            max-width: 45%;
            flex-direction: column;
            align-items: flex-end;
            gap: 3px;
          }

          .ns-chapter-pdf-file strong {
            overflow: hidden;
            max-width: 100%;
            color: #334155;
            font-size: 11px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-chapter-pdf-file span {
            color: #94a3b8;
            font-size: 10px;
          }

          .ns-pdf-reader {
            width: 100%;
            height: min(82vh, 1000px);
            min-height: 650px;
            background: #334155;
          }

          .ns-pdf-reader iframe {
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            background: #ffffff;
          }

          .ns-pdf-access {
            padding: 13px 18px;
            border-top: 1px solid #e2e8f0;
            background: #f8fafc;
          }

          .ns-pdf-locked {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #64748b;
          }

          .ns-pdf-locked > svg {
            flex-shrink: 0;
            color: #64748b;
          }

          .ns-pdf-locked div {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .ns-pdf-locked strong {
            color: #334155;
            font-size: 11px;
          }

          .ns-pdf-locked span {
            font-size: 10px;
          }

          .ns-pdf-download {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border-radius: 9px;
            background: #2563eb;
            color: #ffffff;
            padding: 9px 13px;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
          }

          /* ================================================
             RESOURCES
          ================================================= */

          .ns-learning-resource-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .ns-video-wrapper {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%;
            border-radius: 14px;
            background: #020617;
          }

          .ns-video-wrapper iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: none;
          }

          .ns-resource-text {
            display: flex;
            gap: 14px;
            color: #334155;
            line-height: 1.8;
            white-space: pre-line;
          }

          .ns-resource-text > svg {
            flex-shrink: 0;
            margin-top: 5px;
            color: #2563eb;
          }

          .ns-learning-link {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border-radius: 10px;
            background: #eff6ff;
            color: #2563eb;
            padding: 11px 15px;
            font-weight: 700;
            text-decoration: none;
          }

          .ns-mark-resource-complete {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 18px;
            border: none;
            border-radius: 10px;
            background: #2563eb;
            color: #ffffff;
            cursor: pointer;
            padding: 10px 14px;
            font-weight: 700;
          }

          .ns-mark-resource-complete:disabled {
            cursor: not-allowed;
            opacity: .65;
          }

          .ns-resource-completed {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 999px;
            background: #dcfce7;
            color: #166534;
            padding: 6px 9px;
            font-size: 11px;
            font-weight: 800;
          }

          .ns-chapter-notes {
            color: #334155;
            line-height: 1.8;
            white-space: pre-line;
          }

          .ns-learning-error {
            margin-bottom: 18px;
            border: 1px solid #fecaca;
            border-radius: 10px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 12px;
          }

          @media (max-width: 768px) {
            .ns-chapter-pdf-heading {
              align-items: flex-start;
              flex-direction: column;
            }

            .ns-chapter-pdf-file {
              max-width: 100%;
              align-items: flex-start;
            }

            .ns-pdf-reader {
              height: 72vh;
              min-height: 500px;
            }
          }
        `}
      </style>
    </div>
  );
}