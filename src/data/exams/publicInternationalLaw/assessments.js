const COURSE_SLUG = "public-international-law";

const rawQuestions = [
  // Unit 1 — nature, origin and basis
  ["Public international law primarily regulates:", "Relations governed by international legal rules among States and other recognised subjects", "Only private contracts", "Only domestic criminal trials", "Municipal taxation alone", 0, "Modern public international law principally governs States while also recognising other subjects in particular fields."],
  ["Private international law is commonly concerned with:", "Collective security", "Conflict of laws in private matters containing a foreign element", "State responsibility alone", "Diplomatic immunity only", 1, "Private international law determines jurisdiction, applicable law and recognition in cross-border private disputes."],
  ["The Austinian criticism treated international law largely as:", "Constitutional law", "Natural justice", "Positive international morality", "Criminal procedure", 2, "Austin associated law with commands of a determinate sovereign and therefore classified international rules differently."],
  ["Pacta sunt servanda means:", "Agreements must be performed in good faith", "Custom always defeats treaties", "Force settles legal disputes", "Only oral promises bind States", 0, "Pacta sunt servanda is the foundational rule that treaties in force bind their parties and must be performed in good faith."],
  ["International comity differs from customary law because comity lacks:", "Repeated conduct", "Any international contact", "Opinio juris or a sense of legal obligation", "Diplomatic practice", 2, "Comity is courtesy or convenience rather than conduct accepted as legally required."],
  ["The decentralised character of international law means that it:", "Has no legal rules", "Lacks a universal legislature and executive comparable to a State", "Applies only during war", "Cannot impose responsibility", 1, "International law is a legal order without a single world government exercising general central authority."],
  ["Which development most directly shaped the post-1945 international legal order?", "The UN Charter", "The Magna Carta alone", "A private contract", "A municipal circular", 0, "The UN Charter established the central modern framework for peace, security and international cooperation."],
  ["A peremptory norm of international law is commonly called:", "Lex fori", "Jus cogens", "Comity", "Res judicata", 1, "Jus cogens is a norm accepted and recognised as permitting no derogation."],

  // Unit 2 — sources
  ["Article 38(1) of the ICJ Statute lists treaties, custom and:", "General principles of law", "Newspaper editorials", "Political promises only", "Domestic pleadings", 0, "General principles are a primary category used by the Court under Article 38(1)(c)."],
  ["The two elements normally required for customary international law are:", "Ratification and registration", "General practice and acceptance as law", "Writing and signature", "Judgment and enforcement", 1, "Custom combines sufficiently general State practice with opinio juris."],
  ["Opinio juris refers to a belief that conduct is followed because it is:", "Profitable", "Traditional only", "Legally required or permitted", "Secret", 2, "The subjective legal element distinguishes custom from habit, courtesy or convenience."],
  ["A persistent objector may avoid an emerging customary rule when the State:", "Objects clearly and consistently while the rule is forming, subject to limits", "Objects only after accepting it", "Never communicates its position", "Objects to a peremptory norm", 0, "The doctrine requires timely and maintained objection and does not permit avoidance of jus cogens."],
  ["Judicial decisions under Article 38 are described as:", "Treaties", "Subsidiary means for determining rules of law", "Binding legislation for all States", "Diplomatic immunity", 1, "Article 38(1)(d) treats decisions and teachings as subsidiary means, subject to Article 59."],
  ["A general principle of law can help an international tribunal to:", "Fill gaps using principles recognised across legal systems", "Create unlimited jurisdiction", "Ignore treaties", "Bind non-parties to every judgment", 0, "General principles help prevent non liquet and support coherent adjudication."],
  ["A United Nations General Assembly resolution is:", "Always a binding treaty", "Never legally relevant", "Generally recommendatory but potentially evidence of legal views or custom", "Automatically a Security Council decision", 2, "Its legal significance depends on wording, support, context, practice and opinio juris."],
  ["Under Article 59 of the ICJ Statute, a judgment binds:", "Every State", "Only the parties and only in respect of that particular case", "Only the General Assembly", "No one", 1, "ICJ judgments lack a universal stare decisis effect but remain authoritative legal materials."],

  // Unit 3 — subjects and municipal law
  ["The primary and original subjects of international law are:", "States", "Private clubs", "Municipal courts", "Newspapers", 0, "States possess the fullest general international legal personality."],
  ["International organisations possess powers determined principally by:", "Their constituent instruments and functions", "Territorial sovereignty identical to States", "Private preference", "Domestic citizenship", 0, "Their personality and competence are functional and derived rather than identical to State sovereignty."],
  ["In Reparation for Injuries, the ICJ recognised that the UN possesses:", "No legal capacity", "International legal personality", "Statehood", "Territorial title", 1, "The organisation has personality and capacities necessary to discharge its Charter functions."],
  ["The monist approach generally views international and municipal law as:", "Parts of a unified legal order", "Completely unrelated facts", "Identical political speeches", "Rules applying only to corporations", 0, "Monism conceptualises both bodies of law within one legal system, subject to variants concerning priority."],
  ["The dualist approach emphasises that international and municipal law:", "Have distinct sources, subjects and fields of operation", "Are always automatically identical", "Cannot ever influence each other", "Are both private law", 0, "Dualism treats the systems as separate and typically requires transformation or incorporation."],
  ["In India, a treaty that changes existing domestic law ordinarily requires:", "Implementing legislation", "A newspaper notice only", "No legal action", "A private agreement", 0, "Executive treaty-making must be distinguished from domestic implementation affecting law or rights."],
  ["Article 253 of the Indian Constitution gives Parliament power to legislate for:", "Implementing treaties, agreements and international decisions", "Municipal elections only", "Private arbitration alone", "State budgets only", 0, "Article 253 supports parliamentary implementation notwithstanding the ordinary legislative distribution."],
  ["Individuals are direct subjects of international law particularly in:", "Human rights and international criminal law", "No field whatsoever", "Only domestic property registration", "Parliamentary procedure", 0, "Modern international law can confer rights and impose responsibility directly upon individuals."],

  // Unit 4 — recognition and jurisdiction
  ["The declaratory theory of recognition holds that recognition:", "Creates every element of Statehood", "Acknowledges an existing State satisfying objective criteria", "Is irrelevant to relations", "Abolishes sovereignty", 1, "Under the declaratory view, Statehood does not depend solely on recognition by others."],
  ["The constitutive theory associates full international personality with:", "Recognition by existing States", "Population alone", "A commercial licence", "A court fee", 0, "The theory gives recognition a constitutive role, though modern practice also stresses objective Statehood criteria."],
  ["De facto recognition is commonly understood as:", "Provisional or limited acknowledgment of effective control", "Permanent treaty ratification", "Loss of territory", "A criminal sentence", 0, "It is usually contrasted with fuller de jure recognition."],
  ["Territorial jurisdiction is principally based on:", "Conduct or effects connected to State territory", "Diplomatic courtesy only", "Nationality of a judge", "UN membership alone", 0, "Territoriality is the primary jurisdictional basis."],
  ["The active nationality principle permits jurisdiction based on:", "The offender's nationality", "The victim's nationality only", "Location of the UN", "A treaty title", 0, "Active personality concerns offences committed by a State's nationals abroad."],
  ["The protective principle addresses foreign conduct threatening:", "Essential security or governmental interests of the State", "Only private taste", "Any foreign contract", "Historical research", 0, "It permits limited jurisdiction over external acts directed against vital State interests."],
  ["Universal jurisdiction is most closely associated with:", "Certain exceptionally grave international crimes", "Every parking offence", "All civil debts", "Domestic elections", 0, "International law permits or requires jurisdiction over specific grave offences under applicable rules."],
  ["State immunity is primarily an immunity from:", "The jurisdiction and enforcement processes of foreign national courts", "International responsibility", "Treaty obligations", "UN membership", 0, "The doctrine protects a State from another State's domestic courts subject to restrictive-immunity exceptions."],

  // Unit 5 — nationality, extradition and asylum
  ["Nationality is best described internationally as:", "The legal bond between a person and a State", "Physical residence only", "Ownership of land", "A temporary visa", 0, "Nationality connects an individual to a State for international and domestic legal purposes."],
  ["A stateless person is one who:", "Has two nationalities", "Is not considered a national by any State under the operation of its law", "Travels abroad", "Seeks a visa", 1, "This is the central legal definition used by the 1954 Statelessness Convention."],
  ["Diplomatic protection generally requires nationality of the claim and:", "Exhaustion of effective local remedies", "A Security Council veto", "Territorial acquisition", "An advisory opinion", 0, "Local remedies ordinarily must be used before a State espouses its national's international claim."],
  ["Double criminality in extradition asks whether:", "The underlying conduct is criminal under both relevant systems", "The offence has the same name", "Two trials occurred", "Two States are UN members", 0, "The focus is substantial correspondence of criminal conduct, not identical labels."],
  ["The rule of speciality ordinarily limits prosecution after extradition to:", "The offence for which surrender was granted, subject to recognised exceptions", "Any future allegation", "Civil disputes only", "No offence", 0, "Speciality protects the terms on which the requested State surrendered the person."],
  ["Territorial asylum is granted by a State:", "Within territory under its jurisdiction", "Only inside another State's embassy", "Only at sea", "Through arbitration", 0, "Territorial asylum follows from the territorial State's authority subject to international obligations."],
  ["Non-refoulement principally prohibits transferring a protected person to:", "A place of qualifying persecution or prohibited serious harm", "Any country with different laws", "A place without an embassy", "The person's country in every circumstance", 0, "The exact prohibition and exceptions depend on the applicable refugee and human-rights instruments."],
  ["India's principal general extradition statute is the:", "Extradition Act, 1962", "Indian Contract Act, 1872", "Companies Act, 2013", "Specific Relief Act, 1963", 0, "The Extradition Act, 1962 supplies India's statutory framework."],

  // Unit 6 — treaties
  ["Under the Vienna Convention, a treaty is an international agreement governed by:", "International law", "Etiquette alone", "Private club rules", "Domestic custom only", 0, "The governing legal order and intention are central, whatever the instrument's title."],
  ["Consent to be bound may be expressed by ratification, accession or:", "Signature where the applicable conditions make it binding", "Silence in every case", "Newspaper publication only", "A private letter unrelated to the treaty", 0, "Article 11 recognises several agreed means of expressing consent."],
  ["A reservation purports to:", "Exclude or modify the legal effect of specified treaty provisions for the reserving State", "Terminate every treaty", "Create a new State", "Elect ICJ judges", 0, "Substance rather than the label determines whether a statement is a reservation."],
  ["A reservation is impermissible where it is incompatible with the treaty's:", "Object and purpose", "Title length", "Depositary's location", "Number of languages", 0, "Article 19 applies the object-and-purpose test unless the treaty's specific reservation rules decide the matter."],
  ["The general rule of treaty interpretation in Article 31 begins with:", "Good-faith interpretation of ordinary meaning in context and light of object and purpose", "Preparatory work alone", "The later party's private intention", "Domestic law only", 0, "Text, context, object and purpose form one integrated interpretative operation."],
  ["Pacta tertiis means that a treaty generally creates no obligations or rights for a third State without:", "Its consent under the applicable rules", "A press release", "An election", "A trade dispute", 0, "Treaties ordinarily do not bind third States without consent."],
  ["A treaty conflicting at conclusion with an existing peremptory norm is:", "Void", "Valid for ten years", "Merely voidable by one party", "A political declaration", 0, "Article 53 treats a treaty conflicting with jus cogens as void."],
  ["A fundamental change of circumstances as a ground for termination is:", "Narrow and subject to strict conditions and exceptions", "Automatically available whenever performance is difficult", "A reservation", "An unlimited unilateral right", 0, "Article 62 protects treaty stability by narrowly limiting rebus sic stantibus."],

  // Unit 7 — peaceful settlement
  ["Article 2(3) of the UN Charter requires Members to settle disputes by:", "Peaceful means", "Force", "Economic pressure in every case", "Domestic legislation only", 0, "Settlement must not endanger international peace, security and justice."],
  ["Good offices differ from mediation because the third party providing good offices ordinarily:", "Facilitates contact without actively proposing substantive terms", "Renders a binding award", "Acts as a judge", "Uses armed force", 0, "Mediation involves more active participation in the substance of settlement."],
  ["An international inquiry primarily seeks to:", "Clarify disputed facts", "Issue a binding criminal sentence", "Amend the UN Charter", "Admit a State to the UN", 0, "Fact-finding can narrow disagreement without itself deciding legal responsibility."],
  ["Conciliation ordinarily concludes with:", "A non-binding report proposing settlement terms", "A binding ICJ judgment", "A Security Council veto", "Automatic sanctions", 0, "Conciliation formally examines the dispute but normally leaves acceptance to the parties."],
  ["International arbitration produces:", "A binding award from a tribunal constituted on the basis of consent", "A non-legal press statement", "A General Assembly election", "Only fact-finding", 0, "Arbitration combines party consent and procedural flexibility with a binding legal decision."],
  ["The Permanent Court of Arbitration is:", "An institution administering tribunals rather than a permanently sitting court", "A UN principal organ", "A national supreme court", "The same body as the ICJ", 0, "The PCA provides registry and administrative support for specifically constituted tribunals."],
  ["ICJ contentious jurisdiction is founded on:", "State consent", "Automatic authority over every UN Member dispute", "A private party's application", "Media attention", 0, "Consent may be expressed by special agreement, treaty clause, optional-clause declaration or forum prorogatum."],
  ["An ICJ judgment is final and binding:", "Between the parties and for the particular case", "On all States as legislation", "Only if the Assembly approves", "Only for one year", 0, "Articles 59 and 60 define the judgment's relative binding effect and finality."],

  // Unit 8 — United Nations
  ["The United Nations Charter entered into force on:", "24 October 1945", "26 January 1950", "1 January 1942", "10 December 1948", 0, "24 October is observed as United Nations Day."],
  ["The UN's purposes are stated in Charter:", "Article 1", "Article 19", "Article 51", "Article 108", 0, "Article 1 contains the four purposes of the organisation."],
  ["The organisation is based on the sovereign equality of Members under:", "Article 2(1)", "Article 4", "Article 25", "Article 99", 0, "Sovereign equality is the first principle stated in Article 2."],
  ["Admission of a new UN Member requires a General Assembly decision upon recommendation of the:", "Security Council", "Secretariat", "ICJ alone", "Trusteeship Council", 0, "Article 4 establishes this shared institutional process."],
  ["How many principal organs are established by Article 7?", "Six", "Four", "Five", "Eight", 0, "They are the General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ and Secretariat."],
  ["The General Assembly gives each Member State:", "One vote", "Votes based on population", "Five votes", "No vote", 0, "A Member may have several representatives but has one vote."],
  ["The Security Council consists of:", "15 members", "10 members", "20 members", "193 members", 0, "It has five permanent and ten elected non-permanent members."],
  ["A permanent Security Council member's abstention is generally treated as:", "Not constituting a veto", "A veto", "Expulsion", "Withdrawal", 0, "Established practice permits substantive decisions despite a permanent-member abstention if nine affirmative votes exist."],
  ["Chapter VII permits the Security Council to determine:", "Threats to peace, breaches of peace and acts of aggression", "Private contractual damages", "National citizenship", "Academic accreditation", 0, "Article 39 begins the Chapter VII collective-security framework."],
  ["ECOSOC has:", "54 elected members", "15 members", "Five permanent members only", "All judges of the ICJ", 0, "General Assembly election produces ECOSOC's 54-member composition."],
  ["The Trusteeship Council suspended regular operations after:", "Palau became independent in 1994", "The UN was founded", "The League was dissolved", "The ICJ issued its first judgment", 0, "The last trust territory achieved independence in 1994."],
  ["The ICJ consists of:", "15 independent judges", "Nine diplomats", "Five permanent representatives", "54 members", 0, "Judges are elected independently by the Assembly and Council for nine-year terms."],
  ["Under Article 99, the Secretary-General may bring to the Security Council's attention:", "A matter that may threaten international peace and security", "Only budget arrears", "Every private lawsuit", "National elections automatically", 0, "Article 99 supplies an important preventive and political function."],
  ["Article 103 gives priority to Charter obligations over conflicting obligations under:", "Another international agreement", "Every peremptory norm", "A later ICJ judgment", "Domestic morality", 0, "The supremacy clause addresses conflicts between Charter duties and other treaty obligations."],
  ["A formal Charter amendment under Article 108 ultimately requires ratification by two-thirds of Members including:", "All permanent Security Council members", "All ECOSOC members only", "The Secretary-General", "Every specialised agency", 0, "The permanent members' ratification is expressly required."],
  ["United Nations peacekeeping is:", "A practice-developed tool not expressly named in the Charter", "The same as every Chapter VII enforcement action", "A specialised agency", "An ICJ judgment", 0, "Peacekeeping evolved institutionally with principles such as consent, impartiality and limited use of force."],
];

