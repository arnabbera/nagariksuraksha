import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaBook,
  FaCheckCircle,
  FaEdit,
  FaExternalLinkAlt,
  FaImage,
  FaPlus,
  FaTrash,
  FaUpload,
} from "react-icons/fa";

import { useAuth } from "../../../../hooks/useAuth";

import {
  getAllCourses,
} from "../../../../services/courseService";

import {
  addCourseBook,
  checkRecommendedBookRequirement,
  editCourseBook,
  getBooksByCourse,
  removeCourseBook,
} from "../../../../services/courseBookService";

import {
  uploadFile,
} from "../../../../firebase/storage";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

// =========================================================
// CONSTANTS
// =========================================================

const MAX_COVER_SIZE =
  5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const EMPTY_FORM = {
  courseId: "",

  title: "",
  author: "",
  publisher: "",
  edition: "",
  publicationYear: "",
  isbn: "",

  description: "",

  coverImageUrl: "",
  coverImageStoragePath: "",

  referenceUrl: "",

  displayOrder: 1,

  recommended: true,
  published: true,
};

// =========================================================
// HELPERS
// =========================================================

const formatFileSize = (
  bytes = 0,
) => {
  const size =
    Number(bytes || 0);

  if (!size) {
    return "";
  }

  if (size < 1024) {
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

export default function CourseBookManagement() {
  const {
    profile,
    firebaseUser,
  } = useAuth();

  const coverInputRef =
    useRef(null);

  // =========================================================
  // STATE
  // =========================================================

  const [
    courses,
    setCourses,
  ] = useState([]);

  const [
    books,
    setBooks,
  ] = useState([]);

  const [
    selectedCourseId,
    setSelectedCourseId,
  ] = useState("");

  const [
    editingBook,
    setEditingBook,
  ] = useState(null);

  const [
    form,
    setForm,
  ] = useState(
    EMPTY_FORM,
  );

  const [
    coverFile,
    setCoverFile,
  ] = useState(null);

  const [
    coverPreview,
    setCoverPreview,
  ] = useState("");

  const [
    uploadProgress,
    setUploadProgress,
  ] = useState(0);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    bookLoading,
    setBookLoading,
  ] = useState(false);

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    uploadingCover,
    setUploadingCover,
  ] = useState(false);

  const [
    requirement,
    setRequirement,
  ] = useState({
    minimumRequired: 10,
    currentCount: 0,
    remaining: 10,
    satisfied: false,
  });

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (!selectedCourseId) {
      setBooks([]);

      setRequirement({
        minimumRequired: 10,
        currentCount: 0,
        remaining: 10,
        satisfied: false,
      });

      return;
    }

    loadBooks(
      selectedCourseId,
    );
  }, [
    selectedCourseId,
  ]);

  // =========================================================
  // CLEAN PREVIEW URL
  // =========================================================

  useEffect(() => {
    return () => {
      if (
        coverPreview?.startsWith(
          "blob:",
        )
      ) {
        URL.revokeObjectURL(
          coverPreview,
        );
      }
    };
  }, [
    coverPreview,
  ]);

  // =========================================================
  // LOAD COURSES
  // =========================================================

  const loadCourses =
    async () => {
      try {
        setLoading(true);
        setError("");

        const result =
          await getAllCourses();

        const availableCourses =
          (
            Array.isArray(result)
              ? result
              : []
          )
            .filter(
              (course) =>
                course.deleted !==
                true,
            )
            .sort(
              (
                first,
                second,
              ) =>
                Number(
                  first.order ||
                    0,
                ) -
                Number(
                  second.order ||
                    0,
                ),
            );

        setCourses(
          availableCourses,
        );

        if (
          availableCourses.length >
          0
        ) {
          setSelectedCourseId(
            availableCourses[0]
              .id,
          );

          setForm((current) => ({
            ...current,

            courseId:
              availableCourses[0]
                .id,
          }));
        }
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load courses:",
          loadError,
        );

        setError(
          "Unable to load courses.",
        );
      } finally {
        setLoading(false);
      }
    };

  // =========================================================
  // LOAD BOOKS
  // =========================================================

  const loadBooks =
    async (
      courseId,
    ) => {
      try {
        setBookLoading(
          true,
        );

        setError("");

        const [
          bookList,
          requirementData,
        ] =
          await Promise.all([
            getBooksByCourse(
              courseId,
            ),

            checkRecommendedBookRequirement(
              courseId,
            ),
          ]);

        setBooks(
          Array.isArray(
            bookList,
          )
            ? bookList
            : [],
        );

        setRequirement(
          requirementData,
        );
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load recommended books:",
          loadError,
        );

        setError(
          "Unable to load recommended books.",
        );
      } finally {
        setBookLoading(
          false,
        );
      }
    };

  // =========================================================
  // SELECTED COURSE
  // =========================================================

  const selectedCourse =
    useMemo(
      () =>
        courses.find(
          (course) =>
            course.id ===
            selectedCourseId,
        ) || null,
      [
        courses,
        selectedCourseId,
      ],
    );

  // =========================================================
  // MESSAGES
  // =========================================================

  const clearMessages = () => {
    setMessage("");
    setError("");
  };

  // =========================================================
  // FORM HELPERS
  // =========================================================

  const updateField = (
    field,
    value,
  ) => {
    setForm(
      (current) => ({
        ...current,

        [field]:
          value,
      }),
    );
  };

  const resetCover =
    () => {
      if (
        coverPreview?.startsWith(
          "blob:",
        )
      ) {
        URL.revokeObjectURL(
          coverPreview,
        );
      }

      setCoverFile(null);
      setCoverPreview("");
      setUploadProgress(0);

      if (
        coverInputRef.current
      ) {
        coverInputRef.current.value =
          "";
      }
    };

  const resetForm = (
    courseId =
      selectedCourseId,
  ) => {
    setEditingBook(null);

    setForm({
      ...EMPTY_FORM,

      courseId,

      displayOrder:
        books.length + 1,
    });

    resetCover();
  };

  // =========================================================
  // COURSE CHANGE
  // =========================================================

  const handleCourseChange = (
    event,
  ) => {
    const courseId =
      event.target.value;

    clearMessages();

    setSelectedCourseId(
      courseId,
    );

    setEditingBook(null);

    setForm({
      ...EMPTY_FORM,
      courseId,
    });

    resetCover();
  };

  // =========================================================
  // NEW BOOK
  // =========================================================

  const handleNewBook =
    () => {
      clearMessages();
      resetForm();
    };

  // =========================================================
  // EDIT BOOK
  // =========================================================

  const handleEdit = (
    book,
  ) => {
    clearMessages();

    resetCover();

    setEditingBook(
      book,
    );

    setForm({
      ...EMPTY_FORM,
      ...book,

      courseId:
        book.courseId ||
        selectedCourseId,

      coverImageUrl:
        book.coverImageUrl ||
        "",

      coverImageStoragePath:
        book.coverImageStoragePath ||
        "",
    });

    setCoverPreview(
      book.coverImageUrl ||
        "",
    );
  };

  // =========================================================
  // COVER IMAGE
  // =========================================================

  const chooseCoverImage =
    () => {
      coverInputRef.current?.click();
    };

  const handleCoverChange = (
    event,
  ) => {
    const file =
      event.target
        .files?.[0];

    clearMessages();

    if (!file) {
      return;
    }

    if (
      !ALLOWED_IMAGE_TYPES.includes(
        file.type,
      )
    ) {
      setError(
        "Book cover must be JPG, PNG or WebP.",
      );

      event.target.value =
        "";

      return;
    }

    if (
      file.size >
      MAX_COVER_SIZE
    ) {
      setError(
        "Book cover must be 5 MB or smaller.",
      );

      event.target.value =
        "";

      return;
    }

    if (
      coverPreview?.startsWith(
        "blob:",
      )
    ) {
      URL.revokeObjectURL(
        coverPreview,
      );
    }

    const preview =
      URL.createObjectURL(
        file,
      );

    setCoverFile(file);

    setCoverPreview(
      preview,
    );

    setUploadProgress(
      0,
    );
  };

  const removeCover =
    () => {
      resetCover();

      setForm(
        (current) => ({
          ...current,

          coverImageUrl:
            "",

          coverImageStoragePath:
            "",
        }),
      );
    };

  // =========================================================
  // VALIDATION
  // =========================================================

  const validate = () => {
    if (!form.courseId) {
      return "Please select a course.";
    }

    if (
      !form.title.trim()
    ) {
      return "Book title is required.";
    }

    if (
      Number(
        form.displayOrder,
      ) < 1
    ) {
      return "Display order must be at least 1.";
    }

    return "";
  };

  // =========================================================
  // SAVE
  // =========================================================

  const handleSubmit =
    async (
      event,
    ) => {
      event.preventDefault();

      const validationError =
        validate();

      if (
        validationError
      ) {
        setError(
          validationError,
        );

        return;
      }

      try {
        setSaving(true);

        clearMessages();

        let finalCoverUrl =
          form.coverImageUrl ||
          "";

        let finalCoverStoragePath =
          form.coverImageStoragePath ||
          "";

        // -----------------------------------------------------
        // UPLOAD BOOK COVER
        // -----------------------------------------------------

        if (coverFile) {
          setUploadingCover(
            true,
          );

          setUploadProgress(
            0,
          );

          const uploaded =
            await uploadFile({
              file:
                coverFile,

              folder:
                `nagariksuraksha/course-books/${form.courseId}`,

              onProgress:
                setUploadProgress,
            });

          finalCoverUrl =
            uploaded.downloadURL ||
            uploaded.secureUrl ||
            "";

          finalCoverStoragePath =
            uploaded.storagePath ||
            uploaded.publicId ||
            "";
        }

        // -----------------------------------------------------
        // PAYLOAD
        // -----------------------------------------------------

        const payload = {
          ...form,

          title:
            form.title.trim(),

          author:
            form.author.trim(),

          publisher:
            form.publisher.trim(),

          edition:
            form.edition.trim(),

          publicationYear:
            form.publicationYear
              .trim(),

          isbn:
            form.isbn.trim(),

          description:
            form.description.trim(),

          referenceUrl:
            form.referenceUrl.trim(),

          coverImageUrl:
            finalCoverUrl,

          coverImageStoragePath:
            finalCoverStoragePath,

          displayOrder:
            Number(
              form.displayOrder ||
                1,
            ),

          recommended:
            Boolean(
              form.recommended,
            ),

          published:
            Boolean(
              form.published,
            ),
        };

        // -----------------------------------------------------
        // CREATE / UPDATE
        // -----------------------------------------------------

        if (
          editingBook?.id
        ) {
          await editCourseBook(
            editingBook.id,
            payload,
            currentUserId,
          );

          setMessage(
            "Book updated successfully.",
          );
        } else {
          await addCourseBook(
            payload,
            currentUserId,
          );

          setMessage(
            "Book added successfully.",
          );
        }

        await loadBooks(
          form.courseId,
        );

        setEditingBook(
          null,
        );

        setForm({
          ...EMPTY_FORM,

          courseId:
            form.courseId,
        });

        resetCover();
      } catch (
        saveError
      ) {
        console.error(
          "Unable to save book:",
          saveError,
        );

        setError(
          saveError?.message ||
            "Unable to save the recommended book.",
        );
      } finally {
        setSaving(false);

        setUploadingCover(
          false,
        );
      }
    };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDelete =
    async (
      book,
    ) => {
      const confirmed =
        window.confirm(
          `Remove "${book.title}" from the recommended books?`,
        );

      if (!confirmed) {
        return;
      }

      try {
        clearMessages();

        await removeCourseBook(
          book.id,
          currentUserId,
        );

        if (
          editingBook?.id ===
          book.id
        ) {
          resetForm();
        }

        setMessage(
          "Book removed successfully.",
        );

        await loadBooks(
          selectedCourseId,
        );
      } catch (
        deleteError
      ) {
        console.error(
          "Unable to delete book:",
          deleteError,
        );

        setError(
          "Unable to remove the book.",
        );
      }
    };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading recommended books..."
      />
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div>
      <PageHeader
        title="Recommended Books"
        description="Manage recommended reading material for each NagarikSuraksha course."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Recommended Books",
        ]}
        actions={
          <Button
            leftIcon={
              <FaPlus />
            }
            onClick={
              handleNewBook
            }
            disabled={
              !selectedCourseId
            }
          >
            Add Book
          </Button>
        }
      />

      {message && (
        <div className="ns-book-alert ns-book-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-book-alert ns-book-error">
          {error}
        </div>
      )}

      {/* =====================================================
          COURSE SELECTOR
      ====================================================== */}

      <Card>
        <div className="ns-book-course-selector">
          <div>
            <strong>
              Course
            </strong>

            <p>
              Select a course to
              manage its recommended
              books.
            </p>
          </div>

          <select
            value={
              selectedCourseId
            }
            onChange={
              handleCourseChange
            }
          >
            <option value="">
              Select course
            </option>

            {courses.map(
              (course) => (
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
      </Card>

      {/* =====================================================
          10 BOOK REQUIREMENT
      ====================================================== */}

      {selectedCourseId && (
        <div className="ns-book-requirement">
          <div>
            <FaBook />

            <div>
              <strong>
                Recommended Books
              </strong>

              <span>
                {
                  requirement.currentCount
                }{" "}
                of{" "}
                {
                  requirement.minimumRequired
                }{" "}
                minimum books added
              </span>
            </div>
          </div>

          {requirement.satisfied ? (
            <span className="complete">
              <FaCheckCircle />

              Requirement met
            </span>
          ) : (
            <span className="pending">
              {
                requirement.remaining
              }{" "}
              more required
            </span>
          )}
        </div>
      )}

      {/* =====================================================
          MANAGEMENT
      ====================================================== */}

      {selectedCourseId && (
        <div className="ns-book-layout">
          {/* =================================================
              FORM
          ================================================== */}

          <Card
            title={
              editingBook
                ? "Edit Recommended Book"
                : "Add Recommended Book"
            }
            subtitle={
              selectedCourse?.title ||
              ""
            }
          >
            <form
              className="ns-book-form"
              onSubmit={
                handleSubmit
              }
            >
              <div className="ns-book-field ns-book-full">
                <label>
                  Book title *
                </label>

                <input
                  required
                  value={
                    form.title
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "title",
                      event.target
                        .value,
                    )
                  }
                  placeholder="Enter book title"
                />
              </div>

              <div className="ns-book-field">
                <label>
                  Author
                </label>

                <input
                  value={
                    form.author
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "author",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-book-field">
                <label>
                  Publisher
                </label>

                <input
                  value={
                    form.publisher
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "publisher",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-book-field">
                <label>
                  Edition
                </label>

                <input
                  value={
                    form.edition
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "edition",
                      event.target
                        .value,
                    )
                  }
                  placeholder="e.g. 12th Edition"
                />
              </div>

              <div className="ns-book-field">
                <label>
                  Publication year
                </label>

                <input
                  value={
                    form.publicationYear
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "publicationYear",
                      event.target
                        .value,
                    )
                  }
                  placeholder="2026"
                />
              </div>

              <div className="ns-book-field">
                <label>
                  ISBN
                </label>

                <input
                  value={
                    form.isbn
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "isbn",
                      event.target
                        .value,
                    )
                  }
                />
              </div>

              <div className="ns-book-field">
                <label>
                  Display order
                </label>

                <input
                  type="number"
                  min="1"
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
              </div>

              <div className="ns-book-field ns-book-full">
                <label>
                  Recommendation /
                  Description
                </label>

                <textarea
                  rows="4"
                  value={
                    form.description
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "description",
                      event.target
                        .value,
                    )
                  }
                  placeholder="Why is this book recommended?"
                />
              </div>

              <div className="ns-book-field ns-book-full">
                <label>
                  Reference / Buy Link
                </label>

                <input
                  type="url"
                  value={
                    form.referenceUrl
                  }
                  onChange={(
                    event,
                  ) =>
                    updateField(
                      "referenceUrl",
                      event.target
                        .value,
                    )
                  }
                  placeholder="https://..."
                />
              </div>

              {/* ===============================================
                  BOOK COVER
              ================================================ */}

              <div className="ns-book-full">
                <div className="ns-book-cover-panel">
                  <div className="ns-book-cover-heading">
                    <div>
                      <FaImage />

                      <div>
                        <strong>
                          Book Cover
                        </strong>

                        <span>
                          Upload from your
                          computer to
                          Cloudinary
                        </span>
                      </div>
                    </div>

                    <small>
                      JPG, PNG, WebP •
                      Max 5 MB
                    </small>
                  </div>

                  <input
                    ref={
                      coverInputRef
                    }
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={
                      handleCoverChange
                    }
                    className="ns-book-cover-input"
                  />

                  {coverPreview ? (
                    <div className="ns-book-cover-preview">
                      <img
                        src={
                          coverPreview
                        }
                        alt="Book cover preview"
                      />

                      <div>
                        <button
                          type="button"
                          onClick={
                            chooseCoverImage
                          }
                          disabled={
                            saving ||
                            uploadingCover
                          }
                        >
                          <FaUpload />
                          Replace Cover
                        </button>

                        <button
                          type="button"
                          className="danger"
                          onClick={
                            removeCover
                          }
                          disabled={
                            saving ||
                            uploadingCover
                          }
                        >
                          <FaTrash />
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="ns-book-cover-empty"
                      onClick={
                        chooseCoverImage
                      }
                      disabled={
                        saving ||
                        uploadingCover
                      }
                    >
                      <FaUpload />

                      <strong>
                        Choose Book Cover
                      </strong>

                      <span>
                        Select an image from
                        your laptop
                      </span>
                    </button>
                  )}

                  {coverFile && (
                    <div className="ns-book-cover-file">
                      {
                        coverFile.name
                      }{" "}
                      •{" "}
                      {formatFileSize(
                        coverFile.size,
                      )}
                    </div>
                  )}

                  {(uploadingCover ||
                    uploadProgress >
                      0) && (
                    <div className="ns-book-upload-progress">
                      <div>
                        <span>
                          Uploading cover
                        </span>

                        <strong>
                          {
                            uploadProgress
                          }
                          %
                        </strong>
                      </div>

                      <div className="ns-book-upload-track">
                        <div
                          style={{
                            width: `${uploadProgress}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ===============================================
                  OPTIONS
              ================================================ */}

              <div className="ns-book-options ns-book-full">
                <label>
                  <input
                    type="checkbox"
                    checked={
                      form.recommended
                    }
                    onChange={(
                      event,
                    ) =>
                      updateField(
                        "recommended",
                        event.target
                          .checked,
                      )
                    }
                  />

                  Recommended
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
                      updateField(
                        "published",
                        event.target
                          .checked,
                      )
                    }
                  />

                  Published
                </label>
              </div>

              <div className="ns-book-actions ns-book-full">
                {editingBook && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      resetForm()
                    }
                    disabled={
                      saving ||
                      uploadingCover
                    }
                  >
                    Cancel
                  </Button>
                )}

                <Button
                  type="submit"
                  loading={
                    saving ||
                    uploadingCover
                  }
                >
                  {editingBook
                    ? "Update Book"
                    : "Add Book"}
                </Button>
              </div>
            </form>
          </Card>

          {/* =================================================
              BOOK LIST
          ================================================== */}

          <Card
            title="Recommended Books"
            subtitle={`${books.length} book(s)`}
          >
            {bookLoading ? (
              <LoadingSpinner
                text="Loading books..."
              />
            ) : books.length ===
              0 ? (
              <EmptyState
                icon="📚"
                title="No recommended books"
                description="Add the first recommended book for this course."
              />
            ) : (
              <div className="ns-book-list">
                {books.map(
                  (book) => (
                    <article
                      key={
                        book.id
                      }
                      className="ns-book-item"
                    >
                      <div className="ns-book-list-cover">
                        {book.coverImageUrl ? (
                          <img
                            src={
                              book.coverImageUrl
                            }
                            alt={
                              book.title
                            }
                          />
                        ) : (
                          <FaBook />
                        )}
                      </div>

                      <div className="ns-book-info">
                        <div className="ns-book-title-row">
                          <h3>
                            {
                              book.title
                            }
                          </h3>

                          {book.published ? (
                            <span className="published">
                              Published
                            </span>
                          ) : (
                            <span className="draft">
                              Draft
                            </span>
                          )}
                        </div>

                        {book.author && (
                          <p>
                            by{" "}
                            <strong>
                              {
                                book.author
                              }
                            </strong>
                          </p>
                        )}

                        <div className="ns-book-tags">
                          {book.publisher && (
                            <span>
                              {
                                book.publisher
                              }
                            </span>
                          )}

                          {book.edition && (
                            <span>
                              {
                                book.edition
                              }
                            </span>
                          )}

                          {book.recommended && (
                            <span className="recommended">
                              Recommended
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="ns-book-item-actions">
                        {book.referenceUrl && (
                          <a
                            href={
                              book.referenceUrl
                            }
                            target="_blank"
                            rel="noreferrer"
                            title="Open reference link"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(
                              book,
                            )
                          }
                          title="Edit book"
                        >
                          <FaEdit />
                        </button>

                        <button
                          type="button"
                          className="danger"
                          onClick={() =>
                            handleDelete(
                              book,
                            )
                          }
                          title="Remove book"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </article>
                  ),
                )}
              </div>
            )}
          </Card>
        </div>
      )}

      <style>
        {`
          .ns-book-course-selector {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }

          .ns-book-course-selector strong {
            color: #0f172a;
          }

          .ns-book-course-selector p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .ns-book-course-selector select {
            min-width: 300px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            padding: 11px 12px;
            font: inherit;
          }

          .ns-book-requirement {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            margin: 18px 0;
            border: 1px solid #dbeafe;
            border-radius: 13px;
            background: #eff6ff;
            padding: 13px 16px;
          }

          .ns-book-requirement > div {
            display: flex;
            align-items: center;
            gap: 11px;
            color: #2563eb;
          }

          .ns-book-requirement > div > div {
            display: flex;
            flex-direction: column;
          }

          .ns-book-requirement strong {
            color: #1e3a8a;
            font-size: 12px;
          }

          .ns-book-requirement span {
            color: #64748b;
            font-size: 10px;
          }

          .ns-book-requirement > span {
            border-radius: 999px;
            padding: 6px 9px;
            font-weight: 800;
          }

          .ns-book-requirement .complete {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #dcfce7;
            color: #166534;
          }

          .ns-book-requirement .pending {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-book-layout {
            display: grid;
            grid-template-columns:
              minmax(360px, .9fr)
              minmax(0, 1.3fr);
            gap: 22px;
            align-items: start;
          }

          .ns-book-form {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .ns-book-field {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .ns-book-field label {
            color: #334155;
            font-size: 12px;
            font-weight: 700;
          }

          .ns-book-field input,
          .ns-book-field textarea {
            box-sizing: border-box;
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 9px;
            background: #ffffff;
            color: #0f172a;
            padding: 10px 11px;
            font: inherit;
            outline: none;
          }

          .ns-book-field input:focus,
          .ns-book-field textarea:focus {
            border-color: #2563eb;
            box-shadow:
              0 0 0 3px
              rgba(37,99,235,.12);
          }

          .ns-book-full {
            grid-column: 1 / -1;
          }

          .ns-book-options {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .ns-book-options label {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #334155;
            font-size: 12px;
            font-weight: 700;
          }

          .ns-book-actions {
            display: flex;
            justify-content: flex-end;
            gap: 9px;
          }

          .ns-book-cover-panel {
            border: 1px solid #dbeafe;
            border-radius: 13px;
            background: #f8fbff;
            padding: 14px;
          }

          .ns-book-cover-heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
          }

          .ns-book-cover-heading > div {
            display: flex;
            align-items: center;
            gap: 9px;
          }

          .ns-book-cover-heading > div > div {
            display: flex;
            flex-direction: column;
          }

          .ns-book-cover-heading svg {
            color: #2563eb;
          }

          .ns-book-cover-heading strong {
            color: #0f172a;
            font-size: 12px;
          }

          .ns-book-cover-heading span,
          .ns-book-cover-heading small {
            color: #64748b;
            font-size: 9px;
          }

          .ns-book-cover-input {
            display: none;
          }

          .ns-book-cover-empty {
            display: flex;
            width: 100%;
            min-height: 110px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 6px;
            border: 2px dashed #bfdbfe;
            border-radius: 11px;
            background: #ffffff;
            color: #2563eb;
            cursor: pointer;
          }

          .ns-book-cover-empty span {
            color: #64748b;
            font-size: 9px;
          }

          .ns-book-cover-preview {
            display: flex;
            gap: 12px;
            align-items: flex-start;
          }

          .ns-book-cover-preview img {
            width: 105px;
            aspect-ratio: 2 / 3;
            object-fit: contain;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background: white;
          }

          .ns-book-cover-preview > div {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .ns-book-cover-preview button {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            background: #eff6ff;
            color: #2563eb;
            padding: 7px 9px;
            font-size: 10px;
            font-weight: 700;
            cursor: pointer;
          }

          .ns-book-cover-preview button.danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-book-cover-file {
            margin-top: 9px;
            color: #64748b;
            font-size: 9px;
          }

          .ns-book-upload-progress {
            margin-top: 10px;
          }

          .ns-book-upload-progress > div:first-child {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            color: #64748b;
            font-size: 9px;
          }

          .ns-book-upload-track {
            overflow: hidden;
            height: 7px;
            border-radius: 999px;
            background: #dbeafe;
          }

          .ns-book-upload-track div {
            height: 100%;
            background: #2563eb;
          }

          .ns-book-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .ns-book-item {
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #ffffff;
            padding: 12px;
          }

          .ns-book-list-cover {
            display: flex;
            width: 58px;
            height: 78px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 7px;
            background: #f1f5f9;
            color: #94a3b8;
          }

          .ns-book-list-cover img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .ns-book-info {
            min-width: 0;
            flex: 1;
          }

          .ns-book-title-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 7px;
          }

          .ns-book-title-row h3 {
            margin: 0;
            color: #0f172a;
            font-size: 13px;
          }

          .ns-book-title-row span {
            border-radius: 999px;
            padding: 3px 6px;
            font-size: 8px;
            font-weight: 800;
          }

          .ns-book-title-row .published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-book-title-row .draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-book-info p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 10px;
          }

          .ns-book-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: 7px;
          }

          .ns-book-tags span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 3px 6px;
            font-size: 8px;
          }

          .ns-book-tags .recommended {
            background: #eff6ff;
            color: #2563eb;
            font-weight: 700;
          }

          .ns-book-item-actions {
            display: flex;
            flex-shrink: 0;
            gap: 5px;
          }

          .ns-book-item-actions a,
          .ns-book-item-actions button {
            display: flex;
            width: 31px;
            height: 31px;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbeafe;
            border-radius: 8px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
          }

          .ns-book-item-actions .danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          .ns-book-alert {
            margin-bottom: 16px;
            border-radius: 10px;
            padding: 11px 13px;
            font-size: 12px;
            font-weight: 700;
          }

          .ns-book-success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-book-error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          @media (max-width: 1100px) {
            .ns-book-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .ns-book-course-selector,
            .ns-book-item {
              align-items: stretch;
              flex-direction: column;
            }

            .ns-book-course-selector select {
              width: 100%;
              min-width: 0;
            }

            .ns-book-form {
              grid-template-columns: 1fr;
            }

            .ns-book-full {
              grid-column: auto;
            }

            .ns-book-item-actions {
              justify-content: flex-end;
            }

            .ns-book-cover-heading {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}