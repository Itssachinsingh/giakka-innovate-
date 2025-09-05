'use client'

import React, { useState } from 'react'
import { CustomButton } from '../ui/global/custom-button';
import Image from 'next/image';
import MaxWidthWrapper from '../ui/global/max-width-wrapper';

const Process = () => {
    const phases = [
        {
            id: 1,
            title: "Discovery &  Diagnostic",
            subtitle: "PHASE 1",
            description:
                "We begin by understanding your market position, ambitions, and challenges—establishing a precise baseline for growth. Guided by our founding principles and seasoned advisory board,",
            image: "/images/phase1.jpg",
        },
        {
            id: 2,
            title: "Strategic Intelligence",
            subtitle: "PHASE 2",
            description:
                "Deep-dive analysis of industry trends, stakeholder dynamics, and tech readiness to craft actionable roadmaps. Guided by our founding principles and seasoned advisory board,",
            image: "/images/phase2.jpg",
        },
        {
            id: 3,
            title: "Opportunity Design",
            subtitle: "PHASE 3",
            description:
                "We blueprint scalable solutions—be it JV structures, GGC models, or commercialization pathways—tailored to your goals. Guided by our founding principles and seasoned advisory board,",
            image: "/images/phase3.jpg",
        },
        {
            id: 4,
            title: "Partnership Activation",
            subtitle: "PHASE 4",
            description:
                "From corporate alliances to cross-border ventures, we secure and structure the partnerships that drive execution.. Guided by our founding principles and seasoned advisory board,",
            image: "/images/phase4.jpg",
        },
        {
            id: 5,
            title: "Execution & Enablement",
            subtitle: "PHASE 5",
            description:
                "Mobilizing resources, teams, and capital to deploy strategies with agility—while aligning governance and compliance. Guided by our founding principles and seasoned advisory board,",
            image: "/images/phase5.jpg",
        },
        {
            id: 6,
            title: "Policy Enablement",
            subtitle: "PHASE 6",
            description:
                "We amplify your impact through strategic advocacy, navigating regulatory environments to support sustained momentum. Guided by our founding principles and seasoned advisory board, ",
            image: "/images/phase6.jpg",
        },
    ];

    const [active, setActive] = useState(1);

    const activePhase = phases.find((phase) => phase.id === active);

    return (
        <MaxWidthWrapper>
        <div className="mx-auto flex flex-col md:flex-row justify-between my-10">
            {/* left side */}
            <div className='flex flex-col justify-between w-[100%] md:w-[40%]'>
                <div>
                    <h2 className="text-[20px] font-bold text-secondary text-center sm:text-start">—<span className='mx-3'>PROCESS</span>—</h2>
                    <h1 className='lg:text-[64px] text-2xl sm:text-4xl md:text-5xl  mt-5 md:mt-2 font-bold mb-4 text-center sm:text-start leading-5 md:leading-20'>SEE OUR STRATEGIC PROCESS</h1>
                </div>
                <div className='text-gray-400'>
                    <p className='text-[20px]'>From Insight to Impact</p>
                    <p className='text-[20px] mb-8'>A Proven Approach for Innovation-Driven Growth. Our mission is clear: unlock sustainable, innovation-driven growth across borders.</p>
                    <CustomButton href="#" variant="primary" target="_blank">
                        EXPLORE MORE
                    </CustomButton>
                </div>
            </div>
            {/* right side */}
            <div className='md:w-[55%] w-[100%] mt-10 md:mt-0'>
                {/* phases section */}
                <section className="flex sm:gap-14 gap-6">
                    {/* Left Menu */}
                    <div className="flex flex-col gap-4 bg-[#0575E633]/20 shadow-xl rounded-t-sm shadow-[#69ACF0] w-35">
                        <h2 className="text-[24px]  font-bold text-white bg-[#01172E] py-2 rounded-t-sm text-center">
                            PHASES
                        </h2>
                        <div className='py-4 flex flex-col gap-8 items-center'>
                            {phases.map((phase) => (
                                <button
                                    key={phase.id}
                                    onClick={() => setActive(phase.id)}
                                    className={`transition-all ease-in-out duration-400 text-white rounded-sm w-[80%] text-center font-bold py-3 px-4 ${active === phase.id
                                        ? "bg-[#0575E6]  text-base cursor-pointer text-[16px] w-[120%] h-[130%] py-4  "
                                        : "bg-[#69ACF0]  text-[12px] cursor-pointer"
                                        }`}
                                >
                                    <div>{phase.title}</div>
                                    <div
                                        className='text-xs font-normal '
                                    >
                                        {phase.subtitle}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 `">
                        <div className="w-full h-[350px] relative mb-6">
                            <Image
                                src={activePhase?.image || "/images/choose-us.jpg"}
                                alt={activePhase?.title || "Phase image"}
                                fill
                                className="object-cover "
                            />
                        </div>
                        <h3 className="sm:text-[32px] text-[22px] font-bold mb-2 mt-10">{activePhase?.title}</h3>
                        <p className="text-[#000]/54 text-[15px] sm:text-[20px] leading-relaxed">
                            {activePhase?.description}
                        </p>
                    </div>
                </section>
                {/* phases section */}

            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Process