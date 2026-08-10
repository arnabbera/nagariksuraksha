import { useEffect, useState } from "react";

import Button from "../../../../shared/components/Button";

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
};

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function ChapterForm({
  courses = [],
  chapter = null,
  selectedCourseId = "",
  saving = false,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState({
    ...EMPTY_FORM,
    courseId: selectedCourseId,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (chapter) {
      setForm({
        ...EMPTY_FORM,
        ...chapter,
      });

      return;
    }

    setForm({
      ...EMPTY_FORM,
      courseId: selectedCourseId,
    });
  }, [chapter, selectedCourseId]);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTitleChange = (value) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug:
        chapter || current.slug
          ? current.slug
          : createSlug(value),
    }));
  };

  const handlePublishedChange = (published) => {
    setForm((current) => ({
      ...current,
      published,
      status: published ? "published" : "draft",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.courseId) {
      setError("Please select a course.");
      return;
    }

    if (!form.title.trim()) {
      setError("Chapter title is required.");
      return;
    }

    setError("");

    await onSubmit?.({
      ...form,
      slug: createSlug(form.slug || form.title),
      chapterNumber: Number(
        form.chapterNumber || 1,
      ),
      displayOrder: Number(
        form.displayOrder || 1,
      ),
    });
  };

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

      <div className="ns-chapter-field ns-chapter-full">
        <label>Course *</label>

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

          {courses.map((course) => (
            <option
              key={course.id}
              value={course.id}
            >
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>Chapter title *</label>

        <input
          required
          value={form.title}
          onChange={(event) =>
            handleTitleChange(event.target.value)
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
              createSlug(event.target.value),
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>Chapter number</label>

        <input
          type="number"
          min="1"
          value={form.chapterNumber}
          onChange={(event) =>
            updateField(
              "chapterNumber",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field">
        <label>Display order</label>

        <input
          type="number"
          min="1"
          value={form.displayOrder}
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
            const status = event.target.value;

            setForm((current) => ({
              ...current,
              status,
              published:
                status === "published",
            }));
          }}
        >
          <option value="draft">Draft</option>
          <option value="published">
            Published
          </option>
        </select>
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>Short description</label>

        <textarea
          rows="3"
          value={form.shortDescription}
          onChange={(event) =>
            updateField(
              "shortDescription",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-chapter-field ns-chapter-full">
        <label>Chapter notes</label>

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

      <div className="ns-chapter-options ns-chapter-full">
        <label>
          <input
            type="checkbox"
            checked={form.previewAvailable}
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
            checked={form.published}
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
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          loading={saving}
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
          }
        `}
      </style>
    </form>
  );
}