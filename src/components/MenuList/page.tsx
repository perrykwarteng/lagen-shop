import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuList = () => {
  const pathName = usePathname();

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
        <li className="flex items-center gap-1.5 cursor-pointer">
          <Link
            href="/shop"
            className="text-[14px] font-[500] hover:text-gray-700"
          >
            Shop
          </Link>
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
    </>
  );
};
