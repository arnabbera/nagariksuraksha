const COURSE_SLUG = "code-of-civil-procedure-and-limitation";

const rawQuestions = [
  ["CPC primarily regulates which kind of law?", "Procedure in civil courts", "Creation of criminal offences", "Constitutional amendments", "Tax assessment", 0, "The Code of Civil Procedure, 1908 consolidates the law relating to the procedure of civil courts."],
  ["Section 9 CPC directs civil courts to try:", "All suits of a civil nature unless cognizance is barred", "Only property suits", "Only suits approved by the High Court", "Criminal prosecutions", 0, "Section 9 confers jurisdiction over suits of a civil nature except where cognizance is expressly or impliedly barred."],
  ["The rule of res sub judice is contained in:", "Section 10", "Section 11", "Section 20", "Section 80", 0, "Section 10 deals with stay of a suit where the matter in issue is already directly and substantially in issue in a previously instituted suit."],
  ["The principle of res judicata is codified in:", "Section 11", "Section 9", "Section 24", "Section 96", 0, "Section 11 prevents re-trial of a matter directly and substantially in issue that has been finally decided between the relevant parties."],
  ["Which provision contains the general territorial rules for other suits?", "Section 20", "Section 10", "Section 47", "Section 148", 0, "Section 20 generally connects venue with the defendant's residence or business and the place where the cause of action arises."],
  ["A High Court or District Court's general power to transfer or withdraw suits is found in:", "Section 24", "Section 26", "Section 33", "Section 89", 0, "Section 24 grants general power of transfer and withdrawal."],
  ["Under Section 26 CPC, every suit is ordinarily instituted by:", "Presentation of a plaint or another prescribed manner", "Filing an FIR", "Issuing a decree", "Making an oral appeal", 0, "Section 26 provides for institution by presentation of a plaint or in another prescribed manner."],
  ["Section 27 CPC concerns:", "Summons to defendants", "Review", "Execution", "Temporary injunctions", 0, "Section 27 authorises issue of summons after a suit has been duly instituted."],
  ["After hearing the case, the court pronounces judgment and a decree follows under:", "Section 33", "Section 21", "Section 60", "Section 115", 0, "Section 33 links pronouncement of judgment with the decree that follows."],
  ["Questions relating to execution, discharge or satisfaction of a decree are generally determined under:", "Section 47", "Section 11", "Section 80", "Section 144", 0, "Section 47 requires such questions between the parties or their representatives to be determined by the executing court."],
  ["Which provision lists property liable to attachment and sale in execution?", "Section 60", "Section 51", "Section 96", "Section 152", 0, "Section 60 identifies property liable to attachment and sale and also provides exemptions."],
  ["Prior notice before a suit against the Government is principally governed by:", "Section 80", "Section 89", "Section 100", "Section 151", 0, "Section 80 generally requires notice before institution of a suit against the Government or a public officer for an official act, subject to its exceptions."],
  ["Settlement of disputes outside court is addressed by:", "Section 89", "Section 27", "Section 47", "Section 114", 0, "Section 89 provides for reference to specified alternative dispute-resolution processes."],
  ["A first appeal from an original decree is principally provided by:", "Section 96", "Section 100", "Section 104", "Section 115", 0, "Section 96 governs appeals from original decrees."],
  ["A second appeal under Section 100 ordinarily requires:", "A substantial question of law", "A fresh cause of action", "Consent of both parties", "A criminal charge", 0, "Section 100 limits a second appeal to a case involving a substantial question of law."],
  ["Appeals from specified orders are principally governed by:", "Section 104 read with Order XLIII", "Section 9 only", "Order VII only", "Section 151 only", 0, "Section 104 and Order XLIII identify appealable orders."],
  ["Review of a judgment is recognised by:", "Section 114 read with Order XLVII", "Section 96 only", "Order XXI", "Section 10", 0, "Section 114 and Order XLVII govern review."],
  ["The High Court's revisional jurisdiction under the CPC is principally found in:", "Section 115", "Section 100", "Section 144", "Order IX", 0, "Section 115 deals with revision, subject to its statutory conditions."],
  ["Restitution following variation or reversal of a decree is governed by:", "Section 144", "Section 148", "Section 152", "Order V", 0, "Section 144 embodies the court's power to order restitution."],
  ["The court's inherent powers to make orders necessary for the ends of justice are saved by:", "Section 151", "Section 10", "Section 33", "Section 96", 0, "Section 151 preserves the inherent powers of the court."],
  ["Clerical or arithmetical mistakes in judgments, decrees or orders may be corrected under:", "Section 152", "Section 80", "Section 115", "Order XVI", 0, "Section 152 permits correction of clerical or arithmetical mistakes and accidental slips or omissions."],
  ["Order I CPC deals with:", "Parties to suits", "Execution", "Appeals", "Commissions", 0, "Order I governs joinder and other matters concerning parties to suits."],
  ["A representative suit by or against persons having the same interest is governed by:", "Order I Rule 8", "Order II Rule 2", "Order VII Rule 11", "Order IX Rule 13", 0, "Order I Rule 8 governs representative suits and requires the prescribed permission or direction and notice."],
  ["The rule that a suit should include the whole claim arising from a cause of action appears in:", "Order II Rule 2", "Order I Rule 8", "Order VI Rule 17", "Order XXI Rule 1", 0, "Order II Rule 2 addresses inclusion and relinquishment of claims arising from the same cause of action."],
  ["Order V CPC principally concerns:", "Issue and service of summons", "Pleadings", "Judgment", "Review", 0, "Order V contains rules on issue and service of summons."],
  ["Pleadings generally mean:", "Plaint and written statement", "Evidence and judgment", "Summons and warrant", "Decree and execution petition", 0, "Order VI defines pleading as plaint or written statement."],
  ["Amendment of pleadings is principally governed by:", "Order VI Rule 17", "Order VII Rule 11", "Order IX Rule 9", "Order XX Rule 1", 0, "Order VI Rule 17 governs amendment of pleadings, including the due-diligence proviso after trial has commenced."],
  ["Return of a plaint for presentation to the proper court is governed by:", "Order VII Rule 10", "Order VII Rule 11", "Order VIII Rule 1", "Order IX Rule 13", 0, "Order VII Rule 10 concerns return of plaint."],
  ["Rejection of a plaint is governed by:", "Order VII Rule 11", "Order VI Rule 17", "Order X Rule 1", "Order XXI Rule 58", 0, "Order VII Rule 11 specifies grounds on which a plaint shall be rejected."],
  ["A defendant's written statement is principally dealt with in:", "Order VIII", "Order IV", "Order XIII", "Order XXVI", 0, "Order VIII deals with written statements, set-off and counterclaim."],
  ["Setting aside an ex parte decree is principally sought under:", "Order IX Rule 13", "Order VII Rule 10", "Order XI Rule 1", "Order XLVII Rule 1", 0, "Order IX Rule 13 provides the remedy, subject to its conditions."],
  ["Discovery and inspection are principally governed by:", "Order XI", "Order XIV", "Order XVIII", "Order XXIII", 0, "Order XI deals with discovery and inspection."],
  ["Judgment on admissions may be given under:", "Order XII Rule 6", "Order X Rule 1", "Order XV Rule 1", "Order XXI Rule 2", 0, "Order XII Rule 6 permits judgment on admissions."],
  ["Settlement of issues is principally governed by:", "Order XIV", "Order XII", "Order XVI", "Order XX", 0, "Order XIV deals with framing and settlement of issues."],
  ["Summoning and attendance of witnesses are principally governed by:", "Order XVI", "Order IX", "Order XVIII", "Order XXII", 0, "Order XVI concerns witnesses."],
  ["Adjournments are principally dealt with by:", "Order XVII", "Order XIV", "Order XX", "Order XXXIX", 0, "Order XVII regulates adjournments."],
  ["Hearing of the suit and examination of witnesses are principally governed by:", "Order XVIII", "Order XVI", "Order XX", "Order XXVI", 0, "Order XVIII deals with hearing and examination of witnesses."],
  ["Judgment and decree are principally dealt with in:", "Order XX", "Order XIX", "Order XXI", "Order XXIII", 0, "Order XX concerns judgment and decree."],
  ["Execution of decrees and orders is principally governed by:", "Order XXI", "Order XX", "Order XXII", "Order XXVI", 0, "Order XXI contains the principal execution rules."],
  ["Death, marriage and insolvency of parties are principally dealt with by:", "Order XXII", "Order XXIII", "Order XXV", "Order XXXIII", 0, "Order XXII governs the effect of death, marriage and insolvency on proceedings."],
  ["Withdrawal and adjustment of suits are principally governed by:", "Order XXIII", "Order XXI", "Order XXIV", "Order XLVII", 0, "Order XXIII deals with withdrawal, abandonment and lawful compromise."],
  ["Commissions issued by civil courts are principally governed by:", "Order XXVI", "Order XXII", "Order XXX", "Order XL", 0, "Order XXVI governs commissions."],
  ["Suits by indigent persons are principally governed by:", "Order XXXIII", "Order XXVII", "Order XXXV", "Order XLIII", 0, "Order XXXIII provides the procedure for suits by indigent persons."],
  ["Temporary injunctions are principally governed by:", "Order XXXIX", "Order XXXVIII", "Order XL", "Order XLVII", 0, "Order XXXIX concerns temporary injunctions and interlocutory orders."],
  ["Review procedure is principally contained in:", "Order XLVII", "Order XLIII", "Order XXI", "Order IX", 0, "Order XLVII contains the review procedure."],
  ["Under Section 3 of the Limitation Act, a time-barred suit must generally be:", "Dismissed even if limitation is not pleaded", "Decreed if limitation is not pleaded", "Transferred", "Stayed indefinitely", 0, "Section 3 requires dismissal of proceedings instituted after the prescribed period, subject to the Act."],
  ["When the prescribed period expires on a day the court is closed, Section 4 permits filing:", "On the day the court reopens", "Only after condonation", "Within thirty days", "Never", 0, "Section 4 permits institution or filing when the court reopens."],
  ["Section 5 of the Limitation Act generally permits extension for:", "Appeals and applications, but not suits", "All suits automatically", "Only execution applications", "Criminal trials only", 0, "Section 5 applies to appeals and applications other than applications under Order XXI CPC, but not to suits."],
  ["Legal disability at the commencement of limitation is addressed by:", "Section 6", "Section 3", "Section 12", "Section 27", 0, "Section 6 deals with minority, insanity and similar statutory disability at the time limitation begins."],
  ["Once time has begun to run, a later disability generally does not stop it under:", "Section 9", "Section 5", "Section 14", "Section 21", 0, "Section 9 states the general rule of continuous running of time."],
  ["Exclusion of time required for obtaining a copy of a decree for appeal is principally addressed by:", "Section 12", "Section 4", "Section 18", "Section 29", 0, "Section 12 contains exclusions used in computing limitation, including requisite copy time in the specified cases."],
  ["Exclusion for bona fide proceedings in a court unable to entertain the matter due to jurisdiction or a similar cause is governed by:", "Section 14", "Section 9", "Section 19", "Section 27", 0, "Section 14 protects qualifying proceedings prosecuted with due diligence and good faith in the wrong forum."],
  ["A written acknowledgment made before expiry of limitation is governed by:", "Section 18", "Section 12", "Section 21", "Section 25", 0, "Section 18 provides for a fresh period of limitation from a qualifying acknowledgment made before expiry."],
  ["Part-payment before expiry may start a fresh limitation period when statutory requirements are met under:", "Section 19", "Section 14", "Section 22", "Section 28", 0, "Section 19 deals with the effect of qualifying payment on account of a debt or interest on a legacy."],
  ["The effect on limitation of adding or substituting a new plaintiff or defendant is principally governed by:", "Section 21", "Section 18", "Section 24", "Section 29", 0, "Section 21 generally treats the suit as instituted against the new party when that party is added, subject to the proviso."],
  ["Section 27 of the Limitation Act is distinctive because it may:", "Extinguish the right to property after expiry of the prescribed period", "Extend every limitation period", "Create criminal liability", "Abolish res judicata", 0, "Section 27 provides for extinguishment of the right to property in the specified situation."],
  ["Application of the Limitation Act to special or local laws is addressed by:", "Section 29", "Section 9", "Section 15", "Section 25", 0, "Section 29 contains savings and rules relating to special or local prescribed periods."],
  ["The ordinary limitation period for a suit for specific performance under Article 54 is:", "Three years", "One year", "Twelve years", "Thirty years", 0, "Article 54 prescribes three years, beginning as specified in that Article."],
  ["The ordinary limitation period for a declaration under Article 58 is:", "Three years", "Thirty days", "Twelve years", "Thirty years", 0, "Article 58 prescribes three years from when the right to sue first accrues."],
  ["A title-based suit for possession of immovable property under Article 65 ordinarily has a period of:", "Twelve years", "Three years", "Ninety days", "Thirty years", 0, "Article 65 prescribes twelve years from when the defendant's possession becomes adverse to the plaintiff."],
  ["Execution of a decree other than a decree granting a mandatory injunction is generally governed by Article 136, which prescribes:", "Twelve years", "Three years", "Thirty days", "Thirty years", 0, "Article 136 generally prescribes twelve years, subject to its terms and exception."],
  ["An application for which no specific period is provided elsewhere is generally governed by Article 137 with a period of:", "Three years", "One year", "Twelve years", "Ninety days", 0, "Article 137 prescribes three years from when the right to apply accrues."],
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
  Array.from({ length: 50 }, (_, index) => {
    const entry = rawQuestions[(index + offset) % rawQuestions.length];
    return makeQuestion(entry, index, prefix);
  });

const makeMockTest = (testNumber, offset) => ({
  id: `cpc-mock-${testNumber}`,
  courseId: COURSE_SLUG,
  title: `Code of Civil Procedure and Limitation – Mock Test ${testNumber}`,
  description: "Practice assessment covering the Code of Civil Procedure, 1908 and the Limitation Act, 1963.",
  testNumber,
  totalQuestions: 50,
  marksPerQuestion: 2,
  maximumMarks: 100,
  passPercentage: 50,
  durationMinutes: 60,
  questions: rotatedQuestions(offset, `CPC-M${testNumber}`),
});

export const cpcMockTests = {
  1: makeMockTest(1, 0),
  2: makeMockTest(2, 11),
  3: makeMockTest(3, 22),
};

export const cpcFinalExam = {
  id: "cpc-final-exam",
  courseId: COURSE_SLUG,
  title: "Code of Civil Procedure and Limitation – Final Examination",
  description: "Final certification assessment covering the complete CPC and Limitation curriculum.",
  examType: "final",
  totalQuestions: 50,
  marksPerQuestion: 2,
  maximumMarks: 100,
  passPercentage: 80,
  durationMinutes: 75,
  maximumAttempts: 1,
  showResultImmediately: true,
  showCorrectAnswersAfterSubmission: false,
  questions: rotatedQuestions(7, "CPC-FINAL"),
};

export { COURSE_SLUG as CPC_COURSE_SLUG };
