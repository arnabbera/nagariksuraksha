import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import {
  FaBalanceScale,
  FaBookOpen,
  FaCheck,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaFilePdf,
  FaGraduationCap,
  FaLandmark,
  FaLightbulb,
  FaLink,
  FaListUl,
  FaLock,
} from "react-icons/fa";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getPublishedChaptersByCourse,
} from "../../../../services/chapterService";

import {
  getCourseBySlug,
} from "../../../../services/courseService";

import {
  getPublishedChapterResources,
} from "../../../../services/chapterResourceService";

import {
  getStudentEnrollment,
} from "../../../../services/studentEnrollmentService";

import {
  getStudentChapterProgress,
  markChapterComplete,
  markResourceComplete,
  startChapter,
} from "../../../../services/studentProgressService";

import Card from "../../../../shared/components/Card";
import Button from "../../../../shared/components/Button";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";
import {
  getChapterLearningPath,
  getChapterPathSegment,
  resolveChapterPathSegment,
} from "../../../../utils/chapterUrl";

import ChapterNavigation from "../components/ChapterNavigation";

// =========================================================
// PDF.JS WORKER
// =========================================================

pdfjs.GlobalWorkerOptions.workerSrc =
  new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

// =========================================================
// HELPERS
// =========================================================

const getYouTubeEmbedUrl = (
  videoId,
  youtubeUrl,
) => {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  try {
    const url =
      new URL(
        youtubeUrl,
      );

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
      url.searchParams.get(
        "v",
      );

    return id
      ? `https://www.youtube.com/embed/${id}`
      : "";
  } catch {
    return "";
  }
};

const formatFileSize = (
  bytes = 0,
) => {
  const size =
    Number(
      bytes || 0,
    );

  if (!size) {
    return "";
  }

  if (
    size <
    1024
  ) {
    return `${size} B`;
  }

  if (
    size <
    1024 * 1024
  ) {
    return `${(
      size /
      1024
    ).toFixed(
      1,
    )} KB`;
  }

  return `${(
    size /
    (
      1024 *
      1024
    )
  ).toFixed(
    2,
  )} MB`;
};

const hasText = (
  value,
) =>
  Boolean(
    String(
      value || "",
    ).trim(),
  );

const isEnrollmentActive = (
  enrollment,
) => {
  if (!enrollment) {
    return false;
  }

  if (
    enrollment.deleted ===
    true
  ) {
    return false;
  }

  return [
    "active",
    "completed",
  ].includes(
    enrollment.status,
  );
};

// =========================================================
// CHAPTER LEARNING
// =========================================================

