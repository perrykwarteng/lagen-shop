import Image from "next/image";
import Layout from "@/components/Layout/layout";
import LookBookImg from "../../../../public/images/lookbookImg.jpg";
import ImageThree from "../../../../public/images/camThreeImg.jpg";

export default function LookBook() {
  return (
    <>
      <Layout>
        <div className="">
          <Image src={ImageThree} alt="" />
        </div>
        <div className="py-8 px-5 flex flex-col items-center justify-center">
          <p className="text-center w-full md:w-[70%]">
            It's here. Introducing the hot new drop of White Fox Active seamless
            to add to your everyday rotation. A figure flattering and body
            sculpting selection of seamless staples in new marle colour ways
          </p>
          <button className="bg-black px-20 py-3 ml-3 text-white mt-5">
            SHOP NOW
          </button>
        </div>
        <div className="">
          <Image src={LookBookImg} alt="" />
        </div>
      </Layout>
    </>
  );
}
