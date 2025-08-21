"use client";

import Layout from "@/components/Layout/layout";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard/page";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Shop() {
  const [activeNav, setActiveNav] = useState<"women" | "men" | "kids" | null>(
    null
  );
  const [mobileNav, setMobileNav] = useState<"women" | "men" | "kids" | null>(
    null
  );

  const handleMouseEnter = (category: "women" | "men" | "kids") => {
    setActiveNav(category);
  };

  const handleMouseLeave = () => {
    setActiveNav(null);
  };

  const handleMobileNavClick = (category: "women" | "men" | "kids") => {
    setMobileNav(mobileNav === category ? null : category);
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
            <div 
              className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0"
              onClick={() => handleMobileNavClick("women")}
            >
              <Image
                className="w-4 sm:w-5"
                src="/icons/womenClothing.png"
                alt="womens clothing"
                unoptimized
              />
              <h4 className="text-sm sm:text-base">Women Clothing</h4>
              {/* Mobile dropdown arrow */}
              <button className="md:hidden p-1 ml-2">
                {mobileNav === "women" ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
              </button>
            </div>
            
            {/* Desktop submenu */}
            {activeNav === "women" && (
              <div className="absolute top-full p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none md:block">
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

            {/* Mobile submenu */}
            {mobileNav === "women" && (
              <div className="md:hidden mt-2 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-r-lg">
                <div className="p-4 space-y-3">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">All Women's</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Dresses</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Tops</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Bottoms</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Jumpsuits & Playsuits</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Co-Ords & Sets</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Bodysuits</Link>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Skirts</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Jackets</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Hoodies & Jumpers</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Swimwear</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Lingerie & Sleepwear</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Underwear</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* MEN CLOTHING */}
          <div
            className="flex flex-col justify-center relative z-30 w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("men")}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0"
              onClick={() => handleMobileNavClick("men")}
            >
              <Image className="w-4 sm:w-5" src="/icons/mensClothing.png" alt="mens clothing" width={20} height={20} unoptimized />
              <h4 className="text-sm sm:text-base">Men Clothing</h4>
              {/* Mobile dropdown arrow */}
              <button className="md:hidden p-1 ml-2">
                {mobileNav === "men" ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
              </button>
            </div>
            
            {/* Desktop submenu */}
            {activeNav === "men" && (
              <div className="absolute top-full left-0 p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none md:block">
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

            {/* Mobile submenu */}
            {mobileNav === "men" && (
              <div className="md:hidden mt-2 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-r-lg">
                <div className="p-4 space-y-3">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">All Mens</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Jackets</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Tops</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Bottoms</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Co-Ords & Sets</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Hoodies & Jumpsuits</Link>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Boxers & Briefs</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">Swimwear</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* KIDS CLOTHING */}
          <div
            className="flex flex-col justify-center relative z-30 w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("kids")}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex items-center justify-center gap-1.5 cursor-pointer py-2 md:py-0"
              onClick={() => handleMobileNavClick("kids")}
            >
              <Image className="w-4 sm:w-5" src="/icons/kidsClothing.png" alt="kids clothing" width={20} height={20} unoptimized />
              <h4 className="text-sm sm:text-base">Kids Clothing</h4>
              {/* Mobile dropdown arrow */}
              <button className="md:hidden p-1 ml-2">
                {mobileNav === "kids" ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
              </button>
            </div>
            
            {/* Desktop submenu */}
            {activeNav === "kids" && (
              <div className="absolute top-full left-0 p-4 sm:p-6 z-40 flex flex-col md:flex-row items-start gap-3 sm:gap-5 w-full md:w-screen bg-white border-b border-gray-200 md:border-none md:block">
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

            {/* Mobile submenu */}
            {mobileNav === "kids" && (
              <div className="md:hidden mt-2 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-r-lg">
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">All Kids</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">3 - 5 years</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">5 - 7 years</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">7 - 10 years</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-gray-600 block py-2 px-2 rounded hover:bg-white">10 - 13 years</Link>
                    </li>
                  </ul>
                </div>
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
              image="/images/a1.jpg"
              title="Elegant Wrap Cardigan"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/c2.jpg"
              title="Soft Touch Sweatshirt"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/c3.jpg"
              title="Urban Zip-Up Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/c4.jpg"
              title="Minimalist Crewneck Pullover"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/a5.jpg"
              title="Lightweight Lounge Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/a6.jpg"
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
