import Layout from "@/components/Layout/layout";
import { Hero } from "@/components/Hero/page";
import { Heading } from "@/components/Heading/Heading";
import { ProductCard } from "@/components/ProductCard/page";
import { NewsLetterForm } from "@/components/NewsLetterForm/pasge";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";
import PictureOne from "../../public/images/picture1.png";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="px-5 md:px-10 py-5 md:py-10">
        <Heading heading={"Trending"} text="" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
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
      </div>
      <div className="my-4">
        <NewsLetterForm />
      </div>
      <SubscriptionBanner />
    </Layout>
  );
}
