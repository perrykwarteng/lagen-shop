"use client";

import { useState } from "react";
import Link from "next/link";

type CategoryName = "Men Clothing" | "Women Clothing" | "Kids Clothing";
type CategoryGroup = string[][];
type Categories = Record<CategoryName, CategoryGroup>;

const categories: Categories = {
  "Men Clothing": [
    [
      "All Mens",
      "Jackets",
      "Tops",
      "Bottoms",
      "Co-Ords & Sets",
      "Hoodies & Jumpsuits",
    ],
    ["Boxers & Briefs", "Swimwear"],
  ],
  "Women Clothing": [
    [
      "All Women’s",
      "Dresses",
      "Tops",
      "Bottoms",
      "Jumpsuits & Playsuits",
      "Co-Ords & Sets",
      "Bodysuits",
    ],
    [
      "Skirts",
      "Jackets",
      "Hoodies & Jumpers",
      "Swimwear",
      "Lingerie & Sleepwear",
      "Underwear",
    ],
  ],
  "Kids Clothing": [
    ["All Kids", "3 - 5 years", "5 - 7 years", "7 - 10 years", "10 - 13 years"],
  ],
};

export const ShopNav = () => {
  const [hovered, setHovered] = useState<CategoryName | null>(null);

  return (
    <nav className="relative w-full bg-white border-b py-4">
      <ul className="flex justify-center gap-8 text-lg font-semibold relative">
        {(Object.keys(categories) as CategoryName[]).map((category) => (
          <li key={category} className="relative">
            <div
              className="group"
              onMouseEnter={() => setHovered(category)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-gray-900 text-[15px] transition">
                {category}
              </button>

              {hovered === category && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full p-6 grid grid-cols-2 md:grid-cols-3 gap-8 z-50 min-w-[500px] bg-white shadow-lg border">
                  {categories[category].map((group, i) => (
                    <ul key={i}>
                      {group.map((item) => (
                        <li key={item} className="my-1.5">
                          <Link
                            href="#"
                            className="text-gray-700 hover:text-gray-900 text-sm"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
