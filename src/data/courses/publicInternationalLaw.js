import { createChapterModel } from "../../models/ChapterModel";
import { createCourseModel } from "../../models/CourseModel";

export const PUBLIC_INTERNATIONAL_LAW_COURSE_ID =
  "public-international-law";

export const publicInternationalLawCourse = createCourseModel({
  id: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
  title: "Public International Law",
  slug: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
  shortDescription:
    "Study the foundations, sources, subjects and institutions of public international law, including treaties, jurisdiction, dispute settlement and the United Nations.",
  description:
    "A structured eight-unit course covering the nature, origin and basis of international law; its sources and subjects; the relationship between international and municipal law; recognition and jurisdiction; nationality, extradition and asylum; treaties; peaceful dispute settlement; and the United Nations.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 7,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Public International Law Course | NagarikSuraksha",
    description:
      "Study public international law through eight structured units covering sources, States, jurisdiction, treaties, dispute settlement and the United Nations.",
    focusKeyword: "public international law course",
    secondaryKeywords: [
      "international law notes",
      "sources of international law",
      "law of treaties",
      "United Nations law",
      "LLB international law course",
    ],
    canonicalUrl: "/courses/public-international-law",
    robots: {
      index: false,
      follow: false,
    },
    sitemap: {
      include: false,
    },
  },
});

