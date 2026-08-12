import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaBookOpen,
  FaFilePdf,
  FaLandmark,
  FaPlus,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

import Button from "../../../../shared/components/Button";

const MAX_PDF_SIZE =
  25 * 1024 * 1024;

// =========================================================
// EMPTY FORM
// =========================================================

const EMPTY_FORM = {
  courseId: "",

  title: "",
  slug: "",

  shortDescription: "",

  chapterOverview: "",

  learningObjectivesText: "",

  detailedContent: "",

  keyPointsText: "",

  statutoryProvisions: [],

  importantCases: [],

  examFocus: "",

  revisionNotes: "",

  notes: "",

  chapterNumber: 1,
  displayOrder: 1,

  previewAvailable: false,
  published: false,
  status: "draft",

  // =======================================================
  // EXISTING PDF INFORMATION
  // =======================================================

  pdfUrl: "",
  pdfStoragePath: "",
  pdfPublicId: "",
  pdfFileName: "",
  pdfFileSize: 0,
  pdfContentType: "",
  pdfAssetId: "",
};

// =========================================================
// HELPERS
// =========================================================

const createSlug = (
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

const arrayToMultilineText = (
  values = [],
) =>
  Array.isArray(
    values,
  )
    ? values
        .filter(Boolean)
        .join("\n")
    : "";

const multilineTextToArray = (
  value = "",
) =>
  String(
    value || "",
  )
    .split(/\r?\n/)
    .map(
      (item) =>
        item.trim(),
    )
    .filter(Boolean);

// =========================================================
// NORMALIZE CHAPTER FOR EDITING
// =========================================================

const normalizeChapter = (
  chapter,
) => ({
  ...EMPTY_FORM,
  ...chapter,

  // =======================================================
  // ACADEMIC CONTENT
  // =======================================================

  chapterOverview:
    chapter?.content
      ?.overview ??
    chapter
      ?.chapterOverview ??
    "",

  learningObjectivesText:
    arrayToMultilineText(
      chapter?.content
        ?.learningObjectives ??
        chapter
          ?.learningObjectives ??
        [],
    ),

  detailedContent:
    chapter?.content
      ?.detailedContent ??
    chapter
      ?.detailedContent ??
    "",

  keyPointsText:
    arrayToMultilineText(
      chapter?.content
        ?.keyPoints ??
        chapter
          ?.keyPoints ??
        [],
    ),

  statutoryProvisions:
    Array.isArray(
      chapter?.content
        ?.statutoryProvisions,
    )
      ? chapter
          .content
          .statutoryProvisions
      : Array.isArray(
            chapter
              ?.statutoryProvisions,
          )
        ? chapter
            .statutoryProvisions
        : [],

  importantCases:
    Array.isArray(
      chapter?.content
        ?.importantCases,
    )
      ? chapter
          .content
          .importantCases
      : Array.isArray(
            chapter
              ?.importantCases,
          )
        ? chapter
            .importantCases
        : [],

  examFocus:
    chapter?.content
      ?.examFocus ??
    chapter?.examFocus ??
    "",

  revisionNotes:
    chapter?.content
      ?.revisionNotes ??
    chapter
      ?.revisionNotes ??
    "",

  // =======================================================
  // PDF
  // =======================================================

  pdfUrl:
    chapter?.pdf?.url ??
    chapter?.pdfUrl ??
    "",

  pdfStoragePath:
    chapter?.pdf
      ?.storagePath ??
    chapter
      ?.pdfStoragePath ??
    "",

  pdfPublicId:
    chapter?.pdf
      ?.publicId ??
    chapter
      ?.pdfPublicId ??
    "",

  pdfFileName:
    chapter?.pdf
      ?.fileName ??
    chapter
      ?.pdfFileName ??
    "",

  pdfFileSize:
    chapter?.pdf
      ?.fileSize ??
    chapter
      ?.pdfFileSize ??
    0,

  pdfContentType:
    chapter?.pdf
      ?.contentType ??
    chapter
      ?.pdfContentType ??
    "",

  pdfAssetId:
    chapter?.pdf
      ?.assetId ??
    chapter
      ?.pdfAssetId ??
    "",
});

// =========================================================
// COMPONENT
// =========================================================

export default function ChapterForm({
  courses = [],
  chapter = null,
  selectedCourseId = "",
  saving = false,
  uploadProgress = 0,
  uploadingPdf = false,
  onSubmit,
  onCancel,
}) {
  const pdfInputRef =
    useRef(null);

  const [
    form,
    setForm,
  ] =
    useState({
      ...EMPTY_FORM,

      courseId:
        selectedCourseId,
    });

  const [
    pdfFile,
    setPdfFile,
  ] =
    useState(null);

  const [
    removeExistingPdf,
    setRemoveExistingPdf,
  ] =
    useState(false);

  const [
    error,
    setError,
  ] =
    useState("");

  // =========================================================
  // LOAD / RESET FORM
  // =========================================================

  useEffect(
    () => {
      if (chapter) {
        setForm(
          normalizeChapter(
            chapter,
          ),
        );

        setPdfFile(
          null,
        );

        setRemoveExistingPdf(
          false,
        );

        if (
          pdfInputRef.current
        ) {
          pdfInputRef.current.value =
            "";
        }

        return;
      }

      setForm({
        ...EMPTY_FORM,

        courseId:
          selectedCourseId,
      });

      setPdfFile(
        null,
      );

      setRemoveExistingPdf(
        false,
      );

      if (
        pdfInputRef.current
      ) {
        pdfInputRef.current.value =
          "";
      }
    },
    [
      chapter,
      selectedCourseId,
    ],
  );

  // =========================================================
  // GENERAL FIELD UPDATE
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

  // =========================================================
  // TITLE
  // =========================================================

  const handleTitleChange = (
    value,
  ) => {
    setForm(
      (
        current,
      ) => ({
        ...current,

        title:
          value,

        slug:
          chapter ||
          current.slug
            ? current.slug
            : createSlug(
                value,
              ),
      }),
    );
  };

  // =========================================================
  // PUBLISH STATUS
  // =========================================================

  const handlePublishedChange = (
    published,
  ) => {
    setForm(
      (
        current,
      ) => ({
        ...current,

        published,

        status:
          published
            ? "published"
            : "draft",
      }),
    );
  };

  // =========================================================
  // STATUTORY PROVISIONS
  // =========================================================

  const addStatutoryProvision =
    () => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          statutoryProvisions: [
            ...current
              .statutoryProvisions,

            {
              id:
                `provision-${Date.now()}`,

              title:
                "",

              provision:
                "",

              description:
                "",
            },
          ],
        }),
      );
    };

  const updateStatutoryProvision =
    (
      index,
      field,
      value,
    ) => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          statutoryProvisions:
            current
              .statutoryProvisions
              .map(
                (
                  item,
                  itemIndex,
                ) =>
                  itemIndex ===
                  index
                    ? {
                        ...item,

                        [field]:
                          value,
                      }
                    : item,
              ),
        }),
      );
    };

  const removeStatutoryProvision =
    (
      index,
    ) => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          statutoryProvisions:
            current
              .statutoryProvisions
              .filter(
                (
                  _,
                  itemIndex,
                ) =>
                  itemIndex !==
                  index,
              ),
        }),
      );
    };

  // =========================================================
  // IMPORTANT CASES
  // =========================================================

  const addImportantCase =
    () => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          importantCases: [
            ...current
              .importantCases,

            {
              id:
                `case-${Date.now()}`,

              caseName:
                "",

              citation:
                "",

              principle:
                "",

              summary:
                "",
            },
          ],
        }),
      );
    };

  const updateImportantCase =
    (
      index,
      field,
      value,
    ) => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          importantCases:
            current
              .importantCases
              .map(
                (
                  item,
                  itemIndex,
                ) =>
                  itemIndex ===
                  index
                    ? {
                        ...item,

                        [field]:
                          value,
                      }
                    : item,
              ),
        }),
      );
    };

  const removeImportantCase =
    (
      index,
    ) => {
      setForm(
        (
          current,
        ) => ({
          ...current,

          importantCases:
            current
              .importantCases
              .filter(
                (
                  _,
                  itemIndex,
                ) =>
                  itemIndex !==
                  index,
              ),
        }),
      );
    };

  // =========================================================
  // PDF SELECTION
  // =========================================================

  const handlePdfChange = (
    event,
  ) => {
    const file =
      event.target
        .files?.[0];

    setError("");

    if (!file) {
      return;
    }

    const isPdf =
      file.type ===
        "application/pdf" ||
      file.name
        .toLowerCase()
        .endsWith(
          ".pdf",
        );

    if (!isPdf) {
      setError(
        "Please select a PDF file.",
      );

      event.target.value =
        "";

      return;
    }

    if (
      file.size >
      MAX_PDF_SIZE
    ) {
      setError(
        "The chapter PDF must be 25 MB or smaller.",
      );

      event.target.value =
        "";

      return;
    }

    setPdfFile(
      file,
    );

    setRemoveExistingPdf(
      false,
    );
  };

  const handleChoosePdf =
    () => {
      pdfInputRef.current?.click();
    };

  const handleRemovePdf =
    () => {
      setPdfFile(
        null,
      );

      if (
        form.pdfUrl ||
        form.pdfStoragePath
      ) {
        setRemoveExistingPdf(
          true,
        );
      }

      setForm(
        (
          current,
        ) => ({
          ...current,

          pdfUrl:
            "",

          pdfStoragePath:
            "",

          pdfPublicId:
            "",

          pdfFileName:
            "",

          pdfFileSize:
            0,

          pdfContentType:
            "",

          pdfAssetId:
            "",
        }),
      );

      if (
        pdfInputRef.current
      ) {
        pdfInputRef.current.value =
          "";
      }
    };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit =
    async (
      event,
    ) => {
      event.preventDefault();

      if (
        !form.courseId
      ) {
        setError(
          "Please select a course.",
        );

        return;
      }

      if (
        !form.title.trim()
      ) {
        setError(
          "Chapter title is required.",
        );

        return;
      }

      setError("");

      await onSubmit?.({
        ...form,

        slug:
          createSlug(
            form.slug ||
              form.title,
          ),

        chapterNumber:
          Number(
            form
              .chapterNumber ||
              1,
          ),

        displayOrder:
          Number(
            form
              .displayOrder ||
              1,
          ),

        // ===================================================
        // ACADEMIC CONTENT
        // ===================================================

        chapterOverview:
          form
            .chapterOverview,

        learningObjectives:
          multilineTextToArray(
            form
              .learningObjectivesText,
          ),

        detailedContent:
          form
            .detailedContent,

        keyPoints:
          multilineTextToArray(
            form
              .keyPointsText,
          ),

        statutoryProvisions:
          form
            .statutoryProvisions,

        importantCases:
          form
            .importantCases,

        examFocus:
          form.examFocus,

        revisionNotes:
          form
            .revisionNotes,

        // ===================================================
        // UI-ONLY VALUES
        // ===================================================

        pdfFile,

        removeExistingPdf,
      });
    };

  const hasExistingPdf =
    Boolean(
      form.pdfUrl,
    );

  const hasPdf =
    Boolean(
      pdfFile ||
        hasExistingPdf,
    );

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <form
      className="ns-chapter-form"
      onSubmit={
        handleSubmit
      }
    >
      {error && (
        <div className="ns-chapter-error">
          {error}
        </div>
      )}

      {/* =====================================================
          BASIC INFORMATION
      ====================================================== */}

      <SectionHeader
        icon={
          <FaBookOpen />
        }
        title="Basic Information"
        description="Core information used to identify and organise the chapter."
      />

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Course *
        </label>

        <select
          required
          value={
            form.courseId
          }
          onChange={(
            event,
          ) =>
            updateField(
              "courseId",
              event
                .target
                .value,
            )
          }
        >
          <option value="">
            Select course
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
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Chapter title *
        </label>

        <input
          required
          value={
            form.title
          }
          onChange={(
            event,
          ) =>
            handleTitleChange(
              event
                .target
                .value,
            )
          }
          placeholder="Nature and Principles of Torts"
        />
      </div>

      <div className="ns-chapter-field">
        <label>
          Slug
        </label>

        <input
          value={
            form.slug
          }
          onChange={(
            event,
          ) =>
            updateField(
              "slug",

              createSlug(
                event
                  .target
                  .value,
              ),
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>
          Chapter number
        </label>

        <input
          type="number"
          min="1"
          value={
            form
              .chapterNumber
          }
          onChange={(
            event,
          ) =>
            updateField(
              "chapterNumber",
              event
                .target
                .value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>
          Display order
        </label>

        <input
          type="number"
          min="1"
          value={
            form
              .displayOrder
          }
          onChange={(
            event,
          ) =>
            updateField(
              "displayOrder",
              event
                .target
                .value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>
          Status
        </label>

        <select
          value={
            form.status
          }
          onChange={(
            event,
          ) => {
            const status =
              event
                .target
                .value;

            setForm(
              (
                current,
              ) => ({
                ...current,

                status,

                published:
                  status ===
                  "published",
              }),
            );
          }}
        >
          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>
        </select>
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Short description
        </label>

        <textarea
          rows="3"
          value={
            form
              .shortDescription
          }
          onChange={(
            event,
          ) =>
            updateField(
              "shortDescription",
              event
                .target
                .value,
            )
          }
          placeholder="A short description displayed in chapter lists and course pages."
        />
      </div>

      {/* =====================================================
          CHAPTER OVERVIEW
      ====================================================== */}

      <SectionHeader
        icon={
          <FaBookOpen />
        }
        title="Chapter Overview"
        description="Give students a clear introduction to what this chapter covers."
      />

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Overview
        </label>

        <textarea
          rows="5"
          value={
            form
              .chapterOverview
          }
          onChange={(
            event,
          ) =>
            updateField(
              "chapterOverview",
              event
                .target
                .value,
            )
          }
          placeholder="Explain the scope, purpose and importance of this chapter..."
        />
      </div>

      {/* =====================================================
          LEARNING OBJECTIVES
      ====================================================== */}

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Learning objectives
        </label>

        <textarea
          rows="6"
          value={
            form
              .learningObjectivesText
          }
          onChange={(
            event,
          ) =>
            updateField(
              "learningObjectivesText",
              event
                .target
                .value,
            )
          }
          placeholder={`Enter one learning objective per line.\nExample:\nUnderstand the historical development of tort law\nExplain the essential elements of a tort\nDistinguish injuria sine damno from damnum sine injuria`}
        />

        <small className="ns-field-help">
          Enter one objective per line.
        </small>
      </div>

      {/* =====================================================
          DETAILED CONTENT
      ====================================================== */}

      <SectionHeader
        icon={
          <FaBookOpen />
        }
        title="Detailed Chapter Content"
        description="The main academic content students will read before the study materials."
      />

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Detailed content
        </label>

        <textarea
          rows="16"
          value={
            form
              .detailedContent
          }
          onChange={(
            event,
          ) =>
            updateField(
              "detailedContent",
              event
                .target
                .value,
            )
          }
          placeholder={`Write the detailed chapter content here.

You can organise it with headings, numbered points and paragraphs.

Example:

1. Introduction
...
2. Historical Development
...
3. Meaning of Tort
...`}
        />
      </div>

      {/* =====================================================
          KEY POINTS
      ====================================================== */}

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Key points
        </label>

        <textarea
          rows="7"
          value={
            form
              .keyPointsText
          }
          onChange={(
            event,
          ) =>
            updateField(
              "keyPointsText",
              event
                .target
                .value,
            )
          }
          placeholder={`Enter one important point per line.\nExample:\nA tort is primarily a civil wrong\nThe duty is generally imposed by law\nThe remedy is usually unliquidated damages`}
        />

        <small className="ns-field-help">
          Enter one key point per line.
        </small>
      </div>

      {/* =====================================================
          STATUTORY PROVISIONS
      ====================================================== */}

      <SectionHeader
        icon={
          <FaLandmark />
        }
        title="Statutory Provisions"
        description="Add relevant sections, rules, constitutional provisions or statutory references."
        action={
          <button
            type="button"
            className="ns-add-item-button"
            onClick={
              addStatutoryProvision
            }
          >
            <FaPlus />
            Add Provision
          </button>
        }
      />

      <div className="ns-chapter-full">
        {form
          .statutoryProvisions
          .length ===
        0 ? (
          <div className="ns-structured-empty">
            No statutory provisions added.
          </div>
        ) : (
          <div className="ns-structured-list">
            {form
              .statutoryProvisions
              .map(
                (
                  item,
                  index,
                ) => (
                  <div
                    key={
                      item.id ||
                      index
                    }
                    className="ns-structured-card"
                  >
                    <div className="ns-structured-card-header">
                      <strong>
                        Provision{" "}
                        {index +
                          1}
                      </strong>

                      <button
                        type="button"
                        className="ns-inline-delete"
                        onClick={() =>
                          removeStatutoryProvision(
                            index,
                          )
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="ns-structured-grid">
                      <div className="ns-chapter-field">
                        <label>
                          Title
                        </label>

                        <input
                          value={
                            item
                              .title ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateStatutoryProvision(
                              index,
                              "title",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Motor Vehicles Act, 1988"
                        />
                      </div>

                      <div className="ns-chapter-field">
                        <label>
                          Provision / Section
                        </label>

                        <input
                          value={
                            item
                              .provision ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateStatutoryProvision(
                              index,
                              "provision",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Section 166"
                        />
                      </div>

                      <div className="ns-chapter-field ns-structured-full">
                        <label>
                          Description
                        </label>

                        <textarea
                          rows="3"
                          value={
                            item
                              .description ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateStatutoryProvision(
                              index,
                              "description",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Explain why this provision is relevant to the chapter."
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
          </div>
        )}
      </div>

      {/* =====================================================
          IMPORTANT CASES
      ====================================================== */}

      <SectionHeader
        icon={
          <FaLandmark />
        }
        title="Important Cases"
        description="Add leading cases students should remember for examinations and understanding the chapter."
        action={
          <button
            type="button"
            className="ns-add-item-button"
            onClick={
              addImportantCase
            }
          >
            <FaPlus />
            Add Case
          </button>
        }
      />

      <div className="ns-chapter-full">
        {form
          .importantCases
          .length ===
        0 ? (
          <div className="ns-structured-empty">
            No important cases added.
          </div>
        ) : (
          <div className="ns-structured-list">
            {form
              .importantCases
              .map(
                (
                  item,
                  index,
                ) => (
                  <div
                    key={
                      item.id ||
                      index
                    }
                    className="ns-structured-card"
                  >
                    <div className="ns-structured-card-header">
                      <strong>
                        Case{" "}
                        {index +
                          1}
                      </strong>

                      <button
                        type="button"
                        className="ns-inline-delete"
                        onClick={() =>
                          removeImportantCase(
                            index,
                          )
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="ns-structured-grid">
                      <div className="ns-chapter-field">
                        <label>
                          Case name
                        </label>

                        <input
                          value={
                            item
                              .caseName ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateImportantCase(
                              index,
                              "caseName",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Donoghue v Stevenson"
                        />
                      </div>

                      <div className="ns-chapter-field">
                        <label>
                          Citation
                        </label>

                        <input
                          value={
                            item
                              .citation ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateImportantCase(
                              index,
                              "citation",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="[1932] AC 562"
                        />
                      </div>

                      <div className="ns-chapter-field ns-structured-full">
                        <label>
                          Principle
                        </label>

                        <input
                          value={
                            item
                              .principle ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateImportantCase(
                              index,
                              "principle",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Neighbour principle and duty of care"
                        />
                      </div>

                      <div className="ns-chapter-field ns-structured-full">
                        <label>
                          Short case summary
                        </label>

                        <textarea
                          rows="4"
                          value={
                            item
                              .summary ||
                            ""
                          }
                          onChange={(
                            event,
                          ) =>
                            updateImportantCase(
                              index,
                              "summary",
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="Briefly explain the facts and legal significance..."
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
          </div>
        )}
      </div>

      {/* =====================================================
          EXAM FOCUS
      ====================================================== */}

      <SectionHeader
        icon={
          <FaBookOpen />
        }
        title="Exam Focus & Revision"
        description="Highlight what students should revise carefully for university and certification examinations."
      />

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Exam focus
        </label>

        <textarea
          rows="7"
          value={
            form
              .examFocus
          }
          onChange={(
            event,
          ) =>
            updateField(
              "examFocus",
              event
                .target
                .value,
            )
          }
          placeholder="Important examination questions, concepts, distinctions and case-law points..."
        />
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Revision notes
        </label>

        <textarea
          rows="7"
          value={
            form
              .revisionNotes
          }
          onChange={(
            event,
          ) =>
            updateField(
              "revisionNotes",
              event
                .target
                .value,
            )
          }
          placeholder="Compact revision notes for quick study..."
        />
      </div>

      {/* =====================================================
          LEGACY NOTES
      ====================================================== */}

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Internal / legacy notes
        </label>

        <textarea
          rows="5"
          value={
            form.notes
          }
          onChange={(
            event,
          ) =>
            updateField(
              "notes",
              event
                .target
                .value,
            )
          }
          placeholder="Optional notes retained for compatibility with existing chapter records."
        />
      </div>

      {/* =====================================================
          PDF
      ====================================================== */}

      <SectionHeader
        icon={
          <FaFilePdf />
        }
        title="Chapter PDF / Study Material"
        description="Upload the downloadable/readable study PDF for this chapter."
      />

      <div className="ns-chapter-full">
        <div className="ns-chapter-pdf">
          <div className="ns-pdf-header">
            <div className="ns-pdf-title">
              <div className="ns-pdf-icon">
                <FaFilePdf />
              </div>

              <div>
                <strong>
                  Chapter PDF /
                  Study Material
                </strong>

                <p>
                  Upload the chapter PDF directly from your computer.
                </p>
              </div>
            </div>

            <span>
              PDF • Max 25 MB
            </span>
          </div>

          <input
            ref={
              pdfInputRef
            }
            type="file"
            accept="application/pdf,.pdf"
            onChange={
              handlePdfChange
            }
            className="ns-pdf-input"
          />

          {!hasPdf ? (
            <button
              type="button"
              className="ns-pdf-drop"
              onClick={
                handleChoosePdf
              }
              disabled={
                saving ||
                uploadingPdf
              }
            >
              <FaUpload />

              <strong>
                Choose PDF from computer
              </strong>

              <span>
                The PDF will be uploaded to Cloudinary when you save the chapter.
              </span>
            </button>
          ) : (
            <div className="ns-pdf-selected">
              <FaFilePdf />

              <div className="ns-pdf-file-details">
                <strong>
                  {pdfFile
                    ?.name ||
                    form
                      .pdfFileName ||
                    "Chapter PDF"}
                </strong>

                <span>
                  {pdfFile
                    ? formatFileSize(
                        pdfFile
                          .size,
                      )
                    : formatFileSize(
                        form
                          .pdfFileSize,
                      ) ||
                      "Existing PDF"}
                </span>

                {pdfFile && (
                  <small>
                    Ready to upload
                  </small>
                )}

                {!pdfFile &&
                  hasExistingPdf && (
                    <small>
                      Already uploaded
                    </small>
                  )}
              </div>
            </div>
          )}

          <div className="ns-pdf-buttons">
            {hasPdf && (
              <button
                type="button"
                className="ns-pdf-replace"
                onClick={
                  handleChoosePdf
                }
                disabled={
                  saving ||
                  uploadingPdf
                }
              >
                <FaUpload />
                Replace PDF
              </button>
            )}

            {hasPdf && (
              <button
                type="button"
                className="ns-pdf-remove"
                onClick={
                  handleRemovePdf
                }
                disabled={
                  saving ||
                  uploadingPdf
                }
              >
                <FaTrash />
                Remove PDF
              </button>
            )}
          </div>

          {(uploadingPdf ||
            uploadProgress >
              0) && (
            <div className="ns-pdf-progress">
              <div className="ns-pdf-progress-text">
                <span>
                  {uploadingPdf
                    ? "Uploading to Cloudinary..."
                    : "Upload complete"}
                </span>

                <strong>
                  {
                    uploadProgress
                  }
                  %
                </strong>
              </div>

              <div className="ns-pdf-progress-track">
                <div
                  className="ns-pdf-progress-bar"
                  style={{
                    width:
                      `${uploadProgress}%`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="ns-pdf-access-note">
            <strong>
              Student access
            </strong>

            <span>
              Students will read this PDF inside the learning portal. Download access is controlled separately by certification entitlement.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          OPTIONS
      ====================================================== */}

      <div className="ns-chapter-options ns-chapter-full">
        <label>
          <input
            type="checkbox"
            checked={
              form
                .previewAvailable
            }
            onChange={(
              event,
            ) =>
              updateField(
                "previewAvailable",
                event
                  .target
                  .checked,
              )
            }
          />

          Free preview
        </label>

        <label>
          <input
            type="checkbox"
            checked={
              form.published
            }
            onChange={(
              event,
            ) =>
              handlePublishedChange(
                event
                  .target
                  .checked,
              )
            }
          />

          Published
        </label>
      </div>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="ns-chapter-actions ns-chapter-full">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={
              onCancel
            }
            disabled={
              saving ||
              uploadingPdf
            }
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          loading={
            saving ||
            uploadingPdf
          }
          disabled={
            uploadingPdf
          }
        >
          {chapter
            ? "Update Chapter"
            : "Create Chapter"}
        </Button>
      </div>

      <style>
        {`
          .ns-chapter-form {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .ns-form-section-header {
            grid-column: 1 / -1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            margin-top: 8px;
            border-bottom: 1px solid #e2e8f0;
            padding: 8px 0 12px;
          }

          .ns-form-section-heading {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .ns-form-section-icon {
            display: flex;
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 9px;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-form-section-heading h3 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-form-section-heading p {
            margin: 3px 0 0;
            color: #64748b;
            font-size: 10px;
            line-height: 1.5;
          }

          .ns-chapter-field {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-chapter-field label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-chapter-field input,
          .ns-chapter-field select,
          .ns-chapter-field textarea {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: white;
            padding: 11px 12px;
            color: #0f172a;
            font: inherit;
            outline: none;
          }

          .ns-chapter-field textarea {
            resize: vertical;
          }

          .ns-chapter-field input:focus,
          .ns-chapter-field select:focus,
          .ns-chapter-field textarea:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(
                37,
                99,
                235,
                0.12
              );
          }

          .ns-field-help {
            color: #64748b;
            font-size: 10px;
          }

          .ns-chapter-full {
            grid-column: 1 / -1;
          }

          .ns-add-item-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: 1px solid #bfdbfe;
            border-radius: 9px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
            padding: 8px 10px;
            font-size: 10px;
            font-weight: 800;
          }

          .ns-structured-empty {
            border: 1px dashed #cbd5e1;
            border-radius: 11px;
            background: #f8fafc;
            color: #64748b;
            padding: 14px;
            font-size: 11px;
          }

          .ns-structured-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ns-structured-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #f8fafc;
            padding: 13px;
          }

          .ns-structured-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 12px;
          }

          .ns-structured-card-header strong {
            color: #0f172a;
            font-size: 11px;
          }

          .ns-inline-delete {
            display: flex;
            width: 30px;
            height: 30px;
            align-items: center;
            justify-content: center;
            border: 1px solid #fecaca;
            border-radius: 8px;
            background: #fef2f2;
            color: #dc2626;
            cursor: pointer;
          }

          .ns-structured-grid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .ns-structured-full {
            grid-column: 1 / -1;
          }

          /* PDF */

          .ns-chapter-pdf {
            border: 1px solid #dbeafe;
            border-radius: 14px;
            background: #f8fbff;
            padding: 16px;
          }

          .ns-pdf-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 14px;
          }

          .ns-pdf-title {
            display: flex;
            align-items: center;
            gap: 11px;
          }

          .ns-pdf-icon {
            display: flex;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: #fee2e2;
            color: #dc2626;
            font-size: 20px;
          }

          .ns-pdf-title strong {
            color: #0f172a;
            font-size: 13px;
          }

          .ns-pdf-title p {
            margin: 3px 0 0;
            color: #64748b;
            font-size: 11px;
          }

          .ns-pdf-header > span {
            color: #64748b;
            font-size: 10px;
            white-space: nowrap;
          }

          .ns-pdf-input {
            display: none;
          }

          .ns-pdf-drop {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            min-height: 130px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 7px;
            border: 2px dashed #bfdbfe;
            border-radius: 12px;
            background: white;
            color: #2563eb;
            padding: 18px;
            cursor: pointer;
          }

          .ns-pdf-drop svg {
            font-size: 25px;
          }

          .ns-pdf-drop strong {
            font-size: 12px;
          }

          .ns-pdf-drop span {
            max-width: 330px;
            color: #64748b;
            font-size: 10px;
            line-height: 1.5;
          }

          .ns-pdf-selected {
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid #fecaca;
            border-radius: 12px;
            background: white;
            padding: 13px;
          }

          .ns-pdf-selected > svg {
            flex-shrink: 0;
            color: #dc2626;
            font-size: 30px;
          }

          .ns-pdf-file-details {
            display: flex;
            min-width: 0;
            flex-direction: column;
            gap: 2px;
          }

          .ns-pdf-file-details strong {
            overflow: hidden;
            color: #0f172a;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .ns-pdf-file-details span {
            color: #64748b;
            font-size: 10px;
          }

          .ns-pdf-file-details small {
            color: #16a34a;
            font-size: 10px;
            font-weight: 700;
          }

          .ns-pdf-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
          }

          .ns-pdf-replace,
          .ns-pdf-remove {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 8px;
            padding: 8px 11px;
            font: inherit;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
          }

          .ns-pdf-replace {
            border: 1px solid #bfdbfe;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-pdf-remove {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-pdf-replace:disabled,
          .ns-pdf-remove:disabled,
          .ns-pdf-drop:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }

          .ns-pdf-progress {
            margin-top: 13px;
          }

          .ns-pdf-progress-text {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 6px;
            color: #475569;
            font-size: 10px;
          }

          .ns-pdf-progress-text strong {
            color: #2563eb;
          }

          .ns-pdf-progress-track {
            overflow: hidden;
            height: 8px;
            border-radius: 999px;
            background: #dbeafe;
          }

          .ns-pdf-progress-bar {
            height: 100%;
            border-radius: inherit;
            background: #2563eb;
            transition: width 0.2s ease;
          }

          .ns-pdf-access-note {
            display: flex;
            margin-top: 13px;
            flex-direction: column;
            gap: 3px;
            border-radius: 9px;
            background: #eff6ff;
            padding: 10px 11px;
          }

          .ns-pdf-access-note strong {
            color: #1d4ed8;
            font-size: 10px;
          }

          .ns-pdf-access-note span {
            color: #475569;
            font-size: 10px;
            line-height: 1.5;
          }

          /* OPTIONS */

          .ns-chapter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;
          }

          .ns-chapter-options label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-chapter-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }

          .ns-chapter-error {
            grid-column: 1 / -1;
            border: 1px solid #fecaca;
            border-radius: 10px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 12px;
            font-size: 13px;
            font-weight: 700;
          }

          @media (max-width: 700px) {
            .ns-chapter-form,
            .ns-structured-grid {
              grid-template-columns: 1fr;
            }

            .ns-chapter-full,
            .ns-structured-full {
              grid-column: auto;
            }

            .ns-form-section-header,
            .ns-pdf-header {
              align-items: flex-start;
              flex-direction: column;
            }

            .ns-pdf-header > span {
              white-space: normal;
            }

            .ns-chapter-actions {
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </form>
  );
}

// =========================================================
// SECTION HEADER
// =========================================================

function SectionHeader({
  icon,
  title,
  description,
  action = null,
}) {
  return (
    <div className="ns-form-section-header">
      <div className="ns-form-section-heading">
        <div className="ns-form-section-icon">
          {icon}
        </div>

        <div>
          <h3>
            {title}
          </h3>

          <p>
            {description}
          </p>
        </div>
      </div>

      {action}
    </div>
  );
}