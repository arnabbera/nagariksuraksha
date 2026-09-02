import { createChapterModel } from "../../models/ChapterModel";

export const FAMILY_LAW_I_COURSE_ID = "family-law-i";

export const familyLawIChapters = [
  createChapterModel({
    id: "family-law-i-chapter-3-womens-property-and-stridhan",
    courseId: FAMILY_LAW_I_COURSE_ID,
    title: "Women’s Property and Stridhan",
    slug: "womens-property-and-stridhan",
    shortDescription:
      "Study the nature, sources, ownership and succession of a Hindu woman’s property, including Stridhan and the effect of the Hindu Succession Act, 1956.",
    chapterOverview:
      "This chapter explains the traditional concept of Stridhan and the modern statutory law governing property owned by Hindu women. It examines how property may be acquired, the transformation of the limited estate into absolute ownership, intestate succession, source-based succession rules and remedies protecting a woman’s exclusive property.",
    learningObjectives: [
      "Define Stridhan and distinguish it from dowry and jointly owned matrimonial property.",
      "Identify the principal traditional and modern sources of a Hindu woman’s property.",
      "Explain Sections 14, 15 and 16 of the Hindu Succession Act, 1956.",
      "Apply the rules of female Hindu intestate succession to problem questions.",
      "Discuss the protection and recovery of Stridhan using leading judicial principles.",
    ],
    detailedContent: `
1. Meaning and nature of Stridhan

Stridhan literally refers to a woman’s property. Under classical Hindu law, property received by a woman through specified sources was recognized as her own property. The precise incidents of ownership historically varied according to the source of acquisition, the school of Hindu law and the woman’s marital status. Modern statutory law and judicial decisions recognize a woman’s exclusive proprietary interest in her Stridhan.

2. Traditional sources of Stridhan

Traditional classifications commonly included gifts made before the nuptial fire, gifts made during the bridal procession, gifts from parents and relatives, gifts from the husband or his relatives, and property acquired through inheritance, partition, purchase, skill, exertion or other lawful means. The older distinction between saudayika and non-saudayika property is relevant for understanding the historical development of a woman’s powers over property, but present rights must be examined under the applicable statutory law.

3. Stridhan and dowry are not the same

Stridhan is property over which the woman has an exclusive legal right. Dowry is governed by the Dowry Prohibition Act, 1961 and involves property or valuable security given or agreed to be given in connection with marriage within the statutory definition. A lawful gift made to the woman and recorded as required may constitute her Stridhan, but an unlawful dowry demand does not become lawful merely because it is described as a gift. Property belonging to the woman does not become the property of her husband or matrimonial family merely because it is kept in the matrimonial home.

4. Section 14 of the Hindu Succession Act, 1956

Section 14(1) provides that property possessed by a female Hindu, whether acquired before or after the commencement of the Act, is generally held by her as full owner and not as a limited owner. The provision has a broad remedial purpose and enlarged qualifying limited estates into absolute ownership. The Explanation includes property acquired by inheritance, devise, partition, maintenance or arrears of maintenance, gift, personal skill or exertion, purchase, prescription or in any other manner, as well as property held as Stridhan immediately before the Act.

Section 14(2) preserves a restriction where property is acquired for the first time under a gift, will, instrument, decree, order or award whose terms prescribe a restricted estate. Courts distinguish a pre-existing right recognized by an instrument, which may attract Section 14(1), from a new and independent restricted grant falling within Section 14(2).

5. Equal coparcenary rights

Section 6 of the Hindu Succession Act, as amended in 2005, recognizes a daughter of a coparcener as a coparcener by birth in her own right, with the same rights and liabilities as a son, subject to the statutory framework. Property received by a woman on partition or through succession is her property and must not be confused with assets merely entrusted to her husband or relatives for safekeeping.

6. Intestate succession to a female Hindu

Section 15(1) sets out the general order of succession when a female Hindu dies intestate. Property devolves first upon sons and daughters, including the children of any predeceased son or daughter, and the husband; then upon the heirs of the husband; then upon the mother and father; then upon the heirs of the father; and finally upon the heirs of the mother. Section 16 provides the manner of distribution and the order among these heirs.

Section 15(2) contains special source-based rules. In the absence of a son or daughter, including children of a predeceased son or daughter, property inherited from the woman’s father or mother devolves upon the heirs of the father. Property inherited from her husband or father-in-law devolves upon the heirs of the husband. These rules require careful identification of the source from which the woman inherited the property.

7. Protection and recovery of Stridhan

A husband or relative who receives Stridhan holds it subject to the woman’s exclusive ownership and obligation to return it. Refusal or dishonest misappropriation may give rise to civil remedies and, when legal ingredients are satisfied, criminal liability for breach of trust. The Protection of Women from Domestic Violence Act, 2005 also recognizes deprivation of financial resources and disposal of Stridhan or other property as forms of economic abuse and authorizes appropriate relief.

8. Leading judicial principles

In V. Tulasamma v. Sesha Reddy, the Supreme Court gave Section 14(1) a broad interpretation where property was possessed in recognition of a pre-existing right, including maintenance. In Pratibha Rani v. Suraj Kumar, the Court affirmed that Stridhan remains the woman’s exclusive property and may support criminal breach-of-trust proceedings when entrusted property is dishonestly retained. Rashmi Kumar v. Mahesh Kumar Bhada reinforced that a married woman remains the sole owner of her Stridhan and may seek its return.
    `.trim(),
    keyPoints: [
      "Stridhan is the woman’s exclusive property and does not automatically become matrimonial or family property.",
      "Section 14(1) generally makes qualifying property of a female Hindu her absolute property.",
      "Section 14(2) applies to a new restricted grant created by the specified instrument or order.",
      "Section 15 establishes the general order of heirs of a female Hindu dying intestate.",
      "Section 15(2) applies special rules based on whether inherited property came from parents or from the husband’s family.",
      "A daughter has coparcenary rights by birth under amended Section 6.",
      "Dishonest retention of entrusted Stridhan may attract civil and criminal remedies when the required elements are proved.",
    ],
    statutoryProvisions: [
      {
        id: "family-law-i-ch3-section-6",
        title: "Hindu Succession Act, 1956 — Section 6",
        provision: "Devolution of interest in coparcenary property",
        description:
          "Recognizes a daughter of a coparcener as a coparcener by birth with the statutory rights and liabilities applicable under the amended provision.",
      },
      {
        id: "family-law-i-ch3-section-14",
        title: "Hindu Succession Act, 1956 — Section 14",
        provision: "Property of a female Hindu to be her absolute property",
        description:
          "Explains absolute ownership under Section 14(1) and the restricted-grant exception under Section 14(2).",
      },
      {
        id: "family-law-i-ch3-sections-15-16",
        title: "Hindu Succession Act, 1956 — Sections 15 and 16",
        provision: "Succession to the property of a female Hindu",
        description:
          "Provides the general and source-based succession rules and the manner of distribution among heirs.",
      },
      {
        id: "family-law-i-ch3-dowry-act",
        title: "Dowry Prohibition Act, 1961",
        provision: "Dowry prohibition and related property obligations",
        description:
          "Distinguishes unlawful dowry demands from property and lawful gifts belonging exclusively to the woman.",
      },
      {
        id: "family-law-i-ch3-dv-act",
        title: "Protection of Women from Domestic Violence Act, 2005",
        provision: "Economic abuse and monetary/property relief",
        description:
          "Protects against deprivation or disposal of Stridhan, property and financial resources within domestic relationships.",
      },
    ],
    importantCases: [
      {
        id: "family-law-i-ch3-tulasamma",
        caseName: "V. Tulasamma v. Sesha Reddy",
        citation: "Supreme Court of India (1977)",
        principle:
          "Section 14(1) is interpreted broadly where property is possessed in recognition of a pre-existing right.",
        summary:
          "The Court distinguished recognition of a pre-existing right from a new restricted grant under Section 14(2).",
      },
      {
        id: "family-law-i-ch3-pratibha-rani",
        caseName: "Pratibha Rani v. Suraj Kumar",
        citation: "Supreme Court of India (1985)",
        principle:
          "Stridhan remains the woman’s exclusive property even when entrusted to her husband or matrimonial family.",
        summary:
          "Dishonest refusal to return entrusted Stridhan may satisfy the ingredients of criminal breach of trust.",
      },
      {
        id: "family-law-i-ch3-rashmi-kumar",
        caseName: "Rashmi Kumar v. Mahesh Kumar Bhada",
        citation: "Supreme Court of India (1997)",
        principle:
          "A married woman is the sole owner of her Stridhan and is entitled to demand its return.",
        summary:
          "Entrustment does not transfer ownership of Stridhan to the husband or his relatives.",
      },
    ],
    examFocus:
      "Prepare the distinction between Stridhan and dowry; the scope of Sections 14(1) and 14(2); the order of succession under Sections 15 and 16; source-based succession under Section 15(2); and the principles stated in V. Tulasamma, Pratibha Rani and Rashmi Kumar.",
    revisionNotes:
      "Stridhan remains the woman’s exclusive property. Section 14(1) generally converts qualifying property into absolute ownership, while Section 14(2) preserves a genuinely new restricted grant. For intestate succession, apply Sections 15 and 16 and identify the source of inherited property before applying Section 15(2).",
    notes:
      "Women’s property includes property acquired through inheritance, partition, maintenance, gifts, purchase, skill, exertion and other lawful sources. Stridhan is exclusively owned by the woman and must be returned when demanded.",
    chapterNumber: 3,
    displayOrder: 3,
    quizId: "family-law-i-chapter-3-quiz",
    quizRequired: true,
    passingPercentage: 80,
    maximumAttempts: 3,
    published: true,
    previewAvailable: false,
    status: "published",
  }),
  ...[
    {
      title: "Hindu Marriage Act, 1955",
      slug: "hindu-marriage-act-1955",
      shortDescription:
        "Study the conditions and ceremonies of Hindu marriage, void and voidable marriages, matrimonial remedies, divorce and maintenance under the Hindu Marriage Act, 1955.",
      overview:
        "This unit introduces the statutory framework governing Hindu marriages. It covers application of the Act, essential conditions, ceremonies and registration, restitution of conjugal rights, judicial separation, nullity, divorce, legitimacy of children and matrimonial reliefs.",
      objectives: [
        "Explain the statutory conditions and ceremonies of a valid Hindu marriage.",
        "Distinguish void and voidable marriages.",
        "Identify the grounds and requirements for matrimonial remedies and divorce.",
        "Apply the provisions relating to maintenance, custody and legitimacy.",
      ],
      detailedContent: `
1. Introduction and scope of the Act

The Hindu Marriage Act, 1955 is a central codifying statute governing marriage and matrimonial relief among persons to whom it applies. Section 2 defines its application, while Section 4 gives the Act overriding effect in matters for which it makes provision. The Act introduced a statutory framework of monogamy, matrimonial remedies, divorce and judicial supervision while continuing to recognise lawful customary marriage ceremonies.

The statute must be read with the Family Courts Act, 1984, the procedural law applicable to matrimonial proceedings, the Prohibition of Child Marriage Act, 2006 and other protective legislation. A problem should begin by confirming that the parties and the disputed marriage fall within the Act.

2. Conditions of a Hindu marriage — Section 5

Section 5 states the principal conditions. Neither party may have a spouse living at the time of marriage. The parties must possess the mental capacity required by clause (ii). The bridegroom must have completed twenty-one years and the bride eighteen years. The parties must not be within the degrees of prohibited relationship or be sapindas of each other unless a valid custom or usage governing both permits the marriage.

Not every breach has the same consequence. Contravention of the monogamy, prohibited-relationship or sapinda conditions attracts the void-marriage rule in Section 11. Other contraventions must be analysed under the particular statutory provision rather than automatically being described as void.

3. Ceremonies and registration — Sections 7 and 8

Section 7 permits solemnisation according to the customary rites and ceremonies of either party. Where those rites include saptapadi, the marriage becomes complete and binding when the seventh step is taken. The party relying on a marriage must prove the ceremonies essential under the applicable custom; a mere assertion, photograph or certificate cannot invariably replace proof of solemnisation where validity is disputed.

Section 8 provides for registration to facilitate proof. Registration creates an important public record but the relationship between registration and essential solemnisation must be examined under the Act and applicable State rules. The Supreme Court in Seema v. Ashwani Kumar emphasised registration of marriages as an important safeguard.

4. Restitution of conjugal rights and judicial separation — Sections 9 and 10

Section 9 permits a spouse to seek restitution where the other has withdrawn from the petitioner's society without reasonable excuse. The petitioner must establish withdrawal; the person who asserts a reasonable excuse bears the statutory burden concerning that excuse. A decree is not a licence for physical compulsion and is enforced only through lawful civil procedure. In Saroj Rani v. Sudarshan Kumar Chadha, the Supreme Court upheld Section 9 while explaining its matrimonial purpose.

Judicial separation under Section 10 relieves the parties from the obligation to cohabit but does not dissolve the marriage. The marriage continues unless a decree of divorce is later granted. Resumption of cohabitation may lead to rescission of the decree.

5. Void and voidable marriages — Sections 11 and 12

A marriage is void under Section 11 when it contravenes Section 5(i), 5(iv) or 5(v): a subsisting spouse, prohibited relationship, or sapinda relationship without a valid customary exception. A decree under Section 11 declares an invalidity that exists from the beginning.

A voidable marriage under Section 12 remains valid until annulled by a competent court. The statutory grounds include specified incapacity or non-consummation, contravention of the mental-capacity condition, consent obtained by force or qualifying fraud, and the respondent's pregnancy by another person at the time of marriage, each subject to the conditions and bars stated in the provision.

Section 16 protects the legitimacy of children of void and voidable marriages within its statutory framework. Legitimacy does not convert the marriage itself into a valid marriage, and property consequences must be stated carefully in light of the statutory text and binding precedent.

6. Divorce and mutual consent — Sections 13 and 13B

Section 13 provides grounds including adultery, cruelty, desertion for the statutory period, conversion, specified mental disorder, communicable venereal disease, renunciation of the world and not being heard of as alive for seven years. The current statutory text must be used; repealed historical grounds should not be presented as current law. Additional grounds are available to a wife under Section 13(2).

Cruelty may be physical or mental. In Samar Ghosh v. Jaya Ghosh, the Supreme Court supplied illustrative guidance while stressing that no exhaustive formula can decide every marriage. Desertion requires both separation and the intention to desert, without consent and reasonable cause, throughout the statutory period.

Section 13B provides divorce by mutual consent. The parties must satisfy the statutory separation and agreement requirements, and consent must continue until the decree. In Amardeep Singh v. Harveen Kaur, the Supreme Court held that the waiting period in Section 13B(2) is directory and may be waived by the competent court when the stated considerations are satisfied. The Supreme Court's special power under Article 142, discussed in Shilpa Sailesh v. Varun Sreenivasan, must not be confused with the ordinary statutory power of family courts.

7. Bars, procedure and jurisdiction

Section 14 ordinarily restricts presentation of a divorce petition within one year of marriage, subject to the statutory exceptional-hardship or exceptional-depravity proviso. Section 15 regulates remarriage after divorce. Section 17 addresses bigamy and applies the penal consequences specified by law. In Lily Thomas v. Union of India, the Supreme Court held that conversion does not by itself dissolve a subsisting Hindu marriage or permit a second marriage during its continuance.

Section 19 governs territorial jurisdiction. Sections 21 and 21B connect proceedings to civil procedure and encourage expeditious trial. Section 23 requires the court to be satisfied about the ground for relief and applicable bars, including taking advantage of one's own wrong, collusion and improper delay where relevant. Courts should attempt reconciliation where the law and circumstances make it appropriate, without compromising safety or legal rights.

8. Financial relief, custody and property — Sections 24 to 27

Section 24 provides maintenance pendente lite and expenses of proceedings to a spouse lacking sufficient independent income. Section 25 permits permanent alimony and maintenance, having regard to the statutory factors and later changes in circumstances. These provisions are gender-neutral in their text and are remedies connected with proceedings under the Act.

Section 26 empowers the court to pass interim and final orders concerning custody, maintenance and education of minor children, with the welfare of the child remaining central. Section 27 concerns property presented at or about the time of marriage that may belong jointly to both spouses. These remedies should be distinguished from independent maintenance, domestic-violence, guardianship and property proceedings under other laws.

9. Problem-solving method

For an examination problem: establish application of the Act; identify whether a valid marriage was solemnised; select the exact relief and provision; prove each statutory ingredient; consider limitation, jurisdiction and bars; and state the appropriate ancillary relief. Keep void marriage, annulment, judicial separation and divorce analytically separate. Where facts raise violence, coercion, child marriage or unlawful dowry, identify the additional protective statutes instead of treating the dispute only as a matrimonial case.
      `.trim(),
      keyPoints: [
        "Section 5 states the conditions of a Hindu marriage.",
        "Section 7 recognises customary rites and ceremonies, including saptapadi where applicable.",
        "Sections 11 and 12 distinguish void and voidable marriages.",
        "Sections 9, 10, 13 and 13B provide the principal matrimonial remedies.",
        "Sections 24 to 26 address interim support, permanent alimony and child custody.",
      ],
      provisions: [
        "Hindu Marriage Act, 1955 — Sections 2 and 4",
        "Hindu Marriage Act, 1955 — Sections 5–8",
        "Hindu Marriage Act, 1955 — Sections 9–13B",
        "Hindu Marriage Act, 1955 — Sections 14–17",
        "Hindu Marriage Act, 1955 — Sections 19, 21B and 23",
        "Hindu Marriage Act, 1955 — Sections 24–27",
        "Prohibition of Child Marriage Act, 2006",
        "Family Courts Act, 1984",
      ],
      importantCases: [
        {
          caseName: "Seema v. Ashwani Kumar",
          citation: "Supreme Court of India (2006)",
          principle: "Registration of marriages is an important safeguard and States were directed to frame appropriate rules.",
        },
        {
          caseName: "Saroj Rani v. Sudarshan Kumar Chadha",
          citation: "Supreme Court of India (1984)",
          principle: "The Court upheld Section 9 and explained the object of restitution of conjugal rights.",
        },
        {
          caseName: "Samar Ghosh v. Jaya Ghosh",
          citation: "Supreme Court of India (2007)",
          principle: "Mental cruelty depends on the cumulative facts; the Court provided illustrative, non-exhaustive guidance.",
        },
        {
          caseName: "Amardeep Singh v. Harveen Kaur",
          citation: "Supreme Court of India (2017)",
          principle: "The waiting period under Section 13B(2) is directory and may be waived when the governing considerations are met.",
        },
        {
          caseName: "Lily Thomas v. Union of India",
          citation: "Supreme Court of India (2000)",
          principle: "Conversion does not dissolve an existing Hindu marriage or validate a second marriage during its subsistence.",
        },
        {
          caseName: "Shilpa Sailesh v. Varun Sreenivasan",
          citation: "Supreme Court of India (2023)",
          principle: "The Supreme Court explained its Article 142 power concerning complete justice and irretrievable breakdown of marriage.",
        },
      ],
      examFocus:
        "Prepare the application and overriding effect of the Act; conditions and ceremonies under Sections 5 and 7; registration; restitution and judicial separation; void and voidable marriages; divorce grounds; mutual-consent divorce; legitimacy; jurisdiction and statutory bars; maintenance, custody and property relief. Clearly distinguish the ordinary powers of matrimonial courts from the Supreme Court's Article 142 jurisdiction.",
    },
    {
      title: "Hindu Succession Act, 1956",
      slug: "hindu-succession-act-1956",
      shortDescription:
        "Examine intestate succession, coparcenary rights, classes of heirs and succession to the property of Hindu males and females.",
      overview:
        "This unit studies the codified rules of Hindu intestate succession. It explains the amended coparcenary rights of daughters, succession to male and female Hindus, the statutory classes and order of heirs, distribution rules, disqualifications and testamentary succession.",
      objectives: [
        "Explain the devolution of coparcenary interest under amended Section 6.",
        "Apply the rules governing succession to a Hindu male dying intestate.",
        "Apply the general and source-based rules governing a female Hindu's property.",
        "Calculate shares among heirs in problem questions.",
      ],
      keyPoints: [
        "A daughter is a coparcener by birth with the same statutory rights and liabilities as a son.",
        "Sections 8 to 13 govern intestate succession to a Hindu male.",
        "Section 14 generally makes qualifying property of a female Hindu her absolute property.",
        "Sections 15 and 16 govern succession to a female Hindu's property.",
        "The source of inherited property may be decisive under Section 15(2).",
      ],
      provisions: ["Section 6", "Sections 8–13", "Sections 14–16", "Section 30"],
    },
    {
      title: "Hindu Adoptions and Maintenance Act, 1956",
      slug: "hindu-adoptions-and-maintenance-act-1956",
      shortDescription:
        "Understand the legal requirements and effects of Hindu adoption and the statutory maintenance rights of spouses, children, parents and dependants.",
      overview:
        "This unit covers capacity to adopt and to give a child in adoption, eligibility of the child, mandatory adoption conditions and legal effects. It also examines maintenance rights of a wife, widowed daughter-in-law, children, aged parents and dependants.",
      objectives: [
        "Identify every statutory requirement for a valid Hindu adoption.",
        "Explain who may adopt, give in adoption and be adopted.",
        "Describe the legal effects and irrevocability of a valid adoption.",
        "Apply statutory maintenance rights and factors determining amount.",
      ],
      keyPoints: [
        "An adoption contrary to the mandatory statutory provisions is void.",
        "Sections 7 and 8 regulate the capacity of male and female Hindus to adopt.",
        "Sections 9 to 11 regulate giving in adoption, eligibility and other conditions.",
        "Section 12 states the principal effects of adoption and Section 15 bars cancellation of a valid adoption.",
        "Sections 18 to 22 govern important maintenance claims.",
      ],
      provisions: ["Sections 5–12", "Section 15", "Sections 18–23"],
    },
    {
      title: "Hindu Minority and Guardianship Act, 1956",
      slug: "hindu-minority-and-guardianship-act-1956",
      shortDescription:
        "Study natural and testamentary guardians, restrictions on dealings with a minor's property and the paramount welfare principle.",
      overview:
        "This unit explains minority and guardianship under Hindu law in conjunction with the Guardians and Wards Act, 1890. It covers natural and testamentary guardians, their powers and limitations, de facto guardians and the overriding importance of the minor's welfare.",
      objectives: [
        "Identify natural guardians under the statutory scheme.",
        "Explain a guardian's powers and restrictions concerning a minor's property.",
        "Distinguish natural, testamentary and de facto guardians.",
        "Apply the welfare-of-the-minor principle to custody and guardianship disputes.",
      ],
      keyPoints: [
        "The Hindu Minority and Guardianship Act supplements the Guardians and Wards Act, 1890.",
        "Section 6 identifies natural guardians subject to welfare-based interpretation.",
        "Section 8 restricts specified transactions involving a minor's immovable property.",
        "Section 11 bars a de facto guardian from dealing with a minor's property merely on that status.",
        "Under Section 13, the welfare of the minor is the paramount consideration.",
      ],
      provisions: ["Sections 4–9", "Section 11", "Section 13", "Guardians and Wards Act, 1890"],
    },
    {
      title: "Special Marriage Act, 1954",
      slug: "special-marriage-act-1954",
      shortDescription:
        "Examine civil marriage, notice and solemnisation, registration, matrimonial remedies and succession consequences under the Special Marriage Act, 1954.",
      overview:
        "This unit studies the secular statutory form of marriage available under the Special Marriage Act. It covers conditions, notice, objections, solemnisation and registration, void and voidable marriages, judicial separation, divorce and the principal legal consequences of marriage under the Act.",
      objectives: [
        "Explain the conditions and procedure for solemnising a civil marriage.",
        "Analyse notice, objection and registration requirements.",
        "Distinguish void and voidable marriages under the Act.",
        "Apply the statutory grounds for judicial separation and divorce.",
      ],
      keyPoints: [
        "Section 4 states the conditions relating to solemnisation of a special marriage.",
        "The Act prescribes notice, publication, objection and solemnisation procedures.",
        "Three witnesses sign the statutory marriage certificate with the parties and Marriage Officer.",
        "The Act separately regulates void, voidable and dissoluble marriages.",
        "Succession consequences must be examined under Sections 19 to 21A and the applicable succession law.",
      ],
      provisions: ["Sections 4–14", "Sections 15–18", "Sections 19–21A", "Sections 22–28"],
    },
  ].map((unit, unitIndex) => {
    const chapterNumber = unitIndex + 4;

    return createChapterModel({
      id: `${FAMILY_LAW_I_COURSE_ID}-unit-${chapterNumber}`,
      courseId: FAMILY_LAW_I_COURSE_ID,
      title: unit.title,
      slug: `unit-${chapterNumber}-${unit.slug}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives: unit.objectives,
      detailedContent: unit.detailedContent || unit.overview,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((provision, provisionIndex) => ({
        id: `family-law-i-unit-${chapterNumber}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core statutory reading for Family Law – I Unit ${chapterNumber}.`,
      })),
      importantCases: (unit.importantCases || []).map((item, caseIndex) => ({
        id: `family-law-i-unit-${chapterNumber}-case-${caseIndex + 1}`,
        ...item,
        summary: item.principle,
      })),
      examFocus:
        unit.examFocus ||
        `Revise the statutory scheme, key definitions, essential conditions, legal consequences and problem-based application covered in Unit ${chapterNumber}.`,
      revisionNotes: unit.keyPoints.join("; "),
      notes: unit.detailedContent || unit.overview,
      chapterNumber,
      displayOrder: chapterNumber,
      quizId: `family-law-i-unit-${chapterNumber}-quiz`,
      quizRequired: true,
      passingPercentage: 80,
      maximumAttempts: 3,
      published: true,
      previewAvailable: false,
      status: "published",
    });
  }),
];
