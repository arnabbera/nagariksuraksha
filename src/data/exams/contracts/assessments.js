const COURSE_SLUG = "general-principles-of-contract-and-specific-relief";

const rawQuestions = [
  ["An agreement enforceable by law is called:", "A contract", "A proposal", "A promise without consideration", "A wager", 0, "Section 2(h) of the Indian Contract Act defines a contract as an agreement enforceable by law."],
  ["Every promise and every set of promises forming consideration for each other is:", "An agreement", "A decree", "An injunction", "A tort", 0, "Section 2(e) defines an agreement in these terms."],
  ["A proposal becomes a promise when it is:", "Accepted", "Written", "Registered", "Advertised", 0, "Under Section 2(b), an accepted proposal becomes a promise."],
  ["Communication of a proposal is complete when it:", "Comes to the knowledge of the person to whom it is made", "Is drafted", "Is posted in every case", "Is notarised", 0, "Section 4 makes communication complete when the proposal comes to the offeree's knowledge."],
  ["An acceptance must ordinarily be:", "Absolute and unqualified", "Conditional and uncertain", "Silent", "Made by a stranger", 0, "Section 7 requires acceptance to be absolute and unqualified."],
  ["A display of goods with prices is ordinarily treated as:", "An invitation to offer", "A concluded contract", "A revocation", "A guarantee", 0, "A display generally invites customers to make offers; it is not itself the offer."],
  ["A proposal may generally be revoked:", "Before acceptance is complete against the proposer", "After a decree only", "Never", "Only with court permission", 0, "Section 5 permits revocation before acceptance becomes complete against the proposer."],
  ["Consideration under Indian law may move from:", "The promisee or any other person", "Only the promisee", "Only a legal representative", "Only the promisor", 0, "Section 2(d) permits consideration to move from the promisee or any other person."],
  ["The general rule concerning an agreement without consideration is that it is:", "Void, subject to statutory exceptions", "Always valid", "Criminal", "Automatically registered", 0, "Section 25 states the general rule and its exceptions."],
  ["Which is a recognized exception to the rule that consideration is necessary?", "A written and registered promise based on natural love and affection between near relations", "Every oral gift promise", "Every wager", "A promise by a minor", 0, "Section 25 recognizes the specified written and registered promise between near relations."],
  ["The doctrine of privity of contract generally means that:", "A stranger to the contract cannot sue on it", "Only written contracts are valid", "Consideration must be adequate", "All contracts require registration", 0, "Privity generally limits contractual enforcement to parties, subject to recognized exceptions."],
  ["Consideration or object is unlawful when it is:", "Forbidden by law", "Inadequate", "Past", "Provided by another person", 0, "Section 23 includes an object or consideration forbidden by law among unlawful cases."],
  ["A person is competent to contract if that person is of majority age, of sound mind and:", "Not disqualified from contracting by law", "Employed", "A property owner", "Married", 0, "Section 11 states these requirements."],
  ["A minor's agreement is generally:", "Void from the beginning", "Voidable only", "Always enforceable", "Valid after registration", 0, "The settled principle is that a minor's agreement is void ab initio."],
  ["Necessaries supplied to a person incapable of contracting may be reimbursed from:", "That person's property", "The supplier's insurer only", "Public funds", "No source in any case", 0, "Section 68 permits reimbursement from the incapable person's property for necessaries."],
  ["A person is of sound mind for contracting when capable of understanding the contract and:", "Forming a rational judgment about its effect on personal interests", "Reading English", "Owning property", "Obtaining a witness", 0, "Section 12 uses understanding and rational judgment as the test."],
  ["Consent exists when parties agree upon:", "The same thing in the same sense", "Different things", "A future dispute", "Only the price", 0, "Section 13 embodies consensus ad idem."],
  ["Consent is free when it is not caused by coercion, undue influence, fraud, misrepresentation or:", "Mistake, subject to the Act", "Consideration", "Performance", "Writing", 0, "Section 14 lists the factors that may prevent consent from being free."],
  ["Coercion under the Contract Act includes committing or threatening to commit:", "An act forbidden by the Indian Penal Code as described by Section 15", "Any lawful act", "A civil appeal", "A valid tender", 0, "Section 15 defines coercion through the prohibited act or unlawful detention of property."],
  ["Undue influence arises where one party can dominate the will of another and uses that position to:", "Obtain an unfair advantage", "Make a fair bargain", "Communicate acceptance", "Perform a duty", 0, "Section 16 focuses on domination of will and unfair advantage."],
  ["A suggestion of an untrue fact made without belief in its truth may constitute:", "Fraud", "Performance", "Novation", "Remission", 0, "Section 17 includes a knowingly or recklessly false suggestion within fraud."],
  ["A positive assertion not warranted by the maker's information, though believed true, may constitute:", "Misrepresentation", "Coercion", "Novation", "Wagering", 0, "Section 18 includes such an assertion within misrepresentation."],
  ["A bilateral mistake about a matter of fact essential to the agreement generally makes it:", "Void", "Criminal", "Automatically enforceable", "A guarantee", 0, "Section 20 treats an agreement under an essential bilateral mistake of fact as void."],
  ["A mistake as to Indian law generally:", "Does not make the contract voidable", "Always makes it void", "Is fraud", "Creates a contingent contract", 0, "Section 21 distinguishes mistake of Indian law from mistake of foreign law."],
  ["An agreement whose object defeats the provisions of law is:", "Unlawful", "Valid if written", "A contingent contract", "A bailment", 0, "Section 23 treats an object that defeats the provisions of law as unlawful."],
  ["An agreement in restraint of marriage of an adult is generally:", "Void", "Valid", "A guarantee", "A quasi-contract", 0, "Section 26 generally voids agreements in restraint of marriage other than the statutory exception."],
  ["An agreement in restraint of trade is generally governed by:", "Section 27", "Section 10", "Section 68", "Section 73", 0, "Section 27 contains the general rule and its exception concerning restraint of trade."],
  ["An agreement that absolutely restricts enforcement of contractual rights through usual legal proceedings is generally:", "Void to that extent", "Always valid", "A criminal offence", "Specific performance", 0, "Section 28 addresses agreements in restraint of legal proceedings."],
  ["An agreement whose meaning is not certain or capable of being made certain is:", "Void", "Valid", "A completed gift", "A decree", 0, "Section 29 voids uncertain agreements."],
  ["A wagering agreement is generally:", "Void", "Specifically enforceable", "A criminal conviction", "A trust", 0, "Section 30 provides that agreements by way of wager are void."],
  ["A contingent contract depends on:", "An uncertain collateral event", "A certain past event only", "Registration alone", "A court decree", 0, "Section 31 defines a contingent contract by reference to an uncertain collateral event."],
  ["Parties to a contract must ordinarily perform or offer to perform their promises unless performance is:", "Dispensed with or excused under law", "Inconvenient", "Unprofitable", "Not witnessed", 0, "Section 37 states the basic obligation and its lawful exceptions."],
  ["Substitution of a new contract for an existing contract is known as:", "Novation", "Coercion", "Rescission by breach only", "Wagering", 0, "Section 62 recognizes novation, rescission and alteration."],
  ["A promisee may dispense with or remit performance under:", "Section 63", "Section 11", "Section 23", "Section 72", 0, "Section 63 permits remission, extension and acceptance of other satisfaction."],
  ["An agreement to do an act impossible in itself is:", "Void", "Voidable at the promisor's option", "Always enforceable", "A guarantee", 0, "Section 56 states that an agreement to do an impossible act is void."],
  ["A contract may become void when an act becomes impossible or unlawful after formation due to an event the promisor could not prevent. This reflects:", "Supervening impossibility", "Privity", "Past consideration", "Estoppel only", 0, "Section 56 addresses supervening impossibility or unlawfulness."],
  ["Compensation for loss caused by breach is principally governed by:", "Section 73", "Section 11", "Section 25", "Section 68", 0, "Section 73 governs compensation for loss or damage caused by breach."],
  ["Remote and indirect loss is ordinarily:", "Not recoverable as contractual damages", "Always recoverable", "Punished criminally", "Treated as consideration", 0, "Section 73 excludes compensation for remote and indirect loss."],
  ["Where a sum is named for breach, reasonable compensation not exceeding that sum is addressed by:", "Section 74", "Section 20", "Section 30", "Section 62", 0, "Section 74 deals with compensation where a penalty or stipulated sum is provided."],
  ["A party rightfully rescinding a contract may claim compensation under:", "Section 75", "Section 15", "Section 27", "Section 56", 0, "Section 75 recognizes compensation for a person who rightfully rescinds."],
  ["A person who lawfully supplies necessaries to someone incapable of contracting relies on an obligation resembling contract commonly called:", "Quasi-contract", "Wager", "Novation", "Specific performance", 0, "Sections 68–72 contain obligations resembling those created by contract."],
  ["Money paid by mistake or under coercion is generally recoverable under:", "Section 72", "Section 2", "Section 27", "Section 56", 0, "Section 72 requires repayment or return of money or things delivered by mistake or under coercion."],
  ["Specific performance is primarily:", "A court order requiring performance of a contractual obligation", "An award of criminal punishment", "A declaration of bankruptcy", "A tender invitation", 0, "Specific performance enforces the promised obligation rather than merely awarding damages."],
  ["Under the Specific Relief Act, substituted performance is principally addressed by:", "Section 20", "Section 9", "Section 36", "Section 42", 0, "Section 20 provides the statutory framework for substituted performance."],
  ["A plaintiff who has obtained substituted performance under Section 20 is generally:", "Not entitled to claim specific performance against the party in breach", "Always entitled to both remedies", "Disqualified from damages", "Required to rescind every contract", 0, "The substituted-performance framework bars a later claim for specific performance while preserving applicable compensation."],
  ["Personal bars to relief in specific performance are addressed by:", "Section 16 of the Specific Relief Act", "Section 36 only", "Section 42 only", "Section 72 of the Contract Act", 0, "Section 16 specifies personal bars to relief."],
  ["Preventive relief under the Specific Relief Act is granted by:", "Injunction", "Damages only", "Arbitration only", "Novation", 0, "Section 36 states that preventive relief is granted at the court's discretion by injunction."],
  ["A perpetual injunction may be granted only by:", "A decree made at the hearing and upon the merits", "An oral promise", "A police notice", "A tender", 0, "Section 37 distinguishes perpetual injunctions from temporary injunctions."],
  ["A mandatory injunction may compel performance of acts necessary to prevent breach of an obligation under:", "Section 39", "Section 30", "Section 25", "Section 11", 0, "Section 39 governs mandatory injunctions."],
  ["An injunction to perform a negative agreement may be granted in an appropriate case under:", "Section 42", "Section 9", "Section 20", "Section 73 of the Contract Act", 0, "Section 42 addresses injunctions connected with negative agreements."],
];

