import Layout from "@/components/Layout/layout";
import Image from "next/image";
import Link from "next/link";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import Line from "../../../../public/icons/line.svg";
import CheckCircle from "../../../../public/icons/checkbox-circle.svg";

export default function Checkout() {
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
              <h3 className="text-[18px] md:text-[24px]">SHIPPING DETAILS</h3>
              <div className="form">
                <div className="flex items-center w-full my-5">
                  <div className="saved Add w-[50%]">
                    <p>USE SAVED ADDRESS</p>
                  </div>
                  <div className="w-[50%]">
                    <select
                      className="bg-gray-300 border border-gray-300 text-gray-900 text-sm w-full py-3.5 px-2"
                      id="savedLocation"
                    >
                      <option defaultValue={"Choose a country"}>
                        Choose a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>

                <div className="">
                  <form>
                    <div className="my-3">
                      <label className="text-[16px]">Address</label>
                      <input
                        className="w-full p-2.5 border border-black mt-4"
                        placeholder="Address"
                        type="text"
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-[16px]">Street name</label>
                      <input
                        className="w-full p-2.5 border border-black mt-4"
                        placeholder="Pleateau Street"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:gap-10">
                      <div className="my-3">
                        <label className="text-[16px]">Post address</label>
                        <input
                          className="w-full p-2.5 border border-black mt-4"
                          placeholder="Pleateau Street"
                          type="text"
                        />
                      </div>
                      <div className="my-3">
                        <label className="text-[16px]">Select shipping</label>
                        <select className=" border border-black text-gray-900 text-sm w-full p-3.5 mt-4">
                          <option selected>Choose a shipment</option>
                          <option selected value="Free-Delivery">
                            Free delivery
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full h-0.5 bg-gray-700 my-5"></div>

                    <div className="flex items-center justify-end gap-4">
                      <button
                        type="submit"
                        className="w-[70%] py-3 mt-7 bg-none border border-black"
                      >
                        CANCEL ORDER
                      </button>

                      <Link
                        href="/checkout/payment"
                        className="w-[70%] py-3 mt-7 bg-black text-white shadow-lg text-center"
                      >
                        Payment
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
