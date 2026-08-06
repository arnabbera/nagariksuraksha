import { useEffect, useState } from "react";

import { useAuth } from "../../../hooks/useAuth";
import {
  getHomepageData,
  saveHomepageData,
} from "../../../services/homepageService";
import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import PageHeader from "../../../shared/components/PageHeader";

const initialForm = {
  announcement: {
    enabled: true,
    text: "",
    buttonText: "",
    buttonLink: "",
    backgroundColor: "#0f172a",
    textColor: "#ffffff",
  },

  hero: {
    enabled: true,
    heading: "",
    subHeading: "",
    description: "",
    primaryButton: {
      text: "",
      link: "",
    },
    secondaryButton: {
      text: "",
      link: "",
    },
    desktopImage: "",
    mobileImage: "",
  },

  sections: {
    legalServices: true,
    latestPosts: true,
    latestVideos: true,
    testimonials: true,
    faq: true,
    statistics: true,
    courses: true,
    contact: true,
    footer: true,
  },

  latestContent: {
    latestPosts: 6,
    latestVideos: 6,
    featuredOnly: false,
  },

  seo: {
    title: "",
    description: "",
    focusKeyword: "",
    secondaryKeywords: [],
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: "",
    schemaType: "WebSite",
    robots: {
      index: true,
      follow: true,
    },
    sitemap: {
      include: true,
      priority: 1,
      changeFrequency: "weekly",
    },
  },

  published: true,
  publishedVersion: 1,
};

