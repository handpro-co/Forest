"use client";
import React, { useState, useEffect } from "react";
import CategoryItem from "@/app/components/layout/Catergory_Button"; // Ensure correct import path
import Sum from "@/app/icons/SumIcon";

// Define the type for the category
interface Category {
  id: number;
  name: string;
}

// Define the type for the component props
interface CategoryDropdownProps {
  categories: Category[];
  onClick?: (index: number) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  categories,
  onClick,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  // Set the first category as the default selected category when dropdown becomes visible
  useEffect(() => {
    if (
      isDropdownVisible &&
      categories.length > 0 &&
      selectedCategoryIndex === null
    ) {
      setSelectedCategoryIndex(0); // Set the first category as selected by default
    }
  }, [isDropdownVisible, categories, selectedCategoryIndex]);

  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
    setDropdownVisible(false);
    onClick?.(index);
  };

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <button
        onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown visibility
        className="w-full  "
      >
        <CategoryItem
          category={
            categories[selectedCategoryIndex]?.name ?? "Select Category"
          }
        >
          <Sum width="20px" height="20px" />
        </CategoryItem>
      </button>

      {isDropdownVisible && (
        <div className="relative ">
          <div className="h-[50vh] overflow-y-auto shadow-lg pt-[10px] fixed bg-white">
            {categories.length > 0 ? (
              categories.map((category, i) => (
                <CategoryItem
                  key={category.id}
                  category={category.name} // Correctly passing category name as prop
                  index={i} // Passing the index as prop
                  selectedCategoryIndex={selectedCategoryIndex} // Passing selectedCategoryIndex for styling purposes
                  onClick={() => handleCategoryClick(i)} // Use the handler here
                />
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
