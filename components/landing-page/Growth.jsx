import React from 'react'
import { CustomButton } from '../ui/global/custom-button'

const Growth = () => {
    return (
        <div className='p-4 sm:p-6 lg:p-20 mx-auto h-[600px]   flex justify-start items-end mb-10 relative'
            style={{
                backgroundImage: "url('/images/growth.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className='absolute inset-0 bg-black/70 w-full h-full '></div>
            <div className='text-white w-[80%] md:w-[55%] z-10'>
                <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-bold'>READY TO ACTIVATE YOUR<span className='text-primary'> GROWTH </span>ENGINE?</h1>
                <p className='text-[20px] my-8'>Crisp, professional, and aligned with transformation. Guided by our founding principles and seasoned advisory board.</p>
                <CustomButton href="#" variant="primary" target="_blank">
                    CONTACT US
                </CustomButton>
            </div>
        </div>
    )
}

export default Growth