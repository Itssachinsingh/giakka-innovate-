import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from './max-width-wrapper'

const Path = ({ page }) => {
    return (
        <MaxWidthWrapper>
        <div className='text-[#01172E8A]/54  font-bold sm:text-[20px] text-[12px] flex  justify-start items-center gap-5 pt-8'>
            <p className=''>Home</p>
            <Image
                src='../images/aero2.svg'
                width={400}
                height={400}
                className='w-5'
                  alt='aero'
            />
            <p>Services</p>
            <Image
                src='../images/aero2.svg'
                width={400}
                height={400}
                className='w-5'
                alt='aero'
            />
            <p className='text-black'>{page}</p>
        </div>
        </MaxWidthWrapper>
    )
}

export default Path