import { createChapterModel } from "../../models/ChapterModel";
import { createCourseBookModel } from "../../models/CourseBookModel";
import { createCourseModel } from "../../models/CourseModel";

export const ENVIRONMENTAL_LAW_COURSE_ID =
  "environmental-law";

export const environmentalLawCourse = createCourseModel({
  id: ENVIRONMENTAL_LAW_COURSE_ID,
  title: "Environmental Law",
  slug: ENVIRONMENTAL_LAW_COURSE_ID,
  shortDescription:
    "Study Indian environmental law, constitutional protections, pollution-control legislation, biodiversity, wildlife, forests and the National Green Tribunal.",
  description:
    "A structured eight-unit course covering international environmental declarations, India's constitutional and policy framework, pollution-control statutes and institutions, environmental public-interest litigation, liability and enforcement, forest and wildlife protection, biological diversity and the National Green Tribunal.",
  duration: "Self-paced",
  courseType: "subject-course",
  accessType: "paid-enrollment",
  certificationAvailable: true,
  certificationFee: 49,
  featured: false,
  order: 8,
  totalChapters: 8,
  status: "draft",
  createdBy: "system",
  updatedBy: "system",
  seo: {
    title: "Environmental Law Course | NagarikSuraksha",
    description:
      "Study environmental law through eight structured units covering constitutional protection, pollution-control laws, forests, wildlife, biodiversity and the National Green Tribunal.",
    focusKeyword: "environmental law course",
    secondaryKeywords: [
      "environmental law notes",
      "Environment Protection Act 1986",
      "Air Act 1981",
      "Water Act 1974",
      "National Green Tribunal Act 2010",
      "LLB environmental law course",
    ],
    canonicalUrl: "/courses/environmental-law",
    robots: {
      index: false,
      follow: false,
    },
    sitemap: {
      include: false,
    },
  },
});

