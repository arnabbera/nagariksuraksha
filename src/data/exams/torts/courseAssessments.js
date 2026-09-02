import finalExam from "./finalExam.js";
import mockTest1 from "./mockTest1.js";
import mockTest2 from "./mockTest2.js";
import mockTest3 from "./mockTest3.js";

const COURSE_SLUG = "law-of-torts-mv-and-cp-laws";
const optionIds = ["a", "b", "c", "d"];

const makeQuestion = (
  id,
  question,
  options,
  correctIndex,
  explanation,
) => ({
  id,
  question,
  options: options.map((text, index) => ({ id: optionIds[index], text })),
  correctOptionIds: [optionIds[correctIndex]],
  explanation,
});

const mockThreeQuestions = [
  makeQuestion(
    "TORT-M3-Q011",
    "Under the Motor Vehicles Act, 1988, insurance against third-party risk is generally:",
    ["Optional for every motor vehicle", "Mandatory for use of a motor vehicle in a public place, subject to the Act", "Required only after an accident", "Limited to government vehicles"],
    1,
    "Section 146 generally requires a policy complying with the Act before a motor vehicle is used in a public place.",
  ),
  makeQuestion(
    "TORT-M3-Q012",
    "A claim for compensation arising from a motor accident is ordinarily adjudicated by:",
    ["A Motor Accident Claims Tribunal", "The Consumer Commission exclusively", "The Registrar of Companies", "A criminal court alone"],
    0,
    "Motor Accident Claims Tribunals are constituted to adjudicate compensation claims within their statutory jurisdiction.",
  ),
  makeQuestion(
    "TORT-M3-Q013",
    "In assessing compensation for permanent disability, the multiplier method principally considers:",
    ["Only medical bills", "Functional impact on earning capacity, appropriate income and multiplier", "The vehicle's colour", "Punishment of the insurer"],
    1,
    "Compensation analysis distinguishes medical disability from its functional effect on earning capacity and applies the appropriate multiplier where relevant.",
  ),
  makeQuestion(
    "TORT-M3-Q014",
    "The statutory no-fault compensation provision for death or grievous hurt under the Motor Vehicles Act is principally:",
    ["Section 164", "Section 3", "Section 146", "Section 166 only"],
    0,
    "Section 164 provides compensation on the stated no-fault basis, distinct from a fault claim under Section 166.",
  ),
  makeQuestion(
    "TORT-M3-Q015",
    "A claimant pursuing a fault-based motor accident claim must ordinarily establish:",
    ["Negligent or wrongful conduct causing the accident and loss", "A product defect only", "A consumer contract in every case", "Criminal conviction as an absolute precondition"],
    0,
    "A fault claim requires proof on the civil standard; a criminal conviction is not invariably required.",
  ),
  makeQuestion(
    "TORT-M3-Q016",
    "Under the Consumer Protection Act, 2019, a consumer generally includes a person who obtains goods or services for consideration but excludes specified:",
    ["Online transactions", "Commercial-purpose transactions, subject to the self-employment livelihood exception", "Banking services", "Insurance services"],
    1,
    "The commercial-purpose exclusion is qualified where goods are used exclusively to earn livelihood by self-employment.",
  ),
  makeQuestion(
    "TORT-M3-Q017",
    "A deficiency under consumer law principally concerns:",
    ["A fault, imperfection, shortcoming or inadequacy in required service performance", "Every change of mind by a consumer", "Only criminal fraud", "The price of land alone"],
    0,
    "Deficiency concerns the legally or contractually required quality, nature or manner of service performance.",
  ),
  makeQuestion(
    "TORT-M3-Q018",
    "The Central Consumer Protection Authority is empowered principally to protect:",
    ["Consumer rights as a class and address unfair trade practices and misleading advertisements", "Only contractual rights of companies", "Only motor accident claims", "Criminal appeals"],
    0,
    "The 2019 Act creates the CCPA for class-wide consumer protection, investigation and regulatory action within its powers.",
  ),
  makeQuestion(
    "TORT-M3-Q019",
    "Product liability under the Consumer Protection Act, 2019 may arise against:",
    ["Only the consumer", "A product manufacturer, product service provider or product seller under applicable conditions", "Only a civil court judge", "Only the government"],
    1,
    "The Act establishes differentiated liability rules for manufacturers, service providers and sellers.",
  ),
  makeQuestion(
    "TORT-M3-Q020",
    "An unfair trade practice may include:",
    ["A materially false representation about the quality or standard of goods or services", "Every price difference", "A lawful warranty", "Truthful statutory disclosure"],
    0,
    "Misleading representations and other practices enumerated by the Act may constitute unfair trade practices.",
  ),
];

