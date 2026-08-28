import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaFileImage,
  FaSave,
  FaTimes,
  FaUpload,
} from "react-icons/fa";

import {
  useAuth,
} from "../../../../hooks/useAuth";

import {
  uploadPostImages,
} from "../../../../firebase/storage";

import Button from "../../../../shared/components/Button";

// =========================================================
// HELPERS
// =========================================================

const createEmptyForm = () => ({
  title: "",
  slug: "",

  excerpt: "",
  content: "",

  category: "",
  tags: "",

  featured: false,
  displayOrder: 0,

  status: "draft",

  seoTitle: "",
  seoDescription: "",
  focusKeyword: "",
  secondaryKeywords: "",
  canonicalUrl: "",

  ogTitle: "",
  ogDescription: "",
  ogImageUrl: "",

  seoIndex: true,
  seoFollow: true,

  sitemapInclude: true,
  sitemapPriority: 0.7,
  sitemapChangeFrequency: "weekly",
});

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
      size / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    size /
    (1024 * 1024)
  ).toFixed(2)} MB`;
};

const arrayToCommaText = (
  value,
) =>
  Array.isArray(value)
    ? value.join(", ")
    : "";

const revokePreview = (
  value,
) => {
  if (
    value &&
    value.startsWith(
      "blob:",
    )
  ) {
    URL.revokeObjectURL(
      value,
    );
  }
};

// =========================================================
// COMPONENT
// =========================================================

export default function PostForm({
  post = null,
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

  // =========================================================
  // IMAGE FILES
  // =========================================================

  const [
    desktopFile,
    setDesktopFile,
  ] = useState(null);

  const [
    mobileFile,
    setMobileFile,
  ] = useState(null);

  const [
    desktopPreview,
    setDesktopPreview,
  ] = useState("");

  const [
    mobilePreview,
    setMobilePreview,
  ] = useState("");

  const [
    uploadProgress,
    setUploadProgress,
  ] = useState({
    desktop: 0,
    mobile: 0,
  });

  const [
    uploadingImages,
    setUploadingImages,
  ] = useState(false);

  const [
    imageError,
    setImageError,
  ] = useState("");

  const currentUserId =
    profile?.uid ||
    firebaseUser?.uid ||
    "system";

  // =========================================================
  // LOAD EXISTING POST
  // =========================================================

  useEffect(() => {
    revokePreview(
      desktopPreview,
    );

    revokePreview(
      mobilePreview,
    );

    setDesktopFile(
      null,
    );

    setMobileFile(
      null,
    );

    setUploadProgress({
      desktop: 0,
      mobile: 0,
    });

    setImageError(
      "",
    );

    if (
      !post
    ) {
      setForm(
        createEmptyForm(),
      );

      setDesktopPreview(
        "",
      );

      setMobilePreview(
        "",
      );

      return;
    }

    setForm({
      title:
        post.title ||
        "",

      slug:
        post.slug ||
        "",

      excerpt:
        post.excerpt ||
        "",

      content:
        post.content ||
        "",

      category:
        post.category ||
        "",

      tags:
        arrayToCommaText(
          post.tags,
        ),

      featured:
        Boolean(
          post.featured,
        ),

      displayOrder:
        Number(
          post.displayOrder ||
            0,
        ),

      status:
        post.status ||
        "draft",

      seoTitle:
        post
          ?.seo
          ?.title ||
        "",

      seoDescription:
        post
          ?.seo
          ?.description ||
        "",

      focusKeyword:
        post
          ?.seo
          ?.focusKeyword ||
        "",

      secondaryKeywords:
        arrayToCommaText(
          post
            ?.seo
            ?.secondaryKeywords,
        ),

      canonicalUrl:
        post
          ?.seo
          ?.canonicalUrl ||
        "",

      ogTitle:
        post
          ?.seo
          ?.ogTitle ||
        "",

      ogDescription:
        post
          ?.seo
          ?.ogDescription ||
        "",

      ogImageUrl:
        post
          ?.seo
          ?.ogImageUrl ||
        "",

      seoIndex:
        post
          ?.seo
          ?.robots
          ?.index ??
        true,

      seoFollow:
        post
          ?.seo
          ?.robots
          ?.follow ??
        true,

      sitemapInclude:
        post
          ?.seo
          ?.sitemap
          ?.include ??
        true,

      sitemapPriority:
        Number(
          post
            ?.seo
            ?.sitemap
            ?.priority ??
            0.7,
        ),

      sitemapChangeFrequency:
        post
          ?.seo
          ?.sitemap
          ?.changeFrequency ||
        "weekly",
    });

    setDesktopPreview(
      post
        ?.media
        ?.desktop
        ?.url ||
        "",
    );

    setMobilePreview(
      post
        ?.media
        ?.mobile
        ?.url ||
        "",
    );
  }, [
    post,
  ]);

  // =========================================================
  // CLEANUP
  // =========================================================

  useEffect(
    () => () => {
      revokePreview(
        desktopPreview,
      );

      revokePreview(
        mobilePreview,
      );
    },
    [],
  );

  // =========================================================
  // FIELD UPDATE
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
        [field]: value,
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
            post
              ? current.slug
              : normalizeSlug(
                  title,
                ),
        }),
      );
    };

  // =========================================================
  // IMAGE SELECTION
  // =========================================================

  const validateImage =
    (
      file,
    ) => {
      if (
        !file
      ) {
        return true;
      }

      if (
        !file.type
          ?.startsWith(
            "image/",
          )
      ) {
        setImageError(
          "Please select an image file.",
        );

        return false;
      }

      const maxSize =
        10 *
        1024 *
        1024;

      if (
        file.size >
        maxSize
      ) {
        setImageError(
          "Each image must be 10 MB or smaller.",
        );

        return false;
      }

      return true;
    };

  const handleDesktopFile =
    (
      event,
    ) => {
      setImageError(
        "",
      );

      const file =
        event.target.files?.[0];

      if (
        !file
      ) {
        return;
      }

      if (
        !validateImage(
          file,
        )
      ) {
        event.target.value =
          "";

        return;
      }

      revokePreview(
        desktopPreview,
      );

      setDesktopFile(
        file,
      );

      setDesktopPreview(
        URL.createObjectURL(
          file,
        ),
      );

      setUploadProgress(
        (
          current,
        ) => ({
          ...current,
          desktop: 0,
        }),
      );
    };

  const handleMobileFile =
    (
      event,
    ) => {
      setImageError(
        "",
      );

      const file =
        event.target.files?.[0];

      if (
        !file
      ) {
        return;
      }

      if (
        !validateImage(
          file,
        )
      ) {
        event.target.value =
          "";

        return;
      }

      revokePreview(
        mobilePreview,
      );

      setMobileFile(
        file,
      );

      setMobilePreview(
        URL.createObjectURL(
          file,
        ),
      );

      setUploadProgress(
        (
          current,
        ) => ({
          ...current,
          mobile: 0,
        }),
      );
    };

  // =========================================================
  // EXISTING MEDIA
  // =========================================================

  const existingDesktop =
    useMemo(
      () =>
        post
          ?.media
          ?.desktop ||
        {},
      [
        post,
      ],
    );

  const existingMobile =
    useMemo(
      () =>
        post
          ?.media
          ?.mobile ||
        {},
      [
        post,
      ],
    );

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit =
    async (
      event,
    ) => {
      event.preventDefault();

      setImageError(
        "",
      );

      if (
        !form.title.trim()
      ) {
        window.alert(
          "Post title is required.",
        );

        return;
      }

      if (
        !form.content.trim()
      ) {
        window.alert(
          "Post content is required.",
        );

        return;
      }

      const isNewPost =
        !post?.id;

      if (
        isNewPost &&
        (!desktopFile ||
          !mobileFile)
      ) {
        setImageError(
          "Upload both the 16:9 desktop image and the 9:16 mobile image before creating this post.",
        );

        return;
      }

      try {
        setUploadingImages(
          true,
        );

        // =====================================================
        // UPLOAD IMAGES FIRST
        // =====================================================

        const uploadedImages =
          await uploadPostImages({
            desktopFile,

            mobileFile,

            onProgress: (
              type,
              progress,
            ) => {
              setUploadProgress(
                (
                  current,
                ) => ({
                  ...current,
                  [type]:
                    progress,
                }),
              );
            },
          });

        // =====================================================
        // RESOLVE FINAL MEDIA
        // =====================================================

        const desktopUpload =
          uploadedImages.desktop;

        const mobileUpload =
          uploadedImages.mobile;

        const finalDesktop = {
          url:
            desktopUpload
              ?.downloadURL ||
            existingDesktop.url ||
            "",

          publicId:
            desktopUpload
              ?.publicId ||
            existingDesktop.publicId ||
            "",

          storagePath:
            desktopUpload
              ?.storagePath ||
            existingDesktop.storagePath ||
            "",

          fileName:
            desktopUpload
              ?.originalFileName ||
            existingDesktop.fileName ||
            "",

          size:
            Number(
              desktopUpload
                ?.size ||
                existingDesktop.size ||
                0,
            ),
        };

        const finalMobile = {
          url:
            mobileUpload
              ?.downloadURL ||
            existingMobile.url ||
            "",

          publicId:
            mobileUpload
              ?.publicId ||
            existingMobile.publicId ||
            "",

          storagePath:
            mobileUpload
              ?.storagePath ||
            existingMobile.storagePath ||
            "",

          fileName:
            mobileUpload
              ?.originalFileName ||
            existingMobile.fileName ||
            "",

          size:
            Number(
              mobileUpload
                ?.size ||
                existingMobile.size ||
                0,
            ),
        };

        // =====================================================
        // PAYLOAD
        // =====================================================

        const payload = {
          title:
            form.title.trim(),

          slug:
            normalizeSlug(
              form.slug ||
                form.title,
            ),

          excerpt:
            form.excerpt.trim(),

          content:
            form.content.trim(),

          category:
            form.category.trim(),

          tags:
            form.tags
              .split(",")
              .map(
                (
                  item,
                ) =>
                  item.trim(),
              )
              .filter(Boolean),

          desktopImageUrl:
            finalDesktop.url,

          desktopImagePublicId:
            finalDesktop.publicId,

          desktopImageStoragePath:
            finalDesktop.storagePath,

          desktopImageFileName:
            finalDesktop.fileName,

          desktopImageSize:
            finalDesktop.size,

          mobileImageUrl:
            finalMobile.url,

          mobileImagePublicId:
            finalMobile.publicId,

          mobileImageStoragePath:
            finalMobile.storagePath,

          mobileImageFileName:
            finalMobile.fileName,

          mobileImageSize:
            finalMobile.size,

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

            ogTitle:
              form.ogTitle.trim(),

            ogDescription:
              form.ogDescription.trim(),

            ogImageUrl:
              form.ogImageUrl.trim() ||
              finalDesktop.url ||
              finalMobile.url ||
              "",

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
                    0.7,
                ),

              changeFrequency:
                form.sitemapChangeFrequency ||
                "weekly",
            },
          },

          updatedBy:
            currentUserId,
        };

        await onSubmit?.(
          payload,
        );

        setDesktopFile(
          null,
        );

        setMobileFile(
          null,
        );
      } catch (
        error
      ) {
        console.error(
          "Unable to prepare post:",
          error,
        );

        setImageError(
          error?.message ||
            "Unable to upload the post images.",
        );
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
      className="ns-post-form"
      onSubmit={
        handleSubmit
      }
    >
      {/* =====================================================
          BASIC CONTENT
      ====================================================== */}

      <section className="ns-post-form-section">
        <div className="ns-post-form-heading">
          <FaSave />

          <div>
            <h3>
              Post Content
            </h3>

            <p>
              Create the post content and public URL.
            </p>
          </div>
        </div>

        <div className="ns-post-grid">
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
              placeholder="Post title"
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
              placeholder="post-title"
            />
          </label>

          <label>
            <span>
              Category
            </span>

            <input
              value={
                form.category
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "category",
                  event.target
                    .value,
                )
              }
              placeholder="Legal Update"
            />
          </label>

          <label>
            <span>
              Tags
            </span>

            <input
              value={
                form.tags
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "tags",
                  event.target
                    .value,
                )
              }
              placeholder="law, llb, legal education"
            />

            <small>
              Separate tags with commas.
            </small>
          </label>

          <label className="ns-post-full">
            <span>
              Excerpt
            </span>

            <textarea
              rows={3}
              value={
                form.excerpt
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "excerpt",
                  event.target
                    .value,
                )
              }
              placeholder="Short summary for cards and social sharing."
            />
          </label>

          <label className="ns-post-full">
            <span>
              Full Content *
            </span>

            <textarea
              rows={12}
              value={
                form.content
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "content",
                  event.target
                    .value,
                )
              }
              placeholder="Write the full post content..."
            />
          </label>
        </div>
      </section>

      {/* =====================================================
          IMAGES
      ====================================================== */}

      <section className="ns-post-form-section">
        <div className="ns-post-form-heading">
          <FaFileImage />

          <div>
            <h3>
              Post Images
            </h3>

            <p>
              Upload both desktop and mobile images before creating the post.
            </p>
          </div>
        </div>

        {imageError && (
          <div className="ns-post-image-error">
            {imageError}
          </div>
        )}

        <div className="ns-post-image-grid">
          {/* DESKTOP */}

          <div className="ns-post-image-card">
            <div className="ns-post-image-title">
              <strong>
                Desktop Image
              </strong>

              <span>
                16:9
              </span>
            </div>

            <div className="ns-post-preview is-desktop">
              {desktopPreview ? (
                <img
                  src={
                    desktopPreview
                  }
                  alt="Desktop post preview"
                />
              ) : (
                <div>
                  <FaFileImage />

                  <span>
                    No 16:9 image selected
                  </span>
                </div>
              )}
            </div>

            <label className="ns-post-file-button">
              <FaUpload />

              <span>
                Choose 16:9 Image
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleDesktopFile
                }
                disabled={
                  uploadingImages
                }
              />
            </label>

            {desktopFile && (
              <small>
                {desktopFile.name} ·{" "}
                {formatFileSize(
                  desktopFile.size,
                )}
              </small>
            )}

            {uploadingImages &&
              desktopFile && (
                <ImageProgress
                  progress={
                    uploadProgress.desktop
                  }
                />
              )}
          </div>

          {/* MOBILE */}

          <div className="ns-post-image-card">
            <div className="ns-post-image-title">
              <strong>
                Mobile Image
              </strong>

              <span>
                9:16
              </span>
            </div>

            <div className="ns-post-preview is-mobile">
              {mobilePreview ? (
                <img
                  src={
                    mobilePreview
                  }
                  alt="Mobile post preview"
                />
              ) : (
                <div>
                  <FaFileImage />

                  <span>
                    No 9:16 image selected
                  </span>
                </div>
              )}
            </div>

            <label className="ns-post-file-button">
              <FaUpload />

              <span>
                Choose 9:16 Image
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleMobileFile
                }
                disabled={
                  uploadingImages
                }
              />
            </label>

            {mobileFile && (
              <small>
                {mobileFile.name} ·{" "}
                {formatFileSize(
                  mobileFile.size,
                )}
              </small>
            )}

            {uploadingImages &&
              mobileFile && (
                <ImageProgress
                  progress={
                    uploadProgress.mobile
                  }
                />
              )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PUBLICATION
      ====================================================== */}

      <section className="ns-post-form-section">
        <div className="ns-post-form-heading">
          <FaSave />

          <div>
            <h3>
              Publication
            </h3>

            <p>
              Configure publication and ordering.
            </p>
          </div>
        </div>

        <div className="ns-post-grid">
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

          <label className="ns-post-checkbox">
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
              Featured Post
            </span>
          </label>
        </div>
      </section>

      {/* =====================================================
          SEO
      ====================================================== */}

      <section className="ns-post-form-section">
        <div className="ns-post-form-heading">
          <FaSave />

          <div>
            <h3>
              SEO
            </h3>

            <p>
              Configure search and social metadata.
            </p>
          </div>
        </div>

        <div className="ns-post-grid">
          <label className="ns-post-full">
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
              placeholder="SEO title"
            />
          </label>

          <label className="ns-post-full">
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
              placeholder="Search engine description"
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
              placeholder="law study materials"
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
              placeholder="LLB notes, law updates, legal education"
            />

            <small>
              Separate with commas.
            </small>
          </label>

          <label className="ns-post-full">
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
              placeholder="/posts/post-slug"
            />
          </label>

          <label>
            <span>
              Open Graph Title
            </span>

            <input
              value={
                form.ogTitle
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "ogTitle",
                  event.target
                    .value,
                )
              }
            />
          </label>

          <label>
            <span>
              Open Graph Image URL
            </span>

            <input
              value={
                form.ogImageUrl
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "ogImageUrl",
                  event.target
                    .value,
                )
              }
              placeholder="Leave blank to use desktop image"
            />
          </label>

          <label className="ns-post-full">
            <span>
              Open Graph Description
            </span>

            <textarea
              rows={3}
              value={
                form.ogDescription
              }
              onChange={(
                event,
              ) =>
                updateField(
                  "ogDescription",
                  event.target
                    .value,
                )
              }
            />
          </label>

          <label className="ns-post-checkbox">
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

          <label className="ns-post-checkbox">
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

          <label className="ns-post-checkbox">
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

      <div className="ns-post-actions">
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
              uploadingImages
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
            uploadingImages
          }
        >
          {uploadingImages
            ? "Uploading Images..."
            : saving
              ? "Saving..."
              : post
                ? "Update Post"
                : "Create Post"}
        </Button>
      </div>

      <PostFormStyles />
    </form>
  );
}

// =========================================================
// IMAGE PROGRESS
// =========================================================

function ImageProgress({
  progress,
}) {
  return (
    <div className="ns-post-progress">
      <div className="ns-post-progress-row">
        <span>
          Uploading
        </span>

        <strong>
          {progress}%
        </strong>
      </div>

      <div className="ns-post-progress-track">
        <div
          className="ns-post-progress-fill"
          style={{
            width:
              `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

