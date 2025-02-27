"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="max-w-[350px] shadow-md">
      <Image className="w-full h-[450px]" src={image} alt={title} />

      <div className="p-4">
        <p className="text-gray-700 text-sm">{title}</p>
        <p className="text-gray-700 text-xs">{color}</p>
        <div className="text-gray-900 font-bold text-sm">AU$ {price}</div>
      </div>

      <div className="p-4 flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
