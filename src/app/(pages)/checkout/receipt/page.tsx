import Layout from "@/components/Layout/layout";
import Image from "next/image";

import SuccessCheck from "../../../../../public/icons/Success-Check.svg";
import dropDown from "../../../../../public/icons/down-icon.svg";

export default function Receipt() {
  return (
    <>
      <Layout>
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full md:w-[50%] flex flex-col items-center justify-center">
              <div className="">
                <Image src={SuccessCheck} alt="" />
              </div>
              <p className="text-[20px] text-center font-medium mt-10">
                Thanks a lot for putting up this order
              </p>
              <p className="text-gray-500 text-center my-3">
                Lorem ipsum dolor sit amet consectetur. Nec sit eu sed non magna
                mauris malesuada{" "}
                <strong className="text-black">vestibulum</strong> nunc. Turpis
                orci et nec nunc id nibh in. Massa sit aliquam sodales pretium
                non montes. Eros semper malesuada quis semper blandit amet diam
                ultricies.
              </p>
              <p className="text-gray-500 text-center mt-4">
                Eros semper malesuada quis semper blandit amet diam
                ultricies.Eros semper malesuada quis semper blandit amet diam
                ultricies.
              </p>

              <div className="w-full border border-black p-2.5 mt-12">
                <div className="flex items-center justify-between">
                  <div className="">Order Review</div>
                  <div className="">
                    <Image src={dropDown} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="">2 items in cart</div>
                  <div className="">GH₵2000.46</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
