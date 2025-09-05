import Opportunity from '@/components/Services/ServicePages/Opportunity'
import Intro from '@/components/ui/global/Intro'
import Path from '@/components/ui/global/Path'
import ServicesHero from '@/components/ui/global/SerivecesHero'
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
    title: "The Partnership Imperative THE PARTNERSHIP IMPERATIVE",
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

// Choose Component  ------ --- change ICONS --------------
 const chooseUsData = {
  heading: {
    main: "WHY CHOOSE US",
    sub: "FOR GLOBAL MARKET ENTRY",
    aeroImage: "/images/aero3.svg",
  },
  leftItems: [
    {
      icon: "Globe",
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



  return (
    <div>
        <ServicesHero  img='/images/market.png' heading='PARTNERSHIPS & CORPORATE DEVELOPMENT' para='Strategic Partnership for Accelerated Global Innovation and Market Development'/>
        <Path page='Joint Venture with Giakaa Innovate'/>
        <Intro para1='Transform isolated capabilities into powerful partnership networks ' para2='networks From strategic alliance development to complex corporate partnerships, we create sustainable relationships that accelerate growth, reduce risk, and establish market leadership positions.'/>
        <Opportunity  data={opportunityData} />
        <Solution data={solutionsData} />
        <ChooseUS data={chooseUsData}/>
        <Success data={successData}/>
        <Growth/>
        <NextStep/>
        <Book/>
    </div>
  )
}

export default page