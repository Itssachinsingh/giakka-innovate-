import React from 'react'
import Image from 'next/image';
import { CustomButton } from '../global/custom-button';
import MaxWidthWrapper from '../global/max-width-wrapper';

const faqs = [
    {
        question: "What industries does Giakaa Innovate specialize in?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>One Partner</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Seamless Journey</button>
            </>
        ),
    },
    {
        question: "How does Giakaa support international market entry and expansion?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Global Reach</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Local knowledge</button>
            </>
        ),
    },
    {
        question: "What is a Global Capability Centre (GCC), and how can it benefit my organization?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Intelligence amplified by innovation</button>
            </>
        ),
    },
    {
        question: "Can you help startups or SMEs commercialize new technologies?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Time is your competitive advantage</button>
            </>
        ),

    },
    {
        question: "What role does Giakaa play in joint venture investment structuring?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Success aligned with yours.</button>
            </>
        ),
    },
    {
        question: "How do you navigate government relations and policy advocacy?",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Tomorrow's solutions, today.</button>
            </>
        ),
    },
];

const Faq = () => {
    return (
        <MaxWidthWrapper>
        <div className=" mx-auto my-20">
            <h2 className="text-[20px] font-bold text-secondary text-center md:text-start">—<span className='mx-3'>FREQUENTLY ASKED QUESTIONS</span>—</h2>
            <h1 className='lg:text-[84px] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-start w-[100%] mt-10 md:mt-3 md:w-[80%]'>ANY QUESTIONS BEFORE WE START?</h1>
            <div className='flex flex-col md:flex-row justify-between gap-20 my-20 items-stretch'  >
                {/* left side */}
                <div className=' flex items-end '>
                    <div className="relative w-full md:w-[300px] h-[280px] overflow-hidden ">
                        <Image
                            src="/images/faq.jpg"
                            width={300}
                            height={250}
                            className="h-full w-full object-cover object-left"
                            alt="FAQ"
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center text-white z-10 p-8">
                            <h2 className='text-[32px] font-bold'>Join Us</h2>
                            <p className='text-[20px] my-7'>If you’re ready to architect impact at scale, we’re ready for you.</p>
                            <CustomButton href="#" variant="primary" target="_blank">
                                VIEW ALL
                            </CustomButton>
                        </div>
                        <div className="absolute inset-0 bg-black/70"></div>

                    </div>
                </div>

                {/* right side */}
                <div className='w-full md:w-[70%] relative'>
                    <div className='hidden md:block'>
                        <Image
                        src='/images/faq.svg'
                        width={300}
                        height={250}
                        alt='aero'
                        className='absolute  top-[-3rem] left-[-10rem] w-15'
                        />
                    </div>
                    <div
                        className="space-y-6 w-full"
                        data-aos="fade-up"
                    >
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="bg-white overflow-hidden group"
                            >
                                <summary className="w-full flex border-b border-black flex-wrap items-center justify-between gap-4 pb-6 cursor-pointer list-none font-bold text-lg sm:text-xl md:text-[22px]">
                                    <span className="flex-1 min-w-[200px]">
                                        {faq.question}
                                    </span>

                                    <span className="w-9 h-9 flex items-center justify-center  text-white relative">
                                        {/* Down angle (default) */}
                                        <svg
                                            className="w-5 h-5 transition-transform duration-500 group-open:rotate-180"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="px-4 py-4 text-gray-700 text-base sm:text-lg md:text-[20px]">
                                    {faq.answer}
                                </div>
                            </details>

                        ))}
                    </div>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    )
}

export default Faq