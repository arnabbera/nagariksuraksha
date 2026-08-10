import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaFilePdf,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

import Button from "../../../../shared/components/Button";

const MAX_PDF_SIZE =
  25 * 1024 * 1024;

const EMPTY_FORM = {
  courseId: "",
  title: "",
  slug: "",
  shortDescription: "",
  notes: "",
  chapterNumber: 1,
  displayOrder: 1,
  previewAvailable: false,
  published: false,
  status: "draft",

  // Existing PDF information
  pdfUrl: "",
  pdfStoragePath: "",
  pdfPublicId: "",
  pdfFileName: "",
  pdfFileSize: 0,
  pdfContentType: "",
  pdfAssetId: "",
};

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const formatFileSize = (bytes = 0) => {
  const size = Number(bytes || 0);

  if (!size) {
    return "";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(2)} MB`;
};

const normalizeChapter = (chapter) => ({
  ...EMPTY_FORM,
  ...chapter,

  pdfUrl:
    chapter?.pdf?.url ??
    chapter?.pdfUrl ??
    "",

  pdfStoragePath:
    chapter?.pdf?.storagePath ??
    chapter?.pdfStoragePath ??
    "",

  pdfPublicId:
    chapter?.pdf?.publicId ??
    chapter?.pdfPublicId ??
    "",

  pdfFileName:
    chapter?.pdf?.fileName ??
    chapter?.pdfFileName ??
    "",

  pdfFileSize:
    chapter?.pdf?.fileSize ??
    chapter?.pdfFileSize ??
    0,

  pdfContentType:
    chapter?.pdf?.contentType ??
    chapter?.pdfContentType ??
    "",

  pdfAssetId:
    chapter?.pdf?.assetId ??
    chapter?.pdfAssetId ??
    "",
});

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

  const [form, setForm] =
    useState({
      ...EMPTY_FORM,
      courseId:
        selectedCourseId,
    });

  const [pdfFile, setPdfFile] =
    useState(null);

  const [
    removeExistingPdf,
    setRemoveExistingPdf,
  ] = useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (chapter) {
      setForm(
        normalizeChapter(
          chapter,
        ),
      );

      setPdfFile(null);
      setRemoveExistingPdf(false);

      if (pdfInputRef.current) {
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

    setPdfFile(null);
    setRemoveExistingPdf(false);

    if (pdfInputRef.current) {
      pdfInputRef.current.value =
        "";
    }
  }, [
    chapter,
    selectedCourseId,
  ]);

  const updateField = (
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTitleChange = (
    value,
  ) => {
    setForm((current) => ({
      ...current,

      title: value,

      slug:
        chapter ||
        current.slug
          ? current.slug
          : createSlug(value),
    }));
  };

  const handlePublishedChange = (
    published,
  ) => {
    setForm((current) => ({
      ...current,

      published,

      status: published
        ? "published"
        : "draft",
    }));
  };

  // =========================================================
  // PDF SELECTION
  // =========================================================

  const handlePdfChange = (
    event,
  ) => {
    const file =
      event.target.files?.[0];

    setError("");

    if (!file) {
      return;
    }

    const isPdf =
      file.type ===
        "application/pdf" ||
      file.name
        .toLowerCase()
        .endsWith(".pdf");

    if (!isPdf) {
      setError(
        "Please select a PDF file.",
      );

      event.target.value = "";

      return;
    }

    if (
      file.size >
      MAX_PDF_SIZE
    ) {
      setError(
        "The chapter PDF must be 25 MB or smaller.",
      );

      event.target.value = "";

      return;
    }

    setPdfFile(file);

    setRemoveExistingPdf(
      false,
    );
  };

  const handleChoosePdf = () => {
    pdfInputRef.current?.click();
  };

  const handleRemovePdf = () => {
    setPdfFile(null);

    if (
      form.pdfUrl ||
      form.pdfStoragePath
    ) {
      setRemoveExistingPdf(
        true,
      );
    }

    setForm((current) => ({
      ...current,

      pdfUrl: "",
      pdfStoragePath: "",
      pdfPublicId: "",
      pdfFileName: "",
      pdfFileSize: 0,
      pdfContentType: "",
      pdfAssetId: "",
    }));

    if (pdfInputRef.current) {
      pdfInputRef.current.value =
        "";
    }
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    if (!form.courseId) {
      setError(
        "Please select a course.",
      );
      return;
    }

    if (!form.title.trim()) {
      setError(
        "Chapter title is required.",
      );
      return;
    }

    setError("");

    await onSubmit?.({
      ...form,

      slug: createSlug(
        form.slug ||
          form.title,
      ),

      chapterNumber:
        Number(
          form.chapterNumber ||
            1,
        ),

      displayOrder:
        Number(
          form.displayOrder ||
            1,
        ),

      /*
       * The browser File object is deliberately passed
       * separately. ChapterManagement will upload it to
       * Cloudinary before calling the Firestore service.
       */
      pdfFile,

      removeExistingPdf,
    });
  };

  const hasExistingPdf =
    Boolean(form.pdfUrl);

  const hasPdf =
    Boolean(
      pdfFile ||
      hasExistingPdf,
    );

  return (
    <form
      className="ns-chapter-form"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="ns-chapter-error">
          {error}
        </div>
      )}

      {/* =====================================================
          COURSE
      ====================================================== */}

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Course *
        </label>

        <select
          required
          value={form.courseId}
          onChange={(event) =>
            updateField(
              "courseId",
              event.target.value,
            )
          }
        >
          <option value="">
            Select course
          </option>

          {courses.map(
            (course) => (
              <option
                key={course.id}
                value={course.id}
              >
                {course.title}
              </option>
            ),
          )}
        </select>
      </div>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Chapter title *
        </label>

        <input
          required
          value={form.title}
          onChange={(event) =>
            handleTitleChange(
              event.target.value,
            )
          }
          placeholder="Introduction to Consumer Law"
        />
      </div>

      <div className="ns-chapter-field">
        <label>Slug</label>

        <input
          value={form.slug}
          onChange={(event) =>
            updateField(
              "slug",
              createSlug(
                event.target.value,
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
            form.chapterNumber
          }
          onChange={(event) =>
            updateField(
              "chapterNumber",
              event.target.value,
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
            form.displayOrder
          }
          onChange={(event) =>
            updateField(
              "displayOrder",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>Status</label>

        <select
          value={form.status}
          onChange={(event) => {
            const status =
              event.target.value;

            setForm(
              (current) => ({
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
            form.shortDescription
          }
          onChange={(event) =>
            updateField(
              "shortDescription",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>
          Chapter notes
        </label>

        <textarea
          rows="7"
          value={form.notes}
          onChange={(event) =>
            updateField(
              "notes",
              event.target.value,
            )
          }
          placeholder="Optional introductory notes..."
        />
      </div>

      {/* =====================================================
          PDF
      ====================================================== */}

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
                  Upload the chapter PDF
                  directly from your
                  computer.
                </p>
              </div>
            </div>

            <span>
              PDF • Max 25 MB
            </span>
          </div>

          <input
            ref={pdfInputRef}
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
                Choose PDF from
                computer
              </strong>

              <span>
                The PDF will be
                uploaded to
                Cloudinary when you
                save the chapter.
              </span>
            </button>
          ) : (
            <div className="ns-pdf-selected">
              <FaFilePdf />

              <div className="ns-pdf-file-details">
                <strong>
                  {pdfFile?.name ||
                    form.pdfFileName ||
                    "Chapter PDF"}
                </strong>

                <span>
                  {pdfFile
                    ? formatFileSize(
                        pdfFile.size,
                      )
                    : formatFileSize(
                        form.pdfFileSize,
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
            uploadProgress > 0) && (
            <div className="ns-pdf-progress">
              <div className="ns-pdf-progress-text">
                <span>
                  {uploadingPdf
                    ? "Uploading to Cloudinary..."
                    : "Upload complete"}
                </span>

                <strong>
                  {uploadProgress}%
                </strong>
              </div>

              <div className="ns-pdf-progress-track">
                <div
                  className="ns-pdf-progress-bar"
                  style={{
                    width: `${uploadProgress}%`,
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
              Students will read this
              PDF inside the learning
              portal. The download
              option will be controlled
              separately by paid
              certification
              eligibility.
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
              form.previewAvailable
            }
            onChange={(event) =>
              updateField(
                "previewAvailable",
                event.target.checked,
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
            onChange={(event) =>
              handlePublishedChange(
                event.target.checked,
              )
            }
          />

          Published
        </label>
      </div>

      <div className="ns-chapter-actions ns-chapter-full">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
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

          .ns-chapter-field input:focus,
          .ns-chapter-field select:focus,
          .ns-chapter-field textarea:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37, 99, 235, 0.12);
          }

          .ns-chapter-full {
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
            .ns-chapter-form {
              grid-template-columns: 1fr;
            }

            .ns-chapter-full {
              grid-column: auto;
            }

            .ns-pdf-header {
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