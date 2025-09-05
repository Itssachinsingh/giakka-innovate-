import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/global/max-width-wrapper";

const Success = ({ data }) => {
  return (
    <MaxWidthWrapper>
      <div className="w-full mx-auto px-4 py-12">
        <h1 className='lg:text-[84px] md:text-5xl sm:text-3xl text-2xl text-center pt-12 pb-8 font-bold'>
          {data.heading}
        </h1>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Box 1 */}
          <div className={`bg-blue-100 p-6 lg:p-8 flex items-end justify-center relative ${data.boxes[0].height} ${data.boxes[0].colSpan}`}>
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                {data.boxes[0].value}
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed w-full md:w-2/3">
                <span className="font-semibold">{data.boxes[0].title}</span> {data.boxes[0].description}
              </p>
            </div>
            <div className="absolute right-6 lg:right-8 top-6 lg:top-8">
              <Image
                src={data.boxes[0].image}
                width={data.boxes[0].imageWidth}
                height={data.boxes[0].imageHeight}
                alt={data.boxes[0].title}
                className={data.boxes[0].imageClass}
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className={`bg-blue-100 p-6 lg:p-8 flex items-end justify-center relative ${data.boxes[1].height}`}>
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                {data.boxes[1].value}
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">{data.boxes[1].title}</span> {data.boxes[1].description}
              </p>
            </div>
            <div className="absolute right-6 lg:right-8 top-6 lg:top-8">
              <Image
                src={data.boxes[1].image}
                width={data.boxes[1].imageWidth}
                height={data.boxes[1].imageHeight}
                alt={data.boxes[1].title}
                className={data.boxes[1].imageClass}
              />
            </div>
          </div>

          {/* Box 3 */}
          <div className={`bg-blue-100 p-6 lg:p-8 flex items-end justify-center relative ${data.boxes[2].height}`}>
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                {data.boxes[2].value}
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">{data.boxes[2].title}</span> {data.boxes[2].description}
              </p>
            </div>
            <div className="absolute right-6 lg:right-8 top-6 lg:top-8">
              <Image
                src={data.boxes[2].image}
                width={data.boxes[2].imageWidth}
                height={data.boxes[2].imageHeight}
                alt={data.boxes[2].title}
                className={data.boxes[2].imageClass}
              />
            </div>
          </div>

          {/* Box 4 */}
          <div className={`bg-blue-100 p-6 lg:p-8 flex items-end justify-center relative ${data.boxes[3].height}`}>
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                {data.boxes[3].value}
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">{data.boxes[3].title}</span> {data.boxes[3].description}
              </p>
            </div>
            <div className="absolute right-6 lg:right-8 top-6 lg:top-8">
              <Image
                src={data.boxes[3].image}
                width={data.boxes[3].imageWidth}
                height={data.boxes[3].imageHeight}
                alt={data.boxes[3].title}
                className={data.boxes[3].imageClass}
              />
            </div>
          </div>

          {/* Box 5 */}
          <div className={`bg-blue-100 p-6 lg:p-8 flex items-end justify-center relative ${data.boxes[4].height}`}>
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                {data.boxes[4].value}
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">{data.boxes[4].title}</span> {data.boxes[4].description}
              </p>
            </div>
            <div className="absolute right-6 lg:right-8 top-6 lg:top-8">
              <Image
                src={data.boxes[4].image}
                width={data.boxes[4].imageWidth}
                height={data.boxes[4].imageHeight}
                alt={data.boxes[4].title}
                className={data.boxes[4].imageClass}
              />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Success;
