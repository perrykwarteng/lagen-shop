export const Heading = ({
  heading,
  text,
  heading2,
}: {
  heading: string;
  text: string;
  heading2?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[30px] font-semibold uppercase ">{heading}</h2>
      <div className="w-[60px] h-1 bg-black rounded-md"></div>
      <p className="mt-4 font-medium text-[20px]">{heading2}</p>
      <p className="mt-2 text-center">{text}</p>
    </div>
  );
};
