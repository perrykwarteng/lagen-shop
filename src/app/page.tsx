import Layout from "@/components/Layout/layout";
import { Hero } from "@/components/Hero/page";
import { ProductCard } from "@/components/ProductCard/page";
import { NewsLetterForm } from "@/components/NewsLetterForm/pasge";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import PictureOne from "../../public/images/picture1.png";
import PictureTwo from "../../public/images/h2.jpg";
import PictureThree from "../../public/images/h3.jpg";
import PictureFour from "../../public/images/h4.jpg";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="px-5 md:px-10 py-5 md:py-10">
        <div className="text-center">
          <h3 className="text-[20px] font-medium">TRENDING</h3>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
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
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureThree}
              title="Essential Zip Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image={PictureFour}
              title="Classic Crewneck Sweater"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <NewsLetterForm />
      </div>
      <SubscriptionBanner />
    </Layout>
  );
}
