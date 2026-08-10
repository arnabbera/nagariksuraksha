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

    if (
      url.hostname.includes(
        "youtu.be",
      )
    ) {
      return `https://www.youtube.com/embed/${url.pathname.replace(
        "/",
        "",
      )}`;
    }

    const id =
      url.searchParams.get("v");

    return id
      ? `https://www.youtube.com/embed/${id}`
      : "";
  } catch {
    return "";
  }
};

export default function ChapterLearning() {
  /*
   * The route is:
   *
   * /student/learn/:courseId/:chapterId
   *
   * courseId currently contains the COURSE SLUG.
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

  const [resourceCompletingId, setResourceCompletingId] =
    useState("");

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
      // STEP 1
      // Resolve the course URL slug.
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
      // STEP 2
      // Load student-safe learning data.
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

        /*
         * IMPORTANT:
         *
         * Student query contains:
         * published == true
         *
         * This matches Firestore security rules.
         */
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
      // Validate chapter belongs to this course.
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
      // Published chapters only.
      // -------------------------------------------------------

      const safeChapterList =
        Array.isArray(chapterList)
          ? chapterList
              .filter(
                (item) =>
                  item.published ===
                    true &&
                  item.deleted !==
                    true,
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
      // Published resources only.
      // -------------------------------------------------------

      setResources(
        Array.isArray(resourceList)
          ? resourceList
          : [],
      );

      // -------------------------------------------------------
      // Existing progress or start chapter.
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

              /*
               * Progress must store the REAL
               * Firestore course ID.
               */
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

      <div className="ns-learning-progress-summary">
        <div>
          <span>
            Chapter Progress
          </span>

          <strong>
            {
              Number(
                progress
                  ?.progressPercentage ||
                  0,
              )
            }
            %
          </strong>
        </div>

        <div className="ns-learning-progress-track">
          <div
            style={{
              width: `${
                Number(
                  progress
                    ?.progressPercentage ||
                    0,
                )
              }%`,
            }}
          />
        </div>
      </div>

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

      <div className="ns-learning-resource-list">
        {resources.length ===
        0 ? (
          <Card>
            No learning resources
            have been published for
            this chapter yet.
          </Card>
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
        `}
      </style>
    </div>
  );
}