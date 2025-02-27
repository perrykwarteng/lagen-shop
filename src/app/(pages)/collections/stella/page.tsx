import { Heading } from "@/components/Heading/Heading";
import Layout from "@/components/Layout/layout";
import { ProductCard } from "@/components/ProductCard/page";
import { SortHeader } from "@/components/SortHeader/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import PictureOne from "../../../../../public/images/c1.jpg";
import PictureTwo from "../../../../../public/images/c2.jpg";
import PictureThree from "../../../../../public/images/c3.jpg";
import PictureFour from "../../../../../public/images/c4.jpg";
import PictureFive from "../../../../../public/images/h3.jpg";
import PictureSix from "../../../../../public/images/h4.jpg";

export default function Collections() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="px-5 md:px-10 py-3 md:py-10 flex items-center justify-center">
            <div className="w-[85%]">
              <div className="py-3">
                <Heading
                  heading="STELLA VIVACITY"
                  text="Lorem ipsum dolor sit amet consectetur. Mattis hendrerit vel
                mattis justo metus arcu sagittis duis. Nulla eu posuere
                pellentesque tortor fermentum elementum dignissim. At in egestas
                tempor donec. Nisl venenatis vitae amet sapien."
                />
              </div>
            </div>
          </div>

          <div>
            <SortHeader />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureTwo}
                title="Cozy Knit Pullover"
                color="Gray"
                price="49.99"
                sizes={["S", "M", "L", "XL"]}
              />
              <ProductCard
                image={PictureThree}
                title="Relaxed Fit Hoodie"
                color="Navy Blue"
                price="64.99"
                sizes={["M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureFour}
                title="Casual Zip-Up Jacket"
                color="Black"
                price="72.50"
                sizes={["S", "M", "L"]}
              />
              <ProductCard
                image={PictureFive}
                title="Vintage Crewneck Sweater"
                color="Olive Green"
                price="59.99"
                sizes={["XS", "S", "M", "L", "XL"]}
              />
              <ProductCard
                image={PictureSix}
                title="Lightweight Fleece Hoodie"
                color="Burgundy"
                price="54.75"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
            </div>
          </div>

          <div>
            <SubscriptionBanner />
          </div>
        </div>
      </Layout>
    </>
  );
}
