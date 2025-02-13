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
    drag: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <Image
          src={GirlBanner}
          alt="banner one"
          className="h-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          src={ManBanner}
          alt="banner one"
          className="h-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="keen-slider__slide">
        <Image
          src={SmallGirlBanner}
          alt="banner one"
          className="h-full bg-cover bg-no-repeat"
        />
      </div>
    </div>
  );
};
