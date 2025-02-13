"use client";

import { Footer } from "@/components/Footer/page";
import { Heading } from "@/components/Heading/Heading";
import { Hero } from "@/components/Hero/page";
import { NavBar } from "@/components/NavBar/page";
import { NewsLetterForm } from "@/components/NewsLetterForm/pasge";
import { ProductCard } from "@/components/ProductCard/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showProfile, setShowProfile] = useState(false);
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
    console.log(showProfile);
  };
  return (
    <div>
      <NavBar showProfile={handleShowProfile} />
      <main className="relative">
        <Hero />
        <div className="px-5 md:px-10 py-5 md:py-10 ">
          <Heading heading={"Trending"} />
          <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-8">
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="my-4">
          <NewsLetterForm />
        </div>
        <div className="">
          <SubscriptionBanner />
        </div>
      </main>
      <Footer />

      <div
        className={
          showProfile
            ? "w-[150px] bg-white list-none p-4 border-2 border-black absolute right-0 top-28"
            : "hidden"
        }
      >
        <li className="">
          <Link
            href="/login"
            className="text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            Login
          </Link>
        </li>

        <li className="">
          <Link
            href="/register"
            className="text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            Register
          </Link>
        </li>

        <li className="">
          <Link
            href="/"
            className="text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            Account
          </Link>
        </li>
        <li className="">
          <Link
            href="/faqs"
            className="text-[14px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            FAQs
          </Link>
        </li>
      </div>
    </div>
  );
}
