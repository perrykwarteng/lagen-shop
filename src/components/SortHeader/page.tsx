import Image from "next/image";

import SquareOne from "../../../public/icons/sqare1-icon.svg";
import SquareTwo from "../../../public/icons/sqare2-icon.svg";
import DropDown from "../../../public/icons/down-icon.svg";

export const SortHeader = () => {
  return (
    <div className="">
      <div className="sort border-y border-black flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 w-[15%] border-r border-black py-4">
          <div className="">
            <Image className="w-5 h-5" src={SquareOne} alt=""></Image>
          </div>
          <div className="">
            <Image className="w-6 h-6" src={SquareTwo} alt=""></Image>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-[15%] border-l border-black py-4">
          <p className="flex items-center gap-2">
            SORT <Image src={DropDown} alt=""></Image>
          </p>
        </div>
      </div>
      <p className="mr-16 mt-2 flex justify-end">FILTERS</p>
    </div>
  );
};
