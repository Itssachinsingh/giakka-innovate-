'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
// Header component from your existing navbar
const Header = ({ bgColor, color, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "EXPERTIES", href: "EXPERTIES" },
    { label: "STAKEHOLDERS", href: "STAKEHOLDERS" },
    { label: "INSIGHTS", href: "INSIGHTS" },
    { label: "ABOUT", href: "ABOUT" },
  ];

  return (
    <nav className='absolute w-full px-4 sm:px-6 lg:px-20 py-3  z-50 bg-black/40'>
      <div className="max-w-8xl mx-auto flex items-center justify-between  py-4 max-w-[1600px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-sm font-semibold leading-tight">
            <Link href="/">
              <div className="text-2xl font-bold text-white">
                <Image 
                width={500}
                height={100}
                alt='giakka-innovate'
                src='/images/logo.png'
                className='w-50'
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm lg:text-[16px] font-medium transition-colors text-white hover:text-green-400"
            >
              {item.label}
            </Link>
          ))}


        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link href='https://lu.ma/5qyjg5pl'>
            <button className="bg-green-400 hover:bg-green-500 text-black text-[14px] lg:text-[16px] px-6 lg:px-8 py-2.5 lg:py-3 rounded font-semibold transition-colors">
              BOOK A CALL
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger / Close */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className='text-3xl text-white focus:outline-none transition-transform duration-300'
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-[100vh] text-black w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-[1000] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Icon inside panel */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-2xl focus:outline-none text-black"
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start px-6 space-y-4 h-[100vh]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-black hover:text-green-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href='/contact'
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-black hover:text-green-400 transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href='/media'
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-black hover:text-green-400 transition-colors"
          >
            MEDIA
          </Link>

          {/* Mobile Register Button */}
          <Link href='https://lu.ma/5qyjg5pl'>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-green-400 hover:bg-green-500 text-black text-[14px] px-6 py-2.5 rounded font-semibold transition-colors"
            >
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Dark overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};


export default Header;