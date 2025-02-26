import Image, { StaticImageData } from "next/image";
export const ProductCard = ({
  image,
  title,
  color,
  price,
  sizes,
}: {
  image: StaticImageData;
  title: string;
  color: string;
  price: string;
  sizes: string[];
}) => {
  return (
    <div className="min-w-[200px] shadow-md">
      <Image className="w-full h-[450px]" src={image} alt={title} />

      <div className="p-4">
        <p className="text-gray-700 text-sm">{title}</p>
        <p className="text-gray-700 text-xs">{color}</p>
        <div className="text-gray-900 font-bold text-sm">AU$ {price}</div>
      </div>

      <div className="p-4">
        {sizes.map((size) => (
          <span
            key={size}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};
