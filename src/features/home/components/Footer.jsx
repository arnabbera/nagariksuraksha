import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBalanceScale,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Footer */}

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <FaBalanceScale
                size={34}
                className="text-yellow-400"
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  NagarikSuraksha
                </h2>

                <p className="text-sm text-slate-400">
                  Legal Learning & Consultancy
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              Empowering citizens through legal awareness,
              professional legal services and structured
              legal education.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-red-600"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-sky-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400"
                >
                  Legal Services
                </Link>
              </li>

              <li>
                <Link
                  to="/learning"
                  className="hover:text-blue-400"
                >
                  LL.B Learning
                </Link>
              </li>

              <li>
                <Link
                  to="/videos"
                  className="hover:text-blue-400"
                >
                  Videos
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Practice Areas
            </h3>

            <ul className="space-y-3">
              <li>Civil Law</li>
              <li>Criminal Law</li>
              <li>Property Law</li>
              <li>Consumer Law</li>
              <li>Cyber Law</li>
              <li>Family Law</li>
              <li>Banking & SARFAESI</li>
              <li>Legal Documentation</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p>+91 98300 15487</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p>beraarnab@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    Office
                  </p>

                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {year} NagarikSuraksha. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-blue-400"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-blue-400"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;