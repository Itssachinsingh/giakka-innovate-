"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "../ui/global/custom-button";

const slides = [
    {
        title: "O8m Labs",
        desc: "o8m Labs is a specialized software development company at the forefront of Blockchain and Crypto innovation, powered by cutting-edge AI technologies.",
        img: "/images/om8.png",
    },
    {
        title: "Giakaa",
        desc: "At Giakaa, we help businesses thrive by upgrading their tech, simplifying workflows, and creating amazing experiences that keep them ahead of the curve.",
        img: "/images/giakka.png",
    },
    {
        title: "Giakaa Reality",
        desc: "We specialize in delivering comprehensive solutions tailored to India's smart cities, focusing on land advisory, financial services, investment planning, and project establishment in business parks.",
        img: "/images/reality.png",
    },


];

export const CaseStudy = () => {
    return (
        <div className="relative my-20 ">
            {/* Main heading section */}
            <section className=" h-250 md:h-screen sticky top-10 flex items-center justify-center bg-[#DBEDFF] z-10 px-4 sm:px-6 lg:px-20">
                <div className="text-center">
                    <h2 className="text-[20px] font-bold text-secondary">
                        —<span className="mx-3">CASE STUDIES</span>—
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-10 md:mt-3 font-bold mb-4">
                        HOW WE TRANSFORM <br /> CHALLENGES INTO SUCCESS
                    </h1>
                </div>
            </section>
            {slides.map((slide, idx) => (
                <section
                    key={idx}
                    className="h-250 md:h-screen sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-20 mx-auto"
                    style={{ zIndex: 20 + idx }}
                >
                    <div className="w-[100%]  shadow-[0_0_25px_0_#69ACF0] flex flex-col sm:flex-row px-6  py-14 md:p-14  gap-10 bg-white ">
                        <div className="flex flex-col justify-between items-start w-[100%]">
                            <div className="font-bold text-left">
                                <h4 className=" text-[15px]sm:text-[22px] ">CASE STUDY</h4>
                                <h1 className="lg:text-[84px] text-3xl sm:text-4xl md:text-5xl ">{slide.title}</h1>
                            </div>
                            <div>
                                <p className="text-[20px] text-[#000]/54 text-start">
                                    {slide.desc}
                                </p>
                            </div>
                        </div>
                        <div className=" w-[100%] sm:w-[70%] h-[200px] sm:h-[350px] ">
                            <Image
                                src={slide.img}
                                width={400}
                                height={300}
                                alt={slide.title}
                                className="w-full h-[240px] sm:h-[350px]"
                            />
                        </div>
                    </div>
                    {/* ✅ Buttons: only on the LAST slide, on the blue bg, below the card */}
                    {idx === slides.length - 1 && (
                        <div className="  absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
                            <div className=" flex items-center justify-center bg-white ">
                                <CustomButton href="#" variant="primary" target="_blank">
                                    VIEW ALL
                                </CustomButton>
                            </div>
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
};
