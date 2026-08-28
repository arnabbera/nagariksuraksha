import {
  useEffect,
  useState,
} from "react";




import {
  FaArrowRight,
  FaBookOpen,
  FaCertificate,
  FaGraduationCap,
  FaScaleBalanced,
} from "react-icons/fa6";

import {
  FaCheckCircle,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import SEO from "../../../../shared/seo/SEO";

import {
  SEO_CONFIG,
} from "../../../../constants/seoConfig";

import {
  getPublishedCourses,
} from "../../../../services/courseService";

// =========================================================
// HELPERS
// =========================================================

const getCourseImage = (
  course,
) =>
  course?.thumbnailUrl ||
  course?.desktopImageUrl ||
  course?.imageUrl ||
  course?.media?.thumbnailUrl ||
  course?.media?.desktopImageUrl ||
  course?.media?.imageUrl ||
  "";

const getCourseUrl = (
  course,
) =>
  `/courses/${
    course?.slug ||
    course?.id ||
    ""
  }`;

// =========================================================
// STRUCTURED DATA
// =========================================================

const createStructuredData = (
  courses,
) => ({
  "@context":
    "https://schema.org",

  "@type":
    "ItemList",

  name:
    "LL.B Courses and Law Study Materials",

  description:
    "Explore LL.B courses, law notes, legal study materials and certification preparation from NagarikSuraksha.",

  url:
    `${SEO_CONFIG.siteUrl}/llb-courses`,

  numberOfItems:
    courses.length,

  itemListElement:
    courses.map(
      (
        course,
        index,
      ) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        url:
          `${SEO_CONFIG.siteUrl}${getCourseUrl(
            course,
          )}`,

        name:
          course.title,
      }),
    ),
});

// =========================================================
// COMPONENT
// =========================================================

