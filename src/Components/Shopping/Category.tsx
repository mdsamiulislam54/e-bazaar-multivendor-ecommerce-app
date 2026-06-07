"use client"

import React, { useState } from "react"
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from "react-icons/md"

type Product = {
  category: string
  subCategory: string
}

interface CategoryProps {
  products: Product[]
  setSelectedCategory: (category: string) => void
}

export const Category: React.FC<CategoryProps> = ({
  products,
  setSelectedCategory,
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const categories = products?.reduce((acc: Record<string, Set<string>>, product) => {
    if (!acc[product.category]) acc[product.category] = new Set<string>()
    acc[product.category].add(product.subCategory)
    return acc
  }, {})

  const handleSubCategoryClick = (sub: string) => {
    setSelectedCategory(sub)
  }

  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-xl p-4">

      {/* Title */}
      <p className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
        Category
      </p>

      <ul className="space-y-3">

        {Object.keys(categories).map((category) => (
          <li key={category} className="space-y-2">

            {/* Main Category */}
            <button
              onClick={() =>
                setOpenCategory(openCategory === category ? null : category)
              }
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-[#111] hover:bg-gray-200 dark:hover:bg-[#1a1a1a] transition text-sm font-semibold text-gray-900 dark:text-white"
            >
              {category}
              <MdOutlineArrowDropDown
                className={`transition-transform ${
                  openCategory === category ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sub Category */}
            {openCategory === category && (
              <ul className="ml-2 space-y-2">

                {Array.from(categories[category]).map((sub) => (
                  <li
                    key={sub}
                    onClick={() => handleSubCategoryClick(sub)}
                    className="flex items-center justify-between px-4 py-2 rounded-lg text-sm cursor-pointer border border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#151515] hover:border-gray-300 dark:hover:border-gray-700 transition"
                  >
                    {sub}
                    <MdOutlineArrowRight className="opacity-60" />
                  </li>
                ))}

              </ul>
            )}

          </li>
        ))}

      </ul>
    </div>
  )
}