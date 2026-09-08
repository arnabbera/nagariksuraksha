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
      "Distinguish immediate obligations, progressive realisation, limitations and derogations.",
      "Explain the Covenants' reporting, monitoring and individual-communication systems.",
      "State India's accession position and interpret its declarations and reservation accurately.",
      "Apply international standards within the Indian constitutional and statutory framework.",
    ],
    detailedContent: `
1. Meaning of the International Bill of Human Rights

The expression “International Bill of Human Rights” ordinarily refers to the Universal Declaration of Human Rights, 1948, the International Covenant on Civil and Political Rights, 1966, the International Covenant on Economic, Social and Cultural Rights, 1966, and the Optional Protocols associated with the Covenants. The Declaration supplies a common normative framework; the Covenants translate its broad vision into treaty obligations for States parties; and the Optional Protocols create additional procedures or commitments for States that separately accept them.

The International Bill does not form a single document adopted on one date. It is a body of interconnected instruments developed over several decades. Their shared premise is that freedom, justice and peace depend upon recognition of the inherent dignity and equal and inalienable rights of every human being.

2. United Nations Charter foundation

The United Nations Charter, signed in 1945, made promotion of human rights and fundamental freedoms one of the purposes of the United Nations. Articles 1(3), 55 and 56 established an international commitment to cooperation in promoting universal respect for human rights without prohibited distinction. The Charter did not enumerate a complete catalogue of rights, so the new organisation began work on a more detailed declaration.

The Economic and Social Council created the Commission on Human Rights in 1946. The Commission, chaired during the central drafting period by Eleanor Roosevelt, worked with representatives from different legal, political, religious and cultural traditions. The drafting history reflects contributions from many States and individuals and should not be reduced to the work of one country or one philosophical tradition.

3. From one proposed bill to a declaration and treaties

The original project contemplated an international bill containing principles, binding obligations and implementation machinery. Political disagreement arose over legal form, enforceability, the place of socio-economic rights, federal arrangements, colonialism and the appropriate supervisory system. The first major achievement was therefore a declaration rather than an immediately binding global treaty.

The General Assembly adopted the UDHR on 10 December 1948 by Resolution 217 A (III). Work continued on binding covenants. Cold War disagreement, decolonisation and different views about implementation contributed to the decision to prepare two treaties. Both Covenants were adopted by General Assembly Resolution 2200 A (XXI) on 16 December 1966. They entered into force in 1976 after receiving the required number of ratifications or accessions.

4. Nature and legal significance of the UDHR

The UDHR is a General Assembly declaration, not a treaty. It did not by itself create the same conventional obligations as a ratified covenant. Its legal importance is nevertheless profound. It became the foundation for later treaties, constitutions, legislation, regional systems and judicial interpretation. Some of its norms overlap with obligations found in the UN Charter, later treaty law and customary international law; the legal status of each particular norm must be assessed separately rather than treating the entire Declaration mechanically as either binding or non-binding.

The Declaration describes itself as a common standard of achievement for all peoples and all nations. It connects civil and political freedom with economic, social and cultural security within one document. This integrated structure is essential when explaining indivisibility.

5. Structure of the UDHR

The Preamble identifies inherent dignity and equal and inalienable rights as the foundation of freedom, justice and peace. Articles 1 and 2 state equality, dignity, freedom and non-discrimination. Articles 3 to 11 protect life, liberty, security, freedom from slavery and torture, recognition before the law, equality before law, effective remedy, freedom from arbitrary arrest and fair-trial guarantees.

Articles 12 to 17 protect privacy, movement, asylum, nationality, marriage and family, and property. Articles 18 to 21 cover thought, conscience, religion, opinion, expression, peaceful assembly, association, public participation and equal access to public service. Articles 22 to 27 concern social security, work, equal pay, trade unions, rest and leisure, an adequate standard of living, special care for motherhood and childhood, education and participation in cultural and scientific life.

Articles 28 to 30 address the social and international order necessary for realisation, duties to the community, lawful limitations, and the prohibition against interpreting the Declaration to destroy protected rights. Article 29 does not permit unlimited restriction: limitations must be determined by law and pursue the specified purposes in a democratic society.

6. The ICCPR: purpose and structure

The ICCPR gives treaty form to civil and political rights. Part I contains the right of peoples to self-determination. Part II addresses general obligations, non-discrimination, equal rights of men and women, emergency derogation and safeguards against destruction or unjustified restriction of rights. Part III sets out the substantive rights. Parts IV to VI establish the Human Rights Committee and deal with implementation and final clauses.

Under Article 2, each State party undertakes to respect and ensure Covenant rights to persons within its territory and subject to its jurisdiction, without prohibited distinction, and to provide an effective remedy. The obligation applies to all branches and levels of government. Necessary legislative, judicial, administrative and educational measures may be required.

7. Life, integrity and liberty under the ICCPR

Article 6 protects the inherent right to life and regulates capital punishment in States that have not abolished it. Article 7 prohibits torture and cruel, inhuman or degrading treatment or punishment and protects against non-consensual medical or scientific experimentation. Article 8 prohibits slavery, servitude and specified forced or compulsory labour.

Article 9 protects liberty and security and prohibits arbitrary arrest or detention. It requires information about reasons and charges, prompt production before judicial authority, trial within a reasonable time or release, court review of detention and an enforceable right to compensation for unlawful arrest or detention. Article 10 requires humane treatment and respect for the dignity of persons deprived of liberty. Article 11 prohibits imprisonment merely for inability to fulfil a contractual obligation.

8. Justice, legal personality and movement

Article 14 guarantees equality before courts and tribunals and fair-hearing and criminal-process protections, including presumption of innocence and minimum defence rights. Article 15 prohibits retrospective criminal liability and heavier retrospective punishment while allowing trial for conduct criminal under general principles recognised by the community of nations. Article 16 protects recognition as a person before the law.

Article 12 protects liberty of movement, choice of residence, the right to leave any country and freedom from arbitrary deprivation of the right to enter one's own country. Restrictions must be provided by law, necessary for the listed purposes and consistent with other Covenant rights. Article 13 provides procedural protection for lawfully present aliens facing expulsion, subject to the national-security exception stated in the article.

9. Privacy, conscience, expression and participation

Article 17 protects against arbitrary or unlawful interference with privacy, family, home and correspondence and against unlawful attacks on honour and reputation. Article 18 protects thought, conscience and religion. The freedom to have or adopt a religion or belief and the forum internum receive especially strong protection; manifestation may be limited only under the specific treaty test.

Article 19 protects opinion and expression. Restrictions on expression must be provided by law and necessary for respect of the rights or reputations of others or for national security, public order, public health or morals. Article 20 requires prohibition by law of propaganda for war and specified advocacy of national, racial or religious hatred constituting incitement. Articles 21 and 22 protect peaceful assembly and association. Article 25 protects participation in public affairs, voting, election and equal access to public service.

10. Equality, family, children and minorities

Article 23 protects the family and free and full consent to marriage. Article 24 gives every child rights to protective measures, registration, a name and nationality. Article 26 contains an autonomous guarantee of equality before law and equal protection without discrimination; it is not confined to other Covenant rights. Article 27 protects the ability of persons belonging to ethnic, religious or linguistic minorities to enjoy culture, profess and practise religion, and use language in community with others.

Equality under the Covenant includes more than identical treatment. Differentiation requires objective and reasonable justification, and affirmative measures may be necessary to correct conditions that prevent equal enjoyment.

11. Limitations and derogations under the ICCPR

Some rights contain specific limitation clauses. A restriction must satisfy the wording of the particular article: legality, legitimate purpose, necessity, proportionality and consistency with the Covenant. Broad invocation of security, public order or morality does not replace evidence and reasons. The essence of the right must remain protected.

Article 4 deals separately with public emergencies threatening the life of the nation and officially proclaimed. Derogating measures must be strictly required by the exigencies of the situation, consistent with other international obligations, and non-discriminatory on the prohibited grounds stated there. The State must notify through the UN Secretary-General. Articles 6, 7, 8(1) and 8(2), 11, 15, 16 and 18 are expressly non-derogable. Limitation during ordinary conditions and emergency derogation are distinct legal tests.

12. Human Rights Committee and State reporting

Articles 28 to 45 establish the Human Rights Committee, a body of independent experts. States parties submit reports on measures adopted and progress in enjoying Covenant rights. The Committee examines reports, conducts a constructive dialogue, issues concluding observations and develops General Comments explaining its interpretation of Covenant obligations.

Under Article 41, the Committee may consider interstate communications only where the States concerned have recognised that competence. The Committee is not a criminal court and its treaty-body functions must not be confused with the UN Human Rights Council, which is an intergovernmental political body created later.

13. First Optional Protocol to the ICCPR

The First Optional Protocol permits the Human Rights Committee to receive communications from individuals claiming to be victims of Covenant violations by a State party to the Protocol. Treaty competence depends upon separate participation in the Protocol. Admissibility requirements include victim status, jurisdiction, exhaustion of available domestic remedies, non-anonymity and other procedural conditions.

The Committee adopts Views rather than judgments of a domestic appellate court. States parties to the Protocol undertake to recognise the Committee's competence and are expected to give effect in good faith to its findings and follow-up process. India is a party to the ICCPR but has not accepted the First Optional Protocol; therefore an individual cannot bring a communication against India under that Protocol.

14. Second Optional Protocol to the ICCPR

The Second Optional Protocol aims at abolition of the death penalty. A participating State undertakes not to execute persons within its jurisdiction and to take necessary measures to abolish the death penalty, subject only to the narrowly framed wartime reservation permitted by the Protocol when made at ratification or accession.

Participation in the ICCPR does not automatically make a State party to this Protocol. India has not acceded to the Second Optional Protocol. The treaty status must be distinguished from India's domestic constitutional doctrine and statutory retention of capital punishment.

15. ICESCR: purpose and structure

The ICESCR protects economic, social and cultural rights. Part I shares with the ICCPR the right of peoples to self-determination. Part II contains general obligations, non-discrimination, equality between men and women, limitations and safeguards. Part III enumerates substantive rights. Part IV establishes an international reporting framework, and Part V contains final clauses.

The Covenant rejects the idea that freedom means only absence of interference. Human freedom also requires conditions enabling people to live free from want and to participate in social and cultural life. The duty-bearing framework therefore includes law, policy, budgeting, regulation, public services, social protection and remedies.

16. Work, social security and family protection

Article 6 recognises the right to work, including the opportunity to gain a living by work freely chosen or accepted, and requires steps such as guidance, training and policies for productive employment. Article 7 protects just and favourable conditions, fair wages, equal remuneration, safe and healthy conditions, equal opportunity for promotion, rest and reasonable working hours.

Article 8 protects trade-union rights and the right to strike subject to lawful conditions. Article 9 recognises social security, including social insurance. Article 10 requires the widest possible protection and assistance for the family, free consent to marriage, special protection for mothers, and protection of children and young persons from exploitation and harmful work.

17. Adequate living, health, education and culture

Article 11 protects an adequate standard of living, including adequate food, clothing and housing, and continuous improvement of living conditions; it separately recognises the fundamental right to freedom from hunger. Article 12 recognises the right to the highest attainable standard of physical and mental health and identifies measures concerning child health, environmental and industrial hygiene, disease control and medical services.

Articles 13 and 14 protect education and its aims, progressive introduction of free secondary and higher education, parental liberty and a plan for compulsory primary education where not yet achieved. Article 15 protects participation in cultural life, enjoyment of scientific progress, protection of authors' moral and material interests, scientific freedom and international cooperation.

18. Article 2(1): progressive realisation

Each State party undertakes to take steps, individually and through international assistance and cooperation, to the maximum of its available resources, with a view to achieving progressively the full realisation of Covenant rights by all appropriate means, particularly legislation. Progressive realisation recognises that full implementation may require time and resources; it is not permission for indefinite inaction.

The duty to take deliberate, concrete and targeted steps begins immediately. Non-discrimination and the equal right of men and women are immediate obligations. A State must justify retrogressive measures with close attention to the totality of rights and maximum available resources. Resource scarcity affects the choice and pace of measures but does not erase duties to prioritise vulnerable groups, prevent discrimination, use available resources fairly and maintain accountability.

19. Minimum essential levels and maximum available resources

The Committee on Economic, Social and Cultural Rights has explained that each right has minimum essential levels whose non-fulfilment requires especially strong justification. Assessment is contextual and must consider whether the State used maximum available resources, including through reasonable revenue, allocation and international-cooperation choices.

Courts need not design every budget to protect socio-economic rights. They can examine exclusion, irrationality, discrimination, statutory duties, minimum protection, procedural fairness and whether the State has adopted and implemented a reasonable rights-oriented programme. Remedies may combine individual relief with structural directions while respecting institutional competence.

20. Committee on Economic, Social and Cultural Rights

The ICESCR originally assigned reporting supervision through the Economic and Social Council. The Committee on Economic, Social and Cultural Rights was later created by ECOSOC to perform the expert monitoring function. It reviews periodic State reports, holds dialogue, issues concluding observations and adopts General Comments.

The Committee's interpretations address subjects such as housing, food, health, water, education, work, social security and non-discrimination. General Comments are not amendments to the treaty, but they are important expert interpretations used to understand the content of obligations.

21. Optional Protocol to the ICESCR

The Optional Protocol to the ICESCR, adopted in 2008 and in force since 2013, permits individual or group communications against participating States, subject to admissibility rules including exhaustion of domestic remedies. It also provides for interstate communications and an inquiry procedure where the relevant optional competence is accepted.

The Protocol reinforces that economic, social and cultural rights are capable of legal examination and remedy. India has not become a party to this Optional Protocol. Indian claimants must therefore rely on available domestic processes and other applicable international mechanisms rather than a communication against India under this Protocol.

22. Relationship between ICCPR and ICESCR rights

The two Covenants differ in the wording of their general obligations and in some enforcement mechanisms, but they are not rival or hierarchically ordered texts. Both share the right to self-determination, equality between men and women, non-discrimination and protection against destruction of rights. The UDHR and Vienna Declaration support an integrated understanding.

Civil and political rights often require positive expenditure: fair courts, elections, legal aid, humane prisons and investigation of violence all require institutions and resources. Economic and social rights contain immediate restraints and justiciable duties: forced eviction, discriminatory denial of health care or arbitrary withdrawal of social security cannot be dismissed merely as matters of progressive policy.

Rights are practically interdependent. Education enables political participation; health affects autonomy and work; privacy protects family and identity; freedom of association supports trade unions; food and shelter sustain life; expression and information enable accountability for social programmes. The division into two Covenants reflects historical and political compromise rather than a natural separation of human needs.

23. First, second and third generations of rights

The “generations” classification is commonly associated with Karel Vasak. First-generation rights generally refer to civil and political liberties; second-generation rights to economic, social and cultural guarantees; and third-generation or solidarity rights to claims such as development, peace, a healthy environment and concerns held collectively or requiring international cooperation.

The classification is a teaching device, not a rule of treaty priority. The metaphor may wrongly suggest that later categories replaced earlier ones or that one category is inherently less legal. Rights developed through overlapping struggles, and many rights resist neat placement. Self-determination appears in both Covenants; environmental harm affects life, health, culture and equality; and development must be human-rights based. Use generations to organise an answer, then emphasise universality, indivisibility and interdependence.

24. Meaning of a treaty reservation

A reservation is a unilateral statement, however phrased or named, made by a State when signing, ratifying, accepting, approving or acceding to a treaty, by which it purports to exclude or modify the legal effect of certain treaty provisions in their application to that State. An interpretative declaration merely states an understanding without purporting to change legal effect. The label used by the State is not decisive; substance controls.

Under the Vienna Convention on the Law of Treaties framework, a reservation is impermissible if prohibited by the treaty, outside the treaty's permitted reservations, or incompatible with its object and purpose. Articles 20 to 23 address acceptance, objection, legal effects, withdrawal and procedure. India is not a party to the Vienna Convention, but important reservation rules reflected in it are treated as rules of customary international law.

25. Reservations in human-rights treaties

Human-rights treaties differ from ordinary reciprocal bargains because their purpose is to protect persons subject to State jurisdiction. A broad reservation can fragment minimum protection or make the extent of obligation uncertain. The International Court of Justice's Reservations to the Genocide Convention advisory opinion placed the object-and-purpose test at the centre of compatibility.

The Human Rights Committee's General Comment No. 24 analyses reservations to the ICCPR, including reservations affecting non-derogable norms, effective remedies and the Committee's supervisory role. Questions concerning who determines compatibility and whether an invalid reservation is severable remain debated. In an answer, identify the exact statement, decide whether it modifies legal effect, apply treaty-specific rules and the object-and-purpose test, note objections, and explain the legal consequence carefully.

26. India's accession to the Covenants

India acceded to the ICCPR and ICESCR on 10 April 1979; both entered into force for India on 10 July 1979. Accession has the same international effect as ratification after signature: India became bound as a State party, subject to valid declarations or reservations. India did not become party merely because it voted for the UDHR or because similar rights appear in the Constitution.

India is not party to the First or Second Optional Protocol to the ICCPR or the Optional Protocol to the ICESCR. Covenant participation and Optional Protocol participation must always be checked separately.

27. India's declaration on self-determination

With reference to common Article 1 of both Covenants, India declared that the right of self-determination applies only to peoples under foreign domination and not to sovereign independent States or to a section of a people or nation, invoking national integrity. France, the Netherlands and Pakistan recorded objections to India's position in the treaty-depositary record.

The issue illustrates why the name “declaration” is not conclusive. If a statement narrows the legal effect of a treaty obligation, other States or supervisory bodies may treat it as a reservation and assess compatibility with the treaty's object and purpose.

28. India's ICCPR positions on liberty and foreigners

For ICCPR Article 9, India stated that the article would be applied consistently with Article 22(3) to (7) of the Constitution concerning preventive detention. India further stated that under the Indian legal system there was no enforceable right to compensation against the State for unlawful arrest or detention. Subsequent Indian constitutional jurisprudence developed public-law compensation under Articles 32 and 226 in cases such as Rudul Sah and Nilabati Behera, materially affecting the domestic-law premise stated in 1979 even though withdrawal or modification of a depositary statement is a separate international act.

For ICCPR Article 13, India expressly reserved the right to apply its law relating to foreigners. The reservation concerns expulsion protections for aliens lawfully in the territory and should not be confused with a general power to disregard constitutional or other international duties.

29. India's positions concerning freedoms and equality

India declared that ICESCR Articles 4 and 8 and ICCPR Articles 12, 19(3), 21 and 22 would be applied in conformity with Article 19 of the Constitution of India. These provisions concern permissible limitations, trade-union rights, movement, expression, assembly and association. The statement connects Covenant application with the Constitution, but international treaty responsibility cannot ordinarily be avoided merely by relying on inconsistent internal law.

For ICESCR Article 7(c), concerning equal opportunity for promotion in employment, India declared that it would apply the provision in conformity with Article 16(4) of the Constitution, which authorises reservation in appointments or posts for inadequately represented backward classes. This reflects India's understanding that substantive equality and constitutionally authorised affirmative action are compatible with equal opportunity.

30. International treaties in Indian law

Article 51(c) directs the State to foster respect for international law and treaty obligations. Parliament has power under Article 253 to make laws implementing treaties. Treaty-making does not by itself amend the Constitution, and a treaty provision requiring a change in domestic rights or liabilities may need legislation before it can be directly enforced as municipal law.

In Jolly George Varghese v. Bank of Cochin, the Supreme Court explained that an international covenant does not automatically become enforceable domestic law without legislative transformation, while also using its values in interpretation. In Vishaka v. State of Rajasthan, the Court held that international conventions consistent with Fundamental Rights and not in conflict with domestic law may inform constitutional interpretation, and it used CEDAW to address a legislative vacuum.

The correct proposition is therefore neither that treaties are irrelevant nor that every treaty clause is automatically self-executing. Courts interpret domestic law, where possible, consistently with international obligations; constitutional supremacy and enacted law remain central; and Article 253 provides the legislative route for implementation.

31. Indian constitutional convergence

Many ICCPR guarantees correspond with Part III: equality, life and liberty, criminal safeguards, freedoms, religion, minority rights and constitutional remedies. ICESCR rights resonate strongly with Directive Principles concerning livelihood, equal pay, health, education, humane work, legal aid and social welfare. Judicial interpretation of Article 21 has connected enforceable rights with livelihood, health, education, shelter, environment, privacy and dignity.

This convergence demonstrates interdependence, but correspondence is not identity. Treaty wording, limitation clauses, beneficiaries and remedies may differ from constitutional provisions. An examination answer should map the relevant rights provision by provision and identify the Indian source of enforceability.

32. Problem-solving and examination method

For a Covenant problem, follow this sequence: identify the instrument and India's participation; locate the substantive right; identify the general obligation; determine whether the issue concerns limitation, derogation or progressive realisation; check non-discrimination and remedy; identify any reservation or declaration; examine monitoring or Optional Protocol competence; and then analyse domestic enforceability under the Constitution and legislation.

For an essay, explain formulation, legal nature and structure before listing rights. Compare the Covenants through their obligations and institutions, not through the inaccurate claim that ICCPR rights cost nothing while ICESCR rights are merely aspirations. Treat generations as a heuristic. For reservations, define by legal effect, apply the object-and-purpose test, state India's five-part depositary position accurately and distinguish international validity from domestic constitutional development.
    `.trim(),
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
      "Charter of the United Nations, 1945 — Articles 1(3), 55 and 56",
      "First Optional Protocol to the ICCPR, 1966",
      "Second Optional Protocol to the ICCPR, 1989",
      "Optional Protocol to the ICESCR, 2008",
      "Vienna Declaration and Programme of Action, 1993 — Paragraph 5",
      "Constitution of India — Articles 51(c), 73 and 253",
    ],
    keyPoints: [
      "The International Bill comprises the UDHR, ICCPR, ICESCR and associated Optional Protocols.",
      "The UN Charter internationalised promotion of human rights but did not enumerate a complete catalogue.",
      "The UDHR is a declaration and common standard; the Covenants are binding treaties for their States parties.",
      "The UDHR integrates civil, political, economic, social and cultural rights in one instrument.",
      "ICCPR Article 2 requires States to respect and ensure rights and provide an effective remedy.",
      "ICCPR limitations must satisfy the particular right's legality, legitimate-purpose, necessity and proportionality requirements.",
      "Article 4 emergency derogation is distinct from ordinary limitation and contains strict conditions and non-derogable rights.",
      "The Human Rights Committee monitors the ICCPR; it is distinct from the intergovernmental Human Rights Council.",
      "Individual communications under the ICCPR require separate participation in the First Optional Protocol.",
      "ICESCR Article 2(1) requires immediate concrete steps using maximum available resources toward progressive realisation.",
      "Non-discrimination and equal rights of men and women are immediate ICESCR obligations.",
      "Progressive realisation does not authorise indefinite inaction or unexplained retrogression.",
      "The CESCR monitors implementation and develops General Comments on economic, social and cultural rights.",
      "Civil-political and socio-economic-cultural rights are universal, indivisible, interdependent and interrelated.",
      "The generations model is a teaching classification, not a chronology of replacement or hierarchy.",
      "A reservation is defined by its intended legal effect, not the label attached to it.",
      "A reservation incompatible with a treaty's object and purpose is impermissible under the governing treaty-law framework.",
      "India acceded to both Covenants on 10 April 1979; they entered into force for India on 10 July 1979.",
      "India has not accepted the three principal individual-complaint or abolition Optional Protocols discussed in this unit.",
      "India's depositary statements address self-determination, preventive detention and compensation, foreigners, Article 19 freedoms, unions and promotion equality.",
      "Later Indian public-law compensation decisions changed the domestic legal position underlying part of India's 1979 Article 9 statement.",
      "Treaty norms are not automatically enforceable municipal law in India, but compatible international standards can guide constitutional interpretation.",
    ],
    importantCases: [
      {
        id: "human-rights-unit-2-reparations-genocide-reservations",
        caseName: "Reservations to the Convention on the Prevention and Punishment of the Crime of Genocide",
        citation: "ICJ Advisory Opinion, 1951",
        principle:
          "Compatibility with a treaty's object and purpose is central to assessing reservations in a multilateral protective convention.",
        summary:
          "The advisory opinion shaped the modern treaty-law approach to reservations beyond strict unanimity.",
      },
      {
        id: "human-rights-unit-2-jolly-george",
        caseName: "Jolly George Varghese v. Bank of Cochin",
        citation: "(1980) 2 SCC 360",
        principle:
          "A Covenant obligation does not automatically become enforceable municipal law without legislative transformation, though it can guide interpretation.",
        summary:
          "The Court considered ICCPR Article 11 while applying Indian civil procedure and emphasised harmonious interpretation where possible.",
      },
      {
        id: "human-rights-unit-2-rudul-sah",
        caseName: "Rudul Sah v. State of Bihar",
        citation: "(1983) 4 SCC 141",
        principle:
          "The Supreme Court may award public-law monetary relief for grave unlawful deprivation of liberty.",
        summary:
          "Compensation for continued detention after acquittal helped develop an enforceable domestic remedy relevant to ICCPR Article 9(5).",
      },
      {
        id: "human-rights-unit-2-nilabati-behera",
        caseName: "Nilabati Behera v. State of Orissa",
        citation: "(1993) 2 SCC 746",
        principle:
          "Public-law compensation for violation of fundamental rights is distinct from private-law damages and sovereign-immunity defences.",
        summary:
          "The Court strengthened the constitutional compensation remedy for custodial death and Article 21 violation.",
      },
      {
        id: "human-rights-unit-2-vishaka",
        caseName: "Vishaka v. State of Rajasthan",
        citation: "(1997) 6 SCC 241",
        principle:
          "International conventions consistent with Fundamental Rights and not conflicting with domestic law may inform constitutional interpretation.",
        summary:
          "The Court used CEDAW and constitutional guarantees to frame workplace safeguards in a legislative vacuum.",
      },
      {
        id: "human-rights-unit-2-apparel-export",
        caseName: "Apparel Export Promotion Council v. A.K. Chopra",
        citation: "(1999) 1 SCC 759",
        principle:
          "Constitutional equality and dignity should be read consistently with international obligations protecting women from workplace harassment.",
        summary:
          "The Court reaffirmed the relevance of CEDAW and Vishaka principles in domestic adjudication.",
      },
      {
        id: "human-rights-unit-2-gramophone-company",
        caseName: "Gramophone Company of India Ltd. v. Birendra Bahadur Pandey",
        citation: "(1984) 2 SCC 534",
        principle:
          "Domestic law should be interpreted consistently with international law where possible, but clear binding legislation controls in case of unavoidable conflict.",
        summary:
          "The decision explains the interpretive relationship between international law and Indian municipal law.",
      },
      {
        id: "human-rights-unit-2-pucl-phone-tapping",
        caseName: "People's Union for Civil Liberties v. Union of India",
        citation: "(1997) 1 SCC 301",
        principle:
          "Telephone interception affects privacy and must comply with lawful procedure and safeguards against arbitrary power.",
        summary:
          "The Court's safeguards demonstrate convergence between constitutional privacy and international civil-liberty standards.",
      },
    ],
    examFocus:
      "Prepare the UN Charter background and drafting sequence; nature and 30-article structure of the UDHR; ICCPR general obligations, substantive rights, limitations, Article 4 derogation, non-derogable rights and Human Rights Committee; the two ICCPR Optional Protocols; ICESCR rights, Article 2(1), immediate duties, maximum available resources, progressive realisation, minimum essential levels and CESCR; the ICESCR Optional Protocol; indivisibility and practical interdependence; the first, second and third generations as a non-hierarchical teaching device; reservation definition and Articles 19–23 of the Vienna Convention framework; object-and-purpose analysis; India's accession on 10 April 1979; India's five numbered depositary statements; objections to its self-determination declaration; its non-participation in the Optional Protocols; Articles 51(c) and 253 of the Constitution; and Jolly George, Rudul Sah, Nilabati Behera, Gramophone Company, Vishaka, Apparel Export Promotion Council and PUCL.",
    revisionNotes:
      "International Bill = UDHR + ICCPR + ICESCR + associated Optional Protocols. UDHR: declaration and common standard, 30 integrated articles. ICCPR: respect and ensure, effective remedy, civil-political rights, specific limitation tests, Article 4 emergency derogation and expressly non-derogable rights; monitored by the Human Rights Committee. ICESCR: take immediate deliberate steps, maximum available resources, progressive realisation, non-discrimination, equality and minimum essential protection; monitored by CESCR. Rights across both Covenants are indivisible and interdependent. Generations are a study aid, not a hierarchy. Reservation = statement intended to exclude or modify legal effect; test treaty permission and object-purpose compatibility. India acceded to both Covenants on 10 April 1979, effective 10 July 1979, with statements on common Article 1; ICCPR Articles 9 and 13; ICESCR Articles 4, 7(c), 8; and ICCPR Articles 12, 19(3), 21 and 22. India has not joined the First or Second ICCPR Optional Protocol or the ICESCR Optional Protocol. Domestic method: Articles 51(c) and 253; Jolly George rejects automatic enforceability; Vishaka permits compatible international norms to guide constitutional interpretation; Rudul Sah and Nilabati Behera developed constitutional compensation relevant to Article 9(5).",
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
      "Distinguish international crimes, treaty violations and constitutional wrongs.",
      "Apply prevention, investigation, prosecution, reparation and non-refoulement duties.",
      "Explain India's present treaty status and domestic legal framework.",
      "Use leading international and Indian decisions in problem and essay answers.",
    ],
    detailedContent: `
1. Human rights law and inhuman wrongs

This unit concerns practices that attack the equal humanity, physical integrity and legal personality of individuals and groups. Genocide, apartheid, torture, racial discrimination and slavery are not merely examples of harsh treatment. Each has a distinct legal definition, mental element, jurisdictional setting and remedial structure. A strong legal answer identifies the particular wrong instead of treating all grave abuse as interchangeable.

The framework operates at several levels. International human-rights law imposes duties upon States. International criminal law may impose individual criminal responsibility. International humanitarian law applies during armed conflict. Indian constitutional and criminal law provide domestic prohibitions, procedures and remedies. The same facts may engage more than one level, but the source and consequence of each rule must be stated separately.

2. The duty to prevent, punish and repair

Protection against inhuman wrongs is not satisfied by a formal prohibition. The State must establish effective laws and institutions, prevent foreseeable violations, investigate credible allegations promptly and independently, prosecute where evidence warrants, punish responsible persons, protect victims and witnesses, and provide effective remedy and reparation. Reparation can include restitution, compensation, rehabilitation, satisfaction and guarantees of non-repetition.

Some prohibitions, including genocide, slavery and torture, have an exceptional status in international law. The prohibition of torture is absolute and non-derogable. No emergency, war, public danger, superior order or alleged necessity can justify it. The gravity of these norms also affects extradition, asylum, immunity, jurisdiction and the responsibility of superiors and public authorities.

3. Origins and purpose of the Genocide Convention

The Convention on the Prevention and Punishment of the Crime of Genocide was adopted in 1948 after the Holocaust and other mass atrocities. It confirms genocide as a crime under international law in peace as well as war and requires States to prevent and punish it. India ratified the Convention in 1959.

The Convention protects national, ethnical, racial and religious groups. Political, cultural, economic and other groups are not listed as such. This closed list is often criticised, but it remains part of the treaty definition. Genocide protects the continued physical or biological existence of the protected group, not merely individual victims considered separately.

4. The material acts of genocide

Article II lists five acts when committed against members of a protected group: killing; causing serious bodily or mental harm; deliberately inflicting conditions of life calculated to bring about physical destruction in whole or in part; imposing measures intended to prevent births; and forcibly transferring children to another group.

The listed act must be proved. Forced displacement alone is not automatically genocide, although it may supply evidence of intent or constitute another international crime. Destruction of cultural property alone is also outside the narrow treaty definition, but it can be relevant evidence and may be punishable under other rules.

5. Specific intent and substantiality

Genocide requires the intent to destroy, in whole or in part, the protected group as such. This dolus specialis distinguishes genocide from murder, persecution and many crimes against humanity. Knowledge that deaths will occur is not by itself enough; the prohibited destruction of the group must be intended.

Where destruction “in part” is alleged, the targeted part must ordinarily be substantial, assessed quantitatively and qualitatively. Intent may be inferred from a consistent pattern of conduct only where that inference is justified by the evidence. The high threshold protects legal precision without diminishing the gravity of other mass atrocities.

6. Punishable conduct and responsibility for genocide

Article III makes genocide, conspiracy, direct and public incitement, attempt and complicity punishable. Direct and public incitement is an inchoate offence: it may be punishable even if genocide does not follow. Constitutionally responsible rulers, public officials and private individuals can incur responsibility.

The Convention requires effective penalties and trial by a competent domestic tribunal or an international penal tribunal accepted by the relevant State. State responsibility and individual criminal responsibility are separate. A State may breach duties to prevent or punish even though a criminal court has not convicted a particular individual.

7. Prevention of genocide

The duty to prevent arises when a State learns, or should normally have learned, of a serious risk that genocide will occur and has means reasonably available to influence the actors. Capacity, proximity and legal authority matter. Prevention is a duty of conduct, not a guarantee that the crime will never occur.

Risk assessment should examine dehumanising propaganda, discriminatory measures, organised violence, targeting of protected groups, patterns of atrocities and the capability and declared purpose of perpetrators. Early action, evidence preservation and protection of threatened communities are central to meaningful prevention.

8. Apartheid as a human-rights wrong and international crime

Apartheid originated as the official system of racial domination in South Africa, but the legal concept is not confined geographically or historically to that regime. ICERD requires States to condemn and eradicate racial segregation and apartheid. The 1973 Apartheid Convention treats specified inhuman acts committed to establish or maintain domination by one racial group over another, with systematic oppression, as an international crime.

The Rome Statute classifies apartheid as a crime against humanity when inhumane acts of a character similar to other listed crimes are committed in the context of an institutionalised regime of systematic oppression and domination by one racial group over another, with the intention of maintaining that regime. The elements of institutionalisation, systematic domination, racial-group relationship and intent must therefore be proved.

9. Apartheid, segregation and racial discrimination distinguished

Racial discrimination is the broader category. Segregation separates persons or communities on racial grounds. Apartheid adds an institutionalised system of systematic oppression and domination maintained through inhuman acts. Every apartheid regime necessarily involves racial discrimination, but not every discriminatory act establishes apartheid.

Legal classification must be evidence-based. Students should identify the policy or practice, the groups affected, the purpose and structure of domination, the prohibited acts, State participation and available enforcement mechanisms rather than relying only on political labels.

10. ICERD and the meaning of racial discrimination

The International Convention on the Elimination of All Forms of Racial Discrimination, 1965 defines racial discrimination as a distinction, exclusion, restriction or preference based on race, colour, descent, or national or ethnic origin that has the purpose or effect of impairing equal enjoyment of human rights. India ratified ICERD in 1968.

The definition reaches discriminatory effects as well as express discriminatory purpose. The Convention requires States to eliminate racial discrimination by public authorities and to prohibit and bring to an end discrimination by persons, groups or organisations. Temporary special measures aimed at securing equal enjoyment are not treated as racial discrimination if they do not maintain separate rights after their objective is achieved.

11. State obligations under ICERD

States must review laws and policies, prohibit discrimination, provide effective protection and remedies, address racist propaganda and organisations within the limits and safeguards of the Convention, and promote understanding through education and culture. Article 5 applies equality to civil, political, economic, social and cultural rights.

Implementation is monitored by the Committee on the Elimination of Racial Discrimination through periodic reports, inter-State procedures and, for States accepting Article 14, individual communications. India has not accepted the Article 14 individual-communications procedure. International supervision supplements rather than replaces domestic remedies.

12. Caste, descent and the Indian constitutional framework

India has maintained in the ICERD process that caste is distinct from race. International monitoring bodies have treated discrimination based on “descent” as capable of including status inherited across generations. Whatever the international classification debate, caste discrimination is directly prohibited and addressed under Indian constitutional and statutory law.

Articles 14, 15 and 16 guarantee equality and prohibit specified discrimination; Article 17 abolishes untouchability; Articles 23 and 24 prohibit trafficking, forced labour and hazardous child labour. Protective discrimination and affirmative measures seek substantive equality. The Protection of Civil Rights Act, 1955 and Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 provide specialised enforcement.

13. Torture under international law

Article 1 of the Convention against Torture defines torture through four central elements: severe physical or mental pain or suffering; an intentional act; a listed or comparable purpose such as obtaining information or confession, punishment, intimidation, coercion or discrimination; and infliction by, at the instigation of, or with consent or acquiescence of a public official or person acting officially. Pain or suffering arising only from lawful sanctions is excluded, but that phrase cannot legitimise sanctions prohibited by international law.

The public-official nexus distinguishes treaty torture from some private violence, although a State may acquiesce by knowingly failing to protect. Other cruel, inhuman or degrading treatment or punishment may lack the required severity, purpose or official involvement, but remains prohibited.

14. The absolute and non-derogable prohibition

CAT Article 2 requires effective legislative, administrative, judicial and other measures to prevent torture. No exceptional circumstance whatsoever may be invoked as justification. An order from a superior or public authority is no defence. ICCPR Articles 4 and 7 likewise make freedom from torture and cruel, inhuman or degrading treatment non-derogable.

The rule excludes balancing torture against public safety or intelligence objectives. Evidence obtained through torture is generally inadmissible except against an alleged torturer to prove the statement was made. Authorities must train officials, review interrogation practices and maintain safeguards throughout arrest, detention and imprisonment.

15. Non-refoulement and jurisdiction under CAT

CAT Article 3 prohibits expelling, returning or extraditing a person to another State where there are substantial grounds for believing the person would face torture. Authorities assess all relevant circumstances, including a consistent pattern of gross violations, but the inquiry ultimately concerns the personal and foreseeable risk to the individual.

CAT also requires States to criminalise torture, establish specified forms of territorial and personal jurisdiction, take an alleged offender into custody where appropriate, make a preliminary inquiry, and prosecute or extradite in accordance with the Convention. This is commonly expressed as aut dedere aut judicare—extradite or submit the case for prosecution.

16. Investigation, complaint and reparation for torture

Competent authorities must investigate promptly and impartially wherever there is reasonable ground to believe torture occurred. A complainant must be able to complain and have the case examined without retaliation. CAT Article 14 requires enforceable redress and fair and adequate compensation, including means for rehabilitation.

An effective investigation must be independent in law and practice, capable of identifying responsibility, evidence-based and reasonably prompt. Medical documentation, custody records, access to lawyers and family, judicial supervision and preservation of digital evidence help prevent concealment and impunity.

17. India's status under the Convention against Torture

India signed CAT on 14 October 1997 but, as of this chapter's update, has not ratified it and has not joined the Optional Protocol establishing preventive visits. Signature creates an obligation not to defeat the treaty's object and purpose, but it is not equivalent to consent to be bound by ratification. India is nevertheless bound by ICCPR Article 7 and by domestic constitutional guarantees.

There is no single comprehensive Indian anti-torture statute modelled upon CAT. Torture and custodial abuse may be prosecuted through offences under the Bharatiya Nyaya Sanhita, 2023 and addressed through the Bharatiya Nagarik Suraksha Sanhita, 2023, evidence rules, departmental action, constitutional writs, compensation and human-rights institutions. Fragmented liability must not be confused with full CAT implementation.

18. Custodial dignity under the Constitution of India

Articles 20, 21 and 22 protect accused and detained persons. Article 20(3) guards against compelled self-incrimination. Article 21 requires fair, just and reasonable procedure and protects bodily integrity and dignity. Article 22 provides arrest and detention safeguards. Prisoners retain fundamental rights except to the extent lawfully and necessarily curtailed by incarceration.

D.K. Basu v. State of West Bengal prescribed arrest and custody safeguards and affirmed compensation as a public-law response to established violations. Nilabati Behera v. State of Orissa recognised constitutional compensation for custodial death. These remedies do not exclude criminal prosecution, civil damages or disciplinary action.

19. Slavery and the slave trade

The Slavery Convention, 1926 defines slavery as the status or condition of a person over whom any or all powers attaching to ownership are exercised. The slave trade includes acts of capture, acquisition, disposal, sale, exchange and transport directed to reducing a person to slavery. Legal ownership is unnecessary if powers equivalent to ownership are exercised in fact.

The Supplementary Convention, 1956 addresses institutions and practices similar to slavery, including debt bondage, serfdom, certain servile marriage practices and exploitation through delivery of a child for labour. The prohibition of slavery is a peremptory norm; States must prevent, criminalise, investigate and remedy both official and private exploitation.

20. Servitude, forced labour and compulsory labour

Servitude is a severe condition of domination involving constrained freedom and an obligation to live or work under another's control. Forced or compulsory labour generally means work exacted under menace of a penalty and not offered voluntarily. It may exist without ownership-like control and is therefore broader than slavery.

ICCPR Article 8 separately prohibits slavery, the slave trade, servitude and forced labour, subject to defined exceptions such as lawful prison work, military or alternative service, emergency service and normal civic obligations. The ILO Forced Labour Conventions further develop prevention, suppression and labour-protection duties.

21. Forced labour and bonded labour in India

Article 23 of the Constitution prohibits trafficking in human beings, begar and other similar forms of forced labour and is enforceable against public and private actors. In People's Union for Democratic Rights v. Union of India, the Supreme Court held that labour compelled by economic necessity for less than the statutory minimum wage can fall within Article 23. Compulsion is not limited to physical force.

The Bonded Labour System (Abolition) Act, 1976 abolishes bonded labour obligations, extinguishes bonded debt, prohibits enforcement and provides for release and rehabilitation mechanisms. Bandhua Mukti Morcha v. Union of India used public-interest jurisdiction to address bonded labour and insisted upon identification, release and rehabilitation rather than formal denial by authorities.

22. Trafficking in persons

Trafficking is not synonymous with movement, prostitution, smuggling or slavery. The Palermo Protocol model comprises an act such as recruitment, transport, transfer, harbouring or receipt; improper means such as force, coercion, abduction, fraud, deception, abuse of power or vulnerability, or payments controlling another; and a purpose of exploitation. For children, proof of improper means is unnecessary.

Exploitation can include sexual exploitation, forced labour, slavery or similar practices, servitude and removal of organs. A victim's consent does not excuse trafficking where prohibited means were used. A rights-based response combines prevention, victim identification, non-punishment for compelled conduct, protection, recovery, compensation, investigation and prosecution.

23. Indian law on trafficking and exploitation

Article 23 prohibits trafficking and forced labour. The Bharatiya Nyaya Sanhita, 2023 defines and punishes trafficking in Section 143 and exploitation of a trafficked person in Section 144; Section 146 addresses unlawful compulsory labour. The Immoral Traffic (Prevention) Act, 1956 addresses specified commercial sexual-exploitation activities, while child-protection and bonded-labour statutes may also apply.

The offence must be matched to the evidence. Rescue without rehabilitation can expose a victim to renewed exploitation. Authorities should avoid treating trafficked persons as offenders merely because exploitation placed them in unlawful situations. Compensation, shelter, healthcare, legal assistance, identity documents and livelihood support are part of effective protection.

24. The right to life and movement toward abolition

ICCPR Article 6 recognises the inherent right to life. In States that have not abolished capital punishment, a death sentence may be imposed only for the “most serious crimes,” under law in force when the offence occurred, consistently with the Covenant and Genocide Convention, and pursuant to a final judgment by a competent court. Pardon or commutation must remain available.

Execution is prohibited for offences committed by persons below eighteen and may not be carried out on pregnant women. Article 6 must not be invoked to delay or prevent abolition. International interpretation treats “most serious crimes” as crimes of extreme gravity involving intentional killing, not ordinary political, economic, drug or sexual offences lacking intentional death.

25. Second Optional Protocol and abolitionist standards

The Second Optional Protocol to the ICCPR, adopted in 1989, aims at abolition of the death penalty. Parties undertake not to execute anyone within their jurisdiction and to take necessary measures to abolish it. A narrowly framed wartime reservation may be made at ratification or accession in accordance with the Protocol.

India is not a party to the Second Optional Protocol. UN General Assembly resolutions have repeatedly called for a moratorium with a view to abolition. These resolutions are not themselves treaties, but they demonstrate the direction of international policy and support safeguards pending abolition.

26. Capital punishment under the Constitution of India

India is retentionist: death remains a punishment for specified offences, including certain offences under the Bharatiya Nyaya Sanhita, 2023 and special laws. In Jagmohan Singh v. State of Uttar Pradesh the Supreme Court upheld the penalty within judicial sentencing. Bachan Singh v. State of Punjab upheld the statutory option but restricted death to the “rarest of rare” cases when the alternative of life imprisonment is unquestionably foreclosed.

The doctrine requires individualised sentencing, consideration of aggravating and mitigating circumstances, and attention to both crime and criminal. Life imprisonment is the rule and death the exception. The death penalty cannot be automatic or based only upon the category of offence.

27. Sentencing procedure and mitigation

Machhi Singh v. State of Punjab organised rarest-of-rare considerations but cannot replace Bachan Singh's principled requirement of individualisation. Mithu v. State of Punjab invalidated mandatory death under former IPC Section 303 because it excluded judicial discretion and fair sentencing. Manoj v. State of Madhya Pradesh strengthened the duty to collect meaningful mitigating material before sentence.

Courts should receive information about the accused's background, mental and physical health, trauma, social circumstances, conduct in custody and possibility of reform. The State must place relevant material before the court, and the defence must have a real opportunity to present mitigation. Brutality of the crime alone does not complete the constitutional inquiry.

28. Delay, mercy jurisdiction and dignity on death row

Articles 72 and 161 empower the President and Governor respectively to grant pardon, reprieve, respite, remission or commutation within their constitutional fields. Judicial review remains available for mala fides, irrelevant considerations, arbitrariness, procedural unfairness and other recognised defects; courts do not sit as appellate authorities over the merits of clemency.

In Shatrughan Chauhan v. Union of India, unexplained and inordinate delay and supervening circumstances were recognised as grounds relevant to commutation. Solitary confinement before lawful warrant, failure to communicate rejection, mental illness and procedural violations can engage Article 21. Even a death-sentenced prisoner retains dignity until the last breath.

29. Fair-trial and execution safeguards

The highest standards of fairness apply because error is irreversible. An accused must have competent legal representation, interpretation where needed, disclosure, an impartial court, reasoned conviction and sentence, appellate review and meaningful access to review and clemency. Execution cannot precede exhaustion of lawful remedies and prescribed notice.

Public opinion, the victim's suffering and societal concern are relevant to justice but cannot substitute for proof beyond reasonable doubt or constitutional sentencing. Wrongful conviction, discriminatory application and inconsistent mitigation are central abolitionist concerns.

30. Problem-solving and examination method

First identify the legal wrong and its exact elements. For genocide, state protected group, listed act and specific intent. For apartheid, establish an institutionalised regime, systematic racial domination, inhuman acts and intent to maintain it. For torture, examine severity, intentionality, purpose and official involvement; then distinguish other ill-treatment. For slavery and trafficking, analyse control, act, means and exploitative purpose.

Next identify the applicable instrument, India's treaty status, domestic constitutional or statutory rule, responsible actor, jurisdiction and remedy. In a death-penalty answer, begin with ICCPR Article 6, abolitionist instruments and India's retentionist status, then apply Bachan Singh, individualised mitigation, fair procedure, clemency and Article 21 safeguards. End with a reasoned conclusion rather than a moral assertion alone.
    `.trim(),
    provisions: [
      "Genocide Convention, 1948",
      "International Convention on the Elimination of All Forms of Racial Discrimination, 1965",
      "International Convention on the Suppression and Punishment of the Crime of Apartheid, 1973",
      "Convention against Torture, 1984",
      "Slavery Convention, 1926 and Supplementary Convention, 1956",
      "ICCPR — Articles 6, 7 and 8",
      "Rome Statute of the International Criminal Court — Articles 6 and 7",
      "Protocol to Prevent, Suppress and Punish Trafficking in Persons, 2000",
      "Second Optional Protocol to the ICCPR, 1989",
      "Constitution of India — Articles 14, 17, 20, 21, 22, 23, 24, 72 and 161",
      "Bharatiya Nyaya Sanhita, 2023 — Sections 143, 144 and 146",
      "Bonded Labour System (Abolition) Act, 1976",
      "Protection of Civil Rights Act, 1955 and SC/ST (Prevention of Atrocities) Act, 1989",
    ],
    keyPoints: [
      "Genocide protects national, ethnical, racial and religious groups against intended physical or biological destruction.",
      "Genocide requires a listed act plus the specific intent to destroy the protected group in whole or substantial part.",
      "Direct and public incitement to genocide is punishable even if genocide does not ultimately occur.",
      "Apartheid requires institutionalised, systematic racial domination maintained through inhuman acts.",
      "ICERD covers discriminatory purpose or effect based on race, colour, descent, or national or ethnic origin.",
      "Torture under CAT requires severe suffering, intention, a prohibited purpose and an official nexus.",
      "The prohibition of torture is absolute and non-derogable; emergency and superior orders are no defence.",
      "CAT non-refoulement prohibits transfer where the individual faces a real, personal and foreseeable torture risk.",
      "India signed CAT in 1997 but has not ratified it or joined OPCAT.",
      "Articles 20, 21 and 22 and the D.K. Basu safeguards protect persons in custody.",
      "Slavery involves exercise of powers attaching to ownership; forced labour does not require ownership-like control.",
      "Article 23 applies against both State and private actors and includes compulsion through economic necessity.",
      "Trafficking ordinarily requires act, improper means and exploitative purpose; means need not be proved for a child.",
      "BNS Sections 143, 144 and 146 are the current core provisions on trafficking, exploitation and compulsory labour.",
      "ICCPR Article 6 restricts retentionist States and expressly encourages abolition.",
      "India has not joined the Second Optional Protocol to the ICCPR.",
      "Under Bachan Singh, life imprisonment is the rule and death is restricted to the rarest of rare cases.",
      "A mandatory death sentence is unconstitutional because it excludes individualised sentencing.",
      "Mitigation must include the offender's circumstances and genuine possibility of reform.",
      "Delay, mental illness and serious procedural violations may justify commutation under Article 21.",
    ],
    importantCases: [
      {
        id: "human-rights-unit-3-genocide-convention",
        caseName: "Reservations to the Convention on Genocide",
        citation: "ICJ Advisory Opinion, 1951",
        principle:
          "Compatibility with a treaty's object and purpose is the governing test for reservations to the Genocide Convention.",
        summary:
          "The opinion also emphasised the universal and humanitarian character of the Convention's principles.",
      },
      {
        id: "human-rights-unit-3-bosnia-genocide",
        caseName: "Bosnia and Herzegovina v. Serbia and Montenegro",
        citation: "ICJ Judgment, 2007",
        principle:
          "The Genocide Convention imposes distinct duties to prevent and punish; genocide requires proof of specific intent.",
        summary:
          "The Court explained State responsibility, substantiality and the preventive duty arising from awareness of serious risk.",
      },
      {
        id: "human-rights-unit-3-furundzija",
        caseName: "Prosecutor v. Furundžija",
        citation: "ICTY Trial Judgment, 1998",
        principle:
          "The prohibition of torture has a peremptory character and torture can generate individual criminal responsibility.",
        summary:
          "The judgment is important for the definition, absolute nature and international legal consequences of torture.",
      },
      {
        id: "human-rights-unit-3-dk-basu",
        caseName: "D.K. Basu v. State of West Bengal",
        citation: "(1997) 1 SCC 416",
        principle:
          "Custodial torture violates Articles 21 and 22; arrest safeguards and public-law compensation promote accountability.",
        summary:
          "The Court prescribed documentation, communication, medical and access safeguards for arrest and detention.",
      },
      {
        id: "human-rights-unit-3-nilabati-behera",
        caseName: "Nilabati Behera v. State of Orissa",
        citation: "(1993) 2 SCC 746",
        principle:
          "Constitutional courts may award compensation for established custodial death as a public-law remedy.",
        summary:
          "Sovereign immunity does not defeat compensation for violation of the fundamental right to life.",
      },
      {
        id: "human-rights-unit-3-pudr",
        caseName: "People's Union for Democratic Rights v. Union of India",
        citation: "(1982) 3 SCC 235",
        principle:
          "Payment below the minimum wage under economic compulsion may constitute forced labour prohibited by Article 23.",
        summary:
          "Article 23 protects against private as well as State-imposed forced labour and is not confined to physical force.",
      },
      {
        id: "human-rights-unit-3-bandhua",
        caseName: "Bandhua Mukti Morcha v. Union of India",
        citation: "(1984) 3 SCC 161",
        principle:
          "The State must identify, release and rehabilitate bonded labourers, and courts may use PIL to enforce that duty.",
        summary:
          "The decision linked Articles 21 and 23 with statutory implementation and dignified rehabilitation.",
      },
      {
        id: "human-rights-unit-3-bachan-singh",
        caseName: "Bachan Singh v. State of Punjab",
        citation: "(1980) 2 SCC 684",
        principle:
          "Death is constitutionally restricted to the rarest of rare cases when life imprisonment is unquestionably foreclosed.",
        summary:
          "Sentencing must be individualised and give full weight to mitigating circumstances and the possibility of reform.",
      },
      {
        id: "human-rights-unit-3-mithu",
        caseName: "Mithu v. State of Punjab",
        citation: "(1983) 2 SCC 277",
        principle:
          "A mandatory death sentence violates Articles 14 and 21 because it eliminates judicial discretion and fair hearing on sentence.",
        summary:
          "The ruling invalidated former IPC Section 303 and reinforced individualised capital sentencing.",
      },
      {
        id: "human-rights-unit-3-manoj",
        caseName: "Manoj v. State of Madhya Pradesh",
        citation: "2022 SCC OnLine SC 677",
        principle:
          "Capital sentencing requires a meaningful, proactive collection of mitigating information and assessment of reform.",
        summary:
          "The Court directed institutional reports and a fuller sentencing inquiry rather than reliance only upon crime circumstances.",
      },
      {
        id: "human-rights-unit-3-shatrughan-chauhan",
        caseName: "Shatrughan Chauhan v. Union of India",
        citation: "(2014) 3 SCC 1",
        principle:
          "Inordinate delay and specified supervening circumstances can justify commutation of a death sentence under Article 21.",
        summary:
          "Mercy and execution procedures remain subject to constitutional dignity and judicial review.",
      },
    ],
    examFocus:
      "Prepare the Genocide Convention's protected groups, five acts, specific intent, punishable forms, prevention duty and State/individual responsibility; the legal elements distinguishing apartheid, segregation and racial discrimination; ICERD definition, obligations and India's position; CAT definition, absolute prohibition, non-refoulement, investigation, prosecution and reparation duties, together with India's signed-but-not-ratified status; slavery, servitude, forced labour, bonded labour and trafficking distinctions; Constitution Articles 17, 20–24; BNS Sections 143, 144 and 146; ICCPR Article 6 and the Second Optional Protocol; India's retentionist position; Bachan Singh's rarest-of-rare doctrine; mandatory sentencing under Mithu; mitigation after Manoj; and delay, clemency and dignity under Shatrughan Chauhan.",
    revisionNotes:
      "Genocide = protected national, ethnical, racial or religious group + one of five Article II acts + specific intent to destroy in whole or substantial part. Apartheid = institutionalised regime + systematic racial oppression and domination + inhuman acts + intent to maintain. ICERD covers purpose or effect based on race, colour, descent, or national or ethnic origin. Torture = severe suffering + intention + prohibited purpose + official nexus; it is absolute and non-derogable. CAT Articles 2, 3, 4–7, 12–15 cover prevention, non-refoulement, criminalisation/jurisdiction, investigation, redress and exclusion of torture evidence. India signed CAT in 1997 but has not ratified it or OPCAT. Slavery concerns ownership powers; servitude is severe domination; forced labour is involuntary work under penalty; trafficking uses act + means + exploitation, with no means requirement for children. Article 23 reaches private conduct and economic compulsion; BNS Sections 143, 144 and 146 are current. ICCPR Article 6 restricts death sentences and encourages abolition; India has not joined the Second Optional Protocol. India retains death only constitutionally under Bachan Singh: life is rule, death exception, no mandatory death, full mitigation and reform inquiry, fair clemency process and continuing Article 21 dignity.",
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
