import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID =
  "human-rights-law-and-practice";

export const humanRightsLawAndPracticeCourse = createCourseModel({
  id: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
  title: "Human Rights Law and Practice",
  slug: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
  shortDescription:
    "Study the foundations, international framework, constitutional enforcement and practical protection of human rights in India.",
  description:
    "A structured eight-unit course covering human-rights theories, the International Bill of Human Rights, protection against inhuman wrongs, Indian constitutional remedies, the rights of women, children, persons with disabilities and indigenous peoples, and the Protection of Human Rights Act, 1993.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 9,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Human Rights Law and Practice Course | NagarikSuraksha",
    description:
      "Study Human Rights Law and Practice through eight structured units covering international law, constitutional remedies and the protection of vulnerable groups.",
    focusKeyword: "human rights law course",
    secondaryKeywords: [
      "human rights law notes",
      "International Bill of Human Rights",
      "Protection of Human Rights Act 1993",
      "Indian constitutional human rights",
      "LLB human rights law course",
    ],
    canonicalUrl: "/courses/human-rights-law-and-practice",
    robots: { index: false, follow: false },
    sitemap: { include: false },
  },
});

const units = [
  {
    title: "Theoretical Foundations of Human Rights Law",
    shortDescription:
      "Meaning, historical development and the principal philosophical theories underlying human rights.",
    overview:
      "This unit introduces the definition, nature and characteristics of human rights and traces their international and Indian development through ancient, medieval, colonial and post-Independence perspectives. It examines natural-rights theory, equality of respect and concern, human dignity, John Rawls's theory of justice and Amartya Sen's capability-oriented understanding of rights and freedom.",
    objectives: [
      "Define human rights and explain their universality, indivisibility and interdependence.",
      "Trace the historical development of human-rights ideas internationally and in India.",
      "Compare natural-rights, equality, dignity, justice and capability-based theories.",
      "Apply the theories of John Rawls and Amartya Sen to contemporary human-rights questions.",
      "Distinguish the moral, international and constitutional dimensions of a human-rights claim.",
      "Evaluate universalism, cultural context and the principal criticisms of rights theories.",
      "Use philosophical foundations and leading Indian cases in examination and problem answers.",
    ],
    detailedContent: `
1. Meaning of human rights

Human rights are rights and freedoms claimed for every human being by reason of being human. They seek to protect the conditions necessary for a life of freedom, equality, dignity, security and participation. They include protection against wrongful State interference, duties requiring public action, and institutional guarantees through which individuals and groups can seek accountability and remedies.

The expression operates at several levels. A moral human right is justified by an account of what every person is owed. An international human right is recognised by a treaty, declaration, customary rule or other international standard. A constitutional or statutory right derives its enforceability within a State from domestic law. These categories overlap but are not identical. A sound answer must identify which kind of claim is being made and the institution responsible for enforcing it.

2. Core characteristics of human rights

Universality means that human rights belong to all human beings without exclusion based on nationality, race, caste, sex, gender, religion, language, disability, status or another prohibited ground. Inalienability means that a person does not ordinarily lose human rights merely by consent, status or governmental disapproval, although the exercise of some rights may be restricted under law. Certain prohibitions, such as the prohibition of torture, admit of no ordinary balancing justification under international law.

Indivisibility rejects a hierarchy under which civil and political rights are always treated as more important than economic, social and cultural rights. Interdependence means that enjoyment of one right often depends upon others: political participation requires education and information; health depends upon food, water and housing; and equality affects access to every public institution. The Vienna Declaration of 1993 reaffirmed that all human rights are universal, indivisible, interdependent and interrelated.

Human rights are also commonly described as inherent, equal and dignity-based. Their practical operation, however, requires laws, institutions, resources, procedures and remedies. Rights therefore correspond with duties. A duty-bearer may have to respect a right by avoiding interference, protect it against violation by private actors, and fulfil it through legislative, administrative, budgetary or institutional action.

3. Classification of rights

Negative rights principally restrain interference, while positive rights require protective or enabling action. The distinction is useful but not absolute. Freedom from torture requires the State not to torture, but also requires criminalisation, training, investigation and remedy. The right to education demands expenditure but also protects freedom and equality within educational institutions.

Individual rights protect persons, while collective rights may protect peoples, communities or groups, as in self-determination, minority culture and indigenous land relations. Civil and political rights include life, liberty, equality, privacy, speech, conscience, association, participation and fair trial. Economic, social and cultural rights include work, social security, health, education, food, housing and participation in cultural life. Solidarity claims include development, peace and a healthy environment. These classifications organise study; they do not destroy the unity of the human-rights framework.

4. Why theories of human rights matter

A theory explains why a right exists, who holds it, against whom it operates, what interests or values it protects, and when a limitation may be justified. Theories influence interpretation. A dignity-based approach asks whether treatment humiliates or instrumentalises a person. An equality-based approach asks whether institutions show equal concern and respect. A capability approach asks what people are actually able to do and to be, rather than examining formal rights or resources alone.

No single theory resolves every question. Natural-rights theories can supply a strong universal foundation but may appear abstract. Dignity is powerful but requires careful definition. Equality may require different treatment to overcome structural disadvantage. Rawls focuses on fair institutional design, while Sen emphasises actual freedoms, public reasoning and the removal of manifest injustice. A mature legal argument may draw upon more than one foundation while keeping their differences clear.

5. Early international development

Ideas limiting rulers and protecting persons existed in many societies, but modern international human-rights law emerged gradually. The Magna Carta of 1215 is important in the history of limited government and lawful judgment, though it was not a universal human-rights charter. Later developments included the English Petition of Right, Habeas Corpus Act and Bill of Rights; natural-rights philosophy; the American Declaration of Independence; and the French Declaration of the Rights of Man and of the Citizen.

These documents challenged arbitrary rule and developed claims concerning liberty, equality, representation and legality. Their reach was nevertheless incomplete. Women, enslaved persons, colonised peoples, racial minorities and persons without property were frequently excluded. Human-rights history must therefore be studied both as expansion of freedom and as a continuing struggle against exclusions built into earlier rights traditions.

6. From international concern to international law

Nineteenth- and early twentieth-century developments included movements against slavery, humanitarian law, labour protection and minority arrangements. The International Labour Organization was established in 1919. The League of Nations system created limited international supervision but did not establish a universal legal order centred upon individual rights.

The atrocities of the Second World War, the Holocaust, aggressive war and mass displacement demonstrated the danger of treating a State's treatment of persons as exclusively internal. The United Nations Charter of 1945 made promotion of human rights and fundamental freedoms an international purpose. The Universal Declaration of Human Rights, adopted on 10 December 1948, proclaimed a common standard of achievement and placed inherent dignity and equal and inalienable rights at the foundation of freedom, justice and peace.

The 1966 Covenants later translated the Declaration's broad framework into binding treaty obligations for their parties. Decolonisation, movements against racial discrimination and apartheid, women's rights, disability rights, child rights and indigenous rights further transformed the international system. Human-rights law is therefore not a finished gift from one historical moment; it is an evolving product of resistance, institution-building and public reasoning.

7. Ancient Indian perspectives

Indian intellectual and institutional history contains ideas relevant to human welfare, duty, justice and restraints upon power. Concepts such as dharma linked authority with obligations concerning justice and social order. Buddhist and Jain traditions emphasised compassion, non-violence and the moral worth of living beings. Ashokan edicts promoted welfare measures, religious tolerance and humane governance. Arthashastra addressed duties of governance, public administration and protection of the realm and population.

These materials must not be described as if they formed a modern, universal and judicially enforceable human-rights code. Ancient social orders also contained hierarchy, exclusion and unequal status. Their relevance lies in demonstrating indigenous traditions of ethical governance, welfare, restraint and plural coexistence, while modern human rights require equal legal personality and universality beyond inherited status.

8. Medieval Indian perspectives

Medieval India contained diverse legal, religious and political traditions. Ideas of justice, charitable duty, protection of subjects and religious coexistence appeared in different forms. The Bhakti and Sufi movements often questioned rigid hierarchy and emphasised devotion, spiritual equality and human fellowship. Akbar's policies of sulh-i-kul are commonly associated with tolerance and peaceful coexistence among religious communities.

The period also witnessed conflict, patriarchy, caste oppression and status-based inequality. It is therefore inaccurate either to portray medieval India as devoid of rights-related thought or to project the modern human-rights system backwards without qualification. The proper method is contextual comparison: identify ideas supporting dignity or restraint, identify exclusions, and explain the difference between moral-political practice and enforceable modern rights.

9. British rule and the contradiction of liberalism

Colonial administration introduced codified laws, courts, legal professions and some institutions associated with the rule of law. At the same time, colonial rule was founded on political subordination and racial inequality. Repressive measures, restrictions on speech and assembly, preventive detention, exploitative economic policies and the use of force exposed the contradiction between imperial claims of legality and denial of self-government.

Indian social-reform movements challenged sati, caste exclusion, untouchability, denial of women's education, child marriage and other inequalities. Reformers and thinkers approached dignity and equality through different religious, social and constitutional arguments. The freedom movement joined civil liberties with self-determination and increasingly demanded enforceable rights.

10. The freedom movement and constitutional rights

The Constitution of India did not emerge without a rights history. The Constitution of India Bill, 1895, the Commonwealth of India Bill, 1925, the Nehru Report, 1928, and the Karachi Resolution, 1931 reflected developing demands for civil liberties, equality, religious freedom, socio-economic justice and responsible government. The Sapru Committee report and Constituent Assembly debates further shaped the constitutional settlement.

The Karachi Resolution is especially significant because it joined civil and political freedom with labour welfare, socio-economic commitments and State responsibility. The nationalist demand for rights was thus not confined to freedom from colonial restraint; it also addressed poverty, labour, education and distributive justice.

11. Post-Independence Indian perspective

The Constitution of India came into force on 26 January 1950. Its Preamble commits the Republic to justice—social, economic and political—liberty, equality and fraternity assuring the dignity of the individual and the unity and integrity of the nation. Fundamental Rights in Part III create judicially enforceable guarantees. Directive Principles in Part IV guide the State toward social and economic democracy. Fundamental Duties, later inserted in Part IVA, express civic and constitutional responsibilities.

Articles 32 and 226 provide powerful constitutional remedies. Judicial interpretation, especially of Article 21, has connected life and personal liberty with dignity, livelihood, health, shelter, education, privacy, legal aid, a clean environment and fair procedure. Parliament and State legislatures have enacted specialised human-rights and social-justice laws, while the Protection of Human Rights Act, 1993 created national and State commissions. Constitutional rights, however, coexist with persistent caste, gender, economic, religious, disability and regional inequalities; legal recognition must therefore be distinguished from effective enjoyment.

12. Natural-rights theory

Natural-rights theory holds that certain rights arise from human nature, reason or moral order and do not depend entirely upon a ruler's grant. In its modern form it supplied a language for judging positive law: an enacted rule could be legally operative within a system yet morally defective because it violated prior and higher standards of freedom or equality.

John Locke associated natural rights with life, liberty and property and treated government as a fiduciary arrangement based upon consent. Political authority was legitimate only when it protected rights, and serious breach could justify resistance. Natural-rights thought influenced constitutionalism and revolutionary declarations.

The theory's strength lies in its ability to criticise oppressive law and ground universality beyond citizenship. Its difficulties include disagreement about the source and content of natural law, historical reliance upon an imagined universal individual, and selective application by societies that excluded women, enslaved persons and colonised peoples. Contemporary human-rights reasoning often retains the idea of inherent rights while supporting it through dignity, agency, basic interests and public justification rather than a single account of nature.

13. Legal positivism and the need for institutional recognition

Legal positivism distinguishes law as it exists from morality as it ought to be. A positivist analysis asks whether a right is recognised by a valid constitutional, statutory, treaty or customary source and which institution has authority to enforce it. This protects legal precision and prevents every moral preference from being presented as an existing legal right.

Pure reliance upon positive law, however, cannot explain why a gravely unjust legal system deserves criticism or why new rights should be recognised. Human-rights practice therefore contains a productive tension. Moral theories justify and criticise rights; legal institutions define, apply and remedy them. Students should neither assume that moral validity automatically creates domestic enforceability nor assume that enacted law exhausts the idea of human rights.

14. Equality of respect and concern

An equality-based theory begins from the proposition that government must treat every person with equal concern and respect. Equality does not invariably require identical treatment. Identical rules may perpetuate disadvantage when people begin from unequal social positions or face structural barriers. Substantive equality may require accommodation, affirmative action, redistribution or special protection so that equal citizenship becomes real.

Ronald Dworkin's rights-based political theory is associated with equal concern and respect and with the idea that individual rights operate as strong claims against collective goals. Rights protect persons from being treated merely as instruments for aggregate welfare. In legal reasoning, this foundation supports close scrutiny of discrimination, status hierarchy, arbitrary classification and majoritarian measures that sacrifice the basic interests of minorities.

Indian constitutional law reflects both formal and substantive equality. Article 14 prohibits arbitrary State action and guarantees equality before law and equal protection of laws. Articles 15 and 16 prohibit specified discrimination while permitting constitutionally authorised special measures. Article 17 abolishes untouchability. Equality must be read with dignity and liberty: discrimination often injures all three.

15. Human dignity as the foundation of rights

Dignity expresses the equal moral worth of every human being. It rejects humiliation, objectification, degradation and treatment of persons as disposable instruments. The UDHR's Preamble recognises inherent dignity and equal and inalienable rights, and Article 1 declares all human beings free and equal in dignity and rights. Dignity informs rights relating to bodily integrity, privacy, identity, livelihood, shelter, health, education, equality and participation.

Dignity is not a licence for judges or governments to impose personal morality. It must be connected to the claimant's autonomy, equality, material conditions and freedom from degrading treatment. The concept has both a restraint dimension—government must not degrade or instrumentalise—and a positive dimension—institutions must protect the basic conditions of a dignified life.

The Supreme Court of India has treated dignity as integral to Article 21. Francis Coralie Mullin connected life with living with human dignity and the basic necessities that sustain it. Later decisions have applied dignity to livelihood, privacy, gender identity, sexual orientation, death with dignity and the treatment of prisoners and marginalised persons.

16. John Rawls: justice as fairness

John Rawls asks which principles free and equal persons would choose for the basic structure of society under fair conditions. His original position is a hypothetical situation of choice. The parties deliberate behind a veil of ignorance: they do not know their class, wealth, social status, religion, gender, natural talents or particular conception of the good. This device prevents principles from being designed to favour one's accidental social position.

Rawls's first principle secures an equal scheme of basic liberties compatible with the same scheme for all. Basic liberties include political liberty, freedom of speech and assembly, liberty of conscience and thought, personal liberty and protections associated with the rule of law. The first principle has priority over ordinary gains in wealth or welfare.

His second principle governs social and economic inequalities. Offices and positions must be open under conditions of fair equality of opportunity, not merely formal eligibility. Inequalities must also satisfy the difference principle by operating to the greatest benefit of the least advantaged. Fair equality of opportunity is prior to the difference principle.

Rawls helps human-rights law by explaining why basic liberties cannot be traded away for aggregate prosperity, why institutions must be assessed from the standpoint of disadvantaged persons, and why background conditions matter. His focus on primary social goods and an idealised closed society has been criticised for insufficiently addressing disability, gendered care, global inequality and differences in people's ability to convert resources into real freedom.

17. Applying Rawls to human-rights problems

A restriction on political speech cannot be justified merely because silencing dissent increases administrative convenience; equal basic liberty receives special priority. A school-admission system formally open to all may still violate fair equality of opportunity when poverty, disability or historic exclusion makes access unreal. A tax or welfare arrangement may permit inequality only when its institutional design improves the position of the least advantaged rather than merely increasing total wealth.

Rawls does not convert every distributional claim into an immediately enforceable constitutional right. His principles provide a standard for evaluating the basic structure—constitutional arrangements, major economic institutions and social cooperation. In an examination answer, state the original position and veil of ignorance, identify the relevant principle and priority rule, and then test the institution from the position of those who might occupy the least advantaged social place.

18. Amartya Sen: freedom, capabilities and human rights

Amartya Sen evaluates justice through the real freedoms people possess. Functionings are achieved beings and doings, such as being nourished, being educated, participating in community life or moving safely. Capabilities are the genuine opportunities to achieve valuable functionings. Freedom has both intrinsic importance and instrumental value.

Resources alone are an incomplete measure because people convert the same resources into freedom differently. Disability, illness, age, gender norms, social discrimination, location and public infrastructure affect conversion. A wheelchair has limited value without accessible buildings; formal freedom of speech has reduced value without education, information or protection from violence; food availability does not prevent hunger when a person lacks entitlement and purchasing power.

Sen's approach is comparative and realisation-focused. Instead of requiring a complete description of a perfectly just society, it asks how identifiable injustice can be reduced. Public reasoning is essential because the selection and interpretation of capabilities cannot be settled by an inflexible list imposed without democratic scrutiny. Sen also treats human rights as ethical claims generating reasons for action, institutional reform, advocacy and legislation; their relevance is not confined to already enacted legal rights.

19. Sen's critique of resource-centred equality

Rawls's primary-goods framework asks whether people receive fair shares of general-purpose means. Sen asks what they can actually achieve with those means. Two persons receiving equal income may have radically unequal capabilities because one faces disability, discrimination, unsafe surroundings or unpaid care burdens. This is the conversion problem.

The capability approach supports close attention to health, education, nutrition, bodily security, accessibility, political voice and social participation. It also illuminates positive obligations. A State may formally respect liberty while leaving large groups without the material or institutional capacity to exercise it. Human development, on this account, is expansion of substantive freedom rather than growth in income alone.

The approach faces questions about which capabilities should receive priority, how they should be measured, who should decide and how courts should respect institutional competence and resource allocation. Sen deliberately emphasises public reasoning rather than supplying one final universal list. This flexibility is a strength for democratic deliberation but can make direct legal application less determinate.

20. Rawls and Sen compared

Both Rawls and Sen reject simple utilitarian aggregation and take the claims of persons seriously. Rawls offers principles for fair institutions chosen under impartial conditions. Sen concentrates on actual lives, capabilities and removal of manifest injustice. Rawls's metric is primarily an index of primary social goods; Sen's informational focus is substantive opportunity and functioning. Rawls's project is more institution- and principle-centred; Sen's is more comparative and realisation-centred.

They should not be presented as total opposites. Fair institutions affect capabilities, and capability evaluation requires institutions, rights and public reasoning. Together they expose two questions: are the rules of the basic structure fair, and what real freedoms result for different persons? Human-rights practice benefits from asking both.

21. Universalism and cultural context

Human rights claim universal application, but rights are interpreted and realised within social and cultural settings. Cultural diversity may shape the manner in which a right is implemented; it does not automatically justify caste oppression, gender violence, slavery, torture or denial of equal legal personality. The Vienna Declaration recognises the significance of national and regional particularities while affirming the duty of every State to promote and protect all human rights.

A defensible approach avoids two extremes. Abstract universalism may ignore colonial history, local knowledge and unequal power in international institutions. Unqualified cultural relativism may allow dominant groups to speak for an entire culture and silence women, minorities, dissenters or marginalised members. The practical method is inclusive public reasoning: examine who invokes culture, whose voice is absent, the seriousness of the harm, and whether the practice is consistent with equal dignity and agency.

22. Human rights, duties and horizontal power

Traditional rights doctrine frequently focuses on the individual and the State. Modern life also involves powerful private actors: employers, corporations, digital platforms, educational institutions, families and social groups. The State may violate rights directly, fail to protect persons from private harm, or structure private power through law. Human-rights analysis must therefore identify direct duties, positive protective duties and the domestic doctrines through which rights influence private relationships.

Rights and duties are not opposites. The Constitution recognises Fundamental Duties, while international law and ethics recognise responsibilities toward others. Duties cannot, however, be used as a vague basis to extinguish a right. Any legal limitation must rest upon lawful authority, pursue a legitimate purpose and satisfy the applicable standards of necessity, proportionality and procedural fairness.

23. Indian constitutional application of theoretical foundations

In Maneka Gandhi v. Union of India, the Supreme Court read Articles 14, 19 and 21 together and required procedure affecting liberty to be fair, just and reasonable. This transformed Article 21 from a narrow procedural guarantee into a foundation for substantive and procedural dignity. Francis Coralie Mullin explained that life includes living with human dignity and necessities supporting meaningful human existence.

Bandhua Mukti Morcha connected dignity with protection against bonded labour and humane conditions, illustrating positive State duties. Olga Tellis linked livelihood with life while requiring lawful and fair procedure. Vishaka used equality, dignity and international norms to address workplace sexual harassment in a legislative vacuum. NALSA recognised gender identity, autonomy, equality and dignity of transgender persons.

Justice K.S. Puttaswamy (Retd.) v. Union of India recognised privacy as a constitutionally protected right grounded in liberty and dignity. Navtej Singh Johar rejected the use of majoritarian morality to deny equal citizenship, autonomy and dignity to sexual minorities. These decisions demonstrate that theory is not ornamental: equality, dignity, autonomy and capability influence the identification of harm, the scope of State duty and the design of a remedy.

24. Criticisms and continuing debates

Human-rights discourse is criticised for individualism, indeterminate language, selective enforcement, Western historical dominance, weak attention to duties, institutional overreach and failure to confront economic structures. Critical, feminist, postcolonial, Dalit, disability and indigenous perspectives show how a formally universal subject may conceal the experience of persons affected by hierarchy, care burdens, colonialism, caste, inaccessible institutions or dispossession.

These criticisms need not require abandonment of human rights. They can deepen the framework by asking whose experience defined the norm, whose voice was excluded, whether equality is substantive, whether remedies redistribute power, and whether rights are effectively enjoyed. A credible human-rights practice combines universal moral worth with historical awareness, democratic participation, institutional accountability and attention to material capability.

25. Method for answering a theory problem

First identify the claimant, alleged harm, duty-bearer and legal forum. Second distinguish moral justification, international recognition and domestic enforceability. Third state the theory accurately: natural right, equal concern, dignity, Rawlsian justice or capability. Fourth connect the theory to the particular facts rather than merely naming it. Fifth identify an applicable constitutional or international norm. Sixth address limitations, competing rights, institutional competence and remedy. Finally, reach a reasoned conclusion that explains both the normative foundation and the legal route.

For an essay, use a clear sequence: definition and characteristics; historical development; explanation of each theory; comparison and criticism; Indian constitutional application; and conclusion. Avoid claiming that ancient concepts were identical to modern rights, that all human rights are absolute, that every treaty is automatically enforceable in India, or that Rawls and Sen propose the same informational measure.
    `.trim(),
    topics: [
      "Definition, nature and classification of human rights",
      "International development of human-rights thought",
      "Ancient and medieval Indian perspectives",
      "British rule and the freedom movement",
      "Post-Independence constitutional development",
      "Natural-rights theories",
      "Equality of respect and concern",
      "Human dignity as a foundation of rights",
      "John Rawls's theory of justice",
      "Amartya Sen's theory of human rights and capabilities",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948 — Articles 1 and 2",
      "Constitution of India — Preamble and Part III",
      "Vienna Declaration and Programme of Action, 1993",
      "Charter of the United Nations, 1945 — Articles 1, 55 and 56",
      "International Covenant on Civil and Political Rights, 1966",
      "International Covenant on Economic, Social and Cultural Rights, 1966",
      "Constitution of India — Articles 14, 19, 21, 32, 38 and 226",
    ],
    keyPoints: [
      "Human rights operate as moral claims, international standards and domestic legal rights; those dimensions overlap but are not identical.",
      "Human rights are universal, inalienable, indivisible, interdependent and connected with corresponding duties.",
      "Respect, protect and fulfil describe three dimensions of State obligation.",
      "Ancient and medieval Indian traditions contain ideas of welfare, restraint, tolerance and compassion but were not modern enforceable human-rights systems.",
      "Colonial legality coexisted with political subordination, racial hierarchy and denial of self-government.",
      "The freedom movement connected civil liberty, self-determination and socio-economic justice.",
      "The Constitution combines enforceable Fundamental Rights, Directive Principles, Fundamental Duties and constitutional remedies.",
      "Natural-rights theory grounds rights beyond governmental grant and enables criticism of unjust positive law.",
      "Equal concern and respect supports substantive equality rather than identical treatment in every circumstance.",
      "Dignity protects equal moral worth, autonomy, material conditions and freedom from humiliation or degradation.",
      "Rawls's original position and veil of ignorance model impartial choice of principles for the basic structure.",
      "Rawls gives priority to equal basic liberties and requires fair opportunity and benefit to the least advantaged.",
      "Sen evaluates substantive freedoms through capabilities and functionings rather than resources alone.",
      "Personal and social conversion factors explain why equal resources do not always create equal freedom.",
      "Universalism must remain attentive to culture and history without allowing domination to hide behind cultural relativism.",
      "Indian constitutional cases use equality, dignity, liberty and positive obligations to translate theory into remedies.",
      "Critical perspectives test whether apparently universal law reproduces caste, gender, colonial, economic or ableist hierarchy.",
      "A problem answer must connect the chosen theory with facts, applicable law, limitation standards and remedy.",
    ],
    importantCases: [
      {
        id: "human-rights-unit-1-maneka-gandhi",
        caseName: "Maneka Gandhi v. Union of India",
        citation: "(1978) 1 SCC 248",
        principle:
          "A procedure affecting life or personal liberty must be fair, just and reasonable, and Articles 14, 19 and 21 are interconnected.",
        summary:
          "The decision supplied a broad constitutional foundation for dignity, fairness and substantive protection of liberty.",
      },
      {
        id: "human-rights-unit-1-francis-coralie",
        caseName: "Francis Coralie Mullin v. Administrator, Union Territory of Delhi",
        citation: "(1981) 1 SCC 608",
        principle:
          "The right to life includes living with human dignity and access to the basic necessities sustaining meaningful human existence.",
        summary:
          "The Court rejected a merely animal-existence understanding of Article 21.",
      },
      {
        id: "human-rights-unit-1-bandhua-mukti-morcha",
        caseName: "Bandhua Mukti Morcha v. Union of India",
        citation: "(1984) 3 SCC 161",
        principle:
          "Dignity and freedom from bonded labour impose affirmative constitutional duties upon the State.",
        summary:
          "The Court used public-interest procedure and Directive Principles to make fundamental rights effective for vulnerable workers.",
      },
      {
        id: "human-rights-unit-1-olga-tellis",
        caseName: "Olga Tellis v. Bombay Municipal Corporation",
        citation: "(1985) 3 SCC 545",
        principle:
          "Livelihood is an integral component of life, although deprivation may occur through substantively and procedurally valid law.",
        summary:
          "The case connected socio-economic reality with Article 21 and procedural fairness.",
      },
      {
        id: "human-rights-unit-1-vishaka",
        caseName: "Vishaka v. State of Rajasthan",
        citation: "(1997) 6 SCC 241",
        principle:
          "Equality, dignity and compatible international norms supported enforceable safeguards against workplace sexual harassment.",
        summary:
          "The Court framed binding guidelines in the absence of legislation and demonstrated the interpretive role of CEDAW.",
      },
      {
        id: "human-rights-unit-1-nalsa",
        caseName: "National Legal Services Authority v. Union of India",
        citation: "(2014) 5 SCC 438",
        principle:
          "Gender identity, self-identification, equality and dignity receive constitutional protection.",
        summary:
          "The Court recognised transgender persons' equal citizenship and directed affirmative protective measures.",
      },
      {
        id: "human-rights-unit-1-puttaswamy",
        caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India",
        citation: "(2017) 10 SCC 1",
        principle:
          "Privacy is a fundamental right grounded in dignity, liberty and autonomy under the Constitution.",
        summary:
          "The nine-judge Bench explained dignity and autonomy as central to constitutional personhood.",
      },
      {
        id: "human-rights-unit-1-navtej",
        caseName: "Navtej Singh Johar v. Union of India",
        citation: "(2018) 10 SCC 1",
        principle:
          "Constitutional morality, equality, dignity and autonomy protect sexual minorities against majoritarian prejudice.",
        summary:
          "The Court invalidated criminalisation of consensual same-sex relations between adults to the relevant extent.",
      },
    ],
    examFocus:
      "Prepare the moral, international and domestic meanings of human rights; universality, inalienability, indivisibility and interdependence; respect-protect-fulfil duties; ancient, medieval, colonial, freedom-movement and constitutional developments in India; natural rights and legal positivism; Dworkin's equal concern and respect; dignity under the UDHR and Article 21; Rawls's original position, veil of ignorance, two principles, priority rules and difference principle; Sen's functionings, capabilities, conversion factors and public reasoning; the Rawls-Sen comparison; universalism and cultural relativism; critical perspectives; and the application of these foundations in Maneka Gandhi, Francis Coralie Mullin, Bandhua Mukti Morcha, Olga Tellis, Vishaka, NALSA, Puttaswamy and Navtej Singh Johar.",
    revisionNotes:
      "Start with three levels: moral claim, international recognition and domestic enforceability. Characteristics: universal, inalienable, indivisible and interdependent. Duties: respect, protect and fulfil. History: early restraints and declarations; UN Charter and UDHR; Indian ethical traditions without anachronism; colonial contradiction; freedom-movement demands; Constitution's Preamble, Parts III, IV and IVA, Articles 32 and 226. Theories: natural rights judge positive law; equality requires equal concern and may require substantive measures; dignity protects worth, autonomy and material conditions; Rawls uses the original position, veil of ignorance, equal basic liberties, fair opportunity and the difference principle; Sen measures real capability and functioning, accounting for conversion factors. Apply theory through Maneka Gandhi, Francis Coralie, Bandhua, Olga Tellis, Vishaka, NALSA, Puttaswamy and Navtej. In problems identify claimant, harm, duty-bearer, theory, legal source, limitation and remedy.",
  },
  {
    title: "International Bill of Human Rights",
    shortDescription:
      "The UDHR, ICCPR and ICESCR, generations of rights, treaty reservations and Indian practice.",
    overview:
      "This unit studies the formulation and components of the International Bill of Human Rights: the 1948 Universal Declaration, the 1966 International Covenant on Civil and Political Rights and the 1966 International Covenant on Economic, Social and Cultural Rights. It considers the relationship between the two sets of rights, the three generations of human rights, reservations to human-rights treaties and India's treaty practice.",
    objectives: [
      "Explain the formulation and legal significance of the International Bill of Human Rights.",
      "Identify and compare the rights protected by the UDHR, ICCPR and ICESCR.",
      "Analyse the relationship between civil-political and economic-social-cultural rights.",
      "Evaluate generations of rights and the law governing treaty reservations.",
    ],
    topics: [
      "Formulation of the International Bill of Human Rights",
      "Universal Declaration of Human Rights, 1948",
      "ICCPR, 1966 and its Optional Protocols",
      "ICESCR, 1966 and progressive realisation",
      "Relationship between ICCPR and ICESCR rights",
      "First generation: civil and political rights",
      "Second generation: economic, social and cultural rights",
      "Third generation: solidarity and collective rights",
      "Reservations to human-rights treaties",
      "India's ratification, declarations and reservations practice",
    ],
    provisions: [
      "Universal Declaration of Human Rights, 1948",
      "International Covenant on Civil and Political Rights, 1966",
      "International Covenant on Economic, Social and Cultural Rights, 1966",
      "Vienna Convention on the Law of Treaties, 1969 — Articles 19–23",
    ],
    examFocus:
      "Compare the UDHR, ICCPR and ICESCR; explain indivisibility and progressive realisation; classify the generations of rights; and discuss the validity and effect of reservations with reference to Indian practice.",
  },
  {
    title: "Protection Against Inhuman Wrongs",
    shortDescription:
      "International protection against genocide, apartheid, torture, racial discrimination, slavery and capital punishment.",
    overview:
      "This unit examines grave wrongs that deny equality, dignity and physical integrity. It covers genocide, apartheid, torture and other cruel, inhuman or degrading treatment or punishment, racial discrimination, slavery and the slave trade, and the international movement toward abolition of the death penalty.",
    objectives: [
      "Identify the legal elements of genocide and apartheid.",
      "Explain the absolute prohibition of torture and related treatment.",
      "Analyse international duties concerning racial discrimination, slavery and the slave trade.",
      "Evaluate international standards and Indian law concerning the death penalty.",
    ],
    topics: [
      "Genocide: protected groups, prohibited acts and specific intent",
      "Apartheid and institutionalised racial domination",
      "Torture and cruel, inhuman or degrading treatment",
      "Non-refoulement and prevention duties",
      "Elimination of racial discrimination",
      "Slavery, servitude, forced labour and the slave trade",
      "Trafficking and contemporary forms of exploitation",
      "Abolition of the death penalty",
      "International fair-trial and sentencing safeguards",
      "Indian constitutional position on capital punishment",
    ],
    provisions: [
      "Genocide Convention, 1948",
      "International Convention on the Elimination of All Forms of Racial Discrimination, 1965",
      "International Convention on the Suppression and Punishment of the Crime of Apartheid, 1973",
      "Convention against Torture, 1984",
      "Slavery Convention, 1926 and Supplementary Convention, 1956",
      "ICCPR — Articles 6, 7 and 8",
    ],
    examFocus:
      "Distinguish genocide, apartheid, torture, racial discrimination, slavery and trafficking by their legal ingredients. Discuss the abolitionist framework and India's rarest-of-rare constitutional doctrine on capital punishment.",
  },
  {
    title: "Human Rights in Indian Constitutional Law",
    shortDescription:
      "The constitutional status, judicial cognizability and enforcement of internationally recognised human rights in India.",
    overview:
      "This unit compares rights recognised by the ICCPR and ICESCR with Fundamental Rights, Directive Principles and other provisions of the Constitution of India. It considers which rights are judicially enforceable or judicially cognizable and examines their enforcement by High Courts and the Supreme Court through constitutional remedies, public-interest litigation and judicial interpretation.",
    objectives: [
      "Map principal ICCPR and ICESCR rights to the Constitution of India.",
      "Distinguish enforceable Fundamental Rights from judicially cognizable Directive Principles.",
      "Explain the domestic use of international human-rights instruments.",
      "Apply Articles 32 and 226 and public-law remedies to human-rights violations.",
    ],
    topics: [
      "ICCPR rights and Part III of the Constitution",
      "ICESCR rights and the Directive Principles",
      "Preamble, Fundamental Rights and Fundamental Duties",
      "Judicial enforceability and judicial cognizability",
      "Enlargement of Article 21",
      "Equality and non-discrimination under Articles 14–18",
      "Freedoms and permissible restrictions under Article 19",
      "Constitutional remedies under Articles 32 and 226",
      "Public-interest litigation and epistolary jurisdiction",
      "Compensation and continuing mandamus",
      "Use of international law by Indian courts",
    ],
    provisions: [
      "Constitution of India — Preamble",
      "Constitution of India — Articles 12–35",
      "Constitution of India — Articles 36–51 and 51A",
      "Constitution of India — Articles 32, 136, 141, 142 and 226",
      "Protection of Human Rights Act, 1993",
    ],
    examFocus:
      "Prepare the relationship between the Covenants and the Constitution, enforceable and cognizable rights, Article 21 expansion, writ jurisdiction, PIL, compensation and the judicial use of international norms.",
  },
  {
    title: "Protection of Women and Children",
    shortDescription:
      "International and Indian protection of women and children, including equality, workplace safety and child rights.",
    overview:
      "This unit applies gender-neutral human-rights guarantees from the perspective of women and also studies gender-specific protections. It covers elimination of discrimination against women, prevention and redress of sexual harassment at the workplace, and the international and Indian frameworks protecting children from discrimination, violence, exploitation, abuse and neglect.",
    objectives: [
      "Explain substantive equality and non-discrimination from a gender perspective.",
      "Analyse CEDAW and India's constitutional and statutory obligations.",
      "Explain prevention and redress under workplace sexual-harassment law.",
      "Apply the CRC and Indian child-protection laws to rights-based problems.",
    ],
    topics: [
      "Gender-neutral rights in women's lived experience",
      "Formal equality, substantive equality and intersectionality",
      "CEDAW and elimination of discrimination against women",
      "Constitutional protection under Articles 14, 15, 16 and 21",
      "Gender-specific protective measures",
      "Sexual harassment at the workplace",
      "Convention on the Rights of the Child",
      "Best interests, participation, survival and development",
      "Protection from child labour, trafficking and sexual offences",
      "Juvenile justice, care and rehabilitation",
      "Education, health, identity and family environment",
    ],
    provisions: [
      "Convention on the Elimination of All Forms of Discrimination against Women, 1979",
      "Convention on the Rights of the Child, 1989",
      "Constitution of India — Articles 14–16, 21, 21A, 23, 24, 39 and 42",
      "Sexual Harassment of Women at Workplace Act, 2013",
      "Protection of Children from Sexual Offences Act, 2012",
      "Juvenile Justice (Care and Protection of Children) Act, 2015",
      "Right of Children to Free and Compulsory Education Act, 2009",
    ],
    examFocus:
      "Discuss substantive equality, CEDAW, constitutional protection, workplace sexual-harassment institutions and remedies, the four CRC principles, and India's principal child-protection statutes.",
  },
  {
    title: "Protection of Persons with Disabilities",
    shortDescription:
      "Changing approaches to disability, the UNCRPD and the rights of persons with disabilities in India.",
    overview:
      "This unit examines the magnitude and lived experience of disability from a human-rights perspective. It compares religious, charitable, medical, social-relations and human-rights approaches, studies the United Nations Convention on the Rights of Persons with Disabilities, and analyses constitutional and statutory rights in India.",
    objectives: [
      "Explain disability as a human-rights and equality issue.",
      "Compare religious, charitable, medical, social and human-rights models.",
      "Analyse the purpose and key principles of the UNCRPD.",
      "Apply Indian disability law concerning equality, accessibility, education, employment and legal capacity.",
    ],
    topics: [
      "Magnitude and diversity of disability",
      "Religious and charitable approaches",
      "Medical or individual-deficit model",
      "Social-relations and barrier-based approaches",
      "Human-rights model of disability",
      "UNCRPD principles and general obligations",
      "Equality, non-discrimination and reasonable accommodation",
      "Accessibility and universal design",
      "Legal capacity and supported decision-making",
      "Inclusive education, health, work and community living",
      "Rights of persons with disabilities in India",
    ],
    provisions: [
      "Convention on the Rights of Persons with Disabilities, 2006",
      "Constitution of India — Articles 14, 15, 16 and 21",
      "Rights of Persons with Disabilities Act, 2016",
      "Mental Healthcare Act, 2017",
      "Rehabilitation Council of India Act, 1992",
      "National Trust Act, 1999",
    ],
    examFocus:
      "Compare the principal disability models, explain the UNCRPD paradigm shift, and prepare equality, reasonable accommodation, accessibility, legal capacity, education and employment under the 2016 Act.",
  },
  {
    title: "Protection of Indigenous Peoples",
    shortDescription:
      "International development, self-determination and constitutional protection under India's Fifth and Sixth Schedules.",
    overview:
      "This unit studies discrimination against indigenous peoples and the development of their rights at the international level. It analyses self-determination and its substantive contents, including culture, land, resources, participation and development, before examining protection of Scheduled Tribes and tribal areas under the Constitution of India, especially the Fifth and Sixth Schedules.",
    objectives: [
      "Explain historical and contemporary discrimination against indigenous peoples.",
      "Trace the international development of indigenous rights.",
      "Analyse self-determination and its relationship with land, culture and participation.",
      "Compare the Fifth and Sixth Schedule systems under the Constitution of India.",
    ],
    topics: [
      "Discrimination, dispossession and cultural assimilation",
      "ILO standards concerning indigenous and tribal peoples",
      "United Nations Declaration on the Rights of Indigenous Peoples",
      "Self-determination and internal autonomy",
      "Culture, language, identity and traditional institutions",
      "Land, territories and natural resources",
      "Participation, consultation and free, prior and informed consent",
      "Scheduled Tribes under the Constitution of India",
      "Fifth Schedule and Tribes Advisory Councils",
      "Sixth Schedule and Autonomous District Councils",
      "Forest rights, self-governance and protection from displacement",
    ],
    provisions: [
      "United Nations Declaration on the Rights of Indigenous Peoples, 2007",
      "ILO Indigenous and Tribal Populations Convention, 1957 (No. 107)",
      "Constitution of India — Articles 244, 275, 330, 332, 338A and 342",
      "Constitution of India — Fifth and Sixth Schedules",
      "Panchayats (Extension to Scheduled Areas) Act, 1996",
      "Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006",
    ],
    examFocus:
      "Prepare international indigenous-rights development, the components of self-determination, land and participation rights, and a clear comparison of the Fifth and Sixth Schedule constitutional frameworks.",
  },
  {
    title: "Protection of Human Rights Act, 1993",
    shortDescription:
      "The structure, powers and functions of Human Rights Commissions and Human Rights Courts in India.",
    overview:
      "This unit studies the Protection of Human Rights Act, 1993 and its institutional framework. It examines the constitution, jurisdiction, functions, inquiry powers and practical role of the National and State Human Rights Commissions, the statutory treatment of armed-forces complaints, reporting and follow-up, and the establishment and operation of Human Rights Courts.",
    objectives: [
      "Explain the scope and key definitions of the Protection of Human Rights Act, 1993.",
      "Describe the composition and appointment framework of the NHRC and State Commissions.",
      "Analyse their inquiry powers, functions, limitations and recommendations.",
      "Evaluate the statutory role and practical functioning of Human Rights Courts.",
    ],
    topics: [
      "Purpose, scope and definition of human rights",
      "National Human Rights Commission: composition and appointments",
      "State Human Rights Commissions",
      "Functions of the Commissions",
      "Complaint, inquiry and investigation procedure",
      "Civil-court powers and use of investigative agencies",
      "Intervention in court proceedings and visits to institutions",
      "Recommendations, reports and follow-up",
      "Armed-forces complaints",
      "Jurisdictional and limitation constraints",
      "Human Rights Courts and Special Public Prosecutors",
      "Role, achievements and institutional challenges",
    ],
    provisions: [
      "Protection of Human Rights Act, 1993 — Sections 2–16",
      "Protection of Human Rights Act, 1993 — Sections 17–20",
      "Protection of Human Rights Act, 1993 — Sections 21–29",
      "Protection of Human Rights Act, 1993 — Sections 30 and 31",
      "Protection of Human Rights Act, 1993 — Sections 36 and 37",
      "Protection of Human Rights (Amendment) Act, 2019",
    ],
    examFocus:
      "Prepare the structure, appointment, jurisdiction, functions, inquiry powers, recommendations and limitations of the NHRC and State Commissions, and explain Human Rights Courts under Sections 30 and 31.",
  },
];

