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
const opportunityData = {
  heading: {
    sub: "OPPORTUNITY",
    title: "THE GLOBAL CAPABILITY CENTER OPPORTUNITY",
  },
  topStats: [
    { number: "$128.6B", desc: "GCC market growing at 13.5% CAGR - the fastest-growing business service segment" },
    { number: "30-50%", desc: "cost optimization achievable through strategic global capability center establishment" },
    { number: "2,975+", desc: "operational GCCs in India alone, with global expansion accelerating rapidly" },
  ],
  bottomStats: [
    {
      number: "70%",
      desc: "of Fortune 500 companies operate GCCs for competitive advantage and operational excellence",
    },
    {
      number: "3X",
      desc: "faster operational scaling through established GCC infrastructure and proven frameworks",
    },
    {
      highlight: "Yet GCC setup complexity often derails initiatives.",
      desc: "Success requires systematic location analysis, regulatory navigation, talent acquisition expertise, and operational excellence frameworks that most organizations lack internally.",
    },
  ],
};

// Solution Component
 const solutionsData = [
  {
  key: "GCC Feasibility & Design",
  heading: "MARKET OPPORTUNITY ASSESSMENT",
  description: "Transform uncertainty into strategic clarity with comprehensive market intelligence that eliminates guesswork and optimizes resource allocation across global opportunities.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Data-driven market prioritization", normal: " across 40+ potential markets using proprietary scoring framework" },
        { bold: "Competitive advantage identification", normal: " through systematic gap analysis and strategic positioning" },
        { bold: "Revenue opportunity quantification", normal: " with 3-year growth projections and sensitivity analysis" },
        { bold: "Risk assessment and mitigation strategies", normal: " for market-specific challenges and scenarios" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Market sizing and segmentation", normal: " across geographic regions, demographics, and customer behaviors" },
        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" },
        { bold: "Growth projections and trend analysis", normal: " identifying high-potential opportunities and optimal timing" }
      ]
    }
  ]
},
{
  key: "Regulatory & Legal Framework",
  heading: "GO-TO-MARKET STRATEGY DEVELOPMENT",
  description: "Accelerate market penetration with proven frameworks adapted to local market dynamics and competitive environments.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Optimal market entry approach", normal: " balancing speed, cost, risk, and strategic merit factors" },
        { bold: "Localized value propositions", normal: " driving customer acquisition, retention, and advocacy" },
        { bold: "Distribution network establishment", normal: " with verified, qualified, and modelled channel partners" },
        { bold: "Marketing strategy execution", normal: " generating measurable customer engagement, conversion, and ROI" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Market entry mode optimization", normal: " (direct operations, strategic partnerships, joint ventures, acquisition)" },
        { bold: "Pricing strategy development", normal: " reflecting local market dynamics, competitive positioning, and value perception" },
        { bold: "Distribution channel strategy", normal: " with partner identification, evaluation, and relationship facilitation" },
        { bold: "Brand positioning and localization", normal: " for cultural resonance, market acceptance, and competitive differentiation" },
        { bold: "Digital marketing strategy", normal: " leveraging local platforms, channels, and customer acquisition methods" }
      ]
    }
  ]
},
{
  key: "Infrastructure Development",
  heading: "REGULATORY & COMPLIANCE NAVIGATION",
  description: "Ensure compliance while accelerating market entry through expert navigation of complex international regulatory landscapes.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Zero regulatory incidents", normal: " through proactive compliance management and expert guidance" },
        { bold: "Accelerated approval timelines", normal: " via established regulatory relationships and process optimization" },
        { bold: "Cost optimization", normal: " through strategic compliance planning and incentive program utilization" },
        { bold: "IP protection", normal: " ensuring competitive advantage, revenue security, and brand integrity" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Foreign investment compliance", normal: " including FDI regulations, sectoral restrictions, and approval processes" },
        { bold: "Product certification and standards compliance", normal: " including local testing, documentation, and approval requirements" },
        { bold: "Industry-specific regulatory approvals", normal: " across healthcare, financial services, technology, and manufacturing sectors" },
        { bold: "Import/export optimization", normal: " including customs procedures, duty structures, and trade agreement utilization" },
        { bold: "Intellectual property protection", normal: " with registration strategies, enforcement mechanisms, and competitive monitoring" }
      ]
    }
  ]
},
{
  key: "Talent Acquisition & Team Building",
  heading: "LEGAL ENTITY FORMATION",
  description: "Establish optimal corporate structure for operational efficiency, tax optimization, and strategic flexibility across multiple jurisdictions.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Optimal entity structure", normal: " balancing operational needs, tax efficiency, and strategic objectives" },
        { bold: "Accelerated setup timeline", normal: " with typically 45-60 day incorporation in 10+ full operation-ready jurisdictions" },
        { bold: "Banking relationships", normal: " established with tier-1 institutions supporting international business requirements" },
        { bold: "Tax-efficient structure", normal: " minimizing global tax liability while ensuring full compliance across jurisdictions" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Corporate structure optimization", normal: " based on business model, growth strategy, and cross-border requirements" },
        { bold: "Company incorporation", normal: " with expedited processing, compliance setup, and ongoing management" },
        { bold: "Banking infrastructure establishment", normal: " with multiple institution relationships and international capabilities" },
        { bold: "Tax registration and optimization", normal: " including corporate tax, VAT/GST, withholding tax, and transfer pricing" },
        { bold: "Employment law compliance", normal: " with HR framework development, local labor law adherence, and benefits optimization" }
      ]
    }
  ]
},
{
  key: "Technology & Engineering GCCs",
  heading: "OPERATIONAL INFRASTRUCTURE SETUP",
  description: "Build scalable operations infrastructure supporting immediate market entry requirements and long-term growth objectives.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Operational readiness", normal: " typically within 90-120 days of market entry decision and strategic commitment" },
        { bold: "Scalable infrastructure", normal: " supporting 5x growth without major reinvestment or operational disruption" },
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
  key: "Business Process GCCs",
  heading: "PARTNERSHIP & ECOSYSTEM DEVELOPMENT",
  description: "Build strategic relationships that accelerate market penetration and create sustainable competitive advantages.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Strategic partnerships", normal: " typically 5-15 key relationships driving 60-80% of initial market revenue" },
        { bold: "Distribution coverage", normal: " across target markets within 12-24 months of initial market entry" },
        { bold: "Supplier network providing", normal: " competitive cost structure, quality assurance, and operational flexibility" },
        { bold: "Industry influence", normal: " through association membership, thought leadership, and policy engagement" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Strategic partnership identification", normal: " with comprehensive evaluation, negotiation support, relationship management" },
        { bold: "Distribution network establishment", normal: " across target geographic segments, customer demographics, and sales channels" },
        { bold: "Supplier ecosystem development", normal: " ensuring quality, reliability, cost optimization, and supply chain resilience" },
        { bold: "Industry association integration", normal: " for market intelligence, regulatory influence, and thought leadership positioning" },
        { bold: "Government stakeholder engagement", normal: " for policy advocacy, incentive optimization, and regulatory relationship building" }
      ]
    }
  ]
},
{
  key: "Performance Enhancement",
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
  key: "Expansion & Evolution",
  heading: "EXPANSION & EVOLUTION",
  description: "Scale operations strategically while evolving capabilities to meet changing business requirements and market opportunities.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Strategic scaling", normal: " with coordinated expansion across multiple locations and functional areas" },
        { bold: "Capability leadership", normal: " through center of excellence development and specialized expertise" },
        { bold: "Technology advancement", normal: " with AI and analytics implementation driving competitive advantage" },
        { bold: "Market positioning", normal: " as industry leader in operational excellence and innovation capability" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Geographic expansion", normal: " and multi-city operations with risk mitigation and operational coordination" },
        { bold: "Functional capability expansion", normal: " and diversification with strategic capability building and optimization" },
        { bold: "Center of excellence development", normal: " with specialized expertise and competitive advantage" },
        { bold: "Advanced analytics", normal: " and AI implementation with technology adoption and competitive positioning" },
        { bold: "Strategic consulting and advisory", normal: " services with thought leadership and market positioning" }
      ]
    }
  ]
}
];

