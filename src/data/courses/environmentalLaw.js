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
      "This unit traces the development of environmental policy in India and explains environmental constitutionalism through Articles 14, 19 and 21, the Directive Principles, the Fundamental Duties, federal legislative competence and constitutional remedies. It examines the judicial recognition of clean air, safe water, ecological balance and protection from climate harm as dimensions of life and equality, while distinguishing enforceable rights from policy commitments and interpretive constitutional duties.",
    learningObjectives: [
      "Trace the institutional and policy development of environmental governance in India from Stockholm 1972 to contemporary climate policy.",
      "Explain the legal status and principal themes of the National Environment Policy, 2006 and distinguish policy from binding legislation.",
      "Analyse Articles 14, 19 and 21 as foundations of environmental rights and reasonable environmental regulation.",
      "Evaluate Articles 47, 48A and 51A(g) and explain how courts use Directive Principles and Fundamental Duties in constitutional interpretation.",
      "Map environmental subjects across the Union, State and Concurrent Lists and explain the operation of Articles 246, 252 and 253.",
      "Describe the remedies available under Articles 32 and 226 and the limits governing environmental public-interest litigation.",
      "Apply constitutional principles, environmental doctrines and leading Supreme Court decisions to a contemporary development or climate problem.",
    ],
    detailedContent: `
1. Meaning and scope of environmental policy

Environmental policy is the collection of governmental goals, principles, institutions, plans and regulatory choices used to prevent environmental harm, conserve natural resources and reconcile ecological protection with social and economic development. It includes policy documents expressly concerned with forests, pollution, biodiversity and climate change, but it also includes decisions on energy, transport, agriculture, mining, water, housing, public health and industry because those sectors determine how land and resources are used.

Policy is broader than legislation. A statute creates legally binding powers, duties, prohibitions and procedures. A policy ordinarily guides administration and future law-making but cannot override the Constitution, a statute or a binding judicial decision. A government may be required to follow a formally adopted policy consistently and non-arbitrarily, yet the policy does not acquire the status of an Act of Parliament merely because it is important or comprehensive.

Indian environmental governance is therefore a layered system: constitutional rights and duties supply its normative foundation; Parliament and State Legislatures enact laws; governments frame rules, notifications and policies; specialised authorities administer standards and permissions; local bodies perform water, sanitation, waste and land-use functions; and constitutional courts and statutory tribunals review legality and grant remedies.

2. Evolution of environmental governance in India

Early Indian laws addressed forests, fisheries, public nuisance, factories and water-related concerns sector by sector. They did not constitute a single integrated environmental system. The 1972 United Nations Conference on the Human Environment at Stockholm gave strong impetus to national planning, specialised institutions and modern pollution-control legislation.

The National Committee on Environmental Planning and Coordination was established in 1972 as an early coordinating body. A Department of Environment was created in 1980. In 1985, environmental administration was placed in a dedicated Ministry of Environment and Forests, now known as the Ministry of Environment, Forest and Climate Change. This institutional evolution reflected the movement from scattered conservation measures to integrated environmental administration.

The Water (Prevention and Control of Pollution) Act, 1974 created the Central and State Pollution Control Boards. The Air (Prevention and Control of Pollution) Act, 1981 extended the pollution-control model to air. After the Bhopal gas disaster, the Environment (Protection) Act, 1986 gave the Central Government broad coordinating and regulatory powers. These statutes are studied in detail in later units; their significance here is that policy development, constitutional change and legislation evolved together.

3. Major Indian environmental policy milestones

The National Forest Policy, 1988 shifted emphasis from revenue extraction towards ecological stability, conservation of natural heritage, checking soil erosion and desertification, and meeting the subsistence needs of rural and tribal communities. It also encouraged people's participation in forest protection.

The National Conservation Strategy and Policy Statement on Environment and Development, 1992 sought to integrate environmental considerations into development planning. The Policy Statement for Abatement of Pollution, 1992 promoted prevention, cleaner technology, economic instruments, public participation and improved environmental information. Together, these documents anticipated an approach based on integration and prevention rather than end-of-pipe control alone.

The National Environment Policy, 2006 provided an overarching guide for regulatory reform, conservation programmes, review of legislation and integration of environmental concerns into development. The National Action Plan on Climate Change, 2008 organised climate policy around national missions, including solar energy, energy efficiency, sustainable habitat, water, the Himalayan ecosystem, a Green India, sustainable agriculture and strategic knowledge. Policies, missions and action plans coordinate governmental action, but their individual commitments must be connected to legislation, delegated rules, budgets or enforceable constitutional duties before a court can treat them as binding commands.

4. National Environment Policy, 2006

The National Environment Policy, 2006 seeks to conserve critical environmental resources, secure livelihood access for poor communities, achieve intergenerational and intragenerational equity, improve resource-use efficiency, strengthen environmental governance and mobilise resources for conservation. It treats environmental protection as part of development rather than as an isolated department's concern.

Its guiding ideas include the human-centred character of sustainable development, the right to development, environmental protection as an integral part of development, precaution, economic efficiency, polluter pays, public trust, decentralisation, integration, environmental standards and the use of incentives. It also recognises that legal rules should be transparent, enforceable and supported by institutions with capacity and accountability.

The policy is particularly important for examination answers because it brings constitutional values, international principles and administrative reform into a single framework. Its legal limit must also be stated: it is a policy guide, not a substitute for the Constitution or environmental statutes. A project cannot rely upon a general policy objective to avoid a mandatory clearance, and a court should not enforce every policy aspiration as though it were a statutory rule.

5. Climate policy and environmental federalism in practice

Climate change cuts across electricity, transport, buildings, agriculture, forests, water, disaster management and public health. The National Action Plan on Climate Change and State Action Plans provide a planning structure, while enforceable obligations arise from applicable statutes, rules, notifications, constitutional duties and judicial orders. Local knowledge and State-level implementation are essential because climate impacts and developmental conditions differ across regions.

The Seventy-third and Seventy-fourth Constitutional Amendments strengthened democratic decentralisation. The Eleventh Schedule identifies functions potentially entrusted to Panchayats, including agriculture, minor irrigation, water management, social forestry, drinking water and maintenance of community assets. The Twelfth Schedule includes urban planning, land-use regulation, water supply, public health, sanitation, solid-waste management, urban forestry and protection of the environment. These Schedules do not automatically transfer every function by themselves; State legislation determines the actual devolution of powers, responsibilities and finance.

6. Constitutional environmentalism

The original Constitution did not contain an express fundamental right to a clean environment. Environmental protection developed through constitutional amendment, legislation and judicial interpretation. The Constitution (Forty-second Amendment) Act, 1976 inserted Article 48A among the Directive Principles and Article 51A(g) among the Fundamental Duties. It also transferred forests and protection of wild animals and birds into the Concurrent List as Entries 17A and 17B.

Environmental constitutionalism means that ecological protection is not only a matter of administrative choice. It is connected to life, dignity, equality, health, livelihood, public trust, participatory government and duties owed to present and future generations. The Preamble's commitments to justice and dignity assist this value-based reading, but concrete claims must be anchored in an enforceable provision such as Article 14 or Article 21, an applicable statute or a valid legal duty.

Courts commonly read fundamental rights together with Directive Principles and Fundamental Duties. This harmonising approach gives constitutional meaning to environmental quality while respecting the formal difference between directly enforceable rights and non-justiciable principles of governance.

7. Article 21 and the enlargement of the right to life

Article 21 provides that no person shall be deprived of life or personal liberty except according to procedure established by law. Following the broader rights-based approach associated with Maneka Gandhi v. Union of India, the Supreme Court has interpreted life as more than mere animal existence. Life with dignity requires conditions in which health and human faculties can be protected.

Environmental quality became part of this enlarged understanding. In Subhash Kumar v. State of Bihar, the Court stated that the right to life includes the right to enjoy pollution-free water and air for the full enjoyment of life. Later decisions connected Article 21 with hygienic surroundings, sanitation, ecological balance, protection from hazardous industry, control of noise, conservation of water bodies and the State's duty to enforce environmental law.

The environmental dimension of Article 21 has both substantive and procedural aspects. Substantively, the State must not authorise arbitrary exposure to serious pollution and must take reasonable measures to protect basic environmental conditions. Procedurally, decisions affecting life and health should rest on lawful authority, relevant material, fair hearing where required, disclosure, expert appraisal and reasoned decision-making.

Article 21 does not create an absolute rule that every activity producing any ecological impact is unconstitutional. Courts ordinarily examine the seriousness of harm, statutory standards, alternatives, scientific evidence, distribution of burdens, public need, mitigation, monitoring and sustainable development. The constitutional guarantee demands lawful and proportionate reconciliation, not an unreasoned choice between all development and all conservation.

8. Article 14: equality and non-arbitrariness

Article 14 guarantees equality before the law and equal protection of the laws. Environmental administration violates Article 14 when it acts arbitrarily, treats similarly situated persons without rational justification, selectively enforces standards, ignores relevant environmental material or distributes serious environmental burdens through an irrational decision.

Equality also illuminates environmental justice. Pollution and climate hazards often fall most heavily on low-income communities, forest dwellers, coastal populations, children, older persons and persons with disabilities, even though they may have contributed least to the harm. Article 14 does not automatically invalidate every unequal environmental effect, but it requires the State to justify classifications, avoid arbitrary exposure and take seriously the unequal consequences of policy.

In M.K. Ranjitsinh v. Union of India, the Supreme Court linked Articles 14 and 21 to a right to be free from the adverse effects of climate change. The recognition is significant because climate injury threatens life, health, food, water and equality. Application remains context-sensitive: climate mitigation, energy access, species protection and local rights must be reconciled through lawful, scientifically informed and proportionate measures.

9. Article 19 and environmental regulation

Article 19(1)(g) protects the citizen's right to practise a profession or carry on an occupation, trade or business. Article 19(6) permits reasonable restrictions in the interests of the general public. Pollution-control standards, siting restrictions, licensing, closure of unlawful operations and conditions requiring cleaner technology may therefore restrict commercial freedom when supported by law and proportionate to the public interest.

There is no unrestricted fundamental right to conduct a polluting activity. At the same time, regulation must be authorised, non-arbitrary and reasonably connected to environmental protection. A court may examine the nature of the activity, scale of risk, availability of safer alternatives, compliance history, economic and livelihood effects, urgency and procedural safeguards.

Article 19(1)(a) may also support environmental information and public discussion, while Article 19(1)(b) and (c) protect peaceful assembly and association subject to constitutional restrictions. These freedoms help communities participate in environmental governance, but access to a particular statutory hearing or record ultimately depends on the applicable legal framework as well as constitutional fairness.

10. Directive Principles of State Policy

Article 37 declares that the Directive Principles are not enforceable by any court, but they are fundamental in the governance of the country and it is the duty of the State to apply them in making laws. They guide legislation, policy and interpretation and may reinforce the content of enforceable fundamental rights.

Article 47 places improvement of public health among the State's primary duties. It is relevant to air and water pollution, sanitation, toxic exposure and waste. Article 48 directs the State to organise agriculture and animal husbandry on modern and scientific lines and includes protection of specified cattle; its implementation must remain consistent with other constitutional provisions.

Article 48A directs the State to endeavour to protect and improve the environment and to safeguard the forests and wildlife of the country. Articles 39(b) and 39(e) are also relevant: material resources should be distributed to subserve the common good, and the health and strength of workers and children should not be abused. Read with Articles 14 and 21, these principles support preventive regulation, conservation and attention to vulnerable groups.

Article 48A is not, by itself, a directly enforceable fundamental right. Its practical constitutional force comes from its role in governance, statutory interpretation and the judicial elaboration of fundamental rights. Courts use it to resolve ambiguity and assess State action, but should not use it to disregard the limits or procedures of a statute.

11. Fundamental Duty under Article 51A(g)

Article 51A(g) makes it the duty of every citizen to protect and improve the natural environment, including forests, lakes, rivers and wildlife, and to have compassion for living creatures. The provision recognises that environmental stewardship is shared by government, individuals, communities and institutions.

Fundamental Duties are not generally enforceable as independent claims in the same manner as fundamental rights. Article 51A(g) nevertheless performs three important functions. It guides courts when interpreting rights and statutes; supports reasonable laws that require environmentally responsible conduct; and supplies a civic standard for education, participation and compliance.

The citizen's duty does not reduce the State's responsibility. A regulator cannot excuse failure to control industrial pollution by shifting the burden to individual behaviour. Conversely, rights cannot be treated as a licence to destroy public resources. Articles 48A and 51A(g) express complementary responsibilities within a constitutional system in which public authorities retain legal accountability.

12. Distribution of legislative powers

Article 246 distributes legislative competence by reference to the Seventh Schedule. Environment is not contained in a single entry, so competence depends on the true nature and substance of the legislation and the relevant combination of entries.

Important Union List subjects include Entry 52 on industries declared by Parliament to be under Union control; Entry 53 on oilfields and mineral-oil resources; Entry 54 on regulation of mines and mineral development to the extent declared under Union control; Entry 56 on inter-State rivers and river valleys to the extent declared expedient in the public interest; and Entry 57 on fishing and fisheries beyond territorial waters.

Important State List subjects include Entry 6 on public health and sanitation; Entry 14 on agriculture; Entry 17 on water, subject to Union Entry 56; Entry 18 on land; Entry 21 on fisheries; Entry 23 on mines and mineral development, subject to Union control; and Entry 24 on industries, subject to relevant Union entries.

The Concurrent List includes Entry 17A on forests, Entry 17B on protection of wild animals and birds, Entry 20 on economic and social planning and Entry 20A on population control and family planning. Both Parliament and State Legislatures may legislate on concurrent subjects, subject to constitutional rules concerning inconsistency and repugnancy.

Article 252 permits Parliament to legislate on a State subject when two or more State Legislatures pass resolutions requesting such legislation. The Water Act, 1974 was enacted through this mechanism. Article 253 empowers Parliament to make laws for implementing treaties, agreements, conventions and decisions made at international conferences. It is important to India's response to international environmental commitments; the preambles to the Air Act, 1981 and Environment (Protection) Act, 1986 expressly refer to decisions taken at Stockholm.

13. Articles 32 and 226: constitutional remedies

Article 32 guarantees the right to approach the Supreme Court for enforcement of fundamental rights. Article 226 gives High Courts wider power to issue writs for enforcement of fundamental rights and for other legal purposes. High Courts are often the appropriate first forum for fact-sensitive local environmental disputes, while specialised statutory remedies may also be relevant.

Environmental public-interest litigation relaxed traditional standing so that a public-spirited person or organisation could seek protection for affected communities or public resources unable to approach the court effectively. Courts have used writs, directions, compensation, closure or relocation orders, restoration, expert committees, monitoring and continuing mandamus. Public-law compensation may be granted for established violation of fundamental rights, while statutory civil and criminal consequences remain separately available.

PIL is not a licence for private rivalry, publicity or adjudication without evidence. Subhash Kumar itself warned that a petition presented for personal interest under the guise of public interest should be rejected. Courts must respect legislative policy, statutory institutions, separation of powers and technical expertise. Effective review tests legality, fairness, constitutional compliance and the quality of the decision-making process without converting the court into the routine environmental administrator.

14. Constitutional environmental principles

Sustainable development requires integration of ecological protection with legitimate development. It does not mean that development always prevails or that every environmental impact requires prohibition. The decision-maker must examine need, location, alternatives, cumulative effects, distributional justice, mitigation and long-term ecological capacity.

The precautionary principle requires protective action where credible threats of serious or irreversible damage exist despite scientific uncertainty. The polluter-pays principle places the cost of preventing and remedying pollution on the responsible polluter rather than the public. The public-trust doctrine treats certain natural resources as held by the State for public use and ecological protection. Intergenerational equity requires present decision-makers to preserve environmental options and quality for future generations.

The Supreme Court has connected these principles with Articles 21, 47, 48A and 51A(g), environmental statutes and international developments. Their application must remain legally disciplined: identify the source, facts, statutory context, responsible authority and appropriate remedy rather than invoking a principle as a free-standing slogan.

15. Leading constitutional environmental decisions

Rural Litigation and Entitlement Kendra v. State of Uttar Pradesh was an early environmental PIL concerning limestone quarrying in the Mussoorie hills. The Court's intervention demonstrated that ecological balance, public safety and rehabilitation could be considered when destructive extraction threatened a fragile area.

M.C. Mehta v. Union of India, arising from the Oleum Gas Leak, developed the rule of absolute liability for an enterprise engaged in hazardous or inherently dangerous activity. The decision also strengthened constitutional compensation and the use of Article 32 in cases of serious industrial risk.

Subhash Kumar v. State of Bihar expressly connected Article 21 with pollution-free water and air but rejected misuse of PIL for private interest. Virender Gaur v. State of Haryana treated a hygienic environment as integral to healthy life and emphasised municipal and State duties concerning public spaces and sanitation.

Vellore Citizens' Welfare Forum v. Union of India recognised sustainable development, precaution and polluter pays within Indian environmental law. M.C. Mehta v. Kamal Nath applied the public-trust doctrine to interference with a river. A.P. Pollution Control Board v. Prof. M.V. Nayudu examined scientific uncertainty, allocation of the burden of proof and the need for expert environmental decision-making. Intellectuals Forum, Tirupathi v. State of Andhra Pradesh protected urban water bodies and connected public trust with sustainable development.

These decisions do not replace legislation. They illustrate how constitutional rights, statutory duties and environmental principles interact when executive action or inaction threatens life, health or public resources.

16. Climate change under Articles 14 and 21

In M.K. Ranjitsinh v. Union of India, the Supreme Court's 2024 judgment recognised a constitutional right to be free from the adverse effects of climate change under Articles 14 and 21. The case arose from measures to protect the critically endangered Great Indian Bustard and the interaction between species conservation and overhead electricity transmission needed for renewable energy.

The Court explained that climate change can undermine life, health, food, water, housing and equality, with disproportionate effects on vulnerable communities. It also recognised that renewable-energy expansion is an important response to climate harm. The decision therefore required reconciliation of two environmental imperatives rather than treating renewable energy and biodiversity as automatic opposites.

In its final directions issued in 2025, the Court acted on an expert committee's assessment and adopted a differentiated, expert-led approach to priority habitats, power lines and mitigation. For examination purposes, distinguish the constitutional recognition in the 2024 judgment from the site-specific remedial directions finalised in 2025. The broader lesson is that constitutional climate adjudication must combine rights, biodiversity protection, technology, regional conditions, scientific evidence and institutional competence.

17. Illustrative problem and answer method

Assume that a State approves a hazardous industrial park beside a river and densely populated settlement. The record contains no cumulative health assessment; the pollution-control authority ignores evidence of groundwater contamination; residents receive no reasons; and the State argues that jobs and its industrial policy justify the approval.

A complete answer should first identify life, health, water and equality interests under Articles 21 and 14. It should test any business claim under Articles 19(1)(g) and 19(6), invoke Articles 47 and 48A as State duties and Article 51A(g) as an interpretive civic duty, and identify legislative competence and the applicable environmental statutes. It should then apply prevention, precaution, polluter pays, sustainable development and public trust to the evidence.

The procedural analysis should ask whether the competent authority considered relevant material, followed mandatory appraisal and hearing requirements, obtained independent expertise and supplied intelligible reasons. Remedies may include fresh appraisal, interim safeguards, disclosure, monitoring, restoration, compensation or closure if authorised and proportionate. A court should not approve or reject the project solely on its own policy preference; it should ensure that constitutional and statutory duties are actually performed.

For a descriptive examination question, use this order: policy timeline; legal status of policy; constitutional text; federal competence; Article 21 development; related Articles 14 and 19; Directive Principles and Fundamental Duties; remedies; leading cases; and a reasoned conclusion. Always distinguish express constitutional text from judge-made interpretation and non-justiciable principles from enforceable rights.
    `.trim(),
    keyPoints: [
      "Environmental policy guides government action but does not override the Constitution, statutes or binding precedent.",
      "India's modern framework developed through post-Stockholm institutions, constitutional amendment, pollution-control statutes and national policies.",
      "The National Environment Policy, 2006 integrates conservation, livelihood security, equity, efficiency and environmental governance.",
      "Article 21 has been judicially enlarged to include environmental conditions necessary for life, health and dignity.",
      "Article 14 controls arbitrary environmental action and supports attention to unequal pollution and climate burdens.",
      "Article 19(1)(g) does not create an unrestricted right to pollute; reasonable environmental restrictions may be imposed under Article 19(6).",
      "Article 48A is a non-justiciable Directive Principle and Article 51A(g) is a Fundamental Duty, but both strongly guide interpretation and governance.",
      "Environmental legislative competence is distributed across all three legislative lists and may also rest on Articles 252 and 253.",
      "Articles 32 and 226 support environmental writ remedies, subject to bona fide standing, evidence, statutory structure and institutional competence.",
      "The Supreme Court has recognised protection from adverse climate effects under Articles 14 and 21 while requiring scientifically informed balancing of competing environmental needs.",
    ],
    provisions: [
      {
        id: "environmental-law-unit-2-fundamental-rights",
        title: "Constitution of India",
        provision: "Articles 14, 19 and 21",
        description:
          "Protect equality and non-arbitrariness, qualified economic and expressive freedoms, and life and personal liberty; together they frame substantive and procedural environmental rights.",
      },
      {
        id: "environmental-law-unit-2-remedies",
        title: "Constitution of India",
        provision: "Articles 32 and 226",
        description:
          "Empower the Supreme Court and High Courts to issue constitutional writs, with Article 226 extending to fundamental rights and other legal purposes.",
      },
      {
        id: "environmental-law-unit-2-directive-principles",
        title: "Constitution of India",
        provision: "Articles 37, 39(b), 39(e), 47, 48 and 48A",
        description:
          "Guide governance on the common good, protection of health, scientific resource management, environmental improvement and safeguarding forests and wildlife.",
      },
      {
        id: "environmental-law-unit-2-fundamental-duty",
        title: "Constitution of India",
        provision: "Article 51A(g)",
        description:
          "Makes protection and improvement of forests, lakes, rivers, wildlife and the natural environment, along with compassion for living creatures, a citizen's Fundamental Duty.",
      },
      {
        id: "environmental-law-unit-2-legislative-lists",
        title: "Constitution of India",
        provision: "Article 246 and the Seventh Schedule",
        description:
          "Distributes environmental subjects across Union, State and Concurrent powers, including water, public health, industries, mines, forests and wildlife.",
      },
      {
        id: "environmental-law-unit-2-state-consent",
        title: "Constitution of India",
        provision: "Article 252",
        description:
          "Allows Parliament to legislate on a State subject at the request of two or more States; this mechanism was used for the Water Act, 1974.",
      },
      {
        id: "environmental-law-unit-2-international-obligations",
        title: "Constitution of India",
        provision: "Articles 51(c) and 253",
        description:
          "Supports respect for international law and gives Parliament legislative power to implement treaties, conventions and decisions made at international conferences.",
      },
      {
        id: "environmental-law-unit-2-local-government",
        title: "Constitution of India",
        provision: "Articles 243G and 243W; Eleventh and Twelfth Schedules",
        description:
          "Provide the constitutional framework for State devolution of environmental, water, sanitation, planning and resource-management functions to local government.",
      },
      {
        id: "environmental-law-unit-2-national-environment-policy",
        title: "National Environment Policy, 2006",
        provision: "Policy objectives and principles",
        description:
          "Guides conservation, livelihood security, equity, resource efficiency, environmental governance and integration of ecological concerns into development decisions.",
      },
    ],
    importantCases: [
      {
        id: "environmental-law-unit-2-rlek",
        caseName: "Rural Litigation and Entitlement Kendra v. State of Uttar Pradesh",
        citation: "1985 Supp SCC 79",
        principle:
          "Constitutional environmental review may protect ecological balance and public safety from destructive extraction in a fragile area.",
        summary:
          "In an early environmental PIL concerning limestone quarrying in the Mussoorie hills, the Court considered ecological damage, public interest and rehabilitation while directing closure of harmful operations.",
      },
      {
        id: "environmental-law-unit-2-oleum-gas",
        caseName: "M.C. Mehta v. Union of India (Oleum Gas Leak)",
        citation: "(1987) 1 SCC 395",
        principle:
          "An enterprise engaged in hazardous or inherently dangerous activity bears absolute and non-delegable liability for resulting harm.",
        summary:
          "The Oleum gas leak litigation strengthened constitutional remedies for industrial hazards and developed an Indian rule of absolute liability distinct from the exceptions under Rylands v. Fletcher.",
      },
      {
        id: "environmental-law-unit-2-subhash-kumar",
        caseName: "Subhash Kumar v. State of Bihar",
        citation: "(1991) 1 SCC 598",
        principle:
          "Article 21 includes enjoyment of pollution-free water and air, but environmental PIL must be brought bona fide rather than for private interest.",
        summary:
          "The Court articulated the environmental dimension of life while rejecting the particular petition after finding that public-interest procedure had been invoked for a personal dispute.",
      },
      {
        id: "environmental-law-unit-2-virender-gaur",
        caseName: "Virender Gaur v. State of Haryana",
        citation: "(1995) 2 SCC 577",
        principle:
          "A hygienic and healthy environment is integral to the right to life, and public authorities must protect environmental and sanitation interests.",
        summary:
          "The Court prevented use of open land reserved under a municipal scheme in a manner inconsistent with public health and environmental quality.",
      },
      {
        id: "environmental-law-unit-2-vellore",
        caseName: "Vellore Citizens' Welfare Forum v. Union of India",
        citation: "(1996) 5 SCC 647",
        principle:
          "Sustainable development, precaution and polluter pays form part of Indian environmental law and inform constitutional and statutory duties.",
        summary:
          "Addressing tannery pollution, the Court connected Articles 21, 47, 48A and 51A(g) with preventive measures, compensation and remediation.",
      },
      {
        id: "environmental-law-unit-2-kamal-nath",
        caseName: "M.C. Mehta v. Kamal Nath",
        citation: "(1997) 1 SCC 388",
        principle:
          "The State holds important natural resources in public trust and cannot permit their diversion for private advantage contrary to that trust.",
        summary:
          "The Court applied the public-trust doctrine after private interference with a river and required measures directed at restoration and accountability.",
      },
      {
        id: "environmental-law-unit-2-nayudu",
        caseName: "A.P. Pollution Control Board v. Prof. M.V. Nayudu",
        citation: "(1999) 2 SCC 718",
        principle:
          "Scientific uncertainty calls for precaution, appropriate treatment of the burden of proof and informed expert decision-making.",
        summary:
          "The Court examined risks to drinking-water sources and explained the institutional difficulty of deciding technically complex environmental disputes without adequate expertise.",
      },
      {
        id: "environmental-law-unit-2-intellectuals-forum",
        caseName: "Intellectuals Forum, Tirupathi v. State of Andhra Pradesh",
        citation: "(2006) 3 SCC 549",
        principle:
          "Public trust and sustainable development require authorities to protect water bodies and ecological resources against unjustified conversion.",
        summary:
          "The Court addressed the alienation and development of urban tanks and emphasised the ecological, groundwater and community value of lakes.",
      },
      {
        id: "environmental-law-unit-2-ranjitsinh",
        caseName: "M.K. Ranjitsinh v. Union of India",
        citation: "2024 INSC 280; final directions 2025 INSC 1472",
        principle:
          "Articles 14 and 21 protect against adverse climate effects, while remedies must reconcile climate mitigation, biodiversity and local conditions through scientific expertise.",
        summary:
          "In the Great Indian Bustard litigation, the Court recognised the constitutional dimensions of climate harm in 2024 and later adopted expert-informed, differentiated directions for habitat and power-line protection.",
      },
    ],
    examFocus:
      "Prepare the distinction between policy and law; the institutional timeline from the National Committee on Environmental Planning and Coordination to the Ministry of Environment, Forest and Climate Change; the National Forest Policy 1988, the two 1992 policy statements, the National Environment Policy 2006 and the National Action Plan on Climate Change 2008; Articles 14, 19, 21, 32, 37, 39, 47, 48A, 51A(g), 226, 243G, 243W, 246, 252 and 253; relevant entries in all three legislative lists; the Article 21 right to environmental quality; the status of Directive Principles and Fundamental Duties; environmental PIL and its limits; and the principles stated in RLEK, Oleum Gas Leak, Subhash Kumar, Virender Gaur, Vellore Citizens, Kamal Nath, Nayudu, Intellectuals Forum and M.K. Ranjitsinh. In a problem, identify the enforceable right, statutory source, competent authority, evidentiary issue and proportionate remedy.",
    revisionNotes: `
Policy timeline: Stockholm influenced the creation of national institutions and modern legislation. NCEPC was established in 1972, the Department of Environment in 1980 and a dedicated Ministry in 1985. Major policy documents include the National Forest Policy 1988, the National Conservation Strategy and Policy Statement on Environment and Development 1992, the Policy Statement for Abatement of Pollution 1992, the National Environment Policy 2006 and the National Action Plan on Climate Change 2008. Policy guides administration but cannot override binding law.

Constitutional core: Article 21 has been interpreted to include environmental conditions necessary for life, health and dignity. Article 14 controls arbitrariness and unequal environmental burdens. Article 19(1)(g) is subject to reasonable restrictions under Article 19(6). Article 48A directs State environmental protection; Article 51A(g) imposes a citizen's environmental duty; neither is independently enforceable like a fundamental right, but both guide interpretation. Articles 32 and 226 provide writ remedies.

Legislative competence: use Article 246 and the Seventh Schedule. State subjects include public health, agriculture, water and land; Union subjects include controlled industries, mines and inter-State rivers; Concurrent subjects include forests and wildlife. Article 252 supported the Water Act 1974, while Article 253 enables implementation of international obligations.

Case sequence: RLEK — ecological quarrying control; Oleum Gas Leak — absolute liability; Subhash Kumar — pollution-free water and air plus bona fide PIL; Virender Gaur — hygienic environment; Vellore — sustainable development, precaution and polluter pays; Kamal Nath — public trust; Nayudu — science and precaution; Intellectuals Forum — protection of lakes; M.K. Ranjitsinh — climate effects under Articles 14 and 21 with expert-led balancing.
    `.trim(),
    notes: "",
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
