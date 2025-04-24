"use client";

import Image from "next/image";
import DownSolid from "../../../public/icons/down-solid.svg";
import { FaUnlockKeyhole } from "react-icons/fa6";

import { useState } from "react";

export const FaqBlack = ({
  title,
  text,
}: {
  title: string;
  text: string[];
}) => {
  const [viewDetails, setViewDetails] = useState(false);

  const handleViewDetail = () => {
    setViewDetails(!viewDetails);
  };

  return (
    <div className="bg-black text-white rounded-lg w-full md:w-[85%] py-6 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-[20px] font-bold">{title}</h3>
          <div
            className={
              title === "Diamond ( 10,000 points)" ? "block" : "hidden"
            }
          >
            <FaUnlockKeyhole />
          </div>
          {/* Emerald (5000 points ): */}
        </div>
        <div className="cursor-pointer">
          <Image
            className={`w-3 h-3 ${viewDetails ? "" : "rotate-180"}`}
            src={DownSolid}
            alt=""
            onClick={handleViewDetail}
          />
        </div>
      </div>

      <div className="w-full md:w-[90%]">
        {viewDetails && (
          <p className="text-[14px] mt-3">
            {text.map((list: string, index: number) => (
              <li key={index}>{list}</li>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};
