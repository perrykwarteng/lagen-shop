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

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log({
        title,
        color,
        price,
        selectedSize,
      });
    } else {
      console.log("Please select a size before adding to cart.");
    }
  };

  return (
    <div className="max-w-[350px] shadow-md rounded-xl overflow-hidden bg-white transition hover:shadow-xl">
      <Image className="w-full h-[450px] object-cover" src={image} alt={title} />

      <div className="p-4">
        <p className="text-gray-700 text-sm">{title}</p>
        <p className="text-gray-500 text-xs">{color}</p>
        <div className="text-gray-900 font-bold text-sm">AU$ {price}</div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className={`w-full px-4 py-2 text-sm font-medium rounded-full transition ${
            selectedSize
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
