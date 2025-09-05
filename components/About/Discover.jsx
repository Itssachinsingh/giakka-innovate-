import React from 'react'
import { CustomButton } from '../ui/global/custom-button'
import MaxWidthWrapper from '../ui/global/max-width-wrapper'

const Discover = () => {
    return (
        
            <div className=''>
                <div className='p-4 sm:p-6 lg:p-10 mx-auto h-[360px]   flex justify-start items-end mb-10 relative'
                    style={{
                        backgroundImage: "url('/images/contact-bg2.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div className='absolute inset-0 bg-black/60 w-full h-full '></div>
                    <MaxWidthWrapper>
                    <div className='relative text-white z-10 flex flex-col gap-10 '>
                        <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-semibold leading-normal'>Ready to discover what's possible when strategic vision meets proven execution?</h1>
                        <CustomButton href="#" variant="primary" target="_blank">
                            Start Your Growth Journey
                        </CustomButton>
                    </div>
                    </MaxWidthWrapper>
                </div>
            </div>
       
    )
}

export default Discover