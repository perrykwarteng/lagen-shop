import Layout from "@/components/Layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="text-center px-5 md:px-10 py-3 md:py-10">
          <h2 className="text-[20px] md:text-[28px] text-[#333334]">
            CONTACT US
          </h2>
          <p className="mt-4">
            Our customer service team are available to help with your questions
            from 10am - 5pm AEST Monday to Friday. If you'd like to get in
            touch, please send us a message or use the contact information below
            to get in touch.
          </p>
        </div>
        <div className="px-5 md:px-10 py-3 md:py-10 flex flex-col md:flex-row md:items-center mb-28">
          <div className="w-full">
            <h3>Get In Touch</h3>
            <div className="mt-4">
              <div className="flex items-center gap-3 my-1">
                <Image className="w-7" src="/icons/mail.svg" alt="" />
                <Link href="#" className="underline">
                  online@la'gen.com
                </Link>
              </div>
              <div className="flex items-center gap-3 my-1">
                <Image className="w-7" src="/icons/facebook.svg" alt="" />
                <Link href="#" className="underline">
                  Facebook Messenger
                </Link>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="font-semibold">Returns & Exchanges</h3>
              <p>
                Please review our{" "}
                <Link className="underline" href="">
                  Returns & Exchanges
                </Link>{" "}
                page for further info.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold">Social Media</h3>
              <div className="mt-4">
                <div className="flex items-center gap-3 my-1">
                  <Image className="w-7" src="/icons/instagram.png" alt="" unoptimized />
                  <Link href="#" className="underline">
                    https://www.instagram.com/la'gen/
                  </Link>
                </div>
                <div className="flex items-center gap-3 my-1">
                  <Image className="w-7" src="/icons/tiktok.png" alt="" unoptimized />
                  <Link href="#" className="underline">
                    https://www.tiktok.com/@la'gen
                  </Link>
                </div>
                <div className="flex items-center gap-3 my-1">
                  <Image className="w-7" src="/icons/facebook.svg" alt="" />
                  <Link href="#" className="underline">
                    https://www.facebook.com/la'gen/
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form>
              <div className="my-3">
                <label className="text-[16px] text-[#000]">Your Name*</label>
                <input
                  className="w-full px-2.5 border-b border-[#000] outline-none"
                  type="text"
                />
              </div>
              <div className="my-3">
                <label className="text-[16px] text-[#000]">
                  Email address*
                </label>
                <input
                  className="w-full px-2.5 border-b border-[#000] outline-none"
                  type="email"
                />
              </div>
              <div className="my-3">
                <label className="text-[16px] text-[#000]">
                  Contact number
                </label>
                <input
                  className="w-full px-2.5 border-b border-[#000] outline-none"
                  type="text"
                />
              </div>
              <div className="my-3">
                <label className="text-[16px] text-[#000]">Message*</label>
                <textarea
                  className="w-full px-2.5 border-b border-[#000] outline-none"
                  rows={6}
                  name=""
                  id=""
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 mt-7 bg-black text-white shadow-lg"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
