import Layout from "@/components/Layout/layout";
import { Hero } from "@/components/Hero/page";
import { Heading } from "@/components/Heading/Heading";
import { ProductCard } from "@/components/ProductCard/page";
import { NewsLetterForm } from "@/components/NewsLetterForm/pasge";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="px-5 md:px-10 py-5 md:py-10">
        <Heading heading={"Trending"} />
        <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="my-4">
        <NewsLetterForm />
      </div>
      <SubscriptionBanner />
    </Layout>
  );
}
