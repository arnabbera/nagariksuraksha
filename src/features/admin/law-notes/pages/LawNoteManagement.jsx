import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaArchive,
  FaEdit,
  FaEye,
  FaPlus,
  FaSearch,
  FaStar,
  FaTrash,
} from "react-icons/fa";

import LawNoteForm from "../components/LawNoteForm";

import { useAuth } from "../../../../hooks/useAuth";

import {
  archiveLawNote,
  createLawNote,
  deleteLawNote,
  getAllLawNotes,
  publishLawNote,
  setLawNoteFeatured,
  updateLawNote,
} from "../../../../services/lawNoteService";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

// =========================================================
// COMPONENT
// =========================================================

export default function LawNoteManagement() {
  const {
    profile,
    firebaseUser,
  } = useAuth();

  const formRef =
    useRef(null);

  const [
    lawNotes,
    setLawNotes,
  ] = useState([]);

  const [
    editingLawNote,
    setEditingLawNote,
  ] = useState(null);

  const [
    searchText,
    setSearchText,
  ] = useState("");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("all");

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    saving,
    setSaving,
  ] = useState(false);

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
  // LOAD
  // =========================================================

  useEffect(() => {
    loadLawNotes();
  }, []);

  const loadLawNotes =
    async () => {
      try {
        setLoading(true);
        setError("");

        const result =
          await getAllLawNotes();

        const safeResult =
          Array.isArray(result)
            ? result
            : [];

        setLawNotes(
          safeResult
            .filter(
              (lawNote) =>
                !lawNote.deleted,
            )
            .sort(
              (
                first,
                second,
              ) =>
                Number(
                  first.displayOrder ||
                    0,
                ) -
                Number(
                  second.displayOrder ||
                    0,
                ),
            ),
        );
      } catch (
        loadError
      ) {
        console.error(
          "Unable to load law notes:",
          loadError,
        );

        setError(
          "Unable to load law notes.",
        );
      } finally {
        setLoading(false);
      }
    };

  // =========================================================
  // FILTER
  // =========================================================

  const filteredLawNotes =
    useMemo(() => {
      const searchQuery =
        searchText
          .trim()
          .toLowerCase();

      return lawNotes.filter(
        (
          lawNote,
        ) => {
          const matchesStatus =
            statusFilter ===
              "all" ||
            lawNote.status ===
              statusFilter;

          const values = [
            lawNote.title,
            lawNote.slug,
            lawNote.subject,
            lawNote.courseTitle,
            lawNote.shortDescription,
            lawNote
              ?.seo
              ?.focusKeyword,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          const matchesSearch =
            !searchQuery ||
            values.includes(
              searchQuery,
            );

          return (
            matchesStatus &&
            matchesSearch
          );
        },
      );
    }, [
      lawNotes,
      searchText,
      statusFilter,
    ]);

  // =========================================================
  // HELPERS
  // =========================================================

  const clearMessages =
    () => {
      setMessage("");
      setError("");
    };

  const scrollToForm =
    () => {
      window.setTimeout(
        () => {
          formRef.current?.scrollIntoView(
            {
              behavior:
                "smooth",

              block:
                "start",
            },
          );
        },
        100,
      );
    };

  // =========================================================
  // CREATE / EDIT
  // =========================================================

  const handleNewLawNote =
    () => {
      clearMessages();

      setEditingLawNote(
        null,
      );

      scrollToForm();
    };

  const handleEdit =
    (
      lawNote,
    ) => {
      clearMessages();

      setEditingLawNote(
        lawNote,
      );

      scrollToForm();
    };

  const handleCancelEdit =
    () => {
      clearMessages();

      setEditingLawNote(
        null,
      );

      scrollToForm();
    };

  // =========================================================
  // VIEW PUBLIC PAGE
  // =========================================================

  const handleView =
    (
      lawNote,
    ) => {
      clearMessages();

      if (
        !lawNote?.slug
      ) {
        setError(
          "This law note does not have a valid slug.",
        );

        return;
      }

      if (
        lawNote.status !==
        "published"
      ) {
        setError(
          "Only published law notes can be viewed on the public website.",
        );

        return;
      }

      window.open(
        `/law-notes/${lawNote.slug}`,
        "_blank",
        "noopener,noreferrer",
      );
    };

  // =========================================================
  // SAVE
  // =========================================================

  const handleSave =
    async (
      lawNoteData,
    ) => {
      try {
        setSaving(true);
        clearMessages();

        if (
          editingLawNote?.id
        ) {
          await updateLawNote(
            editingLawNote.id,
            lawNoteData,
            currentUserId,
          );

          setMessage(
            "Law note updated successfully.",
          );
        } else {
          await createLawNote(
            lawNoteData,
            currentUserId,
          );

          setMessage(
            "Law note created successfully.",
          );
        }

        setEditingLawNote(
          null,
        );

        await loadLawNotes();
      } catch (
        saveError
      ) {
        console.error(
          "Unable to save law note:",
          saveError,
        );

        setError(
          saveError?.message ||
            "Unable to save the law note.",
        );
      } finally {
        setSaving(false);
      }
    };

  // =========================================================
  // PUBLISH
  // =========================================================

  const handlePublish =
    async (
      lawNoteId,
    ) => {
      try {
        clearMessages();

        await publishLawNote(
          lawNoteId,
        );

        setMessage(
          "Law note published successfully.",
        );

        await loadLawNotes();
      } catch (
        publishError
      ) {
        console.error(
          "Unable to publish law note:",
          publishError,
        );

        setError(
          publishError?.message ||
            "Unable to publish the law note.",
        );
      }
    };

  // =========================================================
  // ARCHIVE
  // =========================================================

  const handleArchive =
    async (
      lawNoteId,
    ) => {
      try {
        clearMessages();

        await archiveLawNote(
          lawNoteId,
        );

        setMessage(
          "Law note archived successfully.",
        );

        await loadLawNotes();
      } catch (
        archiveError
      ) {
        console.error(
          "Unable to archive law note:",
          archiveError,
        );

        setError(
          archiveError?.message ||
            "Unable to archive the law note.",
        );
      }
    };

  // =========================================================
  // FEATURE
  // =========================================================

  const handleFeatured =
    async (
      lawNoteId,
      featured,
    ) => {
      try {
        clearMessages();

        await setLawNoteFeatured(
          lawNoteId,
          !featured,
        );

        setMessage(
          featured
            ? "Law note removed from featured list."
            : "Law note marked as featured.",
        );

        await loadLawNotes();
      } catch (
        featuredError
      ) {
        console.error(
          "Unable to update featured status:",
          featuredError,
        );

        setError(
          featuredError?.message ||
            "Unable to update featured status.",
        );
      }
    };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDelete =
    async (
      lawNoteId,
    ) => {
      const confirmed =
        window.confirm(
          "Delete this law note? It will be soft-deleted and removed from the public website.",
        );

      if (
        !confirmed
      ) {
        return;
      }

      try {
        clearMessages();

        await deleteLawNote(
          lawNoteId,
          currentUserId,
        );

        if (
          editingLawNote?.id ===
          lawNoteId
        ) {
          setEditingLawNote(
            null,
          );
        }

        setMessage(
          "Law note deleted successfully.",
        );

        await loadLawNotes();
      } catch (
        deleteError
      ) {
        console.error(
          "Unable to delete law note:",
          deleteError,
        );

        setError(
          deleteError?.message ||
            "Unable to delete the law note.",
        );
      }
    };

  // =========================================================
  // LOADING
  // =========================================================

  if (
    loading
  ) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading law notes..."
      />
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="ns-law-note-management">
      <PageHeader
        title="Law Notes Management"
        description="Create, edit, publish and manage public SEO-friendly LL.B law notes."
        breadcrumbs={[
          "Admin",
          "Learning",
          "Law Notes",
        ]}
        actions={
          <Button
            leftIcon={
              <FaPlus />
            }
            onClick={
              handleNewLawNote
            }
          >
            New Law Note
          </Button>
        }
      />

      {message && (
        <div className="ns-law-note-alert ns-law-note-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-law-note-alert ns-law-note-error">
          {error}
        </div>
      )}

      <div
        className="ns-law-note-admin-layout"
        ref={
          formRef
        }
      >
        {/* ===================================================
            FORM
        ==================================================== */}

        <Card
          title={
            editingLawNote
              ? "Edit Law Note"
              : "Create Law Note"
          }
          subtitle={
            editingLawNote
              ? `Editing: ${editingLawNote.title}`
              : "Create public legal study content with SEO metadata."
          }
        >
          <LawNoteForm
            lawNote={
              editingLawNote
            }
            saving={
              saving
            }
            onSubmit={
              handleSave
            }
            onCancel={
              editingLawNote
                ? handleCancelEdit
                : undefined
            }
          />
        </Card>

        {/* ===================================================
            LIST
        ==================================================== */}

        <Card
          title="Law Notes"
          subtitle={`${filteredLawNotes.length} law note(s) found`}
        >
          <div className="ns-law-note-toolbar">
            <div className="ns-law-note-search">
              <FaSearch />

              <input
                value={
                  searchText
                }
                onChange={(
                  event,
                ) =>
                  setSearchText(
                    event.target
                      .value,
                  )
                }
                placeholder="Search law notes..."
              />
            </div>

            <select
              value={
                statusFilter
              }
              onChange={(
                event,
              ) =>
                setStatusFilter(
                  event.target
                    .value,
                )
              }
            >
              <option value="all">
                All statuses
              </option>

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

          {filteredLawNotes.length ===
          0 ? (
            <EmptyState
              icon="📚"
              title="No law notes found"
              description="Create your first public NagarikSuraksha law note using the form."
            />
          ) : (
            <div className="ns-law-note-admin-list">
              {filteredLawNotes.map(
                (
                  lawNote,
                ) => (
                  <article
                    key={
                      lawNote.id
                    }
                    className="ns-law-note-admin-item"
                  >
                    <div className="ns-law-note-admin-main">
                      <div className="ns-law-note-admin-icon">
                        <FaBookOpen />
                      </div>

                      <div className="ns-law-note-admin-copy">
                        <div className="ns-law-note-admin-title-row">
                          <h3>
                            {
                              lawNote.title
                            }
                          </h3>

                          {lawNote.featured && (
                            <FaStar
                              title="Featured law note"
                              className="ns-law-note-featured"
                            />
                          )}
                        </div>

                        <p>
                          {lawNote.shortDescription ||
                            "No description available."}
                        </p>

                        <div className="ns-law-note-admin-meta">
                          {lawNote.subject && (
                            <span>
                              {
                                lawNote.subject
                              }
                            </span>
                          )}

                          {lawNote.courseTitle && (
                            <span>
                              {
                                lawNote.courseTitle
                              }
                            </span>
                          )}

                          <span>
                            Order:{" "}
                            {Number(
                              lawNote.displayOrder ||
                                0,
                            )}
                          </span>

                          <span
                            className={`ns-law-note-status is-${lawNote.status}`}
                          >
                            {
                              lawNote.status
                            }
                          </span>
                        </div>

                        {lawNote
                          ?.seo
                          ?.focusKeyword && (
                          <small className="ns-law-note-focus-keyword">
                            Focus keyword:{" "}
                            {
                              lawNote.seo
                                .focusKeyword
                            }
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="ns-law-note-admin-actions">
                      <button
                        type="button"
                        title="View public law note"
                        className="is-view"
                        onClick={() =>
                          handleView(
                            lawNote,
                          )
                        }
                      >
                        <FaEye />
                      </button>

                      <button
                        type="button"
                        title="Edit law note"
                        onClick={() =>
                          handleEdit(
                            lawNote,
                          )
                        }
                      >
                        <FaEdit />
                      </button>

                      <button
                        type="button"
                        title={
                          lawNote.featured
                            ? "Remove featured status"
                            : "Mark as featured"
                        }
                        className={
                          lawNote.featured
                            ? "is-featured"
                            : ""
                        }
                        onClick={() =>
                          handleFeatured(
                            lawNote.id,
                            lawNote.featured,
                          )
                        }
                      >
                        <FaStar />
                      </button>

                      {lawNote.status !==
                      "published" ? (
                        <button
                          type="button"
                          title="Publish law note"
                          className="is-publish"
                          onClick={() =>
                            handlePublish(
                              lawNote.id,
                            )
                          }
                        >
                          ✓
                        </button>
                      ) : (
                        <button
                          type="button"
                          title="Archive law note"
                          onClick={() =>
                            handleArchive(
                              lawNote.id,
                            )
                          }
                        >
                          <FaArchive />
                        </button>
                      )}

                      <button
                        type="button"
                        title="Delete law note"
                        className="is-danger"
                        onClick={() =>
                          handleDelete(
                            lawNote.id,
                          )
                        }
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

      <style>
        {`
          .ns-law-note-management,
          .ns-law-note-management * {
            box-sizing: border-box;
          }

          .ns-law-note-admin-layout {
            display: grid;

            grid-template-columns:
              minmax(390px, .95fr)
              minmax(0, 1.3fr);

            gap: 22px;

            align-items: start;

            scroll-margin-top: 20px;
          }

          /* ================================================
             ALERTS
          ================================================= */

          .ns-law-note-alert {
            margin-bottom: 18px;

            border-radius: 11px;

            padding: 13px 15px;

            font-size: 13px;
            font-weight: 700;
          }

          .ns-law-note-success {
            border: 1px solid #bbf7d0;

            background: #f0fdf4;

            color: #166534;
          }

          .ns-law-note-error {
            border: 1px solid #fecaca;

            background: #fef2f2;

            color: #b91c1c;
          }

          /* ================================================
             TOOLBAR
          ================================================= */

          .ns-law-note-toolbar {
            display: flex;

            gap: 12px;

            margin-bottom: 18px;
          }

          .ns-law-note-search {
            position: relative;

            flex: 1;
          }

          .ns-law-note-search svg {
            position: absolute;

            top: 50%;
            left: 13px;

            color: #94a3b8;

            transform:
              translateY(-50%);
          }

          .ns-law-note-toolbar input,
          .ns-law-note-toolbar select {
            width: 100%;

            border: 1px solid #cbd5e1;

            border-radius: 10px;

            background: #ffffff;

            color: #0f172a;

            padding: 11px 12px;

            font: inherit;

            outline: none;
          }

          .ns-law-note-search input {
            padding-left: 38px;
          }

          .ns-law-note-toolbar input:focus,
          .ns-law-note-toolbar select:focus {
            border-color: #2563eb;

            box-shadow:
              0 0 0 3px
              rgba(37,99,235,.12);
          }

          /* ================================================
             LIST
          ================================================= */

          .ns-law-note-admin-list {
            display: flex;

            flex-direction: column;

            gap: 13px;
          }

          .ns-law-note-admin-item {
            display: flex;

            align-items: center;

            justify-content:
              space-between;

            gap: 18px;

            padding: 15px;

            border: 1px solid #e2e8f0;

            border-radius: 15px;

            background: #ffffff;
          }

          .ns-law-note-admin-main {
            display: flex;

            min-width: 0;

            align-items: flex-start;

            gap: 14px;
          }

          .ns-law-note-admin-icon {
            display: flex;

            width: 50px;
            height: 50px;

            flex-shrink: 0;

            align-items: center;

            justify-content: center;

            border-radius: 12px;

            background: #eff6ff;

            color: #2563eb;

            font-size: 19px;
          }

          .ns-law-note-admin-copy {
            min-width: 0;
          }

          .ns-law-note-admin-title-row {
            display: flex;

            align-items: center;

            gap: 8px;
          }

          .ns-law-note-admin-title-row h3 {
            margin: 0;

            color: #0f172a;

            font-size: 15px;
          }

          .ns-law-note-featured {
            flex-shrink: 0;

            color: #eab308;
          }

          .ns-law-note-admin-copy > p {
            display: -webkit-box;

            overflow: hidden;

            margin: 6px 0 0;

            color: #64748b;

            font-size: 12px;

            line-height: 1.5;

            -webkit-box-orient:
              vertical;

            -webkit-line-clamp: 2;
          }

          .ns-law-note-admin-meta {
            display: flex;

            flex-wrap: wrap;

            gap: 7px;

            margin-top: 9px;
          }

          .ns-law-note-admin-meta span {
            border-radius: 999px;

            background: #f1f5f9;

            color: #475569;

            padding: 4px 8px;

            font-size: 9px;

            font-weight: 700;
          }

          .ns-law-note-status.is-published {
            background: #dcfce7;

            color: #166534;
          }

          .ns-law-note-status.is-draft {
            background: #fef3c7;

            color: #92400e;
          }

          .ns-law-note-status.is-archived {
            background: #e2e8f0;

            color: #475569;
          }

          .ns-law-note-focus-keyword {
            display: block;

            margin-top: 7px;

            color: #64748b;

            font-size: 9px;
          }

          /* ================================================
             ACTIONS
          ================================================= */

          .ns-law-note-admin-actions {
            display: flex;

            flex-shrink: 0;

            flex-wrap: wrap;

            gap: 7px;
          }

          .ns-law-note-admin-actions button {
            display: flex;

            width: 35px;
            height: 35px;

            align-items: center;

            justify-content: center;

            border: 1px solid #dbeafe;

            border-radius: 9px;

            background: #eff6ff;

            color: #2563eb;

            cursor: pointer;
          }

          .ns-law-note-admin-actions button:hover {
            background: #dbeafe;
          }

          .ns-law-note-admin-actions button.is-view {
            border-color: #bbf7d0;

            background: #f0fdf4;

            color: #15803d;
          }

          .ns-law-note-admin-actions button.is-view:hover {
            background: #dcfce7;
          }

          .ns-law-note-admin-actions button.is-featured {
            border-color: #fde68a;

            background: #fffbeb;

            color: #ca8a04;
          }

          .ns-law-note-admin-actions button.is-publish {
            border-color: #bbf7d0;

            background: #f0fdf4;

            color: #15803d;

            font-weight: 900;
          }

          .ns-law-note-admin-actions button.is-danger {
            border-color: #fecaca;

            background: #fef2f2;

            color: #dc2626;
          }

          /* ================================================
             RESPONSIVE
          ================================================= */

          @media (max-width: 1180px) {
            .ns-law-note-admin-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 720px) {
            .ns-law-note-toolbar {
              flex-direction: column;
            }

            .ns-law-note-admin-item {
              align-items: stretch;

              flex-direction: column;
            }

            .ns-law-note-admin-actions {
              justify-content: flex-end;
            }
          }

          @media (max-width: 480px) {
            .ns-law-note-admin-main {
              flex-direction: column;
            }

            .ns-law-note-admin-icon {
              width: 42px;
              height: 42px;
            }

            .ns-law-note-admin-actions {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </div>
  );
}