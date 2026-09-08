import {
  useCallback,
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
  getStudentEnrollment,
} from "../../../../services/studentEnrollmentService";

import {
  payForCourseWithRazorpay,
} from "../../../../services/razorpayPaymentService";

import {
  getStudentCourseProgress,
} from "../../../../services/studentProgressService";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";
import { getChapterLearningPath } from "../../../../utils/chapterUrl";

export default function CourseDetails() {
  const { courseId: courseSlug } =
    useParams();

  const navigate = useNavigate();

  const {
    firebaseUser,
    profile,
    role,
  } = useAuth();

  const studentId =
    firebaseUser?.uid ||
    profile?.uid ||
    "";

  const isAdmin =
    role === "admin" ||
    profile?.role === "admin";

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

  const [
    showCourseDetails,
    setShowCourseDetails,
  ] = useState(false);

  // =========================================================
  // LOAD COURSE
  // =========================================================

  const loadCourse =
    useCallback(async () => {
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

            isAdmin
              ? Promise.resolve(null)
              : getStudentEnrollment(
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
    }, [courseSlug, isAdmin, studentId]);

  useEffect(() => {
    if (
      !courseSlug ||
      !studentId
    ) {
      return undefined;
    }

    const timer = window.setTimeout(
      loadCourse,
      0,
    );

    return () => window.clearTimeout(timer);
  }, [courseSlug, loadCourse, studentId]);

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
  // CERTIFICATION
  // =========================================================

  const certificationAvailable = true;

  const certificationFee = 49;

  const certification =
    enrollment?.certification ||
    null;

  const certificationStatus =
    certification?.status ||
    "not-enrolled";

  const certificationActive =
    isAdmin ||
    certificationStatus ===
      "active" ||
    certificationStatus ===
      "completed";

  const certificationPendingPayment =
    certificationStatus ===
    "pending-payment";

  const certificationPaymentCompleted =
    isAdmin ||
    certification?.payment?.status ===
    "paid";

  const hasCourseAccess =
    isAdmin ||
    certificationPaymentCompleted;

  const allMockTestsCompleted =
    isAdmin ||
    [1, 2, 3].every((number) =>
      ["passed", "failed", "completed"].includes(
        certification?.mockTests?.[`test${number}`]?.status,
      ),
    );

  const isCivilProcedureCourse =
    course?.slug ===
    "code-of-civil-procedure-and-limitation";

  const isTortsCourse =
    course?.slug ===
    "law-of-torts-mv-and-cp-laws";

  const isConstitutionalLawCourse =
    course?.slug ===
    "indian-constitutional-law-i";

  const isFamilyLawCourse =
    course?.slug ===
    "family-law-i";

  const isCriminalLawCourse =
    course?.slug ===
    "criminal-law-i-transitioning-from-ipc-to-bns";

  const isPublicInternationalLawCourse =
    course?.slug ===
    "public-international-law";

  const hasExpandableCourseOverview =
    isCivilProcedureCourse ||
    isTortsCourse ||
    isConstitutionalLawCourse ||
    isFamilyLawCourse ||
    isCriminalLawCourse ||
    isPublicInternationalLawCourse;

  const mockTest2Available = hasCourseAccess;
  const mockTest3Available = hasCourseAccess;
  const finalExamAvailable =
    hasCourseAccess &&
    allMockTestsCompleted;

  const handleCertificationPayment =
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

        let updatedEnrollment = enrollment;

        if (!certificationPendingPayment) {
          updatedEnrollment =
            await enrollForCertification(
              studentId,
              course.id,
              studentId,
            );

          setEnrollment(
            updatedEnrollment,
          );
        }

        await payForCourseWithRazorpay({
          courseId: course.id,
          courseTitle: course.title,
          studentName:
            profile?.displayName ||
            firebaseUser?.displayName ||
            "",
          studentEmail:
            firebaseUser?.email ||
            profile?.email ||
            "",
        });

        updatedEnrollment =
          await getStudentEnrollment(
            studentId,
            course.id,
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

  const isChapterUnlocked = () =>
    Boolean(hasCourseAccess);

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
      getChapterLearningPath(
        course.slug,
        chapter,
      ),
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
          certificationPaymentCompleted
            ? "Enrolled Courses"
            : "Available Courses",
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

            {hasExpandableCourseOverview ? (
              <>
                <h3 className="ns-course-overview-title">
                  {isCivilProcedureCourse
                    ? "Code of Civil Procedure and Limitation"
                    : isTortsCourse
                      ? "Law of Torts, MV and CP Laws"
                      : isConstitutionalLawCourse
                        ? "Indian Constitutional Law – I"
                        : isFamilyLawCourse
                          ? "Family Law – I: Hindu Law"
                          : isCriminalLawCourse
                            ? "Criminal Law I (Transitioning from IPC to BNS)"
                            : "Public International Law"}
                </h3>

                {isCivilProcedureCourse ? (
                  <p>
                    The course <strong>Code of Civil Procedure and Limitation</strong>{" "}
                    provides a systematic and practical understanding of the
                    procedural framework governing civil litigation in India. It
                    primarily examines the <strong>Code of Civil Procedure, 1908
                    (CPC)</strong> and the <strong>Limitation Act, 1963</strong>,
                    enabling students to understand how civil rights and remedies
                    are pursued and enforced before courts.
                  </p>
                ) : isTortsCourse ? (
                  <p>
                    The course <strong>Law of Torts, MV and CP Laws</strong>{" "}
                    provides a systematic and practical understanding of the Law
                    of Torts, Motor Vehicles Law, and Consumer Protection Law. It
                    examines fundamental principles, civil liabilities, remedies,
                    compensation, and important statutory provisions, enabling
                    students to understand how legal rights and claims are
                    protected and enforced.
                  </p>
                ) : isConstitutionalLawCourse ? (
                  <p>
                    <strong>Indian Constitutional Law – I</strong> introduces the
                    foundations, principles, fundamental rights, duties and
                    institutions established by the Constitution of India.
                  </p>
                ) : isFamilyLawCourse ? (
                  <p>
                    <strong>Family Law – I: Hindu Law</strong> introduces the
                    sources and principles of Hindu law, family relationships,
                    property, succession, marriage, adoption, maintenance and
                    guardianship.
                  </p>
                ) : isCriminalLawCourse ? (
                  <p>
                    <strong>Criminal Law I</strong> introduces the foundational
                    principles of criminal liability and the transition from the
                    Indian Penal Code, 1860 to the Bharatiya Nyaya Sanhita, 2023.
                  </p>
                ) : (
                  <p>
                    <strong>Public International Law</strong> introduces the
                    rules governing States and other international actors,
                    including sources, recognition, jurisdiction, treaties,
                    dispute settlement and the United Nations.
                  </p>
                )}

                <button
                  type="button"
                  className="ns-course-more-details-button"
                  aria-expanded={showCourseDetails}
                  onClick={() =>
                    setShowCourseDetails(
                      (currentValue) =>
                        !currentValue,
                    )
                  }
                >
                  {showCourseDetails
                    ? "Hide Details"
                    : "More Details"}
                </button>

                {showCourseDetails &&
                  (isTortsCourse ? (
                    <div className="ns-course-expanded-details">
                      <h3>
                        Course Details
                      </h3>

                      <p>
                        This course provides a comprehensive study of civil
                        wrongs, road-accident liability, and consumer protection
                        law in India. It connects legal principles with statutory
                        provisions, important judicial decisions, and practical
                        problem-solving.
                      </p>

                      <h4>
                        Law of Torts
                      </h4>