const buildDetailedContent = (unit, index) => `
Unit ${index + 1}: ${unit.title}

Chapter scope

${unit.overview}

Principal topics

${unit.topics.map((topic, topicIndex) => `${topicIndex + 1}. ${topic}`).join("\n")}

Study approach

Read the relevant international instrument, constitutional provision or statute together with its purpose, scope, protected right, duty-bearing authority, enforcement mechanism and available remedy. Distinguish binding treaty obligations from declarations and other soft-law standards. In Indian-law answers, connect international norms with the Constitution, legislation and judicial remedies without assuming that every treaty provision is automatically enforceable as domestic law.

Examination method

Begin with the governing concept or instrument, state the applicable legal rule, identify the responsible institution, explain the nature and limitation of the right, and apply the rule to the facts. Support conclusions with constitutional provisions, statutory sections and leading judicial principles wherever relevant.
  `.trim();

export const humanRightsLawAndPracticeChapters = units.map((unit, index) =>
  createChapterModel({
    id: `${HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID}-unit-${index + 1}`,
    courseId: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
    title: unit.title,
    slug: `unit-${index + 1}-${unit.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")}`,
    shortDescription: unit.shortDescription,
    chapterOverview: unit.overview,
    learningObjectives: unit.objectives,
    detailedContent: unit.detailedContent || buildDetailedContent(unit, index),
    keyPoints: unit.keyPoints || unit.topics,
    statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
      id: `human-rights-unit-${index + 1}-provision-${provisionIndex + 1}`,
      title: provision,
      provision,
      description: `Core legal reading for Human Rights Law and Practice Unit ${index + 1}.`,
    })),
    importantCases: unit.importantCases || [],
    examFocus: unit.examFocus,
    revisionNotes: unit.revisionNotes || unit.topics.join("; "),
    notes: unit.detailedContent || buildDetailedContent(unit, index),
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

