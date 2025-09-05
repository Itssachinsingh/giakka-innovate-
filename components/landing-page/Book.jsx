import React from 'react'
import { CustomButton } from '../ui/global/custom-button'
import MaxWidthWrapper from '../ui/global/max-width-wrapper'
const Book = ({ bg, text }) => {
    return (
        <div className={`${bg}  h-auto px-4 sm:px-6 lg:px-20 mx-auto py-10 ${text} `}>
            <MaxWidthWrapper>
                <div className='flex flex-col md:flex-row gap-20'>
                    {/* left side */}
                    <div className='w-[100%] md:w-1/2 '>
                        <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl  font-semibold'>Book a Intro Call</h1>
                        <p className='text-[22px] font-light'>Schedule a call to explore how we can support your success.</p>
                        <div>
                            {/* calendly */}
                        </div>
                    </div>

                    {/* right side */}
                    <div className='w-[100%] md:w-1/2 '>
                        <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl font-semibold'>Get in Touch</h1>
                        <p className='text-[22px] font-light'>Let’s start a conversation about your business goals.</p>
                        <form className='text-md sm:text-[20px] mt-10'>
                            <div>
                                <p className=''>NAME</p>
                                <input type="text" className='w-full bg-[#ffff]/80 p-1 sm:p-3 text-black my-3' />
                            </div>
                            <div className='flex gap-4 my-4'>
                                <div className='flex-1'>
                                    <p className=''>EMAIL</p>
                                    <input type="email" className='w-full bg-[#ffff]/80 p-1 sm:p-3 text-black my-3' />
                                </div>
                                <div className='flex-1'>
                                    <p className=''>PHONE</p>
                                    <input type="number" className='w-full bg-[#ffff]/80 p-1 sm:p-3 text-black my-3' />
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className='flex-1'>
                                    <p className=''>COMPANY</p>
                                    <input type="text" className='w-full bg-[#ffff]/80 p-1 sm:p-3 text-black my-3' />
                                </div>
                                <div className='flex-1'>
                                    <p className=''>DESIGNATION</p>
                                    <input type="text" className='w-full bg-[#ffff]/80 p-1 sm:p-3 text-black my-3' />
                                </div>
                            </div>
                            <div>
                                <p>MESSAGE</p>
                                <textarea name="" id="" cols={1} rows={4} className='w-full bg-[#ffff]/80 py-2 text-black my-3'></textarea>
                            </div>

                        </form>
                        <CustomButton href="#" variant="primary" target="_blank">
                            SUBMIT
                        </CustomButton>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Book