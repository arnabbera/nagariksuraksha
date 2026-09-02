const COURSE_SLUG = "indian-constitutional-law-i";

// Indian Constitutional Law I question bank: 60 questions across the core syllabus.
const rawQuestions = [
  ["The Constituent Assembly of India first met on:", "9 December 1946", "15 August 1947", "26 November 1949", "26 January 1950", 0, "The Constituent Assembly held its first sitting on 9 December 1946."],
  ["The Constitution of India was adopted on:", "26 January 1950", "26 November 1949", "15 August 1947", "24 January 1950", 1, "The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950."],
  ["The chairman of the Drafting Committee was:", "Jawaharlal Nehru", "Rajendra Prasad", "B. R. Ambedkar", "B. N. Rau", 2, "Dr B. R. Ambedkar chaired the Drafting Committee."],
  ["India is described in Article 1 as a:", "Federation of provinces", "Union of States", "Confederation", "Unitary republic", 1, "Article 1 states that India, that is Bharat, shall be a Union of States."],
  ["The words 'Socialist' and 'Secular' were added to the Preamble by the:", "First Amendment", "Twenty-fourth Amendment", "Forty-second Amendment", "Forty-fourth Amendment", 2, "The Constitution (Forty-second Amendment) Act, 1976 added these words."],
  ["The Preamble promises justice in which forms?", "Social, economic and political", "Civil and criminal only", "Federal and provincial", "Natural and contractual", 0, "The Preamble expressly promises social, economic and political justice."],
  ["Parliament's power to form a new State is principally found in:", "Article 2", "Article 3", "Article 4 only", "Article 368", 1, "Article 3 governs formation of new States and alteration of areas, boundaries or names."],
  ["A law under Articles 2 and 3 is not treated as a constitutional amendment by virtue of:", "Article 4", "Article 12", "Article 32", "Article 356", 0, "Article 4 permits supplemental provisions and excludes such laws from Article 368."],
  ["Citizenship at the commencement of the Constitution is addressed in:", "Part I", "Part II", "Part III", "Part IV", 1, "Articles 5 to 11 in Part II deal with citizenship at commencement."],
  ["Parliament's power to regulate citizenship is recognised by:", "Article 11", "Article 14", "Article 19", "Article 21", 0, "Article 11 preserves Parliament's authority to legislate on citizenship."],

  ["For Part III, the definition of 'State' appears in:", "Article 12", "Article 13", "Article 14", "Article 15", 0, "Article 12 defines State for the purpose of fundamental rights."],
  ["Article 13 declares laws inconsistent with fundamental rights void:", "In their entirety in every case", "To the extent of the inconsistency", "Only after Parliament repeals them", "Only during an emergency", 1, "Article 13 uses the expression 'to the extent of such inconsistency'."],
  ["The doctrine of severability seeks to:", "Preserve valid portions separable from an invalid provision", "Suspend the whole Constitution", "Transfer a case", "Prevent judicial review", 0, "A severable valid portion may survive after the unconstitutional part is removed."],
  ["The doctrine of eclipse mainly explains the position of:", "Pre-Constitution laws inconsistent with fundamental rights", "Money Bills", "Treaties", "Ordinances only", 0, "Such a law becomes dormant against citizens to the extent of inconsistency rather than necessarily being dead for all purposes."],
  ["Equality before law and equal protection of laws are guaranteed by:", "Article 13", "Article 14", "Article 16", "Article 18", 1, "Article 14 contains both guarantees."],
  ["A valid classification under Article 14 requires intelligible differentia and:", "Presidential approval", "A rational nexus with the object sought", "Unanimous consent", "A financial emergency", 1, "The differentia must bear a rational relation to the law's objective."],
  ["Article 15 prohibits specified discrimination principally on grounds including:", "Religion, race, caste, sex or place of birth", "Language alone", "Income alone", "Occupation alone", 0, "These are the grounds expressly stated in Article 15(1)."],
  ["Equality of opportunity in public employment is protected by:", "Article 15", "Article 16", "Article 17", "Article 19", 1, "Article 16 addresses public employment."],
  ["Untouchability is abolished by:", "Article 16", "Article 17", "Article 18", "Article 23", 1, "Article 17 abolishes untouchability and forbids its practice in any form."],
  ["Article 18 principally abolishes:", "Preventive detention", "Titles, subject to stated exceptions", "Religious instruction", "Taxation", 1, "Article 18 abolishes titles other than military or academic distinctions."],

  ["The freedoms in Article 19 are available to:", "All persons", "Citizens", "Companies only", "Foreign States", 1, "Article 19 expressly confers its freedoms on citizens."],
  ["Freedom of speech and expression is protected by:", "Article 19(1)(a)", "Article 20(1)", "Article 21A", "Article 25", 0, "Article 19(1)(a) guarantees speech and expression, subject to Article 19(2)."],
  ["A restriction on Article 19 freedom must fall within constitutionally specified grounds and be:", "Retrospective", "Reasonable", "Permanent", "Unwritten", 1, "Articles 19(2)–(6) permit reasonable restrictions on enumerated grounds."],
  ["Protection against ex post facto criminal laws is found in:", "Article 20(1)", "Article 20(2)", "Article 20(3)", "Article 21", 0, "Article 20(1) protects against retrospective conviction and enhanced penalty."],
  ["The protection against double jeopardy is contained in:", "Article 19", "Article 20(2)", "Article 21", "Article 22", 1, "Article 20(2) prevents prosecution and punishment for the same offence more than once."],
  ["Article 20(3) protects an accused person against being compelled to:", "Appear in court", "Be a witness against himself or herself", "Provide fingerprints in every context", "Obtain counsel", 1, "It is the constitutional protection against compelled testimonial self-incrimination."],
  ["Article 21 protects life and personal liberty except according to:", "Executive discretion", "Procedure established by law", "Police custom", "A private agreement", 1, "Deprivation must follow a valid, fair, just and reasonable legal procedure."],
  ["The right to education for children aged six to fourteen is in:", "Article 21A", "Article 24", "Article 29", "Article 45 only", 0, "Article 21A makes free and compulsory education a fundamental right for that age group."],
  ["An arrested person must ordinarily be produced before the nearest magistrate within:", "12 hours", "24 hours excluding journey time", "48 hours", "Seven days", 1, "Article 22(2) prescribes twenty-four hours, excluding necessary journey time."],
  ["Preventive detention differs from punitive detention because it is intended primarily to:", "Punish a completed offence", "Prevent anticipated prejudicial conduct", "Collect a civil debt", "Enforce a decree", 1, "Preventive detention is precautionary rather than punishment after conviction."],

  ["Traffic in human beings and begar are prohibited by:", "Article 23", "Article 24", "Article 25", "Article 29", 0, "Article 23 prohibits trafficking, begar and similar forced labour."],
  ["Article 24 prohibits employment of children below fourteen in:", "Every household activity", "Factories, mines and other hazardous employment", "All family enterprises without exception", "Agriculture in every circumstance", 1, "Article 24 targets factories, mines and hazardous employment."],
  ["Freedom of conscience and free profession, practice and propagation of religion is protected by:", "Article 25", "Article 26", "Article 27", "Article 28", 0, "Article 25 protects individuals subject to public order, morality, health and other provisions."],
  ["The right of a religious denomination to manage its own affairs in matters of religion is in:", "Article 25", "Article 26", "Article 27", "Article 30", 1, "Article 26 protects specified denominational rights."],
  ["Article 27 protects against compulsion to pay taxes specifically appropriated for:", "Education", "Promotion or maintenance of a particular religion", "Roads", "Public health", 1, "It addresses taxation earmarked for promotion or maintenance of a particular religion."],
  ["Article 29(1) protects the right of a section of citizens to conserve its:", "Distinct language, script or culture", "Commercial monopoly", "Political party", "Tax exemption", 0, "Article 29(1) protects cultural and linguistic conservation."],
  ["Minorities' right to establish and administer educational institutions is guaranteed by:", "Article 29(1)", "Article 30(1)", "Article 32", "Article 45", 1, "Article 30(1) applies to religious and linguistic minorities."],
  ["The right to move the Supreme Court for enforcement of fundamental rights is guaranteed by:", "Article 32", "Article 136", "Article 226", "Article 368", 0, "Article 32 itself guarantees the remedial right."],
  ["A writ of habeas corpus primarily tests:", "Legality of detention", "Title to property", "Validity of a contract", "Tax assessment", 0, "Habeas corpus requires the custodian to justify a person's detention."],
  ["A writ of mandamus generally commands a public authority to:", "Perform a public duty", "Convict an accused", "Amend the Constitution", "Enact a Money Bill", 0, "Mandamus enforces performance of a public or statutory duty."],

  ["Directive Principles of State Policy are contained in:", "Part III", "Part IV", "Part IVA", "Part V", 1, "Articles 36 to 51 form Part IV."],
  ["Directive Principles are declared non-justiciable by:", "Article 37", "Article 39", "Article 44", "Article 51", 0, "Article 37 makes them non-enforceable while fundamental in governance."],
  ["Equal justice and free legal aid are addressed by:", "Article 39A", "Article 40", "Article 43A", "Article 50", 0, "Article 39A directs the State to secure equal justice and legal aid."],
  ["Organisation of village panchayats is contemplated by:", "Article 40", "Article 44", "Article 48A", "Article 51A", 0, "Article 40 directs organisation of village panchayats."],
  ["A uniform civil code is referred to in:", "Article 43", "Article 44", "Article 45", "Article 46", 1, "Article 44 is the relevant Directive Principle."],
  ["Separation of the judiciary from the executive is directed by:", "Article 48", "Article 49", "Article 50", "Article 51", 2, "Article 50 directs this separation in the public services of the State."],
  ["Fundamental Duties are listed in:", "Article 50", "Article 51", "Article 51A", "Article 52", 2, "Article 51A contains the Fundamental Duties."],
  ["Fundamental Duties were introduced by the:", "Forty-second Amendment", "Forty-fourth Amendment", "Fifty-second Amendment", "Eighty-sixth Amendment only", 0, "The Forty-second Amendment inserted Part IVA and Article 51A."],
  ["The duty to protect and improve the natural environment appears in:", "Article 48 only", "Article 51A(g)", "Article 32", "Article 19(1)(g)", 1, "Article 51A(g) states this citizen duty."],
  ["The duty to develop scientific temper, humanism and the spirit of inquiry is in:", "Article 51A(h)", "Article 51A(a)", "Article 21A", "Article 39A", 0, "Article 51A(h) contains this duty."],

  ["The President of India is elected by:", "Direct popular vote", "An electoral college specified by the Constitution", "Lok Sabha alone", "Parliament in joint sitting alone", 1, "Article 54 specifies the elected MPs and elected MLAs forming the electoral college."],
  ["The Council of Ministers aids and advises the President under:", "Article 74", "Article 75 only", "Article 123", "Article 148", 0, "Article 74 establishes the Council headed by the Prime Minister to aid and advise."],
  ["The Council of Ministers is collectively responsible to the:", "President", "Rajya Sabha", "House of the People", "Supreme Court", 2, "Article 75(3) makes it collectively responsible to the Lok Sabha."],
  ["A Money Bill can be introduced only in the:", "Rajya Sabha", "Lok Sabha", "Either House", "State Legislative Council", 1, "Article 109 requires introduction in the House of the People."],
  ["The power of judicial review is exercised to test government action against:", "The Constitution and applicable law", "Party manifestos", "Newspaper opinion", "Foreign law alone", 0, "Judicial review preserves constitutional supremacy and legality."],
  ["High Courts issue writs under:", "Article 32", "Article 136", "Article 226", "Article 262", 2, "Article 226 authorises writs for fundamental rights and other purposes."],
  ["Distribution of legislative subjects between Parliament and State Legislatures is principally found in:", "The Fifth Schedule", "The Seventh Schedule", "The Ninth Schedule", "The Tenth Schedule", 1, "The Seventh Schedule contains Union, State and Concurrent Lists."],
  ["A Proclamation of national emergency is governed by:", "Article 352", "Article 356", "Article 360", "Article 368", 0, "Article 352 concerns emergency based on war, external aggression or armed rebellion."],
  ["Failure of constitutional machinery in a State is addressed by:", "Article 352", "Article 356", "Article 360", "Article 365 only", 1, "Article 356 permits a proclamation where State government cannot be carried on constitutionally."],
  ["The constitutional amendment procedure is principally contained in:", "Article 13", "Article 32", "Article 368", "Article 395", 2, "Article 368 regulates Parliament's constituent power and procedure."],
];

