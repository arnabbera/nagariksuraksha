import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const MEDIA_LAW_COURSE_ID = "media-law";

export const mediaLawCourse = createCourseModel({
  id: MEDIA_LAW_COURSE_ID,
  title: "Media Law",
  slug: MEDIA_LAW_COURSE_ID,
  shortDescription:
    "Study Indian media law across print, broadcasting, cinema, journalism, digital platforms, advertising and constitutional freedoms.",
  description:
    "A structured eight-unit course covering the development of media, constitutional freedom and restrictions, defamation and contempt, copyright and broadcasting, ethics and self-regulation, broadcast legislation, internet regulation, and advertising law.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 10,
  totalChapters: 8,
  status: "published",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Media Law Course | NagarikSuraksha",
    description:
      "Study Media Law through eight structured units covering press freedom, defamation, contempt, broadcasting, copyright, internet regulation and advertising law.",
    focusKeyword: "media law course",
    secondaryKeywords: [
      "media law notes",
      "press law India",
      "broadcasting law India",
      "digital media law",
      "advertising law India",
      "media law certificate course",
    ],
    canonicalUrl: "/courses/media-law",
    robots: { index: false, follow: false },
    sitemap: { include: false },
  },
});

const units = [
  {
    title: "Introduction and Development of Media",
    shortDescription:
      "Concept, history, theories and evolution of media, Indian media legislation, print media and registration.",
    overview:
      "This unit introduces the meaning and functions of media, traces the history and evolution of communication institutions, examines principal theories of media, and outlines the development of Indian media legislation with particular attention to print-media regulation and registration.",
    objectives: [
      "Define media and distinguish its principal forms and functions.",
      "Trace the historical development of print, broadcast and digital media.",
      "Compare the principal normative theories of the press and media.",
      "Explain the evolution of media legislation in India.",
      "Examine the present legal framework governing newspapers and periodicals.",
      "Distinguish registration regulation from control over editorial content.",
      "Apply the Press and Registration of Periodicals Act, 2023 to a practical registration problem.",
    ],
    topics: [
      "Meaning, scope and functions of media",
      "History and evolution of mass communication",
      "Authoritarian, libertarian, social-responsibility and democratic-participant theories",
      "Colonial and post-Independence development of Indian media law",
      "Print media, publishers, printers and periodicals",
      "Registration of newspapers and periodicals",
    ],
    provisions: [
      "Press and Registration of Periodicals Act, 2023",
      "Press and Registration of Periodicals Rules, 2024",
      "Historical development from the Press and Registration of Books Act, 1867",
    ],
    detailedContent: `
1. Meaning and concept of media

The word media is the plural of medium. In communication studies, a medium is a channel through which information, ideas, opinions, images, sound or entertainment passes from a communicator to an audience. Media therefore includes both the technological channel and the organised institution that selects, produces and distributes content.

Mass media communicates with a large, dispersed and usually heterogeneous audience. Traditional mass media includes newspapers, magazines, books, radio, television and cinema. Digital media includes websites, online news portals, podcasts, streaming services, social networks and user-generated platforms. The boundaries now overlap: a newspaper may publish in print, operate a website, stream video and distribute content through social media.

Media law is not one self-contained statute. It is a field formed by constitutional law, criminal law, tort, contempt, copyright, labour law, consumer law, broadcasting and telecommunications regulation, data protection, information-technology law and sector-specific rules. The applicable rule depends upon the medium, content, speaker, audience and harm involved.

2. Essential characteristics and functions of media

Media performs several democratic and social functions. It supplies information; explains events; provides a forum for discussion; scrutinises public institutions; communicates culture and education; entertains; carries advertising; preserves public memory; and enables citizens to participate in political and social life. Investigative journalism may expose wrongdoing, while local and community media may make voices visible that national institutions overlook.

The familiar description of the press as the fourth estate emphasises its watchdog role alongside the legislature, executive and judiciary. It is a constitutional metaphor, not a grant of governmental power or immunity from ordinary law. Editorial independence must coexist with accuracy, fairness, privacy, reputation, national security, public order and fair-trial rights.

Communication may be one-to-many, as in a printed newspaper or terrestrial broadcast; one-to-one, as in private messaging; or many-to-many, as on a social platform. Digital communication is interactive, searchable, replicable, persistent and capable of crossing borders instantly. These features alter the scale of both expression and injury.

3. Distinguishing forms of media

Print media uses printed copies, normally at a stated periodicity, and includes newspapers and magazines. Broadcast media transmits audio or audiovisual programming through spectrum, cable, satellite or similar distribution systems. Cinema combines expression, performance and commercial exhibition and has historically been governed by a prior-certification system.

Digital media may reproduce traditional journalism or create entirely new forms such as social networking, video-sharing, live-streaming and algorithmically recommended content. Ownership and editorial control also differ. A publisher or broadcaster generally selects content before distribution; an online intermediary may primarily host content supplied by users, although its design and moderation choices may carry separate legal significance.

The classification matters. A statute regulating a printed periodical cannot automatically be applied to every blog, book or digital post. Courts first identify the legal character of the medium and activity and then examine the governing constitutional and statutory framework.

4. A brief global history of mass communication

Oral traditions, inscriptions, manuscripts and handwritten newsletters preceded mass media. The development of movable-type printing in Europe in the fifteenth century made the repeated production of texts faster and cheaper. Printing expanded literacy, religious and political debate, commercial information and the possibility of communicating with a mass public.

The nineteenth century brought steam-powered presses, cheaper paper, rail transport and the telegraph. These technologies enabled high-circulation newspapers and rapid news transmission. Photography and motion pictures added visual communication. During the twentieth century, radio and television created simultaneous national audiences and brought spectrum licensing and public-service broadcasting into media law.

Satellite communication, cable television and economic liberalisation multiplied channels. The internet then reduced entry barriers and separated publication from physical distribution. Smartphones and social platforms turned many audience members into creators and distributors. This evolution explains why legal systems moved from rules centred on printers and physical copies toward frameworks dealing with broadcasting, platforms, data and networked speech.

5. Development of the press in India

Indian traditions of public communication long predate modern newspapers. The colonial print era is conventionally traced through James Augustus Hicky's Bengal Gazette, first published in Calcutta in 1780. Early newspapers served European communities but Indian-language publications and reform journals later became important forums for social and political debate.

Colonial press policy alternated between licensing, security deposits, registration and prosecution. Lord Wellesley's 1799 regulations imposed pre-censorship controls. The 1823 licensing regulations restricted publication without a licence. The Press Act of 1835 associated with Charles Metcalfe relaxed licensing while requiring identification of the printer and publisher, earning Metcalfe a reputation as a liberator of the Indian press.

After 1857, the Press and Registration of Books Act, 1867 established a lasting registration and identification framework. The Vernacular Press Act, 1878 targeted Indian-language publications and was repealed in 1882. The Newspapers (Incitement to Offences) Act, 1908, Indian Press Act, 1910 and Press (Emergency Powers) Act, 1931 strengthened coercive control through forfeiture, security and suppression. The Official Secrets Act, 1923 created restrictions that continue to affect reporting on government information.

Indian-owned newspapers became central to social reform and the freedom movement. Publications associated with Raja Rammohan Roy, Bal Gangadhar Tilak, Mahatma Gandhi and other leaders treated journalism as public education and political mobilisation. Colonial prosecutions also demonstrated how sedition, security and press laws could be used against dissent.

6. Post-Independence development of Indian media

The Constitution did not create a separately worded freedom of the press. The Supreme Court nevertheless recognised press freedom within Article 19(1)(a), subject to the grounds in Article 19(2). Early decisions against circulation bans and pre-censorship established that dissemination and circulation form part of free expression.

The First Press Commission, appointed in 1952, examined press standards, ownership and working conditions. Its recommendations contributed to legislation concerning working journalists and the creation of a Press Council. The first Press Council was constituted under the Press Council Act, 1965. After its abolition during the Emergency, Parliament enacted the Press Council Act, 1978 and the Council was re-established.

Radio and television initially developed under direct governmental control. Later institutional reform, satellite television, cable networks and liberalisation created a mixed public and private broadcast sector. Cinema continued under the Cinematograph Act, 1952. From the 1990s onward, cable, satellite, private news broadcasting and the internet produced medium-specific legislation, licensing, programme codes and self-regulatory arrangements.

The Information Technology Act, 2000 addressed electronic records, cyber offences, intermediary liability and governmental powers affecting online content. Media convergence now means that the same report may simultaneously engage print registration, broadcasting rules, copyright, privacy, criminal law and platform governance.

7. Why media theories matter in law

Media theories describe the relationship among the State, the press, owners, journalists and the public. They help explain why a legal system permits, restricts or requires particular forms of communication. They are normative models, not statutes, and actual systems often combine features of several models.

An examination answer should not merely list the theories. It should identify who controls media, what conception of truth or public interest is used, what duties the press carries and what form of accountability is considered legitimate.

8. Authoritarian theory

Authoritarian theory treats media as subordinate to the ruling authority. Publication may depend upon licences, prior approval or official privilege. Criticism viewed as threatening the State may be censored, punished or suppressed. The stated justification is frequently order, security or political unity, but the structure gives the government decisive control over public communication.

Colonial licensing, prior censorship, security deposits and forfeiture laws illustrate authoritarian techniques. The decisive feature is not merely the existence of regulation; every constitutional democracy regulates harmful conduct. It is the absence of independent limits, proportionality, public justification and effective review of official control.

9. Libertarian theory

Libertarian theory rests upon individual freedom, reason and a marketplace of ideas. Government should not determine truth in advance. Competing views should be permitted so that citizens can judge them. Private ownership and freedom from prior restraint are therefore central features.

Its strength is distrust of censorship and recognition of individual autonomy. Its limitations include unequal access, concentration of ownership, commercial pressure, misinformation and the possibility that nominal freedom benefits those with the greatest economic or technological power. Modern constitutional law protects robust expression but does not treat speech as wholly free from responsibility.

10. Social-responsibility theory

Social-responsibility theory accepts media freedom but couples it with duties to provide truthful, diverse and socially significant information. Because media institutions exercise influence and scarce resources may be involved, professional ethics, correction mechanisms, public-service obligations and carefully designed regulation may be justified.

This theory supports accountability without assuming that government should direct editorial judgment. The central problem is institutional design: responsibility must not become a vague excuse for censorship, while self-regulation must not become protection from meaningful scrutiny. Independence, transparency and proportionality are essential.

11. Soviet-communist and development-media theories

The Soviet-communist model historically treated media as an instrument of the working class under party leadership. Private ownership and adversarial competition were rejected, and communication was directed toward collective political and economic goals. It differs from general authoritarianism in its ideological account of ownership and class power, although both can concentrate control.

Development-media theory argues that media in developing societies may promote literacy, health, national integration and economic development. It recognises resource constraints and nation-building objectives. Its danger is that public-development goals can be invoked to suppress criticism. A democratic version requires plural participation, independent scrutiny and protection of disagreement.

12. Democratic-participant theory and the public sphere

Democratic-participant theory criticises both central State control and concentrated commercial media. It emphasises local, community and alternative media; access by ordinary citizens; horizontal communication; cultural diversity; and participation in creating content. Community radio and citizen journalism illustrate aspects of this approach.

The public-sphere idea describes a social space in which citizens exchange reasons about common affairs. Media can enlarge that space, but ownership concentration, exclusion, surveillance, manipulation and algorithmic amplification can distort it. Media law therefore concerns not only restraint by the State but also the conditions necessary for plural and informed public discussion.

13. Media legislation in the Indian constitutional setting

Media legislation must be read with Articles 14, 19(1)(a), 19(1)(g) and 21. A newspaper is both a vehicle of expression and an organised enterprise, but regulation of business cannot be used indirectly to abridge protected circulation or editorial freedom. Article 19(2) permits reasonable restrictions on speech only on its specified grounds, while Article 19(6) permits reasonable restrictions on trade or profession.

Registration law serves administrative purposes such as identifying publishers, maintaining public records and verifying circulation. It does not give the registering authority general power to approve editorial opinion. Content restrictions must have a separate legal foundation and satisfy constitutional requirements.

The regulatory map is fragmented. Print registration, journalistic standards, broadcasting, films, cable networks, copyright, contempt, official secrets, criminal offences, advertising, personal data and online intermediaries are governed through different enactments and institutions. The first step in any problem is therefore to classify the medium and the impugned activity.

14. From the 1867 Act to the Press and Registration of Periodicals Act, 2023

The Press and Registration of Books Act, 1867 was enacted in the colonial period. It required declarations relating to printing presses and newspapers, identification of printers and publishers, delivery of copies and registration functions later administered through the Registrar of Newspapers for India. Though amended over time, its declaration-based and paper-oriented structure remained tied to nineteenth-century administration.

The Press and Registration of Periodicals Act, 2023 replaced the 1867 Act and came into force on 1 March 2024 together with the Press and Registration of Periodicals Rules, 2024. The Registrar of Newspapers for India is now the Press Registrar General of India. The new system uses the Press Sewa Portal for title allotment, applications, communication and compliance and substantially removes physical interaction from the registration process.

The 2023 Act is principally a registration statute. It does not replace constitutional protections, the Press Council framework or laws governing unlawful content. It also substantially decriminalises procedural defaults while retaining administrative penalties and narrowly defined criminal consequences.

15. Scope and important definitions under the 2023 Act

A periodical means a publication, including a newspaper, published and printed at regular intervals and containing public news or comments on public news. A book or journal, including a scientific, technical or academic book or journal, is excluded. The statutory classification therefore turns on regular printed publication and public-news content, not merely use of the words magazine or journal.

An owner is the person who owns a periodical. A publisher is responsible for publishing it. A printer is the owner or keeper of a printing press. The Specified Authority is ordinarily a District Magistrate, Collector or other State or Union-territory officer notified for the purpose. The Press Registrar General performs the central registration and record-keeping functions.

A citizen of India or a person or entity registered under Indian law may bring out a periodical, subject to the statutory disqualification connected with conviction for terrorist activity, unlawful activity or an offence against the security of the State. Every publisher must obtain a certificate of registration with the owner's authorisation.

16. Printing-press intimation and registration procedure

Under section 3, a printer must send online intimation to the Press Registrar General and the relevant Specified Authority within thirty days of starting a printing press for a periodical. Changes must also be intimated; a move into another authority's jurisdiction requires the prescribed fresh communication.

For a new periodical, the owner creates an account on the Press Sewa Portal, proposes admissible titles with the language and place of publication, and appoints a publisher. The publisher completes the registration application, identifies an onboarded printing press and pays the prescribed processing fee. The Portal forwards the application simultaneously to the Press Registrar General and the Specified Authority for comments.

Title scrutiny protects the distinct identity of registered periodicals. The proposed title must comply with the PRGI title guidelines and must not be the same as or impermissibly similar to an existing title. The online process permits correction during the prescribed window and provides an opportunity to respond before refusal. If satisfied, the Press Registrar General grants the certificate of registration.

The process can be remembered as: owner proposes title and appoints publisher; publisher applies and selects printer; printer confirms the press; Specified Authority comments; PRGI verifies and grants or refuses registration.

17. Continuing obligations of a registered periodical

Registration is followed by continuing compliance. The publisher must ensure that the periodical contains the prescribed imprint information identifying relevant publication particulars. A registered publication must furnish its annual statement within the statutory and rule-based timeline. Changes to registration particulars and transfer of ownership must follow the online revision or transfer procedure.

The publisher must upload the electronic version of a newspaper on the Press Sewa Portal within the prescribed period and deliver required copies in the manner specified by the Rules. The Press Registrar General may verify circulation through desk audit or physical inspection in the circumstances laid down by the framework.

Suspension may follow registration obtained by false representation or concealment, failure to publish continuously, false annual particulars or prolonged failure to furnish annual statements. Cancellation may follow failure to cure a ground of suspension, impermissible title duplication or relevant conviction. An affected person must use the statutory appellate remedy and may seek constitutional review where legally available.

18. Registration, regulation and freedom of the press

Registration and censorship are legally distinct. Requiring accurate identification and periodic information may serve legitimate administrative purposes. A rule that controls page numbers, circulation, newsprint or economic viability because of a publication's content may directly or indirectly burden freedom of expression.

Courts examine substance rather than labels. A measure described as commercial, fiscal or administrative may still violate Article 19(1)(a) if its direct and inevitable effect restricts circulation, editorial choice or the ability to publish. Conversely, press freedom does not exempt media enterprises from laws of general application that do not abridge expression and satisfy constitutional standards.

19. Leading constitutional decisions shaping print-media development

Romesh Thappar v. State of Madras invalidated a ban on the entry and circulation of a journal and recognised circulation as an essential part of publication. Brij Bhushan v. State of Delhi invalidated an order requiring prior scrutiny of newspaper content and established the constitutional hostility to pre-censorship.

Express Newspapers (Private) Ltd. v. Union of India accepted legitimate regulation of employment conditions while stressing that laws cannot single out the press to undermine its freedom. Sakal Papers (P) Ltd. v. Union of India struck down price-page regulation because it curtailed circulation and could not be justified merely as a business regulation.

Bennett Coleman & Co. v. Union of India invalidated aspects of the newsprint policy whose direct effect restricted page growth and circulation. Indian Express Newspapers v. Union of India held that the press is not immune from taxation, but fiscal measures affecting it require careful constitutional scrutiny because of their impact on dissemination and public discussion.

20. Practical problem and examination method

Assume that a company proposes a weekly printed publication containing public news and commentary. It begins publication before obtaining registration, uses a title similar to an existing newspaper and fails to identify its printer. The publisher argues that Article 19(1)(a) makes registration unnecessary.

The answer should first classify the publication as a periodical under the 2023 Act. Identify the owner, publisher, printer, Specified Authority and Press Registrar General. Explain the online title-allotment and registration process, the printing-press intimation, title-admissibility rule and continuing duties. Reject the claim of total immunity: reasonable administrative registration is distinct from prior censorship, although every decision remains subject to the statute, natural justice and constitutional review.

For a theory question, define media; distinguish print, broadcast and digital forms; explain media functions; trace technological and Indian legal history; compare authoritarian, libertarian, social-responsibility, Soviet-communist, development and democratic-participant theories; and conclude by connecting pluralism, accountability and press freedom. For a statutory problem, use the sequence: classify the publication, identify the actors, state the current Act and Rules, apply the online procedure, examine the alleged default, and state the remedy.
    `.trim(),
    keyPoints: [
      "Media includes both communication technologies and the institutions that select, produce and distribute content.",
      "Print, broadcasting, cinema and digital media overlap, but each may attract a different legal framework.",
      "The press acts as an information provider, public forum and democratic watchdog, but the fourth-estate description does not create immunity from law.",
      "Authoritarian, libertarian, social-responsibility, Soviet-communist, development-media and democratic-participant theories differ on control, ownership, duty and accountability.",
      "Indian print history moved from colonial licensing and security laws toward constitutional protection under Article 19(1)(a).",
      "Freedom of the press is part of freedom of speech and expression even though the Constitution does not separately name it.",
      "The Press and Registration of Periodicals Act, 2023 replaced the Press and Registration of Books Act, 1867 from 1 March 2024.",
      "The current framework uses the Press Sewa Portal and the Press Registrar General of India for title allotment, registration and compliance.",
      "A periodical must be regularly published and printed and contain public news or comments on public news; specified books and journals are excluded.",
      "Registration is an administrative framework and must not be confused with general authority to approve or censor editorial content.",
      "The publisher must obtain registration, while the printer must give the prescribed intimation concerning the printing press.",
      "Circulation is part of press freedom; indirect economic or administrative restrictions may violate Article 19(1)(a) when their direct effect burdens publication or dissemination.",
    ],
    statutoryProvisions: [
      {
        id: "media-law-unit-1-constitution",
        title: "Constitution of India",
        provision: "Articles 19(1)(a), 19(1)(g) and 19(2)",
        description:
          "Protects speech, expression and lawful occupation while permitting only constitutionally specified reasonable restrictions; press freedom is judicially located within Article 19(1)(a).",
      },
      {
        id: "media-law-unit-1-prpa-scope",
        title: "Press and Registration of Periodicals Act, 2023",
        provision: "Sections 1–2",
        description:
          "Establishes the Act's application and definitions, including periodical, newspaper, owner, publisher, printer and Specified Authority.",
      },
      {
        id: "media-law-unit-1-printing-press",
        title: "Printing-press intimation",
        provision: "Section 3, Press and Registration of Periodicals Act, 2023",
        description:
          "Requires the printer to intimate the Press Registrar General and Specified Authority within the prescribed time after starting a printing press for periodicals.",
      },
      {
        id: "media-law-unit-1-prgi",
        title: "Press Registrar General of India",
        provision: "Press and Registration of Periodicals Act, 2023",
        description:
          "Creates the central statutory authority responsible for title allotment, registration, records, annual statements and circulation verification.",
      },
      {
        id: "media-law-unit-1-registration",
        title: "Registration of periodicals",
        provision: "Press and Registration of Periodicals Act, 2023 and 2024 Rules",
        description:
          "Provides the online application, title scrutiny, Specified Authority comments, opportunity to cure deficiencies and grant or refusal of a registration certificate.",
      },
      {
        id: "media-law-unit-1-compliance",
        title: "Post-registration compliance",
        provision: "Press and Registration of Periodicals Act, 2023 and 2024 Rules",
        description:
          "Governs annual statements, delivery and electronic upload of copies, revision of particulars, ownership transfer and circulation verification.",
      },
      {
        id: "media-law-unit-1-enforcement",
        title: "Suspension, cancellation and penalties",
        provision: "Press and Registration of Periodicals Act, 2023",
        description:
          "Provides specified grounds, procedures and consequences for false information, irregular publication, annual-statement defaults, title violations and other statutory contraventions.",
      },
      {
        id: "media-law-unit-1-prp-rules",
        title: "Press and Registration of Periodicals Rules, 2024",
        provision: "Procedural rules and Press Sewa forms",
        description:
          "Operationalises online applications, fees, corrections, documents, delivery, statements, circulation verification and other procedures under the 2023 Act.",
      },
      {
        id: "media-law-unit-1-prb-history",
        title: "Press and Registration of Books Act, 1867",
        provision: "Repealed historical legislation",
        description:
          "The colonial-era declaration and registration statute is studied only for historical development; current periodical registration is governed by the 2023 Act.",
      },
    ],
    importantCases: [
      {
        id: "media-law-unit-1-romesh-thappar",
        caseName: "Romesh Thappar v. State of Madras",
        citation: "AIR 1950 SC 124",
        principle:
          "Freedom of circulation is an essential part of freedom of speech and expression, and a State cannot prohibit a journal beyond constitutionally permitted restrictions.",
        summary:
          "The Supreme Court set aside an order banning the entry and circulation of the journal Cross Roads in Madras, establishing circulation as a protected dimension of press freedom.",
      },
      {
        id: "media-law-unit-1-brij-bhushan",
        caseName: "Brij Bhushan v. State of Delhi",
        citation: "AIR 1950 SC 129",
        principle:
          "Prior scrutiny of newspaper content is a serious restriction upon press freedom and must satisfy the Constitution.",
        summary:
          "An order requiring the editor and printer of the Organiser to submit specified material for prior examination was invalidated under Article 19(1)(a).",
      },
      {
        id: "media-law-unit-1-express-newspapers-1958",
        caseName: "Express Newspapers (Private) Ltd. v. Union of India",
        citation: "AIR 1958 SC 578",
        principle:
          "The press is subject to valid laws regulating employment, but legislation cannot be used to single it out and curtail freedom of circulation or publication.",
        summary:
          "While examining working-journalist legislation, the Court distinguished permissible labour welfare regulation from measures designed to weaken press freedom.",
      },
      {
        id: "media-law-unit-1-sakal-papers",
        caseName: "Sakal Papers (P) Ltd. v. Union of India",
        citation: "AIR 1962 SC 305",
        principle:
          "The State cannot restrict newspaper pages and circulation through price-page regulation merely by characterising the measure as commercial regulation.",
        summary:
          "The Court invalidated the Daily Newspapers (Price and Page) Order because its direct effect was to restrict circulation and protected expression.",
      },
      {
        id: "media-law-unit-1-bennett-coleman",
        caseName: "Bennett Coleman & Co. v. Union of India",
        citation: "(1972) 2 SCC 788",
        principle:
          "Newsprint controls are unconstitutional where their direct and inevitable effect restricts page growth, circulation and editorial freedom.",
        summary:
          "The Supreme Court invalidated restrictive features of the newsprint policy and rejected the argument that press freedom could be separated from the practical ability to publish.",
      },
      {
        id: "media-law-unit-1-indian-express",
        caseName: "Indian Express Newspapers (Bombay) Pvt. Ltd. v. Union of India",
        citation: "(1985) 1 SCC 641",
        principle:
          "The press has no blanket immunity from taxation, but fiscal burdens affecting dissemination require sensitive constitutional scrutiny.",
        summary:
          "The Court reviewed customs duties on newsprint and stressed the constitutional importance of a free press in informing citizens and sustaining public discussion.",
      },
      {
        id: "media-law-unit-1-cricket-association",
        caseName: "Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal",
        citation: "(1995) 2 SCC 161",
        principle:
          "The right to communicate and receive information extends to electronic media, while airwaves are public property requiring regulation in the public interest.",
        summary:
          "The decision connected technological change with constitutional communication rights and rejected an exclusive governmental monopoly over broadcasting.",
      },
    ],
    examFocus:
      "Prepare the meaning, characteristics and functions of media; distinctions among print, broadcast, cinema and digital media; global technological development; the history of the Indian press from Hicky's Bengal Gazette and colonial controls to constitutional democracy; authoritarian, libertarian, social-responsibility, Soviet-communist, development-media and democratic-participant theories; Article 19(1)(a) and the fourth-estate idea; the transition from the Press and Registration of Books Act, 1867 to the Press and Registration of Periodicals Act, 2023; the definition of periodical; the roles of owner, publisher, printer, Specified Authority and Press Registrar General; the Press Sewa registration sequence; continuing obligations, suspension and cancellation; and the principles in Romesh Thappar, Brij Bhushan, Express Newspapers, Sakal Papers, Bennett Coleman, Indian Express Newspapers and Cricket Association of Bengal.",
    revisionNotes: `
Meaning: media is both the channel of communication and the institution that produces and distributes content. Its core functions are information, education, discussion, scrutiny, culture, entertainment and advertising. The fourth-estate description expresses a democratic watchdog role but creates no legal immunity.

History: printing enabled mass circulation; telegraph and industrial presses accelerated news; radio and television created simultaneous audiences; cable, satellite, internet and smartphones produced convergence. In India, remember Hicky's Bengal Gazette (1780), colonial licensing and security controls, the 1867 registration statute, the nationalist press, Article 19(1)(a), Press Commissions, working-journalist protection, the Press Council and digital transformation.

Theories: authoritarian means control by authority; libertarian means minimum prior control and a marketplace of ideas; social responsibility combines freedom with professional and public duties; Soviet-communist theory links media to collective party objectives; development theory stresses nation-building; democratic-participant theory stresses local access, diversity and citizen participation.

Current print-registration law: the Press and Registration of Periodicals Act, 2023 and Rules, 2024 have operated from 1 March 2024 and replaced the 1867 Act. A qualifying printed periodical containing public news or comments requires registration through the Press Sewa Portal. Identify the owner, publisher, printer, Specified Authority and PRGI; then explain title allotment, online application, certificate, annual statement, copies, changes, circulation verification and enforcement.

Case formula: circulation is part of expression (Romesh Thappar); prior scrutiny is constitutionally suspect (Brij Bhushan); genuine general regulation may apply (Express Newspapers); indirect price-page and newsprint restrictions may violate Article 19(1)(a) (Sakal Papers and Bennett Coleman); tax is permissible but requires sensitive scrutiny (Indian Express Newspapers); communication rights extend to broadcasting and airwaves are public property (Cricket Association of Bengal).
    `.trim(),
  },
  {
    title: "Media in the Constitutional Framework",
    shortDescription:
      "Freedom of expression, constitutional restrictions, privacy, information, press privileges and public-interest litigation.",
    overview:
      "This unit places media freedom within the Constitution of India. It studies freedom of speech and expression, reasonable restrictions, privacy and informational rights, the absence of a separate textual freedom of the press, legal privileges and responsibilities of journalists, and constitutional remedies including public-interest litigation.",
    objectives: [
      "Explain the constitutional source of media and press freedom.",
      "Apply the grounds of restriction under Article 19(2).",
      "Balance free expression with privacy, dignity and reputation.",
      "Explain the relationship between media freedom and the right to information.",
      "Evaluate constitutional remedies and media-related public-interest litigation.",
      "Distinguish institutional press freedom from personal or evidentiary privileges claimed by journalists.",
      "Apply proportionality, prior-restraint and chilling-effect principles to a media-law problem.",
    ],
    topics: [
      "Articles 19(1)(a) and 19(2)",
      "Judicial interpretation of press and media freedom",
      "Privacy, dignity, reputation and proportionality",
      "Right to information and public accountability",
      "Journalistic privilege, source protection and legal responsibility",
      "Print-media law and public-interest litigation",
    ],
    provisions: [
      "Constitution of India: Articles 14, 19, 21, 32 and 226",
      "Right to Information Act, 2005",
      "Digital Personal Data Protection Act, 2023",
    ],
    detailedContent: `
1. Constitutional position of media in India

The Constitution of India does not separately use the expression freedom of the press or freedom of media. The Supreme Court has consistently treated the freedom to publish, circulate and communicate through the press and other media as part of the freedom of speech and expression guaranteed to citizens by Article 19(1)(a).

Media organisations also conduct business and may invoke Article 19(1)(g), while equality under Article 14 and life, dignity and privacy under Article 21 frequently shape media disputes. Constitutional protection is therefore not confined to journalists. It protects the communicative process involving speakers, publishers and audiences.

Freedom of the press is not a special immunity from ordinary law. A journalist remains subject to valid laws concerning defamation, contempt, privacy, intellectual property, public order and other matters. The constitutional question is whether a restriction has lawful authority, falls within the relevant limitation clause and is reasonable and proportionate.

2. Scope of Article 19(1)(a)

Article 19(1)(a) protects the freedom to hold and communicate opinions and information through speech, writing, printing, pictures, broadcast and digital means. It includes publication, circulation, access to audiences, editorial choice, receipt of information and, in appropriate settings, the right not to speak.

The right has both individual and democratic value. It protects autonomy and self-expression and permits citizens to discuss public affairs, criticise authority and participate in self-government. The media acts as a channel through which citizens receive information necessary to exercise political choices.

The protection is available against State action. Private media concentration, platform rules and editorial employment may raise serious public-policy concerns, but a constitutional claim ordinarily requires the necessary legal connection to State action unless a statute creates enforceable duties between private parties.

3. Freedom of publication and circulation

The right to print words without the practical ability to reach readers would be ineffective. Romesh Thappar v. State of Madras recognised circulation as part of protected expression. Sakal Papers and Bennett Coleman later held that economic or administrative regulation may violate Article 19(1)(a) when its direct effect reduces pages, circulation, growth or editorial choice.

Courts examine the real operation of a measure, not only its stated label. A policy described as a commercial control can still burden speech. At the same time, generally applicable taxation, labour, competition and safety laws do not become invalid merely because a media enterprise must comply with them.

4. Prior restraint and pre-censorship

Prior restraint prevents or conditions communication before publication. Because it stops speech before the public can evaluate it, prior restraint is regarded as especially serious. Brij Bhushan v. State of Delhi invalidated an order requiring advance scrutiny of newspaper material.

Prior restraint is not identical in every medium. Cinematograph law has historically permitted prior certification of films because of the medium's perceived impact, while postponement of reporting may exceptionally protect the administration of justice. Any restraint requires clear legal authority, narrow grounds, procedural safeguards and proportionality; executive preference or fear of criticism is insufficient.

5. The eight grounds under Article 19(2)

Article 19(2) permits the State to impose reasonable restrictions by law in the interests of the sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence.

The list is exhaustive for restrictions upon Article 19(1)(a). Administrative convenience, preventing embarrassment or asserting a broad public interest cannot independently justify a speech restriction. The State must identify the applicable ground and show a constitutionally adequate relationship between the restriction and that ground.

Security of the State concerns grave threats rather than ordinary breaches of peace. Public order is narrower than general law and order and requires a sufficiently proximate connection. Decency and morality must be applied consistently with contemporary constitutional values. Defamation protects reputation, contempt protects the administration of justice, and incitement requires more than abstract advocacy or unpopular opinion.

6. Reasonableness, proximity and proportionality

A restriction must be imposed by law and must be reasonable. Vagueness is dangerous because citizens cannot know what is prohibited and officials receive excessive discretion. Overbreadth burdens protected speech together with harmful speech. A chilling effect arises when uncertain or severe liability causes lawful expression to be suppressed.

Modern constitutional review asks whether the measure pursues a legitimate objective, is rationally connected to it, uses a necessary or less restrictive means, and maintains a proper balance between the right and the public interest. The connection between expression and feared harm cannot be remote, speculative or far-fetched.

Shreya Singhal v. Union of India distinguished discussion, advocacy and incitement. It struck down section 66A of the Information Technology Act for vague and overbroad restrictions but upheld the structured blocking mechanism under section 69A with its safeguards.

7. No governmental monopoly over electronic media

In Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal, the Supreme Court held that the freedom of speech includes the right to communicate and receive information through electronic media. Airwaves are public property and must be used for public good under an independent and plural regulatory arrangement.

The judgment does not mean that spectrum is unregulated. Scarcity, technical coordination and public obligations permit licensing. The constitutional objection is to arbitrary or exclusive governmental control that prevents diversity and denies citizens access to different views.

8. Internet access and media freedom

The internet is a medium through which expression and trade may be exercised. In Anuradha Bhasin v. Union of India, the Supreme Court held that speech and business conducted through the internet receive constitutional protection and that indefinite suspension of internet services is impermissible. Restriction orders must satisfy legality, necessity and proportionality and remain open to review.

The Court did not declare a free-standing fundamental right to internet access in all circumstances. The correct formulation is that constitutionally protected freedoms exercised through the internet cannot be restricted arbitrarily. Media organisations may challenge network shutdowns when the measures impair newsgathering, publication and access to information.

9. Privacy, dignity and autonomy

Justice K.S. Puttaswamy (Retd.) v. Union of India unanimously recognised privacy as a fundamental right protected across Articles 14, 19 and 21. Privacy includes bodily and spatial privacy, decisional autonomy and informational control. Media freedom and privacy are therefore competing constitutional values, not a contest between a constitutional right and a merely private preference.

An interference with privacy requires legality, a legitimate aim and proportionality. For the media, relevant considerations include the person's public role, the subject's connection to public affairs, the method of obtaining information, consent, accuracy, vulnerability, passage of time and the degree of intrusion.

Public curiosity is not the same as public interest. Public interest concerns matters that legitimately affect collective welfare, accountability or informed civic choice. Sensational details about grief, health, sexuality, family life or children may remain private even when they attract attention.

10. Privacy and publication: the Rajagopal principles

R. Rajagopal v. State of Tamil Nadu, commonly known as the Auto Shankar case, explained the relationship between press freedom and privacy. A person may protect the privacy of family, marriage, procreation, motherhood, childbearing and education, subject to recognised limits. Unauthorised publication concerning private life may attract liability.

Matters forming part of public records may generally be reported, but judicial and statutory restrictions protecting victims and vulnerable persons continue to apply. Public officials have a narrower privacy claim regarding acts relevant to official duties, yet they do not lose all personal privacy. The decision also rejected prior governmental restraint based merely on an anticipated defamation claim.

11. Reputation, dignity and defamation

Reputation forms part of dignity under Article 21. Media freedom must therefore be balanced with the right of a person not to be harmed by false and defamatory statements. Subramanian Swamy v. Union of India upheld criminal defamation and treated reputation as a constitutionally protected interest, while requiring application consistent with statutory ingredients and defences.

Criticism of government, institutions and public officials is central to democracy. Liability does not follow merely because reporting is harsh, inconvenient or embarrassing. The legal analysis must examine the statement, reference to the claimant, publication, falsity or defence, fault where relevant, and the public-interest and fair-comment principles recognised by law.

12. Fair trial and trial by media

Open justice permits court reporting, but prejudicial publicity may threaten the presumption of innocence, witness integrity and impartial adjudication. Articles 19(1)(a) and 21 must be harmonised. Reporting an allegation as established guilt, publishing inadmissible confessions or conducting a parallel televised trial can undermine justice.

In Sahara India Real Estate Corp. Ltd. v. SEBI, the Supreme Court recognised that a court may exceptionally order temporary postponement of publication where there is a real and substantial risk of prejudice and no reasonable alternative will prevent it. Such an order must be necessary, proportionate, limited in scope and duration, and directed to protecting the administration of justice rather than insulating parties from criticism.

13. Right to know and freedom to receive information

Freedom of speech would be incomplete if citizens could not obtain information required for meaningful participation. State of Uttar Pradesh v. Raj Narain connected open government with the people's right to know public acts. S.P. Gupta v. Union of India reinforced disclosure and governmental accountability, subject to legitimate confidentiality.

The constitutional right to know is broader in principle than any single statutory procedure, but access to particular records is ordinarily worked through legislation. Courts balance transparency with privacy, security, privilege, investigation, commercial confidence and the effective functioning of institutions.

14. Right to Information Act, 2005

The Right to Information Act creates a practical regime through which Indian citizens may obtain information held by or under the control of public authorities. Section 4 requires record management and proactive disclosure. Sections 6 and 7 establish the request and response process. Ordinarily, information is supplied within thirty days; information concerning life or liberty must be supplied within forty-eight hours.

Section 8 contains exemptions, including specified national interests, contempt, legislative privilege, commercial confidence, fiduciary information, confidential foreign-government material, safety and sources, investigation and personal information. Exemptions must be applied to the actual statutory text, including public-interest and severability rules, rather than as blanket labels.

Section 22 gives the RTI Act overriding effect over inconsistent law, including the Official Secrets Act, to the extent stated. Section 24 excludes listed intelligence and security organisations subject to the statutory exceptions concerning corruption and human-rights violations. Journalists possess no exclusive RTI entitlement: the statutory right belongs to every citizen.

15. Transparency and privacy under the RTI framework

RTI and privacy are not absolute opposites. Transparency is strongest for public functions, public expenditure and institutional accountability. Privacy is strongest for personal information unrelated to public activity where disclosure would cause an unwarranted invasion and no larger public interest justifies it.

Central Public Information Officer, Supreme Court of India v. Subhash Chandra Agarwal held that the office of the Chief Justice of India is a public authority under the Act while emphasising case-specific balancing among transparency, judicial independence, confidentiality and privacy.

Media reporting based on disclosed records remains subject to other law. An RTI disclosure does not necessarily authorise sensational, misleading or privacy-invasive republication divorced from the purpose and context of the information.

16. Journalistic privilege and protection of sources

Journalists often promise confidentiality to sources because exposure may invite retaliation and deter future disclosures. Source protection supports newsgathering and the public's access to important information. Indian law, however, does not confer a universal constitutional or evidentiary privilege allowing every journalist to refuse every lawful demand.

Section 15(2) of the Press Council Act, 1978 provides that the Press Council cannot compel a newspaper, news agency, editor or journalist to disclose the source of news or information during its inquiry. That protection is specific to Press Council proceedings. A court or investigating authority is governed by the applicable constitutional, evidentiary and procedural law.

A decision compelling disclosure should consider the relevance and necessity of the information, seriousness of the proceeding, availability of alternatives, risk to the source and chilling effect on journalism. Ethical confidentiality cannot be used to conceal participation in an offence or fabricate information.

17. Media access, accreditation and personal privileges

Accreditation facilitates access to official premises and events; it is not the source of Article 19(1)(a). Government may prescribe transparent and reasonable eligibility and security conditions, but accreditation decisions cannot be arbitrary, discriminatory or a device to punish critical reporting.

Journalists do not possess a general privilege to trespass, obstruct investigation, violate valid confidentiality, disobey court orders or demand access to every place. Legislative proceedings may be reported subject to constitutional privileges and applicable law. Court reporting is protected by open justice but remains subject to in-camera orders, victim-protection statutes, contempt and postponement directions.

18. Print media, press law and institutional regulation

Print media operates within a network of laws rather than one press code. The Press and Registration of Periodicals Act, 2023 governs title and registration matters. The Press Council Act, 1978 establishes a statutory body to preserve press freedom and maintain and improve standards. Defamation, contempt, copyright, labour, election and criminal laws regulate particular conduct.

Registration does not authorise advance editorial control. The Press Council may inquire into complaints and issue findings within its statutory powers, but it is not a criminal court and does not replace constitutional remedies. Self-regulatory ethical norms may guide responsible reporting even where breach does not independently create a criminal offence.

19. Constitutional remedies and public-interest litigation

Article 32 permits the Supreme Court to enforce fundamental rights, while Article 226 gives High Courts wider power to issue writs for fundamental rights and other legal rights. A media organisation may challenge censorship, arbitrary denial of access, unlawful seizure, shutdown or disproportionate regulation. A person affected by media conduct may invoke available constitutional, civil, criminal, statutory or regulatory remedies depending on the respondent and injury.

Public-interest litigation relaxes traditional standing where affected persons cannot effectively approach the court or a serious public wrong requires adjudication. It may address media concentration, access to information, protection of children, communal reporting, accessibility or unlawful State restrictions. PIL is not a substitute for appeal, a vehicle for publicity or a means of settling private rivalry.

Courts must identify an enforceable constitutional or legal duty, hear affected parties and choose workable remedies. Judicial directions should not create an indefinite censorship code or assume continuous editorial control where legislation and expert regulation are required.

20. Applied problem and examination method

Assume a State blocks mobile internet throughout an entire region after isolated disorder, refuses to publish the order, denies accreditation to a journalist who criticised the administration and threatens prior approval of all reports. Separately, the journalist proposes to publish private medical details of an official having no connection with public duties.

The answer should separate each issue. Test the shutdown for legal authority, publication, territorial and temporal scope, necessity, proportionality and review under Anuradha Bhasin. Test accreditation under Articles 14 and 19(1)(a). Treat prior approval as prior restraint and demand a precise Article 19(2) basis. Finally, balance the proposed medical disclosure against privacy and dignity under Puttaswamy and Rajagopal; criticism of official conduct does not automatically justify exposure of unrelated intimate facts.

For a descriptive answer, begin with the constitutional source of media freedom, explain its components, list and interpret Article 19(2), discuss reasonableness and proportionality, then address privacy, reputation, RTI, source protection and remedies with leading cases. For a problem, use: identify the speaker and State action; identify the protected activity; locate the precise restriction ground; test legality, proximity and proportionality; balance competing Part III rights; and state the appropriate writ or statutory remedy.
    `.trim(),
    keyPoints: [
      "Freedom of the press and media is protected within Article 19(1)(a); it is not separately worded or absolute.",
      "Article 19(1)(a) protects publication, circulation, editorial choice and the receipt and communication of information.",
      "Article 19(2) contains an exhaustive list of constitutionally permissible grounds for restricting speech.",
      "Vague, overbroad or disproportionate restrictions create a chilling effect on lawful expression.",
      "Prior restraint is especially serious and requires clear authority, narrow necessity and procedural safeguards.",
      "Airwaves are public property, but regulation must support plural communication rather than an exclusive governmental monopoly.",
      "Constitutional freedoms exercised through the internet cannot be restricted indefinitely or without proportionality and review.",
      "Privacy is a fundamental right under Articles 14, 19 and 21; public curiosity is not equivalent to public interest.",
      "Reputation forms part of dignity, while criticism and reporting remain protected subject to valid defamation law.",
      "The RTI Act gives every citizen—not only journalists—a statutory method to seek information from public authorities.",
      "Source protection under section 15(2) of the Press Council Act is specific to Press Council inquiries and is not a universal evidentiary privilege.",
      "Articles 32 and 226 provide constitutional remedies, while PIL requires a genuine public wrong and an enforceable legal duty.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-2-article-14", title: "Equality and non-arbitrariness", provision: "Article 14, Constitution of India", description: "Prohibits arbitrary or discriminatory State treatment, including selective access, accreditation and regulatory decisions affecting media." },
      { id: "media-law-unit-2-article-19-1-a", title: "Freedom of speech and expression", provision: "Article 19(1)(a), Constitution of India", description: "Constitutional source of press and media freedom, including publication, circulation, communication and receipt of information." },
      { id: "media-law-unit-2-article-19-2", title: "Permissible speech restrictions", provision: "Article 19(2), Constitution of India", description: "Allows reasonable restrictions by law only on the specified grounds of sovereignty and integrity, State security, friendly foreign relations, public order, decency or morality, contempt, defamation and incitement." },
      { id: "media-law-unit-2-article-19-1-g", title: "Occupation, trade and business", provision: "Articles 19(1)(g) and 19(6)", description: "Protects lawful media enterprise subject to reasonable regulation, without allowing business controls to become indirect censorship." },
      { id: "media-law-unit-2-article-21", title: "Life, dignity and privacy", provision: "Article 21, Constitution of India", description: "Protects dignity, reputation, autonomy, privacy and fair-trial interests that may require balancing with media freedom." },
      { id: "media-law-unit-2-writs", title: "Constitutional remedies", provision: "Articles 32 and 226, Constitution of India", description: "Empower the Supreme Court and High Courts to grant writ remedies against unlawful censorship, shutdowns, arbitrary regulation and other public-law violations." },
      { id: "media-law-unit-2-rti-section-4", title: "Proactive disclosure", provision: "Section 4, Right to Information Act, 2005", description: "Requires public authorities to maintain records and publish prescribed institutional and decision-making information proactively." },
      { id: "media-law-unit-2-rti-process", title: "RTI application and response", provision: "Sections 6–7, Right to Information Act, 2005", description: "Creates the citizen's request procedure and response timelines, including the forty-eight-hour rule for life-or-liberty information." },
      { id: "media-law-unit-2-rti-exemptions", title: "Exemptions and severability", provision: "Sections 8–10, Right to Information Act, 2005", description: "Balances disclosure with protected interests and requires release of reasonably severable non-exempt material." },
      { id: "media-law-unit-2-rti-override", title: "Overriding effect", provision: "Section 22, Right to Information Act, 2005", description: "Gives the RTI Act overriding operation over inconsistent law to the extent specified by Parliament." },
      { id: "media-law-unit-2-source", title: "Sources before the Press Council", provision: "Section 15(2), Press Council Act, 1978", description: "Prevents the Press Council from compelling a newspaper, news agency, editor or journalist to disclose a news source during its inquiry." },
      { id: "media-law-unit-2-registration", title: "Print-media registration", provision: "Press and Registration of Periodicals Act, 2023", description: "Provides the current administrative framework for periodical titles and registration without creating general editorial censorship authority." },
    ],
    importantCases: [
      { id: "media-law-unit-2-romesh", caseName: "Romesh Thappar v. State of Madras", citation: "AIR 1950 SC 124", principle: "Circulation is an essential part of freedom of speech and press.", summary: "The Supreme Court invalidated a State order prohibiting the entry and circulation of a journal and established the constitutional importance of dissemination." },
      { id: "media-law-unit-2-brij", caseName: "Brij Bhushan v. State of Delhi", citation: "AIR 1950 SC 129", principle: "Pre-censorship of newspaper content is a serious restriction upon Article 19(1)(a).", summary: "The Court struck down an order requiring specified newspaper material to undergo prior official scrutiny." },
      { id: "media-law-unit-2-sakal", caseName: "Sakal Papers (P) Ltd. v. Union of India", citation: "AIR 1962 SC 305", principle: "Business regulation cannot be used to curtail pages and circulation protected by Article 19(1)(a).", summary: "The price-page regulation was invalidated because its direct effect burdened circulation and expression." },
      { id: "media-law-unit-2-bennett", caseName: "Bennett Coleman & Co. v. Union of India", citation: "(1972) 2 SCC 788", principle: "The direct and inevitable effect of a newsprint policy on pages, growth and circulation determines its constitutional validity.", summary: "Restrictions in the newsprint policy were set aside for impairing the practical freedom to publish and expand." },
      { id: "media-law-unit-2-raj-narain", caseName: "State of Uttar Pradesh v. Raj Narain", citation: "(1975) 4 SCC 428", principle: "Citizens have a right to know public acts, subject to legitimate claims of confidentiality.", summary: "The decision connected open government and access to information with democratic accountability." },
      { id: "media-law-unit-2-rajagopal", caseName: "R. Rajagopal v. State of Tamil Nadu", citation: "(1994) 6 SCC 632", principle: "Press freedom must coexist with privacy, while the State cannot ordinarily impose prior restraint based on anticipated defamation.", summary: "The Auto Shankar decision formulated important rules governing private life, public records and official conduct." },
      { id: "media-law-unit-2-cab", caseName: "Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal", citation: "(1995) 2 SCC 161", principle: "The right to communicate and receive information extends to electronic media, and airwaves are public property.", summary: "The Court rejected exclusive State monopoly and required broadcasting regulation to serve public good and pluralism." },
      { id: "media-law-unit-2-shreya", caseName: "Shreya Singhal v. Union of India", citation: "(2015) 5 SCC 1", principle: "Vague and overbroad online-speech restrictions violate Article 19(1)(a); discussion and advocacy differ from incitement.", summary: "Section 66A of the IT Act was struck down, while the structured section 69A blocking framework was upheld." },
      { id: "media-law-unit-2-puttaswamy", caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India", citation: "(2017) 10 SCC 1", principle: "Privacy is a fundamental right requiring legality, legitimate purpose and proportionality for interference.", summary: "A unanimous nine-judge Bench located privacy in dignity, liberty and the guarantees of Part III." },
      { id: "media-law-unit-2-subramanian", caseName: "Subramanian Swamy v. Union of India", citation: "(2016) 7 SCC 221", principle: "Reputation is an element of Article 21 dignity, and criminal defamation was upheld subject to its legal ingredients and defences.", summary: "The Court balanced free expression against the constitutional value of individual reputation." },
      { id: "media-law-unit-2-anuradha", caseName: "Anuradha Bhasin v. Union of India", citation: "(2020) 3 SCC 637", principle: "Speech and business through the internet receive constitutional protection; indefinite suspension and unreviewable restrictions are impermissible.", summary: "The Court required publication, proportionality and periodic review of telecommunications suspension orders." },
      { id: "media-law-unit-2-subhash-agarwal", caseName: "Central Public Information Officer, Supreme Court of India v. Subhash Chandra Agarwal", citation: "(2020) 5 SCC 481", principle: "The Chief Justice of India's office is a public authority under RTI, with disclosure governed by careful balancing of transparency and competing interests.", summary: "The Constitution Bench addressed judicial records, privacy, confidentiality, independence and public-interest disclosure." },
      { id: "media-law-unit-2-sahara", caseName: "Sahara India Real Estate Corp. Ltd. v. SEBI", citation: "(2012) 10 SCC 603", principle: "A narrowly tailored temporary postponement order may protect fair trial where publication creates a real and substantial risk of prejudice.", summary: "The Court framed postponement as an exceptional proportionality-based remedy balancing Articles 19(1)(a) and 21." },
    ],
    examFocus:
      "Prepare the constitutional foundation of media freedom under Articles 14, 19 and 21; publication, circulation, editorial choice, audience rights and prior restraint; all eight Article 19(2) grounds; vagueness, overbreadth, proximity, chilling effect and proportionality; broadcasting and airwaves; internet shutdown doctrine; privacy, public interest and public curiosity; reputation, defamation and fair trial; the constitutional right to know; RTI sections 4, 6, 7, 8, 10, 22 and 24; journalistic source protection under section 15(2) of the Press Council Act; accreditation and court/legislative reporting; Articles 32 and 226; PIL maintainability; and the leading principles from Romesh Thappar, Brij Bhushan, Sakal Papers, Bennett Coleman, Raj Narain, Rajagopal, Cricket Association of Bengal, Shreya Singhal, Puttaswamy, Subramanian Swamy, Anuradha Bhasin, Subhash Chandra Agarwal and Sahara India.",
    revisionNotes: `
Constitutional rule: press and media freedom is part of Article 19(1)(a), supported in appropriate cases by Articles 14, 19(1)(g) and 21. It covers communication, publication, circulation, editorial choice and receipt of information, but creates no general immunity from valid law.

Restriction test: identify one of the eight grounds in Article 19(2); demand authority of law; test proximity, reasonableness and proportionality; and check vagueness, overbreadth, procedural safeguards and chilling effect. Prior restraint requires especially strict scrutiny.

Competing rights: privacy, dignity, reputation and fair trial are constitutional interests. Public interest is not public curiosity. Apply Puttaswamy and Rajagopal to privacy, Subramanian Swamy to reputation and Sahara India to exceptional postponement of reporting.

Right to know: Raj Narain and S.P. Gupta link information with accountable government. The RTI Act gives every citizen a statutory process, subject to exemptions, severability, public-interest balancing and appeals. Journalists have no exclusive RTI status.

Sources and remedies: section 15(2) of the Press Council Act protects sources only against compulsion by the Council. Use Articles 32 and 226 against unlawful State action. PIL requires bona fide public injury and an enforceable duty; it must not become private litigation or judicially administered censorship.
    `.trim(),
  },
  {
    title: "Legal Dimensions of Media I",
    shortDescription:
      "Defamation, obscenity, national-security speech, negligence, legislative privilege, contempt, official secrets and journalist protection.",
    overview:
      "This unit examines civil and criminal liability arising from media activity. It covers defamation, obscenity, the current treatment of speech affecting sovereignty and security, negligence, legislative privilege, contempt of court, official secrets, the protection of working journalists and the role of the Press Council of India.",
    objectives: [
      "Distinguish civil and criminal defamation and their defences.",
      "Apply obscenity and harmful-publication standards.",
      "Explain legislative privilege, contempt and fair reporting.",
      "Assess official-secrets restrictions and public-interest reporting.",
      "Describe the statutory protection of working journalists and the Press Council's role.",
    ],
    topics: [
      "Criminal defamation, obscenity and sovereignty-related offences",
      "Tortious defamation, negligence and available defences",
      "Privileges of Parliament and State Legislatures",
      "Contempt of court and responsible court reporting",
      "Official secrets and access to government information",
      "Working journalists and the Press Council of India",
    ],
    provisions: [
      "Bharatiya Nyaya Sanhita, 2023",
      "Contempt of Courts Act, 1971",
      "Official Secrets Act, 1923",
      "Working Journalists and Other Newspaper Employees Act, 1955 and subsequent labour-law developments",
      "Press Council Act, 1978",
    ],
  },
  {
    title: "Legal Dimensions of Media II",
    shortDescription:
      "Copyright, broadcasting and performers' rights, national security, media trials and sting operations.",
    overview:
      "This unit studies proprietary and public-law limits on media activity. It covers copyright and neighbouring rights in broadcasts and performances, national-security concerns, the effect of prejudicial publicity on fair trial, and the legality, ethics and evidentiary implications of sting operations.",
    objectives: [
      "Explain copyright ownership, licensing, exceptions and media use.",
      "Distinguish broadcasting reproduction rights and performers' rights.",
      "Balance national security with press freedom and public interest.",
      "Evaluate trial by media against fair-trial rights.",
      "Analyse the legality and ethics of sting operations.",
    ],
    topics: [
      "Copyright in literary, artistic, musical, film and sound-recording works",
      "Broadcast reproduction rights and performers' rights",
      "Fair dealing, reporting current events and licensing",
      "Security of the nation and restricted information",
      "Trial by media, presumption of innocence and postponement orders",
      "Sting operations, privacy, entrapment, authenticity and public interest",
    ],
    provisions: [
      "Copyright Act, 1957",
      "Copyright Rules, 2013",
      "Contempt of Courts Act, 1971",
      "Indian Evidence Act, 1872 and Bharatiya Sakshya Adhiniyam, 2023 transition",
    ],
  },
  {
    title: "Self-Regulation, Ethics and Contemporary Issues",
    shortDescription:
      "Media ethics, self-regulation and legal regulation, human rights and foreign investment in print media.",
    overview:
      "This unit examines how ethical standards, industry bodies and statutory regulation interact. It studies accuracy, fairness, independence, conflicts of interest, correction and accountability; media's relationship with human rights; and the policy and legal questions surrounding foreign investment in Indian print media.",
    objectives: [
      "Explain the foundations of responsible media ethics.",
      "Compare self-regulation, co-regulation and statutory regulation.",
      "Apply human-rights principles to reporting and editorial decisions.",
      "Assess accountability mechanisms for news and entertainment media.",
      "Explain the policy framework governing foreign investment in print media.",
    ],
    topics: [
      "Accuracy, fairness, independence and conflicts of interest",
      "Privacy, dignity, vulnerable persons and reporting trauma",
      "Self-regulatory and statutory accountability models",
      "Media, democracy and human rights",
      "Foreign direct investment in news and non-news print media",
      "Corrections, complaints and public accountability",
    ],
    provisions: [
      "Press Council Act, 1978 and Norms of Journalistic Conduct",
      "News Broadcasters and Digital Association self-regulatory framework",
      "Cable Television Networks Programme Code",
      "Consolidated FDI Policy and applicable government approvals",
    ],
  },
  {
    title: "Legislative Framework for Broadcasting and Cinema",
    shortDescription:
      "Evolution of broadcasting, airwaves and government control, Prasar Bharati, cinematograph regulation and cable television networks.",
    overview:
      "This unit traces the evolution of India's broadcast sector and the constitutional treatment of airwaves as a public resource. It focuses on the Prasar Bharati framework, film certification and exhibition under cinematograph law, and regulation of cable television networks, programmes and advertisements.",
    objectives: [
      "Trace the evolution of radio, television and public broadcasting in India.",
      "Explain the public-resource doctrine governing airwaves.",
      "Describe the structure and functions of Prasar Bharati.",
      "Analyse film certification and exhibition regulation.",
      "Apply cable-network registration, Programme Code and Advertising Code requirements.",
    ],
    topics: [
      "Evolution and liberalisation of the broadcast sector",
      "Airwaves as public property and licensing control",
      "Prasar Bharati's structure, objectives and functions",
      "Film certification, classification and appeals",
      "Cable-operator registration and transmission duties",
      "Programme Code, Advertising Code and enforcement",
    ],
    provisions: [
      "Prasar Bharati (Broadcasting Corporation of India) Act, 1990",
      "Cinematograph Act, 1952, as amended",
      "Cinematograph (Certification) Rules, 2024",
      "Cable Television Networks (Regulation) Act, 1995",
      "Cable Television Networks Rules, 1994",
    ],
  },
  {
    title: "Internet and New Media",
    shortDescription:
      "Evolution and regulation of internet media, information-technology law, telecommunications and social networks.",
    overview:
      "This unit examines the internet as a distinct, interactive and transnational medium. It studies intermediary liability, blocking, content governance, cyber offences, platform responsibility, social-network regulation and the transition from the Indian Telegraph Act framework to current telecommunications legislation.",
    objectives: [
      "Explain how internet media differs from print and broadcasting.",
      "Apply the Information Technology Act to online content and intermediaries.",
      "Analyse safe-harbour conditions, takedown and blocking powers.",
      "Explain social-media duties and user protections.",
      "Identify the current telecommunications framework and its historical development.",
    ],
    topics: [
      "Evolution and characteristics of internet media",
      "Online speech, jurisdiction and platform governance",
      "Intermediary safe harbour and due diligence",
      "Blocking, takedown, investigation and cyber offences",
      "Social networks, significant intermediaries and grievance mechanisms",
      "Telecommunications regulation: historical and current framework",
    ],
    provisions: [
      "Information Technology Act, 2000",
      "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended",
      "Telecommunications Act, 2023",
      "Historical role of the Indian Telegraph Act, 1885",
    ],
  },
  {
    title: "Media, Advertising and Law",
    shortDescription:
      "Advertising concepts and ethics, indecent representation, objectionable advertisements, magic remedies and consumer protection.",
    overview:
      "This unit examines commercial communication and the legal responsibilities of advertisers, agencies, publishers, broadcasters, endorsers and platforms. It covers advertising ethics, misleading claims, surrogate and prohibited advertising, indecent representation, drugs and magic remedies, and consumer-protection enforcement.",
    objectives: [
      "Define advertising and explain its commercial and social functions.",
      "Apply ethical standards to claims, endorsements and vulnerable audiences.",
      "Explain prohibitions concerning indecent representation and objectionable advertisements.",
      "Analyse restrictions on drugs and magic-remedy claims.",
      "Apply consumer-protection law to misleading advertisements and endorsers.",
    ],
    topics: [
      "Concept, forms and functions of advertising",
      "Advertising ethics, substantiation and disclosure",
      "Indecent representation and harmful stereotypes",
      "Drugs, cures and magic-remedy advertisements",
      "Misleading advertisements, endorsements and consumer rights",
      "Sectoral codes, digital advertising and platform responsibility",
    ],
    provisions: [
      "Consumer Protection Act, 2019",
      "Guidelines for Prevention of Misleading Advertisements and Endorsements, 2022",
      "Indecent Representation of Women (Prohibition) Act, 1986",
      "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
      "Cable Television Networks Advertising Code",
    ],
  },
];

