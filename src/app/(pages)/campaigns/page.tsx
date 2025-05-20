import Layout from "@/components/Layout/layout";
import Image from "next/image";
import CamImgOne from "../../../../public/images/camOneImg.jpg";
import CamImgTwo from "../../../../public/images/camTwoImg.jpg";
import CamImgThree from "../../../../public/images/camThreeImg.jpg";
import Link from "next/link";

export default function Accessories() {
  return (
    <>
      <Layout>
        <div className="px-5 md:px-10 py-2 flex items-center justify-between gap-2 md:gap-4 list-none border-b border-black">
          <li>
            <Link
              href="campaigns/society"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              LB Society
            </Link>
          </li>
          <li>
            <Link
              href="campaigns/archive"
              className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700"
            >
              LB Archive
            </Link>
          </li>
          <li>
            <Link
              href="campaigns/feed"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              The Feed
            </Link>
          </li>

          <li>
            <Link
              href="campaigns/seen-social"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Seen on Social
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Collab Series
            </Link>
          </li>

          <li>
            <Link
              href="campaigns/undressed"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Undressed+
            </Link>
          </li>
        </div>

        <div className="px-5 md:px-10 md:py-8 py-2 text-center">
          <h2 className="text-[20px] md:text-[30px] font-medium">
            LB Nexus is the heartbeat of LA’GEN & BUANE universe.
          </h2>
          <p className="text-gray-600 text-sm">
            It’s not just a community —- it’s a collective of visionaries,
            creators, and loyalists. From early drops and private events to
            shaping the future of the brand. <br />
            Tag us @lagenbuane to be featured in LB Nexus.
          </p>
        </div>

        <div className="px-5 md:px-10 flex justify-center relative">
          <Image src={CamImgOne} alt="" />
          <div className="absolute bottom-10">
            <Link
              href={"lookbook"}
              className="mt-10 bg-black px-20 py-3 ml-3 text-white"
            >
              VIEW LB NEXUS
            </Link>
          </div>
        </div>

        <div className="px-5 md:px-10 flex justify-center relative pt-8">
          <Image src={CamImgTwo} alt="" />
          <div className="absolute bottom-10">
            <Link
              href={"lookbook"}
              className="mt-10 bg-black px-20 py-3 ml-3 text-white"
            >
              VIEW LB NEXUS
            </Link>
          </div>
        </div>

        <div className="px-5 md:px-10 flex justify-center relative pt-8">
          <Image src={CamImgThree} alt="" />
          <div className="absolute bottom-10">
            <Link
              href={"lookbook"}
              className="mt-10 bg-black px-20 py-3 ml-3 text-white"
            >
              VIEW LB NEXUS
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
