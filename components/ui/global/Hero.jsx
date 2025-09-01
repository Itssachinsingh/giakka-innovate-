import React from 'react'
import Image from 'next/image'
const Hero = ({img, text}) => {
  return (
    <div className='relative h-[300px] sm:h-[600px]'>
      <Image
        src={img}
        width={800}
        height={600}
        alt='contact us'
        className="h-full w-full bg-[#01172E] flex justify-start items-end object-cover"
      />
      <div className='absolute inset-0 bg-black/30 w-full h-full'></div>
      <h1 className='z-10 lg:text-[84px] text-3xl sm:text-4xl md:text-5xl text-white font-bold absolute bottom-8 sm:bottom-15 lg:bottom-30  left-4 sm:left-6 lg:left-20'>{text}</h1>

    </div>
  )
}

export default Hero