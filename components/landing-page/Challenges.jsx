'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
const Challenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const stats = [
    { percentage: "82%", description: "of business leaders say cross-border complexity impacts their decision to sell to new markets" },
    { percentage: "15- 25%", description: "of university research successfully transitions to commercial applications" },
    { percentage: "60%- 70%", description: "of strategic partnerships fail to achieve their objectives" },
    { percentage: "10-15%", description: "increases in profitability seen by companies that prioritize quality control during scaling" },
    { percentage: "1.3- 3.3%", description: "Average US companies spend of their total wage bill on regulatory compliance" }
  ];

  const extendedStats = [...stats, ...stats, ...stats, ...stats, ...stats];

  useEffect(() => {
    setCurrentIndex(Math.floor(extendedStats.length / 2));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (currentIndex >= extendedStats.length - 5) {
      const timer = setTimeout(() => {
        setCurrentIndex(Math.floor(extendedStats.length / 2));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 4000);
    }, 4000);
  };

  const prevSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prev => prev - 1);
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 4000);
    }, 4000);
  };

  const getSlideStyle = (relativePosition) => {
    if (relativePosition < -2 || relativePosition > 2) {
      return {
        width: '200px',
        height: '390px',
        className: "opacity-0 scale-90 z-0",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-white text-xs"
      };
    } else if (relativePosition === 0) {
      return {
        width: '290px',
        height: '390px',
        className: "bg-[#01172E] shadow-2xl z-30 ml-[-3.2rem]",
        percentageClass: "text-[#00EB66] text-[80px]",
        descriptionClass: "text-white  text-base text-[20px]"
      };
    } else if (relativePosition === -1 || relativePosition === 1) {
      return {
        width: '190px',
        height: '260px',
        className: "bg-[#0A2540] shadow-lg z-20",
        percentageClass: "text-white text-[48px]",
        descriptionClass: "text-gray-300 text-sm"
      };
    } else if (relativePosition === -2 || relativePosition === 2) {
      return {
        width: '210px',
        height: '290px',
        className: "bg-[#0A2540] shadow-md z-10",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-gray-400 text-xs"
      };
    } else if (relativePosition === -3 || relativePosition === 3) {
      return {
        width: '190px',
        height: '260px',
        className: "bg-[#0A2540] shadow-lg z-20",
        percentageClass: "text-white text-[48px]",
        descriptionClass: "text-gray-300 text-sm"
      };
    } else if (relativePosition === -4 || relativePosition === 4) {
      return {
        width: '210px',
        height: '290px',
        className: "bg-[#0A2540] shadow-md z-10",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-gray-400 text-xs"
      };
    }
  };

  const renderCards = () => {
    return extendedStats.map((stat, index) => {
      const relativePosition = index - currentIndex;
      const style = getSlideStyle(relativePosition);

      if (!style) return null;

      return (
        <div
          key={index}
          className={`absolute top-1/2 left-[42%] flex flex-col items-center justify-center p-4 transition-all duration-800 ease-in-out ${style.className}`}
          style={{
            width: style.width,
            height: style.height,
            transform: `translateX(${relativePosition * 280}px) translateY(-50%)`,
            backfaceVisibility: 'hidden',
          }}
        >
          <div className={`font-bold ${style.percentageClass}`}>{stat.percentage}</div>
          <div className={`text-center mt-4 ${style.descriptionClass}`}>{stat.description}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items- justify-center px-4 sm:px-6 lg:px-20 mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" style={{ backgroundImage: "url('/images/challenge-bg.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <h2 className="text-[20px] font-bold text-secondary ">—<span className='mx-3'>CHALLENGES</span>—</h2>
      <h1 className='text-[64px] font-bold mb-4'>BUSINESS BUILDING IS COMPLEX.  <br /> SUCCESS SHOULDN'T BE.</h1>
      <div className="relative w-full h-[500px] overflow-hidden">


        {/* Cards */}
        <div className="relative w-full h-[55vh]">
          {renderCards()}
        </div>
        <div className='mb-20  px-10 '>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className=" transform -translate-y-1/2 z-40  mr-2 cursor-pointer hover:bg-gray-100 transition-all"
          >

            <Image
              src='/images/left.svg'
              width={300}
              height={200}
              className='w-10'
            />
          </button>
          <button
            onClick={nextSlide}
            className="transform -translate-y-1/2 z-40 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <Image
              src='/images/right.svg'
              width={300}
              height={200}
              className='w-10'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenges;