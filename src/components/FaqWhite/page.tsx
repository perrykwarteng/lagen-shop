"use client";

import Image from "next/image";
import AddIcon from "../../../public/icons/add-icon.svg";
import { useState } from "react";

export const FaqWhite = ({ title, text }: { title: string; text: string }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const handleViewDetail = () => {
    setViewDetails(!viewDetails);
  };

  return (
    <div className="bg-white border-b border-black w-full md:w-[85%] py-2">
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="text-[14px]">{title}</h3>
        </div>
        <div className="cursor-pointer">
          <Image
            className={`w-3 h-3 ${viewDetails ? "" : "rotate-180"}`}
            src={AddIcon}
            alt=""
            onClick={handleViewDetail}
          />
        </div>
      </div>

      <div className="w-full md:w-[90%]">
        {viewDetails && <p className="text-[14px] mt-3">{text}</p>}
      </div>
    </div>
  );
};
