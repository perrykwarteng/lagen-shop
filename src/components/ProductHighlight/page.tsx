"use client";

import Image from "next/image";
import One from "../../../public/images/One.jpg";
import Two from "../../../public/images/Two.jpg";
import Three from "../../../public/images/Three.jpg";
import Link from "next/link";

export const ProductHighlights = () => {
  const sections = [
    {
      img: One,
      title: "Where Dreams Meet Couture",
      button: "Shop Now",
      link: "/shop",
    },
    {
      img: Two,
      title: "Enchanting Styles for Every Woman",
      button: "Collections",
      link: "/collections/stella",
    },
    {
      img: Three,
      title: "Chic Footwear for City Living",
      button: "Accessories",
      link: "/accessories",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6">
      {sections.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-black/30 sm:bg-black/40 flex flex-col items-center justify-center text-center px-3 sm:px-4">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 leading-tight">
              {item.title}
            </h2>
            <Link
              href={item.link}
              className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-white/10 backdrop-blur-sm text-sm sm:text-base border border-white/30 hover:bg-white hover:text-black transition duration-300 rounded-sm"
            >
              {item.button}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