const optionIds = ["a", "b", "c", "d"];

const makeQuestion = (entry, index, prefix) => {
  const sourceOptions = entry.slice(1, 5);
  const shift = (index + prefix.length) % optionIds.length;
  const displayedCorrectIndex =
    (entry[5] - shift + optionIds.length) % optionIds.length;

  return {
    id: `${prefix}-Q${String(index + 1).padStart(3, "0")}`,
    question: entry[0],
    options: optionIds.map((id, optionIndex) => ({
      id,
      text: sourceOptions[(optionIndex + shift) % optionIds.length],
    })),
    correctOptionIds: [optionIds[displayedCorrectIndex]],
    explanation: entry[6],
  };
};

const questionOrder = Array.from(
  { length: rawQuestions.length },
  (_, index) => (index * 11) % rawQuestions.length,
);

const makeMockTest = (testNumber) => {
  const startIndex = (testNumber - 1) * 20;
  const questions = questionOrder
    .slice(startIndex, startIndex + 20)
    .map((questionIndex, index) =>
      makeQuestion(rawQuestions[questionIndex], index, `PIL-M${testNumber}`),
    );

  return {
    id: `public-international-law-mock-${testNumber}`,
    courseId: COURSE_SLUG,
    title: `Public International Law – Mock Test ${testNumber}`,
    description:
      "Course-wise practice assessment covering the eight units of Public International Law.",
    testNumber,
    totalQuestions: 20,
    marksPerQuestion: 2,
    maximumMarks: 40,
    passPercentage: 50,
    durationMinutes: 30,
    questions,
  };
};

export const publicInternationalLawMockTests = {
  1: makeMockTest(1),
  2: makeMockTest(2),
  3: makeMockTest(3),
};

const finalQuestionIndexes = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
  20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
  40, 42, 44, 46, 48, 51, 54, 56, 58, 60,
];

const finalQuestions = finalQuestionIndexes.map((questionIndex, index) =>
  makeQuestion(rawQuestions[questionIndex], index, "PIL-FINAL"),
);

export const publicInternationalLawFinalExam = {
  id: "public-international-law-final-exam",
  courseId: COURSE_SLUG,
  title: "Public International Law – Final Examination",
  description:
    "Final certification examination covering all eight units of Public International Law.",
  examType: "final",
  totalQuestions: 30,
  marksPerQuestion: 2,
  maximumMarks: 60,
  passPercentage: 80,
  durationMinutes: 45,
  maximumAttempts: 1,
  showResultImmediately: true,
  showCorrectAnswersAfterSubmission: false,
  questions: finalQuestions,
};

export { COURSE_SLUG as PUBLIC_INTERNATIONAL_LAW_COURSE_SLUG };
