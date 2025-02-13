"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "../../../public/icons/profile-icon.svg";
import Logo from "../../../public/icons/NavLogo.svg";
import { FaBars, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavBar = () => {
  const pathName = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handelShowSearch = () => {
    setShowSearch(!showSearch);
  };
  const handelShowProfile = () => {
    setShowSearch(!showProfile);
  };

  return (
    <div className="">
      <div className="nav1 flex items-center justify-between px-5 md:px-10 py-5 border-b border-black">
        <div className="list one flex items-center gap-3 lg:gap-8">
          <p className="text-[14px] font-[500]">GH¢</p>
          <div className="flex items-center gap-3 lg:gap-5">
            <FaBars className="cursor-pointer" />
            <FaSearch className="cursor-pointer" onClick={handelShowSearch} />
          </div>
          <p className="lg:text-[14px] font-[500]">100pts</p>
        </div>
        <div className="logo md:w-[100px] lg:w-[200px]">
          <Link href="/">
            <Image className="w-full" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="list two flex items-center gap-3 lg:gap-8">
          <Link
            href=""
            className="text-[12px] lg:text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            WISHLIST
          </Link>
          <Link
            href=""
            className="text-[12px] lg:text-[14px] font-[500] hover:text-gray-700 cursor-pointer"
          >
            CART
          </Link>
          <Image
            src={ProfileIcon}
            alt={"profile-icon"}
            className="cursor-pointer w-[20px] md:w-[35px]"
          />
        </div>
      </div>
      <div className=" px-5 md:px-10 pt-2 flex items-center justify-between gap-2 md:gap-4 list-none">
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
            pathName == "/collection"
              ? "active border-b border-black border-2"
              : ""
          }
        >
          <Link
            href=""
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            COLLECTION
          </Link>
        </li>

        <li
          className={
            pathName == "" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href=""
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            ACCESSORIES
          </Link>
        </li>

        <li className={pathName == "" ? "active border-b-2 border-black" : ""}>
          <Link
            href=""
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LA'GEN REWARDS
          </Link>
        </li>

        <li className={pathName == "" ? "active border-b-2 border-black" : ""}>
          <Link
            href=""
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LOOKBOOK
          </Link>
        </li>
      </div>
      <div className={showSearch ? "block relative" : "hidden"}>
        <FaSearch className="absolute top-1 left-2" />
        <input
          className="pl-8 w-full border border-black placeholder:text-sm"
          placeholder="search here"
          type="text"
        />
      </div>
    </div>
  );
};
