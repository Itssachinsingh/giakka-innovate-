import React from 'react'
import { CustomButton } from '../ui/global/custom-button'
import MaxWidthWrapper from '../ui/global/max-width-wrapper'

const Impact = () => {
    return (
        <div className='bg-[#000C17] px-4 sm:px-6 lg:px-20 mx-auto mt-10 py-20'>
            <MaxWidthWrapper>
                <div className='text-center md:text-start mb-8 md:mb-0 flex flex-col sm:flex-row justify-between'>
                    <h2 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-bold text-white mb-16 '>OUR IMPACT</h2>
                    <CustomButton href="#" variant="primary" target="_blank">
                        KNOW MORE
                    </CustomButton>
                </div>
                <div className='flex flex-col md:flex-row justify-between md:items-start gap-8 md:gap-0 items-center'>

                    <div className='w-50 md:text-start text-center'>
                        <h1 className='text-[#B4D6F7] lg:text-[82px] text-3xl sm:text-4xl md:text-5xl  font-bold '>15+</h1>
                        <p className='text-[16px] text-[#fff]/56 mt-1'>specialized market segments we serve</p>
                    </div>
                    <div className='w-30 md:text-start text-center'>
                        <h1 className='text-[#B4D6F7] lg:text-[82px] text-3xl sm:text-4xl md:text-5xl  font-bold '>7</h1>
                        <p className='text-[16px] text-[#fff]/56 mt-1'>integrated service offerings</p>
                    </div>
                    <div className='w-70 md:text-start text-center'>
                        <h1 className='text-[#B4D6F7] lg:text-[82px] text-3xl sm:text-4xl md:text-5xl  font-bold '>15+</h1>
                        <p className='text-[16px] text-[#fff]/56 mt-1'>countries with market intelligence and operational capability</p>
                    </div>
                    <div className='w-50 md:text-start text-center'>
                        <h1 className='text-[#B4D6F7] lg:text-[82px] text-3xl sm:text-4xl md:text-5xl  font-bold relative'>48 <span className='absolute  lg:text-[52px] text-xl sm:text-2xl md:text-3xl'>hrs</span></h1>
                        <p className='text-[16px] text-[#fff]/56 mt-1'>rapid market assessment capability</p>
                    </div>
                    <div className='w-50  md:text-start text-center'>
                        <h1 className='text-[#B4D6F7] lg:text-[82px] text-3xl sm:text-4xl md:text-5xl  font-bold '>24/7</h1>
                        <p className='text-[16px] text-[#fff]/56 mt-1'>market monitoring and alert systems</p>
                    </div>

                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default Impact