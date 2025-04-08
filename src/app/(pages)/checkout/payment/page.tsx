"use client";

import Layout from "@/components/Layout/layout";
import Link from "next/link";
import Image from "next/image";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import Line from "../../../../../public/icons/line.svg";
import CheckCircle from "../../../../../public/icons/checkbox-circle.svg";
import { useState } from "react";

export default function Payment() {
  const paymentMethod = ["MOBILE MONEY", "CREDIT CARD"];

  const [payment, setPayment] = useState("");

  const handleSelectPayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const payment = e.target.value;
    setPayment(payment);
  };

  return (
    <>
      <Layout>
        <div className="mt-10">
          <SubscriptionBanner />
        </div>
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-[45%] process flex items-center justify-center gap-5">
              <div className="">CART</div>
              <div className="flex items-center gap-3">
                <Image src={Line} alt="line" />
                <Image src={CheckCircle} alt="circle" />
                <Image src={Line} alt="line" />
              </div>
              <div className="">CHECK OUT</div>
              <div className="flex items-center gap-3">
                <Image src={Line} alt="line" />
                <Image src={CheckCircle} alt="circle" />
                <Image src={Line} alt="line" />
              </div>
              <div className="">PAYMENT</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full md:w-[45%]">
              <h3 className="text-[18px] md:text-[24px]">PAYMENT DETAILS</h3>
              <div className="form">
                <div className="flex items-center w-full my-5">
                  <div className="saved Add w-[50%]">
                    <p>METHOD OF PAYMENT</p>
                  </div>
                  <div className="w-[50%]">
                    <select
                      onChange={handleSelectPayment}
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm w-full py-3.5 px-2"
                      id="savedLocation"
                    >
                      <option selected>Select Payment Methos</option>
                      {paymentMethod.map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="">
                  <form>
                    <div className="my-3">
                      <label className="text-[16px]">Name on account </label>
                      <input
                        className="w-full p-2.5 border border-black mt-4"
                        placeholder="John Smith"
                        type="text"
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-[16px]">Phone number</label>
                      <input
                        className="w-full p-2.5 border border-black mt-4"
                        placeholder="055 445 3586"
                        type="text"
                      />
                    </div>

                    <div
                      className={
                        payment === "CREDIT CARD"
                          ? "flex items-center gap-4"
                          : "hidden"
                      }
                    >
                      <div className="w-[130px]">
                        <label className="text-[16px]">Expiration</label>
                        <input
                          className="w-full p-2.5 border border-black mt-4"
                          placeholder="03"
                          type="text"
                        />
                      </div>
                      <div className="mt-8">/</div>
                      <div className="mt-6 w-[130px]">
                        <input
                          className="w-full p-2.5 border border-black mt-4"
                          placeholder="24"
                          type="text"
                        />
                      </div>
                      <div className="">
                        <label className="text-[16px]">CVC</label>
                        <input
                          className="w-full p-2.5 border border-black mt-4"
                          placeholder="000"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="w-full h-0.5 bg-gray-700 my-6"></div>

                    <div className="flex items-center justify-end gap-4">
                      <button
                        type="submit"
                        className="w-[70%] py-3 mt-7 bg-none border border-black"
                      >
                        CANCEL ORDER
                      </button>

                      <Link
                        href="/checkout/receipt"
                        className="w-[70%] py-3 mt-7 bg-black text-white shadow-lg text-center"
                      >
                        COMPLETE ORDER
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