const units = [
  {
    title: "International Environmental Policy and Sustainable Development",
    shortDescription:
      "Environmental consequences of development policies and the Stockholm, Rio, Johannesburg and Rio+20 declarations.",
    overview:
      "This unit examines how industrial, agricultural, energy, infrastructure, urban and resource-use policies can damage the natural environment. It then traces the development of international environmental law from the 1972 Stockholm Conference through the 1992 Rio Earth Summit, the 2002 Johannesburg World Summit and Rio+20 in 2012, with special attention to sustainable development, prevention, precaution, polluter pays, intergenerational equity, public participation and common but differentiated responsibilities.",
    learningObjectives: [
      "Explain how public policies can create direct, indirect, cumulative and transboundary environmental harm.",
      "Describe the background, principal documents and legal significance of the 1972 Stockholm Conference.",
      "Analyse the Rio Declaration, Agenda 21 and the principal outcomes of the 1992 Earth Summit.",
      "Evaluate the contribution of the 2002 Johannesburg Summit and Rio+20 to implementation and institutional reform.",
      "Distinguish prevention, precaution, polluter pays, intergenerational equity, public participation and common but differentiated responsibilities.",
      "Explain the soft-law character of the declarations and their influence on treaties, legislation, policy and judicial reasoning.",
      "Apply international environmental principles to an Indian policy problem and structure an examination answer with relevant cases.",
    ],
    detailedContent: `
1. Environment, development and public policy

Environmental law does not operate only after pollution occurs. Government choices concerning industry, energy, transport, mining, agriculture, water, forests, cities, trade and public finance determine how natural resources are used and how environmental costs are distributed. A policy may expressly promote environmental protection, or it may pursue economic and social objectives while producing serious ecological consequences.

The natural environment includes air, water, soil, climate, forests, wetlands, rivers, coasts, wildlife, biological diversity and the ecological relationships among them. Environmental harm may be direct, such as the discharge of untreated effluent; indirect, such as urban expansion caused by a new highway; cumulative, where many individually small projects damage an airshed or river basin; delayed, as with persistent chemicals; or transboundary, where pollution or resource loss affects another State or an area beyond national jurisdiction.

Development is necessary for health, housing, employment, food, energy and infrastructure. Environmental law therefore does not assume that every project must be stopped. Its central task is to integrate ecological limits and social justice into decision-making so that present needs are met without transferring unacceptable costs to vulnerable communities, future generations or other species.

2. How sectoral policies adversely affect the environment

Industrial and manufacturing policies may encourage rapid production without adequate siting rules, clean technology, emission standards or waste treatment. The results can include air pollution, contaminated rivers and groundwater, hazardous waste, occupational exposure and industrial accidents. Where regulators undervalue environmental damage, society bears costs that should have been prevented or internalised by the activity causing them.

Energy and mining policies may produce deforestation, habitat fragmentation, land degradation, mine drainage, fly ash, greenhouse-gas emissions and displacement of local or tribal communities. Fossil-fuel subsidies can lock an economy into pollution-intensive infrastructure, while poorly planned renewable-energy projects may also affect forests, grasslands, rivers or wildlife if location and cumulative impact are ignored.

Agricultural policies can improve food security but may also promote excessive groundwater extraction, monoculture, chemical fertiliser and pesticide use, soil salinity, loss of indigenous crop diversity, residue burning and nutrient runoff. Procurement prices, electricity subsidies, irrigation priorities and input subsidies may unintentionally reward environmentally harmful practices.

Large dams, river-valley projects and irrigation policies may provide electricity and water while submerging forests, changing sediment and downstream flows, affecting fisheries, displacing communities and altering river ecology. Sound policy requires basin-level and cumulative assessment, environmental flows, alternatives analysis, rehabilitation and continuing monitoring rather than a narrow project-only inquiry.

Urban, housing and transport policies may cause sprawl, wetland encroachment, loss of urban forests, congestion, air and noise pollution, sewage discharge, flooding and heat-island effects. Road-centred transport and weak public transit increase fuel use and emissions. Infrastructure built without regard to drainage, carrying capacity and climate risk can convert a natural hazard into a human-made disaster.

Forestry, tourism and coastal-development policies may replace diverse ecosystems with commercial plantations, fragment wildlife corridors, overload fragile destinations, damage dunes and mangroves, and restrict customary community access. Trade, consumer and waste policies may accelerate extraction and produce plastic, electronic and hazardous waste unless product design, extended producer responsibility, repair, recycling and safe disposal are built into the regulatory system.

3. Environmental safeguards in policy-making

A preventive policy framework begins with reliable baseline data and consideration of reasonable alternatives, including the option of not proceeding. Environmental impact assessment examines likely project effects before approval. Strategic environmental assessment operates at the broader policy, plan or programme level. Carrying-capacity and cumulative-impact studies are necessary where many activities burden the same ecosystem.

Other safeguards include zoning and siting controls; emission and discharge standards; the use of cleaner technology; the polluter-pays approach; environmental taxes, deposits and market incentives; conservation and restoration duties; public access to information; meaningful consultation; protection of affected and indigenous communities; independent appraisal; transparent reasons; compliance monitoring; emergency planning; and adaptive management when new evidence emerges.

These safeguards reflect a basic sequence: anticipate harm, avoid it where possible, minimise unavoidable impact, restore damaged systems and compensate residual loss. Compensation is not a licence to destroy an irreplaceable ecosystem. Prevention ordinarily has priority because some environmental damage is irreversible or cannot be valued adequately in money.

4. Stockholm Conference on the Human Environment, 1972

The United Nations Conference on the Human Environment met at Stockholm from 5 to 16 June 1972. It was the first major global conference devoted to the relationship between human welfare, development and the environment. Its principal outcomes were the Stockholm Declaration containing 26 principles, an Action Plan containing 109 recommendations, and institutional and financial arrangements that led to the creation of the United Nations Environment Programme.

The Declaration connected human dignity and well-being with environmental quality and placed responsibility for protecting the environment upon both governments and people. Principles 2 to 5 addressed the protection and prudent use of natural resources for present and future generations. Principles 6 and 7 dealt with pollution of ecosystems and the marine environment. Principles 8 to 13 recognised the connection between development, planning and environmental protection, including the different circumstances of developing countries.

Principle 19 emphasised environmental education, while Principle 20 promoted science, research and the exchange of information. Principle 21 combined two propositions that remain fundamental: States possess sovereign rights over their natural resources, but they also bear responsibility to ensure that activities within their jurisdiction or control do not cause environmental damage to other States or to areas beyond national jurisdiction. Principle 22 called for cooperation in developing rules concerning liability and compensation, and Principle 24 stressed international cooperation.

Stockholm was not a treaty and its Declaration did not create a complete enforceable code. Its language was substantially anthropocentric, and major disagreements remained between industrialised and developing States about poverty, development, finance and responsibility. Nevertheless, it transformed the environment into a central subject of international cooperation, stimulated national legislation and institutions, and supplied concepts later developed through treaties, customary law and the Rio process.

5. Stockholm and the development of Indian environmental law

India participated in the Stockholm Conference. The conference became an important reference point in the subsequent development of Indian environmental governance. The Constitution (Forty-second Amendment) Act, 1976 inserted Article 48A, directing the State to protect and improve the environment and safeguard forests and wildlife, and Article 51A(g), imposing a fundamental duty upon citizens to protect and improve the natural environment and show compassion for living creatures.

The Water (Prevention and Control of Pollution) Act, 1974 established a pollution-control framework for water. The preambles to the Air (Prevention and Control of Pollution) Act, 1981 and the Environment (Protection) Act, 1986 expressly refer to decisions taken at the Stockholm Conference and India's participation. Stockholm therefore matters not merely as international history but as part of the legislative background of modern Indian environmental law.

6. Rio Earth Summit, 1992

The United Nations Conference on Environment and Development met at Rio de Janeiro from 3 to 14 June 1992. Known as the Earth Summit, it shifted international discussion from environment viewed in isolation to environment and development as mutually dependent concerns. It sought an equitable partnership responsive to poverty, unequal consumption, technology, finance and the different capacities of States.

The principal Rio outcomes were the Rio Declaration on Environment and Development containing 27 principles; Agenda 21, a comprehensive programme of action; the non-binding Forest Principles; and the opening for signature of the United Nations Framework Convention on Climate Change and the Convention on Biological Diversity. The Declaration and Agenda 21 are soft-law instruments, whereas the two conventions create treaty obligations for their parties.

7. Important principles of the Rio Declaration

Principle 1 places human beings at the centre of sustainable-development concerns. Principle 2 restates the Stockholm balance between sovereignty over resources and responsibility to prevent transboundary or extra-jurisdictional environmental damage. Principle 3 links the right to development with equitable satisfaction of the environmental and developmental needs of present and future generations.

Principle 4 requires environmental protection to form an integral part of the development process. Principle 5 identifies eradication of poverty as indispensable to sustainable development. Principle 7 expresses common but differentiated responsibilities: all States share responsibility for global environmental protection, but their contributions and obligations may differ because of their different contributions to environmental degradation, resources, capacities and circumstances.

Principle 10 states the procedural foundation of environmental democracy: access to environmental information, participation in decision-making and effective access to judicial or administrative remedies. Principle 11 calls for effective environmental legislation. Principle 13 addresses national and international development of liability and compensation rules.

Principle 15 states the precautionary approach. Where there is a threat of serious or irreversible damage, lack of full scientific certainty should not be used to delay cost-effective protective measures. Precaution applies to scientific uncertainty; it does not eliminate the need for evidence, proportionality, review or reasoned administration.

Principle 16 encourages internalisation of environmental costs and use of economic instruments so that the polluter should, in principle, bear the cost of pollution. The polluter-pays principle supports prevention, remediation and compensation rather than shifting the financial burden to the public. Principle 17 identifies environmental impact assessment as a national instrument for proposed activities likely to cause significant adverse impact.

Principles 18 and 19 address notification of environmental emergencies and prior notification and consultation concerning activities with possible significant transboundary effects. Principles 20 to 22 recognise the vital roles of women, youth, indigenous people and local communities. Principle 25 declares peace, development and environmental protection to be interdependent and indivisible.

8. Agenda 21 and the wider Rio package

Agenda 21 is a comprehensive action programme for global, national and local implementation. Its subjects include poverty, consumption, health, human settlements, atmospheric protection, land and forests, fragile ecosystems, agriculture, biodiversity, oceans, freshwater, toxic chemicals and waste. It also identifies implementation needs such as finance, technology transfer, science, education, capacity-building, institutions and participation by major groups.

Agenda 21 is not a treaty. Its importance lies in organising sustainable development into an implementation programme and influencing legislation, local planning, international assistance and later sustainable-development processes. The Rio package also demonstrated that declarations, action plans and binding conventions can work together: principles guide interpretation, programmes organise implementation and treaties impose more specific obligations.

9. Johannesburg World Summit on Sustainable Development, 2002

The World Summit on Sustainable Development met at Johannesburg from 26 August to 4 September 2002. Its principal outcomes were the Johannesburg Declaration on Sustainable Development and the Plan of Implementation. The summit reaffirmed Stockholm, Rio and Agenda 21 but focused on the persistent gap between promises and results.

The Plan of Implementation addressed poverty eradication, unsustainable consumption and production, protection of the natural-resource base, health, globalisation and institutional reform. It supported the target of halving by 2015 the proportion of people without access to basic sanitation, sought a significant reduction in the rate of biodiversity loss by 2010, called for restoration of depleted fish stocks by 2015 where possible, and endorsed the goal that by 2020 chemicals should be used and produced in ways that minimise significant adverse effects on human health and the environment.

Johannesburg also promoted partnerships among governments, international organisations, business and civil society. Its contribution was the shift from announcing principles to concentrating on implementation, measurable objectives and shared action. Its weakness was that many commitments depended on voluntary cooperation, adequate finance, technology transfer and political will, and several time-bound goals were not achieved fully.

10. Rio+20 and The Future We Want, 2012

The United Nations Conference on Sustainable Development, known as Rio+20, met at Rio de Janeiro from 20 to 22 June 2012. Its outcome document, The Future We Want, was endorsed by United Nations General Assembly Resolution 66/288. The conference addressed two themes: a green economy in the context of sustainable development and poverty eradication, and the institutional framework for sustainable development.

Rio+20 reaffirmed the Stockholm and Rio principles, Agenda 21 and the Johannesburg outcomes. It treated green-economy policies as tools that should respect national circumstances, promote inclusion, avoid unjustified trade discrimination and support poverty eradication. It emphasised integration of the economic, social and environmental dimensions rather than treating environmental protection as an isolated sector.

Institutionally, Rio+20 decided to establish a universal intergovernmental High-level Political Forum to replace the Commission on Sustainable Development. It called for strengthening the role of the United Nations Environment Programme and adopted the Ten-Year Framework of Programmes on Sustainable Consumption and Production Patterns. Most significantly, it launched an inclusive intergovernmental process to formulate Sustainable Development Goals, which helped lead to the 2030 Agenda and the 17 SDGs adopted in 2015.

Rio+20 did not create a new binding global environmental treaty. Its significance lies in institutional reform, renewed political commitment, recognition of implementation gaps and the transition from the Millennium Development Goals to a universal sustainable-development agenda.

11. Evolution from Stockholm to Rio+20

The four milestones can be remembered as a progression. Stockholm placed the human environment on the international agenda and created institutional momentum. Rio integrated environment with development and articulated substantive and procedural principles. Johannesburg concentrated on implementation, targets and partnerships. Rio+20 renewed the framework, promoted an inclusive green economy, strengthened institutions and initiated the Sustainable Development Goals.

The process was cumulative rather than substitutive. Rio built upon Stockholm; Johannesburg reaffirmed Rio; and Rio+20 reaffirmed all earlier outcomes. Across the four conferences, the central debate remained the same: how to secure development and poverty eradication within ecological limits while sharing costs and responsibilities fairly.

12. Legal status of declarations and environmental soft law

The Stockholm, Rio and Johannesburg Declarations and The Future We Want are not treaties merely because States adopted them at international conferences or through a General Assembly resolution. As soft law, they generally do not create treaty liability by themselves. Their individual principles must not automatically be described as binding customary international law.

Soft law nevertheless has substantial legal influence. A declaration may restate an existing customary rule, supply evidence of opinio juris, guide treaty negotiation, influence national legislation and policy, assist judicial interpretation, establish institutional programmes and shape expectations of responsible conduct. The no-harm rule has particularly strong support in international law, while the precise customary status and operation of broader concepts may vary.

When relying on an international principle in India, a court considers the Constitution, legislation and binding precedent. International declarations may assist interpretation where they do not conflict with domestic law, but they do not authorise a court or administrator to disregard an applicable statute.

13. Sustainable development and related principles

Sustainable development is an organising concept that seeks integration rather than a mechanical preference for either development or conservation. Its practical content includes intergenerational equity, sustainable use of resources, prevention, precaution, environmental cost internalisation, public participation, impact assessment, conservation of biodiversity and equitable attention to poverty and developmental needs.

Prevention applies where the risk and causal pathway are sufficiently known; precaution responds where credible threats of serious or irreversible harm remain scientifically uncertain. Polluter pays allocates the financial responsibility for prevention and remediation to the polluter. Intergenerational equity requires stewardship of ecological systems for persons not yet born. Public participation improves legitimacy and exposes information relevant to affected people. Common but differentiated responsibilities operates primarily in international cooperation and should not be confused with exemption from domestic environmental compliance.

These principles operate together. A decision-maker should identify the ecological risk, obtain scientific information, consider alternatives, hear affected persons, give reasons, impose preventive conditions, monitor compliance and require restoration or payment where harm occurs.

14. Indian judicial use of international environmental principles

In Vellore Citizens' Welfare Forum v. Union of India, the Supreme Court treated sustainable development as the balancing concept between ecology and development and recognised the precautionary and polluter-pays principles as part of Indian environmental law. It connected international principles with Articles 21, 47, 48A and 51A(g) and domestic environmental statutes.

Indian Council for Enviro-Legal Action v. Union of India applied polluter pays to industries responsible for severe chemical pollution and made clear that liability includes the cost of remedial measures. A.P. Pollution Control Board v. Prof. M.V. Nayudu examined scientific uncertainty, expertise and the precautionary principle, including the need to act before conclusive proof where serious environmental risk exists.

Narmada Bachao Andolan v. Union of India explained sustainable development as a balance between developmental needs and environmental protection and distinguished uncertain risk from situations where effects are known and mitigation is required. M.C. Mehta v. Kamal Nath applied the public-trust doctrine to natural resources. These decisions show that international declarations have influenced Indian law through constitutional and statutory interpretation rather than operating as self-executing treaties.

15. Illustrative policy problem

Assume that a coastal industrial-corridor policy permits several projects near mangroves and fishing villages. The policy is adopted without cumulative impact assessment, alternatives analysis or disclosure of the scientific studies. Officials argue that environmental damage is uncertain and can be compensated later.

A legal analysis should identify the possible direct, indirect and cumulative impacts; apply integration and sustainable development; invoke precaution because irreversible mangrove loss is credibly threatened despite uncertainty; require prior impact assessment under the logic of Rio Principle 17; apply information, participation and access-to-justice values under Principle 10; consider intergenerational equity and livelihood justice; and require polluters to finance prevention, restoration and compensation. The final conclusion must still be tied to the applicable Indian statutes, notifications, clearances and constitutional remedies.

16. Examination and problem-solving method

For a descriptive question, begin with the policy-development conflict, then present the chronology: Stockholm 1972, Rio 1992, Johannesburg 2002 and Rio+20 in 2012. State the principal documents and contribution of each conference. Explain the major principles separately, identify the soft-law status of the declarations, connect them to Indian legislation and cases, and finish with a critical conclusion on implementation.

For a problem question, use five steps: identify the policy and ecological risk; classify the harm as direct, indirect, cumulative, delayed or transboundary; select the applicable principles; connect them to binding domestic law and institutional powers; and formulate preventive, participatory, restorative and compensatory remedies. Avoid treating sustainable development as an automatic licence for a project or as a slogan requiring every project to be prohibited.
    `.trim(),
    keyPoints: [
      "Public policies can produce direct, indirect, cumulative, delayed and transboundary environmental harm.",
      "Stockholm 1972 produced a 26-principle Declaration, a 109-recommendation Action Plan and the institutional momentum for UNEP.",
      "Stockholm Principle 21 combines sovereignty over natural resources with responsibility to prevent environmental damage beyond national jurisdiction.",
      "The 1992 Rio package included the 27-principle Rio Declaration, Agenda 21, the Forest Principles, the UNFCCC and the Convention on Biological Diversity.",
      "Rio Principles 10, 15, 16 and 17 concern participation and access to justice, precaution, polluter pays and environmental impact assessment.",
      "Common but differentiated responsibilities recognises a common environmental duty while allowing differentiation based on contribution, capacity and circumstances.",
      "Johannesburg 2002 shifted attention from declaring principles to implementation, targets and partnerships.",
      "Rio+20 adopted The Future We Want, established the High-level Political Forum process and launched negotiations for the Sustainable Development Goals.",
      "The conference declarations are soft law, but they may influence custom, treaties, legislation, policy and judicial interpretation.",
      "Indian courts apply international environmental principles through the Constitution, domestic statutes and binding precedent.",
    ],
    provisions: [
      {
        id: "environmental-law-unit-1-stockholm",
        title: "Stockholm Declaration on the Human Environment, 1972",
        provision: "Principles 1–26",
        description:
          "Established the first comprehensive global statement of environmental principles, including resource stewardship, pollution prevention, cooperation and the sovereignty/no-harm balance.",
      },
      {
        id: "environmental-law-unit-1-stockholm-action-plan",
        title: "Stockholm Action Plan for the Human Environment, 1972",
        provision: "109 recommendations",
        description:
          "Organised international action around environmental assessment, management and supporting measures and contributed to the establishment of UNEP.",
      },
      {
        id: "environmental-law-unit-1-rio",
        title: "Rio Declaration on Environment and Development, 1992",
        provision: "Principles 1–27",
        description:
          "Developed sustainable-development principles concerning integration, participation, precaution, polluter pays, impact assessment and differentiated responsibility.",
      },
      {
        id: "environmental-law-unit-1-agenda-21",
        title: "Agenda 21, 1992",
        provision: "Global programme of action",
        description:
          "Provides a non-binding implementation programme addressing social, economic, resource-conservation and institutional dimensions of sustainable development.",
      },
      {
        id: "environmental-law-unit-1-johannesburg",
        title: "Johannesburg Declaration and Plan of Implementation, 2002",
        provision: "Political commitment and implementation plan",
        description:
          "Reaffirmed earlier principles and emphasised implementation, poverty eradication, sustainable consumption and production, natural-resource protection and partnerships.",
      },
      {
        id: "environmental-law-unit-1-rio-plus-20",
        title: "The Future We Want, 2012",
        provision: "United Nations General Assembly Resolution 66/288",
        description:
          "The Rio+20 outcome renewed prior commitments, addressed green-economy and institutional themes, strengthened the global review framework and initiated the SDG process.",
      },
      {
        id: "environmental-law-unit-1-indian-framework",
        title: "Indian constitutional and legislative response",
        provision: "Articles 48A and 51A(g); Air Act, 1981; Environment (Protection) Act, 1986",
        description:
          "Shows Stockholm's influence on India's constitutional duties and on statutes whose preambles expressly refer to the 1972 conference.",
      },
    ],
    importantCases: [
      {
        id: "environmental-law-unit-1-vellore",
        caseName: "Vellore Citizens' Welfare Forum v. Union of India",
        citation: "(1996) 5 SCC 647",
        principle:
          "Sustainable development is a balancing concept, and the precautionary and polluter-pays principles form part of Indian environmental law.",
        summary:
          "The Supreme Court addressed pollution caused by tanneries, connected international environmental principles with constitutional and statutory duties, and required preventive and remedial responsibility.",
      },
      {
        id: "environmental-law-unit-1-enviro-legal-action",
        caseName: "Indian Council for Enviro-Legal Action v. Union of India",
        citation: "(1996) 3 SCC 212",
        principle:
          "A polluter is financially responsible for remedying the environmental damage caused by its hazardous activity.",
        summary:
          "Chemical industries had caused serious contamination. The Court required the responsible industries to bear the cost of remedial measures rather than shifting that burden to the public.",
      },
      {
        id: "environmental-law-unit-1-nayudu",
        caseName: "A.P. Pollution Control Board v. Prof. M.V. Nayudu",
        citation: "(1999) 2 SCC 718",
        principle:
          "Environmental adjudication must respond to scientific uncertainty through precaution, appropriate allocation of proof and informed expert decision-making.",
        summary:
          "The Court examined uncertainty surrounding risk to drinking-water sources and explained why environmental decisions cannot always wait for conclusive scientific proof.",
      },
      {
        id: "environmental-law-unit-1-narmada",
        caseName: "Narmada Bachao Andolan v. Union of India",
        citation: "(2000) 10 SCC 664",
        principle:
          "Sustainable development requires reconciliation of developmental benefits and environmental protection through informed assessment and mitigation.",
        summary:
          "In reviewing a major dam project, the Court discussed sustainable development and differentiated uncertain environmental risk from known effects requiring mitigation and continuing compliance.",
      },
      {
        id: "environmental-law-unit-1-kamal-nath",
        caseName: "M.C. Mehta v. Kamal Nath",
        citation: "(1997) 1 SCC 388",
        principle:
          "The State holds important natural resources in trust for public use and cannot permit their conversion for purely private advantage contrary to that trust.",
        summary:
          "The Court applied the public-trust doctrine to interference with a river and required restoration, illustrating the judicial development of environmental principles in India.",
      },
    ],
    examFocus:
      "Prepare the environmental effects of industrial, energy, mining, agricultural, irrigation, urban, transport, forest, coastal and consumption policies; the dates, documents and distinctive contribution of Stockholm, Rio, Johannesburg and Rio+20; Stockholm Principles 1, 21, 22 and 24; Rio Principles 2, 3, 4, 7, 10, 15, 16 and 17; Agenda 21; Johannesburg implementation targets; The Future We Want, the High-level Political Forum and the SDG process; the distinction between soft law, treaty law and customary law; and the principles stated in Vellore Citizens, Indian Council for Enviro-Legal Action, A.P. Pollution Control Board v. Nayudu, Narmada Bachao Andolan and M.C. Mehta v. Kamal Nath. In a problem, connect every international principle to the applicable Indian constitutional or statutory rule.",
    revisionNotes: `
Timeline: Stockholm 1972 placed the human environment on the global agenda, adopted 26 principles and an Action Plan, and led to UNEP. Rio 1992 integrated environment and development through 27 principles, Agenda 21, the Forest Principles, the UNFCCC and the Biodiversity Convention. Johannesburg 2002 focused on implementation, targets and partnerships. Rio+20 in 2012 adopted The Future We Want, promoted an inclusive green economy, strengthened institutions and launched the SDG process.

Core rules: integrate environment into development; prevent known harm; use precaution for credible serious or irreversible risks under scientific uncertainty; make polluters bear prevention and remediation costs; preserve resources for future generations; provide information, participation and access to justice; conduct prior impact assessment; and recognise common but differentiated responsibilities internationally.

Legal status: the declarations and action programmes are generally soft law, not treaties. They may nevertheless influence customary law, treaty development, legislation, administration and judicial interpretation. In India, rely on the Constitution, statutes and precedent, using international principles as interpretive support where consistent with domestic law.
    `.trim(),
    notes: "",
  },
  {
    title: "Environmental Policy and Constitutional Mandates in India",
    shortDescription:
      "India's environmental policy, constitutional duties and the judicial enlargement of Article 21.",
    overview:
      "This unit examines the constitutional foundations of environmental governance in India and the interpretation of the right to life under Article 21 as including the right to a clean and healthy environment.",
    detailedContent:
      "Development of environmental policy in India; constitutional distribution of legislative powers; Articles 14, 19 and 21; Directive Principles, including Article 48A; Fundamental Duty under Article 51A(g); judicial enlargement of Article 21; duties of the State and citizens; and the relationship between constitutional remedies and environmental protection.",
    keyPoints: [
      "Environmental policy in India",
      "Article 21 and environmental quality",
      "Article 48A",
      "Article 51A(g)",
      "Constitutional remedies",
    ],
    provisions: [
      "Constitution of India — Articles 14, 19 and 21",
      "Constitution of India — Article 48A",
      "Constitution of India — Article 51A(g)",
      "Constitution of India — Articles 32 and 226",
    ],
  },
  {
    title: "Environmental Protection and Pollution-Control Laws",
    shortDescription:
      "The Environment Protection Act, Air Act, Water Act, Pollution Control Boards and regulation of major environmental hazards.",
    overview:
      "This unit studies India's principal framework legislation for environmental protection, air pollution and water pollution, together with the administration and functions of the Central and State Pollution Control Boards.",
    detailedContent:
      "Environment (Protection) Act, 1986; Air (Prevention and Control of Pollution) Act, 1981; Water (Prevention and Control of Pollution) Act, 1974; powers of the Central Government; environmental standards and directions; consent mechanisms; administration, powers and functions of Pollution Control Boards; water, air and noise pollution; nuclear radiation; and protection of wildlife, land use, irrigation, forests and other non-human components of the environment.",
    keyPoints: [
      "Environment Protection Act, 1986",
      "Air Act, 1981",
      "Water Act, 1974",
      "Central and State Pollution Control Boards",
      "Human and ecological pollution concerns",
    ],
    provisions: [
      "Environment (Protection) Act, 1986",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Water (Prevention and Control of Pollution) Act, 1974",
      "Noise Pollution (Regulation and Control) Rules, 2000",
    ],
  },
  {
    title: "Judicial Protection, Public Interest Litigation and Environmental Principles",
    shortDescription:
      "The judiciary's role, expanded locus standi, environmental PIL and principles evolved by Indian courts.",
    overview:
      "This unit explains how constitutional courts expanded access to environmental justice through public-interest litigation and developed principles that now guide environmental decision-making and remedies.",
    detailedContent:
      "Role of the Supreme Court and High Courts in preventing and remedying environmental pollution; enlargement of locus standi; development and procedure of public-interest litigation; continuing mandamus; precautionary principle; polluter-pays principle; sustainable development; public-trust doctrine; intergenerational equity; absolute liability; environmental rule of law; expert decision-making; compensation and restoration.",
    keyPoints: [
      "Expanded locus standi",
      "Environmental public-interest litigation",
      "Precautionary and polluter-pays principles",
      "Public-trust doctrine",
      "Sustainable development and environmental remedies",
    ],
    provisions: [
      "Constitution of India — Articles 21, 32 and 226",
      "Environment (Protection) Act, 1986",
    ],
  },
  {
    title: "Environmental Liability, Sanctions and Enforcement Strategies",
    shortDescription:
      "Civil, criminal and statutory controls under environmental legislation and liability statutes.",
    overview:
      "This unit examines legal sanctions and enforcement strategies for controlling pollution, including regulatory directions, prosecution, compensation, insurance-based relief and specialised environmental adjudication.",
    detailedContent:
      "Legal sanctions and strategies under the Environment (Protection) Act, Air Act and Water Act; closure and prohibition directions; consent violations; offences by companies and government departments; prosecution and penalties; compensation and restoration; Public Liability Insurance Act, 1991; the historical National Environment Tribunal Act, 1995; transition to the National Green Tribunal framework; and coordination among regulators, courts and tribunals.",
    keyPoints: [
      "Administrative directions and consent enforcement",
      "Criminal and civil consequences",
      "Environmental compensation and restoration",
      "Public Liability Insurance Act, 1991",
      "Historical tribunal framework and transition to the NGT",
    ],
    provisions: [
      "Environment (Protection) Act, 1986",
      "Air (Prevention and Control of Pollution) Act, 1981",
      "Water (Prevention and Control of Pollution) Act, 1974",
      "Public Liability Insurance Act, 1991",
      "National Environment Tribunal Act, 1995",
    ],
  },
  {
    title: "Forests, Wildlife and Animal Protection",
    shortDescription:
      "The Indian Forest Act, Prevention of Cruelty to Animals Act and Wild Life Protection Act.",
    overview:
      "This unit introduces the statutory regimes governing forests, wildlife conservation and prevention of cruelty to animals, together with their institutions, prohibitions, permissions and enforcement mechanisms.",
    detailedContent:
      "Indian Forest Act, 1927; categories and regulation of forests and forest produce; Prevention of Cruelty to Animals Act, 1960; duties, prohibited conduct and institutional protection; Wild Life (Protection) Act, 1972; protected species, hunting restrictions, protected areas, trade controls, authorities, offences and penalties; and the relationship between conservation, community interests and animal welfare.",
    keyPoints: [
      "Indian Forest Act, 1927",
      "Forest administration and forest produce",
      "Prevention of Cruelty to Animals Act, 1960",
      "Wild Life Protection Act, 1972",
      "Protected areas, species and enforcement",
    ],
    provisions: [
      "Indian Forest Act, 1927",
      "Prevention of Cruelty to Animals Act, 1960",
      "Wild Life (Protection) Act, 1972",
    ],
  },
  {
    title: "Biological Diversity Act, 2002",
    shortDescription:
      "Conservation, sustainable use, access regulation and equitable benefit sharing under biodiversity law.",
    overview:
      "This unit studies India's legal framework for conserving biological diversity, ensuring sustainable use and regulating access to biological resources and associated knowledge.",
    detailedContent:
      "Objectives and scope of the Biological Diversity Act, 2002; conservation and sustainable use; fair and equitable benefit sharing; National Biodiversity Authority, State Biodiversity Boards and Biodiversity Management Committees; People's Biodiversity Registers; access to biological resources and associated knowledge; approvals and intimations; benefit-sharing mechanisms; biodiversity heritage sites; offences, enforcement and the relationship with intellectual-property applications.",
    keyPoints: [
      "Conservation and sustainable use",
      "Access and benefit sharing",
      "National and State biodiversity authorities",
      "Biodiversity Management Committees",
      "Traditional knowledge and biological resources",
    ],
    provisions: [
      "Biological Diversity Act, 2002",
      "Biological Diversity Rules, 2004",
    ],
  },
  {
    title: "National Green Tribunal Act, 2010",
    shortDescription:
      "Establishment, jurisdiction, procedure, relief, compensation and appellate functions of the National Green Tribunal.",
    overview:
      "This unit explains the constitution and specialised jurisdiction of the National Green Tribunal, the environmental disputes it may hear and the principles governing relief, compensation and restoration.",
    detailedContent:
      "Objects and scheme of the National Green Tribunal Act, 2010; establishment, composition and qualifications; territorial and subject-matter jurisdiction; original and appellate jurisdiction; limitation; procedure and powers; application of natural justice; relief, compensation and restitution; liability principles; scheduled enactments; execution and appeal; exclusion and interaction of jurisdiction; and application of sustainable development, precautionary principle and polluter-pays principle.",
    keyPoints: [
      "Composition and jurisdiction of the NGT",
      "Original and appellate proceedings",
      "Limitation and procedure",
      "Compensation and environmental restoration",
      "Statutory environmental principles",
    ],
    provisions: [
      "National Green Tribunal Act, 2010 — Sections 14–22",
      "National Green Tribunal Act, 2010 — Section 20",
      "National Green Tribunal Act, 2010 — Schedule I",
    ],
  },
];

