"use client";

import { useState, useEffect, useCallback } from "react";
import "./../styles/globals.css";

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  const images = [
    { src: "cafeteria-products.jpg", alt: "Cafe Products" },
    { src: "men-prepare.jpg", alt: "Men Coffee" },
    { src: "croissant.jpg", alt: "Croissant" },
    { src: "coffee-machine.jpg", alt: "Coffee Machine" },
    { src: "tapas-espanholas.jpg", alt: "Tapas Espanholas" },
  ];

  useEffect(() => {
    const loadStatus = new Array(images.length).fill(false);
    setLoadedImages(loadStatus);

    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning, currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image.src}
              alt={image.alt}
              className={`carousel-image ${
                loadedImages[index] ? "loaded" : ""
              }`}
              loading="eager"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="carousel-button carousel-button-prev"
        aria-label="Slide anterior"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="carousel-button carousel-button-next"
        aria-label="Próximo slide"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
