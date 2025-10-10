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
  image: StaticImageData | string;
  title: string;
  color: string;
  price: string;
  sizes: string[];
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [hoveringDisabled, setHoveringDisabled] = useState(false);

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
    <div className="max-w-full sm:max-w-[350px] shadow-md rounded-lg sm:rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl relative group">
      <div className="relative">
        <Image
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={title}
          width={400}
          height={450}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
        />
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-gray-700 text-sm sm:text-base font-medium line-clamp-2 mb-1">{title}</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">{color}</p>
        <div className="text-gray-900 font-bold text-sm sm:text-base">AU$ {price}</div>
      </div>

      <div className="px-3 sm:px-4 pb-3 sm:pb-4 relative">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => !selectedSize && setHoveringDisabled(true)}
          onMouseLeave={() => setHoveringDisabled(false)}
        >
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
              selectedSize
                ? "bg-black text-white hover:bg-gray-800 active:bg-gray-900"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>

          {/* Tooltip */}
          {!selectedSize && hoveringDisabled && (
            <div className="absolute top-[-38px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-md z-10">
              Select size
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-2 h-2 bg-black rotate-45"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
