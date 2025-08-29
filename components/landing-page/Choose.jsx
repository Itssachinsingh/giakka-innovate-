import Image from 'next/image';
const faqs = [
    {
        question: "Integrated Approach",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>One Partner</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Seamless Journey</button>
            </>
        ),
    },
    {
        question: "Global Expertise",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Global Reach</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Local knowledge</button>
            </>
        ),
    },
    {
        question: "Technology-Enabled",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Intelligence amplified by innovation</button>
            </>
        ),
    },
    {
        question: "Speed to Market",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Time is your competitive advantage</button>
            </>
        ),

    },
    {
        question: "Outcome-Focused",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Success aligned with yours.</button>
            </>
        ),
    },
    {
        question: "Innovation-First",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Tomorrow's solutions, today.</button>
            </>
        ),
    },
];
const Choose = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-20 mx-auto">
            <h2 className="text-[20px] font-bold text-secondary text-center sm:text-start">—<span className='mx-3'>WHY CHOOSE US</span>—</h2>
            <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-center sm:text-start mt-10 sm:mt-3'>WHERE STRATEGIC VISION MEEETS<br /> PROVEN EXECUTION</h1>
            <section className="py-16" data-aos="fade-up" id='faq'>
                <div className="mx-auto  flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-start">
                    <div className=' w-[100%] md:w-[45%]  h-[550px] overflow-hidden relative'>
                        <Image
                            src='/images/choose-us.jpg'
                            width={300}
                            height={200}
                            className='w-full object-cover object-center'
                        />
                    </div>
                    <div
                        className="space-y-6 w-[100%] md:w-[50%]"
                        data-aos="fade-up"
                    >
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="bg-white overflow-hidden group"
                            >
                                <summary className="w-full flex  border-b border-black  flex-wrap items-center justify-between gap-4 pb-6 cursor-pointer list-none font-bold text-lg sm:text-xl md:text-[32px]">
                                    <span className="flex-1 min-w-[200px] ">
                                        {faq.question}
                                    </span>

                                    <span
                                        className='w-9 h-9 flex items-center justify-center border-2 border-black text-white relative'
                                    >
                                        {/* Plus icon */}
                                        <svg
                                            className="absolute inset-0 m-auto w-5 h-5 transition-opacity duration-500 group-open:opacity-0"
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
                                            className="absolute inset-0 m-auto w-5 h-5 opacity-0 transition-opacity duration-500 group-open:opacity-100"
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
                                </summary>

                                <div className="px-4 py-4 text-gray-700 text-base sm:text-lg md:text-[20px]">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Choose