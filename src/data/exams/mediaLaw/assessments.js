const COURSE_SLUG = "media-law";

const mockTest1QuestionBank = [
  [
    "Which characteristic most clearly distinguishes networked new media from traditional one-way mass communication?",
    "Users can simultaneously create, receive, modify and redistribute content across interactive networks",
    "Every online message is privately addressed to one person",
    "Digital publication always requires prior government approval",
    "New media cannot reproduce print or broadcast content",
    0,
    "New media supports interactive many-to-many communication in which users may act as creators, audiences and distributors, although traditional media content can also circulate digitally.",
  ],
  [
    "Under the social-responsibility theory of media, freedom of the press is principally accompanied by:",
    "Professional duties of accuracy, diversity, accountability and service to public discussion",
    "Absolute immunity from all generally applicable laws",
    "Exclusive State ownership of every news organisation",
    "A prohibition on criticism of advertisers",
    0,
    "Social-responsibility theory protects editorial freedom while recognising duties toward truthful, diverse and socially significant communication.",
  ],
  [
    "The Press and Registration of Periodicals Act, 2023 is primarily concerned with:",
    "Registration and administrative identification of printed periodicals rather than general approval of editorial opinion",
    "Prior censorship of every online post",
    "Certification of films for public exhibition",
    "Allocation of telecommunications spectrum",
    0,
    "The 2023 Act modernises registration of printed periodicals and does not give the registration authority a general power to approve editorial viewpoints.",
  ],
  [
    "Which constitutional provision is the principal source of press and media freedom in India?",
    "Article 19(1)(a), subject to the reasonable-restriction grounds in Article 19(2)",
    "Article 18 alone",
    "Article 300A without any connection to speech",
    "The Preamble alone, excluding Fundamental Rights",
    0,
    "The Constitution contains no separately worded press clause; the Supreme Court locates press and media freedom within Article 19(1)(a).",
  ],
  [
    "After Justice K.S. Puttaswamy (Retd.) v. Union of India, a State restriction on informational privacy should ordinarily satisfy:",
    "Legality, legitimate aim and proportionality with adequate safeguards",
    "Only administrative convenience",
    "A newspaper editor's private preference",
    "Automatic validity whenever technology is involved",
    0,
    "Puttaswamy recognises privacy as a fundamental right and requires constitutionally adequate legal authority, purpose, necessity and proportionality.",
  ],
  [
    "What is the correct relationship between the Right to Information Act and journalistic source confidentiality?",
    "RTI governs access to information held by public authorities; it does not create a general statutory journalist-source privilege",
    "RTI automatically compels every journalist to reveal every source",
    "RTI applies only to private family conversations",
    "Source confidentiality overrides every court order without exception",
    0,
    "The RTI Act concerns public-authority records, while source protection must be analysed through the relevant statute, evidence law, professional norms and judicial order.",
  ],
  [
    "Under the Bharatiya Nyaya Sanhita framework, criminal defamation generally requires analysis of:",
    "A defamatory imputation, publication concerning a person, the required mental element, harm to reputation and any applicable exception",
    "Only whether the subject disliked the report",
    "Automatic guilt whenever a public official is criticised",
    "Proof that the statement appeared exclusively in print",
    0,
    "Criminal defamation requires the statutory elements and permits the accused to rely on applicable exceptions; criticism alone is not automatically defamatory.",
  ],
  [
    "Which statement correctly distinguishes civil and criminal defamation?",
    "Civil defamation principally provides private remedies such as damages or injunction, while criminal defamation may result in statutory punishment after prosecution",
    "Civil defamation is decided only by the Press Council",
    "Criminal defamation never requires publication",
    "Both are identical in forum, elements and remedy",
    0,
    "The two fields protect reputation through different procedures and remedies, although factual questions and recognised defences may overlap.",
  ],
  [
    "The fair-report privilege for judicial proceedings most safely protects a report that is:",
    "Accurate, fair, substantially complete and presented without materially misleading additions",
    "Invented but labelled breaking news",
    "Based solely on an anonymous social-media rumour",
    "Published in breach of a binding statutory identity prohibition",
    0,
    "Open-court reporting receives protection when it fairly and accurately represents proceedings, subject to lawful reporting restrictions and identity protections.",
  ],
  [
    "Sahara India Real Estate Corp. Ltd. v. SEBI permits a postponement order concerning court reporting only as:",
    "An exceptional, temporary and narrowly tailored measure against a real and substantial risk to a fair trial",
    "A permanent ban on all reporting about courts",
    "An automatic remedy whenever a party requests secrecy",
    "A punishment imposed by a private litigant",
    0,
    "Sahara recognises limited postponement as an exceptional balancing device, not a general system of prior restraint.",
  ],
  [
    "Under the Copyright Act, the owner of copyright in a broadcast reproduction right may restrain specified unauthorised rebroadcasting for a term of:",
    "Twenty-five years from the beginning of the calendar year following the broadcast",
    "Five years from the date of filming",
    "Sixty years after the death of every viewer",
    "A perpetual term with no statutory limit",
    0,
    "Section 37 gives broadcasting organisations a distinct reproduction right lasting twenty-five years from the beginning of the next calendar year.",
  ],
  [
    "Which statement best describes a performer's moral rights under the Copyright Act?",
    "A performer may claim identification and restrain or claim damages for prejudicial distortion, subject to the statutory framework",
    "A performer has no rights once a performance is recorded",
    "Only the broadcaster can ever identify the performer",
    "The rights apply solely to unpublished handwritten books",
    0,
    "The Act recognises economic and moral dimensions of performers' rights, including attribution and protection against prejudicial distortion.",
  ],
  [
    "A lawful journalistic sting operation is most likely to be justified when it:",
    "Targets serious public wrongdoing, uses proportionate methods, preserves complete evidence and avoids manufacturing the offence",
    "Creates the wrongdoing solely to obtain dramatic footage",
    "Publishes unrelated intimate material for entertainment",
    "Ignores accuracy because hidden recording was used",
    0,
    "Public interest, necessity, proportionality, authenticity and avoidance of entrapment or fabrication are central to assessing sting operations.",
  ],
  [
    "Under the Press Council Act, the Press Council of India may, after inquiry:",
    "Warn, admonish or censure within its statutory print sphere but not award ordinary civil damages or impose imprisonment",
    "Sentence an editor to ten years' imprisonment",
    "Cancel every television spectrum licence",
    "Determine constitutional validity with final binding effect",
    0,
    "The Council preserves press freedom and standards through statutory inquiry and censure-type powers; it is not a criminal court or universal media regulator.",
  ],
  [
    "For newspapers and periodicals dealing with news and current affairs, India's current foreign-investment policy generally permits:",
    "Up to 26 per cent foreign investment under the Government route, subject to applicable conditions",
    "Automatic 100 per cent foreign ownership without conditions",
    "No investment by any incorporated entity",
    "Exactly 51 per cent under an unregulated route",
    0,
    "Print news and current-affairs publications are subject to the sector-specific 26 per cent Government-route cap; other specialised publication categories may differ.",
  ],
  [
    "Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal established that:",
    "Airwaves are public property and broadcasting regulation must promote public good and plural communication",
    "Only the Government may ever communicate through electronic media",
    "Viewers possess no interest in receiving information",
    "Spectrum regulation is identical to newspaper registration",
    0,
    "The Supreme Court rejected exclusive State monopoly and connected broadcasting freedom and audience access with public-interest regulation of airwaves.",
  ],
  [
    "Which are the current principal CBFC certificate categories under the amended Cinematograph framework?",
    "U, UA 7+, UA 13+, UA 16+, A and S",
    "U and A only",
    "G, PG and R only",
    "News, Sports and Education only",
    0,
    "The present categories include U, three age-rated UA categories, A and S, governed by the amended Act and 2024 Certification Rules.",
  ],
  [
    "Following Shreya Singhal v. Union of India, which statement is correct?",
    "Section 66A was struck down, section 69A was upheld with safeguards, and section 79 actual knowledge was read down",
    "Section 66A remains valid for every annoying message",
    "Section 69A was converted into a private platform contract",
    "Every private complaint automatically removes safe harbour",
    0,
    "Shreya Singhal invalidated vague section 66A, sustained the structured blocking provision and confined statutory actual knowledge for intermediary removal.",
  ],
  [
    "Section 79 of the Information Technology Act provides:",
    "Conditional safe harbour for intermediaries concerning third-party information when statutory role and due-diligence requirements are satisfied",
    "Absolute immunity for a platform's own unlawful advertisements",
    "A general licence to intercept all private communications",
    "Automatic criminal conviction after any user complaint",
    0,
    "Safe harbour is conditional and issue-specific; losing it does not by itself prove the substantive offence or civil wrong.",
  ],
  [
    "Under section 21 of the Consumer Protection Act, the CCPA may impose which maximum penalty for a first misleading-advertisement contravention?",
    "₹10 lakh, with a higher statutory ceiling for a subsequent contravention",
    "₹1,000 only",
    "Life imprisonment without trial",
    "No monetary penalty under any circumstances",
    0,
    "Section 21 permits a maximum ₹10 lakh penalty for the first contravention and ₹50 lakh for a subsequent contravention, alongside other statutory directions.",
  ],
];

