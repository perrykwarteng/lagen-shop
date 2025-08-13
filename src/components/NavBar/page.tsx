"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "../../../public/icons/profile-icon.svg";
import MainLogo from "../../../public/icons/main-logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import { MenuList } from "../MenuList/page";

export const NavBar = ({
  showProfile,
  showCart,
}: {
  showProfile: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
  showCart: MouseEventHandler<HTMLImageElement | HTMLAnchorElement>;
}) => {
  const pathName = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
    if (showSearch) setShowSearch(false);
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    if (showMenu) setShowMenu(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="relative">
      {/* Campaign Banner */}
      <div
        className={
          pathName === "/campaigns"
            ? "block bg-slate-800 py-1 w-full overflow-hidden whitespace-nowrap"
            : "hidden"
        }
      >
        <p className="animate-scroll-left text-white text-xs px-4">
          Your Access to the inner world of LA'GEN and BUANE.
        </p>
      </div>

      {/* Main Navigation */}
      <div className="nav1 bg-white flex items-center justify-between px-4 sm:px-5 md:px-10 py-3 sm:py-5">
        <div className="list one flex items-center gap-2 sm:gap-3 lg:gap-8">
          <p className="text-xs sm:text-sm font-medium">AU$</p>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
            <button 
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              onClick={handleShowMenu}
              aria-label="Toggle menu"
            >
              {showMenu ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
            <button 
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              onClick={handleShowSearch}
              aria-label="Toggle search"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>
          <p className="text-xs sm:text-sm font-medium hidden sm:block">100pts</p>
        </div>

        <div className="logo">
          <Link href="/">
            <Image
              src={MainLogo}
              alt="Main Logo"
              className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
              priority
              unoptimized
            />
          </Link>
        </div>

        <div className="list two flex items-center gap-2 sm:gap-3 lg:gap-8">
          <Link
            href="/wishlist"
            className="text-xs sm:text-sm font-medium hover:text-gray-700 cursor-pointer hidden sm:block"
          >
            WISHLIST
          </Link>
          <Link
            href=""
            className="text-xs sm:text-sm font-medium hover:text-gray-700 cursor-pointer"
            onClick={showCart}
          >
            CART
          </Link>
          <Image
            src={ProfileIcon}
            alt="profile-icon"
            onClick={showProfile}
            className="cursor-pointer w-[18px] sm:w-[20px] md:w-[25px] lg:w-[30px] hover:opacity-80 transition-opacity"
            unoptimized
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          showMenu
            ? "block md:hidden px-4 sm:px-5 py-4 gap-3 shadow-lg border-b border-gray-200 w-full bg-white absolute z-40 top-full"
            : "hidden"
        }
      >
        <MenuList />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block px-5 md:px-10 py-3 gap-3 border-b border-black w-full bg-white">
        <MenuList />
      </div>

      {/* Search Bar */}
      <div className={showSearch ? "block relative" : "hidden"}>
        <form onSubmit={handleSearchSubmit} className="relative">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            className="pl-10 pr-4 py-3 w-full border border-gray-300 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Search for products..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-3 right-3 text-sm font-medium text-black hover:text-gray-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
