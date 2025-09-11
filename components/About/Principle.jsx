"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";



const Principle = ({ data, titles }) => {
    const [active, setActive] = useState(1);
    return (
        <>
            <MaxWidthWrapper>
                {titles.map((title, index) => (
                    <div className="text-center mt-60 md:mt-40"   key={index}>
                       <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>{title.subheading}</span>—</h2>
                        <h1 className='lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold mb-10'>{title.heading}</h1>
                    </div>
                ))}
                <div className="flex gap-4 mx-auto py-12">
                    {data.map((item) => (
                        <motion.div
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            initial={false}
                            animate={{
                                flex: active === item.id ? 2 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 10,
                            }}
                            className="relative cursor-pointer  overflow-hidden h-[465px]"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#01172E] via-[#01172E]/50 to-transparent flex flex-col justify-end p-6 text-white">
                                <h2 className="text-[20px] sm:text-[32px] font-bold">{item.title}</h2>
                                {active === item.id && (
                                    <motion.p
                                        initial={{ opacity: 0, x: 50 }}   // start hidden, shifted to the right
                                        animate={{ opacity: 1, x: 0 }}    // fade in + slide to place
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // slower & smooth
                                        className="mt-3 text-[12px] sm:text-[20px]"
                                    >
                                        {item.desc}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default Principle