const optionIds = ["a", "b", "c", "d"];

const makeQuestion = (entry, index, prefix) => ({
  id: `${prefix}-Q${String(index + 1).padStart(3, "0")}`,
  question: entry[0],
  options: entry.slice(1, 5).map((text, optionIndex) => ({
    id: optionIds[optionIndex],
    text,
  })),
  correctOptionIds: [optionIds[entry[5]]],
  explanation: entry[6],
});

const rotatedQuestions = (offset, prefix) =>
  Array.from({ length: 50 }, (_, index) =>
    makeQuestion(rawQuestions[(index + offset) % rawQuestions.length], index, prefix),
  );

const makeMockTest = (testNumber, offset) => ({
  id: `contract-specific-relief-mock-${testNumber}`,
  courseId: COURSE_SLUG,
  title: `General Principles of Contract and Specific Relief – Mock Test ${testNumber}`,
  description:
    "Practice assessment covering the Indian Contract Act, 1872 and the Specific Relief Act, 1963.",
  testNumber,
  totalQuestions: 50,
  marksPerQuestion: 2,
  maximumMarks: 100,
  passPercentage: 50,
  durationMinutes: 60,
  questions: rotatedQuestions(offset, `CONTRACT-M${testNumber}`),
});

export const contractMockTests = {
  1: makeMockTest(1, 0),
  2: makeMockTest(2, 13),
  3: makeMockTest(3, 27),
};

export const contractFinalExam = {
  id: "contract-specific-relief-final-exam",
  courseId: COURSE_SLUG,
  title: "General Principles of Contract and Specific Relief – Final Examination",
  description:
    "Final certification assessment covering all eight units of contract law and specific relief.",
  examType: "final",
  totalQuestions: 50,
  marksPerQuestion: 2,
  maximumMarks: 100,
  passPercentage: 80,
  durationMinutes: 75,
  maximumAttempts: 1,
  showResultImmediately: true,
  showCorrectAnswersAfterSubmission: false,
  questions: rotatedQuestions(7, "CONTRACT-FINAL"),
};

export { COURSE_SLUG as CONTRACT_COURSE_SLUG };

