'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { CustomButton } from "../global/custom-button";

const MainCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Research complete. Now what? Transform your funded innovation into market success.",
      backgroundImage: "/images/slider1.jpg",
      slideImage: "/images/slider1.jpg"
    },
    {
      id: 2,
      title: "Ready to expand globally? Turn market uncertainty into your competitive advantage.",
      backgroundImage: "/images/slider2.jpg",
      slideImage: "/images/slider2.jpg"
    },
    {
      id: 3,
      title: "Policy changes everything. Navigate complexity with expert guidance",
      backgroundImage: "/images/slider3.jpg",
      slideImage: "/images/slider3.jpg"
    }
  ];

  // Optimized: Reduce repeats for better performance while maintaining smooth infinite scroll
  const createInfiniteSlides = useMemo(() => {
    const repeats = 15; // Reduced from 40 to 15 for better performance
    const infiniteSlides = [];
    for (let i = 0; i < repeats; i++) {
      slides.forEach((slide, index) => {
        infiniteSlides.push({
          ...slide,
          uniqueId: `${slide.id}-${i}-${index}`,
          originalIndex: index,
          copyIndex: i
        });
      });
    }
    return infiniteSlides;
  }, []);

  // Initialize at middle position
  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(createInfiniteSlides.length / 2)
  );
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Optimized cleanup function
  const clearAllTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Optimized auto-advance with smoother transitions
  const startAutoAdvance = useCallback(() => {
    clearAllTimers();
    
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex(prev => {
          const next = prev + 1;
          // Reset position more smoothly when reaching end
          if (next >= createInfiniteSlides.length - 8) {
            return Math.floor(createInfiniteSlides.length / 3);
          }
          return next;
        });
      }
    }, 3500); // Slightly increased interval for smoother experience
  }, [createInfiniteSlides.length, isTransitioning]);

  useEffect(() => {
    startAutoAdvance();
    return clearAllTimers;
  }, [startAutoAdvance, clearAllTimers]);

  // Optimized slide navigation with better transition handling
  const goToSlide = useCallback((targetIndex) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    clearAllTimers();

    // Find closest instance of target slide
    const currentPos = currentIndex;
    let closestIndex = -1;
    let minDistance = Infinity;

    createInfiniteSlides.forEach((slide, index) => {
      if (slide.originalIndex === targetIndex) {
        const distance = Math.abs(index - currentPos);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== -1) {
      setCurrentIndex(closestIndex);
    }

    // Optimized timeout handling
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      startAutoAdvance();
    }, 1000);

  }, [currentIndex, createInfiniteSlides, startAutoAdvance, clearAllTimers, isTransitioning]);

  // Debounced navigation
  const debouncedGoToSlide = useCallback(
    debounce(goToSlide, 150),
    [goToSlide]
  );

  // Optimized slide styling with better mobile responsiveness
  const getSlideStyle = useCallback((index) => {
    const relativePosition = index - currentIndex;

    if (relativePosition === 0) {
      return {
        width: 'w-72 sm:w-80 md:w-[360px]',
        height: 'h-40 sm:h-48 md:h-[220px]',
        className: "overflow-hidden rounded border-2 sm:border-[3px] border-white shadow-2xl transform scale-100",
        zIndex: 30
      };
    } else if (relativePosition === 1) {
      return {
        width: 'w-48 sm:w-56 md:w-60',
        height: 'h-32 sm:h-36 md:h-40',
        className: "overflow-hidden rounded border-none shadow-lg transform scale-95",
        zIndex: 20
      };
    } else if (relativePosition === 2) {
      return {
        width: 'w-48 sm:w-56 md:w-60',
        height: 'h-32 sm:h-36 md:h-40',
        className: "overflow-hidden rounded border-none shadow-md transform scale-90",
        zIndex: 10
      };
    } else {
      return {
        width: 'w-48 sm:w-56 md:w-60',
        height: 'h-32 sm:h-36 md:h-40',
        className: "overflow-hidden rounded shadow-md opacity-30 transform scale-85",
        zIndex: 5
      };
    }
  }, [currentIndex]);

  const getCurrentSlide = useCallback(() => {
    const currentSlide = createInfiniteSlides[currentIndex];
    return currentSlide ? slides[currentSlide.originalIndex] : slides[0];
  }, [createInfiniteSlides, currentIndex]);

  const currentSlide = getCurrentSlide();

  // Calculate responsive transform value
  const getTransformValue = () => {
    // Responsive slide spacing
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
    
    let spacing = 350;
    if (isMobile) spacing = 200;
    else if (isTablet) spacing = 280;
    
    return currentIndex * spacing;
  };

  return (
    <div className="relative max-h-[110vh] overflow-hidden w-full">
      {/* Optimized Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === (createInfiniteSlides[currentIndex]?.originalIndex || 0) 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <Image
              width={1920}
              height={1080}
              src={slide.backgroundImage}
              alt=""
              className="w-full h-full object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-end justify-center md:justify-between min-h-[70vh]">
            {/* Left Content - Text */}
            <div className="w-[95%] sm:w-[85%] lg:w-1/2 text-white px-4 sm:px-6 lg:px-8 xl:px-20 mb-8 lg:mb-0">
              <div className="relative h-auto min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute top-[30%] sm:top-[15%] lg:top-[20%] transition-all duration-1000 ease-in-out ${
                      index === (createInfiniteSlides[currentIndex]?.originalIndex || 0)
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  >
                    <div className="w-full space-y-4 sm:space-y-6">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-6 sm:mb-8 font-medium">
                        {slide.title}
                      </h2>
                      <CustomButton href="#" variant="primary" target="_blank">
                        LEARN MORE
                      </CustomButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Optimized Infinite Slider */}
            <div className="w-[95%] sm:w-[90%] lg:w-[60%] flex justify-center items-center">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden pl-4 sm:pl-6 lg:pl-8">
                <div
                  ref={containerRef}
                  className="flex items-center h-full transition-transform duration-1000 ease-in-out will-change-transform"
                  style={{
                    transform: `translateX(-${getTransformValue()}px)`,
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                  }}
                >
                  {createInfiniteSlides.map((slide, index) => {
                    const slideStyle = getSlideStyle(index);
                    
                    return (
                      <div
                        key={slide.uniqueId}
                        className="flex-shrink-0 px-2 sm:px-3"
                        style={{ 
                          width: typeof window !== 'undefined' && window.innerWidth < 640 ? '200px' : 
                                 typeof window !== 'undefined' && window.innerWidth < 1024 ? '280px' : '350px'
                        }}
                      >
                        <div className="flex items-center justify-end h-full ">
                          <div className="relative mr-0">
                            <div
                              className={`${slideStyle.width} ${slideStyle.height} ${slideStyle.className} 
                                transition-all duration-1000 ease-in-out will-change-transform`}
                              style={{
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                                zIndex: slideStyle.zIndex
                              }}
                            >
                              <Image
                                width={400}
                                height={300}
                                src={slide.slideImage}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                                style={{
                                  transform: 'translateZ(0)',
                                  backfaceVisibility: 'hidden'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optimized Navigation Dots */}
                <div className="absolute bottom-0 left-1/2 sm:left-[40%] md:left-[25%] lg:left-[15%] xl:left-[10%] 
                              transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => debouncedGoToSlide(index)}
                      disabled={isTransitioning}
                      className={`w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 transition-all duration-300 
                                disabled:cursor-not-allowed hover:scale-110 ${
                        index === (createInfiniteSlides[currentIndex]?.originalIndex || 0)
                          ? 'bg-white shadow-lg'
                          : 'bg-white/30 border border-white/60 hover:border-white hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Optimized debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default MainCarousel;