"use client";
import { NavBar } from "@/components/NavBar/page";
import { Footer } from "@/components/Footer/page";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Cancel from "../../../public/icons/close-cross.svg";
import CartImage from "../../../public/icons/cart-image.svg";
import CartRemove from "../../../public/icons/cart-remove.svg";
import CartAdd from "../../../public/icons/cart-add.svg";
import CartDelete from "../../../public/icons/delete-icon.svg";
import Link from "next/link";
import { MenuList } from "../MenuList/page";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const handleCloseCart = () => {
    setShowCart(!showCart);
  };
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="overflow-hidden">
      <NavBar showProfile={handleShowProfile} showCart={handleShowCart} />
      <main className="relative">{children}</main>
      <Footer />

      {showProfile && (
        <div className="w-[150px] z-50 bg-white list-none p-4 border-2 border-black absolute right-0 top-16">
          <li>
            <Link
              href="/login"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Account
            </Link>
          </li>
          <li>
            <Link
              href="/faqs"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              FAQs
            </Link>
          </li>
        </div>
      )}

      {/* Menu */}
      {showMenu && (
        <div className="w-full py-4 px-5 pb-7 bg-white list-none border-2 border-black absolute left-0 top-20">
          <MenuList />
        </div>
      )}

      {showCart && (
        <div className="w-[300px] md:w-[400px] z-50 py-4 pb-7 bg-white list-none border-2 border-black absolute right-0 top-28">
          <div className="flex items-center justify-between py-2 px-7">
            <div className="text-[25px]">CART SUMMARY</div>
            <div className="cancel">
              <Image
                className="w-8 h-8 cursor-pointer"
                src={Cancel}
                alt={"cancel icon"}
                onClick={handleCloseCart}
              />
            </div>
          </div>
          <div className="text-center my-2 py-3 border-y border-black">
            <p>YOU ARE $100 AWAY FROM FREE SHIPPING</p>
          </div>

          <div className="py-5 px-7 flex items-center gap-3">
            <div className="image bg-black w-[130px] h-[130px] flex items-center justify-center shadow-lg">
              <Image
                className="w-[100px] h-[100px]"
                src={CartImage}
                alt="cart Image"
              />
            </div>
            <div className="">
              <h3 className="font-semibold">ROBE VIOLETTE</h3>
              <p className="text-[14px]">Size : S</p>
              <p className="text-[14px]">Colour : Purple</p>
              <div className="flex items-center gap-1">
                <div className="">
                  <Image
                    className="w-5 h-5 cursor-pointer"
                    src={CartRemove}
                    alt="cart Remove"
                  />
                </div>
                <div className="text-[14px]">1</div>
                <div className="">
                  <Image
                    className="w-7 h-7 cursor-pointer"
                    src={CartAdd}
                    alt="cart Add"
                  />
                </div>
              </div>
              <div className="mt-1">
                <Image
                  className="w-5 h-5 cursor-pointer"
                  src={CartDelete}
                  alt="cart Delete"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-7 px-7 pb-3 text-[14px]">
            <p>BUY NOW.</p>
            <p>PAY LATER WITH</p>
          </div>
          <div className="border-t-2 border-slate-700 px-7">
            <div className="flex items-center justify-between text-[14px] py-2">
              <p>Subtotal:</p>
              <p>AU$100.23</p>
            </div>
            <p className="text-[14px]">
              *Shipping & Tax calculated at checkout
            </p>
            <div className="flex items-center justify-between py-2">
              <p>Total:</p>
              <p>AU$100.23</p>
            </div>
          </div>

          <div className="px-7">
            <button
              type="submit"
              className="w-full py-3 mt-7 bg-black text-white shadow-lg"
            >
              <Link href="/checkout">CHECKOUT SECURELY</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
