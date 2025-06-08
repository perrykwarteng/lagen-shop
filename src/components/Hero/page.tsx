"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import GirlBanner from "../../../public/images/girl-banner.png";
import ManBanner from "../../../public/images/man-banner.png";
import SmallGirlBanner from "../../../public/images/small-girl-banner.png";

export const Hero = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    mode: "free-snap",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
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
      className="keen-slider w-full h-[85vh] relative overflow-hidden rounded-xl"
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex items-center justify-center text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold px-6">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};
