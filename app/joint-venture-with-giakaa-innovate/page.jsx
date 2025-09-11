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
import Modals from '@/components/Services/ServicePages/Modals'
import Principle from '@/components/About/Principle'
import Differences from '@/components/About/Differences'

const page = () => {

  // Opportunity Component
  const opportunityData = {
    heading: {
      sub: "THE JOINT VENTURE ADVANTAGE",
      title: "JOINT VENTURE ARE KEY TO INNOVATE COMMERCIALIZATION",
    },
    topStats: [
      {
        icon: "/images/trophy.svg",
        highlight: "Government incentives",
        desc: "totaling hundreds of billions globally for foreign investment",
      },
      {
        icon: "/images/bulb.svg",
        highlight: "Digital transformation",
        desc: "enabling unprecedented market access and customer engagement",
      },
        {
        icon: "/images/globe.svg",
        highlight: "Government incentives",
        desc: "totaling hundreds of billions globally for foreign investment",
      },
    ],
    bottomStats: [
      {
        icon: "/images/jet.svg",
        highlight: "Digital transformation",
        desc: "enabling unprecedented market access and customer engagement",
      },
        {
        icon: "/images/incentives.svg",
        highlight: "Government incentives",
        desc: "totaling hundreds of billions globally for foreign investment",
      },
      {
        highlight: "Yet 70% of international expansion initiatives fail due to inadequate planning and execution.",
        desc: "Success requires more than ambition—it demands systematic strategy, local expertise, and integrated execution across every aspect of market development.",
      },
    ],
  };

// benefits data
  const titles = [
    {subheading : 'BENEFITS', heading: 'JOINT VENTURE BENEFITS'}
  ]
  const values = [
    {
        id: 1,
        title: "Customer Value",
        desc: "We put our customers first, ensuring every product & service we offer is crafted to meet their needs and make their journey with us truly rewarding.",
        img: "/images/principle1.jpg",
    },
    {
        id: 2,
        title: "Commitment",
        desc: "We Stand by our word, delivering on promises with care and consistency, so our customers can always count on us.",
        img: "/images/principle2.jpg",
    },
    {
        id: 3,
        title: "Unity",
        desc: "Coming together as one Giakka family, working harmoniously with colleagues, customers, and partners to build lasting relationships founded on trust, mutual respect, and shared purpose.",
        img: "/images/principle3.jpg",
    },
];

// diffrences component 
const faqs = [
  {
    question: "Investment Organizations",
    answer: (
      <p>
        • Private equity and venture capital firms seeking operational partnership and market expertise <br />
        • Corporate venture arms requiring local market knowledge and execution capabilities <br />
        • Government investment agencies focused on technology commercialization and economic development
      </p>
    ),
  },
  {
    question: "Research Institutions",
    answer: (
      <p>
        • Universities with commercializable research portfolios and IP assets <br />
        • Research organizations seeking sustainable funding and commercialization pathways <br />
        • Innovation centers requiring market development and scaling expertise
      </p>
    ),
  },
  {
    question: "Technology Companies",
    answer: (
      <p>
        • Breakthrough innovations requiring market expertise and commercialization support <br />
        • Established companies seeking international expansion and market development <br />
        • Research-intensive organizations needing operational and strategic partnership
      </p>
    ),
  },
];

// Next step  data
const next = [
    {
        id: 1,
        no: "01",
        title: "Partnership Assessment",
        desc: "Comprehensive evaluation of joint venture opportunity and optimal structure",
        img: "/images/step4.jpg",
    },
    {
        id: 2,
        no: "02",
        title: "Strategic Framework Development",
        desc: "Detailed partnership design with clear objectives, timelines, and success metrics",
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
      <ServicesHero img='/images/market.png' heading='JOINT VENTURE WITH GIAKKA INNOVATE' para='Strategic Partnership for Accelerated Global Innovation and Market Development' />
      <Path page='Joint Venture with Giakaa Innovate' />
      <Intro para1='Transform isolated capabilities into powerful partnership networks ' para2='networks From strategic alliance development to complex corporate partnerships, we create sustainable relationships that accelerate growth, reduce risk, and establish market leadership positions.' />
      <Opportunity data={opportunityData} />
      <Principle data={values} titles={titles}/>
      <Modals />
      <Differences data={faqs}/>
      <Growth />
      <NextStep data={next} />
      <Book />
    </div>
  )
}

export default page