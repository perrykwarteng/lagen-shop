export const Heading = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[30px] font-semibold uppercase ">{heading}</h2>
      <div className="w-[60px] h-1 bg-black rounded-md"></div>
      <p className="mt-4 text-center">{text}</p>
    </div>
  );
};
