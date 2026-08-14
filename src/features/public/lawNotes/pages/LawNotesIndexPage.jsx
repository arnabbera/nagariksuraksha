import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaBalanceScale,
  FaBookOpen,
  FaCheck,
  FaFileAlt,
  FaGraduationCap,
  FaLandmark,
  FaLightbulb,
  FaLock,
} from "react-icons/fa";

import {
  Link,
  useParams,
} from "react-router-dom";

import AnnouncementBar from "../../../home/components/AnnouncementBar";
import Footer from "../../../home/components/Footer";
import Header from "../../../home/components/Header";

import SEO from "../../../../shared/seo/SEO";

import {
  SEO_CONFIG,
} from "../../../../constants/seoConfig";

import {
  getCourseById,
} from "../../../../services/courseService";

import {
  getPublishedLawTopics,
  getPublicLawTopicBySlug,
} from "../../../../services/publicLawTopicService";

// =========================================================
// HELPERS
// =========================================================

const hasText = (
  value,
) =>
  Boolean(
    String(
      value || "",
    ).trim(),
  );

const asArray = (
  value,
) =>
  Array.isArray(value)
    ? value
    : [];

const getRobots = (
  topic,
) => {
  const index =
    topic?.seo?.robots
      ?.index !== false;

  const follow =
    topic?.seo?.robots
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

const resolveCanonical = (
  topic,
) =>
  topic?.seo
    ?.canonicalUrl ||
  `/law-notes/${topic.slug}`;

const createSeo = (
  topic,
  course,
) => {
  const title =
    topic?.seo?.title ||
    `${topic.title} - LL.B Law Notes`;

  const description =
    topic?.seo
      ?.description ||
    topic?.shortDescription ||
    topic?.overview ||
    `Study ${topic.title} with LL.B law notes, important legal principles, cases and exam-focused material at NagarikSuraksha.`;

  const keywords = [
    topic?.seo
      ?.focusKeyword,

    ...asArray(
      topic?.seo
        ?.secondaryKeywords,
    ),

    topic.title,

    `${topic.title} notes`,

    `${topic.title} law notes`,

    `${topic.title} LLB notes`,

    course?.title,

    "LLB notes",

    "law study material",

    "law exam preparation",
  ].filter(Boolean);

  return {
    title,
    description,
    keywords,
    canonical:
      resolveCanonical(
        topic,
      ),
    image:
      topic?.seo
        ?.ogImageUrl ||
      "",
    robots:
      getRobots(
        topic,
      ),
  };
};

const createStructuredData = (
  topic,
  course,
  seo,
) => {
  const canonical =
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

  return {
    "@context":
      "https://schema.org",

    "@graph": [
      {
        "@type":
          "Article",

        "@id":
          `${canonical}#article`,

        headline:
          topic.title,

        description:
          seo.description,

        url:
          canonical,

        mainEntityOfPage: {
          "@type":
            "WebPage",

          "@id":
            canonical,
        },

        publisher: {
          "@id":
            `${SEO_CONFIG.siteUrl}/#organization`,
        },

        about:
          course?.title ||
          "Legal Education",

        educationalLevel:
          "LL.B",

        inLanguage:
          "en-IN",
      },

      {
        "@type":
          "BreadcrumbList",

        "@id":
          `${canonical}#breadcrumb`,

        itemListElement: [
          {
            "@type":
              "ListItem",

            position: 1,

            name:
              "Home",

            item:
              `${SEO_CONFIG.siteUrl}/`,
          },

          {
            "@type":
              "ListItem",

            position: 2,

            name:
              "Law Notes",

            item:
              `${SEO_CONFIG.siteUrl}/law-notes`,
          },

          {
            "@type":
              "ListItem",

            position: 3,

            name:
              topic.title,

            item:
              canonical,
          },
        ],
      },
    ],
  };
};

// =========================================================
// COMPONENT
// =========================================================

export default function LawNoteDetailsPage() {
  const {
    topicSlug,
  } = useParams();

  const [
    topic,
    setTopic,
  ] = useState(null);

  const [
    course,
    setCourse,
  ] = useState(null);

  const [
    relatedTopics,
    setRelatedTopics,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  // =========================================================
  // LOAD TOPIC
  // =========================================================

  useEffect(() => {
    let active =
      true;

    const loadTopic =
      async () => {
        try {
          setLoading(
            true,
          );

          setError(
            "",
          );

          const topicData =
            await getPublicLawTopicBySlug(
              topicSlug,
            );

          if (!active) {
            return;
          }

          if (!topicData) {
            setTopic(
              null,
            );

            setError(
              "Law note not found.",
            );

            return;
          }

          setTopic(
            topicData,
          );

          let courseData =
            null;

          if (
            topicData.courseId
          ) {
            try {
              courseData =
                await getCourseById(
                  topicData.courseId,
                );
            } catch (
              courseError
            ) {
              console.warn(
                "Unable to load related course:",
                courseError,
              );
            }
          }

          if (
            active
          ) {
            setCourse(
              courseData,
            );
          }

          try {
            const allRelated =
              await getPublishedLawTopics({
                courseId:
                  topicData.courseId ||
                  null,

                pageSize:
                  12,
              });

            if (
              active
            ) {
              setRelatedTopics(
                asArray(
                  allRelated,
                )
                  .filter(
                    (
                      item,
                    ) =>
                      item.id !==
                      topicData.id,
                  )
                  .slice(
                    0,
                    4,
                  ),
              );
            }
          } catch (
            relatedError
          ) {
            console.warn(
              "Unable to load related topics:",
              relatedError,
            );
          }
        } catch (
          loadError
        ) {
          console.error(
            "Unable to load public law note:",
            loadError,
          );

          if (
            active
          ) {
            setError(
              "Unable to load this law note.",
            );
          }
        } finally {
          if (
            active
          ) {
            setLoading(
              false,
            );
          }
        }
      };

    loadTopic();

    return () => {
      active =
        false;
    };
  }, [
    topicSlug,
  ]);

  // =========================================================
  // SEO
  // =========================================================

  const seo =
    useMemo(
      () =>
        topic
          ? createSeo(
              topic,
              course,
            )
          : null,
      [
        topic,
        course,
      ],
    );

  const structuredData =
    useMemo(
      () =>
        topic &&
        seo
          ? createStructuredData(
              topic,
              course,
              seo,
            )
          : null,
      [
        topic,
        course,
        seo,
      ],
    );

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="law-note-status">
        <div className="law-note-spinner" />

        <p>
          Loading law note...
        </p>

        <style>
          {statusStyles}
        </style>
      </div>
    );
  }

  // =========================================================
  // NOT FOUND
  // =========================================================

  if (
    !topic ||
    error
  ) {
    return (
      <>
        <SEO
          title="Law Note Not Found"
          description="The requested NagarikSuraksha law note could not be found."
          canonical={`/law-notes/${topicSlug}`}
          robots="noindex, follow"
        />

        <div className="law-note-status">
          <FaBookOpen />

          <h1>
            Law Note Not Found
          </h1>

          <p>
            {error ||
              "This law note is not available."}
          </p>

          <Link to="/law-notes">
            <FaArrowLeft />
            Browse Law Notes
          </Link>

          <style>
            {statusStyles}
          </style>
        </div>
      </>
    );
  }

  const objectives =
    asArray(
      topic.learningObjectives,
    );

  const keyPoints =
    asArray(
      topic.keyPoints,
    );

  const provisions =
    asArray(
      topic.statutoryProvisions,
    );

  const cases =
    asArray(
      topic.importantCases,
    );

  // =========================================================
  // RENDER
  // =========================================================

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
        type="article"
        structuredData={
          structuredData
        }
      />

      <div className="law-note-page">
        <AnnouncementBar />

        <Header />

        <main>
          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <div className="law-note-container">
            <nav
              className="law-note-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link to="/">
                Home
              </Link>

              <span>/</span>

              <Link to="/law-notes">
                Law Notes
              </Link>

              <span>/</span>

              <span>
                {topic.title}
              </span>
            </nav>
          </div>

          {/* =================================================
              HERO
          ================================================= */}

          <section className="law-note-hero">
            <div className="law-note-container law-note-hero-grid">
              <div>
                <span className="law-note-label">
                  <FaBalanceScale />

                  LL.B Law Notes
                </span>

                <h1>
                  {topic.title}
                </h1>

                <p>
                  {topic
                    .shortDescription ||
                    topic.overview}
                </p>

                {course
                  ?.title && (
                  <Link
                    className="law-note-course-link"
                    to={`/courses/${
                      course.slug ||
                      course.id
                    }`}
                  >
                    Part of:{" "}
                    {course.title}

                    <FaArrowRight />
                  </Link>
                )}
              </div>

              <div className="law-note-hero-card">
                <FaGraduationCap />

                <h3>
                  Study This Topic
                </h3>

                <p>
                  Read the public legal
                  note here and continue
                  into the full course for
                  structured learning,
                  study materials and
                  assessments.
                </p>

                <Link to="/login">
                  Student Login

                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </section>

          {/* =================================================
              CONTENT
          ================================================= */}

          <section className="law-note-content-section">
            <div className="law-note-container law-note-content-grid">
              <article className="law-note-article">
                {/* OVERVIEW */}

                {hasText(
                  topic.overview,
                ) && (
                  <LawSection
                    icon={
                      <FaBookOpen />
                    }
                    kicker="Overview"
                    title={`${topic.title} - Overview`}
                  >
                    <PublicText>
                      {
                        topic.overview
                      }
                    </PublicText>
                  </LawSection>
                )}

                {/* OBJECTIVES */}

                {objectives.length >
                  0 && (
                  <LawSection
                    icon={
                      <FaGraduationCap />
                    }
                    kicker="Learning Objectives"
                    title="What You Will Learn"
                  >
                    <div className="public-objectives">
                      {objectives.map(
                        (
                          objective,
                          index,
                        ) => (
                          <div
                            key={`${objective}-${index}`}
                          >
                            <span>
                              <FaCheck />
                            </span>

                            <p>
                              {
                                objective
                              }
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </LawSection>
                )}

                {/* DETAILED CONTENT */}

                {hasText(
                  topic.detailedContent,
                ) && (
                  <LawSection
                    icon={
                      <FaFileAlt />
                    }
                    kicker="Law Notes"
                    title="Detailed Explanation"
                  >
                    <PublicText>
                      {
                        topic.detailedContent
                      }
                    </PublicText>
                  </LawSection>
                )}

                {/* KEY POINTS */}

                {keyPoints.length >
                  0 && (
                  <LawSection
                    icon={
                      <FaLightbulb />
                    }
                    kicker="Important"
                    title="Key Points to Remember"
                    tone="highlight"
                  >
                    <div className="public-key-points">
                      {keyPoints.map(
                        (
                          point,
                          index,
                        ) => (
                          <div
                            key={`${point}-${index}`}
                          >
                            <span>
                              {index +
                                1}
                            </span>

                            <p>
                              {
                                point
                              }
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </LawSection>
                )}

                {/* STATUTORY PROVISIONS */}

                {provisions.length >
                  0 && (
                  <LawSection
                    icon={
                      <FaLandmark />
                    }
                    kicker="Legal Provisions"
                    title="Important Statutory Provisions"
                  >
                    <div className="public-provisions">
                      {provisions.map(
                        (
                          item,
                          index,
                        ) => {
                          const isObject =
                            typeof item ===
                              "object" &&
                            item !==
                              null;

                          return (
                            <div
                              key={
                                isObject
                                  ? item.id ||
                                    index
                                  : `${item}-${index}`
                              }
                            >
                              <span className="provision-index">
                                {index +
                                  1}
                              </span>

                              <div>
                                {isObject ? (
                                  <>
                                    {hasText(
                                      item.title,
                                    ) && (
                                      <h3>
                                        {
                                          item.title
                                        }
                                      </h3>
                                    )}

                                    {hasText(
                                      item.provision,
                                    ) && (
                                      <strong>
                                        {
                                          item.provision
                                        }
                                      </strong>
                                    )}

                                    {hasText(
                                      item.description,
                                    ) && (
                                      <p>
                                        {
                                          item.description
                                        }
                                      </p>
                                    )}
                                  </>
                                ) : (
                                  <p>
                                    {
                                      item
                                    }
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </LawSection>
                )}

                {/* CASE LAW */}

                {cases.length >
                  0 && (
                  <LawSection
                    icon={
                      <FaBalanceScale />
                    }
                    kicker="Case Law"
                    title="Important Cases & Judgments"
                  >
                    <div className="public-case-grid">
                      {cases.map(
                        (
                          item,
                          index,
                        ) => {
                          const isObject =
                            typeof item ===
                              "object" &&
                            item !==
                              null;

                          return (
                            <article
                              key={
                                isObject
                                  ? item.id ||
                                    index
                                  : `${item}-${index}`
                              }
                              className="public-case-card"
                            >
                              <span>
                                Case{" "}
                                {index +
                                  1}
                              </span>

                              {isObject ? (
                                <>
                                  {hasText(
                                    item.caseName,
                                  ) && (
                                    <h3>
                                      {
                                        item.caseName
                                      }
                                    </h3>
                                  )}

                                  {hasText(
                                    item.citation,
                                  ) && (
                                    <strong className="case-citation">
                                      {
                                        item.citation
                                      }
                                    </strong>
                                  )}

                                  {hasText(
                                    item.principle,
                                  ) && (
                                    <>
                                      <h4>
                                        Principle
                                      </h4>

                                      <p>
                                        {
                                          item.principle
                                        }
                                      </p>
                                    </>
                                  )}

                                  {hasText(
                                    item.summary,
                                  ) && (
                                    <>
                                      <h4>
                                        Summary
                                      </h4>

                                      <p>
                                        {
                                          item.summary
                                        }
                                      </p>
                                    </>
                                  )}
                                </>
                              ) : (
                                <h3>
                                  {
                                    item
                                  }
                                </h3>
                              )}
                            </article>
                          );
                        },
                      )}
                    </div>
                  </LawSection>
                )}

                {/* EXAM FOCUS */}

                {hasText(
                  topic.examFocus,
                ) && (
                  <LawSection
                    icon={
                      <FaGraduationCap />
                    }
                    kicker="Examination"
                    title="Exam Focus"
                    tone="exam"
                  >
                    <PublicText>
                      {
                        topic.examFocus
                      }
                    </PublicText>
                  </LawSection>
                )}

                {/* REVISION */}

                {hasText(
                  topic.revisionNotes,
                ) && (
                  <LawSection
                    icon={
                      <FaFileAlt />
                    }
                    kicker="Revision"
                    title="Quick Revision Notes"
                    tone="revision"
                  >
                    <PublicText>
                      {
                        topic.revisionNotes
                      }
                    </PublicText>
                  </LawSection>
                )}
              </article>

              {/* =================================================
                  SIDEBAR
              ================================================= */}

              <aside className="law-note-sidebar">
                <div className="law-note-sidebar-card">
                  <h3>
                    Continue Learning
                  </h3>

                  <p>
                    Access the complete
                    learning pathway,
                    chapter resources and
                    course assessments
                    through your student
                    account.
                  </p>

                  <div className="protected-feature">
                    <FaLock />

                    <span>
                      Protected study
                      resources
                    </span>
                  </div>

                  <div className="protected-feature">
                    <FaLock />

                    <span>
                      Mock tests
                    </span>
                  </div>

                  <div className="protected-feature">
                    <FaLock />

                    <span>
                      Final examination
                    </span>
                  </div>

                  <Link
                    className="student-cta"
                    to="/login"
                  >
                    Student Login

                    <FaArrowRight />
                  </Link>
                </div>

                {course && (
                  <div className="related-course-card">
                    <span>
                      Related Course
                    </span>

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course
                        .shortDescription ||
                        course.description}
                    </p>

                    <Link
                      to={`/courses/${
                        course.slug ||
                        course.id
                      }`}
                    >
                      View Course

                      <FaArrowRight />
                    </Link>
                  </div>
                )}
              </aside>
            </div>
          </section>

          {/* =================================================
              RELATED TOPICS
          ================================================= */}

          {relatedTopics.length >
            0 && (
            <section className="related-law-topics">
              <div className="law-note-container">
                <span className="section-kicker">
                  Continue Studying
                </span>

                <h2>
                  Related Law Notes
                </h2>

                <div className="related-topic-grid">
                  {relatedTopics.map(
                    (
                      item,
                    ) => (
                      <Link
                        key={
                          item.id
                        }
                        to={`/law-notes/${item.slug}`}
                      >
                        <FaFileAlt />

                        <div>
                          <strong>
                            {
                              item.title
                            }
                          </strong>

                          <span>
                            {item
                              .shortDescription ||
                              "Read this related legal topic."}
                          </span>
                        </div>

                        <FaArrowRight />
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              PUBLIC NOTE DISCLAIMER
          ================================================= */}

          <section className="public-note-disclaimer">
            <div className="law-note-container">
              <p>
                This page is provided as
                educational material for law
                students and general legal
                learning. Students should
                consult the applicable statute,
                prescribed syllabus and
                authoritative judgments for
                academic or professional use.
              </p>
            </div>
          </section>
        </main>

        <Footer />

        <style>
          {`
            .law-note-page,
            .law-note-page * {
              box-sizing: border-box;
            }

            .law-note-page {
              width: 100%;
              min-width: 0;
              max-width: 100vw;
              overflow-x: hidden;
              background: #ffffff;
              color: #0f172a;
            }

            .law-note-container {
              width: min(
                1180px,
                calc(100% - 40px)
              );
              margin: 0 auto;
            }

            /* BREADCRUMB */

            .law-note-breadcrumb {
              display: flex;
              flex-wrap: wrap;
              gap: 7px;

              padding: 15px 0;

              color: #64748b;

              font-size: 10px;
            }

            .law-note-breadcrumb a {
              color: #2563eb;
              text-decoration: none;
            }

            /* HERO */

            .law-note-hero {
              padding: 55px 0;

              background:
                linear-gradient(
                  135deg,
                  #0f172a,
                  #1e3a8a
                );

              color: #ffffff;
            }

            .law-note-hero-grid {
              display: grid;

              grid-template-columns:
                minmax(0, 1fr)
                290px;

              gap: 45px;

              align-items: center;
            }

            .law-note-label {
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

            .law-note-hero h1 {
              max-width: 850px;

              margin: 0;

              color: #ffffff;

              font-size:
                clamp(
                  32px,
                  5vw,
                  52px
                );

              line-height: 1.1;
            }

            .law-note-hero
            > .law-note-container
            > div:first-child
            > p {
              max-width: 760px;

              margin: 16px 0 0;

              color: #dbeafe;

              font-size: 15px;
              line-height: 1.75;
            }

            .law-note-course-link {
              display: inline-flex;
              align-items: center;
              gap: 7px;

              margin-top: 18px;

              color: #fde68a;

              font-size: 11px;
              font-weight: 800;
              text-decoration: none;
            }

            .law-note-hero-card {
              padding: 20px;

              border: 1px solid
                rgba(255,255,255,.16);

              border-radius: 15px;

              background:
                rgba(255,255,255,.08);
            }

            .law-note-hero-card
            > svg {
              color: #fde047;

              font-size: 30px;
            }

            .law-note-hero-card h3 {
              margin: 11px 0 7px;

              color: #ffffff;

              font-size: 15px;
            }

            .law-note-hero-card p {
              margin: 0;

              color: #cbd5e1;

              font-size: 10px;
              line-height: 1.6;
            }

            .law-note-hero-card a {
              display: inline-flex;
              align-items: center;
              gap: 7px;

              margin-top: 14px;

              color: #fde047;

              font-size: 10px;
              font-weight: 800;
              text-decoration: none;
            }

            /* CONTENT */

            .law-note-content-section {
              padding: 55px 0 65px;
            }

            .law-note-content-grid {
              display: grid;

              grid-template-columns:
                minmax(0, 1fr)
                290px;

              gap: 38px;

              align-items: start;
            }

            .law-note-article {
              display: flex;
              min-width: 0;
              flex-direction: column;

              gap: 19px;
            }

            .law-public-section {
              overflow: hidden;

              border: 1px solid #e2e8f0;
              border-radius: 15px;

              background: #ffffff;
            }

            .law-public-section.highlight {
              border-color: #fde68a;
              background: #fffbeb;
            }

            .law-public-section.exam {
              border-color: #bfdbfe;
              background: #f8fbff;
            }

            .law-public-section.revision {
              border-color: #c7d2fe;
              background: #fafaff;
            }

            .law-public-section-header {
              display: flex;
              align-items: center;
              gap: 12px;

              padding: 16px 18px;

              border-bottom:
                1px solid #e2e8f0;
            }

            .law-public-section-icon {
              display: flex;
              width: 40px;
              height: 40px;
              flex-shrink: 0;
              align-items: center;
              justify-content: center;

              border-radius: 10px;

              background: #eff6ff;
              color: #2563eb;

              font-size: 16px;
            }

            .law-public-section-heading span {
              display: block;

              margin-bottom: 2px;

              color: #2563eb;

              font-size: 9px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .law-public-section-heading h2 {
              margin: 0;

              font-size: 18px;
            }

            .law-public-section-body {
              padding: 20px;
            }

            .public-law-text {
              color: #334155;

              font-size: 14px;
              line-height: 1.9;

              white-space: pre-line;
            }

            /* OBJECTIVES */

            .public-objectives {
              display: grid;

              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );

              gap: 9px;
            }

            .public-objectives > div {
              display: flex;
              align-items: flex-start;
              gap: 9px;

              padding: 11px;

              border: 1px solid #dbeafe;
              border-radius: 10px;

              background: #f8fbff;
            }

            .public-objectives
            > div
            > span {
              display: flex;
              width: 22px;
              height: 22px;
              flex-shrink: 0;
              align-items: center;
              justify-content: center;

              border-radius: 50%;

              background: #2563eb;
              color: #ffffff;

              font-size: 8px;
            }

            .public-objectives p {
              margin: 1px 0 0;

              color: #475569;

              font-size: 11px;
              line-height: 1.55;
            }

            /* KEY POINTS */

            .public-key-points {
              display: flex;
              flex-direction: column;
              gap: 9px;
            }

            .public-key-points > div {
              display: flex;
              align-items: flex-start;
              gap: 10px;
            }

            .public-key-points span {
              display: flex;
              width: 25px;
              height: 25px;
              flex-shrink: 0;
              align-items: center;
              justify-content: center;

              border-radius: 7px;

              background: #f59e0b;
              color: #ffffff;

              font-size: 10px;
              font-weight: 800;
            }

            .public-key-points p {
              margin: 2px 0 0;

              color: #475569;

              font-size: 12px;
              line-height: 1.6;
            }

            /* PROVISIONS */

            .public-provisions {
              display: flex;
              flex-direction: column;
              gap: 11px;
            }

            .public-provisions > div {
              display: flex;
              align-items: flex-start;
              gap: 12px;

              padding: 13px;

              border: 1px solid #e2e8f0;
              border-radius: 11px;

              background: #f8fafc;
            }

            .provision-index {
              display: flex;
              width: 29px;
              height: 29px;
              flex-shrink: 0;
              align-items: center;
              justify-content: center;

              border-radius: 8px;

              background: #0f172a;
              color: #ffffff;

              font-size: 10px;
              font-weight: 800;
            }

            .public-provisions h3 {
              margin: 0 0 5px;

              font-size: 13px;
            }

            .public-provisions strong {
              display: inline-block;

              margin-bottom: 5px;

              color: #2563eb;

              font-size: 10px;
            }

            .public-provisions p {
              margin: 0;

              color: #475569;

              font-size: 11px;
              line-height: 1.65;
            }

            /* CASES */

            .public-case-grid {
              display: grid;

              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );

              gap: 12px;
            }

            .public-case-card {
              padding: 14px;

              border: 1px solid #e2e8f0;
              border-radius: 11px;

              background: #f8fafc;
            }

            .public-case-card
            > span {
              color: #64748b;

              font-size: 8px;
              font-weight: 800;
              text-transform: uppercase;
            }

            .public-case-card h3 {
              margin: 6px 0 0;

              font-size: 13px;
            }

            .case-citation {
              display: block;

              margin-top: 4px;

              color: #2563eb;

              font-size: 9px;
            }

            .public-case-card h4 {
              margin: 10px 0 3px;

              color: #475569;

              font-size: 9px;
              text-transform: uppercase;
            }

            .public-case-card p {
              margin: 0;

              color: #64748b;

              font-size: 10px;
              line-height: 1.6;
            }

            /* SIDEBAR */

            .law-note-sidebar {
              position: sticky;
              top: 90px;
            }

            .law-note-sidebar-card,
            .related-course-card {
              padding: 18px;

              border: 1px solid #e2e8f0;
              border-radius: 13px;

              background: #ffffff;

              box-shadow:
                0 8px 24px
                rgba(15,23,42,.05);
            }

            .law-note-sidebar-card h3,
            .related-course-card h3 {
              margin: 0 0 7px;

              font-size: 14px;
            }

            .law-note-sidebar-card > p,
            .related-course-card p {
              margin: 0 0 13px;

              color: #64748b;

              font-size: 10px;
              line-height: 1.6;
            }

            .protected-feature {
              display: flex;
              align-items: center;
              gap: 8px;

              margin-top: 8px;

              padding: 9px;

              border-radius: 8px;

              background: #f8fafc;
              color: #475569;

              font-size: 10px;
            }

            .protected-feature svg {
              color: #64748b;
            }

            .student-cta {
              display: flex;
              min-height: 40px;
              align-items: center;
              justify-content: center;
              gap: 7px;

              margin-top: 14px;

              border-radius: 8px;

              background: #2563eb;
              color: #ffffff;

              font-size: 10px;
              font-weight: 800;
              text-decoration: none;
            }

            .related-course-card {
              margin-top: 13px;
            }

            .related-course-card
            > span {
              display: block;

              margin-bottom: 5px;

              color: #2563eb;

              font-size: 8px;
              font-weight: 800;
              letter-spacing: .06em;
              text-transform: uppercase;
            }

            .related-course-card a {
              display: inline-flex;
              align-items: center;
              gap: 6px;

              color: #2563eb;

              font-size: 10px;
              font-weight: 800;
              text-decoration: none;
            }

            /* RELATED */

            .related-law-topics {
              padding: 55px 0;

              background: #f8fafc;
            }

            .section-kicker {
              display: block;

              margin-bottom: 6px;

              color: #2563eb;

              font-size: 9px;
              font-weight: 800;
              letter-spacing: .08em;
              text-transform: uppercase;
            }

            .related-law-topics h2 {
              margin: 0 0 18px;

              font-size: 24px;
            }

            .related-topic-grid {
              display: grid;

              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );

              gap: 11px;
            }

            .related-topic-grid > a {
              display: flex;
              min-width: 0;
              align-items: center;
              gap: 10px;

              padding: 13px;

              border: 1px solid #e2e8f0;
              border-radius: 10px;

              background: #ffffff;

              color: #2563eb;

              text-decoration: none;
            }

            .related-topic-grid
            > a
            > div {
              min-width: 0;
              flex: 1;
            }

            .related-topic-grid strong,
            .related-topic-grid span {
              display: block;
            }

            .related-topic-grid strong {
              color: #0f172a;

              font-size: 11px;
            }

            .related-topic-grid span {
              margin-top: 2px;

              overflow: hidden;

              color: #64748b;

              font-size: 9px;

              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .related-topic-grid
            > a
            > svg:last-child {
              flex-shrink: 0;
            }

            /* DISCLAIMER */

            .public-note-disclaimer {
              padding: 20px 0;

              border-top: 1px solid #e2e8f0;

              background: #ffffff;
            }

            .public-note-disclaimer p {
              max-width: 900px;

              margin: 0 auto;

              color: #94a3b8;

              font-size: 9px;
              line-height: 1.6;
              text-align: center;
            }

            /* TABLET */

            @media (
              max-width: 900px
            ) {
              .law-note-hero-grid,
              .law-note-content-grid {
                grid-template-columns:
                  1fr;
              }

              .law-note-hero-card {
                max-width: 500px;
              }

              .law-note-sidebar {
                position: static;
              }

              .law-note-sidebar {
                display: grid;

                grid-template-columns:
                  repeat(
                    2,
                    minmax(0, 1fr)
                  );

                gap: 12px;
              }

              .related-course-card {
                margin-top: 0;
              }
            }

            /* MOBILE */

            @media (
              max-width: 640px
            ) {
              .law-note-container {
                width: min(
                  100% - 28px,
                  1180px
                );
              }

              .law-note-hero {
                padding: 40px 0;
              }

              .law-note-hero h1 {
                font-size: 31px;
              }

              .law-note-hero
              > .law-note-container
              > div:first-child
              > p {
                font-size: 13px;
              }

              .law-note-content-section {
                padding: 40px 0;
              }

              .law-public-section-header {
                padding: 14px;
              }

              .law-public-section-body {
                padding: 15px;
              }

              .public-objectives,
              .public-case-grid {
                grid-template-columns:
                  1fr;
              }

              .law-note-sidebar {
                grid-template-columns:
                  1fr;
              }

              .related-law-topics {
                padding: 42px 0;
              }

              .related-topic-grid {
                grid-template-columns:
                  1fr;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}

// =========================================================
// LAW SECTION
// =========================================================

function LawSection({
  icon,
  kicker,
  title,
  tone = "",
  children,
}) {
  return (
    <section
      className={`law-public-section ${tone}`}
    >
      <div className="law-public-section-header">
        <div className="law-public-section-icon">
          {icon}
        </div>

        <div className="law-public-section-heading">
          <span>
            {kicker}
          </span>

          <h2>
            {title}
          </h2>
        </div>
      </div>

      <div className="law-public-section-body">
        {children}
      </div>
    </section>
  );
}

// =========================================================
// PUBLIC TEXT
// =========================================================

function PublicText({
  children,
}) {
  return (
    <div className="public-law-text">
      {children}
    </div>
  );
}

// =========================================================
// STATUS STYLES
// =========================================================

const statusStyles = `
  .law-note-status {
    display: flex;
    min-height: 70vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 30px;

    color: #64748b;

    text-align: center;
  }

  .law-note-status > svg {
    margin-bottom: 12px;

    color: #2563eb;

    font-size: 40px;
  }

  .law-note-status h1 {
    margin: 0;

    color: #0f172a;
  }

  .law-note-status p {
    margin: 8px 0 18px;
  }

  .law-note-status a {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    padding: 11px 15px;

    border-radius: 8px;

    background: #2563eb;
    color: #ffffff;

    font-size: 11px;
    font-weight: 800;
    text-decoration: none;
  }

  .law-note-spinner {
    width: 38px;
    height: 38px;

    margin-bottom: 12px;

    border: 3px solid #dbeafe;
    border-top-color: #2563eb;
    border-radius: 50%;

    animation:
      law-note-spin
      .8s linear infinite;
  }

  @keyframes law-note-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;