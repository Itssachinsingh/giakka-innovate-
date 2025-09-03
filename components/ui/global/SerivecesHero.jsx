import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from './max-width-wrapper'
const ServicesHero = ({ img, heading, para }) => {
  return (
    <div className='relative h-[300px] sm:h-[600px]'>
      <Image
        src={img}
        width={800}
        height={600}
        alt='contact us'
        className="h-full w-full bg-[#01172E] flex justify-start items-end object-cover"
      />
       <MaxWidthWrapper><div className='absolute inset-0 bg-[#0B0D18]/50 w-full h-full'></div>
     <div className='relative w-full px-4 lg:p-0 '>
        <div className='absolute bottom-8 sm:bottom-15 lg:bottom-20  w-[70%] '>
          <h1 className='z-10 lg:text-[64px] text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-relaxed'>{heading}</h1>
          <p className='z-10 lg:text-[32px] text-xl sm:text-2xl md:text-3xl text-white '>{para}</p>
        </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ServicesHero