const units = [
  {
    title: "Nature, Origin and Basis of International Law",
    shortDescription:
      "A foundational study of the meaning, scope, historical development, legal character and binding force of public international law.",
    overview:
      "Public international law regulates relations among States and, increasingly, international organisations, individuals and other entities possessing international rights or duties. This chapter introduces its meaning and scope, distinguishes it from private international law and municipal law, traces its development from early civilisations to the United Nations era, and examines the principal explanations for its binding force. It also addresses the long-standing debate over whether international law is truly law despite the absence of a world legislature, executive and compulsory court system comparable to those found within a State.",
    learningObjectives: [
      "Define public international law and explain its scope and principal characteristics.",
      "Distinguish public international law from private international law, municipal law, international morality and international comity.",
      "Trace the major stages in the historical development of international law.",
      "Explain the contribution of natural-law and positivist thought to international legal doctrine.",
      "Evaluate the Austinian criticism that international law is merely positive morality.",
      "Compare consent, common will, pacta sunt servanda, necessity, community-interest and other theories of binding force.",
      "Explain how international rules are created, interpreted, applied and enforced in a decentralised legal order.",
      "Assess the contemporary legal character of international law using treaties, custom, institutions, responsibility and State practice.",
    ],
    detailedContent: `1. Meaning of Public International Law

Public international law is the body of legal rules and principles governing relations among States and other persons or entities recognised by the international legal order. Traditionally, writers described it mainly as the law regulating relations between sovereign States. Modern international law is wider. It also regulates international organisations, confers rights and duties directly upon individuals in fields such as human rights and international criminal law, and recognises limited participation by peoples, liberation movements, corporations and non-governmental bodies in particular contexts.

The word “public” distinguishes this field from private international law. The expression “international law” was popularised by Jeremy Bentham in the late eighteenth century, although rules governing relations among political communities existed long before that terminology.

International law operates whenever a legal question crosses the limits of a single national legal order or concerns the international rights, duties, powers or responsibility of its subjects. Its rules cover, among other matters, peace and security, territory, jurisdiction, diplomatic relations, treaties, the law of the sea, international organisations, human rights, humanitarian law, international crimes, the environment, trade and the peaceful settlement of disputes.

2. Public and Private International Law

Public international law governs international rights and obligations, principally those of States and international organisations. Its rules arise from recognised international sources such as treaties, custom and general principles of law.

Private international law, also called conflict of laws, is ordinarily part of a State's municipal law. It determines which court has jurisdiction, which country's law applies and whether a foreign judgment should be recognised when a private dispute contains a foreign element. A cross-border marriage, contract, tort or succession dispute may therefore raise private international law, while a dispute concerning treaty obligations, State responsibility or maritime boundaries raises public international law.

The two fields can overlap. A treaty may require States to harmonise rules governing private transactions, and a domestic court may apply a treaty while deciding a private dispute. The distinction depends on the legal question and source, not merely on the presence of more than one country.

3. International Law and Municipal Law

Municipal or domestic law governs persons and institutions within a State. It normally operates through a central legislature, executive, police system and hierarchy of courts. International law, by contrast, is largely decentralised. States participate both in making its rules and in applying them. There is no universal legislature with unlimited authority, no single executive government and no court possessing compulsory jurisdiction over every international dispute.

This structural difference does not make international rules non-legal. International law identifies legal obligations, provides institutions and procedures for their interpretation, attributes responsibility for breach and prescribes consequences such as cessation, assurances of non-repetition and reparation. The manner in which international rules enter and operate within domestic law varies among national constitutional systems and is studied more fully in Unit 3.

4. International Law, Morality and Comity

Law and morality may influence one another, but they are not identical. A rule of international morality is supported by ethical judgment; a rule of international law derives its legal status from a recognised law-creating process. Many legal rules reflect moral values, yet their application depends on legal criteria rather than moral approval alone.

International comity refers to courtesy, convenience or reciprocal accommodation followed by States without a sense of legal obligation. Diplomatic courtesies and ceremonial practices may be observed consistently without becoming law. The decisive distinction between a customary legal rule and comity is opinio juris—the belief that the practice is carried out because the law requires or permits it.

5. Historical Foundations

Rules governing envoys, warfare, alliances, trade and treaties existed in ancient civilisations, including India, Mesopotamia, Egypt, Greece, Rome and China. Ancient Indian writings and political practice discussed diplomatic missions, alliances, peaceful relations and rules of warfare. These early practices were not a universal legal system in the modern sense, but they demonstrate that organised political communities long recognised the need for inter-polity rules.

Roman ideas of jus gentium and natural reason influenced later legal thought. During the medieval period, canon law, maritime usages, commercial practice and relations among kingdoms contributed to common standards. Islamic legal scholarship also developed rules concerning treaties, envoys, warfare and relations with other political communities.

6. Emergence of the Modern State System

The rise of territorially organised sovereign States in Europe profoundly shaped modern international law. The Peace of Westphalia of 1648 is commonly used as a historical marker for the consolidation of sovereign Statehood, although international law developed gradually and the importance of Westphalia should not be overstated.

Hugo Grotius's work in the seventeenth century systematised rules concerning war, peace, navigation and relations among States. Natural-law reasoning initially played a major role. During the eighteenth and nineteenth centuries, positivism, State consent, diplomatic practice and treaty-making became increasingly prominent.

The nineteenth century witnessed the growth of multilateral conferences, permanent diplomacy, international river commissions, rules of warfare and early international administrative unions. Arbitration developed as a method of resolving disputes, illustrated by the Alabama Claims arbitration. The Hague Peace Conferences of 1899 and 1907 promoted peaceful settlement and codification of the laws of war.

7. The League of Nations and the United Nations Era

After the First World War, the League of Nations and the Permanent Court of International Justice introduced more organised forms of collective security and judicial settlement. The League did not prevent the Second World War, but its institutions and experience influenced the post-1945 international order.

The Charter of the United Nations, signed in 1945, established a legal and institutional framework based on sovereign equality, good-faith performance of Charter obligations, peaceful settlement of disputes, and the prohibition on the threat or use of force subject to the Charter. Decolonisation greatly expanded the number and diversity of States participating in international law. The period also saw rapid development of human rights, humanitarian law, international criminal law, trade law, environmental law, the law of the sea and international organisations.

Modern international law is no longer concerned only with bilateral coexistence. It also addresses shared interests of the international community, including self-determination, prevention of genocide, protection of fundamental human rights, environmental cooperation and obligations owed to the international community as a whole.

8. Is International Law Really Law?

John Austin defined positive law as the command of a determinate political superior backed by sanctions. Because sovereign States do not habitually obey a common superior, he treated much of international law as “positive international morality.” This criticism draws attention to the decentralised nature of the international system.

The Austinian view is considered too narrow for several reasons. Not all domestic law is reducible to commands; constitutional rules and power-conferring rules do not fit comfortably within that model. International rules are accepted and invoked by States as law, applied by national and international courts, embodied in treaties and institutional instruments, and accompanied by legal consequences for breach. The absence of a central sovereign affects the structure and enforcement of international law, but it does not eliminate its normative legal character.

Article 38 of the Statute of the International Court of Justice directs the Court to decide disputes in accordance with international law by applying conventions, custom, general principles and subsidiary means. The UN Charter repeatedly speaks in terms of legal obligations. These instruments reflect an organised legal order rather than a system of courtesy alone.

9. Natural-Law Theory

Natural-law theory associates the authority of international law with reason, justice and principles inherent in human nature or the moral order. Early writers considered certain standards binding independently of a sovereign command or a State's particular consent.

Natural law helped develop ideas of universal obligation and limits on power. Its difficulty lies in determining the content of supposedly universal principles and separating legal propositions from personal moral judgment. Modern international law retains elements of universality, especially in peremptory norms and fundamental human rights, while requiring recognised legal processes to identify rules.

10. Positivist and Consent Theories

Positivism explains international law through ascertainable sources and the conduct or consent of States rather than abstract morality. Treaties bind parties because they consent to them, and customary law develops through general practice accepted as law.

Consent is important but cannot fully explain every obligation. A newly formed State is not free to reject the entire body of general international law. A State may be bound by a customary rule without having expressly agreed to it, subject to limited doctrines such as persistent objection. Peremptory norms cannot be displaced by treaty. Modern explanations therefore treat consent as a central feature of many rules, not the sole foundation of the legal order.

11. Common Will and Self-Limitation

The common-will theory associates international obligation with the collective will of States expressed through agreement and practice. The self-limitation theory argues that a sovereign State may voluntarily restrict its freedom and is bound by that undertaking.

Both theories recognise the significance of sovereign participation, but they face a circular problem if a State could simply withdraw its will whenever compliance became inconvenient. A legal obligation must possess continuity beyond a momentary preference. International law accordingly regulates the creation, interpretation, modification and termination of obligations rather than leaving them to unilateral convenience.

12. Pacta Sunt Servanda and Good Faith

Pacta sunt servanda means that agreements must be kept. It is a foundational principle of treaty law and is closely connected with good faith. Once a treaty is validly in force, a party must perform it in good faith and cannot ordinarily invoke its internal law as justification for non-performance.

The principle explains why consent, once validly given, produces continuing legal obligation. Yet pacta sunt servanda itself cannot be explained solely by the particular treaty whose force it supports. It functions as a basic rule recognised by the international legal order.

13. Necessity, Social Interdependence and Community Interest

Another explanation rests on necessity and social interdependence. States cannot maintain stable relations, communication, trade, security or environmental protection without common rules. Regular international intercourse requires predictability and reciprocal restraint.

Community-interest approaches emphasise that contemporary international law protects values extending beyond bilateral bargains. Certain obligations are owed to the international community as a whole, and certain peremptory norms permit no derogation. This development qualifies an exclusively consent-based picture without abolishing the sovereign equality of States.

14. Enforcement and Compliance

International law is enforced through multiple mechanisms rather than a single world police force. These include diplomatic protest and negotiation; reciprocal action; retorsion and lawful countermeasures; national courts; arbitration and international adjudication based on jurisdiction; monitoring and compliance bodies; measures by international organisations; collective measures under the UN Charter; and rules of State and individual responsibility.

Sanctions are not the only reason legal systems are obeyed. States comply because of good faith, reciprocity, reputation, institutional participation, domestic implementation, economic and political interests, legitimacy and the need for predictable relations. Enforcement is uneven and powerful States may resist accountability, but imperfect enforcement exists in domestic systems as well and does not by itself deny the existence of law.

15. Essential Characteristics of the International Legal Order

Public international law is decentralised, primarily horizontal and strongly influenced by sovereign equality. Its rules emerge through treaty-making, customary practice and other recognised sources. Jurisdiction and enforcement frequently depend on State consent or an accepted legal basis. At the same time, international organisations and specialised regimes provide increasing institutional structure.

The system combines coexistence, cooperation and community protection. It preserves areas of State freedom while imposing legal limits; it coordinates shared activities and supplies methods for resolving disputes; and it protects certain common values. International law should therefore be understood neither as a complete world government nor as mere morality, but as a distinct legal system adapted to international society.

16. Method for Answering Examination Problems

For a descriptive question, begin with a concise definition, state the traditional and modern scope, distinguish related concepts, describe historical development, present the principal theories, evaluate Austin's criticism and conclude with contemporary evidence of legal character.

For a problem question, identify the relevant international actors, the alleged right or obligation, the possible source of the rule, the forum or enforcement mechanism, and the legal consequence of breach. Avoid treating political difficulty or weak enforcement as proof that no law exists.`,
    keyPoints: [
      "Public international law governs international rights, duties, powers and responsibility, principally among States but also involving other recognised subjects.",
      "Private international law is generally domestic conflict-of-laws rules for private disputes containing a foreign element.",
      "International morality and comity may influence conduct, but legal rules require recognition through accepted international law-making processes.",
      "Early diplomatic, treaty and warfare practices preceded the modern sovereign-State system.",
      "The Peace of Westphalia is a useful historical marker, not the single moment at which international law was created.",
      "The UN Charter transformed the post-1945 order through sovereign equality, peaceful settlement, good faith and limits on the use of force.",
      "Austin's command theory highlights decentralisation but does not adequately explain the accepted legal character of international rules.",
      "Natural-law theory stresses reason and universal justice; positivism stresses ascertainable sources, practice and consent.",
      "State consent explains many treaty and customary obligations but is not the exclusive basis of all contemporary international law.",
      "Pacta sunt servanda requires treaties in force to be performed in good faith.",
      "Community-interest approaches recognise obligations and peremptory norms protecting interests beyond individual bilateral bargains.",
      "International law uses decentralised enforcement through diplomacy, reciprocity, domestic institutions, adjudication, international organisations and responsibility mechanisms.",
      "Uneven enforcement does not convert international law into morality or courtesy.",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Preamble",
      "Charter of the United Nations, 1945 — Articles 1–2",
      "Statute of the International Court of Justice — Article 38(1)",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 26–27",
    ],
    importantCases: [
      {
        caseName: "S.S. Lotus (France v. Turkey)",
        citation: "PCIJ, Series A, No. 10 (1927)",
        principle:
          "International-law restrictions on State independence must be established through applicable legal rules; the decision is central to debates about sovereignty and consent.",
        summary:
          "The Permanent Court examined competing claims of criminal jurisdiction following a collision on the high seas and discussed the structure of international legal obligation.",
      },
      {
        caseName: "North Sea Continental Shelf Cases",
        citation: "ICJ Reports 1969, p. 3",
        principle:
          "Customary international law requires sufficiently general practice accompanied by acceptance of that practice as law (opinio juris).",
        summary:
          "The ICJ considered whether the equidistance rule had become customary law and clarified the legal element required beyond repeated conduct.",
      },
      {
        caseName: "Military and Paramilitary Activities in and against Nicaragua (Nicaragua v. United States)",
        citation: "ICJ Reports 1986, p. 14",
        principle:
          "Treaty rules and customary international law may coexist, and customary obligations remain legally applicable when their requirements are proved.",
        summary:
          "The ICJ applied customary rules governing non-use of force and non-intervention, demonstrating the independent legal operation of custom.",
      },
      {
        caseName: "Reparation for Injuries Suffered in the Service of the United Nations",
        citation: "ICJ Reports 1949, p. 174",
        principle:
          "The United Nations possesses international legal personality and capacities necessary for the performance of its functions.",
        summary:
          "The advisory opinion illustrates the modern expansion of international legal personality beyond States alone.",
      },
    ],
    examFocus:
      "For a question on whether international law is true law, define the field, explain its decentralised structure, present Austin's criticism, evaluate that criticism through sources, institutions, responsibility and enforcement, and reach a balanced conclusion. For a question on binding force, compare natural law, positivism, consent, common will, self-limitation, pacta sunt servanda, necessity and community interest instead of relying on a single theory.",
    revisionNotes:
      "Public international law is a decentralised legal system governing international rights and duties. Its history extends from early inter-polity practices through the sovereign-State system, the Hague and League periods and the modern UN order. It differs from private international law, morality and comity. Its legal force is explained through overlapping theories including natural law, consent, custom, pacta sunt servanda, necessity and community interest. Despite the absence of a world sovereign, recognised sources, adjudication, responsibility and multiple compliance mechanisms establish its legal character.",
  },
  {
    title: "Sources of International Law",
    shortDescription:
      "Treaties, custom, general principles, judicial decisions, scholarly writings and other law-forming materials.",
    overview:
      "This unit examines the recognised sources used to identify rules of international law and the interaction among treaty, custom and general legal principles.",
    detailedContent:
      "Article 38(1) of the Statute of the International Court of Justice; international conventions; international custom as general practice accepted as law; State practice and opinio juris; persistent objection; regional and local custom; general principles of law; judicial decisions and teachings as subsidiary means; resolutions of international organisations; unilateral acts; soft law; equity; jus cogens obligations; and questions of hierarchy and conflict among sources.",
    keyPoints: [
      "Article 38(1) of the ICJ Statute",
      "Treaties and conventions",
      "State practice and opinio juris",
      "General principles of law",
      "Subsidiary means and soft law",
      "Jus cogens and hierarchy",
    ],
    provisions: [
      "Statute of the International Court of Justice — Article 38",
      "Vienna Convention on the Law of Treaties, 1969 — Article 53",
    ],
  },
  {
    title:
      "Subjects of International Law and Relation with Municipal Law",
    shortDescription:
      "International legal personality and the interaction between international and domestic legal systems.",
    overview:
      "This unit identifies the entities capable of possessing international rights and duties and explains how international law operates within municipal legal systems.",
    detailedContent:
      "Meaning of international legal personality; States as primary subjects; international organisations; individuals; peoples and self-determination; corporations, non-governmental organisations and other participants; acquisition and extent of rights, duties and capacity; monism and dualism; transformation, incorporation and adoption; international-law rules in domestic courts; treaty implementation; customary international law; conflict between international and municipal law; and the approach of the Constitution and courts of India.",
    keyPoints: [
      "International legal personality",
      "States and international organisations",
      "Individuals and other participants",
      "Monism and dualism",
      "Incorporation and transformation",
      "Indian constitutional approach",
    ],
    provisions: [
      "Constitution of India — Articles 51(c), 73, 246 and 253",
      "Charter of the United Nations, 1945",
    ],
  },
  {
    title: "Recognition and State Jurisdiction",
    shortDescription:
      "Recognition of States and governments and the bases, limits and immunities connected with State jurisdiction.",
    overview:
      "This unit studies recognition in international law and the principles determining when a State may prescribe, adjudicate and enforce its laws.",
    detailedContent:
      "Statehood and recognition; declaratory and constitutive theories; recognition de facto and de jure; express and implied recognition; conditional recognition; recognition of governments, belligerency and insurgency; legal consequences and withdrawal; non-recognition; territorial, nationality, passive-personality, protective and universal jurisdiction; conflicts of jurisdiction; extraterritorial jurisdiction; enforcement limits; sovereign immunity; diplomatic and consular immunities; and jurisdiction over ships and aircraft.",
    keyPoints: [
      "Criteria of Statehood",
      "Declaratory and constitutive theories",
      "De facto and de jure recognition",
      "Bases of State jurisdiction",
      "Extraterritorial jurisdiction",
      "State and diplomatic immunities",
    ],
    provisions: [
      "Montevideo Convention on the Rights and Duties of States, 1933 — Article 1",
      "Vienna Convention on Diplomatic Relations, 1961",
      "Vienna Convention on Consular Relations, 1963",
    ],
  },
  {
    title: "Nationality, Extradition and Asylum",
    shortDescription:
      "Nationality, statelessness, diplomatic protection, extradition and territorial or diplomatic asylum.",
    overview:
      "This unit examines the legal bond of nationality and the rules governing surrender and protection of persons across national boundaries.",
    detailedContent:
      "Meaning and importance of nationality; acquisition by birth, descent, naturalisation, registration and incorporation of territory; loss, renunciation and deprivation; dual nationality and statelessness; nationality of corporations; genuine-link principle; diplomatic protection; meaning and basis of extradition; extradition treaties and domestic law; double criminality, speciality, political-offence exception, non bis in idem, human-rights limitations and rule of non-inquiry; meaning and forms of asylum; territorial and diplomatic asylum; refugees, non-refoulement and distinction between asylum and extradition.",
    keyPoints: [
      "Acquisition and loss of nationality",
      "Dual nationality and statelessness",
      "Diplomatic protection",
      "Principles of extradition",
      "Territorial and diplomatic asylum",
      "Refugees and non-refoulement",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948 — Articles 14–15",
      "Convention Relating to the Status of Refugees, 1951 — Article 33",
      "Extradition Act, 1962 (India)",
    ],
  },
  {
    title: "Treaties",
    shortDescription:
      "Formation, application, interpretation, validity, amendment, termination and suspension of treaties.",
    overview:
      "This unit studies the law of treaties with primary reference to the Vienna Convention on the Law of Treaties, 1969.",
    detailedContent:
      "Meaning and classification of treaties; treaty-making capacity and authority; negotiation, adoption and authentication; signature, ratification, accession and entry into force; reservations and objections; pacta sunt servanda and good-faith performance; treaties and third States; interpretation under Articles 31–33; amendment and modification; invalidity arising from error, fraud, corruption, coercion or conflict with jus cogens; termination, withdrawal and suspension; material breach, supervening impossibility and fundamental change of circumstances; depositaries and registration; and treaty-making and implementation in India.",
    keyPoints: [
      "Formation and entry into force",
      "Reservations and objections",
      "Pacta sunt servanda",
      "Treaty interpretation",
      "Invalidity and jus cogens",
      "Termination and suspension",
    ],
    provisions: [
      "Vienna Convention on the Law of Treaties, 1969",
      "Charter of the United Nations, 1945 — Article 102",
      "Constitution of India — Article 253",
    ],
  },
  {
    title: "Amicable Means of Settlement of Disputes",
    shortDescription:
      "Negotiation, good offices, mediation, inquiry, conciliation, arbitration, judicial settlement and regional arrangements.",
    overview:
      "This unit explains the obligation to settle international disputes peacefully and compares diplomatic, political, arbitral and judicial methods.",
    detailedContent:
      "Meaning of an international dispute; prohibition on threat or use of force and the duty of peaceful settlement; negotiation; consultation; good offices; mediation; inquiry and fact-finding; conciliation; arbitration; judicial settlement before the International Court of Justice and other tribunals; jurisdiction based on consent; contentious and advisory proceedings; settlement through regional agencies or arrangements; role of the Security Council and General Assembly; differences among binding and non-binding procedures; and selection of an appropriate settlement method.",
    keyPoints: [
      "Duty of peaceful settlement",
      "Negotiation and consultation",
      "Good offices and mediation",
      "Inquiry and conciliation",
      "Arbitration and judicial settlement",
      "United Nations and regional mechanisms",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 2(3), 2(4) and 33–38",
      "Statute of the International Court of Justice",
      "Hague Conventions for the Pacific Settlement of International Disputes",
    ],
  },
  {
    title:
      "United Nations: Purposes, Principles, Membership and Principal Organs",
    shortDescription:
      "The constitutional structure of the United Nations, its membership and six principal organs.",
    overview:
      "This unit studies the establishment, purposes and governing principles of the United Nations and the composition and functions of its principal organs.",
    detailedContent:
      "Historical background and establishment of the United Nations; legal personality; purposes under Article 1; principles under Article 2; original and admitted members; admission, suspension and expulsion; representation and withdrawal questions; General Assembly composition, voting and functions; Security Council composition, voting, veto and primary responsibility for international peace and security; Economic and Social Council; Trusteeship Council; International Court of Justice; Secretariat and Secretary-General; subsidiary organs and specialised agencies; Charter amendment; privileges and immunities; and contemporary questions of United Nations reform.",
    keyPoints: [
      "Establishment and legal personality of the UN",
      "Purposes and principles",
      "Membership, suspension and expulsion",
      "General Assembly and Security Council",
      "ECOSOC and Trusteeship Council",
      "International Court of Justice and Secretariat",
      "Voting, veto and UN reform",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 1–2",
      "Charter of the United Nations, 1945 — Articles 3–6",
      "Charter of the United Nations, 1945 — Articles 7–101",
      "Statute of the International Court of Justice",
    ],
  },
];

export const publicInternationalLawChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${PUBLIC_INTERNATIONAL_LAW_COURSE_ID}-unit-${index + 1}`,
      courseId: PUBLIC_INTERNATIONAL_LAW_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: unit.learningObjectives || [
        `Explain the principal international-law rules covered in Unit ${index + 1}.`,
        "Apply the relevant international instruments and legal principles to problems.",
        "Identify important distinctions, doctrines and examination-focused concepts.",
      ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      importantCases: unit.importantCases || [],
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core international instrument or statutory reading for Unit ${index + 1}.`,
      })),
      examFocus:
        unit.examFocus ||
        "Define the governing doctrine, distinguish related concepts, apply the relevant treaty or customary rule, and support the answer with authoritative international instruments and leading principles.",
      revisionNotes: unit.revisionNotes || unit.keyPoints.join("; "),
      notes: unit.detailedContent,
      chapterNumber: index + 1,
      displayOrder: index + 1,
      quizRequired: true,
      passingPercentage: 80,
      maximumAttempts: 3,
      published: true,
      status: "published",
      previewAvailable: false,
    }),
);
