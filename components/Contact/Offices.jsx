import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../ui/global/max-width-wrapper";

const offices = [
  {
    name: "USA",
    top: "44%",
    left: "16%",
    side: "right",
  },
  {
    name: "UK",
    top: "33%",
    left: "47%",
    side: "left",
  },
  {
    name: "INDIA",
    top: "49%",
    left: "69%",
    side: "right",
  },
  {
    name: "UAE",
    top: "50%",
    left: "63%",
    side: "left",
  },
];

const Offices = ({display}) => {
  return (
    <MaxWidthWrapper>
    <div className="my-20 px-4 ">
      <h2 className="lg:text-[64px] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        OUR OFFICES
      </h2>

      <div className="relative w-[90%] mx-auto py-20">
        {/* Map */}
        <Image
          src="/images/map.svg"
          width={1000}
          height={600}
          alt="World map showing our office locations"
          className="w-full"
        />

        {/* Office Markers */}
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{ top: office.top, left: office.left }}
          >
            {/* Pulsing Dot */}
            <div className="relative w-3 h-3 md:w-5 md:h-5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#047AE0] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full w-3 h-3 md:w-5 md:h-5 bg-[#047AE0]"></span>
            </div>

            {/* Arrow + Box */}
            {office.side === "right" ? (
              <div className="absolute flex items-center top-5 left-2 sm:left-5 -translate-y-full">
                {/* Arrow pointing right */}
                <Image
                  src="/images/aero.svg"
                  alt="Arrow connector"
                  width={50}
                  height={20}
                  className="w-5 sm:w-8 lg:w-50 rotate-0"
                />
                <div className="backdrop-blur-3xl text-black px-2 py-1 md:px-6 md:py-3 text-[12px] md:text-[15px] lg:text-[22px] font-semibold shadow-lg  ml-2 mb-5 lg:mb-9 border-1 border-[#9BC8F5]">
                  {office.name}
                </div>
              </div>
            ) : (
              <div className="absolute flex items-center right-2 top-5 sm:right-5 -translate-y-full flex-row-reverse">
                {/* Arrow flipped horizontally */}
                <Image
                  src="/images/aero.svg"
                  alt="Arrow connector"
                  width={50}
                  height={20}
                  className="w-5 sm:w-8 lg:w-50 rotate-180 -scale-y-100"
                />
                <div className="backdrop-blur-3xl text-black px-2 py-1 md:px-6 md:py-3 text-[12px] md:text-[15px] lg:text-[22px] font-semibold shadow-lg mr-2 mb-5 lg:mb-9 border-1 border-[#9BC8F5]">
                  {office.name}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={` ${display} absolute right-0 sm:right-[-1rem] md:right-[-3rem] lg::right-[-5rem] bottom-0 px-4 py-1 md:px-8 md:py-3 backdrop-blur-md border-1 border-[#9BC8F5] bg-[#9BC8F5]/20`}>
          <h2 className="lg:text-[32px] md:text-[22px] font-bold text-[14px]">CONNECT WITH US</h2>
          <div className="mt-1 sm:mt-2 lg:mt-8">
            <p className="text-secondary text-[8px] md:text-[14px] lg:text-[18px]">Email</p>
            <p className="font-bold text-[12px] md:text-[18px] lg:text-[22px]">general@giakaa.com</p>
          </div>
          <div className="mt-1 sm:mt-2 lg:mt-8">
            <p className="text-secondary text-[8px] md:text-[14px] lg:text-[18px]">Phone</p>
            <p className="font-bold text-[12px] md:text-[18px] lg:text-[22px]">+91 74899 76927</p>
          </div>
          <div className="mt-1 sm:mt-2 lg:mt-8">
            <p className="text-secondary text-[8px] md:text-[14px] lg:text-[18px]">Location</p>
            <p className="font-bold text-[12px] md:text-[18px] lg:text-[22px]">xyz street, abs city</p>
          </div>
        </div>
      </div>

    </div>
    </MaxWidthWrapper>
  );
};

export default Offices;