const HomepageCms = () => {
  const { profile, firebaseUser } = useAuth();

  const [form, setForm] = useState(initialForm);
  const [keywordText, setKeywordText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadHomepage();
  }, []);

  const loadHomepage = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getHomepageData();

      setForm({
        ...initialForm,
        ...data,
        announcement: {
          ...initialForm.announcement,
          ...data.announcement,
        },
        hero: {
          ...initialForm.hero,
          ...data.hero,
          primaryButton: {
            ...initialForm.hero.primaryButton,
            ...data.hero?.primaryButton,
          },
          secondaryButton: {
            ...initialForm.hero.secondaryButton,
            ...data.hero?.secondaryButton,
          },
        },
        sections: {
          ...initialForm.sections,
          ...data.sections,
        },
        latestContent: {
          ...initialForm.latestContent,
          ...data.latestContent,
        },
        seo: {
          ...initialForm.seo,
          ...data.seo,
          robots: {
            ...initialForm.seo.robots,
            ...data.seo?.robots,
          },
          sitemap: {
            ...initialForm.seo.sitemap,
            ...data.seo?.sitemap,
          },
        },
      });

      setKeywordText(
        Array.isArray(data.seo?.secondaryKeywords)
          ? data.seo.secondaryKeywords.join(", ")
          : "",
      );
    } catch (loadError) {
      console.error(loadError);
      setError("Unable to load homepage settings.");
    } finally {
      setLoading(false);
    }
  };

  const updateSection = (section, field, value) => {
    setForm((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }));
  };

  const updateNestedField = (
    section,
    nestedObject,
    field,
    value,
  ) => {
    setForm((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [nestedObject]: {
          ...current[section][nestedObject],
          [field]: value,
        },
      },
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setMessage("");

      const updatedBy =
        profile?.uid ||
        firebaseUser?.uid ||
        "system";

      const payload = {
        ...form,
        seo: {
          ...form.seo,
          secondaryKeywords: keywordText
            .split(",")
            .map((keyword) => keyword.trim())
            .filter(Boolean),
        },
      };

      const savedHomepage = await saveHomepageData(
        payload,
        updatedBy,
      );

      setForm((current) => ({
        ...current,
        ...savedHomepage,
      }));

      setMessage("Homepage settings saved successfully.");
    } catch (saveError) {
      console.error(saveError);
      setError(
        saveError?.message ||
          "Unable to save homepage settings.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <LoadingSpinner
        fullPage
        text="Loading homepage settings..."
      />
    );
  }

  return (
    <div>
      <PageHeader
        title="Homepage CMS"
        description="Manage the homepage announcement, hero content, visible sections and SEO settings."
        breadcrumbs={["Admin", "Homepage CMS"]}
        actions={
          <Button
            loading={saving}
            onClick={handleSave}
          >
            Save Homepage
          </Button>
        }
      />

      {message && (
        <div className="ns-homepage-alert ns-homepage-success">
          {message}
        </div>
      )}

      {error && (
        <div className="ns-homepage-alert ns-homepage-error">
          {error}
        </div>
      )}

      <div className="ns-homepage-grid">
        <div className="ns-homepage-main">
          <Card
            title="Announcement Bar"
            subtitle="Control the message displayed above the website header."
          >
            <div className="ns-form-grid">
              <label className="ns-toggle-row ns-full-width">
                <input
                  type="checkbox"
                  checked={form.announcement.enabled}
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "enabled",
                      event.target.checked,
                    )
                  }
                />
                Show announcement bar
              </label>

              <div className="ns-field ns-full-width">
                <label>Announcement text</label>
                <input
                  value={form.announcement.text}
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "text",
                      event.target.value,
                    )
                  }
                  placeholder="Enter announcement text"
                />
              </div>

              <div className="ns-field">
                <label>Button text</label>
                <input
                  value={form.announcement.buttonText}
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "buttonText",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Button link</label>
                <input
                  value={form.announcement.buttonLink}
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "buttonLink",
                      event.target.value,
                    )
                  }
                  placeholder="/contact"
                />
              </div>

              <div className="ns-field">
                <label>Background colour</label>
                <input
                  type="color"
                  value={
                    form.announcement.backgroundColor
                  }
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "backgroundColor",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Text colour</label>
                <input
                  type="color"
                  value={form.announcement.textColor}
                  onChange={(event) =>
                    updateSection(
                      "announcement",
                      "textColor",
                      event.target.value,
                    )
                  }
                />
              </div>
            </div>
          </Card>

          <Card
            title="Hero Section"
            subtitle="Edit the main homepage heading, description, buttons and images."
          >
            <div className="ns-form-grid">
              <label className="ns-toggle-row ns-full-width">
                <input
                  type="checkbox"
                  checked={form.hero.enabled}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "enabled",
                      event.target.checked,
                    )
                  }
                />
                Show hero section
              </label>

              <div className="ns-field ns-full-width">
                <label>Heading</label>
                <input
                  value={form.hero.heading}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "heading",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Subheading</label>
                <input
                  value={form.hero.subHeading}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "subHeading",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Description</label>
                <textarea
                  rows="5"
                  value={form.hero.description}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "description",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Primary button text</label>
                <input
                  value={form.hero.primaryButton.text}
                  onChange={(event) =>
                    updateNestedField(
                      "hero",
                      "primaryButton",
                      "text",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Primary button link</label>
                <input
                  value={form.hero.primaryButton.link}
                  onChange={(event) =>
                    updateNestedField(
                      "hero",
                      "primaryButton",
                      "link",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Secondary button text</label>
                <input
                  value={form.hero.secondaryButton.text}
                  onChange={(event) =>
                    updateNestedField(
                      "hero",
                      "secondaryButton",
                      "text",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Secondary button link</label>
                <input
                  value={form.hero.secondaryButton.link}
                  onChange={(event) =>
                    updateNestedField(
                      "hero",
                      "secondaryButton",
                      "link",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Desktop image URL — 16:9</label>
                <input
                  value={form.hero.desktopImage}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "desktopImage",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Mobile image URL — 9:16</label>
                <input
                  value={form.hero.mobileImage}
                  onChange={(event) =>
                    updateSection(
                      "hero",
                      "mobileImage",
                      event.target.value,
                    )
                  }
                />
              </div>
            </div>
          </Card>

          <Card
            title="Homepage SEO"
            subtitle="SEO values entered here will be used by the public homepage."
          >
            <div className="ns-form-grid">
              <div className="ns-field ns-full-width">
                <label>SEO title</label>
                <input
                  value={form.seo.title}
                  maxLength={60}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "title",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Meta description</label>
                <textarea
                  rows="4"
                  maxLength={160}
                  value={form.seo.description}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "description",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Focus keyword</label>
                <input
                  value={form.seo.focusKeyword}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "focusKeyword",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Schema type</label>
                <select
                  value={form.seo.schemaType}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "schemaType",
                      event.target.value,
                    )
                  }
                >
                  <option value="WebSite">WebSite</option>
                  <option value="Organization">
                    Organization
                  </option>
                  <option value="LegalService">
                    LegalService
                  </option>
                </select>
              </div>

              <div className="ns-field ns-full-width">
                <label>
                  Secondary keywords — comma separated
                </label>
                <input
                  value={keywordText}
                  onChange={(event) =>
                    setKeywordText(event.target.value)
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Canonical URL</label>
                <input
                  value={form.seo.canonicalUrl}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "canonicalUrl",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Open Graph title</label>
                <input
                  value={form.seo.ogTitle}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "ogTitle",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Open Graph image URL</label>
                <input
                  value={form.seo.ogImageUrl}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "ogImageUrl",
                      event.target.value,
                    )
                  }
                />
              </div>

              <div className="ns-field ns-full-width">
                <label>Open Graph description</label>
                <textarea
                  rows="3"
                  value={form.seo.ogDescription}
                  onChange={(event) =>
                    updateSection(
                      "seo",
                      "ogDescription",
                      event.target.value,
                    )
                  }
                />
              </div>

              <label className="ns-toggle-row">
                <input
                  type="checkbox"
                  checked={form.seo.robots.index}
                  onChange={(event) =>
                    updateNestedField(
                      "seo",
                      "robots",
                      "index",
                      event.target.checked,
                    )
                  }
                />
                Allow search indexing
              </label>

              <label className="ns-toggle-row">
                <input
                  type="checkbox"
                  checked={form.seo.robots.follow}
                  onChange={(event) =>
                    updateNestedField(
                      "seo",
                      "robots",
                      "follow",
                      event.target.checked,
                    )
                  }
                />
                Allow link following
              </label>
            </div>
          </Card>
        </div>

        <div className="ns-homepage-sidebar">
          <Card
            title="Visible Sections"
            subtitle="Choose which sections appear on the homepage."
          >
            <div className="ns-section-list">
              {Object.entries(form.sections).map(
                ([sectionName, enabled]) => (
                  <label
                    key={sectionName}
                    className="ns-section-toggle"
                  >
                    <span>
                      {sectionName
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (letter) =>
                          letter.toUpperCase(),
                        )}
                    </span>

                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={(event) =>
                        updateSection(
                          "sections",
                          sectionName,
                          event.target.checked,
                        )
                      }
                    />
                  </label>
                ),
              )}
            </div>
          </Card>

          <Card
            title="Latest Content"
            subtitle="Control the number of latest posts and videos displayed."
          >
            <div className="ns-form-grid ns-single-column">
              <div className="ns-field">
                <label>Latest posts</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={form.latestContent.latestPosts}
                  onChange={(event) =>
                    updateSection(
                      "latestContent",
                      "latestPosts",
                      Number(event.target.value),
                    )
                  }
                />
              </div>

              <div className="ns-field">
                <label>Latest videos</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={form.latestContent.latestVideos}
                  onChange={(event) =>
                    updateSection(
                      "latestContent",
                      "latestVideos",
                      Number(event.target.value),
                    )
                  }
                />
              </div>

              <label className="ns-toggle-row">
                <input
                  type="checkbox"
                  checked={
                    form.latestContent.featuredOnly
                  }
                  onChange={(event) =>
                    updateSection(
                      "latestContent",
                      "featuredOnly",
                      event.target.checked,
                    )
                  }
                />
                Show featured content only
              </label>
            </div>
          </Card>

          <Card title="Publishing">
            <div className="ns-section-list">
              <label className="ns-section-toggle">
                <span>Homepage published</span>
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      published: event.target.checked,
                    }))
                  }
                />
              </label>

              <div className="ns-version-box">
                Current version:
                <strong>
                  {form.publishedVersion || 1}
                </strong>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="ns-save-footer">
        <Button
          size="large"
          loading={saving}
          onClick={handleSave}
        >
          Save Homepage Settings
        </Button>
      </div>

      <style>
        {`
          .ns-homepage-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 340px;
            gap: 22px;
          }

          .ns-homepage-main,
          .ns-homepage-sidebar {
            display: flex;
            flex-direction: column;
            gap: 22px;
          }

          .ns-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .ns-single-column {
            grid-template-columns: 1fr;
          }

          .ns-full-width {
            grid-column: 1 / -1;
          }

          .ns-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .ns-field label {
            color: #334155;
            font-size: 13px;
            font-weight: 700;
          }

          .ns-field input,
          .ns-field textarea,
          .ns-field select {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            background: #ffffff;
            color: #0f172a;
            padding: 11px 13px;
            font: inherit;
            outline: none;
          }

          .ns-field input:focus,
          .ns-field textarea:focus,
          .ns-field select:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
          }

          .ns-field input[type="color"] {
            height: 44px;
            padding: 4px;
          }

          .ns-toggle-row,
          .ns-section-toggle {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #334155;
            font-size: 14px;
            font-weight: 600;
          }

          .ns-section-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .ns-section-toggle {
            justify-content: space-between;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 12px;
          }

          .ns-section-toggle:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .ns-homepage-alert {
            margin-bottom: 20px;
            border-radius: 12px;
            padding: 14px 16px;
            font-size: 14px;
            font-weight: 600;
          }

          .ns-homepage-success {
            border: 1px solid #bbf7d0;
            background: #f0fdf4;
            color: #166534;
          }

          .ns-homepage-error {
            border: 1px solid #fecaca;
            background: #fef2f2;
            color: #b91c1c;
          }

          .ns-version-box {
            display: flex;
            justify-content: space-between;
            border-radius: 10px;
            background: #f8fafc;
            padding: 12px;
            color: #64748b;
            font-size: 13px;
          }

          .ns-version-box strong {
            color: #0f172a;
          }

          .ns-save-footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 24px;
          }

          @media (max-width: 1100px) {
            .ns-homepage-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 700px) {
            .ns-form-grid {
              grid-template-columns: 1fr;
            }

            .ns-full-width {
              grid-column: auto;
            }

            .ns-save-footer {
              justify-content: stretch;
            }

            .ns-save-footer button {
              width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomepageCms;