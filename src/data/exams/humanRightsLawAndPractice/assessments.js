const COURSE_SLUG = "human-rights-law-and-practice";

const mockTest1QuestionBank = [
  [
    "Which feature most accurately distinguishes a legal human right from a purely moral claim?",
    "It is recognised through a legal source and linked to an institution or remedy within that legal system",
    "It must always be written in a criminal statute",
    "It can belong only to citizens",
    "It is valid only when every culture describes it identically",
    0,
    "Moral reasoning may justify a right, while a legal human right must also be located in a constitutional, statutory, treaty or customary legal source with an applicable institutional framework.",
  ],
  [
    "Under John Rawls's difference principle, social and economic inequalities are permissible only when they are attached to fair opportunity and:",
    "Benefit the least advantaged members of society",
    "Maximise the wealth of the already privileged",
    "Eliminate equal basic liberties",
    "Are approved by a simple electoral majority",
    0,
    "Rawls permits inequalities only within a fair system and where they work to the greatest benefit of the least advantaged, subject to the priority of equal basic liberties.",
  ],
  [
    "Amartya Sen's capability approach principally evaluates justice by asking:",
    "What people are actually able to do and to be",
    "Whether everyone possesses identical goods regardless of circumstance",
    "Whether courts decide every budgetary question",
    "Whether inherited social status is preserved",
    0,
    "The capability approach focuses on substantive freedoms and real opportunities rather than resources or formal rights alone.",
  ],
  [
    "The International Bill of Human Rights is commonly understood to comprise:",
    "The UDHR, ICCPR, ICESCR and their associated Optional Protocols",
    "Only the Charter of the United Nations",
    "The Geneva Conventions and Rome Statute alone",
    "Only regional human-rights conventions",
    0,
    "The International Bill combines the Universal Declaration with the two 1966 Covenants and associated Optional Protocols.",
  ],
  [
    "Which statement correctly distinguishes the ICCPR from the ICESCR?",
    "The ICCPR includes respect-and-ensure obligations, while the ICESCR requires steps toward progressive realisation using maximum available resources, alongside immediate duties",
    "Only the ICESCR prohibits discrimination",
    "The ICCPR is a declaration while the ICESCR is a treaty",
    "India is party only to the ICCPR",
    0,
    "Both are treaties and both prohibit discrimination; their obligation structures differ, though many ICESCR duties such as taking steps and non-discrimination are immediate.",
  ],
  [
    "India became bound by the ICCPR and ICESCR through accession in:",
    "1979",
    "1948",
    "1966",
    "1993",
    0,
    "India acceded to both Covenants on 10 April 1979, and they entered into force for India on 10 July 1979.",
  ],
  [
    "The special mental element that distinguishes genocide is the intent to:",
    "Destroy, in whole or in substantial part, a protected group as such",
    "Cause any unlawful property loss",
    "Discriminate in a single private transaction",
    "Commit an offence during an armed conflict only",
    0,
    "Genocide requires a listed prohibited act plus specific intent to destroy a national, ethnical, racial or religious group in whole or substantial part.",
  ],
  [
    "What is India's present status under the Convention against Torture?",
    "India signed it in 1997 but has not ratified it",
    "India ratified it in 1984 without any signature",
    "India withdrew after ratification",
    "India is party to both CAT and OPCAT",
    0,
    "India signed CAT on 14 October 1997 but has not ratified it and has not joined its Optional Protocol.",
  ],
  [
    "Under Indian constitutional law, compelling a worker through economic necessity to work for less than the statutory minimum wage may violate:",
    "Article 23's prohibition of forced labour",
    "Article 18's abolition of titles",
    "Article 105's parliamentary privileges",
    "Article 300A alone",
    0,
    "People's Union for Democratic Rights v. Union of India recognised that compulsion under Article 23 is not confined to physical force and may include severe economic compulsion.",
  ],
  [
    "Maneka Gandhi v. Union of India established that a procedure depriving life or personal liberty must be:",
    "Fair, just and reasonable and consistent with the interaction of Articles 14, 19 and 21",
    "Valid whenever an executive officer verbally approves it",
    "Immune from Article 14 review",
    "Examined only under the Directive Principles",
    0,
    "Maneka Gandhi rejected isolated reading of rights and required a non-arbitrary, fair, just and reasonable procedure under Article 21.",
  ],
  [
    "Which statement correctly compares Articles 32 and 226 of the Constitution?",
    "Article 32 enforces Fundamental Rights in the Supreme Court, while Article 226 also reaches other public-law rights in High Courts",
    "Article 226 is available only to the Union Government",
    "Article 32 can never issue habeas corpus",
    "Both provisions apply only after a criminal conviction",
    0,
    "Article 32 guarantees Supreme Court access for Fundamental Rights; Article 226 gives High Courts writ power for Fundamental Rights and for any other public-law purpose.",
  ],
  [
    "The Supreme Court's method in Vishaka v. State of Rajasthan was to:",
    "Use CEDAW norms consistent with Fundamental Rights to fill a legislative vacuum",
    "Treat every treaty as automatically overriding Parliament",
    "Hold workplace harassment outside Article 21",
    "Abolish judicial review of service rules",
    0,
    "Vishaka used compatible international norms to interpret Fundamental Rights and supply guidelines until Parliament enacted workplace-harassment legislation.",
  ],
  [
    "Under the POSH Act, a Local Committee principally receives a complaint when:",
    "The establishment has fewer than ten workers or the complaint is against the employer",
    "Every workplace has more than one thousand employees",
    "The complainant is necessarily a government employee",
    "A criminal court has already convicted the respondent",
    0,
    "The Local Committee closes the forum gap for smaller establishments and for complaints against an employer.",
  ],
  [
    "Which group correctly states the CRC's four general principles?",
    "Non-discrimination; best interests; life, survival and development; and respect for the child's views",
    "Property, contract, taxation and inheritance",
    "Punishment, detention, exclusion and silence",
    "Nationality, extradition, immunity and diplomatic protection only",
    0,
    "CRC Articles 2, 3, 6 and 12 supply the four general principles used to interpret and implement all children's rights.",
  ],
  [
    "Under disability law, reasonable accommodation differs from general accessibility because accommodation is:",
    "An individualised necessary adjustment in a particular case, subject to disproportionate or undue burden",
    "A voluntary charitable gift with no equality connection",
    "Available only after a criminal conviction",
    "A substitute for all advance accessibility standards",
    0,
    "Accessibility is an anticipatory systemic duty, while reasonable accommodation responds to an individual's circumstances and denial may constitute discrimination.",
  ],
  [
    "Which reservation percentages are correctly matched under the RPwD Act, 2016?",
    "At least 5% in covered higher-education institutions and at least 4% in government employment for persons with benchmark disabilities",
    "2% in higher education and 1% in government employment",
    "10% in every private job and no education reservation",
    "4% in higher education and 5% in every private job",
    0,
    "The Act provides at least five per cent reservation in government and government-aided higher education and at least four per cent in government establishments' cadre strength, subject to its framework.",
  ],
  [
    "Which statement accurately describes India's ILO indigenous-rights treaty position?",
    "India ratified Convention No. 107 in 1958 but has not ratified Convention No. 169",
    "India ratified Convention No. 169 but not Convention No. 107",
    "India has ratified both conventions",
    "India has ratified neither convention",
    0,
    "India remains party to the older ILO Convention No. 107 and has not ratified the revised Convention No. 169.",
  ],
  [
    "Which feature most clearly distinguishes the Sixth Schedule from the Fifth Schedule?",
    "The Sixth Schedule creates Autonomous District and Regional Councils with specified legislative, judicial, administrative and fiscal powers",
    "The Sixth Schedule applies uniformly to every Scheduled Area in India",
    "The Fifth Schedule creates an international court",
    "The Fifth Schedule contains no role for the Governor",
    0,
    "The Sixth Schedule grants direct constitutional authority to councils in specified northeastern tribal areas; the Fifth uses a different Governor, President and advisory structure, supplemented by PESA.",
  ],
  [
    "Under Section 2(1)(d) of the Protection of Human Rights Act, 1993, human rights relate to:",
    "Life, liberty, equality and dignity guaranteed by the Constitution or embodied in the International Covenants and enforceable by Indian courts",
    "Only contractual rights between companies",
    "Only rights created by municipal taxation rules",
    "Every moral preference regardless of domestic enforceability",
    0,
    "The statutory definition links life, liberty, equality and dignity to constitutional or covenant rights enforceable by Indian courts.",
  ],
  [
    "Section 36(2) of the Protection of Human Rights Act generally bars a Commission inquiry after:",
    "One year from the act constituting the alleged human-rights violation",
    "Thirty days from every complaint",
    "Three years from the Commission's constitution",
    "Ten years with no jurisdictional consequence",
    0,
    "The Supreme Court in N.C. Dhoundial treated the one-year provision as a jurisdictional bar, while other judicial and statutory remedies retain their own limitation rules.",
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

export const humanRightsLawAndPracticeMockTests = {
  1: {
    id: `${COURSE_SLUG}-mock-1`,
    courseId: COURSE_SLUG,
    title: "Human Rights Law and Practice – Mock Test 1",
    description:
      "Course-wide practice assessment covering the theoretical, international, constitutional and institutional foundations across all eight units.",
    testNumber: 1,
    totalQuestions: 20,
    marksPerQuestion: 2,
    maximumMarks: 40,
    passPercentage: 50,
    durationMinutes: 30,
    questions: mockTest1QuestionBank.map((entry, index) =>
      makeQuestion(entry, index, "HR-M1"),
    ),
  },
};

export { COURSE_SLUG as HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_SLUG };
