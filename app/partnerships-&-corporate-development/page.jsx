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
const partnershipData = {
  heading: {
    sub: "PARTNERSHIP",
    title: "THE PARTNERSHIP IMPERATIVE",
  },
  topStats: [
    { number: "75%", desc: "of Fortune 500 companies derive significant revenue from strategic partnerships" },
    { number: "70%", desc: " of Strategic Alliances Fail Without Robust Structuring and Effective Management" },
    { number: "$127T", desc: "in Global Markets Unlocked by Cross-Border Partnerships" },
  ],
  bottomStats: [
    {
      icon: "/images/leadership.svg",
      highlight: "Ecosystem leadership ",
      desc: "creates sustainable competitive advantages and network effects",
    },
    {
      icon: "/images/partnership.svg",
      highlight: "Partnership-driven companies",
      desc: "achieve 20% higher growth rates than purely organic competitors",
    },
    {
      highlight: "Yet most partnership initiatives fail to deliver expected value.",
      desc: "Success requires systematic partner identification, strategic structuring, and expert execution across every phase of relationship development and management..",
    },
  ],
};

// Solution Component
 const solutionsData1 = [
{
        key: "Partnership Strategy & Framework Design",
        heading: "PARTNERSHIP STRATEGY & FRAMEWORK DESIGN",
        description:
            "Partnership Ecosystem Mapping Transform market complexity into strategic clarity through comprehensive ecosystem analysis and partnership opportunity identification.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Comprehensive partnership strategy", normal: " with prioritized opportunities and clear value creation pathways" },
                    { bold: "Competitive advantage", normal: " through systematic ecosystem analysis and strategic positioning" },
                    { bold: "Risk diversification", normal: " across multiple partnership types and market segments" },
                    { bold: "Global market access", normal: " through international partnership networks and local expertise" },
                ],
            },
            {
                title: "What We Deliver",
                items: [
                    { bold: "Strategic partner identification", normal: " and prioritization across entire value chain and market ecosystem" },
                    { bold: "Partnership opportunity assessment", normal: " with value creation modeling and competitive impact analysis" },
                    { bold: "Competitive partnership landscape analysis", normal: " and strategic positioning recommendations" },
                    { bold: "Partnership portfolio optimization", normal: " balancing risk, return, and strategic objectives across multiple relationships" },
                    { bold: "Cross-border partnership opportunities", normal: " leveraging global networks and international market access" },
                ],
            },
        ],
    },
    {
        key: "Partnership Framework Development",
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
                    { bold: "Market entry mode optimization", normal: " (direct operations, strategic partnerships, joint ventures, acquisition)" },
                    { bold: "Pricing strategy development", normal: " reflecting local market dynamics, competitive positioning, and value perception" },
                    { bold: "Distribution channel strategy", normal: " with partner identification, evaluation, and relationship facilitation" },
                    { bold: "Brand positioning and localization", normal: " for cultural resonance, market acceptance, and competitive differentiation" },
                    { bold: "Digital marketing strategy", normal: " leveraging local platforms, channels, and customer acquisition methods" },
                ],
            },
        ],
    },
    {
        key: "Partner Sourcing & Evaluation",
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
                    { bold: "Product certification and standards compliance", normal: " including local testing, documentation, and approval requirements" },
                    { bold: "Industry-specific regulatory analysis", normal: " across healthcare, financial services, technology, and manufacturing sectors" },
                    { bold: "Import/export optimization", normal: " including customs procedures, duty structures, and trade agreement utilization" },
                    { bold: "Intellectual property protection", normal: " with registration strategies, enforcement mechanisms, and competitive monitoring" },
                ],
            },
        ],
    },

    {
        key: "Partner Qualification & Selection Optimize",
        heading: "LEGAL ENTITY FORMATION",
        description:
            "Establish optimal corporate structure for operational efficiency, tax optimization, and strategic flexibility across multiple jurisdictions.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Optimal entity structure", normal: " balancing operational needs, tax efficiency, and strategic objectives" },
                    { bold: "Streamlined setup timelines", normal: " with globally 45-60 day incorporation in 10+ full operation-capable jurisdictions" },
                    { bold: "Banking relationships", normal: " established with tier-1 institutions supporting international operations" },
                    { bold: "Tax-efficient structure", normal: " minimizing global tax liability while ensuring full compliance across jurisdictions" },
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
        key: "Corporate-Startup Partnerships",
        heading: "OPERATIONAL INFRASTRUCTURE SETUP",
        description:
            "Build scalable operations infrastructure supporting immediate market entry requirements and long-term growth objectives.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Operational readiness", normal: " typically within 90-120 days of market entry decision and strategic commitment" },
                    { bold: "Scalable infrastructure", normal: " supporting 5x growth without major reinvestment or operational disruption" },
                    { bold: "Quality assurance", normal: " meeting international standards while exceeding local customer expectations" },
                    { bold: "Cost-optimized operations", normal: " achieving competitive advantage through strategic location and resource optimization" },
                ],
            },
            {
                title: "What We Deliver",
                items: [
                    { bold: "Office location selection", normal: " optimizing for talent access, cost efficiency, customer proximity, and business requirements" },
                    { bold: "IT infrastructure development", normal: " including digital presence, technology systems, and cybersecurity frameworks" },
                    { bold: "Supply chain establishment", normal: " with vendor partnerships, quality assurance frameworks, and logistics optimization" },
                    { bold: "Quality control systems", normal: " meeting international standards, local requirements, and customer expectations" },
                    { bold: "Customer service infrastructure", normal: " supporting local market expectations, service levels, and cultural preferences" },
                ],
            },
        ],
    },

    {
        key: "Corporate Venture Partnerships",
        heading: "PARTNERSHIP & ECOSYSTEM DEVELOPMENT",
        description:
            "Build strategic relationships that accelerate market penetration and create sustainable competitive advantages.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Strategic partnerships", normal: " typically 5-15 key relationships driving 40-80% of initial market revenue" },
                    { bold: "Distribution coverage", normal: " across target markets within 12-24 months of initial market entry" },
                    { bold: "Supplier network", normal: " providing competitive cost structures, quality assurance, and operational flexibility" },
                    { bold: "Industry influence", normal: " through association memberships, thought leadership, and policy engagement" },
                ],
            },
            {
                title: "What We Deliver",
                items: [
                    { bold: "Strategic partnership identification", normal: " with comprehensive evaluation, negotiation support, relationship management" },
                    { bold: "Distribution network establishment", normal: " across target geographic segments, customer demographics, and sales channels" },
                    { bold: "Supplier ecosystem development", normal: " ensuring quality, cost optimization, and supply chain resilience" },
                    { bold: "Industry association integration", normal: " for market intelligence, regulatory influence, and thought leadership positioning" },
                    { bold: "Government stakeholder engagement", normal: " for policy advocacy, incentive optimization, and regulatory relationship building" },
                ],
            },
        ],
    },
    {
        key: "Large Enterprise Partnerships",
        heading: "GROWTH STRATEGY & EXECUTION",
        description:
            "Scale systematically from initial market entry to market leadership through growth-driven frameworks and execution excellence.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Sustainable growth trajectory", normal: " typically achieving 50-150% annual growth in first 3 years of operation" },
                    { bold: "Market leadership positioning", normal: " in target segments within 24-36 months of market entry" },
                    { bold: "Revenue diversification", normal: " reducing dependence on single product, customer, or geographic concentrations" },
                    { bold: "Operational excellence", normal: " supporting profitable growth, stakeholder value creation, and competitive differentiation" },
                ],
            },
            {
                title: "What We Deliver",
                items: [
                    { bold: "Business model optimization", normal: " for local market dynamics, customer preferences, and competitive positioning" },
                    { bold: "Revenue stream diversification", normal: " maximizing market share, profitability, customer lifetime value, competitive resilience" },
                    { bold: "Geographic expansion strategy", normal: " into secondary cities, emerging segments, and adjacent market opportunities" },
                    { bold: "Product portfolio development", normal: " including localization, market-specific innovations, customer-driven enhancements" },
                    { bold: "Digital transformation initiatives", normal: " leveraging technology adoption platforms for competitive advantage efficiency gains" },
                ],
            },
        ],
    },

    {
        key: "Government-Corporate Partnerships",
        heading: "FUNDING STRATEGY DEVELOPMENT",
        description:
            "Access capital for accelerated international growth through strategic investor engagement and funding optimization.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Funding success", normal: " with 85%+ success rate for properly prepared and positioned companies" },
                    { bold: "Optimal valuations", normal: " typically achieving 25-50% premiums through strategic positioning and competitive dynamics" },
                    { bold: "Strategic investor engagement", normal: " providing market access, operational expertise, and ecosystem relationships" },
                    { bold: "Accelerated funding timelines", normal: " typically 4-8 months from preparation to successful funding closure" },
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
];

 const solutionsData2 = [
{
        key: "Partnership Structuring & Legal Framework",
        heading: "PARTNERSHIP STRUCTURING & LEGAL FRAMEWORK",
        description:
            "Partnership Agreement Development Create optimal partnership structures balancing opportunity, risk, and strategic control for all parties.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Balanced partnership agreements", normal: " protecting interests while enabling value creation" },
                    { bold: "IP protection", normal: " ensuring competitive advantage and innovation value preservation" },
                    { bold: "Performance alignment", normal: " through optimized incentive structures and shared success metrics" },
                    { bold: "Strategic flexibility", normal: " with clear exit mechanisms and partnership evolution pathways" },
                ],
            },
            {
                title: "What We Deliver",
                items: [
                    { bold: "Commercial terms negotiation", normal: " and optimization with win-win value creation frameworks" },
                    { bold: "Intellectual property sharing", normal: " and protection agreements with compliance safeguarding preservation" },
                    { bold: "Revenue sharing and profit distribution", normal: " models with performance-based allocation mechanisms" },
                    { bold: "Governance structure and decision-making protocols", normal: " ensuring effective partnership management" },
                    { bold: "Exit mechanisms and partnership termination procedures", normal: " with value preservation and transition planning" },
                ],
            },
        ],
    },
    {
        key: "Cross-Border Partnership",
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
                    { bold: "Market entry mode optimization", normal: " (direct operations, strategic partnerships, joint ventures, acquisition)" },
                    { bold: "Pricing strategy development", normal: " reflecting local market dynamics, competitive positioning, and value perception" },
                    { bold: "Distribution channel strategy", normal: " with partner identification, evaluation, and relationship facilitation" },
                    { bold: "Brand positioning and localization", normal: " for cultural resonance, market acceptance, and competitive differentiation" },
                    { bold: "Digital marketing strategy", normal: " leveraging local platforms, channels, and customer acquisition methods" },
                ],
            },
        ],
    },
    {
        key: "Partnership Launch & Integration",
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
                    { bold: "Product certification and standards compliance", normal: " including local testing, documentation, and approval requirements" },
                    { bold: "Industry-specific regulatory analysis", normal: " across healthcare, financial services, technology, and manufacturing sectors" },
                    { bold: "Import/export optimization", normal: " including customs procedures, duty structures, and trade agreement utilization" },
                    { bold: "Intellectual property protection", normal: " with registration strategies, enforcement mechanisms, and competitive monitoring" },
                ],
            },
        ],
    },
    {
        key: "Ongoing Partnership Management",
        heading: "LEGAL ENTITY FORMATION",
        description:
            "Establish optimal corporate structure for operational efficiency, tax optimization, and strategic flexibility across multiple jurisdictions.",
        boxes: [
            {
                title: "Key Outcomes",
                items: [
                    { bold: "Optimal entity structure", normal: " balancing operational needs, tax efficiency, and strategic objectives" },
                    { bold: "Accelerated setup timeline", normal: " with typically 45-60 day incorporation in 10+ full operation-ready jurisdictions" },
                    { bold: "Banking relationships", normal: " established with tier-1 institutions supporting international business requirements" },
                    { bold: "Tax-efficient structure", normal: " minimizing global tax liability while ensuring full compliance across jurisdictions" },
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
  key: "Strategic Growth & Expansion",
  heading: "OPERATIONAL INFRASTRUCTURE SETUP",
  description: "Build scalable operations infrastructure supporting immediate market entry requirements and long-term growth objectives.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Operational readiness", normal: " typically within 90-120 days of market entry decision and strategic commitment" },
        { bold: "Scalable infrastructure", normal: " supporting growth without major reinvestment or operational disruption" },
        { bold: "Quality assurance", normal: " meeting international standards while exceeding local customer expectations" },
        { bold: "Cost-optimized operations", normal: " achieving competitive advantage through strategic location and resource optimization" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Office location selection", normal: " optimizing for talent access, cost efficiency, customer proximity, and business requirements" },
        { bold: "IT infrastructure development", normal: " including digital presence, technology systems, and cybersecurity frameworks" },
        { bold: "Supply chain establishment", normal: " with vendor partnerships, quality assurance frameworks, and logistics optimization" },
        { bold: "Quality control systems", normal: " meeting international standards, local requirements, and customer expectations" },
        { bold: "Customer service infrastructure", normal: " supporting local market expectations, service levels, and cultural preferences" }
      ]
    }
  ]
},
{
  key: "Capability Development Partnerships",
  heading: "PARTNERSHIP & ECOSYSTEM DEVELOPMENT",
  description: "Build strategic relationships that accelerate market penetration and create sustainable competitive advantages.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Strategic partnerships", normal: " typically 5-15 key relationships driving 60-80% of initial market revenue" },
        { bold: "Distribution coverage", normal: " across target markets within 12-24 months of initial market entry" },
        { bold: "Supplier network", normal: " providing competitive cost structure, quality assurance, and operational flexibility" },
        { bold: "Industry influence", normal: " through association membership, thought leadership, and policy engagement" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Strategic partnership identification", normal: " with comprehensive evaluation, negotiation support, relationship management" },
        { bold: "Distribution network expansion", normal: " across target geographic segments, customer demographics, and sales channels" },
        { bold: "Supplier ecosystem development", normal: " ensuring quality, reliability, cost optimization, and supply chain resilience" },
        { bold: "Industry association integration", normal: " fostering industry relationships, thought leadership, and policy advocacy" },
        { bold: "Government stakeholder engagement", normal: " supporting policy advocacy, incentive optimization, and regulatory relationship building" }
      ]
    }
  ]
},
{
  key: "Strategic Investment Facilitation",
  heading: "GROWTH STRATEGY & EXECUTION",
  description: "Scale systematically from initial market entry to market leadership through proven growth frameworks and execution excellence.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Sustainable growth trajectory", normal: " typically achieving 50-150% annual growth in first 3 years of operation" },
        { bold: "Market leadership positioning", normal: " in target segments within 24-36 months of market entry" },
        { bold: "Revenue diversification", normal: " reducing dependence on single products, customers, or geographic concentrations" },
        { bold: "Operational excellence", normal: " supporting profitable growth, stakeholder value creation, and competitive differentiation" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Business model optimization", normal: " for local market dynamics, customer preferences, and competitive positioning" },
        { bold: "Revenue stream diversification", normal: " maximizing market opportunity, customer lifetime value, competitive resilience" },
        { bold: "Geographic expansion strategy", normal: " into secondary cities, emerging segments, and adjacent opportunities" },
        { bold: "Product portfolio development", normal: " including localization, market-specific innovations, customer-driven enhancements" },
        { bold: "Digital transformation initiatives", normal: " leveraging technology adoption patterns for competitive advantage efficiency gains" }
      ]
    }
  ]
},
{
  key: "Merger & Acquisition Partnership",
  heading: "FUNDING STRATEGY DEVELOPMENT",
  description: "Access capital for accelerated international growth through strategic investor engagement and funding optimization.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Funding success", normal: " with 85%+ success rate for properly prepared and positioned companies" },
        { bold: "Optimal valuations", normal: " typically achieving 25-50% premiums through strategic positioning and competitive dynamics" },
        { bold: "Strategic investor engagement", normal: " providing market access, operational expertise, and ecosystem relationships" },
        { bold: "Accelerated funding timelines", normal: " typically 4-8 months from preparation to successful funding closure" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Investment readiness assessment", normal: " identifying preparation requirements, timeline optimization, and strategic positioning" },
        { bold: "Investor targeting strategy", normal: " connecting with international, regional, and sector-specific investor communities" },
        { bold: "Due diligence preparation", normal: " ensuring comprehensive documentation, presentation materials, process management" },
        { bold: "Pitch development", normal: " with compelling narratives, financial projections, and strategic vision communication" },
        { bold: "Valuation analysis", normal: " and negotiation support for optimal terms, strategic alignment, and value maximization" }
      ]
    }
  ]
}
];

 const solutionsData3 = [
{
  key: "Technology Sector Partnerships",
  heading: "TECHNOLOGY SECTOR PARTNERSHIPS",
  description: "Partnership Agreement Development. Create optimal partnership structures balancing opportunity, risk, and strategic control for all parties.",
  boxes: [
    {
      title: "What We Deliver",
      items: [
        { bold: "Silicon Valley and global tech hub", normal: " partnership development with innovation ecosystem access" },
        { bold: "Enterprise software and SaaS", normal: " partnership programs with platform integration and market expansion" },
        { bold: "Cloud computing and infrastructure partnerships", normal: " for technological capability and scalability" },
        { bold: "AI and machine learning", normal: " collaboration partnerships with innovation acceleration and competitive advantage" },
        { bold: "Cybersecurity and data protection", normal: " partnerships ensuring comprehensive security and compliance" }
      ]
    }
  ]
},
{
  key: "Deep Tech Partnerships",
  heading: "DEEP TECH PARTNERSHIPS",
  description: "Access breakthrough technologies through strategic research partnerships and innovation collaboration.",
  boxes: [
    {
      title: "What We Deliver",
      items: [
        { bold: "Research institution and university", normal: " partnerships with technology transfer and innovation access" },
        { bold: "Government lab and R&D facility", normal: " collaborations with advanced research and development capabilities" },
        { bold: "IP licensing and technology transfer", normal: " partnerships with strategic technology access and monetization" },
        { bold: "Hardware and semiconductor", normal: " partnerships for technological infrastructure and competitive advantage" },
        { bold: "Biotech and pharmaceutical", normal: " partnerships with innovation collaboration and market access" }
      ]
    }
  ]
},
{
  key: "Traditional Industry Partnerships",
  heading: "TRADITIONAL INDUSTRY PARTNERSHIPS",
  description: "Manufacturing & Industrial Partnerships. Optimize industrial operations through strategic partnerships and collaborative operational excellence.",
  boxes: [
    {
      title: "What We Deliver",
      items: [
        { bold: "Supply chain and vendor partnerships", normal: " with cost optimization and quality assurance" },
        { bold: "Manufacturing technology and automation", normal: " partnerships for operational excellence and competitive advantage" },
        { bold: "Quality control and certification", normal: " partnerships ensuring compliance and market access" },
        { bold: "Logistics and distribution partnerships", normal: " with operational efficiency and market reach" },
        { bold: "Sustainability and circular economy", normal: " partnerships for environmental compliance and competitive positioning" }
      ]
    }
  ]
},
{
  key: "Financial Services Partnerships",
  heading: "FINANCIAL SERVICES PARTNERSHIPS",
  description: "Navigate financial services complexity through strategic partnerships and collaborative service development.",
  boxes: [
    {
      title: "What We Deliver",
      items: [
        { bold: "Fintech collaboration", normal: " and partnership development with innovation acceleration and market access" },
        { bold: "Banking and financial institution", normal: " partnerships providing financial infrastructure and market credibility" },
        { bold: "Payment processing and transaction", normal: " partnerships with operational efficiency and customer convenience" },
        { bold: "Insurance and risk management", normal: " partnerships for comprehensive risk coverage and operational security" },
        { bold: "Investment and wealth management", normal: " partnerships providing financial expertise and strategic guidance" }
      ]
    }
  ]
}
]


