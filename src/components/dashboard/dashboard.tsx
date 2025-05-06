"use client";

import Image from "next/image";

import CreditCard from "../../../public/icons/credit-card.svg";
import CardSignal from "../../../public/icons/card-signal.svg";
import Circles from "../../../public/icons/points.svg";

export default function Dashboard() {
  const user = {
    name: "EUGENIA",
    membershipStatus: {
      tier: "01",
      since: "01/20/23",
      points: 100,
      nextTierPoints: 500,
    },
  };

  return (
    <div className="bg-white p-6 max-w-3xl mx-auto">
      <div className="w-full min-h-[350px] shadow-lg p-5 px-10 rounded-md">
        <div className="flex justify-end">
          <h3 className="text-lg  font-bold">HELLO, {user.name}</h3>
        </div>

        <div className="flex items-center mt-2">
          <Image className="w-[150px]" src={CreditCard} alt="" />
          <Image className="w-[50px]" src={CardSignal} alt="" />
        </div>

        <div className="flex justify-between mt-8">
          <div className="">
            <h2 className="text-[25px] font-medium">YOUR MEMBERSHIP</h2>
            <div className=" flex items-center text-[15px] gap-6">
              <div className="">
                <h4>STATUS</h4>
                <p className="mt-2">TIER | 01</p>
              </div>

              <div className="">
                <h4>MEMBER SINCE</h4>
                <p className="mt-2">01/20/23</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500 text-center text-[14px]">
              500pts to unlock Tier 1
            </p>

            <div className="relative mt-4">
              <Image className="absolute" src={Circles} alt="" />
              <p className="absolute top-8 left-5">100</p>
              <p className="absolute top-8 right-5">Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
