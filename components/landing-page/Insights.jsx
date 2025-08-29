import React from 'react'
import Image from 'next/image'
import { CustomButton } from '../ui/global/custom-button'
const Insights = () => {

    const blogs = [
        { title: 'Bitcoin Eyes $200K as Profit Metrics Turn Bullish', date: 'July 7, 2025', img: '/images/blog1.jpg' },
        { title: 'PI Network Price Analysis: $0.47 Support vs All-Time Low', date: 'July 6, 2025', img: '/images/blog2.jpg' },
        { title: 'Valhalla: Viking-Themed Web3 MMORPG Mainnet Launch', date: 'July 5, 2025', img: '/images/blog3.jpg' },
        { title: 'Innovation Financing Reshapes India’s Growth Trajectory', date: 'July 4, 2025', img: '/images/blog4.jpg' }
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-20 mx-auto my-10">
            <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>INSIGHTS</span>—</h2>

            <div className='flex flex-col sm:flex-row justify-between items-center mb-5'>
                <div>
                    <h1 className='lg:text-[84px] mt-10 lg:mt-3 text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>SEE THE LATEST UPDATES</h1>
                </div>
                <CustomButton href="#" variant="primary" target="_blank">
                    VIEW MORE
                </CustomButton>
            </div>
            {/* main */}
            <div className='flex flex-col md:flex-row gap-5'>
                {/* left side */}
                <div className='w-[100%] md:w-[50%] '>
                    <Image
                        src='/images/blog.jpg'
                        width={400}
                        height={350}
                        className='h-[500px] w-full'
                    />
                    <div>
                        <p className='my-4 text-[#000]/54 font-semibold'>JULY 4, 2025</p>
                        <h2 className='text-[32px] font-bold'>PI Network Price Analysis: $0.47 Support vs All-Time Low</h2>
                        <p className='text-[20px] mt-4 text-[#000]/56'>PI Network has maintained stability around the $0.47 price level over the past four days,
                            with bullish traders actively defending this crucial support zone. The token faces potential downside risk
                            toward its all-time low if this support fails to hold.</p>
                    </div>
                </div>

                {/* right side */}
                <div className='w-[100%] md:w-[50%] mt-8 md:mt-0'>
                    {blogs.map((item, index) => (
                        <div className={`flex flex-col sm:flex-row gap-5 ${index === 3 ? 'border-none' : 'border-b border-black'  }  ${index === 0 ? 'pb-5' : 'py-5'}`} key={index}>
                            <div className='w-[170px] h-[130px] shrink-0 overflow-hidden relative'>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="170px"
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <p className='text-[#000]/54 font-semibold  mb-4' >{item.date}</p>
                                <h2 className='text-[24px] font-semibold'>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Insights