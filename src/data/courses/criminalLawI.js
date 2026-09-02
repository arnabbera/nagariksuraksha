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
      "Agreement to commit an illegal act or a legal act by illegal means and the resulting criminal liability.",
    overview:
      "This unit explains the offence of criminal conspiracy, its essential agreement, evidentiary features and punishment.",
    detailedContent:
      "Meaning and ingredients of criminal conspiracy; agreement as the foundation of liability; distinction between conspiracy and abetment by conspiracy; proof through direct and circumstantial evidence; punishment; and the corresponding BNS framework.",
    keyPoints: [
      "Agreement as the essence of conspiracy",
      "Illegal act and legal act by illegal means",
      "Overt act requirements",
      "Proof of conspiracy",
      "Distinction from abetment",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 120A–120B",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against the State",
    shortDescription:
      "Waging war, conspiracy against the State and the historical law of sedition during the transition from IPC to BNS.",
    overview:
      "This unit studies serious offences affecting the sovereignty, security and authority of the State, with special attention to the legal transition concerning sedition.",
    detailedContent:
      "Waging war against the Government of India; conspiracy and preparation to wage war; collecting arms; concealing plans; assault on high constitutional authorities; the historical offence of sedition under Section 124A of the IPC; constitutional controversies; and the corresponding sovereignty, unity and integrity provisions under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Waging war and related preparatory offences",
      "Conspiracy against the State",
      "Collection of arms and concealment",
      "Historical scope of sedition under the IPC",
      "Transition to the BNS sovereignty framework",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 121–124A",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against Public Tranquillity",
    shortDescription:
      "Unlawful assembly, rioting, common object, affray and related offences affecting public peace.",
    overview:
      "This unit examines group-based criminality and offences that disturb public order and communal peace.",
    detailedContent:
      "Unlawful assembly and common object; liability of members; rioting and armed rioting; provocation and suppression of riots; promoting enmity; imputations prejudicial to national integration; affray; and comparative treatment under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Unlawful assembly and common object",
      "Constructive liability of members",
      "Rioting and armed rioting",
      "Promoting enmity",
      "Affray and public peace",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 141–152",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "False Evidence and Offences against Public Justice",
    shortDescription:
      "Giving and fabricating false evidence and related offences that interfere with the administration of justice.",
    overview:
      "This unit explains offences that corrupt evidence, obstruct judicial proceedings or otherwise undermine public justice.",
    detailedContent:
      "Giving false evidence; fabricating false evidence; punishment for false evidence; aggravated forms; using evidence known to be false; issuing false certificates and declarations; causing disappearance of evidence; giving false information; and corresponding provisions under the Bharatiya Nyaya Sanhita, 2023.",
    keyPoints: [
      "Giving and fabricating false evidence",
      "False certificates and declarations",
      "Use of evidence known to be false",
      "Disappearance of evidence",
      "Protection of the administration of justice",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 191–200",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
  },
  {
    title: "Offences against the Human Body",
    shortDescription:
      "Culpable homicide, murder, suicide, hurt, restraint, confinement, assault, kidnapping, abduction and sexual offences.",
    overview:
      "This unit provides a systematic study of the principal offences affecting life, bodily integrity, liberty and sexual autonomy.",
    detailedContent:
      "Culpable homicide and murder; exceptions and punishment; causing death by negligence; abetment of suicide; attempt to murder; hurt and grievous hurt; wrongful restraint and wrongful confinement; criminal force and assault; kidnapping and abduction; rape and other sexual offences; and the transition from IPC Sections 299–377 to the corresponding BNS provisions.",
    keyPoints: [
      "Culpable homicide and murder",
      "Suicide-related offences and attempts",
      "Hurt and grievous hurt",
      "Wrongful restraint and confinement",
      "Assault and criminal force",
      "Kidnapping, abduction and sexual offences",
    ],
    provisions: [
      "Indian Penal Code, 1860 — Sections 299–377",
      "Bharatiya Nyaya Sanhita, 2023 — corresponding provisions",
    ],
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
