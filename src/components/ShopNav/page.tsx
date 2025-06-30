"use client";

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
  return (
    <nav className="w-full bg-white border border-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-center gap-12 overflow-x-auto">
        {(Object.keys(categories) as CategoryName[]).map((category) => (
          <div key={category} className="min-w-[200px]">
            <h3 className="text-lg font-bold mb-4">{category}</h3>
            {categories[category].map((group, i) => (
              <ul key={i} className="mb-4 space-y-1">
                {group.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-800 text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};
