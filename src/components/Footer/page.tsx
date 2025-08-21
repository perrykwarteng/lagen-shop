import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 lg:pt-12 pb-5 border-b-2 border-[#6B7280]">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 mb-6 lg:mb-0">
          <div className="about">
            <h3 className="pb-2 text-base sm:text-lg font-bold">
              ABOUT US
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                The Brand
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Referral
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Reviews
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Loyalty Program
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Gift cards
              </Link>
            </div>
          </div>
          <div>
            <div className="pb-2 text-base sm:text-lg font-bold">
              INFORMATION
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/faqs" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Help Center
              </Link>
              <Link href="/wishlist" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Wishlist
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Shipping info
              </Link>
              <Link
                href="/terms&condition"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link href="/policy" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="pb-2 text-base sm:text-lg font-bold">
              CUSTOMER SUPPORT
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Sizing Guide
              </Link>
              <Link href="#" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Track package
              </Link>
              <Link
                href="/return&exchange"
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                Return and Exchange
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-0">
          <div>
            <div className="pb-2 text-base sm:text-lg font-bold">
              SOCIALS
            </div>
                          <div className="flex gap-3 sm:gap-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/icons/facebook.png" width="25" height="25" alt="Facebook" unoptimized />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/icons/twitter.png" width="25" height="25" alt="X" unoptimized />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/icons/instagram.png" width="25" height="25" alt="Instagram" unoptimized />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/icons/pinterest.png" width="25" height="25" alt="Pinterest" unoptimized />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/icons/tiktok.png" width="25" height="25" alt="Tiktok" unoptimized />
                </Link>
              </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <h3 className="text-sm font-semibold mb-3">
              SIGN UP FOR LA'GEN STYLE NEWS
            </h3>
            <div className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2">
              <input
                className="border-2 w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your Email"
                type="email"
              />
              <button className="px-4 py-2.5 bg-black text-sm text-white hover:bg-gray-800 transition-colors whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
            <div className="text-xs mt-2 text-[#6B7280]">
              By clicking the SUBSCRIBE button, you are agreeing to our
              <Link href="/privacy-policy" className="text-blue-600 ms-1 hover:underline">
                Privacy & Cookie Policy.
              </Link>
            </div>
            <div className="text-sm mt-4 font-medium">WE ACCEPT</div>
            <div className="w-full max-w-[350px] mt-3">
              <Image className="w-full h-auto" src="/icons/payment-mode.jpg" alt="payment methods" width={350} height={200} unoptimized />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[#6B7280] text-center sm:text-left">
            ©2025 LA'GEN All Rights Reserved
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-[#6B7280] underline hover:text-black transition-colors">
            Cookies Settings
          </Link>
          <Link
            href="/terms&condition"
            className="text-sm text-[#6B7280] underline hover:text-black transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link href="#" className="text-sm text-[#6B7280] underline hover:text-black transition-colors">
            Site Map
          </Link>
          <Link href="/policy" className="text-sm text-[#6B7280] underline hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
