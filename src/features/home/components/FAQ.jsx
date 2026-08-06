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
      "Only the Google account beraarnab@gmail.com can access the Admin Dashboard. All other authenticated Google accounts are treated as students.",
  },
  {
    question: "Can students download PDF study materials?",
    answer:
      "Students can read available learning materials after login. PDF download access will be enabled according to the applicable subscription or certification plan.",
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
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Common Questions About NagarikSuraksha
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Find answers about public access, student login, learning
            materials, enrollment and certification.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {item.question}
                  </span>

                  <FaChevronDown
                    aria-hidden="true"
                    className={`shrink-0 text-blue-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                    <p className="leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}