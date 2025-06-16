"use client";

import Image from "next/image";

import CareLassImg from "../../../public/images/CarelessBanner.jpg";

export const CarefreeClassics = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <Image
          src={CareLassImg}
          alt="Carefree Classics Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold">
          CAREFREE CLASSICS
        </h1>
        <p className="text-white text-xl md:text-2xl mt-4">
          EVERYDAY ESSENTIALS
        </p>
        <p className="text-white text-lg md:text-xl mt-2">MELLOW OUTFITS</p>
      </div>
    </section>
  );
};
