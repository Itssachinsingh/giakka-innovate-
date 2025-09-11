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
const challengeData = {
  heading: {
    sub: "CHALLENGE",
    title: "THE INNOVATION FINANCIING CHALLENGE",
  },
  topStats: [
    { number: "$104.6B", desc: "global innovation financing market growing at 6% CAGR through 2030" },
    { number: "80%", desc: "Traditional lending fails 80% of innovation companies due to lack of traditional collateral and long development cycles" },
    { number: "25%", desc: "Alternative financing growing 25% annually as technology companies seek flexible capital solutions" },
  ],
  bottomStats: [
    {
      number: "$6.6T",
      desc: "IP assets worth $6.6 trillion globally yet remain largely untapped as financing collateral",
    },
    {
      number: "3X",
      desc: "faster operational scaling through established GCC infrastructure and proven frameworks",
    },
    {
      highlight: "Yet most innovative companies struggle to access appropriate capital.",
      desc: " Success requires specialized financing expertise, alternative lending solutions, and comprehensive risk management tailored to innovation cycles and technology commercialization requirements.",
    },
  ],
};

// Solution Component
 const solutionsData = [
{
  key: "Technology-Backed Financing",
  heading: "TECHNOLOGY-BACKED FINANCING",
  description: "Unlock the hidden value in your technology assets through innovative financing structures that leverage IP, revenue streams, and technology platforms as collateral.",
  boxes: [
    {
      title: "Key Outcomes",
      items: [
        { bold: "Access to capital", normal: " without dilutive equity financing or traditional collateral requirements" },
        { bold: "Flexible repayment terms", normal: " aligned with technology development cycles and revenue generation" },
        { bold: "Technology asset optimization", normal: " unlocking value from IP portfolios and technology platforms" },
        { bold: "Growth capital availability", normal: " supporting scaling and commercialization without ownership dilution" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "IP-collateralized lending", normal: " for technology companies with patent portfolios and intellectual property assets" },
        { bold: "Revenue-based financing", normal: " for tech commercialization with performance-linked repayment structures" },
        { bold: "Equipment and technology lease financing", normal: " with flexible terms and upgrade pathways" },
        { bold: "Convertible debt structures", normal: " for scaling companies balancing debt and equity considerations" },
        { bold: "Technology valuation", normal: " and risk assessment services with comprehensive IP and asset evaluation" }
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
        { bold: "Optimal market entry approach", normal: " balancing speed, cost, risk, and strategic control factors" },
        { bold: "Localized value propositions", normal: " driving customer acquisition, retention, and advocacy" },
        { bold: "Distribution network establishment", normal: " with verified, qualified, and motivated channel partners" },
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
        { bold: "Accelerated setup timeline", normal: " with typically 45-60 day incorporation to full operations capability" },
        { bold: "Banking relationships established", normal: " with tier-1 institutions supporting international business requirements" },
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
        { bold: "Supplier network", normal: " providing competitive cost structure, quality assurance, and operational flexibility" },
        { bold: "Industry influence", normal: " through association membership, thought leadership, and policy engagement" }
      ]
    },
    {
      title: "What We Deliver",
      items: [
        { bold: "Strategic partnership identification", normal: " with comprehensive evaluation, negotiation support, relationship management" },
        { bold: "Distribution network establishment", normal: " across target geographic segments, customer demographics, and sales channels" },
        { bold: "Supplier ecosystem development", normal: " ensuring quality, reliability, cost optimization, and supply chain resilience" },
        { bold: "Industry association integration", normal: " fostering industry relationships, thought leadership, and policy advocacy" },
        { bold: "Government stakeholder engagement", normal: " supporting policy advocacy, incentive optimization, and regulatory relationship building" }
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
    main: "WHY CHOOSE US FOR INNOVATION ",
    sub: "FINANCING",
    aeroImage: "/images/aero3.svg",
  },
  leftItems: [
    {
      icon: "Trophy",
      title: "Innovation Expertise",
      text: "Deep understanding of technology development cycles with specialized financing solutions for innovation companies.",
    },
    {
      icon: "Globe",
      title: "Global Capital Networks",
      text: "Extensive relationships with international lenders, investors, insurers, and specialty finance providers.",
    },
    {
      icon: "FileCheck2",
      title: "Structuring Excellence",
      text: "Sophisticated financial engineering optimizing capital structure while managing complex risk profiles.",
    },
  ],
  rightItems: [
    {
      icon: "Share2",
      title: "Performance Track Record",
      text: "85% funding success rate with average 40% cost of capital reduction through optimized structures.",
    },
    {
      icon: "Zap",
      title: "Comprehensive Risk Management",
      text: "Integrated approach combining financing solutions with insurance and risk management for complete protection.",
    },
  ],
  backgroundImage: "/images/chooseUs.jpg",
};


// Success component
 const successData = {
  heading: "SUCCESS METRICS",
  boxes: [
    {
      value: "ZERO",
      title: "major losses " ,
      description: " across all financed transactions through comprehensive risk management",
      image: "/images/cost.svg",
      height: "h-[320px]",
      colSpan: "md:col-span-2",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30 md:w-50",
    },
    {
      value: "95%",
      title: "client satisfaction ",
      description: " with ongoing financing and risk management support",
      image: "/images/client.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-30",
    },
    {
      value: "6",
      title: "month average ",
      description: " timeline from application to funding completion",
      image: "/images/fast.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-23",
    },
    {
      value: "£25M",
      title: "average  ",
      description: " funding secured per engagement across all financing types",
      image: "/images/shield.svg",
      height: "h-[320px]",
      imageWidth: 400,
      imageHeight: 400,
      imageClass: "w-20",
    },
    {
      value: "40%",
      title: "cost of capital reduction ",
      description: " through optimized financing structures & risk management",
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
        title: "Financing Needs Assessment",
        desc: "Comprehensive analysis of your capital requirements and optimal financing structure",
        img: "/images/step4.jpg",
    },
    {
        id: 2,
        no: "02",
        title: "Capital Strategy Development",
        desc: "Tailored approach with multiple financing options and risk management integration",
        img: "/images/step5.jpg",
    },
    {
        id: 3,
        no: "03",
        title: "Implementation Support",
        desc: "Expert execution with lender coordination, documentation, and ongoing management",
        img: "/images/step3.jpg",
    },
];


  return (
    <div>
        <ServicesHero  img='/images/market.png' heading='INNOVATION FINANCING & CAPITAL SOLUTIONS' para='Smart Capital That Fuels Breakthrough Innovation and Accelerates Growth'/>
        <Path page='Smart Capital That Fuels Breakthrough Innovation and Accelerates Growth'/>
        <Intro para1='Access the funding your innovation deserves through specialized financing  ' para2='solutions. From technology-backed lending to comprehensive risk management, we provide sophisticated capital structures that align with your growth trajectory and innovation timeline.'/>
        <Opportunity  data={challengeData} />
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