"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShopNav } from "../ShopNav/page";
import { useState } from "react";

export const MenuList = () => {
  const pathName = usePathname();
  const [isHoveringShop, setIsHoveringShop] = useState(false);
  const [isHoveringCollection, setIsHoveringCollection] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:justify-between list-none gap-3 relative">
      {/* HOME */}
      <li className={pathName === "/" ? "active border-b-2 border-black" : ""}>
        <Link
          href="/"
          className="text-xs sm:text-sm font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          HOME
        </Link>
      </li>

      {/* SHOP */}
      <li
        className={`relative ${
          pathName === "/shop" ? "active border-b-2 border-black" : ""
        }`}
        onMouseEnter={() => pathName !== "/shop" && setIsHoveringShop(true)}
        onMouseLeave={() => pathName !== "/shop" && setIsHoveringShop(false)}
      >
        <Link
          href="/shop"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Shop
        </Link>

        {/* Only show mega nav if NOT on /shop */}
        {isHoveringShop && pathName !== "/shop" && (
          <div className="absolute -left-36 top-full w-screen z-50 hidden md:block">
            <ShopNav />
          </div>
        )}
      </li>

      {/* COLLECTION */}
      <li
        className={`relative ${
          pathName === "/collections" ? "active border-b-2 border-black" : ""
        }`}
        onMouseEnter={() => pathName !== "/collections" && setIsHoveringCollection(true)}
        onMouseLeave={() => pathName !== "/collections" && setIsHoveringCollection(false)}
      >
        <Link
          href="/collections"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Collections
        </Link>

        {/* Only show mega nav if NOT on /collections */}
        {isHoveringCollection && pathName !== "/collections" && (
          <div className="absolute -left-36 top-full w-screen z-50 hidden md:block">
            <div className="w-full bg-white border mt-3 py-10 px-6">
              <div className="max-w-7xl mx-auto flex justify-center gap-12">
                <div className="min-w-[200px]">
                  <h3 className="text-lg font-bold mb-4">Featured Collections</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="#" className="text-gray-800 text-sm hover:text-black">
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-800 text-sm hover:text-black">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-800 text-sm hover:text-black">
                        Seasonal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* LOOKBOOK */}
      <li className={pathName === "/lookbook" ? "active border-b-2 border-black" : ""}>
        <Link
          href="/lookbook"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Lookbook
        </Link>
      </li>

      {/* ABOUT */}
      <li className={pathName === "/about" ? "active border-b-2 border-black" : ""}>
        <Link
          href="/about"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          About
        </Link>
      </li>

      {/* CONTACT */}
      <li className={pathName === "/contact" ? "active border-b-2 border-black" : ""}>
        <Link
          href="/contact"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Contact
        </Link>
      </li>
    </div>
  );
};
