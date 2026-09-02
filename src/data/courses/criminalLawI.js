import { createChapterModel } from "../../models/ChapterModel";
import { createCourseModel } from "../../models/CourseModel";

export const CRIMINAL_LAW_I_COURSE_ID =
  "criminal-law-i-transitioning-from-ipc-to-bns";

export const criminalLawICourse = createCourseModel({
  id: CRIMINAL_LAW_I_COURSE_ID,
  title: "Criminal Law I (Transitioning from IPC to BNS)",
  slug: CRIMINAL_LAW_I_COURSE_ID,
  shortDescription:
    "Study the foundational principles of Indian criminal law while understanding the transition from the Indian Penal Code, 1860 to the Bharatiya Nyaya Sanhita, 2023.",
  description:
    "A structured eight-unit course covering the general principles of criminal liability, general exceptions, abetment, conspiracy, offences against the State and public tranquillity, false evidence, offences against the human body, property offences and other major offences, with comparative guidance for the transition from the IPC to the BNS.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 6,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title:
      "Criminal Law I: IPC to BNS Course | NagarikSuraksha",
    description:
      "Study Indian criminal law through eight structured units covering IPC principles, offences and their transition to the Bharatiya Nyaya Sanhita, 2023.",
    focusKeyword: "criminal law IPC to BNS course",
    secondaryKeywords: [
      "Bharatiya Nyaya Sanhita course",
      "IPC criminal law notes",
      "criminal law I LLB",
      "IPC to BNS transition",
    ],
    canonicalUrl:
      "/courses/criminal-law-i-transitioning-from-ipc-to-bns",
  },
});

