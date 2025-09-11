'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../global/max-width-wrapper';

const Challenges = () => {
  const intervalRef = useRef(null);

  const stats = [
    { percentage: "82%", description: "of business leaders say cross-border complexity impacts their decision to sell to new markets" },
    { percentage: "15-25%", description: "of university research successfully transitions to commercial applications" },
    { percentage: "60%-  70%", description: "of strategic partnerships fail to achieve their objectives" },
    { percentage: "10-15%", description: "increases in profitability seen by companies that prioritize quality control during scaling" },
    { percentage: "1.3-3.3%", description: "Average US companies spend of their total wage bill on regulatory compliance" }
  ];

  // Create more repetitions for truly infinite scrolling
  const createInfiniteStats = () => {
    const repetitions = 20;
    const infiniteStats = [];
    for (let i = 0; i < repetitions; i++) {
      stats.forEach((stat, index) => {
        infiniteStats.push({
          ...stat,
          uniqueId: `${index}-${i}`,
          originalIndex: index,
          targetPosition: index // This represents the intended position (0, ±1, ±2, etc.)
        });
      });
    }
    return infiniteStats;
  };

  const infiniteStats = createInfiniteStats();

  // Initialize at middle position to avoid initial jump
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(infiniteStats.length / 2));

  // Add state to track previous index to determine transition direction
  const [prevIndex, setPrevIndex] = useState(() => Math.floor(infiniteStats.length / 2));

  const startTransition = () => {
    // Don't use isTransitioning state - let styles change immediately
    setPrevIndex(currentIndex);
  };

  const clearAllTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    clearAllTimers();
    intervalRef.current = setInterval(() => {
      startTransition();
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= infiniteStats.length - 10) {
          return Math.floor(infiniteStats.length / 3);
        }
        return next;
      });
    }, 4000);
  }, [infiniteStats.length, clearAllTimers]);

  useEffect(() => {
    startAutoSlide();
    return clearAllTimers;
  }, [startAutoSlide, clearAllTimers]);

  const nextSlide = useCallback(() => {
    clearAllTimers();
    startTransition();

    setCurrentIndex(prev => {
      const next = prev + 1;
      if (next >= infiniteStats.length - 10) {
        return Math.floor(infiniteStats.length / 3);
      }
      return next;
    });

    setTimeout(() => {
      startAutoSlide();
    }, 4000);
  }, [infiniteStats.length, startAutoSlide, clearAllTimers]);

  const prevSlide = useCallback(() => {
    clearAllTimers();
    startTransition();

    setCurrentIndex(prev => {
      const prev_index = prev - 1;
      if (prev_index <= 10) {
        return Math.floor(infiniteStats.length * 2 / 3);
      }
      return prev_index;
    });

    setTimeout(() => {
      startAutoSlide();
    }, 4000);
  }, [infiniteStats.length, startAutoSlide, clearAllTimers]);

  // Smart default style - uses medium values to minimize transitions
  const defaultCardStyle = {
    width: '190px',
    height: '250px',
    className: "bg-[#0A2540] shadow-md z-15", // Medium styling
    percentageClass: "text-white text-[48px]", // Medium text size (between 48px and 80px)
    descriptionClass: "text-gray-400 text-sm"  // Medium gray
  };

  const getFinalCardStyle = (targetPosition) => {
    if (targetPosition < -2 || targetPosition > 2) {
      return {
        width: '190px',
        height: '290px',
        className: "opacity-0 scale-90 z-0",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-white text-xs"
      };
    } else if (targetPosition === 0) {
      return {
        width: '270px',
        height: '390px',
        className: "bg-[#01172E] shadow-2xl z-30",
        percentageClass: "text-[#00EB66] text-[80px]",
        descriptionClass: "text-white text-base text-[20px]"
      };
    } else if (targetPosition === -1 || targetPosition === 1) {
      return defaultCardStyle; // Already the right style
    } else if (targetPosition === -2 || targetPosition === 2) {
      return {
        width: '210px',
        height: '290px',
        className: "bg-[#0A2540] shadow-md z-10",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-gray-400 text-xs"
      };
    } else if (targetPosition === -3 || targetPosition === 3) {
      return defaultCardStyle; // Use default style
    } else if (targetPosition === -4 || targetPosition === 4) {
      return {
        width: '210px',
        height: '290px',
        className: "bg-[#0A2540] shadow-md z-10",
        percentageClass: "text-white text-[60px]",
        descriptionClass: "text-gray-400 text-xs"
      };
    }
    return defaultCardStyle; // Fallback to default
  };

  return (
    <div
      className="flex flex-col  justify-center px-4 sm:px-6 lg:px-20 mx-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6"
      style={{
        backgroundImage: "url('/images/challenge-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MaxWidthWrapper>
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-secondary mb-4 text-center sm:text-start">
          —<span className='mx-3 '> CHALLENGES</span>—
        </h2>
        <h1 className='lg:text-[64px] text-3xl md:text-4xl  font-bold mb-4 text-center sm:text-start'>
          BUSINESS BUILDING IS COMPLEX.<br />
          SUCCESS SHOULDN'T BE.
        </h1>
      </div>

      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Debug info */}
        {/* <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
          Current: {currentIndex} | Total: {infiniteStats.length}
        </div> */}

        {/* Cards Container */}
        <div className="relative w-full h-full">
          {/* Render visible range around current index */}
          {infiniteStats.slice(Math.max(0, currentIndex - 4), currentIndex + 5).map((stat, localIndex) => {
            const actualIndex = Math.max(0, currentIndex - 4) + localIndex;
            const relativePosition = actualIndex - currentIndex;

            // Always use final style - no transition delay
            const style = getFinalCardStyle(relativePosition);

            if (Math.abs(relativePosition) > 4) return null;

            return (
              <div
                key={stat.uniqueId}
                className={`absolute top-1/2 left-1/2 flex flex-col items-center justify-center p-4 transition-all duration-800 ease-in-out ${style.className}`}
                style={{
                  width: style.width,
                  height: style.height,
                  transform: `translateX(${relativePosition * 260}px) translateY(-50%) translateX(-50%)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className={`font-bold transition-all duration-800 ease-in-out ${style.percentageClass}`}>
                  {stat.percentage}
                </div>
                <div className={`text-center mt-4 transition-all duration-800 ease-in-out ${style.descriptionClass}`}>
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 flex ">
          <button
            onClick={prevSlide}
            className="cursor-pointer hover:bg-gray-100 transition-all p-2 rounded"
          >
            <Image
              src='/images/left.svg'
              width={40}
              height={40}
              alt="Previous"
              className='w-10'
            />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer hover:bg-gray-100 transition-all p-2 rounded"
          >
            <Image
              src='/images/right.svg'
              width={40}
              height={40}
              alt="Next"
              className='w-10'
            />
          </button>
        </div>
      </div>
</MaxWidthWrapper>

    </div>
  );
};

export default Challenges;