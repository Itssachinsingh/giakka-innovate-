'use client'
import { useState, useEffect } from "react";

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Ready to expand globally? Turn market uncertainty into your competitive advantage.",
      description: "Navigate complex international markets with confidence using our proven strategies and local expertise.",
      backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
      slideImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Transform challenges into opportunities across emerging markets.",
      description: "Leverage data-driven insights and regional partnerships to accelerate your international growth.",
      backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2870&q=80",
      slideImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Scale your business with strategic market intelligence and innovation.",
      description: "Build sustainable competitive advantages through localized solutions and cutting-edge technology.",
      backgroundImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2870&q=80",
      slideImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    setCurrentIndex(slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    }
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(slides.length + index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === (currentIndex % slides.length) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-32">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-between min-h-[70vh]">
            {/* Left Content - Text */}
            <div className="w-1/2 text-white pr-8 px-20">
              <div className="relative h-auto min-h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === (currentIndex % slides.length)
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-[-30px]'
                    }`}
                  >
                    <div className="w-full space-y-6">
                      <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        {slide.title}
                      </h2>
                      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <button className="bg-green-400 hover:bg-green-500 text-black px-8 py-3 rounded font-semibold text-lg transition-colors">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Infinite Slider */}
            <div className="w-[60%] flex justify-center items-center">
              <div className="relative w-full h-96 overflow-hidden">
                <div 
                  className={`flex items-center h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                  style={{ 
                    transform: `translateX(-${currentIndex * 350}px)`,
                  }}
                >
                  {extendedSlides.map((slide, index) => {
                    // Calculate which position this slide is currently in relative to the visible area
                    const relativePosition = index - currentIndex;
                    
                    // Determine styling based on position
                    let imageStyle = {};
                    let containerClass = "flex-shrink-0";
                    let imageClass = "";
                    
                    if (relativePosition === 0) {
                      // Main position (biggest with thick border)
                      imageStyle = { width: '280px', height: '222px' };
                      imageClass = "rounded-lg overflow-hidden border-4 border-white shadow-2xl";
                    } else if (relativePosition === 1) {
                      // Second position (medium)
                      imageStyle = { width: '200px', height: '160px' };
                      imageClass = "rounded-lg overflow-hidden border-2 border-white/40 shadow-lg";
                    } else if (relativePosition === 2) {
                      // Third position (smallest)
                      imageStyle = { width: '200px', height: '160px' };
                      imageClass = "rounded-lg overflow-hidden border border-white/20 shadow-md";
                    } else {
                      // Hidden positions (still need to render for sliding effect)
                      imageStyle = { width: '200px', height: '160px' };
                      imageClass = "rounded-lg overflow-hidden border border-white/20 shadow-md";
                    }
                    
                    return (
                      <div key={index} className={containerClass} style={{ width: '350px' }}>
                        <div className="flex items-center justify-start h-full">
                          <div className="relative mr-6">
                            <div 
                              className={`${imageClass} transition-all duration-1000 ease-in-out`} 
                              style={imageStyle}
                            >
                              <img
                                src={slide.slideImage}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === (currentIndex % slides.length)
                          ? 'bg-green-400 w-8'
                          : 'bg-white/40 hover:bg-white/60'
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