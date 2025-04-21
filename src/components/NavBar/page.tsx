"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "../../../public/icons/profile-icon.svg";
import MainLogo from "../../../public/icons/main-logo.svg";
import { FaBars, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useState } from "react";

export const NavBar = ({
  showProfile,
  showCart,
}: {
  showProfile: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
  showCart: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
}) => {
  const pathName = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  const handelShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="">
      <div className="nav1 flex items-center justify-between px-5 md:px-10 py-5 border-b border-black">
        <div className="list one flex items-center gap-3 lg:gap-8">
          <p className="text-[14px] font-[500]">AU$</p>
          <div className="flex items-center gap-3 lg:gap-5">
            <FaBars className="cursor-pointer" />
            <FaSearch className="cursor-pointer" onClick={handelShowSearch} />
          </div>
          <p className="lg:text-[14px] font-[500]">100pts</p>
        </div>
        <div className="logo">
          <Link href="/">
            <Image
              src={MainLogo}
              alt="Main Logo"
              className="w-[150px] md:w-[250px] lg:w-[450px]"
            />
          </Link>
        </div>
        <div className="list two flex items-center gap-3 lg:gap-8">
          <Link
            href="/wishlist"
            className="text-[12px] lg:text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            WISHLIST
          </Link>
          <Link
            href=""
            className="text-[12px] lg:text-[14px] font-[500] hover:text-gray-700 cursor-pointer"
            onClick={showCart}
          >
            CART
          </Link>
          <Image
            src={ProfileIcon}
            alt={"profile-icon"}
            onClick={showProfile}
            className="cursor-pointer w-[20px] md:w-[35px]"
          />
        </div>
      </div>
      <div className=" px-5 md:px-10 py-2 flex items-center justify-between gap-2 md:gap-4 list-none border-b border-black">
        <li className={pathName == "/" ? "active border-b-2 border-black" : ""}>
          <Link
            href="/"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            HOME
          </Link>
        </li>
        <li
          className={
            pathName == "/collections/stella"
              ? "active border-black border-b-2"
              : ""
          }
        >
          <Link
            href="/collections/stella"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            COLLECTION
          </Link>
        </li>

        <li
          className={
            pathName == "/accessories" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href="/accessories"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            ACCESSORIES
          </Link>
        </li>

        <li
          className={
            pathName == "/rewards" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href="/rewards"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LB Circle ∞
          </Link>
        </li>

        <li
          className={
            pathName == "/campaigns" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href="/campaigns"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LOOKBOOK
          </Link>
        </li>
      </div>
      <div className={showSearch ? "block relative" : "hidden"}>
        <FaSearch className="absolute top-2.5 left-2" />
        <input
          className="pl-8 py-1.5 w-full border border-black placeholder:text-sm"
          placeholder="search here"
          type="text"
        />
      </div>
    </div>
  );
};
