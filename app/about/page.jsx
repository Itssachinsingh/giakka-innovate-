import Commitment from '@/components/About/Commitment'
import Impact from '@/components/About/Impact'
import Principle from '@/components/About/Principle'
import Story from '@/components/About/Story'
import Apply from '@/components/Contact/Apply'
import Differences from '@/components/About/Differences'
import Offices from '@/components/Contact/Offices'
import Hero from '@/components/global/Hero'
import React from 'react'
import Discover from '@/components/About/Discover'

const page = () => {
  const titles = [
    {subheading : 'PRINCIPLES', heading: 'OUR FOUNDING PRINCIPLES'}
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

const faqs = [
    {
        question: "Integrated vs. Fragmented",
        answer: (
            <p>While others offer single services, we provide comprehensive solutions that span your entire growth journey.</p>
        ),
    },
    {
        question: "Data-Driven vs. Opinion-Based",
        answer: (
            <p>Our strategies are built on quantitative analysis and proven frameworks, not consultant opinions.</p>
        ),
    },
    {
        question: "Partnership vs. Vendor",
        answer: (
            <p>We align our success with yours through outcome-based compensation and long-term relationships.</p>
        ),
    },
    {
        question: "Speed vs. Bureaucracy",
        answer: (
            <p>Our proven methodologies and established networks deliver results 3x faster than traditional approaches.</p>
        ),
    },
    {
        question: "Global vs. Local",
        answer: (
            <p>We combine local market expertise with global operational excellence across 50+ countries.</p>
        ),
    },
];

  return (
    <div>
        <Hero img='/images/giakka.png' text='ABOUT US'/>
        <Story/>
        <Impact/>
        <Commitment/>
        <Principle data={values} titles={titles}/>
        {/* <Apply text="Ready to discover what's possible when strategic vision meets proven execution?" btnText='Start Your Growth Journey'/> */}
        <Discover/>
      <Differences data={faqs} />
      <Offices display='block'/>
   </div>
  )
}

export default page