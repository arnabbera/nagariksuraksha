const assist = (title, description) => ({ title, description });

export const LEGAL_SERVICES = [
  {
    slug: "civil-law", title: "Civil Law",
    description: "Property disputes, injunctions, recovery suits, partition, contracts and civil litigation.",
    assistance: [
      assist("Case assessment and remedy planning", "We review the facts, documents, limitation period and present stage of the dispute to explain the civil remedies and appropriate forum that may be available."),
      assist("Property, possession and partition disputes", "We assist with ownership, possession, co-owner and family partition conflicts, including claims for declaration, recovery of possession or protection of property rights."),
      assist("Injunction and urgent protection", "We help organise facts and records for temporary or permanent injunction matters involving transfer, construction, interference or dispossession."),
      assist("Money recovery and contractual disputes", "We support claims arising from unpaid dues, loans, breached agreements, business transactions or failure to perform contractual obligations."),
      assist("Legal notices, pleadings and replies", "We help prepare or review notices, responses, plaints, written statements, affidavits and related documents so the relevant facts and reliefs are presented clearly."),
      assist("Court-process guidance", "We explain filing stages, evidence requirements, interim applications, hearings and execution while preparing an organised document set for legal consultation."),
    ],
    documents: ["Deeds, contracts and agreements", "Notices, pleadings and court orders", "Payment records and correspondence"],
  },
  {
    slug: "criminal-law", title: "Criminal Law",
    description: "Criminal defence, FIR assistance, anticipatory bail, regular bail and trial matters.",
    assistance: [
      assist("Complaint and FIR guidance", "We help organise the incident chronology, identify relevant evidence and explain the available channels for submitting and following up a complaint."),
      assist("Police and court notices", "We review notices, summons and case papers, explain their significance and help prepare the information required for a timely response."),
      assist("Anticipatory and regular bail", "We assist in compiling the case background, grounds, supporting records and personal information needed for consultation and bail preparation."),
      assist("Defence and trial support", "We arrange FIRs, charge sheets, witness materials, medical records, seizure lists and orders for a proper review of the allegations and procedural stage."),
      assist("Victim and complainant assistance", "We explain complaint follow-up, evidence preservation and procedural options that may be available to victims or complainants during investigation and trial."),
      assist("Evidence and procedure", "We provide practical guidance on maintaining records, documenting communications and preparing the matter for representation by a qualified criminal-law practitioner."),
    ],
    documents: ["Complaint, FIR or diary details", "Police or court notices", "Evidence, orders and identity documents"],
  },
  {
    slug: "property-law", title: "Property Law",
    description: "Property verification, registration, mutation, title search and legal due diligence.",
    assistance: [
      assist("Title and ownership verification", "We examine the chain of title, prior transfers and ownership records to identify missing links, inconsistencies or matters requiring further verification."),
      assist("Encumbrance and mortgage checks", "We guide review of registered encumbrances, existing loans, charges, litigation and possession issues before a property transaction."),
      assist("Agreement and deed review", "We review agreements for sale, conveyances and transaction terms covering payment, possession, representations, indemnities and default."),
      assist("Registration and stamp-duty guidance", "We explain document readiness, execution and registration and the records that parties should retain afterward."),
      assist("Mutation and municipal records", "We provide guidance on updating land, municipal or revenue records while explaining the purpose and limitations of mutation."),
      assist("Disputes and transaction risks", "Where conflict or suspected fraud exists, we organise the evidence, identify urgent risks and prepare the matter for the appropriate legal process."),
    ],
    documents: ["Title deeds and chain documents", "Mutation, tax and municipal records", "Sale, loan and mortgage documents"],
  },
  {
    slug: "cyber-law", title: "Cyber Law",
    description: "Online fraud, cyber crime, social media complaints and digital evidence guidance.",
    assistance: [
      assist("Online financial-fraud response", "We guide immediate reporting and documentation for UPI, card, banking, investment, shopping or impersonation fraud."),
      assist("Cybercrime complaint preparation", "We structure the incident timeline, transaction details, suspect identifiers and supporting evidence for the cybercrime portal or police."),
      assist("Social-media abuse and impersonation", "We assist with documenting fake profiles, account takeovers, harassment, threats, defamation and misuse of images."),
      assist("Digital evidence preservation", "We explain how to retain original messages, emails, URLs, headers, screenshots and transaction references without altering important evidence."),
      assist("Privacy and compromised accounts", "We provide initial guidance for unauthorised access, data misuse, privacy violations and compromised online accounts."),
      assist("Follow-up and escalation", "We organise acknowledgement numbers, bank responses and communications for follow-up with the relevant institution or authority."),
    ],
    documents: ["Screenshots, emails and chat records", "Transaction and bank records", "Account links and complaint acknowledgements"],
  },
  {
    slug: "family-law", title: "Family Law",
    description: "Divorce, maintenance, child custody, domestic violence and family settlements.",
    assistance: [
      assist("Matrimonial consultation", "We organise the marital history, key events and documents and explain common options such as reconciliation, settlement, separation or divorce."),
      assist("Divorce proceedings", "We assist with mutual-consent or contested proceedings by identifying relevant facts, financial issues and connected claims."),
      assist("Maintenance and financial support", "We compile income, expenses, dependants, assets and liabilities for maintenance matters involving a spouse, child or eligible family member."),
      assist("Child custody and visitation", "We organise information concerning the child’s welfare, education, health, living arrangements and proposed visitation or parenting plan."),
      assist("Domestic violence protection", "We explain documentation and support options for domestic violence, residence, protection and monetary-relief concerns, including urgent local assistance."),
      assist("Settlement and document review", "We review terms concerning residence, maintenance, custody, property, belongings and pending proceedings so obligations are clearly expressed."),
    ],
    documents: ["Marriage and identity documents", "Income, asset and expense records", "Notices, petitions, orders and communications"],
  },
  {
    slug: "consumer-protection", title: "Consumer Protection",
    description: "Consumer complaints, defective products, banking disputes and compensation claims.",
    assistance: [
      assist("Eligibility and forum assessment", "We review the transaction, deficiency, limitation period, amount and requested relief to explain whether and where a consumer complaint may be filed."),
      assist("Goods and service complaints", "We assist with defective products, deficient services, misleading claims, unfair charges, refused warranties and failure to provide what was promised."),
      assist("Banking, insurance and housing disputes", "We organise grievances involving banks, insurers, builders and housing providers, including payments, terms, correspondence and loss."),
      assist("Notice and complaint preparation", "We prepare a clear demand or complaint describing the transaction, problem, resolution attempts and requested refund, replacement or compensation."),
      assist("Evidence and loss calculation", "We compile invoices, receipts, warranties, photographs, emails and financial records and present a reasoned calculation of loss."),
      assist("Mediation and proceedings", "We explain the progression from company grievance and notice to mediation or consumer proceedings and maintain an organised case record."),
    ],
    documents: ["Invoices, receipts and warranties", "Complaints and company responses", "Evidence of loss and payment"],
  },
  {
    slug: "banking-sarfaesi", title: "Banking & SARFAESI",
    description: "Home loan disputes, SARFAESI matters, DRT proceedings and banking litigation.",
    assistance: [
      assist("Loan and account review", "We examine sanction terms, security documents, statements, interest, charges, repayment records and correspondence to identify key issues."),
      assist("Home-loan and banking disputes", "We organise disputes involving disbursement, property verification, repayment, account classification, recovery conduct or deficiency in banking service."),
      assist("SARFAESI notice assessment", "We explain the significance and timelines of demand, possession, sale and auction notices and compile facts, payments and objections for urgent review."),
      assist("Possession and auction concerns", "We organise notices, valuation or sale records, property papers and the sequence of events where a secured asset faces possession or auction."),
      assist("DRT proceeding support", "We arrange pleadings, applications, bank records, notices, evidence and orders for Debt Recovery Tribunal and connected proceedings."),
      assist("Representations and evidence", "We prepare chronologies, representations and document sets for the bank, grievance channels or counsel while highlighting important deadlines."),
    ],
    documents: ["Loan and sanction documents", "Account statements and payment records", "Demand, possession and auction notices"],
  },
  {
    slug: "corporate-law", title: "Corporate Law",
    description: "Business registration, agreements, contracts, compliance and legal advisory.",
    assistance: [
      assist("Business structure and formation", "We explain commonly used business structures and their formation, ownership, governance and documentation considerations."),
      assist("Commercial agreement review", "We review vendor, customer, partnership, service and confidentiality terms, focusing on duties, payment, risk and termination."),
      assist("Policies and documentation", "We organise operational documents and policies concerning customers, employees, data, payments and business processes."),
      assist("Compliance planning", "We provide an initial checklist of registrations, records, approvals and contractual obligations, with specialist consultation where required."),
      assist("Payment and contract disputes", "We assist with unpaid invoices, breached terms and business claims by compiling agreements, performance records, notices and correspondence."),
      assist("Negotiation and legal coordination", "We support business notices and settlement points and prepare matters for negotiation, mediation or formal legal proceedings."),
    ],
    documents: ["Registration records", "Agreements and policies", "Invoices, notices and correspondence"],
  },
];

export const getLegalServiceBySlug = (slug) =>
  LEGAL_SERVICES.find((service) => service.slug === slug) || null;
