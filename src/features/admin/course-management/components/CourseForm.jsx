import { useEffect, useState } from "react";

import Button from "../../../../shared/components/Button";

const initialCourse = {
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  duration: "",
  courseType: "subject-course",
  accessType: "free-learning",
  language: "English",
  level: "beginner",
  instructor: "",
  certificationAvailable: false,
  certificationFee: 0,
  featured: false,
  status: "draft",
  order: 1,
  thumbnailUrl: "",
  desktopImageUrl: "",
  mobileImageUrl: "",
  seo: {
    title: "",
    description: "",
    focusKeyword: "",
    secondaryKeywords: [],
    canonicalUrl: "",
  },
};

const createSlug = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const CourseForm = ({
  course = null,
  saving = false,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState(initialCourse);
  const [keywordText, setKeywordText] = useState("");
  const [validationError, setValidationError] =
    useState("");

  useEffect(() => {
    if (!course) {
      setForm(initialCourse);
      setKeywordText("");
      return;
    }

    const normalizedCourse = {
      ...initialCourse,
      ...course,

      certificationAvailable:
        course.certification?.available ??
        course.certificationAvailable ??
        false,

      certificationFee:
        course.certification?.fee ??
        course.certificationFee ??
        0,

      thumbnailUrl:
        course.media?.thumbnailUrl ??
        course.thumbnailUrl ??
        "",

      desktopImageUrl:
        course.media?.desktopImageUrl ??
        course.desktopImageUrl ??
        "",

      mobileImageUrl:
        course.media?.mobileImageUrl ??
        course.mobileImageUrl ??
        "",

      seo: {
        ...initialCourse.seo,
        ...(course.seo || {}),
      },
    };

    setForm(normalizedCourse);

    setKeywordText(
      Array.isArray(normalizedCourse.seo.secondaryKeywords)
        ? normalizedCourse.seo.secondaryKeywords.join(", ")
        : "",
    );
  }, [course]);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateSeoField = (field, value) => {
    setForm((current) => ({
      ...current,
      seo: {
        ...current.seo,
        [field]: value,
      },
    }));
  };

  const handleTitleChange = (value) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug:
        course || current.slug
          ? current.slug
          : createSlug(value),
    }));
  };

  const validate = () => {
    if (!form.title.trim()) {
      return "Course title is required.";
    }

    if (!form.slug.trim()) {
      return "Course slug is required.";
    }

    if (!form.shortDescription.trim()) {
      return "Short description is required.";
    }

    if (
      form.certificationAvailable &&
      Number(form.certificationFee) < 0
    ) {
      return "Certification fee cannot be negative.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validate();

    if (error) {
      setValidationError(error);
      return;
    }

    setValidationError("");

    const payload = {
      ...form,
      slug: createSlug(form.slug || form.title),
      order: Number(form.order || 0),
      certificationFee: Number(
        form.certificationFee || 0,
      ),
      seo: {
        ...form.seo,
        secondaryKeywords: keywordText
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean),
      },
    };

    await onSubmit?.(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ns-course-form"
    >
      {validationError && (
        <div className="ns-course-form-error ns-full-width">
          {validationError}
        </div>
      )}

      <div className="ns-course-field ns-full-width">
        <label htmlFor="course-title">
          Course title *
        </label>

        <input
          id="course-title"
          required
          value={form.title}
          onChange={(event) =>
            handleTitleChange(event.target.value)
          }
          placeholder="Enter course title"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-slug">Slug *</label>

        <input
          id="course-slug"
          required
          value={form.slug}
          onChange={(event) =>
            updateField(
              "slug",
              createSlug(event.target.value),
            )
          }
          placeholder="course-url-slug"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-order">
          Display order
        </label>

        <input
          id="course-order"
          type="number"
          min="0"
          value={form.order}
          onChange={(event) =>
            updateField("order", event.target.value)
          }
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="course-short-description">
          Short description *
        </label>

        <textarea
          id="course-short-description"
          required
          rows="3"
          value={form.shortDescription}
          onChange={(event) =>
            updateField(
              "shortDescription",
              event.target.value,
            )
          }
          placeholder="Brief description shown on course cards"
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="course-description">
          Full description
        </label>

        <textarea
          id="course-description"
          rows="7"
          value={form.description}
          onChange={(event) =>
            updateField(
              "description",
              event.target.value,
            )
          }
          placeholder="Detailed course information"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-duration">
          Duration
        </label>

        <input
          id="course-duration"
          value={form.duration}
          onChange={(event) =>
            updateField(
              "duration",
              event.target.value,
            )
          }
          placeholder="Self-paced or 8 weeks"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-instructor">
          Instructor
        </label>

        <input
          id="course-instructor"
          value={form.instructor}
          onChange={(event) =>
            updateField(
              "instructor",
              event.target.value,
            )
          }
          placeholder="Instructor name"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-type">
          Course type
        </label>

        <select
          id="course-type"
          value={form.courseType}
          onChange={(event) =>
            updateField(
              "courseType",
              event.target.value,
            )
          }
        >
          <option value="subject-course">
            Subject Course
          </option>

          <option value="degree-support">
            Degree Support
          </option>

          <option value="certificate-course">
            Certificate Course
          </option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="access-type">
          Access type
        </label>

        <select
          id="access-type"
          value={form.accessType}
          onChange={(event) =>
            updateField(
              "accessType",
              event.target.value,
            )
          }
        >
          <option value="free-learning">
            Free Learning
          </option>

          <option value="subscription">
            Subscription
          </option>

          <option value="certification">
            Certification
          </option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-language">
          Language
        </label>

        <select
          id="course-language"
          value={form.language}
          onChange={(event) =>
            updateField(
              "language",
              event.target.value,
            )
          }
        >
          <option value="English">English</option>
          <option value="Bengali">Bengali</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-level">
          Difficulty level
        </label>

        <select
          id="course-level"
          value={form.level}
          onChange={(event) =>
            updateField(
              "level",
              event.target.value,
            )
          }
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">
            Intermediate
          </option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-status">
          Status
        </label>

        <select
          id="course-status"
          value={form.status}
          onChange={(event) =>
            updateField(
              "status",
              event.target.value,
            )
          }
        >
          <option value="draft">Draft</option>
          <option value="published">
            Published
          </option>
          <option value="archived">
            Archived
          </option>
        </select>
      </div>

      <div className="ns-course-options">
        <label className="ns-course-checkbox">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) =>
              updateField(
                "featured",
                event.target.checked,
              )
            }
          />

          Featured course
        </label>

        <label className="ns-course-checkbox">
          <input
            type="checkbox"
            checked={form.certificationAvailable}
            onChange={(event) =>
              updateField(
                "certificationAvailable",
                event.target.checked,
              )
            }
          />

          Certification available
        </label>
      </div>

      {form.certificationAvailable && (
        <div className="ns-course-field ns-full-width">
          <label htmlFor="certification-fee">
            Certification fee
          </label>

          <input
            id="certification-fee"
            type="number"
            min="0"
            value={form.certificationFee}
            onChange={(event) =>
              updateField(
                "certificationFee",
                event.target.value,
              )
            }
          />
        </div>
      )}

      <h3 className="ns-course-section-title">
        Course Images
      </h3>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="thumbnail-url">
          Thumbnail URL
        </label>

        <input
          id="thumbnail-url"
          value={form.thumbnailUrl}
          onChange={(event) =>
            updateField(
              "thumbnailUrl",
              event.target.value,
            )
          }
          placeholder="Square or compact course thumbnail"
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="desktop-image">
          Desktop image URL — 16:9
        </label>

        <input
          id="desktop-image"
          value={form.desktopImageUrl}
          onChange={(event) =>
            updateField(
              "desktopImageUrl",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="mobile-image">
          Mobile image URL — 9:16
        </label>

        <input
          id="mobile-image"
          value={form.mobileImageUrl}
          onChange={(event) =>
            updateField(
              "mobileImageUrl",
              event.target.value,
            )
          }
        />
      </div>

      <h3 className="ns-course-section-title">
        Course SEO
      </h3>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="seo-title">SEO title</label>

        <input
          id="seo-title"
          maxLength={60}
          value={form.seo.title}
          onChange={(event) =>
            updateSeoField(
              "title",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="seo-description">
          Meta description
        </label>

        <textarea
          id="seo-description"
          rows="4"
          maxLength={160}
          value={form.seo.description}
          onChange={(event) =>
            updateSeoField(
              "description",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="focus-keyword">
          Focus keyword
        </label>

        <input
          id="focus-keyword"
          value={form.seo.focusKeyword}
          onChange={(event) =>
            updateSeoField(
              "focusKeyword",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="canonical-url">
          Canonical URL
        </label>

        <input
          id="canonical-url"
          value={form.seo.canonicalUrl}
          onChange={(event) =>
            updateSeoField(
              "canonicalUrl",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="secondary-keywords">
          Secondary keywords — comma separated
        </label>

        <input
          id="secondary-keywords"
          value={keywordText}
          onChange={(event) =>
            setKeywordText(event.target.value)
          }
        />
      </div>

      <div className="ns-course-form-actions ns-full-width">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}

        <Button type="submit" loading={saving}>
          {course ? "Update Course" : "Create Course"}
        </Button>
      </div>

      <style>
        {`
          .ns-course-form {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .ns-course-field {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-course-field label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-course-field input,
          .ns-course-field textarea,
          .ns-course-field select {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            color: #0f172a;
            padding: 11px 12px;
            font: inherit;
            outline: none;
          }

          .ns-course-field input:focus,
          .ns-course-field textarea:focus,
          .ns-course-field select:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37, 99, 235, 0.12);
          }

          .ns-full-width {
            grid-column: 1 / -1;
          }

          .ns-course-options {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
          }

          .ns-course-checkbox {
            display: flex;
            align-items: center;
            gap: 9px;
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-course-section-title {
            grid-column: 1 / -1;
            margin: 10px 0 0;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            color: #0f172a;
            font-size: 17px;
          }

          .ns-course-form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 8px;
          }

          .ns-course-form-error {
            border: 1px solid #fecaca;
            border-radius: 10px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 12px 14px;
            font-size: 13px;
            font-weight: 700;
          }

          @media (max-width: 700px) {
            .ns-course-form {
              grid-template-columns: 1fr;
            }

            .ns-full-width,
            .ns-course-section-title {
              grid-column: auto;
            }

            .ns-course-form-actions {
              flex-direction: column-reverse;
            }

            .ns-course-form-actions button {
              width: 100% !important;
            }
          }
        `}
      </style>
    </form>
  );
};

export default CourseForm;