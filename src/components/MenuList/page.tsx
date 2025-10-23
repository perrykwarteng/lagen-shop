"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShopNav } from "../ShopNav/page";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaLock } from "react-icons/fa";

export const MenuList = () => {
  const pathName = usePathname();
  const [isHoveringShop, setIsHoveringShop] = useState(false);
  const [isHoveringCollection, setIsHoveringCollection] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileCollectionOpen, setMobileCollectionOpen] = useState(false);

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
        <div className="flex items-center justify-between">
          <Link
            href="/shop"
            className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
          >
            Shop
          </Link>
          {/* Mobile dropdown arrow */}
          <button
            className="md:hidden p-1 ml-2"
            onClick={() => setMobileShopOpen(!mobileShopOpen)}
            aria-label="Toggle shop submenu"
          >
            {mobileShopOpen ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </button>
        </div>

        {/* Desktop mega nav - only show if NOT on /shop */}
        {isHoveringShop && pathName !== "/shop" && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-screen z-50 md:block">
            <ShopNav />
          </div>
        )}

        {/* Mobile submenu */}
        {mobileShopOpen && (
          <div className="md:hidden mt-2 pl-4 border-l-2 border-gray-200">
            <ShopNav />
          </div>
        )}
      </li>
      {/* COLLECTION */}
      <li
        className={`relative ${
          pathName === "/collections" ? "active border-b-2 border-black" : ""
        }`}
        onMouseEnter={() =>
          pathName !== "/collections" && setIsHoveringCollection(true)
        }
        onMouseLeave={() =>
          pathName !== "/collections" && setIsHoveringCollection(false)
        }
      >
        <div className="flex items-center justify-between">
          <Link
            href="/collections"
            className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
          >
            Collections
          </Link>
          {/* Mobile dropdown arrow */}
          <button
            className="md:hidden p-1 ml-2"
            onClick={() => setMobileCollectionOpen(!mobileCollectionOpen)}
            aria-label="Toggle collections submenu"
          >
            {mobileCollectionOpen ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </button>
        </div>

        {/* Desktop mega nav - only show if NOT on /collections */}
        {isHoveringCollection && pathName !== "/collections" && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-screen z-50 md:block">
            <div className="w-full bg-white border-b absolute md:left-[29%] border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-start md:justify-center gap-12">
                  <div className="min-w-[200px]">
                    <h3 className="text-lg font-bold mb-4">
                      Featured Collections
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black"
                        >
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black"
                        >
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black"
                        >
                          Seasonal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile submenu */}
        {mobileCollectionOpen && (
          <div className="md:hidden mt-2 pl-4 border-l-2 border-gray-200">
            <div className="w-full bg-white">
              <div className="px-4 py-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-bold mb-3">
                      Featured Collections
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black block py-1"
                        >
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black block py-1"
                        >
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-800 text-sm hover:text-black block py-1"
                        >
                          Seasonal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* accessories */}
      <li
        className={
          pathName === "/accessories" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/accessories"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Accessories
        </Link>
      </li>

      {/* campaigns */}
      <li
        className={
          pathName === "/campaigns" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/campaigns"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Campaigns
        </Link>
      </li>

      {/* LOOKBOOK */}
      <li
        className={
          pathName === "/lookbook" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/lookbook"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Lookbook
        </Link>
      </li>

      {/* Mystery Box */}
      <li className={pathName === "" ? "active border-b-2 border-black" : ""}>
        <Link
          href="/"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          Mystery Box
        </Link>
      </li>
      {/* Mystery Vault */}
      <li className={pathName === "" ? "active border-b-2  border-black" : ""}>
        <Link
          href="/"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer py-2 md:py-0 flex items-center gap-2"
        >
          Mystery Vault
          <FaLock />
        </Link>
      </li>

      {/* ABOUT */}
      <li
        className={
          pathName === "/about" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/about"
          className="text-sm sm:text-base font-medium hover:text-gray-700 cursor-pointer block py-2 md:py-0"
        >
          About
        </Link>
      </li>
      {/* CONTACT */}
      <li
        className={
          pathName === "/contact" ? "active border-b-2 border-black" : ""
        }
      >
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
