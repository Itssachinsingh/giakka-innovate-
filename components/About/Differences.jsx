import Image from 'next/image';
const faqs = [
    {
        question: "IIntegrated vs. Fragmented",
        answer: (
            <>
                <p>While others offer single services, we provide comprehensive solutions that span your entire growth journey.</p>
            </>
        ),
    },
    {
        question: "Data-Driven vs. Opinion-Based",
        answer: (
            <>
                <p>Our strategies are built on quantitative analysis and proven frameworks, not consultant opinions.</p>
            </>
        ),
    },
    {
        question: "Partnership vs. Vendor",
        answer: (
            <>
                <p>We align our success with yours through outcome-based compensation and long-term relationships.</p>
            </>
        ),
    },
    {
        question: "Speed vs. Bureaucracy",
        answer: (
            <>
                <p>Our proven methodologies and established networks deliver results 3x faster than traditional approaches.</p>
            </>
        ),

    },
    {
        question: "Global vs. Local",
        answer: (
            <>
                <p>We combine local market expertise with global operational excellence across 50+ countries.</p>
            </>
        ),
    },
];
const Differences = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-20 mx-auto">
            <div className="text-center">
                <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>DIFFERENCES </span>—</h2>
                <h1 className='lg:text-[84px] text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-3 font-bold mb-10'>WHY WE'RE DIFFERENT</h1>
            </div>
            <section className="py-16" data-aos="fade-up" id='faq'>
                <div className="mx-auto  flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-start">
                    <div className=' w-[100%] md:w-[45%]  h-[450px] overflow-hidden relative'>
                        <Image
                            src='/images/differences.png'
                            fill
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

export default Differences;