import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaImage,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

import Button from "../../../../shared/components/Button";

import {
  deleteStoredFile,
  uploadFile,
} from "../../../../firebase/storage";

const MAX_IMAGE_SIZE =
  5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

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

  // ---------------------------------------------------------
  // COURSE IMAGES
  // ---------------------------------------------------------

  desktopImageUrl: "",
  desktopImageStoragePath: "",

  mobileImageUrl: "",
  mobileImageStoragePath: "",

  /*
   * Kept for compatibility with existing CourseCard /
   * Admin Course list code.
   *
   * We will automatically make thumbnailUrl point to
   * the desktop 16:9 image.
   */
  thumbnailUrl: "",

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

const isBlobUrl = (value = "") =>
  value.startsWith("blob:");

const revokePreview = (value) => {
  if (value && isBlobUrl(value)) {
    URL.revokeObjectURL(value);
  }
};

const validateImageFile = (
  file,
  label,
) => {
  if (!file) {
    return "";
  }

  if (
    !ALLOWED_IMAGE_TYPES.includes(
      file.type,
    )
  ) {
    return `${label} must be a JPG, PNG or WebP image.`;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return `${label} must be 5 MB or smaller.`;
  }

  return "";
};

const CourseForm = ({
  course = null,
  saving = false,
  onSubmit,
  onCancel,
}) => {
  // =========================================================
  // FILE INPUT REFERENCES
  // =========================================================

  const desktopFileInputRef =
    useRef(null);

  const mobileFileInputRef =
    useRef(null);

  // =========================================================
  // FORM
  // =========================================================

  const [form, setForm] =
    useState(initialCourse);

  const [
    keywordText,
    setKeywordText,
  ] = useState("");

  const [
    validationError,
    setValidationError,
  ] = useState("");

  // =========================================================
  // DESKTOP IMAGE
  // =========================================================

  const [
    desktopFile,
    setDesktopFile,
  ] = useState(null);

  const [
    desktopPreview,
    setDesktopPreview,
  ] = useState("");

  const [
    desktopProgress,
    setDesktopProgress,
  ] = useState(0);

  const [
    desktopError,
    setDesktopError,
  ] = useState("");

  // =========================================================
  // MOBILE IMAGE
  // =========================================================

  const [
    mobileFile,
    setMobileFile,
  ] = useState(null);

  const [
    mobilePreview,
    setMobilePreview,
  ] = useState("");

  const [
    mobileProgress,
    setMobileProgress,
  ] = useState(0);

  const [
    mobileError,
    setMobileError,
  ] = useState("");

  // =========================================================
  // UPLOAD STATE
  // =========================================================

  const [
    uploadingImages,
    setUploadingImages,
  ] = useState(false);

  // =========================================================
  // LOAD COURSE INTO FORM
  // =========================================================

  useEffect(() => {
    revokePreview(desktopPreview);
    revokePreview(mobilePreview);

    if (!course) {
      setForm(initialCourse);

      setKeywordText("");

      setDesktopFile(null);
      setDesktopPreview("");
      setDesktopProgress(0);
      setDesktopError("");

      setMobileFile(null);
      setMobilePreview("");
      setMobileProgress(0);
      setMobileError("");

      if (
        desktopFileInputRef.current
      ) {
        desktopFileInputRef.current.value =
          "";
      }

      if (
        mobileFileInputRef.current
      ) {
        mobileFileInputRef.current.value =
          "";
      }

      return;
    }

    const normalizedCourse = {
      ...initialCourse,
      ...course,

      certificationAvailable:
        course.certification
          ?.available ??
        course.certificationAvailable ??
        false,

      certificationFee:
        course.certification?.fee ??
        course.certificationFee ??
        0,

      desktopImageUrl:
        course.media
          ?.desktopImageUrl ??
        course.desktopImageUrl ??
        "",

      desktopImageStoragePath:
        course.media
          ?.desktopImageStoragePath ??
        course.desktopImageStoragePath ??
        "",

      mobileImageUrl:
        course.media
          ?.mobileImageUrl ??
        course.mobileImageUrl ??
        "",

      mobileImageStoragePath:
        course.media
          ?.mobileImageStoragePath ??
        course.mobileImageStoragePath ??
        "",

      thumbnailUrl:
        course.media
          ?.thumbnailUrl ??
        course.thumbnailUrl ??
        course.media
          ?.desktopImageUrl ??
        course.desktopImageUrl ??
        "",

      seo: {
        ...initialCourse.seo,
        ...(course.seo || {}),
      },
    };

    setForm(
      normalizedCourse,
    );

    setKeywordText(
      Array.isArray(
        normalizedCourse.seo
          .secondaryKeywords,
      )
        ? normalizedCourse.seo.secondaryKeywords.join(
            ", ",
          )
        : "",
    );

    setDesktopFile(null);

    setDesktopPreview(
      normalizedCourse.desktopImageUrl ||
        "",
    );

    setDesktopProgress(0);
    setDesktopError("");

    setMobileFile(null);

    setMobilePreview(
      normalizedCourse.mobileImageUrl ||
        "",
    );

    setMobileProgress(0);
    setMobileError("");

    if (
      desktopFileInputRef.current
    ) {
      desktopFileInputRef.current.value =
        "";
    }

    if (
      mobileFileInputRef.current
    ) {
      mobileFileInputRef.current.value =
        "";
    }
  }, [course]);

  // =========================================================
  // CLEAN UP PREVIEW URLS
  // =========================================================

  useEffect(() => {
    return () => {
      revokePreview(
        desktopPreview,
      );

      revokePreview(
        mobilePreview,
      );
    };
  }, []);

  // =========================================================
  // FORM HELPERS
  // =========================================================

  const updateField = (
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateSeoField = (
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,

      seo: {
        ...current.seo,
        [field]: value,
      },
    }));
  };

  const handleTitleChange = (
    value,
  ) => {
    setForm((current) => ({
      ...current,

      title: value,

      slug:
        course ||
        current.slug
          ? current.slug
          : createSlug(value),
    }));
  };

  // =========================================================
  // DESKTOP IMAGE
  // =========================================================

  const handleDesktopImageChange =
    (event) => {
      const file =
        event.target.files?.[0];

      setDesktopError("");

      if (!file) {
        return;
      }

      const error =
        validateImageFile(
          file,
          "Desktop image",
        );

      if (error) {
        setDesktopError(
          error,
        );

        event.target.value =
          "";

        return;
      }

      revokePreview(
        desktopPreview,
      );

      const previewUrl =
        URL.createObjectURL(
          file,
        );

      setDesktopFile(
        file,
      );

      setDesktopPreview(
        previewUrl,
      );

      setDesktopProgress(0);
    };

  const chooseDesktopImage =
    () => {
      desktopFileInputRef.current?.click();
    };

  const removeDesktopImage =
    () => {
      revokePreview(
        desktopPreview,
      );

      setDesktopFile(null);
      setDesktopPreview("");
      setDesktopProgress(0);
      setDesktopError("");

      setForm((current) => ({
        ...current,

        desktopImageUrl: "",

        desktopImageStoragePath:
          "",

        /*
         * Desktop image is also used as the
         * compatibility thumbnail.
         */
        thumbnailUrl: "",
      }));

      if (
        desktopFileInputRef.current
      ) {
        desktopFileInputRef.current.value =
          "";
      }
    };

  // =========================================================
  // MOBILE IMAGE
  // =========================================================

  const handleMobileImageChange =
    (event) => {
      const file =
        event.target.files?.[0];

      setMobileError("");

      if (!file) {
        return;
      }

      const error =
        validateImageFile(
          file,
          "Mobile image",
        );

      if (error) {
        setMobileError(
          error,
        );

        event.target.value =
          "";

        return;
      }

      revokePreview(
        mobilePreview,
      );

      const previewUrl =
        URL.createObjectURL(
          file,
        );

      setMobileFile(
        file,
      );

      setMobilePreview(
        previewUrl,
      );

      setMobileProgress(0);
    };

  const chooseMobileImage =
    () => {
      mobileFileInputRef.current?.click();
    };

  const removeMobileImage =
    () => {
      revokePreview(
        mobilePreview,
      );

      setMobileFile(null);
      setMobilePreview("");
      setMobileProgress(0);
      setMobileError("");

      setForm((current) => ({
        ...current,

        mobileImageUrl: "",

        mobileImageStoragePath:
          "",
      }));

      if (
        mobileFileInputRef.current
      ) {
        mobileFileInputRef.current.value =
          "";
      }
    };

  // =========================================================
  // FORM VALIDATION
  // =========================================================

  const validate = () => {
    if (!form.title.trim()) {
      return "Course title is required.";
    }

    if (!form.slug.trim()) {
      return "Course slug is required.";
    }

    if (
      !form.shortDescription.trim()
    ) {
      return "Short description is required.";
    }

    if (
      form.certificationAvailable &&
      Number(
        form.certificationFee,
      ) < 0
    ) {
      return "Certification fee cannot be negative.";
    }

    return "";
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    const error =
      validate();

    if (error) {
      setValidationError(
        error,
      );

      return;
    }

    setValidationError("");
    setDesktopError("");
    setMobileError("");

    let finalDesktopImageUrl =
      form.desktopImageUrl ||
      "";

    let finalDesktopStoragePath =
      form.desktopImageStoragePath ||
      "";

    let finalMobileImageUrl =
      form.mobileImageUrl ||
      "";

    let finalMobileStoragePath =
      form.mobileImageStoragePath ||
      "";

    let newDesktopUpload =
      null;

    let newMobileUpload =
      null;

    try {
      setUploadingImages(
        true,
      );

      // =====================================================
      // UPLOAD DESKTOP 16:9 IMAGE
      // =====================================================

      if (desktopFile) {
        setDesktopProgress(
          0,
        );

        newDesktopUpload =
          await uploadFile({
            file:
              desktopFile,

            folder:
              "nagariksuraksha/courses/desktop-16x9",

            onProgress:
              setDesktopProgress,
          });

        finalDesktopImageUrl =
          newDesktopUpload.downloadURL;

        finalDesktopStoragePath =
          newDesktopUpload.storagePath;
      }

      // =====================================================
      // UPLOAD MOBILE 9:16 IMAGE
      // =====================================================

      if (mobileFile) {
        setMobileProgress(
          0,
        );

        newMobileUpload =
          await uploadFile({
            file:
              mobileFile,

            folder:
              "nagariksuraksha/courses/mobile-9x16",

            onProgress:
              setMobileProgress,
          });

        finalMobileImageUrl =
          newMobileUpload.downloadURL;

        finalMobileStoragePath =
          newMobileUpload.storagePath;
      }

      // =====================================================
      // BUILD COURSE PAYLOAD
      // =====================================================

      const payload = {
        ...form,

        slug: createSlug(
          form.slug ||
            form.title,
        ),

        order: Number(
          form.order || 0,
        ),

        certificationFee:
          Number(
            form.certificationFee ||
              0,
          ),

        desktopImageUrl:
          finalDesktopImageUrl,

        desktopImageStoragePath:
          finalDesktopStoragePath,

        mobileImageUrl:
          finalMobileImageUrl,

        mobileImageStoragePath:
          finalMobileStoragePath,

        /*
         * Keep thumbnailUrl automatically pointed
         * to the desktop 16:9 image.
         *
         * Existing Admin / Student CourseCard code
         * can continue displaying the course image
         * without requiring a third upload.
         */
        thumbnailUrl:
          finalDesktopImageUrl,

        seo: {
          ...form.seo,

          secondaryKeywords:
            keywordText
              .split(",")
              .map(
                (keyword) =>
                  keyword.trim(),
              )
              .filter(
                Boolean,
              ),
        },
      };

      // =====================================================
      // SAVE COURSE TO FIRESTORE
      // =====================================================

      await onSubmit?.(
        payload,
      );

      // =====================================================
      // OLD CLOUDINARY IMAGE CLEANUP
      // =====================================================
      //
      // deleteStoredFile() currently safely does nothing
      // because real Cloudinary deletion requires server-side
      // authentication.
      // =====================================================

      if (
        newDesktopUpload &&
        form.desktopImageStoragePath &&
        form.desktopImageStoragePath !==
          newDesktopUpload.storagePath
      ) {
        try {
          await deleteStoredFile(
            form.desktopImageStoragePath,
          );
        } catch (
          deleteError
        ) {
          console.warn(
            "Unable to remove old desktop image:",
            deleteError,
          );
        }
      }

      if (
        newMobileUpload &&
        form.mobileImageStoragePath &&
        form.mobileImageStoragePath !==
          newMobileUpload.storagePath
      ) {
        try {
          await deleteStoredFile(
            form.mobileImageStoragePath,
          );
        } catch (
          deleteError
        ) {
          console.warn(
            "Unable to remove old mobile image:",
            deleteError,
          );
        }
      }

      // =====================================================
      // UPDATE LOCAL FORM STATE
      // =====================================================

      setDesktopFile(null);

      setMobileFile(null);

      setDesktopPreview(
        finalDesktopImageUrl,
      );

      setMobilePreview(
        finalMobileImageUrl,
      );

      setForm((current) => ({
        ...current,

        desktopImageUrl:
          finalDesktopImageUrl,

        desktopImageStoragePath:
          finalDesktopStoragePath,

        mobileImageUrl:
          finalMobileImageUrl,

        mobileImageStoragePath:
          finalMobileStoragePath,

        thumbnailUrl:
          finalDesktopImageUrl,
      }));

      if (
        newDesktopUpload
      ) {
        setDesktopProgress(
          100,
        );
      }

      if (
        newMobileUpload
      ) {
        setMobileProgress(
          100,
        );
      }

      if (
        desktopFileInputRef.current
      ) {
        desktopFileInputRef.current.value =
          "";
      }

      if (
        mobileFileInputRef.current
      ) {
        mobileFileInputRef.current.value =
          "";
      }
    } catch (submitError) {
      console.error(
        "Unable to save course images:",
        submitError,
      );

      const message =
        submitError?.message ||
        "Unable to upload the course images.";

      /*
       * Display the upload error near both image
       * controls because either upload might have failed.
       */

      if (desktopFile) {
        setDesktopError(
          message,
        );
      }

      if (mobileFile) {
        setMobileError(
          message,
        );
      }

      throw submitError;
    } finally {
      setUploadingImages(
        false,
      );
    }
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="ns-course-form"
    >
      {validationError && (
        <div className="ns-course-form-error ns-full-width">
          {
            validationError
          }
        </div>
      )}

      {/* =====================================================
          BASIC COURSE INFORMATION
      ====================================================== */}

      <div className="ns-course-field ns-full-width">
        <label htmlFor="course-title">
          Course title *
        </label>

        <input
          id="course-title"
          required
          value={
            form.title
          }
          onChange={(
            event,
          ) =>
            handleTitleChange(
              event.target.value,
            )
          }
          placeholder="Enter course title"
        />
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-slug">
          Slug *
        </label>

        <input
          id="course-slug"
          required
          value={
            form.slug
          }
          onChange={(
            event,
          ) =>
            updateField(
              "slug",
              createSlug(
                event.target.value,
              ),
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
          value={
            form.order
          }
          onChange={(
            event,
          ) =>
            updateField(
              "order",
              event.target.value,
            )
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
          value={
            form.shortDescription
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.description
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.duration
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.instructor
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.courseType
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.accessType
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.language
          }
          onChange={(
            event,
          ) =>
            updateField(
              "language",
              event.target.value,
            )
          }
        >
          <option value="English">
            English
          </option>

          <option value="Bengali">
            Bengali
          </option>

          <option value="Hindi">
            Hindi
          </option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-level">
          Difficulty level
        </label>

        <select
          id="course-level"
          value={
            form.level
          }
          onChange={(
            event,
          ) =>
            updateField(
              "level",
              event.target.value,
            )
          }
        >
          <option value="beginner">
            Beginner
          </option>

          <option value="intermediate">
            Intermediate
          </option>

          <option value="advanced">
            Advanced
          </option>
        </select>
      </div>

      <div className="ns-course-field">
        <label htmlFor="course-status">
          Status
        </label>

        <select
          id="course-status"
          value={
            form.status
          }
          onChange={(
            event,
          ) =>
            updateField(
              "status",
              event.target.value,
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
      </div>

      <div className="ns-course-options">
        <label className="ns-course-checkbox">
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
                event.target.checked,
              )
            }
          />

          Featured course
        </label>

        <label className="ns-course-checkbox">
          <input
            type="checkbox"
            checked={
              form.certificationAvailable
            }
            onChange={(
              event,
            ) =>
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
            value={
              form.certificationFee
            }
            onChange={(
              event,
            ) =>
              updateField(
                "certificationFee",
                event.target.value,
              )
            }
          />
        </div>
      )}

      {/* =====================================================
          COURSE IMAGES
      ====================================================== */}

      <h3 className="ns-course-section-title">
        Course Images
      </h3>

      {/* =====================================================
          DESKTOP IMAGE 16:9
      ====================================================== */}

      <div className="ns-course-image-panel ns-full-width">
        <div className="ns-course-image-heading">
          <div>
            <h4>
              Desktop Image — 16:9
            </h4>

            <p>
              Recommended:
              1280 × 720 px
            </p>
          </div>

          <span>
            JPG, PNG or WebP
            • Max 5 MB
          </span>
        </div>

        <div className="ns-desktop-image-preview">
          {desktopPreview ? (
            <img
              src={
                desktopPreview
              }
              alt="Desktop course preview"
            />
          ) : (
            <div className="ns-course-image-empty">
              <FaImage />

              <strong>
                No desktop image
              </strong>

              <span>
                Choose a 16:9 image
                from your computer
              </span>
            </div>
          )}
        </div>

        <input
          ref={
            desktopFileInputRef
          }
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="ns-course-hidden-file-input"
          onChange={
            handleDesktopImageChange
          }
        />

        <div className="ns-course-image-actions">
          <button
            type="button"
            className="ns-course-upload-button"
            onClick={
              chooseDesktopImage
            }
            disabled={
              uploadingImages ||
              saving
            }
          >
            <FaUpload />

            {desktopPreview
              ? "Replace Desktop Image"
              : "Choose Desktop Image"}
          </button>

          {desktopPreview && (
            <button
              type="button"
              className="ns-course-remove-image"
              onClick={
                removeDesktopImage
              }
              disabled={
                uploadingImages ||
                saving
              }
            >
              <FaTrash />
              Remove
            </button>
          )}
        </div>

        {desktopFile && (
          <div className="ns-course-selected-file">
            Selected:{" "}
            <strong>
              {
                desktopFile.name
              }
            </strong>
          </div>
        )}

        {(uploadingImages &&
          desktopFile) ||
        desktopProgress > 0 ? (
          <div className="ns-course-upload-progress">
            <div className="ns-course-upload-progress-label">
              <span>
                Desktop image
              </span>

              <strong>
                {
                  desktopProgress
                }
                %
              </strong>
            </div>

            <div className="ns-course-upload-track">
              <div
                style={{
                  width: `${desktopProgress}%`,
                }}
              />
            </div>
          </div>
        ) : null}

        {desktopError && (
          <div className="ns-course-image-error">
            {
              desktopError
            }
          </div>
        )}
      </div>

      {/* =====================================================
          MOBILE IMAGE 9:16
      ====================================================== */}

      <div className="ns-course-image-panel ns-full-width">
        <div className="ns-course-image-heading">
          <div>
            <h4>
              Mobile Image — 9:16
            </h4>

            <p>
              Recommended:
              1080 × 1920 px
            </p>
          </div>

          <span>
            JPG, PNG or WebP
            • Max 5 MB
          </span>
        </div>

        <div className="ns-mobile-preview-wrapper">
          <div className="ns-mobile-image-preview">
            {mobilePreview ? (
              <img
                src={
                  mobilePreview
                }
                alt="Mobile course preview"
              />
            ) : (
              <div className="ns-course-image-empty">
                <FaImage />

                <strong>
                  No mobile image
                </strong>

                <span>
                  Choose a 9:16 image
                </span>
              </div>
            )}
          </div>
        </div>

        <input
          ref={
            mobileFileInputRef
          }
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="ns-course-hidden-file-input"
          onChange={
            handleMobileImageChange
          }
        />

        <div className="ns-course-image-actions">
          <button
            type="button"
            className="ns-course-upload-button"
            onClick={
              chooseMobileImage
            }
            disabled={
              uploadingImages ||
              saving
            }
          >
            <FaUpload />

            {mobilePreview
              ? "Replace Mobile Image"
              : "Choose Mobile Image"}
          </button>

          {mobilePreview && (
            <button
              type="button"
              className="ns-course-remove-image"
              onClick={
                removeMobileImage
              }
              disabled={
                uploadingImages ||
                saving
              }
            >
              <FaTrash />
              Remove
            </button>
          )}
        </div>

        {mobileFile && (
          <div className="ns-course-selected-file">
            Selected:{" "}
            <strong>
              {
                mobileFile.name
              }
            </strong>
          </div>
        )}

        {(uploadingImages &&
          mobileFile) ||
        mobileProgress > 0 ? (
          <div className="ns-course-upload-progress">
            <div className="ns-course-upload-progress-label">
              <span>
                Mobile image
              </span>

              <strong>
                {
                  mobileProgress
                }
                %
              </strong>
            </div>

            <div className="ns-course-upload-track">
              <div
                style={{
                  width: `${mobileProgress}%`,
                }}
              />
            </div>
          </div>
        ) : null}

        {mobileError && (
          <div className="ns-course-image-error">
            {
              mobileError
            }
          </div>
        )}
      </div>

      {/* =====================================================
          SEO
      ====================================================== */}

      <h3 className="ns-course-section-title">
        Course SEO
      </h3>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="seo-title">
          SEO title
        </label>

        <input
          id="seo-title"
          maxLength={60}
          value={
            form.seo.title
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.seo.description
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.seo.focusKeyword
          }
          onChange={(
            event,
          ) =>
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
          value={
            form.seo.canonicalUrl
          }
          onChange={(
            event,
          ) =>
            updateSeoField(
              "canonicalUrl",
              event.target.value,
            )
          }
        />
      </div>

      <div className="ns-course-field ns-full-width">
        <label htmlFor="secondary-keywords">
          Secondary keywords —
          comma separated
        </label>

        <input
          id="secondary-keywords"
          value={
            keywordText
          }
          onChange={(
            event,
          ) =>
            setKeywordText(
              event.target.value,
            )
          }
        />
      </div>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="ns-course-form-actions ns-full-width">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={
              onCancel
            }
            disabled={
              uploadingImages
            }
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          loading={
            saving ||
            uploadingImages
          }
          disabled={
            uploadingImages
          }
        >
          {course
            ? "Update Course"
            : "Create Course"}
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
            box-sizing: border-box;
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
              rgba(
                37,
                99,
                235,
                0.12
              );
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
            border-top:
              1px solid #e2e8f0;
            padding-top: 20px;
            color: #0f172a;
            font-size: 17px;
          }

          /* =================================================
             IMAGE PANEL
          ================================================= */

          .ns-course-image-panel {
            border:
              1px solid #e2e8f0;
            border-radius: 15px;
            background: #f8fafc;
            padding: 17px;
          }

          .ns-course-image-heading {
            display: flex;
            align-items:
              flex-start;
            justify-content:
              space-between;
            gap: 16px;
            margin-bottom: 14px;
          }

          .ns-course-image-heading h4 {
            margin: 0;
            color: #0f172a;
            font-size: 14px;
          }

          .ns-course-image-heading p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 11px;
          }

          .ns-course-image-heading > span {
            color: #64748b;
            font-size: 11px;
          }

          /* Desktop Preview */

          .ns-desktop-image-preview {
            overflow: hidden;
            width: 100%;
            max-width: 680px;
            aspect-ratio: 16 / 9;
            border:
              2px dashed #cbd5e1;
            border-radius: 14px;
            background: #ffffff;
          }

          .ns-desktop-image-preview img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Mobile Preview */

          .ns-mobile-preview-wrapper {
            display: flex;
            justify-content:
              flex-start;
          }

          .ns-mobile-image-preview {
            overflow: hidden;
            width: 240px;
            max-width: 100%;
            aspect-ratio: 9 / 16;
            border:
              2px dashed #cbd5e1;
            border-radius: 18px;
            background: #ffffff;
          }

          .ns-mobile-image-preview img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ns-course-image-empty {
            display: flex;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            flex-direction:
              column;
            gap: 8px;
            color: #64748b;
            padding: 20px;
            text-align: center;
          }

          .ns-course-image-empty svg {
            color: #94a3b8;
            font-size: 35px;
          }

          .ns-course-image-empty strong {
            color: #334155;
            font-size: 13px;
          }

          .ns-course-image-empty span {
            font-size: 11px;
          }

          .ns-course-hidden-file-input {
            display: none;
          }

          .ns-course-image-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
          }

          .ns-course-upload-button,
          .ns-course-remove-image {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            border-radius: 9px;
            padding: 9px 13px;
            font: inherit;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
          }

          .ns-course-upload-button {
            border:
              1px solid #bfdbfe;
            background: #eff6ff;
            color: #2563eb;
          }

          .ns-course-upload-button:hover {
            background: #dbeafe;
          }

          .ns-course-remove-image {
            border:
              1px solid #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-course-remove-image:hover {
            background: #fee2e2;
          }

          .ns-course-upload-button:disabled,
          .ns-course-remove-image:disabled {
            cursor: not-allowed;
            opacity: .55;
          }

          .ns-course-selected-file {
            margin-top: 10px;
            color: #64748b;
            font-size: 11px;
          }

          /* Progress */

          .ns-course-upload-progress {
            max-width: 680px;
            margin-top: 13px;
          }

          .ns-course-upload-progress-label {
            display: flex;
            justify-content:
              space-between;
            margin-bottom: 6px;
            color: #475569;
            font-size: 11px;
          }

          .ns-course-upload-progress-label strong {
            color: #2563eb;
          }

          .ns-course-upload-track {
            overflow: hidden;
            height: 8px;
            border-radius: 999px;
            background: #dbeafe;
          }

          .ns-course-upload-track > div {
            height: 100%;
            border-radius: inherit;
            background: #2563eb;
            transition:
              width .2s ease;
          }

          .ns-course-image-error {
            max-width: 680px;
            margin-top: 12px;
            border:
              1px solid #fecaca;
            border-radius: 9px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 10px 12px;
            font-size: 12px;
            font-weight: 700;
          }

          /* Actions */

          .ns-course-form-actions {
            display: flex;
            justify-content:
              flex-end;
            gap: 10px;
            margin-top: 8px;
          }

          .ns-course-form-error {
            border:
              1px solid #fecaca;
            border-radius: 10px;
            background: #fef2f2;
            color: #b91c1c;
            padding: 12px 14px;
            font-size: 13px;
            font-weight: 700;
          }

          @media (
            max-width: 700px
          ) {
            .ns-course-form {
              grid-template-columns:
                1fr;
            }

            .ns-full-width,
            .ns-course-section-title {
              grid-column:
                auto;
            }

            .ns-course-image-heading {
              flex-direction:
                column;
            }

            .ns-desktop-image-preview {
              max-width: none;
            }

            .ns-mobile-preview-wrapper {
              justify-content:
                center;
            }

            .ns-course-form-actions {
              flex-direction:
                column-reverse;
            }

            .ns-course-form-actions button {
              width:
                100% !important;
            }
          }
        `}
      </style>
    </form>
  );
};

export default CourseForm;