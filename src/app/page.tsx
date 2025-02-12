import { Footer } from "@/components/Footer/page";
import { Heading } from "@/components/Heading/Heading";
import { Hero } from "@/components/Hero/page";
import { NavBar } from "@/components/NavBar/page";
import { NewsLetterForm } from "@/components/NewsLetterForm/pasge";
import { ProductCard } from "@/components/ProductCard/page";
import { SubscriptionBanner } from "@/components/SubscriptionBanner/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <div className="px-10 py-10">
          <Heading heading={"Trending"} />
          <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-8">
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="my-4">
          <NewsLetterForm />
        </div>
        <div className="">
          <SubscriptionBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
