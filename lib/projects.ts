import { isCloudinaryConfigured } from "./cloudinary";

export interface ProjectTestimonial {
    author: string;
    role: string;
    quote: string;
}

export interface ProjectItem {
    id: number;
    slug: string;
    title: string;
    category: "Commercial" | "Industrial" | "Religious" | "Institutional" | "Infrastructure" | "Energy";
    cloudinaryId: string;
    localImage: string;
    description: string;
    status: "ongoing" | "complete";
    client: string;
    location: string;
    year: string;
    overview: string;
    scope: string[];
    highlights: string[];
    testimonial?: ProjectTestimonial;
    gallery: string[];
}

export const rawProjects: ProjectItem[] = [
    {
        id: 1,
        slug: "east-park-mall-expansion",
        title: "East Park Mall Expansion",
        category: "Commercial",
        cloudinaryId: "Eastpark_expansion_syiax9",
        localImage: "/projects/east-park-expansion.jpg",
        description: "Expansion works for East Park Mall.",
        status: "complete",
        client: "Napoli Property",
        location: "Lusaka, Zambia",
        year: "2023 - Present",
        overview: "A prestigious commercial expansion project at Zambia's premier retail destination, East Park Mall. Silverline Engineering was selected to execute structural additions, reinforced concrete works, and modern retail infrastructure while the shopping center remained fully operational and accessible to thousands of daily visitors.",
        scope: [
            "Structural steel framing and architectural extension",
            "Reinforced concrete suspended slabs & foundations",
            "Commercial perimeter enclosure & modern facades",
            "Service integration & site drainage reticulation",
            "Active site safety & public pedestrian management",
        ],
        highlights: [
            "Delivered alongside a live, fully operational shopping mall without disruptions",
            "Zero-incident safety record during heavy commercial operations",
            "High-precision architectural finishes matching existing mall aesthetics",
        ],
        testimonial: {
            author: "Gillian Casilli",
            role: "Napoli Property",
            quote: "The team delivered the East Park Mall expansion works with professionalism, strong communication, and careful site management. Working alongside a busy, fully operational shopping mall presented its challenges, but they managed the works responsibly while keeping us well informed throughout the project. We are very pleased with the quality of the completed works and the overall experience.",
        },
        gallery: [
            "/project-galleries/east-park-mall-expansion/image-1.jpg",
            "/project-galleries/east-park-mall-expansion/image-2.jpg",
            "/project-galleries/east-park-mall-expansion/image-3.jpg",
            "/project-galleries/east-park-mall-expansion/image-4.jpg",
            "/project-galleries/east-park-mall-expansion/image-5.jpg",
        ],
    },
    {
        id: 2,
        slug: "meco-milling-plant",
        title: "Meco Milling Plant",
        category: "Industrial",
        cloudinaryId: "MECO_Milling_y2k6pl",
        localImage: "/projects/meco-milling.jpg",
        description: "Construction of a 150Ton/day maize milling plant in Ndola, including warehouses, offices, and substation.",
        status: "complete",
        client: "Eco Petroleum / Meco Milling",
        location: "Ndola, Copperbelt Province",
        year: "2023 - 2024",
        overview: "Design and turnkey civil and structural engineering for a high-capacity 150 Ton/day commercial maize milling facility in Ndola. The development encompasses heavy industrial warehouses, administrative offices, high-voltage transformer substation, silos foundations, and heavy vehicle logistics aprons.",
        scope: [
            "150 Ton/day industrial milling structure",
            "Heavy-load concrete equipment foundations & vibration dampening",
            "Industrial portal-framed steel warehouses",
            "Dedicated electrical substation & power distribution",
            "Truck weighbridge, paved logistics yards, and administrative offices",
        ],
        highlights: [
            "Now fully operational supporting regional agro-processing supply chain",
            "Robust heavy-duty floor slabs engineered for multi-ton milling machinery",
            "Complete on-site infrastructure including drainage and security perimeters",
        ],
        testimonial: {
            author: "Hussein Mohamed Ahmed",
            role: "Eco Petroleum",
            quote: "We entrusted the team with two very different projects: the Meco Milling Plant in Ndola and our Chalala fuel station. Both projects were completed to a high standard, with the milling plant now fully operational. Throughout both projects, the team was professional, responsive, and easy to work with. We were very pleased with the results and would gladly work with them again.",
        },
        gallery: [
            "/project-galleries/meco-milling-plant/image-1.jpg",
            "/project-galleries/meco-milling-plant/image-2.jpg",
            "/project-galleries/meco-milling-plant/image-3.jpg",
            "/project-galleries/meco-milling-plant/image-4.jpg",
            "/project-galleries/meco-milling-plant/image-5.jpg",
            "/project-galleries/meco-milling-plant/image-6.jpg",
        ],
    },
    {
        id: 3,
        slug: "undp-bulking-centers",
        title: "UNDP Bulking Centers",
        category: "Industrial",
        cloudinaryId: "UNDP_BULKING_CENTRE_dpdxsx",
        localImage: "/projects/undp-bulking-centres.jpg",
        description: "Four portal framed structures under the SCLARA drought mitigation project in Eastern and Western provinces.",
        status: "complete",
        client: "United Nations Development Programme (UNDP)",
        location: "Eastern & Western Provinces, Zambia",
        year: "2023 - 2024",
        overview: "Construction of four large portal-framed regional agricultural bulking and storage centers under the SCLARA drought mitigation project across Eastern and Western Provinces of Zambia. Built to protect rural crop yields, provide food security, and serve farming communities in climate-vulnerable zones.",
        scope: [
            "Four heavy-duty portal-framed steel bulking centers",
            "Engineered concrete floor slabs for massive grain storage",
            "All-weather truck loading bays and ramp access",
            "Rainwater harvesting, perimeter fencing, and solar lighting",
            "Remote logistics management and localized labor empowerment",
        ],
        highlights: [
            "Successfully delivered across rugged, remote provincial locations",
            "Rigorous UN engineering compliance, environmental, and social safeguards met",
            "Directly serving thousands of smallholder farming families",
        ],
        testimonial: {
            author: "Patrick Muchimba",
            role: "UNDP",
            quote: "The team successfully constructed four portal-framed bulking centers as part of the SCLARA drought mitigation project across Eastern and Western Provinces. They worked professionally and adapted well to the challenges of delivering projects in remote locations. The completed structures will provide a lasting benefit to the communities they were built to serve.",
        },
        gallery: [
            "/project-galleries/undp-bulking-centers/image-1.jpg",
            "/project-galleries/undp-bulking-centers/image-2.jpg",
            "/project-galleries/undp-bulking-centers/image-3.jpg",
            "/project-galleries/undp-bulking-centers/image-4.jpg",
            "/project-galleries/undp-bulking-centers/image-5.jpg",
            "/project-galleries/undp-bulking-centers/image-6.jpg",
            "/project-galleries/undp-bulking-centers/image-7.jpg",
            "/project-galleries/undp-bulking-centers/image-8.jpg",
            "/project-galleries/undp-bulking-centers/image-9.jpg",
        ],
    },
    {
        id: 4,
        slug: "ndeke-mosque",
        title: "Ndeke Mosque",
        category: "Religious",
        cloudinaryId: "NDEKE_mosque_yx0orl",
        localImage: "/projects/ndeke-mosque.jpg",
        description: "Double volume reinforced concrete Mosque with raft foundations and mezzanine floors in Ndola.",
        status: "ongoing",
        client: "Islamic Community Ndola",
        location: "Ndeke, Ndola, Copperbelt",
        year: "2023 - Present",
        overview: "An iconic religious and community landmark in Ndola featuring double-volume reinforced concrete framing, raft foundations, expansive mezzanine prayer halls, architectural domes, and specialized acoustic and ventilation detailing.",
        scope: [
            "Engineered raft foundation for high structural loading",
            "Double-volume reinforced concrete columns, arches, and beams",
            "Mezzanine prayer gallery floor construction",
            "Architectural dome support engineering",
            "Integrated ablution facility civil works and plumbing",
        ],
        highlights: [
            "Complex structural arch formwork and double-height column pours",
            "Engineered to accommodate large congregation capacities",
            "High acoustic isolation and natural thermal ventilation design",
        ],
        gallery: [
            "/project-galleries/ndeke-mosque/image-1.jpg",
            "/project-galleries/ndeke-mosque/image-2.jpg",
            "/project-galleries/ndeke-mosque/image-3.jpg",
            "/project-galleries/ndeke-mosque/image-4.jpg",
            "/project-galleries/ndeke-mosque/image-5.jpg",
        ],
    },
    {
        id: 5,
        slug: "oryx-munali-filling-station",
        title: "Oryx Munali Filling Station",
        category: "Commercial",
        cloudinaryId: "ORYX_FILLING_STATION_qqxb6t",
        localImage: "/projects/oryx-munali.jpg",
        description: "Completion of filling station infrastructure at Munali.",
        status: "complete",
        client: "Oryx Energy",
        location: "Munali, Lusaka, Zambia",
        year: "2023 - 2024",
        overview: "Comprehensive turnkey construction and rebranding of the Oryx Munali retail petroleum filling station. Works comprised structural canopy fabrication, underground double-wall fuel tank installation, forecourt concrete paving, piping, and modern quick-service retail convenience store fit-out.",
        scope: [
            "Complete forecourt canopy overhaul and Oryx corporate rebranding",
            "Underground fuel storage tank installation & pressure testing",
            "Heavy-load concrete forecourt paving and fuel-resistant sealants",
            "Commercial convenience store construction and interior fit-out",
            "Hazardous area electrical and safety interlock installation",
        ],
        highlights: [
            "Delivered on time with strict international petroleum safety compliance",
            "Enhanced traffic flow and customer throughput capacity",
            "Seamless transition to operational status",
        ],
        testimonial: {
            author: "Kayamba Kayamba",
            role: "Oryx Energy",
            quote: "The team served as our main contractors for the Munali filling station and later took on the Chalala site following its acquisition. They handled the renovation of the canopy and the shop rebranding with professionalism and attention to detail. Our experience working with them on both projects was smooth and positive, and we appreciate their commitment to quality and timely delivery.",
        },
        gallery: [
            "/project-galleries/oryx-munali-filling-station/image-1.jpg",
            "/project-galleries/oryx-munali-filling-station/image-2.jpg",
            "/project-galleries/oryx-munali-filling-station/image-3.jpg",
            "/project-galleries/oryx-munali-filling-station/image-4.jpg",
            "/project-galleries/oryx-munali-filling-station/image-5.jpg",
        ],
    },
    {
        id: 6,
        slug: "alix-investment-factory",
        title: "Alix Investment Ltd Factory",
        category: "Industrial",
        cloudinaryId: "East_Park_kympd8",
        localImage: "/projects/alix-investment.jpg",
        description: "Construction of 1800m2 and 1250m2 portal framed warehouses and oil tank bases in LSMFEZ.",
        status: "complete",
        client: "Alix Investment Ltd",
        location: "LSMFEZ, Lusaka, Zambia",
        year: "2023 - 2024",
        overview: "Major manufacturing and warehousing hub development within the Lusaka South Multi-Facility Economic Zone (LSMFEZ). Construction encompassed 1,800m² and 1,250m² high-bay portal-framed warehouses, industrial oil storage tank bases, boundary civil works, and logistics circulation pavements.",
        scope: [
            "1,800m² and 1,250m² industrial portal frame fabrication and erection",
            "Specialized heavy reinforced concrete oil tank foundations",
            "Industrial high-durability floor slabs with laser screed leveling",
            "Administrative office blocks, guardhouses, and security infrastructure",
            "Heavy transport arterial roads and concrete drainage channels",
        ],
        highlights: [
            "Over 3,000m² of covered industrial production space created",
            "Precision foundation engineering for high-capacity liquid storage tanks",
            "Compliant with international economic zone industrial standards",
        ],
        gallery: [
            "/project-galleries/alix-investment-factory/image-1.jpg",
            "/project-galleries/alix-investment-factory/image-2.jpg",
            "/project-galleries/alix-investment-factory/image-3.jpg",
            "/project-galleries/alix-investment-factory/image-4.jpg",
            "/project-galleries/alix-investment-factory/image-5.jpg",
            "/project-galleries/alix-investment-factory/image-6.jpg",
        ],
    },
    {
        id: 7,
        slug: "eco-petroleum-chalala",
        title: "Eco Petroleum Chalala",
        category: "Commercial",
        cloudinaryId: "ECO_knxui6",
        localImage: "/projects/eco-petroleum.jpg",
        description: "Construction of forecourt, canopy, office block, warehouse and concrete pavement.",
        status: "complete",
        client: "Eco Petroleum",
        location: "Chalala, Lusaka, Zambia",
        year: "2023 - 2024",
        overview: "Greenfield development and subsequent acquisition retrofit of the Eco Petroleum filling station in Chalala. The project required complete forecourt civil works, canopy structural fabrication, modern convenience retail building, warehousing facilities, and precision concrete hardstands.",
        scope: [
            "Forecourt canopy fabrication and architectural cladding",
            "Fuel dispenser islands, underground suction piping, and vent lines",
            "Multi-room commercial retail shop and warehouse facility",
            "Heavy reinforced concrete pavement across full commercial plot",
            "Stormwater drainage, oil interceptors, and environmental containment",
        ],
        highlights: [
            "Successful handover followed by seamless corporate brand transition",
            "Engineered for high daily commuter traffic along the busy Chalala corridor",
            "Full environmental and fire safety certification achieved",
        ],
        testimonial: {
            author: "Hussein Mohamed Ahmed",
            role: "Eco Petroleum",
            quote: "We entrusted the team with two very different projects: the Meco Milling Plant in Ndola and our Chalala fuel station. Both projects were completed to a high standard. Throughout both projects, the team was professional, responsive, and easy to work with.",
        },
        gallery: [
            "/project-galleries/eco-petroleum-chalala/image-1.jpg",
            "/project-galleries/eco-petroleum-chalala/image-2.jpg",
            "/project-galleries/eco-petroleum-chalala/image-3.jpg",
            "/project-galleries/eco-petroleum-chalala/image-4.jpg",
        ],
    },
    {
        id: 8,
        slug: "limulunga-day-secondary-school",
        title: "Limulunga Day Secondary School",
        category: "Institutional",
        cloudinaryId: "Limulunga_secondary_school_mc2zhx",
        localImage: "/projects/limulunga-school.jpg",
        description: "Completion of school facilities including sewer system, electrical grid, sports courts, and water reticulation.",
        status: "complete",
        client: "Ministry of Education",
        location: "Limulunga, Western Province, Zambia",
        year: "2023 - Present",
        overview: "Comprehensive infrastructure completion of Limulunga Day Secondary School to serve hundreds of students across Western Province. Project scope includes complete classroom blocks, administrative offices, science laboratories, modern water reticulation with elevated storage tanks, decentralized sewer treatment systems, sports courts, and electrical grid connection.",
        scope: [
            "Multiple classroom wings, staff offices, and science laboratory blocks",
            "Modern water reticulation system with borehole and elevated storage tanks",
            "Complete on-site sewer treatment system and sanitary plumbing",
            "Outdoor multi-purpose sports courts and recreational grounds",
            "Electrical distribution wiring, sub-distribution boards, and perimeter security",
        ],
        highlights: [
            "Transformative educational facility providing modern learning environments",
            "Designed for sustainable water and sanitation self-sufficiency",
            "Strong community engagement and local job creation during construction",
        ],
        gallery: [
            "/project-galleries/limulunga-day-secondary-school/image-1.jpg",
            "/project-galleries/limulunga-day-secondary-school/image-2.jpg",
            "/project-galleries/limulunga-day-secondary-school/image-3.jpg",
            "/project-galleries/limulunga-day-secondary-school/image-4.jpg",
            "/project-galleries/limulunga-day-secondary-school/image-5.jpg",
            "/project-galleries/limulunga-day-secondary-school/image-6.jpg",
        ],
    },
    {
        id: 9,
        slug: "afro-oil-filling-station",
        title: "Afro Oil Filling Station",
        category: "Commercial",
        cloudinaryId: "projects/dji-0170",
        localImage: "/projects/afro-oil.jpg",
        description: "Complete civil works and installation of fibre coated fuel tanks for Afro Oil in New Kasama.",
        status: "complete",
        client: "Afro Oil Zambia",
        location: "New Kasama, Lusaka, Zambia",
        year: "2023 - 2024",
        overview: "Turnkey engineering, civil excavation, and mechanical installation of a high-end commercial filling station in New Kasama. Works featured excavation and precision anchoring of advanced fiber-coated double-wall underground fuel tanks, fuel piping lines, electrical containment, forecourt slabs, and retail building.",
        scope: [
            "Deep excavation, shoring, and installation of fiber-coated fuel tanks",
            "High-accuracy cathodic protection and leak detection monitoring",
            "Forecourt canopy structural steel design, fabrication, and erection",
            "Cast-in-place reinforced concrete forecourt with anti-spill containment",
            "Retail convenience storefront and corporate signage structural poles",
        ],
        highlights: [
            "Advanced fiber-coated tanks providing maximum anti-corrosion protection",
            "Completed with official grand launch ceremony and high public acclaim",
            "Full adherence to Energy Regulation Board (ERB) standards",
        ],
        gallery: [
            "/project-galleries/afro-oil-filling-station/image-1.jpg",
            "/project-galleries/afro-oil-filling-station/image-2.jpg",
            "/project-galleries/afro-oil-filling-station/image-3.jpg",
            "/project-galleries/afro-oil-filling-station/image-4.jpg",
            "/project-galleries/afro-oil-filling-station/image-5.jpg",
            "/project-galleries/afro-oil-filling-station/image-6.jpg",
        ],
    },
    {
        id: 10,
        slug: "victoria-falls-road",
        title: "Victoria Falls Road",
        category: "Infrastructure",
        cloudinaryId: "Victoria_falls_road_cng1ic",
        localImage: "/projects/victoria-falls-road.jpg",
        description: "Reinforced concrete road with cement stabilized base layer at Victoria Falls, Livingstone.",
        status: "complete",
        client: "Road Development Agency / Livingstone Municipality",
        location: "Livingstone, Southern Province, Zambia",
        year: "2023 - 2024",
        overview: "Heavy-duty road infrastructure construction facilitating vital tourist and commercial access to the Victoria Falls World Heritage area in Livingstone. The project encompassed roadway grading, cement-stabilized sub-base compaction, reinforced concrete rigid pavement construction, and integrated roadside drainage channels.",
        scope: [
            "Earthworks, subgrade preparation, and grader blade leveling",
            "Cement-stabilized crushed stone base layer compaction",
            "High-strength reinforced concrete rigid roadway pavement",
            "Heavy stormwater trapezoidal side drains and culverts",
            "Pedestrian walkways and high-visibility road markings",
        ],
        highlights: [
            "Engineered to withstand heavy tour buses and cross-border commercial freight",
            "Rigid concrete pavement engineered for longevity in high-temperature climates",
            "Preserved surrounding natural flora in tourist corridor",
        ],
        gallery: [
            "/project-galleries/victoria-falls-road/image-1.jpg",
            "/project-galleries/victoria-falls-road/image-2.jpg",
            "/project-galleries/victoria-falls-road/image-3.jpg",
            "/project-galleries/victoria-falls-road/image-4.jpg",
            "/project-galleries/victoria-falls-road/image-5.jpg",
            "/project-galleries/victoria-falls-road/image-6.jpg",
        ],
    },
    {
        id: 11,
        slug: "engic-solar-plants",
        title: "Engic Solar Plants",
        category: "Energy",
        cloudinaryId: "Engie_solar_plant_xk9u36",
        localImage: "/projects/engic-solar-plant.jpg",
        description: "Construction of solar plants across Eastern Province.",
        status: "complete",
        client: "Engie Energy Access / Rural Electrification",
        location: "Eastern Province, Zambia",
        year: "2023 - 2024",
        overview: "Installation of decentralized solar mini-grid power plants across multiple rural communities in Eastern Province. Works included site civil clearing, driven-pile steel mounting frame installation, photovoltaic solar panel mounting, DC wiring, inverter and battery storage housing, and high-security perimeter enclosures.",
        scope: [
            "Ground-mount solar racking structure assembly and foundation anchoring",
            "Multi-kilowatt photovoltaic solar panel string installation",
            "Battery energy storage system (BESS) housing and climate control",
            "Inverter, charge controller, and switchgear integration",
            "Security chain-link fencing, gravel surfacing, and lightning protection",
        ],
        highlights: [
            "Clean, reliable electricity brought to off-grid rural communities",
            "Rapid modular deployment across dispersed regional sites",
            "Zero-emission renewable energy generation powering homes and clinics",
        ],
        gallery: [
            "/project-galleries/engic-solar-plants/image-1.jpg",
            "/project-galleries/engic-solar-plants/image-2.jpg",
            "/project-galleries/engic-solar-plants/image-3.jpg",
            "/project-galleries/engic-solar-plants/image-4.jpg",
        ],
    },
];

export const projects = rawProjects.map((p) => ({
    ...p,
    image: isCloudinaryConfigured() ? p.cloudinaryId : p.localImage,
}));

export function getProjectBySlug(slug: string): ProjectItem | undefined {
    return rawProjects.find((p) => p.slug === slug);
}

export function getProjectById(id: number): ProjectItem | undefined {
    return rawProjects.find((p) => p.id === id);
}
