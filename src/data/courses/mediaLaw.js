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
      "Explain the transition from IPC sedition to section 152 of the Bharatiya Nyaya Sanhita.",
      "Analyse negligence and editorial responsibility in media publication.",
      "Apply constitutional safeguards to a multi-issue media-liability problem.",
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
    detailedContent: `
1. Legal responsibility of media

Media freedom carries legal responsibility. Publication may affect reputation, dignity, privacy, fair trial, public order, national security and the administration of justice. Liability depends upon the exact statement or conduct, the medium, the mental element, the person affected, the applicable statute and the availability of a defence.

The same report may produce different proceedings. A false allegation may lead to a civil action for damages and a criminal complaint for defamation. Publication about a pending trial may raise contempt. Acquisition of a restricted document may attract official-secrets questions. Courts must analyse each cause of action separately rather than treating media freedom or public interest as a complete answer.

2. Civil and criminal defamation

Civil defamation is principally a tort protecting reputation. It ordinarily requires a defamatory statement concerning the claimant that is published to at least one person other than the claimant. Libel traditionally refers to permanent form and slander to transient form, though Indian remedies focus on the substance, publication and injury.

Criminal defamation is now governed by section 356 of the Bharatiya Nyaya Sanhita, 2023. It covers making or publishing an imputation concerning a person with the prescribed intention, knowledge or reason to believe that the imputation will harm reputation, subject to statutory explanations and exceptions. The provision also addresses imputations concerning companies, associations, deceased persons in specified circumstances and ironic or alternative expression.

Criminal guilt is not established merely because a person feels offended. The complainant must prove the statutory ingredients, and courts must examine the imputation as a whole, its context, reference, publication, mental element and exceptions.

3. Defamatory meaning and identification

A statement is defamatory when it tends to lower a person in the estimation of right-thinking members of society, exposes the person to hatred, ridicule or contempt, or adversely affects professional or social reputation. Meaning may be literal, inferential or arise through innuendo understood by persons possessing special facts.

The claimant need not always be named if reasonable readers would identify the person. A statement about a very large or indeterminate class ordinarily gives no individual member a cause of action, while a sufficiently small and identifiable group may permit proof of personal reference.

Headlines, captions, images and edited video must be read with the complete publication. A technically accurate sentence may become misleading and defamatory through juxtaposition, omission or a sensational headline.

4. Publication, republication and digital dissemination

Publication means communication to a third person. A newspaper publisher, editor, author or broadcaster may bear responsibility according to participation and the governing law. Repeating another person's allegation can amount to a fresh publication; attribution alone is not an automatic defence.

Digital distribution complicates publication through forwarding, searchable archives, hyperlinks and platform hosting. Liability must still be tied to the defendant's legally relevant act and knowledge. Intermediary safe-harbour questions are distinct from the primary liability of the person who created or adopted the defamatory content.

5. Defences to civil defamation

Truth or justification is a complete civil defence when the substantial sting of the allegation is proved. Minor inaccuracies do not necessarily defeat the defence if the essential charge is true. Fair or honest comment protects opinion on a matter of public interest when it is recognisable as comment, based on facts that are true or privileged, and honestly held.

Absolute privilege protects limited occasions such as statements within legislative or judicial proceedings according to law. Qualified privilege protects communication made pursuant to a legal, social or moral duty to a person having a corresponding interest, but may be defeated by malice. Consent, innocent dissemination and statutory reporting protections may apply in their proper fields.

Public interest is not a substitute for proof. Responsible journalism, verification, opportunity to respond, source reliability and urgency may be relevant to fault and remedy, but the applicable Indian cause of action and precedent must be identified.

6. Criminal-defamation exceptions and procedure

The exceptions to BNS section 356 include, among other matters, imputations of truth required for public good, good-faith opinion regarding the public conduct of public servants, good-faith opinion on conduct touching a public question, substantially true reports of court proceedings, merits of decided cases and participants, merits of public performances, censure by lawful authority, good-faith accusations to authorised persons, protection of interests and good-faith caution.

Truth alone is not enough under the public-good exception to criminal defamation; public good must also be established as required by the provision. Good faith demands due care and attention. A journalist who publishes a serious allegation without reasonable verification cannot rely merely upon belief or anonymous sourcing.

Criminal defamation is generally initiated through a complaint by the aggrieved person under the procedural law, subject to special rules for specified public functionaries. Students should separate substantive ingredients under the BNS from cognizance and trial procedure under the BNSS.

7. Constitutional validity of criminal defamation

In Subramanian Swamy v. Union of India, the Supreme Court upheld criminal defamation as a reasonable restriction under Article 19(2) and treated reputation as an element of dignity under Article 21. The judgment does not remove the prosecution's burden or erase the statutory exceptions.

Political criticism, satire and investigative reporting remain protected, but media defendants must show how the words, context and defence operate. Courts should guard against criminal process being used solely to silence legitimate scrutiny, while also protecting individuals from unjustified reputational injury.

8. Obscenity under the Bharatiya Nyaya Sanhita

The BNS contains offences concerning the sale, distribution, public exhibition and circulation of obscene material, including electronic form, and enhanced protection against supplying such material to children. It also addresses obscene acts and songs in public places. The precise section and elements must be proved; moral disapproval alone is insufficient.

Obscenity is distinct from indecency and from sexual content that has literary, artistic, political, scientific or social value. Context, work as a whole, intended audience and contemporary community standards are important. Separate legislation protects children from sexual material and exploitation, and such material cannot claim ordinary expressive protection.

9. Evolution of the obscenity test

Ranjit D. Udeshi v. State of Maharashtra applied the older Hicklin approach, which focused on the tendency of isolated matter to corrupt susceptible readers. Later constitutional jurisprudence moved away from judging fragments in isolation.

In Aveek Sarkar v. State of West Bengal, the Supreme Court adopted a contemporary community-standards approach and insisted that the publication be considered as a whole and in context. Nudity by itself is not invariably obscene. The inquiry is whether the material appeals to prurient interest and lacks the relevant redeeming context under the applicable law.

10. Sovereignty-related speech and the sedition transition

Section 124A of the Indian Penal Code historically criminalised sedition. Kedar Nath Singh v. State of Bihar upheld it only through a narrow construction connecting liability with incitement to violence or tendency to create public disorder. In S.G. Vombatkere v. Union of India, the Supreme Court in 2022 placed the continued use of section 124A in abeyance while reconsideration occurred.

The IPC was repealed when the Bharatiya Nyaya Sanhita came into force on 1 July 2024. BNS section 152 now addresses acts endangering the sovereignty, unity and integrity of India through words, signs, visible or electronic communication, use of financial means or otherwise, with the mental element and conduct specified by the section.

Section 152 is not simply to be labelled sedition and mechanically equated with IPC section 124A. Its text, explanations, constitutional limits and facts must be analysed. Lawful criticism of government measures aimed at alteration by lawful means is distinct from prohibited conduct. Mere disagreement or strong criticism cannot automatically become an offence against sovereignty.

11. Negligence and duty of care in media activity

Media negligence may arise where a legally recognised duty of care is breached and foreseeable injury results. Examples can include careless identification of a protected victim, publication of dangerous instructions, negligent misstatement or failure to take reasonable care in verifying a grave factual allegation.

Not every inaccurate report creates an independent negligence action. Courts examine whether a duty exists, its scope, proximity, foreseeability, public-policy concerns, causation and legally recoverable damage. Where reputation is the substance of the injury, defamation principles should not be bypassed merely by relabelling the claim negligence.

Reasonable editorial care includes checking documents, corroborating serious allegations, preserving records, seeking a response, distinguishing fact from opinion, correcting material error and applying heightened protection to children, sexual-offence survivors and vulnerable persons.

12. Legislative privileges and media reporting

Articles 105 and 194 protect the powers, privileges and immunities of Parliament, State Legislatures, their members and committees. Speech and votes within the House receive constitutional protection. Each House may regulate its proceedings and punish breach of privilege or contempt, subject to the constitutional framework and judicial review recognised by precedent.

The media has no unlimited right to publish expunged, secret or prohibited proceedings. At the same time, reporting legislative business is central to democracy. Article 361A protects substantially true reports of proceedings of Parliament and State Legislatures, except secret sittings, subject to its conditions and without protecting malicious publication.

In M.S.M. Sharma v. Sri Krishna Sinha, the Searchlight case, the Court examined legislative privilege against publication of expunged proceedings. Raja Ram Pal v. Hon'ble Speaker, Lok Sabha later confirmed that privilege is not wholly beyond judicial review, although courts respect legislative autonomy.

13. Contempt of court: constitutional and statutory basis

The Supreme Court and High Courts are courts of record with contempt powers under Articles 129 and 215. The Contempt of Courts Act, 1971 defines and regulates civil and criminal contempt. Article 19(2) expressly recognises contempt of court as a ground for reasonable restriction.

Civil contempt concerns wilful disobedience of a judgment, decree, direction, order, writ or other process, or wilful breach of an undertaking. Criminal contempt includes publication or acts that scandalise or lower court authority, prejudice or interfere with judicial proceedings, or obstruct administration of justice in another manner.

Contempt protects justice, not the personal dignity of judges. Fair criticism of judicial acts and reasoned scrutiny of judgments are permissible. The jurisdiction must be exercised with restraint and with attention to whether there is substantial interference with the due course of justice.

14. Media defences and safeguards under contempt law

The Act protects innocent publication where statutory conditions are met, fair and accurate reporting of judicial proceedings, and fair criticism of judicial acts after a case is decided. Truth may be permitted as a defence when the court is satisfied that it is in public interest and the request is bona fide.

Section 13 restricts punishment unless the contempt substantially interferes, or tends substantially to interfere, with the due course of justice. Reporting must respect in-camera proceedings, statutory identity protections, sealing orders and lawful postponement directions.

In P.N. Duda v. P. Shiv Shanker, the Court protected fair criticism made in proper context. Sahara India Real Estate Corp. v. SEBI recognised narrowly tailored postponement orders where necessary to prevent a real and substantial risk to fair trial.

15. Trial by media and sub judice reporting

Media may report allegations, investigation and open-court proceedings, but it should not pronounce guilt, coach witnesses, publish inadmissible confessions as established fact or conduct a parallel trial. The accused's presumption of innocence and fair-trial rights under Article 21 must be balanced with Article 19(1)(a).

The mere pendency of a case does not impose a complete publication ban. The legal question is whether particular reporting creates a real risk of prejudice or interference. Courts should prefer less restrictive alternatives and use postponement only when necessary, proportionate and time-limited.

16. Official Secrets Act, 1923

The Official Secrets Act remains relevant to espionage, prohibited places, secret official codes and wrongful communication or receipt of specified official information. Section 3 deals with spying-related conduct for purposes prejudicial to State safety or interests. Section 5 governs wrongful communication, use, retention and handling of protected official information in the circumstances stated.

A document does not become punishable merely because an official stamps it secret; statutory elements and the accused's conduct and mental state must be proved. Journalists have no blanket immunity, but national-security assertions cannot replace proof.

The Right to Information Act, 2005 is crucial. Sections 8 and 24 protect specified interests, while section 8(2) permits public-interest disclosure in its terms and section 22 gives the RTI Act overriding effect over inconsistent law, including the Official Secrets Act. In Yashwant Sinha v. Central Bureau of Investigation, the Supreme Court declined to exclude documents from consideration merely because their acquisition was alleged to violate secrecy law.

17. Working journalists and the labour-code transition

The Working Journalists and Other Newspaper Employees (Conditions of Service) and Miscellaneous Provisions Act, 1955 historically provided sector-specific protections concerning service conditions, hours, leave, retrenchment and wage-fixing institutions. Express Newspapers v. Union of India upheld welfare regulation while warning that legislation cannot be used to destroy press freedom.

India's four labour codes came into force on 21 November 2025. The Occupational Safety, Health and Working Conditions Code, 2020 consolidates the 1955 working-journalists legislation and includes working journalists within its sectoral framework. Wage, industrial-relations and social-security questions must now be read with the Code on Wages, 2019, Industrial Relations Code, 2020 and Code on Social Security, 2020, together with applicable rules and transition provisions.

Journalistic independence does not erase the employment relationship. Appointment terms, wages, safety, working hours, retrenchment, social security and dispute resolution arise under labour law, while editorial freedom and source confidentiality present related but distinct questions.

18. Press Council of India: structure and purpose

The Press Council Act, 1978 establishes the Press Council to preserve the freedom of the press and maintain and improve the standards of newspapers and news agencies. Its composition brings together a Chairperson and representatives of newspapers, news agencies, journalism and specified public institutions according to the Act.

Under section 13, the Council may help newspapers maintain independence, build standards and a code of conduct, promote public taste and responsibility, review developments affecting news dissemination and perform related statutory functions. Its Norms of Journalistic Conduct guide accuracy, fairness, privacy, communal reporting, paid news and other ethical questions.

19. Press Council inquiries, powers and limits

Under section 14, the Council may warn, admonish or censure a newspaper, news agency, editor or journalist, or disapprove conduct, after inquiry and an opportunity of hearing. It may also address interference with press freedom within its jurisdiction.

Section 15 gives specified civil-court powers for inquiry. However, the Council cannot compel disclosure of a journalist's source under section 15(2). Its decisions are authoritative within the statutory scheme, but it does not award ordinary civil damages or impose criminal punishment. Television and purely digital publishers do not automatically fall within its print-focused jurisdiction merely because they perform journalism.

20. Applied problem and examination method

Assume a newspaper publishes an unverified allegation that a businessperson financed terrorism, reproduces a leaked restricted document, declares an arrested suspect guilty, reveals an expunged legislative statement and refuses to answer a Press Council complaint. The editor claims that Article 19(1)(a) protects every part of the publication.

Analyse each issue separately: BNS section 356 and defamation exceptions; BNS section 152 only if its precise sovereignty-related ingredients are met; Official Secrets Act sections 3 or 5 and the RTI relationship; contempt and fair-trial risk; Articles 105, 194 and 361A for legislative reporting; and sections 13–15 of the Press Council Act. Article 19(1)(a) remains central, but each restriction must be traced to law and Article 19(2), with proof, defences and proportionality considered independently.

For an examination answer, use the sequence: identify the medium and statement; identify the protected interest and claimant; state the exact constitutional or statutory rule; establish every ingredient; examine truth, good faith, privilege, public interest and other defences; distinguish civil, criminal, contempt, privilege and regulatory remedies; and conclude with a proportionate outcome.
    `.trim(),
    keyPoints: [
      "A single publication may raise distinct civil, criminal, contempt, privilege, secrecy and regulatory issues; each requires separate analysis.",
      "Civil defamation protects reputation through tort remedies, while criminal defamation is governed by BNS section 356 and its explanations and exceptions.",
      "Truth is a civil defence, but the criminal exception also requires public good; good faith demands due care and attention.",
      "Republication can create fresh responsibility, and attribution alone is not an automatic defence.",
      "Obscenity is assessed contextually under contemporary community standards; nudity alone is not invariably obscene.",
      "IPC section 124A is historical after 1 July 2024; current cases must apply the distinct text and ingredients of BNS section 152.",
      "Media negligence requires duty, breach, causation and recoverable damage and cannot automatically bypass defamation safeguards.",
      "Articles 105 and 194 protect legislative privilege, while Article 361A conditionally protects substantially true reports of proceedings.",
      "Contempt protects the administration of justice; fair reporting, fair criticism and qualified truth protections remain important.",
      "Official Secrets Act liability requires proof of statutory elements; RTI sections 8(2) and 22 affect secrecy claims.",
      "Working-journalist protection must now be read through the labour codes effective from 21 November 2025 and applicable transition rules.",
      "The Press Council may inquire, warn, admonish or censure but does not function as a criminal court or ordinary damages tribunal.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-3-constitution-speech", title: "Speech and permissible restrictions", provision: "Articles 19(1)(a) and 19(2)", description: "Protects media expression while permitting reasonable restrictions concerning defamation, contempt, security, public order, decency and other listed grounds." },
      { id: "media-law-unit-3-bns-defamation", title: "Criminal defamation", provision: "Section 356, Bharatiya Nyaya Sanhita, 2023", description: "Defines criminal defamation and supplies explanations, exceptions and punishment within the current substantive criminal law." },
      { id: "media-law-unit-3-bns-obscenity", title: "Obscene material and public acts", provision: "Bharatiya Nyaya Sanhita, 2023", description: "Regulates obscene publications and electronic material, supply to children, and obscene acts or songs in public places." },
      { id: "media-law-unit-3-bns-sovereignty", title: "Acts endangering sovereignty, unity and integrity", provision: "Section 152, Bharatiya Nyaya Sanhita, 2023", description: "Creates the present sovereignty-related offence; it must be applied through its own text rather than mechanically reproducing repealed IPC section 124A." },
      { id: "media-law-unit-3-legislative-privilege", title: "Legislative privileges", provision: "Articles 105 and 194, Constitution of India", description: "Protects speech, votes and institutional privileges of Parliament and State Legislatures within the constitutional framework." },
      { id: "media-law-unit-3-legislative-reporting", title: "Reporting legislative proceedings", provision: "Article 361A, Constitution of India", description: "Conditionally protects publication of substantially true reports of legislative proceedings, excluding secret sittings and malicious publication." },
      { id: "media-law-unit-3-contempt-powers", title: "Constitutional contempt powers", provision: "Articles 129 and 215, Constitution of India", description: "Recognises the Supreme Court and High Courts as courts of record with power to punish contempt." },
      { id: "media-law-unit-3-contempt-definitions", title: "Civil and criminal contempt", provision: "Sections 2, 3, 4, 5 and 13, Contempt of Courts Act, 1971", description: "Defines contempt and protects innocent publication, fair reports, fair criticism and the substantial-interference threshold." },
      { id: "media-law-unit-3-osa", title: "Official information and prohibited places", provision: "Sections 3 and 5, Official Secrets Act, 1923", description: "Addresses spying-related conduct and wrongful communication, receipt, use or retention of specified official information." },
      { id: "media-law-unit-3-rti", title: "Public-interest disclosure and override", provision: "Sections 8(2) and 22, Right to Information Act, 2005", description: "Provides public-interest balancing and overriding effect relevant to claims under the Official Secrets Act." },
      { id: "media-law-unit-3-journalists", title: "Working-journalist protections", provision: "Occupational Safety, Health and Working Conditions Code, 2020 and connected labour codes", description: "Current labour-code framework governing working conditions, wages, industrial relations and social security after commencement on 21 November 2025." },
      { id: "media-law-unit-3-pci-object", title: "Press Council object and functions", provision: "Sections 13–14, Press Council Act, 1978", description: "Directs the Council to preserve press freedom, improve standards and inquire into specified misconduct or interference." },
      { id: "media-law-unit-3-pci-powers", title: "Press Council inquiry powers", provision: "Section 15, Press Council Act, 1978", description: "Confers inquiry powers while preventing the Council from compelling disclosure of a newspaper or journalist's source." },
    ],
    importantCases: [
      { id: "media-law-unit-3-subramanian", caseName: "Subramanian Swamy v. Union of India", citation: "(2016) 7 SCC 221", principle: "Criminal defamation is a constitutionally permissible protection of reputation under Article 21, subject to statutory ingredients and exceptions.", summary: "The Supreme Court upheld the predecessor criminal-defamation provisions and balanced speech with dignity and reputation." },
      { id: "media-law-unit-3-rajagopal", caseName: "R. Rajagopal v. State of Tamil Nadu", citation: "(1994) 6 SCC 632", principle: "Press freedom coexists with privacy and defamation law, and anticipated defamation does not ordinarily justify prior restraint.", summary: "The Auto Shankar case addressed publication about private life, public records and conduct of public officials." },
      { id: "media-law-unit-3-ranjit-udeshi", caseName: "Ranjit D. Udeshi v. State of Maharashtra", citation: "AIR 1965 SC 881", principle: "The Court historically applied the Hicklin obscenity approach while recognising obscenity as a permitted restriction.", summary: "The prosecution concerning Lady Chatterley's Lover became the starting point for India's judicial obscenity doctrine." },
      { id: "media-law-unit-3-aveek", caseName: "Aveek Sarkar v. State of West Bengal", citation: "(2014) 4 SCC 257", principle: "Obscenity must be judged through contemporary community standards by considering the work as a whole and in context.", summary: "The Court held that nudity alone is not invariably obscene and rejected isolated, context-free assessment." },
      { id: "media-law-unit-3-kedar-nath", caseName: "Kedar Nath Singh v. State of Bihar", citation: "AIR 1962 SC 955", principle: "The repealed IPC sedition offence was historically confined to incitement to violence or tendency to create public disorder.", summary: "The case remains important constitutional history but must not be presented as the text of current BNS section 152." },
      { id: "media-law-unit-3-vombatkere", caseName: "S.G. Vombatkere v. Union of India", citation: "Order dated 11 May 2022", principle: "The Supreme Court placed the use of IPC section 124A in abeyance pending governmental reconsideration.", summary: "The interim order marked the final major judicial stage before repeal of the IPC and commencement of the BNS." },
      { id: "media-law-unit-3-searchlight", caseName: "M.S.M. Sharma v. Sri Krishna Sinha", citation: "AIR 1959 SC 395", principle: "Publication of expunged legislative proceedings may engage the constitutional privileges of the House.", summary: "The Searchlight litigation examined the relationship between press reporting and legislative privilege." },
      { id: "media-law-unit-3-raja-ram-pal", caseName: "Raja Ram Pal v. Hon'ble Speaker, Lok Sabha", citation: "(2007) 3 SCC 184", principle: "Legislative privilege is constitutionally significant but not wholly immune from judicial review.", summary: "The Constitution Bench reviewed parliamentary expulsion and explained institutional autonomy and constitutional limits." },
      { id: "media-law-unit-3-pn-duda", caseName: "P.N. Duda v. P. Shiv Shanker", citation: "(1988) 3 SCC 167", principle: "Fair and contextual criticism of the judiciary does not automatically amount to criminal contempt.", summary: "The Court stressed tolerance of criticism while protecting the administration of justice from substantial interference." },
      { id: "media-law-unit-3-sahara", caseName: "Sahara India Real Estate Corp. Ltd. v. SEBI", citation: "(2012) 10 SCC 603", principle: "A temporary and narrowly tailored postponement order may protect fair trial against a real and substantial risk of prejudicial publicity.", summary: "The Court balanced free reporting with the administration of justice through necessity and proportionality." },
      { id: "media-law-unit-3-yashwant-sinha", caseName: "Yashwant Sinha v. Central Bureau of Investigation", citation: "(2020) 2 SCC 338", principle: "Allegations concerning unauthorised acquisition or official secrecy do not by themselves make relevant documents inadmissible from judicial consideration.", summary: "In the Rafale review proceedings, the Court rejected the preliminary objection seeking exclusion of published documents." },
      { id: "media-law-unit-3-express-newspapers", caseName: "Express Newspapers (Private) Ltd. v. Union of India", citation: "AIR 1958 SC 578", principle: "Legitimate labour welfare laws may govern newspaper establishments, but regulation cannot be designed to suppress press freedom.", summary: "The Court upheld substantial working-journalist protections while preserving constitutional scrutiny of hostile burdens." },
    ],
    examFocus:
      "Prepare civil-defamation elements and defences; BNS section 356 explanations, exceptions and good faith; publication and republication; obscenity under the BNS and the transition from Hicklin to contemporary community standards; historical IPC section 124A, Kedar Nath and S.G. Vombatkere, contrasted with current BNS section 152; negligence and editorial duty; Articles 105, 194 and 361A; Articles 129 and 215 and Contempt Act sections 2–5 and 13; trial by media; Official Secrets Act sections 3 and 5 with RTI sections 8(2) and 22; the labour-code transition for working journalists effective 21 November 2025; Press Council Act sections 13–15; and the principles in Subramanian Swamy, Rajagopal, Ranjit Udeshi, Aveek Sarkar, Kedar Nath, S.G. Vombatkere, M.S.M. Sharma, Raja Ram Pal, P.N. Duda, Sahara India, Yashwant Sinha and Express Newspapers.",
    revisionNotes: `
Defamation: identify the imputation, claimant, defamatory meaning, publication and fault. Civil defences include substantial truth, honest comment and privilege. For BNS section 356, apply every ingredient and exception; truth must also be for public good where the exception so requires, and good faith requires due care.

Obscenity and sovereignty: judge alleged obscenity as a whole and in context under contemporary standards. Treat IPC section 124A as historical after 1 July 2024; analyse current BNS section 152 through its own words, mental element and constitutionally required proximity to prohibited harm.

Institutions: Articles 105 and 194 govern legislative privilege; Article 361A conditionally protects substantially true reports. Articles 129 and 215 and the Contempt Act protect justice while preserving fair reports and criticism. Trial by media requires balancing Article 19(1)(a) with fair trial under Article 21.

Secrets, labour and standards: apply Official Secrets Act sections 3 and 5 with RTI sections 8(2) and 22. Apply the labour codes and transition rules to working journalists from 21 November 2025. The Press Council protects press freedom and standards and can warn, admonish or censure, but it cannot award civil damages or impose criminal punishment.
    `.trim(),
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
      "Apply fair dealing and current-events reporting exceptions to media use.",
      "Explain remedies for infringement and technological circumvention.",
      "Assess the authenticity and admissibility of recorded sting material.",
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
    detailedContent: `
1. Copyright and media activity

Copyright protects legally recognised expression rather than ideas, facts, news events or information in the abstract. Media organisations constantly create and use literary works, photographs, graphics, music, sound recordings, films, broadcasts, databases and digital content. A report may therefore involve several overlapping rights owned by different persons.

The Copyright Act, 1957 is the principal Indian statute. Copyright generally arises automatically when an eligible original work is created; registration is useful evidence but is not ordinarily a condition for subsistence. A media lawyer must identify the protected work, author, first owner, term, allegedly restricted act, licence or exception, and available remedy.

2. Categories of protected works

Section 13 recognises copyright in original literary, dramatic, musical and artistic works, cinematograph films and sound recordings, subject to the Act. A newspaper article is a literary work; a photograph is an artistic work; recorded music may involve musical and literary works as well as a separate sound recording; an audiovisual programme may be a film incorporating several underlying works.

Originality does not require novelty like patent law. Eastern Book Company v. D.B. Modak requires skill and judgment with a minimum degree of creativity rather than purely mechanical labour. Copyright does not prevent independent creation of a similar idea.

3. Meaning of copyright and restricted acts

Section 14 defines copyright as a bundle of exclusive rights varying by category of work. Depending upon the work, it may include reproduction, issuing copies, public performance or communication, adaptation, translation, making a film or sound recording and commercial rental.

Digital copying can occur through uploading, downloading, streaming copies, server storage and platform distribution. The exact statutory act must be identified. Ownership of a physical copy does not transfer copyright, and ownership of copyright in a film does not erase separate rights in underlying music, lyrics, screenplay or performance.

4. Authorship and first ownership

Authorship varies by work: the author of a literary work is ordinarily its writer, the photographer is author of a photograph, the producer is author of a cinematograph film or sound recording, and the person who causes a computer-generated work to be created is treated according to the statutory definition.

Section 17 states the general rule of first ownership and its exceptions. Employment, commissioning, newspaper publication and contractual arrangements may alter ownership. In the newspaper setting, the proprietor's first ownership can be limited to the purpose and scope specified by the statute, leaving other rights with the author unless agreed otherwise.

Contracts should specify territory, duration, media, language, exclusivity, archival use, syndication and digital exploitation. Credit or payment alone does not necessarily establish a complete assignment.

5. Assignment and licensing

Sections 18 and 19 govern assignment. A valid assignment must be in writing signed by the assignor and identify the work, rights, duration and territorial extent, with royalty and consideration terms as applicable. Statutory defaults may operate when duration or territory is omitted.

Section 30 permits licensing by the copyright owner or authorised agent in writing. Exclusive and non-exclusive licences have different consequences. Media organisations commonly require synchronisation, mechanical, public-performance, communication-to-public and digital-platform permissions depending on use.

Sections 31 and following provide compulsory or statutory mechanisms in defined circumstances. Section 31D concerns statutory licensing by broadcasting organisations under its text and rules; it should not be assumed to create an unrestricted licence for every internet or on-demand service.

6. Fair dealing and reporting current events

Section 52 declares specified acts not to be infringement. Fair dealing with certain works for private or personal use including research, criticism or review, and reporting current events and current affairs may be protected under the statutory language. Reporting may include reporting a lecture delivered in public.

Fair dealing is fact-sensitive. Courts consider purpose, amount and substantiality, market effect, nature of the work, necessity and fairness. The exception does not authorise copying an entire commercially valuable work merely because it accompanies news. Attribution is ethically important and may satisfy moral-right or statutory conditions, but attribution alone does not cure excessive copying.

Current-events reporting protects the communicative purpose, not appropriation of entertainment. A short clip genuinely necessary to report and analyse an event differs from rebroadcasting the event as a substitute for the licensed service.

7. Idea-expression distinction and substantial similarity

Copyright does not protect a general theme, historical fact, news fact, method or stock situation. It protects the author's particular expression. R.G. Anand v. Deluxe Films held that infringement depends upon substantial copying of protected expression, assessed through the overall impression on a reasonable viewer or reader.

Media defendants should separate facts from selection, arrangement, language, footage, graphics and other expression. Rewriting copied material superficially may still infringe; independently researching the same event and producing original expression ordinarily will not.

8. Moral rights and attribution

Section 57 protects the author's special rights to claim authorship and restrain or claim damages for specified distortion, mutilation, modification or other acts prejudicial to honour or reputation, subject to the Act. These rights may survive assignment of economic copyright.

Editors necessarily revise material, but contracts and editorial practices should address attribution and integrity. Misleading alteration of a photograph, quotation or documentary work may create copyright, moral-right, defamation and ethical issues simultaneously.

9. Broadcast reproduction right

Section 37 creates a broadcast reproduction right separate from copyright in the works carried in the broadcast. It generally subsists for twenty-five years from the beginning of the calendar year following the year of broadcast. Without licence and subject to exceptions, rebroadcasting, causing the broadcast to be heard or seen by paying audiences, making sound or visual recordings, reproducing such recordings or commercial dealing may infringe.

A broadcaster's right does not automatically make it owner of every underlying work. Conversely, permission from an underlying copyright owner does not necessarily authorise capture and rebroadcast of another broadcaster's signal. Rights clearance must examine both layers.

10. Performers' rights

Section 38 recognises performers' rights, generally lasting fifty years from the beginning of the calendar year following the performance. Section 38A gives performers exclusive rights in relation to fixation, reproduction, distribution, communication and commercial rental as provided, subject to consent and statutory conditions.

Section 38B protects performers' moral rights to be identified and to restrain or claim damages for distortion, mutilation or modification prejudicial to reputation, subject to the statutory explanation concerning normal editing and technical use. Section 39 supplies acts that do not infringe broadcast or performers' rights, and section 39A applies specified copyright provisions.

Consent to record a performance is not always consent to every later commercial exploitation. Contracts must address platform, term, territory, promotion, editing, royalties and reuse.

11. Infringement and intermediary responsibility

Section 51 defines infringement through unauthorised exercise of exclusive rights and specified dealings with infringing copies. Primary liability must be distinguished from authorising infringement and from intermediary liability under the Information Technology Act.

Super Cassettes Industries v. MySpace examined the interaction between copyright enforcement and intermediary safe harbour. A platform is not automatically liable for every user upload merely because infringement exists, but statutory knowledge, specific notice, participation and compliance duties matter.

Automated filters can reduce infringement but may also suppress licensed use, criticism, parody and fair dealing. A lawful system needs sufficiently specific notices, counter-process, record preservation and human review for disputed uses.

12. Civil, criminal and technological remedies

Civil remedies include injunction, damages or account of profits, delivery up and other relief under sections 55 and following. Interim injunctions require the usual judicial considerations, including prima facie case, balance of convenience and irreparable injury. Courts may frame dynamic relief against mirror sites where legally justified.

The Act also creates criminal offences for knowing infringement and related conduct. Sections 65A and 65B address circumvention of effective technological measures and removal or alteration of rights-management information in specified circumstances. Criminal law should not be used to convert a genuine ownership or licensing dispute into coercion without the required mental element.

13. Film piracy and the Cinematograph Act

The Cinematograph (Amendment) Act, 2023 inserted sections 6AA and 6AB to prohibit unauthorised recording and exhibition-related transmission of films in licensed places and unauthorised exhibition for profit, subject to the statutory wording and copyright exceptions. Section 7 provides consequences.

These provisions supplement rather than replace copyright law. A cinema recording may engage the film producer's copyright, technological measures, criminal copyright provisions and the Cinematograph Act. News reporting does not justify camcording or distributing a substantial film.

14. National security and media freedom

Article 19(2) permits reasonable restrictions in the interests of the sovereignty and integrity of India and security of the State. Public order, incitement and other grounds may also arise. The Official Secrets Act, 1923, BNS section 152, the Unlawful Activities (Prevention) Act, telecommunications interception law and lawful blocking provisions operate in distinct fields.

Security of the State is not synonymous with embarrassment to government. Authorities must identify legal power and statutory elements, and restrictions require proximity and proportionality. Journalists possess no general right to steal protected documents, trespass into defence installations or disclose operational information that creates legally cognisable harm.

At the same time, public-interest reporting on procurement, preparedness, corruption or rights violations cannot be prohibited merely by attaching a security label. In Yashwant Sinha v. CBI, the Supreme Court refused to exclude published documents from judicial consideration merely because official secrecy was asserted.

15. Surveillance, interception and confidential newsgathering

Newsgathering may involve confidential communications and source relationships. Telephone interception and surveillance interfere with privacy and may chill journalism. People's Union for Civil Liberties v. Union of India required procedural safeguards for telephone tapping under the then Telegraph Act framework.

After Justice K.S. Puttaswamy, surveillance must satisfy legality, legitimate State aim, necessity, proportionality and procedural safeguards. A journalist has no universal exemption from lawful investigation, but indiscriminate or retaliatory surveillance directed at sources and reporting raises Articles 14, 19 and 21 concerns.

16. Trial by media

Trial by media occurs when publicity assumes guilt, evaluates evidence outside court, pressures participants or presents a parallel verdict. It can harm the presumption of innocence, witness reliability, victim dignity and fair adjudication under Article 21.

Open justice and public reporting remain essential. The mere pendency of proceedings is not a complete publication ban. Reporting should distinguish allegation, charge, evidence, judicial finding and final conviction; avoid publishing protected identities, inadmissible confessions or material covered by lawful orders; and correct significant error.

Manu Sharma v. State (NCT of Delhi) warned that media coverage must not prejudice a criminal trial. Sahara India Real Estate Corp. v. SEBI permits an exceptional, temporary postponement order only where necessary and proportionate to prevent a real and substantial risk to justice.

17. Meaning and purposes of a sting operation

A sting operation is a planned covert investigation in which a reporter or collaborator records conduct or communications, often by concealing identity or using a hidden device. It may document corruption, exploitation, unlawful trade or abuse that would otherwise remain concealed.

Covert methods are intrusive and should be exceptional. A responsible decision considers seriousness of the suspected wrongdoing, strength of preliminary information, availability of less intrusive means, editorial authorisation, minimisation of collateral harm, safety, accuracy and the public interest in disclosure.

Stings must be distinguished from ordinary observation and from entrapment. Recording a willing participant's existing corrupt demand differs from manufacturing an offence by pressure, inducement or selective editing. Public interest is not equivalent to audience curiosity or commercial sensationalism.

18. Sting operations, privacy and legality

Covert recording may affect privacy, trespass, confidentiality, data protection, criminal law and broadcasting or journalistic codes. The location and expectation of privacy matter. Recording intimate conduct in a private home requires much stronger justification than documenting an official demand made in an office.

Raja Ram Pal v. Hon'ble Speaker, Lok Sabha arose from the cash-for-query sting and confirmed that recorded investigative material may trigger institutional proceedings, while those proceedings remain constitutionally reviewable. In Aniruddha Bahal v. State, the Delhi High Court recognised the public-interest character of a journalist's operation exposing willingness to launder money and rejected mechanical prosecution of the reporter.

These decisions do not grant a universal sting-operation licence. Legality turns on the method, intent, statutory offence, authenticity, editing and public-interest connection.

19. Sting evidence and the Bharatiya Sakshya Adhiniyam

Audio, video, messages and device records are documents and electronic or digital records under the Bharatiya Sakshya Adhiniyam, 2023. Sections 61 to 63 govern the legal effect and proof of electronic records, including the statutory certificate route where applicable.

Admissibility does not establish truth by itself. The proponent should prove source, device, custody, integrity, identity of speakers, continuity and absence of manipulation. Original files, metadata, hash values, contemporaneous notes and a documented chain of custody strengthen reliability. Selective excerpts should be compared with the complete recording.

In R.K. Anand v. Registrar, Delhi High Court, the Supreme Court examined a television sting concerning interference with a criminal trial and relied on the material after detailed scrutiny. The case shows both the public value of a genuine sting and the need for fairness, authentication and judicial evaluation.

20. Applied problem and examination method

Assume a digital news channel copies three minutes from a competitor's exclusive sports broadcast, adds a brief headline, secretly records an official accepting money, heavily edits the recording, publishes a protected witness's identity and declares an accused guilty. It claims fair dealing and public interest for everything.

Separate the issues. Identify copyright in the underlying footage and the section 37 broadcast reproduction right; test the amount, purpose, necessity and market effect under section 52; analyse consent and performers' rights if relevant; test the sting method under privacy, public interest and applicable offences; authenticate the full recording under BSA sections 61–63; and address identity protection, contempt and fair trial. Public interest may support the corruption disclosure but cannot automatically legalise excessive footage appropriation, deceptive editing or prejudicial publication.

For an examination answer, use this order: identify each work and neighbouring right; determine author and owner; identify the restricted act; examine assignment or licence; apply fair dealing or another exception; state term and remedies; then separately analyse security, privacy, fair trial, sting legality and electronic proof. Never merge copyright ownership, broadcast reproduction right and performers' rights into one undifferentiated right.
    `.trim(),
    keyPoints: [
      "Copyright protects original expression, not facts, ideas or news events in the abstract.",
      "A media product may contain separate literary, artistic, musical, film, sound-recording, broadcast and performers' rights.",
      "Sections 18–19 govern assignment, while section 30 permits written licences by the owner or authorised agent.",
      "Fair dealing for criticism, review and current-events reporting is purpose- and context-specific, not a blanket news exemption.",
      "Section 37 gives broadcasters a separate twenty-five-year broadcast reproduction right.",
      "Sections 38, 38A and 38B protect performers' economic and moral interests, generally for fifty years.",
      "Underlying copyright permission does not automatically authorise copying another broadcaster's signal, and vice versa.",
      "Sections 65A and 65B protect technological measures and rights-management information subject to statutory conditions.",
      "The Cinematograph Act's anti-piracy provisions supplement rather than replace the Copyright Act.",
      "National-security restriction requires precise legal authority and cannot rest solely on official embarrassment or labelling.",
      "Trial by media must be distinguished from fair and accurate open-court reporting.",
      "A legitimate sting requires serious public interest, necessity, proportional methods, accurate editing and protection against collateral harm.",
      "Electronic sting material must be authenticated under the Bharatiya Sakshya Adhiniyam; admissibility alone does not prove truth.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-4-copyright-works", title: "Protected works", provision: "Sections 13–14, Copyright Act, 1957", description: "Identifies protected categories and the exclusive-right bundle applicable to each category of work." },
      { id: "media-law-unit-4-ownership", title: "First ownership", provision: "Section 17, Copyright Act, 1957", description: "States the general first-owner rule and statutory exceptions relevant to employment, commissions and newspaper publication." },
      { id: "media-law-unit-4-assignment", title: "Assignment and licensing", provision: "Sections 18–19 and 30, Copyright Act, 1957", description: "Governs written assignment and licensing of specified rights, works, duration, territory and consideration." },
      { id: "media-law-unit-4-broadcast", title: "Broadcast reproduction right", provision: "Section 37, Copyright Act, 1957", description: "Creates a distinct neighbouring right in broadcasts, generally lasting twenty-five years from the relevant following calendar year." },
      { id: "media-law-unit-4-performer", title: "Performers' economic and moral rights", provision: "Sections 38, 38A and 38B, Copyright Act, 1957", description: "Protects fixation and exploitation of performances, royalties where applicable, attribution and integrity." },
      { id: "media-law-unit-4-neighbouring-exceptions", title: "Exceptions to neighbouring rights", provision: "Sections 39 and 39A, Copyright Act, 1957", description: "Specifies permitted acts and applies identified copyright provisions to broadcast and performers' rights." },
      { id: "media-law-unit-4-fair-dealing", title: "Acts not constituting infringement", provision: "Section 52, Copyright Act, 1957", description: "Includes specified fair-dealing, current-events, judicial and other exceptions subject to their exact conditions." },
      { id: "media-law-unit-4-remedies", title: "Infringement and remedies", provision: "Sections 51, 55 and 63, Copyright Act, 1957", description: "Defines infringement and provides civil and criminal consequences under distinct requirements." },
      { id: "media-law-unit-4-technology", title: "Digital protection measures", provision: "Sections 65A–65B, Copyright Act, 1957", description: "Addresses circumvention of technological measures and alteration or removal of rights-management information." },
      { id: "media-law-unit-4-film-piracy", title: "Unauthorised film recording and exhibition", provision: "Sections 6AA, 6AB and 7, Cinematograph Act, 1952", description: "Creates cinema-specific anti-piracy prohibitions and consequences alongside copyright law." },
      { id: "media-law-unit-4-security", title: "National-security restrictions", provision: "Article 19(2); Official Secrets Act, 1923; BNS section 152", description: "Requires each restriction to be analysed under its precise constitutional ground and statutory ingredients." },
      { id: "media-law-unit-4-fair-trial", title: "Contempt and fair trial", provision: "Articles 19(1)(a) and 21; Contempt of Courts Act, 1971", description: "Balances open reporting with presumption of innocence and protection of the administration of justice." },
      { id: "media-law-unit-4-electronic-evidence", title: "Proof of electronic records", provision: "Sections 61–63, Bharatiya Sakshya Adhiniyam, 2023", description: "Governs the legal effect, admissibility and certificate-based proof of electronic or digital records." },
    ],
    importantCases: [
      { id: "media-law-unit-4-rg-anand", caseName: "R.G. Anand v. Deluxe Films", citation: "(1978) 4 SCC 118", principle: "Copyright protects expression rather than ideas; infringement requires substantial copying of protected expression.", summary: "The Court formulated the idea-expression distinction and the overall-impression approach to substantial similarity." },
      { id: "media-law-unit-4-iprs", caseName: "Indian Performing Right Society Ltd. v. Eastern India Motion Pictures Association", citation: "(1977) 2 SCC 820", principle: "Film exploitation may involve distinct rights in incorporated underlying works, subject to statutory ownership and contracts.", summary: "The decision is foundational but must be read with the Copyright (Amendment) Act, 2012 and current royalty protections." },
      { id: "media-law-unit-4-ebc", caseName: "Eastern Book Company v. D.B. Modak", citation: "(2008) 1 SCC 1", principle: "Originality requires skill and judgment with a minimum degree of creativity, not merely mechanical labour.", summary: "The Court applied the originality standard to edited judicial decisions and distinguished public-domain judgments from original editorial inputs." },
      { id: "media-law-unit-4-entertainment-network", caseName: "Entertainment Network (India) Ltd. v. Super Cassette Industries Ltd.", citation: "(2008) 13 SCC 30", principle: "Compulsory licensing affects proprietary rights and must follow the statutory conditions and a balanced, reasoned process.", summary: "The Court examined radio broadcasting licences and the relationship between public access, remuneration and copyright ownership." },
      { id: "media-law-unit-4-myspace", caseName: "Super Cassettes Industries Ltd. v. MySpace Inc.", citation: "2016 SCC OnLine Del 6382", principle: "Online copyright liability must be reconciled with intermediary safe harbour and sufficiently specific knowledge requirements.", summary: "The Delhi High Court examined user uploads, notice, filtering and the limits of imposing general monitoring obligations." },
      { id: "media-law-unit-4-wynk", caseName: "Tips Industries Ltd. v. Wynk Music Ltd.", citation: "2019 SCC OnLine Bom 13087", principle: "Section 31D statutory broadcasting licence does not automatically extend to every interactive on-demand internet service.", summary: "The Bombay High Court distinguished traditional broadcasting from user-controlled streaming downloads and on-demand access." },
      { id: "media-law-unit-4-yashwant-sinha", caseName: "Yashwant Sinha v. Central Bureau of Investigation", citation: "(2020) 2 SCC 338", principle: "A secrecy allegation does not by itself exclude published documents from judicial consideration.", summary: "The Supreme Court rejected preliminary objections to considering documents published in connection with the Rafale review proceedings." },
      { id: "media-law-unit-4-pucl", caseName: "People's Union for Civil Liberties v. Union of India", citation: "(1997) 1 SCC 301", principle: "Telephone interception invades privacy and requires lawful authority, necessity and procedural safeguards.", summary: "The Court laid down safeguards against arbitrary tapping, principles later reinforced by constitutional privacy doctrine." },
      { id: "media-law-unit-4-manu-sharma", caseName: "Manu Sharma v. State (NCT of Delhi)", citation: "(2010) 6 SCC 1", principle: "Media reporting must not become a parallel adjudication that prejudices criminal proceedings.", summary: "The Court discussed the dangers of trial by media while deciding the Jessica Lal murder appeal on the evidentiary record." },
      { id: "media-law-unit-4-sahara", caseName: "Sahara India Real Estate Corp. Ltd. v. SEBI", citation: "(2012) 10 SCC 603", principle: "Temporary postponement may exceptionally protect fair trial where a real and substantial prejudice risk cannot be avoided otherwise.", summary: "The Court framed a necessity- and proportionality-based remedy balancing Articles 19(1)(a) and 21." },
      { id: "media-law-unit-4-rk-anand", caseName: "R.K. Anand v. Registrar, Delhi High Court", citation: "(2009) 8 SCC 106", principle: "A properly scrutinised sting may expose interference with justice, but authenticity, fairness and professional conduct remain essential.", summary: "The Court examined a television sting concerning efforts to influence a witness in the BMW trial and assessed the full recorded material." },
      { id: "media-law-unit-4-raja-ram-pal", caseName: "Raja Ram Pal v. Hon'ble Speaker, Lok Sabha", citation: "(2007) 3 SCC 184", principle: "Sting material may prompt legislative action, while privilege decisions remain subject to limited constitutional review.", summary: "The cash-for-query recordings formed part of the background to parliamentary expulsions reviewed by the Constitution Bench." },
      { id: "media-law-unit-4-aniruddha-bahal", caseName: "Aniruddha Bahal v. State", citation: "2010 SCC OnLine Del 2337", principle: "Public-interest investigative conduct should not be mechanically criminalised where the journalist exposes rather than shares the unlawful purpose.", summary: "The Delhi High Court quashed proceedings against journalists whose covert operation exposed willingness to facilitate money laundering." },
    ],
    examFocus:
      "Prepare Copyright Act sections 13, 14, 17, 18, 19, 30, 31D, 37, 38, 38A, 38B, 39, 39A, 51, 52, 55, 57, 63, 65A and 65B; categories of works, idea-expression, originality, ownership, assignment and licences; fair dealing for criticism, review and current-events reporting; the distinction among underlying copyright, broadcast reproduction right and performers' rights; civil, criminal and technological remedies; Cinematograph Act sections 6AA, 6AB and 7; national-security limits and surveillance; trial by media and postponement orders; sting-operation necessity, privacy, entrapment and editing; BSA sections 61–63 and chain of custody; and the principles in R.G. Anand, IPRS, Eastern Book Company, Entertainment Network, MySpace, Tips v. Wynk, Yashwant Sinha, PUCL, Manu Sharma, Sahara India, R.K. Anand, Raja Ram Pal and Aniruddha Bahal.",
    revisionNotes: `
Copyright method: identify the work, author, first owner, term and exact restricted act; check written assignment or licence; then apply section 52 or another exception. Facts and ideas are free, but original expression is protected. Registration is generally evidentiary, not constitutive.

Separate layers: underlying works retain copyright; section 37 protects the broadcast signal for twenty-five years; sections 38–38B protect performers for fifty years and preserve moral interests. Permission at one layer does not automatically clear the others.

Exceptions and remedies: current-events reporting must be fair in purpose, amount and market effect. Sections 51 and 55 govern infringement and civil relief; criminal liability needs its statutory mental element; sections 65A–65B address technological measures and rights information; film anti-piracy provisions operate additionally.

Public law: national-security claims require precise authority, proof and proportionality. Fair-trial rights prohibit parallel conviction by publicity, not accurate court reporting. Postponement is exceptional and temporary.

Stings: ask whether serious public wrongdoing was reasonably suspected, covert means were necessary, inducement was proportionate, editing was fair and collateral privacy was minimised. Preserve the original recording, metadata and chain of custody and prove electronic material under BSA sections 61–63.
    `.trim(),
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
      "Apply accuracy, privacy, fairness and conflict-of-interest standards to a newsroom problem.",
      "Distinguish the jurisdictions of print, television and digital-news accountability bodies.",
      "Evaluate ownership concentration, paid news and editorial independence.",
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
    detailedContent: `
1. Meaning and purpose of media ethics

Media ethics consists of professional principles governing how information is gathered, verified, selected, presented, corrected and archived. Law fixes minimum enforceable duties, while ethics asks what responsible journalism should do even where no court order or penalty follows.

The central values are truth-seeking, accuracy, fairness, independence, humanity, accountability and transparency. These values can conflict. Speed may conflict with verification; public interest with privacy; source confidentiality with accountability; and graphic truth with dignity. Ethical judgment requires reasons, not slogans.

2. Law, ethics and professional standards

An unlawful publication is usually unethical, but an unethical publication is not necessarily illegal. A misleading headline, undisclosed gift or refusal to correct may breach professional standards without independently constituting a crime or tort. Conversely, legal permission does not establish ethical justification.

Regulation should identify its source. Constitutional and statutory law is enforceable by public institutions. A regulator's code may have legal force within a licensing or statutory scheme. An industry code binds through membership or contract. An internal editorial code is enforced by the organisation. Confusing these levels produces incorrect remedies.

3. Accuracy, verification and correction

Journalists should distinguish verified fact, allegation, opinion, analysis, satire and advertisement. Serious allegations require proportionate verification: examination of primary documents, corroboration, source evaluation, contextual checking and a meaningful opportunity for the affected person to respond.

Accuracy concerns the overall impression, not only isolated sentences. Headlines, photographs, captions, editing and omission can render a report misleading. Urgency may affect what verification is reasonable, but it does not justify inventing certainty.

A prompt, prominent and specific correction reduces continuing harm and demonstrates accountability. Quietly editing a digital article without explaining a material correction may preserve the misleading impression and weaken public trust.

4. Fairness, balance and right of reply

Fairness requires honest presentation of material facts and affected perspectives. It does not always require equal time for demonstrably unequal claims. Balance is not mathematical symmetry; it is editorial treatment proportionate to evidence and relevance.

When alleging misconduct, the newsroom should ordinarily seek a response with sufficient particulars and time. If urgency requires publication before reply, the report should state that a response was sought and update the story fairly when received. A right of reply is not a right to dictate the article or suppress documented criticism.

5. Independence and conflicts of interest

Editorial judgment should not be secretly controlled by owners, advertisers, governments, political parties, sources or personal benefit. Gifts, paid travel, outside employment, family interests, investments and political activity may create actual or apparent conflicts requiring refusal, disclosure or reassignment.

Separation of advertising and editorial content is essential. Sponsored material, native advertising, affiliate content and influencer promotion should be clearly identified. Commercial arrangements should not determine favourable news coverage or the suppression of legitimate criticism.

6. Paid news and disguised advertising

Paid news presents promotional or political material as independent journalism in exchange for money or another benefit. It deceives the audience about the source and motivation of the communication, distorts electoral equality and compromises editorial independence.

Paid news may engage the Press Council's norms, election expenditure law, consumer protection, advertising standards, company disclosure and taxation rules depending on the facts. Proof should identify the consideration, editorial presentation, coordination and person responsible; mere favourable coverage is not by itself proof of payment.

7. Sources, confidentiality and anonymous attribution

Confidential sources can expose corruption and abuse where named disclosure is unsafe. Before granting anonymity, the journalist should assess the source's access, motive, reliability, corroboration and risk. Editors should ordinarily know the source even where the public does not.

Anonymity should not become a channel for unverified personal attack. The report should give readers as much information about the source's basis of knowledge as safety permits. Source confidentiality is a serious ethical commitment, but Indian law does not create a universal privilege against every lawful court or investigative demand.

Section 15(2) of the Press Council Act specifically prevents the Council from compelling disclosure of a news source in its inquiry. That protection must not be generalised beyond the statutory context.

8. Privacy, dignity and minimisation of harm

Privacy is a fundamental right under Articles 14, 19 and 21. Ethical reporting asks whether private information is necessary to a genuine public-interest story and whether the same purpose can be achieved with less intrusion. Public curiosity, celebrity and virality are not substitutes for public interest.

Particular care is required for children, sexual-offence survivors, patients, grieving families, persons with disabilities and communities exposed to retaliation. Identity, address, images and metadata can cause harm even when the name is omitted. Consent should be informed and cannot always cure exploitation or statutory prohibition.

R. Rajagopal v. State of Tamil Nadu and Justice K.S. Puttaswamy v. Union of India provide the constitutional foundation for balancing publication with private life, dignity, autonomy and informational privacy.

9. Reporting children, sexual violence and vulnerable persons

The Juvenile Justice Act, POCSO Act and criminal-procedure laws restrict disclosure that identifies children and victims in specified cases. Identification may occur through family details, school, neighbourhood, image, voice or contextual clues, not only by printing a name.

Nipun Saxena v. Union of India reinforced protection of the identity and dignity of sexual-offence survivors. Ethical practice also avoids victim blaming, gratuitous detail, repeated traumatic imagery and interviews obtained through pressure.

10. Communal, caste and conflict-sensitive reporting

Reports concerning religion, caste, ethnicity, migration or conflict can intensify real-world harm. Verification of identity and causation is essential. Headlines should not attribute an individual's conduct to an entire community without genuine relevance.

Journalists should avoid rumours, dehumanising description, unverified casualty figures and images stripped of time or place. Where identity is relevant to exposing discrimination or organised violence, it should be reported accurately and contextually rather than suppressed automatically.

In Amish Devgan v. Union of India, the Supreme Court discussed hate speech, dignity, fraternity and the contextual assessment of expression. The case illustrates why reach, speaker, audience, repetition and likely harm matter.

11. Images, grief, trauma and sensationalism

Graphic images may document war, disaster, crime and institutional failure, but publication requires a necessity and proportionality assessment. Editors should consider warning, cropping, obscuring identity, limiting repetition and explaining context.

Images taken from social media are not automatically verified or free to use. Consent, copyright, authenticity, date and location must be checked. Synthetic or materially altered media should be labelled, and corrections should explain the alteration or error.

12. Self-regulation, co-regulation and statutory regulation

Self-regulation means standards created and administered primarily by the profession or industry. It can be fast, specialised and protective of editorial independence, but may suffer from voluntary membership, weak sanctions and conflicts of interest.

Statutory regulation is created by legislation and backed by public power. It can provide universality and enforceable remedies but risks political control or disproportionate censorship. Co-regulation combines industry-level complaint handling with statutory recognition or public oversight.

The soundness of any model depends on independence, transparent appointments, clear standards, fair procedure, published reasons, proportionate remedies and judicial review—not merely its label.

13. Press Council of India and print self-regulation

The Press Council Act, 1978 gives the Council the twin objects of preserving press freedom and maintaining and improving newspaper and news-agency standards. Under section 13 it develops standards and a code of conduct, encourages responsibility and reviews developments affecting dissemination of news.

The Norms of Journalistic Conduct address accuracy, pre-publication verification, right of reply, privacy, communal reporting, obscenity, paid news, advertisements and other recurring issues. They are built from Council adjudications and professional principles.

Under section 14 the Council may, after inquiry, warn, admonish or censure, or disapprove conduct. It does not award ordinary damages or impose criminal punishment. Its jurisdiction is centred on newspapers, news agencies, editors and working journalists within the Act; it is not a universal regulator for every television channel or social platform.

14. Television news and the Cable Rules grievance structure

Television programmes carried through cable networks must comply with the Programme Code and advertisements with the Advertising Code under the Cable Television Networks Rules, 1994. The 2021 amendments introduced a three-level grievance structure: self-regulation by broadcasters, self-regulation through recognised broadcaster bodies, and Central Government oversight.

Industry organisations such as the News Broadcasting and Digital Standards Authority operate through membership-based rules and complaint mechanisms. Their jurisdiction depends on membership and the relevant code. A complainant should therefore identify the channel, programme, rule, self-regulatory membership and statutory route rather than assuming that one body controls all television news.

15. Digital news and the IT Rules

Part III of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 establishes a Code of Ethics and grievance structure for publishers of news and current affairs content and online curated content within its scope. It includes publisher-level grievance handling, self-regulatory bodies and governmental oversight.

The IT Rules have been subject to constitutional litigation and interim judicial orders. Their application must therefore be checked against the current text and operative court directions. An intermediary hosting user content is legally distinct from a publisher exercising editorial control, although one entity may perform more than one function.

16. Media and human rights

Media enables human rights by exposing violations, informing affected persons, preserving evidence and creating public accountability. Article 19 of the Universal Declaration of Human Rights and the ICCPR protects expression and access to information, subject to lawful limitations. Indian constitutional protection arises primarily through Articles 14, 19 and 21.

Media can also violate rights through discriminatory representation, disclosure of protected identity, prejudicial trials, harassment, surveillance and amplification of hatred. A human-rights approach asks who speaks, who is represented, who bears risk, whether consent is meaningful, and whether remedy is accessible.

Human-rights reporting should centre the agency and dignity of affected persons, distinguish documentation from spectacle, protect sources and survivors, and avoid treating vulnerable individuals merely as content.

17. Ownership concentration and editorial pluralism

Concentration occurs where a small number of entities control outlets across print, television, radio or digital distribution. Cross-media ownership can produce economies of scale but may reduce viewpoint diversity, create conflicts with other businesses and increase the power to shape public debate.

Article 19 protects editorial freedom, while competition, company, securities and sectoral policies address economic structure. Bennett Coleman recognised that regulation claimed to promote smaller newspapers cannot burden expression through unconstitutional newsprint controls. Ownership policy must use clear authority and proportionate means.

Transparency about beneficial ownership, political links, advertisers and sponsored content allows audiences to assess influence. Pluralism includes diversity of owners, sources, languages, regions and communities.

18. Foreign investment in news and print media

Foreign investment is governed by FEMA, rules made under it, the current Consolidated FDI Policy, DPIIT press notes and Ministry of Information and Broadcasting guidelines. Sectoral caps operate together with entry routes, security conditions, ownership and control requirements and general restrictions.

Publication of newspapers and periodicals dealing with news and current affairs is subject to a 26 per cent foreign-investment cap under the Government route. Uploading or streaming news and current affairs through digital media is also subject to the sector-specific 26 per cent Government-route policy.

Different treatment applies to scientific, technical and speciality magazines, periodicals and journals and to facsimile editions of foreign newspapers, for which the applicable framework permits higher investment subject to Government approval and detailed conditions. Students must not state that every kind of print publication has the same cap.

19. Conditions, editorial control and policy concerns in foreign investment

Government approvals may impose conditions concerning Indian incorporation, resident citizenship of key managerial or editorial personnel, security clearance, ownership and control, transfer of shares, employment of foreign personnel and reporting of changes. The precise current approval and PRGI registration requirements must be checked for the proposed activity.

Supporters of foreign investment emphasise capital, technology, training and global distribution. Critics raise editorial influence, cultural autonomy, national security and concentration. The constitutional and policy question is how to preserve pluralism and Indian editorial accountability without using investment regulation as disguised viewpoint control.

20. Applied problem and examination method

Assume a news company accepts payment for favourable election stories, publishes a child's identifying details, refuses a correction, broadcasts communal rumours, claims Press Council membership covers its television channel and proposes 40 per cent foreign investment in a news newspaper without Government approval.

Analyse each issue separately: paid news and disclosure; statutory and ethical identity protection; accuracy, reply and correction; contextual hate-speech and Programme Code concerns; the Press Council's print jurisdiction versus television grievance mechanisms; and the 26 per cent Government-route cap for print news and current affairs. Identify remedies before the publisher, self-regulatory body, Press Council, statutory authority or court as applicable.

For an examination answer, define ethics and distinguish it from law; explain core duties; compare self-, co- and statutory regulation; map print, television and digital bodies; apply human-rights principles; discuss paid news, ownership and pluralism; then state FDI caps, routes and conditions carefully. Never describe a voluntary code as a criminal statute or assume one regulator has jurisdiction over every medium.
    `.trim(),
    keyPoints: [
      "Law supplies enforceable minimum rules, while ethics governs responsible choices even where no legal sanction follows.",
      "Accuracy requires verification of the overall impression created by text, headline, image, editing and omission.",
      "Fairness requires proportional representation of relevant evidence, not mechanical equality between true and unsupported claims.",
      "Editorial independence requires disclosure or management of owner, advertiser, political, source and personal conflicts.",
      "Paid news disguises consideration-driven promotion as independent journalism and may engage several legal regimes.",
      "Public interest is different from public curiosity; privacy intrusion must be necessary and proportionate.",
      "Children and sexual-offence survivors may be identified indirectly through contextual details even when names are omitted.",
      "Self-regulation, co-regulation and statutory regulation must be assessed by independence, procedure, remedies and review.",
      "The Press Council governs its statutory print sphere and cannot award civil damages or impose criminal punishment.",
      "Television and digital news have distinct grievance structures; one industry's self-regulatory body does not govern every publisher.",
      "A human-rights approach treats media as both an accountability institution and a potential source of rights violations.",
      "Print news and current-affairs publications are subject to a 26 per cent foreign-investment cap under the Government route.",
      "Scientific or technical publications and facsimile editions are distinct FDI categories and should not be assigned the print-news cap automatically.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-5-constitution", title: "Speech, equality, dignity and privacy", provision: "Articles 14, 19 and 21, Constitution of India", description: "Provides the constitutional values governing editorial freedom, non-arbitrariness, privacy, dignity, reputation and human-rights reporting." },
      { id: "media-law-unit-5-pci-object", title: "Objects and functions of the Press Council", provision: "Sections 13–14, Press Council Act, 1978", description: "Requires preservation of press freedom and standards and authorises inquiry, warning, admonition, censure and disapproval within the Act." },
      { id: "media-law-unit-5-pci-source", title: "Press Council inquiry and sources", provision: "Section 15, Press Council Act, 1978", description: "Confers inquiry powers while protecting journalists and newspapers against compelled source disclosure by the Council." },
      { id: "media-law-unit-5-pci-norms", title: "Norms of Journalistic Conduct", provision: "Press Council of India professional norms", description: "Guides print journalism on accuracy, reply, privacy, communal reporting, paid news, advertisements and professional responsibility." },
      { id: "media-law-unit-5-cable-code", title: "Programme and Advertising Codes", provision: "Rules 6–7, Cable Television Networks Rules, 1994", description: "Sets content standards for programmes and advertisements carried through regulated cable television networks." },
      { id: "media-law-unit-5-tv-grievance", title: "Television complaint structure", provision: "Rules 15–18, Cable Television Networks Rules, 1994", description: "Provides broadcaster self-regulation, recognised self-regulating bodies and Central Government oversight." },
      { id: "media-law-unit-5-digital-code", title: "Digital Media Code of Ethics", provision: "Part III, Information Technology Rules, 2021", description: "Creates ethics and grievance provisions for covered digital-news and online-curated-content publishers, subject to current judicial orders." },
      { id: "media-law-unit-5-child", title: "Protection of child identity", provision: "Juvenile Justice Act, 2015 and POCSO Act, 2012", description: "Restricts publication of information capable of identifying children in protected proceedings and offences." },
      { id: "media-law-unit-5-human-rights", title: "International expression and dignity", provision: "UDHR Articles 1, 12 and 19; ICCPR Articles 17, 19 and 20", description: "Frames expression, privacy, dignity and lawful restrictions within international human-rights law." },
      { id: "media-law-unit-5-fdi", title: "Foreign investment in print news", provision: "Consolidated FDI Policy and MIB print-media guidelines", description: "Applies a 26 per cent cap under the Government route to newspapers and periodicals dealing with news and current affairs." },
      { id: "media-law-unit-5-digital-fdi", title: "Foreign investment in digital news", provision: "DPIIT Press Note 4 of 2019 and MIB clarification framework", description: "Applies the 26 per cent Government-route policy to uploading or streaming news and current affairs through digital media." },
      { id: "media-law-unit-5-facsimile", title: "Facsimile editions and specialised publications", provision: "MIB guidelines and Press and Registration of Periodicals framework", description: "Provides distinct approval and registration treatment for facsimile editions and scientific, technical or speciality publications." },
    ],
    importantCases: [
      { id: "media-law-unit-5-harijai", caseName: "In Re: Harijai Singh", citation: "(1996) 6 SCC 466", principle: "Press freedom is indispensable to democracy but must be exercised with factual accuracy, responsibility and respect for institutional integrity.", summary: "The Supreme Court discussed the role, freedom and responsibilities of newspapers while addressing inaccurate reporting concerning judicial proceedings." },
      { id: "media-law-unit-5-ajay-goswami", caseName: "Ajay Goswami v. Union of India", citation: "(2007) 1 SCC 143", principle: "Content standards must protect children without imposing broad prior censorship on newspapers for adult readers.", summary: "The Court rejected sweeping restrictions and emphasised existing law, classification, responsible journalism and proportionate protection." },
      { id: "media-law-unit-5-rajagopal", caseName: "R. Rajagopal v. State of Tamil Nadu", citation: "(1994) 6 SCC 632", principle: "Freedom of publication must be balanced with privacy, particularly for personal matters unrelated to public duties.", summary: "The Auto Shankar judgment remains foundational for ethical and legal treatment of private life, public records and official conduct." },
      { id: "media-law-unit-5-puttaswamy", caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India", citation: "(2017) 10 SCC 1", principle: "Privacy is a fundamental right rooted in dignity, autonomy and informational control.", summary: "The nine-judge Bench requires legality, legitimate aim and proportionality when privacy is restricted." },
      { id: "media-law-unit-5-nipun-saxena", caseName: "Nipun Saxena v. Union of India", citation: "(2019) 2 SCC 703", principle: "The identity and dignity of sexual-offence survivors require strict protection, including against indirect disclosure.", summary: "The Court issued safeguards concerning naming, records and publication capable of identifying survivors." },
      { id: "media-law-unit-5-pravasi", caseName: "Pravasi Bhalai Sangathan v. Union of India", citation: "(2014) 11 SCC 477", principle: "Harmful and hate-related expression must be addressed through the constitutional and statutory framework rather than vague judicial creation of new offences.", summary: "The Court examined hate speech, existing laws and institutional responsibility while declining an overbroad new judicial code." },
      { id: "media-law-unit-5-amish-devgan", caseName: "Amish Devgan v. Union of India", citation: "(2021) 1 SCC 1", principle: "Hate speech is assessed contextually by content, speaker, audience, reach, repetition, dignity and likely harm.", summary: "The Court distinguished offensive speech from legally punishable hate speech and analysed fraternity and equality." },
      { id: "media-law-unit-5-bennett", caseName: "Bennett Coleman & Co. v. Union of India", citation: "(1972) 2 SCC 788", principle: "Policies said to promote diversity cannot burden press growth and circulation through unconstitutional means.", summary: "The newsprint decision demonstrates the need to pursue pluralism without indirect restriction of Article 19(1)(a)." },
      { id: "media-law-unit-5-cab", caseName: "Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal", citation: "(1995) 2 SCC 161", principle: "Airwaves are public property and broadcasting regulation must promote public good and diverse communication.", summary: "The Court rejected exclusive governmental monopoly and linked audience access with media pluralism." },
      { id: "media-law-unit-5-common-cause-ads", caseName: "Common Cause v. Union of India", citation: "(2015) 7 SCC 1", principle: "Government advertising must serve public purposes and cannot become partisan publicity financed by public funds.", summary: "The Supreme Court framed principles for fairness, political neutrality, accountability and avoidance of personality cults in government advertisements." },
      { id: "media-law-unit-5-sahara", caseName: "Sahara India Real Estate Corp. Ltd. v. SEBI", citation: "(2012) 10 SCC 603", principle: "Media freedom must be balanced with fair trial through narrowly tailored remedies only where a real and substantial prejudice risk exists.", summary: "The Court recognised exceptional temporary postponement rather than general prior control of judicial reporting." },
    ],
    examFocus:
      "Prepare the distinction between law, ethics and professional codes; accuracy, verification, corrections, fairness, reply, independence and conflicts; paid news and disguised advertising; anonymous sources and section 15(2) source protection; privacy, dignity, children, sexual-offence survivors and communal reporting; self-regulation, co-regulation and statutory regulation; Press Council Act sections 13–15 and the Norms of Journalistic Conduct; Cable Rules 6–7 and 15–18; Part III of the IT Rules, 2021 subject to operative court orders; media and UDHR/ICCPR human rights; ownership concentration and pluralism; the 26 per cent Government-route cap for print news and digital news; distinct treatment of specialised publications and facsimile editions; and the principles in Harijai Singh, Ajay Goswami, Rajagopal, Puttaswamy, Nipun Saxena, Pravasi Bhalai, Amish Devgan, Bennett Coleman, Cricket Association of Bengal, Common Cause and Sahara India.",
    revisionNotes: `
Ethical method: verify serious claims, distinguish fact from opinion, seek a meaningful response, correct material errors prominently, disclose conflicts and label sponsored material. Public interest is not public curiosity.

Human rights: media protects rights through information and accountability but may violate privacy, dignity, equality and fair trial. Minimise harm, especially to children, survivors and vulnerable communities; check indirect identification as well as names.

Regulatory map: print ethics—Press Council Act and Norms; cable television—Programme/Advertising Codes and three-level grievance structure; digital news—Part III of the IT Rules subject to current court orders; internal and membership codes operate only within their jurisdiction.

FDI: newspapers and periodicals dealing with news and current affairs are capped at 26 per cent under the Government route. Digital uploading or streaming of news and current affairs is also subject to 26 per cent Government-route policy. Scientific/technical publications and facsimile editions form distinct categories with separate conditions.

Exam warning: do not call every ethical breach illegal, every self-regulatory ruling a court order, or every media outlet subject to the same body. Identify the medium, rule-maker, jurisdiction, procedure and available remedy.
    `.trim(),
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
