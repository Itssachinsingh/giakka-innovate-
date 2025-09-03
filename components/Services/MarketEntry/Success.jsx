import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/ui/global/max-width-wrapper';

const Success = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full mx-auto px-4 py-12">

        <h1 className='lg:text-[84px] md:text-5xl sm:text-3xl text-2xl text-center pt-12 pb-8 font-bold'>SUCCESS METRICS</h1>
        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

          {/* Box 1: 40-70% Cost Advantage (spans 2 columns) */}
          <div className="bg-blue-100  p-6 lg:p-8 flex items-end justify-center h-[320px] md:col-span-2 relative">
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className=" lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl font-semibold mb-3 leading-none">
                40-70%
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed w-full md:w-2/3">
                <span className="font-semibold  ">cost advantage</span> vs. developed market operations
                through strategic location optimization
              </p>
            </div>
            <div className="absolute  right-6 lg:right-8 top-6 lg:top-8  top- flex flex-col items-center">
              <Image
                src='/images/cost.svg'
                width={400}
                height={400}
                alt='cost'
                className='w-30 md:w-50'
              />
            </div>
          </div>

          {/* Box 2: 90% Client Retention */}
          <div className="bg-blue-100  p-6 lg:p-8 flex items-end justify-center h-[320px] relative">
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl  font-semibold  mb-3 leading-none">
                90%
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">client retention</span> for ongoing growth,
                scaling, additional market expansion
                support
              </p>
            </div>
            <div className="absolute  right-6 lg:right-8 top-6 lg:top-8">
              <div className=" relative">
                <Image
                  src='/images/client.svg'
                  width={400}
                  height={400}
                  alt='client'
                  className='w-30'
                />
              </div>
            </div>
          </div>

          {/* Box 3: 3X Faster Market Penetration */}
          <div className="bg-blue-100  p-6 lg:p-8 flex items-end justify-center h-[320px] relative">
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl  font-semibold  mb-3 leading-none">
                3X
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">faster </span>
                market penetration through strategic partnerships
                and local expertise utilization
              </p>
            </div>
            <div className="absolute  right-6 lg:right-8 top-6 lg:top-8">
              <div className="relative">
                <Image
                  src='/images/fast.svg'
                  width={400}
                  height={400}
                  alt='fast'
                  className='w-23'
                />
              </div>
            </div>
          </div>

          {/* Box 4: ZERO Major Compliance Incidents */}
          <div className="bg-blue-100  p-6 lg:p-8 flex items-end justify-center h-[320px] relative">
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl  font-semibold  mb-3 leading-none">
                ZERO
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">major compliance incidents</span> across all
                client engagements & international markets
              </p>
            </div>
            <div className="absolute  right-6 lg:right-8 top-6 lg:top-8">
              <div className="relative">
                <Image
                  src='/images/shield.svg'
                  width={400}
                  height={400}
                  alt='shield'
                  className='w-20'
                />
              </div>
            </div>
          </div>

          {/* Box 5: 12-18 Month Timeline */}
          <div className="bg-blue-100  p-6 lg:p-8 flex items-end justify-center h-[320px] relative">
            <div className="flex-1 hover:-translate-y-5 transition-all ease-in-out duration-200">
              <div className="lg:text-[96px] md:text-[64px] sm:text-5xl text-3xl  font-semibold  mb-3 leading-none">
                12-18
              </div>
              <p className="text-slate-700 text-base text-[14px] lg:text-[20px] leading-relaxed">
                <span className="font-semibold">month</span> is the Average timeline from<br />
                strategy development to profitable market
                operations
              </p>
            </div>
            <div className="absolute  right-6 lg:right-8 top-6 lg:top-8">
              <div className="relative w-20">
                <Image
                  src='/images/month.svg'
                  width={400}
                  height={400}
                  alt='month'
                  className='w-20'
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Success;
