import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section id="legal-consultation" className="ns-contact-cta">
      <div className="ns-contact-cta-container">
        <div className="ns-contact-cta-copy">
          <p className="ns-contact-cta-eyebrow">Need Legal Assistance?</p>
          <h2>Get Professional Legal Guidance Today</h2>
          <p className="ns-contact-cta-description">
            Whether you need legal consultation, property verification,
            consumer dispute assistance or want to learn law through our
            structured LL.B learning platform, NagarikSuraksha is here to help.
          </p>

          <div className="ns-contact-cta-actions">
            <a
              href="https://wa.me/919830015487?text=Hello%20NagarikSuraksha%2C%20I%20would%20like%20to%20request%20a%20free%20legal%20consultation."
              className="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Free Consultation <FaArrowRight />
            </a>
            <Link to="/llb-courses" className="secondary">
              Start Free LL.B Learning <FaArrowRight />
            </Link>
          </div>
        </div>

        <aside className="ns-contact-cta-panel">
          <h3>Contact Information</h3>

          <div className="ns-contact-detail">
            <span><FaPhoneAlt /></span>
            <div>
              <small>Call Us</small>
              <a href="tel:+919830015487">+91 98300 15487</a>
            </div>
          </div>

          <div className="ns-contact-detail">
            <span><FaEnvelope /></span>
            <div>
              <small>Email</small>
              <a href="mailto:beraarnab@gmail.com">beraarnab@gmail.com</a>
            </div>
          </div>

          <p className="ns-contact-cta-note">
            Get guidance regarding civil, criminal, property, consumer,
            banking, cyber and family-law matters.
          </p>
        </aside>
      </div>

      <style>{`
        .ns-contact-cta,.ns-contact-cta *{box-sizing:border-box}.ns-contact-cta{scroll-margin-top:88px;padding:76px 20px;background:linear-gradient(120deg,#1d4ed8 0%,#1e40af 45%,#0f172a 100%);color:#fff}.ns-contact-cta-container{display:grid;width:min(100%,1180px);margin:0 auto;grid-template-columns:minmax(0,1.25fr) minmax(320px,.75fr);gap:64px;align-items:center}.ns-contact-cta-eyebrow{margin:0 0 12px;color:#bfdbfe;font-size:12px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}.ns-contact-cta-copy h2{max-width:720px;margin:0;color:#fff;font-size:clamp(34px,5vw,54px);line-height:1.12}.ns-contact-cta-description{max-width:760px;margin:22px 0 0;color:#dbeafe;font-size:17px;line-height:1.8}.ns-contact-cta-actions{display:flex;flex-wrap:wrap;gap:13px;margin-top:30px}.ns-contact-cta-actions a{display:inline-flex;min-height:50px;align-items:center;justify-content:center;gap:10px;border:2px solid #fff;border-radius:11px;padding:0 22px;color:#fff;text-decoration:none;font-weight:800;transition:.2s}.ns-contact-cta-actions a.primary{border-color:#facc15;background:#facc15;color:#0f172a}.ns-contact-cta-actions a:hover{transform:translateY(-2px)}.ns-contact-cta-panel{padding:30px;border:1px solid rgba(255,255,255,.2);border-radius:20px;background:rgba(255,255,255,.1);box-shadow:0 20px 50px rgba(2,6,23,.22);backdrop-filter:blur(8px)}.ns-contact-cta-panel h3{margin:0 0 25px;color:#fff;font-size:24px}.ns-contact-detail{display:flex;align-items:center;gap:15px;margin-top:18px}.ns-contact-detail>span{display:flex;width:48px;height:48px;flex:none;align-items:center;justify-content:center;border-radius:12px;background:rgba(255,255,255,.16);color:#fff}.ns-contact-detail small{display:block;margin-bottom:4px;color:#bfdbfe}.ns-contact-detail a{color:#fff;text-decoration:none;font-size:17px;font-weight:750;overflow-wrap:anywhere}.ns-contact-cta-note{margin:25px 0 0;border:1px solid rgba(255,255,255,.14);border-radius:13px;background:rgba(255,255,255,.08);padding:17px;color:#dbeafe;line-height:1.7}@media(max-width:850px){.ns-contact-cta-container{grid-template-columns:1fr;gap:38px}.ns-contact-cta-panel{max-width:600px}}@media(max-width:640px){.ns-contact-cta{padding:56px 14px}.ns-contact-cta-description{font-size:15px}.ns-contact-cta-actions{display:grid}.ns-contact-cta-actions a{width:100%}.ns-contact-cta-panel{padding:22px}.ns-contact-detail a{font-size:15px}}
      `}</style>
    </section>
  );
};

export default ContactCTA;
