import Layout from "@/components/Layout/layout";
import { Heading } from "@/components/Heading/Heading";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SortHeader } from "@/components/SortHeader/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";

export default function Accessories() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="px-5 md:px-10 py-3 md:py-10 flex items-center justify-center">
            <div className="w-[85%]">
              <div className="py-3">
                <Heading
                  heading="ACCESSORIES"
                  heading2="Elevated Essentials. Defined Identity."
                  text="The LA'GEN & BUANE accessories line brings together function and finesse where sharp design meets everyday versatility. From sculpted headwear and detailed embroidery to refined jewellery, and signature socks etc. each piece is a finishing touch crafted to amplify your presence. Designed to move with intention, speak with style, and elevate your wardrobe from subtle to striking. It's the details that set you apart."
                />
              </div>
            </div>
          </div>

          <div>
            <SortHeader />
          </div>

          <div className="my-24 px-16 md:px-24 lg:px-36">
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                <ProductCard
                  image="/images/a1.jpg"
                  title="Elegant Wrap Cardigan"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
                <ProductCard
                  image="/images/a2.jpg"
                  title="Soft Touch Sweatshirt"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
                <ProductCard
                  image="/images/a3.jpg"
                  title="Urban Zip-Up Hoodie"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
                <ProductCard
                  image="/images/a4.jpg"
                  title="Minimalist Crewneck Pullover"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
                <ProductCard
                  image="/images/a5.jpg"
                  title="Lightweight Lounge Hoodie"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
                <ProductCard
                  image="/images/a6.jpg"
                  title="Classic Cotton Sweatshirt"
                  color="Beige"
                  price="57.43"
                  sizes={["S", "M", "L", "XL", "XXL"]}
                />
              </div>
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
