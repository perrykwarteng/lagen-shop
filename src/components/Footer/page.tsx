import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../public/icons/facebook.png";
import Twitter from "../../../public/icons/twitter.png";
import Instagram from "../../../public/icons/instagram.png";
import Pinterest from "../../../public/icons/pinterest.png";
import Tiktok from "../../../public/icons/tiktok.png";
import PaymentMode from "../../../public/icons/payment-mode.jpg";

export const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between px-10 pt-12 pb-5 border-b-2 border-[#6B7280] bg-[#F9FAFB]">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="about">
            <h3 className="pb-2 text-[18px]">
              <b>ABOUT US</b>
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-[14px] text-[#6B7280]">
                The Brand
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Referral
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Blog
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Reviews
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Loyalty Program
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Gift cards
              </Link>
            </div>
          </div>
          <div className="">
            <div className="pb-2 text-[18px]">
              <b> INFORMATION </b>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="faqs" className="text-[14px] text-[#6B7280]">
                Help Center
              </Link>
              <Link href="/wishlist" className="text-[14px] text-[#6B7280]">
                Wishlist
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Shipping info
              </Link>
              <Link
                href="/terms&condition"
                className="text-[14px] text-[#6B7280]"
              >
                Terms and Conditions
              </Link>
              <Link href="/policy" className="text-[14px] text-[#6B7280]">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="pb-2 text-[18px]">
              <b> Customer support </b>
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-[14px] text-[#6B7280]">
                Contact Us
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Sizing Guide
              </Link>
              <Link href="#" className="text-[14px] text-[#6B7280]">
                Track package
              </Link>
              <Link
                href="return&exchange"
                className="text-[14px] text-[#6B7280]"
              >
                Return and Exchange
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 md:justify-end">
          <div>
            <div className="pb-2 text-[18px]">
              <b> SOCIALS </b>
            </div>
            <div className="flex-col">
              <div className="flex gap-2">
                <div className="">
                  <Image src={Facebook} width="25" alt="Facebook" />
                </div>
                <div className="">
                  <Image src={Twitter} width="25" alt="X" />{" "}
                </div>
                <div className="">
                  <Image src={Instagram} width="25" alt="Instagram" />{" "}
                </div>
                <div className="">
                  <Image src={Pinterest} width="25" alt="Pinterest" />{" "}
                </div>
                <div className="">
                  <Image src={Tiktok} width="25" alt="Tiktok" />{" "}
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-24">
              <h3 className="text-[14px] font-[600] mb-2">
                SIGN UP FOR LA'GEN STYLE NEWS
              </h3>
              <div className="flex w-full items-center gap-1.5">
                <input
                  className="border-2 w-full px-2 py-2.5 text-[14px]"
                  placeholder="Your Email"
                  type="email"
                />
                <button className="px-4 py-[11px] bg-black text-[14px] text-white">
                  SUBSCRIBE
                </button>
              </div>
              <div className="text-[12px] mt-2">
                By clicking the SUBSCRIBE button, you are agreeing to our
                <Link href="/privacy-policy" className="text-blue-600 ms-1">
                  Privacy & Cookie Policy.
                </Link>
              </div>
              <div className="text-[14px] mt-2">WE ACCEPT</div>
              <div className="w-[350px] mt-5">
                <Image className="w-full" src={PaymentMode} alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 flex items-center justify-between">
        <div className="">
          <p className="text-[14px] text-[#6B7280]">
            ©2025 LA’GEN All Rights Reserved
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="#" className="text-[14px] text-[#6B7280] underline">
            Cookies Settings
          </Link>
          <Link
            href="terms&condition"
            className="text-[14px] text-[#6B7280] underline"
          >
            Terms & Conditions
          </Link>
          <Link href="#" className="text-[14px] text-[#6B7280] underline">
            Site Map
          </Link>
          <Link href="policy" className="text-[14px] text-[#6B7280] underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
