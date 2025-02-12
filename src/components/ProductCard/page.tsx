import Image from "next/image";
import PictureOne from "../../../public/images/picture1.png";

export const ProductCard = () => {
  return (
    <div className=" min-w-[270px] shadow-md">
      <Image
        className="w-full h-[350px]"
        src={PictureOne}
        alt="Sunset in the mountains"
      />

      <div className="p-4">
        <p className="text-gray-700 text-sm">Willow Wrap Sweatshirt</p>
        <p className="text-gray-700 text-xs">Beige</p>
        <div className="text-gray-900 font-bold text-sm "> AU$ 57.43</div>
      </div>

      <div className="p-4">
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          S
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          M
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          L
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          XL
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          XXL
        </span>
      </div>
    </div>
  );
};
