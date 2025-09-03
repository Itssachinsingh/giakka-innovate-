import React from 'react';
import Image from 'next/image';
import { CustomButton } from './custom-button';
import MaxWidthWrapper from './max-width-wrapper';
const Footer = () => {
    return (

        <footer className="relative bg-[#0a101b] text-white pt-12 pb-8 overflow-hidden">
            <MaxWidthWrapper>
                {/* Faded background text - positioned at bottom with gradient fade */}
                <span className="absolute bottom-[-2.5rem] px-6 sm:px-10 lg:px-2  text-[200px] sm:text-[300px] md:text-[450px] font-bold text-white/5 pointer-events-none select-none leading-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                    Giakaa
                </span>

                {/* Subscribe section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 relative z-10">
                    <h2 className="text-md md:text-[32px] font-semibold">
                        Subscribe here to stay up-to-dated with us
                    </h2>
                    <div className="flex w-full md:w-1/2 gap-2">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full bg-[#ffff]/80 p-2 text-black"
                        />
                        <CustomButton href="#" variant="primary" target="_blank">
                            VIEW ALL
                        </CustomButton>
                    </div>
                </div>

                <hr className="border-gray-600 mb-10 relative z-10" />

                {/* Footer links - Full width spread */}
                <div className="relative z-10 mb-10">
                    <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-20 text-[16px] ">

                        {/* Social Media & Contact */}
                        <div className='w-fit'>
                            <h3 className="font-bold text-lg md:text-[32px] mb-4 leading-loose">Social Media</h3>
                            <div className="flex gap-2 mb-6">
                                <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded">X</div>
                                <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded">in</div>
                                <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded">T</div>
                            </div>

                            <h3 className="font-bold text-lg md:text-[32px] mb-2 ">Contact</h3>
                            <p className='text-[16px] leading-8 sm:leading-10'>+91 74899 76927</p>
                            <p className='text-[16px] leading-8 sm:leading-10'>info@gikaainnovate.com</p>
                            <p className='text-[16px] leading-8 sm:leading-10'>xyz, city, India</p>
                        </div>

                        {/* Services */}
                        <div className='w-fit'>
                            <h3 className="font-bold text-lg md:text-[32px] mb-4 leading-loose">Services</h3>
                            <ul className="space-y-2 text-sm leading-loose">
                                <li className='text-[16px] leading-8 sm:leading-10'>Market Entry & Growth</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Technology Commercialization & Transfer</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Joint Venture Investment Support</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Partnerships & Corporate Development</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Global Capability Centre Setup</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Innovation Financing</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Policy Advocacy & Government Relations</li>
                            </ul>
                        </div>

                        {/* Stakeholders */}
                        <div className='w-fit'>
                            <h3 className="font-bold text-lg md:text-[32px] mb-4 leading-loose">Stakeholders</h3>
                            <ul className="space-y-2 text-sm leading-loose">
                                <li className='text-[16px] leading-8 sm:leading-10'>Innovation Agencies</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Research Councils</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Universities</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Startups</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Investors</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Corporates</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Governments</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Trade Bodies</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className='w-fit'>
                            <h3 className="font-bold text-lg md:text-[32px] mb-4 leading-loose">Company</h3>
                            <ul className="space-y-2 text-sm leading-loose">
                                <li className='text-[16px] leading-8 sm:leading-10'>About us</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Insights</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Services</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Process</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Stakeholders</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Contact</li>
                                <li className='text-[16px] leading-8 sm:leading-10'>Career</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10'>
                    <p className="text-sm">
                        © 2025 Giakaainnovate, All Rights Reserved
                    </p>
                    <div className="flex gap-4 text-sm">
                        <span>Privacy Policy</span>
                        <span>Terms of Use</span>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>

    );
};

export default Footer;