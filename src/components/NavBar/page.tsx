"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "../../../public/icons/profile-icon.svg";
import Logo from "../../../public/icons/NavLogo.svg";
import { FaBars, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();

  return (
    <div className="">
      <div className="nav1 flex items-center justify-between px-10 py-5 border-b border-black">
        <div className="list one flex items-center gap-8">
          <p className="text-[14px] font-[500]">GH¢</p>
          <div className="flex items-center gap-5">
            <FaBars />
            <FaSearch />
          </div>
          <p className="text-[14px] font-[500]">100 pts</p>
        </div>
        <div className="logo lg:w-[200px]">
          <Image className="w-full" src={Logo} alt="Logo" />
        </div>
        <div className="list two flex items-center gap-8">
          <Link
            href=""
            className="text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            WISHLIST
          </Link>
          <Link
            href=""
            className="text-[14px] font-[500] hover:text-gray-700 cursor-pointer"
          >
            CART
          </Link>
          <Image
            src={ProfileIcon}
            alt={"profile-icon"}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="nav2 px-10 pt-2 flex items-center justify-between gap-4 list-none">
        <li className={pathName == "/" ? "active border-b-2 border-black" : ""}>
          <Link
            href="/"
            className="text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
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
            className="text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
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
            href=""
            className="text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            ACCESSORIES
          </Link>
        </li>

        <li
          className={
            pathName == "/lagen" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href=""
            className="text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LA'GEN REWARDS
          </Link>
        </li>

        <li
          className={
            pathName == "/lookbook" ? "active border-b-2 border-black" : ""
          }
        >
          <Link
            href=""
            className="text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            LOOKBOOK
          </Link>
        </li>
      </div>
    </div>
  );
};