const units = [
  {
    title: "Concept of Crime, Criminal Liability and General Exceptions",
    shortDescription:
      "An introduction to crime and criminal responsibility, the relationship between actus reus and mens rea, criminal jurisdiction, general explanations, and the defences contained in the General Exceptions.",
    overview:
      "Criminal law determines which acts or omissions are offences, fixes the conditions of personal responsibility, and prescribes punishment through law. This chapter builds the foundation required for the entire Criminal Law I course. It explains the concepts of crime and offence, the maxim actus non facit reum nisi mens sit rea, the territorial and extra-territorial reach of Indian criminal law, the interpretative rules known as General Explanations, and the circumstances in which conduct that would ordinarily satisfy an offence is justified or excused. The chapter studies IPC Sections 1–5, 6–52A and 76–106 alongside the corresponding structure of BNS Sections 1–3 and 14–44.",
    learningObjectives: [
      "Define crime and offence and explain their principal legal characteristics.",
      "Distinguish actus reus from mens rea and explain why both ordinarily operate together in criminal liability.",
      "Identify intention, knowledge, recklessness and negligence as legally relevant mental states.",
      "Explain the territorial and extra-territorial jurisdiction of the IPC and the BNS.",
      "Use the General Explanations and statutory definitions when interpreting an offence.",
      "Classify the General Exceptions as justification or excuse and explain their legal effect.",
      "Apply the rules relating to mistake of fact, accident, necessity, infancy, unsoundness of mind, intoxication, consent, compulsion, slight harm and private defence.",
      "Compare the foundational IPC provisions with their reorganised counterparts under the BNS.",
    ],
    detailedContent: `1. Meaning and Nature of Crime

A crime is a public wrong prohibited by criminal law and ordinarily punishable by the State. It may consist of a positive act, an illegal omission, possession in circumstances prohibited by law, or participation in another person's conduct. Although a criminal act may also cause private injury and give rise to civil liability, criminal proceedings focus on the breach of a public duty and the protection of society.

An offence is conduct made punishable by a statute. The legal definition of each offence identifies the prohibited conduct, required circumstances, mental element, consequence, and any special conditions. Moral blame alone does not create an offence; liability must rest upon a valid law defining the prohibited conduct and its punishment.

The principal characteristics of criminal liability are legality, prohibited conduct, a legally required mental element, causation where a consequence forms part of the offence, absence of a valid general or special defence, and punishment according to law.

2. Actus Reus and Mens Rea

The maxim actus non facit reum nisi mens sit rea means that an act does not ordinarily make a person guilty unless the mind is also legally blameworthy. It expresses the general relationship between the external and mental elements of crime.

Actus reus is the external component. Depending on the offence, it may include conduct, an omission where the law imposes a duty to act, prohibited circumstances, possession, and a prohibited consequence. Where a consequence is required, the prosecution must establish the legally relevant connection between the accused's conduct and that consequence.

Mens rea is the mental element specified or implied by the offence. It may take the form of intention, knowledge, reason to believe, dishonesty, fraud, recklessness or negligence. The precise mental state must be identified from the statutory language; mens rea is not identical for every offence.

The maxim is a general principle, not an inflexible formula. A statute may expressly or by necessary implication create liability without proof of a traditional guilty mind. Courts therefore begin with the text, purpose and scheme of the particular provision.

Motive and intention must be distinguished. Intention concerns the result a person means to bring about; motive explains why the person acts. A good motive does not ordinarily legalise prohibited conduct, although motive may be relevant to evidence, sentencing or a specific statutory defence.

3. Transition from the IPC to the BNS

The Bharatiya Nyaya Sanhita, 2023 came into force on 1 July 2024 and replaced the Indian Penal Code, 1860, subject to repeal-and-savings provisions. Conduct is assessed under the law applicable when it occurred, and Article 20(1) of the Constitution protects against retrospective creation of an offence or enhancement of punishment.

The BNS reorganises and renumbers the foundational rules rather than abandoning all IPC principles. IPC Sections 1–5 dealing with operation and jurisdiction are principally reorganised in BNS Section 1. Many IPC definitions and general explanations formerly spread across Sections 6–52A are consolidated in BNS Sections 2 and 3. IPC General Exceptions in Sections 76–106 substantially reappear, with revised numbering and drafting, in BNS Sections 14–44.

Students must therefore learn concepts rather than rely only on old section numbers. For every problem, first identify the date of the alleged conduct, then identify the applicable statute, locate the offence, read the definitions and general explanations, and finally test any exception or defence.

4. Criminal Jurisdiction

IPC Sections 1–5 set out the Code's title, territorial operation, punishment of offences committed within India, extra-territorial application, and the preservation of special and local laws.

BNS Section 1 applies the Sanhita throughout India. It also recognises extra-territorial application to an Indian citizen committing an offence outside India, a person on a ship or aircraft registered in India wherever located, and a person outside India committing an offence that targets a computer resource located in India. A person liable under Indian law for an offence committed beyond India may be dealt with as if the act had occurred within India, subject to applicable procedural and international-law requirements.

Territorial jurisdiction usually depends on a sufficient statutory connection between the offence and India. Questions of where an act was done, where a consequence occurred, nationality, registration of a vessel or aircraft, and the location of a targeted computer resource may therefore be decisive.

5. General Explanations and Definitions

An offence cannot be interpreted in isolation. IPC Sections 6–52A require penal provisions to be read subject to the General Exceptions and contain definitions and explanations used throughout the Code. The BNS consolidates central definitions in Section 2 and general explanations in Section 3.

Important interpretative concepts include person, public, public servant, movable property, wrongful gain and wrongful loss, dishonestly, fraudulently, reason to believe, good faith, document, electronic record, act, omission, voluntarily, injury, common intention, and participation with knowledge or intention.

Good faith requires due care and attention; an honest assertion made carelessly is not necessarily made in good faith. Reason to believe requires sufficient cause, not mere suspicion. Dishonesty concerns an intention to cause wrongful gain or wrongful loss. Voluntariness may include causing an effect by means which the person intended or knew, or had reason to believe, were likely to cause it.

General explanations also address joint conduct. Where several persons act in furtherance of a common intention, or participate in conduct with the mental state required by law, liability may extend beyond the final physical act. The exact statutory ingredients must still be proved against the person concerned.

6. Nature of General Exceptions

General Exceptions prevent liability even where the apparent elements of an offence are present. A justification treats the conduct as legally permitted in the circumstances, such as a proportionate exercise of private defence. An excuse recognises that the act remains harmful but the actor should not be held blameworthy, such as infancy or legally recognised unsoundness of mind.

The exceptions are part of the statutory scheme and must be read with every offence. They are not unlimited permissions. Each exception has conditions, exclusions and, where relevant, requirements of good faith, proportionality, reasonable apprehension, proper care or absence of criminal intention.

7. Acts Required or Justified by Law and Judicial Acts

IPC Sections 76 and 79, corresponding broadly to BNS Sections 14 and 17, protect acts done by a person bound or justified by law, including a good-faith mistake of fact. A mistake of law is not protected. The distinction is whether the error concerns a factual situation or the content of the law.

IPC Sections 77 and 78, corresponding to BNS Sections 15 and 16, protect judicial acts and acts done pursuant to a court's judgment or order within the statutory conditions. The protection supports lawful administration of justice but does not excuse conduct outside those conditions.

8. Accident and Necessity

IPC Section 80 and BNS Section 18 excuse an accident or misfortune occurring while a lawful act is performed in a lawful manner by lawful means, without criminal intention or knowledge, and with proper care and caution. Failure to exercise proper care may remove the protection.

IPC Section 81 and BNS Section 19 address conduct likely to cause harm but done without criminal intention and in good faith to prevent or avoid a greater or more imminent harm. Necessity requires careful assessment of the danger, purpose, proportionality and surrounding facts.

9. Infancy, Unsoundness of Mind and Intoxication

IPC Sections 82–83 and BNS Sections 20–21 recognise absolute immunity for a child under seven and qualified immunity for a child above seven and under twelve who lacks sufficient maturity to understand the nature and consequences of the conduct on that occasion.

IPC Section 84 and BNS Section 22 apply where, because of unsoundness of mind at the time of the act, the person was incapable of knowing the nature of the act or that it was wrong or contrary to law. The legal test concerns capacity at the relevant time, not merely the existence of a medical diagnosis.

IPC Sections 85–86 and BNS Sections 23–24 distinguish involuntary from voluntary intoxication. Intoxication administered without knowledge or against the person's will may excuse incapacity within the statutory test. Voluntary intoxication ordinarily does not remove the knowledge attributed by law, although the precise offence and required intention remain relevant.

10. Consent and Acts for a Person's Benefit

IPC Sections 87–92 and BNS Sections 25–30 govern harm consented to, acts done in good faith for a person's benefit, acts for children or persons of unsound mind through lawful guardians, invalid consent, and emergency acts without consent.

Consent must be legally valid. Consent obtained under fear or misconception, given by a person unable to understand the nature and consequence of the act, or given below the statutory age in the relevant provision may be ineffective. Consent cannot legalise conduct that remains independently criminal regardless of the harm consented to.

IPC Section 93 and BNS Section 31 protect a communication made in good faith for the benefit of the person receiving it, even though the communication causes harm.

11. Compulsion and Trivial Harm

IPC Section 94 and BNS Section 32 provide a limited defence for conduct compelled by threats creating a reasonable apprehension of instant death, subject to express exclusions and the requirement that the person did not voluntarily place himself in that situation.

IPC Section 95 and BNS Section 33 embody the principle de minimis non curat lex: harm so slight that a person of ordinary sense and temper would not complain is not treated as an offence. Context remains critical; conduct is not trivial merely because physical injury is small.

12. Right of Private Defence

IPC Sections 96–106 and BNS Sections 34–44 recognise the right to defend one's own body, another person's body, and movable or immovable property against specified offences. The right is preventive, not retaliatory.

The right begins when a reasonable apprehension of danger arises and continues while that apprehension continues. It is restricted where there is sufficient time to seek protection from public authorities and generally cannot inflict more harm than necessary. The law identifies exceptional circumstances in which the right may extend to causing death; otherwise it extends only to harm short of death.

Private defence is assessed from the circumstances reasonably perceived at the time, not with detached hindsight. The defender need not calculate force with mathematical precision, but the response must remain connected to defence rather than revenge.

13. Method for Solving Problems

For an examination or practical problem, use the following sequence:

(a) identify the alleged act, omission, circumstance and consequence;
(b) identify the offence and applicable statute based on the date of conduct;
(c) separate the actus reus from the required mens rea;
(d) apply relevant definitions and General Explanations;
(e) check causation and participation, where applicable;
(f) test each condition of any claimed General Exception;
(g) consider statutory limits, good faith, proportionality and evidence; and
(h) state a reasoned conclusion rather than merely naming a section.`,
    keyPoints: [
      "A crime is a public wrong made punishable by law; moral blame by itself is insufficient.",
      "Actus reus concerns prohibited conduct, circumstances, omissions or consequences; mens rea is the legally required mental state.",
      "The maxim actus non facit reum nisi mens sit rea is a general principle subject to the language and purpose of the statute.",
      "Motive explains why a person acted, while intention concerns the result meant to be produced.",
      "The BNS came into force on 1 July 2024; the date of conduct determines which substantive law applies.",
      "IPC Sections 1–5 correspond principally to the operation and jurisdiction framework in BNS Section 1.",
      "IPC Sections 6–52A are reorganised mainly through BNS Sections 2–3.",
      "IPC Sections 76–106 substantially correspond to BNS Sections 14–44.",
      "A mistake of fact may support an exception where statutory conditions are satisfied; a mistake of law does not.",
      "Accident requires a lawful act, lawful manner, lawful means, absence of criminal intention or knowledge, and proper care and caution.",
      "The legal test for unsoundness of mind concerns incapacity at the time of the act.",
      "Consent must be free, informed and legally competent within the applicable statutory rule.",
      "Private defence is preventive, begins with reasonable apprehension, and is limited by necessity and proportionality.",
      "Every criminal-law problem should be analysed through offence, actus reus, mens rea, definitions, causation and available exceptions.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 1–5",
      "Indian Penal Code, 1860 — Sections 6–52A",
      "Indian Penal Code, 1860 — Sections 76–106",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 1–3",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 14–44",
      "Constitution of India — Article 20(1)",
    ],
    examFocus:
      "Begin with the applicable statute and date of conduct. Separate actus reus and mens rea, apply the relevant definition or General Explanation, and then test every ingredient and limitation of the claimed General Exception. Comparison questions should identify the IPC provision, its BNS counterpart, and any material change in structure or wording.",
  },
  {
    title: "Abetment",
    shortDescription:
      "A detailed study of instigation, abetment by conspiracy, intentional aid, the legal character of an abettor, cross-border abetment, and liability when the act or effect differs from what was intended.",
    overview:
      "Abetment extends criminal responsibility to a person who intentionally encourages, plans or facilitates another person's conduct. The abettor may be liable even when the principal actor refuses, lacks legal capacity, acts with a different intention, performs a different act, or causes a different effect. This chapter explains IPC Sections 107–113 and their restructured counterparts in BNS Sections 45–53. It distinguishes the three statutory modes of abetment, identifies the mental connection required between the abettor and the act, explains when completion of the principal offence is unnecessary, and provides a method for analysing consequence-based liability.",
    learningObjectives: [
      "Define abetment and identify its three statutory modes.",
      "Explain instigation through express words, conduct, wilful misrepresentation or wilful concealment.",
      "Distinguish abetment by conspiracy from the independent offence of criminal conspiracy.",
      "Determine when an act or illegal omission amounts to intentional aid.",
      "Explain the legal meaning of abettor and why the principal actor need not be legally capable or guilty.",
      "Analyse abetment committed across national borders under the IPC and BNS.",
      "Apply the punishment rule where the act abetted is committed and no special punishment is provided.",
      "Determine liability where the principal actor has a different intention, performs a different act or causes a different effect.",
      "Distinguish abetment from mere knowledge, presence, association, common intention and attempt.",
      "Compare IPC Sections 107–113 with BNS Sections 45–53.",
    ],
    detailedContent: `1. Meaning and Basis of Abetment

A person may contribute to an offence without personally performing its final physical act. The law of abetment imposes responsibility where a person intentionally stimulates, coordinates or facilitates the doing of a thing by another. It prevents a person from escaping liability merely because another individual carried out the immediate act.

Abetment is an independent form of criminal participation. Its existence depends on the abettor's conduct and mental state, not solely on the conviction of the person abetted. The act abetted need not always be completed, and the person induced or assisted need not always be legally capable of committing the offence.

IPC Section 107 defines abetment of a thing. IPC Sections 108 and 108A explain the abettor and cross-border abetment. IPC Sections 109–113 regulate punishment and liability when the act, intention or effect differs. Under the BNS, these rules are reorganised principally in Sections 45–53, while Section 48 adds express coverage for abetment outside India of an offence committed in India.

2. Three Modes of Abetment

IPC Section 107 and BNS Section 45 recognise three distinct modes:

(a) instigating a person to do a thing;
(b) engaging in a conspiracy for doing that thing, followed by an act or illegal omission in pursuance of the conspiracy and in order to do that thing; or
(c) intentionally aiding the doing of that thing by an act or illegal omission.

The prosecution must identify and prove at least one statutory mode. Merely using the word abetment without showing instigation, the special conspiracy requirements, or intentional aid is insufficient.

The thing abetted may be a positive act or an illegal omission. Liability must be connected to the particular conduct encouraged, planned or assisted.

3. Abetment by Instigation

To instigate is to goad, urge, provoke, incite, encourage or stimulate another person to act. Instigation may be conveyed through spoken or written words, directions, threats, deliberate conduct, or a calculated course of dealing. No fixed phrase is necessary; the court examines the meaning and effect of the conduct in its context.

An angry or careless remark does not automatically become instigation. The alleged words or conduct must reveal the required intention and a sufficiently direct connection with the thing abetted. Context, persistence, authority, relationship between the parties, surrounding acts and proximity to the proposed conduct may all be relevant.

Explanation 1 to IPC Section 107, retained in BNS Section 45, treats wilful misrepresentation or wilful concealment of a material fact that a person is bound to disclose as instigation when it voluntarily causes, procures, or attempts to cause or procure the thing to be done.

The concealment must be wilful, the fact must be material, and there must be a duty to disclose it. Innocent error, silence without a legal duty, or an immaterial omission does not satisfy this rule.

Instigation may be complete even if the person instigated refuses to act. For example, if A intentionally urges B to murder C and B refuses, A may nevertheless have committed abetment, subject to the applicable punishment provision.

4. Abetment by Conspiracy

The second mode requires:

(a) an engagement between the abettor and one or more persons in a conspiracy for doing the thing; and
(b) an act or illegal omission in pursuance of that conspiracy and in order to the doing of that thing.

Agreement alone is not sufficient for abetment by conspiracy under this limb; the required act or illegal omission must follow. The act need not itself be illegal if it is done in pursuance of the plan and in order to accomplish the thing abetted.

Abetment by conspiracy must be distinguished from the substantive offence of criminal conspiracy. For the abetment mode, the statutory act or illegal omission in pursuance is essential. Criminal conspiracy is separately defined and may, depending on its object, be complete upon agreement under its own statutory conditions. The two concepts overlap but are not interchangeable.

A person need not communicate directly with every participant if the evidence proves intentional participation in the relevant plan and the required act or omission. Mere knowledge that others have formed a plan is not the same as engaging in it.

5. Abetment by Intentional Aid

A person intentionally aids when, by an act or illegal omission, that person deliberately facilitates the doing of the thing. Explanation 2 to IPC Section 107 and BNS Section 45 recognises aid where something is done before or at the time of commission in order to facilitate the act and the conduct in fact facilitates it.

Aid may include supplying a weapon, providing transport, opening access, disabling security, keeping watch, sharing material information, or deliberately omitting a legal duty so that the act can occur. The form of assistance depends on the facts.

The aid must be intentional. Mere presence, accidental assistance, passive knowledge, association with the offender, or failure to prevent an offence where no legal duty exists will not ordinarily constitute intentional aid. Presence may become relevant where it was intended to encourage, protect or facilitate the principal actor.

An illegal omission can amount to aid where the alleged abettor was legally bound to act and deliberately failed to do so for the purpose of facilitating the thing. The source and content of the legal duty must be identified.

6. Who Is an Abettor?

IPC Section 108 and BNS Section 46 describe an abettor as a person who abets the commission of an offence or an act that would be an offence if performed by a person legally capable of committing it with the same intention or knowledge as the abettor.

Several consequences follow:

First, an illegal omission may be abetted even where the abettor is not personally bound to perform the omitted duty.

Second, completion of the act abetted is not essential to the existence of abetment. The required consequence of the principal offence also need not occur.

Third, the person abetted need not possess legal capacity, guilty intention or knowledge. A person who intentionally uses a child or a person of unsound mind as an instrument may remain liable as an abettor.

Fourth, abetment of abetment is itself an offence. A may be liable for intentionally inducing B to induce C to commit an offence.

Fifth, an abettor may participate through one mode while the intermediate participant uses another. The evidence must establish the mental and causal connection required by the relevant statutory provision.

7. Mental Element of Abetment

Abetment is not established by objective assistance alone. Instigation must be intentional; participation in the conspiracy must be conscious and directed to the thing; aid must be intentionally provided.

The abettor's mens rea is assessed separately from that of the principal actor. The law expressly deals with situations in which the principal acts with a different intention or knowledge. The abettor's liability therefore depends on what the abettor intended, knew, facilitated and could legally foresee under the applicable provision.

Motive may provide evidentiary context but does not replace proof of intention. A person may have a hostile motive yet not abet the offence; conversely, a person may intentionally aid for financial gain without sharing the principal actor's personal motive.

8. Cross-Border Abetment

IPC Section 108A and BNS Section 47 cover a person in India who abets an act outside India that would constitute an offence if committed in India.

BNS Section 48 additionally states that a person outside India who abets an act in India, which would constitute an offence if committed in India, commits abetment under the BNS. This express two-way formulation is an important feature of the transition to the BNS.

Cross-border questions require attention to the location of the abettor, the principal act, the intended consequence, the statutory jurisdiction rule, and applicable criminal procedure.

9. Punishment Where the Act Abetted Is Committed

IPC Section 109 and BNS Section 49 apply where the act abetted is committed in consequence of the abetment and the governing law contains no express provision for punishing that abetment. The abettor is then punished with the punishment provided for the principal offence.

The expression in consequence of the abetment requires a connection between the abetment and the act. The principal act need not be performed in precisely the manner imagined, but the statutory rules governing variations must be applied.

Where another provision specifically prescribes punishment for the particular abetment, that special provision governs instead of the general residual rule.

10. Different Intention or Knowledge of the Principal Actor

IPC Section 110 and BNS Section 50 address a case in which the person abetted performs the act with an intention or knowledge different from that of the abettor. The abettor is punished according to the offence that would have been committed if the act had been done with the abettor's intention or knowledge.

This provision keeps the assessment of the abettor's culpability tied to the abettor's own mental state rather than automatically adopting the principal actor's state of mind.

11. Different Act Done

IPC Section 111 and BNS Section 51 extend liability where one act is abetted but a different act is done, provided the different act was a probable consequence of the abetment and was committed under the influence of the instigation, aid or conspiracy.

The test is not whether any later act occurred, but whether the different act was sufficiently connected and was a probable consequence of what was abetted. A wholly independent act falling outside that connection should not automatically be attributed to the abettor.

12. Cumulative Liability for the Act Abetted and the Act Done

IPC Section 112 and BNS Section 52 apply where the different act for which the abettor is liable constitutes an offence distinct from the act abetted. The abettor may be punished for each offence.

The provision prevents the additional distinct offence from being absorbed into the original abetment where the statutory conditions for liability are satisfied.

13. Different Effect Caused

IPC Section 113 and BNS Section 53 address a case where the act abetted produces an effect different from the effect intended by the abettor. Liability for the actual effect arises where the abettor knew that the act abetted was likely to cause that effect.

Knowledge of likelihood is essential. The rule does not impose unlimited liability for every remote or unexpected result. The court must identify the intended effect, actual effect, abettor's knowledge, and causal relationship.

14. Distinguishing Related Concepts

Abetment and common intention are different. Abetment focuses on instigation, conspiracy with the required further act, or intentional aid. Common intention concerns joint participation in a criminal act in furtherance of a shared intention under its statutory rule.

Abetment and criminal conspiracy are also different. Criminal conspiracy is a substantive offence based on an unlawful agreement under the applicable provision. Abetment by conspiracy requires the additional act or illegal omission specified in the definition of abetment.

Abetment and attempt operate at different stages. Abetment concerns intentionally influencing or assisting another's conduct. Attempt concerns conduct by the accused moving sufficiently towards commission of an offence after preparation.

Mere approval, knowledge, relationship, presence or failure to object is not automatically abetment. Each fact must be connected to a statutory mode and the required intention.

15. Method for Solving Abetment Problems

Use the following sequence:

(a) identify the precise thing or offence allegedly abetted;
(b) identify whether the allegation is instigation, conspiracy-based abetment, intentional aid, or more than one mode;
(c) specify the words, acts, agreement or illegal omissions relied upon;
(d) prove the abettor's required intention or knowledge;
(e) determine whether the principal act was committed and whether it occurred in consequence of the abetment;
(f) identify any difference in the principal actor's intention, the act performed or the effect caused;
(g) apply IPC Sections 109–113 or BNS Sections 49–53 as appropriate;
(h) consider territorial and cross-border rules;
(i) distinguish abetment from mere presence, association, knowledge, common intention, conspiracy and attempt; and
(j) reach a reasoned conclusion for each alleged abettor separately.`,
    keyPoints: [
      "Abetment may be committed by instigation, conspiracy with the required further act or illegal omission, or intentional aid.",
      "Instigation may arise through words, conduct, wilful misrepresentation or wilful concealment of a material fact that must be disclosed.",
      "Abetment by conspiracy requires an act or illegal omission in pursuance of the plan and in order to do the thing.",
      "Intentional aid must be deliberate and must facilitate the thing; accidental assistance or passive knowledge is insufficient.",
      "Mere presence is not automatically abetment, but intended presence may encourage or facilitate an offence.",
      "An illegal omission may constitute aid only where a legal duty to act exists and the omission is intentional.",
      "The act abetted need not be completed for abetment to exist.",
      "The principal actor need not be legally capable or share the abettor's guilty intention or knowledge.",
      "Abetment of abetment is itself an offence.",
      "IPC Section 108A and BNS Section 47 address abetment in India of an act outside India.",
      "BNS Section 48 expressly covers abetment outside India of an offence committed in India.",
      "IPC Section 109 and BNS Section 49 provide the residual punishment rule when the act is committed and no special punishment exists.",
      "Liability may continue where the principal has a different intention, does a different probable act, or causes a different effect known to be likely.",
      "IPC Sections 110–113 correspond principally to BNS Sections 50–53.",
      "Abetment must be distinguished from common intention, substantive criminal conspiracy and attempt.",
      "Each abetment problem should identify the mode, mens rea, connection, completed conduct, variation and applicable punishment provision.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Section 107",
      "Indian Penal Code, 1860 — Sections 108–108A",
      "Indian Penal Code, 1860 — Sections 109–113",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 45–48",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 49–53",
    ],
    examFocus:
      "For every problem, identify the exact mode of abetment and prove its mental element. Distinguish abetment by conspiracy from criminal conspiracy, and intentional aid from mere knowledge or presence. Where the principal conduct varies, apply the separate rules for different intention, different act, cumulative offences and different effect. Comparative answers should map IPC Sections 107–113 to BNS Sections 45–53 and specifically note the cross-border rule added in BNS Section 48.",
  },
  {
    title: "Criminal Conspiracy",
    shortDescription:
      "A detailed study of unlawful agreement, common design, overt-act requirements, circumstantial proof, continuing conspiracy, membership and punishment under IPC Sections 120A–120B and BNS Section 61.",
    overview:
      "Criminal conspiracy punishes the agreement through which two or more persons combine to pursue an illegal object or a lawful object by illegal means. Because coordinated criminal plans are commonly formed in secrecy, the law focuses on the meeting of minds and permits the agreement to be proved through connected circumstances. This chapter explains the statutory definition, the point at which the offence becomes complete, the different overt-act rules, the mental element, participation and withdrawal, evidentiary reasoning, punishment, and distinctions from abetment by conspiracy, common intention, unlawful assembly and attempt. It compares IPC Sections 120A–120B with the consolidated rule in BNS Section 61.",
    learningObjectives: [
      "Define criminal conspiracy and identify every element of the statutory agreement.",
      "Distinguish an agreement to commit an offence from an agreement pursuing another illegal object or illegal means.",
      "Explain when agreement alone completes the offence and when an overt act is additionally required.",
      "Identify the mental element and common design necessary to make a person a party to the conspiracy.",
      "Distinguish mere knowledge, association, discussion or presence from intentional participation.",
      "Explain how a conspiracy may be proved through direct or circumstantial evidence.",
      "Analyse the scope, duration, entry, continuation and termination of a conspiracy.",
      "Apply the punishment categories under IPC Section 120B and BNS Section 61(2).",
      "Distinguish criminal conspiracy from abetment by conspiracy, common intention, unlawful assembly and attempt.",
      "Compare IPC Sections 120A–120B with BNS Section 61 and solve conspiracy-based legal problems.",
    ],
    detailedContent: `1. Nature and Purpose of Criminal Conspiracy

Criminal conspiracy addresses collective criminal planning at the stage of agreement. The law recognises that a planned combination may create a danger greater than isolated individual conduct: participants can divide tasks, pool information and resources, conceal responsibility, and increase the likelihood that the unlawful object will be achieved.

The offence does not require every conspirator to perform the final prohibited act. Liability rests on intentional membership in the unlawful agreement, subject to the statutory requirements concerning its object and any necessary act in pursuance.

IPC Section 120A defines criminal conspiracy and Section 120B provides punishment. The BNS combines definition and punishment in Section 61 without materially abandoning the central agreement-based structure.

2. Statutory Definition

Under IPC Section 120A, two or more persons commit criminal conspiracy when they agree:

(a) to do, or cause to be done, an illegal act; or
(b) to do, or cause to be done, an act that is not illegal by illegal means.

BNS Section 61(1) uses the same essential structure and refers to two or more persons agreeing with the common object to do or cause to be done an illegal act, or a lawful act by illegal means.

The agreement is the foundation of the offence. A common intention existing independently in different minds is not enough; there must be a meeting of minds concerning the unlawful object or means. The agreement may be express or inferred from coordinated conduct and circumstances.

The illegal act may be the ultimate objective or merely incidental to a broader plan. The explanation to the definition makes that distinction immaterial if the statutory requirements are otherwise satisfied.

3. Meaning of Illegal Act and Illegal Means

The planned object may itself be an offence, another act prohibited by law, or an act furnishing ground for civil action within the governing statutory definition of illegal. A conspiracy is therefore not confined to plans for offences alone.

A lawful objective may become a criminal conspiracy when the parties agree to achieve it through illegal means. For example, obtaining a lawful commercial advantage does not protect an agreement to use forged documents, intimidation or bribery to secure that advantage.

The prosecution must identify the alleged illegal object or illegal means with reasonable clarity. A vague allegation that the accused persons acted together, without identifying what they agreed to accomplish and how it was illegal, does not establish the statutory offence.

4. Agreement as the Gist of the Offence

The offence centres on consensus, not merely parallel behaviour. The parties need not execute a formal contract, meet in one place, use a particular form of words, or record the plan in writing. A tacit understanding may suffice if the evidence proves intentional agreement.

The parties need not settle every operational detail. A conspirator may perform a specialised role and may not know every participant or every step, provided the evidence shows intentional participation in the common unlawful design.

However, knowledge of another person's plan is not by itself agreement. Sympathy, family or business association, presence at a meeting, communication with an offender, or conduct consistent with innocence cannot automatically establish membership. The inference must arise from proved circumstances that reasonably demonstrate conscious commitment to the common design.

5. When the Offence Becomes Complete

The statutory proviso creates two categories.

First, where the agreement is to commit an offence, the criminal conspiracy is complete upon the agreement itself. No separate overt act is required by the general definition, although later acts may be important evidence of the agreement and may constitute additional offences.

Second, where the agreement concerns an illegal act that is not an offence, or a lawful act to be accomplished by illegal means, some act besides the agreement must be done by one or more parties in pursuance of it. The additional act demonstrates movement of the plan beyond bare consensus.

The required act need not necessarily be independently illegal. It must be an act beyond the agreement, performed by a party in pursuance of the agreed design.

6. Mens Rea and Common Design

Criminal conspiracy requires intentional agreement. A person must know the essential unlawful object or means and intend to participate in advancing it. Accidental assistance or innocent interaction does not make a person a conspirator.

A participant need not possess the same personal motive as others. One may seek money, another revenge, and another institutional advantage; differing motives do not prevent a common agreement concerning the unlawful object.

Where a statute creates a specialised conspiracy offence with additional mental requirements, those requirements must also be proved. The general provision cannot be applied without regard to the wording of the alleged substantive offence.

7. Single and Multiple Conspiracies

A single conspiracy may contain several stages, transactions and participants where they are connected by one common unlawful design. Participants may enter at different times and perform different roles.

Separate plans should not be treated as one conspiracy merely because they involve a common central person or resemble one another. The court considers the common objective, interdependence of activities, overlap of participants, time, place, methods and whether each group was aware of and benefited from the broader design.

In a chain arrangement, each link may understand that success depends on other links. In a hub-and-spoke arrangement, separate dealings with a central person do not automatically establish one overall conspiracy unless the alleged spokes shared or knowingly contributed to the common design.

8. Entry, Continuation and Withdrawal

A person becomes liable upon intentionally joining the conspiracy while it exists. A later entrant is not automatically responsible for every act done before joining, although earlier events may explain the nature of the agreement and prove knowledge.

A conspiracy may continue until its objective is achieved, abandoned, frustrated, or otherwise terminated. Acts of concealment are not automatically part of the original conspiracy; whether they are included depends on the proved scope of the agreement rather than an assumption that every conspirator always intends concealment.

Withdrawal requires more than private change of mind. Clear communication or conduct inconsistent with continued participation may be relevant, but withdrawal does not erase liability already incurred. A withdrawing participant may also need to take reasonable steps appropriate to the circumstances if seeking to prevent further reliance on prior assistance.

9. Proof of Conspiracy

Direct evidence of an unlawful agreement is uncommon because conspiracies are usually secret. The agreement may be inferred from a coherent combination of proved circumstances, including communications, meetings, coordinated movements, division of roles, transfer of funds or materials, acquisition of instruments, false documentation, surveillance, concealment, and conduct before or during execution.

Circumstantial proof must form a reliable chain pointing to intentional agreement. Each circumstance should first be proved; suspicion cannot replace evidence, and one ambiguous circumstance should not be stretched into a complete conspiracy.

Acts and statements of participants may become relevant under the law of evidence when made in reference to the common design during its operation. The court must first have reasonable ground to believe that the conspiracy existed and must respect the statutory conditions governing relevance. Statements made after the common design ended require separate analysis and are not automatically admissible against all former participants.

A confession or admission by one person cannot casually be treated as conclusive proof against everyone else. The applicable evidence law and procedural safeguards must be followed.

10. Conduct Before, During and After the Agreement

Pre-agreement conduct may provide background but ordinarily cannot make a person liable as a conspirator before joining. Conduct during the conspiracy can prove membership, object, role and continuation.

Post-offence conduct may support an inference where it was contemplated by the common design or independently shows consciousness of guilt. But routine association, later silence or isolated assistance after completion does not necessarily prove participation in the original agreement.

The prosecution and defence should therefore place every alleged act on a timeline: before formation, during operation, after achievement, or after termination.

11. Punishment under IPC Section 120B

IPC Section 120B divides punishment into two principal classes.

Where the conspiracy is to commit an offence punishable with death, imprisonment for life, or rigorous imprisonment for a term of two years or more, and no express punishment is otherwise provided for that conspiracy, a party is punished in the same manner as if that person had abetted the offence.

For other criminal conspiracies, punishment may extend to imprisonment of either description for six months, or fine, or both.

If a special provision expressly punishes conspiracy to commit a particular offence, that provision must be considered instead of automatically applying the residual rule.

12. Punishment under BNS Section 61

BNS Section 61(2) substantially preserves the same two categories.

A party to a conspiracy to commit an offence punishable with death, imprisonment for life, or rigorous imprisonment for two years or more is, where the BNS makes no express punishment for that conspiracy, punished as if the party had abetted the offence.

A party to another criminal conspiracy may be punished with imprisonment of either description up to six months, or fine, or both.

A sound answer should classify the object offence, check whether an express conspiracy punishment exists, and only then apply the relevant residual category.

13. Criminal Conspiracy and Abetment by Conspiracy

These concepts must not be confused.

For criminal conspiracy under IPC Section 120A or BNS Section 61, an agreement to commit an offence is ordinarily complete without proof of an overt act.

For abetment by conspiracy under IPC Section 107 or BNS Section 45, an act or illegal omission must occur in pursuance of the conspiracy and in order to the doing of the thing.

Criminal conspiracy is a substantive offence. Abetment by conspiracy is one mode of participating in the thing abetted. The same facts may require analysis under both provisions, but the ingredients must be proved separately and duplication in punishment must be addressed according to law.

14. Distinction from Common Intention

Common intention is a principle of joint liability connected to participation in a criminal act done in furtherance of the shared intention. Criminal conspiracy punishes the antecedent agreement itself under its statutory conditions.

Conspiracy does not invariably require presence at or participation in the final physical act. Common-intention liability ordinarily depends on participation in the criminal act, assessed under the applicable provision.

Evidence may support both, but neither concept should be used as a substitute for proving the ingredients of the other.

15. Distinction from Unlawful Assembly

An unlawful assembly involves the statutorily required number of persons and a prohibited common object. Criminal conspiracy requires at least two persons and an agreement.

Membership of an unlawful assembly may develop suddenly and may be inferred from assembly, conduct, weapons, purpose and surrounding facts. Conspiracy focuses on the agreement and may exist even where conspirators never gather as one assembly.

16. Distinction from Attempt

Conspiracy is complete at the agreement stage where the object is an offence. Attempt requires an act towards the commission of an offence that has passed beyond mere preparation under the governing rule.

A person may be guilty of conspiracy even though execution never begins. If execution advances, attempt or the completed substantive offence may arise in addition, subject to legal rules governing charges and punishment.

17. Defences and Common Analytical Errors

A defence may challenge the existence of any agreement, the accused's knowledge of the unlawful object, intentional membership, identity, authenticity of communications, continuity of the plan, or the interpretation of ambiguous circumstances.

Common errors include treating association as agreement, combining unrelated transactions into one conspiracy, assuming that every participant knew every fact, relying on acts after termination without proving continuing design, and failing to identify whether an overt act was statutorily required.

The prosecution need not prove every detail of the plan, but it must prove the core agreement and the accused's intentional connection to it beyond the applicable standard.

18. Method for Solving Conspiracy Problems

Use the following sequence:

(a) identify the persons alleged to have agreed;
(b) state the exact illegal object or lawful object pursued by illegal means;
(c) identify evidence of a meeting of minds;
(d) classify whether the agreement is to commit an offence;
(e) decide whether agreement alone is sufficient or an overt act is required;
(f) prove the accused's knowledge and intentional participation;
(g) define the scope and duration of the common design;
(h) distinguish one overall conspiracy from multiple independent plans;
(i) place each act and statement on the timeline;
(j) determine the applicable offence and punishment category;
(k) distinguish conspiracy from abetment, common intention, unlawful assembly and attempt; and
(l) reach a separate reasoned conclusion for each accused person.`,
    keyPoints: [
      "Agreement is the gist of criminal conspiracy.",
      "At least two persons must share a meeting of minds concerning the unlawful object or means.",
      "The agreement may concern an illegal act or a lawful act to be achieved by illegal means.",
      "Where the agreement is to commit an offence, agreement alone ordinarily completes the conspiracy.",
      "For other conspiracies, an act beyond the agreement must be done in pursuance of it.",
      "The overt act need not itself be illegal, but it must advance the agreed design.",
      "Mere knowledge, association, discussion, presence or parallel conduct does not automatically prove agreement.",
      "A conspirator need not know every participant or operational detail but must intentionally join the common design.",
      "Different personal motives do not prevent one conspiracy where the unlawful object is shared.",
      "Conspiracy is commonly proved through a connected chain of circumstances because direct evidence is rare.",
      "Each incriminating circumstance must be proved; suspicion cannot substitute for evidence.",
      "A later entrant is not automatically liable for conduct occurring before intentional entry into the conspiracy.",
      "Withdrawal does not erase liability already incurred and must be shown by clear communication or conduct.",
      "IPC Section 120B and BNS Section 61(2) retain two principal punishment categories.",
      "Criminal conspiracy differs from abetment by conspiracy because the latter requires an act or illegal omission in pursuance.",
      "Criminal conspiracy differs from common intention, which concerns joint liability for a criminal act.",
      "Criminal conspiracy can exist before conduct reaches the stage of attempt.",
      "Every conspiracy problem should identify the agreement, object, overt-act rule, participation, duration, proof and punishment separately.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Section 120A",
      "Indian Penal Code, 1860 — Section 120B",
      "Bharatiya Nyaya Sanhita, 2023 — Section 61",
    ],
    examFocus:
      "Begin with the alleged agreement and state its precise unlawful object or means. Determine whether the object is an offence, because that controls whether agreement alone is sufficient or an additional overt act is required. Prove intentional membership through a connected evidentiary chain, define the scope and duration of the plan, and classify punishment correctly. Comparative answers should explain that IPC Sections 120A–120B are consolidated in BNS Section 61 while the central agreement-based structure remains substantially intact.",
  },
  {
    title: "Offences against the State",
    shortDescription:
      "A detailed study of waging war, conspiracy and preparation against the State, attacks on constitutional authorities, the historical offence of sedition, and BNS Section 152.",
    overview:
      "Offences against the State protect the sovereignty, unity, integrity and lawful constitutional authority of India from organised force and other grave threats. This chapter examines IPC Sections 121–124A and their transition to BNS Sections 147–152. It distinguishes waging war from ordinary public-order offences, explains conspiracy, preparation, collection of arms and concealment, analyses coercive attacks on the President or a Governor, and traces the movement from the historical sedition provision in IPC Section 124A to the differently framed offence in BNS Section 152. Particular attention is given to intention, constitutional free speech, the date of the alleged conduct and careful ingredient-based application.",
    learningObjectives: [
      "Explain the purpose and special character of offences against the State.",
      "Distinguish waging war from riot, unlawful assembly, terrorism and ordinary violent crime.",
      "Identify the ingredients of waging, attempting and abetting war under IPC Section 121 and BNS Section 147.",
      "Apply the special conspiracy rule in IPC Section 121A and BNS Section 148.",
      "Distinguish conspiracy, collection of arms, concealment, preparation and attempt.",
      "Explain liability for assaulting or overawing the President or a Governor under IPC Section 124 and BNS Section 151.",
      "Describe the historical ingredients and constitutional limits of IPC Section 124A.",
      "Analyse BNS Section 152 without treating it as a simple renumbering of sedition.",
      "Differentiate protected criticism and dissent from conduct satisfying the statutory offence.",
      "Choose the applicable IPC or BNS provision according to the date of conduct and Article 20(1).",
    ],
    detailedContent: `1. Nature and Purpose of Offences against the State

These offences address grave attacks upon the existence, sovereignty and lawful authority of the State. Their protected interest is broader than the safety of an individual office-holder or the maintenance of peace at one location. Because punishments are severe and constitutionally protected speech may be implicated, every statutory ingredient must be proved strictly.

The chapter's historical IPC range is Sections 121–124A. Under the BNS, the closest provisions are Sections 147–152 in Chapter VII. Similar subject matter does not mean that every BNS provision is identical to its IPC predecessor.

2. Waging War: Meaning and Legal Character

"War" in this context is not confined to formally declared warfare between nations. It involves force directed against the Government of India with the object of challenging or overpowering governmental authority. The scale, organisation, object, weapons, targets and manner of the operation are relevant.

An ordinary riot, local disturbance, private revenge attack or resistance to a particular official act does not automatically become waging war. The decisive inquiry is the common design: was the force directed against governmental authority as such? The prosecution must prove this object rather than rely only on the seriousness of violence.

3. IPC Section 121 and BNS Section 147

IPC Section 121 punishes a person who wages war against the Government of India, attempts to wage such war, or abets the waging of such war. BNS Section 147 substantially preserves these three forms of liability.

The completed offence requires participation in waging war with the required knowledge and intention. Attempt applies when conduct has moved beyond preparation and is sufficiently proximate to waging war. Abetment applies according to the governing abetment rules even if the accused does not personally carry out the principal physical attack.

Both provisions prescribe death or imprisonment for life and fine. The severity makes precise proof of the prohibited object and the accused's participation essential.

4. Conspiracy to Wage War

IPC Section 121A and BNS Section 148 punish conspiracy, whether formed within or beyond India, to commit an offence of waging, attempting or abetting war, or to overawe the Central Government or a State Government by criminal force or show of criminal force.

For this special conspiracy offence, no act or illegal omission in pursuance of the conspiracy is necessary. The agreement itself is the gist, but the prosecution must still prove a genuine meeting of minds and the particular prohibited object. Mere association, radical opinion, discussion or presence is insufficient.

Punishment may be imprisonment for life or imprisonment extending to ten years, together with fine.

5. Collecting Arms or Making Preparations

IPC Section 122 and BNS Section 149 address collecting men, arms or ammunition, or otherwise preparing to wage war, with the intention of waging war or being prepared to wage war against the Government of India.

The offence combines an objective preparatory act with a specific intention. Possessing weapons or assembling persons is not enough without proof of the prohibited purpose. Conversely, an abstract intention without the statutory preparatory conduct does not satisfy this section.

The offence is punishable with imprisonment for life or imprisonment extending to ten years and fine.

6. Concealing a Design to Wage War

IPC Section 123 and BNS Section 150 punish concealment, by an act or illegal omission, of the existence of a design to wage war where the concealment is intended to facilitate, or is known to be likely to facilitate, that design.

The prosecution must establish the design, the accused's awareness of it, concealment by conduct or legally significant omission, and the required intention or knowledge concerning facilitation. Mere silence is not automatically criminal unless the statutory conditions, including an illegal omission where alleged, are proved.

Punishment may extend to ten years and fine.

7. Assaulting the President or a Governor

IPC Section 124 and BNS Section 151 protect the lawful exercise of power by the President of India and a Governor. The offence covers assaulting, wrongfully restraining, attempting wrongfully to restrain, or overawing by criminal force or show of criminal force, with the intention of inducing or compelling the authority to exercise, or refrain from exercising, a lawful power.

The offence is not established merely because the victim holds constitutional office. The prohibited conduct and the coercive intention relating to exercise of lawful power must both be proved. Punishment may extend to seven years and fine.

8. Historical Sedition under IPC Section 124A

IPC Section 124A historically punished words, signs, visible representations or other conduct that brought or attempted to bring into hatred or contempt, or excited or attempted to excite disaffection towards the Government established by law in India. "Disaffection" included disloyalty and feelings of enmity.

Its explanations protected lawful disapprobation of government measures or administrative action when expressed with a view to lawful alteration and without exciting or attempting to excite hatred, contempt or disaffection. The distinction between government established by law and individual office-holders was important.

IPC Section 124A historically provided imprisonment for life with possible fine, imprisonment up to three years with possible fine, or fine. It must now be studied principally for historical offences, constitutional development and comparison with the BNS.

9. Constitutional Limit on the Historical Provision

Article 19(1)(a) protects freedom of speech and expression, subject to reasonable restrictions under Article 19(2), including in the interests of the sovereignty and integrity of India, security of the State and public order.

The judicially narrowed understanding of IPC Section 124A connected criminal liability to incitement to violence or a tendency to create public disorder, rather than treating strong criticism or political dissent by itself as sedition. A problem answer should examine the words, context, audience, intention, likely effect and connection to violence or public disorder.

10. BNS Section 152: Sovereignty, Unity and Integrity

BNS Section 152 does not use the word "sedition". It applies where a person, purposely or knowingly, by spoken or written words, signs, visible representation, electronic communication, use of financial means or otherwise, excites or attempts to excite secession, armed rebellion or subversive activities; encourages feelings of separatist activities; endangers the sovereignty, unity and integrity of India; or indulges in or commits such act.

Punishment is imprisonment for life or imprisonment extending to seven years, and fine. The express inclusion of electronic communication and financial means is significant, but the prosecution must still prove the prescribed mental element and prohibited conduct.

11. Lawful Criticism under BNS Section 152

The explanation to Section 152 preserves comments expressing disapprobation of governmental measures or administrative or other governmental action with a view to obtaining their alteration by lawful means, provided they do not excite or attempt to excite the prohibited activities.

Peaceful disagreement, scholarship, journalism, satire, protest and advocacy do not become offences merely because they are forceful or unpopular. Protection is not unlimited: the precise words, conduct, intention, context and connection to the listed activities must be examined.

12. IPC Section 124A and BNS Section 152 Compared

BNS Section 152 should not be described as IPC Section 124A with a new number. IPC Section 124A focused on hatred, contempt or disaffection towards the Government established by law. BNS Section 152 instead lists secession, armed rebellion, subversive activities, separatist feelings and danger to sovereignty, unity and integrity, and expressly covers electronic communications and financial means.

Both contain an explanation protecting specified lawful criticism, but their ingredients and punishment structures differ. Comparative answers must state these differences before analysing the facts.

13. Applicable Law and the Transition Date

The BNS came into force on 1 July 2024. Alleged conduct before that date must be analysed under the applicable IPC law and savings provisions; conduct on or after that date is analysed under the BNS. Article 20(1) prevents retrospective creation of criminal liability and retrospective enhancement of punishment.

If conduct spans both periods, each alleged act should be placed on a timeline and analysed under the law governing it. Courts, not labels used by investigators or parties, determine the legally applicable provision.

14. Mens Rea and Evidentiary Assessment

Intent, knowledge and purpose are commonly inferred from proved circumstances: communications, selection of targets, organisation, weapons, financing, instructions, concealment, coordinated conduct and statements made in context. Possession, association or ideology alone cannot replace proof of the statutory mental element.

Digital evidence must be authenticated and interpreted in full context. Isolated extracts, forwarded material, parody, news reporting and private discussion may carry different meanings. Evidence of financing must connect the accused, funds and prohibited activity rather than rest on coincidence.

15. Stages of Liability

The provisions create a progression of distinct liability: agreement under the special conspiracy provision; collection or other preparation with the required intention; concealment intended or known to facilitate the design; attempt sufficiently proximate to waging war; and completed waging of war. Abetment may attach through its own rules.

These stages must not be merged. The same facts may support alternative or additional charges, but every count requires its own ingredients and applicable punishment.

16. Distinction from Public-Order and Other Offences

Offences against the State differ from unlawful assembly and rioting, which principally concern public tranquillity, and from ordinary offences against persons or property. Serious violence does not by itself prove war against the Government.

Where terrorism or other special legislation may be relevant, its separate definitions, sanctions and procedural safeguards must be considered. One statutory label cannot substitute for proof under another enactment.

17. Method for Solving Problems

Use the following sequence:

(a) fix the date and identify whether the IPC or BNS applies;
(b) identify the protected interest and exact statutory provision;
(c) separate agreement, preparation, concealment, attempt, abetment and completion;
(d) state the prohibited act and required mental element;
(e) determine whether force was directed against governmental authority as such;
(f) connect each accused separately to the alleged design;
(g) assess speech in its full context and apply Articles 19(1)(a) and 19(2);
(h) for BNS Section 152, identify the precise listed activity allegedly excited, encouraged or committed;
(i) consider lawful criticism and other statutory explanations;
(j) apply Article 20(1) and the repeal-and-savings framework; and
(k) reach a reasoned conclusion on each offence without relying on labels alone.`,
    keyPoints: [
      "Waging war requires force directed against the Government of India with the prohibited object; serious violence alone is insufficient.",
      "IPC Section 121 and BNS Section 147 punish waging, attempting to wage and abetting war.",
      "IPC Section 121A and BNS Section 148 punish the special conspiracy at the agreement stage without requiring an overt act.",
      "Collection of persons, arms or ammunition requires the specific intention stated in IPC Section 122 or BNS Section 149.",
      "Concealment requires awareness of a design and intention or knowledge that concealment will facilitate it.",
      "IPC Section 124 and BNS Section 151 require coercive conduct plus intention concerning exercise of lawful constitutional power.",
      "IPC Section 124A is a historical provision for pre-BNS study and cannot be applied without its constitutional limits.",
      "Strong criticism, dissent or disapprobation does not by itself establish the historical sedition offence.",
      "BNS Section 152 does not use the term sedition and is not a simple renumbering of IPC Section 124A.",
      "Section 152 expressly addresses secession, armed rebellion, subversive activities, separatist feelings and danger to sovereignty, unity and integrity.",
      "BNS Section 152 expressly includes electronic communication and use of financial means.",
      "The mental element under BNS Section 152 is purposely or knowingly.",
      "The explanation to BNS Section 152 protects specified criticism seeking lawful alteration of governmental measures or action.",
      "Article 19 protects speech subject to the reasonable restrictions listed in Article 19(2).",
      "The BNS applies from 1 July 2024; Article 20(1) bars retrospective criminalisation or enhanced punishment.",
      "Conspiracy, preparation, concealment, attempt, abetment and completed waging of war are distinct stages requiring separate proof.",
      "Digital evidence, financial evidence and alleged speech must be authenticated and assessed in their complete context.",
      "Every answer should identify the exact statutory ingredient instead of relying on broad labels such as anti-national or sedition.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Section 121",
      "Indian Penal Code, 1860 — Section 121A",
      "Indian Penal Code, 1860 — Section 122",
      "Indian Penal Code, 1860 — Section 123",
      "Indian Penal Code, 1860 — Section 124",
      "Indian Penal Code, 1860 — Section 124A (historical)",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 147–152",
      "Constitution of India — Articles 19(1)(a), 19(2) and 20(1)",
    ],
    examFocus:
      "Fix the date of conduct before selecting the IPC or BNS. Distinguish conspiracy, preparation, concealment, attempt, abetment and completed waging of war, then prove the prohibited object and each accused person's mental connection. For speech problems, compare the historical IPC Section 124A with BNS Section 152 precisely, apply constitutional free-speech principles and lawful-criticism explanations, and never describe Section 152 as a mere renumbering of sedition.",
  },
  {
    title: "Offences against Public Tranquillity",
    shortDescription:
      "A detailed study of unlawful assembly, membership, common-object liability, rioting, armed rioting, dispersal orders, affray and offences affecting public peace.",
    overview:
      "Public tranquillity offences protect collective peace and lawful public order. This chapter focuses on IPC Sections 141–152 and their principal consolidation in BNS Sections 189–191 and 195. It explains when an assembly of five or more persons becomes unlawful, how intentional membership is proved, when every member becomes constructively liable for an offence committed in prosecution of the common object, and when force or violence converts an unlawful assembly into a riot. It also distinguishes unlawful assembly from criminal conspiracy, common intention and affray, and introduces closely related BNS provisions concerning provocation, riots, affray and public harmony.",
    learningObjectives: [
      "Define an unlawful assembly and identify each statutory common object.",
      "Explain how a lawful assembly may subsequently become unlawful.",
      "Determine when joining or continuing in an assembly amounts to intentional membership.",
      "Distinguish common object under IPC Section 149 and BNS Section 190 from common intention and criminal conspiracy.",
      "Apply constructive liability to offences committed in prosecution of a common object or known to be likely.",
      "Explain the ingredients of rioting and armed rioting.",
      "Analyse liability after a lawful command to disperse.",
      "Explain liability for hiring, engaging, harbouring or going armed for an unlawful assembly.",
      "Distinguish unlawful assembly and rioting from affray and peaceful protest.",
      "Compare IPC Sections 141–152 with the consolidated BNS framework.",
    ],
    detailedContent: `1. Meaning and Purpose of Public Tranquillity

Public tranquillity means the condition of collective peace in which people can exercise rights and public authorities can perform lawful functions without group violence, intimidation or disorder. These offences address the special danger created when several persons combine around a prohibited common object.

The mere presence of a crowd is not criminal. The law requires the prescribed number of persons, a statutorily prohibited common object, knowledge of facts making the assembly unlawful, or other ingredients of the specific offence. Peaceful assembly remains protected by Article 19(1)(b), subject to reasonable restrictions under Article 19(3).

2. Unlawful Assembly under IPC Section 141

An assembly of five or more persons is an unlawful assembly if its common object is:

(a) to overawe by criminal force or show of criminal force the Central or a State Government, Parliament, a State Legislature, or a public servant exercising lawful power;
(b) to resist the execution of any law or legal process;
(c) to commit mischief, criminal trespass or another offence;
(d) by criminal force or show of criminal force, to take or obtain possession of property, deprive a person of a right of way, water or another incorporeal right, or enforce a right or supposed right; or
(e) by criminal force or show of criminal force, to compel a person to do what that person is not legally bound to do, or omit what that person is legally entitled to do.

An assembly lawful at its beginning may subsequently become unlawful if its common object changes. Conversely, individual misconduct does not automatically establish that every person present shared a prohibited common object.

3. Common Object

Common object is the shared objective of the assembly. It may be formed before the members gather or develop suddenly at the scene. It need not be the product of a formal agreement.

The object is inferred from proved circumstances such as the nature of the assembly, words used, weapons carried, conduct, target, route, prior communications, division of roles and behaviour before, during and after the incident. Courts must avoid assuming a common object merely from proximity, family relationship or presence in a large crowd.

4. Membership under IPC Sections 142–145

Under IPC Section 142, a person becomes a member when, being aware of facts rendering the assembly unlawful, the person intentionally joins it or continues in it. Sections 143–145 prescribe punishment for membership, armed membership, and joining or remaining after the assembly has lawfully been commanded to disperse.

Knowledge and intentional participation are essential. A passer-by, victim, observer, person trapped at the location or one who has clearly withdrawn is not automatically a member. Presence may be strong evidence when combined with conduct, but it is not an irrebuttable rule.

5. BNS Section 189: Consolidated Unlawful-Assembly Rules

BNS Section 189 consolidates the definition of unlawful assembly, membership and several related IPC offences. It retains the requirement of five or more persons and substantially preserves the five prohibited common objects.

Its sub-sections address intentional membership; joining or continuing after a lawful command to disperse; armed membership; knowingly remaining in an assembly likely to disturb public peace after a command to disperse; hiring or promoting persons to join; harbouring hired persons; and being hired or going armed to assist the prohibited acts.

The consolidation means that an answer should identify the relevant sub-section, not cite Section 189 generally without stating the particular conduct.

6. Rioting under IPC Sections 146–148

Rioting occurs when force or violence is used by an unlawful assembly, or by any member of it, in prosecution of the common object. Every member of that unlawful assembly is then guilty of rioting under the statutory rule.

IPC Section 147 provides punishment for rioting. Section 148 provides enhanced punishment where the offender is armed with a deadly weapon or anything which, used as a weapon of offence, is likely to cause death.

An unlawful assembly can exist without rioting; rioting requires force or violence. A violent incident involving fewer than five persons may constitute other offences but cannot satisfy the five-person foundation of unlawful assembly on those facts alone.

7. Rioting under BNS Section 191

BNS Section 191 consolidates the definition and punishment of rioting. Sub-section (1) defines the offence; sub-section (2) provides imprisonment up to two years, fine, or both; and sub-section (3) provides imprisonment up to five years, fine, or both where the rioter is armed with a deadly weapon or an object likely to cause death when used as a weapon.

The BNS therefore places definition, ordinary punishment and armed-rioting punishment within one section while substantially retaining the underlying structure.

8. Constructive Liability under IPC Section 149

IPC Section 149 makes every member of an unlawful assembly guilty of an offence committed by any member where the offence is:

(a) committed in prosecution of the common object; or
(b) one which members knew to be likely to be committed in prosecution of that object.

This is a rule of constructive liability, but it is not unlimited group punishment. The prosecution must prove an unlawful assembly, the accused's membership at the relevant time, the common object, the offence committed by a member, and the required connection or likelihood and knowledge.

9. BNS Section 190

BNS Section 190 substantially carries forward the common-object rule. If an offence is committed by a member in prosecution of the common object, or is one the members knew to be likely in prosecution of it, every person who was a member at the time is guilty of that offence.

The provision does not require proof that each member performed the final physical act. It does require a reliable finding of membership and statutory connection. Liability must be assessed separately for each accused, particularly where a gathering is large or changes over time.

10. Common Object, Common Intention and Conspiracy

Common object requires an unlawful assembly of at least five persons and does not necessarily require a prior agreement. Common intention is a joint-liability principle connected with participation in a criminal act done in furtherance of a shared intention and does not require five persons.

Criminal conspiracy centres on an agreement between at least two persons to pursue the unlawful object or means. The same evidence may raise more than one doctrine, but their ingredients cannot be treated as interchangeable.

11. Liability for Hiring and Related Conduct

IPC Section 150 makes a person who hires, engages, employs, promotes or connives at hiring persons to join an unlawful assembly punishable as a member and, within the statutory rule, for offences committed in pursuance of that hiring.

Related IPC provisions outside the narrow Sections 141–152 range historically address harbouring hired persons and being hired or going armed. BNS Section 189 brings these related forms of liability into its consolidated sub-sections. Proof must connect the accused's conduct to the unlawful assembly; ordinary employment or association is insufficient.

12. Assembly Ordered to Disperse

IPC Section 145 concerns joining or continuing in an unlawful assembly knowing that it has been commanded in the manner prescribed by law to disperse. IPC Section 151 addresses knowingly joining or continuing in an assembly of five or more persons likely to disturb public peace after it has lawfully been commanded to disperse.

BNS Section 189 separately reflects these situations. The prosecution must prove a lawful command, the accused's knowledge of it, continued or subsequent participation, and the character of the assembly. The legality and communication of the order are important factual questions.

13. Assaulting a Public Servant Suppressing a Riot

IPC Section 152 punishes assaulting, threatening to assault, obstructing, or attempting to obstruct a public servant who is endeavouring to disperse an unlawful assembly or suppress a riot or affray, and using or threatening criminal force against that public servant.

BNS Section 195 addresses assault, obstruction or criminal force against a public servant performing this duty. Its punishment structure distinguishes the basic offence and the more serious use or threat of criminal force. The public servant must be acting in discharge of the relevant official duty.

14. Provocation, Landholder Duties and Affray

BNS Section 192 punishes malignant or wanton illegal provocation intended or known to be likely to cause rioting, with punishment depending on whether a riot occurs. Section 193 addresses specified failures of owners, occupiers, agents or managers to report, prevent, suppress or disperse an unlawful assembly or riot in the statutory circumstances.

BNS Section 194 defines affray as two or more persons fighting in a public place and thereby disturbing public peace. Unlike unlawful assembly, affray needs only two persons and does not require one of the five common objects. Unlike rioting, it need not arise from an unlawful assembly.

15. Public Harmony Provisions

BNS Sections 196 and 197 address promoting enmity between groups and assertions prejudicial to national integration. Their IPC antecedents lie principally in Sections 153A and 153B, outside the requested Sections 141–152 syllabus range, but they are closely related to public tranquillity and are placed in the BNS chapter.

These offences may involve speech and therefore require careful application of the statutory mental element, context, audience and constitutional protections. Mere unpopular opinion should not be equated with the prohibited promotion of enmity or disharmony.

16. Peaceful Protest and Constitutional Protection

Article 19(1)(a) protects speech and Article 19(1)(b) protects peaceful assembly without arms. These rights are subject to constitutionally permitted reasonable restrictions. A demonstration does not become an unlawful assembly merely because it criticises government or causes inconvenience.

The legal question is whether five or more persons share one of the prohibited common objects and whether the accused knowingly and intentionally joins or continues. Violence, weaponry, coercive purpose, refusal after a lawful dispersal command and conduct of individual participants must be analysed in context.

17. Evidence and Withdrawal

Membership and common object may be proved through direct or circumstantial evidence, including reliable video, location evidence, communications, weapons, injuries, slogans, conduct and identified roles. Digital evidence must be authenticated, and group identification must not replace individual proof.

A member may withdraw before the offence, but withdrawal must be real and communicated or manifested by clear conduct. Mere physical movement within the scene may not prove withdrawal. A person who joins later is assessed from the time of joining, not automatically from the assembly's beginning.

18. Method for Solving Problems

Use the following sequence:

(a) identify whether at least five persons formed the assembly;
(b) state the precise prohibited common object;
(c) determine when the object arose or changed;
(d) prove the accused's awareness and intentional membership;
(e) identify any lawful command to disperse and knowledge of it;
(f) determine whether force or violence made the offence rioting;
(g) identify weapons and the armed-rioting rule;
(h) for constructive liability, connect the offence to the common object or prove known likelihood;
(i) distinguish common object from common intention and conspiracy;
(j) examine withdrawal, late entry and individual roles;
(k) identify the precise IPC section or BNS section and sub-section; and
(l) apply constitutional protection to peaceful speech and assembly before reaching a reasoned conclusion.`,
    keyPoints: [
      "An unlawful assembly requires at least five persons sharing one of the statutorily prohibited common objects.",
      "A lawful assembly may subsequently become unlawful when its common object changes.",
      "Membership requires awareness of the relevant facts and intentional joining or continuation.",
      "Mere presence in a crowd does not automatically prove membership.",
      "Common object may develop suddenly and does not require a formal prior agreement.",
      "Rioting requires force or violence by an unlawful assembly or a member in prosecution of its common object.",
      "An unlawful assembly may exist without rioting, but rioting under these provisions rests on an unlawful assembly.",
      "Armed rioting attracts enhanced punishment under IPC Section 148 and BNS Section 191(3).",
      "Constructive liability applies only when the offence advances the common object or was known to be likely in its prosecution.",
      "Each accused's membership at the time of the offence must be established separately.",
      "Common object, common intention and criminal conspiracy have distinct ingredients.",
      "A lawful dispersal command and the accused's knowledge are essential to dispersal-related liability.",
      "BNS Section 189 consolidates the definition, membership and several hiring and dispersal offences.",
      "BNS Section 190 carries forward constructive common-object liability.",
      "BNS Section 191 consolidates rioting and armed-rioting rules.",
      "Affray requires fighting by two or more persons in a public place and disturbance of public peace.",
      "Peaceful protest is constitutionally protected and must not be presumed unlawful merely because it is critical or inconvenient.",
      "Every problem should identify number, common object, membership, force, weapon, dispersal order and statutory connection separately.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 141–152",
      "Bharatiya Nyaya Sanhita, 2023 — Section 189",
      "Bharatiya Nyaya Sanhita, 2023 — Section 190",
      "Bharatiya Nyaya Sanhita, 2023 — Section 191",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 192–195",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 196–197 (related public-harmony provisions)",
      "Constitution of India — Articles 19(1)(a), 19(1)(b), 19(2) and 19(3)",
    ],
    examFocus:
      "Start by proving five or more persons and stating the exact common object. Then establish the accused's knowing and intentional membership, determine whether force or violence created rioting, and apply constructive liability only after connecting the substantive offence to the common object or known likelihood. Comparative answers should explain how BNS Sections 189–191 consolidate the IPC rules and should distinguish unlawful assembly from common intention, conspiracy, affray and constitutionally protected peaceful protest.",
  },
  {
    title: "False Evidence and Offences against Public Justice",
    shortDescription:
      "A detailed study of giving and fabricating false evidence, aggravated forms, threats to witnesses, false certificates and declarations, and their effect on public justice.",
    overview:
      "The administration of justice depends upon truthful testimony and reliable documentary, electronic and circumstantial evidence. This chapter examines IPC Sections 191–200 and their principal counterparts in BNS Sections 227–237. It distinguishes giving false evidence from fabricating it, explains the legal duty to speak the truth, materiality and the required mental state, compares punishment in judicial and other proceedings, and analyses aggravated liability where false evidence is intended to procure conviction for a grave offence. It also covers witness intimidation, corrupt use of evidence known to be false, false certificates and declarations, and a practical method for solving problems involving testimony, records and electronic evidence.",
    learningObjectives: [
      "Define giving false evidence and identify the legal duty, false statement and required mental state.",
      "Distinguish an objectively incorrect statement from criminal false evidence.",
      "Explain fabrication through artificial circumstances, false entries, documents and electronic records.",
      "Identify the additional intention and materiality requirements for fabricated evidence.",
      "Compare punishment for false evidence in judicial and non-judicial proceedings.",
      "Analyse aggravated liability intended to procure conviction for capital or other serious offences.",
      "Explain liability for threatening a person to give false evidence.",
      "Apply the offences relating to use of evidence, certificates and declarations known to be false.",
      "Compare IPC Sections 191–200 with BNS Sections 227–237.",
      "Evaluate oral, documentary and electronic evidence through an ingredient-based problem method.",
    ],
    detailedContent: `1. Public Justice and the Need for Truthful Evidence

Courts, tribunals, arbitrators and public authorities make decisions from evidence placed before them. Deliberately corrupting that material can convict an innocent person, defeat a lawful claim, protect an offender or undermine confidence in legal institutions. False-evidence offences therefore protect the decision-making process rather than merely the private interests of one party.

Not every error, inconsistency or failed recollection is criminal. The law requires a legal duty to state the truth or a deliberate act of fabrication, the prescribed knowledge or belief, and any additional statutory intention or material connection.

2. Giving False Evidence under IPC Section 191

A person gives false evidence when, being legally bound by an oath or an express provision of law to state the truth, or being legally bound to make a declaration upon a subject, that person makes a statement which is false and which the person knows or believes to be false or does not believe to be true.

The statement may be verbal or otherwise. A statement about the speaker's belief may itself be false: a person who claims to believe something that the person does not actually believe may give false evidence even if the underlying fact later proves true.

3. BNS Section 227

BNS Section 227 substantially carries forward the definition of giving false evidence. The essential questions remain:

(a) was the person legally bound to state the truth or make the declaration;
(b) was a statement made;
(c) was the statement false; and
(d) did the person know or believe it was false, or not believe it to be true?

An interpreter or translator legally bound to interpret truly may commit the offence by deliberately giving a translation not believed to be true. A good-faith statement of genuine belief is not false evidence merely because that belief is factually mistaken.

4. Legal Duty and the Mental Element

The duty to speak truthfully may arise from an oath, statutory obligation or legally required declaration. A casual lie outside such a duty may be immoral and may constitute another offence, but it does not automatically satisfy the false-evidence definition.

Knowledge, belief and absence of belief must be proved from the circumstances. Negligence, confusion, poor memory, misunderstanding a question or an innocent mistake is not enough. Deliberate evasiveness may be relevant, but the prosecution must identify the statement alleged to be false and establish the accused's state of mind.

5. Contradictions and Hostile Testimony

Two inconsistent statements do not automatically prove which one is false or that either was made with the statutory mental state. The surrounding evidence must establish falsity and conscious departure from truth.

A witness being declared hostile is an evidentiary event, not a conviction for false evidence. A court may accept reliable portions of testimony while rejecting others. Criminal liability requires an independent application of the statutory ingredients and applicable procedural safeguards.

6. Fabricating False Evidence under IPC Section 192

A person fabricates false evidence by causing a circumstance to exist, making a false entry in a book or record, or making a document or electronic record containing a false statement, with the required intention that it appear in evidence in a judicial proceeding or a proceeding taken by law before a public servant or arbitrator.

The person must also intend that the artificial circumstance, entry or statement cause the decision-maker to entertain an erroneous opinion on a point material to the result. Planting an object, manufacturing a record or creating a false digital trail can therefore constitute fabrication when these elements are proved.

7. BNS Section 228

BNS Section 228 substantially retains the fabrication rule and expressly refers to books, records, electronic records, documents and electronic records containing false statements. Fabrication can occur before proceedings begin if the evidence is created with the required intended use.

The offence differs from giving false evidence. Giving false evidence centres on a false statement made while legally bound to speak truthfully. Fabrication centres on intentionally creating a false circumstance or evidentiary item designed to mislead a legally authorised decision-maker on a material point.

8. Materiality and Intended Use

For fabrication, the erroneous opinion intended must concern a point material to the result of the proceeding. Materiality is assessed in relation to the issues the authority must decide; a wholly irrelevant false detail will not satisfy this element merely because it is untrue.

Actual admission or successful deception is not always necessary where the offence is defined by the creation of false evidence with the prescribed intention. The prosecution must nevertheless prove the contemplated proceeding or legally authorised process and the intended evidentiary effect.

9. Punishment under IPC Section 193 and BNS Section 229

The law distinguishes false evidence in a stage of a judicial proceeding from false evidence in other cases. Under BNS Section 229, intentional giving or fabrication in a judicial proceeding, or fabrication for use in such a proceeding, may be punished with imprisonment up to seven years and fine up to ten thousand rupees.

In other cases covered by the section, punishment may extend to three years and fine up to five thousand rupees. IPC Section 193 follows the corresponding distinction, although a transition answer should state the applicable statutory wording and date rather than assume all fine provisions are identical.

10. Meaning of a Stage of Judicial Proceeding

The statutory explanation extends the concept beyond testimony delivered inside a courtroom. An investigation directed by law preliminary to a judicial proceeding, and conducted by a public servant authorised by law, may form a stage of a judicial proceeding. Proceedings must be classified from their legal character, not their physical location.

The answer should identify the authority, source of power, nature of the inquiry, purpose of the evidence and whether the evidence was given in or fabricated for the legally recognised stage.

11. False Evidence to Procure Conviction for a Capital Offence

IPC Section 194 and BNS Section 230 create aggravated liability where a person gives or fabricates false evidence intending, or knowing it to be likely, to cause another person to be convicted of an offence punishable with death.

The provision imposes severe punishment and further addresses the consequence where an innocent person is convicted and executed because of that false evidence. The prosecution must prove the accused's special intention or knowledge, the nature of the target offence and, for consequence-based punishment, the required causal result.

12. False Evidence Concerning Other Serious Offences

IPC Section 195 and BNS Section 231 address false evidence intended or known to be likely to procure conviction for an offence punishable with imprisonment for life or the specified serious term of imprisonment. The punishment is linked to the punishment that could be imposed for the target offence within the statutory rule.

A careful answer identifies the exact offence for which conviction was sought, its lawful punishment, the accused's intention or knowledge, and whether the false evidence was capable of producing that result.

13. Threatening a Person to Give False Evidence

IPC Section 195A and BNS Section 232 punish threats of injury to a person's body, reputation or property, or to the body or reputation of a person in whom that person is interested, when made with intent to cause the person to give false evidence.

BNS Section 232 also provides consequence-based liability where an innocent person is convicted and severely sentenced because of false evidence induced by the threat. The offence protects witness autonomy as well as the accuracy of adjudication. The threat, target, intended influence and resulting evidence must be proved separately.

14. Using Evidence Known to Be False

IPC Section 196 and BNS Section 233 punish a person who corruptly uses or attempts to use as true or genuine evidence which that person knows to be false or fabricated. The user need not have personally created the evidence.

The prosecution must prove the use or attempt, corrupt character and actual knowledge. Mere reliance on evidence later found unreliable is insufficient where the user honestly believed it to be genuine.

15. False Certificates

IPC Section 197 and BNS Section 234 address issuing or signing a certificate required by law to be given or signed, or relating to a fact for which the certificate is legally admissible in evidence, where the certificate is false in a material point and the maker knows or believes it to be false.

IPC Section 198 and BNS Section 235 punish corrupt use or attempted use of such a certificate as true while knowing it to be materially false. Medical, official, educational or other certificates fall within the provision only when the statutory legal-use conditions are satisfied.

16. False Declarations

IPC Section 199 and BNS Section 236 apply to a declaration which a court, public servant or other person is legally bound or authorised to receive as evidence of a fact. A materially false statement made in such a declaration with knowledge, belief in falsity or absence of belief in truth is punished as false evidence.

IPC Section 200 and BNS Section 237 punish corrupt use or attempted use of such a declaration as true, knowing it to be false in a material point. A declaration does not fall outside the provision merely because a technical informality affects admissibility, subject to the statutory explanation.

17. Electronic and Digital Evidence

False entries, altered metadata, fabricated messages, edited recordings, synthetic media, manipulated logs and forged electronic records may engage these offences when the required creation, intended use, materiality and mental state are proved.

Digital evidence must be authenticated and preserved with a reliable chain of custody. Investigators and courts should distinguish original data, copies, automated records, user-generated content and later alteration. Technical proof of manipulation must be connected to the accused and to the intended legal proceeding.

18. Procedure and Safeguards

False-evidence prosecutions connected with court proceedings are subject to procedural requirements designed to prevent retaliatory or casually initiated cases. The court ordinarily considers whether action is legally permissible and expedient in the interests of justice under the applicable procedural law.

These safeguards do not reduce the seriousness of deliberate perjury or fabrication. They ensure that prosecution follows the authorised route, is based on material falsehood and is not used merely because testimony was disbelieved or a party lost the case.

19. Date of Conduct and IPC-to-BNS Transition

The BNS came into force on 1 July 2024. Pre-commencement conduct is assessed under the IPC and applicable savings provisions; later conduct is assessed under the BNS. Article 20(1) prevents retrospective criminalisation or enhancement of punishment.

BNS Sections 227–237 substantially reorganise IPC Sections 191–200 and the inserted witness-threat provision in Section 195A. Students should compare ingredients and punishments rather than relying on a mechanical numbering table.

20. Method for Solving Problems

Use the following sequence:

(a) identify the exact statement, circumstance, entry, document or electronic record;
(b) determine whether the allegation is giving or fabricating false evidence;
(c) establish the legal duty, proceeding and competent authority;
(d) prove objective falsity and the accused's knowledge, belief or absence of genuine belief;
(e) for fabrication, prove intended evidentiary use and materiality;
(f) classify the proceeding as judicial or otherwise;
(g) identify any intention to procure conviction for a grave offence;
(h) examine threats, use, certificates or declarations under their separate provisions;
(i) establish causation for any aggravated consequence;
(j) authenticate documentary and electronic evidence;
(k) apply procedural safeguards and the law governing the date of conduct; and
(l) reach a separate reasoned conclusion for each alleged act and accused person.`,
    keyPoints: [
      "False-evidence offences protect the integrity of legally authorised decision-making.",
      "A factual error is not automatically criminal; the prescribed mental element must be proved.",
      "Giving false evidence requires a legal duty to state the truth or make the declaration.",
      "A statement about belief may be false where the speaker does not genuinely hold that belief.",
      "Fabrication involves creating a circumstance, entry, document or electronic record intended to mislead on a material point.",
      "Giving false evidence and fabricating false evidence are distinct offences with different act requirements.",
      "Materiality is assessed against the issues relevant to the result of the proceeding.",
      "Judicial-proceeding false evidence attracts a more serious punishment category.",
      "Aggravated liability applies when false evidence is intended or known likely to procure conviction for specified grave offences.",
      "Threatening a person to give false evidence is independently punishable.",
      "A person may be liable for corruptly using false evidence even without having fabricated it.",
      "False-certificate offences require a certificate legally required or admissible in evidence and falsity on a material point.",
      "False-declaration offences require a declaration legally receivable as evidence of a fact.",
      "Contradictory or hostile testimony does not by itself prove criminal false evidence.",
      "Electronic fabrication requires authentication, attribution, intended legal use and proof of the mental element.",
      "Procedural safeguards prevent false-evidence prosecution from becoming a routine response to rejected testimony.",
      "BNS Sections 227–237 reorganise the central IPC false-evidence provisions.",
      "The date of conduct determines whether the IPC or BNS applies.",
      "Every answer should separate falsity, duty, knowledge, materiality, intended use, proceeding and consequence.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 191–193",
      "Indian Penal Code, 1860 — Sections 194–195A",
      "Indian Penal Code, 1860 — Sections 196–200",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 227–229",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 230–232",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 233–237",
      "Constitution of India — Article 20(1)",
    ],
    examFocus:
      "Identify whether the conduct is giving false evidence, fabrication, threat, use, certificate or declaration. Prove the legal duty and mental element, then address materiality, intended evidentiary use, classification of the proceeding and any aggravated intention or consequence. Comparative answers should map IPC Sections 191–200 and 195A to BNS Sections 227–237 while noting the applicable date and any punishment differences.",
  },
  {
    title: "Offences against the Human Body",
    shortDescription:
      "A detailed study of homicide, suicide-related offences, hurt, restraint, confinement, force, assault, kidnapping, abduction and sexual offences under the IPC-to-BNS transition.",
    overview:
      "Offences against the human body protect life, bodily integrity, liberty and sexual autonomy. This chapter studies the syllabus range of IPC Sections 299–377 and explains its substantial reorganisation under the Bharatiya Nyaya Sanhita, 2023. Homicide, hurt, wrongful restraint and confinement, criminal force, assault, kidnapping and abduction are principally located in BNS Sections 100–146, while sexual offences are primarily organised in BNS Sections 63–99. The chapter distinguishes culpable homicide from murder, intention from knowledge and negligence, hurt from grievous hurt, restraint from confinement, force from assault, and kidnapping from abduction. It also explains consent, sexual-offence structure, attempts, causation, group liability and the importance of applying the statute in force on the date of conduct.",
    learningObjectives: [
      "Distinguish culpable homicide, murder and causing death by negligence.",
      "Apply the four murder clauses and five statutory exceptions to murder.",
      "Analyse causation, intention, knowledge and transferred liability in homicide problems.",
      "Explain abetment of suicide and distinguish it from attempt-related offences.",
      "Differentiate hurt, grievous hurt and aggravated forms involving weapons, victims or purposes.",
      "Distinguish wrongful restraint from wrongful confinement.",
      "Explain force, criminal force and assault and identify their aggravated forms.",
      "Distinguish kidnapping from lawful guardianship, kidnapping from India and abduction.",
      "Explain the statutory ingredients of rape, consent and major aggravated sexual offences.",
      "Map the IPC syllabus to the reorganised BNS provisions without assuming a mechanical one-to-one correspondence.",
    ],
    detailedContent: `1. Protected Interests and Statutory Structure

This group of offences protects human life, physical and mental integrity, freedom of movement and sexual autonomy. The IPC historically placed the principal provisions in Sections 299–377. The BNS reorganises them: sexual offences against women and children appear mainly in Chapter V, Sections 63–99, while offences affecting life, hurt, liberty, force, kidnapping, trafficking and related conduct appear mainly in Chapter VI, Sections 100–146.

The reorganisation makes concept-based learning essential. The date of conduct must be fixed first, followed by the applicable statute, precise offence, definitions, exceptions and punishment provision.

2. Culpable Homicide

IPC Section 299 and BNS Section 100 define culpable homicide. A person commits culpable homicide by causing death through an act done:

(a) with the intention of causing death;
(b) with the intention of causing bodily injury likely to cause death; or
(c) with knowledge that the act is likely to cause death.

The prosecution must prove death, causation and one of these mental states. Intention generally represents a conscious objective, while knowledge concerns awareness of the likely consequence. The distinction influences whether the offence is murder or culpable homicide not amounting to murder.

3. Causation in Homicide

The accused's conduct must be a legally relevant cause of death. A victim's physical weakness, disease or vulnerability does not ordinarily break causation merely because a healthier person might have survived. Nor is causation necessarily broken because prompt or skilful treatment could have prevented death.

An independent, unforeseeable intervening event may require separate analysis. Medical evidence assists the court, but legal causation is determined from the entire chain of conduct, injury, treatment and death.

4. Murder

IPC Section 300 and BNS Section 101 provide that culpable homicide is murder, subject to the statutory exceptions, where the act causing death falls within one of four principal categories:

(a) intention to cause death;
(b) intention to cause bodily injury known by the offender to be likely to cause that particular person's death;
(c) intention to cause bodily injury which is sufficient in the ordinary course of nature to cause death; or
(d) knowledge that the act is so imminently dangerous that it must in all probability cause death or such bodily injury, and doing it without excuse for incurring that risk.

The clauses must be applied separately. Premeditation is relevant evidence but is not an ingredient of every form of murder.

5. Exceptions to Murder

The five principal exceptions retained in BNS Section 101 concern:

(a) grave and sudden provocation, subject to its provisos;
(b) exceeding private defence in good faith without premeditation and without intending more harm than necessary;
(c) a public servant or person assisting one who exceeds lawful power in good faith for advancement of public justice, without ill-will;
(d) sudden fight without premeditation, in the heat of passion upon a sudden quarrel, without undue advantage or cruel or unusual conduct; and
(e) death or risk of death suffered with the consent of a person above eighteen years.

An exception reduces murder to culpable homicide not amounting to murder; it does not automatically make the killing lawful. Each condition and exclusion must be proved from the facts.

6. Punishment for Homicide

Under the BNS, punishment for murder is principally in Section 103, while culpable homicide not amounting to murder is punished under Section 105. BNS Section 104 separately addresses murder by a person under sentence of imprisonment for life.

IPC punishment provisions lie principally in Sections 302 and 304. A complete answer first classifies the homicide under the definition and exceptions and only then cites the punishment provision.

7. Causing Death by Negligence

IPC Section 304A and BNS Section 106 apply where death results from a rash or negligent act not amounting to culpable homicide. Criminal negligence requires a legally blameworthy departure from the required standard, not merely an unfortunate result or ordinary civil negligence.

BNS Section 106 contains differentiated rules, including specified treatment of registered medical practitioners performing medical procedures and a distinct provision concerning rash and negligent driving followed by escape without reporting. Application requires attention to the text in force and any commencement or judicial developments relevant to the alleged date.

8. Dowry Death and Organised Group Murder

IPC Section 304B and BNS Section 80 address dowry death through special ingredients involving the death of a woman within the statutory period after marriage, otherwise than under normal circumstances, and dowry-related cruelty or harassment soon before death.

BNS Section 103(2) separately addresses murder committed by a group of five or more persons acting in concert on specified identity-related grounds. These provisions should not be merged with ordinary murder analysis; their special ingredients and evidentiary rules must be proved.

9. Abetment of Suicide

IPC Sections 305–306 and BNS Sections 107–108 address abetment of suicide, with a special aggravated provision for a child, person of unsound mind, delirious person or person in a state of intoxication.

Suicide alone does not prove abetment. The prosecution must establish instigation, conspiracy accompanied by the required act or illegal omission, or intentional aid, together with a sufficiently proximate link to the suicide. Ordinary disagreement, criticism or strained relations cannot automatically substitute for the statutory act and mental element.

10. Attempt to Murder and Related Attempts

IPC Section 307 and BNS Section 109 punish an act done with such intention or knowledge and under such circumstances that, if death were caused, the act would amount to murder. Actual injury is not necessary for the basic attempt, although injury may affect punishment.

IPC Section 308 and BNS Section 110 similarly concern attempt to commit culpable homicide not amounting to murder. The distinction depends on the hypothetical liability had death occurred, assessed from intention, knowledge, circumstances, weapon, target, force, injury and surrounding conduct.

11. Hurt and Voluntarily Causing Hurt

IPC Section 319 and BNS Section 114 define hurt as causing bodily pain, disease or infirmity. IPC Sections 321 and 323 and BNS Section 115 address voluntarily causing hurt through the required intention or knowledge.

Physical injury visible to the eye is not always necessary; bodily pain, disease or infirmity may suffice. The prosecution must still prove causation and the applicable mental state.

12. Grievous Hurt

IPC Section 320 and BNS Section 116 enumerate grievous hurt categories, including emasculation; permanent loss of sight or hearing; privation or permanent impairment of a member or joint; permanent disfiguration of head or face; fracture or dislocation of bone or tooth; and hurt endangering life or causing the specified period of severe bodily pain or inability to follow ordinary pursuits.

The injury must fall within a statutory category. The seriousness of pain alone does not permit a court to invent an additional category. Medical evidence should address the exact clause alleged.

13. Aggravated Hurt Offences

BNS Sections 117–125 address voluntarily causing grievous hurt, hurt or grievous hurt by dangerous weapons or means, hurt to extort property or confession, hurt to deter a public servant, poison-related hurt, acid attacks and acts endangering life or personal safety. Their IPC antecedents were distributed principally across Sections 322–338.

Each aggravated offence adds a circumstance, purpose, victim category, means or consequence. A correct charge cannot rest merely on proof of basic hurt.

14. Wrongful Restraint and Wrongful Confinement

Wrongful restraint prevents a person from proceeding in a direction in which that person has a right to proceed. Wrongful confinement totally restrains a person within circumscribed limits.

IPC Sections 339–348 contain definitions, punishment and aggravated forms. BNS Sections 126–127 consolidate these rules. Confinement is an aggravated species of restraint; the key distinction is partial obstruction of movement versus complete restriction within boundaries.

15. Force, Criminal Force and Assault

IPC Sections 349–351 correspond principally to BNS Sections 128–130. Force concerns causing motion, change of motion or cessation of motion in the statutorily described manner. Criminal force requires intentional use of force without consent to commit an offence or with the prescribed intention or knowledge of injury, fear or annoyance.

Assault occurs through a gesture or preparation causing a person present to apprehend imminent use of criminal force. Physical contact is not necessary for assault, while criminal force requires force. Mere words do not by themselves constitute assault, though words may give meaning to gestures or preparations.

16. Punishment and Aggravated Assault

BNS Sections 131–136 address punishment for assault or criminal force and aggravated forms involving public servants, intent to dishonour, attempted wrongful confinement and grave provocation. IPC antecedents lie principally in Sections 352–358.

The prosecution should identify consent, intention or knowledge, apprehension of imminence, actual force, victim status and the aggravating purpose. Separate sexual offences involving assault against women are principally located in BNS Sections 74–79.

17. Kidnapping

IPC Section 359 recognises kidnapping from India and kidnapping from lawful guardianship. BNS Section 137 consolidates these forms. Kidnapping from India concerns conveying a person beyond India without legally valid consent. Kidnapping from lawful guardianship concerns taking or enticing a child or person of unsound mind out of the keeping of a lawful guardian without the guardian's consent, subject to the statutory exception.

Kidnapping is complete upon the prohibited taking or enticing. The child's willingness does not replace the guardian's legally relevant consent where the provision applies.

18. Abduction

IPC Section 362 and BNS Section 138 define abduction through compelling a person by force, or inducing a person by deceitful means, to go from any place. Abduction by itself is generally not punishable unless accompanied by a prohibited purpose under another provision.

Unlike kidnapping from lawful guardianship, abduction can concern a person of any age, requires force or deceitful inducement, and may continue as the person is moved. The exact purpose—such as murder, secret confinement, forced marriage or exploitation—determines the substantive offence.

19. Aggravated Kidnapping, Trafficking and Exploitation

BNS Sections 139–146 cover kidnapping or maiming a child for begging, kidnapping or abduction for murder or ransom, importation, concealment, trafficking, exploitation of a trafficked person and habitual dealing in slaves. IPC antecedents were spread mainly across Sections 363–374.

These offences have distinct victim, purpose, conduct and knowledge requirements. Trafficking should be analysed from recruitment, transport, harbouring, transfer or receipt, the prohibited means and the purpose of exploitation under the statutory definition.

20. Rape under IPC and BNS

IPC Section 375 historically defined rape and Section 376 and its sub-sections prescribed punishment and aggravated forms. BNS Section 63 defines rape and Sections 64–71 contain punishment and specified aggravated situations, gang rape, repeat offending and related rules.

The offence is defined through specified acts and legally relevant circumstances, including acts against will, without consent, consent affected by fear or misconception in the stated circumstances, incapacity to understand, statutory age, and inability to communicate consent. Penetration to the statutory extent is sufficient; completion does not require emission.

21. Consent and Sexual Autonomy

BNS Section 63 explains consent as an unequivocal voluntary agreement communicated by words, gestures or verbal or non-verbal communication to participate in the specific sexual act. Absence of physical resistance alone does not constitute consent.

Consent must relate to the specific act and be legally valid at the relevant time. Submission caused by fear is not necessarily consent. The statutory age rule operates regardless of factual agreement. Evidence must be assessed without stereotypes about expected behaviour, delay, clothing, prior relationship or resistance.

22. Aggravated Sexual Offences

BNS Sections 64–71 address punishment for rape, rape in specified aggravated circumstances, intercourse by husband during separation, intercourse by a person in authority, intercourse by deceitful means or false promise within Section 69, gang rape and repeat offenders. Sections 72–73 protect the identity of victims and regulate publication concerning proceedings.

Sections 74–79 address assault or criminal force to outrage modesty, sexual harassment, disrobing, voyeurism, stalking and words or gestures insulting modesty. Sexual offences against children must also be analysed under the Protection of Children from Sexual Offences Act, 2012 where applicable.

23. Marital Exception and Statutory Limits

The statutory rape definition retains an exception for sexual acts by a man with his own wife where the wife is not under eighteen years of age, while BNS Section 67 separately addresses specified intercourse by a husband during separation. The legal and constitutional treatment of marital sexual violence is a developing and sensitive area; answers must state the enacted text, relevant binding decisions and current legal position without converting policy debate into statutory language.

24. Historical IPC Section 377 and the BNS Transition

IPC Section 377 historically addressed specified sexual acts described as against the order of nature. Its application to consensual sexual conduct between adults in private was constitutionally read down before the IPC was replaced.

The BNS does not reproduce IPC Section 377 as a directly equivalent standalone provision. Conduct involving children, lack of consent, assault, hurt, trafficking or other prohibited circumstances may engage other BNS provisions or special laws, but a comparison must not invent an equivalent section where Parliament has not enacted one.

25. Evidence, Medical Examination and Victim Dignity

Medical evidence may corroborate injuries, timing, biological material or other facts, but absence of injury does not by itself disprove a sexual offence or assault. Consent is a legal and factual question, not a medical diagnosis.

Investigations and trials must protect privacy, identity and dignity. Electronic communications, location data and recordings require authentication and contextual interpretation. Character assumptions cannot replace proof of consent or the accused's statutory mental element.

26. Method for Solving Problems

Use the following sequence:

(a) fix the date and applicable IPC or BNS provision;
(b) identify the protected interest, conduct, circumstance and consequence;
(c) prove causation where injury or death is required;
(d) identify intention, knowledge, rashness or negligence precisely;
(e) for homicide, apply culpable homicide first, then murder clauses and exceptions;
(f) classify hurt under the exact statutory category and aggravation;
(g) distinguish restraint from confinement and assault from criminal force;
(h) distinguish kidnapping from abduction and identify any prohibited purpose;
(i) for sexual offences, identify the specified act and legally relevant consent circumstance;
(j) consider age, authority, relationship, group conduct and special legislation;
(k) authenticate medical, documentary and electronic evidence; and
(l) reach a separate reasoned conclusion on the definition, exception and punishment provision.`,
    keyPoints: [
      "Culpable homicide is the genus and murder is its aggravated species, subject to statutory exceptions.",
      "Homicide requires proof of death, legal causation and the prescribed intention or knowledge.",
      "The four murder clauses and five exceptions must be applied separately.",
      "Causing death by negligence applies only where the conduct does not amount to culpable homicide.",
      "Suicide alone does not prove abetment; instigation, qualifying conspiracy or intentional aid must be established.",
      "Attempt liability is assessed from the intention, knowledge, circumstances and act done, even if death does not result.",
      "Hurt includes bodily pain, disease or infirmity.",
      "Grievous hurt must fall within an enumerated statutory category.",
      "Wrongful restraint partially obstructs lawful movement; wrongful confinement totally restricts movement within limits.",
      "Assault creates apprehension of imminent criminal force; criminal force requires actual force.",
      "Kidnapping and abduction have different age, consent, means and continuity requirements.",
      "Abduction ordinarily becomes punishable when connected to a specified unlawful purpose.",
      "Sexual offences are mainly in BNS Sections 63–99, separate from the BNS human-body chapter.",
      "Consent means unequivocal voluntary agreement to the specific sexual act; absence of resistance alone is not consent.",
      "Statutory age rules operate independently of factual willingness.",
      "Medical injury is not an indispensable condition for proving every sexual offence.",
      "BNS Sections 100–146 principally cover homicide, hurt, liberty, assault, kidnapping and trafficking.",
      "The BNS does not contain a directly equivalent standalone reproduction of IPC Section 377.",
      "The date of conduct controls whether the IPC or BNS applies under Article 20(1).",
      "Every answer should separate definition, exception, aggravation and punishment provisions.",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 299–311",
      "Indian Penal Code, 1860 — Sections 319–338",
      "Indian Penal Code, 1860 — Sections 339–358",
      "Indian Penal Code, 1860 — Sections 359–377",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 63–99",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 100–113",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 114–136",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 137–146",
      "Protection of Children from Sexual Offences Act, 2012 — relevant provisions",
      "Constitution of India — Articles 14, 15, 19, 20(1) and 21",
    ],
    examFocus:
      "For homicide, establish culpable homicide, test the murder clauses, apply each claimed exception and then select punishment. For bodily injury and liberty offences, classify the exact conduct and aggravation. For kidnapping and sexual offences, identify age, consent, means, purpose and special-law overlap. Comparative answers must explain that BNS Sections 63–99 and 100–146 reorganise the IPC syllabus and must not assume every IPC provision, particularly Section 377, has a direct BNS equivalent.",
  },
  {
    title: "Property, Marriage, Defamation, Intimidation and Attempts",
    shortDescription:
      "Property offences and selected offences relating to marriage, cruelty, reputation, intimidation and attempts.",
    overview:
      "This unit studies major property offences together with important offences relating to marriage, cruelty, reputation, threats and incomplete offences.",
    detailedContent:
      "Theft, extortion, robbery and dacoity; criminal misappropriation; criminal breach of trust; receiving stolen property; cheating; mischief; criminal trespass; offences relating to marriage; cruelty by husband or relatives of husband; defamation; criminal intimidation, insult and annoyance; attempt to commit offences; and comparative treatment under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Theft, extortion, robbery and dacoity",
      "Misappropriation and criminal breach of trust",
      "Cheating, mischief and criminal trespass",
      "Marriage-related offences and cruelty",
      "Defamation and criminal intimidation",
      "Liability for attempt",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 378–462",
      "Indian Penal Code, 1860 — Sections 493–498A",
      "Indian Penal Code, 1860 — Sections 499–502",
      "Indian Penal Code, 1860 — Sections 503–511",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
];

export const criminalLawIChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${CRIMINAL_LAW_I_COURSE_ID}-unit-${index + 1}`,
      courseId: CRIMINAL_LAW_I_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives:
        unit.learningObjectives || [
          `Explain the principal criminal-law rules covered in Unit ${index + 1}.`,
          "Apply the relevant IPC principles to legal problems.",
          "Identify the corresponding transition from the IPC to the BNS.",
        ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core statutory reading for Unit ${index + 1}.`,
      })),
      examFocus:
        unit.examFocus ||
        "Revise the ingredients of each offence, applicable exceptions, distinctions, punishments and the corresponding transition from the IPC to the BNS. Support answers with statutory provisions and leading judicial principles.",
      revisionNotes: unit.keyPoints.join("; "),
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
