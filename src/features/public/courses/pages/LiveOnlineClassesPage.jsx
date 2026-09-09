import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaComments,
  FaFacebookF,
  FaLaptop,
  FaLink,
  FaLock,
  FaTwitter,
  FaVideo,
  FaWhatsapp,
} from "react-icons/fa";

import Header from "../../../home/components/Header";
import Footer from "../../../home/components/Footer";
import SEO from "../../../../shared/seo/SEO";
import { getPublishedCourses } from "../../../../services/courseService";

const LIVE_CLASSES_URL =
  "https://www.nagariksuraksha.com/share/live-online-classes-card-v3";

const SHARE_MESSAGE =
  "Explore chapter-wise Live Online Law Classes from NagarikSuraksha.";

const getCourseImage = (course) =>
  course?.thumbnailUrl ||
  course?.desktopImageUrl ||
  course?.imageUrl ||
  course?.media?.thumbnailUrl ||
  course?.media?.desktopImageUrl ||
  course?.media?.imageUrl ||
  "";

export default function LiveOnlineClassesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(LIVE_CLASSES_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy live-class link:", error);
    }
  };

  useEffect(() => {
    let active = true;

    getPublishedCourses({ pageSize: 100 })
      .then((result) => {
        if (active) setCourses(Array.isArray(result) ? result : []);
      })
      .catch((error) => {
        console.error("Unable to load live-class courses:", error);
        if (active) setCourses([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, []);

  return (
    <>
      <SEO
        title="Live Online Law Classes | NagarikSuraksha"
        description="Request chapter-wise live online law classes with approximately eight interactive 45-minute sessions for your enrolled NagarikSuraksha course."
        canonical="/live-online-classes"
        image="/live-online-classes-whatsapp-wide-v3.jpg"
        keywords={[
          "live online law classes",
          "online legal studies classes",
          "interactive law classes",
          "chapter wise law classes",
          "NagarikSuraksha live classes",
        ]}
      />

      <Header />

      <main className="ns-live-page">
        <section className="ns-live-hero">
          <div className="ns-live-container">
            <div className="ns-live-hero-copy">
              <span className="ns-live-eyebrow"><FaVideo /> NagarikSuraksha Legal Learning</span>
              <h1>Live Online Classes</h1>
              <p>
                Get chapter-wise interactive guidance for any enrolled legal-studies course.
                Live classes are arranged on request to help you understand difficult topics and
                discuss your questions directly during class.
              </p>
              <div className="ns-live-hero-points">
                <span><FaCheckCircle /> Approximately 8 classes</span>
                <span><FaCheckCircle /> 45 minutes per class</span>
                <span><FaCheckCircle /> One class for each chapter</span>
                <span><FaCheckCircle /> Ask questions live</span>
              </div>

              <div className="ns-live-share" aria-label="Share Live Online Classes">
                <strong>Share this page</strong>
                <div>
                  <a className="is-facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(LIVE_CLASSES_URL)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><FaFacebookF /> Facebook</a>
                  <a className="is-twitter" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(LIVE_CLASSES_URL)}&text=${encodeURIComponent(SHARE_MESSAGE)}`} target="_blank" rel="noreferrer" aria-label="Share on Twitter"><FaTwitter /> Twitter</a>
                  <a className="is-whatsapp" href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_MESSAGE}\n${LIVE_CLASSES_URL}`)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp /> WhatsApp</a>
                  <button type="button" onClick={handleCopyLink} aria-label="Copy page link"><FaLink /> {copied ? "Link Copied" : "Copy Link"}</button>
                </div>
              </div>
            </div>

            <img
              className="ns-live-hero-image"
              src="/live-online-classes-og.jpg"
              alt="Live Online Classes at NagarikSuraksha"
            />
          </div>
        </section>

        <section className="ns-live-how">
          <div className="ns-live-container">
            <span className="ns-live-label">How It Works</span>
            <h2>Personal Guidance Alongside Your Course</h2>
            <p className="ns-live-lead">
              First enroll in the course you wish to study. If you need teacher-led support,
              choose the Premium Live Plan or upgrade your existing enrollment. The live batch
              and class schedule are then arranged on request.
            </p>

            <div className="ns-live-feature-grid">
              <article><FaBookOpen /><h3>Chapter-wise Classes</h3><p>Each session follows the chapter sequence of your selected course.</p></article>
              <article><FaClock /><h3>Focused 45-Minute Sessions</h3><p>Approximately eight focused classes, normally one for every chapter.</p></article>
              <article><FaComments /><h3>Ask Your Questions</h3><p>Raise doubts and clarify legal concepts directly with the instructor during class.</p></article>
              <article><FaLaptop /><h3>Attend Online</h3><p>Join through the protected Google Meet link shown in your student portal.</p></article>
            </div>

            <div className="ns-live-plan-note">
              <FaLock />
              <div>
                <h3>Enrollment and Access</h3>
                <p>
                  Course enrollment is required. Live-class access is available for an additional
                  ₹499, or ₹548 together with the ₹49 course and certification enrollment.
                  Meeting links are visible only to students with verified live-class access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ns-live-courses">
          <div className="ns-live-container">
            <div className="ns-live-section-heading">
              <div><span className="ns-live-label">Available on Request</span><h2>Choose Your Course</h2></div>
              {!loading && <span>{courses.length} courses</span>}
            </div>

            {loading ? (
              <p className="ns-live-status">Loading courses...</p>
            ) : (
              <div className="ns-live-course-grid">
                {courses.map((course) => {
                  const image = getCourseImage(course);
                  const slug = course.slug || course.id;
                  return (
                    <article className="ns-live-course-card" key={course.id}>
                      {image && <img src={image} alt={`${course.title} live online classes`} />}
                      <div className="ns-live-course-body">
                        <span className="ns-live-request-badge"><FaVideo /> Available on Request</span>
                        <h3>{course.title}</h3>
                        <p>{course.shortDescription || course.description}</p>
                        <div className="ns-live-course-meta">
                          <span><FaClock /> Approx. 8 × 45 min</span>
                          <span><FaComments /> Interactive Q&amp;A</span>
                        </div>
                        <Link to={`/courses/${slug}`}>View Course &amp; Enroll <FaArrowRight /></Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .ns-live-page, .ns-live-page * { box-sizing: border-box; }
        .ns-live-page { color: #13233b; background: #fff; }
        .ns-live-container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .ns-live-hero { padding: 78px 0; color: #fff; background: radial-gradient(circle at 78% 20%, #174f78 0, transparent 32%), linear-gradient(135deg, #06182d, #0a2945); }
        .ns-live-hero .ns-live-container { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(360px, .85fr); align-items: center; gap: 46px; }
        .ns-live-hero-copy { min-width: 0; }
        .ns-live-hero-image { display: block; width: 100%; border: 2px solid rgba(223, 165, 69, .78); border-radius: 18px; box-shadow: 0 24px 55px rgba(0, 0, 0, .38); }
        .ns-live-eyebrow, .ns-live-label { color: #dfa545; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; font-size: .78rem; }
        .ns-live-eyebrow { display: flex; gap: 9px; align-items: center; }
        .ns-live-hero h1 { margin: 15px 0 14px; font-size: clamp(2.4rem, 5vw, 4.5rem); line-height: 1.03; }
        .ns-live-hero p { max-width: 760px; color: #dce7f0; font-size: 1.08rem; line-height: 1.8; }
        .ns-live-hero-points { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 26px; }
        .ns-live-hero-points span { display: flex; align-items: center; gap: 7px; font-weight: 700; }
        .ns-live-hero-points svg { color: #dfa545; }
        .ns-live-share {
          display: inline-block;
          margin-top: 30px;
          padding: 16px 18px;
          border: 1px solid #e2b15f;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, .2);
        }
        .ns-live-share > strong { display: block; margin-bottom: 11px; color: #10243e; font-size: .9rem; }
        .ns-live-share > div { display: flex; flex-wrap: wrap; gap: 10px; }
        .ns-live-share a, .ns-live-share button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 40px;
          padding: 9px 14px;
          border: 1px solid transparent;
          border-radius: 9px;
          color: #fff;
          background: #d99a39;
          font: inherit;
          font-size: .84rem;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
        }
        .ns-live-share a:hover, .ns-live-share button:hover { transform: translateY(-1px); filter: brightness(1.08); }
        .ns-live-share .is-facebook { background: #1877f2; }
        .ns-live-share .is-twitter { background: #17202a; }
        .ns-live-share .is-whatsapp { background: #198b47; }
        .ns-live-how, .ns-live-courses { padding: 68px 0; }
        .ns-live-how h2, .ns-live-courses h2 { margin: 9px 0 14px; color: #07182f; font-size: clamp(1.8rem, 3vw, 2.6rem); }
        .ns-live-lead { max-width: 880px; color: #52647a; line-height: 1.75; }
        .ns-live-feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin: 34px 0; }
        .ns-live-feature-grid article { padding: 24px; border: 1px solid #dfe7ef; border-radius: 15px; box-shadow: 0 10px 28px rgba(7, 24, 47, .06); }
        .ns-live-feature-grid article > svg { color: #c98625; font-size: 1.55rem; }
        .ns-live-feature-grid h3 { margin: 15px 0 8px; color: #10243e; font-size: 1.05rem; }
        .ns-live-feature-grid p, .ns-live-plan-note p { margin: 0; color: #607087; line-height: 1.65; }
        .ns-live-plan-note { display: flex; gap: 16px; padding: 24px; border: 1px solid #d9b064; border-radius: 14px; background: #fff8e9; }
        .ns-live-plan-note > svg { flex: 0 0 auto; color: #a76512; font-size: 1.3rem; margin-top: 3px; }
        .ns-live-plan-note h3 { margin: 0 0 7px; color: #6d430b; }
        .ns-live-courses { background: #f5f8fc; }
        .ns-live-section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 28px; }
        .ns-live-section-heading > span { color: #65758b; font-weight: 700; }
        .ns-live-course-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .ns-live-course-card { overflow: hidden; border: 1px solid #dce5ef; border-radius: 16px; background: #fff; box-shadow: 0 12px 30px rgba(7, 24, 47, .07); }
        .ns-live-course-card > img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
        .ns-live-course-body { padding: 21px; }
        .ns-live-request-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; color: #1c6339; background: #e3f7ea; border-radius: 999px; font-size: .73rem; font-weight: 800; }
        .ns-live-course-body h3 { margin: 14px 0 9px; color: #0c203b; font-size: 1.18rem; }
        .ns-live-course-body > p { height: 4.7em; overflow: hidden; color: #607087; line-height: 1.58; }
        .ns-live-course-meta { display: flex; flex-wrap: wrap; gap: 9px 14px; margin: 17px 0; color: #44566c; font-size: .82rem; }
        .ns-live-course-meta span, .ns-live-course-body > a { display: flex; align-items: center; gap: 7px; }
        .ns-live-course-body > a { color: #1558c8; font-weight: 800; text-decoration: none; }
        .ns-live-status { padding: 35px; text-align: center; color: #617087; }
        @media (max-width: 980px) {
          .ns-live-hero .ns-live-container { grid-template-columns: 1fr; }
          .ns-live-hero-image { width: min(760px, 100%); }
          .ns-live-feature-grid, .ns-live-course-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 650px) {
          .ns-live-container { width: min(100% - 28px, 1180px); }
          .ns-live-hero { padding: 52px 0; }
          .ns-live-hero .ns-live-container { margin: 0 auto; }
          .ns-live-feature-grid, .ns-live-course-grid { grid-template-columns: 1fr; }
          .ns-live-section-heading { align-items: flex-start; flex-direction: column; gap: 5px; }
          .ns-live-share { display: block; }
          .ns-live-share > div { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ns-live-share a, .ns-live-share button { justify-content: center; }
        }
      `}</style>
    </>
  );
}
