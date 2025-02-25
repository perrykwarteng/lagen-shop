import { Heading } from "@/components/Heading/Heading";
import { ProductCard } from "@/components/ProductCard/page";
import { SortHeader } from "@/components/SortHeader/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import PictureOne from "../../../../public/images/picture1.png";
import Layout from "@/components/Layout/layout";

export default function Wishlist() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="px-5 md:px-10 py-3 md:py-10 flex items-center justify-center">
            <div className="w-[85%]">
              <div className="py-3">
                <Heading
                  heading="WISHLIST"
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

          <div className="my-24 px-16 md:px-24 lg:px-36">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
              <ProductCard
                image={PictureOne}
                title="Willow Wrap Sweatshirt"
                color="Beige"
                price="57.43"
                sizes={["S", "M", "L", "XL", "XXL"]}
              />
            </div>

            <div className="flex items-center justify-center">
              <button className="mt-10 border-2 border-black bg-white px-20 py-3 ml-3 text-black">
                LOAD MORE
              </button>
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
