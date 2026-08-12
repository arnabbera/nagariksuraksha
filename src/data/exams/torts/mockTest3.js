const mockTest3 = {
  id: "torts-mock-3",

  courseId:
    "law-of-torts-mv-and-cp-laws",

  title:
    "Law of Torts – Mock Test 3",

  description:
    "Third certification practice test covering advanced tort principles, constitutional tort, state liability, professional negligence, product liability, consumer-related liability and motor vehicle concepts.",

  testNumber: 3,

  totalQuestions: 20,

  marksPerQuestion: 2,

  maximumMarks: 40,

  passPercentage: 50,

  durationMinutes: 30,

  questions: [
    {
      id: "TORT-M3-Q001",
      question:
        "The principle of absolute liability in India is most closely associated with which case?",
      options: [
        {
          id: "a",
          text: "M.C. Mehta v Union of India",
        },
        {
          id: "b",
          text: "Ashby v White",
        },
        {
          id: "c",
          text: "Donoghue v Stevenson",
        },
        {
          id: "d",
          text: "The Wagon Mound",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "M.C. Mehta v Union of India developed the rule of absolute liability for enterprises engaged in hazardous or inherently dangerous activities in India.",
    },

    {
      id: "TORT-M3-Q002",
      question:
        "Absolute liability differs from the traditional rule of strict liability because absolute liability:",
      options: [
        {
          id: "a",
          text: "Generally does not recognise the traditional exceptions available under strict liability",
        },
        {
          id: "b",
          text: "Requires proof of a written contract",
        },
        {
          id: "c",
          text: "Applies only to defamation",
        },
        {
          id: "d",
          text: "Always requires criminal intention",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "The Indian doctrine of absolute liability imposes a stricter standard on hazardous enterprises and does not ordinarily permit the traditional Rylands v Fletcher exceptions.",
    },

    {
      id: "TORT-M3-Q003",
      question:
        "A constitutional tort claim generally arises when:",
      options: [
        {
          id: "a",
          text: "State action violates a fundamental or constitutional right and public law compensation is sought",
        },
        {
          id: "b",
          text: "Two private parties breach a commercial contract",
        },
        {
          id: "c",
          text: "A company fails to pay a tax",
        },
        {
          id: "d",
          text: "A buyer negotiates a lower price",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Constitutional tort jurisprudence concerns public law remedies, including compensation, for violations of constitutional rights by State authorities.",
    },

    {
      id: "TORT-M3-Q004",
      question:
        "Which principle is particularly relevant when determining professional negligence by a doctor?",
      options: [
        {
          id: "a",
          text: "Whether the professional exercised the reasonable skill and care expected of an ordinarily competent practitioner",
        },
        {
          id: "b",
          text: "Whether the patient signed any document whatsoever",
        },
        {
          id: "c",
          text: "Whether the doctor guaranteed a cure",
        },
        {
          id: "d",
          text: "Whether the hospital made a profit",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Professional negligence is generally assessed against the standard of reasonable skill and care expected from an ordinarily competent practitioner in that field.",
    },

    {
      id: "TORT-M3-Q005",
      question:
        "In medical negligence, informed consent principally requires:",
      options: [
        {
          id: "a",
          text: "Meaningful disclosure sufficient for a patient to make an informed decision about treatment",
        },
        {
          id: "b",
          text: "Consent from every hospital employee",
        },
        {
          id: "c",
          text: "A guarantee that treatment will succeed",
        },
        {
          id: "d",
          text: "Permission from the police in every case",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Informed consent requires adequate disclosure of material information so that the patient can make a meaningful decision regarding treatment.",
    },

    {
      id: "TORT-M3-Q006",
      question:
        "A manufacturer may face product liability where:",
      options: [
        {
          id: "a",
          text: "A defective product causes legally recognised harm",
        },
        {
          id: "b",
          text: "A product is sold at a discount",
        },
        {
          id: "c",
          text: "A customer changes their mind",
        },
        {
          id: "d",
          text: "A retailer changes its logo",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Product liability may arise where a defect in manufacture, design, warning or other legally relevant aspect of a product causes harm.",
    },

    {
      id: "TORT-M3-Q007",
      question:
        "Failure to provide an adequate warning about a foreseeable danger associated with a product may potentially amount to:",
      options: [
        {
          id: "a",
          text: "A failure-to-warn form of product liability",
        },
        {
          id: "b",
          text: "False imprisonment",
        },
        {
          id: "c",
          text: "Trespass to land",
        },
        {
          id: "d",
          text: "Malicious prosecution",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "A manufacturer or supplier may face liability where a product carries foreseeable risks and adequate warnings or instructions are not provided.",
    },

    {
      id: "TORT-M3-Q008",
      question:
        "In a motor accident claim, the concept of 'just compensation' generally means:",
      options: [
        {
          id: "a",
          text: "Compensation assessed fairly on the basis of legally relevant loss and circumstances",
        },
        {
          id: "b",
          text: "A fixed identical amount in every case",
        },
        {
          id: "c",
          text: "Only reimbursement of court fees",
        },
        {
          id: "d",
          text: "A criminal fine payable to the police",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Motor accident compensation is intended to be just and fair, taking into account legally relevant factors such as income, dependency, disability and other losses.",
    },

    {
      id: "TORT-M3-Q009",
      question:
        "Where a road accident victim suffers permanent disability, assessment of compensation may consider:",
      options: [
        {
          id: "a",
          text: "The effect of the disability on earning capacity and quality of life",
        },
        {
          id: "b",
          text: "Only the cost of the vehicle",
        },
        {
          id: "c",
          text: "Only the driver's age",
        },
        {
          id: "d",
          text: "Only whether a criminal case was filed",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Permanent disability may affect earning capacity, future prospects and quality of life, all of which may be relevant in compensation assessment.",
    },

    {
      id: "TORT-M3-Q010",
      question:
        "An insurer's liability in a motor accident claim is ordinarily determined with reference to:",
      options: [
        {
          id: "a",
          text: "The applicable statute, policy terms and legally recognised defences",
        },
        {
          id: "b",
          text: "Only the colour of the vehicle",
        },
        {
          id: "c",
          text: "Only the victim's occupation",
        },
        {
          id: "d",
          text: "Only the place of vehicle manufacture",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "The insurer's liability depends on the statutory framework, the insurance policy and any legally available defences.",
    },

    {
      id: "TORT-M3-Q011",
      question:
        "When several independent wrongdoers each contribute to the same indivisible injury, the law may treat them as:",
      options: [
        {
          id: "a",
          text: "Concurrent tortfeasors",
        },
        {
          id: "b",
          text: "Arbitrators",
        },
        {
          id: "c",
          text: "Trustees only",
        },
        {
          id: "d",
          text: "Legislators",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Concurrent tortfeasors may independently contribute to the same damage, potentially giving rise to liability for the indivisible harm.",
    },

    {
      id: "TORT-M3-Q012",
      question:
        "A public authority exercising statutory power may still incur liability where:",
      options: [
        {
          id: "a",
          text: "It acts negligently or unlawfully outside the protection provided by the statute",
        },
        {
          id: "b",
          text: "It merely performs any statutory function",
        },
        {
          id: "c",
          text: "It employs more than ten people",
        },
        {
          id: "d",
          text: "Its office is located on government land",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Statutory power does not automatically immunise a public authority from liability for negligent or unlawful conduct outside the protection afforded by law.",
    },

    {
      id: "TORT-M3-Q013",
      question:
        "The traditional distinction between sovereign and non-sovereign functions is most relevant to:",
      options: [
        {
          id: "a",
          text: "State liability in tort",
        },
        {
          id: "b",
          text: "Defamation between private parties",
        },
        {
          id: "c",
          text: "Passing off",
        },
        {
          id: "d",
          text: "Trespass to goods",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Indian law has historically considered the sovereign/non-sovereign distinction when examining tortious liability of the State, though constitutional remedies have developed separately.",
    },

    {
      id: "TORT-M3-Q014",
      question:
        "A hospital may potentially be vicariously liable for negligent acts of its staff where:",
      options: [
        {
          id: "a",
          text: "The relationship and circumstances satisfy the principles governing institutional responsibility",
        },
        {
          id: "b",
          text: "The patient does not pay in cash",
        },
        {
          id: "c",
          text: "The hospital is located in a city",
        },
        {
          id: "d",
          text: "The patient has insurance",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Hospitals may incur liability for negligent acts of employees or others for whom the institution is legally responsible, depending on the relationship and circumstances.",
    },

    {
      id: "TORT-M3-Q015",
      question:
        "Which statement best describes economic loss in negligence?",
      options: [
        {
          id: "a",
          text: "Recovery for pure economic loss is generally subject to more restrictive principles than recovery for physical injury or property damage",
        },
        {
          id: "b",
          text: "Every financial loss is automatically recoverable",
        },
        {
          id: "c",
          text: "Financial loss can never be recognised by law",
        },
        {
          id: "d",
          text: "Economic loss is relevant only in criminal proceedings",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Courts commonly apply stricter controls to claims for pure economic loss because of concerns about potentially indeterminate liability.",
    },

    {
      id: "TORT-M3-Q016",
      question:
        "Liability for negligent misstatement may arise where:",
      options: [
        {
          id: "a",
          text: "A duty of care exists in relation to information or advice and reasonable reliance causes loss",
        },
        {
          id: "b",
          text: "A statement is merely unpopular",
        },
        {
          id: "c",
          text: "The claimant owns land",
        },
        {
          id: "d",
          text: "The statement is made only in a criminal court",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Negligent misstatement liability may arise where a sufficiently proximate relationship gives rise to a duty of care and reliance on negligent advice causes loss.",
    },

    {
      id: "TORT-M3-Q017",
      question:
        "The principle of mitigation of damages requires an injured claimant to:",
      options: [
        {
          id: "a",
          text: "Take reasonable steps to avoid unnecessary increase in the loss",
        },
        {
          id: "b",
          text: "Waive the claim entirely",
        },
        {
          id: "c",
          text: "Always settle before filing proceedings",
        },
        {
          id: "d",
          text: "Prove criminal intention",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "A claimant is generally expected to take reasonable steps to mitigate loss and cannot ordinarily recover avoidable additional damage.",
    },

    {
      id: "TORT-M3-Q018",
      question:
        "Aggravated damages may be awarded where:",
      options: [
        {
          id: "a",
          text: "The defendant's conduct increases the claimant's injury to dignity, feelings or reputation in circumstances recognised by law",
        },
        {
          id: "b",
          text: "The claimant fails to prove any tort",
        },
        {
          id: "c",
          text: "A criminal conviction is mandatory",
        },
        {
          id: "d",
          text: "The parties agree not to seek damages",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Aggravated damages may compensate for additional injury caused by particularly humiliating, insulting or oppressive conduct.",
    },

    {
      id: "TORT-M3-Q019",
      question:
        "Exemplary or punitive damages, where legally permitted, are principally intended to:",
      options: [
        {
          id: "a",
          text: "Punish and deter particularly wrongful conduct rather than merely compensate loss",
        },
        {
          id: "b",
          text: "Calculate ordinary medical expenses only",
        },
        {
          id: "c",
          text: "Replace every criminal prosecution",
        },
        {
          id: "d",
          text: "Determine ownership of property",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Unlike ordinary compensatory damages, exemplary damages are exceptional and are directed toward punishment and deterrence in recognised categories.",
    },

    {
      id: "TORT-M3-Q020",
      question:
        "Where a claimant proves that a public authority's unlawful conduct directly violated a fundamental right, compensation awarded by a constitutional court is generally regarded as:",
      options: [
        {
          id: "a",
          text: "A public law remedy distinct from an ordinary private-law damages action",
        },
        {
          id: "b",
          text: "A contractual payment",
        },
        {
          id: "c",
          text: "A criminal fine payable by the claimant",
        },
        {
          id: "d",
          text: "A form of property registration",
        },
      ],
      correctOptionIds: ["a"],
      explanation:
        "Compensation for violation of fundamental rights by State authorities may be awarded as a public-law constitutional remedy, distinct from ordinary private-law tort damages.",
    },
  ],
};

export default mockTest3;