export const NewsLetterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <b className="text-[30px] font-[500]">SIGN UP FOR NEWSLETTER</b>
      <div className="text-[16px] mb-4 font-[400]">
        <b>Become a Member Today and Unlock Exclusive Benefits!</b>
      </div>

      <input
        className="bg-gray-300 py-4 text-base w-[480px] placeholder-gray-500 text-center justify-around"
        placeholder="EMAIL"
        type="text"
      />

      <div className="flex flex-row px-8 my-6">
        <button className="bg-black px-20 py-3 mr-5 text-white">
          {" "}
          JOIN US{" "}
        </button>
        <button className="border-2 border-black bg-white px-20 py-3 ml-3 text-black">
          {" "}
          SIGN UP
        </button>
      </div>
    </div>
  );
};
