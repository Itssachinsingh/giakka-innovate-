import Opportunity from '@/components/Services/ServicePages/Opportunity'
import Intro from '@/components/global/Intro'
import Path from '@/components/global/Path'
import ServicesHero from '@/components/global/SerivecesHero'
import Solution from '@/components/Services/ServicePages/Solution'
import Growth from '@/components/Services/MainPage/Growth'

import React from 'react'
import ChooseUS from '@/components/Services/ServicePages/ChooseUs'
import Success from '@/components/Services/ServicePages/Success'
import NextStep from '@/components/Services/ServicePages/NextStep'
import Book from '@/components/Services/MainPage/Book'

const page = () => {

    // Opportunity Component
    const innovationCommercializationData = {
        heading: {
            sub: "TECHNOLOGY COMMERCIALIZATION",
            title: "THE INNOVATION COMMERCIALIZATION CHALLENGE",
        },
        topStats: [
            { number: "$2.6T", desc: "global R&D investment annually with massive commercialization potential" },
            { number: "15-25%", desc: "of university technologies successfully reach commercial markets" },
            { number: "$127T", desc: "technology transfer market growing at 9.5% CAGR through 2033" },
        ],
        bottomStats: [
            { number: "68%", desc: "success rate achievable with expert commercialization support vs. industry average" },
            { number: "£2.5M", desc: "Average follow-on funding secured for properly commercialized technologies" },
            {
                highlight: "Yet most breakthrough innovations fail to achieve commercial impact.",
                desc: "Success requires more than brilliant technology—it demands systematic assessment, strategic positioning, and expert execution across every phase of the commercialization journey."
            },
        ],
    };

    // Solution Component
    const solutionsData = [
        {
            key: "Market Opportunity Assessment",
            heading: "MARKET OPPORTUNITY ASSESMENT",
            description:
                "Transform uncertainty into strategic clarity with comprehensive market intelligence that eliminates guesswork and optimizes resource allocation across global opportunities.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Data-driven market prioritization", normal: " across 40+ potential markets using proprietary scoring framework" },
                        { bold: "Competitive advantage identification", normal: " through systematic gap analysis and strategic positioning" },
                        { bold: "Revenue opportunity quantification", normal: " with 3-year growth projections and sensitivity analysis" },
                        { bold: "Risk assessment and mitigation strategies", normal: " for market-specific challenges and scenarios" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Market sizing and segmentation", normal: " across geographic regions, demographics, and customer behaviors" },
                        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
                        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
                        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
                        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
                    ],
                },
            ],
        },
        {
            key: "Go-to-Market Strategy Development",
            heading: "GO-TO-MARKET STRATEGY DEVELOPMENT",
            description:
                "Accelerate market penetration with proven frameworks adapted to local market dynamics and competitive environments.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Optimal market entry approach", normal: " balancing speed, cost, risk, and strategic control factors" },
                        { bold: "Localized value propositions", normal: " driving customer acquisition, retention, and advocacy" },
                        { bold: "Distribution network establishment", normal: " with verified, qualified, and motivated channel partners" },
                        { bold: "Marketing strategy execution", normal: " generating measurable customer engagement, conversion, and ROI" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Market entry mode optimization", normal: " (direct operations, strategic partnerships, joint ventures, acquisitions)" },
                        { bold: "Pricing strategy development", normal: " reflecting local market dynamics, competitive positioning, and value perception" },
                        { bold: "Distribution channel strategy", normal: " with partner identification, evaluation, and relationship facilitation" },
                        { bold: "Brand positioning and localization", normal: " for cultural resonance, market acceptance, and competitive differentiation" },
                        { bold: "Digital marketing strategy", normal: " leveraging local platforms, channels, and customer acquisition methods" },
                    ],
                },
            ],
        },
        {
            key: "Regulatory & Compliance Navigation",
            heading: "REGULATORY & COMPLIANCE NAVIGATION",
            description:
                "Ensure compliance while accelerating market entry through expert navigation of complex international regulatory landscapes.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Zero regulatory incidents", normal: " through proactive compliance management and expert guidance" },
                        { bold: "Accelerated approval timelines", normal: " via established regulatory relationships and process optimization" },
                        { bold: "Cost optimization", normal: " through strategic compliance planning and incentive program utilization" },
                        { bold: "IP protection", normal: " ensuring competitive advantage, revenue security, and brand integrity" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Foreign investment compliance", normal: " including FDI regulations, sectoral restrictions, and approval processes" },
                        { bold: "Product certification and standards", normal: " compliance including local testing, documentation, and approval requirements" },
                        { bold: "Industry-specific regulatory", normal: " approvals across healthcare, financial services, technology, and manufacturing sectors" },
                        { bold: "Import/export optimization", normal: " including customs procedures, duty structures, and trade agreement utilization" },
                        { bold: "Intellectual property protection", normal: " with registration strategies, enforcement mechanisms, and competitive monitoring" },
                    ],
                },
            ],
        },
        {
            key: "Legal Entity Formation",
            heading: "LEGAL ENTITY FORMATION",
            description:
                "Establish optimal corporate structure for operational efficiency, tax optimization, and strategic flexibility across multiple jurisdictions.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Optimal entity structure", normal: " balancing operational needs, tax efficiency, and strategic objectives" },
                        { bold: "Accelerated setup timeline", normal: " with typically 45-60 day incorporation to full operations capability" },
                        { bold: "Banking relationships established", normal: " with tier-1 institutions supporting international business requirements" },
                        { bold: "Tax-efficient structure minimizing", normal: " global tax liability while ensuring full compliance across jurisdictions" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Corporate structure optimization", normal: " based on business model, growth strategy, and cross-border requirements" },
                        { bold: "Company incorporation", normal: " with expedited processing, compliance setup, and ongoing management" },
                        { bold: "Banking infrastructure establishment", normal: " with multiple institution relationships and international capabilities" },
                        { bold: "Tax registration and optimization", normal: " including corporate tax, VAT/GST, withholding tax, and transfer pricing" },
                        { bold: "Employment law compliance", normal: " with HR framework development, local labor law adherence, and benefits optimization" },
                    ],
                },
            ],
        },
        {
            key: "Operational Infrastructure Setup",
            heading: "OPERATIONAL INFRASTRUCTURE SETUP",
            description:
                "Build scalable operations infrastructure supporting immediate market entry requirements and long-term growth objectives.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Operational readiness", normal: " typically within 90-120 days of market entry decision and strategic commitment" },
                        { bold: "Scalable infrastructure", normal: " supporting 5x growth without major reinvestment or operational disruption" },
                        { bold: "Quality assurance meeting", normal: " international standards while exceeding local customer expectations" },
                        { bold: "Cost-optimized operations", normal: " achieving competitive advantage through strategic location and resource optimization" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Office location selection", normal: " optimizing for talent access, cost efficiency, customer proximity, and business requirements" },
                        { bold: "IT infrastructure development", normal: " including digital presence, technology systems, and cybersecurity frameworks" },
                        { bold: "Supply chain establishment with", normal: " vendor partnerships, quality assurance frameworks, and logistics optimization" },
                        { bold: "Quality control systems", normal: " meeting international standards, local requirements, and customer expectations" },
                        { bold: "Customer service infrastructure", normal: " supporting local market expectations, service levels, and cultural preferences" },
                    ],
                },
            ],
        },
        {
            key: "Partnership & Ecosystem Development",
            heading: "PARTNERSHIP & ECOSYSTEM DEVELOPMENT",
            description:
                "Build strategic relationships that accelerate market penetration and create sustainable competitive advantages.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Strategic partnerships", normal: " typically 5–15 key relationships driving 60–80% of initial market revenue" },
                        { bold: "Distribution coverage", normal: " across target markets within 12–24 months of initial market entry" },
                        { bold: "Supplier network providing", normal: " competitive cost structure, quality assurance, and operational flexibility" },
                        { bold: "Industry influence", normal: " through association membership, thought leadership, and policy engagement" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Strategic partnership identification", normal: " with comprehensive evaluation, negotiation support, relationship management" },
                        { bold: "Distribution network establishment", normal: " across target geographic segments, customer demographics, and sales channels" },
                        { bold: "Supplier ecosystem development", normal: " ensuring quality, reliability, cost optimization, and supply chain resilience" },
                        { bold: "Industry association integration", normal: " for market intelligence, regulatory influence, and thought leadership positioning" },
                        { bold: "Government stakeholder engagement", normal: " for policy advocacy, incentive optimization, and regulatory relationship building" },
                    ],
                },
            ],
        },
        {
            key: "Growth Strategy & Execution",
            heading: "GROWTH STRATEGY & EXECUTION",
            description:
                "Scale systematically, from initial market entry to market leadership through proven growth frameworks and execution excellence.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Sustainable growth", normal: " trajectory typically achieving 50–150% annual growth in first 3 years of operation" },
                        { bold: "Market leadership positioning", normal: " in target segments within 24–36 months of market entry" },
                        { bold: "Revenue diversification", normal: " reducing dependence on single products, customers, or geographic concentrations" },
                        { bold: "Operational excellence", normal: " supporting profitable growth, stakeholder value creation, and competitive differentiation" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Business model optimization", normal: " for local market dynamics, customer preferences, and competitive positioning" },
                        { bold: "Revenue stream diversification", normal: " maximizing market opportunity, customer lifetime value, competitive resilience" },
                        { bold: "Geographic expansion strategy", normal: " into secondary cities, emerging segments, and adjacent market opportunities" },
                        { bold: "Product portfolio development", normal: " including localization, market-specific innovations, customer-driven enhancements" },
                        { bold: "Digital transformation initiatives", normal: " leveraging technology adoption patterns for competitive advantage efficiency gains" },
                    ],
                },
            ],
        },
        {
            key: "Funding Strategy Development",
            heading: "FUNDING STRATEGY DEVELOPMENT",
            description:
                "Access capital for accelerated international growth through strategic investor engagement and funding optimization.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Funding success", normal: " with 85%+ success rate for properly prepared and positioned companies" },
                        { bold: "Optimal valuations", normal: " typically achieving 25–50% premiums through strategic positioning and competitive dynamics" },
                        { bold: "Strategic investor engagement", normal: " providing market access, operational expertise, and ecosystem relationships" },
                        { bold: "Accelerated funding", normal: " timelines typically 4–8 months from preparation to successful funding closure" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Investment readiness assessment", normal: " identifying preparation requirements, timeline optimization, and strategic positioning" },
                        { bold: "Investor targeting strategy", normal: " connecting with international, regional, and sector-specific investor communities" },
                        { bold: "Due diligence preparation", normal: " ensuring comprehensive documentation, presentation materials, process management" },
                        { bold: "Pitch development", normal: " with compelling narratives, financial projections, and strategic vision communication" },
                        { bold: "Valuation analysis", normal: " and negotiation support for optimal terms, strategic alignment, and value maximization" },
                    ],
                },
            ],
        },
        {
            key: "Government Incentives & Grants",
            heading: "GOVERNMENT INCENTIVES & GRANTS",
            description:
                "Maximize financial benefits through strategic utilization of government incentives, grants, and support programs.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        { bold: "Sustainable growth", normal: " trajectory typically achieving 50–150% annual growth in first 3 years of operation" },
                        { bold: "Market leadership positioning", normal: " in target segments within 24–36 months of market entry" },
                        { bold: "Revenue diversification", normal: " reducing dependence on single products, customers, or geographic concentrations" },
                        { bold: "Operational excellence", normal: " supporting profitable growth, stakeholder value creation, and competitive differentiation" },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        { bold: "Incentive program identification", normal: " across production-linked schemes, export promotion, investment attraction initiatives" },
                        { bold: "Government incentive application", normal: " including documentation, compliance management, ongoing benefit optimization" },
                        { bold: "Due diligence preparation", normal: " ensuring comprehensive documentation, presentation materials, process management" },
                        { bold: "Pitch development", normal: " with compelling narratives, financial projections, and strategic vision communication" },
                        { bold: "Valuation analysis", normal: " and negotiation support for optimal terms, strategic alignment, and value maximization" },
                    ],
                },
            ],
        },
    ];

    // Choose Component
    const chooseUsData = {
        heading: {
            main: "WHY CHOOSE US COMMERCIALIZING",
            sub: " TECHNOLOGY",
            aeroImage: "/images/aero3.svg",
        },
        leftItems: [
            {
                icon: "Cpu",
                title: "Deep Technical Expertise",
                text: "15+ years of technology commercialization experience across 25+ sectors with proven track record of converting research into revenue.",
            },
            {
                icon: "Layers",
                title: "Systematic Methodology",
                text: "Proven frameworks reducing commercialization timelines by 40% while achieving 68% success rate vs. 15-25% industry average.",
            },
            {
                icon: "Globe",
                title: "Global Network Access",
                text: "Extensive relationships with research institutions, corporate innovation labs, investors, and industry leaders worldwide.",
            },
        ],
        rightItems: [
            {
                icon: "BarChart2",
                title: "Evidence-Based Approach",
                text: "Data-driven strategies with comprehensive market validation, customer development, and performance optimization.",
            },
            {
                icon: "Briefcase",
                title: "Funding Ecosystem Integration",
                text: "Established relationships with technology-focused investors, government funding agencies, and strategic corporate partners.",
            },
        ],
        backgroundImage: "/images/chooseUs.jpg",
    };



    // Success component