const finalSpecialistQuestions = [
  makeQuestion(
    "TORT-FINAL-Q021",
    "A driver breaches the duty of reasonable care and causes a road accident. The foundational tort is:",
    ["Negligence", "Defamation", "False imprisonment", "Passing off"],
    0,
    "Road accident liability ordinarily begins with duty, breach, causation and damage in negligence.",
  ),
  makeQuestion(
    "TORT-FINAL-Q022",
    "The requirement of third-party motor insurance principally protects:",
    ["Persons exposed to third-party death, injury or property risks covered by the statute and policy", "Only the vehicle manufacturer", "Only the policy issuer", "No accident victim"],
    0,
    "Compulsory insurance supports compensation of third-party victims within the statutory scheme.",
  ),
  makeQuestion(
    "TORT-FINAL-Q023",
    "A Motor Accident Claims Tribunal must award compensation that is:",
    ["Merely symbolic", "Just on the evidence and governing legal principles", "Always identical in every case", "Limited to hospital bills"],
    1,
    "Just compensation is fair and evidence-based and may include pecuniary and recognised non-pecuniary heads.",
  ),
  makeQuestion(
    "TORT-FINAL-Q024",
    "Where a victim's own negligence contributed to the accident, compensation may be adjusted under:",
    ["Contributory negligence", "Strict liability alone", "Res judicata", "Volenti in every case"],
    0,
    "Contributory negligence apportions responsibility where the claimant failed to take reasonable care for personal safety.",
  ),
  makeQuestion(
    "TORT-FINAL-Q025",
    "A person buying a machine exclusively to earn a livelihood through personal self-employment may:",
    ["Fall within the statutory consumer exception to commercial purpose", "Never be a consumer", "Be a consumer only after a criminal case", "Require a motor policy"],
    0,
    "The livelihood-by-self-employment explanation qualifies the commercial-purpose exclusion.",
  ),
  makeQuestion(
    "TORT-FINAL-Q026",
    "Supplying goods with a manufacturing defect most directly engages:",
    ["Product liability and consumer remedies under applicable conditions", "Diplomatic immunity", "Criminal conspiracy in every case", "Treaty law"],
    0,
    "A manufacturing defect may support product liability and other consumer remedies when statutory elements are proved.",
  ),
  makeQuestion(
    "TORT-FINAL-Q027",
    "Failure by a paid service provider to meet the legally required standard may constitute:",
    ["Deficiency in service", "Sovereign immunity automatically", "No legal issue", "Only a tax dispute"],
    0,
    "Consumer deficiency focuses on a fault or inadequacy in the quality, nature or manner of service performance.",
  ),
  makeQuestion(
    "TORT-FINAL-Q028",
    "Consumer Commissions under the 2019 Act operate at:",
    ["District, State and National levels", "Village level only", "Supreme Court level only", "International level"],
    0,
    "The statute establishes a three-tier consumer dispute redressal framework.",
  ),
  makeQuestion(
    "TORT-FINAL-Q029",
    "A misleading advertisement may attract action where it:",
    ["Falsely describes a product or is likely to mislead consumers in a material respect", "Uses any colour", "Is published online", "Mentions a price truthfully"],
    0,
    "The statutory focus is false or misleading content and its consumer impact, not the medium alone.",
  ),
  makeQuestion(
    "TORT-FINAL-Q030",
    "The best overall relationship among tort, motor accident and consumer law is that:",
    ["General civil-wrong principles interact with specialised statutory compensation and consumer remedies", "The three fields never overlap", "Every claim is criminal", "Only contract law applies"],
    0,
    "The course integrates general tort principles with specialised statutory schemes, while each claim retains its own ingredients and remedies.",
  ),
];

export const tortsMockTests = {
  1: {
    ...mockTest1,
    title: "Law of Torts, MV and CP Laws – Mock Test 1",
  },
  2: {
    ...mockTest2,
    title: "Law of Torts, MV and CP Laws – Mock Test 2",
  },
  3: {
    ...mockTest3,
    title: "Law of Torts, MV and CP Laws – Mock Test 3",
    description:
      "Practice assessment covering advanced tort principles, Motor Vehicles law and Consumer Protection law.",
    questions: [...mockTest3.questions.slice(0, 10), ...mockThreeQuestions],
  },
};

export const tortsFinalExam = {
  ...finalExam,
  title: "Law of Torts, MV and CP Laws – Final Examination",
  description:
    "Final certification examination covering tort law, Motor Vehicles law and Consumer Protection law.",
  passPercentage: 80,
  questions: [...finalExam.questions.slice(0, 20), ...finalSpecialistQuestions],
};

export { COURSE_SLUG as TORTS_COURSE_SLUG };
