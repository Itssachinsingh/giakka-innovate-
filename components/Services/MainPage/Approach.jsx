"use client";
import React, { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/global/max-width-wrapper";
const services = [
    {
        id: 1,
        title: "Seamless Service Integration",
        desc: "Unlike fragmented consulting firms, our services work together seamlessly. Market entry leads to technology transfer, which enables joint ventures, driving partnership development, requiring GCC setup, supported by innovation financing, all within appropriate regulatory frameworks.",
        bigTitle: "SEAMLESS SERVICE INTEGRATION",
        bigDesc: "Unlike fragmented consulting firms, our services work together seamlessly. Market entry leads to technology transfer, which enables joint ventures, driving partnership development, requiring GCC setup, supported by innovation financing, all within appropriate regulatory frameworks.",
        img: "/images/approach1.jpg",
        icon: '/images/icon1.svg'
    },
    {
        id: 2,
        title: "Unified Methodology",
        desc: "One strategic framework governs all services. Our proprietary approach ensures consistency, reduces complexity, and maximizes synergies across all growth initiatives.",
        bigTitle: "UNIFIED METHODOLOGY",
        bigDesc: "One strategic framework governs all services. Our proprietary approach ensures consistency, reduces complexity, and maximizes synergies across all growth initiatives.",
        img: "/images/approach2.jpg",
        icon: '/images/icon2.svg'
    },
    {
        id: 3,
        title: "Outcome-Focused Delivery",
        desc: "Success is measured by your results, not our activity. We align our compensation with your outcomes, ensuring genuine partnership and shared commitment to success.",
        bigTitle: "OUTCOME-FOCUSED DELIVERY",
        bigDesc: "Success is measured by your results, not our activity. We align our compensation with your outcomes, ensuring genuine partnership and shared commitment to success.",
        img: "/images/approach3.jpg",
        icon: '/images/icon3.svg'
    },
];

const Approach = () => {
    const [active, setActive] = useState(2); // Default = middle one

    return (
        <MaxWidthWrapper >
            <div className="text-center my-20">
                <h2 className="text-[20px] font-bold text-secondary">
                    —<span className="mx-3">OUR APPROACH</span>—
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6xl] xl:text-[84px] mt-10 md:mt-3 font-bold mb-4">
                    OUR INTEGRATED APPRAOCH
                </h1>
            </div>
            <div className="w-full flex flex-col items-center gap-10">
                {/* Top 3 menu boxes */}

                <div className="flex  flex-col sm:flex-row items-center gap-10 w-full">
                    {services.map((s) => (
                        <div
                            key={s.id}
                            onClick={() => setActive(s.id)}
                            className={`max-w-[340px] cursor-pointer flex justify-start items-center text-center transition-all duration-300 ${active === s.id ? "opacity-100" : "opacity-40"
                                }`}
                        >
                            {/* Placeholder for icon */}
                            <div className="">
                                <Image
                                    src={s.img}
                                    alt={s.bigTitle}
                                    width={300}
                                    height={300}
                                    className='h-[110px] w-[140px]'
                                />
                            </div>
                            <p className="px-4 text-sm sm:text-base font-medium">{s.title}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom big content */}
                <div className="w-full bg-white shadow-lg  overflow-hidden">
                    {services.map(
                        (s) =>
                            s.id === active && (
                                <div
                                    key={s.id}
                                    className=" relative w-full h-[400px] sm:h-[500px] bg-black"
                                >
                                    <Image
                                        src={s.img}
                                        alt={s.bigTitle}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-[#01172E]/90 via-[#01172E]/60 to-transparent flex justify-end">
                                        <div className="sm:w-[80%] md:w-[60%] flex flex-col items-start justify-center  px-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#01172E]/70 to-black/40 backdrop-blur-xl border border-gray-600 rounded-lg flex items-center justify-center mb-5 shadow-lg">
                                                <Image
                                                    src={s.icon}
                                                    width={300}
                                                    height={300}
                                                    alt="icon"
                                                    className="text-green-400"
                                                />
                                            </div>

                                            <h2 className="text-green-500 text-2xl sm:text-3xl md:text-[43px]  font-bold mb-4">
                                                {s.bigTitle}
                                            </h2>
                                            <p className="text-white max-w-2xl text-sm sm:text-[20px]">
                                                {s.bigDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Approach;
