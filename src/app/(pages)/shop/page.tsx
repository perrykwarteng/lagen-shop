"use client";

import Layout from "@/components/Layout/layout";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import MensClothing from "../../../../public/icons/mensClothing.png";
import WomensClothing from "../../../../public/icons/womenClothing.png";
import KidsClothing from "../../../../public/icons/kidsClothing.png";
import { ProductCard } from "@/components/ProductCard/page";
import PictureOne from "../../../../public/images/a1.jpg";
import PictureFive from "../../../../public/images/a5.jpg";
import PictureSix from "../../../../public/images/a6.jpg";
import PictureTwo from "../../../../public/images/c2.jpg";
import PictureThree from "../../../../public/images/c3.jpg";
import PictureFour from "../../../../public/images/c4.jpg";

export default function Shop() {
  const [activeNav, setActiveNav] = useState<"women" | "men" | "kids" | null>(
    null
  );

  const handleMouseEnter = (category: "women" | "men" | "kids") => {
    setActiveNav(category);
  };

  const handleMouseLeave = () => {
    setActiveNav(null);
  };

  return (
    <Layout>
      <div className="relative">
        {activeNav && (
          <div className="absolute top-full left-0 w-screen h-[300px] bg-white border-b border-black z-10 hidden md:block"></div>
        )}

        {/* MAIN NAVIGATION BAR */}
        <div className="px-4 sm:px-5 md:px-10 py-3 flex flex-col md:flex-row items-start border-b border-black justify-around gap-4 md:gap-10 list-none w-full bg-white shadow-md z-20 relative">
          {/* WOMEN CLOTHING */}
          <div
            className="flex flex-col justify-center relative z-30 w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("women")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0">
              <Image
                className="w-4 sm:w-5"
                src={WomensClothing}
                alt="womens clothing"
                unoptimized
              />
              <h4 className="text-sm sm:text-base">Women Clothing</h4>
            </div>
            {activeNav === "women" && (
              <div className="absolute top-full p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none">
                <ul className="w-full md:w-auto">
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">All Women's</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Dresses</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Tops</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Bottoms</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Jumpsuits & Playsuits</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Co-Ords & Sets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Bodysuits</Link>
                  </li>
                </ul>
                <ul className="w-full md:w-auto">
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Skirts</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Jackets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Hoodies & Jumpers</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Swimwear</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Lingerie & Sleepwear</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Underwear</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* MEN CLOTHING */}
          <div
            className="flex flex-col justify-center relative z-30 w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("men")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0">
              <Image className="w-4 sm:w-5" src={MensClothing} alt="mens clothing" unoptimized />
              <h4 className="text-sm sm:text-base">Men Clothing</h4>
            </div>
            {activeNav === "men" && (
              <div className="absolute top-full left-0 p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none">
                <ul className="w-full md:w-auto">
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">All Mens</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Jackets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Tops</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Bottoms</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Co-Ords & Sets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Hoodies & Jumpsuits</Link>
                  </li>
                </ul>
                <ul className="w-full md:w-auto">
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Boxers & Briefs</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">Swimwear</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* KIDS CLOTHING */}
          <div
            className="flex flex-col justify-center relative z-30 w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("kids")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0">
              <Image className="w-4 sm:w-5" src={KidsClothing} alt="kids clothing" unoptimized />
              <h4 className="text-sm sm:text-base">Kids Clothing</h4>
            </div>
            {activeNav === "kids" && (
              <div className="absolute top-full left-0 p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none">
                <ul className="w-full md:w-auto">
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">All Kids</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">3 - 5 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">5 - 7 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">7 - 10 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#" className="text-sm hover:text-gray-600 block py-1">10 - 13 years</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SHOP SECTION TITLE */}
      <div className="mt-6 sm:mt-8 md:mt-10 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#333334] font-semibold">SHOP</h2>
      </div>

      {/* PRODUCTS */}
      <div className="my-12 sm:my-16 md:my-20 lg:my-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
            <ProductCard
              image={PictureOne}
              title="Elegant Wrap Cardigan"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureTwo}
              title="Soft Touch Sweatshirt"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureThree}
              title="Urban Zip-Up Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureFour}
              title="Minimalist Crewneck Pullover"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureFive}
              title="Lightweight Lounge Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureSix}
              title="Classic Cotton Sweatshirt"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
          </div>
        </div>

        {/* LOAD MORE BUTTON */}
        <div className="flex items-center justify-center mt-8 sm:mt-10">
          <button className="border-2 border-black bg-white px-8 sm:px-12 md:px-16 lg:px-20 py-3 text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base">
            LOAD MORE
          </button>
        </div>
      </div>

      {activeNav && (
        <div className="fixed top-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm -z-0 hidden md:block"></div>
      )}
    </Layout>
  );
}
