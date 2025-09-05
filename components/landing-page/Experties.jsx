'use client'
import { useState } from "react";
import Image from "next/image";
import { CustomButton } from "../ui/global/custom-button";
import MaxWidthWrapper from "../ui/global/max-width-wrapper";
const services = [
    {
        id: 1,
        title: "Market Entry & Growth",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 2,
        title: "Research Commercialization",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 3,
        title: "Joint Venture Investment Support",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 4,
        title: "Partnerships & Corporate Development",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 5,
        title: "Global Capability Centre Setup",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 6,
        title: "Innovation Financing",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    },
    {
        id: 7,
        title: "Policy Advocacy & Government Relations",
        description: "Bridge the gap between breakthrough research and sustainable revenue, specializing in post-grant commercialization for Innovate UK recipients and research institutions.",
        icon: "/images/icon.svg"
    }
];

export default function ExpandingCard() {
    const [hoveredId, setHoveredId] = useState(null); // track which card is hovered

    return (
        <MaxWidthWrapper>
            <div className="my-30">
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>OUR EXPERTIES </span>—</h2>
                    <h1 className='lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold mb-10'>SOLUTIOS FOR EVERY STAGE</h1>
                </div>
                <div className="mx-auto flex flex-wrap justify-evenly gap-4">

                    {services.map((item) => {
                        const isHovered = hoveredId === item.id;
                        return (
                            <div
                                key={item.id}
                                className="relative w-[300px] h-[320px] bg-[#DBEDFF]  overflow-hidden mb-10"
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Gradient card inside */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 rounded-sm bg-[#0575E666] shadow-lg transition-all duration-500 ease-in-out
            ${isHovered ? "w-full h-full p-6" : "w-[90%] h-1/2 p-4 translate-x-[5%] -translate-y-4"}`}
                                >
                                    {!isHovered && (
                                        <div className="flex flex-col items-start gap-3 h-full">
                                            <div className="w-10 h-10 text-white flex items-center justify-center">
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={item.icon}
                                                    alt={item.icon}
                                                    className="w-8 h-8"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-black">
                                                {item.title}
                                            </h3>
                                        </div>
                                    )}

                                    {isHovered && (
                                        <div className="flex flex-col justify-between h-full text-black">
                                            <div className="flex flex-col items-start gap-3">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-md">
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={item.icon}
                                                        alt={item.icon}
                                                        className="w-8 h-8"
                                                    />
                                                </div>
                                            </div>

                                            <p className="text-[18px] mt-4">{item.description}</p>

                                            <CustomButton href="#" variant="foreground" target="_blank">
                                                EXPLORE MORE
                                            </CustomButton>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* 🔹 Extra static plain box */}
                    <div className="w-[300px] h-[320px] flex flex-col items-start justify-between py-10 px-5 bg-[#0A2540] ">
                        <h3 className="text-[32px] font-semibold text-white ">
                            Start Your Growth Journey
                        </h3>
                        <CustomButton href="#" variant="primary" target="_blank">
                            EXPLORE
                        </CustomButton>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
