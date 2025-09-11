'use client'
import { useState } from "react";
import Image from 'next/image';
import MaxWidthWrapper from '../global/max-width-wrapper';



const Differences = ({data}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <MaxWidthWrapper>
            <div className="mx-auto">
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary ">
                        —<span className="mx-3">DIFFERENCES </span>—
                    </h2>
                    <h1 className="lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold mb-10">
                        WHY WE'RE DIFFERENT
                    </h1>
                </div>
                <section className="py-16" data-aos="fade-up" id="faq">
                    <div className="mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-start">
                        <div className="w-[100%] md:w-[45%] h-[450px] overflow-hidden relative">
                            <Image
                                src="/images/differences.png"
                                fill
                                className="w-full object-cover object-center"
                                alt="Differences"
                            />
                        </div>
                        <div
                            className="space-y-6 w-[100%] md:w-[50%]"
                            data-aos="fade-up"
                        >
                            {data.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white overflow-hidden group border-b border-black"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex flex-wrap items-center justify-between gap-4 pb-6 cursor-pointer font-bold text-lg sm:text-xl md:text-[32px] text-left"
                                    >
                                        <span className="flex-1 min-w-[200px]">
                                            {faq.question}
                                        </span>
                                        <span className="w-9 h-9 flex items-center justify-center border-2 border-black text-white relative">
                                            {/* Plus icon */}
                                            <svg
                                                className={`absolute inset-0 m-auto w-5 h-5 transition-opacity duration-500 ${
                                                    openIndex === index ? "opacity-0" : "opacity-100"
                                                }`}
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                            {/* Minus icon */}
                                            <svg
                                                className={`absolute inset-0 m-auto w-5 h-5 transition-opacity duration-500 ${
                                                    openIndex === index ? "opacity-100" : "opacity-0"
                                                }`}
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 12h16"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    {openIndex === index && (
                                        <div className="px-4 pb-6 text-gray-700 text-base sm:text-lg md:text-[20px]">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MaxWidthWrapper>
    );
};

export default Differences;
