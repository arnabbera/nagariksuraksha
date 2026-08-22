import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaIdCard,
  FaImage,
  FaSave,
  FaUser,
} from "react-icons/fa";

import {
  useAuth,
} from "../../../../hooks/useAuth";

const getInitials = (
  value,
) =>
  String(
    value || "Student",
  )
    .split(/\s+/)
    .filter(Boolean)
    .map(
      (
        part,
      ) =>
        part.charAt(0),
    )
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function StudentProfilePage() {
  const {
    firebaseUser,
    profile,
    saveProfile,
  } = useAuth();

  const fileInputRef =
    useRef(null);

  const [
    displayName,
    setDisplayName,
  ] = useState("");

  const [
    photoFile,
    setPhotoFile,
  ] = useState(null);

  const [
    previewURL,
    setPreviewURL,
  ] = useState("");

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    success,
    setSuccess,
  ] = useState("");

  const currentName =
    profile?.displayName ||
    firebaseUser?.displayName ||
    "";

  const currentPhotoURL =
    profile?.photoURL ||
    firebaseUser?.photoURL ||
    "";

  const email =
    profile?.email ||
    firebaseUser?.email ||
    "";

  const enrollmentId =
    profile?.enrollmentId ||
    "Not assigned";

  useEffect(() => {
    setDisplayName(
      currentName,
    );
  }, [
    currentName,
  ]);

  useEffect(() => {
    if (!photoFile) {
      setPreviewURL(
        currentPhotoURL,
      );

      return undefined;
    }

    const objectURL =
      URL.createObjectURL(
        photoFile,
      );

    setPreviewURL(
      objectURL,
    );

    return () => {
      URL.revokeObjectURL(
        objectURL,
      );
    };
  }, [
    currentPhotoURL,
    photoFile,
  ]);

  const handlePhotoChange = (
    event,
  ) => {
    const [
      file,
    ] =
      event.target.files ||
      [];

    setError("");
    setSuccess("");

    if (!file) {
      return;
    }

    const allowedTypes =
      [
        "image/jpeg",
        "image/png",
        "image/webp",
      ];

    if (
      !allowedTypes.includes(
        file.type,
      )
    ) {
      setError(
        "Please choose a JPG, PNG or WebP image.",
      );

      event.target.value =
        "";

      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setError(
        "Profile picture must be 5 MB or smaller.",
      );

      event.target.value =
        "";

      return;
    }

    setPhotoFile(
      file,
    );
  };

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      await saveProfile({
        displayName,
        photoFile,
      });

      setPhotoFile(
        null,
      );

      if (
        fileInputRef.current
      ) {
        fileInputRef.current.value =
          "";
      }

      setSuccess(
        "Your profile has been updated successfully.",
      );
    } catch (
      updateError
    ) {
      console.error(
        "Unable to update student profile:",
        updateError,
      );

      setError(
        updateError?.message ||
          "Unable to update your profile. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="ns-profile-page">
      <section className="ns-profile-hero">
        <span className="ns-profile-eyebrow">
          <FaUser />
          Student Account
        </span>

        <h1>My Profile</h1>

        <p>
          Keep your name and profile picture up to date. Your profile details
          are displayed throughout the NagarikSuraksha student portal.
        </p>
      </section>

      <form
        className="ns-profile-form"
        onSubmit={
          handleSubmit
        }
      >
        <section className="ns-profile-photo-card">
          <div className="ns-profile-avatar">
            {previewURL ? (
              <img
                src={
                  previewURL
                }
                alt={
                  displayName ||
                  "Student profile"
                }
                referrerPolicy="no-referrer"
              />
            ) : (
              <span>
                {getInitials(
                  displayName,
                )}
              </span>
            )}

            <button
              type="button"
              aria-label="Choose a new profile picture"
              onClick={() =>
                fileInputRef
                  .current
                  ?.click()
              }
            >
              <FaCamera />
            </button>
          </div>

          <h2>Profile Picture</h2>

          <p>
            Upload a clear JPG, PNG or WebP image. Maximum file size: 5 MB.
          </p>

          <input
            ref={
              fileInputRef
            }
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={
              handlePhotoChange
            }
            hidden
          />

          <button
            type="button"
            className="ns-profile-photo-button"
            onClick={() =>
              fileInputRef
                .current
                ?.click()
            }
          >
            <FaImage />
            {photoFile
              ? "Choose Another Picture"
              : "Change Profile Picture"}
          </button>

          {photoFile && (
            <small>
              Selected:{" "}
              {
                photoFile.name
              }
            </small>
          )}
        </section>

        <section className="ns-profile-details-card">
          <div className="ns-profile-section-heading">
            <div>
              <span>
                PERSONAL DETAILS
              </span>

              <h2>
                Update your profile
              </h2>
            </div>

            <FaIdCard />
          </div>

          {error && (
            <div className="ns-profile-message is-error">
              <FaExclamationCircle />
              {error}
            </div>
          )}

          {success && (
            <div className="ns-profile-message is-success">
              <FaCheckCircle />
              {success}
            </div>
          )}

          <div className="ns-profile-field">
            <label htmlFor="student-display-name">
              Full Name
            </label>

            <div>
              <FaUser />

              <input
                id="student-display-name"
                type="text"
                value={
                  displayName
                }
                onChange={(
                  event,
                ) => {
                  setDisplayName(
                    event
                      .target
                      .value,
                  );

                  setError(
                    "",
                  );

                  setSuccess(
                    "",
                  );
                }}
                maxLength={80}
                autoComplete="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <small>
              This name will be used across your student profile and learning
              portal.
            </small>
          </div>

          <div className="ns-profile-readonly-grid">
            <div className="ns-profile-field">
              <label>
                Email Address
              </label>

              <div className="is-readonly">
                <FaEnvelope />

                <input
                  type="email"
                  value={
                    email
                  }
                  readOnly
                />
              </div>

              <small>
                Managed through your Google account.
              </small>
            </div>

            <div className="ns-profile-field">
              <label>
                Student Enrollment ID
              </label>

              <div className="is-readonly">
                <FaIdCard />

                <input
                  type="text"
                  value={
                    enrollmentId
                  }
                  readOnly
                />
              </div>

              <small>
                Your permanent NagarikSuraksha student ID.
              </small>
            </div>
          </div>

          <div className="ns-profile-actions">
            <button
              type="submit"
              disabled={
                saving
              }
            >
              <FaSave />

              {saving
                ? "Saving Profile..."
                : "Save Changes"}
            </button>
          </div>
        </section>
      </form>

      <style>{`
        .ns-profile-page,
        .ns-profile-page * {
          box-sizing: border-box;
        }

        .ns-profile-page {
          display: grid;
          gap: 22px;
          color: #0f172a;
        }

        .ns-profile-hero {
          overflow: hidden;
          border-radius: 22px;
          background:
            radial-gradient(circle at 86% 18%, rgba(147, 197, 253, 0.28), transparent 30%),
            linear-gradient(135deg, #0f172a, #1e3a8a 60%, #2563eb);
          padding: 36px;
          color: #ffffff;
          box-shadow: 0 16px 38px rgba(30, 58, 138, 0.16);
        }

        .ns-profile-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #bfdbfe;
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ns-profile-hero h1 {
          margin: 13px 0 8px;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 46px);
        }

        .ns-profile-hero p {
          max-width: 760px;
          margin: 0;
          color: #dbeafe;
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.7;
        }

        .ns-profile-form {
          display: grid;
          grid-template-columns: minmax(260px, 0.35fr) minmax(0, 1fr);
          gap: 22px;
          align-items: start;
        }

        .ns-profile-photo-card,
        .ns-profile-details-card {
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          background: #ffffff;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .ns-profile-photo-card {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .ns-profile-avatar {
          position: relative;
          width: 144px;
          height: 144px;
          margin-bottom: 20px;
        }

        .ns-profile-avatar img,
        .ns-profile-avatar > span {
          width: 100%;
          height: 100%;
          border: 5px solid #dbeafe;
          border-radius: 34px;
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.16);
        }

        .ns-profile-avatar img {
          display: block;
          object-fit: cover;
        }

        .ns-profile-avatar > span {
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 36px;
          font-weight: 800;
        }

        .ns-profile-avatar > button {
          position: absolute;
          right: -5px;
          bottom: -5px;
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 4px solid #ffffff;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          font-size: 16px;
        }

        .ns-profile-photo-card h2 {
          margin: 0;
          font-size: 21px;
        }

        .ns-profile-photo-card p {
          margin: 8px 0 18px;
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        .ns-profile-photo-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          border: 1px solid #bfdbfe;
          border-radius: 11px;
          background: #eff6ff;
          color: #1d4ed8;
          cursor: pointer;
          padding: 11px 14px;
          font-weight: 800;
        }

        .ns-profile-photo-card > small {
          max-width: 100%;
          margin-top: 10px;
          overflow: hidden;
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 11px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ns-profile-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #e2e8f0;
        }

        .ns-profile-section-heading span {
          color: #2563eb;
          font-family: Arial, sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .ns-profile-section-heading h2 {
          margin: 7px 0 0;
          font-size: 24px;
        }

        .ns-profile-section-heading > svg {
          color: #dbeafe;
          font-size: 42px;
        }

        .ns-profile-message {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 18px;
          border: 1px solid;
          border-radius: 11px;
          padding: 12px 14px;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
        }

        .ns-profile-message.is-error {
          border-color: #fecaca;
          background: #fef2f2;
          color: #b91c1c;
        }

        .ns-profile-message.is-success {
          border-color: #bbf7d0;
          background: #f0fdf4;
          color: #166534;
        }

        .ns-profile-field {
          display: grid;
          gap: 8px;
        }

        .ns-profile-field label {
          color: #334155;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
        }

        .ns-profile-field > div {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #cbd5e1;
          border-radius: 11px;
          background: #ffffff;
          padding: 0 13px;
        }

        .ns-profile-field > div:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .ns-profile-field > div.is-readonly {
          background: #f8fafc;
        }

        .ns-profile-field svg {
          flex: 0 0 auto;
          color: #94a3b8;
        }

        .ns-profile-field input {
          min-width: 0;
          width: 100%;
          border: none;
          background: transparent;
          color: #0f172a;
          outline: none;
          padding: 13px 0;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .ns-profile-field input[readonly] {
          color: #64748b;
        }

        .ns-profile-field small {
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        .ns-profile-readonly-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .ns-profile-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .ns-profile-actions button {
          display: inline-flex;
          min-width: 170px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: none;
          border-radius: 11px;
          background: #2563eb;
          color: #ffffff;
          cursor: pointer;
          padding: 13px 18px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 10px 22px rgba(37, 99, 235, 0.18);
        }

        .ns-profile-actions button:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        @media (max-width: 900px) {
          .ns-profile-form {
            grid-template-columns: 1fr;
          }

          .ns-profile-photo-card {
            display: grid;
            grid-template-columns: 144px minmax(0, 1fr);
            grid-template-areas:
              "avatar title"
              "avatar copy"
              "avatar button"
              "avatar filename";
            column-gap: 24px;
            text-align: left;
          }

          .ns-profile-avatar {
            grid-area: avatar;
            margin: 0;
          }

          .ns-profile-photo-card h2 {
            grid-area: title;
          }

          .ns-profile-photo-card p {
            grid-area: copy;
          }

          .ns-profile-photo-button {
            grid-area: button;
          }

          .ns-profile-photo-card > small {
            grid-area: filename;
          }
        }

        @media (max-width: 620px) {
          .ns-profile-hero {
            border-radius: 17px;
            padding: 24px 20px;
          }

          .ns-profile-hero h1 {
            font-size: 31px;
          }

          .ns-profile-photo-card,
          .ns-profile-details-card {
            border-radius: 17px;
            padding: 20px 16px;
          }

          .ns-profile-photo-card {
            display: flex;
            text-align: center;
          }

          .ns-profile-avatar {
            width: 124px;
            height: 124px;
            margin-bottom: 18px;
          }

          .ns-profile-readonly-grid {
            grid-template-columns: 1fr;
          }

          .ns-profile-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
