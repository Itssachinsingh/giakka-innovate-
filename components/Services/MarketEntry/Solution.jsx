'use client'
import React from 'react'
import MaxWidthWrapper from '@/components/ui/global/max-width-wrapper'
import { useState } from "react";
import Image from 'next/image';

const Solution = () => {
    const menuItems = [
        "Market Opportunity Assessment",
        "Go-to-Market Strategy Development",
        "Regulatory & Compliance Navigation",
        "Legal Entity Formation",
        "Operational Infrastructure Setup",
        "Partnership & Ecosystem Development",
        "Growth Strategy & Execution",
        "Funding Strategy Development",
        "Government Incentives & Grants",
    ];

    const content = {
        "Market Opportunity Assessment": {
            heading: "MARKET OPPORTUNITY ASSESMENT",
            description:
                "Transform uncertainty into strategic clarity with comprehensive market intelligence that eliminates guesswork and optimizes resource allocation across global opportunities.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Data-driven market prioritization",
                            normal: " across 40+ potential markets using proprietary scoring framework",
                        },
                        {
                            bold: "Competitive advantage identification",
                            normal: " through systematic gap analysis and strategic positioning",
                        },
                        {
                            bold: "Revenue opportunity quantification",
                            normal: " with 3-year growth projections and sensitivity analysis",
                        },
                        {
                            bold: "Risk assessment and mitigation strategies",
                            normal: " for market-specific challenges and scenarios",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Market sizing and segmentation",
                            normal: " across geographic regions, demographics, and customer behaviors",
                        },
                        {
                            bold: "Growth projections and trend analysis",
                            normal: " identifying high-potential opportunities and optimal timing",
                        },
                        {
                            bold: "Growth projections and trend analysis",
                            normal: " identifying high-potential opportunities and optimal timing",
                        },
                        {
                            bold: "Growth projections and trend analysis",
                            normal: " identifying high-potential opportunities and optimal timing",
                        },
                        {
                            bold: "Growth projections and trend analysis",
                            normal: " identifying high-potential opportunities and optimal timing",
                        },
                    ],
                },
            ],

        },

        "Go-to-Market Strategy Development": {
            heading: "GO-TO-MARKET STRATEGY DEVELOPMENT",
            description:
                "Accelerate market penetration with proven frameworks adapted to local market dynamics and competitive environments.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Optimal market entry approach",
                            normal: " balancing speed, cost, risk, and strategic control factors",
                        },
                        {
                            bold: "Localized value propositions",
                            normal: " driving customer acquisition, retention, and advocacy",
                        },
                        {
                            bold: "Distribution network establishment",
                            normal: " with verified, qualified, and motivated channel partners",
                        },
                        {
                            bold: "Marketing strategy execution",
                            normal: " generating measurable customer engagement, conversion, and ROI",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Market entry mode optimization ",
                            normal: " (direct operations, strategic partnerships, joint ventures, acquisitions)",
                        },
                        {
                            bold: "Pricing strategy development",
                            normal: " reflecting local market dynamics, competitive positioning, and value perception",
                        },
                        {
                            bold: "Distribution channel strategy",
                            normal: " with partner identification, evaluation, and relationship facilitation",
                        },
                        {
                            bold: "Brand positioning and localization",
                            normal: " for cultural resonance, market acceptance, and competitive differentiation",
                        },
                        {
                            bold: "Digital marketing strategy",
                            normal: " leveraging local platforms, channels, and customer acquisition methods",
                        },
                    ],
                },
            ],

        },

        "Regulatory & Compliance Navigation": {
            heading: "REGULATORY & COMPLIANCE NAVIGATION",
            description:
                "Ensure compliance while accelerating market entry through expert navigation of complex international regulatory landscapes.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Zero regulatory incidents",
                            normal: " through proactive compliance management and expert guidance",
                        },
                        {
                            bold: "Accelerated approval timelines",
                            normal: " via established regulatory relationships and process optimization",
                        },
                        {
                            bold: "Cost optimization",
                            normal: " through strategic compliance planning and incentive program utilization",
                        },
                        {
                            bold: "IP protection",
                            normal: " ensuring competitive advantage, revenue security, and brand integrity",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Foreign investment compliance",
                            normal: " including FDI regulations, sectoral restrictions, and approval processes",
                        },
                        {
                            bold: "Product certification and standards",
                            normal: " compliance including local testing, documentation, and approval requirements",
                        },
                        {
                            bold: "Industry-specific regulatory",
                            normal: " approvals across healthcare, financial services, technology, and manufacturing sectors",
                        },
                        {
                            bold: "Import/export optimization",
                            normal: " including customs procedures, duty structures, and trade agreement utilization",
                        },
                        {
                            bold: "Intellectual property protection",
                            normal: " with registration strategies, enforcement mechanisms, and competitive monitoring",
                        },
                    ],
                },
            ],

        },


        "Legal Entity Formation": {
            heading: "LEGAL ENTITY FORMATION",
            description:
                "Establish optimal corporate structure for operational efficiency, tax optimization, and strategic flexibility across multiple jurisdictions.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Optimal entity structure",
                            normal:
                                " balancing operational needs, tax efficiency, and strategic objectives",
                        },
                        {
                            bold: "Accelerated setup timeline",
                            normal:
                                " with typically 45-60 day incorporation to full operations capability",
                        },
                        {
                            bold: "Banking relationships established",
                            normal:
                                " with tier-1 institutions supporting international business requirements",
                        },
                        {
                            bold: "Tax-efficient structure minimizing",
                            normal:
                                " global tax liability while ensuring full compliance across jurisdictions",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Corporate structure optimization",
                            normal:
                                " based on business model, growth strategy, and cross-border requirements",
                        },
                        {
                            bold: "Company incorporation",
                            normal:
                                " with expedited processing, compliance setup, and ongoing management",
                        },
                        {
                            bold: "Banking infrastructure establishment",
                            normal:
                                " with multiple institution relationships and international capabilities",
                        },
                        {
                            bold: "Tax registration and optimization",
                            normal:
                                " including corporate tax, VAT/GST, withholding tax, and transfer pricing",
                        },
                        {
                            bold: "Employment law compliance",
                            normal:
                                " with HR framework development, local labor law adherence, and benefits optimization",
                        },
                    ],
                },
            ],
        },


        "Operational Infrastructure Setup": {
            heading: "OPERATIONAL INFRASTRUCTURE SETUP",
            description:
                "Build scalable operations infrastructure supporting immediate market entry requirements and long-term growth objectives.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Operational readiness",
                            normal:
                                " typically within 90-120 days of market entry decision and strategic commitment",
                        },
                        {
                            bold: "Scalable infrastructure",
                            normal:
                                " supporting 5x growth without major reinvestment or operational disruption",
                        },
                        {
                            bold: "Quality assurance meeting",
                            normal:
                                " international standards while exceeding local customer expectations",
                        },
                        {
                            bold: "Cost-optimized operations",
                            normal:
                                " achieving competitive advantage through strategic location and resource optimization",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Office location selection",
                            normal:
                                " optimizing for talent access, cost efficiency, customer proximity, and business requirements",
                        },
                        {
                            bold: "IT infrastructure development",
                            normal:
                                " including digital presence, technology systems, and cybersecurity frameworks",
                        },
                        {
                            bold: "Supply chain establishment with",
                            normal:
                                " vendor partnerships, quality assurance frameworks, and logistics optimization",
                        },
                        {
                            bold: "Quality control systems",
                            normal:
                                " meeting international standards, local requirements, and customer expectations",
                        },
                        {
                            bold: "Customer service infrastructure",
                            normal:
                                " supporting local market expectations, service levels, and cultural preferences",
                        },
                    ],
                },
            ],
        },


        "Partnership & Ecosystem Development": {
            heading: "PARTNERSHIP & ECOSYSTEM DEVELOPMENT",
            description:
                "Build strategic relationships that accelerate market penetration and create sustainable competitive advantages.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Strategic partnerships",
                            normal:
                                " typically 5–15 key relationships driving 60–80% of initial market revenue",
                        },
                        {
                            bold: "Distribution coverage",
                            normal:
                                " across target markets within 12–24 months of initial market entry",
                        },
                        {
                            bold: "Supplier network providing",
                            normal:
                                " competitive cost structure, quality assurance, and operational flexibility",
                        },
                        {
                            bold: "Industry influence",
                            normal:
                                " through association membership, thought leadership, and policy engagement",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Strategic partnership identification",
                            normal:
                                " with comprehensive evaluation, negotiation support, relationship management",
                        },
                        {
                            bold: "Distribution network establishment",
                            normal:
                                " across target geographic segments, customer demographics, and sales channels",
                        },
                        {
                            bold: "Supplier ecosystem development",
                            normal:
                                " ensuring quality, reliability, cost optimization, and supply chain resilience",
                        },
                        {
                            bold: "Industry association integration",
                            normal:
                                " for market intelligence, regulatory influence, and thought leadership positioning",
                        },
                        {
                            bold: "Government stakeholder engagement",
                            normal:
                                " for policy advocacy, incentive optimization, and regulatory relationship building",
                        },
                    ],
                },
            ],
        },

        "Growth Strategy & Execution": {
            heading: "GROWTH STRATEGY & EXECUTION",
            description:
                "Scale systematically, from initial market entry to market leadership through proven growth frameworks and execution excellence.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Sustainable growth",
                            normal:
                                " trajectory typically achieving 50–150% annual growth in first 3 years of operation",
                        },
                        {
                            bold: "Market leadership positioning",
                            normal:
                                " in target segments within 24–36 months of market entry",
                        },
                        {
                            bold: "Revenue diversification",
                            normal:
                                " reducing dependence on single products, customers, or geographic concentrations",
                        },
                        {
                            bold: "Operational excellence",
                            normal:
                                " supporting profitable growth, stakeholder value creation, and competitive differentiation",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Business model optimization",
                            normal:
                                " for local market dynamics, customer preferences, and competitive positioning",
                        },
                        {
                            bold: "Revenue stream diversification",
                            normal:
                                " maximizing market opportunity, customer lifetime value, competitive resilience",
                        },
                        {
                            bold: "Geographic expansion strategy",
                            normal:
                                " into secondary cities, emerging segments, and adjacent market opportunities",
                        },
                        {
                            bold: "Product portfolio development",
                            normal:
                                " including localization, market-specific innovations, customer-driven enhancements",
                        },
                        {
                            bold: "Digital transformation initiatives",
                            normal:
                                " leveraging technology adoption patterns for competitive advantage efficiency gains",
                        },
                    ],
                },
            ],
        },

        "Funding Strategy Development": {
            heading: "FUNDING STRATEGY DEVELOPMENT",
            description:
                "Access capital for accelerated international growth through strategic investor engagement and funding optimization.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Funding success",
                            normal:
                                " with 85%+ success rate for properly prepared and positioned companies",
                        },
                        {
                            bold: "Optimal valuations",
                            normal:
                                " typically achieving 25–50% premiums through strategic positioning and competitive dynamics",
                        },
                        {
                            bold: "Strategic investor engagement",
                            normal:
                                " providing market access, operational expertise, and ecosystem relationships",
                        },
                        {
                            bold: "Accelerated funding",
                            normal:
                                " timelines typically 4–8 months from preparation to successful funding closure",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Investment readiness assessment",
                            normal:
                                " identifying preparation requirements, timeline optimization, and strategic positioning",
                        },
                        {
                            bold: "Investor targeting strategy",
                            normal:
                                " connecting with international, regional, and sector-specific investor communities",
                        },
                        {
                            bold: "Due diligence preparation",
                            normal:
                                " ensuring comprehensive documentation, presentation materials, process management",
                        },
                        {
                            bold: "Pitch development",
                            normal:
                                " with compelling narratives, financial projections, and strategic vision communication",
                        },
                        {
                            bold: "Valuation analysis",
                            normal:
                                " and negotiation support for optimal terms, strategic alignment, and value maximization",
                        },
                    ],
                },
            ],
        },

        "Government Incentives & Grants": {
            heading: "GOVERNMENT INCENTIVES & GRANTS",
            description:
                "Maximize financial benefits through strategic utilization of government incentives, grants, and support programs.",
            boxes: [
                {
                    title: "Key Outcomes",
                    items: [
                        {
                            bold: "Sustainable growth",
                            normal:
                                " trajectory typically achieving 50–150% annual growth in first 3 years of operation",
                        },
                        {
                            bold: "Market leadership positioning",
                            normal:
                                " in target segments within 24–36 months of market entry",
                        },
                        {
                            bold: "Revenue diversification",
                            normal:
                                " reducing dependence on single products, customers, or geographic concentrations",
                        },
                        {
                            bold: "Operational excellence",
                            normal:
                                " supporting profitable growth, stakeholder value creation, and competitive differentiation",
                        },
                    ],
                },
                {
                    title: "What We Deliver",
                    items: [
                        {
                            bold: "Incentive program identification",
                            normal:
                                " across production-linked schemes, export promotion, investment attraction initiatives",
                        },
                        {
                            bold: "Government incentive application",
                            normal:
                                " including documentation, compliance management, ongoing benefit optimization",
                        },
                        {
                            bold: "Due diligence preparation",
                            normal:
                                " ensuring comprehensive documentation, presentation materials, process management",
                        },
                        {
                            bold: "Pitch development",
                            normal:
                                " with compelling narratives, financial projections, and strategic vision communication",
                        },
                        {
                            bold: "Valuation analysis",
                            normal:
                                " and negotiation support for optimal terms, strategic alignment, and value maximization",
                        },
                    ],
                },
            ],
        },
    };


    const [active, setActive] = useState(menuItems[0]);

    return (
        <div className='py-15 lg:py-30'>
            <MaxWidthWrapper>
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary">
                        —<span className="mx-3">OUR SLOUTION</span>—
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-10 md:mt-3 font-bold mb-4 leading-normal lg:leading-25">
                        OUR COMPREHENSIVE <br /> MARKET ENTRY SOLUTION
                    </h1>
                </div>

                <div className="w-full flex flex-col md:flex-row my-20">
                    {/* Left Menu */}
                    <div className="w-full md:w-1/4 bg-white md:px-6  flex flex-row overflow-x-scroll md:flex-col  gap-6 text-[20px] font-bold">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`text-left whitespace-nowrap md:whitespace-normal bg-gray-100 px-3 py-2 mb-6 md:mb-0 md:py-0 md:px-0 md:bg-transparent  ${active === item
                                    ? "font-semibold text-black"
                                    : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>


                    {/* Right Content */}
                    <div className="relative w-full md:w-3/4 flex  text-white overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{
                                backgroundImage: "url('/images/solution-bg.png')",
                                height: 'full'
                            }}
                        />

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/60  z-10" />

                        {/* Content */}
                        <div className="relative z-20 max-w-5xl px-10 py-16">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {content[active].heading}
                            </h1>
                            <p className="text-gray-300 max-w-3xl mb-10">
                                {content[active].description}
                            </p>

                            {/* Boxes */}
                            {/* Boxes */}
                            <div className="flex items-end flex-col md:flex-row gap-6">
                                {/* First Box */}
                                <div className="flex-1 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-6 shadow-sm shadow-black/40 h-[360px]">
                                    <div className='flex gap-3 justify-start items-center mb-6'>
                                    <Image
                                        src='/images/cup.svg'
                                        width={100}
                                        height={100}
                                        alt='cup'
                                        className='w-10'
                                    />
                                    <h2 className="text-[#0575E6] text-lg sm:text-[32px] font-semibold">
                                        {content[active].boxes[0].title}
                                    </h2>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-200">
                                        {content[active].boxes[0].items.map((item, idx) => (
                                            <li key={idx}>
                                                <span className="font-semibold text-white">{item.bold}</span>
                                                {item.normal}
                                               
                                               { idx !== content[active].boxes[0].items.length -1 && <hr className='mt-2 bg-[#fff]/40' />  }
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Second Box */}
                                <div className="flex-1 backdrop-blur-md bg-black/40 border border-white/10 rounded-sm p-6 shadow-lg shadow-black/40 h-[400px]">
                                        <div className='flex gap-3 justify-start items-center mb-6'>
                                    <Image
                                        src='/images/check.svg'
                                        width={100}
                                        height={100}
                                        alt='cup'
                                        className='w-10'
                                    />
                                    <h2 className="text-[#0575E6] text-lg sm:text-[32px] font-semibold">
                                        {content[active].boxes[1].title}
                                    </h2>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-200">
                                        {content[active].boxes[1].items.map((item, idx) => (
                                            <li key={idx}>
                                                <span className="font-semibold text-white">{item.bold}</span>
                                                {item.normal}
                                             { idx !== content[active].boxes[1].items.length -1 && <hr className='mt-2 bg-[#fff]/40' />  }

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default Solution;