import MaxWidthWrapper from '@/components/ui/global/max-width-wrapper'
import React from 'react'

const Opportunity = () => {
    return (
        <>

            <MaxWidthWrapper>
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary">
                        —<span className="mx-3">OPPORTUNITY</span>—
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-10 md:mt-3 font-bold mb-4 leading-normal lg:leading-25">
                        THE GLOBAL EXPANSION<br /> OPPORTUNITY
                    </h1>
                </div>

            </MaxWidthWrapper>
            <div className="w-full min-h-screen flex items-center  justify-center bg-gradient-to-b from-white to-[#9BC8F5] px-6 py-16">
                <div className="max-w-6xl w-full flex flex-col justify-center items-center sm:justify-start ">
                    {/* Heading */}
                    {/* Top Stats */}
                    <div className=" mr-0 md:mr-15 lg:mr-27 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px] bg-white p-8 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">25%</p>
                            <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">
                                annually growing, Cross-border e-commerce reaching $4.9 trillion
                                by 2025
                            </p>
                        </div>

                        <div className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px]  bg-white  p-8 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">4.8B</p>
                            <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">
                                global consumers outside your home market with rising purchasing
                                power
                            </p>
                        </div>

                        <div className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px] bg-white p-8 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">$127T</p>
                            <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">
                                global economy with emerging markets growing 2x faster than
                                developed economies
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className=" md:ml-12 lg:ml-30 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px] bg-white p-8 flex flex-col items-start gap-3 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <img src="/images/incentives.svg" alt="icon" className="text-[20px] sm:w-[40px] md:w-[60px] lg:w-[84px]" />
                            <p className="text-[12px] sm:text-[20px]">
                                <span className="font-semibold ">Government incentives</span>{" "}
                                totaling hundreds of billions globally for foreign investment
                            </p>
                        </div>

                        <div className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px] bg-white p-8 flex flex-col items-start gap-3 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <img src="/images/digital.svg" alt="icon" className="text-[20px] sm:w-[40px] md:w-[60px] lg:w-[84px]" />
                            <p className="text-[12px] sm:text-[20px]">
                                <span className="font-semibold ">Digital transformation</span>{" "}
                                enabling unprecedented market access and customer engagement
                            </p>
                        </div>

                        <div className=" max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[320px] bg-white p-6 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
                            <p className="text-[12px] sm:text-[20px]">
                                <span className="font-semibold">
                                    Yet 70% of international expansion initiatives fail due to
                                    inadequate planning and execution.
                                </span>{" "}
                                Success requires more than ambition—it demands systematic strategy,
                                local expertise, and integrated execution across every aspect of
                                market development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Opportunity