'use client'
import React from "react";
import Image from "next/image";
import { Globe, Puzzle, FileCheck2, Share2, Zap } from "lucide-react";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";

const iconMap = { Globe, Puzzle, FileCheck2, Share2, Zap };

const ChooseUS = ({ data }) => {
  const { heading, leftItems, rightItems, backgroundImage } = data;

  return (
    <div className="relative p-4 sm:p-6 lg:p-20 mx-auto lg:h-[980px] flex justify-between items-start gap-12">
      {/* Background Image */}
      <Image src={backgroundImage} alt="Choose Us Background" fill priority className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <MaxWidthWrapper>
        {/* Mobile Heading */}
        <div className="w-fit relative text-white md:hidden mb-[4rem]">
          <h1 className="lg:text-[48px] text-2xl sm:text-3xl md:text-4xl font-bold leading-normal">
            {heading.main} <br /> {heading.sub.split(" ENTRY")[0]}{" "}
            <span className="absolute right-0 top-20">ENTRY</span>
          </h1>
          <Image src={heading.aeroImage} width={200} height={200} alt="aero" className="absolute right-22 top-23 w-24" />
        </div>

        <div className="h-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Left Column */}
          <div className="z-10 flex flex-col justify-between gap-8 xl:px-6 py-16 h-full">
            {leftItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="max-w-[400px] md:block hidden w-full rounded-xl bg-black/50 backdrop-blur-md border border-white/10 shadow-lg p-6"
                  style={{ marginLeft: `${index * 4}rem` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
                </div>
              );
            })}

            {/* Mobile Left Items */}
            {leftItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="max-w-[400px] md:hidden block w-full rounded-xl bg-black/50 backdrop-blur-md border border-white/10 shadow-lg p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
                </div>
              );
            })}

            {/* Mobile Right Items */}
            <div className="flex flex-col gap-4 md:hidden">
              {rightItems.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={index}
                    className="max-w-[400px] w-full rounded-xl bg-black/50 backdrop-blur-md border border-white/10 shadow-lg p-6 gap-4"
                    style={{ marginRight: `${index * 4}rem` }}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="z-10 flex flex-col justify-between gap-8 px-6 py-16 h-full items-end">
            {/* Desktop Heading */}
            <div className="w-fit relative text-white hidden md:block mt-[-5rem] mb-[4rem]">
              <h1 className="lg:text-[48px] text-2xl sm:text-3xl md:text-4xl font-bold leading-normal">
                {heading.main} <br /> {heading.sub.split(" ENTRY")[0]}{" "}
                <span className="absolute right-0 md:top-32 lg:top-52 xl:top-38">ENTRY</span>
              </h1>
              <Image src={heading.aeroImage} width={200} height={200} alt="aero" className="absolute right-40 xl:top-45 w-24" />
            </div>

            {/* Right Items */}
            {rightItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="max-w-[400px] hidden w-full rounded-xl bg-black/50 backdrop-blur-md border border-white/10 shadow-lg p-6 md:block gap-4"
                  style={{ marginRight: `${index * 4}rem` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ChooseUS;
