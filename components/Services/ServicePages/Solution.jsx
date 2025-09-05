'use client'
import React, { useState } from 'react'
import MaxWidthWrapper from '@/components/ui/global/max-width-wrapper'
import Image from 'next/image'

const Solution = ({ data }) => {
  const menuItems = data.map(item => item.key)
  const [active, setActive] = useState(menuItems[0])

  const activeContent = data.find(item => item.key === active)

  return (
    <div className='py-15 lg:py-30'>
      <MaxWidthWrapper>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-secondary">
            —<span className="mx-3">OUR SOLUTION</span>—
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mt-10 md:mt-3 font-bold mb-4 leading-normal lg:leading-25">
            OUR COMPREHENSIVE <br /> MARKET ENTRY SOLUTION
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row my-20">
          {/* Left Menu */}
          <div className="w-full md:w-1/4 bg-white md:px-6 flex flex-row overflow-x-scroll md:overflow-hidden md:flex-col gap-6 text-[20px] font-bold">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-left whitespace-nowrap md:whitespace-normal bg-gray-100 px-3 py-2 mb-6 md:mb-0 md:py-0 md:px-0 md:bg-transparent ${
                  active === item ? "font-semibold text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="relative w-full md:w-3/4 flex text-white overflow-hidden">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/solution-bg.png')" }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Foreground Content */}
            <div className="relative z-20 max-w-5xl px-10 py-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{activeContent.heading}</h1>
              <p className="text-gray-300 max-w-3xl mb-10">{activeContent.description}</p>

              {/* Boxes */}
              <div className="flex items-end flex-col md:flex-row gap-6">
                {activeContent.boxes.map((box, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-6 shadow-sm shadow-black/40 ${
                      idx === 0 ? "h-[360px]" : "h-[400px]"
                    }`}
                  >
                    <div className="flex gap-3 justify-start items-center mb-6">
                      <Image
                        src={idx === 0 ? "/images/cup.svg" : "/images/check.svg"}
                        width={100}
                        height={100}
                        alt="icon"
                        className="w-10"
                      />
                      <h2 className="text-[#0575E6] text-lg sm:text-[32px] font-semibold">{box.title}</h2>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-200">
                      {box.items.map((item, i) => (
                        <li key={i}>
                          <span className="font-semibold text-white">{item.bold}</span>
                          {item.normal}
                          {i !== box.items.length - 1 && <hr className="mt-2 bg-[#fff]/40" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Solution