// Choose Component  ------ --- change ICONS --------------
 const chooseUsData = {
  heading: {
    main: "WHY CHOOSE US FOR GCC ",
    sub: "DEVELOPMENT",
    aeroImage: "/images/aero3.svg",
  },
  leftItems: [
    {
      icon: "Globe",
      title: "Proven GCC Expertise",
      text: "500+ GCC projects completed with 95% success rate and average 30-50% cost optimization achieved.",
    },
    {
      icon: "Globe",
      title: "Global Location Intelligence",
      text: "Comprehensive expertise across 25+ GCC locations with comparative analysis and optimization frameworks.",
    },
    {
      icon: "FileCheck2",
      title: "Accelerated Implementation",
      text: "Systematic methodologies reducing typical GCC setup timelines by 40-50% while maintaining quality and compliance.",
    },
  ],
  rightItems: [
    {
      icon: "Share2",
      title: "End-to-End Service",
      text: "Complete solution from feasibility analysis to operational excellence with ongoing optimization and support.",
    },
    {
      icon: "Zap",
      title: "Performance Assurance",
      text: "Guaranteed outcomes with SLA-based service delivery and continuous performance optimization.",
    },
  ],
  backgroundImage: "/images/chooseUs.jpg",
};


// Success component
 const successData = {
  heading: "SUCCESS METRICS",
  boxes: [
    {
      value: "30-50%",
      title: "cost reduction" ,
      description: "achieved vs. home market operations",
      image: "/images/cost.svg",
      height: "h-[320px]",
      colSpan: "md:col-span-2",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30 md:w-50",
    },
    {
      value: "99.9%",
      title: "cost reduction ",
      description: "with comprehensive business continuity and disaster recovery",
      image: "/images/client.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30",
    },
    {
      value: "95%",
      title: "client satisfaction",
      description: " with ongoing GCC operations & performance",
      image: "/images/fast.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-23",
    },
    {
      value: "40%",
      title: "average productivity ",
      description: " improvement within first 18 months of operation",
      image: "/images/shield.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
    {
      value: "6 - 9",
      title: "month is the average setup",
      description: " timeline from decision to full operations",
      image: "/images/month.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
  ],
};

const next = [
    {
        id: 1,
        no: "01",
        title: "GCC Feasibility Assessment",
        desc: "Comprehensive analysis of your GCC opportunity and optimal location strategy",
        img: "/images/step4.jpg",
    },
    {
        id: 2,
        no: "02",
        title: "Strategic GCC Design",
        desc: "Detailed implementation plan with clear timelines, milestones, and success metrics",
        img: "/images/step5.jpg",
    },
    {
        id: 3,
        no: "03",
        title: "Implementation Partnership",
        desc: "Expert execution with continuous optimization and performance management",
        img: "/images/step3.jpg",
    },
];


  return (
    <div>
        <ServicesHero  img='/images/market.png' heading='GLOBAL CAPABILITY CENTER AS A SERVICE' para='Build World-Class Operations While Achieving 30-50% Cost Optimization'/>
        <Path page='Global Capability Center as a Service'/>
        <Intro para1='Transform your global operations through strategic capability centers. ' para2='From feasibility analysis to full operational excellence, we provide comprehensive GCC services that deliver cost advantages, talent access, and operational scalability across optimal global locations.'/>
        <Opportunity  data={opportunityData} />
        <Solution data={solutionsData} />
        <ChooseUS data={chooseUsData}/>
        <Success data={successData}/>
        <Growth/>
        <NextStep data={next}/>
        <Book/>
    </div>
  )
}

export default page