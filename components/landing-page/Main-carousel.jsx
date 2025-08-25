'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CustomButton } from "../ui/global/custom-button";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Research complete. Now what? Transform your funded innovation into market success.",
      backgroundImage: "/images/slider1.png",
      slideImage: "/images/slider1.png"
    },
    {
      id: 2,
      title: "Ready to expand globally? Turn market uncertainty into your competitive advantage.",
      backgroundImage: "/images/slider2.png",
      slideImage: "/images/slider2.png"
    },
    {
      id: 3,
      title: "Policy changes everything. Navigate complexity with expert guidance",
      backgroundImage: "/images/slider3.png",
      slideImage: "/images/slider3.png"
    }
  ];

  // Create a much larger array for truly infinite scrolling
  const createInfiniteSlides = () => {
    const repeats = 40; // Create 20 copies for smooth infinite scroll
    const infiniteSlides = [];
    for (let i = 0; i < repeats; i++) {
      slides.forEach((slide, index) => {
        infiniteSlides.push({
          ...slide,
          uniqueId: `${slide.id}-${i}-${index}`, // Unique ID for each instance
          originalIndex: index,
          copyIndex: i
        });
      });
    }
    return infiniteSlides;
  };

  const infiniteSlides = createInfiniteSlides();

  useEffect(() => {
    // Start from a middle position to allow smooth infinite scrolling
    setCurrentIndex(Math.floor(infiniteSlides.length / 2));
  }, [infiniteSlides.length]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        // When we reach near the end, smoothly continue (no reset needed)
        if (next >= infiniteSlides.length - 10) {
          // Smoothly jump to middle again, but this happens so rarely it's not noticeable
          return Math.floor(infiniteSlides.length / 3);
        }
        return next;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [infiniteSlides.length]);

  const goToSlide = (targetIndex) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Find the closest instance of the target slide
    const currentPos = currentIndex;
    let closestIndex = -1;
    let minDistance = Infinity;

    infiniteSlides.forEach((slide, index) => {
      if (slide.originalIndex === targetIndex) {
        const distance = Math.abs(index - currentPos);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    setCurrentIndex(closestIndex);

    // Restart auto-advance
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const next = prev + 1;
          if (next >= infiniteSlides.length - 10) {
            return Math.floor(infiniteSlides.length / 3);
          }
          return next;
        });
      }, 3000);
    }, 3000);
  };

  // Get slide styling based on relative position
  const getSlideStyle = (index) => {
    const relativePosition = index - currentIndex;

    if (relativePosition === 0) {
      return {
        width: '360px',
        height: '220px',
        className: " overflow-hidden rounded border-4 border-white shadow-2xl"
      };
    } else if (relativePosition === 1) {
      return {
        width: '240px',
        height: '160px',
        className: " overflow-hidden rounded shadow-lg"
      };
    } else if (relativePosition === 2) {
      return {
        width: '240px',
        height: '160px',
        className: " overflow-hidden rounded shadow-md"
      };
    } else {
      return {
        width: '240px',
        height: '160px',
        className: " overflow-hidden rounded shadow-md opacity-30"
      };
    }
  };

  // Get current slide for background/text
  const getCurrentSlide = () => {
    const currentSlide = infiniteSlides[currentIndex];
    return currentSlide ? slides[currentSlide.originalIndex] : slides[0];
  };

  const currentSlide = getCurrentSlide();

  return (
    <div className="relative max-h-[110vh] overflow-hidden w-full">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === (infiniteSlides[currentIndex]?.originalIndex || 0) ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              width={700}
              height={250}
              src={slide.backgroundImage}
              alt=""
              className="w-[100%] h-full object-cover "
              
            />
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
  </div>


))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-32">
        <div className="mx-auto w-full ">
          <div className="flex items-end justify-between min-h-[70vh]">
            {/* Left Content - Text */}
            <div className="w-1/2 text-white pr-8 px-20">
              <div className="relative h-auto min-h-[400px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute top-[20%] transition-all duration-1000 ease-in-out ${index === (infiniteSlides[currentIndex]?.originalIndex || 0)
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-8 pointer-events-none'
                      }`}
                  >
                    <div className="w-full space-y-6">
                      <h2 className="text-2xl lg:text-4xl leading-tight mb-8">
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

            {/* Right Content - Infinite Slider */}
            <div className="w-[60%] flex justify-center items-center">
              <div className="relative w-full h-96 overflow-hidden pl-8">
                <div
                  className="flex items-center h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 350}px)`,
                  }}
                >
                  {infiniteSlides.map((slide, index) => {
                    const slideStyle = getSlideStyle(index);

                    return (
                      <div
                        key={slide.uniqueId}
                        className="flex-shrink-0"
                        style={{ width: '350px' }}
                      >
                        <div className="flex items-center justify-end  h-full ">
                          <div className="relative mr-6">
                            <div
                              className={`${slideStyle.className} transition-all duration-1000 ease-in-out`}
                              style={{
                                width: slideStyle.width,
                                height: slideStyle.height,
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden'
                              }}
                            >
                              <Image
                                width={300}
                                height={250}
                                src={slide.slideImage}
                                alt=""
                                className="w-full h-full object-cover"
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

                {/* Navigation Dots */}
                <div className="absolute bottom-0 left-[10%] transform -translate-x-1/2 flex justify-center space-x-3 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-12 h-3  transition-all duration-300 ${index === (infiniteSlides[currentIndex]?.originalIndex || 0)
                        ? 'bg-white'
                        : 'bg-transparent border border-white/60 hover:border-white'
                        }`}
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

export default MainCarousel;