export default function PublicCoursesPage() {
  const [
    courses,
    setCourses,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  // =======================================================
  // LOAD PUBLISHED COURSES
  // =======================================================

  useEffect(() => {
    let active =
      true;

    const loadCourses =
      async () => {
        try {
          setLoading(true);
          setError("");

          const result =
            await getPublishedCourses();

          if (!active) {
            return;
          }

          setCourses(
            Array.isArray(result)
              ? result
              : [],
          );
        } catch (loadError) {
          console.error(
            "Unable to load public courses:",
            loadError,
          );

          if (active) {
            setError(
              "Unable to load courses at the moment.",
            );
          }
        } finally {
          if (active) {
            setLoading(false);
          }
        }
      };

    loadCourses();

    return () => {
      active =
        false;
    };
  }, []);

  const structuredData =
    createStructuredData(
      courses,
    );

  return (
    <>
      <SEO
        title="LL.B Courses, Law Study Materials & Legal Learning"
        description="Explore LL.B courses, chapter-wise law study materials, law notes, legal topics and certification preparation at NagarikSuraksha."
        canonical="/llb-courses"
        keywords={[
          "LLB courses",
          "LLB course online",
          "law courses",
          "law study material",
          "LLB study material",
          "law notes",
          "online law learning",
          "law exam preparation",
          "law certification course",
        ]}
        structuredData={
          structuredData
        }
      />

      <main className="public-courses-page">
        {/* HERO */}

        <section className="courses-hero">
          <div className="courses-container">
            <div className="courses-hero-content">
              <span className="courses-eyebrow">
                <FaScaleBalanced />
                NagarikSuraksha Legal Learning
              </span>

              <h1>
                LL.B Courses, Law Notes &
                Study Materials
              </h1>

              <p>
                Build your legal knowledge with
                structured chapter-wise courses,
                study materials, important legal
                concepts, mock-test preparation
                and certification pathways.
              </p>

              <div className="hero-benefits">
                <span>
                  <FaCheckCircle />
                  Chapter-wise learning
                </span>

                <span>
                  <FaCheckCircle />
                  Law study materials
                </span>

                <span>
                  <FaCheckCircle />
                  Mock-test preparation
                </span>

                <span>
                  <FaCheckCircle />
                  Certification options
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="courses-intro">
          <div className="courses-container">
            <span className="section-label">
              Legal Education
            </span>

            <h2>
              Learn Law Through Structured
              Courses
            </h2>

            <p>
              NagarikSuraksha provides
              structured learning resources
              designed to help law students
              understand important legal
              principles, prepare for academic
              examinations and test their
              knowledge through assessments.
            </p>
          </div>
        </section>

        {/* COURSES */}

        <section className="courses-section">
          <div className="courses-container">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  Available Courses
                </span>

                <h2>
                  Explore LL.B Courses
                </h2>
              </div>

              {!loading && (
                <span className="course-count">
                  {courses.length}{" "}
                  {courses.length === 1
                    ? "course"
                    : "courses"}
                </span>
              )}
            </div>

            {loading && (
              <div className="courses-state">
                <div className="course-spinner" />

                <p>
                  Loading courses...
                </p>
              </div>
            )}

            {!loading &&
              error && (
                <div className="courses-error">
                  {error}
                </div>
              )}

            {!loading &&
              !error &&
              courses.length === 0 && (
                <div className="courses-state">
                  <FaBookOpen />

                  <h3>
                    Courses are being
                    prepared
                  </h3>

                  <p>
                    Published law courses will
                    appear here.
                  </p>
                </div>
              )}

            {!loading &&
              !error &&
              courses.length > 0 && (
                <div className="course-grid">
                  {courses.map(
                    (course) => {
                      const image =
                        getCourseImage(
                          course,
                        );

                      return (
                        <article
                          className="public-course-card"
                          key={
                            course.id
                          }
                        >
                          {image ? (
                            <Link
                              className="course-image"
                              to={getCourseUrl(
                                course,
                              )}
                              aria-label={`View ${course.title}`}
                            >
                              <img
                                src={
                                  image
                                }
                                alt={`${course.title} LL.B course and law study materials`}
                                loading="lazy"
                              />
                            </Link>
                          ) : (
                            <div className="course-image course-image-placeholder">
                              <FaGraduationCap />
                            </div>
                          )}

                          <div className="course-card-content">
                            <div className="course-meta">
                              <span>
                                <FaBookOpen />

                                {Number(
                                  course
                                    ?.totals
                                    ?.chapters ||
                                    0,
                                )}{" "}
                                Chapters
                              </span>

                              {course
                                ?.duration && (
                                <span>
                                  {
                                    course.duration
                                  }
                                </span>
                              )}
                            </div>

                            <h3>
                              <Link
                                to={getCourseUrl(
                                  course,
                                )}
                              >
                                {
                                  course.title
                                }
                              </Link>
                            </h3>

                            <p>
                              {course
                                .shortDescription ||
                                course
                                  .description ||
                                "Explore this structured law course from NagarikSuraksha."}
                            </p>

                            <Link
                              className="course-link"
                              to={getCourseUrl(
                                course,
                              )}
                            >
                              View Course
                              <FaArrowRight />
                            </Link>
                          </div>
                        </article>
                      );
                    },
                  )}
                </div>
              )}
          </div>
        </section>

        {/* SEO CONTENT */}

        <section className="seo-learning-section">
          <div className="courses-container seo-learning-grid">
            <div>
              <span className="section-label">
                LL.B Study Materials
              </span>

              <h2>
                Law Notes and Study
                Resources for Students
              </h2>

              <p>
                Our legal learning resources
                are organized around subjects
                and chapters so students can
                study individual legal topics
                as well as complete courses.
              </p>

              <p>
                Course material may include
                chapter notes, important legal
                principles, case references,
                study resources, mock tests and
                certification assessments,
                depending on the course.
              </p>
            </div>

            <div className="learning-feature-list">
              <div>
                <FaBookOpen />

                <span>
                  <strong>
                    Chapter-wise Notes
                  </strong>

                  Learn important concepts in
                  manageable chapters.
                </span>
              </div>

              <div>
                <FaScaleBalanced />

                <span>
                  <strong>
                    Legal Topics
                  </strong>

                  Understand principles,
                  statutes and important areas
                  of law.
                </span>
              </div>

              <div>
                <FaGraduationCap />

                <span>
                  <strong>
                    Exam Preparation
                  </strong>

                  Reinforce learning through
                  structured assessments.
                </span>
              </div>

              <div>
                <FaCertificate />

                <span>
                  <strong>
                    Certification
                  </strong>

                  Eligible courses may offer a
                  certification pathway.
                </span>
              </div>
            </div>
          </div>
        </section>

        <style>
          {`
            .public-courses-page,
            .public-courses-page * {
              box-sizing: border-box;
            }

            .public-courses-page {
              width: 100%;
              overflow-x: hidden;
              background: #f8fafc;
              color: #0f172a;
            }

            .courses-container {
              width: min(1180px, calc(100% - 40px));
              margin: 0 auto;
            }

            .courses-hero {
              padding: 75px 0;
              background:
                radial-gradient(
                  circle at 85% 20%,
                  rgba(96,165,250,.28),
                  transparent 30%
                ),
                linear-gradient(
                  135deg,
                  #0f172a,
                  #1e3a8a 55%,
                  #2563eb
                );
              color: white;
            }

            .courses-hero-content {
              max-width: 790px;
            }

            .courses-eyebrow {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 14px;
              color: #bfdbfe;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .courses-hero h1 {
              margin: 0;
              max-width: 850px;
              font-size: clamp(34px, 5vw, 58px);
              line-height: 1.08;
              color: white;
            }

            .courses-hero p {
              max-width: 720px;
              margin: 18px 0 0;
              color: #dbeafe;
              font-size: 17px;
              line-height: 1.75;
            }

            .hero-benefits {
              display: flex;
              flex-wrap: wrap;
              gap: 10px 22px;
              margin-top: 25px;
            }

            .hero-benefits span {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              color: #e0f2fe;
              font-size: 13px;
              font-weight: 600;
            }

            .hero-benefits svg {
              color: #4ade80;
            }

            .courses-intro {
              padding: 55px 0 25px;
              background: white;
            }

            .courses-intro .courses-container {
              max-width: 850px;
              text-align: center;
            }

            .section-label {
              display: block;
              margin-bottom: 7px;
              color: #2563eb;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: .1em;
              text-transform: uppercase;
            }

            .courses-intro h2,
            .section-heading h2,
            .seo-learning-section h2 {
              margin: 0;
              color: #0f172a;
              font-size: clamp(24px, 3vw, 34px);
            }

            .courses-intro p {
              margin: 13px auto 0;
              color: #64748b;
              font-size: 15px;
              line-height: 1.75;
            }

            .courses-section {
              padding: 45px 0 70px;
              background: white;
            }

            .section-heading {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              gap: 20px;
              margin-bottom: 25px;
            }

            .course-count {
              color: #64748b;
              font-size: 13px;
              font-weight: 700;
            }

            .course-grid {
              display: grid;
              grid-template-columns:
                repeat(3, minmax(0, 1fr));
              gap: 22px;
            }

            .public-course-card {
              display: flex;
              min-width: 0;
              overflow: hidden;
              flex-direction: column;
              border: 1px solid #e2e8f0;
              border-radius: 17px;
              background: white;
              box-shadow:
                0 8px 25px rgba(15,23,42,.06);
              transition:
                transform .2s ease,
                box-shadow .2s ease;
            }

            .public-course-card:hover {
              transform: translateY(-4px);
              box-shadow:
                0 15px 35px rgba(15,23,42,.10);
            }

            .course-image {
              display: block;
              width: 100%;
              aspect-ratio: 16 / 9;
              overflow: hidden;
              background: #e2e8f0;
            }

            .course-image img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform .3s ease;
            }

            .public-course-card:hover
            .course-image img {
              transform: scale(1.035);
            }

            .course-image-placeholder {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #2563eb;
              font-size: 45px;
              background:
                linear-gradient(
                  135deg,
                  #eff6ff,
                  #dbeafe
                );
            }

            .course-card-content {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 20px;
            }

            .course-meta {
              display: flex;
              flex-wrap: wrap;
              gap: 8px 14px;
              margin-bottom: 10px;
              color: #64748b;
              font-size: 11px;
              font-weight: 700;
            }

            .course-meta span {
              display: inline-flex;
              align-items: center;
              gap: 5px;
            }

            .course-card-content h3 {
              margin: 0;
              font-size: 19px;
              line-height: 1.35;
            }

            .course-card-content h3 a {
              color: #0f172a;
              text-decoration: none;
            }

            .course-card-content h3 a:hover {
              color: #2563eb;
            }

            .course-card-content > p {
              display: -webkit-box;
              overflow: hidden;
              margin: 10px 0 15px;
              color: #64748b;
              font-size: 13px;
              line-height: 1.65;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
            }

            .course-link {
              display: inline-flex;
              align-items: center;
              gap: 7px;
              align-self: flex-start;
              margin-top: 15px;
              color: #2563eb;
              text-decoration: none;
              font-size: 12px;
              font-weight: 800;
            }

            .courses-state {
              display: flex;
              min-height: 260px;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              color: #64748b;
            }

            .courses-state > svg {
              margin-bottom: 10px;
              color: #2563eb;
              font-size: 35px;
            }

            .courses-state h3 {
              margin: 0;
              color: #0f172a;
            }

            .courses-state p {
              margin: 6px 0 0;
            }

            .course-spinner {
              width: 38px;
              height: 38px;
              margin-bottom: 12px;
              border: 3px solid #dbeafe;
              border-top-color: #2563eb;
              border-radius: 50%;
              animation: course-spin .8s linear infinite;
            }

            @keyframes course-spin {
              to {
                transform: rotate(360deg);
              }
            }

            .courses-error {
              padding: 16px;
              border: 1px solid #fecaca;
              border-radius: 10px;
              background: #fef2f2;
              color: #b91c1c;
            }

            .seo-learning-section {
              padding: 70px 0;
              background: #f8fafc;
            }

            .seo-learning-grid {
              display: grid;
              grid-template-columns:
                minmax(0, 1.1fr)
                minmax(320px, .9fr);
              gap: 55px;
              align-items: center;
            }

            .seo-learning-section p {
              margin: 14px 0 0;
              color: #64748b;
              font-size: 14px;
              line-height: 1.75;
            }

            .learning-feature-list {
              display: grid;
              gap: 11px;
            }

            .learning-feature-list > div {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              padding: 15px;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              background: white;
              color: #2563eb;
            }

            .learning-feature-list > div > svg {
              flex-shrink: 0;
              margin-top: 3px;
            }

            .learning-feature-list span {
              color: #64748b;
              font-size: 12px;
              line-height: 1.5;
            }

            .learning-feature-list strong {
              display: block;
              margin-bottom: 2px;
              color: #0f172a;
              font-size: 13px;
            }

            @media (max-width: 980px) {
              .course-grid {
                grid-template-columns:
                  repeat(2, minmax(0, 1fr));
              }

              .seo-learning-grid {
                grid-template-columns: 1fr;
                gap: 30px;
              }
            }

            @media (max-width: 640px) {
              .courses-container {
                width: min(
                  100% - 28px,
                  1180px
                );
              }

              .courses-hero {
                padding: 48px 0;
              }

              .courses-hero h1 {
                font-size: 34px;
              }

              .courses-hero p {
                font-size: 14px;
              }

              .hero-benefits {
                display: grid;
                grid-template-columns: 1fr;
              }

              .courses-intro {
                padding: 38px 0 15px;
              }

              .courses-section {
                padding: 35px 0 50px;
              }

              .section-heading {
                align-items: flex-start;
                flex-direction: column;
                gap: 6px;
              }

              .course-grid {
                grid-template-columns: 1fr;
              }

              .seo-learning-section {
                padding: 50px 0;
              }
            }
          `}
        </style>
      </main>
    </>
  );
}