const optionIds = ["a", "b", "c", "d"];
const makeQuestion = (entry, index, prefix) => {
  const sourceOptions = entry.slice(1, 5);
  const shift = (index + prefix.length) % 4;
  const correctIndex = (entry[5] - shift + 4) % 4;
  return {
    id: `${prefix}-Q${String(index + 1).padStart(3, "0")}`,
    question: entry[0],
    options: optionIds.map((id, optionIndex) => ({ id, text: sourceOptions[(optionIndex + shift) % 4] })),
    correctOptionIds: [optionIds[correctIndex]],
    explanation: entry[6],
  };
};

const makeMockTest = (testNumber) => {
  const questions = rawQuestions
    .slice((testNumber - 1) * 20, testNumber * 20)
    .map((question, index) => makeQuestion(question, index, `ICL-M${testNumber}`));
  return {
    id: `${COURSE_SLUG}-mock-${testNumber}`,
    courseId: COURSE_SLUG,
    title: `Indian Constitutional Law – I – Mock Test ${testNumber}`,
    description: "Practice assessment covering the foundations, rights, duties and institutions of Indian constitutional law.",
    testNumber,
    totalQuestions: 20,
    marksPerQuestion: 2,
    maximumMarks: 40,
    passPercentage: 50,
    durationMinutes: 30,
    questions,
  };
};

export const constitutionalLawIMockTests = { 1: makeMockTest(1), 2: makeMockTest(2), 3: makeMockTest(3) };

const finalIndexes = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58];
export const constitutionalLawIFinalExam = {
  id: `${COURSE_SLUG}-final-exam`,
  courseId: COURSE_SLUG,
  title: "Indian Constitutional Law – I – Final Examination",
  description: "Final certification examination covering the complete Indian Constitutional Law – I syllabus.",
  examType: "final",
  totalQuestions: 30,
  marksPerQuestion: 2,
  maximumMarks: 60,
  passPercentage: 80,
  durationMinutes: 45,
  maximumAttempts: 1,
  showResultImmediately: true,
  showCorrectAnswersAfterSubmission: false,
  questions: finalIndexes.map((questionIndex, index) => makeQuestion(rawQuestions[questionIndex], index, "ICL-FINAL")),
};

export { COURSE_SLUG as CONSTITUTIONAL_LAW_I_COURSE_SLUG };
