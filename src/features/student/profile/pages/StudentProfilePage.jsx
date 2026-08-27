import { useEffect, useRef, useState } from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaGraduationCap,
  FaIdCard,
  FaMapMarkerAlt,
  FaSave,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "../../../../hooks/useAuth";
import { MAX_PROFILE_IMAGE_SIZE } from "../../../../services/studentProfileService";

const EMPTY_FORM = {
  title: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  graduationCourse: "",
  university: "",
  educationStatus: "pursuing",
  passingYear: "",
  finalYearMarks: "",
  address: "",
};

const initials = (firstName, lastName) =>
  `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase() || "ST";

export default function StudentProfilePage() {
  const { firebaseUser, profile, saveProfile } = useAuth();
  const fileInputRef = useRef(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [photoFile, setPhotoFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const currentPhotoURL = profile?.photoURL || firebaseUser?.photoURL || "";

  useEffect(() => {
    const nameParts = String(profile?.displayName || firebaseUser?.displayName || "")
      .trim().split(/\s+/).filter(Boolean);
    const knownTitles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Adv."];
    const storedTitle = profile?.title || (knownTitles.includes(nameParts[0]) ? nameParts.shift() : "");
    setForm({
      title: storedTitle,
      firstName: profile?.firstName || nameParts.shift() || "",
      lastName: profile?.lastName || nameParts.join(" ") || "",
      dateOfBirth: profile?.dateOfBirth || "",
      graduationCourse: profile?.education?.course || "",
      university: profile?.education?.university || "",
      educationStatus: profile?.education?.status || "pursuing",
      passingYear: profile?.education?.passingYear || "",
      finalYearMarks: profile?.education?.finalYearMarks || "",
      address: profile?.address || "",
    });
  }, [firebaseUser?.displayName, profile]);

  useEffect(() => {
    if (!photoFile) {
      setPreviewURL(currentPhotoURL);
      return undefined;
    }
    const objectURL = URL.createObjectURL(photoFile);
    setPreviewURL(objectURL);
    return () => URL.revokeObjectURL(objectURL);
  }, [currentPhotoURL, photoFile]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    setError("");
    setSuccess("");
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Please upload a JPG, PNG or WebP image.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_PROFILE_IMAGE_SIZE) {
      setError("Profile image must be 2 MB or smaller.");
      event.target.value = "";
      return;
    }
    setPhotoFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      setError("");
      setSuccess("");
      await saveProfile({ profileData: form, photoFile });
      setPhotoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSuccess("Your profile has been updated successfully.");
    } catch (saveError) {
      setError(saveError?.message || "Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  };

  const field = (label, name, options = {}) => (
    <label className="ns-profile-field">
      <span>{label}{options.required && <b> *</b>}</span>
      <input
        name={name}
        type={options.type || "text"}
        value={form[name]}
        onChange={updateField}
        placeholder={options.placeholder}
        required={options.required}
        min={options.min}
        max={options.max}
        maxLength={options.maxLength}
      />
    </label>
  );

  return (
    <div className="ns-profile-page">
      <section className="ns-profile-hero">
        <span><FaUser /> Student Account</span>
        <h1>My Profile</h1>
        <p>Keep your personal, education and contact information up to date.</p>
      </section>

      <form className="ns-profile-form" onSubmit={handleSubmit}>
        <aside className="ns-profile-photo">
          <div className="ns-profile-avatar">
            {previewURL ? <img src={previewURL} alt="Student profile" referrerPolicy="no-referrer" /> :
              <span>{initials(form.firstName, form.lastName)}</span>}
            <button type="button" aria-label="Choose profile image" onClick={() => fileInputRef.current?.click()}><FaCamera /></button>
          </div>
          <h2>Profile Image</h2>
          <p>JPG, PNG or WebP only. Maximum size: <strong>2 MB</strong>. A square image is recommended.</p>
          <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={handlePhotoChange} hidden />
          <button className="ns-photo-button" type="button" onClick={() => fileInputRef.current?.click()}>
            <FaCamera /> {photoFile ? "Choose Another Image" : "Upload Image"}
          </button>
          {photoFile && <small>{photoFile.name}</small>}
          <div className="ns-account-info"><FaEnvelope /> {profile?.email || firebaseUser?.email}</div>
          <div className="ns-account-info"><FaIdCard /> {profile?.enrollmentId || "Enrollment ID pending"}</div>
        </aside>

        <main className="ns-profile-details">
          {error && <div className="ns-profile-message error"><FaExclamationCircle /> {error}</div>}
          {success && <div className="ns-profile-message success"><FaCheckCircle /> {success}</div>}

          <section>
            <h2><FaUser /> Personal Details</h2>
            <div className="ns-profile-grid name-grid">
              <label className="ns-profile-field"><span>Title</span>
                <select name="title" value={form.title} onChange={updateField}>
                  <option value="">Select</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option><option>Dr.</option><option>Adv.</option>
                </select>
              </label>
              {field("First Name", "firstName", { required: true, maxLength: 50 })}
              {field("Last Name", "lastName", { required: true, maxLength: 50 })}
            </div>
            <div className="ns-profile-grid">
              {field("Date of Birth (Optional)", "dateOfBirth", { type: "date", max: new Date().toISOString().slice(0, 10) })}
            </div>
          </section>

          <section>
            <h2><FaGraduationCap /> Education — Graduation</h2>
            <div className="ns-profile-grid">
              {field("Course", "graduationCourse", { required: true, placeholder: "e.g. B.A., B.Sc., B.Tech, LL.B.", maxLength: 100 })}
              {field("University / Institution", "university", { required: true, maxLength: 140 })}
              <label className="ns-profile-field"><span>Status *</span>
                <select name="educationStatus" value={form.educationStatus} onChange={updateField} required>
                  <option value="pursuing">Pursuing</option>
                  <option value="completed">Completed</option>
                </select>
              </label>
              {form.educationStatus === "completed" &&
                field("Passing Year", "passingYear", { required: true, type: "number", min: "1950", max: String(new Date().getFullYear()) })}
              {field("Final Year Marks / CGPA", "finalYearMarks", { placeholder: "e.g. 72% or 8.1 CGPA", maxLength: 30 })}
            </div>
          </section>

          <section>
            <h2><FaMapMarkerAlt /> Address</h2>
            <label className="ns-profile-field">
              <span>Residential Address</span>
              <textarea name="address" value={form.address} onChange={updateField} rows="4" maxLength="500" placeholder="House/flat, street, locality, city, state and PIN code" />
              <small>{form.address.length}/500 characters</small>
            </label>
          </section>

          <div className="ns-profile-actions">
            <button type="submit" disabled={saving}><FaSave /> {saving ? "Saving Profile..." : "Save Profile"}</button>
          </div>
        </main>
      </form>

      <style>{`
        .ns-profile-page,.ns-profile-page *{box-sizing:border-box}.ns-profile-page{display:grid;gap:22px;color:#0f172a}.ns-profile-hero{border-radius:22px;padding:34px;background:linear-gradient(135deg,#0f172a,#1e3a8a 60%,#2563eb);color:#fff}.ns-profile-hero>span{display:flex;align-items:center;gap:8px;color:#bfdbfe;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.ns-profile-hero h1{margin:12px 0 7px;color:#fff;font-size:clamp(31px,5vw,44px)}.ns-profile-hero p{margin:0;color:#dbeafe}.ns-profile-form{display:grid;grid-template-columns:290px minmax(0,1fr);gap:22px;align-items:start}.ns-profile-photo,.ns-profile-details{border:1px solid #e2e8f0;border-radius:20px;background:#fff;padding:26px;box-shadow:0 10px 30px rgba(15,23,42,.05)}.ns-profile-photo{display:flex;align-items:center;flex-direction:column;text-align:center}.ns-profile-avatar{position:relative;width:140px;height:140px}.ns-profile-avatar img,.ns-profile-avatar>span{width:100%;height:100%;border:5px solid #dbeafe;border-radius:34px}.ns-profile-avatar img{display:block;object-fit:cover}.ns-profile-avatar>span{display:grid;place-items:center;background:#2563eb;color:#fff;font-size:36px;font-weight:800}.ns-profile-avatar>button{position:absolute;right:-5px;bottom:-5px;display:grid;width:44px;height:44px;place-items:center;border:4px solid #fff;border-radius:50%;background:#2563eb;color:#fff;cursor:pointer}.ns-profile-photo h2{margin:18px 0 4px}.ns-profile-photo p{color:#64748b;font-size:13px;line-height:1.6}.ns-photo-button{display:flex;width:100%;align-items:center;justify-content:center;gap:8px;border:1px solid #bfdbfe;border-radius:10px;background:#eff6ff;color:#1d4ed8;padding:11px;font-weight:800;cursor:pointer}.ns-profile-photo>small{max-width:100%;margin:8px 0;overflow:hidden;text-overflow:ellipsis}.ns-account-info{display:flex;width:100%;align-items:center;gap:8px;margin-top:14px;border-top:1px solid #e2e8f0;padding-top:14px;color:#64748b;font-size:12px;text-align:left;overflow-wrap:anywhere}.ns-profile-details{display:grid;gap:24px}.ns-profile-details section{display:grid;gap:17px;border-bottom:1px solid #e2e8f0;padding-bottom:24px}.ns-profile-details h2{display:flex;align-items:center;gap:9px;margin:0;color:#1e3a8a;font-size:20px}.ns-profile-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.name-grid{grid-template-columns:130px repeat(2,minmax(0,1fr))}.ns-profile-field{display:grid;gap:7px;color:#334155;font-size:13px;font-weight:700}.ns-profile-field b{color:#dc2626}.ns-profile-field input,.ns-profile-field select,.ns-profile-field textarea{width:100%;border:1px solid #cbd5e1;border-radius:10px;background:#fff;padding:12px;color:#0f172a;font:inherit;font-weight:400;outline:none}.ns-profile-field input:focus,.ns-profile-field select:focus,.ns-profile-field textarea:focus{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.1)}.ns-profile-field textarea{resize:vertical}.ns-profile-field small{color:#94a3b8;text-align:right}.ns-profile-message{display:flex;align-items:center;gap:8px;border:1px solid;border-radius:10px;padding:12px;font-size:13px;font-weight:700}.ns-profile-message.error{border-color:#fecaca;background:#fef2f2;color:#b91c1c}.ns-profile-message.success{border-color:#bbf7d0;background:#f0fdf4;color:#166534}.ns-profile-actions{display:flex;justify-content:flex-end}.ns-profile-actions button{display:flex;align-items:center;gap:8px;border:0;border-radius:10px;background:#2563eb;color:#fff;padding:13px 20px;font-weight:800;cursor:pointer}.ns-profile-actions button:disabled{opacity:.65}@media(max-width:900px){.ns-profile-form{grid-template-columns:1fr}.ns-profile-photo{max-width:none}}@media(max-width:640px){.ns-profile-hero,.ns-profile-photo,.ns-profile-details{border-radius:16px;padding:20px 16px}.ns-profile-grid,.name-grid{grid-template-columns:1fr}.ns-profile-actions button{width:100%;justify-content:center}}
      `}</style>
    </div>
  );
}
