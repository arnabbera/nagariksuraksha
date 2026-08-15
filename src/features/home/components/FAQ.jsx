import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqItems = [
  {
    question: "What is NagarikSuraksha?",
    answer:
      "NagarikSuraksha is a digital platform for legal awareness, legal consultancy, LL.B learning, quizzes, course progress and certification.",
  },
  {
    question: "Do visitors need to log in?",
    answer:
      "No. Visitors can access the public website, legal services, legal updates, videos and contact information without logging in.",
  },
  {
    question: "Who needs to use Student Login?",
    answer:
      "Students who want to access LL.B learning materials, chapter resources, quizzes, progress tracking, subscriptions and certificates must sign in with Google.",
  },
  {
    question: "How is the student enrollment ID created?",
    answer:
      "An enrollment ID is generated automatically when a student signs in with Google for the first time. The ID remains linked to that Google account.",
  },
  {
    question: "Who can access the Admin Dashboard?",
    answer:
      "Only the authorized NagarikSuraksha administrator can access the Admin Dashboard. All other authenticated Google accounts are treated as students.",
  },
  {
    question: "Can students download PDF study materials?",
    answer:
      "Students can read available learning materials after login. PDF download access is enabled according to the applicable subscription or certification plan.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? -1 : index,
    );
  };

  return (
    <section className="ns-faq-section">
      <div className="ns-faq-container">
        <header className="ns-faq-heading">
          <p>Frequently Asked Questions</p>
          <h2>Common Questions About NagarikSuraksha</h2>
          <span>
            Find answers about public access, student login, learning
            materials, enrollment and certification.
          </span>
        </header>

        <div className="ns-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `ns-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className={`ns-faq-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <FaChevronDown aria-hidden="true" />
                </button>

                {isOpen && (
                  <div id={answerId} className="ns-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .ns-faq-section,.ns-faq-section *{box-sizing:border-box}.ns-faq-section{padding:82px 20px;background:#f8fafc}.ns-faq-container{width:min(100%,900px);margin:0 auto}.ns-faq-heading{margin-bottom:42px;text-align:center}.ns-faq-heading>p{margin:0 0 11px;color:#2563eb;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.ns-faq-heading h2{margin:0;color:#0f172a;font-size:clamp(30px,4vw,43px);line-height:1.2}.ns-faq-heading>span{display:block;max-width:690px;margin:16px auto 0;color:#64748b;font-size:17px;line-height:1.7}.ns-faq-list{display:flex;flex-direction:column;gap:14px}.ns-faq-item{overflow:hidden;border:1px solid #e2e8f0;border-radius:15px;background:#fff;box-shadow:0 8px 24px rgba(15,23,42,.05);transition:border-color .2s,box-shadow .2s}.ns-faq-item.is-open{border-color:#bfdbfe;box-shadow:0 12px 30px rgba(37,99,235,.09)}.ns-faq-item>button{display:flex;width:100%;min-height:68px;align-items:center;justify-content:space-between;gap:20px;border:0;background:#fff;color:#0f172a;padding:19px 22px;cursor:pointer;font:inherit;text-align:left}.ns-faq-item>button span{font-size:17px;font-weight:700;line-height:1.45}.ns-faq-item>button svg{flex:none;color:#2563eb;transition:transform .2s}.ns-faq-item.is-open>button svg{transform:rotate(180deg)}.ns-faq-answer{border-top:1px solid #eff6ff;background:#f8fbff;padding:18px 22px 21px}.ns-faq-answer p{margin:0;color:#475569;font-size:16px;line-height:1.75}@media(max-width:640px){.ns-faq-section{padding:58px 14px}.ns-faq-heading{margin-bottom:30px}.ns-faq-heading>span{font-size:15px}.ns-faq-item>button{min-height:60px;padding:16px}.ns-faq-item>button span{font-size:15px}.ns-faq-answer{padding:16px}.ns-faq-answer p{font-size:14px}}
      `}</style>
    </section>
  );
}
