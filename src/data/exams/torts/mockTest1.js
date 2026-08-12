const mockTest1 = {
  id: "torts-mock-1",
  courseId: "law-of-torts-mv-and-cp-laws",
  title: "Law of Torts – Mock Test 1",
  description:
    "Practice test covering foundational principles of the Law of Torts.",

  testNumber: 1,

  totalQuestions: 20,
  marksPerQuestion: 2,
  maximumMarks: 40,
  passPercentage: 50,
  durationMinutes: 30,

  questions: [
    {
      id: "q1",
      question:
        "A tort is primarily a:",
      options: [
        {
          id: "a",
          text: "Criminal wrong",
        },
        {
          id: "b",
          text: "Civil wrong",
        },
        {
          id: "c",
          text: "Contractual obligation",
        },
        {
          id: "d",
          text: "Constitutional remedy",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "A tort is generally a civil wrong for which the law provides a civil remedy, usually damages.",
    },

    {
      id: "q2",
      question:
        "Which of the following is generally essential for tortious liability?",
      options: [
        {
          id: "a",
          text: "A civil wrong causing legal injury",
        },
        {
          id: "b",
          text: "A written contract",
        },
        {
          id: "c",
          text: "Criminal intention",
        },
        {
          id: "d",
          text: "Registration",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Tortious liability generally arises when a wrongful act or omission violates a legal right and gives rise to a civil remedy.",
    },

    {
      id: "q3",
      question:
        "Injuria sine damno means:",
      options: [
        {
          id: "a",
          text: "Actual damage without legal injury",
        },
        {
          id: "b",
          text: "Legal injury without actual damage",
        },
        {
          id: "c",
          text: "Criminal injury",
        },
        {
          id: "d",
          text: "Negligence without damage",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Injuria sine damno means violation of a legal right without proof of actual loss or damage.",
    },

    {
      id: "q4",
      question:
        "Damnum sine injuria means:",
      options: [
        {
          id: "a",
          text: "Actual damage without violation of a legal right",
        },
        {
          id: "b",
          text: "Legal injury without actual damage",
        },
        {
          id: "c",
          text: "Strict liability",
        },
        {
          id: "d",
          text: "Defamation",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Damnum sine injuria means actual loss or damage without infringement of a legal right.",
    },

    {
      id: "q5",
      question:
        "The rule in Rylands v Fletcher is associated with:",
      options: [
        {
          id: "a",
          text: "Defamation",
        },
        {
          id: "b",
          text: "Strict liability",
        },
        {
          id: "c",
          text: "Assault",
        },
        {
          id: "d",
          text: "Trespass to person",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Rylands v Fletcher is the classic authority associated with strict liability for escape of dangerous things accumulated on land.",
    },

    {
      id: "q6",
      question:
        "Negligence generally requires:",
      options: [
        {
          id: "a",
          text: "Duty, breach and resulting damage",
        },
        {
          id: "b",
          text: "Intention only",
        },
        {
          id: "c",
          text: "Written agreement",
        },
        {
          id: "d",
          text: "Criminal prosecution",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "A negligence claim generally requires a duty of care, breach of that duty, and damage caused by the breach.",
    },

    {
      id: "q7",
      question:
        "Vicarious liability most commonly arises in which relationship?",
      options: [
        {
          id: "a",
          text: "Employer and employee",
        },
        {
          id: "b",
          text: "Buyer and seller only",
        },
        {
          id: "c",
          text: "Husband and wife",
        },
        {
          id: "d",
          text: "Judge and advocate",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "An employer may be vicariously liable for torts committed by an employee in the course of employment.",
    },

    {
      id: "q8",
      question:
        "The law of defamation primarily protects a person's:",
      options: [
        {
          id: "a",
          text: "Property",
        },
        {
          id: "b",
          text: "Reputation",
        },
        {
          id: "c",
          text: "Contractual rights",
        },
        {
          id: "d",
          text: "Tax liability",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Defamation protects a person's reputation against unjustified defamatory statements.",
    },

    {
      id: "q9",
      question:
        "Public nuisance generally affects:",
      options: [
        {
          id: "a",
          text: "Only one individual",
        },
        {
          id: "b",
          text: "The public or a section of the public",
        },
        {
          id: "c",
          text: "Only government property",
        },
        {
          id: "d",
          text: "Only contractual rights",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Public nuisance concerns interference with rights enjoyed by the public or a substantial section of the public.",
    },

    {
      id: "q10",
      question:
        "The most common civil remedy in tort is:",
      options: [
        {
          id: "a",
          text: "Imprisonment",
        },
        {
          id: "b",
          text: "Damages",
        },
        {
          id: "c",
          text: "Deportation",
        },
        {
          id: "d",
          text: "Criminal fine only",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Damages are the most common remedy in tort, though injunctions and other remedies may also be available.",
    },

    {
      id: "q11",
      question:
        "Which defence may apply when the plaintiff voluntarily accepted a known risk?",
      options: [
        {
          id: "a",
          text: "Volenti non fit injuria",
        },
        {
          id: "b",
          text: "Res judicata",
        },
        {
          id: "c",
          text: "Estoppel",
        },
        {
          id: "d",
          text: "Novation",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Volenti non fit injuria means that no injury is done to one who voluntarily consents to the risk.",
    },

    {
      id: "q12",
      question:
        "Trespass to land is generally:",
      options: [
        {
          id: "a",
          text: "Actionable per se",
        },
        {
          id: "b",
          text: "Actionable only if actual damage is proved",
        },
        {
          id: "c",
          text: "Always a criminal offence",
        },
        {
          id: "d",
          text: "A contractual remedy",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Trespass to land is generally actionable per se, meaning proof of actual damage is not necessary.",
    },

    {
      id: "q13",
      question:
        "Which tort involves an unlawful threat of immediate physical harm?",
      options: [
        {
          id: "a",
          text: "Battery",
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
          text: "Defamation",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Assault involves creating a reasonable apprehension of imminent unlawful physical contact.",
    },

    {
      id: "q14",
      question:
        "Battery generally involves:",
      options: [
        {
          id: "a",
          text: "Unlawful physical contact",
        },
        {
          id: "b",
          text: "Damage to reputation",
        },
        {
          id: "c",
          text: "Interference with land only",
        },
        {
          id: "d",
          text: "A breach of contract",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Battery is the intentional and unlawful application of physical force to another person.",
    },

    {
      id: "q15",
      question:
        "False imprisonment refers to:",
      options: [
        {
          id: "a",
          text: "Wrongful restraint of a person's freedom of movement",
        },
        {
          id: "b",
          text: "Damage to property",
        },
        {
          id: "c",
          text: "Defamatory publication",
        },
        {
          id: "d",
          text: "Negligent driving",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "False imprisonment is total restraint of a person's freedom of movement without lawful justification.",
    },

    {
      id: "q16",
      question:
        "Which of the following is closely associated with the neighbour principle?",
      options: [
        {
          id: "a",
          text: "Donoghue v Stevenson",
        },
        {
          id: "b",
          text: "Rylands v Fletcher",
        },
        {
          id: "c",
          text: "Ashby v White",
        },
        {
          id: "d",
          text: "Gloucester Grammar School case",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Donoghue v Stevenson is the leading case associated with the neighbour principle and the modern duty of care.",
    },

    {
      id: "q17",
      question:
        "In contributory negligence, the plaintiff:",
      options: [
        {
          id: "a",
          text: "May have contributed to the damage suffered",
        },
        {
          id: "b",
          text: "Must always lose the entire claim",
        },
        {
          id: "c",
          text: "Is always criminally liable",
        },
        {
          id: "d",
          text: "Must have entered into a contract",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Contributory negligence refers to conduct by the plaintiff that contributes to the harm suffered and may reduce recoverable damages.",
    },

    {
      id: "q18",
      question:
        "Private nuisance usually concerns interference with:",
      options: [
        {
          id: "a",
          text: "Use or enjoyment of land",
        },
        {
          id: "b",
          text: "A criminal prosecution",
        },
        {
          id: "c",
          text: "A written contract",
        },
        {
          id: "d",
          text: "Election rights",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Private nuisance generally involves unreasonable interference with a person's use or enjoyment of land.",
    },

    {
      id: "q19",
      question:
        "Which doctrine means 'the thing speaks for itself'?",
      options: [
        {
          id: "a",
          text: "Res ipsa loquitur",
        },
        {
          id: "b",
          text: "Volenti non fit injuria",
        },
        {
          id: "c",
          text: "Actus non facit reum nisi mens sit rea",
        },
        {
          id: "d",
          text: "Res judicata",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Res ipsa loquitur means 'the thing speaks for itself' and may assist in proving negligence in appropriate circumstances.",
    },

    {
      id: "q20",
      question:
        "Malice is generally:",
      options: [
        {
          id: "a",
          text: "Always essential in every tort",
        },
        {
          id: "b",
          text: "Generally not essential unless the particular tort requires it",
        },
        {
          id: "c",
          text: "The same as breach of contract",
        },
        {
          id: "d",
          text: "Required only for negligence",
        },
      ],
      correctOptionIds: ["b"],
      explanation:
        "Malice is not generally an essential element of tortious liability unless it is specifically relevant to the particular cause of action.",
    },
  ],
};

export default mockTest1;