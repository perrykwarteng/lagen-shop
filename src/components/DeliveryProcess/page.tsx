import Image from "next/image";
import DeliveryIcon from "../../../public/icons/fast-delivery.svg";
import ReturnIcon from "../../../public/icons/product-return.svg";
import MailIcon from "../../../public/icons/love-letter.svg";
import CloudIcon from "../../../public/icons/cloud.svg";

export const DeliveryProcess = () => {
  return (
    <div className="w-full py-14 border-t-2 border-gray-300 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-20">
      <div className=" flex flex-col items-center">
        <Image className="w-[130px]" src={DeliveryIcon} alt="" />
        <h3 className="text-[20px] font-medium">Express Shipping</h3>
        <p className="text-[14px]">Easy come, easy go</p>
      </div>
      <div className=" flex flex-col items-center">
        <Image className="w-[100px]" src={ReturnIcon} alt="" />
        <h3 className="text-[20px] font-medium">Hassle Free Returns</h3>
        <p className="text-[14px]">Easy returns for all</p>
      </div>
      <div className=" flex flex-col items-center">
        <Image className="w-[100px]" src={CloudIcon} alt="" />
        <h3 className="text-[20px] font-medium">Carbon Neutral</h3>
        <p className="text-[14px]">Our planet matters</p>
      </div>
      <div className=" flex flex-col items-center">
        <Image className="w-[100px]" src={MailIcon} alt="" />
        <h3 className="text-[20px] font-medium">Customer Love</h3>
        <p className="text-[14px]">Here for you 24/7</p>
      </div>
    </div>
  );
};