export default function ChapterLearning() {
  const {
    courseId:
      courseSlug,

    chapterId,
  } = useParams();

  const navigate =
    useNavigate();

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
    profile?.role ===
      "admin";

  const [
    course,
    setCourse,
  ] = useState(null);

  const [
    chapter,
    setChapter,
  ] = useState(null);

  const [
    chapters,
    setChapters,
  ] = useState([]);

  const [
    resources,
    setResources,
  ] = useState([]);

  const [
    enrollment,
    setEnrollment,
  ] = useState(null);

  const [
    progress,
    setProgress,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    completing,
    setCompleting,
  ] = useState(false);

  const [
    resourceCompletingId,
    setResourceCompletingId,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  // =========================================================
  // MAIN PDF STATE
  // =========================================================

  const [
    pdfPageCount,
    setPdfPageCount,
  ] = useState(0);

  const [
    pdfPageNumber,
    setPdfPageNumber,
  ] = useState(1);

  const [
    pdfWidth,
    setPdfWidth,
  ] = useState(900);

  // =========================================================
  // RESPONSIVE PDF WIDTH
  // =========================================================

  useEffect(() => {
    const updatePdfWidth =
      () => {
        const viewport =
          window.innerWidth ||
          1024;

        const horizontalSpace =
          viewport <= 768
            ? 36
            : 100;

        setPdfWidth(
          Math.max(
            270,
            Math.min(
              900,
              viewport -
                horizontalSpace,
            ),
          ),
        );
      };

    updatePdfWidth();

    window.addEventListener(
      "resize",
      updatePdfWidth,
    );

    return () =>
      window.removeEventListener(
        "resize",
        updatePdfWidth,
      );
  }, []);

  // =========================================================
  // LOAD
  // =========================================================

  async function loadLearningPage() {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        setChapter(
          null,
        );

        setChapters(
          [],
        );

        setResources(
          [],
        );

        setProgress(
          null,
        );

        setEnrollment(
          null,
        );

        setPdfPageCount(
          0,
        );

        setPdfPageNumber(
          1,
        );

        // =====================================================
        // COURSE
        // =====================================================

        const courseData =
          await getCourseBySlug(
            courseSlug,
          );

        if (!courseData) {
          setCourse(
            null,
          );

          return;
        }

        const realCourseId =
          courseData.id;

        if (!realCourseId) {
          throw new Error(
            "Course document ID is missing.",
          );
        }

        setCourse(
          courseData,
        );

        // =====================================================
        // ENROLLMENT
        // =====================================================
        //
        // Enrollment is checked, but NOT required merely to
        // read the chapter.
        //
        // It controls:
        //
        // - progress tracking
        // - chapter completion
        // - protected PDF download
        // - certification features
        // =====================================================

        let enrollmentData =
          null;

        if (!isAdmin) {
          try {
            enrollmentData =
              await getStudentEnrollment(
                studentId,
                realCourseId,
              );

            setEnrollment(
              enrollmentData ||
                null,
            );
          } catch (
            enrollmentError
          ) {
            console.warn(
              "Unable to load enrollment:",
              enrollmentError,
            );

            setEnrollment(
              null,
            );
          }
        }

        const enrolled =
          isAdmin ||
          isEnrollmentActive(
            enrollmentData,
          );

        // =====================================================
        // LOAD PUBLISHED CHAPTER CONTENT
        // =====================================================

        const chapterList =
          await getPublishedChaptersByCourse(
            realCourseId,
          );

        const chapterData =
          resolveChapterPathSegment(
            chapterList,
            courseSlug,
            chapterId,
          );

        const resolvedChapterId =
          chapterData?.id || "";

        const resourceList =
          resolvedChapterId
            ? await getPublishedChapterResources(
                resolvedChapterId,
              )
            : [];

        // =====================================================
        // VALIDATE CHAPTER
        // =====================================================

        if (
          !chapterData ||
          chapterData.published !==
            true ||
          chapterData.deleted ===
            true ||
          chapterData.courseId !==
            realCourseId
        ) {
          setChapter(
            null,
          );

          return;
        }

        setChapter(
          chapterData,
        );

        const canonicalSegment =
          getChapterPathSegment(
            courseSlug,
            chapterData,
          );

        if (
          canonicalSegment &&
          canonicalSegment !== chapterId
        ) {
          navigate(
            getChapterLearningPath(
              courseSlug,
              chapterData,
            ),
            { replace: true },
          );
        }

        // =====================================================
        // CHAPTER LIST
        // =====================================================

        const safeChapterList =
          Array.isArray(
            chapterList,
          )
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
                  ) => {
                    const firstNumber =
                      Number(
                        first.chapterNumber ||
                          first.displayOrder ||
                          0,
                      );

                    const secondNumber =
                      Number(
                        second.chapterNumber ||
                          second.displayOrder ||
                          0,
                      );

                    return (
                      firstNumber -
                      secondNumber
                    );
                  },
                )
            : [];

        setChapters(
          safeChapterList,
        );

        // =====================================================
        // RESOURCES
        // =====================================================

        setResources(
          Array.isArray(
            resourceList,
          )
            ? resourceList
            : [],
        );

        // =====================================================
        // PROGRESS ONLY FOR ENROLLED STUDENTS / ADMIN
        // =====================================================

        if (enrolled) {
          const existingProgress =
            await getStudentChapterProgress(
              studentId,
              resolvedChapterId,
            );

          if (
            existingProgress
          ) {
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

                  chapterId:
                    resolvedChapterId,
                },

                studentId,
              );

            setProgress(
              started,
            );
          }
        } else {
          setProgress(
            null,
          );
        }
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load chapter:",
          loadError,
        );

        setError(
          loadError?.message ||
            "Unable to load this chapter.",
        );

        setChapter(
          null,
        );
      } finally {
        setLoading(
          false,
        );
      }
    }

  useEffect(() => {
    if (
      !courseSlug ||
      !chapterId ||
      !studentId
    ) {
      return;
    }

    // The loader performs the route-driven asynchronous state transition.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadLearningPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    courseSlug,
    chapterId,
    studentId,
    isAdmin,
  ]);

  // =========================================================
  // ACCESS
  // =========================================================

  const enrolled =
    isAdmin ||
    isEnrollmentActive(
      enrollment,
    );

  const certification =
    enrollment?.certification ||
    null;

  const certificationActive =
    [
      "active",
      "completed",
    ].includes(
      certification?.status,
    );

  const certificationPaid =
    certification
      ?.payment
      ?.status ===
    "paid";

  const certificationPdfAccess =
    certification
      ?.access
      ?.pdfDownload ===
    true;

  // =========================================================
  // READING ACCESS
  //
  // Every authenticated student may read the PDF.
  // =========================================================

  const canReadPdf = Boolean(
    isAdmin ||
      (enrolled && certificationActive && certificationPaid),
  );

  // =========================================================
  // DOWNLOAD ACCESS
  //
  // Admin:
  // YES
  //
  // Student:
  // Requires active certification + payment + PDF entitlement.
  // =========================================================

  const canDownloadPdf =
    Boolean(
      isAdmin ||
      (
        enrolled &&
        certificationActive &&
        certificationPaid &&
        certificationPdfAccess
      ),
    );

  // =========================================================
  // CONTENT
  // =========================================================

  const content =
    chapter?.content ||
    {};

  const chapterOverview =
    content.overview ||
    chapter
      ?.chapterOverview ||
    "";

  const learningObjectives =
    Array.isArray(
      content
        .learningObjectives,
    )
      ? content
          .learningObjectives
      : [];

  const detailedContent =
    content
      .detailedContent ||
    chapter
      ?.detailedContent ||
    "";

  const keyPoints =
    Array.isArray(
      content.keyPoints,
    )
      ? content
          .keyPoints
      : [];

  const statutoryProvisions =
    Array.isArray(
      content
        .statutoryProvisions,
    )
      ? content
          .statutoryProvisions
      : [];

  const importantCases =
    Array.isArray(
      content
        .importantCases,
    )
      ? content
          .importantCases
      : [];

  const examFocus =
    content.examFocus ||
    chapter?.examFocus ||
    "";

  const revisionNotes =
    content
      .revisionNotes ||
    chapter
      ?.revisionNotes ||
    "";

  const hasAcademicContent =
    Boolean(
      hasText(
        chapter
          ?.shortDescription,
      ) ||
        hasText(
          chapterOverview,
        ) ||
        learningObjectives.length >
          0 ||
        hasText(
          detailedContent,
        ) ||
        keyPoints.length >
          0 ||
        statutoryProvisions.length >
          0 ||
        importantCases.length >
          0 ||
        hasText(
          examFocus,
        ) ||
        hasText(
          revisionNotes,
        ) ||
        hasText(
          chapter?.notes,
        ),
    );

  // =========================================================
  // MAIN PDF
  // =========================================================

  const chapterPdfUrl =
    chapter?.pdf?.url ||
    chapter?.pdfUrl ||
    "";

  const chapterPdfFileName =
    chapter?.pdf
      ?.fileName ||
    chapter
      ?.pdfFileName ||
    "Chapter Study Material.pdf";

  const chapterPdfFileSize =
    chapter?.pdf
      ?.fileSize ||
    chapter
      ?.pdfFileSize ||
    0;

  const hasChapterPdf =
    Boolean(
      chapterPdfUrl,
    );

  // =========================================================
  // CHAPTER POSITION
  // =========================================================

  const currentIndex =
    useMemo(
      () =>
        chapters.findIndex(
          (item) =>
            item.id ===
            chapter?.id,
        ),
      [
        chapters,
        chapter?.id,
      ],
    );

  const previousChapter =
    currentIndex > 0
      ? chapters[
          currentIndex -
            1
        ]
      : null;

  const nextChapter =
    currentIndex >=
      0 &&
    currentIndex <
      chapters.length -
        1
      ? chapters[
          currentIndex +
            1
        ]
      : null;

  // =========================================================
  // COMPLETED RESOURCE IDS
  // =========================================================

  const completedResourceIds =
    Array.isArray(
      progress
        ?.resources
        ?.completedIds,
    )
      ? progress
          .resources
          .completedIds
      : [];

  // =========================================================
  // RESOURCE COMPLETE
  // =========================================================

  const handleResourceComplete =
    async (
      resourceId,
    ) => {
      if (
        !enrolled ||
        !course?.id ||
        !resourceId
      ) {
        return;
      }

      try {
        setResourceCompletingId(
          resourceId,
        );

        setError(
          "",
        );

        const updated =
          await markResourceComplete({
            studentId,

            courseId:
              course.id,

            chapterId:
              chapter.id,

            resourceId,

            totalResources:
              resources.length,

            updatedBy:
              studentId,
          });

        setProgress(
          updated,
        );
      } catch (
        progressError
      ) {
        console.error(
          "Unable to update resource progress:",
          progressError,
        );

        setError(
          progressError
            ?.message ||
            "Unable to update learning progress.",
        );
      } finally {
        setResourceCompletingId(
          "",
        );
      }
    };

  // =========================================================
  // CHAPTER COMPLETE
  // =========================================================

  const handleChapterComplete =
    async () => {
      if (!enrolled) {
        return;
      }

      try {
        setCompleting(
          true,
        );

        setError(
          "",
        );

        const updated =
          await markChapterComplete(
            studentId,
            chapter.id,
            studentId,
          );

        setProgress(
          updated,
        );
      } catch (
        completeError
      ) {
        console.error(
          "Unable to complete chapter:",
          completeError,
        );

        setError(
          completeError
            ?.message ||
            "Unable to complete chapter.",
        );
      } finally {
        setCompleting(
          false,
        );
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
      getChapterLearningPath(
        course.slug,
        targetChapter,
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

  if (!canReadPdf) {
    return (
      <div className="ns-learning-page">
        <PageHeader
          title="Course Enrollment Required"
          description={course.title}
          breadcrumbs={["Student", "Available Courses", course.title]}
        />
        <Card>
          <div style={{ textAlign: "center", padding: "28px 16px" }}>
            <FaLock style={{ color: "#d97706", fontSize: 38, marginBottom: 14 }} />
            <h2 style={{ margin: "0 0 10px" }}>Pay ₹49 to unlock this course</h2>
            <p style={{ color: "#64748b", margin: "0 0 20px" }}>
              Chapter content is available only after successful enrollment payment for this individual course.
            </p>
            <Button onClick={() => navigate(`/student/courses/${course.slug}#certification-enrollment`)}>
              Go to Course Enrollment
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="ns-learning-page">
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
          ACCESS / PROGRESS
      ====================================================== */}

      <div className="ns-learning-progress-summary">
        <div>
          <span>
            {enrolled
              ? "Chapter Progress"
              : "Learning Access"}
          </span>

          <strong>
            {enrolled
              ? `${Number(
                  progress
                    ?.progressPercentage ||
                    0,
                )}%`
              : "Read Only"}
          </strong>
        </div>

        {enrolled ? (
          <div className="ns-learning-progress-track">
            <div
              style={{
                width:
                  `${Number(
                    progress
                      ?.progressPercentage ||
                      0,
                  )}%`,
              }}
            />
          </div>
        ) : (
          <div className="ns-read-only-message">
            <FaLock />

            <span>
              You may read this chapter. Enroll in the certification programme to unlock downloads, tests and progress tracking.
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          ACADEMIC CONTENT
      ====================================================== */}

      {hasAcademicContent && (
        <div className="ns-academic-content">
          {hasText(
            chapter
              .shortDescription,
          ) && (
            <AcademicSection
              icon={
                <FaBookOpen />
              }
              eyebrow="Chapter Introduction"
              title="About This Chapter"
            >
              <ContentText>
                {
                  chapter
                    .shortDescription
                }
              </ContentText>
            </AcademicSection>
          )}

          {hasText(
            chapterOverview,
          ) && (
            <AcademicSection
              icon={
                <FaBookOpen />
              }
              eyebrow="Overview"
              title="Chapter Overview"
            >
              <ContentText>
                {
                  chapterOverview
                }
              </ContentText>
            </AcademicSection>
          )}

          {learningObjectives.length >
            0 && (
            <AcademicSection
              icon={
                <FaGraduationCap />
              }
              eyebrow="What You Will Learn"
              title="Learning Objectives"
            >
              <div className="ns-objective-grid">
                {learningObjectives.map(
                  (
                    objective,
                    index,
                  ) => (
                    <div
                      key={`${objective}-${index}`}
                      className="ns-objective-item"
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
            </AcademicSection>
          )}

          {hasText(
            detailedContent,
          ) && (
            <AcademicSection
              icon={
                <FaFileAlt />
              }
              eyebrow="Study Notes"
              title="Detailed Chapter Content"
            >
              <ContentText
                large
              >
                {
                  detailedContent
                }
              </ContentText>
            </AcademicSection>
          )}

          {keyPoints.length >
            0 && (
            <AcademicSection
              icon={
                <FaLightbulb />
              }
              eyebrow="Remember"
              title="Key Points"
              tone="highlight"
            >
              <div className="ns-key-points">
                {keyPoints.map(
                  (
                    point,
                    index,
                  ) => (
                    <div
                      key={`${point}-${index}`}
                      className="ns-key-point"
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
            </AcademicSection>
          )}

          {statutoryProvisions.length >
            0 && (
            <AcademicSection
              icon={
                <FaLandmark />
              }
              eyebrow="Legal References"
              title="Important Statutory Provisions"
            >
              <div className="ns-provision-list">
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
                      className="ns-provision-card"
                    >
                      <div className="ns-provision-number">
                        {index +
                          1}
                      </div>

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
                          <div className="ns-provision-badge">
                            {
                              item.provision
                            }
                          </div>
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
            </AcademicSection>
          )}

          {importantCases.length >
            0 && (
            <AcademicSection
              icon={
                <FaBalanceScale />
              }
              eyebrow="Case Law"
              title="Important Cases & Judgments"
            >
              <div className="ns-case-list">
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
                      className="ns-case-card"
                    >
                      <div className="ns-case-index">
                        Case{" "}
                        {index +
                          1}
                      </div>

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
                        <div className="ns-case-citation">
                          {
                            item.citation
                          }
                        </div>
                      )}

                      {hasText(
                        item.principle,
                      ) && (
                        <div className="ns-case-principle">
                          <strong>
                            Principle
                          </strong>

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
                        <div className="ns-case-summary">
                          <strong>
                            Case Summary
                          </strong>

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
            </AcademicSection>
          )}

          {hasText(
            examFocus,
          ) && (
            <AcademicSection
              icon={
                <FaGraduationCap />
              }
              eyebrow="Examination Preparation"
              title="Exam Focus"
              tone="exam"
            >
              <ContentText>
                {
                  examFocus
                }
              </ContentText>
            </AcademicSection>
          )}

