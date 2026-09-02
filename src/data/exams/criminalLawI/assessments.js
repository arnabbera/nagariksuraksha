const COURSE_SLUG = "criminal-law-i-transitioning-from-ipc-to-bns";

const rawQuestions = [
  // Unit 1 — foundational principles and general exceptions
  ["The maxim actus non facit reum nisi mens sit rea expresses that:", "Motive is always irrelevant", "An act ordinarily does not make a person guilty without a legally blameworthy mind", "Every harmful result is an offence", "Only intention can constitute mens rea", 1, "The maxim connects the external act with the mental element required by the offence."],
  ["Which statement best distinguishes motive from intention?", "Motive explains why a person acts; intention concerns the result meant to be caused", "They are legally identical", "Motive is always an ingredient", "Intention concerns only punishment", 0, "Motive is the reason for acting, whereas intention concerns the result sought."],
  ["Under Article 20(1), a person cannot be:", "Tried under a valid law", "Given bail", "Convicted for an act that was not an offence when done", "Required to attend court", 2, "Article 20(1) prohibits retrospective criminalisation and enhanced retrospective punishment."],
  ["A mistake capable of supporting the statutory exception is generally:", "A mistake of Indian criminal law", "A good-faith mistake of fact within the provision", "A deliberate refusal to know facts", "A mistake about punishment", 1, "The exception concerns a qualifying mistake of fact, not mistake of law."],
  ["The defence of accident requires, among other things:", "An unlawful act", "Absence of proper care", "A lawful act done lawfully with proper care and caution", "Consent in every case", 2, "Accident applies only where all statutory conditions, including proper care and caution, are met."],
  ["The legal test for unsoundness of mind focuses principally on:", "A medical label at any time", "Capacity at the time of the act to know its nature or wrongfulness", "The accused's education", "Whether treatment was voluntary", 1, "The statutory test concerns the accused's cognitive capacity at the relevant time."],
  ["Private defence is primarily:", "Retaliatory", "Preventive and limited by necessity", "Available after danger has ended", "Unlimited where property is involved", 1, "Private defence responds to reasonable apprehension and cannot become revenge."],
  ["The BNS came into force on:", "26 January 2024", "1 July 2024", "15 August 2023", "25 December 2023", 1, "The Bharatiya Nyaya Sanhita came into force on 1 July 2024."],

  // Unit 2 — abetment
  ["The three statutory modes of abetment are:", "Intention, knowledge and negligence", "Instigation, conspiracy with the required act or omission, and intentional aid", "Preparation, attempt and completion", "Theft, extortion and robbery", 1, "Abetment is committed by instigation, qualifying conspiracy, or intentional aid."],
  ["Instigation may occur through:", "Express words only", "Words, conduct, wilful misrepresentation or wilful concealment", "Negligence alone", "Mere private belief", 1, "Instigation is not confined to express commands."],
  ["For abetment by conspiracy, the law requires:", "Agreement alone in every case", "An act or illegal omission in pursuance of the conspiracy and in order to the doing of the thing", "Five conspirators", "Completion of the principal offence", 1, "This distinguishes abetment by conspiracy from the substantive offence of criminal conspiracy."],
  ["Intentional aid may include:", "An accidental act", "A legally insignificant thought", "An act or illegal omission intentionally facilitating the thing", "Mere presence in every case", 2, "Aid must be intentional and connected to facilitation."],
  ["An abettor may be liable even where the principal actor:", "Lacks legal capacity", "Is never identified by name", "Acts under a different personal motive", "Any of the above where statutory requirements are met", 3, "Abetment focuses on the abettor's conduct and mental element, subject to the statutory rules."],
  ["BNS Sections principally governing the definition and cross-border reach of abetment are:", "45–48", "61–62", "100–106", "303–310", 0, "BNS Sections 45–48 contain the central definition and cross-border rules."],
  ["Mere knowledge that another may commit an offence is:", "Always instigation", "Always intentional aid", "Not by itself sufficient for abetment", "Punishable as the completed offence", 2, "The prosecution must prove one of the statutory modes and its mental connection."],
  ["Where the act done differs from the act abetted, liability may extend where it is:", "A wholly independent coincidence", "A probable consequence committed under the statutory connection", "Unknown to everyone", "Only a civil wrong", 1, "The probable-consequence rule applies subject to the conditions in the abetment provisions."],

  // Unit 3 — criminal conspiracy
  ["The gist of criminal conspiracy is:", "Physical presence at the final offence", "Agreement", "Recovery of property", "Public violence", 1, "The meeting of minds around the unlawful object or means is central."],
  ["Where the conspiracy is to commit an offence:", "An overt act is ordinarily unnecessary", "Five persons are required", "The offence must be completed", "A written agreement is essential", 0, "Agreement ordinarily completes conspiracy where its object is an offence."],
  ["For a conspiracy involving a lawful act by illegal means, the general rule requires:", "No conduct beyond thought", "An act besides the agreement in pursuance of it", "A public meeting", "A completed civil suit", 1, "The overt-act requirement applies to the non-offence branch of the definition."],
  ["Mere association with an accused person:", "Conclusively proves conspiracy", "Is irrelevant in every case", "Does not by itself prove agreement", "Creates strict liability", 2, "Association may be evidence in context but cannot substitute for a proved meeting of minds."],
  ["IPC Sections 120A–120B are principally consolidated in:", "BNS Section 45", "BNS Section 61", "BNS Section 100", "BNS Section 190", 1, "BNS Section 61 defines and punishes criminal conspiracy."],
  ["A later entrant to a conspiracy is ordinarily liable:", "For every earlier act automatically", "From intentional entry into the continuing design", "Only after the final offence", "Only if physically present", 1, "The entry time and scope of intentional participation must be proved."],
  ["Withdrawal from conspiracy:", "Erases liability already incurred", "Requires no outward conduct", "Does not erase liability already incurred", "Is impossible in law", 2, "Effective withdrawal may limit later involvement but does not undo the completed conspiracy."],
  ["Criminal conspiracy differs from common intention because conspiracy punishes:", "The antecedent agreement under its conditions", "Only accidental conduct", "A minimum of five persons", "Only property offences", 0, "Common intention is joint liability for a criminal act; conspiracy centres on the agreement."],

  // Unit 4 — offences against the State
  ["Waging war against the Government of India is principally addressed in BNS:", "Section 147", "Section 152", "Section 189", "Section 303", 0, "BNS Section 147 punishes waging, attempting to wage, or abetting war."],
  ["The special conspiracy to wage war under BNS Section 148 requires:", "A completed attack", "No act or illegal omission beyond the conspiracy", "At least five persons", "Recovery of firearms in every case", 1, "The agreement itself is sufficient when the special statutory object is proved."],
  ["Collecting persons, arms or ammunition becomes the State offence when accompanied by:", "Any political opinion", "The prescribed intention to wage or be prepared to wage war", "A licence", "A public speech only", 1, "The objective preparation and specific prohibited intention must coexist."],
  ["BNS Section 152 should be described as:", "An exact renumbering of IPC Section 124A", "A differently framed sovereignty, unity and integrity offence", "A civil defamation provision", "The unlawful assembly definition", 1, "Its language and protected interests differ materially from historical IPC Section 124A."],
  ["BNS Section 152 expressly includes:", "Electronic communication and use of financial means", "Only printed books", "Only physical violence", "Negligence", 0, "The provision identifies several modes, including electronic communication and financial means."],
  ["Lawful criticism seeking alteration of governmental measures:", "Is always an offence", "Is protected by the statutory explanation when it does not excite the prohibited activities", "Requires government approval", "Is punishable as war", 1, "The explanation preserves specified lawful disapprobation."],
  ["IPC Section 124A historically concerned:", "Criminal breach of trust", "Sedition", "Dacoity", "Perjury", 1, "IPC Section 124A was the historical sedition provision."],
  ["For an offence involving alleged speech against the State, the court must consider:", "Only whether the speech was unpopular", "Words, context, intention and the exact statutory activity", "The speaker's profession only", "Public reaction alone", 1, "Ingredient-based and constitutional analysis is required."],

  // Unit 5 — public tranquillity
  ["An unlawful assembly requires at least:", "Two persons", "Three persons", "Five persons", "Ten persons", 2, "The statutory minimum is five persons."],
  ["A lawful assembly may:", "Never become unlawful", "Become unlawful if its common object changes to a prohibited object", "Become a conspiracy automatically", "Be dispersed without law", 1, "The statutory explanation recognises subsequent change in common object."],
  ["Membership of an unlawful assembly requires:", "Mere presence nearby", "Awareness of the relevant facts and intentional joining or continuation", "Ownership of a weapon", "A written agreement", 1, "Knowing and intentional membership must be proved."],
  ["Rioting occurs when:", "Any two persons argue", "Force or violence is used by an unlawful assembly or a member in prosecution of its common object", "A lawful protest is held", "Property is privately disputed", 1, "Rioting builds on an unlawful assembly and use of force or violence."],
  ["Constructive common-object liability is principally in BNS:", "Section 190", "Section 152", "Section 227", "Section 318", 0, "BNS Section 190 carries forward the common-object liability rule."],
  ["Common object differs from criminal conspiracy because common object:", "Always requires a prior agreement", "May develop suddenly and requires the unlawful-assembly framework", "Needs only two persons", "Is a civil doctrine", 1, "Common object does not necessarily depend on prior agreement and requires the statutory assembly."],
  ["Affray requires:", "Five persons and a common object", "Two or more persons fighting in a public place and disturbing public peace", "An armed rebellion", "A false declaration", 1, "BNS Section 194 defines affray in these terms."],
  ["Peaceful assembly without arms is protected principally by:", "Article 19(1)(b)", "Article 20(2)", "Article 32 only", "Article 300A", 0, "Article 19(1)(b) protects peaceful assembly without arms, subject to reasonable restrictions."],

  // Unit 6 — false evidence
  ["Giving false evidence requires, among other things:", "A legal duty to state the truth or make the declaration", "A civil dispute only", "Physical evidence only", "A newspaper publication", 0, "The legal duty and consciously false statement are central ingredients."],
  ["A witness who makes an honestly mistaken statement:", "Automatically commits false evidence", "Does not satisfy the offence without the required knowledge or belief", "Commits fabrication", "Is strictly liable", 1, "Falsity must be accompanied by the prescribed mental state."],
  ["Fabricating false evidence includes creating a false circumstance intended to:", "Entertain the public", "Appear in a legally recognised proceeding and mislead on a material point", "Resolve a private argument", "Avoid all evidence", 1, "Intended evidentiary use and materiality distinguish fabrication."],
  ["BNS Section 229 principally provides punishment for:", "False evidence", "Robbery", "Murder", "Defamation", 0, "BNS Section 229 distinguishes false evidence in judicial proceedings and other cases."],
  ["Threatening a person to give false evidence is addressed in BNS:", "Section 232", "Section 190", "Section 304", "Section 356", 0, "BNS Section 232 punishes the specified witness threat."],
  ["A person may be guilty of using false evidence where the person:", "Did not fabricate it but corruptly uses it knowing it is false", "Honestly believes it genuine", "Never uses or attempts to use it", "Merely hears about it", 0, "Use and fabrication are separate forms of liability."],
  ["A false certificate offence requires falsity concerning:", "Any trivial point", "A material point in a certificate legally required or admissible in evidence", "A private nickname", "A future opinion only", 1, "The statutory legal use and material falsity must be established."],
  ["Contradictory statements by themselves:", "Always prove perjury", "Do not automatically prove which statement was consciously false", "Are inadmissible", "End the trial", 1, "The prosecution must prove the identified false statement and mens rea."],

  // Unit 7 — human body
  ["Culpable homicide is defined principally in BNS:", "Section 100", "Section 63", "Section 147", "Section 303", 0, "BNS Section 100 defines culpable homicide."],
  ["Which is one of the murder exceptions?", "Every negligent act", "Sudden fight without premeditation and without undue advantage or cruel conduct", "Every property dispute", "Voluntary intoxication", 1, "The sudden-fight exception applies only when all statutory conditions are met."],
  ["Causing death by negligence applies where the act:", "Amounts to murder", "Is rash or negligent but does not amount to culpable homicide", "Is intentional killing", "Is protected private defence", 1, "Negligent homicide is distinct from culpable homicide."],
  ["Grievous hurt:", "Means every painful injury", "Must fall within an enumerated statutory category", "Requires death", "Can never involve a tooth", 1, "The statute exhaustively identifies categories such as fracture or dislocation of bone or tooth."],
  ["Wrongful confinement differs from wrongful restraint because confinement:", "Requires no obstruction", "Totally restrains movement within circumscribed limits", "Is always lawful", "Concerns property only", 1, "Confinement is total restraint within defined limits."],
  ["Assault may be committed without physical contact where conduct causes apprehension of:", "Future civil litigation", "Imminent criminal force", "Loss of reputation only", "Breach of contract", 1, "Assault concerns apprehension of imminent criminal force; criminal force involves actual force."],
  ["Kidnapping from lawful guardianship principally turns on:", "The child's willingness only", "Taking or enticing within the statutory category without the guardian's consent", "Use of force in every case", "Movement outside India only", 1, "Guardian consent and the statutory victim category are central."],
  ["Under BNS Section 63, absence of physical resistance:", "Always proves consent", "Does not by itself constitute consent", "Ends the inquiry", "Is punishable", 1, "Consent requires unequivocal voluntary agreement to the specific sexual act."],

  // Unit 8 — property and related offences
  ["Theft requires property to be:", "Immovable in every case", "Movable and moved with dishonest intention from another's possession without consent", "Entrusted", "Delivered because of fear", 1, "Movement of movable property with the prescribed dishonest intention completes theft."],
  ["BNS Section 304 creates the distinct offence of:", "Snatching", "Defamation", "Conspiracy", "Perjury", 0, "Snatching is a newly named BNS property offence."],
  ["Extortion differs from theft because extortion involves:", "No property", "Delivery induced by fear of injury", "Five offenders", "Entrustment only", 1, "The victim delivers property due to intentionally induced fear."],
  ["Dacoity requires robbery committed or attempted conjointly by at least:", "Two persons", "Three persons", "Five persons", "Seven persons", 2, "Five or more persons must conjointly commit, attempt or aid the robbery."],
  ["The central ingredient distinguishing criminal breach of trust is:", "Entrustment or dominion over property", "Instant fear", "Five offenders", "Public entry", 0, "Breach of trust depends on entrusted property or dominion followed by dishonest violation."],
  ["A later failure to perform a genuine promise:", "Always proves cheating", "Does not by itself prove dishonest intention at inception", "Is robbery", "Is dacoity", 1, "Cheating requires the statutory deception and dishonest or fraudulent inducement."],
  ["Criminal defamation under BNS is principally in:", "Section 356", "Section 318", "Section 62", "Section 85", 0, "BNS Section 356 contains the defamation provision and exceptions."],
  ["The general attempt provision in the BNS is:", "Section 62", "Section 511", "Section 303", "Section 351", 0, "BNS Section 62 applies where no express attempt provision is made."],
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

const makeMockTest = (testNumber, startIndex) => {
  const questions = rawQuestions
    .slice(startIndex, startIndex + 20)
    .map((entry, index) =>
      makeQuestion(entry, index, `CRIMINAL-M${testNumber}`),
    );

  return {
    id: `criminal-law-i-mock-${testNumber}`,
    courseId: COURSE_SLUG,
    title: `Criminal Law I (IPC to BNS) – Mock Test ${testNumber}`,
    description:
      "Course-wise practice assessment covering the Criminal Law I IPC-to-BNS curriculum.",
    testNumber,
    totalQuestions: 20,
    marksPerQuestion: 2,
    maximumMarks: 40,
    passPercentage: 50,
    durationMinutes: 30,
    questions,
  };
};

export const criminalLawIMockTests = {
  1: makeMockTest(1, 0),
  2: makeMockTest(2, 20),
  3: makeMockTest(3, 40),
};

const finalQuestions = Array.from({ length: 30 }, (_, index) =>
  makeQuestion(
    rawQuestions[(index * 2 + 1) % rawQuestions.length],
    index,
    "CRIMINAL-FINAL",
  ),
);

export const criminalLawIFinalExam = {
  id: "criminal-law-i-final-exam",
  courseId: COURSE_SLUG,
  title: "Criminal Law I (IPC to BNS) – Final Examination",
  description:
    "Final certification examination covering all eight units of Criminal Law I.",
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

export { COURSE_SLUG as CRIMINAL_LAW_I_COURSE_SLUG };
