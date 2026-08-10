import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaLock,
  FaPlayCircle,
} from "react-icons/fa";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getCourseBySlug,
} from "../../../../services/courseService";

import {
  getPublishedChaptersByCourse,
} from "../../../../services/chapterService";

import {
  enrollStudent,
  getStudentEnrollment,
} from "../../../../services/studentEnrollmentService";

import {
  getStudentCourseProgress,
} from "../../../../services/studentProgressService";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

export default function CourseDetails() {
  const { courseId: courseSlug } =
    useParams();

  const navigate = useNavigate();

  const {
    firebaseUser,
    profile,
  } = useAuth();

  const studentId =
    firebaseUser?.uid ||
    profile?.uid ||
    "";

  const [
    course,
    setCourse,
  ] = useState(null);

  const [
    chapters,
    setChapters,
  ] = useState([]);

  const [
    enrollment,
    setEnrollment,
  ] = useState(null);

  const [
    progress,
    setProgress,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    enrolling,
    setEnrolling,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    imageError,
    setImageError,
  ] = useState(false);

  // =========================================================
  // LOAD COURSE
  // =========================================================

  useEffect(() => {
    if (
      !courseSlug ||
      !studentId
    ) {
      return;
    }

    loadCourse();
  }, [
    courseSlug,
    studentId,
  ]);

  const loadCourse =
    async () => {
      try {
        setLoading(true);
        setError("");
        setImageError(false);

        // -----------------------------------------------------
        // STEP 1: FIND COURSE BY URL SLUG
        // -----------------------------------------------------

        const courseData =
          await getCourseBySlug(
            courseSlug,
          );

        if (!courseData) {
          setCourse(null);
          setChapters([]);
          setEnrollment(null);
          setProgress([]);
          return;
        }

        setCourse(
          courseData,
        );

        // -----------------------------------------------------
        // STEP 2: ACTUAL FIRESTORE COURSE ID
        // -----------------------------------------------------

        const realCourseId =
          courseData.id;

        if (!realCourseId) {
          throw new Error(
            "Course document ID is missing.",
          );
        }

        // -----------------------------------------------------
        // STEP 3: LOAD STUDENT DATA
        // -----------------------------------------------------

        const [
          chapterData,
          enrollmentData,
          progressData,
        ] =
          await Promise.all([
            getPublishedChaptersByCourse(
              realCourseId,
            ),

            getStudentEnrollment(
              studentId,
              realCourseId,
            ),

            getStudentCourseProgress(
              studentId,
              realCourseId,
            ),
          ]);

        // -----------------------------------------------------
        // STEP 4: PUBLISHED CHAPTERS ONLY
        // -----------------------------------------------------

        const publishedChapters =
          Array.isArray(
            chapterData,
          )
            ? chapterData
                .filter(
                  (
                    chapter,
                  ) =>
                    chapter.published ===
                      true &&
                    chapter.deleted !==
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
          publishedChapters,
        );

        setEnrollment(
          enrollmentData ||
            null,
        );

        setProgress(
          Array.isArray(
            progressData,
          )
            ? progressData
            : [],
        );
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load course:",
          loadError,
        );

        setError(
          loadError?.message ||
            "Unable to load this course.",
        );

        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

  // =========================================================
  // COURSE IMAGES
  // =========================================================

  const desktopImageUrl =
    course?.media
      ?.desktopImageUrl ||
    course?.desktopImageUrl ||
    course?.media
      ?.thumbnailUrl ||
    course?.thumbnailUrl ||
    "";

  const mobileImageUrl =
    course?.media
      ?.mobileImageUrl ||
    course?.mobileImageUrl ||
    "";

  // =========================================================
  // PROGRESS MAP
  // =========================================================

  const progressMap =
    useMemo(
      () =>
        Object.fromEntries(
          progress.map(
            (item) => [
              item.chapterId,
              item,
            ],
          ),
        ),
      [progress],
    );

  // =========================================================
  // COURSE PROGRESS
  // =========================================================

  const completedChapterCount =
    useMemo(
      () =>
        chapters.filter(
          (
            chapter,
          ) =>
            progressMap[
              chapter.id
            ]?.completed ===
            true,
        ).length,
      [
        chapters,
        progressMap,
      ],
    );

  const courseProgressPercentage =
    chapters.length > 0
      ? Math.round(
          (
            completedChapterCount /
            chapters.length
          ) * 100,
        )
      : 0;

  // =========================================================
  // ENROLL
  // =========================================================

  const handleEnroll =
    async () => {
      if (!course?.id) {
        setError(
          "Unable to determine the course ID.",
        );

        return;
      }

      try {
        setEnrolling(true);
        setError("");

        const result =
          await enrollStudent(
            studentId,
            course.id,
            studentId,
          );

        setEnrollment(
          result,
        );
      } catch (
        enrollError
      ) {
        console.error(
          "Unable to enroll:",
          enrollError,
        );

        setError(
          enrollError?.message ||
            "Unable to enroll.",
        );
      } finally {
        setEnrolling(false);
      }
    };

  // =========================================================
  // CHAPTER UNLOCKING
  // =========================================================

  const isChapterUnlocked = (
    chapter,
    index,
  ) => {
    // Preview chapters are always available.
    if (
      chapter.previewAvailable ===
      true
    ) {
      return true;
    }

    // Normal chapters require enrollment.
    if (!enrollment) {
      return false;
    }

    // First chapter is available once enrolled.
    if (index === 0) {
      return true;
    }

    // Later chapters require the previous chapter completed.
    const previousChapter =
      chapters[
        index - 1
      ];

    if (!previousChapter) {
      return false;
    }

    return Boolean(
      progressMap[
        previousChapter.id
      ]?.completed,
    );
  };

  // =========================================================
  // OPEN CHAPTER
  // =========================================================

  const handleOpenChapter = (
    chapter,
  ) => {
    if (
      !course?.slug ||
      !chapter?.id
    ) {
      return;
    }

    navigate(
      `/student/learn/${course.slug}/${chapter.id}`,
    );
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading course..."
      />
    );
  }

  // =========================================================
  // COURSE NOT FOUND
  // =========================================================

  if (!course) {
    return (
      <div>
        {error && (
          <div className="ns-course-detail-error">
            {error}
          </div>
        )}

        <Card>
          Course not found.
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
          course.title
        }
        description={
          course.shortDescription ||
          "NagarikSuraksha Learning"
        }
        breadcrumbs={[
          "Student",
          "My Courses",
          course.title,
        ]}
      />

      {error && (
        <div className="ns-course-detail-error">
          {error}
        </div>
      )}

      {/* =====================================================
          RESPONSIVE COURSE IMAGE
          Desktop = 16:9
          Mobile = 9:16
      ====================================================== */}

      {desktopImageUrl &&
        !imageError && (
          <div className="ns-course-cover">
            <picture>
              {mobileImageUrl && (
                <source
                  media="(max-width: 640px)"
                  srcSet={
                    mobileImageUrl
                  }
                />
              )}

              <img
                src={
                  desktopImageUrl
                }
                alt={`${course.title} course banner`}
                onError={() =>
                  setImageError(
                    true,
                  )
                }
              />
            </picture>
          </div>
        )}

      <div className="ns-course-detail-grid">
        {/* ===================================================
            COURSE OVERVIEW
        ==================================================== */}

        <Card>
          <div className="ns-course-intro">
            <h2>
              Course Overview
            </h2>

            <p>
              {course.description ||
                course.shortDescription ||
                "Course details will be available soon."}
            </p>

            <div className="ns-course-detail-meta">
              <span>
                <FaClock />

                {course.duration ||
                  "Self-paced"}
              </span>

              <span>
                <FaBookOpen />

                {
                  chapters.length
                }{" "}
                {chapters.length ===
                1
                  ? "Chapter"
                  : "Chapters"}
              </span>

              {enrollment && (
                <span>
                  <FaCheckCircle />
                  Enrolled
                </span>
              )}
            </div>

            {/* ===============================================
                COURSE PROGRESS
            ================================================ */}

            {enrollment && (
              <div className="ns-course-progress-summary">
                <div className="ns-course-progress-heading">
                  <span>
                    Course Progress
                  </span>

                  <strong>
                    {
                      courseProgressPercentage
                    }
                    %
                  </strong>
                </div>

                <div className="ns-course-progress-track">
                  <div
                    className="ns-course-progress-fill"
                    style={{
                      width: `${courseProgressPercentage}%`,
                    }}
                  />
                </div>

                <small>
                  {
                    completedChapterCount
                  }{" "}
                  of{" "}
                  {
                    chapters.length
                  }{" "}
                  {chapters.length ===
                  1
                    ? "chapter"
                    : "chapters"}{" "}
                  completed
                </small>
              </div>
            )}

            {!enrollment && (
              <Button
                loading={
                  enrolling
                }
                onClick={
                  handleEnroll
                }
              >
                Enroll in Course
              </Button>
            )}
          </div>
        </Card>

        {/* ===================================================
            COURSE CHAPTERS
        ==================================================== */}

        <Card
          title="Course Chapters"
          subtitle="Complete chapters in sequence to progress through the course."
        >
          {chapters.length ===
          0 ? (
            <div className="ns-no-course-chapters">
              No published
              chapters are
              currently
              available for
              this course.
            </div>
          ) : (
            <div className="ns-learning-chapter-list">
              {chapters.map(
                (
                  chapter,
                  index,
                ) => {
                  const chapterProgress =
                    progressMap[
                      chapter.id
                    ];

                  const unlocked =
                    isChapterUnlocked(
                      chapter,
                      index,
                    );

                  const percentage =
                    Number(
                      chapterProgress
                        ?.progressPercentage ||
                        0,
                    );

                  return (
                    <article
                      key={
                        chapter.id
                      }
                      className={`ns-learning-chapter ${
                        unlocked
                          ? ""
                          : "locked"
                      }`}
                    >
                      <div className="ns-learning-chapter-number">
                        {chapter.chapterNumber ||
                          index +
                            1}
                      </div>

                      <div className="ns-learning-chapter-info">
                        <h3>
                          {
                            chapter.title
                          }
                        </h3>

                        <p>
                          {chapter.shortDescription ||
                            chapter.description ||
                            "Course chapter"}
                        </p>

                        {chapterProgress && (
                          <div className="ns-chapter-progress">
                            <div className="ns-chapter-progress-text">
                              <span>
                                {
                                  percentage
                                }
                                % Complete
                              </span>

                              {chapterProgress.completed && (
                                <strong>
                                  <FaCheckCircle />
                                  Completed
                                </strong>
                              )}
                            </div>

                            <div className="ns-chapter-progress-track">
                              <div
                                className="ns-chapter-progress-fill"
                                style={{
                                  width: `${percentage}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        disabled={
                          !unlocked
                        }
                        onClick={() =>
                          handleOpenChapter(
                            chapter,
                          )
                        }
                      >
                        {unlocked ? (
                          <>
                            <FaPlayCircle />

                            {chapterProgress
                              ?.completed
                              ? "Review"
                              : "Open"}
                          </>
                        ) : (
                          <>
                            <FaLock />
                            Locked
                          </>
                        )}
                      </button>
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
          /* ==================================================
             COURSE COVER
             DESKTOP = 16:9
             NO CROPPING
          ================================================== */

          .ns-course-cover {
            width: 100%;
            margin-bottom: 22px;

            overflow: hidden;

            aspect-ratio: 16 / 9;

            border:
              1px solid #e2e8f0;

            border-radius: 18px;

            background: #ffffff;

            box-shadow:
              0 8px 24px
              rgba(
                15,
                23,
                42,
                0.06
              );
          }

          .ns-course-cover picture {
            display: block;

            width: 100%;
            height: 100%;
          }

          .ns-course-cover img {
            display: block;

            width: 100%;
            height: 100%;

            /*
             * IMPORTANT:
             *
             * The entire artwork is displayed.
             * No top/bottom/left/right cropping.
             */
            object-fit: contain;

            object-position: center;

            background: #ffffff;
          }

          /* ==================================================
             COURSE LAYOUT
          ================================================== */

          .ns-course-detail-grid {
            display: grid;
            gap: 22px;
          }

          .ns-course-intro h2 {
            margin-top: 0;
            color: #0f172a;
          }

          .ns-course-intro p {
            color: #64748b;
            line-height: 1.8;
            white-space: pre-line;
          }

          /* ==================================================
             COURSE META
          ================================================== */

          .ns-course-detail-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin: 20px 0;
          }

          .ns-course-detail-meta span {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #475569;
            font-size: 13px;
            font-weight: 700;
          }

          /* ==================================================
             COURSE PROGRESS
          ================================================== */

          .ns-course-progress-summary {
            margin: 20px 0;

            max-width:
              560px;

            border-radius:
              14px;

            background:
              #f8fafc;

            padding: 16px;
          }

          .ns-course-progress-heading {
            display: flex;

            align-items:
              center;

            justify-content:
              space-between;

            margin-bottom:
              9px;

            color:
              #334155;

            font-size:
              13px;

            font-weight:
              700;
          }

          .ns-course-progress-heading strong {
            color: #2563eb;
          }

          .ns-course-progress-track,
          .ns-chapter-progress-track {
            overflow: hidden;

            width: 100%;
            height: 8px;

            border-radius:
              999px;

            background:
              #e2e8f0;
          }

          .ns-course-progress-fill,
          .ns-chapter-progress-fill {
            height: 100%;

            border-radius:
              inherit;

            background:
              #2563eb;

            transition:
              width .25s ease;
          }

          .ns-course-progress-summary small {
            display: block;

            margin-top:
              8px;

            color:
              #64748b;
          }

          /* ==================================================
             CHAPTER LIST
          ================================================== */

          .ns-learning-chapter-list {
            display: flex;
            flex-direction:
              column;
            gap: 12px;
          }

          .ns-learning-chapter {
            display: flex;

            align-items:
              center;

            gap: 15px;

            border:
              1px solid #e2e8f0;

            border-radius:
              14px;

            background:
              #ffffff;

            padding: 15px;
          }

          .ns-learning-chapter.locked {
            background:
              #f8fafc;

            opacity: .72;
          }

          .ns-learning-chapter-number {
            display: flex;

            width: 44px;
            height: 44px;

            flex-shrink:
              0;

            align-items:
              center;

            justify-content:
              center;

            border-radius:
              12px;

            background:
              #eff6ff;

            color:
              #2563eb;

            font-weight:
              800;
          }

          .ns-learning-chapter-info {
            min-width: 0;
            flex: 1;
          }

          .ns-learning-chapter-info h3 {
            margin: 0;

            color:
              #0f172a;

            font-size:
              15px;
          }

          .ns-learning-chapter-info p {
            margin:
              5px 0 0;

            color:
              #64748b;

            font-size:
              12px;
          }

          /* ==================================================
             CHAPTER PROGRESS
          ================================================== */

          .ns-chapter-progress {
            margin-top:
              10px;

            max-width:
              430px;
          }

          .ns-chapter-progress-text {
            display: flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap: 10px;

            margin-bottom:
              6px;
          }

          .ns-chapter-progress-text span {
            margin: 0;

            color:
              #2563eb;

            font-size:
              11px;

            font-weight:
              700;
          }

          .ns-chapter-progress-text strong {
            display: flex;

            align-items:
              center;

            gap: 5px;

            color:
              #15803d;

            font-size:
              11px;
          }

          /* ==================================================
             CHAPTER BUTTON
          ================================================== */

          .ns-learning-chapter button {
            display: flex;

            align-items:
              center;

            justify-content:
              center;

            gap: 7px;

            border: none;

            border-radius:
              10px;

            background:
              #2563eb;

            color:
              #ffffff;

            cursor:
              pointer;

            padding:
              10px 14px;

            font-weight:
              700;
          }

          .ns-learning-chapter button:hover:not(:disabled) {
            background:
              #1d4ed8;
          }

          .ns-learning-chapter button:disabled {
            background:
              #cbd5e1;

            cursor:
              not-allowed;
          }

          /* ==================================================
             EMPTY / ERROR
          ================================================== */

          .ns-no-course-chapters {
            border:
              1px dashed #cbd5e1;

            border-radius:
              12px;

            color:
              #64748b;

            padding:
              24px;

            text-align:
              center;
          }

          .ns-course-detail-error {
            margin-bottom:
              18px;

            border:
              1px solid #fecaca;

            border-radius:
              10px;

            background:
              #fef2f2;

            color:
              #b91c1c;

            padding:
              12px;
          }

          /* ==================================================
             MOBILE
             MOBILE IMAGE = 9:16
          ================================================== */

          @media (
            max-width: 640px
          ) {
            .ns-course-cover {
              width: 100%;

              /*
               * When mobileImageUrl exists,
               * <picture> loads the 9:16 version.
               */
              aspect-ratio:
                9 / 16;

              margin-bottom:
                16px;

              border-radius:
                14px;

              background:
                #ffffff;
            }

            .ns-course-cover img {
              object-fit:
                contain;

              object-position:
                center;
            }

            .ns-learning-chapter {
              align-items:
                stretch;

              flex-direction:
                column;
            }

            .ns-learning-chapter button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}