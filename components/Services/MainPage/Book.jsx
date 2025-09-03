import React from 'react'
import { CustomButton } from '@/components/ui/global/custom-button'
import MaxWidthWrapper from "@/components/ui/global/max-width-wrapper";
const Book = () => {
    return (
        <MaxWidthWrapper>
            <div className='bg-[#9BC8F5] h-auto px-4 sm:px-6 lg:px-25 mx-auto  py-10 ${text} flex flex-col md:flex-row gap-20 my-20'>
                {/* left side */}
                <div className='w-[100%] md:w-1/2 '>
                    <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl font-semibold'>Schedule Your Strategic Consultation</h1>
                    <p className='text-[20px] font-light  mt-18 mb-6 sm:mt-30 sm:mb-10'>Complex challenges require integrated solutions. We provide the comprehensive expertise, proven methodologies, and strategic partnerships needed to transform ambitious visions into measurable success.</p>
                    <CustomButton href="#" variant="primary" target="_blank">
                        BOOK A CALL
                    </CustomButton>
                </div>

                {/* right side */}
                <div className='w-[100%] md:w-1/2 '>
                    <div>
                        {/* calendly */}
                    </div>
                </div>




            </div>
        </MaxWidthWrapper>
    )
}

export default Book