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
      "A systematic study of treaties, custom, general principles, subsidiary means and other materials used to identify rules of international law.",
    overview:
      "International law has no single universal legislature. Its rules must therefore be identified through accepted law-creating processes and authoritative legal materials. Article 38(1) of the Statute of the International Court of Justice provides the conventional starting point by referring to international conventions, international custom and general principles of law, while treating judicial decisions and the teachings of highly qualified publicists as subsidiary means. This chapter explains each category, the evidence required to establish it, the interaction among sources and the place of resolutions, unilateral acts, soft law, equity, peremptory norms and obligations owed to the international community.",
    learningObjectives: [
      "Explain the framework contained in Article 38(1) of the Statute of the International Court of Justice.",
      "Distinguish formal sources of legal obligation from evidence and subsidiary means used to determine legal rules.",
      "Explain how treaties create obligations and how treaty rules may interact with customary international law.",
      "Identify the two constituent elements of customary international law: general practice and acceptance as law.",
      "Evaluate relevant forms of State practice and evidence of opinio juris.",
      "Apply the rules relating to persistent objection, regional custom and local custom.",
      "Explain the function and method of identifying general principles of law.",
      "Assess the legal weight of judicial decisions, scholarly writings and decisions of international organisations.",
      "Explain when unilateral declarations may create international legal obligations.",
      "Distinguish binding law from soft-law instruments while recognising the latter's legal relevance.",
      "Explain equity, jus cogens, obligations erga omnes and questions of hierarchy among international rules.",
      "Use a structured method to identify the source and legal status of a claimed international rule.",
    ],
    detailedContent: `1. Meaning and Importance of Sources

The sources of international law are the recognised processes and materials through which international legal rules are created, identified and proved. Because there is no universal legislature possessing general authority over all States, the lawyer must ask both where an alleged rule comes from and what evidence establishes its legal character.

A useful distinction is drawn between formal sources and material evidence. A formal source is a law-creating process that gives a rule its legal quality, such as treaty agreement or customary law formation. Material sources or evidence help establish the existence, content and interpretation of a rule, such as diplomatic correspondence, legislation, judgments and scholarly analysis. The categories sometimes overlap, and international practice does not always use the terminology consistently.

2. Article 38(1) of the ICJ Statute

Article 38(1) directs the International Court of Justice, whose function is to decide disputes submitted to it in accordance with international law, to apply:

(a) international conventions establishing rules expressly recognised by the contesting States;
(b) international custom, as evidence of a general practice accepted as law;
(c) the general principles of law recognised by nations; and
(d) subject to Article 59, judicial decisions and the teachings of the most highly qualified publicists as subsidiary means for determining rules of law.

Article 38(2) additionally permits the Court to decide a case ex aequo et bono—according to what is fair and good—if the parties agree.

Article 38 was drafted as a direction to a court rather than as an exhaustive constitutional code for every international law-making process. Nevertheless, it is widely accepted as the principal framework for discussing sources. Later developments require attention to acts and resolutions of international organisations, unilateral acts, soft law, peremptory norms and specialised regulatory processes.

3. International Conventions and Treaties

A treaty is an international agreement governed by international law. It may be bilateral or multilateral and may be called a treaty, convention, covenant, charter, protocol, exchange of notes or another name. Its title is not decisive; legal intention, governing law and the nature of the instrument are central.

Treaties create legal obligations for their parties. The foundational rule pacta sunt servanda requires every treaty in force to be performed by its parties in good faith. A treaty generally neither creates obligations nor rights for a third State without the conditions recognised by treaty law.

Treaty law and customary law must be distinguished. A treaty binds because of the valid consent of its parties, whereas a customary rule may bind generally through practice accepted as law. The same substantive rule may exist simultaneously in both forms. A multilateral treaty may codify an existing custom, crystallise an emerging customary rule or contribute to the later development of custom if sufficiently widespread and representative practice accompanied by opinio juris follows.

4. Meaning of Customary International Law

Article 38(1)(b) describes international custom as evidence of a general practice accepted as law. Modern analysis identifies two constituent elements:

(a) a general practice; and
(b) acceptance of that practice as law, commonly called opinio juris.

Neither repeated conduct alone nor a statement of legal belief without corresponding practice ordinarily establishes a customary rule. The two elements must be separately examined, even though the same material may sometimes provide evidence relevant to both.

5. State Practice

State practice includes physical and verbal conduct of States. Relevant forms may include diplomatic acts and correspondence; executive conduct; legislation and administrative regulations; decisions of national courts; military manuals and operational conduct; treaty practice; official legal opinions; statements before international organisations; pleadings before courts; protests; votes and explanations of vote; and, in appropriate circumstances, inaction.

Practice must be attributable to the State. Conduct of executive, legislative, judicial and other State organs may all be relevant, although its weight depends on authority, clarity, consistency and context.

To support a general custom, practice must be sufficiently widespread, representative and consistent. Universal participation is not required. The participation of States specially affected by the alleged rule may carry particular significance, but no State possesses a unilateral veto over custom merely because it is powerful. The period required depends on the circumstances; no fixed duration is necessary if the practice and legal acceptance are sufficiently clear.

6. Opinio Juris

Opinio juris distinguishes legal custom from habit, convenience, courtesy and political choice. The relevant question is whether States engage in or accept the practice with a sense that international law requires, permits or authorises it.

Evidence may include official statements, diplomatic correspondence, legal opinions, government publications, national judgments, treaty provisions, conduct connected with resolutions of international organisations, pleadings and reactions to the conduct of other States. Silence or failure to react may provide evidence only where the circumstances called for a response and the State was in a position to react.

Motives may be mixed. A State may comply with a rule for legal, political and practical reasons simultaneously. The inquiry is whether acceptance as law is sufficiently established, not whether legal obligation was the sole motive.

7. Persistent Objector

A State that clearly and persistently objects to a customary rule while that rule is in the process of formation may, under the persistent-objector doctrine, avoid being bound by that rule once it emerges. The objection must be timely, maintained and known to other States.

Objection after a general rule has already formed does not ordinarily free a State from it. The doctrine cannot be used to avoid a peremptory norm of general international law. The burden rests on the objecting State to establish the required consistency and timing.

8. Regional, Local and Particular Custom

Custom may develop among a limited group of States or between two States. A party relying on regional or local custom must prove a constant and uniform practice accepted as law among the States concerned. The narrower the alleged custom, the more specifically its acceptance by the relevant States must be demonstrated.

In the Asylum case, the ICJ required Colombia to establish the alleged regional rule concerning unilateral qualification of an offence for diplomatic asylum and found that the evidence did not demonstrate a constant and uniform usage accepted as law by the relevant States.

9. General Principles of Law

General principles of law prevent gaps in the legal system and provide foundational concepts needed for coherent adjudication. Under the traditional comparative method, a principle common to the world's principal legal systems may be transposed to the international plane when compatible with the structure of international law.

Examples commonly discussed include good faith, estoppel, res judicata, reparation for legal wrong, procedural fairness, burden of proof and the principle that no one should be judge in their own cause. A domestic rule should not be mechanically transferred; the decision-maker must identify a genuinely shared principle and determine that it can appropriately operate internationally.

Principles may also be inherent in the international legal system itself, such as sovereign equality and the legal personality necessary for international institutions to perform their functions. General principles are not a licence to decide according to personal notions of fairness.

10. Judicial Decisions

Article 38(1)(d) classifies judicial decisions as subsidiary means for determining rules of law. Under Article 59, an ICJ decision is binding only between the parties and in respect of that particular case. International law therefore does not apply a formal doctrine of binding precedent identical to stare decisis in common-law systems.

Nevertheless, the ICJ and other tribunals regularly refer to earlier reasoning for consistency and legal certainty. The authority of a decision depends on the court's jurisdiction, the quality and relevance of its reasoning, its treatment of sources and its acceptance in later practice. Advisory opinions, arbitral awards, specialised tribunal decisions and national judgments may all assist in identifying or interpreting international law. National judgments may additionally constitute State practice.

11. Teachings of Publicists

The writings of highly qualified publicists are also subsidiary means, not independent legislation. Scholarly works can organise practice, trace doctrine, compare authorities and expose competing interpretations. Their weight depends on expertise, independence, methodological care, representativeness and support in primary legal materials.

Modern access to treaties, official records and judgments means that scholarship should guide the investigation rather than replace proof of practice and opinio juris. Collective expert work, including that of the International Law Commission, may be particularly influential, but its legal significance must be assessed through its mandate, methodology, reception by States and relationship to existing law.

12. Resolutions and Acts of International Organisations

The legal effect of a resolution depends on the constituent instrument of the organisation, the organ adopting it, the wording used and the applicable voting and competence rules. Some decisions are binding because a treaty grants the organ decision-making power. Other resolutions are recommendatory.

A non-binding resolution may still be legally relevant. It may provide evidence of opinio juris, record or interpret an existing rule, contribute to the development of a new customary rule, guide treaty negotiation or influence subsequent practice. Voting patterns alone must be assessed cautiously; reservations, abstentions and explanations of vote may reveal whether States regarded the text as law, aspiration or political policy.

13. Unilateral Acts of States

A State may assume a legal obligation through a clear unilateral declaration when it intends to be bound and the declaration is made publicly by an authority competent to represent the State. The Nuclear Tests cases demonstrate that good faith may require such a commitment to be respected without reciprocal acceptance by another State.

Intention is determined objectively from the language, subject matter, circumstances and authority of the speaker. Because a unilateral statement may restrict State freedom, the alleged obligation should not be inferred lightly. Political announcements, negotiating positions and vague expressions of hope ordinarily lack the required legal intention.

14. Soft Law

Soft law describes non-binding standards, declarations, guidelines, codes, principles and programmes that influence international conduct without themselves creating treaty or customary obligations. It may offer flexibility, facilitate consensus, guide institutions, shape expectations and prepare the ground for later binding rules.

Soft law must not be presented as binding merely because it is important. Its provisions may nevertheless restate existing law, provide evidence relevant to custom, influence treaty interpretation, be incorporated into binding instruments or guide domestic implementation. Each proposition must therefore be classified independently.

15. Equity and Ex Aequo et Bono

Equity may operate within the law to interpret and apply legal rules fairly, particularly where a rule directs an equitable solution. This is equity infra legem. Equity cannot ordinarily override applicable law merely because a different outcome appears fair.

Decision ex aequo et bono under Article 38(2) is different: it allows the Court to decide according to fairness beyond strict legal rules, but only with the parties' consent. The distinction protects the requirement that international disputes ordinarily be resolved according to law.

16. Jus Cogens and Obligations Erga Omnes

A peremptory norm of general international law, or jus cogens, is a norm accepted and recognised by the international community of States as a whole as one from which no derogation is permitted and which can be modified only by a later norm having the same character. Under the Vienna Convention on the Law of Treaties, a treaty conflicting with a peremptory norm is void, and the emergence of a new peremptory norm renders a conflicting existing treaty void and terminated.

Obligations erga omnes are obligations owed to the international community as a whole. All States have a legal interest in their protection. Jus cogens concerns hierarchical superiority and non-derogability, while erga omnes concerns the direction and legal interest of the obligation. The concepts overlap but are not identical.

17. Hierarchy and Conflict Among Sources

Article 38 does not establish a simple ranking in which treaties always prevail over custom or custom always prevails over general principles. Treaty and custom may coexist. As between particular parties, ordinary conflict rules include lex specialis, lex posterior and interpretation aimed at harmonisation.

Some superior rules affect this otherwise horizontal structure. Article 103 of the UN Charter gives Charter obligations priority over conflicting obligations under another international agreement. Jus cogens invalidates incompatible treaty provisions and bars derogation. Procedural rules governing jurisdiction and applicable law must also be distinguished from the substantive hierarchy of norms.

18. Method for Identifying a Rule

When answering a problem, use the following sequence:

(a) state the precise alleged rule;
(b) identify whether it is claimed as treaty, custom, general principle or another category;
(c) for a treaty, identify the parties, entry into force, relevant provision and any reservation;
(d) for custom, prove general practice and opinio juris separately;
(e) consider persistent objection or particular custom where relevant;
(f) use cases and scholarship as subsidiary support rather than substitutes for the primary source;
(g) determine the legal relevance of resolutions, unilateral statements or soft-law texts;
(h) check for jus cogens, Article 103 or another conflict rule; and
(i) give a reasoned conclusion on existence, content, scope and applicability.`,
    keyPoints: [
      "Article 38(1) is the principal starting point for identifying the sources of international law, though it is not an exhaustive world constitution.",
      "Treaties create binding obligations for their parties and must be performed in good faith.",
      "Treaty and customary rules may coexist; treaties may codify, crystallise or help generate custom.",
      "Customary international law requires both sufficiently general practice and acceptance of that practice as law.",
      "State practice may be physical or verbal and may come from executive, legislative, judicial and other State organs.",
      "Opinio juris distinguishes legal custom from habit, courtesy, convenience and policy.",
      "Persistent objection must be clear, timely and maintained while the customary rule is forming.",
      "A party relying on regional or local custom must prove practice and legal acceptance among the States concerned.",
      "General principles fill gaps and support coherent adjudication but must be identified through a recognised legal method.",
      "Judicial decisions and qualified scholarly writings are subsidiary means rather than independent law-making authorities.",
      "International-organisation resolutions may be binding, evidential or recommendatory depending on their legal basis and context.",
      "A clear public unilateral declaration made with an intention to be bound may create a legal obligation for the declaring State.",
      "Soft law is not binding merely because it is influential, but it can shape interpretation, practice and later legal development.",
      "Jus cogens concerns non-derogable superior norms; obligations erga omnes are owed to the international community as a whole.",
      "Article 103 of the UN Charter gives Charter obligations priority over conflicting treaty obligations.",
    ],
    provisions: [
      "Statute of the International Court of Justice — Articles 38 and 59",
      "Charter of the United Nations, 1945 — Articles 25 and 103",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 26, 34–38, 53 and 64",
      "International Law Commission — Conclusions on Identification of Customary International Law, 2018",
    ],
    importantCases: [
      {
        caseName: "North Sea Continental Shelf Cases",
        citation: "ICJ Reports 1969, p. 3",
        principle:
          "Custom requires sufficiently widespread and representative practice, including that of specially affected States, accompanied by a belief that the practice is legally obligatory.",
        summary:
          "The ICJ examined whether the treaty rule of equidistance had become customary international law and clarified the relationship among treaties, practice and opinio juris.",
      },
      {
        caseName: "Asylum (Colombia v. Peru)",
        citation: "ICJ Reports 1950, p. 266",
        principle:
          "A party alleging regional or local custom must prove a constant and uniform usage accepted as law by the States concerned.",
        summary:
          "Colombia did not establish the claimed Latin American customary rule permitting unilateral and binding qualification of the offence for diplomatic asylum.",
      },
      {
        caseName: "Military and Paramilitary Activities in and against Nicaragua (Nicaragua v. United States)",
        citation: "ICJ Reports 1986, p. 14",
        principle:
          "Customary law may exist alongside treaty law, and perfect conformity of practice is unnecessary where contrary conduct is generally treated as a breach rather than a new rule.",
        summary:
          "The Court identified and applied customary rules on non-use of force and non-intervention independently of parallel Charter provisions.",
      },
      {
        caseName: "Nuclear Tests (Australia v. France; New Zealand v. France)",
        citation: "ICJ Reports 1974, pp. 253 and 457",
        principle:
          "A public unilateral declaration made with an intention to be bound may create a legal obligation, which must be performed in good faith.",
        summary:
          "The Court treated authoritative French statements concerning atmospheric nuclear testing as legally significant unilateral commitments.",
      },
      {
        caseName: "Factory at Chorzów (Germany v. Poland)",
        citation: "PCIJ, Series A, No. 17 (1928)",
        principle:
          "Reparation must, so far as possible, wipe out the consequences of an illegal act—a foundational principle of international responsibility.",
        summary:
          "The Permanent Court articulated a general remedial principle frequently relied upon in international adjudication.",
      },
      {
        caseName: "Barcelona Traction, Light and Power Company, Limited",
        citation: "ICJ Reports 1970, p. 3",
        principle:
          "The Court distinguished ordinary bilateral obligations from obligations owed towards the international community as a whole.",
        summary:
          "The judgment is a principal authority for the concept of obligations erga omnes and the legal interest of all States in their protection.",
      },
    ],
    examFocus:
      "Begin with Article 38(1) and distinguish primary law-creating processes from subsidiary means. For custom, always analyse State practice and opinio juris separately, then consider consistency, representativeness, specially affected States, persistent objection and particular custom. In hierarchy questions, distinguish jus cogens, erga omnes and Article 103 rather than treating them as interchangeable concepts.",
    revisionNotes:
      "Article 38(1) identifies treaties, custom and general principles, with judicial decisions and qualified writings as subsidiary means. Treaties bind their parties; custom requires general practice plus opinio juris; general principles support completeness and coherence. Resolutions, unilateral declarations and soft law have differing legal effects that must be assessed contextually. Jus cogens is non-derogable, erga omnes identifies obligations owed to the international community, and Article 103 gives Charter obligations priority over conflicting treaty commitments.",
  },
  {
    title:
      "Subjects of International Law and Relation with Municipal Law",
    shortDescription:
      "A detailed study of international legal personality and the interaction between international and domestic legal systems, with special reference to India.",
    overview:
      "A subject of international law is an entity possessing rights, duties or legal capacities under the international legal order. States remain its primary and most complete subjects, but modern law also recognises international organisations, individuals, peoples and other entities to differing and function-specific degrees. The second part of this chapter examines how international law and municipal law relate to one another. It compares monist and dualist theories, explains incorporation and transformation, and studies the Indian constitutional framework governing treaties, customary rules and domestic implementation.",
    learningObjectives: [
      "Define international legal personality and distinguish subjects from objects, actors and beneficiaries of international law.",
      "Explain why States possess the fullest international legal personality.",
      "Identify the international rights, duties and capacities of international organisations.",
      "Explain the position of individuals under human-rights, humanitarian, criminal and consular law.",
      "Assess the status of peoples, national liberation movements, insurgents and belligerents.",
      "Evaluate the limited international role of corporations, non-governmental organisations and other non-State actors.",
      "Distinguish objective, derivative, functional, general and special legal personality.",
      "Compare monist and dualist explanations of the relationship between international and municipal law.",
      "Distinguish incorporation, adoption, transformation and specific legislative implementation.",
      "Explain how treaties and customary international law operate before domestic courts.",
      "Analyse India's constitutional allocation of treaty-making and treaty-implementing powers.",
      "Apply Articles 51(c), 73, 246 and 253 of the Constitution of India to international-law questions.",
    ],
    detailedContent: `1. Meaning of a Subject of International Law

A subject of international law is an entity capable, to some extent, of possessing international rights and duties and of exercising legal capacities on the international plane. Relevant capacities may include concluding treaties, presenting international claims, enjoying privileges or immunities, incurring international responsibility, participating in international institutions and invoking dispute-settlement procedures.

International personality is not an all-or-nothing status. Different entities possess different rights and capacities according to the rules creating or recognising them. The ICJ explained in Reparation for Injuries that subjects of law in a legal system need not be identical in nature or in the extent of their rights.

2. Subjects, Objects, Actors and Beneficiaries

Traditional writers distinguished subjects, which possess legal personality, from objects, whose interests are regulated without independent legal capacity. Modern law makes that rigid division inadequate. An individual may possess enforceable human rights and incur direct criminal responsibility while lacking the general treaty-making competence of a State.

An international actor influences international relations but is not necessarily a legal person. A beneficiary receives protection or advantage under a rule but may not possess an independent procedure to enforce it. The correct inquiry is therefore functional: what particular right, duty or capacity does the relevant rule confer upon the entity?

3. States as Primary Subjects

States are the original and primary subjects of international law. They possess general international personality rather than personality limited to a specific constitutive instrument. A State normally has territory, population, government and capacity to conduct international relations. It enjoys sovereign equality, territorial integrity and political independence and is bound by applicable treaties, custom and general international law.

States may conclude treaties, establish international organisations, recognise other States and governments, exercise jurisdiction, present international claims, incur responsibility and participate in the formation of customary law. Their legal equality does not depend on equality of territory, population, wealth or political power.

4. International Organisations

An international organisation is generally created by States through a treaty or other instrument governed by international law and possesses its own institutional structure. Its personality is derivative because it arises from its constituent instrument and functional because its powers are connected to its purposes and functions.

In Reparation for Injuries, the ICJ held that the United Nations possesses international personality and the capacity to bring an international claim for injury to the organisation and its agents. The Court inferred powers necessary for the effective performance of UN functions. International organisations may conclude agreements, own property, employ staff, enjoy privileges and immunities and bear responsibility, but their competence is limited by the principle of speciality.

Article 104 of the UN Charter separately requires that the United Nations enjoy in each member's territory the legal capacity necessary to exercise its functions and fulfil its purposes. Domestic legal capacity and international legal personality are connected but conceptually distinct.

5. Individuals as Subjects

Classical international law largely treated individuals through the State of nationality. Modern law increasingly confers rights and duties directly upon them. Human-rights treaties recognise individual rights; some regional systems allow individual petitions; humanitarian law protects persons in armed conflict; consular law can confer individual rights; refugee law protects qualifying persons; and international criminal law imposes direct responsibility for crimes such as genocide, crimes against humanity and war crimes.

In LaGrand, the ICJ recognised that Article 36(1) of the Vienna Convention on Consular Relations creates individual rights as well as rights of the sending State. International tribunals after the Second World War established that individuals cannot hide behind the abstract personality of the State when international law imposes personal criminal responsibility.

Individuals nevertheless do not possess the same general capacities as States. Their international standing depends on the relevant treaty, institution or legal regime.

6. Peoples and the Right of Self-Determination

The UN Charter and common Article 1 of the two 1966 Human Rights Covenants recognise the right of peoples to self-determination. A people may freely determine its political status and pursue its economic, social and cultural development. The principle played a central role in decolonisation and has been recognised as having an erga omnes character.

Identifying a “people” and determining the consequences of self-determination can be difficult outside the colonial context. International law generally protects the territorial integrity of States while supporting internal self-determination through representative government and equal participation. The principle does not automatically confer a general unilateral right of secession in every case.

7. National Liberation Movements, Insurgents and Belligerents

National liberation movements have obtained limited status in particular historical and institutional contexts, especially decolonisation and participation in international organisations. Their capacities depend on recognition and applicable legal instruments.

Organised armed groups may bear direct obligations under international humanitarian law, including common Article 3 of the Geneva Conventions and applicable rules for non-international armed conflict. Recognition of insurgency or belligerency historically affected the legal relations among the territorial State, the organised group and third States. Such recognition does not necessarily amount to recognition of Statehood.

8. Corporations and Investors

Corporations are created under municipal law, but international law may grant them specific rights and procedural capacities. Investment treaties can permit a foreign investor to bring a claim directly against a host State before an arbitral tribunal. Human-rights systems may protect certain corporate rights, while international standards increasingly address corporate conduct.

These limited capacities do not give corporations general international personality equivalent to States. Corporations ordinarily remain governed by domestic law, and the international responsibility of States must be distinguished from corporate civil or criminal liability under national law.

9. Non-Governmental Organisations and Other Participants

Non-governmental organisations influence treaty negotiations, supply expertise, monitor compliance and may obtain consultative status before international bodies. The International Committee of the Red Cross has distinctive functions under humanitarian law. Religious entities, indigenous communities, multinational enterprises and other bodies may possess special rights or roles.

Participation and influence must not be confused with complete legal personality. The legal status of each entity depends on the particular rules, agreements and institutional arrangements applicable to it.

10. Types and Tests of International Personality

International personality may be original or derivative, general or limited, objective or opposable only to particular parties, and express or implied. States possess original and general personality. Organisations ordinarily possess derivative and functional personality. Individuals and non-State entities possess rights and capacities within particular regimes.

Evidence of personality includes the ability to hold international rights and duties, conclude international agreements, make claims, enjoy immunities, participate in institutions or incur direct responsibility. No single capacity is indispensable in every case. The entity's constitutive instrument, applicable treaties, customary law, judicial decisions and practice must be examined together.

11. The Relationship between International and Municipal Law

International law governs rights and duties on the international plane; municipal law operates within a State. International law ordinarily leaves each State to choose the domestic method of performing its obligations, but a State cannot rely on its internal law as justification for failure to perform a treaty. International responsibility may therefore arise even where the domestic constitution prevented or complicated compliance.

Domestic courts, however, apply their own constitution and rules concerning the reception of international law. The international validity of an obligation and its direct enforceability in a national court are separate questions.

12. Monism

Monist theory treats international and municipal law as parts of a single legal order. An international rule may operate domestically without a separate legislative act, subject to the constitutional structure of the State. Some monist approaches give international law priority; others explain the unity of law differently.

Monism highlights the need for coherent legal obligation and facilitates direct domestic application. It does not describe every constitutional system, and even broadly monist States may distinguish self-executing from non-self-executing treaty provisions.

13. Dualism

Dualist theory treats international and municipal law as distinct systems because they regulate different relations, arise from different sources and operate through different institutions. A treaty binds the State internationally but does not, without constitutional or legislative reception, automatically alter domestic rights and duties.

Dualism protects the constitutional role of the legislature and democratic law-making. Strict separation may nevertheless create a gap between an international promise and the remedies available to individuals within the State.

14. Incorporation, Adoption and Transformation

Under incorporation or adoption, a rule of international law becomes part of municipal law through a constitutional rule or judicial doctrine without being rewritten in legislation. Customary international law is often received through this method, provided it does not conflict with legislation or controlling constitutional rules.

Transformation requires an international rule, especially a treaty rule, to be converted into domestic law through legislation. Specific implementation occurs when the legislature enacts provisions needed to give effect to particular treaty obligations. The terminology varies among legal systems, so the actual constitutional rule is more important than the label.

15. Treaties in Domestic Courts

A treaty may bind a State internationally from its entry into force while remaining non-enforceable by individuals in domestic courts until implemented. Some constitutions make certain treaties directly applicable; others require legislation. Courts may still use an unimplemented treaty as an interpretative aid where domestic law is ambiguous and the treaty does not contradict legislation.

When legislation is enacted to implement a treaty, domestic courts apply that legislation according to constitutional principles. A later inconsistent statute may control domestically in some systems, even though the State remains internationally responsible for treaty breach.

16. Customary International Law in Domestic Courts

Many common-law systems treat customary international law as part of the common law unless it conflicts with a statute or binding judicial authority. Courts first require adequate proof of the customary rule. Clear legislation ordinarily prevails domestically, while the resulting international consequences remain governed by international law.

Custom cannot override a written constitution. Courts commonly prefer, where the text permits, an interpretation consistent with international obligations.

17. Indian Constitutional Framework

Article 51(c), a Directive Principle of State Policy, directs the State to foster respect for international law and treaty obligations in the dealings of organised peoples with one another. It guides interpretation and State policy but is not independently enforceable as a fundamental right.

Article 73 extends the Union executive power to matters on which Parliament may legislate and to the exercise of rights, authority and jurisdiction exercisable by the Government of India by virtue of a treaty or agreement, subject to the Constitution and parliamentary legislation.

Article 246 read with the Seventh Schedule distributes legislative competence. Union List entries relevant to international affairs include foreign affairs, diplomatic and consular representation, the United Nations, participation in international conferences, treaties and agreements with foreign countries, and implementation of treaties.

Article 253 empowers Parliament to make any law for implementing a treaty, agreement or convention with another country, or a decision made at an international conference, association or other body. This power may operate notwithstanding the ordinary federal distribution reflected in Article 246.

18. Treaty-Making and Implementation in India

Treaty-making is generally exercised by the Union executive. A treaty that changes domestic law, affects private rights, creates offences, imposes taxation, requires expenditure or otherwise needs enforceable municipal rules ordinarily requires parliamentary legislation. The executive cannot use a treaty to amend the Constitution or override an existing statute.

Indian courts may refer to international conventions when interpreting constitutional and statutory provisions, particularly where domestic law contains a gap and the international norm is consistent with fundamental rights and existing legislation. An unimplemented treaty cannot be used to displace a clear contrary statute.

19. Leading Indian Judicial Principles

In Maganbhai Ishwarbhai Patel v. Union of India, the Supreme Court distinguished the executive act of entering an international agreement from the need for legislation where implementation changes domestic law or affects citizens' rights.

In Jolly George Varghese v. Bank of Cochin, the Court recognised the interpretative relevance of the International Covenant on Civil and Political Rights but held that a covenant provision does not automatically become enforceable municipal law without legislative transformation.

In Vishaka v. State of Rajasthan, the Court used the Convention on the Elimination of All Forms of Discrimination against Women to help formulate protections against workplace sexual harassment where domestic law was silent and the convention was consistent with fundamental rights.

In Gramophone Company of India Ltd. v. Birendra Bahadur Pandey, the Court stated that rules of international law may be accommodated in municipal law unless they conflict with an Act of Parliament.

20. Conflict and Harmonious Interpretation

On the international plane, a State cannot escape responsibility by pleading its constitution, legislation or judicial decisions. On the domestic plane, the Constitution governs, and courts apply binding legislation. The two planes must not be confused.

Courts often presume that the legislature does not intend to violate international law and, where reasonably possible, interpret domestic law consistently with international obligations. Harmonious interpretation cannot rewrite clear statutory language or bypass constitutional limits.

21. Problem-Solving Method

For a legal-personality problem:
(a) identify the entity;
(b) identify the asserted international right, duty or capacity;
(c) locate its source in a treaty, custom, constituent instrument or other rule;
(d) determine whether the personality is general or function-specific; and
(e) distinguish legal status from political influence.

For an international-versus-municipal-law problem:
(a) identify the international rule and whether it binds India internationally;
(b) identify the relevant constitutional provision;
(c) ask whether implementing legislation exists;
(d) determine whether the rule is treaty-based or customary;
(e) check for conflict with the Constitution or statute;
(f) consider harmonious interpretation; and
(g) distinguish the domestic remedy from any international responsibility.`,
    keyPoints: [
      "International personality is the capacity to possess international rights, duties or legal powers; its extent differs among entities.",
      "States are the primary subjects and possess general international legal personality.",
      "International organisations have derivative, functional personality governed by their constituent instruments and necessary powers.",
      "Individuals possess direct rights and duties in fields including human rights, consular law, humanitarian law and international criminal law.",
      "Peoples possess a right of self-determination, but this does not create a general automatic right of unilateral secession.",
      "Corporations, NGOs and armed groups may have limited rights, duties or participation without acquiring State-like personality.",
      "Monism views international and municipal law as one legal order; dualism treats them as distinct systems.",
      "International validity and domestic enforceability are separate questions.",
      "A State cannot invoke internal law as justification for failing to perform an international obligation.",
      "Incorporation receives a rule directly; transformation gives domestic effect through legislation.",
      "Article 51(c) directs India to foster respect for international law and treaty obligations.",
      "Article 253 empowers Parliament to legislate for implementing treaties and international decisions.",
      "The Union executive generally makes treaties, but legislation is required when domestic law or private rights must be changed.",
      "Indian courts may use consistent international norms as interpretative aids but cannot override the Constitution or clear legislation.",
    ],
    provisions: [
      "Constitution of India — Articles 51(c), 73, 246 and 253",
      "Constitution of India — Seventh Schedule, Union List Entries 10–14",
      "Charter of the United Nations, 1945 — Articles 1(2), 2(1), 104 and 105",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 26 and 27",
      "International Covenant on Civil and Political Rights, 1966 — Article 1",
      "International Covenant on Economic, Social and Cultural Rights, 1966 — Article 1",
    ],
    importantCases: [
      {
        caseName: "Reparation for Injuries Suffered in the Service of the United Nations",
        citation: "ICJ Reports 1949, p. 174",
        principle:
          "The United Nations has international legal personality and capacities necessary to perform its functions and protect its agents.",
        summary:
          "The advisory opinion established that subjects of international law need not be identical and that an organisation may possess functional and implied powers.",
      },
      {
        caseName: "LaGrand (Germany v. United States of America)",
        citation: "ICJ Reports 2001, p. 466",
        principle:
          "Article 36(1) of the Vienna Convention on Consular Relations creates individual rights as well as rights of the sending State.",
        summary:
          "The judgment demonstrates that individuals may be direct holders of rights under international law.",
      },
      {
        caseName: "Maganbhai Ishwarbhai Patel v. Union of India",
        citation: "(1970) 3 SCC 400",
        principle:
          "The executive may enter treaties, but legislation is needed where implementation changes domestic law or affects enforceable rights.",
        summary:
          "The Supreme Court explained the constitutional distinction between making an international agreement and giving it municipal legal effect.",
      },
      {
        caseName: "Jolly George Varghese v. Bank of Cochin",
        citation: "(1980) 2 SCC 360",
        principle:
          "An international covenant does not automatically become enforceable domestic law without legislative incorporation, though it may aid interpretation.",
        summary:
          "The Court considered the ICCPR while applying Indian civil-procedure law and maintained the distinction between treaty obligation and municipal enforceability.",
      },
      {
        caseName: "Vishaka v. State of Rajasthan",
        citation: "(1997) 6 SCC 241",
        principle:
          "International conventions consistent with fundamental rights may guide constitutional interpretation where domestic law contains a gap.",
        summary:
          "The Supreme Court relied upon CEDAW principles while framing binding safeguards against workplace sexual harassment pending legislation.",
      },
      {
        caseName: "Gramophone Company of India Ltd. v. Birendra Bahadur Pandey",
        citation: "(1984) 2 SCC 534",
        principle:
          "Courts should respect established international law unless it conflicts with an Act of Parliament.",
        summary:
          "The judgment supports harmonious construction while recognising the controlling force of contrary domestic legislation.",
      },
    ],
    examFocus:
      "For a legal-personality question, avoid a binary list of subjects and objects. Define personality functionally, then compare the nature and extent of the capacities held by States, organisations, individuals, peoples and other actors. For municipal-law questions, distinguish international binding force from domestic enforceability and apply Articles 51(c), 73, 246 and 253 with the leading Indian cases.",
    revisionNotes:
      "States possess original and general international personality; organisations possess derivative and functional personality; individuals and other actors hold specific rights, duties or capacities under particular regimes. Monism treats international and municipal law as one order, while dualism treats them as separate. India generally requires legislation where a treaty must change domestic law or affect rights. Articles 51(c), 73, 246 and 253 frame the constitutional relationship, and courts favour consistent interpretation without allowing unimplemented treaties to override the Constitution or clear statutes.",
  },
  {
    title: "Recognition and State Jurisdiction",
    shortDescription:
      "A detailed study of Statehood, recognition of States and governments, and the bases, limits and immunities governing State jurisdiction.",
    overview:
      "Recognition concerns the legal and political response of existing States to a new State, government or other authority claiming international status. Jurisdiction concerns a State's legal competence to prescribe rules, adjudicate disputes and enforce decisions. This chapter begins with the criteria and continuity of Statehood, then compares declaratory and constitutive theories of recognition, its forms, consequences and limits. It proceeds to territorial, nationality, passive-personality, protective and universal jurisdiction, before examining extraterritorial enforcement, concurrent claims, sovereign and official immunity, and jurisdiction over ships and aircraft.",
    learningObjectives: [
      "Explain the legal criteria of Statehood and distinguish creation, continuity and extinction of States.",
      "Define recognition and distinguish recognition of a State from recognition of a government.",
      "Compare declaratory and constitutive theories of recognition.",
      "Distinguish de facto and de jure, express and implied, and individual and collective recognition.",
      "Explain conditional recognition, premature recognition, withdrawal and the duty of non-recognition.",
      "Assess the legal consequences of recognition and non-recognition before international and domestic institutions.",
      "Distinguish recognition of insurgency and belligerency from recognition of Statehood.",
      "Separate prescriptive, adjudicative and enforcement jurisdiction.",
      "Apply territorial, nationality, passive-personality, protective and universal jurisdiction.",
      "Analyse subjective and objective territoriality and jurisdiction over transnational and cyber conduct.",
      "Explain limits arising from non-intervention, reasonableness, comity and competing jurisdictional claims.",
      "Distinguish State immunity, diplomatic immunity, consular immunity and immunity of State officials.",
      "Apply flag-State, port-State, coastal-State and aircraft jurisdiction principles.",
    ],
    detailedContent: `1. Statehood and Recognition

Statehood is an objective legal status; recognition is the act by which an existing State acknowledges or accepts an entity's international status or a government's authority to represent a State. The concepts are connected but should not be treated as identical. An entity may satisfy the legal criteria of Statehood despite limited diplomatic recognition, while extensive political support cannot by itself cure the absence of essential legal requirements.

Recognition has both legal and political dimensions. Each State ordinarily decides whether and how to recognise another entity, subject to international duties such as the obligation not to recognise as lawful a situation created by a serious breach of a peremptory norm.

2. Criteria of Statehood

Article 1 of the Montevideo Convention states the widely used criteria: a permanent population, defined territory, government and capacity to enter into relations with other States.

A permanent population does not require a fixed minimum number. A defined territory does not require every boundary to be undisputed. Government concerns an organised authority capable of exercising effective control, although effectiveness may be evaluated flexibly where an established State faces occupation, civil conflict or temporary loss of control. Capacity for international relations reflects independence from the legal authority of another State.

Modern analysis also considers legality, particularly self-determination and the prohibition on acquisition of territory by force. The Montevideo criteria are central but do not make serious violations irrelevant.

3. Creation, Continuity and Extinction of States

A State may emerge through decolonisation, dissolution, separation, merger or other lawful political transformation. Questions of succession determine the treatment of treaties, property, debts, nationality and membership in international organisations.

The criteria for initially establishing Statehood must not be mechanically applied to an existing State's continuity. Temporary occupation, governmental collapse, displacement of population or climate-related loss of habitability does not automatically terminate a State. International practice strongly favours continuity and stability.

Extinction ordinarily requires the permanent disappearance of the State as a legal entity, for example through lawful merger or absorption. A mere change of government or constitution does not extinguish the State.

4. Meaning and Objects of Recognition

Recognition may concern a State, a government, belligerency, insurgency, territorial status or another legal situation. Recognition of a State accepts its international personality. Recognition of a government concerns whether an authority is accepted as entitled to represent an already existing State.

Many States avoid formal recognition of governments and instead maintain, suspend or alter diplomatic dealings. This reduces the appearance of judging the legitimacy of another country's constitutional order, but practical decisions concerning credentials, immunities, assets and treaty relations remain necessary.

5. Constitutive Theory

Under the constitutive theory, an entity becomes an international person, at least in relation to the recognising State, through recognition by existing States. The theory emphasises the practical importance of acceptance for diplomacy, treaty relations and access to institutions.

Its weakness is that it can make legal existence depend on political discretion and produce inconsistent personality: an entity could be a State for one country but not another. It also struggles to explain the rights and duties of an unrecognised entity that objectively satisfies Statehood criteria.

6. Declaratory Theory

The declaratory theory holds that recognition acknowledges an existing factual and legal situation rather than creating Statehood. Article 3 of the Montevideo Convention states that the political existence of a State is independent of recognition by other States.

This theory better protects objective criteria and sovereign equality, but recognition remains practically important. Diplomatic relations, domestic court access, immunity, property and participation in organisations may be affected by the recognising State's position. Modern practice generally favours a declaratory account while accepting these important practical effects.

7. De Facto and De Jure Recognition

De facto recognition is provisional or limited acknowledgement that an authority exercises effective control, often where stability or permanence remains uncertain. De jure recognition is fuller and more final acceptance of legal status.

The distinction concerns the intention and scope of the recognising State and must be inferred from official language and conduct. De facto recognition is not identical to informal contact, and de jure recognition does not necessarily require a particular ceremonial formula.

8. Express, Implied and Collective Recognition

Express recognition occurs through an official declaration, diplomatic note or other clear statement. Implied recognition may be inferred from conduct showing an intention to recognise, such as establishing full diplomatic relations or concluding a bilateral treaty that necessarily treats the entity as a State.

Not every interaction implies recognition. Humanitarian contact, negotiations, participation in a multilateral conference or conclusion of a technical arrangement may be accompanied by an express reservation. Intention and context are decisive.

Recognition is usually an individual act, but admission to an international organisation may supply strong collective evidence. UN membership does not compel every member to establish bilateral diplomatic relations, and organisational admission must be distinguished from recognition by each State.

9. Conditional and Premature Recognition

A State may link recognition to commitments concerning minority rights, democracy, borders or other matters. If the entity already satisfies Statehood requirements, failure to honour a political condition does not ordinarily erase its existence, though it may create separate responsibility where a legal undertaking was made.

Premature recognition occurs when an outside State recognises an entity before the legal and factual conditions are established, particularly during an unresolved secession. It may violate the principles of sovereignty and non-intervention. Recognition must not be used as a device for unlawful intervention.

10. Recognition of Governments

Recognition of a government traditionally focused on effective control, stability, independence and willingness to fulfil international obligations. Other approaches have considered constitutional legitimacy, democratic authority and popular acceptance. State practice is inconsistent and no universal political test governs every case.

A change of government does not affect the identity of the State or automatically terminate its treaties. Disputes over representation may affect control of diplomatic premises, access to State assets, immunities, credentials and authority to appear before courts.

11. Insurgency and Belligerency

Insurgency describes an organised uprising reaching a level that may require limited practical acknowledgement. Belligerency historically involved recognition that an armed conflict had reached a scale and organisation justifying application of the laws of war and neutrality between the established government and organised rebels.

Recognition of belligerency does not recognise the rebel authority as a State. Contemporary international humanitarian law applies many minimum obligations according to objective conflict classifications, reducing reliance on formal recognition.

12. Legal Consequences of Recognition

Recognition may enable diplomatic relations, treaty dealings and acknowledgement of governmental acts. In domestic law it may influence standing before courts, immunity, access to assets and the treatment of legislative, executive and judicial acts of the recognised authority.

The precise consequences depend on the recognising State's constitutional law and the form of recognition. Courts frequently treat recognition as a matter primarily for the executive, especially where a decision would affect foreign relations.

Non-recognition does not mean that every act within the territory is legally ignored. Courts may give limited effect to matters such as births, marriages and private transactions where necessary to protect inhabitants and justice, without recognising the unlawful authority itself.

13. Withdrawal and Non-Recognition

Withdrawal of recognition of a government may occur when it loses effective authority or legitimacy under the recognising State's policy. Withdrawal of recognition of an existing State is more difficult because Statehood is not ordinarily extinguished by another State's unilateral decision.

International law may require non-recognition of territorial acquisition or another situation created by a serious breach of a peremptory norm. The duty prevents an unlawful situation from acquiring legitimacy through acceptance. States must distinguish mandatory non-recognition from ordinary political non-recognition.

14. Meaning and Types of State Jurisdiction

Jurisdiction is a State's lawful competence to regulate persons, property, conduct and events. It has three forms:

(a) prescriptive jurisdiction—the authority to make legal rules applicable to conduct;
(b) adjudicative jurisdiction—the authority of courts or tribunals to hear and determine cases; and
(c) enforcement jurisdiction—the authority to compel compliance through arrest, search, seizure, punishment or execution.

A State may possess a valid basis to prescribe law while lacking authority to enforce it in another State's territory. Enforcement abroad normally requires consent, treaty cooperation or another rule of international law.

15. Territorial Principle

Territoriality is the primary basis of jurisdiction. A State may regulate conduct occurring within its land territory, internal waters, territorial sea and airspace.

Subjective territoriality applies where the conduct begins within the State. Objective territoriality applies where conduct initiated abroad is completed or produces a constituent effect within the State. The effects doctrine extends regulation to foreign conduct producing substantial domestic effects, but expansive use can create conflict and should be supported by a genuine connection and reasonable exercise.

Territorial questions involving online conduct depend on factors such as the location of actors, systems, targeted resources, victims and effects. Mere internet accessibility should not automatically create unlimited global jurisdiction.

16. Nationality Principle

The active-nationality principle permits a State to regulate conduct of its nationals abroad. Nationality supplies a continuing legal connection between the person and the State. Domestic law determines nationality subject to international limits.

The principle may apply to natural persons, corporations and, under specialised rules, ships and aircraft. Questions of dual nationality and corporate nationality can complicate its operation.

17. Passive-Personality Principle

Passive personality bases jurisdiction on the nationality of the victim. Historically controversial, it is now more widely accepted, especially for terrorism and serious violence against nationals abroad.

The principle should be applied with a genuine connection and attention to legality, foreseeability and competing claims. Victim nationality alone should not be used without statutory authority.

18. Protective Principle

The protective principle allows a State to regulate foreign conduct threatening its essential security or governmental functions even when committed by non-nationals abroad. Examples include counterfeiting currency, espionage, falsification of official documents and attacks on national security.

Because the principle reaches beyond territory and nationality, the protected interest must be sufficiently fundamental and the exercise must not become a pretext for regulating ordinary foreign conduct.

19. Universal Jurisdiction

Universal jurisdiction permits prosecution of certain exceptionally grave offences without requiring territory, offender nationality or victim nationality as the jurisdictional link. Piracy is the classic example. International law and treaties also support forms of universal or treaty-based jurisdiction for crimes such as genocide, war crimes, torture and crimes against humanity, though the precise scope, conditions and immunities remain subject to law and State practice.

Universal jurisdiction differs from the jurisdiction of an international criminal tribunal. A national court exercising universal jurisdiction acts under national law supported by an international basis; an international tribunal derives jurisdiction from its constitutive instrument.

20. Concurrent Jurisdiction and Restraint

More than one State may possess a valid basis for jurisdiction over the same conduct. International law often manages rather than eliminates concurrency. States use consultation, extradition, mutual legal assistance, transfer of proceedings, comity and prosecutorial discretion.

Relevant considerations include territorial connection, location of evidence, nationality of accused and victims, seriousness, fairness, likelihood of effective prosecution and avoidance of double jeopardy where applicable. Jurisdiction must be distinguished from admissibility and forum choice.

21. Limits on Enforcement Jurisdiction

A State generally may not send officials into another State to arrest a person, search premises, seize evidence or execute a judgment without consent or other legal authority. Such action may violate territorial sovereignty and non-intervention.

Lawful cooperation occurs through extradition, mutual legal assistance, police cooperation, letters rogatory, transfer treaties and consent. Remote digital investigations may also raise sovereignty and data-jurisdiction issues.

22. State Immunity

State immunity is a procedural bar preventing one State's courts from exercising jurisdiction over another State in circumstances recognised by international law. Under the restrictive doctrine, immunity generally protects sovereign or public acts (acta jure imperii) but may not cover commercial or private acts (acta jure gestionis), subject to applicable national legislation and international rules.

Immunity from adjudication must be distinguished from immunity from execution. Measures against State property ordinarily face stricter requirements, especially where the property serves diplomatic, military, central-bank or other sovereign functions.

In Jurisdictional Immunities of the State, the ICJ treated immunity as a procedural rule distinct from the substantive lawfulness of the underlying conduct.

23. Immunity of State Officials

Certain serving high officials—especially Heads of State, Heads of Government and Foreign Ministers—enjoy personal immunity and inviolability before foreign national courts while in office. This immunity covers official and private acts during the term but is temporary.

Functional immunity protects official acts attributable to the State and may continue after office. Its scope in proceedings concerning international crimes remains contested and must be distinguished from immunity before an international tribunal operating under a valid legal instrument.

The Arrest Warrant case confirmed the personal immunity and inviolability of an incumbent Foreign Minister before foreign national criminal jurisdiction, while explaining that immunity does not mean permanent impunity.

24. Diplomatic and Consular Immunities

Diplomatic agents enjoy inviolability and broad immunity from the receiving State's criminal jurisdiction, with specified civil and administrative exceptions under the Vienna Convention on Diplomatic Relations. Diplomatic premises, archives and communications receive special protection.

Consular officers possess more limited, primarily functional immunity under the Vienna Convention on Consular Relations. Immunity belongs to the legal framework enabling functions, not to the individual as a personal benefit. The sending State may waive immunity under the applicable rules.

25. Ships and Maritime Jurisdiction

A ship ordinarily has the nationality of the State whose flag it is entitled to fly, and the flag State exercises jurisdiction on the high seas. Coastal States exercise sovereignty in internal waters and the territorial sea, subject to rights such as innocent passage. They possess functional rights in the contiguous zone, exclusive economic zone and continental shelf under the law of the sea.

Piracy is subject to universal jurisdiction on the high seas. Port States may regulate foreign vessels voluntarily present in port, subject to international obligations. Warships and other government vessels operated for non-commercial purposes enjoy special immunities.

26. Aircraft and Airspace

A State has complete and exclusive sovereignty over the airspace above its territory. Aircraft nationality is based principally on registration. The State of registration, territorial State, landing State and States connected to offender or victim may possess jurisdiction under aviation treaties and domestic law.

Civil aircraft must be distinguished from State aircraft. Hijacking, sabotage and other aviation offences are addressed through treaties requiring States to establish jurisdiction and cooperate in prosecution or extradition.

27. Examination and Problem-Solving Method

For recognition questions:
(a) identify whether the issue concerns a State, government or other status;
(b) apply the criteria of Statehood where relevant;
(c) compare declaratory and constitutive theories;
(d) identify the form and intention of recognition;
(e) consider premature recognition or mandatory non-recognition; and
(f) state the legal and practical consequences.

For jurisdiction questions:
(a) separate prescription, adjudication and enforcement;
(b) identify the statutory rule;
(c) establish territory, nationality, passive personality, protection, universality or another recognised link;
(d) consider concurrent claims and reasonableness;
(e) check State, diplomatic, consular or official immunity; and
(f) identify whether international cooperation is required for enforcement.`,
    keyPoints: [
      "The Montevideo criteria are permanent population, defined territory, government and capacity for international relations.",
      "Recognition acknowledges a State or accepts a government's authority to represent it; the two objects must be distinguished.",
      "The constitutive theory treats recognition as creating personality, while the declaratory theory treats it as acknowledging existing Statehood.",
      "Modern law generally favours the declaratory theory, although recognition has significant practical legal effects.",
      "Recognition may be de facto or de jure, express or implied, individual or collective.",
      "Premature recognition may violate sovereignty and non-intervention.",
      "States must not recognise as lawful a situation created by a serious breach of a peremptory norm.",
      "Jurisdiction must be divided into prescriptive, adjudicative and enforcement jurisdiction.",
      "Territoriality is primary, but nationality, passive personality, protection and universality provide additional bases.",
      "A valid basis to prescribe does not automatically authorise enforcement within another State's territory.",
      "Concurrent jurisdiction is managed through cooperation, comity and forum-related considerations.",
      "State immunity is procedural and differs from the substantive legality of the underlying conduct.",
      "Personal immunity of specified serving high officials is temporary; functional immunity concerns official acts.",
      "Diplomatic immunity is broader than consular functional immunity.",
      "Flag, coastal, port and registration principles allocate jurisdiction over ships and aircraft.",
    ],
    provisions: [
      "Montevideo Convention on the Rights and Duties of States, 1933 — Article 1",
      "Charter of the United Nations, 1945 — Articles 2(1), 2(4) and 2(7)",
      "International Law Commission Articles on State Responsibility, 2001 — Articles 40–41",
      "United Nations Convention on Jurisdictional Immunities of States and Their Property, 2004",
      "Vienna Convention on Diplomatic Relations, 1961 — Articles 22, 29, 31 and 32",
      "Vienna Convention on Consular Relations, 1963 — Articles 41 and 43",
      "United Nations Convention on the Law of the Sea, 1982 — Articles 2, 17, 27, 56, 92 and 105",
      "Chicago Convention on International Civil Aviation, 1944 — Articles 1 and 17",
    ],
    importantCases: [
      {
        caseName: "Tinoco Arbitration (Great Britain v. Costa Rica)",
        citation: "(1923) 1 RIAA 369",
        principle:
          "Recognition by other States is evidence but is not conclusive of a government's effective existence and authority.",
        summary:
          "Chief Justice Taft evaluated the acts of an unrecognised Costa Rican government by examining its actual control and conduct.",
      },
      {
        caseName: "S.S. Lotus (France v. Turkey)",
        citation: "PCIJ, Series A, No. 10 (1927)",
        principle:
          "The judgment is a foundational authority in debates over territorial effects, concurrent criminal jurisdiction and limits on State freedom.",
        summary:
          "The Permanent Court considered Turkish criminal jurisdiction following a high-seas collision between French and Turkish vessels.",
      },
      {
        caseName: "Arrest Warrant of 11 April 2000 (DRC v. Belgium)",
        citation: "ICJ Reports 2002, p. 3",
        principle:
          "An incumbent Foreign Minister enjoys immunity from criminal jurisdiction and inviolability before foreign national courts while in office.",
        summary:
          "Belgium's circulation of an arrest warrant failed to respect the immunity of the serving Congolese Foreign Minister; the Court distinguished immunity from impunity.",
      },
      {
        caseName: "Jurisdictional Immunities of the State (Germany v. Italy)",
        citation: "ICJ Reports 2012, p. 99",
        principle:
          "State immunity is a procedural rule that must be distinguished from the substantive legality of the conduct alleged.",
        summary:
          "The ICJ held that Italy had violated Germany's jurisdictional immunity by permitting specified civil claims based on sovereign wartime acts.",
      },
      {
        caseName: "Island of Palmas (Netherlands v. United States)",
        citation: "(1928) 2 RIAA 829",
        principle:
          "Territorial sovereignty entails the exclusive right to display State functions and a corresponding duty to protect the rights of other States.",
        summary:
          "The arbitration emphasised peaceful and continuous display of authority in resolving competing territorial claims.",
      },
      {
        caseName: "Legal Consequences for States of the Continued Presence of South Africa in Namibia",
        citation: "ICJ Reports 1971, p. 16",
        principle:
          "States were required not to recognise the legality of South Africa's continued presence, while avoiding harm to the inhabitants from wholesale invalidation of civil acts.",
        summary:
          "The advisory opinion explains both mandatory non-recognition and the limited treatment of acts necessary for the local population.",
      },
    ],
    examFocus:
      "For recognition, begin with Statehood criteria and clearly distinguish recognition of a State from recognition of a government. Compare declaratory and constitutive theories, identify the form of recognition, and discuss legal effects and non-recognition. For jurisdiction, separate prescription, adjudication and enforcement, apply each jurisdictional basis, and then test territorial sovereignty and any applicable State or official immunity.",
    revisionNotes:
      "Statehood is assessed principally through population, territory, government and capacity for international relations. Recognition generally declares rather than creates Statehood, but has important practical effects. Jurisdiction includes prescription, adjudication and enforcement and may rest on territory, nationality, passive personality, protection or universality. Enforcement in foreign territory normally requires consent or cooperation. State, diplomatic, consular and official immunities are distinct procedural protections, while maritime and aviation jurisdiction use flag, coastal, port, territorial and registration connections.",
  },
  {
    title: "Nationality, Extradition and Asylum",
    shortDescription:
      "A detailed study of nationality, statelessness, diplomatic protection, extradition, asylum, refugee status and non-refoulement.",
    overview:
      "Nationality is the legal bond connecting a person to a State and providing the basis for rights, duties and diplomatic protection. Extradition is the formal surrender of an accused or convicted person by one State to another, while asylum is protection granted against the authority of another State. This chapter explains acquisition and loss of nationality, dual nationality, statelessness, corporate nationality and diplomatic protection; the legal basis, conditions, exceptions and procedure of extradition; and territorial asylum, diplomatic asylum, refugee status and the principle of non-refoulement, with special reference to Indian law.",
    learningObjectives: [
      "Define nationality and distinguish it from citizenship, domicile, residence and ethnic identity.",
      "Explain acquisition of nationality by birth, descent, naturalisation, registration and territorial change.",
      "Analyse loss, renunciation, deprivation and deprivation-related safeguards.",
      "Explain dual or multiple nationality and identify problems arising from competing nationality claims.",
      "Define statelessness and distinguish de jure from de facto statelessness.",
      "Explain nationality of corporations, ships and aircraft.",
      "Apply the genuine-link principle within its proper context and limits.",
      "Explain the requirements and consequences of diplomatic protection.",
      "Define extradition and distinguish it from deportation, expulsion, rendition and transfer to an international tribunal.",
      "Apply double criminality, speciality, non bis in idem, political-offence and human-rights principles.",
      "Explain extradition procedure and the aut dedere aut judicare obligation where applicable.",
      "Distinguish territorial asylum from diplomatic asylum.",
      "Apply the refugee definition, exclusion and cessation provisions and the principle of non-refoulement.",
      "Explain the Indian legal framework governing nationality, extradition and refugees.",
    ],
    detailedContent: `1. Meaning of Nationality

Nationality is the legal bond between an individual and a State under which the individual belongs to that State for international purposes. It ordinarily creates reciprocal relations of allegiance and protection and supplies a basis for the State to regulate its nationals abroad and exercise diplomatic protection.

International law generally permits each State to determine under its law who its nationals are, but that competence is not unlimited. Rules concerning non-discrimination, avoidance of statelessness, genuine connection in particular international claims and human rights may affect recognition of nationality internationally.

2. Nationality and Related Concepts

Nationality and citizenship are often used interchangeably, but some legal systems distinguish nationality as the international bond from citizenship as the status carrying full domestic political rights. The meaning depends on the relevant law.

Domicile is a person's legally recognised permanent home; residence describes factual presence; habitual residence focuses on stable factual connection. Race, ethnicity, language and religion do not by themselves determine nationality. A person may reside permanently in one State while remaining a national of another.

3. Acquisition by Birth and Descent

Nationality may be acquired by jus soli, based on birth in the territory, or jus sanguinis, based on descent from a national parent. States frequently combine these principles and impose qualifications concerning parental status, residence or registration.

Foundlings and children who would otherwise be stateless commonly receive safeguards under national and international law. Birth registration is important evidence of identity but is not always itself a grant of nationality.

4. Naturalisation, Registration and Territorial Change

Naturalisation grants nationality following an application and satisfaction of conditions such as residence, good character, language knowledge, integration or renunciation of another nationality. Registration or declaration may provide a simplified process for spouses, descendants or persons with an established connection.

Nationality may also change through State succession, transfer of territory, option, adoption or legitimation. International standards seek a genuine connection, individual choice where feasible and prevention of statelessness, especially for habitual residents of affected territory.

5. Loss, Renunciation and Deprivation

Nationality may be lost automatically under legislation, voluntarily renounced, or withdrawn by the State. Renunciation ordinarily requires possession or acquisition of another nationality to avoid statelessness.

Deprivation may be permitted on limited grounds such as nationality obtained by fraud, but arbitrary deprivation is prohibited by Article 15 of the Universal Declaration of Human Rights. Safeguards include legality, legitimate purpose, proportionality, non-discrimination, procedural fairness, review and careful consideration of statelessness.

6. Dual and Multiple Nationality

Dual nationality arises when two States simultaneously regard a person as their national, often because their birth and descent rules overlap. Each State may generally treat the person as its national while the person is within its territory.

Competing claims may affect diplomatic protection, military service, taxation and consular assistance. International tribunals have considered dominant or effective nationality by examining habitual residence, family ties, participation in public life and other factual connections. This approach must be applied within the relevant treaty or claim framework.

7. Statelessness

A de jure stateless person is not considered a national by any State under the operation of its law. De facto statelessness describes a person who formally has nationality but cannot obtain effective protection, although the term is not identical to the treaty definition.

Statelessness can result from conflicting nationality laws, discrimination, State succession, gaps in birth registration, deprivation or loss without acquisition of another nationality. It may obstruct education, employment, travel, property ownership, healthcare and legal identity.

The 1954 Convention addresses the status and treatment of stateless persons. The 1961 Convention seeks to reduce statelessness through safeguards at birth, during territorial change and against nationality loss or deprivation.

8. Nationality of Corporations, Ships and Aircraft

Corporate nationality is commonly connected to incorporation, registered office or seat of management. In Barcelona Traction, the ICJ generally treated the State of incorporation as entitled to exercise diplomatic protection of the company, while recognising that special circumstances may require separate analysis.

Ships possess the nationality of the State whose flag they are entitled to fly, subject to the law of the sea. Aircraft possess the nationality of the State of registration. These legal connections allocate regulatory authority and responsibility but are not identical to nationality of natural persons.

9. The Genuine-Link Principle

In Nottebohm, the ICJ declined to allow Liechtenstein to exercise diplomatic protection against Guatemala because the naturalisation lacked the genuine connection necessary to make that nationality opposable in the circumstances of the claim.

The judgment did not establish a universal rule allowing every State to disregard another State's nationality law whenever it considers the connection insufficient. Its principle arose in diplomatic protection and exceptional facts involving rapid wartime naturalisation. The case must therefore be cited with its context and limits.

10. Diplomatic Protection

Diplomatic protection is the invocation by a State, through diplomatic action or international proceedings, of the responsibility of another State for injury caused by an internationally wrongful act to a national of the first State.

The traditional requirements are nationality of claims and exhaustion of local remedies. The injured person should generally possess the claimant State's nationality at the relevant times, subject to recognised exceptions. Available and effective local remedies in the respondent State ordinarily must be exhausted before an international claim is pursued.

Diplomatic protection belongs to the State at the international level and is generally discretionary, although human-rights considerations and domestic law may influence that discretion. It differs from consular assistance and from an individual's direct petition under a human-rights treaty.

11. Meaning and Purpose of Extradition

Extradition is the formal process by which one State surrenders a person found in its territory to another State for prosecution or enforcement of a sentence for an extraditable offence. It prevents territory from becoming a safe haven while protecting sovereignty and individual rights through legal procedure.

There is no universal general duty to extradite merely because another State requests surrender. The duty ordinarily arises from a treaty, domestic legislation, reciprocity or a specialised international convention.

12. Extradition and Related Measures

Deportation or expulsion removes a non-national under immigration law and is not a substitute for extradition safeguards where its true purpose is criminal surrender. Rendition is a broader term for transfer and may be unlawful if conducted outside legal procedure. Transfer to an international criminal court depends on the tribunal's statute and is often called surrender rather than extradition.

Abduction of a suspect from foreign territory may violate sovereignty and human rights even if the forum State's domestic court later claims jurisdiction. Lawful cooperation should proceed through authorised mechanisms.

13. Extraditable Offence and Double Criminality

Treaties and legislation define extraditable offences, often through a minimum punishment threshold rather than a closed list. Double criminality requires that the underlying conduct be criminal in both the requesting and requested States.

The offences need not bear identical names or contain identical wording. Courts compare the essential conduct and criminal character. The requirement protects individuals from surrender for conduct the requested State does not criminalise.

14. Rule of Speciality

The rule of speciality restricts the requesting State from prosecuting or punishing the surrendered person for an earlier offence other than the offence for which extradition was granted, unless the requested State consents or another recognised exception applies.

Speciality protects the requested State's sovereign decision and the individual against circumvention. It may also restrict re-extradition to a third State without consent.

15. Political-Offence Exception

Traditional extradition law permits refusal for an offence considered political. Pure political offences are directed against the State without ordinary criminal elements; relative political offences combine political purpose with an ordinary offence.

Courts have used incidence, predominance and proportionality approaches to assess the connection. Modern treaties exclude genocide, terrorism, aircraft hijacking, hostage-taking, attacks on protected persons and other grave crimes from the political-offence exception.

Refusal may also be required where the request is a pretext to prosecute a person because of race, religion, nationality, ethnic origin, political opinion, sex or another protected status.

16. Other Grounds for Refusal

Extradition may be refused where the person has already been finally tried for the same conduct (non bis in idem), limitation has expired, amnesty applies, the offence is purely military, prosecution is discriminatory, the requesting court lacks basic independence, or surrender would be unjust or oppressive under applicable law.

Some States do not extradite their own nationals and instead consider domestic prosecution. Fiscal offences are increasingly extraditable under modern arrangements. Each ground must be derived from the applicable treaty and legislation.

17. Human-Rights Limitations

A requested State must consider whether extradition would expose the person to a real risk of torture, cruel or inhuman treatment, flagrant denial of justice or another serious human-rights violation. Capital punishment may require reliable assurances that the death penalty will not be imposed or carried out.

Assurances must be specific, credible, capable of fulfilment and subject to monitoring. Extradition adjudication is not a full trial on guilt, but courts cannot ignore substantial and foreseeable rights risks.

18. Evidence, Prima Facie Case and Procedure

Extradition procedure ordinarily involves a diplomatic or designated-authority request, provisional arrest where authorised, judicial inquiry into statutory conditions, executive decision and surrender. The requesting State must supply documents identifying the person, offence, legal provisions, warrant or conviction and evidence required by the applicable arrangement.

Some systems require a prima facie evidentiary case; others apply a more limited certification standard. The extradition court does not ordinarily conduct the criminal trial. Identity, legal conditions, bars and fairness are examined without deciding final guilt.

19. Aut Dedere Aut Judicare

Aut dedere aut judicare means extradite or prosecute. Particular treaties require a State in whose territory an alleged offender is found to submit the case to competent authorities if it does not extradite. The obligation arises from the relevant convention; it is not automatically identical for every offence.

Its purpose is to prevent impunity for specified crimes such as torture, attacks on protected persons or certain aviation offences. Domestic jurisdiction and criminal legislation must support effective compliance.

20. Extradition Law in India

The Extradition Act, 1962 governs extradition to and from India. It operates through extradition treaties and arrangements, statutory notifications and procedures applicable to foreign States. The Central Government has a central role, while magistrates or courts conduct inquiries where the Act requires.

Indian proceedings examine whether the offence is extraditable, whether the statutory evidentiary standard is met and whether a legal bar applies. Treaty terms and the Act must be read together. Extradition is distinct from deportation under immigration or foreigner-control laws.

21. Meaning and Basis of Asylum

Asylum is protection granted by a State to a person seeking refuge from the authority or danger of another State. Article 14 of the Universal Declaration of Human Rights recognises the right to seek and enjoy asylum from persecution, subject to stated limitations. It does not create an unlimited right to compel admission by any chosen State.

The grant of territorial asylum is an exercise of territorial sovereignty constrained by refugee law, human rights and other obligations. Asylum must be distinguished from temporary refuge, immigration status and diplomatic protection.

22. Territorial Asylum

Territorial asylum is granted within the territory of the protecting State. The territorial State decides admission and status subject to non-refoulement and applicable treaty or domestic rules. Another State generally has no right to demand surrender outside extradition or other lawful procedures.

Asylum protects against persecution rather than ordinary accountability for serious non-political crime. Exclusion clauses prevent specified persons responsible for grave crimes from obtaining Convention refugee protection.

23. Diplomatic Asylum

Diplomatic asylum is refuge given in an embassy, consulate, warship or other premises outside the ordinary territorial asylum context. Diplomatic premises are inviolable but do not become the territory of the sending State.

General international law does not recognise an unrestricted unilateral right to grant diplomatic asylum binding on the territorial State. Such a right may arise from a regional treaty, established local custom or exceptional humanitarian necessity. In the Asylum case, Colombia failed to prove the claimed regional custom against Peru.

24. Refugee Status

The 1951 Refugee Convention, as modified by the 1967 Protocol, defines a refugee as a person outside the country of nationality or former habitual residence who, owing to a well-founded fear of persecution for race, religion, nationality, membership of a particular social group or political opinion, is unable or unwilling to avail themselves of that country's protection.

Refugee status is declaratory: a person becomes a refugee by satisfying the legal definition, not merely when formal recognition is issued. Assessment requires a forward-looking risk, a Convention ground, failure of national protection and consideration of internal protection where legally appropriate.

25. Exclusion and Cessation

Exclusion clauses deny Convention refugee protection to persons with serious reasons for considering that they committed crimes against peace, war crimes, crimes against humanity, serious non-political crimes outside the country of refuge or acts contrary to UN purposes and principles.

Cessation clauses end refugee status when protection is no longer necessary under defined conditions, such as voluntary re-availment of national protection, acquisition of new nationality or fundamental and durable change in circumstances. Exclusion, cessation and cancellation serve different legal functions.

26. Non-Refoulement

Article 33(1) of the Refugee Convention prohibits returning a refugee in any manner to the frontiers of territories where life or freedom would be threatened for a Convention reason. The principle applies to rejection, removal, extradition and other transfer where the prohibited risk exists.

Article 33(2) contains limited security and serious-crime exceptions for Convention refugee protection. Separate prohibitions under the law against torture and certain human-rights instruments may be absolute and permit no balancing. The applicable legal basis must therefore be identified precisely.

Indirect or chain refoulement occurs where transfer to an intermediate State foreseeably leads to onward removal to danger. Effective assessment, procedures and safeguards are required.

27. Asylum and Extradition

An extradition request may overlap with a claim to asylum. The decision-maker must distinguish legitimate prosecution from persecution, apply the political-offence and discrimination rules, assess human-rights risks and observe non-refoulement.

Refugee status does not create blanket immunity from prosecution. A person may be extradited for an ordinary serious offence if legal conditions and protection requirements are satisfied. Conversely, extradition cannot be used to bypass protection owed against persecution or torture.

28. Refugees and Asylum in India

India is not a party to the 1951 Refugee Convention or its 1967 Protocol and does not have a single comprehensive refugee statute. Refugees and asylum seekers are addressed through constitutional protections, general legislation concerning foreigners, executive policy and judicial decisions.

Articles 14 and 21 of the Constitution protect persons, not only citizens, within their scope. Indian courts have considered non-refoulement and protection from arbitrary expulsion through constitutional and international-law principles, while also recognising the Union's authority over admission and removal. Outcomes depend on facts, status, national security and applicable law.

29. Examination and Problem-Solving Method

For nationality and diplomatic protection:
(a) identify each claimed nationality and its legal basis;
(b) distinguish nationality validity from opposability for a claim;
(c) examine continuity and effective connection where relevant;
(d) determine whether local remedies were exhausted; and
(e) distinguish corporate, individual and State claims.

For extradition and asylum:
(a) identify the treaty and domestic statute;
(b) test extraditable offence and double criminality;
(c) apply speciality, non bis in idem and refusal grounds;
(d) examine evidence and procedure;
(e) assess political motivation, persecution, torture and fair-trial risk;
(f) apply refugee status, exclusion and non-refoulement separately; and
(g) conclude whether surrender, refusal, prosecution or protective conditions are legally appropriate.`,
    keyPoints: [
      "Nationality is the legal bond between an individual and a State for international purposes.",
      "Nationality may arise through birth, descent, naturalisation, registration or territorial change.",
      "Arbitrary deprivation of nationality is prohibited, and nationality loss should not create statelessness without lawful justification.",
      "Dual nationality may require analysis of dominant or effective connection in a particular legal context.",
      "A stateless person is not considered a national by any State under the operation of its law.",
      "The Nottebohm genuine-link principle arose in diplomatic protection and should not be treated as a universal licence to reject nationality.",
      "Diplomatic protection generally requires nationality of claims and exhaustion of effective local remedies.",
      "Extradition requires a treaty, statute, reciprocity or another recognised legal basis; there is no unlimited general duty to surrender.",
      "Double criminality compares the underlying conduct, not merely the names of offences.",
      "Speciality limits prosecution to the offence for which surrender was granted, subject to recognised exceptions.",
      "Political-offence protection is narrowed by modern treaties excluding terrorism and other grave crimes.",
      "Extradition may be barred by a real risk of torture, flagrant injustice or other serious rights violations.",
      "Diplomatic asylum is exceptional and is not a general right opposable to the territorial State.",
      "Refugee status requires a well-founded fear of persecution connected to a Convention ground and lack of effective national protection.",
      "Non-refoulement protects against direct and foreseeable indirect return to specified danger.",
      "India applies the Extradition Act, 1962 and addresses refugees through constitutional law, general statutes and executive policy.",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948 — Articles 14–15",
      "Convention Relating to the Status of Refugees, 1951 — Articles 1 and 33",
      "Protocol Relating to the Status of Refugees, 1967",
      "Convention Relating to the Status of Stateless Persons, 1954",
      "Convention on the Reduction of Statelessness, 1961",
      "International Law Commission Draft Articles on Diplomatic Protection, 2006",
      "Extradition Act, 1962 (India)",
      "Constitution of India — Articles 14 and 21",
    ],
    importantCases: [
      {
        caseName: "Nottebohm (Liechtenstein v. Guatemala)",
        citation: "ICJ Reports 1955, p. 4",
        principle:
          "On the exceptional facts, nationality lacking a genuine connection was not opposable to Guatemala for diplomatic protection.",
        summary:
          "The Court examined Nottebohm's rapid Liechtenstein naturalisation, residence and real connections and found the claim inadmissible.",
      },
      {
        caseName: "Barcelona Traction, Light and Power Company, Limited",
        citation: "ICJ Reports 1970, p. 3",
        principle:
          "The State of incorporation ordinarily has the right to exercise diplomatic protection of a corporation.",
        summary:
          "Belgium could not generally present an international claim merely on behalf of Belgian shareholders in a Canadian company.",
      },
      {
        caseName: "Asylum (Colombia v. Peru)",
        citation: "ICJ Reports 1950, p. 266",
        principle:
          "A general unilateral right of diplomatic asylum was not established; a party relying on regional custom must prove constant and uniform practice accepted as law.",
        summary:
          "Colombia could not bind Peru through its unilateral classification of the refugee's offence within its embassy.",
      },
      {
        caseName: "Haya de la Torre (Colombia v. Peru)",
        citation: "ICJ Reports 1951, p. 71",
        principle:
          "The unlawful grant of diplomatic asylum did not automatically require surrender of the refugee to the territorial State.",
        summary:
          "The Court distinguished termination of asylum from a mandatory method of ending it and left the parties to seek a practical solution.",
      },
      {
        caseName: "Soering v. United Kingdom",
        citation: "ECtHR, Application No. 14038/88 (1989)",
        principle:
          "Extradition may engage responsibility where substantial grounds show a real risk of prohibited inhuman or degrading treatment.",
        summary:
          "The European Court considered the foreseeable treatment awaiting the requested person in the receiving State.",
      },
      {
        caseName: "National Human Rights Commission v. State of Arunachal Pradesh",
        citation: "(1996) 1 SCC 742",
        principle:
          "The State must protect the life and liberty of every human being within India, including Chakma persons facing threatened expulsion and violence.",
        summary:
          "The Supreme Court directed constitutional protection while lawful citizenship applications and governmental processes continued.",
      },
    ],
    examFocus:
      "For nationality, distinguish nationality from citizenship and domicile, then address acquisition, loss, multiple nationality, statelessness and the limited context of Nottebohm. For extradition, identify the legal basis and apply double criminality, speciality, political offence, non bis in idem and human-rights bars. For asylum, distinguish territorial and diplomatic asylum and analyse refugee status, exclusion, cessation and non-refoulement separately.",
    revisionNotes:
      "Nationality is the international legal bond between a person and a State and may be acquired by birth, descent, naturalisation, registration or territorial change. Statelessness means absence of nationality under any State's law. Diplomatic protection generally requires nationality and exhaustion of local remedies. Extradition is formal surrender under treaty and statute, controlled by double criminality, speciality and refusal safeguards. Territorial asylum rests on sovereignty, diplomatic asylum is exceptional, and non-refoulement prohibits transfer to specified persecution or serious harm under applicable refugee and human-rights rules.",
  },
  {
    title: "Treaties",
    shortDescription:
      "A detailed study of treaty formation, consent, reservations, application, interpretation, validity, amendment, termination and suspension.",
    overview:
      "Treaties are a principal source of international law and the primary instrument through which States and international organisations create specific legal obligations. This chapter studies the treaty process from negotiation to entry into force and examines reservations, observance, application, interpretation, third-State effects, amendment, invalidity and termination. The Vienna Convention on the Law of Treaties, 1969 provides the central framework, many provisions of which reflect customary international law. The chapter concludes with depositaries, registration and the constitutional distinction between treaty-making and domestic implementation in India.",
    learningObjectives: [
      "Define a treaty and distinguish it from political declarations, memoranda and non-binding arrangements.",
      "Classify treaties by parties, participation, subject matter, form and law-making function.",
      "Explain treaty-making capacity and the authority to represent a State.",
      "Describe negotiation, adoption and authentication of a treaty text.",
      "Distinguish signature, ratification, acceptance, approval, accession and exchange of instruments.",
      "Determine when a treaty enters into force and operates provisionally.",
      "Define a reservation and distinguish it from an interpretative declaration.",
      "Apply the object-and-purpose test and explain acceptance of and objection to reservations.",
      "Explain pacta sunt servanda, good faith, non-retroactivity and territorial application.",
      "Apply the general rule of treaty interpretation under Articles 31–33 of the Vienna Convention.",
      "Explain the position of third States and the creation of third-party rights or obligations.",
      "Distinguish amendment of a treaty from inter se modification among some parties.",
      "Apply the grounds of invalidity, including error, fraud, corruption, coercion and conflict with jus cogens.",
      "Apply termination and suspension rules, including breach, impossibility and fundamental change of circumstances.",
      "Explain the role of depositaries, registration and publication.",
      "Analyse treaty-making and implementation under the Constitution of India.",
    ],
    detailedContent: `1. Meaning of a Treaty

Article 2(1)(a) of the Vienna Convention on the Law of Treaties, 1969 defines a treaty for the Convention as an international agreement concluded between States in written form and governed by international law, whether embodied in one instrument or in two or more related instruments and whatever its particular designation.

An instrument may therefore be called a convention, covenant, charter, protocol, statute, exchange of notes, agreed minutes or memorandum and still be a treaty. The decisive considerations are the parties, their intention to create legal obligations, the governing legal order and the substance of the arrangement.

The 1969 Convention principally governs treaties between States. Agreements involving international organisations are addressed by other rules, including the 1986 Vienna Convention, much of which has not entered into force, and customary international law. Oral international agreements are not deprived of legal force merely because they fall outside the Convention's written-form definition.

2. Treaties and Non-Binding Instruments

Not every international document is a treaty. A joint political declaration, communiqué, memorandum of understanding or statement of principles may be intended as a non-binding arrangement. Conversely, a document titled “memorandum” may create legal obligations.

Intention is assessed objectively from the language, context, subject matter, form, authority of signatories, dispute provisions, registration practice and subsequent conduct. Words such as “shall,” entry-into-force clauses and formal ratification requirements may indicate legal intention, but no single expression is conclusive.

3. Classification of Treaties

Treaties may be bilateral or multilateral; open or closed; constituent, contractual or law-making; universal, regional or local; self-executing or non-self-executing in domestic constitutional usage; and temporary or indefinite.

A constituent treaty establishes an international organisation. A law-making treaty formulates general standards intended for broad participation. A contractual treaty regulates a particular exchange or relationship. These categories assist analysis but do not alter the binding character of a valid treaty.

4. Capacity to Conclude Treaties

Every State possesses capacity to conclude treaties. International organisations possess treaty capacity within their functions and constituent instruments. Federal units, dependent territories or other entities may possess limited capacity where constitutional law and international acceptance permit.

A State cannot ordinarily avoid international responsibility merely by relying on its internal allocation of treaty authority. Article 46 provides a narrow exception where consent was expressed in manifest violation of an internal rule of fundamental importance concerning competence to conclude treaties.

5. Full Powers and Representation

A person may represent a State for adopting or authenticating a treaty text or expressing consent if they produce appropriate full powers or if practice and circumstances show that the parties intended to treat that person as authorised.

Heads of State, Heads of Government and Ministers for Foreign Affairs may perform all treaty acts without producing full powers. Heads of diplomatic missions may adopt treaty texts between the accrediting and receiving States, and accredited representatives to a conference or organisation may adopt texts in that forum, within Article 7.

An unauthorised act has no legal effect unless subsequently confirmed by the State.

6. Negotiation, Adoption and Authentication

Negotiation develops the proposed obligations and institutional arrangements. Adoption fixes the agreed text. Under Article 9, adoption normally occurs by consent of all participating States, while an international conference may adopt by a two-thirds vote of States present and voting unless the same majority decides on another rule.

Authentication establishes the text as authentic and definitive. It may occur through a procedure specified in the treaty, agreed by participants, or through signature, signature ad referendum or initialling under Article 10.

7. Means of Expressing Consent

Consent to be bound may be expressed by signature, exchange of instruments, ratification, acceptance, approval, accession or another agreed means.

Signature itself creates consent where the treaty so provides, the negotiating States agreed, or the representative's authority shows that intention. Where ratification is required, signature authenticates the text and triggers the Article 18 obligation not to defeat the treaty's object and purpose pending a final decision.

Ratification is the international act by which a State establishes its consent to be bound; it must be distinguished from any domestic constitutional approval preceding it. Acceptance and approval have effects similar to ratification. Accession allows a State that did not sign within the original period to become a party under the treaty's terms.

8. Exchange, Deposit and Notification

Consent may become effective through exchange of instruments, deposit with a depositary, or notification to contracting States or the depositary. The treaty specifies the required act.

Domestic approval alone does not complete an international ratification when deposit of an instrument is required. Equally, international ratification does not automatically make a treaty domestically enforceable if constitutional law requires implementing legislation.

9. Entry into Force and Provisional Application

A treaty enters into force in the manner and on the date it provides or as the negotiating States agree. A multilateral treaty often requires a specified number of ratifications and then enters into force separately for later parties after their consent becomes effective.

Before entry into force, a treaty or part of it may be applied provisionally if the treaty so provides or the negotiating States otherwise agree. Provisional application creates legal duties according to its terms and may be terminated by notice unless the treaty or agreement provides otherwise.

10. Duty Before Entry into Force

Article 18 requires a State to refrain from acts defeating the object and purpose of a treaty after signing subject to ratification, until it makes clear its intention not to become a party, and after expressing consent pending entry into force, provided entry into force is not unduly delayed.

This limited interim obligation is not identical to full performance of every treaty provision. It protects the bargain from being deliberately undermined before binding operation begins.

11. Meaning of a Reservation

A reservation is a unilateral statement, however phrased or named, made when signing, ratifying, accepting, approving or acceding, by which a State purports to exclude or modify the legal effect of specified treaty provisions in their application to that State.

An interpretative declaration states the declaring State's understanding without purporting to exclude or modify legal effect. Classification depends on substance rather than title. A conditional interpretation that limits consent may operate as a reservation.

12. Permissibility of Reservations

Article 19 permits a reservation unless the treaty prohibits it, allows only specified reservations not including the proposed one, or the reservation is incompatible with the treaty's object and purpose.

The object-and-purpose test protects the treaty's essential integrity while allowing broad participation. Special regimes may establish monitoring bodies or specific rules for assessing reservations. A reservation to a peremptory norm cannot permit conduct prohibited by jus cogens.

13. Acceptance and Objection

The effect of a reservation depends on treaty rules and the responses of other parties. Acceptance may establish treaty relations between the reserving and accepting States with the reserved provision modified to the extent of the reservation.

An objection does not automatically prevent the treaty from entering into force between the objecting and reserving States unless the objector clearly expresses that intention. Otherwise, the provision to which the reservation relates may not apply between them to the extent of the reservation.

The constituent instrument of an international organisation may require acceptance by its competent organ. Unanimous acceptance may be necessary where limited participation and full application among all parties are essential conditions of the treaty.

14. Reservations to the Genocide Convention

In its 1951 advisory opinion, the ICJ rejected a rigid unanimity rule for reservations to the Genocide Convention and used compatibility with the treaty's object and purpose as the central standard. The opinion influenced Articles 19–23 of the Vienna Convention.

The case also shows that reservation rules must respond to the character, purpose and participation structure of the particular multilateral treaty.

15. Pacta Sunt Servanda and Good Faith

Article 26 states that every treaty in force is binding upon the parties and must be performed in good faith. Pacta sunt servanda is the foundation of treaty stability. Good faith prohibits evasion through artificial interpretation or conduct defeating agreed obligations.

Article 27 provides that a party may not invoke internal law as justification for failure to perform a treaty, without prejudice to the narrow Article 46 rule concerning manifest violations of fundamental internal competence rules.

16. Application in Time and Territory

Under Article 28, treaty provisions do not bind a party regarding acts, facts or situations that ceased before entry into force unless a different intention appears. This is the principle of non-retroactivity, distinct from continuing situations or later procedural use of earlier facts.

Under Article 29, a treaty is binding upon each party in respect of its entire territory unless a different intention appears. Special territorial clauses, federal arrangements and territorial-status rules may alter application.

17. Successive Treaties on the Same Subject

Article 30 addresses successive treaties relating to the same subject, subject to Article 103 of the UN Charter. Where all parties to the earlier treaty are parties to the later treaty, the earlier applies only to the extent compatible with the later. Where participation differs, relations between two States are governed by the treaty to which both are parties.

Conflict analysis must also consider lex specialis, lex posterior, jus cogens and whether the instruments truly regulate the same subject.

18. General Rule of Interpretation

Article 31 requires a treaty to be interpreted in good faith according to the ordinary meaning of its terms in their context and in light of its object and purpose. These elements form one integrated rule rather than a rigid sequence.

Context includes the text, preamble and annexes, and specified agreements or instruments connected with conclusion. Together with context, account is taken of subsequent agreements regarding interpretation, subsequent practice establishing agreement, and relevant rules of international law applicable between the parties. A special meaning is given if the parties so intended.

Interpretation must neither isolate words from their context nor replace the agreed text with a subjective view of purpose.

19. Supplementary Means and Multiple Languages

Article 32 permits recourse to supplementary means, including preparatory work and circumstances of conclusion, to confirm the Article 31 meaning or resolve ambiguity, obscurity, manifest absurdity or unreasonableness.

Under Article 33, each authenticated language text is equally authoritative unless the treaty provides otherwise. A difference should be reconciled by adopting the meaning that best reconciles the texts, having regard to object and purpose.

20. Treaties and Third States

The rule pacta tertiis nec nocent nec prosunt means that a treaty creates neither obligations nor rights for a third State without its consent. Under Article 35, a third-State obligation requires an intention by the parties to create it and express written acceptance by the third State.

A treaty right may arise for a third State under Article 36 where the parties intend to accord it and the third State assents; assent may be presumed unless the treaty provides otherwise. Treaty rules may separately become binding on third States as customary international law.

21. Amendment and Modification

A treaty may be amended by agreement of the parties. A multilateral amendment must follow the treaty and Vienna Convention rules concerning notice, participation and consent. A State is not bound by an amendment it has not accepted merely because other parties adopt it.

Inter se modification occurs when some parties modify treaty operation only among themselves. It is permitted where the treaty allows it or where it does not affect other parties' rights or obligations and is compatible with effective execution of the treaty's object and purpose.

22. Validity and Separability

The validity of a treaty or consent may be impeached only through international-law rules such as those in the Vienna Convention. Grounds are narrowly framed to protect stability.

Whether an invalidity ground affects the entire treaty or only clauses depends on separability requirements. A party may lose the right to invoke a ground through express agreement or conduct amounting to acquiescence after becoming aware of the facts, except for specified fundamental grounds.

23. Error, Fraud and Corruption

Article 48 permits error where it relates to a fact or situation assumed to exist when the treaty was concluded and forming an essential basis of consent. A State cannot rely on an error to which it contributed or where circumstances put it on notice.

Fraudulent conduct by another negotiating State may invalidate consent under Article 49. Corruption of a representative directly or indirectly by another negotiating State may be invoked under Article 50.

24. Coercion

Article 51 renders consent without legal effect where procured by coercion of a State representative through acts or threats directed against that person.

Article 52 makes a treaty void where its conclusion was procured by the threat or use of force in violation of the principles of the UN Charter. This protects free consent and the prohibition on unlawful force.

25. Jus Cogens

Article 53 makes a treaty void at conclusion if it conflicts with a peremptory norm of general international law—a norm accepted and recognised by the international community of States as a whole as one from which no derogation is permitted and which can be modified only by a later norm of the same character.

Under Article 64, if a new peremptory norm emerges, an existing treaty conflicting with it becomes void and terminates. Jus cogens must be identified through rigorous legal evidence rather than assertion.

26. Termination, Withdrawal and Suspension by Agreement

A treaty may terminate, permit withdrawal or be suspended according to its provisions or at any time by consent of all parties after consultation. A treaty containing no withdrawal clause is not ordinarily subject to unilateral denunciation unless the parties intended it or such a right is implied by the treaty's nature.

Notice requirements protect stability and allow parties to manage consequences. Termination releases future performance but does not ordinarily erase rights, obligations or legal situations created through prior execution.

27. Material Breach

Article 60 defines material breach as repudiation not sanctioned by the Convention or violation of a provision essential to the accomplishment of the treaty's object or purpose.

For bilateral treaties, material breach may justify termination or suspension by the injured party. Multilateral treaties require more complex rules concerning unanimous response, specially affected parties and radical alteration of each party's position. Humanitarian provisions protecting persons are specially safeguarded from reciprocal suspension.

28. Supervening Impossibility

Article 61 permits impossibility where permanent disappearance or destruction of an indispensable object makes performance impossible. Temporary impossibility may justify suspension rather than termination.

A party cannot invoke impossibility if it results from that party's breach of the treaty or another international obligation owed to a treaty party. Mere increased expense or difficulty is insufficient.

29. Fundamental Change of Circumstances

Article 62, rebus sic stantibus, is an exceptional and narrowly applied ground. The unforeseen change must concern circumstances constituting an essential basis of consent and must radically transform the extent of obligations still to be performed.

It cannot be invoked for a boundary treaty or where the change results from the invoking party's breach. Stability of treaties requires restrictive application. In Gabčíkovo-Nagymaros, the ICJ rejected Hungary's grounds for termination and emphasised the stringent Vienna Convention conditions.

30. Severance of Diplomatic Relations and Armed Conflict

Severance of diplomatic or consular relations does not by itself affect treaty relations unless such relations are indispensable for application. The Vienna Convention does not comprehensively determine the effect of armed conflict on treaties.

Modern analysis considers the treaty's terms, subject matter, intention, applicable conflict law and whether continued operation is compatible with hostilities. Humanitarian, boundary, human-rights and institutional treaties may continue according to their nature and applicable rules.

31. Procedure for Invoking Invalidity or Termination

A party invoking invalidity, termination, withdrawal or suspension must notify other parties of the measure and reasons. If an objection arises, parties must seek a solution through peaceful means. Additional procedures apply to unresolved disputes under the Convention.

Unilateral announcement does not automatically establish a valid ground. The party must comply with substantive and procedural rules and continue performing while the treaty remains legally operative.

32. Depositaries, Registration and Publication

A depositary may be one or more States, an international organisation or its chief administrative officer. Functions include custody of the original text, receiving signatures and instruments, examining formal validity, notifying parties, registering the treaty and addressing errors.

Article 102 of the UN Charter requires UN members to register treaties and international agreements with the Secretariat and provides that an unregistered agreement may not be invoked before a UN organ. Non-registration does not by itself make the treaty void.

33. Treaty-Making in India

The Union executive ordinarily conducts foreign relations and concludes treaties under Article 73 and relevant Union List entries. The Constitution does not impose a universal requirement of prior parliamentary approval for every treaty.

Executive treaty-making cannot amend the Constitution, override an Act of Parliament or by itself alter enforceable domestic rights where legislation is required. Parliament may legislate under Article 253 to implement any treaty, agreement, convention or international decision, notwithstanding the ordinary federal distribution of subjects.

In Maganbhai Ishwarbhai Patel v. Union of India, the Supreme Court distinguished entry into an international agreement from implementation requiring legislation where domestic law or rights must change.

34. Examination and Problem-Solving Method

For a treaty problem:
(a) identify the instrument and determine whether it is legally binding;
(b) identify parties, capacity and representative authority;
(c) determine the means and date of consent and entry into force;
(d) identify reservations, acceptances and objections;
(e) apply Articles 31–33 to interpret the relevant provision;
(f) consider temporal, territorial and third-State application;
(g) distinguish amendment from inter se modification;
(h) test each asserted invalidity, termination or suspension ground strictly;
(i) check jus cogens, Article 103 and procedural requirements; and
(j) distinguish international obligation from domestic enforceability.`,
    keyPoints: [
      "A treaty is an international agreement governed by international law; its title is not decisive.",
      "Legal intention distinguishes treaties from political and non-binding arrangements.",
      "States possess treaty capacity, while international organisations act within their constituent functions.",
      "Consent may be expressed by signature, ratification, acceptance, approval, accession, exchange or another agreed means.",
      "Entry into force and domestic enforceability are separate questions.",
      "A reservation purports to exclude or modify legal effect; an interpretative declaration ordinarily explains meaning only.",
      "Reservations must comply with treaty limits and the object-and-purpose test.",
      "Pacta sunt servanda requires treaties in force to be performed in good faith.",
      "A party cannot invoke internal law as justification for treaty non-performance, subject to the narrow Article 46 rule.",
      "Articles 31–33 create an integrated method using text, context, object and purpose, subsequent practice and supplementary means.",
      "A treaty creates no obligations or rights for a third State without the legally required consent.",
      "Amendment binds accepting parties; inter se modification must protect other parties and the treaty's object and purpose.",
      "Error, fraud, corruption, coercion and conflict with jus cogens are narrowly regulated grounds of invalidity.",
      "Material breach, impossibility and fundamental change are not interchangeable and must satisfy strict conditions.",
      "UN registration affects invocation before UN organs but does not determine a treaty's validity.",
      "In India, the executive generally concludes treaties while Parliament implements them through Article 253 where domestic law must change.",
    ],
    provisions: [
      "Vienna Convention on the Law of Treaties, 1969 — Articles 2–18",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 19–30",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 31–41",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 42–72",
      "Charter of the United Nations, 1945 — Article 102",
      "Charter of the United Nations, 1945 — Article 103",
      "Constitution of India — Articles 73, 246 and 253",
      "Constitution of India — Seventh Schedule, Union List Entries 10–14",
    ],
    importantCases: [
      {
        caseName: "Reservations to the Convention on the Prevention and Punishment of the Crime of Genocide",
        citation: "ICJ Reports 1951, p. 15",
        principle:
          "Compatibility with a multilateral treaty's object and purpose is central to the permissibility of reservations.",
        summary:
          "The advisory opinion rejected a rigid unanimity approach and shaped the modern Vienna Convention reservation framework.",
      },
      {
        caseName: "Temple of Preah Vihear (Cambodia v. Thailand)",
        citation: "ICJ Reports 1962, p. 6",
        principle:
          "Conduct, acceptance and failure to object may have important legal consequences in determining agreement and preclusion.",
        summary:
          "The Court examined Thailand's conduct concerning a boundary map and its later inability to deny the accepted settlement.",
      },
      {
        caseName: "Aegean Sea Continental Shelf (Greece v. Turkey)",
        citation: "ICJ Reports 1978, p. 3",
        principle:
          "Whether a communiqué or similar instrument is binding depends on its terms and the circumstances, not its designation alone.",
        summary:
          "The Court interpreted a joint communiqué to determine whether it constituted consent to ICJ jurisdiction.",
      },
      {
        caseName: "Territorial Dispute (Libyan Arab Jamahiriya v. Chad)",
        citation: "ICJ Reports 1994, p. 6",
        principle:
          "Treaty interpretation begins with the text read in context and in light of object and purpose; boundary settlements possess stability.",
        summary:
          "The ICJ interpreted the 1955 Treaty of Friendship and Good-Neighbourliness to determine the parties' boundary.",
      },
      {
        caseName: "Gabčíkovo-Nagymaros Project (Hungary/Slovakia)",
        citation: "ICJ Reports 1997, p. 7",
        principle:
          "Necessity, impossibility, material breach and fundamental change have distinct and stringent requirements and did not justify unilateral treaty termination on the facts.",
        summary:
          "The Court applied Vienna Convention rules and customary principles to suspension, breach and attempted termination of the 1977 project treaty.",
      },
      {
        caseName: "Maganbhai Ishwarbhai Patel v. Union of India",
        citation: "(1970) 3 SCC 400",
        principle:
          "India's executive may conclude international agreements, but legislation is required where implementation changes domestic law or legal rights.",
        summary:
          "The Supreme Court distinguished treaty-making at the international level from municipal implementation under the Constitution.",
      },
    ],
    examFocus:
      "Structure treaty answers chronologically: definition and legal intention, capacity and authority, adoption and authentication, consent and entry into force, reservations, performance, interpretation, third parties, amendment, invalidity and termination. Apply Articles 31–33 as one integrated interpretation rule, and never treat breach as automatically terminating a treaty. Indian-law questions must distinguish executive treaty-making from legislative implementation under Article 253.",
    revisionNotes:
      "A treaty is an international agreement governed by international law, whatever its name. Consent may be expressed through signature, ratification, accession or another agreed means. Reservations are controlled by treaty terms and the object-and-purpose test. Treaties in force must be performed in good faith and interpreted through text, context, object and purpose under Articles 31–33. Third States are not bound without consent. Invalidity and termination grounds are narrowly regulated to protect stability. In India, the Union executive generally concludes treaties, while Parliament legislates under Article 253 when domestic implementation is required.",
  },
  {
    title: "Amicable Means of Settlement of Disputes",
    shortDescription:
      "A detailed study of negotiation, good offices, mediation, inquiry, conciliation, arbitration, judicial settlement, United Nations procedures and regional arrangements.",
    overview:
      "International law requires States to settle their disputes by peaceful means so that international peace, security and justice are not endangered. This chapter explains the meaning of an international dispute and systematically compares diplomatic methods—negotiation, consultation, good offices, mediation, inquiry and conciliation—with binding legal methods such as arbitration and judicial settlement. It also examines International Court of Justice jurisdiction and procedure, the roles of United Nations organs and regional arrangements, compliance with settlements, and the practical considerations governing the choice and sequencing of procedures.",
    learningObjectives: [
      "Define an international dispute and distinguish a dispute from a political situation or mere difference of views.",
      "Explain the duty of peaceful settlement under the United Nations Charter and customary international law.",
      "Relate peaceful settlement to the prohibition on the threat or use of force.",
      "Distinguish political or diplomatic methods from binding legal methods of settlement.",
      "Explain negotiation and consultation as direct methods of dispute settlement.",
      "Differentiate good offices from mediation.",
      "Explain the purpose and procedure of international inquiry and fact-finding.",
      "Describe conciliation and distinguish it from mediation and arbitration.",
      "Explain the consensual basis, constitution and procedure of international arbitration.",
      "Identify the legal effect of an arbitral award and the limited grounds on which it may be challenged.",
      "Explain the jurisdiction of the International Court of Justice in contentious cases.",
      "Distinguish special agreement, compromissory clauses, optional-clause declarations and forum prorogatum.",
      "Describe provisional measures, intervention, judgments and advisory opinions of the ICJ.",
      "Analyse the roles of the Security Council, General Assembly and Secretary-General in peaceful settlement.",
      "Explain peaceful settlement through regional agencies and arrangements.",
      "Select and apply an appropriate settlement method to a hypothetical international dispute.",
    ],
    detailedContent: `1. Meaning of an International Dispute

An international dispute is a disagreement on a point of law or fact, a conflict of legal views or interests between subjects of international law. The existence of a dispute is determined objectively from the positions and conduct of the parties; one party's formal denial is not necessarily decisive.

A dispute ordinarily requires that the claim of one party is positively opposed by another. A broad “situation” may create international friction without crystallising into specific opposing legal claims. This distinction matters because treaties and institutions sometimes confer authority over disputes, situations or both.

Disputes may concern territory, boundaries, treaty interpretation, diplomatic protection, use of force, trade, investment, environment, maritime rights or responsibility for internationally wrongful acts. They may contain both legal and political elements.

2. Fundamental Duty of Peaceful Settlement

Article 2(3) of the United Nations Charter requires Members to settle their international disputes by peaceful means in such a manner that international peace, security and justice are not endangered. Article 33(1) specifically directs parties to a dispute likely to endanger international peace and security to seek a solution through negotiation, enquiry, mediation, conciliation, arbitration, judicial settlement, regional arrangements or other peaceful means of their own choice.

The duty requires genuine pursuit of peaceful methods, but it does not normally compel acceptance of one particular procedure unless a treaty or prior consent does so. Parties must act in good faith and avoid conduct that aggravates or extends the dispute.

3. Peaceful Settlement and the Prohibition of Force

Article 2(4) prohibits the threat or use of force against the territorial integrity or political independence of a State or otherwise inconsistently with the purposes of the United Nations. Peaceful settlement and the prohibition of force are complementary pillars of the Charter system.

The inability of negotiations to produce agreement does not authorise force. Any claimed exception must rest on a distinct legal basis, such as individual or collective self-defence under Article 51 or Security Council authorisation under Chapter VII, and must satisfy its own conditions.

4. Free Choice of Means

States generally retain freedom to choose suitable peaceful means. The method may be prescribed by a treaty, accepted after a dispute arises, or combined in stages. Parties commonly begin with negotiation, move to mediation or fact-finding, and use arbitration or adjudication if settlement remains impossible.

No universal hierarchy makes one peaceful method superior in every case. Article 33 lists alternatives without an obligatory sequence. However, a specific treaty may require consultation or negotiation before adjudication, making the precondition part of jurisdiction or admissibility.

5. Diplomatic and Legal Methods

Diplomatic methods seek an agreed solution and ordinarily produce non-binding proposals unless incorporated into a treaty or other binding settlement. They include negotiation, consultation, good offices, mediation, inquiry and conciliation.

Legal methods entrust the dispute to an independent tribunal applying law and result in a binding decision. Arbitration and judicial settlement are the principal legal methods. The dividing line is functional: a conciliation commission proposes terms, whereas an arbitral tribunal renders an award.

6. Negotiation

Negotiation is direct discussion between the parties with a view to resolving their differences. It is flexible, confidential if the parties wish, inexpensive and capable of addressing legal, political, economic and technical concerns together.

Negotiation may occur through diplomatic correspondence, meetings, joint commissions, conferences or heads of government. It succeeds only through agreement; no third party imposes a result. Unequal bargaining power, delay and entrenched positions are potential weaknesses.

Where a treaty requires negotiation, the obligation usually demands meaningful engagement rather than a guaranteed settlement. Parties should exchange views, consider proposals and attempt to reconcile competing interests in good faith.

7. Consultation

Consultation is a structured exchange of information and views, often required before a State adopts a measure affecting another State. It can prevent a disagreement from developing into a formal dispute and is common in environmental, trade and resource-sharing treaties.

Consultation may be narrower than negotiation, but the terms frequently overlap. Compliance depends on the governing instrument. A duty to consult generally requires timely notice, relevant information and a real opportunity to discuss the proposed action; it does not automatically confer a veto.

8. Good Offices

In good offices, a third party brings disputing parties into contact, restores communication or provides facilities for dialogue. The third party does not ordinarily participate actively in the substance of negotiations or propose settlement terms.

Good offices may be offered by a State, international organisation, Secretary-General, regional body or respected individual. The parties' consent remains essential, and they retain control over the result.

9. Mediation

Mediation involves a more active third party who participates in discussions, identifies common ground, frames issues and may propose terms of settlement. Recommendations are normally non-binding unless accepted by the parties.

An effective mediator must possess the parties' confidence, impartiality, knowledge and sufficient diplomatic influence. Mediation permits creative solutions beyond the remedies a court could order, but success depends on continued consent and political willingness.

Good offices may develop into mediation if the third party begins addressing substance with the parties' approval.

10. Inquiry and Fact-Finding

An international commission of inquiry investigates disputed facts through evidence, documents, site visits, experts and hearings. It is especially useful when political disagreement is intensified by conflicting accounts of an incident.

Inquiry ordinarily clarifies facts without deciding legal responsibility. The report is generally non-binding unless the parties agree otherwise. Accurate fact-finding can narrow issues, support negotiation and prevent escalation.

The Hague Conventions of 1899 and 1907 promoted international commissions of inquiry. Modern fact-finding is also conducted by United Nations organs, treaty bodies and specially constituted commissions.

11. Conciliation

Conciliation combines investigation with settlement proposals. An independent commission examines facts and law, hears the parties and issues a report recommending terms for resolution.

Unlike mediation, conciliation is normally more formal and institutionalised. Unlike arbitration, its final report is ordinarily not binding. Some treaties make conciliation compulsory in the sense that one party can initiate the procedure, while leaving acceptance of the proposed outcome voluntary.

12. Arbitration

International arbitration is the settlement of a dispute by judges chosen by the parties on the basis of law, resulting in a binding award. Consent is expressed through a special arbitration agreement after the dispute, an arbitration clause in an earlier treaty, or another binding instrument.

The parties can select arbitrators, seat, language, procedure, applicable law and scope of issues. This flexibility is valuable for technical disputes and matters requiring confidentiality or specialist knowledge.

13. The Compromis and Constitution of a Tribunal

The arbitration agreement or compromis identifies the parties, dispute, questions submitted, applicable law, tribunal composition, procedure and effect of the award. Clear drafting defines the tribunal's jurisdiction.

Tribunals commonly consist of three or five members, with each side appointing an arbitrator and agreement on a presiding arbitrator. Appointing authorities or institutional rules prevent deadlock. Arbitrators must be independent and impartial.

14. Arbitral Procedure and Applicable Law

Proceedings generally include written pleadings, documentary and expert evidence, oral hearings, jurisdictional objections, provisional measures and deliberation. The parties must receive equal treatment and a proper opportunity to present their case.

The tribunal applies the law chosen in the arbitration agreement and relevant rules of international law. It may decide ex aequo et bono—according to fairness beyond strict legal rules—only if the parties expressly authorise it.

15. Arbitral Award, Finality and Challenge

An award is binding on the parties and must be performed in good faith. It does not create a general precedent binding third States, though it may be persuasive authority.

International awards are usually final. Limited grounds concerning excess of jurisdiction, corruption, serious procedural irregularity or invalidity of the arbitration agreement may permit challenge where the governing instrument allows. A disagreement over interpretation may be referred back to the tribunal if the agreement provides.

16. Permanent Court of Arbitration

The Permanent Court of Arbitration was established under the 1899 Hague Convention and continued under the 1907 Convention. Despite its name, it is not a standing court with permanent judges. It provides an institutional framework, registry and administrative support for tribunals constituted for particular disputes.

The PCA administers disputes involving States, State entities, international organisations and private parties under applicable consent and rules. Its work may concern territory, maritime boundaries, investment, environment, contracts and other international matters.

17. Judicial Settlement

Judicial settlement submits a dispute to a permanent international court established by treaty. Courts follow constitutive statutes and procedural rules, apply international law and issue binding judgments in cases within their jurisdiction.

The International Court of Justice is the principal judicial organ of the United Nations. Other courts and tribunals operate in specialised or regional fields, including the International Tribunal for the Law of the Sea and regional human-rights courts.

18. Consent as the Basis of ICJ Jurisdiction

The ICJ has no general compulsory jurisdiction over all disputes merely because States are UN Members. Contentious jurisdiction rests on State consent. Consent may be given through:

(a) a special agreement submitting an existing dispute;
(b) a compromissory clause in a treaty covering disputes about that treaty;
(c) reciprocal optional-clause declarations under Article 36(2) of the Statute; or
(d) forum prorogatum, where a respondent subsequently and unequivocally accepts jurisdiction.

Jurisdiction must exist at the relevant date and within the subject-matter, personal and temporal scope of consent. Reservations to optional-clause declarations and reciprocity may limit jurisdiction.

19. Jurisdiction, Admissibility and Applicable Law

Jurisdiction concerns the Court's legal power to decide the dispute. Admissibility asks whether an otherwise jurisdictional claim is fit for judicial determination, considering matters such as exhaustion of local remedies, nationality of claims, indispensable third parties or abuse of process.

Under Article 38 of its Statute, the Court applies treaties, international custom, general principles of law and, as subsidiary means, judicial decisions and teachings of highly qualified publicists. The Court may decide ex aequo et bono only if the parties agree.

20. ICJ Contentious Procedure

A case begins by special agreement or unilateral application relying on an existing title of jurisdiction. Written pleadings and oral hearings address preliminary objections, facts, evidence and legal submissions. The Court may join cases or permit intervention under Articles 62 and 63 where statutory conditions are met.

Only States may be parties in contentious cases. International organisations may provide information in appropriate circumstances but cannot appear as contentious parties before the ICJ.

21. Provisional Measures

Article 41 authorises the ICJ to indicate provisional measures to preserve the respective rights of the parties pending final judgment. The Court examines prima facie jurisdiction, plausibility of asserted rights, a link between those rights and requested measures, and real and imminent risk of irreparable prejudice requiring urgency.

Provisional measures are legally binding. The Court may also direct parties not to aggravate or extend the dispute. These measures protect rights without prejudging the merits.

22. ICJ Judgments and Compliance

An ICJ judgment is final, without appeal, and binding only between the parties and in respect of that particular case under Articles 59 and 60 of the Statute. Interpretation may be requested if the meaning or scope of a judgment is disputed. Revision is available only under the narrow conditions of Article 61 when a decisive previously unknown fact is discovered.

Under Article 94 of the UN Charter, each Member undertakes to comply with an ICJ decision in a case to which it is a party. If a party fails to perform, the other may approach the Security Council, which may make recommendations or decide measures; political and veto considerations can affect that process.

23. Advisory Opinions

The General Assembly and Security Council may request an advisory opinion on any legal question. Other authorised UN organs and specialised agencies may request opinions on legal questions arising within the scope of their activities.

Advisory opinions are not formally binding unless another instrument gives them that effect. They nevertheless carry substantial legal authority, clarify international law and guide institutional action. The advisory function differs from contentious jurisdiction and does not require transforming States into unwilling parties to a binding case.

24. Security Council under Chapter VI

Article 34 permits the Security Council to investigate any dispute or situation that may lead to international friction or endanger peace. Under Article 35, Members and, subject to stated conditions, non-members may bring disputes or situations to its attention.

The Council may recommend appropriate procedures or methods under Article 36, take account of procedures already adopted by the parties, and remember that legal disputes should as a general rule be referred to the ICJ. Under Article 37, parties must refer an unresolved qualifying dispute to the Council if continuation is likely to endanger peace. Article 38 permits recommendations at the request of all parties.

Chapter VI recommendations are generally distinguishable from binding enforcement action under Chapter VII.

25. General Assembly and Secretary-General

The General Assembly may discuss and recommend principles and measures within the Charter's allocation of functions, subject particularly to Article 12 while the Security Council is exercising its functions regarding a dispute or situation. Assembly recommendations are generally non-binding but may facilitate consensus, fact-finding and institutional action.

The Secretary-General uses good offices, mediation, special envoys and preventive diplomacy. Article 99 authorises the Secretary-General to bring to the Security Council's attention any matter that may threaten international peace and security.

26. Regional Agencies and Arrangements

Article 33 recognises resort to regional agencies or arrangements. Chapter VIII, especially Article 52, encourages peaceful settlement of local disputes through regional mechanisms before referral to the Security Council where appropriate.

Regional bodies may provide negotiation forums, mediation, fact-finding, conciliation, courts or political processes. Their proximity and contextual knowledge can assist settlement, but action must remain consistent with the UN Charter. Enforcement action by regional arrangements is subject to Article 53 and generally requires Security Council authorisation.

27. Binding and Non-Binding Outcomes

Negotiation produces a binding result only when the parties embody agreement in a legally binding instrument. Good offices, mediation, inquiry and conciliation ordinarily result in non-binding reports or proposals. Arbitration and judicial settlement produce binding decisions for the parties within the tribunal's jurisdiction.

The binding character of the outcome should not be confused with whether entry into the procedure is voluntary or compulsory. A treaty may permit compulsory conciliation whose recommendation remains non-binding, or compulsory adjudication based on consent given in advance.

28. Compliance and Implementation

Settlement is effective only if implemented. Compliance may be promoted through precise terms, timetables, monitoring, verification, guarantees, joint commissions, reciprocal performance and procedures for interpreting the settlement.

Awards and judgments create international obligations, but domestic implementation may require constitutional or legislative action. Failure to comply may generate further international responsibility and allow recourse to mechanisms provided by the governing treaty or institutional framework.

29. Choosing an Appropriate Method

Parties should consider consent, urgency, need for confidentiality, factual uncertainty, technical complexity, importance of legal precedent, desired remedies, preservation of relations, cost, enforceability and power imbalance.

Negotiation is suitable where compromise is possible; inquiry where facts are disputed; mediation where communication is blocked; conciliation where formal independent proposals may help; arbitration where flexibility and expertise are important; and judicial settlement where an authoritative legal ruling is required.

Hybrid and sequential clauses can combine advantages, but poorly drafted multi-stage procedures may cause delay and jurisdictional disputes.

30. Examination and Problem-Solving Method

For a problem question:
(a) identify the dispute and the opposing legal claims;
(b) identify the Charter and treaty duties to settle peacefully;
(c) check whether a prior agreement prescribes negotiation, consultation, arbitration or adjudication;
(d) determine whether procedural preconditions were fulfilled;
(e) distinguish non-binding diplomatic methods from binding legal settlement;
(f) establish the precise basis and scope of tribunal jurisdiction;
(g) consider provisional protection, evidence, applicable law and remedies;
(h) identify the legal effect and compliance mechanism; and
(i) recommend a proportionate method or sequence suited to the dispute.`,
    keyPoints: [
      "An international dispute is an objectively ascertainable disagreement involving opposing legal or factual claims.",
      "Articles 2(3) and 33 of the UN Charter require peaceful settlement without ordinarily imposing one universal method.",
      "The peaceful-settlement duty complements the Article 2(4) prohibition on the threat or use of force.",
      "Negotiation is direct and flexible; consultation commonly requires timely information and a genuine exchange of views.",
      "Good offices restore communication, while mediation involves active participation and possible settlement proposals.",
      "Inquiry determines disputed facts; conciliation also recommends non-binding terms of settlement.",
      "Arbitration is consensual, flexible and binding, with the parties influencing tribunal composition and procedure.",
      "The Permanent Court of Arbitration is an institutional framework supporting tribunals, not a permanently sitting court.",
      "The ICJ's contentious jurisdiction always rests on State consent.",
      "ICJ consent may arise through special agreement, compromissory clause, optional-clause declarations or forum prorogatum.",
      "Only States may be parties in ICJ contentious proceedings.",
      "ICJ provisional measures are binding and preserve plausible rights against urgent irreparable prejudice.",
      "ICJ judgments are final and binding only between the parties and for the particular case.",
      "Advisory opinions are generally non-binding but possess substantial legal authority.",
      "Chapter VI empowers the Security Council principally to investigate and recommend peaceful procedures or terms.",
      "Regional arrangements may settle local disputes peacefully but must operate consistently with the UN Charter.",
      "The legal effect of an outcome depends on the chosen process and instrument, not simply the presence of a third party.",
      "Method selection should consider consent, urgency, factual complexity, confidentiality, relations, remedies and enforceability.",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 1(1), 2(3) and 2(4)",
      "Charter of the United Nations, 1945 — Chapter VI, Articles 33–38",
      "Charter of the United Nations, 1945 — Articles 11–12, 52–54, 94 and 99",
      "Statute of the International Court of Justice — Articles 34–38",
      "Statute of the International Court of Justice — Articles 41, 59–63 and 65–68",
      "Hague Convention for the Pacific Settlement of International Disputes, 1899",
      "Hague Convention for the Pacific Settlement of International Disputes, 1907",
      "Manila Declaration on the Peaceful Settlement of International Disputes, 1982",
    ],
    importantCases: [
      {
        caseName: "Mavrommatis Palestine Concessions",
        citation: "PCIJ, Series A, No. 2 (1924)",
        principle:
          "A dispute is a disagreement on a point of law or fact, or a conflict of legal views or interests between parties.",
        summary:
          "The Permanent Court supplied the classic definition used to determine whether an international dispute exists.",
      },
      {
        caseName: "Northern Cameroons (Cameroon v. United Kingdom)",
        citation: "ICJ Reports 1963, p. 15",
        principle:
          "The judicial function requires that a judgment have practical consequence and not merely pronounce on an abstract or moot disagreement.",
        summary:
          "The Court declined to adjudicate where the circumstances meant its judgment could not effectively affect the parties' legal relations.",
      },
      {
        caseName: "North Sea Continental Shelf",
        citation: "ICJ Reports 1969, p. 3",
        principle:
          "An obligation to negotiate requires meaningful negotiations with a view to agreement, not formal participation while insisting on an unchanged position.",
        summary:
          "The Court directed the parties to negotiate delimitation in good faith according to equitable principles and relevant circumstances.",
      },
      {
        caseName: "Corfu Channel (United Kingdom v. Albania)",
        citation: "ICJ Reports 1949, p. 4",
        principle:
          "International adjudication rests on consent, and circumstantial evidence may be important where territorial control makes direct proof unavailable.",
        summary:
          "The Court decided responsibility and reparation arising from mine explosions in Albanian waters while addressing evidence and sovereignty.",
      },
      {
        caseName: "Nuclear Tests (Australia v. France; New Zealand v. France)",
        citation: "ICJ Reports 1974, pp. 253 and 457",
        principle:
          "The Court determines objectively whether a dispute continues to exist and will not decide a case where the claim has lost its object.",
        summary:
          "France's public unilateral commitments removed the basis for further judicial determination of the applicants' requests.",
      },
      {
        caseName: "LaGrand (Germany v. United States of America)",
        citation: "ICJ Reports 2001, p. 466",
        principle:
          "Provisional measures indicated under Article 41 of the ICJ Statute are legally binding.",
        summary:
          "The Court clarified the binding effect of provisional measures while deciding violations of consular-notification obligations.",
      },
      {
        caseName: "Aegean Sea Continental Shelf (Greece v. Turkey)",
        citation: "ICJ Reports 1978, p. 3",
        principle:
          "ICJ jurisdiction requires a valid and sufficiently clear expression of State consent covering the dispute.",
        summary:
          "The Court found that the relied-on instruments did not provide jurisdiction over the continental-shelf dispute.",
      },
      {
        caseName: "Island of Palmas (Netherlands/United States)",
        citation: "RIAA, Vol. II, p. 829 (1928)",
        principle:
          "A validly constituted arbitral tribunal can settle territorial title through a final, reasoned award applying international law.",
        summary:
          "The arbitrator preferred the Netherlands' continuous and peaceful display of authority over the United States' derivative discovery claim.",
      },
    ],
    examFocus:
      "Begin by defining an international dispute and stating Articles 2(3), 2(4) and 33 of the UN Charter. Classify each method as diplomatic or legal and state whether its result is binding. In an ICJ problem, identify the exact title, scope and date of consent before addressing admissibility or merits. Distinguish good offices from mediation, inquiry from conciliation, and the PCA from a permanent court. Conclude by matching the procedure to the dispute's urgency, factual complexity, political sensitivity and need for an enforceable ruling.",
    revisionNotes:
      "States must settle international disputes peacefully and may generally choose negotiation, consultation, good offices, mediation, inquiry, conciliation, arbitration, judicial settlement or regional processes. Diplomatic methods normally depend on agreed acceptance of the outcome; arbitration and adjudication yield binding decisions. Arbitration offers procedural flexibility, while the ICJ is a permanent court whose contentious jurisdiction rests on State consent. Chapter VI enables Security Council investigation and recommendations, the Secretary-General may use good offices, and regional arrangements may address local disputes consistently with the Charter.",
  },
  {
    title:
      "United Nations: Purposes, Principles, Membership and Principal Organs",
    shortDescription:
      "A detailed study of the United Nations Charter, purposes, principles, membership, legal personality and six principal organs.",
    overview:
      "The United Nations is the central universal organisation for maintaining international peace and security, developing friendly relations, promoting international cooperation and harmonising State action. This chapter traces its establishment and legal personality, explains the purposes and principles of the Charter, examines admission and loss or suspension of membership rights, and systematically studies the composition, voting and functions of the General Assembly, Security Council, Economic and Social Council, Trusteeship Council, International Court of Justice and Secretariat. It also covers peacekeeping, subsidiary organs, specialised agencies, privileges and immunities, Charter amendment and contemporary reform debates.",
    learningObjectives: [
      "Explain the historical development from the League of Nations to the United Nations.",
      "Describe the legal nature of the UN Charter as both a treaty and the constituent instrument of an international organisation.",
      "Explain the international legal personality and implied powers of the United Nations.",
      "State and apply the four purposes of the United Nations under Article 1.",
      "Explain the governing principles in Article 2, including sovereign equality, good faith, peaceful settlement and non-use of force.",
      "Analyse the domestic-jurisdiction limitation and its relationship with Charter enforcement action.",
      "Distinguish original Members from States admitted under Article 4.",
      "Explain admission, suspension, expulsion, withdrawal and representation questions.",
      "Identify the six principal organs established by Article 7.",
      "Explain the composition, voting and powers of the General Assembly.",
      "Explain the composition, voting, veto and responsibilities of the Security Council.",
      "Distinguish Security Council action under Chapters VI and VII.",
      "Describe the constitutional basis and legal character of United Nations peacekeeping.",
      "Explain the composition and coordinating functions of ECOSOC.",
      "Describe the trusteeship system and the present status of the Trusteeship Council.",
      "Explain the composition, jurisdiction and functions of the International Court of Justice.",
      "Explain the role, independence and powers of the Secretary-General and Secretariat.",
      "Distinguish principal organs, subsidiary organs, programmes and specialised agencies.",
      "Explain UN privileges and immunities, budgetary arrangements and Charter amendment.",
      "Evaluate major proposals for reform of the United Nations system.",
    ],
    detailedContent: `1. Historical Background

The devastation of two world wars demonstrated the need for a universal organisation capable of combining collective security with economic, social and legal cooperation. The League of Nations, created after the First World War, made important contributions but was weakened by limited participation, unanimity requirements and inadequate enforcement machinery.

During the Second World War, the Atlantic Charter of 1941, the Declaration by United Nations of 1942, the Moscow Declaration of 1943, the Dumbarton Oaks proposals of 1944 and the Yalta arrangements of 1945 progressively shaped the new organisation.

Representatives of 50 States signed the UN Charter at San Francisco on 26 June 1945. The Charter entered into force on 24 October 1945 after the required ratifications. Poland signed later and is treated as an original Member, bringing the original membership to 51.

2. Nature of the United Nations Charter

The Charter is a multilateral treaty and the constituent instrument of an international organisation. It creates organs, distributes powers, imposes duties on Members and establishes procedures for collective action.

Article 103 gives Charter obligations priority where they conflict with obligations under another international agreement. This rule concerns treaty obligations and does not by itself determine every question involving peremptory norms or the interpretation of a Council decision.

The Charter must be interpreted in accordance with international law while recognising its constitutional and evolving institutional character. Practice of organs and Members can assist interpretation but cannot casually amend the text.

3. International Legal Personality

The UN possesses legal personality distinct from its Members. It can hold rights and duties, conclude agreements, own property, bring international claims and enjoy privileges necessary for its functions.

In Reparation for Injuries, the ICJ held that the organisation was intended to exercise functions and possess rights explainable only on the basis of international personality and capacity to operate internationally. The UN is not a State and does not possess unlimited general competence; its powers derive from the Charter.

4. Express and Implied Powers

Express powers are stated in the Charter. Implied powers are those necessary for performing assigned functions effectively. They arise from the purposes, structure and responsibilities of the organisation, not from an unrestricted claim to sovereign power.

The doctrine allows institutional effectiveness while preserving the principle that an international organisation acts within conferred competence. Whether a particular implied power exists depends on the Charter and the function concerned.

5. Purpose One: International Peace and Security

Article 1(1) makes maintenance of international peace and security the first purpose. The UN may take collective measures to prevent and remove threats to peace, suppress aggression or other breaches, and promote peaceful adjustment or settlement consistent with justice and international law.

This purpose supports preventive diplomacy, mediation, peacekeeping, sanctions, authorisation of force and post-conflict peacebuilding, subject to the Charter's allocation of powers.

6. Purpose Two: Friendly Relations and Self-Determination

Article 1(2) seeks friendly relations among nations based on equal rights and self-determination of peoples and other measures to strengthen universal peace.

Self-determination became central to decolonisation and remains relevant to peoples' political status and development. Its application must be assessed with territorial integrity, non-intervention, human rights and the particular legal context.

7. Purpose Three: International Cooperation and Human Rights

Article 1(3) calls for cooperation in solving international economic, social, cultural and humanitarian problems and in promoting respect for human rights and fundamental freedoms without prohibited distinction.

The Charter provided the institutional foundation for later human-rights instruments, specialised agencies, development programmes, humanitarian activities and global cooperation.

8. Purpose Four: Centre for Harmonising Action

Article 1(4) aims to make the UN a centre for harmonising the actions of nations in attaining common ends. The organisation supplies permanent forums, procedures and institutions through which States coordinate responses to collective problems.

This coordinating purpose does not create a world government. The UN depends on conferred legal powers, Member cooperation, assessed resources and political agreement.

9. Sovereign Equality

Article 2(1) declares that the organisation is based on the sovereign equality of all Members. Each Member has one vote in the General Assembly regardless of population, wealth or military power.

Sovereign equality does not mean identical functions in every organ. The Charter itself grants permanent Security Council members a special voting position. States remain equal in legal personality even where institutional powers differ.

10. Good-Faith Performance and Assistance

Article 2(2) requires Members to fulfil Charter obligations in good faith. Article 2(5) requires assistance to the UN in Charter action and abstention from assisting a State against which the organisation takes preventive or enforcement action.

Good faith guides exercise of rights and performance of duties. It does not independently enlarge an organ's competence beyond the Charter.

11. Peaceful Settlement and Non-Use of Force

Article 2(3) requires Members to settle international disputes peacefully so that peace, security and justice are not endangered. Article 2(4) prohibits the threat or use of force against territorial integrity or political independence or otherwise inconsistently with UN purposes.

These principles are complemented by Chapter VI procedures, collective security under Chapter VII and the inherent right of individual or collective self-defence recognised by Article 51.

12. Non-Members and International Peace

Article 2(6) requires the organisation to ensure, so far as necessary for international peace and security, that States which are not Members act in accordance with Charter principles. The provision reflects the universal concern of peace and security while not converting every Charter obligation into a treaty duty for non-parties.

Many foundational Charter rules, including significant aspects of the non-use of force, also exist in customary international law and bind States on that separate basis.

13. Domestic Jurisdiction and Its Exception

Article 2(7) prevents the UN from intervening in matters essentially within a State's domestic jurisdiction and does not require Members to submit such matters to Charter settlement. The principle does not prejudice enforcement measures under Chapter VII.

Whether a matter is domestic can change as international obligations develop. Human rights, peace and security or treaty obligations may remove an issue from the sphere of exclusive domestic jurisdiction. Article 2(7) protects domestic competence but is not a shield against valid international obligations.

14. Original Members

Article 3 identifies original Members as States that participated in the San Francisco Conference or previously signed the Declaration by United Nations of 1 January 1942 and then signed and ratified the Charter under Article 110.

Original and subsequently admitted Members enjoy the same membership status. The historical classification does not create superior legal rights for original Members, apart from distinct Charter provisions such as permanent Security Council membership.

15. Admission of New Members

Article 4 opens membership to peace-loving States that accept Charter obligations and, in the organisation's judgment, are able and willing to carry them out. Admission requires a General Assembly decision upon a Security Council recommendation.

The conditions in Article 4 are exhaustive. Political organs exercise judgment in applying them, but they cannot legally add unrelated conditions. In the Security Council, a recommendation is a substantive decision and is subject to the permanent-member voting rule.

16. Suspension and Expulsion

Under Article 5, a Member against which preventive or enforcement action has been taken by the Security Council may be suspended by the General Assembly upon the Council's recommendation. Restoration of rights and privileges is by the Security Council.

Article 6 permits expulsion of a Member that persistently violates Charter principles, again by Assembly decision upon Council recommendation. Formal suspension and expulsion have been rarely or never used in practice as drafted because of their grave legal and political consequences.

17. Loss of Voting Rights for Arrears

Article 19 denies a General Assembly vote to a Member whose financial arrears equal or exceed contributions due for the preceding two full years. The Assembly may permit voting where failure to pay is due to conditions beyond the Member's control.

This is a specific voting disability and must be distinguished from suspension of membership under Article 5.

18. Withdrawal and State Succession

The Charter contains no express withdrawal clause. Indonesia announced withdrawal in 1965 but resumed participation in 1966; the episode was treated as a resumption of cooperation rather than a new admission and did not establish a clear general withdrawal procedure.

State dissolution, unification and succession create distinct membership questions. Practice concerning the USSR/Russian Federation, Yugoslavia, Czechoslovakia and other States shows that outcomes depend on legal continuity, succession facts and institutional acceptance.

19. Representation and Credentials

Membership of a State must be distinguished from which government or representatives occupy its seat. Credentials are examined through General Assembly procedures. Recognition disputes may therefore be addressed institutionally without formally terminating the State's membership.

The change in China's representation in 1971 illustrates a credentials and representation decision concerning the seat of China, including its permanent Security Council position.

20. Principal and Subsidiary Organs

Article 7 establishes six principal organs: the General Assembly, Security Council, Economic and Social Council, Trusteeship Council, International Court of Justice and Secretariat. Necessary subsidiary organs may be established under the Charter.

Principal organs derive their status directly from the Charter. Subsidiary bodies derive authority from the establishing principal organ and cannot lawfully exceed the powers that organ may confer.

21. General Assembly: Composition and Sessions

All UN Members belong to the General Assembly, and each may have up to five representatives but only one vote. It is the organisation's universal deliberative, policymaking and representative organ.

The Assembly meets in regular annual sessions, special sessions and emergency special sessions under applicable Charter and procedural rules. Its six main committees cover disarmament and security, economic and financial matters, social and humanitarian questions, decolonisation and special political matters, administration and budget, and legal affairs.

22. General Assembly: Functions and Powers

Articles 10–17 permit the Assembly to discuss Charter matters, make recommendations, promote cooperation, initiate studies, approve the budget, apportion expenses, elect members of organs and participate in appointments.

Assembly resolutions are generally recommendations rather than binding legislation. They may nevertheless have legal effects in internal matters such as budget and elections, evidence agreement or opinio juris, interpret institutional powers, or contribute to formation of customary law when supported by State practice and legal conviction.

23. General Assembly Voting

Important questions under Article 18 require a two-thirds majority of Members present and voting. These include peace and security recommendations, election of non-permanent Council members, admission, suspension, expulsion, trusteeship and budgetary questions.

Other questions are decided by a majority of Members present and voting, though the Assembly may determine additional categories requiring two-thirds. Abstentions are ordinarily excluded from “present and voting.” Consensus practice can produce decisions without a recorded vote.

24. Article 12 and Uniting for Peace

While the Security Council is exercising its Charter functions concerning a dispute or situation, Article 12 generally limits Assembly recommendations unless the Council requests them. The provision regulates institutional relations but does not eliminate the Assembly's ability to discuss matters or exercise separate powers.

General Assembly Resolution 377 A (V), Uniting for Peace, created a procedure for emergency special sessions when lack of unanimity among permanent Council members prevents the Council from discharging its primary peace-and-security responsibility. The Assembly may recommend collective measures, but it does not acquire the Council's Chapter VII power to impose binding enforcement decisions.

25. Security Council: Composition

The Security Council has 15 members: five permanent members—China, France, the Russian Federation, the United Kingdom and the United States—and ten non-permanent members elected by the General Assembly for two-year terms with attention to contribution and equitable geographical distribution.

The Council has primary, not exclusive, responsibility for international peace and security. Under Article 25, Members agree to accept and carry out its decisions in accordance with the Charter.

26. Security Council Voting and Veto

Each Council member has one vote. Procedural decisions require nine affirmative votes. Other decisions require nine affirmative votes including the concurring votes of permanent members under Article 27(3).

In established practice, a permanent member's abstention does not constitute a veto. A negative vote by a permanent member blocks a substantive draft. Determining whether a question is procedural can itself be important. A party to a dispute must abstain in certain decisions under Chapter VI and Article 52(3), though the rule's operation has varied in practice.

27. Chapter VI and Chapter VII

Chapter VI concerns pacific settlement through investigation and recommendations. Its recommendations are generally non-binding. Chapter VII allows the Council to determine a threat to peace, breach of peace or act of aggression under Article 39 and decide binding measures.

Article 41 measures not involving armed force include economic and diplomatic sanctions. Article 42 permits action by air, sea or land forces where Article 41 measures would be or have proved inadequate. Measures must remain within the Charter and are subject to interpretation and legal limits.

28. Self-Defence and Collective Security

Article 51 preserves the inherent right of individual or collective self-defence if an armed attack occurs, until the Security Council has taken necessary measures. Measures taken must be reported immediately to the Council.

Self-defence is distinct from Council-authorised collective security. It is controlled by necessity, proportionality and the requirements of Article 51 and customary international law.

29. United Nations Peacekeeping

Peacekeeping is not expressly named in the Charter but developed through practice as an instrument for maintaining peace. Traditional principles include consent of the principal parties, impartiality and non-use of force except in self-defence and defence of the mandate.

Modern multidimensional missions may protect civilians, support elections, monitor ceasefires, assist rule-of-law institutions and help implement peace agreements. Peacekeeping differs from peace enforcement, although robust mandates can complicate the boundary.

30. Economic and Social Council

ECOSOC consists of 54 Members elected by the General Assembly for staggered three-year terms. It coordinates economic, social, cultural, educational, health and related work and promotes human rights.

It may conduct studies, make recommendations, prepare draft conventions, convene conferences, create commissions and consult non-governmental organisations under Article 71. ECOSOC coordinates relationships with specialised agencies through agreements approved by the General Assembly.

31. Trusteeship Council

The international trusteeship system supervised trust territories and promoted advancement toward self-government or independence. The Trusteeship Council examined reports and petitions and provided supervision under Chapters XII and XIII.

After Palau, the final trust territory, became independent in 1994, the Council suspended regular operations. It remains one of the six principal organs and is composed of the five permanent Security Council members, meeting as occasion requires. Removing or assigning it a new role would raise Charter questions.

32. International Court of Justice

The ICJ is the principal judicial organ of the UN. Its Statute forms an integral part of the Charter. It consists of 15 independent judges elected separately by the General Assembly and Security Council for nine-year terms, with no two judges of the same nationality.

Only States may be parties in contentious cases, and jurisdiction rests on consent. Judgments are final and binding between the parties for the particular case. The Court also gives advisory opinions at the request of authorised UN organs and agencies.

33. Secretariat and Secretary-General

The Secretariat comprises the Secretary-General and staff required by the organisation. Under Article 97, the General Assembly appoints the Secretary-General upon the Security Council's recommendation.

The Secretary-General is the chief administrative officer, performs functions entrusted by principal organs, submits an annual report and may bring to the Council's attention any matter that may threaten peace under Article 99. Good offices, mediation, preventive diplomacy and public advocacy have made the office politically significant.

34. Independence of the International Civil Service

Under Article 100, the Secretary-General and staff must not seek or receive instructions from any government or external authority. Members undertake to respect their exclusively international character.

Article 101 requires efficiency, competence and integrity as paramount considerations, with due regard to broad geographical recruitment. Independence is functional and does not exempt personnel from accountability under organisational rules.

35. Specialised Agencies, Funds and Programmes

Specialised agencies are autonomous international organisations linked with the UN through agreements under Articles 57 and 63. Examples include the ILO, FAO, UNESCO, WHO, IMF and World Bank institutions. Each has its own constitution, membership and legal personality.

UN funds and programmes, such as UNICEF and UNDP, are generally subsidiary bodies created within the UN system rather than specialised agencies. Precise classification determines governance, finance and legal authority.

36. Privileges and Immunities

Article 105 grants the organisation and representatives of Members and officials the privileges and immunities necessary for independent performance of functions. The 1946 General Convention elaborates immunity of the UN, its property, assets, officials and experts.

Immunity is functional, not a personal reward. The organisation should provide appropriate modes of settlement for certain disputes, and the Secretary-General may waive an official's immunity where it would impede justice and can be waived without prejudice to UN interests.

37. Finance and Budget

The General Assembly considers and approves the budget and apportions expenses among Members under Article 17. The Committee on Contributions advises on scales of assessment, while the Fifth Committee handles administrative and budgetary questions.

Expenses properly incurred for organisational purposes are expenses of the organisation. Financial control is both legal and political because mandates depend on approved resources and Member contributions.

38. Charter Amendment and General Review

Article 108 amendments require adoption by a two-thirds General Assembly vote and ratification by two-thirds of Members, including all permanent Security Council members. Article 109 provides for a General Conference to review the Charter and similarly protects the ratification position of permanent members.

The demanding procedure safeguards institutional stability but makes formal reform difficult. Some changes in practice have occurred through interpretation, resolutions and consistent institutional conduct without textual amendment.

39. Reform of the United Nations

Reform debates include Security Council enlargement, permanent and regional representation, veto restraint, working-method transparency, financing, peacekeeping effectiveness, General Assembly revitalisation and coordination across peace, development and human rights.

Reform proposals must distinguish changes achievable through practice or rules of procedure from those requiring Charter amendment. Institutional legitimacy, representativeness, effectiveness and accountability may point in different directions.

40. Examination and Problem-Solving Method

For a UN problem:
(a) identify the relevant purpose and principle;
(b) identify the organ and its Charter competence;
(c) distinguish principal from subsidiary bodies;
(d) determine the voting rule and whether a veto applies;
(e) classify the measure as a recommendation, internal decision or binding Charter decision;
(f) check institutional limitations, including Articles 2(7), 12 and 24;
(g) assess relations with other organs and Member duties under Articles 25 and 103;
(h) distinguish peacekeeping, Chapter VI settlement, Chapter VII enforcement and Article 51 self-defence; and
(i) support the answer with Charter articles and relevant judicial authority.`,
    keyPoints: [
      "The Charter is both a treaty and the constituent instrument of the United Nations.",
      "The UN has international legal personality and express or necessarily implied powers within its functions.",
      "Article 1 addresses peace and security, friendly relations, cooperation and harmonisation of State action.",
      "Article 2 includes sovereign equality, good faith, peaceful settlement, non-use of force, assistance and domestic jurisdiction.",
      "Charter obligations prevail over conflicting treaty obligations under Article 103.",
      "Admission under Article 4 requires satisfaction of the stated conditions, a Security Council recommendation and a General Assembly decision.",
      "Suspension under Article 5 and expulsion under Article 6 also require Council recommendation and Assembly action.",
      "Representation and credentials disputes concern who occupies a State's seat and are distinct from membership itself.",
      "Article 7 establishes six principal organs; subsidiary organs derive authority from a principal organ.",
      "The General Assembly includes all Members and normally makes recommendations, while possessing binding internal powers in areas such as budget and elections.",
      "Important Assembly questions require a two-thirds majority of Members present and voting.",
      "The Security Council has 15 members and primary responsibility for international peace and security.",
      "A permanent member's negative vote blocks a substantive Council decision, while abstention is not treated as a veto.",
      "Chapter VI mainly concerns non-binding recommendations; Chapter VII authorises binding measures after an Article 39 determination.",
      "Peacekeeping developed through Charter practice and differs from enforcement action.",
      "ECOSOC coordinates economic, social and related work and has 54 elected members.",
      "The Trusteeship Council suspended regular operations in 1994 but remains a principal organ.",
      "The ICJ is the principal judicial organ and has 15 independent judges.",
      "The Secretary-General is chief administrative officer and may invoke Article 99 concerning threats to peace.",
      "Specialised agencies are autonomous organisations linked to the UN and differ from UN funds and programmes.",
      "Privileges and immunities exist to secure independent performance of organisational functions.",
      "Charter amendment requires two-thirds adoption and ratification, including all permanent Security Council members.",
    ],
    provisions: [
      "Charter of the United Nations, 1945 — Articles 1–2",
      "Charter of the United Nations, 1945 — Articles 3–8 and 103–105",
      "Charter of the United Nations, 1945 — Articles 9–22 (General Assembly)",
      "Charter of the United Nations, 1945 — Articles 23–54 (Security Council and regional arrangements)",
      "Charter of the United Nations, 1945 — Articles 55–72 (economic and social cooperation and ECOSOC)",
      "Charter of the United Nations, 1945 — Articles 73–91 (trusteeship system and Trusteeship Council)",
      "Charter of the United Nations, 1945 — Articles 92–101 (ICJ and Secretariat)",
      "Charter of the United Nations, 1945 — Articles 108–109 (amendment and review)",
      "Statute of the International Court of Justice — Articles 2–33 and 34–68",
      "Convention on the Privileges and Immunities of the United Nations, 1946",
    ],
    importantCases: [
      {
        caseName: "Conditions of Admission of a State to Membership in the United Nations",
        citation: "ICJ Reports 1948, p. 57",
        principle:
          "The conditions for admission listed in Article 4(1) are exhaustive and cannot be supplemented by unrelated political conditions.",
        summary:
          "The Court interpreted the Charter criteria governing admission while recognising the judgment entrusted to the political organs.",
      },
      {
        caseName: "Competence of the General Assembly for the Admission of a State",
        citation: "ICJ Reports 1950, p. 4",
        principle:
          "The General Assembly cannot admit a State under Article 4 without a favourable Security Council recommendation.",
        summary:
          "The Court confirmed that admission is a constitutionally shared process requiring sequential action by both organs.",
      },
      {
        caseName: "Reparation for Injuries Suffered in the Service of the United Nations",
        citation: "ICJ Reports 1949, p. 174",
        principle:
          "The United Nations possesses objective international personality and capacities, including implied powers, necessary for its functions.",
        summary:
          "The Court held that the UN could present an international claim for injury to the organisation and its agent.",
      },
      {
        caseName: "Effect of Awards of Compensation Made by the United Nations Administrative Tribunal",
        citation: "ICJ Reports 1954, p. 47",
        principle:
          "The General Assembly validly created an independent tribunal whose final judgments it could not simply refuse to honour.",
        summary:
          "The opinion examined implied institutional power, judicial independence and the legal effect of internal tribunal awards.",
      },
      {
        caseName: "Certain Expenses of the United Nations",
        citation: "ICJ Reports 1962, p. 151",
        principle:
          "Expenditure incurred for operations serving Charter purposes may constitute expenses of the organisation under Article 17(2).",
        summary:
          "The Court addressed financing of UN operations and the distribution of responsibilities among principal organs.",
      },
      {
        caseName: "Legal Consequences for States of the Continued Presence of South Africa in Namibia",
        citation: "ICJ Reports 1971, p. 16",
        principle:
          "Security Council decisions must be interpreted from their terms, context and Charter basis; Article 25 is not confined only to Chapter VII.",
        summary:
          "The Court found South Africa's continued presence illegal and identified consequences for UN Members and other States.",
      },
      {
        caseName: "Applicability of Article VI, Section 22, of the Convention on the Privileges and Immunities of the United Nations",
        citation: "ICJ Reports 1989, p. 177",
        principle:
          "Experts performing missions for the UN enjoy functional privileges and immunities necessary for independent performance.",
        summary:
          "The Court interpreted expert-on-mission status and the functional character of UN immunity.",
      },
      {
        caseName: "Difference Relating to Immunity from Legal Process of a Special Rapporteur",
        citation: "ICJ Reports 1999, p. 62",
        principle:
          "A UN expert's official statements may attract immunity, and the Secretary-General has a central role in determining the scope of official functions.",
        summary:
          "The Court considered immunity of a Special Rapporteur and obligations of the State concerned under the General Convention.",
      },
    ],
    examFocus:
      "Organise an answer around the Charter provision conferring power. Begin with the UN's legal personality and Articles 1–2, then distinguish membership from representation. For organ questions, state composition, voting, functions and legal effect of decisions. Explain that the Assembly has universal representation but usually recommends, while the Council has primary peace-and-security responsibility and may take binding Chapter VII action. Distinguish a permanent-member abstention from a veto, Chapter VI from Chapter VII, peacekeeping from enforcement, principal from subsidiary organs, and specialised agencies from UN programmes.",
    revisionNotes:
      "The UN was established in 1945 by a Charter that is both a treaty and constituent instrument. Its four purposes appear in Article 1 and its governing principles in Article 2. Admission requires an Article 4 Council recommendation and Assembly decision. The six principal organs are the General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ and Secretariat. The Assembly is universal and principally recommendatory; the Council has primary peace-and-security responsibility and binding powers under Chapter VII. ECOSOC coordinates economic and social work, the Trusteeship Council has suspended regular operations, the ICJ performs contentious and advisory functions, and the Secretary-General leads the independent Secretariat. Article 103 prioritises Charter obligations, while Articles 108–109 make formal amendment demanding.",
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
