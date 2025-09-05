"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from '@/components/ui/global/custom-button'
import MaxWidthWrapper from "@/components/ui/global/max-width-wrapper";

const slides = [
  {
    title: "MARKET ENTRY & GROWTH STRATEGY",
    boldText: "Ready to expand globally? Turn market uncertainty into your competitive advantage.",
    normalText: "Transform ambitious expansion plans into strategic execution with data-driven market analysis, competitive intelligence, and tailored entry strategies that minimize risk while maximizing returns.",
    img: "/images/services1.png",
  },
  {
    title: "TECHNOLOGY COMMERCIALIZATION & TRANSFER",
    boldText: "Research complete. Now what? Transform your funded innovation into market success.",
    normalText: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
    img: "/images/services2.png",
  },
  {
    title: "JOINT VENTURE FORMATION",
    boldText: "Need strategic partners? Structure win-win deals that accelerate your growth.",
    normalText: "Transform competitive challenges into collaborative advantages through proven frameworks for partner identification, deal structuring, and joint venture management.",
    img: "/images/services3.png",
  },
  {
    title: "PARTNERSHIP DEVELOPMENT",
    boldText: "Flying solo? Build an ecosystem of strategic relationships that multiply your impact.",
    normalText: "Create networks of strategic relationships that compound your competitive advantages through systematic partner evaluation, alliance management, and value optimization.",
    img: "/images/services4.png",
  },
  {
    title: "GLOBAL CAPABILITY CENTRE SETUP",
    boldText: "Scaling operations? Access world-class talent while cutting costs by 30-50%.",
    normalText: "Build operational excellence while achieving significant cost optimization through strategic location analysis, talent acquisition, and infrastructure development.",
    img: "/images/services5.png",
  },
  {
    title: "INNOVATION FINANCING",
    boldText: "Great ideas need capital. Secure the funding that fuels your next breakthrough.",
    normalText: "Access smart capital that accelerates growth through comprehensive funding strategies, investor identification, and expert negotiation support.",
    img: "/images/services6.png",
  },
  {
    title: "POLICY ADVOCACY & GOVERNMENT RELATIONS",
    boldText: "Regulations holding you back? Turn compliance challenges into competitive advantages.",
    normalText: "Navigate regulatory complexity while influencing favorable outcomes through expert government relations, compliance frameworks, and strategic advocacy.",
    img: "/images/services7.png",
  },
];



 const Service_Cards = () => {
    return (
      
        <div className="relative my-20 bg-[#DBEDFF]">
              <MaxWidthWrapper>
            {/* Main heading section */}
            <section className=" h-250 md:h-screen sticky top-10 flex items-center justify-center  z-10">
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary">
                        —<span className="mx-3">OUR SERVICES</span>—
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-10 md:mt-3 font-bold mb-4">
                        HOW WE TRANSFORM <br /> CHALLENGES INTO SUCCESS
                    </h1>
                </div>
            </section>
            {slides.map((slide, idx) => (
                <section
                    key={idx}
                    className="h-250 md:h-screen sticky top-0 flex items-center justify-center mx-auto"
                    style={{ zIndex: 20 + idx }}
                >
                    <div className="w-[100%] h-full md:h-[650px] shadow-[0_0_25px_0_#69ACF0] flex flex-col sm:flex-row   gap-10 bg-white ">
                        <div className="flex flex-col justify-between items-start w-[100%] px-6  py-14 md:p-10">
                            <div className="font-bold text-left">
                                <h1 className="lg:text-[64px] text-3xl sm:text-4xl md:text-5xl ">{slide.title}</h1>
                            </div>
                            <div>
                                <p className="text-[22px] font-bold  text-start">
                                    {slide.boldText} <br />
                                    <span className="text-[#000]/54 font-normal" >{slide.normalText} </span>
                                </p>
                            </div>
                            <div className=" flex items-center justify-center bg-white ">
                                <CustomButton href="#" variant="primary" target="_blank">
                                    LEARN MORE
                                </CustomButton>
                            </div>
                        </div>
                        <div className=" w-[100%] sm:w-[70%] h-[200px] sm:h-full ">
                            <Image
                                src={slide.img}
                                width={500}
                                height={500}
                                alt={slide.title}
                                className="w-full h-[240px]  sm:h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </section>
            ))}
            </MaxWidthWrapper>
        </div>
    );
};

export default Service_Cards;