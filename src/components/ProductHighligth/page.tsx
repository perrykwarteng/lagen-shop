"use client";

import Image from "next/image";
import One from "../../../public/images/One.jpg";
import Two from "../../../public/images/Two.jpg";
import Three from "../../../public/images/Three.jpg";

export const ProductHighlights = () => {
  const sections = [
    {
      img: One,
      title: "Where Dreams Meet Couture",
      button: "Shop Now",
    },
    {
      img: Two,
      title: "Enchanting Styles for Every Woman",
      button: "Shop Now",
    },
    {
      img: Three,
      title: "Chic Footwear for City Living",
      button: "Shop Now",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {sections.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};
