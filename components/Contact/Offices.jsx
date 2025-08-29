import React from 'react'
import Image from 'next/image'
const Offices = () => {
  return (
    <div className='my-20  px-4 sm:px-6 lg:px-20 '>
                    <h2 className='lg:text-[64px] text-2xl sm:text-3xl md:text-4xl font-bold text-center'>OUR OFFICES</h2>
                    <div>
                        <Image 
                        src='/images/map.svg'
                        width={400}
                        height={300}
                        className='w-[90%] mx-auto py-20'
                        />
                    </div>
    </div>
  )
}

export default Offices