export const environmentalLawChapters = units.map(
  (unit, index) =>
    createChapterModel({
      id: `${ENVIRONMENTAL_LAW_COURSE_ID}-unit-${index + 1}`,
      courseId: ENVIRONMENTAL_LAW_COURSE_ID,
      title: unit.title,
      slug: `unit-${index + 1}-${unit.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")}`,
      shortDescription: unit.shortDescription,
      chapterOverview: unit.overview,
      learningObjectives:
        unit.learningObjectives || [
          `Explain the principal environmental-law rules covered in Unit ${index + 1}.`,
          "Identify and interpret the relevant constitutional, statutory and international materials.",
          "Apply environmental principles and enforcement mechanisms to legal problems.",
        ],
      detailedContent: unit.detailedContent,
      keyPoints: unit.keyPoints,
      statutoryProvisions: unit.provisions.map((item, provisionIndex) =>
        typeof item === "string"
          ? {
              id: `unit-${index + 1}-provision-${provisionIndex + 1}`,
              title: item,
              provision: item,
              description: `Core legal reading for Environmental Law Unit ${index + 1}.`,
            }
          : {
              id:
                item.id ||
                `unit-${index + 1}-provision-${provisionIndex + 1}`,
              title: item.title || item.provision,
              provision: item.provision || item.title,
              description:
                item.description ||
                `Core legal reading for Environmental Law Unit ${index + 1}.`,
            },
      ),
      importantCases: unit.importantCases || [],
      examFocus:
        unit.examFocus ||
        "Revise the relevant provisions, institutional powers, environmental principles, remedies and leading judicial developments. Apply them to problem questions with clear statutory references.",
      revisionNotes:
        unit.revisionNotes || unit.keyPoints.join("; "),
      notes:
        unit.notes === undefined
          ? unit.detailedContent
          : unit.notes,
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
    title: "International Law and the Environment",
    author: "Patricia Birnie and Alan Boyle",
  },
  {
    title: "Environmental Law in India",
    author: "P. Leelakrishnan",
    publisher: "Butterworths",
  },
  {
    title: "International Environmental Law",
    author: "Elli Louka",
    publisher: "Cambridge University Press",
  },
  {
    title: "Environmental Law",
    author: "V.N. Paranjape",
  },
  {
    title: "Environmental Law",
    author: "P.S. Jaswal",
  },
];

export const environmentalLawBooks = recommendedBooks.map(
  (book, index) =>
    createCourseBookModel({
      id: `${ENVIRONMENTAL_LAW_COURSE_ID}-book-${index + 1}`,
      courseId: ENVIRONMENTAL_LAW_COURSE_ID,
      title: book.title,
      author: book.author,
      publisher: book.publisher || "",
      description:
        "Recommended reading for the Environmental Law course.",
      displayOrder: index + 1,
      recommended: true,
      published: true,
    }),
);
