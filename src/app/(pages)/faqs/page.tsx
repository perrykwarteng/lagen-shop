import Layout from "@/components/Layout/layout";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import TrackImg from "../../../../public/icons/track.svg";
import ReturnImg from "../../../../public/icons/product-return.svg";
import RewardImg from "../../../../public/icons/reward.svg";
import WishListImg from "../../../../public/icons/wishlist.svg";
import { FaqWhite } from "@/components/FaqWhite/page";

export default function FAQS() {
  return (
    <>
      <Layout>
        <div className="bg-[#A9BB9C] px-5 md:px-10 py-5 md:py-10 pb-10 flex flex-col items-center justify-center">
          <h2 className="text-[18px] md:text-[25px] py-4 text-center">
            HOW CAN WE ASSIST YOU
          </h2>
          <div className="relative w-full max-w-[500px]">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
            <input
              className="w-full py-2 pl-10 pr-3 border-2 border-black rounded-md outline-none focus:border-black"
              placeholder="Search for keyword (e.g. Return, address change, delivery)"
              type="text"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="px-5 md:px-20 md:pb-10">
          <h3 className="py-4">Manage Your Orders & Contact Us</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
            <div className="w-full max-w-[200px]">
              <Image src={TrackImg} alt="Track Image" className="w-full" />
            </div>
            <div className="w-full max-w-[200px]">
              <Image src={ReturnImg} alt="Track Image" className="w-full" />
            </div>
            <div className="w-full max-w-[200px]">
              <Image src={RewardImg} alt="Track Image" className="w-full" />
            </div>
            <div className="w-full max-w-[200px]">
              <Image src={WishListImg} alt="Track Image" className="w-full" />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-medium text-[18px]">
              Frequently Asked Questions
            </h3>
            <p className="">
              Here you'll find a hand picked selection of our most frequently
              asked questions. If you don't find what you need please feel free
              to
            </p>
            <Link className="underline" href="contact">
              contact us.
            </Link>
          </div>

          <div className="my-10">
            <h4 className="text-[30px]">SH0PPING</h4>
            <div className="my-1">
              <FaqWhite
                title="WHERE CAN I SHOP Activewear?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="DO YOU RESTOCK?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="WHEN WILL MY PRE-ORDER ARRIVE?"
                text="Please check your order confirmation to see your delivery window. Please don’t hesitate to contact us if you have further questions. Contact our Customer Care team here."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="WHEN WILL I BE CHARGED FOR PRE-ORDER?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="CAN I CANCEL MY PRE-ORDER?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
          </div>

          <div className="my-10">
            <h4 className="text-[30px]">MY ACCOUNT</h4>
            <div className="my-1">
              <FaqWhite
                title="HOW DO I CHANGE MY PASSWORD?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="CAN I HAVE MULTIPLE ACCOUNTS?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="HOW DO I EDIT MY SHIPPING ADDRESS?"
                text="If you have set up an account with us via our website simply sign in using your email address and password via the Account tab at the top right of any website page. Once logged in you can 'Manage Addresses' via the tab located in your Account Summary."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="HOW DO I DELETE MY ACCOUNT?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="UNSUBSCRIBING FROM OUR MAILING LIST?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
          </div>

          <div className="my-10">
            <h4 className="text-[30px]">ORDERS & RETURNS</h4>
            <div className="my-1">
              <FaqWhite
                title="HOW CAN I RETURN MY ORDER?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="WHEN WILL MY ORDER ARRIVE?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="HOW CAN I CHANGE MY ORDER?"
                text="If you have set up an account with us via our website simply sign in using your email address and password via the Account tab at the top right of any website page. Once logged in you can 'Manage Addresses' via the tab located in your Account Summary."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="HOW DO I TRACK MY ORDER?"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
            <div className="my-1">
              <FaqWhite
                title="RECEIVED THE WRONG ITEM IN MY ORDER"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum facere autem quam nostrum. Placeat, non."
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
