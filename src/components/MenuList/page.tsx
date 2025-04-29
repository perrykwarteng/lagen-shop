import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MensClothing from "../../../public/icons/mensClothing.png";
import WomensClothing from "../../../public/icons/womenClothing.png";
import KidsClothing from "../../../public/icons/kidsClothing.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

export const MenuList = () => {
  const pathName = usePathname();
  const [shopNav, setShopNav] = useState(false);

  const handleShopMenu = () => {
    setShopNav((prev) => !prev);
  };
  const handleShopMenuClose = () => {
    setShopNav((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between list-none gap-3">
        <li className={pathName == "/" ? "active border-b-2 border-black" : ""}>
          <Link
            href="/"
            className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
          >
            HOME
          </Link>
        </li>
        <li
          onMouseEnter={handleShopMenu}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          <Link href="#" className="text-[14px] font-[500] hover:text-gray-700">
            Shop
          </Link>
          {shopNav ? <FaCaretUp /> : <FaCaretDown />}
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
            LB CIRCLE ∞
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
            LB NEXUS
          </Link>
        </li>

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

      {shopNav && (
        <div
          onMouseLeave={handleShopMenuClose}
          className="px-5 md:px-10 flex flex-col md:flex-row items-start justify-around gap-10 list-none w-full bg-white shadow-md p-2 absolute left-0 right-0 top-14 transition-all duration-300 ease-out"
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <Image
                className="w-5"
                src={WomensClothing}
                alt="womens clothing"
              />
              <h4>Women Clothing</h4>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="">
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    All Women’s
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Dresses
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Tops
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Bottoms
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Jumpsuits & Playsuits
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Co-Ords & Sets
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Bodysuits
                  </Link>
                </li>
              </div>
              <div className="">
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Skirts
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Jackets
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Hoodies & Jumpers
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Swimwear
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Lingerie & Sleepwear
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Underwear
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <Image className="w-5" src={MensClothing} alt="mens clothing" />
              <h4>Men Clothing</h4>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="">
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    All Mens
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Jackets
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Tops
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Bottoms
                  </Link>
                </li>

                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Co-Ords & Sets
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Hoodies & Jumpsuits
                  </Link>
                </li>
              </div>
              <div className="">
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Boxers & Briefs
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    Swimwear
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <Image className="w-5" src={KidsClothing} alt="kids clothing" />
              <h4>Kids Clothing</h4>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="">
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    All Kids{" "}
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    3 - 5 years
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    5 - 7 years
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    7- 10 years
                  </Link>
                </li>

                <li className="my-1.5">
                  <Link
                    href="#"
                    className="text-[14px] font-[500] hover:text-gray-700"
                  >
                    10- 13 years
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
