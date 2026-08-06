import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              Need Legal Assistance?
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Get Professional Legal Guidance Today
            </h2>

            <p className="mb-8 text-lg leading-8 text-blue-100">
              Whether you need legal consultation, property verification,
              consumer dispute assistance or want to learn law through our
              structured LL.B learning platform, NagarikSuraksha is here to
              help.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Contact Us
                <FaArrowRight />
              </Link>

              <Link
                to="/learning"
                className="inline-flex items-center gap-3 rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Start Learning
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-lg">
            <h3 className="mb-8 text-2xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-white/20 p-4">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <p className="text-sm text-blue-200">Call Us</p>

                  <h4 className="text-xl font-semibold">
                    +91 XXXXX XXXXX
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-white/20 p-4">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-sm text-blue-200">Email</p>

                  <h4 className="text-xl font-semibold">
                    info@nagariksuraksha.com
                  </h4>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="leading-8 text-blue-100">
                  Our legal experts are available to assist you with legal
                  consultation, property disputes, consumer complaints,
                  cyber law, family law and legal education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;