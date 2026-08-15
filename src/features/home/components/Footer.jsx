import { Link } from "react-router-dom";
import {
  FaBalanceScale, FaEnvelope, FaFacebookF, FaInstagram,
  FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaYoutube,
} from "react-icons/fa";

const practiceAreas = ["Civil Law", "Criminal Law", "Property Law", "Consumer Law", "Cyber Law", "Family Law", "Banking & SARFAESI", "Legal Documentation"];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ns-footer">
      <div className="ns-footer-container ns-footer-grid">
        <section className="ns-footer-about">
          <div className="ns-footer-brand">
            <FaBalanceScale />
            <div><h2>NagarikSuraksha</h2><p>Legal Learning & Consultancy</p></div>
          </div>
          <p className="ns-footer-description">Empowering citizens through legal awareness, professional legal services and structured legal education.</p>
          <div className="ns-footer-socials">
            <a href="#" aria-label="NagarikSuraksha on Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="NagarikSuraksha on YouTube"><FaYoutube /></a>
            <a href="#" aria-label="NagarikSuraksha on LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="NagarikSuraksha on Instagram"><FaInstagram /></a>
          </div>
        </section>

        <section><h3>Quick Links</h3><ul className="ns-footer-links">
          <li><Link to="/">Home</Link></li><li><Link to="/about">About Us</Link></li>
          <li><Link to="/">Legal Services</Link></li><li><Link to="/learning">LL.B Learning</Link></li>
          <li><Link to="/videos">Videos</Link></li><li><Link to="/contact">Contact</Link></li>
        </ul></section>

        <section><h3>Practice Areas</h3><ul className="ns-footer-links">{practiceAreas.map((area) => <li key={area}>{area}</li>)}</ul></section>

        <section><h3>Contact</h3><div className="ns-footer-contact">
          <div><FaPhoneAlt /><span><small>Phone</small><a href="tel:+919830015487">+91 98300 15487</a></span></div>
          <div><FaEnvelope /><span><small>Email</small><a href="mailto:beraarnab@gmail.com">beraarnab@gmail.com</a></span></div>
          <div><FaMapMarkerAlt /><span><small>Office</small><p>Kolkata, West Bengal, India</p></span></div>
        </div></section>
      </div>

      <div className="ns-footer-disclaimer">
        <div className="ns-footer-container">
          <strong>Disclaimer:</strong>
          <p>
            NagarikSuraksha is an independent private educational portal. We
            are not affiliated with, endorsed by, or connected to any
            government agency or educational board.
          </p>
        </div>
      </div>

      <div className="ns-footer-bottom"><div className="ns-footer-container">
        <p>© {year} NagarikSuraksha. All Rights Reserved.</p>
        <nav><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/disclaimer">Disclaimer</Link></nav>
      </div></div>

      <style>{`
        .ns-footer,.ns-footer *{box-sizing:border-box}.ns-footer{width:100%;background:#020617;color:#cbd5e1}.ns-footer-container{width:min(100% - 40px,1280px);margin:0 auto}.ns-footer-grid{display:grid;grid-template-columns:1.35fr .8fr .9fr 1fr;gap:44px;padding-top:64px;padding-bottom:58px}.ns-footer h2,.ns-footer h3,.ns-footer p{margin-top:0}.ns-footer h2{margin-bottom:3px;color:#fff;font-size:24px}.ns-footer h3{margin-bottom:20px;color:#fff;font-size:18px}.ns-footer-brand{display:flex;align-items:center;gap:13px}.ns-footer-brand>svg{width:36px;height:36px;flex:none;color:#facc15}.ns-footer-brand p{margin:0;color:#94a3b8;font-size:12px}.ns-footer-description{max-width:360px;margin:20px 0 0;color:#94a3b8;line-height:1.75}.ns-footer-socials{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}.ns-footer-socials a{display:inline-flex;width:42px;height:42px;align-items:center;justify-content:center;border-radius:9px;background:#1e293b;color:#fff;transition:.2s}.ns-footer-socials a:hover{transform:translateY(-2px);background:#2563eb}.ns-footer-links{margin:0;padding:0;list-style:none}.ns-footer-links li{margin-bottom:12px;color:#94a3b8;line-height:1.45}.ns-footer a{color:inherit;text-decoration:none}.ns-footer-links a:hover,.ns-footer-bottom a:hover,.ns-footer-contact a:hover{color:#60a5fa}.ns-footer-contact{display:flex;flex-direction:column;gap:21px}.ns-footer-contact>div{display:flex;align-items:flex-start;gap:12px}.ns-footer-contact>div>svg{flex:none;margin-top:4px;color:#60a5fa}.ns-footer-contact span{min-width:0}.ns-footer-contact small{display:block;margin-bottom:4px;color:#64748b}.ns-footer-contact p,.ns-footer-contact a{display:block;margin:0;color:#cbd5e1;overflow-wrap:anywhere}.ns-footer-disclaimer{border-top:1px solid #1e293b;background:#0f172a}.ns-footer-disclaimer>.ns-footer-container{display:flex;align-items:flex-start;gap:10px;padding-top:18px;padding-bottom:18px;color:#94a3b8;font-size:13px;line-height:1.6}.ns-footer-disclaimer strong{flex:none;color:#facc15}.ns-footer-disclaimer p{margin:0}.ns-footer-bottom{border-top:1px solid #1e293b}.ns-footer-bottom>.ns-footer-container{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:22px;padding-bottom:22px;color:#64748b;font-size:13px}.ns-footer-bottom p{margin:0}.ns-footer-bottom nav{display:flex;flex-wrap:wrap;gap:24px}@media(max-width:950px){.ns-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.ns-footer-disclaimer>.ns-footer-container{display:block;text-align:center}.ns-footer-disclaimer strong{display:block;margin-bottom:6px}.ns-footer-container{width:min(100% - 28px,1280px)}.ns-footer-grid{grid-template-columns:1fr;gap:34px;padding-top:48px;padding-bottom:42px}.ns-footer-bottom>.ns-footer-container{flex-direction:column;text-align:center}.ns-footer-bottom nav{justify-content:center;gap:15px 22px}}
      `}</style>
    </footer>
  );
};

export default Footer;
