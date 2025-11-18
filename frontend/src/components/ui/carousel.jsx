import React, { useState, useEffect, useCallback, useRef } from "react";
import clsx from "clsx";

const animationStyles = {
  fade: "transition-opacity duration-700 ease-in-out",
  slide: "transition-transform duration-700 ease-in-out",
};

const Carousel = ({
  images,
  interval = 3000,
  className,
  priority = false,
  showIndicators = true,
  showNavigation = true,
  animationType = "slide", // "fade" | "slide"
  aspectRatio = "16 / 9",
  scrollControlled = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchCurrentRef = useRef({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const scrollLockRef = useRef(false);

  // ---- Helpers ----
  const getImageSource = (image) =>
    typeof image === "string" ? image : image?.image || image?.src || image?.url || "";
  const getImageAlt = (image, index) =>
    typeof image === "string" ? `Slide ${index + 1}` : image?.alt || `Slide ${index + 1}`;
  const getImageLink = (image) => (typeof image === "string" ? null : image?.link || null);

  // ---- Preload Images ----
  useEffect(() => {
    if (!images?.length) return;
    images.forEach((image, index) => {
      const img = new Image();
      img.src = getImageSource(image);
      img.onload = () => setImagesLoaded((prev) => ({ ...prev, [index]: true }));
    });
  }, [images]);

  // ---- Auto Slide ----
  const goToSlide = useCallback(
    (index) => {
      if (!images?.length || isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [images, isTransitioning]
  );

  const goToPrev = useCallback(() => {
    if (!images?.length) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const goToNext = useCallback(() => {
    if (!images?.length) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  useEffect(() => {
    if (!images?.length || scrollControlled || interval <= 0) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval, images, goToNext, scrollControlled]);

  const lockScroll = () => {
  scrollLockRef.current = true;
  setTimeout(() => {
    scrollLockRef.current = false;
  }, 600); // same as slide animation
};

  // ---- Touch Swipe ----
  const handleTouchStart = (e) => {
    const touch = e.targetTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    touchCurrentRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    touchCurrentRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartRef.current.x - touchCurrentRef.current.x;
    const deltaY = touchStartRef.current.y - touchCurrentRef.current.y;

    if (scrollControlled) {
      if (deltaY > 60 && currentIndex < images.length - 1) return goToNext();
      if (deltaY < -60 && currentIndex > 0) return goToPrev();
      return;
    }

    if (deltaX > 50) goToNext();
    if (deltaX < -50) goToPrev();
  };

  const handleWheel = useCallback(
  (event) => {
    if (!scrollControlled || !carouselRef.current || !images?.length) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Carousel is considered "active" only when centered
    const isCentered =
      rect.top <= viewportHeight * 0.45 &&
      rect.bottom >= viewportHeight * 0.55;

    if (!isCentered) return; // allow normal scrolling outside center zone

    // prevent spam
    if (scrollLockRef.current || isTransitioning) return;

    // DOWN scroll → next slide
    if (event.deltaY > 0 && currentIndex < images.length - 1) {
      event.preventDefault();
      goToNext();
      lockScroll();
    }

    // UP scroll → previous slide
    else if (event.deltaY < 0 && currentIndex > 0) {
      event.preventDefault();
      goToPrev();
      lockScroll();
    }
  },
  [
    scrollControlled,
    currentIndex,
    images?.length,
    isTransitioning,
    goToNext,
    goToPrev,
  ]
);

  useEffect(() => {
    if (!scrollControlled) return;
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollControlled, handleWheel]);

  // ---- Placeholder ----
  if (!images?.length) {
    return (
      <div className={clsx("relative w-full overflow-hidden bg-gray-200", className)}>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No banners available</p>
        </div>
      </div>
    );
  }

  // ---- Render ----
  return (
    <div
      ref={carouselRef}
      className={clsx(
        "relative w-full overflow-hidden select-none",
        className,
        isTransitioning && "pointer-events-none"
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ aspectRatio }}
    >
      {/* Slides */}
      <div
        className={clsx(
          "relative h-full flex",
          animationType === "slide" && "transition-transform duration-1000 ease-in-out"
        )}
        style={
          animationType === "slide"
            ? { transform: `translateX(-${currentIndex * 100}%)` }
            : {}
        }
      >
        {images.map((image, index) => {
          const isCurrent = index === currentIndex;
          const imageUrl = getImageSource(image);
          const imageLink = getImageLink(image);
          const imageAlt = getImageAlt(image, index);

          const slideContent = (
            <div
              className={clsx(
                "relative w-full h-full flex-shrink-0",
                animationType === "fade" &&
                  clsx(
                    "absolute inset-0",
                    animationStyles.fade,
                    isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                  )
              )}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                loading={index === 0 && priority ? "eager" : "lazy"}
                // fetchpriority={index === 0 && priority ? "high" : "auto"}
              />
            </div>
          );

          return imageLink ? (
            <a
              key={index}
              href={imageLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${imageLink}`}
              className="block h-full w-full"
            >
              {slideContent}
            </a>
          ) : (
            <React.Fragment key={index}>{slideContent}</React.Fragment>
          );
        })}
      </div>

      {/* Navigation */}
      {showNavigation && images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none",
                index === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
