import Link from "next/link";

export const NextMenu = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between list-none gap-3">
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
