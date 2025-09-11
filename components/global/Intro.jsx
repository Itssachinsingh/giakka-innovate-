import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import React from 'react'

const Intro = ({para1, para2}) => {
  return (
    <MaxWidthWrapper>
        <div className='md:my-30 sm:my-18 my-12 px-5'>
        <h2 className='lg:text-[32px] text-2xl md:text-4xl text-center  sm:text-end font-bold leading-12'>{para1}</h2>
        <p className='lg:text-[32px] text-2xl md:text-4xl text-[#000]/54 text-center sm:text-start font-bold leading-12'>{para2}</p>
    </div>
    </MaxWidthWrapper>
  )
}

export default Intro