import Layout from "@/components/Layout/layout";
import { Hero } from "@/components/Hero/page";
import { ProductCard } from "@/components/ProductCard/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";

import { Testimonials } from "@/components/Testimonial/page";
import { CarefreeClassics } from "@/components/CareLess/page";
import { ProductHighlights } from "@/components/ProductHighlight/page";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="px-4 sm:px-6 mt-6 sm:mt-8 md:mt-9">
        <ProductHighlights />
      </div>
      <div className="px-4 sm:px-5 md:px-10 py-6 sm:py-8 md:py-10">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">TRENDING</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
            <ProductCard
              image="/images/picture1.png"
              title="Willow Wrap Sweatshirt"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/h2.jpg"
              title="Cozy Knit Pullover"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/h3.jpg"
              title="Essential Zip Hoodie"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
            <ProductCard
              image="/images/h4.jpg"
              title="Classic Crewneck Sweater"
              color="Beige"
              price="57.43"
              sizes={["S", "M", "L", "XL", "XXL"]}
            />
          </div>
        </div>
      </div>
      <CarefreeClassics />
      <Testimonials />
      <SubscriptionBanner />
    </Layout>
  );
}