const successData = {
  heading: "SUCCESS METRICS",
  boxes: [
    {
      value: "£2.5M",
      title: "average follow-on",
      description: "funding secured within 24 months of commercialization",
      image: "/images/funding.svg",
      height: "h-[320px]",
      colSpan: "md:col-span-2",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30 md:w-50",
    },
    {
      value: "60%",
      title: "commercialization success rate",
      description: "vs. 15-25% industry average",
      image: "/images/success.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30",
    },
    {
      value: "18",
      title: "month acceleration",
      description: "in time-to-market through expert support",
      image: "/images/month.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-23",
    },
    {
      value: "85%",
      title: "client satisfaction",
      description: "with ongoing technology development and scaling support",
      image: "/images/client.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
    {
      value: "3X",
      title: "higher revenue generation",
      description: "from commercialized technologies vs. unguided approaches",
      image: "/images/revenue.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
  ],
};


// Next step  data
const values = [
    {
        id: 1,
        no: "01",
        title: "Technology Assessment",
        desc: "Comprehensive evaluation of your commercialization potential and optimal pathway",
        img: "/images/step4.jpg",
    },
    {
        id: 2,
        no: "02",
        title: "Commercialization Strategy",
        desc: "Detailed roadmap with market validation, development milestones, and launch planning",
        img: "/images/step5.jpg",
    },
    {
        id: 3,
        no: "03",
        title: "Implementation Partnership",
        desc: "Expert execution with continuous optimization and local market support",
        img: "/images/step3.jpg",
    },
];


    return (
        <div>
            <ServicesHero img='/images/market.png' heading='TECHNOLOGY COMMERCIALIZATION & TRANSFER' para='Transform Innovation into Market-Leading Revenue Streams' />
            <Path page='Technology Commercialization & Transfer' />
            <Intro para1='Bridge the gap between breakthrough research and commercial success. ' para2='From technology assessment to market launch, we provide the specialized expertise to monetize your innovations and establish sustainable competitive advantages globally.' />
            <Opportunity data={innovationCommercializationData} />
            <Solution data={solutionsData} />
            <ChooseUS data={chooseUsData} />
            <Success data={successData} />
            <Growth />
            <NextStep  data={values}/>
            <Book />
        </div>
    )
}

export default page