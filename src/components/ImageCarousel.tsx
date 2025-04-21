
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  url: string;
  title: string;
  subtitle: string;
}

interface ImageCarouselProps {
  slides: Slide[];
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  slides, 
  autoplayInterval = 5000
}) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    // Pause autoplay temporarily when manually changing slide
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [current, isAutoPlaying, autoplayInterval]);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // If swipe distance is significant enough (> 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next slide
        nextSlide();
      } else {
        // Swipe right, go to previous slide
        prevSlide();
      }
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.url})`,
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-in-out"
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h2 
              className={`text-3xl md:text-5xl lg:text-6xl font-serif mb-4 transition-all duration-1000 
                ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "300ms" }}
            >
              {slide.title}
            </h2>
            <p 
              className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 
                ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "500ms" }}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
