import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaBook,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaFilePdf,
  FaGraduationCap,
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
  getPublishedBooksByCourse,
} from "../../../../services/courseBookService";

import {
  enrollForCertification,
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
    recommendedBooks,
    setRecommendedBooks,
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
    certificationEnrolling,
    setCertificationEnrolling,
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
          setRecommendedBooks([]);
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
                  ) => {
                    const firstChapterNumber =
                      Number(
                        first.chapterNumber ||
                          first.displayOrder ||
                          0,
                      );

                    const secondChapterNumber =
                      Number(
                        second.chapterNumber ||
                          second.displayOrder ||
                          0,
                      );

                    return (
                      firstChapterNumber -
                      secondChapterNumber
                    );
                  },
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

        // -----------------------------------------------------
        // STEP 5: LOAD RECOMMENDED BOOKS INDEPENDENTLY
        // -----------------------------------------------------
        //
        // A permissions/query issue in courseBooks must never
        // break the course page itself.
        //
        try {
          const bookData =
            await getPublishedBooksByCourse(
              realCourseId,
            );

          const publishedRecommendedBooks =
            Array.isArray(
              bookData,
            )
              ? bookData.filter(
                  (book) =>
                    book &&
                    book.published ===
                      true &&
                    book.deleted !==
                      true &&
                    book.recommended ===
                      true,
                )
              : [];

          setRecommendedBooks(
            publishedRecommendedBooks,
          );
        } catch (
          bookLoadError
        ) {
          console.error(
            "Unable to load recommended books:",
            bookLoadError,
          );

          setRecommendedBooks([]);
        }
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

  const getBookCover = (book) =>
    book?.coverImageUrl ||
    book?.imageUrl ||
    book?.thumbnailUrl ||
    book?.coverUrl ||
    book?.media?.coverImageUrl ||
    "";

  const getBookTitle = (book) =>
    book?.title ||
    book?.bookTitle ||
    "Recommended Book";

  const getBookAuthor = (book) =>
    book?.author ||
    book?.authors ||
    book?.authorName ||
    "";

  const getBookPublisher = (book) =>
    book?.publisher ||
    book?.publisherName ||
    "";

  const getBookLink = (book) =>
    book?.url ||
    book?.purchaseUrl ||
    book?.buyUrl ||
    book?.amazonUrl ||
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
  // CERTIFICATION
  // =========================================================

  const certificationAvailable =
    course?.certification?.available ??
    course?.certificationAvailable ??
    false;

  const certificationFee =
    Number(
      course?.certification?.fee ??
        course?.certificationFee ??
        0,
    );

  const certification =
    enrollment?.certification ||
    null;

  const certificationStatus =
    certification?.status ||
    "not-enrolled";

  const certificationActive =
    certificationStatus ===
      "active" ||
    certificationStatus ===
      "completed";

  const certificationPendingPayment =
    certificationStatus ===
    "pending-payment";

  const certificationPaymentCompleted =
    certification?.payment?.status ===
    "paid";

  const handleCertificationEnroll =
    async () => {
      if (
        !studentId ||
        !course?.id
      ) {
        return;
      }

      try {
        setCertificationEnrolling(
          true,
        );

        setError("");

        const updatedEnrollment =
          await enrollForCertification(
            studentId,
            course.id,
            studentId,
          );

        setEnrollment(
          updatedEnrollment,
        );
      } catch (
        certificationError
      ) {
        console.error(
          "Unable to enroll for certification:",
          certificationError,
        );

        setError(
          certificationError?.message ||
            "Unable to start certification enrollment.",
        );
      } finally {
        setCertificationEnrolling(
          false,
        );
      }
    };

  // =========================================================
  // CHAPTER UNLOCKING
  // =========================================================

  const isChapterUnlocked = (
    chapter,
    index,
  ) => {
    if (
      chapter.previewAvailable ===
      true
    ) {
      return true;
    }

    if (!enrollment) {
      return false;
    }

    if (index === 0) {
      return true;
    }

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
          COURSE HERO
          DESKTOP:
          LEFT  = MODERATE 16:9 THUMBNAIL
          RIGHT = COURSE OVERVIEW

          MOBILE:
          9:16 IMAGE ABOVE OVERVIEW
      ====================================================== */}

      <div className="ns-course-hero">
        {/* LEFT COLUMN: IMAGE + RECOMMENDED BOOKS */}

        <div className="ns-course-left-column">
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

          <section className="ns-course-books">
            <div className="ns-course-books-heading">
              <FaBook />
              <div>
                <h2>Recommended Books</h2>
                <p>Suggested reading for this course</p>
              </div>
            </div>

            {recommendedBooks.length === 0 ? (
              <div className="ns-course-books-empty">
                Recommended books will be added soon.
              </div>
            ) : (
              <div className="ns-course-book-list">
                {recommendedBooks.map((book, index) => {
                  const cover = getBookCover(book);
                  const title = getBookTitle(book);
                  const author = getBookAuthor(book);
                  const publisher = getBookPublisher(book);
                  const link = getBookLink(book);

                  const bookContent = (
                    <>
                      <div className="ns-course-book-cover">
                        {cover ? (
                          <img
                            src={cover}
                            alt={`${title} cover`}
                            loading="lazy"
                          />
                        ) : (
                          <FaBook />
                        )}
                      </div>

                      <div className="ns-course-book-info">
                        <h3>{title}</h3>
                        {author && <p>By {author}</p>}
                        {publisher && <small>{publisher}</small>}
                      </div>
                    </>
                  );

                  return link ? (
                    <a
                      key={book.id || `${title}-${index}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="ns-course-book-item"
                    >
                      {bookContent}
                    </a>
                  ) : (
                    <article
                      key={book.id || `${title}-${index}`}
                      className="ns-course-book-item"
                    >
                      {bookContent}
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        {/* COURSE OVERVIEW */}

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

              <span
                className={`ns-course-state-badge ${
                  enrollment
                    ? "is-active"
                    : "is-inactive"
                }`}
              >
                <FaCheckCircle />
                Assigned
              </span>

              <span
                className={`ns-course-state-badge ${
                  certificationPaymentCompleted
                    ? "is-active"
                    : "is-inactive"
                }`}
              >
                <FaCheckCircle />
                Enrolled
              </span>
            </div>

            {/* COURSE PROGRESS */}

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
              <div className="ns-course-enroll-action">
                <Button
                  loading={
                    enrolling
                  }
                  onClick={
                    handleEnroll
                  }
                >
                  Add to My Courses
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* =====================================================
          CERTIFICATION PROGRAM
      ====================================================== */}

      {certificationAvailable && (
        <section className="ns-certification-section">
          <div className="ns-certification-card">
            <div className="ns-certification-heading">
              <div className="ns-certification-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h2>
                  Certification Program
                </h2>

                <p>
                  Upgrade this course to the NagarikSuraksha certification track.
                </p>
              </div>

              <div className="ns-certification-fee">
                {certificationFee > 0
                  ? `₹${certificationFee}`
                  : "Free"}
              </div>
            </div>

            <div className="ns-certification-benefits">
              <div>
                <FaFilePdf />
                <span>
                  Download chapter PDFs
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  3 mandatory mock tests
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  NagarikSuraksha Admin-conducted final online examination
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Digital certificate after passing
                </span>
              </div>

              <div>
                <FaCheckCircle />
                <span>
                  Unique Certificate ID and online verification
                </span>
              </div>
            </div>

            {!certificationActive &&
              !certificationPendingPayment && (
                <div className="ns-certification-action">
                  <Button
                    loading={
                      certificationEnrolling
                    }
                    onClick={
                      handleCertificationEnroll
                    }
                  >
                    Enroll for Certification
                  </Button>
                </div>
              )}

            {certificationPendingPayment && (
              <div className="ns-certification-status is-pending">
                <strong>
                  Payment Pending
                </strong>

                <span>
                  Your certification enrollment request has been created. Payment activation will be connected after Cloudflare deployment.
                </span>
              </div>
            )}

            {certificationActive && (
              <div className="ns-certification-active">
                <div className="ns-certification-status is-active">
                  <strong>
                    Certification Active
                  </strong>

                  <span>
                    Certification learning privileges are enabled for this course.
                  </span>
                </div>

                <div className="ns-certification-access-grid">
                  <div className="is-unlocked">
                    <FaCheckCircle />
                    <span>
                      PDF Downloads Unlocked
                    </span>
                  </div>

                  <div className="is-unlocked">
                    <FaCheckCircle />
                    <span>
                      Mock Test 1 Available
                    </span>
                  </div>

                  <div>
                    <FaLock />
                    <span>
                      Mock Test 2 Locked
                    </span>
                  </div>

                  <div>
                    <FaLock />
                    <span>
                      Mock Test 3 Locked
                    </span>
                  </div>

                  <div>
                    <FaLock />
                    <span>
                      Final Examination Locked
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          COURSE CHAPTERS
          FULL WIDTH BELOW HERO
      ====================================================== */}

      <div className="ns-course-chapters-section">
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
             COURSE HERO
          ================================================== */

          .ns-course-hero {
            display: grid;

            /*
             * Moderate image on the left.
             * Overview receives more horizontal space.
             */
            grid-template-columns:
              minmax(300px, 40%)
              minmax(0, 1fr);

            gap: 24px;

            align-items: start;

            margin-bottom: 24px;
          }

          .ns-course-hero > * {
            min-width: 0;
          }

          .ns-course-left-column {
            display: flex;
            min-width: 0;
            flex-direction: column;
            gap: 18px;
          }

          .ns-course-books {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #ffffff;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          }

          .ns-course-books-heading {
            display: flex;
            align-items: center;
            gap: 11px;
            border-bottom: 1px solid #e2e8f0;
            color: #2563eb;
            padding: 15px 16px;
          }

          .ns-course-books-heading h2 {
            margin: 0;
            color: #0f172a;
            font-size: 15px;
          }

          .ns-course-books-heading p {
            margin: 3px 0 0;
            color: #64748b;
            font-size: 10px;
          }

          .ns-course-book-list {
            display: flex;
            flex-direction: column;
          }

          .ns-course-book-item {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid #f1f5f9;
            color: inherit;
            padding: 12px 16px;
            text-decoration: none;
          }

          .ns-course-book-item:last-child {
            border-bottom: 0;
          }

          a.ns-course-book-item:hover {
            background: #f8fafc;
          }

          .ns-course-book-cover {
            display: flex;
            width: 48px;
            height: 64px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 7px;
            background: #f8fafc;
            color: #94a3b8;
          }

          .ns-course-book-cover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ns-course-book-info {
            min-width: 0;
            flex: 1;
          }

          .ns-course-book-info h3 {
            margin: 0;
            color: #0f172a;
            font-size: 12px;
            line-height: 1.45;
          }

          .ns-course-book-info p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 10px;
          }

          .ns-course-book-info small {
            display: block;
            margin-top: 3px;
            color: #94a3b8;
            font-size: 9px;
          }

          .ns-course-books-empty {
            color: #64748b;
            padding: 18px 16px;
            font-size: 11px;
          }

          /* ==================================================
             COURSE COVER
             DESKTOP = 16:9
          ================================================== */

          .ns-course-cover {
            width: 100%;

            overflow: hidden;

            aspect-ratio: 16 / 9;

            border:
              1px solid #e2e8f0;

            border-radius: 16px;

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
             * Show complete artwork.
             * Do not crop the thumbnail.
             */
            object-fit: contain;

            object-position: center;

            background: #ffffff;
          }

          /* ==================================================
             COURSE OVERVIEW
          ================================================== */

          .ns-course-intro {
            display: flex;

            min-height: 100%;

            flex-direction: column;
          }

          .ns-course-intro h2 {
            margin:
              0 0 12px;

            color: #0f172a;

            font-size: 20px;
          }

          .ns-course-intro p {
            margin:
              0 0 18px;

            color: #64748b;

            font-size: 13px;

            line-height: 1.75;

            white-space: pre-line;
          }

          /* ==================================================
             COURSE META
          ================================================== */

          .ns-course-detail-meta {
            display: flex;

            flex-wrap: wrap;

            gap: 10px;

            margin-top: 4px;
          }

          .ns-course-detail-meta span {
            display: inline-flex;

            align-items: center;

            gap: 6px;

            border-radius: 999px;

            background: #f1f5f9;

            color: #475569;

            padding: 7px 10px;

            font-size: 11px;

            font-weight: 700;
          }

          .ns-course-detail-meta
            .ns-course-state-badge {
            border: 1px solid #cbd5e1;

            background: #f8fafc;

            color: #64748b;
          }

          .ns-course-detail-meta
            .ns-course-state-badge.is-active {
            border-color: #86efac;

            background: #dcfce7;

            color: #166534;
          }

          .ns-course-detail-meta
            .ns-course-state-badge.is-inactive {
            border-color: #cbd5e1;

            background: #f8fafc;

            color: #64748b;
          }

          /* ==================================================
             COURSE PROGRESS
          ================================================== */

          .ns-course-progress-summary {
            margin-top: 18px;

            border-radius: 12px;

            background: #f8fafc;

            padding: 14px;
          }

          .ns-course-progress-heading {
            display: flex;

            align-items: center;

            justify-content:
              space-between;

            margin-bottom: 9px;

            color: #334155;

            font-size: 12px;

            font-weight: 700;
          }

          .ns-course-progress-heading strong {
            color: #2563eb;
          }

          .ns-course-progress-track,
          .ns-chapter-progress-track {
            overflow: hidden;

            width: 100%;

            height: 8px;

            border-radius: 999px;

            background: #e2e8f0;
          }

          .ns-course-progress-fill,
          .ns-chapter-progress-fill {
            height: 100%;

            border-radius: inherit;

            background: #2563eb;

            transition:
              width .25s ease;
          }

          .ns-course-progress-summary small {
            display: block;

            margin-top: 8px;

            color: #64748b;

            font-size: 10px;
          }

          .ns-course-enroll-action {
            margin-top: 18px;
          }

          /* ==================================================
             CERTIFICATION PROGRAM
          ================================================== */

          .ns-certification-section {
            margin-bottom: 24px;
          }

          .ns-certification-card {
            overflow: hidden;
            border: 1px solid #dbeafe;
            border-radius: 16px;
            background: #ffffff;
            box-shadow:
              0 8px 24px
              rgba(
                15,
                23,
                42,
                0.05
              );
          }

          .ns-certification-heading {
            display: flex;
            align-items: center;
            gap: 14px;
            border-bottom: 1px solid #e2e8f0;
            padding: 18px 20px;
          }

          .ns-certification-icon {
            display: flex;
            width: 46px;
            height: 46px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: #eff6ff;
            color: #2563eb;
            font-size: 21px;
          }

          .ns-certification-heading h2 {
            margin: 0;
            color: #0f172a;
            font-size: 18px;
          }

          .ns-certification-heading p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-certification-fee {
            margin-left: auto;
            border-radius: 999px;
            background: #ecfdf5;
            color: #047857;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: 800;
          }

          .ns-certification-benefits {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 10px 18px;
            padding: 18px 20px;
          }

          .ns-certification-benefits > div {
            display: flex;
            align-items: flex-start;
            gap: 9px;
            color: #334155;
            font-size: 12px;
            line-height: 1.5;
          }

          .ns-certification-benefits svg {
            flex-shrink: 0;
            margin-top: 2px;
            color: #16a34a;
          }

          .ns-certification-action {
            border-top: 1px solid #e2e8f0;
            padding: 16px 20px;
          }

          .ns-certification-status {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin: 0 20px 18px;
            border-radius: 12px;
            padding: 13px 14px;
          }

          .ns-certification-status strong {
            font-size: 13px;
          }

          .ns-certification-status span {
            font-size: 11px;
            line-height: 1.5;
          }

          .ns-certification-status.is-pending {
            border: 1px solid #fde68a;
            background: #fffbeb;
            color: #92400e;
          }

          .ns-certification-status.is-active {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-certification-active {
            border-top: 1px solid #e2e8f0;
            padding-top: 18px;
          }

          .ns-certification-access-grid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 10px;
            padding: 0 20px 20px;
          }

          .ns-certification-access-grid > div {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            background: #f8fafc;
            color: #64748b;
            padding: 10px 12px;
            font-size: 11px;
            font-weight: 700;
          }

          .ns-certification-access-grid
            > div.is-unlocked {
            border-color: #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          /* ==================================================
             CHAPTER SECTION
          ================================================== */

          .ns-course-chapters-section {
            width: 100%;
          }

          .ns-learning-chapter-list {
            display: flex;

            flex-direction: column;

            gap: 12px;
          }

          .ns-learning-chapter {
            display: flex;

            align-items: center;

            gap: 15px;

            border:
              1px solid #e2e8f0;

            border-radius: 14px;

            background: #ffffff;

            padding: 15px;

            transition:
              border-color .2s ease,
              box-shadow .2s ease;
          }

          .ns-learning-chapter:not(.locked):hover {
            border-color: #bfdbfe;

            box-shadow:
              0 5px 18px
              rgba(
                37,
                99,
                235,
                0.07
              );
          }

          .ns-learning-chapter.locked {
            background: #f8fafc;

            opacity: .72;
          }

          .ns-learning-chapter-number {
            display: flex;

            width: 44px;
            height: 44px;

            flex-shrink: 0;

            align-items: center;

            justify-content: center;

            border-radius: 12px;

            background: #eff6ff;

            color: #2563eb;

            font-weight: 800;
          }

          .ns-learning-chapter.locked
            .ns-learning-chapter-number {
            background: #e2e8f0;

            color: #64748b;
          }

          .ns-learning-chapter-info {
            min-width: 0;

            flex: 1;
          }

          .ns-learning-chapter-info h3 {
            margin: 0;

            color: #0f172a;

            font-size: 15px;
          }

          .ns-learning-chapter-info p {
            margin:
              5px 0 0;

            color: #64748b;

            font-size: 12px;

            line-height: 1.5;
          }

          /* ==================================================
             CHAPTER PROGRESS
          ================================================== */

          .ns-chapter-progress {
            margin-top: 10px;

            max-width: 430px;
          }

          .ns-chapter-progress-text {
            display: flex;

            align-items: center;

            justify-content:
              space-between;

            gap: 10px;

            margin-bottom: 6px;
          }

          .ns-chapter-progress-text span {
            color: #2563eb;

            font-size: 11px;

            font-weight: 700;
          }

          .ns-chapter-progress-text strong {
            display: flex;

            align-items: center;

            gap: 5px;

            color: #15803d;

            font-size: 11px;
          }

          /* ==================================================
             CHAPTER BUTTON
          ================================================== */

          .ns-learning-chapter button {
            display: flex;

            min-width: 92px;

            align-items: center;

            justify-content: center;

            gap: 7px;

            border: none;

            border-radius: 10px;

            background: #2563eb;

            color: #ffffff;

            cursor: pointer;

            padding:
              10px 14px;

            font-weight: 700;
          }

          .ns-learning-chapter
            button:hover:not(:disabled) {
            background: #1d4ed8;
          }

          .ns-learning-chapter
            button:disabled {
            background: #cbd5e1;

            cursor: not-allowed;
          }

          /* ==================================================
             EMPTY / ERROR
          ================================================== */

          .ns-no-course-chapters {
            border:
              1px dashed #cbd5e1;

            border-radius: 12px;

            color: #64748b;

            padding: 24px;

            text-align: center;
          }

          .ns-course-detail-error {
            margin-bottom: 18px;

            border:
              1px solid #fecaca;

            border-radius: 10px;

            background: #fef2f2;

            color: #b91c1c;

            padding: 12px;
          }

          /* ==================================================
             TABLET
          ================================================== */

          @media (
            max-width: 900px
          ) {
            .ns-course-hero {
              grid-template-columns:
                1fr;

              gap: 18px;
            }

            .ns-course-cover {
              width: 100%;

              max-width: 640px;

              margin:
                0 auto;
            }

            .ns-course-left-column {
              display: contents;
            }

            .ns-course-cover {
              order: 1;
            }

            .ns-course-hero > .ns-course-left-column + * {
              order: 2;
            }

            .ns-course-books {
              order: 3;
            }
          }

          /* ==================================================
             MOBILE
             MOBILE IMAGE = 9:16
          ================================================== */

          @media (
            max-width: 640px
          ) {
            .ns-course-hero {
              gap: 16px;
            }

            .ns-course-cover {
              width: 100%;

              max-width: 420px;

              /*
               * The <picture> element switches
               * to mobileImageUrl here.
               */
              aspect-ratio:
                9 / 16;

              margin:
                0 auto;

              border-radius: 14px;

              background: #ffffff;
            }

            .ns-course-cover img {
              object-fit: contain;

              object-position: center;
            }

            .ns-course-intro h2 {
              font-size: 18px;
            }

            .ns-course-detail-meta {
              gap: 6px;
            }

            .ns-certification-heading {
              align-items: flex-start;
              flex-wrap: wrap;
            }

            .ns-certification-fee {
              margin-left: 0;
            }

            .ns-certification-benefits,
            .ns-certification-access-grid {
              grid-template-columns:
                1fr;
            }

            .ns-certification-action {
              display: flex;
              flex-direction: column;
            }

            .ns-learning-chapter {
              align-items: stretch;

              flex-direction: column;
            }

            .ns-learning-chapter-number {
              width: 38px;

              height: 38px;
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