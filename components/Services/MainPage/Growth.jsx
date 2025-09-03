import React from 'react'
import { CustomButton } from '@/components/ui/global/custom-button'
import Image from 'next/image'

const Growth = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-stretch mb-10 relative my-20">
      {/* Left Side */}
      <div className="relative w-full sm:w-1/2 h-[300px] sm:h-[480px]">
        <Image
          src="/images/contact-bg.png"
          width={400}
          height={400}
          alt="contact us"
          className="h-full w-full object-cover bg-[#01172E]"
        />
        <div className="absolute top-8 left-4 sm:left-6 lg:left-20">
          <h1 className="lg:text-[64px] text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            READY TO ACTIVATE YOUR <span className="text-primary">GROWTH</span> ENGINE?
          </h1>
          <p className="text-[20px] my-8 text-[#fff]/54">
            Crisp, professional, and aligned with transformation. Guided by our founding principles and seasoned advisory board.
          </p>
          <CustomButton href="#" variant="primary" target="_blank">
            CONTACT US
          </CustomButton>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-1/2 h-[300px] sm:h-[480px]">
        <Image
          src="/images/growth.jpg"
          width={400}
          height={400}
          alt="growth image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Growth
