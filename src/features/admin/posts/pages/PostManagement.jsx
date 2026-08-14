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

import PostForm from "../components/PostForm";

import {
  useAuth,
} from "../../../../hooks/useAuth";

import {
  archivePost,
  createPost,
  deletePost,
  getAllPosts,
  publishPost,
  setPostFeatured,
  updatePost,
} from "../../../../services/postService";

import Button from "../../../../shared/components/Button";
import Card from "../../../../shared/components/Card";
import EmptyState from "../../../../shared/components/EmptyState";
import LoadingSpinner from "../../../../shared/components/LoadingSpinner";
import PageHeader from "../../../../shared/components/PageHeader";

export default function PostManagement() {
  const {
    profile,
    firebaseUser,
  } = useAuth();

  const formRef =
    useRef(null);

  const [
    posts,
    setPosts,
  ] = useState([]);

  const [
    editingPost,
    setEditingPost,
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

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts =
    async () => {
      try {
        setLoading(
          true,
        );

        setError(
          "",
        );

        const result =
          await getAllPosts();

        const safePosts =
          Array.isArray(
            result,
          )
            ? result
            : [];

        setPosts(
          safePosts
            .filter(
              (
                post,
              ) =>
                !post.deleted,
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
          "Unable to load posts:",
          loadError,
        );

        setError(
          "Unable to load posts.",
        );
      } finally {
        setLoading(
          false,
        );
      }
    };

  const filteredPosts =
    useMemo(() => {
      const searchQuery =
        searchText
          .trim()
          .toLowerCase();

      return posts.filter(
        (
          post,
        ) => {
          const matchesStatus =
            statusFilter ===
              "all" ||
            post.status ===
              statusFilter;

          const values = [
            post.title,
            post.slug,
            post.excerpt,
            post.category,
            ...(Array.isArray(
              post.tags,
            )
              ? post.tags
              : []),
            post
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
      posts,
      searchText,
      statusFilter,
    ]);

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

  const handleNewPost =
    () => {
      clearMessages();

      setEditingPost(
        null,
      );

      scrollToForm();
    };

  const handleEdit =
    (
      post,
    ) => {
      clearMessages();

      setEditingPost(
        post,
      );

      scrollToForm();
    };

  const handleCancelEdit =
    () => {
      clearMessages();

      setEditingPost(
        null,
      );

      scrollToForm();
    };

  const handleView =
    (
      post,
    ) => {
      clearMessages();

      if (
        !post?.slug
      ) {
        setError(
          "This post does not have a valid slug.",
        );

        return;
      }

      if (
        post.status !==
        "published"
      ) {
        setError(
          "Only published posts can be viewed on the public website.",
        );

        return;
      }

      window.open(
        `/posts/${post.slug}`,
        "_blank",
        "noopener,noreferrer",
      );
    };

  const handleSave =
    async (
      postData,
    ) => {
      try {
        setSaving(
          true,
        );

        clearMessages();

        if (
          editingPost?.id
        ) {
          await updatePost(
            editingPost.id,
            postData,
            currentUserId,
          );

          setMessage(
            "Post updated successfully.",
          );
        } else {
          await createPost(
            postData,
            currentUserId,
          );

          setMessage(
            "Post created successfully.",
          );
        }

        setEditingPost(
          null,
        );

        await loadPosts();
      } catch (
        saveError
      ) {
        console.error(
          "Unable to save post:",
          saveError,
        );

        setError(
          saveError?.message ||
            "Unable to save the post.",
        );
      } finally {
        setSaving(
          false,
        );
      }
    };

  const handlePublish =
    async (
      postId,
    ) => {
      try {
        clearMessages();

        await publishPost(
          postId,
        );

        setMessage(
          "Post published successfully.",
        );

        await loadPosts();
      } catch (
        publishError
      ) {
        console.error(
          "Unable to publish post:",
          publishError,
        );

        setError(
          publishError?.message ||
            "Unable to publish the post.",
        );
      }
    };

  const handleArchive =
    async (
      postId,
    ) => {
      try {
        clearMessages();

        await archivePost(
          postId,
        );

        setMessage(
          "Post archived successfully.",
        );

        await loadPosts();
      } catch (
        archiveError
      ) {
        console.error(
          "Unable to archive post:",
          archiveError,
        );

        setError(
          archiveError?.message ||
            "Unable to archive the post.",
        );
      }
    };

  const handleFeatured =
    async (
      postId,
      featured,
    ) => {
      try {
        clearMessages();

        await setPostFeatured(
          postId,
          !featured,
        );

        setMessage(
          featured
            ? "Post removed from featured list."
            : "Post marked as featured.",
        );

        await loadPosts();
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

  const handleDelete =
    async (
      postId,
    ) => {
      const confirmed =
        window.confirm(
          "Delete this post? It will be soft-deleted and removed from the public website.",
        );

      if (
        !confirmed
      ) {
        return;
      }

      try {
        clearMessages();

        await deletePost(
          postId,
          currentUserId,
        );

        if (
          editingPost?.id ===
          postId
        ) {
          setEditingPost(
            null,
          );
        }

        setMessage(
          "Post deleted successfully.",
        );

        await loadPosts();
      } catch (
        deleteError
      ) {
        console.error(
          "Unable to delete post:",
          deleteError,
        );

        setError(
          deleteError?.message ||
            "Unable to delete the post.",
        );
      }
    };

  if (
    loading
  ) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading posts..."
      />
    );
  }

  return (
    <div className="ns-post-management">
      <PageHeader
        title="Post Management"
        description="Create, edit, publish and manage NagarikSuraksha posts with responsive images and SEO."
        breadcrumbs={[
          "Admin",
          "Content Manager",
          "Posts",
        ]}
        actions={
          <Button
            leftIcon={
              <FaPlus />
            }
            onClick={
              handleNewPost
            }
          >
            New Post
          </Button>
        }
      />

      {message && (
        <div className="ns-post-alert ns-post-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-post-alert ns-post-error">
          {error}
        </div>
      )}

      <div
        className="ns-post-admin-layout"
        ref={
          formRef
        }
      >
        <Card
          title={
            editingPost
              ? "Edit Post"
              : "Create Post"
          }
          subtitle={
            editingPost
              ? `Editing: ${editingPost.title}`
              : "Write the post, upload 16:9 and 9:16 images, and configure SEO."
          }
        >
          <PostForm
            post={
              editingPost
            }
            saving={
              saving
            }
            onSubmit={
              handleSave
            }
            onCancel={
              editingPost
                ? handleCancelEdit
                : undefined
            }
          />
        </Card>

        <Card
          title="Posts"
          subtitle={`${filteredPosts.length} post(s) found`}
        >
          <div className="ns-post-toolbar">
            <div className="ns-post-search">
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
                placeholder="Search posts..."
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

          {filteredPosts.length ===
          0 ? (
            <EmptyState
              icon="📰"
              title="No posts found"
              description="Create your first NagarikSuraksha post using the form."
            />
          ) : (
            <div className="ns-post-admin-list">
              {filteredPosts.map(
                (
                  post,
                ) => {
                  const desktopImage =
                    post
                      ?.media
                      ?.desktop
                      ?.url ||
                    "";

                  return (
                    <article
                      key={
                        post.id
                      }
                      className="ns-post-admin-item"
                    >
                      <div className="ns-post-admin-main">
                        {desktopImage ? (
                          <img
                            src={
                              desktopImage
                            }
                            alt={
                              post.title
                            }
                          />
                        ) : (
                          <div className="ns-post-placeholder">
                            📰
                          </div>
                        )}

                        <div className="ns-post-admin-copy">
                          <div className="ns-post-title-row">
                            <h3>
                              {
                                post.title
                              }
                            </h3>

                            {post.featured && (
                              <FaStar
                                className="ns-post-featured"
                                title="Featured post"
                              />
                            )}
                          </div>

                          <p>
                            {post.excerpt ||
                              post.content ||
                              "No post excerpt available."}
                          </p>

                          <div className="ns-post-meta">
                            {post.category && (
                              <span>
                                {
                                  post.category
                                }
                              </span>
                            )}

                            <span>
                              Order:{" "}
                              {Number(
                                post.displayOrder ||
                                  0,
                              )}
                            </span>

                            <span
                              className={`ns-post-status is-${post.status}`}
                            >
                              {
                                post.status
                              }
                            </span>
                          </div>

                          {post
                            ?.seo
                            ?.focusKeyword && (
                            <small className="ns-post-focus-keyword">
                              Focus keyword:{" "}
                              {
                                post.seo
                                  .focusKeyword
                              }
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="ns-post-admin-actions">
                        <button
                          type="button"
                          title="View public post"
                          className="is-view"
                          onClick={() =>
                            handleView(
                              post,
                            )
                          }
                        >
                          <FaEye />
                        </button>

                        <button
                          type="button"
                          title="Edit post"
                          onClick={() =>
                            handleEdit(
                              post,
                            )
                          }
                        >
                          <FaEdit />
                        </button>

                        <button
                          type="button"
                          title={
                            post.featured
                              ? "Remove featured status"
                              : "Mark as featured"
                          }
                          className={
                            post.featured
                              ? "is-featured"
                              : ""
                          }
                          onClick={() =>
                            handleFeatured(
                              post.id,
                              post.featured,
                            )
                          }
                        >
                          <FaStar />
                        </button>

                        {post.status !==
                        "published" ? (
                          <button
                            type="button"
                            title="Publish post"
                            className="is-publish"
                            onClick={() =>
                              handlePublish(
                                post.id,
                              )
                            }
                          >
                            ✓
                          </button>
                        ) : (
                          <button
                            type="button"
                            title="Archive post"
                            onClick={() =>
                              handleArchive(
                                post.id,
                              )
                            }
                          >
                            <FaArchive />
                          </button>
                        )}

                        <button
                          type="button"
                          title="Delete post"
                          className="is-danger"
                          onClick={() =>
                            handleDelete(
                              post.id,
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          )}
        </Card>
      </div>

      <style>
        {`
          .ns-post-management,
          .ns-post-management * {
            box-sizing: border-box;
          }

          .ns-post-admin-layout {
            display: grid;
            grid-template-columns:
              minmax(420px, .95fr)
              minmax(0, 1.25fr);
            gap: 22px;
            align-items: start;
            scroll-margin-top: 20px;
          }

          .ns-post-alert {
            margin-bottom: 18px;
            border-radius: 11px;
            padding: 13px 15px;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-post-success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-post-error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          .ns-post-toolbar {
            display: flex;
            gap: 12px;
            margin-bottom: 18px;
          }

          .ns-post-search {
            position: relative;
            flex: 1;
          }

          .ns-post-search svg {
            position: absolute;
            top: 50%;
            left: 13px;
            color: #94a3b8;
            transform: translateY(-50%);
          }

          .ns-post-toolbar input,
          .ns-post-toolbar select {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            color: #0f172a;
            padding: 11px 12px;
            font: inherit;
            outline: none;
          }

          .ns-post-search input {
            padding-left: 38px;
          }

          .ns-post-admin-list {
            display: flex;
            flex-direction: column;
            gap: 13px;
          }

          .ns-post-admin-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            border: 1px solid #e2e8f0;
            border-radius: 15px;
            background: #ffffff;
            padding: 15px;
          }

          .ns-post-admin-main {
            display: flex;
            min-width: 0;
            align-items: center;
            gap: 14px;
          }

          .ns-post-admin-main > img,
          .ns-post-placeholder {
            width: 110px;
            height: 62px;
            flex-shrink: 0;
            border-radius: 10px;
          }

          .ns-post-admin-main > img {
            object-fit: cover;
          }

          .ns-post-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eff6ff;
            font-size: 24px;
          }

          .ns-post-admin-copy {
            min-width: 0;
          }

          .ns-post-title-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .ns-post-title-row h3 {
            margin: 0;
            color: #0f172a;
            font-size: 15px;
          }

          .ns-post-featured {
            color: #eab308;
          }

          .ns-post-admin-copy > p {
            display: -webkit-box;
            overflow: hidden;
            margin: 6px 0 0;
            color: #64748b;
            font-size: 12px;
            line-height: 1.5;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          .ns-post-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 9px;
          }

          .ns-post-meta span {
            border-radius: 999px;
            background: #f1f5f9;
            color: #475569;
            padding: 4px 8px;
            font-size: 9px;
            font-weight: 700;
          }

          .ns-post-status.is-published {
            background: #dcfce7;
            color: #166534;
          }

          .ns-post-status.is-draft {
            background: #fef3c7;
            color: #92400e;
          }

          .ns-post-status.is-archived {
            background: #e2e8f0;
            color: #475569;
          }

          .ns-post-focus-keyword {
            display: block;
            margin-top: 7px;
            color: #64748b;
            font-size: 9px;
          }

          .ns-post-admin-actions {
            display: flex;
            flex-shrink: 0;
            flex-wrap: wrap;
            gap: 7px;
          }

          .ns-post-admin-actions button {
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

          .ns-post-admin-actions button.is-view {
            border-color: #bbf7d0;
            background: #f0fdf4;
            color: #15803d;
          }

          .ns-post-admin-actions button.is-featured {
            border-color: #fde68a;
            background: #fffbeb;
            color: #ca8a04;
          }

          .ns-post-admin-actions button.is-publish {
            border-color: #bbf7d0;
            background: #f0fdf4;
            color: #15803d;
            font-weight: 900;
          }

          .ns-post-admin-actions button.is-danger {
            border-color: #fecaca;
            background: #fef2f2;
            color: #dc2626;
          }

          @media (max-width: 1200px) {
            .ns-post-admin-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 720px) {
            .ns-post-toolbar,
            .ns-post-admin-item {
              align-items: stretch;
              flex-direction: column;
            }

            .ns-post-admin-actions {
              justify-content: flex-end;
            }
          }

          @media (max-width: 500px) {
            .ns-post-admin-main {
              align-items: flex-start;
              flex-direction: column;
            }

            .ns-post-admin-main > img,
            .ns-post-placeholder {
              width: 100%;
              height: auto;
              aspect-ratio: 16 / 9;
            }
          }
        `}
      </style>
    </div>
  );
}