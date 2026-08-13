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
  FaFileLines,
  FaGraduationCap,
  FaLock,
  FaScaleBalanced,
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
  course?.media?.desktopImageUrl ||
  course?.media?.imageUrl ||
  course?.media?.thumbnailUrl ||
  "";

const getMobileImage = (
  course,
) =>
  course?.media?.mobileImageUrl ||
  course?.media?.thumbnailUrl ||
  getDesktopImage(course);

const formatFee = (
  value,
  currency = "INR",
) => {
  const amount =
    Number(value || 0);

  if (amount <= 0) {
    return "Free";
  }

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency:
        currency || "INR",
      maximumFractionDigits: 0,
    },
  ).format(amount);
};

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
                  Start Learning
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

            <div className="course-hero-media">
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
                About {course.title}
              </h2>

              <div className="course-description">
                {course.description ? (
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

                {course.duration && (
                  <div className="info-row">
                    <span>
                      Duration
                    </span>

                    <strong>
                      {
                        course.duration
                      }
                    </strong>
                  </div>
                )}

                <div className="info-row">
                  <span>
                    Learning Access
                  </span>

                  <strong>
                    {course.accessType ===
                    "free-learning"
                      ? "Free Learning"
                      : course.accessType}
                  </strong>
                </div>

                <div className="info-row">
                  <span>
                    Certification
                  </span>

                  <strong>
                    {certification
                      ?.available
                      ? "Available"
                      : "Not Available"}
                  </strong>
                </div>

                {certification
                  ?.available && (
                  <div className="info-row">
                    <span>
                      Certification Fee
                    </span>

                    <strong>
                      {formatFee(
                        certification.fee,
                        certification.currency,
                      )}
                    </strong>
                  </div>
                )}

                <Link
                  className="sidebar-login-button"
                  to="/login"
                >
                  Start Course
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

        {/* CERTIFICATION */}

        {certification
          ?.available && (
          <section className="public-certification-section">
            <div className="course-page-container certification-grid">
              <div>
                <span className="content-label light">
                  Certification
                </span>

                <h2>
                  Learn. Test Your
                  Knowledge. Earn a
                  Certificate.
                </h2>

                <p>
                  Certification enrollment
                  provides the additional
                  assessment and credential
                  benefits configured for
                  this course.
                </p>
              </div>

              <div className="certification-box">
                <FaCertificate />

                <div>
                  <span>
                    Certification Fee
                  </span>

                  <strong>
                    {formatFee(
                      certification.fee,
                      certification.currency,
                    )}
                  </strong>

                  <Link to="/login">
                    View Certification
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

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

            .public-certification-section {
              padding: 55px 0;
              background:
                linear-gradient(
                  135deg,
                  #111827,
                  #1e3a8a
                );
              color: white;
            }

            .certification-grid {
              display: grid;
              grid-template-columns:
                minmax(0, 1fr)
                minmax(260px, .45fr);
              gap: 40px;
              align-items: center;
            }

            .content-label.light {
              color: #fde68a;
            }

            .public-certification-section h2 {
              margin: 0;
              max-width: 650px;
              color: white;
              font-size:
                clamp(
                  25px,
                  4vw,
                  38px
                );
            }

            .public-certification-section p {
              max-width: 700px;
              color: #cbd5e1;
              font-size: 13px;
              line-height: 1.7;
            }

            .certification-box {
              display: flex;
              align-items: center;
              gap: 15px;
              padding: 20px;
              border: 1px solid
                rgba(255,255,255,.15);
              border-radius: 14px;
              background:
                rgba(255,255,255,.08);
            }

            .certification-box > svg {
              flex-shrink: 0;
              color: #fde047;
              font-size: 35px;
            }

            .certification-box span,
            .certification-box strong {
              display: block;
            }

            .certification-box span {
              color: #cbd5e1;
              font-size: 10px;
            }

            .certification-box strong {
              margin-top: 3px;
              color: white;
              font-size: 20px;
            }

            .certification-box a {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              margin-top: 7px;
              color: #fde047;
              text-decoration: none;
              font-size: 10px;
              font-weight: 800;
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

              .certification-grid {
                grid-template-columns: 1fr;
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

              .public-certification-section {
                padding: 45px 0;
              }

              .course-seo-section {
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