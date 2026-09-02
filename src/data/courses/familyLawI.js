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
      detailedContent: `
1. Introduction, scope and purpose

The Hindu Succession Act, 1956 codifies important rules of intestate succession among Hindus and governs matters expressly covered by it. Section 2 identifies the persons to whom the Act applies, Section 4 gives the statute overriding effect within its field, and Section 5 contains specified exclusions. The Act must be applied to the date of death, the character and source of the property, the identity of heirs, and any legally completed transaction affecting the estate.

Succession opens on death. A good problem answer first classifies the property as separate property, coparcenary interest, or property owned by a female Hindu; determines whether there is a valid will; identifies the governing provision; and then calculates the statutory shares.

2. Mitakshara coparcenary and amended Section 6

The Hindu Succession (Amendment) Act, 2005 substituted Section 6. In a Mitakshara joint Hindu family, a daughter of a coparcener becomes a coparcener by birth in her own right, in the same manner as a son, with the same rights in coparcenary property and the same liabilities, subject to the statutory provisions. Marriage does not extinguish this status.

When a coparcener dies after commencement of the amendment, the deceased's interest devolves by testamentary or intestate succession under the Act and not by survivorship. The share is identified through the statutory deemed-partition method immediately before death. The daughter receives the same share as a son, and the branch of a predeceased child is represented according to Section 6.

In Vineeta Sharma v. Rakesh Sharma, the Supreme Court held that the daughter's right is by birth and the father need not have been alive on 9 September 2005. The statutory saving protects a disposition, alienation, partition or testamentary disposition completed before 20 December 2004. For this purpose, the special definition of partition in Section 6(5) generally requires a registered partition deed or a court decree, while the judgment recognises the narrow evidentiary treatment of an exceptional plea of oral partition.

3. Succession to a Hindu male dying intestate — Sections 8 to 13

Under Section 8, the property of a male Hindu dying intestate devolves first upon Class I heirs in the Schedule; if none, upon Class II heirs; then upon agnates; and finally upon cognates. Section 9 gives Class I heirs simultaneous priority, while entries in Class II exclude later entries. Agnates and cognates are ranked under the statutory preference rules.

Section 10 provides the principal Class I distribution rules. The widow, or widows together, take one share. Each surviving son and daughter and the mother takes one share. The branch of each predeceased son or daughter takes the share that the predeceased child would have taken, divided within that branch according to the section.

Sections 11 to 13 govern distribution among Class II heirs and the order of preference among agnates and cognates. The Schedule must be consulted rather than relying on assumptions about closeness of relationship.

4. Nature of property inherited under Section 8

Property inherited by a son under Section 8 from a father dying after commencement of the Act is not automatically coparcenary property in relation to the son's own children. In Commissioner of Wealth Tax v. Chander Sen and Yudhishter v. Ashok Kumar, the Supreme Court explained the statutory change from the older rule. The property may remain the heir's individual property unless an independent legal basis establishes otherwise.

This distinction is essential: ancestral property in a loose family sense is not necessarily Mitakshara coparcenary property in law. A problem must trace how and when the property was acquired and how it devolved.

5. Property of a female Hindu — Section 14

Section 14(1) declares that qualifying property possessed by a female Hindu, acquired before or after the Act, is held by her as full owner and not as limited owner. Its Explanation broadly includes property acquired by inheritance, devise, partition, maintenance, gift, personal skill or exertion, purchase, prescription or otherwise, including Stridhan.

Section 14(2) is a limited exception for property acquired for the first time under a gift, will, instrument, decree, order or award that itself prescribes a restricted estate. In V. Tulasamma v. Sesha Reddy, the Supreme Court distinguished an instrument recognising a pre-existing right, which may attract Section 14(1), from a genuinely new restricted grant under Section 14(2).

6. Succession to a female Hindu — Sections 15 and 16

Section 15(1) creates the general order: first, sons and daughters, including children of a predeceased son or daughter, and the husband; second, heirs of the husband; third, mother and father; fourth, heirs of the father; and fifth, heirs of the mother. Section 16 supplies the order and manner of distribution, including representation of a predeceased child.

Section 15(2) creates source-based exceptions. In the absence of a son or daughter, including the children of a predeceased child, property inherited from the woman's father or mother devolves upon the heirs of the father. Property inherited from her husband or father-in-law devolves upon the heirs of the husband. Therefore, the source of the particular asset must be proved before selecting the heirs.

7. General rules and disqualifications — Sections 18 to 29

The Act provides rules on preference of full blood over half blood where the relationship is otherwise the same, computation of degrees, heirs taking per capita unless otherwise provided, and treatment of a child in the womb who is later born alive. Section 25 disqualifies a murderer from inheriting the property of the person murdered or succession furthered by the murder. Section 26 addresses descendants of a convert born after conversion, subject to its terms. Disease, defect or deformity is not by itself a disqualification under Section 28.

If no qualified heir exists, Section 29 provides for escheat to the Government, subject to the same obligations and liabilities to which an heir would have been subject.

8. Testamentary succession — Section 30

Section 30 recognises testamentary disposition by a Hindu of property capable of being disposed of by will in accordance with the Indian Succession Act, 1925 or other applicable law. The provision includes the interest of a Mitakshara coparcener as property capable of testamentary disposition. A purported will must still satisfy capacity, execution, attestation and proof requirements under the applicable succession and evidence law.

9. Share-calculation method

For a Section 6 problem, draw the coparcenary immediately before death, calculate each coparcener's share at the deemed partition, place the deceased's share into the succession estate, identify Class I heirs and distribute it under Section 10. Add any share already received by an heir as a coparcener to the share received from the deceased's estate.

For separate property of a male intestate, begin directly with Sections 8 to 10. For a female intestate, identify the source of each asset before applying Sections 15 and 16. State assumptions clearly, treat each branch separately and verify that the final fractions total the whole estate.
      `.trim(),
      keyPoints: [
        "A daughter is a coparcener by birth with the same statutory rights and liabilities as a son.",
        "Sections 8 to 13 govern intestate succession to a Hindu male.",
        "Section 14 generally makes qualifying property of a female Hindu her absolute property.",
        "Sections 15 and 16 govern succession to a female Hindu's property.",
        "The source of inherited property may be decisive under Section 15(2).",
      ],
      provisions: [
        "Hindu Succession Act, 1956 — Sections 2, 4 and 5",
        "Hindu Succession Act, 1956 — Section 6",
        "Hindu Succession Act, 1956 — Sections 8–13 and Schedule",
        "Hindu Succession Act, 1956 — Sections 14–16",
        "Hindu Succession Act, 1956 — Sections 18–29",
        "Hindu Succession Act, 1956 — Section 30",
        "Hindu Succession (Amendment) Act, 2005",
      ],
      importantCases: [
        {
          caseName: "Vineeta Sharma v. Rakesh Sharma",
          citation: "Supreme Court of India (2020)",
          principle: "A daughter is a coparcener by birth under amended Section 6; the father need not have been alive on 9 September 2005.",
        },
        {
          caseName: "Danamma v. Amar",
          citation: "Supreme Court of India (2018)",
          principle: "The decision addressed daughters' shares under amended Section 6 and was later harmonised authoritatively in Vineeta Sharma.",
        },
        {
          caseName: "Commissioner of Wealth Tax v. Chander Sen",
          citation: "Supreme Court of India (1986)",
          principle: "Property inherited by a son under Section 8 is held in his individual capacity under the statutory scheme, not automatically as HUF property with his sons.",
        },
        {
          caseName: "Yudhishter v. Ashok Kumar",
          citation: "Supreme Court of India (1987)",
          principle: "The Court reaffirmed the post-1956 character of property devolving under Section 8.",
        },
        {
          caseName: "V. Tulasamma v. Sesha Reddy",
          citation: "Supreme Court of India (1977)",
          principle: "Section 14(1) receives a broad construction where property is possessed in recognition of a pre-existing right.",
        },
        {
          caseName: "Omprakash v. Radhacharan",
          citation: "Supreme Court of India (2009)",
          principle: "The source-based statutory rules in Section 15(2) govern qualifying inherited property of a female Hindu dying intestate.",
        },
      ],
      examFocus:
        "Prepare the scope and overriding effect of the Act; daughter’s coparcenary right and deemed partition under amended Section 6; Classes I and II, agnates and cognates; distribution under Sections 9 to 13; the character of property inherited under Section 8; absolute ownership under Section 14; general and source-based female succession under Sections 15 and 16; disqualifications, escheat and testamentary succession. Practise share calculations and state the Vineeta Sharma rules precisely.",
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
      detailedContent: `
1. Introduction, scope and structure

The Hindu Adoptions and Maintenance Act, 1956 codifies two related fields of Hindu personal law. Chapter II regulates adoption, while Chapter III regulates maintenance. Section 2 identifies the persons to whom the Act applies, Section 3 defines important expressions, and Section 4 gives the Act overriding effect in matters for which it makes provision.

Adoption creates a permanent legal parent-child relationship and affects status and succession. Consequently, every mandatory statutory requirement must be proved. Maintenance provisions protect specified family members and dependants, but the claimant, relationship, source of obligation and applicable remedy must be identified precisely.

2. Requisites of a valid adoption — Sections 5 and 6

Section 5 declares that an adoption made after commencement of the Act contrary to Chapter II is void. A void adoption creates no rights in the adoptive family and does not destroy rights in the birth family.

Section 6 groups the essential requisites: the adopter must possess capacity and the right to adopt; the person giving the child must possess capacity; the child must be capable of being adopted; and the adoption must comply with all other statutory conditions. Consent or intention alone cannot cure non-compliance with a mandatory condition.

3. Capacity to adopt — Sections 7 and 8

Under Section 7, an adult male Hindu of sound mind has capacity to adopt a son or daughter. If he has a wife living, her consent is ordinarily mandatory unless she has completely and finally renounced the world, ceased to be Hindu, or has been declared by a competent court to be of unsound mind. Where more than one wife is living, the statutory rule concerning consent of each must be applied.

Section 8 governs an adult female Hindu of sound mind. Its present text must be applied to determine capacity, including the effect of her marital status and the statutory circumstances concerning her husband. Capacity to adopt should not be confused with the separate question of who may lawfully give the child in adoption.

4. Persons capable of giving in adoption — Section 9

Only the father, mother or guardian may give a child in adoption. The father and mother have equal statutory rights, subject to the consent requirements and exceptions stated in Section 9. A guardian may give a child in adoption only with prior permission of the court and only in the circumstances specified by the Act.

When deciding a guardian's request, the court must be satisfied that the adoption will be for the welfare of the child, having regard to the child's wishes according to age and understanding, and that no prohibited payment or reward has been received or agreed.

5. Who may be adopted — Section 10

A person may be adopted only if the statutory conditions are met. The person must be Hindu, must not already have been adopted, must ordinarily be unmarried unless a governing custom permits adoption of married persons, and must ordinarily be below fifteen years unless a governing custom permits adoption above that age. A party relying on a custom bears the burden of establishing a legally valid custom.

6. Other mandatory conditions — Section 11

Section 11 prevents specified conflicts and requires compliance with several safeguards. If a son is adopted, the adopter must not already have a Hindu son, son's son or son's son's son living at the time. If a daughter is adopted, the adopter must not already have a Hindu daughter or son's daughter living.

Where a male adopts a female child, he must be at least twenty-one years older than the child; where a female adopts a male child, she must be at least twenty-one years older. The same child cannot be adopted simultaneously by two or more persons.

Most importantly, the child must be actually given and taken in adoption with the intention of transferring the child from the birth family, or relevant place or family of upbringing, to the adoptive family. Datta homam is not essential, but the act of giving and taking is a substantive statutory requirement. In M. Vanaja v. M. Sarla Devi, the Supreme Court reaffirmed that mandatory spousal consent and actual giving and taking must be proved.

7. Effects, property and proof — Sections 12 to 17

Under Section 12, a validly adopted child is deemed the child of the adoptive parent for all purposes from the date of adoption, and ties in the birth family are replaced by adoptive ties, subject to the statutory provisos. The child cannot marry a person whom the child could not have married in the birth family. Property vested in the child before adoption continues to vest subject to attached obligations, and the adoption cannot divest an estate already vested in another person.

Section 13 preserves the adoptive parents' power to dispose of their property unless an agreement provides otherwise. Section 14 identifies the adoptive mother in specified family situations. Section 15 makes a valid adoption irrevocable: neither adopter nor adopted child may cancel it, and the child cannot renounce adoptive status to return to the birth family.

Section 16 creates a rebuttable presumption where a registered document recording adoption is signed by the persons giving and taking the child. Registration assists proof but does not validate an adoption that violates mandatory conditions. Section 17 prohibits payment or reward in consideration of adoption.

8. Meaning and nature of maintenance — Sections 3 and 18

Maintenance includes provision for food, clothing, residence, education and medical attendance and treatment; for an unmarried daughter it also includes reasonable marriage expenses. Section 18 recognises a Hindu wife's right to be maintained by her husband during her lifetime.

Section 18(2) states grounds on which a wife may live separately without forfeiting maintenance, including desertion, cruelty, specified marital circumstances and another justifying cause. Section 18(3) states disqualifications under that provision. The right must be distinguished from interim or permanent relief connected with matrimonial proceedings under Sections 24 and 25 of the Hindu Marriage Act.

9. Other maintenance rights — Sections 19 to 22

Section 19 deals with maintenance of a widowed daughter-in-law by her father-in-law, subject to the claimant's inability to maintain herself from the sources listed and the statutory limits connected with coparcenary property. The obligation is not an unlimited personal liability detached from the section's conditions.

Section 20 obliges a Hindu to maintain legitimate or illegitimate children and aged or infirm parents, subject to its terms. A child may claim during minority; the obligation toward an unmarried daughter who cannot maintain herself and toward aged or infirm parents is governed by the provision. The statutory reference to parent includes a childless stepmother.

Sections 21 and 22 identify dependants of a deceased Hindu and impose a maintenance obligation upon heirs who inherit the estate, subject to the statutory distribution and conditions. Liability is connected to the estate inherited and is not automatically identical for every heir.

10. Amount, alteration and protection of maintenance — Sections 23 to 28

Section 23 lists factors for determining maintenance, including the parties' position and status, reasonable wants, justification for separate residence, the claimant's property and income, and the number of persons entitled. For dependants, the court also considers the net value of the estate, the dependant's relationship, testamentary provision and other statutory factors.

Section 24 states that a claimant ceasing to be Hindu cannot claim maintenance under Chapter III. Section 25 permits alteration of maintenance upon a material change in circumstances. Section 26 gives specified debts priority over a dependant's maintenance claim. Under Section 27, maintenance does not automatically become a charge on an estate unless created by agreement, decree, will or otherwise. Section 28 protects maintenance rights against certain transferees with notice or gratuitous transferees, subject to its terms.

11. Relationship with other remedies

A claimant may encounter remedies under HAMA, the Hindu Marriage Act, general summary-maintenance law, the Protection of Women from Domestic Violence Act, 2005, or senior-citizen legislation. These remedies have different conditions, forums and purposes. Courts coordinate overlapping awards to provide fair support while preventing double recovery for the same period and purpose.

In Rajnesh v. Neha, the Supreme Court issued guidance on disclosure, assessment and adjustment of maintenance across proceedings. In Chand Dhawan v. Jawaharlal Dhawan, the Court explained the distinct fields of permanent alimony under the Hindu Marriage Act and a wife's substantive maintenance claim under HAMA.

12. Problem-solving and examination method

For adoption, test Sections 6, 7 or 8, 9, 10 and every applicable clause of Section 11 in order. Then analyse effects under Section 12 and proof under Section 16. Never presume adoption solely from upbringing, nomination, mutation or a deed when mandatory acts are disputed.

For maintenance, identify the claimant and exact section, prove the relationship and statutory conditions, examine separate residence or disqualification, calculate capacity and reasonable need under Section 23, disclose parallel proceedings, and distinguish personal liability from liability limited to inherited estate.
      `.trim(),
      keyPoints: [
        "An adoption contrary to the mandatory statutory provisions is void.",
        "Sections 7 and 8 regulate the capacity of male and female Hindus to adopt.",
        "Sections 9 to 11 regulate giving in adoption, eligibility and other conditions.",
        "Section 12 states the principal effects of adoption and Section 15 bars cancellation of a valid adoption.",
        "Sections 18 to 22 govern important maintenance claims.",
      ],
      provisions: [
        "Hindu Adoptions and Maintenance Act, 1956 — Sections 2–6",
        "Hindu Adoptions and Maintenance Act, 1956 — Sections 7–11",
        "Hindu Adoptions and Maintenance Act, 1956 — Sections 12–17",
        "Hindu Adoptions and Maintenance Act, 1956 — Sections 18–22",
        "Hindu Adoptions and Maintenance Act, 1956 — Sections 23–28",
        "Hindu Marriage Act, 1955 — Sections 24 and 25",
        "Protection of Women from Domestic Violence Act, 2005",
      ],
      importantCases: [
        {
          caseName: "M. Vanaja v. M. Sarla Devi",
          citation: "Supreme Court of India (2020)",
          principle: "Mandatory requirements including applicable spousal consent and actual giving and taking must be proved for a valid adoption.",
        },
        {
          caseName: "Ghisalal v. Dhapubai",
          citation: "Supreme Court of India (2011)",
          principle: "The consent required from a living wife under Section 7 is mandatory unless a statutory exception is established.",
        },
        {
          caseName: "Lakshman Singh Kothari v. Rup Kanwar",
          citation: "Supreme Court of India (1961)",
          principle: "Giving and taking with the intention to transfer the child is fundamental to adoption; no rigid ceremonial form is universal.",
        },
        {
          caseName: "Chand Dhawan v. Jawaharlal Dhawan",
          citation: "Supreme Court of India (1993)",
          principle: "The Court distinguished permanent alimony incidental to matrimonial decrees from a substantive maintenance claim under HAMA.",
        },
        {
          caseName: "Rajnesh v. Neha",
          citation: "Supreme Court of India (2020)",
          principle: "Maintenance adjudication requires financial disclosure and coordination of overlapping proceedings and awards.",
        },
        {
          caseName: "Abhilasha v. Parkash",
          citation: "Supreme Court of India (2020)",
          principle: "An unmarried Hindu daughter's substantive maintenance right under Section 20 must be pursued and adjudicated under the appropriate statutory framework.",
        },
      ],
      examFocus:
        "Prepare every requisite of a valid adoption under Sections 6 to 11; capacity and consent; actual giving and taking; effects, irrevocability and evidentiary presumption; maintenance rights of wife, widowed daughter-in-law, children, parents and dependants; factors fixing amount; alteration, charge and transfer; and coordination with other maintenance remedies. In problems, test every mandatory adoption condition separately.",
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
      detailedContent: `
1. Introduction and relationship with the general law

The Hindu Minority and Guardianship Act, 1956 codifies specified rules concerning minority and guardianship among Hindus. It does not form a complete procedural code. Section 2 expressly states that the Act supplements the Guardians and Wards Act, 1890. The two statutes must therefore be read together: the 1956 Act identifies personal-law status and powers, while the 1890 Act supplies important court powers, procedure and welfare standards.

The controlling idea is protection of the child rather than assertion of an adult's proprietary claim. Guardianship of the person, custody, and guardianship of property are related but distinct. A person may have a statutory status without being entitled to immediate physical custody where welfare points elsewhere.

2. Definitions — Section 4

Section 4 defines a minor as a person who has not completed eighteen years. A guardian is a person having the care of the minor's person, property, or both, and includes natural, testamentary and court-appointed or court-declared guardians. A natural guardian is one of the guardians mentioned in Section 6.

These definitions must be applied with the Majority Act, 1875, the Guardians and Wards Act and special statutes where relevant. In a problem, identify separately who presently cares for the child, who claims legal guardianship, and who controls each item of property.

3. Natural guardians — Section 6

Section 6 identifies natural guardians of a Hindu minor in the situations it covers. For a boy or unmarried girl, the text names the father and after him the mother, while providing that custody of a child below five years shall ordinarily be with the mother. In Githa Hariharan v. Reserve Bank of India, the Supreme Court interpreted “after” to mean absence in the sense of the father's non-availability or indifference, not only his death. The provision must be applied consistently with equality and the child's welfare.

For a child described by the statute as illegitimate, Section 6 names the mother and after her the father. The section also contains a rule concerning a married girl. These status rules do not displace the paramount welfare requirement in Section 13 or the court's powers under the Guardians and Wards Act.

A person ceases to be entitled to act as natural guardian upon ceasing to be Hindu or completely and finally renouncing the world. A stepfather or stepmother is not included merely by the statutory expressions father and mother.

4. Adopted child and testamentary guardians — Sections 7 and 9

Section 7 states the statutory rule concerning natural guardianship of an adopted son, naming the adoptive father and after him the adoptive mother. Adoption also affects family ties under the Hindu Adoptions and Maintenance Act, 1956; the provisions must be read together and applied in a welfare-oriented manner.

Section 9 regulates appointment of testamentary guardians by will. The power, commencement and revival of such guardianship depend on the identity and status of the appointing parent and the statutory conditions. A testamentary guardian has the rights of a natural guardian subject to the Act, the will and the overriding welfare of the minor. The right may cease when the minor marries where the statute so provides.

5. Powers of a natural guardian — Section 8

A natural guardian may do acts necessary, reasonable and proper for the benefit of the minor or the realisation, protection or benefit of the minor's estate. The guardian cannot bind the minor by a personal covenant. The statutory power is fiduciary and must be exercised for the minor, not for the guardian's convenience or benefit.

Without prior permission of the court, the natural guardian cannot mortgage, charge, sell, gift, exchange or otherwise transfer the minor's immovable property, nor lease it beyond the limits stated in Section 8. A disposal in contravention is voidable at the instance of the minor or a person claiming under the minor; it is not correctly described as automatically void in every case.

The court may grant permission only in case of necessity or evident advantage to the minor. The application and procedure are linked to the Guardians and Wards Act. A purchaser dealing with a guardian must verify authority and prior permission instead of assuming that family relationship creates unrestricted power.

6. Persons incapable of acting and de facto guardians — Sections 10 and 11

Section 10 provides that a minor is incapable of acting as guardian of the property of another minor. Section 11 bars a person from disposing of or dealing with a Hindu minor's property merely on the ground that the person is a de facto guardian.

A de facto caregiver may perform daily care in fact, but factual custody alone does not confer statutory power to alienate property. Necessary protective steps should be taken through a lawful guardian or court order.

7. Undivided interest in joint family property — Section 12

Where a minor has an undivided interest in joint family property and the property is under the management of an adult family member, no guardian is ordinarily appointed for that undivided interest. The proviso preserves the High Court's jurisdiction.

This rule must be distinguished from the minor's separate property and from a transaction requiring scrutiny of the manager's power under Hindu joint-family law. The absence of a court-appointed guardian does not remove fiduciary duties or judicial protection against an unauthorised alienation.

8. Paramount welfare principle — Section 13

Section 13 makes the welfare of the minor the paramount consideration in appointment or declaration of any guardian by a court. No person is entitled to guardianship merely by statutory or testamentary status if the court considers that guardianship inconsistent with the child's welfare.

Welfare is broad. It includes physical safety, emotional security, health, education, stability, moral and ethical upbringing, continuity of care, meaningful relationships and the child's intelligent preference where age and maturity permit. Financial superiority alone is not decisive. In Nil Ratan Kundu v. Abhijit Kundu and Mausami Moitra Ganguli v. Jayant Ganguli, the Supreme Court emphasised a holistic welfare assessment rather than rigid parental rights.

9. Guardians and Wards Act, 1890

Sections 7 and 17 of the 1890 Act empower the court to appoint or declare a guardian when welfare requires and list relevant considerations. Section 12 permits interlocutory protection and temporary custody orders. Section 19 restricts appointment in specified circumstances involving a living parent not found unfit, but it remains subject to constitutional and welfare-based interpretation.

Section 25 concerns return of a ward removed from the guardian's custody, again controlled by welfare. Sections 29 and 31 regulate alienation of property by a court-appointed guardian and the grant of permission. Do not apply Section 8 of HMGA and Sections 29–31 of the 1890 Act interchangeably without identifying the type of guardian.

10. Custody, visitation and the child's voice

Custody orders are not permanent declarations immune from change. Courts may vary arrangements when circumstances or welfare require. Visitation and shared contact are designed for the child's benefit, not as rewards or punishment for parents. Safety concerns, domestic violence, coercion, relocation, schooling and the child's emotional needs require careful, evidence-based assessment.

In Rosy Jacob v. Jacob A. Chakramakkal, the Supreme Court explained that children are not property and custody orders remain capable of adjustment. In Roxann Sharma v. Arun Sharma, the Court discussed the statutory preference concerning custody of a child below five while maintaining welfare as the governing consideration.

11. Problem-solving and examination method

Begin by identifying the child's age, religion, family status, present caregiver and the nature of the property. Classify the claimant as natural, testamentary, court-appointed or de facto guardian. For property transactions, select Section 8, Section 11, Section 12 or the Guardians and Wards Act rules as appropriate and determine whether prior permission was required.

For custody, state Section 13 first: welfare is paramount. Then assess continuity, safety, education, emotional bonds, capacity of caregivers and the child's intelligent preference. Distinguish legal guardianship, physical custody, visitation and property management, and avoid treating any adult's statutory priority as absolute.
      `.trim(),
      keyPoints: [
        "The Hindu Minority and Guardianship Act supplements the Guardians and Wards Act, 1890.",
        "Section 6 identifies natural guardians subject to welfare-based interpretation.",
        "Section 8 restricts specified transactions involving a minor's immovable property.",
        "Section 11 bars a de facto guardian from dealing with a minor's property merely on that status.",
        "Under Section 13, the welfare of the minor is the paramount consideration.",
      ],
      provisions: [
        "Hindu Minority and Guardianship Act, 1956 — Sections 2–4",
        "Hindu Minority and Guardianship Act, 1956 — Sections 6–9",
        "Hindu Minority and Guardianship Act, 1956 — Sections 10–13",
        "Guardians and Wards Act, 1890 — Sections 7, 12, 17, 19 and 25",
        "Guardians and Wards Act, 1890 — Sections 29 and 31",
        "Hindu Adoptions and Maintenance Act, 1956 — Section 12",
      ],
      importantCases: [
        {
          caseName: "Githa Hariharan v. Reserve Bank of India",
          citation: "Supreme Court of India (1999)",
          principle: "In Section 6, “after” does not mean only after the father's death; the mother may act when he is absent through non-availability or indifference.",
        },
        {
          caseName: "Jijabai Vithalrao Gajre v. Pathankhan",
          citation: "Supreme Court of India (1970)",
          principle: "Where the father was effectively absent from the child's affairs, the mother who cared for the child was recognised in the guardianship analysis.",
        },
        {
          caseName: "Rosy Jacob v. Jacob A. Chakramakkal",
          citation: "Supreme Court of India (1973)",
          principle: "Children are not property; custody orders remain subject to variation according to welfare.",
        },
        {
          caseName: "Nil Ratan Kundu v. Abhijit Kundu",
          citation: "Supreme Court of India (2008)",
          principle: "The child's welfare is broad and paramount, extending beyond money or physical comfort.",
        },
        {
          caseName: "Mausami Moitra Ganguli v. Jayant Ganguli",
          citation: "Supreme Court of India (2008)",
          principle: "No rigid formula governs custody; the court evaluates the total circumstances and the child's best interests.",
        },
        {
          caseName: "Roxann Sharma v. Arun Sharma",
          citation: "Supreme Court of India (2015)",
          principle: "The statutory rule concerning custody below five years was considered within the overriding welfare framework.",
        },
      ],
      examFocus:
        "Prepare the definitions in Section 4; natural and testamentary guardians; Githa Hariharan's interpretation of Section 6; restrictions and consequences under Section 8; de facto guardians; undivided joint-family interests; and the paramount welfare rule in Section 13. Compare natural-guardian property powers with court-appointed guardian powers under the Guardians and Wards Act, and distinguish guardianship, custody and visitation.",
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
      detailedContent: `
1. Introduction, object and application

The Special Marriage Act, 1954 provides a statutory civil form of marriage, a mechanism for registration of certain marriages celebrated in another form, and matrimonial relief including divorce. It enables eligible parties to marry without making validity depend upon the religious ceremony of either party. The Act must be distinguished from the Hindu Marriage Act, 1955 and the Foreign Marriage Act, 1969.

Section 1 addresses extent and application, Section 2 contains definitions, and Section 3 concerns Marriage Officers. Before advising on procedure, identify the parties' residence and nationality, the proposed place of solemnisation, and whether they seek a new marriage under Chapter II or registration of an existing ceremony under Chapter III.

2. Conditions for solemnisation — Section 4

Section 4 states the substantive conditions for a special marriage. Neither party may have a spouse living. Each must possess the mental capacity prescribed by the section. The male must have completed twenty-one years and the female eighteen years. The parties must not be within prohibited degrees unless a custom governing at least one party permits the marriage and the statutory conditions concerning that custom are met.

These conditions are separate from the procedural notice requirements. A Marriage Officer's completion of paperwork cannot validate a union that violates a substantive condition.

3. Notice and publication — Sections 5 and 6

The parties give written notice in the statutory form to the Marriage Officer of the district where at least one party has resided for not less than thirty days immediately before notice. Section 6 requires entry in the Marriage Notice Book and prescribes publication. Where a party is not permanently residing within the officer's district, the Act provides for transmission to the Marriage Officer of the relevant permanent-residence district.

Notice and publication provisions engage privacy, dignity, personal liberty and safety concerns. Courts have examined how these provisions should operate constitutionally. Because the governing position may depend on binding precedent and administrative rules in the relevant jurisdiction, students must distinguish the enacted text from a particular court's interpretation and verify the current applicable law.

4. Objections and inquiry — Sections 7 to 10

An objection may be made during the thirty-day period only on the ground that the proposed marriage would contravene one or more conditions in Section 4. It is not a general opportunity for relatives or members of the public to veto an adult's lawful choice.

The Marriage Officer records the objection and conducts the statutory inquiry within the prescribed period. If the objection is upheld, the parties have the appellate remedy provided by Section 8. Section 9 confers inquiry powers, and Section 10 addresses action where an objection appears connected with an offence. Adult choice and personal safety remain constitutionally important throughout the process.

5. Declaration, form and certificate — Sections 11 to 13

Before solemnisation, the parties and three witnesses sign the statutory declaration in the presence of the Marriage Officer. The marriage may be solemnised at the Marriage Officer's office or another permitted place and in any form chosen by the parties, but each party must make the statutory declaration accepting the other as lawful spouse.

After solemnisation, the Marriage Officer enters the certificate in the Marriage Certificate Book. The parties and three witnesses sign it. The certificate is conclusive evidence that a marriage under the Act was solemnised and that the formalities concerning witnesses were complied with, subject to challenges permitted by law. Under Section 14, a notice lapses if the marriage is not solemnised within three calendar months, requiring a fresh notice.

6. Registration of marriages celebrated in another form — Sections 15 to 18

Chapter III is different from Chapter II. It permits registration under the Act of certain marriages already celebrated in another form when every condition in Section 15 is satisfied. These include a ceremony already performed, continued marital cohabitation, absence of a living spouse, mental capacity, statutory age, prohibited-relationship compliance and the residence condition.

The Marriage Officer follows the public-notice, objection and inquiry process prescribed by Sections 16 and 17. Upon registration, Section 18 treats the marriage as one solemnised under the Act from the statutory date. Students should not describe a Chapter III registration application as if it were a notice to create a new marriage under Section 5.

7. Family and succession consequences — Sections 19 to 21A

Section 19 addresses the effect of a marriage under the Act on a member of an undivided Hindu, Buddhist, Sikh or Jain family, including severance from that family for the stated purpose. Section 20 addresses specified rights and disabilities linked to marriage under the Act.

Section 21 generally applies the Indian Succession Act, 1925 to succession to the property of parties married under the Act and their children. Section 21A creates an important exception where both parties profess the Hindu, Buddhist, Sikh or Jain religion: Sections 19 and 21 do not apply, and the relevant Hindu succession framework continues. A problem must identify the religion of both parties instead of assuming that every Special Marriage Act marriage produces the same succession result.

8. Restitution and judicial separation — Sections 22 and 23

Section 22 provides restitution of conjugal rights where one spouse has withdrawn from the society of the other without reasonable excuse. The petitioner must prove withdrawal, while the statutory burden concerning reasonable excuse operates according to the section. A decree is enforceable only through lawful civil procedure and does not authorise physical compulsion.

Section 23 provides judicial separation on the statutory grounds. Judicial separation suspends the duty to cohabit but does not dissolve the marriage. The court may rescind the decree when it considers it just and reasonable.

9. Nullity and legitimacy — Sections 24 to 26

Section 24 identifies void marriages, including marriages contravening specified Section 4 conditions and cases where the respondent was impotent at the time of marriage and institution of the suit, as stated by the provision. A void marriage is treated as null within the statutory scheme.

Section 25 deals with voidable marriages and grounds including wilful refusal to consummate, specified pregnancy by another person, and consent obtained by coercion or fraud, subject to the section's conditions and bars. A voidable marriage remains effective unless annulled.

Section 26 protects the legitimacy of children of void and voidable marriages within its terms. Legitimacy does not make the invalid or annulled marriage itself valid, and property consequences must be stated according to the statutory text and binding precedent.

10. Divorce and mutual consent — Sections 27 and 28

Section 27 states grounds for divorce, including adultery, desertion for the statutory period, imprisonment in the circumstances specified, cruelty, specified mental disorder, communicable venereal disease, absence for seven years, and failure to resume cohabitation after judicial separation or restitution decrees. The current enacted text and each ingredient must be checked; historical amendments should not be presented as current law without qualification.

Section 28 provides divorce by mutual consent where the parties satisfy the separation, inability to live together and mutual-agreement requirements. Consent must be free and continue until the decree. Principles concerning genuine continuing consent and waiver of procedural waiting periods must be applied with the text of the Special Marriage Act and controlling precedent.

Section 29 contains restrictions on presenting a divorce petition within the first year, subject to its proviso. Section 30 governs remarriage after a decree becomes final under the statutory conditions.

11. Jurisdiction, procedure and ancillary relief

Section 31 governs the court in which petitions may be presented. Sections 32 to 35 address procedural matters including contents and verification, in-camera proceedings and the duty of the court concerning relief. Section 34 requires attention to bars such as taking advantage of one's own wrong, collusion, condonation or delay where applicable.

Sections 36 and 37 provide maintenance pendente lite and permanent alimony in the terms stated by the Act. Section 38 empowers orders concerning custody, maintenance and education of minor children. Section 39 governs appeals. These remedies should be coordinated with any independent relief available under maintenance, domestic-violence or guardianship legislation.

12. Constitutional choice, privacy and equality

The freedom of competent adults to select a spouse is protected by constitutional principles of dignity, privacy and personal liberty. In Lata Singh v. State of Uttar Pradesh and Shafin Jahan v. Asokan K.M., the Supreme Court strongly protected adult marital choice against family or community interference.

In Supriyo v. Union of India, the Supreme Court considered claims concerning marriage equality and the Special Marriage Act. The Court did not judicially rewrite the Act to create a gender-neutral marriage regime, while the opinions discussed constitutional rights, State recognition and institutional roles. Students must state the actual holding carefully and distinguish constitutional reasoning from legislative policy proposals.

13. Problem-solving and examination method

First decide whether the case concerns solemnisation under Chapter II or registration under Chapter III. Test every Section 4 condition, residence and notice facts, permissible grounds of objection, declarations, witnesses and certificate. Then analyse family and succession consequences under Sections 19 to 21A.

For matrimonial relief, identify whether the marriage is void, voidable, subsisting under judicial separation, or capable of divorce. Select the exact section and prove each ingredient, jurisdictional fact and statutory bar. Where safety or coercion is alleged, address constitutional protection and relevant criminal or protective remedies rather than treating family opposition as a lawful objection.
      `.trim(),
      keyPoints: [
        "Section 4 states the conditions relating to solemnisation of a special marriage.",
        "The Act prescribes notice, publication, objection and solemnisation procedures.",
        "Three witnesses sign the statutory marriage certificate with the parties and Marriage Officer.",
        "The Act separately regulates void, voidable and dissoluble marriages.",
        "Succession consequences must be examined under Sections 19 to 21A and the applicable succession law.",
      ],
      provisions: [
        "Special Marriage Act, 1954 — Sections 1–4",
        "Special Marriage Act, 1954 — Sections 5–14",
        "Special Marriage Act, 1954 — Sections 15–18",
        "Special Marriage Act, 1954 — Sections 19–21A",
        "Special Marriage Act, 1954 — Sections 22–30",
        "Special Marriage Act, 1954 — Sections 31–39",
        "Indian Succession Act, 1925",
        "Foreign Marriage Act, 1969",
      ],
      importantCases: [
        {
          caseName: "Lata Singh v. State of Uttar Pradesh",
          citation: "Supreme Court of India (2006)",
          principle: "A competent adult is free to marry a person of choice, and unlawful threats or harassment require protection.",
        },
        {
          caseName: "Seema v. Ashwani Kumar",
          citation: "Supreme Court of India (2006)",
          principle: "Registration of marriages is an important safeguard and States were directed to establish registration rules.",
        },
        {
          caseName: "Shafin Jahan v. Asokan K.M.",
          citation: "Supreme Court of India (2018)",
          principle: "The choice of a spouse by a competent adult lies within individual autonomy, dignity and liberty.",
        },
        {
          caseName: "Safiya Sultana v. State of Uttar Pradesh",
          citation: "Allahabad High Court (2021)",
          principle: "The Court interpreted notice publication in light of privacy and adult choice; its jurisdictional status must be distinguished from the enacted text and nationwide Supreme Court law.",
        },
        {
          caseName: "Supriyo v. Union of India",
          citation: "Supreme Court of India (2023)",
          principle: "The Court declined to judicially rewrite the Special Marriage Act as a gender-neutral marriage code and discussed the constitutional and institutional dimensions of marriage recognition.",
        },
        {
          caseName: "Sureshta Devi v. Om Prakash",
          citation: "Supreme Court of India (1991)",
          principle: "Mutual-consent divorce requires genuine consent continuing until the decree; the principle informs analysis of analogous mutual-consent provisions.",
        },
      ],
      examFocus:
        "Prepare Section 4 conditions; residence, notice, objections and inquiry; declaration, solemnisation and certificate; the distinction between Chapter II solemnisation and Chapter III registration; family and succession effects under Sections 19 to 21A; restitution, judicial separation, nullity, divorce and mutual consent; jurisdiction, maintenance and custody. Apply constitutional adult-choice principles while distinguishing statutory text, jurisdiction-specific rulings and the holding in Supriyo.",
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
