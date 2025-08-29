import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='h-[480px] bg-[#01172E] flex justify-start items-end px-4 sm:px-6 lg:px-20 py-40'  style={{
            backgroundImage: "url('/images/contact-bg.png')", 
            backgroundPosition: 'center',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            <h1 className=' lg:text-[84px] text-3xl sm:text-4xl md:text-5xl text-white font-bold'>CONTACT US</h1>
            </div>
    </div>
  )
}

export default Hero