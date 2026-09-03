import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCertificate,
  FaCheck,
  FaClock,
  FaFacebookF,
  FaLink,
  FaFileLines,
  FaGraduationCap,
  FaLock,
  FaScaleBalanced,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Link,
  useParams,
} from "react-router-dom";

import SEO from "../../../../shared/seo/SEO";

import {
  SEO_CONFIG,
} from "../../../../constants/seoConfig";

import {
  getCourseBySlug,
} from "../../../../services/courseService";

// =========================================================
// HELPERS
// =========================================================

const getDesktopImage = (
  course,
) =>
  course?.desktopImageUrl ||
  course?.thumbnailUrl ||
  course?.imageUrl ||
  course?.media?.desktopImageUrl ||
  course?.media?.thumbnailUrl ||
  course?.media?.imageUrl ||
  "";

const getMobileImage = (
  course,
) =>
  course?.mobileImageUrl ||
  course?.thumbnailUrl ||
  course?.media?.mobileImageUrl ||
  course?.media?.thumbnailUrl ||
  getDesktopImage(course);

const getRobots = (
  course,
) => {
  const index =
    course?.seo?.robots
      ?.index !== false;

  const follow =
    course?.seo?.robots
      ?.follow !== false;

  return `${
    index
      ? "index"
      : "noindex"
  }, ${
    follow
      ? "follow"
      : "nofollow"
  }, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;
};

// =========================================================
// COMPONENT
// =========================================================

export default function PublicCourseDetailsPage() {
  const {
    courseSlug,
  } = useParams();

  const [
    course,
    setCourse,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    showCourseDetails,
    setShowCourseDetails,
  ] = useState(false);

  const [
    linkCopied,
    setLinkCopied,
  ] = useState(false);

  // =======================================================
  // LOAD COURSE
  // =======================================================

  useEffect(() => {
    let active =
      true;

    const loadCourse =
      async () => {
        try {
          setLoading(true);
          setError("");

          const result =
            await getCourseBySlug(
              courseSlug,
            );

          if (!active) {
            return;
          }

          if (!result) {
            setCourse(null);

            setError(
              "Course not found.",
            );

            return;
          }

          /*
           * Public pages should never expose
           * unpublished course content.
           */
          if (
            result.status !==
            "published"
          ) {
            setCourse(null);

            setError(
              "This course is not currently available.",
            );

            return;
          }

          setCourse(result);
        } catch (loadError) {
          console.error(
            "Unable to load public course:",
            loadError,
          );

          if (active) {
            setError(
              "Unable to load this course.",
            );
          }
        } finally {
          if (active) {
            setLoading(false);
          }
        }
      };

    loadCourse();

    return () => {
      active =
        false;
    };
  }, [
    courseSlug,
  ]);

  // =======================================================
  // SEO
  // =======================================================

  const seo =
    useMemo(() => {
      if (!course) {
        return null;
      }

      const title =
        course?.seo?.title ||
        `${course.title} - LL.B Course, Notes & Study Materials`;

      const description =
        course?.seo
          ?.description ||
        course
          ?.shortDescription ||
        course
          ?.description ||
        `Study ${course.title} with chapter-wise law notes, study materials and learning resources at NagarikSuraksha.`;

      const canonical =
        course?.seo
          ?.canonicalUrl ||
        `/courses/${course.slug}`;

      const keywords = [
        course?.seo
          ?.focusKeyword,

        ...(Array.isArray(
          course?.seo
            ?.secondaryKeywords,
        )
          ? course.seo
              .secondaryKeywords
          : []),

        course.title,

        `${course.title} notes`,

        `${course.title} study material`,

        `${course.title} mock test`,

        "LLB study material",

        "law notes",
      ].filter(Boolean);

      const image =
        course?.seo
          ?.ogImageUrl ||
        getDesktopImage(
          course,
        );

      return {
        title,
        description,
        canonical,
        keywords,
        image,
        robots:
          getRobots(course),
      };
    }, [
      course,
    ]);

  // =======================================================
  // STRUCTURED DATA
  // =======================================================

  const structuredData =
    useMemo(() => {
      if (
        !course ||
        !seo
      ) {
        return null;
      }

      const courseUrl =
        /^https?:\/\//i.test(
          seo.canonical,
        )
          ? seo.canonical
          : `${SEO_CONFIG.siteUrl}${
              seo.canonical.startsWith(
                "/",
              )
                ? seo.canonical
                : `/${seo.canonical}`
            }`;

      const data = {
        "@context":
          "https://schema.org",

        "@type":
          "Course",

        "@id":
          `${courseUrl}#course`,

        name:
          course.title,

        description:
          seo.description,

        url:
          courseUrl,

        provider: {
          "@type":
            "EducationalOrganization",

          "@id":
            `${SEO_CONFIG.siteUrl}/#organization`,

          name:
            "NagarikSuraksha",

          url:
            `${SEO_CONFIG.siteUrl}/`,
        },

        educationalLevel:
          "LL.B",

        inLanguage:
          "en-IN",
      };

      const image =
        getDesktopImage(
          course,
        );

      if (image) {
        data.image =
          image;
      }

      if (
        course.duration
      ) {
        data.timeRequired =
          course.duration;
      }

      return data;
    }, [
      course,
      seo,
    ]);

  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <main className="public-course-status">
        <div className="public-course-spinner" />

        <p>
          Loading course...
        </p>

        <style>
          {statusStyles}
        </style>
      </main>
    );
  }

  // =======================================================
  // NOT FOUND
  // =======================================================

  if (
    error ||
    !course
  ) {
    return (
      <>
        <SEO
          title="Course Not Found"
          description="The requested NagarikSuraksha course could not be found."
          canonical={`/courses/${courseSlug}`}
          robots="noindex, follow"
        />

        <main className="public-course-status">
          <FaBookOpen />

          <h1>
            Course Not Found
          </h1>

          <p>
            {error ||
              "The requested course is not available."}
          </p>

          <Link to="/llb-courses">
            <FaArrowLeft />
            Browse LL.B Courses
          </Link>

          <style>
            {statusStyles}
          </style>
        </main>
      </>
    );
  }

  // =======================================================
  // COURSE DATA
  // =======================================================

  const certification =
    course.certification ||
    {};

  const desktopImage =
    getDesktopImage(
      course,
    );

  const mobileImage =
    getMobileImage(
      course,
    );

  const totalChapters =
    Number(
      course?.totals
        ?.chapters ||
        0,
    );

  const assessmentInformation =
    course?.assessments ||
    certification?.assessments ||
    {};

  const mockTestCount =
    Number(
      assessmentInformation
        ?.mockTests
        ?.count ||
        assessmentInformation
          ?.mockTestCount ||
        3,
    );

  const mockTestQuestionCount =
    Number(
      assessmentInformation
        ?.mockTests
        ?.questionsPerTest ||
        assessmentInformation
          ?.mockTestQuestionCount ||
        50,
    );

  const finalTestQuestionCount =
    Number(
      assessmentInformation
        ?.finalTest
        ?.questionCount ||
        assessmentInformation
          ?.finalTestQuestionCount ||
        50,
    );

  const isCivilProcedureCourse =
    course.slug ===
    "code-of-civil-procedure-and-limitation";

  const courseShareUrl =
    `${SEO_CONFIG.siteUrl}/courses/${course.slug}`;

  const courseShareText =
    `Explore ${course.title} on NagarikSuraksha`;

  const copyCourseLink =
    async () => {
      try {
        await navigator.clipboard.writeText(
          courseShareUrl,
        );

        setLinkCopied(true);

        window.setTimeout(
          () => setLinkCopied(false),
          2000,
        );
      } catch (copyError) {
        console.error(
          "Unable to copy course link:",
          copyError,
        );
      }
    };

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <>
      <SEO
        title={
          seo.title
        }
        description={
          seo.description
        }
        canonical={
          seo.canonical
        }
        keywords={
          seo.keywords
        }
        image={
          seo.image
        }
        robots={
          seo.robots
        }
        structuredData={
          structuredData
        }
      />

      <main className="public-course-page">
        {/* BREADCRUMB */}

        <div className="course-page-container">
          <nav
            className="course-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span>/</span>

            <Link to="/llb-courses">
              LL.B Courses
            </Link>

            <span>/</span>

            <span>
              {course.title}
            </span>
          </nav>
        </div>

        {/* HERO */}

        <section className="public-course-hero">
          <div className="course-page-container course-hero-grid">
            <div className="course-hero-copy">
              <span className="course-label">
                <FaScaleBalanced />
                LL.B Legal Learning
              </span>

              <h1>
                {course.title}
              </h1>

              <p>
                {course
                  .shortDescription ||
                  course.description}
              </p>

              <div className="course-highlights">
                {course.duration && (
                  <span>
                    <FaClock />
                    {
                      course.duration
                    }
                  </span>
                )}

                <span>
                  <FaBookOpen />

                  {totalChapters}{" "}
                  {totalChapters ===
                  1
                    ? "Chapter"
                    : "Chapters"}
                </span>

                <span>
                  <FaFileLines />
                  Study Materials
                </span>

                {certification
                  ?.available && (
                  <span>
                    <FaCertificate />
                    Certification Available
                  </span>
                )}
              </div>

              <div className="course-hero-actions">
                <Link
                  className="primary-course-cta"
                  to="/login"
                >
                  Enroll for ₹49
                  <FaArrowRight />
                </Link>

                <Link
                  className="secondary-course-cta"
                  to="/llb-courses"
                >
                  <FaArrowLeft />
                  All Courses
                </Link>
              </div>
            </div>

            <div
              className={`course-hero-media ${
                course.slug ===
                  "criminal-law-i-transitioning-from-ipc-to-bns" ||
                course.slug ===
                  "code-of-civil-procedure-and-limitation" ||
                course.slug ===
                  "family-law-i" ||
                course.slug ===
                  "public-international-law" ||
                course.slug ===
                  "law-of-torts-mv-and-cp-laws" ||
                course.slug ===
                  "indian-constitutional-law-i"
                  ? "course-hero-media-full-image"
                  : ""
              }`}
            >
              {desktopImage ? (
                <picture>
                  {mobileImage && (
                    <source
                      media="(max-width: 640px)"
                      srcSet={
                        mobileImage
                      }
                    />
                  )}

                  <img
                    src={
                      desktopImage
                    }
                    alt={`${course.title} LL.B law course`}
                  />
                </picture>
              ) : (
                <div className="course-image-fallback">
                  <FaGraduationCap />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="course-content-section">
          <div className="course-page-container course-content-grid">
            <article className="course-main-content">
              <span className="content-label">
                Course Overview
              </span>

              <h2>
                {isCivilProcedureCourse
                  ? "Code of Civil Procedure and Limitation"
                  : `About ${course.title}`}
              </h2>

              <div className="course-description">
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
                ) : course.description ? (
                  course.description
                    .split("\n")
                    .filter(Boolean)
                    .map(
                      (
                        paragraph,
                        index,
                      ) => (
                        <p
                          key={
                            index
                          }
                        >
                          {
                            paragraph
                          }
                        </p>
                      ),
                    )
                ) : (
                  <p>
                    {course
                      .shortDescription}
                  </p>
                )}
              </div>

              {isCivilProcedureCourse && (
                <button
                  type="button"
                  className="course-more-details-button"
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
              )}

              {isCivilProcedureCourse &&
                showCourseDetails &&
                course.description && (
                  <div className="course-expanded-details">
                    <h3>
                      Course Details
                    </h3>

                    {course.description
                      .split("\n")
                      .filter(Boolean)
                      .map(
                        (
                          paragraph,
                          index,
                        ) => (
                          <p
                            key={
                              index
                            }
                          >
                            {
                              paragraph
                            }
                          </p>
                        ),
                      )}
                  </div>
                )}

              {(!isCivilProcedureCourse ||
                showCourseDetails) && (
                <>
              <div className="what-you-learn">
                <h2>
                  What You Get from This
                  Course
                </h2>

                <div className="learning-benefits-grid">
                  <div>
                    <FaCheck />

                    <span>
                      <strong>
                        Structured Learning
                      </strong>

                      Study important legal
                      concepts in a
                      chapter-wise format.
                    </span>
                  </div>

                  <div>
                    <FaCheck />

                    <span>
                      <strong>
                        Law Study Materials
                      </strong>

                      Access learning
                      resources connected to
                      individual chapters.
                    </span>
                  </div>

                  <div>
                    <FaCheck />

                    <span>
                      <strong>
                        Legal Concepts
                      </strong>

                      Strengthen your
                      understanding of
                      important principles
                      and topics.
                    </span>
                  </div>

                  <div>
                    <FaCheck />

                    <span>
                      <strong>
                        Progress Tracking
                      </strong>

                      Continue learning
                      through your student
                      portal.
                    </span>
                  </div>
                </div>
              </div>

                </>
              )}
            </article>

            {/* SIDEBAR */}

            <aside className="course-sidebar">
              <div className="course-info-card">
                <h3>
                  Course Information
                </h3>

                <div className="info-row">
                  <span>
                    Chapters
                  </span>

                  <strong>
                    {
                      totalChapters
                    }
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Mock Tests
                  </span>

                  <strong>
                    {mockTestCount}
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Questions per Mock Test
                  </span>

                  <strong>
                    {mockTestQuestionCount}
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Final Certification Test
                  </span>

                  <strong>
                    1 Test
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Final Test Questions
                  </span>

                  <strong>
                    {finalTestQuestionCount}
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Certificate
                  </span>

                  <strong>
                    {certification
                      ?.available === false
                      ? "Not Available"
                      : "Digital Certificate"}
                  </strong>
                </div>

                <Link
                  className="sidebar-login-button"
                  to="/login"
                >
                  Enroll for ₹49
                  <FaArrowRight />
                </Link>
              </div>

              <div className="protected-content-card">
                <FaLock />

                <div>
                  <strong>
                    Student Learning Area
                  </strong>

                  <p>
                    Full chapter learning,
                    protected materials,
                    assessments and
                    certification features
                    are accessed through the
                    student portal.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SEO TEXT */}

        <section className="course-seo-section">
          <div className="course-page-container">
            <h2>
              Study {course.title} Online
            </h2>

            <p>
              NagarikSuraksha provides
              structured LL.B learning
              resources to help students
              study {course.title},
              understand important legal
              concepts and prepare for
              academic assessments.
            </p>

            <p>
              Students can use the course
              pathway to study chapter-wise
              material and continue their
              learning through the
              NagarikSuraksha student
              portal.
            </p>

            <Link to="/llb-courses">
              Explore More LL.B Courses
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* SHARE COURSE */}

        <section className="course-share-section">
          <div className="course-page-container course-share-card">
            <div>
              <span className="content-label">
                Share This Course
              </span>

              <h2>
                Forward {course.title}
              </h2>

              <p>
                Share this course summary with students, friends and colleagues.
              </p>
            </div>

            <div className="course-share-actions">
              <a
                className="course-share-button facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseShareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share ${course.title} on Facebook`}
              >
                <FaFacebookF />
                Facebook
              </a>

              <a
                className="course-share-button twitter"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(courseShareText)}&url=${encodeURIComponent(courseShareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share ${course.title} on X`}
              >
                <FaXTwitter />
                X / Twitter
              </a>

              <a
                className="course-share-button whatsapp"
                href={`https://wa.me/?text=${encodeURIComponent(`${courseShareText} ${courseShareUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share ${course.title} on WhatsApp`}
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <button
                type="button"
                className="course-share-button copy-link"
                onClick={copyCourseLink}
                aria-label={`Copy link for ${course.title}`}
              >
                <FaLink />
                {linkCopied
                  ? "Link Copied"
                  : "Copy Link"}
              </button>
            </div>
          </div>
        </section>

        {/* TERMS AND DISCLAIMER */}

        <section className="course-terms-section">
          <div className="course-page-container">
            <div className="course-terms-heading">
              <span className="content-label">
                Please Read Before Enrollment
              </span>

              <h2>
                Terms &amp; Disclaimer
              </h2>
            </div>

            <div className="course-terms-grid">
              <article>
                <h3>
                  1. Independent Entity Disclaimer
                </h3>

                <p>
                  Nagarik Suraksha is an independent, private educational portal. We are <strong>not</strong> affiliated with, endorsed by, accredited by, or connected to any government agency, university, or official educational board.
                </p>
              </article>

              <article>
                <h3>
                  2. Individual Course Enrollment
                </h3>

                <p>
                  Each course requires a one-time <strong>₹49 enrollment fee</strong>. After successful payment, that course and its learning materials become available under Enrolled Courses in the student portal.
                </p>
              </article>

              <article>
                <h3>
                  3. Certification Included
                </h3>

                <p>
                  The <strong>₹49 individual course fee</strong> covers course access, access to downloadable course PDFs, practice mock tests, and a digital Certificate of Completion.
                </p>

                <p className="course-important-notice">
                  <strong>Important Notice:</strong> The certificate issued by Nagarik Suraksha is an appreciation/completion document for personal learning only. It <strong>does not</strong> constitute an accredited academic degree, official diploma, professional licence, or government qualification.
                </p>
              </article>
            </div>

            <div className="course-terms-links">
              <Link to="/terms">
                Read Full Terms
                <FaArrowRight />
              </Link>

              <Link to="/disclaimer">
                Read Full Disclaimer
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <style>
          {`
            .public-course-page,
            .public-course-page * {
              box-sizing: border-box;
            }

            .public-course-page {
              width: 100%;
              overflow-x: hidden;
              background: #ffffff;
              color: #0f172a;
            }

            .course-page-container {
              width: min(
                1180px,
                calc(100% - 40px)
              );
              margin: 0 auto;
            }

            .course-breadcrumb {
              display: flex;
              flex-wrap: wrap;
              gap: 7px;
              padding: 15px 0;
              color: #64748b;
              font-size: 11px;
            }

            .course-breadcrumb a {
              color: #2563eb;
              text-decoration: none;
            }

            .public-course-hero {
              padding: 55px 0;
              background:
                linear-gradient(
                  135deg,
                  #0f172a,
                  #1e3a8a
                );
              color: white;
            }

            .course-hero-grid {
              display: grid;
              grid-template-columns:
                minmax(0, 1.15fr)
                minmax(350px, .85fr);
              gap: 45px;
              align-items: center;
            }

            .course-hero-copy {
              min-width: 0;
            }

            .course-label {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              margin-bottom: 12px;
              color: #bfdbfe;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .course-hero-copy h1 {
              margin: 0;
              color: white;
              font-size:
                clamp(
                  32px,
                  5vw,
                  53px
                );
              line-height: 1.1;
            }

            .course-hero-copy > p {
              max-width: 720px;
              margin: 17px 0 0;
              color: #dbeafe;
              font-size: 16px;
              line-height: 1.75;
            }

            .course-highlights {
              display: flex;
              flex-wrap: wrap;
              gap: 10px 18px;
              margin-top: 22px;
            }

            .course-highlights span {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              color: #e2e8f0;
              font-size: 11px;
              font-weight: 700;
            }

            .course-hero-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 25px;
            }

            .primary-course-cta,
            .secondary-course-cta {
              display: inline-flex;
              min-height: 44px;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 0 17px;
              border-radius: 9px;
              text-decoration: none;
              font-size: 12px;
              font-weight: 800;
            }

            .primary-course-cta {
              background: #ffffff;
              color: #1d4ed8;
            }

            .secondary-course-cta {
              border: 1px solid
                rgba(255,255,255,.35);
              color: white;
            }

            .course-hero-media {
              overflow: hidden;
              aspect-ratio: 16 / 10;
              border: 1px solid
                rgba(255,255,255,.15);
              border-radius: 18px;
              background:
                rgba(255,255,255,.08);
              box-shadow:
                0 20px 50px
                rgba(0,0,0,.22);
            }

            .course-hero-media picture,
            .course-hero-media img {
              display: block;
              width: 100%;
              height: 100%;
            }

            .course-hero-media img {
              object-fit: cover;
            }

            .course-hero-media.course-hero-media-full-image {
              aspect-ratio: 16 / 9;
              background: #06182f;
            }

            .course-hero-media-full-image img {
              object-fit: contain;
            }

            .course-image-fallback {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              justify-content: center;
              color: #bfdbfe;
              font-size: 70px;
            }

            .course-content-section {
              padding: 65px 0;
            }

            .course-content-grid {
              display: grid;
              grid-template-columns:
                minmax(0, 1fr)
                320px;
              gap: 45px;
              align-items: start;
            }

            .content-label {
              display: block;
              margin-bottom: 7px;
              color: #2563eb;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .course-main-content h2,
            .course-seo-section h2 {
              margin: 0;
              color: #0f172a;
              font-size:
                clamp(
                  23px,
                  3vw,
                  31px
                );
            }

            .course-description p,
            .course-seo-section p {
              color: #475569;
              font-size: 14px;
              line-height: 1.8;
            }

            .course-more-details-button {
              margin-top: 18px;
              border: 0;
              border-radius: 10px;
              background: #2563eb;
              color: #ffffff;
              cursor: pointer;
              padding: 11px 18px;
              font-size: 12px;
              font-weight: 800;
            }

            .course-more-details-button:hover {
              background: #1d4ed8;
            }

            .course-expanded-details {
              margin-top: 22px;
              border-top: 1px solid #e2e8f0;
              padding-top: 20px;
            }

            .course-expanded-details h3 {
              margin: 0 0 12px;
              color: #0f172a;
              font-size: 18px;
            }

            .course-expanded-details p {
              margin: 0 0 12px;
              color: #475569;
              line-height: 1.75;
            }

            .what-you-learn {
              margin-top: 35px;
            }

            .learning-benefits-grid {
              display: grid;
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
              gap: 12px;
              margin-top: 17px;
            }

            .learning-benefits-grid > div {
              display: flex;
              gap: 10px;
              padding: 15px;
              border: 1px solid #e2e8f0;
              border-radius: 11px;
              background: #f8fafc;
            }

            .learning-benefits-grid svg {
              flex-shrink: 0;
              margin-top: 3px;
              color: #16a34a;
            }

            .learning-benefits-grid span {
              color: #64748b;
              font-size: 11px;
              line-height: 1.5;
            }

            .learning-benefits-grid strong {
              display: block;
              margin-bottom: 3px;
              color: #0f172a;
              font-size: 12px;
            }

            .course-info-card {
              padding: 21px;
              border: 1px solid #e2e8f0;
              border-radius: 15px;
              background: white;
              box-shadow:
                0 10px 30px
                rgba(15,23,42,.07);
            }

            .course-info-card h3 {
              margin: 0 0 15px;
              font-size: 16px;
            }

            .info-row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 15px;
              padding: 11px 0;
              border-bottom: 1px solid #f1f5f9;
              font-size: 11px;
            }

            .info-row span {
              color: #64748b;
            }

            .info-row strong {
              color: #0f172a;
              text-align: right;
            }

            .sidebar-login-button {
              display: flex;
              min-height: 42px;
              align-items: center;
              justify-content: center;
              gap: 7px;
              margin-top: 17px;
              border-radius: 9px;
              background: #2563eb;
              color: white;
              text-decoration: none;
              font-size: 11px;
              font-weight: 800;
            }

            .protected-content-card {
              display: flex;
              gap: 11px;
              margin-top: 13px;
              padding: 15px;
              border-radius: 12px;
              background: #f8fafc;
              color: #64748b;
            }

            .protected-content-card > svg {
              flex-shrink: 0;
              margin-top: 2px;
              color: #2563eb;
            }

            .protected-content-card strong {
              color: #0f172a;
              font-size: 11px;
            }

            .protected-content-card p {
              margin: 4px 0 0;
              font-size: 10px;
              line-height: 1.55;
            }

            .course-seo-section {
              padding: 60px 0;
              background: #f8fafc;
            }

            .course-seo-section
            .course-page-container {
              max-width: 850px;
            }

            .course-seo-section a {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              margin-top: 7px;
              color: #2563eb;
              text-decoration: none;
              font-size: 12px;
              font-weight: 800;
            }

            .course-share-section {
              padding: 55px 0;
              background: #eff6ff;
            }

            .course-share-card {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 30px;
              padding: 28px;
              border: 1px solid #bfdbfe;
              border-radius: 18px;
              background: #ffffff;
              box-shadow: 0 12px 35px rgba(37, 99, 235, .08);
            }

            .course-share-card h2 {
              margin: 0;
              color: #0f172a;
              font-size: clamp(22px, 3vw, 30px);
            }

            .course-share-card p {
              margin: 8px 0 0;
              color: #64748b;
              font-size: 13px;
              line-height: 1.6;
            }

            .course-share-actions {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-end;
              gap: 10px;
            }

            .course-share-button {
              display: inline-flex;
              min-height: 42px;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 0 15px;
              border: 0;
              border-radius: 9px;
              color: #ffffff;
              cursor: pointer;
              font: inherit;
              font-size: 11px;
              font-weight: 800;
              text-decoration: none;
            }

            .course-share-button.facebook {
              background: #1877f2;
            }

            .course-share-button.twitter {
              background: #0f172a;
            }

            .course-share-button.whatsapp {
              background: #16a34a;
            }

            .course-share-button.copy-link {
              background: #475569;
            }

            .course-terms-section {
              border-top: 1px solid #e2e8f0;
              background: #ffffff;
              padding: 65px 0;
            }

            .course-terms-heading h2 {
              margin: 0;
              color: #0f172a;
              font-size: clamp(24px, 3vw, 32px);
            }

            .course-terms-grid {
              display: grid;
              gap: 16px;
              margin-top: 24px;
            }

            .course-terms-grid article {
              border: 1px solid #e2e8f0;
              border-radius: 14px;
              background: #f8fafc;
              padding: 20px;
            }

            .course-terms-grid h3 {
              margin: 0 0 9px;
              color: #0f172a;
              font-size: 16px;
            }

            .course-terms-grid p {
              margin: 0;
              color: #475569;
              font-size: 13px;
              line-height: 1.75;
            }

            .course-terms-grid .course-important-notice {
              margin-top: 14px;
              border-left: 4px solid #d97706;
              border-radius: 8px;
              background: #fffbeb;
              color: #78350f;
              padding: 12px 14px;
            }

            .course-terms-links {
              display: flex;
              flex-wrap: wrap;
              gap: 18px;
              margin-top: 22px;
            }

            .course-terms-links a {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              color: #2563eb;
              font-size: 12px;
              font-weight: 800;
              text-decoration: none;
            }

            @media (max-width: 900px) {
              .course-hero-grid {
                grid-template-columns: 1fr;
              }

              .course-content-grid {
                grid-template-columns: 1fr;
              }

              .course-sidebar {
                max-width: none;
              }

            }

            @media (max-width: 640px) {
              .course-page-container {
                width: min(
                  100% - 28px,
                  1180px
                );
              }

              .public-course-hero {
                padding: 40px 0;
              }

              .course-hero-copy h1 {
                font-size: 32px;
              }

              .course-hero-copy > p {
                font-size: 14px;
              }

              .course-hero-actions {
                display: grid;
                grid-template-columns: 1fr;
              }

              .primary-course-cta,
              .secondary-course-cta {
                width: 100%;
              }

              .course-hero-media {
                aspect-ratio: 16 / 9;
              }

              .course-content-section {
                padding: 45px 0;
              }

              .learning-benefits-grid {
                grid-template-columns: 1fr;
              }

              .course-seo-section {
                padding: 45px 0;
              }

              .course-share-section {
                padding: 40px 0;
              }

              .course-share-card {
                align-items: stretch;
                flex-direction: column;
                padding: 22px;
              }

              .course-share-actions {
                display: grid;
                grid-template-columns: 1fr;
              }

              .course-share-button {
                width: 100%;
              }

              .course-terms-section {
                padding: 45px 0;
              }
            }
          `}
        </style>
      </main>
    </>
  );
}

// =========================================================
// STATUS STYLES
// =========================================================

const statusStyles = `
  .public-course-status {
    display: flex;
    min-height: 65vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    text-align: center;
    color: #64748b;
  }

  .public-course-status > svg {
    margin-bottom: 12px;
    color: #2563eb;
    font-size: 40px;
  }

  .public-course-status h1 {
    margin: 0;
    color: #0f172a;
  }

  .public-course-status p {
    margin: 8px 0 18px;
  }

  .public-course-status a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 11px 15px;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    text-decoration: none;
    font-size: 12px;
    font-weight: 800;
  }

  .public-course-spinner {
    width: 38px;
    height: 38px;
    margin-bottom: 12px;
    border: 3px solid #dbeafe;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: public-course-spin .8s linear infinite;
  }

  @keyframes public-course-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
