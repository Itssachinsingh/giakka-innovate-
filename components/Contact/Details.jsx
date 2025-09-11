import React from 'react'
import Image from 'next/image'
import MaxWidthWrapper from '../global/max-width-wrapper'

const Details = () => {
    return (
        <MaxWidthWrapper>
            <div className='flex flex-col sm:flex-row items-center gap-20  my-20 overflow-hidden'>
                {/* left side */}
                <div>
                    <Image
                        src="/images/details.jpg"
                        alt="details"
                        width={300}
                        height={250}
                        className=' h-[300px] sm:h-[560px] w-[675px] object-cover' />
                </div>
                {/* right side */}
                <div>
                    <h2 className='lg:text-[64px] text-2xl sm:text-3xl md:text-4xl font-bold'>General Inquiries</h2>
                    <div className='my-10'>
                        <p className='lg:text-[22px] text-md sm:text-lg   text-[#696969]'>EMAIL</p>
                        <p className='lg:text-[32px] text-2xl sm:text-3xl  font-bold'>info@giakaainnovation.com</p>
                    </div>
                    <div className='my-10'>
                        <p className='lg:text-[22px] text-md sm:text-lg  text-[#696969]'>PHONE</p>
                        <p className='lg:text-[32px] text-2xl sm:text-3xl font-bold'>+1234567890</p>
                    </div>
                    <div className='my-10'>
                        <p className='lg:text-[22px] text-md sm:text-lg  text-[#696969]'>LOCATION</p>
                        <p className='lg:text-[32px] text-2xl sm:text-3xl font-bold'>xyz street, abs city</p>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Details