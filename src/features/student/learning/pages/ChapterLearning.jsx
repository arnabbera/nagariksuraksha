import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaBalanceScale,
  FaBookOpen,
  FaCheck,
  FaCheckCircle,
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
  getStudentEnrollment,
} from "../../../../services/studentEnrollmentService";

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
// COMPONENT
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
    enrollmentChecked,
    setEnrollmentChecked,
  ] = useState(false);

  const [
    accessDenied,
    setAccessDenied,
  ] = useState(false);

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
  // LOAD LEARNING PAGE
  // =========================================================

  useEffect(() => {
    if (
      !courseSlug ||
      !chapterId ||
      !studentId
    ) {
      return;
    }

    loadLearningPage();
  }, [
    courseSlug,
    chapterId,
    studentId,
    isAdmin,
  ]);

  const loadLearningPage =
    async () => {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        setAccessDenied(
          false,
        );

        setEnrollmentChecked(
          false,
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

        // =====================================================
        // STEP 1
        // RESOLVE COURSE ONLY
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
        // STEP 2
        // CHECK ENROLLMENT BEFORE LOADING CHAPTER / PDF
        // =====================================================
        //
        // IMPORTANT:
        //
        // Normal students must be enrolled before we request:
        //
        // - chapter document
        // - chapter PDF URL
        // - chapter resources
        // - chapter progress
        //
        // Therefore getChapterById() is deliberately NOT
        // called until this check has passed.
        // =====================================================

        let enrollmentData =
          null;

        if (!isAdmin) {
          enrollmentData =
            await getStudentEnrollment(
              studentId,
              realCourseId,
            );

          setEnrollment(
            enrollmentData ||
              null,
          );

          setEnrollmentChecked(
            true,
          );

          if (
            !isEnrollmentActive(
              enrollmentData,
            )
          ) {
            setAccessDenied(
              true,
            );

            // -----------------------------------------------
            // SECURITY:
            //
            // STOP HERE.
            //
            // No chapter document is loaded.
            // No PDF URL is loaded.
            // No resource document is loaded.
            // -----------------------------------------------

            return;
          }
        } else {
          setEnrollmentChecked(
            true,
          );
        }

        // =====================================================
        // STEP 3
        // ENROLLMENT PASSED
        // NOW LOAD LEARNING CONTENT
        // =====================================================

        const [
          chapterData,
          chapterList,
          resourceList,
          existingProgress,
        ] =
          await Promise.all([
            getChapterById(
              chapterId,
            ),

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

          setChapters(
            [],
          );

          setResources(
            [],
          );

          setProgress(
            null,
          );

          return;
        }

        setChapter(
          chapterData,
        );

        // =====================================================
        // PUBLISHED CHAPTER LIST
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
        // PROGRESS
        // =====================================================

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

                chapterId,
              },

              studentId,
            );

          setProgress(
            started,
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
    };

  // =========================================================
  // CERTIFICATION / DOWNLOAD ACCESS
  // =========================================================

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
  // IMPORTANT
  //
  // Reading:
  // Any valid enrolled student may read the PDF.
  //
  // Download:
  // Only Admin OR paid certification student with
  // explicit pdfDownload access.
  // =========================================================

  const canViewChapterPdf =
    Boolean(
      isAdmin ||
      isEnrollmentActive(
        enrollment,
      ),
    );

  const canDownloadChapterPdf =
    Boolean(
      isAdmin ||
      (
        certificationActive &&
        certificationPaid &&
        certificationPdfAccess
      ),
    );

  // =========================================================
  // ACADEMIC CONTENT
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
      ? content.keyPoints
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
  // PDF
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
  // COMPLETED RESOURCES
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
  // RESOURCE COMPLETION
  // =========================================================

  const handleResourceComplete =
    async (
      resourceId,
    ) => {
      if (
        !course?.id ||
        !resourceId ||
        !isEnrollmentActive(
          enrollment,
        )
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
  // CHAPTER COMPLETION
  // =========================================================

  const handleChapterComplete =
    async () => {
      if (
        !isAdmin &&
        !isEnrollmentActive(
          enrollment,
        )
      ) {
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
            chapterId,
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
        text="Checking course access..."
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
          <div className="ns-learning-error">
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
  // ENROLLMENT REQUIRED
  // =========================================================
  //
  // IMPORTANT:
  //
  // At this point NO chapter document / PDF URL has been
  // requested for the student.
  // =========================================================

  if (
    !isAdmin &&
    enrollmentChecked &&
    accessDenied
  ) {
    return (
      <div className="ns-learning-page">
        <PageHeader
          title="Enrollment Required"
          description={
            course.title
          }
          breadcrumbs={[
            "Student",
            "My Courses",
            course.title,
          ]}
        />

        <div className="ns-enrollment-lock">
          <div className="ns-enrollment-lock-icon">
            <FaLock />
          </div>

          <h2>
            Course Enrollment Required
          </h2>

          <p>
            You must enroll in this course before accessing chapter content, study materials, PDFs or learning resources.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate(
                `/student/courses/${course.slug}`,
              )
            }
          >
            <FaBookOpen />
            Go to Course
          </button>
        </div>

        <LearningStyles />
      </div>
    );
  }

  // =========================================================
  // CHAPTER NOT FOUND
  // =========================================================

  if (!chapter) {
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
          PROGRESS
      ====================================================== */}

      <div className="ns-learning-progress-summary">
        <div>
          <span>
            Chapter Progress
          </span>

          <strong>
            {Number(
              progress
                ?.progressPercentage ||
                0,
            )}
            %
          </strong>
        </div>

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

          {hasText(
            revisionNotes,
          ) && (
            <AcademicSection
              icon={
                <FaListUl />
              }
              eyebrow="Quick Study"
              title="Revision Notes"
              tone="revision"
            >
              <ContentText>
                {
                  revisionNotes
                }
              </ContentText>
            </AcademicSection>
          )}

          {hasText(
            chapter.notes,
          ) && (
            <AcademicSection
              icon={
                <FaFileAlt />
              }
              eyebrow="Additional Notes"
              title="Chapter Notes"
            >
              <ContentText>
                {
                  chapter.notes
                }
              </ContentText>
            </AcademicSection>
          )}
        </div>
      )}

      {/* =====================================================
          STUDY MATERIAL HEADER
      ====================================================== */}

      {((
        hasChapterPdf &&
        canViewChapterPdf
      ) ||
        resources.length >
          0) && (
        <div className="ns-study-material-heading">
          <div className="ns-study-material-icon">
            <FaBookOpen />
          </div>

          <div>
            <span>
              Learning Resources
            </span>

            <h2>
              Chapter Study Material
            </h2>

            <p>
              Read the PDF and complete the additional learning resources below.
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          MAIN CHAPTER PDF
      ====================================================== */}

      {hasChapterPdf &&
        canViewChapterPdf && (
          <div className="ns-chapter-pdf-section">
            <div className="ns-chapter-pdf-heading">
              <div className="ns-chapter-pdf-title">
                <div className="ns-chapter-pdf-icon">
                  <FaFilePdf />
                </div>

                <div>
                  <h2>
                    Chapter PDF
                  </h2>

                  <p>
                    Read the complete study material below.
                  </p>
                </div>
              </div>

              <div className="ns-chapter-pdf-file">
                <strong>
                  {
                    chapterPdfFileName
                  }
                </strong>

                {chapterPdfFileSize >
                  0 && (
                  <span>
                    {formatFileSize(
                      chapterPdfFileSize,
                    )}
                  </span>
                )}
              </div>
            </div>

            {/* ===============================================
                PDF URL IS ONLY INSERTED AFTER ENROLLMENT
            ================================================ */}

            <div className="ns-pdf-reader">
              <iframe
                src={`${chapterPdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                title={`${chapter.title} PDF`}
              />
            </div>

            <div className="ns-pdf-access">
              {canDownloadChapterPdf ? (
                <a
                  href={
                    chapterPdfUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="ns-pdf-download"
                >
                  <FaFilePdf />

                  Download PDF
                </a>
              ) : (
                <div className="ns-pdf-locked">
                  <FaLock />

                  <div>
                    <strong>
                      Read-only study material
                    </strong>

                    <span>
                      PDF download is available only with eligible paid certification access.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      {/* =====================================================
          ADDITIONAL RESOURCES
      ====================================================== */}

      <div className="ns-learning-resource-list">
        {resources.map(
          (
            resource,
          ) => {
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
                  <div className="ns-resource-pdf">
                    <div className="ns-resource-pdf-label">
                      <FaFilePdf />

                      <span>
                        Read-only PDF resource
                      </span>

                      <FaLock />
                    </div>

                    <div className="ns-resource-pdf-reader">
                      <iframe
                        src={`${resource.file.url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                        title={`${resource.title} PDF`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {resource.type ===
                  "link" &&
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
                  </a>
                )}

                {resource.type ===
                  "download" &&
                  resource.file
                    ?.url && (
                  canDownloadChapterPdf ? (
                    <a
                      href={
                        resource.file
                          .url
                      }
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="ns-learning-link"
                    >
                      <FaFileAlt />
                      Download Resource
                    </a>
                  ) : (
                    <div className="ns-protected-download">
                      <FaLock />

                      <div>
                        <strong>
                          Protected download
                        </strong>

                        <span>
                          Download access is reserved for eligible paid certification students.
                        </span>
                      </div>
                    </div>
                  )
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
        )}
      </div>

      {/* =====================================================
          CHAPTER NAVIGATION
      ====================================================== */}

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

      <LearningStyles />
    </div>
  );
}

// =========================================================
// ACADEMIC SECTION
// =========================================================

function AcademicSection({
  icon,
  eyebrow,
  title,
  tone = "",
  children,
}) {
  return (
    <section
      className={`ns-academic-section ${tone}`}
    >
      <div className="ns-academic-header">
        <div className="ns-academic-icon">
          {icon}
        </div>

        <div className="ns-academic-heading">
          <span>
            {eyebrow}
          </span>

          <h2>
            {title}
          </h2>
        </div>
      </div>

      <div className="ns-academic-body">
        {children}
      </div>
    </section>
  );
}

// =========================================================
// TEXT CONTENT
// =========================================================

function ContentText({
  children,
  large = false,
}) {
  return (
    <div
      className={`ns-content-text ${
        large
          ? "large"
          : ""
      }`}
    >
      {children}
    </div>
  );
}

// =========================================================
// STYLES
// =========================================================

function LearningStyles() {
  return (
    <style>
      {`
        .ns-learning-page {
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
        }

        /* ================================================
           ENROLLMENT LOCK
        ================================================= */

        .ns-enrollment-lock {
          display: flex;
          max-width: 720px;
          margin: 40px auto;
          align-items: center;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #ffffff;
          padding: 42px 28px;
          text-align: center;
          box-shadow:
            0 8px 28px
            rgba(15, 23, 42, .06);
        }

        .ns-enrollment-lock-icon {
          display: flex;
          width: 66px;
          height: 66px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff7ed;
          color: #ea580c;
          font-size: 27px;
        }

        .ns-enrollment-lock h2 {
          margin: 20px 0 8px;
          color: #0f172a;
          font-size: 22px;
        }

        .ns-enrollment-lock p {
          max-width: 520px;
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .ns-enrollment-lock button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          border: none;
          border-radius: 10px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          padding: 11px 17px;
          font-weight: 700;
        }

        /* ================================================
           PROGRESS
        ================================================= */

        .ns-learning-progress-summary {
          margin-bottom: 24px;
          border: 1px solid #dbeafe;
          border-radius: 14px;
          background: #eff6ff;
          padding: 16px 20px;
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
        }

        /* ================================================
           ACADEMIC CONTENT
        ================================================= */

        .ns-academic-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .ns-academic-section {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
        }

        .ns-academic-section.highlight {
          border-color: #fde68a;
          background: #fffbeb;
        }

        .ns-academic-section.exam {
          border-color: #bfdbfe;
          background: #f8fbff;
        }

        .ns-academic-section.revision {
          border-color: #c7d2fe;
          background: #fafaff;
        }

        .ns-academic-header {
          display: flex;
          align-items: center;
          gap: 13px;
          border-bottom: 1px solid #e2e8f0;
          padding: 17px 20px;
        }

        .ns-academic-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 18px;
        }

        .ns-academic-heading span {
          display: block;
          margin-bottom: 2px;
          color: #2563eb;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .ns-academic-heading h2 {
          margin: 0;
          color: #0f172a;
          font-size: 17px;
        }

        .ns-academic-body {
          padding: 20px;
        }

        .ns-content-text {
          color: #334155;
          font-size: 14px;
          line-height: 1.85;
          white-space: pre-line;
        }

        .ns-content-text.large {
          line-height: 1.95;
        }

        .ns-objective-grid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .ns-objective-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border: 1px solid #dbeafe;
          border-radius: 11px;
          background: #f8fbff;
          padding: 12px;
        }

        .ns-objective-item > span {
          display: flex;
          width: 23px;
          height: 23px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          font-size: 9px;
        }

        .ns-objective-item p {
          margin: 1px 0 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.55;
        }

        .ns-key-points {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .ns-key-point {
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }

        .ns-key-point > span {
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

        .ns-key-point p {
          margin: 2px 0 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.6;
        }

        .ns-provision-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ns-provision-card {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
          padding: 14px;
        }

        .ns-provision-number {
          display: flex;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #0f172a;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }

        .ns-provision-card h3 {
          margin: 0 0 6px;
          color: #0f172a;
          font-size: 14px;
        }

        .ns-provision-badge {
          display: inline-flex;
          margin-bottom: 7px;
          border-radius: 999px;
          background: #dbeafe;
          color: #1d4ed8;
          padding: 4px 9px;
          font-size: 10px;
          font-weight: 800;
        }

        .ns-provision-card p {
          margin: 0;
          color: #475569;
          font-size: 12px;
          line-height: 1.7;
        }

        .ns-case-list {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .ns-case-card {
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          background: #f8fafc;
          padding: 16px;
        }

        .ns-case-index {
          margin-bottom: 8px;
          color: #64748b;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ns-case-card h3 {
          margin: 0;
          color: #0f172a;
          font-size: 15px;
        }

        .ns-case-citation {
          margin-top: 5px;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
        }

        .ns-case-principle,
        .ns-case-summary {
          margin-top: 12px;
        }

        .ns-case-principle strong,
        .ns-case-summary strong {
          display: block;
          margin-bottom: 4px;
          color: #334155;
          font-size: 10px;
          text-transform: uppercase;
        }

        .ns-case-principle p,
        .ns-case-summary p {
          margin: 0;
          color: #475569;
          font-size: 12px;
          line-height: 1.65;
        }

        /* ================================================
           STUDY MATERIAL
        ================================================= */

        .ns-study-material-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 35px 0 16px;
        }

        .ns-study-material-icon {
          display: flex;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #dbeafe;
          color: #2563eb;
          font-size: 20px;
        }

        .ns-study-material-heading span {
          color: #2563eb;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .ns-study-material-heading h2 {
          margin: 2px 0;
          color: #0f172a;
          font-size: 20px;
        }

        .ns-study-material-heading p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
        }

        /* ================================================
           PDF
        ================================================= */

        .ns-chapter-pdf-section {
          margin-bottom: 22px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
        }

        .ns-chapter-pdf-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .ns-chapter-pdf-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ns-chapter-pdf-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fee2e2;
          color: #dc2626;
          font-size: 21px;
        }

        .ns-chapter-pdf-title h2 {
          margin: 0;
          color: #0f172a;
          font-size: 16px;
        }

        .ns-chapter-pdf-title p {
          margin: 3px 0 0;
          color: #64748b;
          font-size: 12px;
        }

        .ns-chapter-pdf-file {
          display: flex;
          max-width: 45%;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
        }

        .ns-chapter-pdf-file strong {
          overflow: hidden;
          max-width: 100%;
          color: #334155;
          font-size: 11px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ns-chapter-pdf-file span {
          color: #94a3b8;
          font-size: 10px;
        }

        .ns-pdf-reader {
          width: 100%;
          height: min(82vh, 1000px);
          min-height: 650px;
          background: #334155;
        }

        .ns-pdf-reader iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          background: #ffffff;
        }

        .ns-pdf-access {
          padding: 13px 18px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .ns-pdf-locked {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #64748b;
        }

        .ns-pdf-locked div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ns-pdf-locked strong {
          color: #334155;
          font-size: 11px;
        }

        .ns-pdf-locked span {
          font-size: 10px;
        }

        .ns-pdf-download {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-radius: 9px;
          background: #2563eb;
          color: #ffffff;
          padding: 9px 13px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        /* ================================================
           RESOURCES
        ================================================= */

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

        .ns-resource-pdf {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          background: #ffffff;
        }

        .ns-resource-pdf-label {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          padding: 10px 12px;
          font-size: 11px;
          font-weight: 700;
        }

        .ns-resource-pdf-label svg:first-child {
          color: #dc2626;
        }

        .ns-resource-pdf-label svg:last-child {
          margin-left: auto;
        }

        .ns-resource-pdf-reader {
          width: 100%;
          height: min(70vh, 800px);
          min-height: 520px;
          background: #334155;
        }

        .ns-resource-pdf-reader iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .ns-protected-download {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          color: #64748b;
          padding: 11px 13px;
        }

        .ns-protected-download div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ns-protected-download strong {
          color: #334155;
          font-size: 11px;
        }

        .ns-protected-download span {
          font-size: 10px;
          line-height: 1.45;
        }

        .ns-learning-error {
          margin-bottom: 18px;
          border: 1px solid #fecaca;
          border-radius: 10px;
          background: #fef2f2;
          color: #b91c1c;
          padding: 12px;
        }

        @media (max-width: 768px) {
          .ns-objective-grid,
          .ns-case-list {
            grid-template-columns: 1fr;
          }

          .ns-chapter-pdf-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .ns-chapter-pdf-file {
            max-width: 100%;
            align-items: flex-start;
          }

          .ns-pdf-reader {
            height: 68vh;
            min-height: 430px;
          }

          .ns-resource-pdf-reader {
            height: 62vh;
            min-height: 400px;
          }

          .ns-learning-link,
          .ns-mark-resource-complete {
            box-sizing: border-box;
            width: 100%;
            justify-content: center;
          }

          .ns-enrollment-lock {
            margin: 24px 0;
            padding: 30px 18px;
          }
        }
      `}
    </style>
  );
}