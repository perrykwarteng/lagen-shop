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
          onClick={handleShopMenu}
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
        <div className="list-none w-[200px] bg-white shadow-md p-2 absolute left-20 md:left-28 top-16">
          <li className="flex items-center my-1.5 gap-1.5">
            <Image className="w-5" src={MensClothing} alt="mens clothing" />
            <Link
              href="#"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Mens Clothing
            </Link>
          </li>
          <li className="flex items-center my-1.5 gap-1.5">
            <Image className="w-5" src={WomensClothing} alt="womens clothing" />
            <Link
              href="#"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Womens Clothing
            </Link>
          </li>
          <li className="flex items-center my-1.5 gap-1.5">
            <Image className="w-5" src={KidsClothing} alt="kids clothing" />
            <Link
              href="#"
              className="text-[14px] font-[500] hover:text-gray-700"
            >
              Kids Clothing
            </Link>
          </li>
        </div>
      )}
    </>
  );
};
