import Layout from "@/components/Layout/layout";
import Image from "next/image";
import CamImgOne from "../../../../public/images/camOneImg.jpg";
import CamImgTwo from "../../../../public/images/camTwoImg.jpg";
import CamImgThree from "../../../../public/images/camThreeImg.jpg";
import { Heading } from "@/components/Heading/Heading";
import Link from "next/link";

export default function Accessories() {
  return (
    <>
      <Layout>
        <div className="py-5 mt-5">
          <Heading heading="CAMPAIGNS" text={""} />
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
