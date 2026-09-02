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
