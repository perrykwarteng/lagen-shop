"use client";

import Layout from "@/components/Layout/layout";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import MensClothing from "../../../../public/icons/mensClothing.png";
import WomensClothing from "../../../../public/icons/womenClothing.png";
import KidsClothing from "../../../../public/icons/kidsClothing.png";
import { ProductCard } from "@/components/ProductCard/page";
import PictureOne from "../../../../public/images/a1.jpg";
import PictureFive from "../../../../public/images/a5.jpg";
import PictureSix from "../../../../public/images/a6.jpg";
import PictureTwo from "../../../../public/images/c2.jpg";
import PictureThree from "../../../../public/images/c3.jpg";
import PictureFour from "../../../../public/images/c4.jpg";

export default function Shop() {
  const [womenNav, setWomenNav] = useState(false);
  const [menNav, setMenNav] = useState(false);
  const [kidsNav, setKidsNav] = useState(false);

  const handleWomenNav = () => {
    setWomenNav(true);
  };
  const handleMenNav = () => {
    setMenNav(true);
  };
  const handleKidsNav = () => {
    setKidsNav(true);
  };
  const handleClose = () => {
    setKidsNav(false);
    setMenNav(false);
    setWomenNav(false);
  };

  return (
    <>
      <Layout>
        <div className="px-5 md:px-10 flex flex-col md:flex-row items-start border-b border-black justify-around gap-10 list-none w-full bg-white shadow-md p-2">
          {/* Women Clothing */}
          <div className="flex flex-col justify-center relative">
            <div
              className="flex items-center justify-center gap-1.5 cursor-pointer"
              onMouseEnter={handleWomenNav}
            >
              <Image
                className="w-5"
                src={WomensClothing}
                alt="womens clothing"
              />
              <h4>Women Clothing</h4>
            </div>
            {womenNav && (
              <div
                className="fixed top-36 p-6 z-40 left-0 w-screen bg-white border border-black flex flex-col md:flex-row items-start gap-5"
                onMouseLeave={handleClose}
              >
                <ul>
                  <li className="my-1.5">
                    <Link
                      href="#"
                      className="text-[14px] font-[500] hover:text-gray-700"
                    >
                      All Women’s
                    </Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Dresses</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Tops</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Bottoms</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Jumpsuits & Playsuits</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Co-Ords & Sets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Bodysuits</Link>
                  </li>
                </ul>
                <ul>
                  <li className="my-1.5">
                    <Link href="#">Skirts</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Jackets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Hoodies & Jumpers</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Swimwear</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Lingerie & Sleepwear</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Underwear</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Men Clothing */}
          <div className="flex flex-col justify-center relative">
            <div
              className="flex items-center justify-center gap-1.5 cursor-pointer"
              onMouseEnter={handleMenNav}
            >
              <Image className="w-5" src={MensClothing} alt="mens clothing" />
              <h4>Men Clothing</h4>
            </div>
            {menNav && (
              <div
                className="fixed top-36 p-6 z-40 left-0 w-screen bg-white border border-black flex flex-col md:flex-row items-start gap-5"
                onMouseLeave={handleClose}
              >
                <ul>
                  <li className="my-1.5">
                    <Link href="#">All Mens</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Jackets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Tops</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Bottoms</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Co-Ords & Sets</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Hoodies & Jumpsuits</Link>
                  </li>
                </ul>
                <ul>
                  <li className="my-1.5">
                    <Link href="#">Boxers & Briefs</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">Swimwear</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Kids Clothing */}
          <div className="flex flex-col justify-center relative">
            <div
              className="flex items-center justify-center gap-1.5 cursor-pointer"
              onMouseEnter={handleKidsNav}
            >
              <Image className="w-5" src={KidsClothing} alt="kids clothing" />
              <h4>Kids Clothing</h4>
            </div>
            {kidsNav && (
              <div
                className="fixed top-36 p-6 z-40 left-0 w-screen bg-white border border-black flex flex-col md:flex-row items-start gap-5"
                onMouseLeave={handleClose}
              >
                <ul>
                  <li className="my-1.5">
                    <Link href="#">All Kids</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">3 - 5 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">5 - 7 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">7 - 10 years</Link>
                  </li>
                  <li className="my-1.5">
                    <Link href="#">10 - 13 years</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-[20px] md:text-[28px] text-[#333334]">SHOP</h2>
        </div>

        <div className="my-24 px-16 md:px-24 lg:px-36">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              <ProductCard
                image={PictureOne}
                title="Elegant Wrap Cardigan"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureTwo}
                title="Soft Touch Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureThree}
                title="Urban Zip-Up Hoodie"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureFour}
                title="Minimalist Crewneck Pullover"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureFive}
                title="Lightweight Lounge Hoodie"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureSix}
                title="Classic Cotton Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="mt-10 border-2 border-black bg-white px-20 py-3 ml-3 text-black">
              LOAD MORE
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
