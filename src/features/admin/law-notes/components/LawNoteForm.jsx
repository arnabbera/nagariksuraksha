import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaBookOpen,
  FaCheckCircle,
  FaFilePdf,
  FaSave,
  FaTimes,
  FaUpload,
} from "react-icons/fa";

import Button from "../../../../shared/components/Button";

import {
  useAuth,
} from "../../../../hooks/useAuth";

import {
  getAllCourses,
} from "../../../../services/courseService";

import {
  getActiveLawNotePdfAsset,
  uploadAndSaveLawNotePdf,
} from "../../../../services/lawNotePdfAssetService";

// =========================================================
// HELPERS
// =========================================================

const createEmptyForm = () => ({
  title: "",
  slug: "",

  subject: "",
  courseId: "",
  courseTitle: "",

  shortDescription: "",

  overview: "",
  detailedNotes: "",

  learningObjectives: "",
  keyPoints: "",
  statutoryProvisions: "",
  importantCases: "",

  examFocus: "",
  revisionNotes: "",

  featured: false,
  displayOrder: 0,

  status: "draft",

  seoTitle: "",
  seoDescription: "",
  focusKeyword: "",
  secondaryKeywords: "",
  canonicalUrl: "",

  seoIndex: true,
  seoFollow: true,

  sitemapInclude: true,
  sitemapPriority: 0.8,
  sitemapChangeFrequency: "monthly",
});

const arrayToText = (
  value,
) =>
  Array.isArray(value)
    ? value.join("\n")
    : "";

const textToArray = (
  value,
) =>
  String(value || "")
    .split(/\r?\n/)
    .map((item) =>
      item.trim(),
    )
    .filter(Boolean);

const normalizeSlug = (
  value = "",
) =>
  value
    .trim()
    .toLowerCase()
    .replace(
      /[^a-z0-9\s-]/g,
      "",
    )
    .replace(
      /\s+/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    );