const buildDetailedContent = (unit, index) => `
Unit ${index + 1}: ${unit.title}

Chapter scope

${unit.overview}

Principal topics

${unit.topics.map((topic, topicIndex) => `${topicIndex + 1}. ${topic}`).join("\n")}

Study approach

Read the governing constitutional provision, statute, rule, code or regulatory direction together with its purpose, scope, responsible authority, prohibited conduct, available defence and remedy. Distinguish enforceable law from ethical or self-regulatory standards and identify transitions from repealed or superseded legislation.

Examination method

Begin with the governing right or regulatory objective, state the applicable rule, identify competing interests, apply proportionality or the relevant statutory test, and support the conclusion with leading decisions and current legislation.
`.trim();

export const mediaLawChapters = units.map((unit, index) =>
  createChapterModel({
    id: `${MEDIA_LAW_COURSE_ID}-unit-${index + 1}-${unit.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")}`,
    courseId: MEDIA_LAW_COURSE_ID,
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
    statutoryProvisions:
      unit.statutoryProvisions ||
      unit.provisions.map((provision, provisionIndex) => ({
        id: `media-law-unit-${index + 1}-provision-${provisionIndex + 1}`,
        title: provision,
        provision,
        description: `Core legal reading for Media Law Unit ${index + 1}.`,
      })),
    importantCases: unit.importantCases || [],
    examFocus: unit.examFocus || unit.topics.join("; "),
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
  { title: "Facets of Media Law", author: "Madhavi Goradia Divan" },
  { title: "Media, Press and Telecommunication Law", author: "Madhavi Goradia Divan", publicationYear: "2007" },
  { title: "Cyber Crimes and Law", author: "Dr. A. Verma" },
  { title: "Media Law and Right to Information", author: "Dr. S.R. Myneni" },
];

export const mediaLawBooks = recommendedBooks.map((book, index) =>
  createCourseBookModel({
    id: `${MEDIA_LAW_COURSE_ID}-book-${index + 1}`,
    courseId: MEDIA_LAW_COURSE_ID,
    title: book.title,
    author: book.author,
    publicationYear: book.publicationYear || "",
    description: "Recommended reading for the Media Law course.",
    displayOrder: index + 1,
    recommended: true,
    published: true,
  }),
);
