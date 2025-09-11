"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";

const Principle = ({data}) => {
    const [flips, setFlips] = useState({}); // store rotation per card

    const handleFlip = (id) => {
        setFlips((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 360, // add 360° each hover
        }));
    };

    return (
        <MaxWidthWrapper>
            <div className=" mt-60 md:mt-40">
                <h1 className="lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold ">
                    NEXT STEPS
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:justify-end justify-around px-4 gap-8 sm:gap-10 mx-auto py-12">
                {data.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative cursor-pointer overflow-hidden h-[465px] w-full sm:w-[28%]  "
                        style={{ perspective: "1000px" }}
                        animate={{ rotateY: flips[item.id] || 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        onMouseEnter={() => handleFlip(item.id)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#01172E] via-[#01172E]/50 to-transparent flex flex-col justify-between p-6 text-white">
                            <h1 className="lg:text-[100px] md:text-[64px] sm:text-[48px] text-[25px] font-semibold">{item.no}</h1>
                            <div>
                            <h2 className="text-[20px] sm:text-[32px] font-bold">
                                {item.title}
                            </h2>
                            <p className="mt-3 text-[12px] sm:text-[20px]">{item.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};

export default Principle;
