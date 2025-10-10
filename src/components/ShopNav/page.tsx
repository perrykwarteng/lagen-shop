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
      "All Women's",
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
    <nav className="w-full bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center gap-16">
            {(Object.keys(categories) as CategoryName[]).map((category) => (
              <div key={category} className="min-w-[250px]">
                <h3 className="text-lg font-bold mb-6 text-gray-900">{category}</h3>
                {categories[category].map((group, i) => (
                  <ul key={i} className="mb-6 space-y-3">
                    {group.map((item) => (
                      <li key={item}>
                        <Link 
                          href="#" 
                          className="text-gray-700 text-sm hover:text-black transition-colors duration-200 block py-1"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-4 py-4 space-y-6">
          {(Object.keys(categories) as CategoryName[]).map((category) => (
            <div key={category}>
              <h3 className="text-base font-bold mb-3 text-gray-900 border-b border-gray-200 pb-2">
                {category}
              </h3>
              {categories[category].map((group, i) => (
                <ul key={i} className="mb-4 space-y-2">
                  {group.map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        className="text-gray-700 text-sm hover:text-black transition-colors duration-200 block py-2 px-2 rounded hover:bg-gray-50"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
