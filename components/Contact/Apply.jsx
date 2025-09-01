import React from 'react'
import { CustomButton } from '../ui/global/custom-button'

const Apply = ({text, btnText}) => {
    return (
        <div className='p-4 sm:p-6 lg:p-20 '>
            <div className='p-4 sm:p-6 lg:p-10 mx-auto h-[360px]   flex justify-start items-end mb-10 relative'
                style={{
                    backgroundImage: "url('/images/contact-bg2.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className='absolute inset-0 bg-black/60 w-full h-full '></div>
                <div className='text-white z-10 flex flex-col gap-10 '>
                    <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-semibold leading-normal'>{text}</h1>
                    <CustomButton href="#" variant="primary" target="_blank">
                        {btnText}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Apply