const recommendedBooks = [
  {
    title: "Human Rights Law and Practice",
    author: "Jatindra Kumar Das",
    publisher: "PHI Learning",
    publicationYear: "2019",
  },
  {
    title: "Human Rights in Constitutional Law",
    author: "D.D. Basu",
  },
  {
    title: "Human Rights and the Law",
    author: "Nagendra Singh",
  },
  {
    title: "Human Rights and Inhuman Wrongs",
    author: "V.R. Krishna Iyer",
  },
  {
    title: "Human Rights in India",
    author: "R.C. Hingorani",
  },
  {
    title: "Human Rights and the Law",
    author: "Paras Diwan",
  },
  {
    title: "Human Rights in a Posthuman World",
    author: "Upendra Baxi",
  },
  {
    title: "The Future of Human Rights",
    author: "Upendra Baxi",
  },
];

export const humanRightsLawAndPracticeBooks = recommendedBooks.map(
  (book, index) =>
    createCourseBookModel({
      id: `${HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID}-book-${index + 1}`,
      courseId: HUMAN_RIGHTS_LAW_AND_PRACTICE_COURSE_ID,
      title: book.title,
      author: book.author,
      publisher: book.publisher || "",
      publicationYear: book.publicationYear || "",
      description:
        "Recommended reading for the Human Rights Law and Practice course.",
      displayOrder: index + 1,
      recommended: true,
      published: true,
    }),
);
