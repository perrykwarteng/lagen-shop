import Image from "next/image";
import Layout from "@/components/Layout/layout";
import { DeliveryProcess } from "@/components/DeliveryProcess/page";
import { FaqBlack } from "@/components/FaqBlack/page";
import { FaqWhite } from "@/components/FaqWhite/page";

export default function LagenRewards() {
  const memberPoints = [
    "Every $1 spent = 1 point",
    "Early Access to New Releases",
    "10% off first purchase for signing up",
  ];
  const pearlPoints = [
    "Every $1 spent = 1 point",
    "Free standard shipping",
    "Early Access to New releases",
    "Redeemable Rewards",
    "Birthday Bonus Points",
  ];
  const sapphirePoints = [
    "Every $1 spent = 1 point",
    "Free Express Shipping ",
    "Early Access to New Releases ",
    "Redeemable Rewards and Points",
    "Birthday Bonus Points",
    "10% off every order",
  ];
  const emeraldPoints = [
    "Every $1 spent = 1 point",
    "Free Express Shipping ",
    "Early Access to New Releases ",
    "Redeemable Rewards and Points",
    "Early Access to back in stock styles ",
    "First access to sales",
    "Secret Promo Codes ",
    "Free Gifts",
    "Invite to exclusive events ",
    "15% off every purchase ",
  ];
  const diamondPoints = [
    "Every $1 spent = 1 point",
    "Free Express Shipping ",
    "Early Access to New Releases ",
    "Redeemable Rewards and Points",
    "Early Access to back in stock styles ",
    "First access to sales",
    "Access to private VIP sales ",
    "Secret Promo Codes ",
    "Early Access to new collection Preview ",
    "20% off every order",
    "Dedicated online stylists ",
    "Invites to Exclusive Events, workshops, webinars",
    "Customised promotion and deals",
    "Birthday packages ",
    "Free gifts",
  ];
  const earningPoints = [
    "10 points per dollar spent on purchases",
    "50 points for referrals (new customers)",
    "20 points for product reviews and ratings",
    "10 points for social media engagement (follow, share, like)",
  ];

  return (
    <>
      <Layout>
        <div className="min-w-screen">
          <Image className="w-full h-full" src="/images/RewardHeader-image.jpg" alt="" unoptimized />
        </div>
        <div className="px-5 md:px-10 pt-5 md:pt-12">
          <h2 className="text-[23px] font-semibold">
            Welcome to Lagen and Buane's Exclusive Circle
          </h2>
          <p>
            At LB, we value your loyalty and appreciate your continued support.
            Our loyalty program is designed not only to elevate your shopping
            experience but to reward you for your purchases, referrals, and
            engagement. Join our exclusive circle and enjoy exclusive benefits,
            personalised perks and unforgettable experiences as you climb
            through membership tiers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 py-8">
          <div className="w-full md:w-[70%]">
            <Image className="w-full" src="/images/birthday-reward.jpg" alt="" unoptimized />
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
            <Image className="w-full" src="/images/vip-access.jpg" alt="" unoptimized />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 py-8">
          <div className="w-full md:w-[70%]">
            <Image className="w-full" src="/images/exclusive-offer.jpg" alt="" unoptimized />
          </div>
          <div className="w-full md:w-[45%] px-10">
            <h2 className="text-[23px] font-semibold">EXCLUSIVE OFFERS</h2>
            <p className="my-3">
              Gain access to exclusive offers that are reserved solely for our
              esteemed La'gen Rewards members. Enjoy the benefits of limited
              edition releases, private sales, priority shipping, and receive
              special invitations to attend exclusive SIR. loyalty events.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[70%] px-5 md:px-10 my-6">
          <h2 className="text-[23px] font-semibold">LOYALTY BENEFITS</h2>
          <p className="my-3">
            Enroll as a La'gen Rewards member and unlock an array of exclusive
            rewards and benefits reserved just for you. Enjoy these exceptional
            privileges as part of your membership:
          </p>
        </div>
        {/* FAQs One*/}
        <div className="px-5 md:px-10 flex flex-col gap-3">
          <FaqBlack title="Member (0+ points)" text={memberPoints} />
          <FaqBlack title="Pearl (1000 points)" text={pearlPoints} />
          <FaqBlack title="Sapphire (2000 points)" text={sapphirePoints} />
          <FaqBlack title="Emerald (5000 points )" text={emeraldPoints} />
          <FaqBlack title="Diamond ( 10,000 points)" text={diamondPoints} />
          <FaqBlack title="Earning Points" text={earningPoints} />

          <button className="bg-black w-full md:w-[85%] px-20 py-3 my-5 text-white uppercase">
            Join now
          </button>
        </div>

        {/* FAQs Two */}
        <div className="px-5 md:px-10 my-20">
          <h2 className="text-[25px] font-semibold">REWARDS FAQS</h2>
          <p className="text-[14]">
            Learn more about La'gen Rewards and how it works.
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <FaqWhite
              title="WHAT IS LA'GEN REWARDS?"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis
              minima. Recusandae distinctio, impedit saepe quaerat voluptatem modi
              aperiam."
            />
            <FaqWhite
              title="HOW DOES LA'GEN REWARDS WORK?"
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
