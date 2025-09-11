import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '../global/max-width-wrapper'
const Hero = () => {
  return (
    <div className='relative h-[300px] sm:h-[480px]'>
      <Image
        src='/images/contact-bg.png'
        width={400}
        height={300}
        alt='contact us'
        className="h-full w-full bg-[#01172E] flex justify-start items-end "
      />
      <MaxWidthWrapper>
        <h1 className=' lg:text-[84px] text-3xl sm:text-4xl md:text-5xl text-white font-bold absolute bottom-8 sm:bottom-15 lg:bottom-30  left-4 sm:left-6 lg:left-40'>CONTACT US</h1>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero