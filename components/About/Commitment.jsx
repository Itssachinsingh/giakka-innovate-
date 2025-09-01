import React from "react";
import Image from "next/image";

const Commitment = () => {
  return (
    <div className="relative w-full min-h-[90vh]">
      {/* Background image full section */}
      <Image
        src="/images/contact-bg.jpg"
        alt="Background"
        fill
        className="object-cover object-center opacity-[3%]"
      />

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side Text */}
        <div className="p-6 sm:p-12 lg:p-20 flex flex-col justify-center">
          <h1 className="lg:text-[84px] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            OUR <br /> COMMITMENT
          </h1>
          <h2 className="mt-14 lg:text-[32px] text-xl sm:text-2xl md:text-3xl font-semibold">
            To every client who trusts us with their most critical growth
            initiatives
          </h2>
          <p className="lg:text-[20px] text-lg sm:text-xl md:text-2xl text-[#000]/56 mt-4">
            We will bring the same passion, expertise, and commitment to your
            success that we would to our own. Your breakthrough deserves
            breakthrough support, and we're here to ensure you achieve it.
          </p>
        </div>

        {/* Right Side Building (flows naturally) */}
        <div className="flex justify-center items-end p-6 lg:p-0">
          <Image
            src="/images/building.png"
            alt="Building"
            width={800}
            height={600}
            className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