const formatFileSize = (
  bytes,
) => {
  const size =
    Number(bytes || 0);

  if (!size) {
    return "Unknown size";
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
      size / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(2)} MB`;
};

// =========================================================
// COMPONENT
// =========================================================

export default function LawNoteForm({
  lawNote = null,
  saving = false,
  onSubmit,
  onCancel,
}) {
  const {
    profile,
    firebaseUser,
  } = useAuth();

  const [
    form,
    setForm,
  ] = useState(
    createEmptyForm(),
  );

  const [
    courses,
    setCourses,
  ] = useState([]);

  const [
    loadingCourses,
    setLoadingCourses,
  ] = useState(true);

  // =========================================================
  // PDF STATE
  // =========================================================

  const [
    selectedPdf,
    setSelectedPdf,
  ] = useState(null);

  const [
    pdfAsset,
    setPdfAsset,
  ] = useState(null);

  const [
    pdfTitle,
    setPdfTitle,
  ] = useState("");

  const [
    pdfDescription,
    setPdfDescription,
  ] = useState("");

  const [
    pdfUploading,
    setPdfUploading,
  ] = useState(false);

  const [
    pdfProgress,
    setPdfProgress,
  ] = useState(0);

  const [
    pdfMessage,
    setPdfMessage,
  ] = useState("");

  const [
    pdfError,
    setPdfError,
  ] = useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  // =========================================================
  // LOAD COURSES
  // =========================================================

  useEffect(() => {
    let active =
      true;

    const loadCourses =
      async () => {
        try {
          setLoadingCourses(
            true,
          );

          const result =
            await getAllCourses();

          if (!active) {
            return;
          }

          setCourses(
            Array.isArray(result)
              ? result.filter(
                  (
                    course,
                  ) =>
                    !course.deleted,
                )
              : [],
          );
        } catch (
          error
        ) {
          console.error(
            "Unable to load courses for law note form:",
            error,
          );

          if (
            active
          ) {
            setCourses([]);
          }
        } finally {
          if (
            active
          ) {
            setLoadingCourses(
              false,
            );
          }
        }
      };

    loadCourses();

    return () => {
      active =
        false;
    };
  }, []);

  // =========================================================
  // LOAD EDITING DATA
  // =========================================================

  useEffect(() => {
    if (
      !lawNote
    ) {
      setForm(
        createEmptyForm(),
      );

      setSelectedPdf(
        null,
      );

      setPdfAsset(
        null,
      );

      setPdfTitle(
        "",
      );

      setPdfDescription(
        "",
      );

      setPdfProgress(
        0,
      );

      setPdfMessage(
        "",
      );

      setPdfError(
        "",
      );

      return;
    }

    setForm({
      title:
        lawNote.title ||
        "",

      slug:
        lawNote.slug ||
        "",

      subject:
        lawNote.subject ||
        "",

      courseId:
        lawNote.courseId ||
        "",

      courseTitle:
        lawNote.courseTitle ||
        "",

      shortDescription:
        lawNote.shortDescription ||
        "",

      overview:
        lawNote
          ?.content
          ?.overview ||
        "",

      detailedNotes:
        lawNote
          ?.content
          ?.detailedNotes ||
        "",

      learningObjectives:
        arrayToText(
          lawNote
            ?.content
            ?.learningObjectives,
        ),

      keyPoints:
        arrayToText(
          lawNote
            ?.content
            ?.keyPoints,
        ),

      statutoryProvisions:
        arrayToText(
          lawNote
            ?.content
            ?.statutoryProvisions,
        ),

      importantCases:
        arrayToText(
          lawNote
            ?.content
            ?.importantCases,
        ),

      examFocus:
        lawNote
          ?.content
          ?.examFocus ||
        "",

      revisionNotes:
        lawNote
          ?.content
          ?.revisionNotes ||
        "",

      featured:
        Boolean(
          lawNote.featured,
        ),

      displayOrder:
        Number(
          lawNote.displayOrder ||
            0,
        ),

      status:
        lawNote.status ||
        "draft",

      seoTitle:
        lawNote
          ?.seo
          ?.title ||
        "",

      seoDescription:
        lawNote
          ?.seo
          ?.description ||
        "",

      focusKeyword:
        lawNote
          ?.seo
          ?.focusKeyword ||
        "",

      secondaryKeywords:
        Array.isArray(
          lawNote
            ?.seo
            ?.secondaryKeywords,
        )
          ? lawNote.seo.secondaryKeywords.join(
              ", ",
            )
          : "",

      canonicalUrl:
        lawNote
          ?.seo
          ?.canonicalUrl ||
        "",

      seoIndex:
        lawNote
          ?.seo
          ?.robots
          ?.index ??
        true,

      seoFollow:
        lawNote
          ?.seo
          ?.robots
          ?.follow ??
        true,

      sitemapInclude:
        lawNote
          ?.seo
          ?.sitemap
          ?.include ??
        true,

      sitemapPriority:
        Number(
          lawNote
            ?.seo
            ?.sitemap
            ?.priority ??
            0.8,
        ),

      sitemapChangeFrequency:
        lawNote
          ?.seo
          ?.sitemap
          ?.changeFrequency ||
        "monthly",
    });
  }, [
    lawNote,
  ]);

  // =========================================================
  // LOAD ACTIVE PDF
  // =========================================================

  useEffect(() => {
    if (
      !lawNote?.id
    ) {
      setPdfAsset(
        null,
      );

      return;
    }

    let active =
      true;

    const loadPdf =
      async () => {
        try {
          setPdfError(
            "",
          );

          const result =
            await getActiveLawNotePdfAsset(
              lawNote.id,
            );

          if (
            active
          ) {
            setPdfAsset(
              result ||
                null,
            );

            if (
              result
            ) {
              setPdfTitle(
                result.title ||
                  "",
              );

              setPdfDescription(
                result.description ||
                  "",
              );
            }
          }
        } catch (
          error
        ) {
          console.error(
            "Unable to load law note PDF:",
            error,
          );

          if (
            active
          ) {
            setPdfError(
              "Unable to load the current PDF information.",
            );
          }
        }
      };

    loadPdf();

    return () => {
      active =
        false;
    };
  }, [
    lawNote?.id,
  ]);

  // =========================================================
  // SELECTED COURSE
  // =========================================================

  const selectedCourse =
    useMemo(
      () =>
        courses.find(
          (
            course,
          ) =>
            course.id ===
            form.courseId,
        ) || null,
      [
        courses,
        form.courseId,
      ],
    );

  // =========================================================
  // FIELD CHANGE
  // =========================================================

  const updateField = (
    field,
    value,
  ) => {
    setForm(
      (
        current,
      ) => ({
        ...current,
        [field]:
          value,
      }),
    );
  };

  const handleTitleChange =
    (
      event,
    ) => {
      const title =
        event.target.value;

      setForm(
        (
          current,
        ) => ({
          ...current,

          title,

          slug:
            lawNote
              ? current.slug
              : normalizeSlug(
                  title,
                ),
        }),
      );
    };

  const handleCourseChange =
    (
      event,
    ) => {
      const courseId =
        event.target.value;

      const course =
        courses.find(
          (
            item,
          ) =>
            item.id ===
            courseId,
        );

      setForm(
        (
          current,
        ) => ({
          ...current,

          courseId,

          courseTitle:
            course?.title ||
            "",
        }),
      );
    };

  // =========================================================
  // PDF SELECTION
  // =========================================================

  const handlePdfSelection =
    (
      event,
    ) => {
      setPdfError(
        "",
      );

      setPdfMessage(
        "",
      );

      setPdfProgress(
        0,
      );

      const file =
        event.target.files?.[0];

      if (
        !file
      ) {
        setSelectedPdf(
          null,
        );

        return;
      }

      const isPdf =
        file.type ===
          "application/pdf" ||
        file.name
          ?.toLowerCase()
          .endsWith(
            ".pdf",
          );

      if (
        !isPdf
      ) {
        setSelectedPdf(
          null,
        );

        setPdfError(
          "Please select a PDF file only.",
        );

        event.target.value =
          "";

        return;
      }

      const maxSize =
        25 *
        1024 *
        1024;

      if (
        file.size >
        maxSize
      ) {
        setSelectedPdf(
          null,
        );

        setPdfError(
          "The PDF must be 25 MB or smaller.",
        );

        event.target.value =
          "";

        return;
      }

      setSelectedPdf(
        file,
      );

      if (
        !pdfTitle
      ) {
        setPdfTitle(
          lawNote?.title ||
            form.title ||
            file.name,
        );
      }
    };

  // =========================================================
  // PDF UPLOAD
  // =========================================================

  const handlePdfUpload =
    async () => {
      if (
        !lawNote?.id
      ) {
        setPdfError(
          "Please create and save the Law Note before uploading its PDF.",
        );

        return;
      }

      if (
        !selectedPdf
      ) {
        setPdfError(
          "Please select a PDF file first.",
        );

        return;
      }

      try {
        setPdfUploading(
          true,
        );

        setPdfProgress(
          0,
        );

        setPdfMessage(
          "",
        );

        setPdfError(
          "",
        );

        const result =
          await uploadAndSaveLawNotePdf({
            file:
              selectedPdf,

            lawNoteId:
              lawNote.id,

            lawNoteSlug:
              lawNote.slug ||
              form.slug,

            courseId:
              form.courseId ||
              lawNote.courseId ||
              "",

            courseTitle:
              selectedCourse
                ?.title ||
              form.courseTitle ||
              lawNote.courseTitle ||
              "",

            title:
              pdfTitle ||
              lawNote.title,

            description:
              pdfDescription,

            uploadedBy:
              currentUserId,

            onProgress: (
              progress,
            ) =>
              setPdfProgress(
                progress,
              ),
          });

        setPdfAsset(
          result,
        );

        setSelectedPdf(
          null,
        );

        setPdfProgress(
          100,
        );

        setPdfMessage(
          "PDF uploaded successfully.",
        );
      } catch (
        error
      ) {
        console.error(
          "Unable to upload law note PDF:",
          error,
        );

        setPdfError(
          error?.message ||
            "Unable to upload the PDF.",
        );
      } finally {
        setPdfUploading(
          false,
        );
      }
    };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit =
    async (
      event,
    ) => {
      event.preventDefault();

      if (
        !form.title.trim()
      ) {
        window.alert(
          "Law note title is required.",
        );

        return;
      }

      const payload = {
        title:
          form.title.trim(),

        slug:
          normalizeSlug(
            form.slug ||
              form.title,
          ),

        subject:
          form.subject.trim(),

        courseId:
          form.courseId,

        courseTitle:
          selectedCourse
            ?.title ||
          form.courseTitle ||
          "",

        shortDescription:
          form.shortDescription.trim(),

        overview:
          form.overview.trim(),

        detailedNotes:
          form.detailedNotes.trim(),

        learningObjectives:
          textToArray(
            form.learningObjectives,
          ),

        keyPoints:
          textToArray(
            form.keyPoints,
          ),

        statutoryProvisions:
          textToArray(
            form.statutoryProvisions,
          ),

        importantCases:
          textToArray(
            form.importantCases,
          ),

        examFocus:
          form.examFocus.trim(),

        revisionNotes:
          form.revisionNotes.trim(),

        featured:
          Boolean(
            form.featured,
          ),

        displayOrder:
          Number(
            form.displayOrder ||
              0,
          ),

        status:
          form.status,

        seo: {
          title:
            form.seoTitle.trim(),

          description:
            form.seoDescription.trim(),

          focusKeyword:
            form.focusKeyword.trim(),

          secondaryKeywords:
            form.secondaryKeywords
              .split(",")
              .map(
                (
                  keyword,
                ) =>
                  keyword.trim(),
              )
              .filter(Boolean),

          canonicalUrl:
            form.canonicalUrl.trim(),

          robots: {
            index:
              Boolean(
                form.seoIndex,
              ),

            follow:
              Boolean(
                form.seoFollow,
              ),
          },

          sitemap: {
            include:
              Boolean(
                form.sitemapInclude,
              ),

            priority:
              Number(
                form.sitemapPriority ||
                  0.8,
              ),

            changeFrequency:
              form.sitemapChangeFrequency ||
              "monthly",
          },
        },
      };

      await onSubmit?.(
        payload,
      );
    };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <form
      className="ns-law-note-form"
      onSubmit={
        handleSubmit
      }
    >
      {/* =====================================================
          BASIC INFORMATION
      ====================================================== */}

      <section className="ns-law-note-form-section">
        <div className="ns-law-note-form-heading">
          <FaBookOpen />

          <div>
            <h3>
              Basic Information
            </h3>

            <p>
              Define the public legal topic
              and its related course.
            </p>
          </div>
        </div>

        <div className="ns-law-note-form-grid">
          <label>
            <span>
              Title *
            </span>

            <input
              value={
                form.title
              }
              onChange={
                handleTitleChange
              }
              placeholder="e.g. Nature and Principles of Torts"
            />
          </label>

          <label>
            <span>
              Slug *
            </span>

            <input
              value={
                form.slug
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "slug",
                  normalizeSlug(
                    event.target
                      .value,
                  ),
                )
              }
              placeholder="nature-and-principles-of-torts"
            />
          </label>

          <label>
            <span>
              Subject
            </span>

            <input
              value={
                form.subject
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "subject",
                  event.target
                    .value,
                )
              }
              placeholder="Law of Torts"
            />
          </label>

          <label>
            <span>
              Related Course
            </span>

            <select
              value={
                form.courseId
              }
              onChange={
                handleCourseChange
              }
              disabled={
                loadingCourses
              }
            >
              <option value="">
                No course selected
              </option>

              {courses.map(
                (
                  course,
                ) => (
                  <option
                    key={
                      course.id
                    }
                    value={
                      course.id
                    }
                  >
                    {
                      course.title
                    }
                  </option>
                ),
              )}
            </select>
          </label>

          <label className="ns-law-note-full">
            <span>
              Short Description
            </span>

            <textarea
              rows={3}
              value={
                form.shortDescription
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "shortDescription",
                  event.target
                    .value,
                )
              }
              placeholder="Short public summary for cards and Google snippets."
            />
          </label>
        </div>
      </section>

      {/* =====================================================
          PDF STUDY MATERIAL
      ====================================================== */}

      <section className="ns-law-note-form-section ns-law-note-pdf-section">
        <div className="ns-law-note-form-heading">
          <FaFilePdf />

          <div>
            <h3>
              PDF Study Material
            </h3>

            <p>
              Upload the PDF study material
              associated with this Law Note.
            </p>
          </div>
        </div>

        {!lawNote?.id && (
          <div className="ns-law-note-pdf-notice">
            <FaFilePdf />

            <div>
              <strong>
                Save the Law Note first
              </strong>

              <p>
                Create this Law Note first.
                After saving, click Edit and
                upload the PDF study material.
              </p>
            </div>
          </div>
        )}

        {lawNote?.id && (
          <>
            {pdfAsset && (
              <div className="ns-law-note-current-pdf">
                <div className="ns-law-note-current-pdf-icon">
                  <FaFilePdf />
                </div>

                <div className="ns-law-note-current-pdf-copy">
                  <span>
                    Current PDF
                  </span>

                  <strong>
                    {pdfAsset.originalFileName ||
                      pdfAsset.title ||
                      "Law Note PDF"}
                  </strong>

                  <small>
                    {formatFileSize(
                      pdfAsset.size,
                    )}
                  </small>
                </div>

                <div className="ns-law-note-current-pdf-status">
                  <FaCheckCircle />
                  Active
                </div>
              </div>
            )}

            <div className="ns-law-note-form-grid">
              <label className="ns-law-note-full">
                <span>
                  PDF Title
                </span>

                <input
                  value={
                    pdfTitle
                  }
                  onChange={(
                    event,
                  ) =>
                    setPdfTitle(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Study Material – Nature and Principles of Torts"
                />
              </label>

              <label className="ns-law-note-full">
                <span>
                  PDF Description
                </span>

                <textarea
                  rows={3}
                  value={
                    pdfDescription
                  }
                  onChange={(
                    event,
                  ) =>
                    setPdfDescription(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Optional description of the attached PDF."
                />
              </label>

              <label className="ns-law-note-full ns-law-note-file-field">
                <span>
                  Select PDF
                </span>

                <input
                  type="file"
                  accept="application/pdf,.pdf"
                  onChange={
                    handlePdfSelection
                  }
                  disabled={
                    pdfUploading
                  }
                />

                <small>
                  PDF only. Maximum file size:
                  25 MB.
                </small>
              </label>
            </div>

            {selectedPdf && (
              <div className="ns-law-note-selected-pdf">
                <FaFilePdf />

                <div>
                  <strong>
                    {
                      selectedPdf.name
                    }
                  </strong>

                  <span>
                    {formatFileSize(
                      selectedPdf.size,
                    )}
                  </span>
                </div>
              </div>
            )}

            {pdfUploading && (
              <div className="ns-law-note-upload-progress">
                <div className="ns-law-note-upload-progress-heading">
                  <span>
                    Uploading PDF...
                  </span>

                  <strong>
                    {
                      pdfProgress
                    }
                    %
                  </strong>
                </div>

                <div className="ns-law-note-upload-track">
                  <div
                    className="ns-law-note-upload-fill"
                    style={{
                      width:
                        `${pdfProgress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {pdfMessage && (
              <div className="ns-law-note-pdf-message success">
                <FaCheckCircle />

                {
                  pdfMessage
                }
              </div>
            )}

            {pdfError && (
              <div className="ns-law-note-pdf-message error">
                {pdfError}
              </div>
            )}

            <button
              type="button"
              className="ns-law-note-upload-button"
              onClick={
                handlePdfUpload
              }
              disabled={
                pdfUploading ||
                !selectedPdf
              }
            >
              <FaUpload />

              {pdfUploading
                ? `Uploading ${pdfProgress}%`
                : pdfAsset
                  ? "Replace PDF"
                  : "Upload PDF"}
            </button>

            <div className="ns-law-note-pdf-security">
              <strong>
                Protected PDF metadata
              </strong>

              <p>
                The PDF URL is stored in the
                protected lawNotePdfAssets
                collection, not in the public
                SEO Law Note record.
              </p>
            </div>
          </>
        )}
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="ns-law-note-form-section">
        <div className="ns-law-note-form-heading">
          <FaBookOpen />

          <div>
            <h3>
              Law Note Content
            </h3>

            <p>
              This content is public and may
              be indexed by search engines.
            </p>
          </div>
        </div>

        <div className="ns-law-note-form-grid">
          <label className="ns-law-note-full">
            <span>
              Overview
            </span>

            <textarea
              rows={6}
              value={
                form.overview
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "overview",
                  event.target
                    .value,
                )
              }
              placeholder="Explain the legal topic and its importance."
            />
          </label>

          <label className="ns-law-note-full">
            <span>
              Detailed Notes
            </span>

            <textarea
              rows={10}
              value={
                form.detailedNotes
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "detailedNotes",
                  event.target
                    .value,
                )
              }
              placeholder="Detailed public study material."
            />
          </label>

          <label>
            <span>
              Learning Objectives
            </span>

            <textarea
              rows={7}
              value={
                form.learningObjectives
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "learningObjectives",
                  event.target
                    .value,
                )
              }
              placeholder={
                "One objective per line\nUnderstand the meaning of tort\nExplain tortious liability"
              }
            />

            <small>
              Enter one item per line.
            </small>
          </label>

          <label>
            <span>
              Key Points
            </span>

            <textarea
              rows={7}
              value={
                form.keyPoints
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "keyPoints",
                  event.target
                    .value,
                )
              }
              placeholder={
                "One key point per line\nTort is a civil wrong\nDamages are generally unliquidated"
              }
            />

            <small>
              Enter one item per line.
            </small>
          </label>

          <label>
            <span>
              Statutory Provisions
            </span>

            <textarea
              rows={7}
              value={
                form.statutoryProvisions
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "statutoryProvisions",
                  event.target
                    .value,
                )
              }
              placeholder="One provision per line."
            />
          </label>

          <label>
            <span>
              Important Cases
            </span>

            <textarea
              rows={7}
              value={
                form.importantCases
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "importantCases",
                  event.target
                    .value,
                )
              }
              placeholder="One case per line."
            />
          </label>

          <label className="ns-law-note-full">
            <span>
              Exam Focus
            </span>

            <textarea
              rows={5}
              value={
                form.examFocus
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "examFocus",
                  event.target
                    .value,
                )
              }
              placeholder="Important examination areas and likely questions."
            />
          </label>

          <label className="ns-law-note-full">
            <span>
              Quick Revision Notes
            </span>

            <textarea
              rows={5}
              value={
                form.revisionNotes
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "revisionNotes",
                  event.target
                    .value,
                )
              }
              placeholder="Short revision summary."
            />
          </label>
        </div>
      </section>

      {/* =====================================================
          PUBLICATION
      ====================================================== */}

      <section className="ns-law-note-form-section">
        <div className="ns-law-note-form-heading">
          <FaBookOpen />

          <div>
            <h3>
              Publication
            </h3>

            <p>
              Configure display order and
              publication status.
            </p>
          </div>
        </div>

        <div className="ns-law-note-form-grid">
          <label>
            <span>
              Display Order
            </span>

            <input
              type="number"
              min="0"
              value={
                form.displayOrder
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "displayOrder",
                  event.target
                    .value,
                )
              }
            />
          </label>

          <label>
            <span>
              Status
            </span>

            <select
              value={
                form.status
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "status",
                  event.target
                    .value,
                )
              }
            >
              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>

              <option value="archived">
                Archived
              </option>
            </select>
          </label>

          <label className="ns-law-note-checkbox">
            <input
              type="checkbox"
              checked={
                form.featured
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "featured",
                  event.target
                    .checked,
                )
              }
            />

            <span>
              Featured Law Note
            </span>
          </label>
        </div>
      </section>

      {/* =====================================================
          SEO
      ====================================================== */}

      <section className="ns-law-note-form-section">
        <div className="ns-law-note-form-heading">
          <FaBookOpen />

          <div>
            <h3>
              SEO
            </h3>

            <p>
              Optimize this public law note
              for search engines.
            </p>
          </div>
        </div>

        <div className="ns-law-note-form-grid">
          <label className="ns-law-note-full">
            <span>
              SEO Title
            </span>

            <input
              value={
                form.seoTitle
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "seoTitle",
                  event.target
                    .value,
                )
              }
              placeholder="Nature and Principles of Torts – LL.B Notes"
            />
          </label>

          <label className="ns-law-note-full">
            <span>
              Meta Description
            </span>

            <textarea
              rows={3}
              value={
                form.seoDescription
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "seoDescription",
                  event.target
                    .value,
                )
              }
              placeholder="SEO description for Google search results."
            />
          </label>

          <label>
            <span>
              Focus Keyword
            </span>

            <input
              value={
                form.focusKeyword
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "focusKeyword",
                  event.target
                    .value,
                )
              }
              placeholder="law of torts notes"
            />
          </label>

          <label>
            <span>
              Secondary Keywords
            </span>

            <input
              value={
                form.secondaryKeywords
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "secondaryKeywords",
                  event.target
                    .value,
                )
              }
              placeholder="LLB tort notes, tort law study material"
            />

            <small>
              Separate keywords with commas.
            </small>
          </label>

          <label className="ns-law-note-full">
            <span>
              Canonical URL
            </span>

            <input
              value={
                form.canonicalUrl
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "canonicalUrl",
                  event.target
                    .value,
                )
              }
              placeholder="/law-notes/nature-and-principles-of-torts"
            />
          </label>

          <label className="ns-law-note-checkbox">
            <input
              type="checkbox"
              checked={
                form.seoIndex
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "seoIndex",
                  event.target
                    .checked,
                )
              }
            />

            <span>
              Allow Search Indexing
            </span>
          </label>

          <label className="ns-law-note-checkbox">
            <input
              type="checkbox"
              checked={
                form.seoFollow
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "seoFollow",
                  event.target
                    .checked,
                )
              }
            />

            <span>
              Allow Link Following
            </span>
          </label>

          <label className="ns-law-note-checkbox">
            <input
              type="checkbox"
              checked={
                form.sitemapInclude
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "sitemapInclude",
                  event.target
                    .checked,
                )
              }
            />

            <span>
              Include in Sitemap
            </span>
          </label>

          <label>
            <span>
              Sitemap Priority
            </span>

            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={
                form.sitemapPriority
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "sitemapPriority",
                  event.target
                    .value,
                )
              }
            />
          </label>

          <label>
            <span>
              Change Frequency
            </span>

            <select
              value={
                form.sitemapChangeFrequency
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "sitemapChangeFrequency",
                  event.target
                    .value,
                )
              }
            >
              <option value="daily">
                Daily
              </option>

              <option value="weekly">
                Weekly
              </option>

              <option value="monthly">
                Monthly
              </option>

              <option value="yearly">
                Yearly
              </option>
            </select>
          </label>
        </div>
      </section>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="ns-law-note-form-actions">
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            leftIcon={
              <FaTimes />
            }
            onClick={
              onCancel
            }
            disabled={
              saving ||
              pdfUploading
            }
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          leftIcon={
            <FaSave />
          }
          disabled={
            saving ||
            pdfUploading
          }
        >
          {saving
            ? "Saving..."
            : lawNote
              ? "Update Law Note"
              : "Create Law Note"}
        </Button>
      </div>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>
        {`
          .ns-law-note-form,
          .ns-law-note-form * {
            box-sizing: border-box;
          }

          .ns-law-note-form {
            display: flex;
            min-width: 0;
            flex-direction: column;
            gap: 22px;
          }

          .ns-law-note-form-section {
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
          }

          .ns-law-note-form-section:last-of-type {
            border-bottom: 0;
          }

          .ns-law-note-form-heading {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 16px;
          }

          .ns-law-note-form-heading > svg {
            flex-shrink: 0;
            margin-top: 3px;
            color: #2563eb;
          }

          .ns-law-note-form-heading h3 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-law-note-form-heading p {
            margin: 3px 0 0;
            color: #64748b;
            font-size: 11px;
            line-height: 1.45;
          }

          .ns-law-note-form-grid {
            display: grid;
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
            gap: 15px;
          }

          .ns-law-note-form label {
            display: flex;
            min-width: 0;
            flex-direction: column;
            gap: 6px;
          }

          .ns-law-note-form label > span {
            color: #334155;
            font-size: 11px;
            font-weight: 700;
          }

          .ns-law-note-form input,
          .ns-law-note-form textarea,
          .ns-law-note-form select {
            width: 100%;
            min-width: 0;
            border: 1px solid #cbd5e1;
            border-radius: 9px;
            background: #ffffff;
            color: #0f172a;
            padding: 10px 11px;
            font: inherit;
            font-size: 12px;
            line-height: 1.5;
            outline: none;
          }

          .ns-law-note-form textarea {
            resize: vertical;
          }

          .ns-law-note-form input:focus,
          .ns-law-note-form textarea:focus,
          .ns-law-note-form select:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37,99,235,.10);
          }

          .ns-law-note-form small {
            color: #94a3b8;
            font-size: 9px;
            line-height: 1.4;
          }

          .ns-law-note-full {
            grid-column: 1 / -1;
          }

          .ns-law-note-checkbox {
            display: flex !important;
            min-height: 42px;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row !important;
            gap: 8px !important;
            padding: 9px 11px;
            border: 1px solid #e2e8f0;
            border-radius: 9px;
            background: #f8fafc;
          }

          .ns-law-note-checkbox input {
            width: auto;
            margin: 0;
          }

          /* PDF */

          .ns-law-note-pdf-section {
            padding: 18px;
            border: 1px solid #dbeafe;
            border-radius: 13px;
            background: #f8fbff;
          }

          .ns-law-note-pdf-notice {
            display: flex;
            align-items: flex-start;
            gap: 11px;
            padding: 14px;
            border: 1px solid #fde68a;
            border-radius: 10px;
            background: #fffbeb;
            color: #92400e;
          }

          .ns-law-note-pdf-notice > svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .ns-law-note-pdf-notice strong {
            display: block;
            font-size: 11px;
          }

          .ns-law-note-pdf-notice p {
            margin: 3px 0 0;
            font-size: 10px;
            line-height: 1.5;
          }

          .ns-law-note-current-pdf {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 11px;
            margin-bottom: 15px;
            padding: 13px;
            border: 1px solid #bbf7d0;
            border-radius: 10px;
            background: #f0fdf4;
          }

          .ns-law-note-current-pdf-icon {
            display: flex;
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #ffffff;
            color: #dc2626;
            font-size: 19px;
          }

          .ns-law-note-current-pdf-copy {
            min-width: 0;
            flex: 1;
          }

          .ns-law-note-current-pdf-copy span,
          .ns-law-note-current-pdf-copy strong,
          .ns-law-note-current-pdf-copy small {
            display: block;
          }

          .ns-law-note-current-pdf-copy span {
            color: #15803d;
            font-size: 8px;
            font-weight: 800;
            text-transform: uppercase;
          }

          .ns-law-note-current-pdf-copy strong {
            margin-top: 2px;
            overflow: hidden;
            color: #0f172a;
            font-size: 11px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-law-note-current-pdf-status {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            gap: 5px;
            color: #15803d;
            font-size: 9px;
            font-weight: 800;
          }

          .ns-law-note-selected-pdf {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 13px;
            padding: 11px;
            border-radius: 9px;
            background: #ffffff;
            color: #dc2626;
          }

          .ns-law-note-selected-pdf strong,
          .ns-law-note-selected-pdf span {
            display: block;
          }

          .ns-law-note-selected-pdf strong {
            color: #0f172a;
            font-size: 10px;
          }

          .ns-law-note-selected-pdf span {
            margin-top: 2px;
            color: #64748b;
            font-size: 9px;
          }

          .ns-law-note-upload-progress {
            margin-top: 13px;
          }

          .ns-law-note-upload-progress-heading {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            color: #475569;
            font-size: 9px;
          }

          .ns-law-note-upload-track {
            width: 100%;
            height: 7px;
            overflow: hidden;
            border-radius: 999px;
            background: #dbeafe;
          }

          .ns-law-note-upload-fill {
            height: 100%;
            border-radius: inherit;
            background: #2563eb;
            transition: width .2s ease;
          }

          .ns-law-note-pdf-message {
            display: flex;
            align-items: center;
            gap: 7px;
            margin-top: 12px;
            padding: 10px 12px;
            border-radius: 9px;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-law-note-pdf-message.success {
            background: #f0fdf4;
            color: #166534;
          }

          .ns-law-note-pdf-message.error {
            background: #fef2f2;
            color: #b91c1c;
          }

          .ns-law-note-upload-button {
            display: inline-flex;
            min-height: 40px;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-top: 13px;
            padding: 0 15px;
            border: 0;
            border-radius: 9px;
            background: #2563eb;
            color: #ffffff;
            cursor: pointer;
            font-size: 10px;
            font-weight: 800;
          }

          .ns-law-note-upload-button:disabled {
            cursor: not-allowed;
            opacity: .55;
          }

          .ns-law-note-pdf-security {
            margin-top: 12px;
            padding: 10px 12px;
            border-radius: 9px;
            background: #eef2ff;
          }

          .ns-law-note-pdf-security strong {
            display: block;
            color: #3730a3;
            font-size: 9px;
          }

          .ns-law-note-pdf-security p {
            margin: 3px 0 0;
            color: #6366f1;
            font-size: 9px;
            line-height: 1.5;
          }

          /* ACTIONS */

          .ns-law-note-form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            padding-top: 2px;
          }

          @media (max-width: 700px) {
            .ns-law-note-form-grid {
              grid-template-columns: 1fr;
            }

            .ns-law-note-full {
              grid-column: auto;
            }

            .ns-law-note-form-actions {
              flex-direction: column-reverse;
            }

            .ns-law-note-form-actions button {
              width: 100%;
            }

            .ns-law-note-current-pdf {
              align-items: flex-start;
              flex-wrap: wrap;
            }
          }
        `}
      </style>
    </form>
  );
}