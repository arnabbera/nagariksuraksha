Warning: truncated output (original token count: 66183)
Total output lines: 2115

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

Covert recording may affect privacy, trespass, confidentiality, data protection, criminal law and broadcasting or journalistic codes. The location and expectation of privacy matter. Recording intimate…6183 tokens truncated…oid rumours, dehumanising description, unverified casualty figures and images stripped of time or place. Where identity is relevant to exposing discrimination or organised violence, it should be reported accurately and contextually rather than suppressed automatically.

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
      "Distinguish public-service broadcasting, spectrum authorisation and content regulation.",
      "Explain the current age-based film-certification and anti-piracy framework.",
      "Apply broadcaster grievance, prohibition and enforcement provisions to a practical problem.",
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
    detailedContent: `
1. Broadcasting and its legal characteristics

Broadcasting communicates sound or audiovisual content from one source to a potentially large public through terrestrial spectrum, satellite, cable or related transmission systems. Unlike print, traditional broadcasting uses scarce and coordinated technical resources and can enter homes simultaneously. Indian law therefore combines freedom of expression with licensing, spectrum management, public-service duties and content rules.

Three legal questions must be kept separate: who may establish or operate the transmission service; how spectrum or infrastructure is authorised; and what content may be carried. Permission at one level does not automatically satisfy the others.

2. Evolution of radio broadcasting in India

Experimental radio clubs operated in India during the 1920s. The Indian Broadcasting Company began services in Bombay and Calcutta in 1927 but failed financially. The Government then operated the Indian State Broadcasting Service, renamed All India Radio in 1936. The name Akashvani became widely used after Independence.

Radio initially developed as a State-controlled medium. Public broadcasting expanded national, regional and local services for news, education, agriculture, culture and entertainment. Later policy permitted private FM broadcasting and community radio under licensing and programme conditions, while news broadcasting remained subject to distinct restrictions and sourcing rules.

3. Evolution of television and liberalisation

Experimental television service began in Delhi in 1959 under All India Radio. Doordarshan became a separate department in 1976. National expansion, satellite distribution and colour television accelerated during the 1980s.

Foreign satellite channels and local cable networks expanded rapidly during the early 1990s, initially without a complete sector-specific framework. The Cable Television Networks (Regulation) Act, 1995 responded to that growth. Private satellite channels, direct-to-home services and digitised distribution later created a mixed ecosystem regulated by the Ministry of Information and Broadcasting, Department of Telecommunications, TRAI and other authorities within their respective fields.

4. Constitutional freedom and electronic media

Article 19(1)(a) protects communication and receipt of information through electronic media. In Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal, the Supreme Court held that airwaves are public property and must be used for public good. Their scarcity and public character justify regulation, but not an exclusive governmental monopoly inconsistent with diverse expression.

The audience's right to receive information is important. In Odyssey Communications v. Lokvidayan Sanghatana, the Court declined to stop a television serial merely because viewers objected to its content where no legal prohibition was established. In Life Insurance Corporation of India v. Manubhai D. Shah, fairness in access to a State-controlled medium was tied to Article 19(1)(a).

5. Airwaves, spectrum and government control

Spectrum is a finite public resource requiring technical coordination to avoid interference and ensure efficient use. Authorisation may govern frequencies, power, coverage, technology and service category. Content regulation, however, must have separate legal authority and comply with Article 19(2).

The Indian Telegraph Act, 1885 historically underpinned governmental control over telecommunication. The Telecommunications Act, 2023 now supplies the principal current telecommunications framework as its provisions have been brought into force, including authorisation and spectrum allocation mechanisms. Students should not describe the repealed or superseded telegraph framework as the sole current law.

Broadcasting policy remains distributed across statutes, rules, licence or permission conditions and executive guidelines. A complete answer identifies the service—public broadcast, private satellite television, FM, community radio, cable, DTH or OTT—before selecting the legal regime.

6. Public-service broadcasting

Public-service broadcasting aims to serve citizens rather than only government communication or commercial demand. It should provide accurate information, education, culture, minority and regional representation, children's programming, emergency communication and content for underserved audiences.

Independence is essential. State funding or statutory creation does not justify partisan editorial direction. Accountability should secure fairness, accuracy, accessibility and efficient public spending while protecting professional editorial judgment.

7. Establishment and structure of Prasar Bharati

The Prasar Bharati (Broadcasting Corporation of India) Act, 1990 establishes the Broadcasting Corporation of India known as Prasar Bharati. The statutory scheme transferred Akashvani and Doordarshan functions, property and personnel arrangements into an autonomous corporation when the Act became operational in 1997.

Section 3 establishes the Corporation and its Board structure. The Board includes the Chairperson, Executive Member, Member (Finance), Member (Personnel), part-time members, the Director-General of Akashvani, the Director-General of Doordarshan and employee representatives according to the Act. Appointment, tenure and removal follow statutory provisions.

8. Functions and objectives under section 12

Section 12 makes it Prasar Bharati's primary duty to organise and conduct public broadcasting services to inform, educate and entertain and ensure balanced development of radio and television broadcasting.

Its objectives include upholding constitutional values and national integrity; safeguarding the citizen's right to be informed freely, truthfully and objectively; presenting a fair and balanced flow of information including contrasting views; supporting education, literacy, agriculture, rural development, environment, health, science and technology; and serving diverse languages, regions and vulnerable groups.

It must also promote national integration, sports, youth and women's interests, social justice, working-class welfare, rural and border communities, minorities, tribal communities, children, older persons and persons with disabilities, while developing technology and coverage.

9. Accountability under the Prasar Bharati Act

The Act provides institutional accountability through the Board, a Broadcasting Council for complaints and advice, a Parliamentary Committee and reporting or financial provisions. External services and specified governmental communications operate under statutory arrangements.

Autonomy does not mean absence of accountability; accountability does not mean day-to-day governmental editorial control. When analysing a dispute, identify whether the challenged act concerns statutory functions, employment, funding, programme judgment, complaint handling or governmental direction.

10. Cinematograph Act and the certification system

Part II of the Cinematograph Act, 1952 regulates certification of films for public exhibition through the Central Board of Film Certification. Certification is different from copyright ownership and from licensing a cinema premises under Part III or State law.

An applicant submits the film through the prescribed process. After examination, the Board may certify it in the appropriate category, require modifications according to law or refuse certification, giving reasons and following procedural safeguards. Judicial review remains available against illegality, arbitrariness, procedural unfairness or disproportionate restriction.

11. Current certificate categories

After the 2023 amendment, the principal categories are U for unrestricted public exhibition; UA with age indicators 7+, 13+ or 16+ for unrestricted exhibition subject to parental or guardian guidance for children below the indicated age; A for exhibition restricted to adults; and S for exhibition restricted to members of a specified profession or class.

The UA age indicators guide parents and guardians rather than creating an offence merely because a younger child views the film with them. The certificate must be displayed and exhibition must comply with the certified version and category. Certification granted under the present framework has perpetual validity, subject to lawful action under the Act.

12. Certification principles under section 5B

Section 5B(1) links refusal or restriction to sovereignty and integrity, security of the State, friendly relations with foreign States, public order, decency or morality, defamation, contempt of court and likely incitement to an offence. These grounds reflect Article 19(2) and must be applied through statutory guidelines and constitutional standards.

Section 5B(2) permits the Central Government to issue certification principles. Examiners should assess the film as a whole, its theme, context, artistic or social purpose and likely audience. Isolated words or images should not automatically determine the legal character of the entire work.

13. Cinematograph (Certification) Rules, 2024

The 2024 Rules replaced the 1983 certification rules and modernised applications, scrutiny, examination committees, communication, fees, certificates and records. They support online processing and the age-based UA categories introduced by the amended Act.

The framework also advances representation and accessibility in certification administration and film exhibition through applicable rules and governmental accessibility guidelines. The precise version submitted matters: post-certification additions, deletions or alterations must follow the current statutory and procedural requirements rather than assuming that the certificate covers every edited version.

14. Judicial review of film certification

K.A. Abbas v. Union of India accepted prior film certification in principle because of cinema's distinctive impact but required clear standards, fair procedure and prompt review. Certification is therefore constitutionally exceptional, not a general model for prior censorship of all media.

S. Rangarajan v. P. Jagjivan Ram held that expression cannot be suppressed because hostile audiences threaten disorder; anticipated harm must have a proximate and direct nexus, and the State must protect lawful speech. Bobby Art International v. Om Pal Singh Hoon evaluated Bandit Queen as a whole and treated disturbing scenes in their narrative and social context.

In Union of India v. K.M. Shankarappa, the Supreme Court held that the executive could not exercise a revisional power over a quasi-judicial appellate certification decision in the manner challenged. The decision reinforces institutional fairness and the separation between statutory adjudication and executive preference.

15. Film piracy provisions introduced in 2023

Sections 6AA and 6AB prohibit specified unauthorised recording of a film in a licensed exhibition facility and unauthorised exhibition for profit. Section 7 supplies consequences. The provisions target camcording and commercial piracy and operate alongside the Copyright Act.

The Act preserves the relevance of copyright exceptions. A film-piracy allegation should identify the act of recording, transmission or exhibition, lack of authorisation, profit-related or other statutory ingredients and the relationship with copyright infringement. Possession of a cinema ticket is not permission to record or redistribute the film.

16. Cinemas, television and OTT are distinct regimes

CBFC certification principally concerns films for public exhibition under the Cinematograph Act. Television channels must separately comply with the Cable Rules and permission conditions. A certified film may therefore require editing or scheduling to satisfy the Programme Code.

Online curated or OTT content is governed through the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 within their scope, including age classification and access controls. It should not be stated that every OTT programme requires a CBFC theatrical certificate.

17. Cable Television Networks Act: registration and operation

The Cable Television Networks (Regulation) Act, 1995 regulates cable television networks. Section 3 prohibits operation of a cable network without registration. Section 4 and the Rules govern registration and renewal or continuing compliance through the designated authority.

Cable operators must use prescribed equipment and comply with digitisation, addressable-system, record and technical requirements where applicable. TRAI regulates tariffs, interconnection and quality aspects within its statutory sphere, while MIB administers content and permission dimensions. Distribution regulation is distinct from ownership of programme copyright.

18. Programme Code, Advertising Code and mandatory carriage

Section 5 prohibits transmission of programmes that do not conform to the prescribed Programme Code; section 6 similarly applies the Advertising Code. Rules 6 and 7 contain detailed restrictions concerning public order, decency, defamation, communal content, children, misleading advertising and other matters.

Section 8 requires carriage or retransmission of specified Doordarshan channels as notified. The Sports Broadcasting Signals (Mandatory Sharing with Prasar Bharati) Act, 2007 separately addresses sharing of broadcasting signals for sporting events of national importance under its conditions.

Code enforcement must remain connected to the statutory text and Article 19(2). A licence or registration condition cannot become an unlimited power to prohibit criticism or unpopular viewpoints.

19. Complaints, prohibition, seizure and enforcement

Rules 15 to 18 establish a three-level complaint system for television content: broadcaster self-regulation, recognised self-regulating bodies and Central Government oversight. The complainant should identify the programme, date, impugned segment and Code provision and first use the prescribed level and timeline.

The Act authorises inspection and seizure of equipment in specified circumstances and gives authorised officers powers subject to procedure. Section 19 permits an authorised officer to prohibit transmission of a programme in the public interest on the statutory grounds. Section 20 gives the Central Government powers to prohibit operation or transmission in specified circumstances.

Natural justice, recorded reasons, statutory jurisdiction and proportionality remain important. A temporary targeted restriction, warning, apology or modification may sometimes address harm more proportionately than complete channel prohibition.

20. Applied problem and examination method

Assume a company starts a local cable network without registration, carries an uncertified theatrical recording, omits mandatory public channels and broadcasts a communal advertisement. Separately, a State officer orders all critical news removed without identifying a Code provision, while a filmmaker challenges an A certificate imposed because protestors threaten violence.

Apply sections 3–8 of the Cable Act, Rules 6–7, the anti-piracy and certification provisions, and the applicable complaint or enforcement process. Test the removal order for authority, reasons, natural justice and Article 19(2) proportionality. Apply S. Rangarajan to the hostile-audience threat and assess the film as a whole under section 5B and the 2024 Rules.

For an examination answer, use the sequence: trace broadcast history; explain airwaves and Article 19(1)(a); distinguish spectrum, service and content regulation; state Prasar Bharati's structure and section 12 duties; explain film categories, section 5B, the 2024 Rules and piracy provisions; then apply Cable Act registration, Codes, carriage, grievance and enforcement provisions with leading cases.
    `.trim(),
    keyPoints: [
      "Broadcast regulation has separate infrastructure, spectrum, service-authorisation and content dimensions.",
      "Indian radio developed from private experiments to State broadcasting, Akashvani, public-service autonomy and licensed private or community services.",
      "Airwaves are public property, but their regulation must advance public good and plural communication rather than exclusive State control.",
      "Prasar Bharati is a statutory public-service corporation for Akashvani and Doordarshan, operational since 1997.",
      "Section 12 requires truthful, objective and balanced information and service to India's diverse regions and vulnerable groups.",
      "The current film categories are U, UA 7+, UA 13+, UA 16+, A and S.",
      "Section 5B certification grounds must be read consistently with Article 19(2) and the film must be assessed as a whole.",
      "The Cinematograph (Certification) Rules, 2024 replaced the 1983 Rules and modernised the certification process.",
      "Sections 6AA and 6AB address unauthorised film recording and exhibition and operate alongside copyright law.",
      "Theatrical certification, television Programme Code compliance and OTT classification are distinct regimes.",
      "Cable operation requires registration and compliance with the Programme Code and Advertising Code.",
      "Rules 15–18 provide broadcaster, self-regulatory-body and Central Government levels for television complaints.",
      "Content prohibition and seizure require statutory jurisdiction, procedure, reasons and proportionate exercise of power.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-6-article-19", title: "Electronic-media freedom", provision: "Articles 19(1)(a) and 19(2), Constitution of India", description: "Protects broadcasting expression and audience access subject to constitutionally specified reasonable restrictions." },
      { id: "media-law-unit-6-telecom", title: "Telecommunications authorisation and spectrum", provision: "Telecommunications Act, 2023", description: "Provides the current central framework for telecommunication authorisation and spectrum assignment as commenced, replacing the historical sole reliance on the Telegraph Act." },
      { id: "media-law-unit-6-prasar-establishment", title: "Prasar Bharati Corporation", provision: "Sections 3–4, Prasar Bharati Act, 1990", description: "Establishes the Corporation and its Board for public broadcasting through Akashvani and Doordarshan." },
      { id: "media-law-unit-6-prasar-functions", title: "Public-service functions", provision: "Section 12, Prasar Bharati Act, 1990", description: "Requires informing, educating and entertaining the public through balanced radio and television services and detailed social objectives." },
      { id: "media-law-unit-6-prasar-accountability", title: "Broadcasting Council and parliamentary accountability", provision: "Sections 14–15 and 13, Prasar Bharati Act, 1990", description: "Provides complaint advice and parliamentary oversight within the statutory public-broadcasting structure." },
      { id: "media-law-unit-6-cinema-board", title: "Film certification authority", provision: "Sections 3–5A, Cinematograph Act, 1952", description: "Establishes the Board and governs examination and grant of U, age-rated UA, A and S certificates." },
      { id: "media-law-unit-6-cinema-principles", title: "Certification principles", provision: "Section 5B, Cinematograph Act, 1952", description: "Connects certification restrictions to specified constitutional grounds and governmental guidelines." },
      { id: "media-law-unit-6-cinema-rules", title: "Certification procedure", provision: "Cinematograph (Certification) Rules, 2024", description: "Governs applications, committees, scrutiny, communication, categories, records and procedural aspects of certification." },
      { id: "media-law-unit-6-piracy", title: "Film anti-piracy", provision: "Sections 6AA, 6AB and 7, Cinematograph Act, 1952", description: "Prohibits specified unauthorised recording and profit-oriented exhibition and provides statutory consequences." },
      { id: "media-law-unit-6-cable-registration", title: "Cable-network registration", provision: "Sections 3–4, Cable Television Networks (Regulation) Act, 1995", description: "Prohibits unregistered cable-network operation and creates the registration framework." },
      { id: "media-law-unit-6-cable-codes", title: "Programme and Advertising Codes", provision: "Sections 5–6 of the Act; Rules 6–7 of the 1994 Rules", description: "Requires cable content and advertising to conform to prescribed standards." },
      { id: "media-law-unit-6-must-carry", title: "Mandatory public-channel carriage", provision: "Section 8, Cable Television Networks (Regulation) Act, 1995", description: "Requires retransmission of notified Doordarshan channels through cable networks." },
      { id: "media-law-unit-6-cable-enforcement", title: "Prohibition and enforcement", provision: "Sections 11, 19 and 20, Cable Television Networks (Regulation) Act, 1995", description: "Provides specified seizure and programme or network prohibition powers subject to statutory conditions." },
      { id: "media-law-unit-6-grievances", title: "Television grievance structure", provision: "Rules 15–18, Cable Television Networks Rules, 1994", description: "Creates three levels involving broadcasters, recognised self-regulatory bodies and Central Government oversight." },
      { id: "media-law-unit-6-sports", title: "Sporting events of national importance", provision: "Sports Broadcasting Signals (Mandatory Sharing with Prasar Bharati) Act, 2007", description: "Requires signal sharing for notified sporting events of national importance under the Act's conditions." },
    ],
    importantCases: [
      { id: "media-law-unit-6-cab", caseName: "Secretary, Ministry of Information and Broadcasting v. Cricket Association of Bengal", citation: "(1995) 2 SCC 161", principle: "Airwaves are public property, and freedom to communicate and receive information extends to electronic media.", summary: "The Supreme Court rejected exclusive governmental monopoly and required regulation directed toward public good and pluralism." },
      { id: "media-law-unit-6-odyssey", caseName: "Odyssey Communications Pvt. Ltd. v. Lokvidayan Sanghatana", citation: "(1988) 3 SCC 410", principle: "Viewers' Article 19(1)(a) interests cannot be displaced merely by objection to a television programme without a legal basis.", summary: "The Court declined to prohibit telecast of a serial where the challenge did not establish an applicable legal violation." },
      { id: "media-law-unit-6-lic", caseName: "Life Insurance Corporation of India v. Manubhai D. Shah", citation: "(1992) 3 SCC 637", principle: "A State-controlled medium must act fairly and cannot arbitrarily deny a reasonable reply on a matter of public debate.", summary: "The Court protected access to publish a rejoinder in a publicly controlled journal and discussed fairness in public media." },
      { id: "media-law-unit-6-ka-abbas", caseName: "K.A. Abbas v. Union of India", citation: "(1970) 2 SCC 780", principle: "Prior film certification is constitutionally permissible because of cinema's distinctive impact, but requires definite standards, fair procedure and prompt review.", summary: "The Court upheld classification in principle while insisting on procedural and substantive safeguards." },
      { id: "media-law-unit-6-rangarajan", caseName: "S. Rangarajan v. P. Jagjivan Ram", citation: "(1989) 2 SCC 574", principle: "Expression cannot be suppressed because hostile audiences threaten disorder; feared harm must be proximate and direct.", summary: "The Court restored certification and held that the State must protect lawful exhibition rather than surrender to threats." },
      { id: "media-law-unit-6-bobby-art", caseName: "Bobby Art International v. Om Pal Singh Hoon", citation: "(1996) 4 SCC 1", principle: "A film must be evaluated as a whole and disturbing scenes assessed within their narrative and social purpose.", summary: "The Supreme Court upheld exhibition of Bandit Queen and rejected isolation of scenes from the film's depiction of exploitation and violence." },
      { id: "media-law-unit-6-shankarappa", caseName: "Union of India v. K.M. Shankarappa", citation: "(2001) 1 SCC 582", principle: "Executive revision cannot override a quasi-judicial film-certification appellate decision contrary to constitutional institutional safeguards.", summary: "The Court invalidated the challenged Central Government revisional control after appellate certification." },
      { id: "media-law-unit-6-anand-patwardhan", caseName: "Anand Patwardhan v. Union of India", citation: "(1997) 1 SCC 734", principle: "Public broadcasters must apply fair, constitutional standards when deciding whether to telecast socially significant documentary material.", summary: "The litigation concerning documentary telecast reinforced scrutiny of arbitrary exclusion by State-controlled broadcasting." },
      { id: "media-law-unit-6-bhasin", caseName: "Anuradha Bhasin v. Union of India", citation: "(2020) 3 SCC 637", principle: "Media freedoms exercised through communication networks require published, proportionate and reviewable restrictions.", summary: "The Court rejected indefinite network suspension and linked communications control with Articles 19(1)(a) and 19(1)(g)." },
    ],
    examFocus:
      "Prepare the historical development of radio and television; public-service versus commercial broadcasting; Article 19(1)(a), audience rights and airwaves as public property; the current Telecommunications Act framework; Prasar Bharati Act sections 3, 4, 12, 13, 14 and 15; its public-service objectives and accountability; Cinematograph Act sections 3–5B, current U, UA 7+, UA 13+, UA 16+, A and S categories, perpetual certificates, 2024 Rules and accessibility; sections 6AA, 6AB and 7 anti-piracy; distinction among cinema, television and OTT; Cable Act sections 3–8, 11, 19 and 20; Rules 6, 7 and 15–18; mandatory sports-signal sharing; and the principles in Cricket Association of Bengal, Odyssey Communications, LIC v. Manubhai Shah, K.A. Abbas, S. Rangarajan, Bobby Art, K.M. Shankarappa, Anand Patwardhan and Anuradha Bhasin.",
    revisionNotes: `
Broadcast map: separate spectrum and technical authorisation, permission to provide the service, and regulation of content. Airwaves are public property but State monopoly is inconsistent with plural communication and audience rights.

Prasar Bharati: statutory Corporation for Akashvani and Doordarshan; section 12 requires public broadcasting that informs, educates and entertains and provides truthful, objective, balanced and socially inclusive service. Autonomy and accountability must operate together.

Cinema: CBFC categories are U, UA 7+, UA 13+, UA 16+, A and S. Apply section 5B, the 2024 Rules and whole-work/context analysis. Hostile audiences do not justify suppression. Sections 6AA–6AB add anti-piracy rules alongside copyright.

Cable: sections 3–4 require registration; sections 5–6 and Rules 6–7 impose Programme and Advertising Codes; section 8 is must-carry; sections 11, 19 and 20 contain enforcement powers; Rules 15–18 create the three-level complaint structure.

Exam warning: do not treat CBFC certification as OTT classification, spectrum permission as content approval, or public ownership as authority for partisan broadcasting. Always identify the medium, regulator, statutory power, procedure and Article 19 limitation.
    `.trim(),
  },
  {
    title: "Internet and New Media",
    shortDescription:
      "Evolution and regulation of internet media, information-technology law, telecommunications and social networks.",
    overview:
      "This unit examines the internet as a distinct, interactive and transnational medium. It studies intermediary liability, blocking, content governance, cyber offences, platform responsibility, social-network regulation and the transition from the Indian Telegraph Act framework to current telecommunications legislation.",
    objectives: [
      "Explain the evolution, architecture and distinctive features of internet media.",
      "Apply constitutional free-speech, privacy and proportionality principles to online communication.",
      "Distinguish publishers, intermediaries, social-media intermediaries and significant social-media intermediaries.",
      "Analyse safe harbour, due diligence, grievance handling, takedown and blocking under the IT Act and Rules.",
      "Identify the principal computer-related offences and distinguish civil contraventions from criminal liability.",
      "Explain platform duties concerning synthetic media, deepfakes, children and intimate imagery.",
      "Relate informational privacy and the phased DPDP framework to digital-media practice.",
      "Explain telecommunications authorisation, interception, suspension and the transition from the Telegraph Act.",
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
    detailedContent: `
Unit 7: Internet and New Media

1. Meaning and evolution of new media

New media refers to communication produced, stored and distributed through digital networks. It includes websites, search engines, social networks, messaging services, streaming platforms, podcasts, online news, blogs, user-generated content and emerging AI-mediated communication.

Its development moved from largely one-way websites to interactive Web 2.0 platforms and then to mobile, cloud, algorithmic and creator-led ecosystems. A user may simultaneously be reader, publisher, distributor and advertiser. This collapse of traditional roles makes legal classification more important than the label attached to a service.

Internet law is not a single code. Constitutional law, the Information Technology Act, criminal law, evidence, intellectual property, consumer protection, data protection and telecommunications regulation may apply together.

2. Characteristics of internet communication

Internet speech is instantaneous, searchable, persistent, replicable and capable of global reach at very low cost. Hyperlinks, hashtags, recommender systems and forwarding functions can rapidly change the audience and context of a message.

Digital communication is also layered. The speaker, device, access provider, hosting service, platform, search engine, advertiser and payment intermediary may be different entities. Liability should therefore follow the actor's knowledge, control, statutory status and conduct rather than treating the entire network as one publisher.

Virality magnifies both democratic participation and harm. Regulation must address fraud, abuse and unlawful content without imposing vague or disproportionate restraints that encourage platforms to remove lawful criticism.

3. Constitutional protection of online speech

Article 19(1)(a) protects expression through the internet; Article 19(2) permits only reasonable restrictions connected with its listed grounds. There is no separate, weaker constitutional category called online speech.

Shreya Singhal v. Union of India struck down section 66A because its vague expressions swept far beyond the grounds in Article 19(2) and chilled protected speech. Mere discussion or advocacy is protected; incitement may be restricted when the applicable legal ingredients are satisfied.

Article 14 restrains arbitrary platform-related State action, while Article 21 protects dignity, reputation, autonomy and privacy. Restrictions require legal authority, a legitimate objective, rational connection, necessity and proportionality, with procedural safeguards and review.

4. Access to the internet and network restrictions

Anuradha Bhasin v. Union of India recognised that speech and trade conducted through the internet receive constitutional protection. The Court did not declare an unlimited freestanding fundamental right to internet access, but required shutdown orders to be published, temporary, necessary, proportionate and periodically reviewed.

Indefinite suspension is impermissible. Authorities must consider less restrictive alternatives, territorial scope, duration and the effect on journalism, education, health, livelihood and public services.

For an examination problem, distinguish blocking particular content, disabling an account, intercepting communication and suspending a telecommunications service. Each has a different statutory source, decision-maker and procedure.

5. Territorial jurisdiction and applicable law

Online publication may involve conduct, servers, readers and harm in several jurisdictions. Section 75 of the IT Act gives specified extraterritorial reach where the act involves a computer, computer system or network located in India. This does not eliminate ordinary requirements of jurisdiction, evidence and enforceability.

A claimant should identify where the content was uploaded, accessed and targeted; where the parties reside or conduct business; where harm occurred; and which court or authority has statutory competence. Global accessibility alone should not automatically justify a worldwide injunction.

Cross-border orders also raise comity, conflict-of-laws and proportionality concerns. Relief may be limited geographically or by identifiable URLs, accounts or content where that adequately addresses the proved harm.

6. Structure and purpose of the Information Technology Act, 2000

The IT Act gives legal recognition to electronic records and electronic signatures, supports electronic governance, creates civil contraventions and cyber offences, authorises investigation and governmental directions, and establishes conditional protection for intermediaries.

Its provisions must be read with the Bharatiya Nyaya Sanhita, 2023, the Bharatiya Sakshya Adhiniyam, 2023, special statutes and subordinate rules. The same incident may involve identity theft under the IT Act, cheating under the BNS, electronic evidence requirements and a consumer claim.

Section 66A is unconstitutional and cannot be used. Students must not confuse it with valid provisions such as sections 66, 66C, 66D or 66E.

7. Civil contraventions and computer-related offences

Section 43 addresses unauthorised access, copying, introduction of contaminants, disruption, denial of access and specified damage to computer resources and provides compensation through the statutory framework. Section 66 criminalises section 43 acts when committed dishonestly or fraudulently.

The mental element is therefore crucial. A technical failure or contractual dispute is not automatically a cybercrime. Investigators must prove the act, attribution, lack of authority, required intention and integrity of electronic evidence.

Sections 65 and 66B–66F separately address tampering with source documents, receiving stolen computer resources, identity theft, cheating by personation, privacy violations, cyber terrorism and related conduct.

8. Identity theft, impersonation and privacy offences

Section 66C penalises fraudulent or dishonest use of another person's electronic signature, password or unique identification feature. Section 66D applies to cheating by personation using a communication device or computer resource. Phishing, fake profiles and account takeover commonly require careful application of both provisions and the BNS.

Section 66E addresses intentional or knowing capture, publication or transmission of images of a person's private area without consent in circumstances violating privacy. Sections 67, 67A and 67B deal respectively with obscene electronic material, sexually explicit material and child sexual material, subject to their exact ingredients and exceptions.

Victim protection requires rapid preservation of evidence, platform reporting, police or cybercrime reporting and avoidance of further circulation. A person reporting unlawful content should preserve URLs, timestamps and transaction details without republishing the material unnecessarily.

9. Intermediaries and their legal classification

Section 2(1)(w) defines an intermediary broadly in relation to electronic records and includes telecom and network providers, internet service providers, web hosts, search engines, online-payment and auction sites, online marketplaces and cyber cafés. The functional role matters.

A publisher selects and controls its own content. An intermediary ordinarily receives, stores or transmits third-party information or provides a related service. A platform may be an intermediary for user posts but a publisher for content it commissions or edits.

Social-media intermediaries enable online interaction between users. Significant social-media intermediaries meet the notified user threshold and carry additional Rule 4 duties. Safe harbour is issue-specific, not a blanket immunity for every activity of the company.

10. Section 79 safe harbour

Section 79 conditionally protects an intermediary from liability for third-party information, data or communication links where its role is limited and it observes statutory due diligence. Protection may be lost where the intermediary initiates transmission, selects the receiver, modifies the information, conspires or aids the unlawful act, or fails to comply with a valid removal direction.

In Shreya Singhal, the Supreme Court read section 79(3)(b) and the then rules to require actual knowledge through a court order or appropriate governmental notification concerning unlawful content relatable to Article 19(2), rather than private allegations alone automatically compelling removal.

Safe harbour is a defence governed by facts and statutory compliance. Failure to qualify does not itself prove the underlying offence; the claimant or prosecution must still establish the relevant cause of action and the intermediary's legally attributable conduct.

11. General due diligence and grievance redressal

Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 requires publication of rules, privacy policy and user agreement; communication of prohibited-content categories; reasonable security practices; lawful assistance; retention of specified information; and an accessible grievance mechanism.

The intermediary must appoint and publish contact details of a grievance officer, acknowledge and dispose of complaints within the currently prescribed periods, and use the accelerated process for specified intimate imagery, impersonation and similar serious complaints.

The 2026 amendments shortened important response periods and introduced additional synthetic-content duties. Exact timelines should always be stated from the current consolidated Rules, because different complaint and governmental-order categories have different clocks.

12. Significant social-media intermediary duties

Rule 4 imposes added responsibilities on significant social-media intermediaries, including India-resident compliance, nodal-contact and grievance officers, periodic compliance reports and specified technology and transparency measures.

The first-originator requirement applies within the statutory conditions to significant intermediaries providing messaging services. It raises privacy, encryption and proportionality questions and must not be described as a general permission to read every private message.

Platforms must also provide notice and an opportunity to dispute certain account or content actions, subject to urgent statutory exceptions. Compliance design should combine user safety, reasons, appeal or grievance routes and protection against automated over-removal.

13. Synthetic media, deepfakes and the 2026 amendments

Synthetic or altered audio-visual content can support creativity and accessibility but can also impersonate persons, manipulate elections, facilitate fraud or produce non-consensual intimate imagery. Existing criminal, privacy, intellectual-property and election laws may apply depending on the facts.

The Information Technology Rules were amended in 2026 to impose specific duties concerning synthetically generated information, including user declarations, labelling or provenance-related measures and tighter compliance periods for covered intermediaries. These provisions must be applied according to the notified definitions, platform category and effective date.

A label is not a defence to fraud, defamation, obscenity, privacy invasion or infringement. Conversely, synthetic origin alone does not make satire, art or criticism unlawful. Context, deception, consent, harm and the elements of the applicable law remain decisive.

14. Blocking, interception and monitoring

Section 69 permits interception, monitoring or decryption on specified grounds and subject to prescribed safeguards. Section 69A authorises blocking of public access to information through a reasoned statutory process, while section 69B concerns monitoring and collection of traffic data for cybersecurity-related purposes.

Shreya Singhal upheld section 69A and the Blocking Rules in view of their confined grounds, hearing structure and review safeguards. Blocking must not be confused with an ordinary private grievance notice under Rule 3 or a court injunction.

Confidentiality of blocking proceedings does not dispense with jurisdiction, recorded reasons, committee scrutiny and review. Constitutional challenges may examine legality, necessity, proportionality and access to an effective remedy.

15. Investigation, evidence and attribution

Digital investigations depend on lawful seizure or production, preservation of logs, subscriber information, device examination, chain of custody and proof connecting a person to an account or device. An IP address or account name may be relevant but does not invariably prove authorship.

Electronic records are governed by the Bharatiya Sakshya Adhiniyam, 2023. Parties should preserve original devices and files where possible, document collection, retain metadata and satisfy the statutory conditions governing admissibility and proof of electronic records.

Intermediaries may be required to preserve or supply information under lawful authority. Such demands must identify their statutory basis and scope and remain subject to privacy, privilege and proportionality safeguards.

16. Informational privacy and data protection

Justice K.S. Puttaswamy recognises privacy as a fundamental right grounded in dignity and autonomy. State interference requires legality, legitimate aim and proportionality. Private digital services also engage contract, consumer, confidentiality, IT-security and data-protection duties.

The Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 use a staged commencement. Institutional and procedural provisions commenced in November 2025, while substantial obligations and rights have later scheduled commencement dates. As of September 2026, students must check the notification schedule rather than claim that every provision has operated since enactment.

The framework addresses lawful processing, notice and consent, legitimate uses, security safeguards, breach response, children's data, user rights and the Data Protection Board. It complements rather than replaces Article 21 and sector-specific media law.

17. Social networks, algorithms and platform governance

Social networks organise visibility through ranking, recommendation, advertising and moderation systems. Their private rules influence public discourse, but constitutional claims against a private service require analysis of State action, statutory duties, contract and the particular remedy sought.

Algorithmic amplification can increase engagement while spreading misinformation, hate, scams or harmful stereotypes. Responsible governance includes risk assessment, transparent advertising, meaningful notices, accessible grievance systems, researcher accountability and safeguards for children and vulnerable users.

Law should distinguish illegal content from content that merely violates platform policy. Removal under private terms, statutory takedown, criminal prosecution and governmental blocking are legally different decisions.

18. Telecommunications law: historical transition

The Indian Telegraph Act, 1885 historically governed telegraphs, licensing and interception. The Telecommunications Act, 2023 now provides the principal framework for authorisation of telecommunication services and networks, spectrum assignment, standards, security and user protection as its provisions have been brought into force.

The 2023 Act repeals the Telegraph Act and Indian Wireless Telegraphy Act subject to commencement, savings and transitional arrangements. Existing licences, rules and actions may continue under saving provisions until replaced or adapted.

Internet content regulation and telecommunications-network regulation overlap but are not identical. A network authorisation does not make the Department of Telecommunications the general editor of online content, and an intermediary duty does not itself allocate spectrum.

19. Emergency powers, interception and service suspension

The Telecommunications Act permits interception, detention, disclosure or suspension on specified public-emergency, public-safety and statutory grounds, subject to authorised procedure and safeguards. Applicable rules and validly continued transitional rules determine operational requirements.

PUCL v. Union of India developed safeguards against arbitrary telephone interception under the historical framework. Anuradha Bhasin requires publication, proportionality, limited duration and review of internet-suspension orders.

An answer should test competent authority, statutory ground, material supporting necessity, territorial and temporal limits, reasons, review and less restrictive alternatives. National security is important but is not a formula that removes judicial scrutiny.

20. Applied problem and examination method

Assume a platform receives a private email alleging that a political post is false and defamatory. Without a court or governmental order it deletes the account permanently. A deepfake then impersonates the same politician to solicit money; police seek subscriber data, and the State suspends mobile internet throughout a district without publishing an order.

Separate the issues. For the original post, examine platform terms, notice and grievance duties and section 79 after Shreya Singhal. For the deepfake, apply the 2026 synthetic-media duties, sections 66C and 66D, privacy and other substantive offences. For data disclosure, demand lawful authority and proportional scope. For shutdown, apply the Telecommunications framework and Anuradha Bhasin safeguards.

In an examination answer, identify the actor and legal status; classify the act as private moderation, statutory takedown, blocking, investigation or suspension; state the precise IT Act or Rules provision; apply Article 19 and Article 21; address jurisdiction and electronic evidence; and conclude with a proportionate remedy. Never cite section 66A as valid law or treat every complaint as automatic loss of safe harbour.
    `.trim(),
    keyPoints: [
      "Internet communication is interactive, persistent, replicable, algorithmically distributed and often transnational.",
      "Online speech receives Article 19(1)(a) protection; restrictions must fit Article 19(2) and satisfy proportionality.",
      "Section 66A was struck down in Shreya Singhal and cannot be invoked.",
      "Section 43 creates specified civil contraventions; section 66 adds criminal liability when those acts are dishonest or fraudulent.",
      "An intermediary may be a publisher for its own commissioned content and an intermediary for third-party content.",
      "Section 79 safe harbour is conditional and issue-specific; loss of protection does not itself prove the underlying offence.",
      "After Shreya Singhal, private allegations alone do not constitute statutory actual knowledge requiring removal under section 79(3)(b).",
      "Rules 3 and 4 impose general and additional significant-intermediary due diligence and grievance duties.",
      "The 2026 Rules added synthetic-media obligations and shorter compliance periods for covered categories.",
      "Section 69A blocking is distinct from private moderation, a Rule 3 grievance and a judicial injunction.",
      "Electronic attribution requires reliable evidence; an IP address or account name alone may not prove authorship.",
      "The DPDP Act and 2025 Rules have staged commencement, so operative provisions must be checked by date.",
      "The Telecommunications Act, 2023 replaced the colonial framework subject to commencement, savings and transition.",
      "Internet suspension must be temporary, published, necessary, proportionate and periodically reviewed.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-7-constitution", title: "Online speech and restrictions", provision: "Articles 19(1)(a) and 19(2), Constitution of India", description: "Protects expression through digital media subject only to reasonable restrictions on the enumerated constitutional grounds." },
      { id: "media-law-unit-7-privacy", title: "Privacy and dignity", provision: "Articles 14 and 21, Constitution of India", description: "Protects informational autonomy and requires lawful, non-arbitrary and proportionate State interference." },
      { id: "media-law-unit-7-section-43", title: "Computer-related civil contraventions", provision: "Section 43, Information Technology Act, 2000", description: "Addresses unauthorised access, copying, disruption, contaminants, denial of access and specified computer-resource damage." },
      { id: "media-law-unit-7-section-66", title: "Computer-related offences", provision: "Sections 65–66F, Information Technology Act, 2000", description: "Covers source-code tampering, dishonest or fraudulent computer acts, identity theft, personation, privacy and cyber terrorism; section 66A is invalid." },
      { id: "media-law-unit-7-content-offences", title: "Unlawful electronic sexual content", provision: "Sections 67, 67A and 67B, Information Technology Act, 2000", description: "Addresses obscene, sexually explicit and child sexual material in electronic form according to distinct statutory ingredients." },
      { id: "media-law-unit-7-government-powers", title: "Interception, blocking and monitoring", provision: "Sections 69, 69A and 69B, Information Technology Act, 2000", description: "Creates separate governmental powers subject to enumerated grounds, prescribed procedure and constitutional safeguards." },
      { id: "media-law-unit-7-safe-harbour", title: "Intermediary safe harbour", provision: "Section 79, Information Technology Act, 2000", description: "Conditionally protects intermediaries for third-party information when their role and due diligence satisfy the Act and Rules." },
      { id: "media-law-unit-7-jurisdiction", title: "Extraterritorial application", provision: "Section 75, Information Technology Act, 2000", description: "Extends the Act to specified conduct outside India involving a computer resource located in India." },
      { id: "media-law-unit-7-rule-3", title: "Intermediary due diligence", provision: "Rule 3, Information Technology Rules, 2021, as amended", description: "Requires published user rules, prohibited-content notice, grievance handling, preservation and compliance with lawful directions." },
      { id: "media-law-unit-7-rule-4", title: "Significant-intermediary duties", provision: "Rule 4, Information Technology Rules, 2021, as amended", description: "Adds resident officers, reports, traceability-related and other compliance duties for significant social-media intermediaries." },
      { id: "media-law-unit-7-synthetic", title: "Synthetic-media governance", provision: "Information Technology Amendment Rules, 2026", description: "Adds notified duties concerning synthetically generated information, labelling or declarations and revised compliance periods." },
      { id: "media-law-unit-7-evidence", title: "Electronic records and proof", provision: "Bharatiya Sakshya Adhiniyam, 2023", description: "Governs admissibility and proof of electronic records, requiring integrity, provenance and applicable statutory certification." },
      { id: "media-law-unit-7-dpdp", title: "Digital personal data", provision: "Digital Personal Data Protection Act, 2023 and Rules, 2025", description: "Creates India's digital-personal-data framework through staged commencement; operative duties must be verified by date." },
      { id: "media-law-unit-7-telecom", title: "Current telecommunications framework", provision: "Telecommunications Act, 2023", description: "Governs authorisation, networks, spectrum, security, interception and user protection as commenced, with savings for transition." },
      { id: "media-law-unit-7-suspension", title: "Telecommunications suspension safeguards", provision: "Telecommunications Act, applicable Rules and valid transitional provisions", description: "Requires competent authority and statutory grounds for service suspension, read with publication, necessity and review safeguards." },
    ],
    importantCases: [
      { id: "media-law-unit-7-shreya", caseName: "Shreya Singhal v. Union of India", citation: "(2015) 5 SCC 1", principle: "Section 66A was unconstitutional; section 69A survived; intermediary actual knowledge was read down to a court order or proper governmental notification.", summary: "The Supreme Court distinguished protected discussion and advocacy from punishable incitement and prevented vague private notices from becoming automatic censorship commands." },
      { id: "media-law-unit-7-anuradha", caseName: "Anuradha Bhasin v. Union of India", citation: "(2020) 3 SCC 637", principle: "Internet-based speech and trade are constitutionally protected, and suspension orders must be published, temporary, proportionate and reviewed.", summary: "The Court rejected indefinite shutdowns and required structured scrutiny of necessity and less restrictive alternatives." },
      { id: "media-law-unit-7-puttaswamy", caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India", citation: "(2017) 10 SCC 1", principle: "Privacy is a fundamental right grounded in dignity, autonomy and informational control.", summary: "The nine-judge Bench supplies the constitutional foundation for data protection and proportional limits on digital surveillance." },
      { id: "media-law-unit-7-pucl", caseName: "People's Union for Civil Liberties v. Union of India", citation: "(1997) 1 SCC 301", principle: "Telephone interception seriously invades privacy and requires recorded reasons, limited duration and independent review safeguards.", summary: "The decision remains foundational when evaluating interception powers under contemporary telecommunications law." },
      { id: "media-law-unit-7-faheema", caseName: "Faheema Shirin R.K. v. State of Kerala", citation: "2019 SCC OnLine Ker 2976", principle: "Reasonable internet access may form part of education and privacy in the circumstances of student life.", summary: "The Kerala High Court invalidated a disproportionate hostel restriction and linked digital access with learning and autonomy." },
      { id: "media-law-unit-7-avnish", caseName: "Avnish Bajaj v. State (NCT of Delhi)", citation: "2008 SCC OnLine Del 36", principle: "Intermediary and officer liability must follow the statutory text, role, knowledge and legally attributable conduct.", summary: "The Baazee litigation illustrates early platform-liability problems and must be read with the later section 79 amendment and Shreya Singhal." },
      { id: "media-law-unit-7-google", caseName: "Google India Pvt. Ltd. v. Visaka Industries", citation: "(2020) 4 SCC 162", principle: "A claim to intermediary protection cannot be decided abstractly where pleaded facts and the applicable pre-amendment statutory period require trial-stage examination.", summary: "The Court allowed criminal proceedings to continue and cautioned that safe harbour depends on the governing law and factual role." },
      { id: "media-law-unit-7-louboutin", caseName: "Christian Louboutin SAS v. Nakul Bajaj", citation: "2018 SCC OnLine Del 12215", principle: "Active participation in sale, promotion or assurance may affect whether an e-commerce service is acting only as a passive intermediary.", summary: "The Delhi High Court analysed platform functions rather than accepting the intermediary label as conclusive." },
      { id: "media-law-unit-7-swami-ramdev", caseName: "Swami Ramdev v. Facebook, Inc.", citation: "2019 SCC OnLine Del 10701", principle: "Online injunctions raise territorial reach, platform control and cross-border enforcement questions that require tailored relief.", summary: "The Delhi High Court considered removal and disabling of access to identified defamatory content across platform locations." },
      { id: "media-law-unit-7-ajit-mohan", caseName: "Ajit Mohan v. Legislative Assembly, NCT of Delhi", citation: "(2021) 3 SCC 529", principle: "Social platforms have significant influence on public discourse, while institutional demands for information remain bounded by constitutional competence and privilege.", summary: "The Supreme Court examined a legislative committee's summons to Facebook representatives in the context of platform accountability and federal powers." },
      { id: "media-law-unit-7-arjun-panditrao", caseName: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal", citation: "(2020) 7 SCC 1", principle: "Electronic evidence must satisfy statutory proof requirements, including certification where applicable and obtainable.", summary: "Though decided under the former Evidence Act, the judgment remains instructive on authenticity, source and certification of electronic records under the successor framework." },
    ],
    examFocus:
      "Prepare the evolution and characteristics of internet media; Articles 14, 19 and 21 online; Shreya Singhal and the invalidity of section 66A; network shutdown safeguards in Anuradha Bhasin; IT Act sections 43, 65, 66, 66C–66F, 67–67B, 69–69B, 75 and 79; publisher-intermediary distinction; conditional safe harbour and actual knowledge; Rules 3 and 4 duties; the 2026 synthetic-media amendments and current timelines; blocking versus takedown and private moderation; territorial jurisdiction; electronic evidence under the BSA; privacy under Puttaswamy; staged commencement of the DPDP Act and 2025 Rules; the Telecommunications Act, 2023 and historical Telegraph Act transition; and the principles in PUCL, Faheema Shirin, Avnish Bajaj, Google India, Christian Louboutin, Swami Ramdev, Ajit Mohan and Arjun Panditrao.",
    revisionNotes: `
Constitution: internet speech is protected by Article 19(1)(a). Restrictions must fit Article 19(2), use valid law and satisfy proportionality. Section 66A is void.

IT Act map: section 43—civil contraventions; section 66—dishonest or fraudulent computer acts; sections 66C/66D—identity theft and personation; section 66E—privacy; sections 67–67B—content offences; sections 69–69B—interception, blocking and monitoring; section 75—extraterritorial reach; section 79—conditional safe harbour.

Intermediaries: identify the platform's function for the disputed content. Apply Rules 3 and 4, current grievance periods and the 2026 synthetic-media duties. Private moderation, court injunction, government takedown and section 69A blocking are distinct.

Privacy and evidence: apply Puttaswamy legality and proportionality; preserve reliable electronic evidence under the BSA. The DPDP framework commenced in stages from November 2025, so check which provision is operative on the problem date.

Telecommunications: use the 2023 Act as commenced, with savings and transition from the Telegraph Act. Interception and suspension require competent authority, statutory grounds, reasons, necessity, limited duration and review.

Exam warning: never revive section 66A, assume every intermediary is a publisher, treat a private complaint as automatic actual knowledge, or state that every DPDP obligation commenced on enactment.
    `.trim(),
  },
  {
    title: "Media, Advertising and Law",
    shortDescription:
      "Advertising concepts and ethics, indecent representation, objectionable advertisements, magic remedies and consumer protection.",
    overview:
      "This unit examines commercial communication and the legal responsibilities of advertisers, agencies, publishers, broadcasters, endorsers and platforms. It covers advertising ethics, misleading claims, surrogate and prohibited advertising, indecent representation, drugs and magic remedies, and consumer-protection enforcement.",
    objectives: [
      "Define advertising and distinguish commercial speech from editorial and non-commercial communication.",
      "Apply constitutional protection and reasonable restrictions to commercial advertising.",
      "Identify misleading, bait, surrogate, comparative and disguised advertisements.",
      "Apply substantiation, disclosure and due-diligence requirements to advertisers and endorsers.",
      "Explain the protection of children and other vulnerable audiences.",
      "Analyse indecent representation and restrictions on drug and magic-remedy advertisements.",
      "Apply consumer-protection, broadcasting and sector-specific rules to digital advertising.",
      "Distinguish CCPA enforcement from ASCI self-regulation and private consumer remedies.",
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
    detailedContent: `
Unit 8: Media, Advertising and Law

1. Meaning, elements and functions of advertising

Advertising is a paid or otherwise sponsored communication intended to promote goods, services, ideas, persons, institutions or conduct. It may inform consumers, differentiate products, build brands, stimulate demand or influence social behaviour. Modern advertisements appear in print, television, cinema, outdoor media, search results, social networks, games, apps, podcasts and influencer content.

The legal character of a communication depends on substance rather than label. Advertorials, affiliate links, product placement, paid reviews and gifted influencer posts can be advertisements where a material connection affects the communication.

The principal actors are the manufacturer or service provider, advertiser, advertising agency, publisher or broadcaster, platform, endorser and consumer. Responsibility depends on each actor's statutory role, knowledge, control, representation and due diligence.

2. Advertising as commercial speech

Article 19(1)(a) protects the dissemination and receipt of commercial information. In Tata Press Ltd. v. MTNL, the Supreme Court recognised truthful commercial advertising as part of freedom of speech because it supplies information needed for economic choice.

Protection is not absolute. Misleading, fraudulent, unlawful or harmful advertisements may be regulated through valid law. Article 19(2), consumer welfare, public health and restrictions on trade under Article 19(6) must be applied through the correct constitutional route.

Hamdard Dawakhana distinguished advertising closely connected with prohibited commercial activity and misleading drug claims from protected public discussion. Modern analysis should read it together with Tata Press rather than state that all advertisements either lack protection or enjoy the same protection as political speech.

3. Ethics and the advertising ecosystem

Ethical advertising is truthful, honest, decent, fair in competition and mindful of social harm. A claim should reflect the overall impression created by words, images, sound, demonstrations, qualifications and omissions—not merely be literally defensible in one sentence.

The Advertising Standards Council of India administers a voluntary self-regulatory Code. It addresses truthful representations, non-offensiveness, harmful products, safety and fair competition. ASCI can examine complaints and seek modification or withdrawal within its system, but it is not a court and does not exercise all CCPA powers.

Ethical compliance complements statute. An advertisement may breach the ASCI Code without creating a criminal offence, while compliance with an industry code does not cure violation of consumer, drug, broadcasting or criminal law.

4. Consumer rights and misleading advertisements

The Consumer Protection Act, 2019 recognises rights to safety, information, choice, hearing, redressal and consumer awareness. A misleading advertisement includes one that falsely describes a product or service, gives a false guarantee, is likely to mislead about nature, substance, quantity or quality, conveys a representation amounting to an unfair trade practice, or deliberately conceals important information.

Misleading effect is assessed from the perspective of the intended audience and the advertisement as a whole. Fine-print disclaimers cannot ordinarily correct a dominant false impression, and material qualifications must be clear, prominent and proximate to the claim.

Proof of individual purchase is not necessary for the CCPA to investigate an advertisement prejudicial to consumers as a class. An affected consumer may separately pursue the appropriate consumer-commission remedy for loss or injury.

5. Central Consumer Protection Authority

Sections 10 and following of the 2019 Act establish the CCPA to protect, promote and enforce consumer rights as a class and address unfair trade practices and false or misleading advertisements.

Under section 21, the CCPA may direct discontinuance or modification of a false or misleading advertisement and impose penalties on manufacturers or endorsers. The statutory ceiling is ₹10 lakh for a first contravention and ₹50 lakh for a subsequent contravention. It may prohibit an endorser from endorsements for up to one year, extending to three years for a subsequent contravention.

Publishers may also face statutory consequences subject to the Act's conditions and defences. Orders require jurisdiction, notice, reasons and fair procedure and are subject to the appellate framework.

6. The 2022 misleading-advertisement Guidelines

The CCPA's Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022 apply across forms, formats and media. They specify conditions for valid advertisements and regulate bait advertisements, free claims, children's advertisements, surrogate advertisements and endorsements.

A valid advertisement must contain truthful and honest representations, not mislead by implication or omission, and avoid exaggeration likely to mislead. Claims that can be objectively verified require adequate substantiation before publication.

Qualifications should not contradict the headline claim. Technical data must be relevant and fairly presented. A demonstration should reflect ordinary use unless the exceptional conditions are prominently disclosed.

7. Bait advertising and free claims

A bait advertisement promotes goods or services at an attractive price to draw consumers. It must reflect a genuine intention and reasonable prospect of supplying the advertised product in reasonable quantities and for a reasonable period, having regard to the market and nature of the advertisement.

Material limitations on availability, geography, stock, eligibility and duration should be stated clearly. Deliberately attracting consumers with unavailable goods and diverting them to a more expensive product may be misleading and an unfair trade practice.

The word free cannot disguise mandatory charges or recovery of the supposed gift's cost through inflated pricing. Ordinary unavoidable delivery charges may be distinguished, but the overall representation must remain honest.

8. Surrogate advertising and prohibited products

Surrogate advertising indirectly promotes goods or services whose advertising is prohibited or restricted by using a similar brand, logo, colour, layout or presentation for another product. The inquiry examines whether the extension is genuine or a device to keep the restricted brand visible.

The 2022 Guidelines prohibit surrogate or indirect advertising while allowing genuine brand extensions that satisfy the applicable conditions. Evidence may include production, distribution, sales, market presence, investment and whether the advertisement primarily depicts the lawful extension.

Alcohol, tobacco and other restricted categories also engage sector-specific laws and the Cable Advertising Code. A disclaimer alone does not transform a sham extension into a lawful advertisement.

9. Endorsements and due diligence

An endorsement communicates the endorser's opinion, finding, experience or association. Celebrities, experts and influencers can materially affect consumer trust and must not make representations beyond their actual experience or adequate information.

The 2022 Guidelines require genuine, reasonably current opinion and due diligence to verify claims. Section 21 provides an endorser defence where due diligence was exercised. The level of verification should reflect the endorser's expertise, seriousness of the claim and risk to consumers.

Experts must possess relevant qualifications. Endorsers should review substantiation, use the product where personal experience is claimed, disclose material connections and avoid guarantees of results that cannot ordinarily be achieved.

10. Influencer and digital-advertising disclosures

Payment, gifts, free travel, discounts, affiliate commission, employment or another material connection can turn social content into advertising. The promotional nature must be disclosed clearly and prominently in language the audience understands.

The Department of Consumer Affairs' Endorsement Know-hows for Celebrities, Influencers and Virtual Influencers and the ASCI influencer guidelines support labels such as advertisement, ad, sponsored, collaboration or partnership where appropriate. A disclosure hidden among hashtags, after a more button or only on a profile page may be ineffective.

Virtual influencers and AI-generated presenters do not remove advertiser responsibility. Platforms and agencies should preserve instructions, approvals, substantiation and disclosure records.

11. Health and wellness advertising

Health claims carry enhanced risk because consumers may delay treatment or spend money based on promised outcomes. Qualifications and certifications of health and wellness influencers must be disclosed when they present themselves as experts, and claims should remain within competence and reliable evidence.

The 2023 additional influencer guidance distinguishes general wellness experiences from specific health advice. Personal testimony is not clinical proof. Advertisements should not guarantee cures, exploit fear, encourage unsafe self-medication or disparage necessary medical care.

The Consumer Protection Act operates alongside the Drugs and Cosmetics framework, food-safety law, the Drugs and Magic Remedies Act and professional standards.

12. Advertisements directed at children

Children may lack the experience to recognise exaggeration, embedded persuasion and influencer marketing. The 2022 Guidelines prohibit advertisements that exploit credulity, encourage dangerous imitation, create inferiority for not possessing a product, undermine parental authority or make inappropriate health and achievement claims.

Children should not be urged to purchase where they cannot lawfully contract, pressure adults or enter unsafe situations. Disclosures must be understandable to the intended age group.

Advertising of products restricted for children and use of children's data may engage additional food, education, gaming, privacy and platform rules. The child audience and placement context are as important as the wording.

13. Coaching and educational advertisements

The CCPA's Guidelines for Prevention of Misleading Advertisements in the Coaching Sector, 2024 address concealment and exaggeration concerning course details, faculty, recognition, success rates, ranks, job security and guaranteed selection.

An institute using a successful candidate's name or image must accurately disclose the course taken, duration and whether it was paid or free. It must not imply that a test series or interview programme constituted full classroom coaching.

Claims such as 100 per cent selection, guaranteed job or number one require robust, transparent evidence. Important terms, refund conditions, accreditation status and realistic outcomes must not be hidden.

14. Environmental claims and greenwashing

Terms such as green, eco-friendly, sustainable, carbon-neutral and biodegradable can influence purchasing but may be vague or selectively framed. The CCPA's 2024 Greenwashing Guidelines require truthful, clear, specific and adequately substantiated environmental claims.

Advertisers should identify whether a claim concerns the whole product, one component, packaging, manufacturing or a limited life-cycle stage. Certifications and comparative environmental advantages must be verifiable and relevant.

Future targets should disclose the plan, basis and measurable steps. An attractive natural image cannot cure a materially misleading environmental representation.

15. Comparative advertising, puffery and disparagement

Comparative advertising identifies or implies a competitor and compares price, performance or another feature. Honest comparison can improve consumer information, but the basis must be like-for-like, current, material and substantiated.

Puffery consists of obvious subjective boasting that reasonable consumers would not treat as a measurable fact. A specific assertion—such as twice as effective or lowest price—is ordinarily capable of proof and cannot be defended merely as sales talk.

An advertiser may highlight genuine advantages but should not make false statements or unfairly denigrate a competitor's goods. Trade-mark use, passing off, copyright, malicious falsehood and unfair competition may overlap with consumer law.

16. Indecent representation of women

The Indecent Representation of Women (Prohibition) Act, 1986 prohibits indecent representation of women through advertisements and specified publications, writings, paintings, figures and other forms covered by its text, subject to statutory exceptions.

Indecent representation is defined around depiction of a woman's figure, form or body in a manner having the effect of being indecent, derogatory or denigrating or likely to deprave, corrupt or injure public morality. Application must remain sensitive to constitutional expression, equality and dignity rather than moral dislike alone.

Proposals to expand or replace the statute should not be treated as enacted law unless Parliament has passed and commenced them. Other laws may address obscenity, sexual harassment, voyeurism, children and platform content.

17. Drugs and Magic Remedies Act

The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 controls advertisements of drugs for specified purposes, prohibits misleading drug advertisements and restricts advertisements of magic remedies for treatment of scheduled diseases and conditions.

Sections 3 and 4 respectively address prohibited categories and false or misleading drug claims; section 5 concerns magic remedies. The Schedule and applicable rules must be checked. The term advertisement is broad and includes notices, labels, wrappers and oral or other announcements within the Act.

The Act must be read with drug and AYUSH regulation and consumer law. Traditional origin, celebrity endorsement or publication of a testimonial does not excuse an unlawful cure claim.

18. Broadcasting and sector-specific advertising codes

Section 6 of the Cable Television Networks (Regulation) Act, 1995 prohibits transmission of advertisements that do not conform to the prescribed Advertising Code. Rule 7 restricts misleading, offensive and harmful advertising and specified product categories and requires compliance with applicable laws.

Television advertising may also engage channel permission conditions, advisories and sector regulators. Food, insurance, securities, financial products, real estate, gaming, tobacco and alcohol each have additional rules or restrictions administered by their competent authorities.

The same campaign may therefore require layered compliance. Approval under one industry code is not a licence to violate another statute.

19. Remedies and enforcement map

A consumer can preserve the advertisement, invoice, terms, screenshots and evidence of reliance or loss; complain to the seller or platform; approach the appropriate consumer commission; or report class-wide misleading advertising to the CCPA.

ASCI provides a self-regulatory complaint route. Cable advertisements may be raised through the broadcasting grievance and governmental structure. Drug, food, securities, insurance or other regulated claims should also be reported to the competent sector authority.

Possible remedies include correction or withdrawal, refund, replacement, compensation, discontinuance of unfair practice, corrective advertisement, statutory penalty, endorser prohibition, injunction and, where statutory ingredients exist, criminal prosecution. Forum and relief must match the law invoked.

20. Applied problem and examination method

Assume an influencer receives payment to advertise a herbal product as a guaranteed cure for diabetes but gives no disclosure. The video uses a doctor title without qualification, claims clinically proven without evidence, targets children, compares the product with insulin, and links to a limited-stock free trial that imposes hidden subscription charges. A television version uses the same brand identity as a prohibited liquor product.

Apply the Consumer Protection Act, section 21, the 2022 Guidelines, influencer and health guidance, the Drugs and Magic Remedies Act, children's-advertising safeguards, comparative-advertising principles, bait and free-claim rules, surrogate-advertising rules and the Cable Advertising Code. Assess advertiser, endorser, publisher, platform and sectoral responsibility separately.

For an examination answer, define advertisement and commercial speech; identify the claim and intended audience; distinguish fact from puffery; test truth, substantiation, disclosure and material omission; identify special categories and sectoral prohibitions; map CCPA, consumer commission, ASCI and regulatory remedies; then apply leading cases. Do not describe ASCI as a criminal court or assume that fine print cures a deceptive overall impression.
    `.trim(),
    keyPoints: [
      "Truthful commercial information is protected speech, but misleading and unlawful advertising may be regulated.",
      "An advertisement is assessed by its overall impression, including images, omissions and qualifications.",
      "The Consumer Protection Act protects consumers individually and as a class against misleading advertisements.",
      "The CCPA may order discontinuance or modification and impose statutory penalties under section 21.",
      "The 2022 Guidelines govern valid, bait, free-claim, surrogate, children's and endorsement advertising across media.",
      "Objective claims require adequate substantiation before publication; contradictory fine print is insufficient.",
      "An endorser's opinion must be genuine, reasonably current and supported by appropriate due diligence.",
      "Influencers must clearly disclose payment, gifts, affiliate benefits and other material connections.",
      "Health claims, child-directed advertisements and educational outcome claims receive heightened scrutiny.",
      "The 2024 coaching guidelines require accurate disclosure of a successful candidate's actual course and duration.",
      "Environmental claims must identify their scope and possess reliable substantiation under the 2024 Greenwashing Guidelines.",
      "Genuine comparative advertising is permitted, but false measurable claims and unfair disparagement are not.",
      "The 1986 indecent-representation statute remains operative; proposed amendments are not current law unless enacted.",
      "Drug and magic-remedy claims are governed by a special statute alongside consumer and sectoral law.",
      "ASCI self-regulation, CCPA enforcement, consumer adjudication and sectoral regulation are distinct remedies.",
    ],
    statutoryProvisions: [
      { id: "media-law-unit-8-constitution", title: "Commercial speech", provision: "Articles 19(1)(a), 19(2) and 19(6), Constitution of India", description: "Protects truthful commercial information while permitting valid and proportionate regulation of misleading or harmful trade communication." },
      { id: "media-law-unit-8-consumer-rights", title: "Consumer rights and definitions", provision: "Sections 2(9), 2(28) and 2(47), Consumer Protection Act, 2019", description: "Defines consumer rights, misleading advertisements and unfair trade practices forming the foundation of advertising control." },
      { id: "media-law-unit-8-ccpa", title: "CCPA powers", provision: "Sections 10, 18–21, Consumer Protection Act, 2019", description: "Authorises investigation, discontinuance or modification, penalties and endorser prohibitions for misleading advertisements." },
      { id: "media-law-unit-8-consumer-remedy", title: "Consumer remedies", provision: "Sections 34–39, 47–49 and 58–59, Consumer Protection Act, 2019", description: "Provides jurisdiction and remedial powers of consumer commissions, including discontinuance, compensation and corrective advertisement." },
      { id: "media-law-unit-8-2022-guidelines", title: "General advertising standards", provision: "CCPA Misleading Advertisements and Endorsements Guidelines, 2022", description: "Regulates valid advertisements, bait offers, free claims, children, surrogate advertising and endorser due diligence." },
      { id: "media-law-unit-8-influencers", title: "Influencer disclosure", provision: "Endorsement Know-hows, 2023 and applicable ASCI Influencer Guidelines", description: "Requires clear disclosure of material connections and responsible presentation by celebrities, influencers and virtual influencers." },
      { id: "media-law-unit-8-coaching", title: "Coaching-sector claims", provision: "CCPA Guidelines for Prevention of Misleading Advertisements in Coaching Sector, 2024", description: "Requires truthful disclosure of courses, successful candidates, results, facilities and recognition and prohibits guaranteed outcomes." },
      { id: "media-law-unit-8-greenwashing", title: "Environmental claims", provision: "CCPA Guidelines for Prevention and Regulation of Greenwashing, 2024", description: "Requires clear scope, accessible qualification and adequate substantiation for environmental and sustainability claims." },
      { id: "media-law-unit-8-indecent", title: "Indecent representation", provision: "Sections 2(c), 3–4 and 6, Indecent Representation of Women (Prohibition) Act, 1986", description: "Defines and prohibits specified indecent representation in advertisements and publications and provides statutory consequences." },
      { id: "media-law-unit-8-drugs", title: "Drug and magic-remedy advertisements", provision: "Sections 3–5, Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954", description: "Restricts specified drug advertisements, misleading claims and advertisements of magic remedies for covered conditions." },
      { id: "media-law-unit-8-drug-rules", title: "Drug-advertisement procedure", provision: "Drugs and Magic Remedies (Objectionable Advertisements) Rules, 1955", description: "Supplements the Act with the prescribed regulatory and enforcement framework." },
      { id: "media-law-unit-8-cable", title: "Television Advertising Code", provision: "Section 6, Cable Television Networks Act, 1995 and Rule 7 of the 1994 Rules", description: "Requires cable advertisements to comply with prescribed content, product, decency and consumer-protection standards." },
      { id: "media-law-unit-8-asci", title: "Advertising self-regulation", provision: "ASCI Code for Self-Regulation in Advertising", description: "Provides voluntary industry standards on truthful claims, harmful content, safety and fair competition; it does not replace statute." },
      { id: "media-law-unit-8-food", title: "Food advertising", provision: "Food Safety and Standards Act, 2006 and Advertising and Claims Regulations, 2018", description: "Regulates false or misleading food representations, nutrition and health claims and responsibility of food businesses." },
      { id: "media-law-unit-8-trademarks", title: "Comparative advertising and marks", provision: "Sections 29(8) and 30(1), Trade Marks Act, 1999", description: "Balances truthful comparative use with protection against unfair advantage, detriment and denigration of registered marks." },
    ],
    importantCases: [
      { id: "media-law-unit-8-tata-press", caseName: "Tata Press Ltd. v. Mahanagar Telephone Nigam Ltd.", citation: "(1995) 5 SCC 139", principle: "Truthful commercial advertising forms part of Article 19(1)(a) and supports consumers' right to receive information.", summary: "The Supreme Court recognised commercial speech while preserving regulation of deceptive, unfair and illegal advertisements." },
      { id: "media-law-unit-8-hamdard", caseName: "Hamdard Dawakhana v. Union of India", citation: "AIR 1960 SC 554", principle: "Advertising connected with prohibited commercial activity and objectionable drug claims may be controlled in the public interest.", summary: "The Court considered constitutional challenges to the Drugs and Magic Remedies Act and distinguished such claims from protected idea-based expression." },
      { id: "media-law-unit-8-common-cause", caseName: "Common Cause v. Union of India", citation: "(2015) 7 SCC 1", principle: "Government advertising must serve public purposes and cannot become partisan publicity or personality promotion funded by the public.", summary: "The Supreme Court framed neutrality, fairness, accountability and cost-related principles for governmental advertisements." },
      { id: "media-law-unit-8-colgate", caseName: "Colgate Palmolive (India) Ltd. v. Hindustan Lever Ltd.", citation: "(1999) 7 SCC 1", principle: "Interim relief in comparative advertising requires careful assessment of deception, competitive injury, public interest and the balance of convenience.", summary: "The Supreme Court examined competing product claims and the standards governing interlocutory restraint." },
      { id: "media-law-unit-8-dabur", caseName: "Dabur India Ltd. v. Colortek Meghalaya Pvt. Ltd.", citation: "2010 SCC OnLine Del 391", principle: "An advertiser may praise its goods and make honest comparison but cannot falsely denigrate a competitor's product.", summary: "The Delhi High Court explained the distinction among puffery, comparative claims and actionable disparagement." },
      { id: "media-law-unit-8-havells", caseName: "Havells India Ltd. v. Amritanshu Khaitan", citation: "2015 SCC OnLine Del 8115", principle: "Comparative advertisements must compare like parameters and avoid a misleading overall representation.", summary: "The Delhi High Court assessed product comparison, substantiation and the line between permitted promotion and disparagement." },
      { id: "media-law-unit-8-pepsi", caseName: "Pepsi Co. Inc. v. Hindustan Coca Cola Ltd.", citation: "2003 SCC OnLine Del 802", principle: "Humour and puffery are permissible, but the manner, storyline and message determine whether an advertisement disparages a rival product.", summary: "The Delhi High Court developed a contextual test for comparative advertising and denigration." },
      { id: "media-law-unit-8-horlicks", caseName: "Horlicks Ltd. v. Heinz India Pvt. Ltd.", citation: "2018 SCC OnLine Del 12975", principle: "Scientific and nutritional comparisons require a fair foundation and cannot create a misleading impression through selective data.", summary: "The Delhi High Court scrutinised comparative health claims, supporting studies and presentation to consumers." },
      { id: "media-law-unit-8-patanjali", caseName: "Indian Medical Association v. Union of India", citation: "Supreme Court proceedings in W.P.(C) No. 645 of 2022", principle: "Public-health advertisements and endorsements demand accountable substantiation, regulatory enforcement and compliance with court undertakings.", summary: "The Supreme Court proceedings concerning misleading medicinal claims emphasised consumer safety, advertiser responsibility and effective enforcement across media." },
      { id: "media-law-unit-8-asci-metro", caseName: "Advertising Standards Council of India v. Metro Tyres Ltd.", citation: "2017 SCC OnLine Del 11789", principle: "Self-regulatory review and judicial trademark or disparagement remedies occupy different legal fields.", summary: "The Delhi High Court considered the relationship between ASCI proceedings and private litigation over comparative advertising." },
      { id: "media-law-unit-8-sakal", caseName: "Sakal Papers (P) Ltd. v. Union of India", citation: "AIR 1962 SC 305", principle: "The State cannot indirectly abridge press freedom through regulation of pages, price and circulation.", summary: "The decision helps distinguish regulation of commercial advertisements from measures that burden the newspaper's protected circulation and editorial space." },
    ],
    examFocus:
      "Prepare the definition, functions and forms of advertising; advertorials, influencers and material connections; commercial speech under Tata Press and Hamdard Dawakhana; consumer rights and misleading advertisement under sections 2(9), 2(28) and 2(47); CCPA powers and section 21 penalties; the 2022 Guidelines on valid advertisements, bait advertising, free claims, children, surrogate advertising and endorsements; disclosure and due diligence for celebrities, influencers and virtual influencers; 2023 health guidance; 2024 coaching and greenwashing guidelines; comparative advertising, puffery and disparagement; Indecent Representation of Women Act sections 2–4 and 6; Drugs and Magic Remedies Act sections 3–5; Cable Rule 7; ASCI's non-statutory role; sector-specific food and other codes; consumer and regulatory remedies; and the principles in Common Cause, Colgate Palmolive, Dabur, Havells, Pepsi, Horlicks, IMA v. Union of India, ASCI v. Metro Tyres and Sakal Papers.",
    revisionNotes: `
Commercial speech: truthful advertising is protected under Article 19(1)(a), but misleading, fraudulent, unlawful and harmful claims may be regulated. Read Tata Press with Hamdard Dawakhana.

Consumer framework: define misleading advertisement and unfair trade practice; apply CCPA sections 18–21 and consumer-commission remedies. First/subsequent section 21 penalty ceilings are ₹10 lakh/₹50 lakh, with endorsement prohibition up to one/three years.

2022 Guidelines: test overall impression, substantiation, material omission, qualifications, bait offers, free claims, children, surrogate advertising and endorser due diligence. Fine print cannot contradict the dominant message.

Current special guidance: disclose influencer material connections; apply heightened care to health claims; disclose actual course and duration for coaching successes; define and substantiate environmental claims under the 2024 Greenwashing Guidelines.

Special statutes: apply the 1986 indecent-representation law, Drugs and Magic Remedies Act and Rules, Cable Advertising Code, food and other sectoral regimes. Do not treat proposed legislation as current law.

Remedies: distinguish CCPA class enforcement, consumer-commission adjudication, ASCI self-regulation, broadcasting complaints, sector regulators, civil injunction and criminal prosecution.
    `.trim(),
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
