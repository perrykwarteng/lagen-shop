"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import GirlBanner from "../../../public/images/girl-banner.png";
import ManBanner from "../../../public/images/man-banner.png";
import SmallGirlBanner from "../../../public/images/small-girl-banner.png";
import Link from "next/link";

export const Hero = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    { img: GirlBanner, title: "Stylish Women's Collection" },
    { img: ManBanner, title: "Trendy Men's Fashion" },
    { img: SmallGirlBanner, title: "Cute Kidswear Collection" },
  ];

  return (
    <div
      ref={sliderRef}
      className="keen-slider w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] relative overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide relative w-full h-full flex items-center justify-center"
        >
          <Image
            src={slide.img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 sm:bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              {slide.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-white/10 backdrop-blur-sm text-sm sm:text-base border border-white/30 hover:bg-white hover:text-black transition duration-300 rounded-sm"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
