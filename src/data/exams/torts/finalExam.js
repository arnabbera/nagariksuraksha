const finalExam = {
  id: "torts-final-exam",

  courseId:
    "law-of-torts-mv-and-cp-laws",

  title:
    "Law of Torts – Final Examination",

  description:
    "Final certification examination covering the complete Law of Torts syllabus.",

  examType:
    "final",

  totalQuestions: 30,

  marksPerQuestion: 2,

  maximumMarks: 60,

  passPercentage: 50,

  durationMinutes: 45,

  maximumAttempts: 1,

  showResultImmediately: false,

  showCorrectAnswersAfterSubmission:
    false,

  questions: [
    {
      id: "TORT-FINAL-Q001",

      question:
        "Which statement best explains why tort law is described as a law of civil wrongs?",

      options: [
        {
          id: "a",
          text: "Because its primary remedies are civil rather than criminal",
        },
        {
          id: "b",
          text: "Because every tort must arise from a contract",
        },
        {
          id: "c",
          text: "Because torts can be committed only against the State",
        },
        {
          id: "d",
          text: "Because imprisonment is the normal remedy",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Tort law generally deals with civil wrongs for which civil remedies such as damages or injunctions may be granted.",
    },

    {
      id: "TORT-FINAL-Q002",

      question:
        "A legal right has been violated but the claimant has suffered no measurable financial loss. Which principle is most relevant?",

      options: [
        {
          id: "a",
          text: "Injuria sine damno",
        },
        {
          id: "b",
          text: "Damnum sine injuria",
        },
        {
          id: "c",
          text: "Novus actus interveniens",
        },
        {
          id: "d",
          text: "Act of God",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Injuria sine damno applies where a legal right is infringed even though actual monetary damage is not proved.",
    },

    {
      id: "TORT-FINAL-Q003",

      question:
        "Which statement best reflects the role of intention in tort law?",

      options: [
        {
          id: "a",
          text: "Intention is relevant to some torts but is not universally required",
        },
        {
          id: "b",
          text: "Every tort requires criminal intention",
        },
        {
          id: "c",
          text: "Intention is irrelevant in all torts",
        },
        {
          id: "d",
          text: "Only contractual intention matters",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Some torts are intentional, while others such as negligence are based on failure to meet an objective standard of care.",
    },

    {
      id: "TORT-FINAL-Q004",

      question:
        "A defendant's conduct creates a foreseeable risk to a person closely affected by that conduct. Which concept is most directly engaged?",

      options: [
        {
          id: "a",
          text: "Duty of care",
        },
        {
          id: "b",
          text: "Passing off",
        },
        {
          id: "c",
          text: "Conversion",
        },
        {
          id: "d",
          text: "False imprisonment",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Duty of care concerns whether the defendant was legally required to take reasonable care toward the claimant.",
    },

    {
      id: "TORT-FINAL-Q005",

      question:
        "Where a defendant breaches a duty of care but the breach causes no legally recognised damage, the negligence claim will ordinarily fail because:",

      options: [
        {
          id: "a",
          text: "Damage is an essential element of negligence",
        },
        {
          id: "b",
          text: "Every negligence claim requires malice",
        },
        {
          id: "c",
          text: "Negligence is always actionable per se",
        },
        {
          id: "d",
          text: "A contract must first be proved",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Negligence generally requires duty, breach, causation and legally recognised damage.",
    },

    {
      id: "TORT-FINAL-Q006",

      question:
        "Which principle prevents liability from extending indefinitely to every consequence of a wrongful act?",

      options: [
        {
          id: "a",
          text: "Remoteness of damage",
        },
        {
          id: "b",
          text: "Battery",
        },
        {
          id: "c",
          text: "Trespass to land",
        },
        {
          id: "d",
          text: "Passing off",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "The doctrine of remoteness limits liability to consequences sufficiently connected with the wrongful conduct.",
    },

    {
      id: "TORT-FINAL-Q007",

      question:
        "A claimant is unusually vulnerable and suffers more serious injury than an ordinary person would have suffered. Which rule is relevant?",

      options: [
        {
          id: "a",
          text: "Thin skull rule",
        },
        {
          id: "b",
          text: "Act of God",
        },
        {
          id: "c",
          text: "Statutory authority",
        },
        {
          id: "d",
          text: "Passing off",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Under the thin skull rule, the defendant generally takes the victim as found.",
    },

    {
      id: "TORT-FINAL-Q008",

      question:
        "An intervening event may relieve the original wrongdoer from liability where the event:",

      options: [
        {
          id: "a",
          text: "Is sufficiently independent to break the chain of causation",
        },
        {
          id: "b",
          text: "Occurs after a written contract",
        },
        {
          id: "c",
          text: "Involves property only",
        },
        {
          id: "d",
          text: "Is caused by the claimant's employer",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "A sufficiently independent intervening act may constitute a novus actus interveniens and break the chain of causation.",
    },

    {
      id: "TORT-FINAL-Q009",

      question:
        "Which remedy is most suitable where the claimant wants a continuing wrongful interference to stop?",

      options: [
        {
          id: "a",
          text: "Injunction",
        },
        {
          id: "b",
          text: "Imprisonment",
        },
        {
          id: "c",
          text: "Deportation",
        },
        {
          id: "d",
          text: "Criminal fine",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "An injunction may restrain or prevent continuing or threatened wrongful conduct.",
    },

    {
      id: "TORT-FINAL-Q010",

      question:
        "Which statement best distinguishes assault from battery?",

      options: [
        {
          id: "a",
          text: "Assault concerns apprehension of imminent force, while battery involves unlawful physical contact",
        },
        {
          id: "b",
          text: "Battery requires no contact, while assault does",
        },
        {
          id: "c",
          text: "Both require damage to property",
        },
        {
          id: "d",
          text: "Both are forms of defamation",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Assault concerns apprehension of imminent unlawful force, while battery requires unlawful physical contact.",
    },

    {
      id: "TORT-FINAL-Q011",

      question:
        "Total restraint of a person's freedom without lawful justification most directly constitutes:",

      options: [
        {
          id: "a",
          text: "False imprisonment",
        },
        {
          id: "b",
          text: "Conversion",
        },
        {
          id: "c",
          text: "Passing off",
        },
        {
          id: "d",
          text: "Private nuisance",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "False imprisonment consists of total restraint of personal liberty without lawful authority.",
    },

    {
      id: "TORT-FINAL-Q012",

      question:
        "A claimant alleges that a statement lowered their reputation in the estimation of right-thinking members of society. Which tort is most relevant?",

      options: [
        {
          id: "a",
          text: "Defamation",
        },
        {
          id: "b",
          text: "Trespass to goods",
        },
        {
          id: "c",
          text: "Battery",
        },
        {
          id: "d",
          text: "Nuisance",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Defamation protects reputation against legally actionable defamatory statements.",
    },

    {
      id: "TORT-FINAL-Q013",

      question:
        "A trader misrepresents their goods as being connected with another established trader. The most relevant tort is:",

      options: [
        {
          id: "a",
          text: "Passing off",
        },
        {
          id: "b",
          text: "Assault",
        },
        {
          id: "c",
          text: "False imprisonment",
        },
        {
          id: "d",
          text: "Private defence",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Passing off protects business goodwill against damaging misrepresentation.",
    },

    {
      id: "TORT-FINAL-Q014",

      question:
        "Wrongfully exercising dominion over another person's goods in a manner inconsistent with that person's rights is:",

      options: [
        {
          id: "a",
          text: "Conversion",
        },
        {
          id: "b",
          text: "Public nuisance",
        },
        {
          id: "c",
          text: "Slander",
        },
        {
          id: "d",
          text: "Assault",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Conversion protects proprietary or possessory interests against serious wrongful interference with goods.",
    },

    {
      id: "TORT-FINAL-Q015",

      question:
        "An unreasonable interference with a person's use or enjoyment of land is most likely:",

      options: [
        {
          id: "a",
          text: "Private nuisance",
        },
        {
          id: "b",
          text: "Battery",
        },
        {
          id: "c",
          text: "Malicious prosecution",
        },
        {
          id: "d",
          text: "Deceit",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Private nuisance concerns unreasonable interference with a person's use or enjoyment of land.",
    },

    {
      id: "TORT-FINAL-Q016",

      question:
        "Where an individual suffers special damage beyond that suffered by the general public from a public nuisance, the individual may:",

      options: [
        {
          id: "a",
          text: "Bring an individual civil action in appropriate circumstances",
        },
        {
          id: "b",
          text: "Never sue",
        },
        {
          id: "c",
          text: "Sue only if there is a contract",
        },
        {
          id: "d",
          text: "Sue only after conviction of the defendant",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Special or particular damage may enable an individual action for public nuisance.",
    },

    {
      id: "TORT-FINAL-Q017",

      question:
        "A prosecution was initiated maliciously, without reasonable and probable cause, and ended in the claimant's favour. Which tort may arise?",

      options: [
        {
          id: "a",
          text: "Malicious prosecution",
        },
        {
          id: "b",
          text: "Conversion",
        },
        {
          id: "c",
          text: "Trespass to land",
        },
        {
          id: "d",
          text: "Passing off",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Those facts correspond to the traditional elements of malicious prosecution.",
    },

    {
      id: "TORT-FINAL-Q018",

      question:
        "A knowingly false representation is made with the intention that another person rely on it, and financial loss results. Which tort is most relevant?",

      options: [
        {
          id: "a",
          text: "Deceit",
        },
        {
          id: "b",
          text: "Assault",
        },
        {
          id: "c",
          text: "Nuisance",
        },
        {
          id: "d",
          text: "Battery",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Deceit is concerned with fraudulent misrepresentation causing loss through reliance.",
    },

    {
      id: "TORT-FINAL-Q019",

      question:
        "Which principle may protect a defendant where an extraordinary natural event alone causes the damage and could not reasonably have been anticipated?",

      options: [
        {
          id: "a",
          text: "Act of God",
        },
        {
          id: "b",
          text: "Conversion",
        },
        {
          id: "c",
          text: "Passing off",
        },
        {
          id: "d",
          text: "False imprisonment",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Act of God applies to extraordinary natural events beyond reasonable human foresight and control.",
    },

    {
      id: "TORT-FINAL-Q020",

      question:
        "An enterprise engaged in hazardous activity causes harm through that activity. Under Indian law, which doctrine may impose especially stringent liability?",

      options: [
        {
          id: "a",
          text: "Absolute liability",
        },
        {
          id: "b",
          text: "Passing off",
        },
        {
          id: "c",
          text: "Defamation",
        },
        {
          id: "d",
          text: "False imprisonment",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Indian constitutional jurisprudence developed absolute liability for enterprises engaged in hazardous or inherently dangerous activities.",
    },

    {
      id: "TORT-FINAL-Q021",

      question:
        "A hospital employee negligently injures a patient while acting in the course of employment. Which principle may make the hospital liable?",

      options: [
        {
          id: "a",
          text: "Vicarious liability",
        },
        {
          id: "b",
          text: "Act of God",
        },
        {
          id: "c",
          text: "Passing off",
        },
        {
          id: "d",
          text: "Public nuisance",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "An employer or institution may be vicariously liable for torts committed by employees in the course of employment.",
    },

    {
      id: "TORT-FINAL-Q022",

      question:
        "Which standard is generally relevant when judging a doctor's professional conduct in negligence?",

      options: [
        {
          id: "a",
          text: "Reasonable skill and care expected from an ordinarily competent professional",
        },
        {
          id: "b",
          text: "Guaranteed success in treatment",
        },
        {
          id: "c",
          text: "The patient's preferred outcome",
        },
        {
          id: "d",
          text: "The cheapest possible treatment",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Professional negligence is assessed against the reasonable standard expected from a competent practitioner in the field.",
    },

    {
      id: "TORT-FINAL-Q023",

      question:
        "Where a defective consumer product causes injury, liability may arise primarily because of:",

      options: [
        {
          id: "a",
          text: "Product defect causing legally recognised harm",
        },
        {
          id: "b",
          text: "The colour of the packaging",
        },
        {
          id: "c",
          text: "The customer's later change of mind",
        },
        {
          id: "d",
          text: "The retailer's advertising budget",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Product liability may arise where a defective product causes legally recognised harm.",
    },

    {
      id: "TORT-FINAL-Q024",

      question:
        "A claimant who fails to take reasonable steps to reduce avoidable loss may have damages reduced under the principle of:",

      options: [
        {
          id: "a",
          text: "Mitigation of damages",
        },
        {
          id: "b",
          text: "Defamation",
        },
        {
          id: "c",
          text: "Conversion",
        },
        {
          id: "d",
          text: "Passing off",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "A claimant is generally expected to take reasonable steps to mitigate avoidable loss.",
    },

    {
      id: "TORT-FINAL-Q025",

      question:
        "Damages awarded primarily to compensate a claimant for actual loss are called:",

      options: [
        {
          id: "a",
          text: "Compensatory damages",
        },
        {
          id: "b",
          text: "Criminal fines",
        },
        {
          id: "c",
          text: "Court fees",
        },
        {
          id: "d",
          text: "Penal taxation",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Compensatory damages aim to compensate the claimant for legally recognised loss caused by the tort.",
    },

    {
      id: "TORT-FINAL-Q026",

      question:
        "Where damages are awarded exceptionally to punish particularly wrongful conduct, they are commonly described as:",

      options: [
        {
          id: "a",
          text: "Exemplary or punitive damages",
        },
        {
          id: "b",
          text: "Nominal court fees",
        },
        {
          id: "c",
          text: "Restitutionary taxes",
        },
        {
          id: "d",
          text: "Contractual consideration",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Exemplary or punitive damages are exceptional awards aimed at punishment and deterrence.",
    },

    {
      id: "TORT-FINAL-Q027",

      question:
        "In a motor accident claim involving permanent disability, which factor is especially relevant to compensation assessment?",

      options: [
        {
          id: "a",
          text: "Impact of the disability on earning capacity and quality of life",
        },
        {
          id: "b",
          text: "Only the colour of the vehicle",
        },
        {
          id: "c",
          text: "Only the driver's occupation",
        },
        {
          id: "d",
          text: "Only whether insurance was purchased online",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Permanent disability may affect earning capacity, future prospects and quality of life, all relevant to just compensation.",
    },

    {
      id: "TORT-FINAL-Q028",

      question:
        "Public-law compensation awarded for violation of fundamental rights by State authorities is best described as:",

      options: [
        {
          id: "a",
          text: "A constitutional remedy distinct from ordinary private-law damages",
        },
        {
          id: "b",
          text: "A contractual payment",
        },
        {
          id: "c",
          text: "A commercial discount",
        },
        {
          id: "d",
          text: "A criminal fine payable by the claimant",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Constitutional courts may grant public-law compensation for violations of fundamental rights by State authorities.",
    },

    {
      id: "TORT-FINAL-Q029",

      question:
        "Where two persons jointly participate in committing the same tort, they may incur liability as:",

      options: [
        {
          id: "a",
          text: "Joint tortfeasors",
        },
        {
          id: "b",
          text: "Arbitrators",
        },
        {
          id: "c",
          text: "Trustees",
        },
        {
          id: "d",
          text: "Witnesses",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Persons acting together in the commission of a tort may be treated as joint tortfeasors.",
    },

    {
      id: "TORT-FINAL-Q030",

      question:
        "Which statement best expresses the overall purpose of tort law?",

      options: [
        {
          id: "a",
          text: "To provide civil remedies for legally recognised wrongs and allocate responsibility for resulting harm",
        },
        {
          id: "b",
          text: "To replace all criminal law",
        },
        {
          id: "c",
          text: "To regulate only written contracts",
        },
        {
          id: "d",
          text: "To impose imprisonment in every dispute",
        },
      ],

      correctOptionIds: ["a"],

      explanation:
        "Tort law provides civil remedies for wrongful conduct and allocates responsibility for legally recognised harm.",
    },
  ],
};

export default finalExam;