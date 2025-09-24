"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// Apni images import karo

import Hero1 from "../components/asset/Hero_1.jpg";
import Hero2 from "../components/asset/Hero_2.jpg";
import Hero3 from "../components/asset/Hero_3.jpg";
import Hero4 from "../components/asset/Hero_4.jpg";

const images = [Hero1, Hero2, Hero3, Hero4];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Next image
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous image
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden  shadow-lg ">
      {/* Image */}
      <Image
        src={images[current]}
        alt="slider"
        className="w-full h-64 sm:h-80 md:h-130 object-cover transition-all duration-500"
      />

      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/4 left-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <FaArrowLeft />
      </button>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/4 right-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute top-50 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
