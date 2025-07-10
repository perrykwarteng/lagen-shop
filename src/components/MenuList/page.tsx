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
          className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700 cursor-pointer"
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
          className="text-[14px] font-[500] hover:text-gray-700 cursor-pointer"
        >
          Shop
        </Link>

        {/* Only show mega nav if NOT on /shop */}
        {isHoveringShop && pathName !== "/shop" && (
          <div className="absolute -left-36 top-full w-screen z-50">
            <ShopNav />
          </div>
        )}
      </li>

      {/* COLLECTION */}
      <li
        className={`relative ${
          pathName === "/collections/stella"
            ? "active border-b-2 border-black"
            : ""
        }`}
        onMouseEnter={() => setIsHoveringCollection(true)}
        onMouseLeave={() => setIsHoveringCollection(false)}
      >
        <Link
          href="/collections/stella"
          className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700 cursor-pointer"
        >
          COLLECTION
        </Link>

        {/* Fullscreen video dropdown on hover */}
        {isHoveringCollection && (
          <div className="absolute top-full -left-56 mt-5 w-screen h-screen z-50">
            <div className="relative w-full h-full">
              {/* Video background */}
              <video
                src="/videos/Fashion.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/70" />

              {/* Optional Content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Stella Collection
                </h2>
                <p className="mt-4 text-sm md:text-lg">Explore the unseen.</p>
              </div>
            </div>
          </div>
        )}
      </li>

      {/* ACCESSORIES */}
      <li
        className={
          pathName === "/accessories" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/accessories"
          className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700 cursor-pointer"
        >
          ACCESSORIES
        </Link>
      </li>

      {/* LB CIRCLE */}
      <li
        className={
          pathName === "/rewards" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/rewards"
          className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700 cursor-pointer"
        >
          LB CIRCLE ∞
        </Link>
      </li>

      {/* LB NEXUS */}
      <li
        className={
          pathName === "/campaigns" ? "active border-b-2 border-black" : ""
        }
      >
        <Link
          href="/campaigns"
          className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700 cursor-pointer"
        >
          LB NEXUS
        </Link>
      </li>

      {/* EXTRA LINKS */}
      <li>
        <Link href="#" className="text-[14px] font-[500] hover:text-gray-700">
          Kids Clothing
        </Link>
      </li>
      <li>
        <Link href="#" className="text-[14px] font-[500] hover:text-gray-700">
          Unisex
        </Link>
      </li>
      <li>
        <Link href="#" className="text-[14px] font-[700] hover:text-gray-700">
          THE UNKNOWN
        </Link>
      </li>
      <li>
        <Link href="#" className="text-[14px] font-[500] hover:text-gray-700">
          Coming Soon
        </Link>
      </li>
    </div>
  );
};
