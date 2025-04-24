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
  showMenu,
}: {
  showProfile: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
  showCart: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
  showMenu: MouseEventHandler<SVGElement>;
}) => {
  const pathName = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  const handelShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="">
      <div
        className={
          pathName == "/campaigns"
            ? "block bg-slate-800 py-1 w-full overflow-hidden whitespace-nowrap"
            : "hidden"
        }
      >
        <p className="animate-scroll-left animate-scroll-left text-white text-xs">
          Your Access to the inner world of LA’GEN and BUANE.
        </p>
      </div>
      <div className="nav1 flex items-center justify-between px-5 md:px-10 py-5 border-b border-black">
        <div className="list one flex items-center gap-3 lg:gap-8">
          <p className="text-[14px] font-[500]">AU$</p>
          <div className="flex items-center gap-3 lg:gap-5">
            <FaBars className="cursor-pointer" onClick={showMenu} />
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
