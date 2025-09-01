"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const Principle = () => {
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="text-center mt-60 md:mt-40">
                <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>PRINCIPLES </span>—</h2>
                <h1 className='lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold mb-10'>OUR FOUNDING PRINCIPLES</h1>
            </div>
            <div className="flex gap-4 px-4 sm:px-6 lg:px-20 mx-auto py-12">
                {values.map((item) => (
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
        </>
    )
}

export default Principle