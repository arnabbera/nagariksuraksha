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
} from "react-icons/fa";

import {
  Link,
  useParams,
} from "react-router-dom";

import SEO from "../../../../shared/seo/SEO";

import {
  SEO_CONFIG,
} from "../../../../constants/seoConfig";

import {
  getCourseById,
} from "../../../../services/courseService";

import {
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

const absoluteUrl = (
  value,
) => {
  if (!value) {
    return SEO_CONFIG.siteUrl;
  }

  if (
    /^https?:\/\//i.test(
      value,
    )
  ) {
    return value;
  }

  return `${
    SEO_CONFIG.siteUrl
  }${
    value.startsWith("/")
      ? value
      : `/${value}`
  }`;
};

const getRobots = (
  topic,
) => {
  const index =
    topic
      ?.seo
      ?.robots
      ?.index !==
    false;

  const follow =
    topic
      ?.seo
      ?.robots
      ?.follow !==
    false;

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

          if (
            !active
          ) {
            return;
          }

          if (
            !topicData
          ) {
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

          if (
            topicData.courseId
          ) {
            try {
              const courseData =
                await getCourseById(
                  topicData.courseId,
                );

              if (
                active
              ) {
                setCourse(
                  courseData ||
                    null,
                );
              }
            } catch (
              courseError
            ) {
              console.warn(
                "Unable to load related course:",
                courseError,
              );
            }
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
    useMemo(() => {
      if (!topic) {
        return null;
      }

      const title =
        topic
          ?.seo
          ?.title ||
        `${topic.title} - LL.B Law Notes`;

      const description =
        topic
          ?.seo
          ?.description ||
        topic
          ?.shortDescription ||
        topic
          ?.overview ||
        `Read ${topic.title} law notes, important principles, cases and exam-focused study material at NagarikSuraksha.`;

      const canonical =
        topic
          ?.seo
          ?.canonicalUrl ||
        `/law-notes/${topic.slug}`;

      const keywords = [
        topic
          ?.seo
          ?.focusKeyword,

        ...(Array.isArray(
          topic
            ?.seo
            ?.secondaryKeywords,
        )
          ? topic.seo
              .secondaryKeywords
          : []),

        topic.title,

        `${topic.title} notes`,

        `${topic.title} law notes`,

        `${topic.title} LLB`,

        "LLB law notes",

        "law study material",
      ].filter(
        Boolean,
      );

      return {
        title,
        description,
        canonical,
        keywords,
        robots:
          getRobots(
            topic,
          ),
        image:
          topic
            ?.seo
            ?.ogImageUrl ||
          "",
      };
    }, [
      topic,
    ]);

  // =========================================================
  // STRUCTURED DATA
  // =========================================================

  const structuredData =
    useMemo(() => {
      if (
        !topic ||
        !seo
      ) {
        return null;
      }

      const topicUrl =
        absoluteUrl(
          seo.canonical,
        );

      return {
        "@context":
          "https://schema.org",

        "@graph": [
          {
            "@type":
              "Article",

            "@id":
              `${topicUrl}#article`,

            headline:
              topic.title,

            description:
              seo.description,

            url:
              topicUrl,

            mainEntityOfPage: {
              "@id":
                topicUrl,
            },

            author: {
              "@type":
                "Organization",

              "@id":
                `${SEO_CONFIG.siteUrl}/#organization`,
            },

            publisher: {
              "@id":
                `${SEO_CONFIG.siteUrl}/#organization`,
            },

            about:
              topic
                ?.seo
                ?.focusKeyword ||
              topic.title,

            keywords:
              seo.keywords.join(
                ", ",
              ),

            inLanguage:
              "en-IN",
          },

          {
            "@type":
              "BreadcrumbList",

            "@id":
              `${topicUrl}#breadcrumb`,

            itemListElement: [
              {
                "@type":
                  "ListItem",

                position:
                  1,

                name:
                  "Home",

                item:
                  `${SEO_CONFIG.siteUrl}/`,
              },

              {
                "@type":
                  "ListItem",

                position:
                  2,

                name:
                  "Law Notes",

                item:
                  `${SEO_CONFIG.siteUrl}/law-notes`,
              },

              {
                "@type":
                  "ListItem",

                position:
                  3,

                name:
                  topic.title,

                item:
                  topicUrl,
              },
            ],
          },
        ],
      };
    }, [
      topic,
      seo,
    ]);

  // =========================================================
  // LOADING
  // =========================================================

  if (
    loading
  ) {
    return (
      <main className="ns-law-note-status">
        <div className="ns-law-note-spinner" />

        <p>
          Loading law note...
        </p>

        <StatusStyles />
      </main>
    );
  }

  // =========================================================
  // NOT FOUND
  // =========================================================

  if (
    error ||
    !topic
  ) {
    return (
      <>
        <SEO
          title="Law Note Not Found"
          description="The requested NagarikSuraksha law note could not be found."
          canonical={`/law-notes/${topicSlug}`}
          robots="noindex, follow"
        />

        <main className="ns-law-note-status">
          <FaBookOpen />

          <h1>
            Law Note Not Found
          </h1>

          <p>
            {error ||
              "The requested law topic is not available."}
          </p>

          <Link to="/law-notes">
            <FaArrowLeft />
            Browse Law Notes
          </Link>

          <StatusStyles />
        </main>
      </>
    );
  }

  // =========================================================
  // CONTENT
  // =========================================================

  const learningObjectives =
    Array.isArray(
      topic
        .learningObjectives,
    )
      ? topic
          .learningObjectives
      : [];

  const keyPoints =
    Array.isArray(
      topic.keyPoints,
    )
      ? topic.keyPoints
      : [];

  const statutoryProvisions =
    Array.isArray(
      topic
        .statutoryProvisions,
    )
      ? topic
          .statutoryProvisions
      : [];

  const importantCases =
    Array.isArray(
      topic
        .importantCases,
    )
      ? topic
          .importantCases
      : [];

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
        structuredData={
          structuredData
        }
      />

      <main className="ns-law-note-page">
        {/* ===================================================
            BREADCRUMB
        ==================================================== */}

        <div className="ns-law-note-container">
          <nav
            className="ns-law-note-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span>
              /
            </span>

            <Link to="/law-notes">
              Law Notes
            </Link>

            <span>
              /
            </span>

            <span>
              {
                topic.title
              }
            </span>
          </nav>
        </div>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="ns-law-note-hero">
          <div className="ns-law-note-container">
            <span className="ns-law-note-eyebrow">
              <FaBalanceScale />
              LL.B Law Notes
            </span>

            <h1>
              {
                topic.title
              }
            </h1>

            {hasText(
              topic
                .shortDescription,
            ) && (
              <p>
                {
                  topic.shortDescription
                }
              </p>
            )}

            <div className="ns-law-note-hero-links">
              <Link
                to="/law-notes"
                className="ns-law-note-back"
              >
                <FaArrowLeft />
                All Law Notes
              </Link>

              {course
                ?.slug && (
                <Link
                  to={`/courses/${course.slug}`}
                  className="ns-law-note-course-link"
                >
                  View Related Course
                  <FaArrowRight />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================
            ARTICLE
        ==================================================== */}

        <section className="ns-law-note-content-section">
          <div className="ns-law-note-container ns-law-note-layout">
            <article className="ns-law-note-article">
              {/* OVERVIEW */}

              {hasText(
                topic.overview,
              ) && (
                <ContentSection
                  icon={
                    <FaBookOpen />
                  }
                  label="Overview"
                  title="Topic Overview"
                >
                  <RichText>
                    {
                      topic.overview
                    }
                  </RichText>
                </ContentSection>
              )}

              {/* LEARNING OBJECTIVES */}

              {learningObjectives.length >
                0 && (
                <ContentSection
                  icon={
                    <FaGraduationCap />
                  }
                  label="Learning Objectives"
                  title="What You Should Understand"
                >
                  <div className="ns-law-note-objectives">
                    {learningObjectives.map(
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
                </ContentSection>
              )}

              {/* DETAILED CONTENT */}

              {hasText(
                topic
                  .detailedContent,
              ) && (
                <ContentSection
                  icon={
                    <FaFileAlt />
                  }
                  label="Detailed Notes"
                  title="Detailed Explanation"
                >
                  <RichText>
                    {
                      topic.detailedContent
                    }
                  </RichText>
                </ContentSection>
              )}

              {/* KEY POINTS */}

              {keyPoints.length >
                0 && (
                <ContentSection
                  icon={
                    <FaLightbulb />
                  }
                  label="Revision"
                  title="Key Points to Remember"
                  tone="highlight"
                >
                  <div className="ns-law-note-keypoints">
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
                </ContentSection>
              )}

              {/* STATUTORY PROVISIONS */}

              {statutoryProvisions.length >
                0 && (
                <ContentSection
                  icon={
                    <FaLandmark />
                  }
                  label="Legal Provisions"
                  title="Important Statutory Provisions"
                >
                  <div className="ns-law-note-provisions">
                    {statutoryProvisions.map(
                      (
                        item,
                        index,
                      ) => (
                        <div
                          key={
                            item.id ||
                            index
                          }
                        >
                          <span className="ns-law-note-number">
                            {index +
                              1}
                          </span>

                          <div>
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
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </ContentSection>
              )}

              {/* CASES */}

              {importantCases.length >
                0 && (
                <ContentSection
                  icon={
                    <FaBalanceScale />
                  }
                  label="Case Law"
                  title="Important Cases"
                >
                  <div className="ns-law-note-cases">
                    {importantCases.map(
                      (
                        item,
                        index,
                      ) => (
                        <article
                          key={
                            item.id ||
                            index
                          }
                        >
                          <span className="ns-case-number">
                            Case{" "}
                            {index +
                              1}
                          </span>

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
                            <strong className="ns-case-citation">
                              {
                                item.citation
                              }
                            </strong>
                          )}

                          {hasText(
                            item.principle,
                          ) && (
                            <div>
                              <b>
                                Principle
                              </b>

                              <p>
                                {
                                  item.principle
                                }
                              </p>
                            </div>
                          )}

                          {hasText(
                            item.summary,
                          ) && (
                            <div>
                              <b>
                                Summary
                              </b>

                              <p>
                                {
                                  item.summary
                                }
                              </p>
                            </div>
                          )}
                        </article>
                      ),
                    )}
                  </div>
                </ContentSection>
              )}

              {/* EXAM FOCUS */}

              {hasText(
                topic.examFocus,
              ) && (
                <ContentSection
                  icon={
                    <FaGraduationCap />
                  }
                  label="Examination Preparation"
                  title="Exam Focus"
                  tone="exam"
                >
                  <RichText>
                    {
                      topic.examFocus
                    }
                  </RichText>
                </ContentSection>
              )}

              {/* REVISION */}

              {hasText(
                topic
                  .revisionNotes,
              ) && (
                <ContentSection
                  icon={
                    <FaLightbulb />
                  }
                  label="Quick Revision"
                  title="Revision Notes"
                  tone="revision"
                >
                  <RichText>
                    {
                      topic.revisionNotes
                    }
                  </RichText>
                </ContentSection>
              )}
            </article>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="ns-law-note-sidebar">
              <div className="ns-law-note-sidebar-card">
                <span className="ns-sidebar-label">
                  Continue Learning
                </span>

                <h3>
                  Study the Complete Course
                </h3>

                <p>
                  This public law note provides
                  an overview for study and
                  revision. Continue through the
                  NagarikSuraksha learning
                  portal for complete
                  chapter-based learning.
                </p>

                {course
                  ?.slug ? (
                  <Link
                    to={`/courses/${course.slug}`}
                  >
                    View Course
                    <FaArrowRight />
                  </Link>
                ) : (
                  <Link to="/llb-courses">
                    Explore LL.B Courses
                    <FaArrowRight />
                  </Link>
                )}
              </div>

              <div className="ns-law-note-sidebar-card secondary">
                <FaBookOpen />

                <div>
                  <h3>
                    More Law Notes
                  </h3>

                  <p>
                    Browse other public legal
                    topics and revision
                    materials.
                  </p>

                  <Link to="/law-notes">
                    Browse Law Notes
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ===================================================
            SEO FOOTER CONTENT
        ==================================================== */}

        <section className="ns-law-note-seo-section">
          <div className="ns-law-note-container">
            <h2>
              Study {topic.title} for LL.B
            </h2>

            <p>
              NagarikSuraksha provides
              topic-wise LL.B law notes to help
              students understand legal
              concepts, revise important
              principles and prepare for law
              examinations.
            </p>

            <Link to="/law-notes">
              Explore More Law Notes
              <FaArrowRight />
            </Link>
          </div>
        </section>

        <LawNoteStyles />
      </main>
    </>
  );
}

// =========================================================
// CONTENT SECTION
// =========================================================

function ContentSection({
  icon,
  label,
  title,
  tone = "",
  children,
}) {
  return (
    <section
      className={`ns-law-content-card ${tone}`}
    >
      <div className="ns-law-content-header">
        <div className="ns-law-content-icon">
          {icon}
        </div>

        <div>
          <span>
            {label}
          </span>

          <h2>
            {title}
          </h2>
        </div>
      </div>

      <div className="ns-law-content-body">
        {children}
      </div>
    </section>
  );
}

// =========================================================
// RICH TEXT
// =========================================================

function RichText({
  children,
}) {
  return (
    <div className="ns-law-rich-text">
      {children}
    </div>
  );
}

// =========================================================
// STATUS STYLES
// =========================================================

function StatusStyles() {
  return (
    <style>
      {`
        .ns-law-note-status {
          display: flex;
          min-height: 65vh;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          padding: 30px;

          text-align: center;
          color: #64748b;
        }

        .ns-law-note-status > svg {
          margin-bottom: 12px;
          color: #2563eb;
          font-size: 40px;
        }

        .ns-law-note-status h1 {
          margin: 0;
          color: #0f172a;
        }

        .ns-law-note-status p {
          margin: 8px 0 17px;
        }

        .ns-law-note-status a {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 10px 14px;

          border-radius: 8px;

          background: #2563eb;
          color: #ffffff;

          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
        }

        .ns-law-note-spinner {
          width: 38px;
          height: 38px;

          margin-bottom: 12px;

          border: 3px solid #dbeafe;
          border-top-color: #2563eb;
          border-radius: 50%;

          animation:
            law-note-spin
            .8s linear
            infinite;
        }

        @keyframes law-note-spin {
          to {
            transform:
              rotate(360deg);
          }
        }
      `}
    </style>
  );
}

// =========================================================
// PAGE STYLES
// =========================================================

function LawNoteStyles() {
  return (
    <style>
      {`
        .ns-law-note-page,
        .ns-law-note-page * {
          box-sizing: border-box;
        }

        .ns-law-note-page {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;

          background: #ffffff;
          color: #0f172a;
        }

        .ns-law-note-container {
          width: min(
            1180px,
            calc(100% - 40px)
          );

          margin: 0 auto;
        }

        .ns-law-note-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;

          padding: 14px 0;

          color: #64748b;

          font-size: 10px;
        }

        .ns-law-note-breadcrumb a {
          color: #2563eb;
          text-decoration: none;
        }

        .ns-law-note-hero {
          padding: 55px 0;

          background:
            radial-gradient(
              circle at 90% 15%,
              rgba(96,165,250,.22),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #0f172a,
              #1e3a8a
            );

          color: #ffffff;
        }

        .ns-law-note-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 11px;

          color: #bfdbfe;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .ns-law-note-hero h1 {
          max-width: 900px;

          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              32px,
              5vw,
              52px
            );

          line-height: 1.12;
        }

        .ns-law-note-hero > div > p {
          max-width: 800px;

          margin: 15px 0 0;

          color: #dbeafe;

          font-size: 15px;
          line-height: 1.7;
        }

        .ns-law-note-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;

          margin-top: 21px;
        }

        .ns-law-note-back,
        .ns-law-note-course-link {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          justify-content: center;
          gap: 7px;

          padding: 0 14px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;
        }

        .ns-law-note-back {
          border: 1px solid
            rgba(255,255,255,.32);

          color: #ffffff;
        }

        .ns-law-note-course-link {
          background: #ffffff;
          color: #1d4ed8;
        }

        .ns-law-note-content-section {
          padding: 55px 0 65px;
        }

        .ns-law-note-layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            310px;

          gap: 35px;

          align-items: start;
        }

        .ns-law-note-article {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 18px;
        }

        .ns-law-content-card {
          overflow: hidden;

          border: 1px solid #e2e8f0;
          border-radius: 14px;

          background: #ffffff;
        }

        .ns-law-content-card.highlight {
          border-color: #fde68a;
          background: #fffbeb;
        }

        .ns-law-content-card.exam {
          border-color: #bfdbfe;
          background: #f8fbff;
        }

        .ns-law-content-card.revision {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .ns-law-content-header {
          display: flex;
          align-items: center;
          gap: 11px;

          padding: 15px 17px;

          border-bottom: 1px solid #e2e8f0;
        }

        .ns-law-content-icon {
          display: flex;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #eff6ff;
          color: #2563eb;

          font-size: 16px;
        }

        .ns-law-content-header span {
          display: block;

          color: #2563eb;

          font-size: 8px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .ns-law-content-header h2 {
          margin: 2px 0 0;

          color: #0f172a;

          font-size: 16px;
        }

        .ns-law-content-body {
          padding: 18px;
        }

        .ns-law-rich-text {
          color: #334155;

          font-size: 13px;
          line-height: 1.85;

          white-space: pre-line;
        }

        .ns-law-note-objectives {
          display: grid;
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 9px;
        }

        .ns-law-note-objectives > div {
          display: flex;
          align-items: flex-start;
          gap: 9px;

          padding: 11px;

          border: 1px solid #dbeafe;
          border-radius: 9px;

          background: #f8fbff;
        }

        .ns-law-note-objectives span {
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

        .ns-law-note-objectives p {
          margin: 1px 0 0;

          color: #334155;

          font-size: 11px;
          line-height: 1.5;
        }

        .ns-law-note-keypoints {
          display: grid;
          gap: 8px;
        }

        .ns-law-note-keypoints > div {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .ns-law-note-keypoints span {
          display: flex;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          border-radius: 7px;

          background: #f59e0b;
          color: #ffffff;

          font-size: 9px;
          font-weight: 800;
        }

        .ns-law-note-keypoints p {
          margin: 2px 0 0;

          color: #334155;

          font-size: 11px;
          line-height: 1.6;
        }

        .ns-law-note-provisions {
          display: grid;
          gap: 10px;
        }

        .ns-law-note-provisions > div {
          display: flex;
          align-items: flex-start;
          gap: 11px;

          padding: 12px;

          border: 1px solid #e2e8f0;
          border-radius: 10px;

          background: #f8fafc;
        }

        .ns-law-note-number {
          display: flex;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: #0f172a;
          color: #ffffff;

          font-size: 9px;
          font-weight: 800;
        }

        .ns-law-note-provisions h3 {
          margin: 0 0 5px;

          color: #0f172a;

          font-size: 12px;
        }

        .ns-law-note-provisions strong {
          display: inline-block;

          margin-bottom: 5px;

          color: #2563eb;

          font-size: 9px;
        }

        .ns-law-note-provisions p {
          margin: 0;

          color: #64748b;

          font-size: 10px;
          line-height: 1.6;
        }

        .ns-law-note-cases {
          display: grid;
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

          gap: 11px;
        }

        .ns-law-note-cases article {
          padding: 13px;

          border: 1px solid #e2e8f0;
          border-radius: 10px;

          background: #f8fafc;
        }

        .ns-case-number {
          display: block;

          margin-bottom: 6px;

          color: #64748b;

          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ns-law-note-cases h3 {
          margin: 0;

          color: #0f172a;

          font-size: 12px;
        }

        .ns-case-citation {
          display: block;

          margin-top: 4px;

          color: #2563eb;

          font-size: 9px;
        }

        .ns-law-note-cases article > div {
          margin-top: 9px;
        }

        .ns-law-note-cases b {
          display: block;

          margin-bottom: 3px;

          color: #334155;

          font-size: 8px;
          text-transform: uppercase;
        }

        .ns-law-note-cases p {
          margin: 0;

          color: #64748b;

          font-size: 10px;
          line-height: 1.55;
        }

        .ns-law-note-sidebar {
          position: sticky;
          top: 20px;
        }

        .ns-law-note-sidebar-card {
          padding: 18px;

          border: 1px solid #e2e8f0;
          border-radius: 13px;

          background: #ffffff;

          box-shadow:
            0 7px 22px
            rgba(15,23,42,.05);
        }

        .ns-sidebar-label {
          display: block;

          margin-bottom: 5px;

          color: #2563eb;

          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ns-law-note-sidebar-card h3 {
          margin: 0;

          color: #0f172a;

          font-size: 14px;
        }

        .ns-law-note-sidebar-card p {
          color: #64748b;

          font-size: 10px;
          line-height: 1.6;
        }

        .ns-law-note-sidebar-card > a {
          display: flex;
          min-height: 39px;
          align-items: center;
          justify-content: center;
          gap: 6px;

          margin-top: 12px;

          border-radius: 8px;

          background: #2563eb;
          color: #ffffff;

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;
        }

        .ns-law-note-sidebar-card.secondary {
          display: flex;
          gap: 10px;

          margin-top: 12px;

          background: #f8fafc;
        }

        .ns-law-note-sidebar-card.secondary > svg {
          flex-shrink: 0;

          margin-top: 3px;

          color: #2563eb;
        }

        .ns-law-note-sidebar-card.secondary a {
          color: #2563eb;

          text-decoration: none;

          font-size: 9px;
          font-weight: 800;
        }

        .ns-law-note-seo-section {
          padding: 50px 0;

          background: #f8fafc;
        }

        .ns-law-note-seo-section
        .ns-law-note-container {
          max-width: 850px;
        }

        .ns-law-note-seo-section h2 {
          margin: 0;

          color: #0f172a;

          font-size:
            clamp(
              22px,
              3vw,
              30px
            );
        }

        .ns-law-note-seo-section p {
          color: #64748b;

          font-size: 12px;
          line-height: 1.7;
        }

        .ns-law-note-seo-section a {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #2563eb;

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .ns-law-note-layout {
            grid-template-columns:
              1fr;
          }

          .ns-law-note-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .ns-law-note-container {
            width: min(
              100% - 28px,
              1180px
            );
          }

          .ns-law-note-hero {
            padding: 40px 0;
          }

          .ns-law-note-hero h1 {
            font-size: 31px;
          }

          .ns-law-note-hero > div > p {
            font-size: 13px;
          }

          .ns-law-note-hero-links {
            display: grid;
            grid-template-columns:
              1fr;
          }

          .ns-law-note-back,
          .ns-law-note-course-link {
            width: 100%;
          }

          .ns-law-note-content-section {
            padding:
              38px 0 48px;
          }

          .ns-law-note-objectives,
          .ns-law-note-cases {
            grid-template-columns:
              1fr;
          }

          .ns-law-content-body {
            padding: 14px;
          }

          .ns-law-note-seo-section {
            padding: 40px 0;
          }
        }
      `}
    </style>
  );
}