const optionIds = ["a", "b", "c", "d"];

const makeQuestion = (entry, index, prefix) => {
  const sourceOptions = entry.slice(1, 5);
  const shift = (index + prefix.length) % optionIds.length;
  const correctIndex = (entry[5] - shift + optionIds.length) % optionIds.length;

  return {
    id: `${prefix}-Q${String(index + 1).padStart(3, "0")}`,
    question: entry[0],
    options: optionIds.map((id, optionIndex) => ({
      id,
      text: sourceOptions[(optionIndex + shift) % optionIds.length],
    })),
    correctOptionIds: [optionIds[correctIndex]],
    explanation: entry[6],
  };
};

export const mediaLawMockTests = {
  1: {
    id: `${COURSE_SLUG}-mock-1`,
    courseId: COURSE_SLUG,
    title: "Media Law – Mock Test 1",
    description:
      "Course-wide practice assessment covering the constitutional, print, criminal, copyright, ethical, broadcast, digital and advertising-law foundations across all eight units.",
    testNumber: 1,
    totalQuestions: 20,
    marksPerQuestion: 2,
    maximumMarks: 40,
    passPercentage: 50,
    durationMinutes: 30,
    questions: mockTest1QuestionBank.map((entry, index) =>
      makeQuestion(entry, index, "ML-M1"),
    ),
  },
};

export const mediaLawFinalExam = null;

export { COURSE_SLUG as MEDIA_LAW_COURSE_SLUG };
