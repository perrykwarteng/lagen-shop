import Image from "next/image";
import Layout from "@/components/Layout/layout";
import headerImage from "../../../../public/images/RewardHeader-image.jpg";
import BirthdayRewardsImg from "../../../../public/images/birthday-reward.jpg";
import VipAccessImg from "../../../../public/images/vip-access.jpg";
import ExclusiveImg from "../../../../public/images/exclusive-offer.jpg";
import { DeliveryProcess } from "@/components/DeliveryProcess/page";
import { FaqBlack } from "@/components/FaqBlack/page";
import { FaqWhite } from "@/components/FaqWhite/page";

export default function LagenRewards() {
  return (
    <>
      <Layout>
        <div className="min-w-screen">
          <Image className="w-full h-full" src={headerImage} alt="" />
        </div>
        <div className="px-5 md:px-10 pt-5 md:pt-12">
          <h2 className="text-[23px] font-semibold">BECOME A MEMBER</h2>
          <p>
            Embark on an enhanced shopping journey tailored exclusively for our
            esteemed La’gen Rewards members. Unlock a wide array of exclusive
            offers and rewards that progressively elevate as you advance through
            our tiered program. Take the first step towards your loyalty journey
            by signing up now and experiencing the exceptional benefits that
            await you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 py-8">
          <div className="w-full md:w-[70%]">
            <Image className="w-full" src={BirthdayRewardsImg} alt="" />
          </div>
          <div className="w-full md:w-[45%] px-10">
            <h2 className="text-[23px] font-semibold">BIRTHDAY REWARDS</h2>
            <p className="my-3">
              In recognition of your valued loyalty, we extend a special offer
              to commemorate your special day and celebrate you in a truly
              remarkable way.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-5 py-8">
          <div className="w-full md:w-[45%] px-10">
            <h2 className="text-[23px] font-semibold">VIP ACCESS</h2>
            <p className="my-3">
              Experience the privilege of early VIP access to new collections,
              restocked items, and exclusive sales, along with a host of
              additional perks offered throughout the year.
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <Image className="w-full" src={VipAccessImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 py-8">
          <div className="w-full md:w-[70%]">
            <Image className="w-full" src={ExclusiveImg} alt="" />
          </div>
          <div className="w-full md:w-[45%] px-10">
            <h2 className="text-[23px] font-semibold">EXCLUSIVE OFFERS</h2>
            <p className="my-3">
              Gain access to exclusive offers that are reserved solely for our
              esteemed La’gen Rewards members. Enjoy the benefits of limited
              edition releases, private sales, priority shipping, and receive
              special invitations to attend exclusive SIR. loyalty events.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[70%] px-5 md:px-10 my-6">
          <h2 className="text-[23px] font-semibold">LOYALTY BENEFITS</h2>
          <p className="my-3">
            Enroll as a La’gen Rewards member and unlock an array of exclusive
            rewards and benefits reserved just for you. Enjoy these exceptional
            privileges as part of your membership:
          </p>
        </div>
        {/* FAQs One*/}
        <div className="px-5 md:px-10 flex flex-col gap-3">
          <FaqBlack
            title="Member"
            text="MEMBER 0+ points Gain entry to the esteemed La’gen Rewards programme Earn 1 point for every $1 spent, paving your way through loyalty tiers Experience delightful surprises, offers, and gifts throughout the year"
          />
          <FaqBlack
            title="Tier one"
            text="MEMBER 0+ points Gain entry to the esteemed La’gen Rewards programme Earn 1 point for every $1 spent, paving your way through loyalty tiers Experience delightful surprises, offers, and gifts throughout the year"
          />
          <FaqBlack
            title="Tier Two"
            text="MEMBER 0+ points Gain entry to the esteemed La’gen Rewards programme Earn 1 point for every $1 spent, paving your way through loyalty tiers Experience delightful surprises, offers, and gifts throughout the year"
          />
          <FaqBlack
            title="Tier three"
            text="MEMBER 0+ points Gain entry to the esteemed La’gen Rewards programme Earn 1 point for every $1 spent, paving your way through loyalty tiers Experience delightful surprises, offers, and gifts throughout the year"
          />

          <button className="bg-black w-full md:w-[85%] px-20 py-3 my-5 text-white uppercase">
            Join now
          </button>
        </div>

        {/* FAQs Two */}
        <div className="px-5 md:px-10 my-20">
          <h2 className="text-[25px] font-semibold">REWARDS FAQS</h2>
          <p className="text-[14]">
            Learn more about La’gen Rewards and how it works.
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <FaqWhite
              title="WHAT IS LA’GEN REWARDS?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="HOW DOES LA’GEN REWARDS WORK?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="HOW DO I JOIN?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="HOW DO I EARN POINTS?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="HOW DO I KNOW MY TIER STATUS?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="WHAT CAN I DO WITH MY POINTS?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
          </div>
        </div>

        <div className="px-5 md:px-10">
          <DeliveryProcess />
        </div>
      </Layout>
    </>
  );
}
