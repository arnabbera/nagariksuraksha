import { useEffect, useState } from "react";

import Button from "../../../../shared/components/Button";

const EMPTY_FORM = {
  courseId: "",
  chapterId: "",
  title: "",
  description: "",
  type: "video",
  displayOrder: 1,

  url: "",
  storagePath: "",

  youtubeUrl: "",
  duration: "",

  content: "",

  downloadable: false,
  required: true,
  previewAvailable: false,
  published: false,
  status: "draft",
};

export default function ResourceForm({
  resource = null,
  courseId = "",
  chapterId = "",
  saving = false,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState({
    ...EMPTY_FORM,
    courseId,
    chapterId,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (resource) {
      setForm({
        ...EMPTY_FORM,
        ...resource,

        url:
          resource.file?.url ||
          resource.url ||
          "",

        storagePath:
          resource.file?.storagePath ||
          resource.storagePath ||
          "",

        downloadable:
          resource.file?.downloadable ??
          resource.downloadable ??
          false,

        youtubeUrl:
          resource.video?.youtubeUrl ||
          resource.youtubeUrl ||
          "",

        duration:
          resource.video?.duration ||
          resource.duration ||
          "",
      });

      return;
    }

    setForm({
      ...EMPTY_FORM,
      courseId,
      chapterId,
    });
  }, [resource, courseId, chapterId]);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.courseId || !form.chapterId) {
      setError(
        "Course and chapter are required.",
      );
      return;
    }

    if (!form.title.trim()) {
      setError("Resource title is required.");
      return;
    }

    if (
      form.type === "video" &&
      !form.youtubeUrl.trim()
    ) {
      setError(
        "YouTube URL is required for a video resource.",
      );
      return;
    }

    if (
      ["pdf", "link", "download"].includes(
        form.type,
      ) &&
      !form.url.trim()
    ) {
      setError(
        "Resource URL is required.",
      );
      return;
    }

    if (
      ["note", "assignment"].includes(
        form.type,
      ) &&
      !form.content.trim()
    ) {
      setError(
        "Resource content is required.",
      );
      return;
    }

    setError("");

    await onSubmit?.({
      ...form,

      displayOrder: Number(
        form.displayOrder || 1,
      ),

      status: form.published
        ? "published"
        : "draft",
    });
  };

  return (
    <form
      className="ns-resource-form"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="ns-resource-error">
          {error}
        </div>
      )}

      <div className="ns-resource-field">
        <label>Resource type</label>

        <select
          value={form.type}
          onChange={(event) =>
            updateField(
              "type",
              event.target.value,
            )
          }
        >
          <option value="video">
            YouTube Video
          </option>

          <option value="pdf">PDF</option>

          <option value="note">
            Study Note
          </option>

          <option value="link">
            External Link
          </option>

          <option value="download">
            Download
          </option>

          <option value="assignment">
            Assignment
          </option>
        </select>
      </div>

      <div className="ns-resource-field">
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

      <div className="ns-resource-field ns-resource-full">
        <label>Title *</label>

        <input
          required
          value={form.title}
          onChange={(event) =>
            updateField(
              "title",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-resource-field ns-resource-full">
        <label>Description</label>

        <textarea
          rows="3"
          value={form.description}
          onChange={(event) =>
            updateField(
              "description",
              event.target.value,
            )
          }
        />
      </div>

      {form.type === "video" && (
        <>
          <div className="ns-resource-field ns-resource-full">
            <label>YouTube URL *</label>

            <input
              value={form.youtubeUrl}
              onChange={(event) =>
                updateField(
                  "youtubeUrl",
                  event.target.value,
                )
              }
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>

          <div className="ns-resource-field">
            <label>Duration</label>

            <input
              value={form.duration}
              onChange={(event) =>
                updateField(
                  "duration",
                  event.target.value,
                )
              }
              placeholder="12:30"
            />
          </div>
        </>
      )}

      {["pdf", "link", "download"].includes(
        form.type,
      ) && (
        <div className="ns-resource-field ns-resource-full">
          <label>
            {form.type === "pdf"
              ? "PDF URL *"
              : "Resource URL *"}
          </label>

          <input
            value={form.url}
            onChange={(event) =>
              updateField(
                "url",
                event.target.value,
              )
            }
            placeholder="https://..."
          />
        </div>
      )}

      {form.type === "pdf" && (
        <div className="ns-resource-field ns-resource-full">
          <label>Storage path</label>

          <input
            value={form.storagePath}
            onChange={(event) =>
              updateField(
                "storagePath",
                event.target.value,
              )
            }
            placeholder="Optional Firebase Storage path"
          />
        </div>
      )}

      {["note", "assignment"].includes(
        form.type,
      ) && (
        <div className="ns-resource-field ns-resource-full">
          <label>
            {form.type === "assignment"
              ? "Assignment"
              : "Study note"}
          </label>

          <textarea
            rows="9"
            value={form.content}
            onChange={(event) =>
              updateField(
                "content",
                event.target.value,
              )
            }
          />
        </div>
      )}

      <div className="ns-resource-options ns-resource-full">
        <label>
          <input
            type="checkbox"
            checked={form.required}
            onChange={(event) =>
              updateField(
                "required",
                event.target.checked,
              )
            }
          />
          Required
        </label>

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

        {(form.type === "pdf" ||
          form.type === "download") && (
          <label>
            <input
              type="checkbox"
              checked={form.downloadable}
              onChange={(event) =>
                updateField(
                  "downloadable",
                  event.target.checked,
                )
              }
            />
            Download allowed
          </label>
        )}

        <label>
          <input
            type="checkbox"
            checked={form.published}
            onChange={(event) =>
              updateField(
                "published",
                event.target.checked,
              )
            }
          />
          Published
        </label>
      </div>

      <div className="ns-resource-actions ns-resource-full">
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
          {resource
            ? "Update Resource"
            : "Add Resource"}
        </Button>
      </div>

      <style>
        {`
          .ns-resource-form {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .ns-resource-field {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-resource-field label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-resource-field input,
          .ns-resource-field select,
          .ns-resource-field textarea {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #fff;
            padding: 11px 12px;
            color: #0f172a;
            font: inherit;
            outline: none;
          }

          .ns-resource-full {
            grid-column: 1 / -1;
          }

          .ns-resource-options {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .ns-resource-options label {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-resource-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }

          .ns-resource-error {
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
            .ns-resource-form {
              grid-template-columns: 1fr;
            }

            .ns-resource-full {
              grid-column: auto;
            }
          }
        `}
      </style>
    </form>
  );
}