// =========================================================
// STYLES
// =========================================================

function PostFormStyles() {
  return (
    <style>
      {`
        .ns-post-form,
        .ns-post-form * {
          box-sizing: border-box;
        }

        .ns-post-form {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 22px;
        }

        .ns-post-form-section {
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .ns-post-form-heading {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 16px;
        }

        .ns-post-form-heading > svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #2563eb;
        }

        .ns-post-form-heading h3 {
          margin: 0;
          color: #0f172a;
          font-size: 14px;
        }

        .ns-post-form-heading p {
          margin: 3px 0 0;
          color: #64748b;
          font-size: 11px;
          line-height: 1.45;
        }

        .ns-post-grid {
          display: grid;
          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );
          gap: 15px;
        }

        .ns-post-form label {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 6px;
        }

        .ns-post-form label > span {
          color: #334155;
          font-size: 11px;
          font-weight: 700;
        }

        .ns-post-form input,
        .ns-post-form textarea,
        .ns-post-form select {
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

        .ns-post-form textarea {
          resize: vertical;
        }

        .ns-post-form input:focus,
        .ns-post-form textarea:focus,
        .ns-post-form select:focus {
          border-color: #2563eb;
          box-shadow:
            0 0 0 3px
            rgba(37,99,235,.10);
        }

        .ns-post-form small {
          color: #94a3b8;
          font-size: 9px;
        }

        .ns-post-full {
          grid-column: 1 / -1;
        }

        .ns-post-checkbox {
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

        .ns-post-checkbox input {
          width: auto;
          margin: 0;
        }

        /* IMAGE SECTION */

        .ns-post-image-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(240px, .65fr);
          gap: 18px;
          align-items: start;
        }

        .ns-post-image-card {
          min-width: 0;
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fafc;
        }

        .ns-post-image-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ns-post-image-title strong {
          color: #0f172a;
          font-size: 11px;
        }

        .ns-post-image-title span {
          border-radius: 999px;
          background: #dbeafe;
          color: #1d4ed8;
          padding: 4px 8px;
          font-size: 9px;
          font-weight: 800;
        }

        .ns-post-preview {
          display: flex;
          width: 100%;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #e2e8f0;
        }

        .ns-post-preview.is-desktop {
          aspect-ratio: 16 / 9;
        }

        .ns-post-preview.is-mobile {
          max-width: 220px;
          aspect-ratio: 9 / 16;
          margin: 0 auto;
        }

        .ns-post-preview img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ns-post-preview > div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          color: #64748b;
          font-size: 10px;
        }

        .ns-post-preview > div svg {
          font-size: 25px;
        }

        .ns-post-file-button {
          display: flex !important;
          min-height: 40px;
          align-items: center;
          justify-content: center;
          flex-direction: row !important;
          gap: 7px !important;
          margin-top: 12px;
          border-radius: 9px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
        }

        .ns-post-file-button span {
          color: #ffffff !important;
        }

        .ns-post-file-button input {
          display: none;
        }

        .ns-post-image-card > small {
          display: block;
          margin-top: 7px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ns-post-image-error {
          margin-bottom: 12px;
          padding: 10px 12px;
          border: 1px solid #fecaca;
          border-radius: 9px;
          background: #fef2f2;
          color: #b91c1c;
          font-size: 10px;
          font-weight: 700;
        }

        /* PROGRESS */

        .ns-post-progress {
          margin-top: 10px;
        }

        .ns-post-progress-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          color: #64748b;
          font-size: 9px;
        }

        .ns-post-progress-track {
          width: 100%;
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: #dbeafe;
        }

        .ns-post-progress-fill {
          height: 100%;
          border-radius: inherit;
          background: #2563eb;
          transition: width .2s ease;
        }

        /* ACTIONS */

        .ns-post-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        @media (max-width: 800px) {
          .ns-post-grid,
          .ns-post-image-grid {
            grid-template-columns: 1fr;
          }

          .ns-post-full {
            grid-column: auto;
          }

          .ns-post-preview.is-mobile {
            max-width: 190px;
          }
        }

        @media (max-width: 520px) {
          .ns-post-actions {
            flex-direction: column-reverse;
          }

          .ns-post-actions button {
            width: 100%;
          }
        }
      `}
    </style>
  );
}