// Choose Component  ------ --- change ICONS --------------
 const chooseUsData = {
  heading: {
    main: "WHY CHOOSE US FOR PARTNERSHIP ",
    sub: "DEVELOPMENT",
    aeroImage: "/images/aero3.svg",
  },
  leftItems: [
    {
      icon: "Trophy",
      title: "Partnership Expertise",
      text: "15+ years  of partnership development experience with 85% success rate vs. 30-40% industry average for strategic alliances.",
    },
    {
      icon: "Globe",
      title: "Global Network Access",
      text: "Extensive relationships with Fortune 500 companies, technology leaders, research institutions, and government agencies worldwide.",
    },
    {
      icon: "FileCheck2",
      title: "Systematic Methodology",
      text: "Proven frameworks reducing partnership failure rates while accelerating value creation and competitive advantage development.",
    },
  ],
  rightItems: [
    {
      icon: "Share2",
      title: "Legal & Structural Excellence",
      text: "Comprehensive expertise in partnership structuring, compliance management, and cross-border operational optimization.",
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      text: "Continuous management ensuring sustained partnership value through ongoing optimization and strategic evolution.",
    },
  ],
  backgroundImage: "/images/chooseUs.jpg",
};


// Success component
 const successData = {
  heading: "SUCCESS METRICS",
  boxes: [
    {
      value: "95%",
      title: "client satisfaction ",
      description: "with ongoing partnership management and optimization support",
      image: "/images/cost.svg",
      height: "h-[320px]",
      colSpan: "md:col-span-2",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30 md:w-50",
    },
    {
      value: "40%",
      title: "cost reduction ",
      description: "via collaborative partnerships and shared resource optimization",
      image: "/images/client.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30",
    },
    {
      value: "85%",
      title: "partnership success",
      description: " rate vs. 30-40% industry average",
      image: "/images/fast.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-23",
    },
    {
      value: "3X",
      title: "faster",
      description: " value creation through systematic partnership development & management",
      image: "/images/shield.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
    {
      value: "60%",
      title: "average",
      description: " increase in market reach through strategic partnership networks",
      image: "/images/month.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
  ],
};

// Next step  data
const next = [
    {
        id: 1,
        no: "01",
        title: "Partnership Assessment",
        desc: "Comprehensive analysis of your partnership opportunities and optimal ecosystem development",
        img: "/images/step4.jpg",
    },
    {
        id: 2,
        no: "02",
        title: "Strategic Partnership Plan",
        desc: "Detailed roadmap with partner identification, relationship development, and value creation strategies",
        img: "/images/step5.jpg",
    },
    {
        id: 3,
        no: "03",
        title: "Implementation Partnership",
        desc: "Expert execution with continuous optimization and relationship management",
        img: "/images/step3.jpg",
    },
];


  return (
    <div>
        <ServicesHero  img='/images/market.png' heading='PARTNERSHIPS & CORPORATE DEVELOPMENT' para='Build Strategic Ecosystems That Multiply Your Competitive Advantage'/>
        <Path page='Partnerships & Corporate Development'/>
        <Intro para1='Transform isolated capabilities into powerful partnership ' para2='networks From strategic alliance development to complex corporate partnerships, we create sustainable relationships that accelerate growth, reduce risk, and establish market leadership positions.'/>
        <Opportunity  data={partnershipData} />
        <Solution data={solutionsData1} />
        <Solution data={solutionsData2} />
        <Solution data={solutionsData2} />
        <ChooseUS data={chooseUsData}/>
        <Success data={successData}/>
        <Growth/>
        <NextStep data={next}/>
        <Book/>
    </div>
  )
}

export default page