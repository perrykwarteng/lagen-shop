"use client";

import { NavBar } from "@/components/NavBar/page";
import { Footer } from "@/components/Footer/page";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Cancel from "../../../public/icons/close-cross.svg";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <NavBar showProfile={handleShowProfile} />

      <main className="relative">{children}</main>

      <Footer />

      {showProfile && (
        <div className="w-[150px] bg-white list-none p-4 border-2 border-black absolute right-0 top-28">
          <li>
            <a
              href="/login"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Register
            </a>
          </li>
          <li>
            <a href="/" className="text-[14px] font-[500] hover:text-gray-700">
              Account
            </a>
          </li>
          <li>
            <a
              href="/faqs"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              FAQs
            </a>
          </li>
        </div>
      )}

      <div className="w-[400px] h-[500px] bg-white list-none border-2 border-black absolute right-0 top-28">
        <div className="flex items-center justify-between py-2 px-6 mt-2">
          <div className="text-[25px]">CART SUMMARY</div>
          <div className="cancel">
            <Image
              className="w-8 h-8 cursor-pointer"
              src={Cancel}
              alt={"cancel icon"}
            />
          </div>
        </div>
        <div className="text-center my-2 py-3 border-y border-black">
          <p>YOU ARE $100 AWAY FROM FREE SHIPPING</p>
        </div>

        <div className=""></div>
        <div className="border-t-2 border-slate-700"></div>
        <div className="px-6">
          <button
            type="submit"
            className="w-full py-3 mt-7 bg-black text-white shadow-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
