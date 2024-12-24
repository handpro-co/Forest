"use client";
import React, { useState, useEffect } from "react";
import CategoryItem from "@/app/components/layout/Catergory_Button"; // Ensure correct import path
import Sum from "@/app/icons/SumIcon";

interface Category {
  id: number;
  name: string;
}

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

  useEffect(() => {
    if (
      isDropdownVisible &&
      categories.length > 0 &&
      selectedCategoryIndex === null
    ) {
      setSelectedCategoryIndex(0);
    }
  }, [isDropdownVisible, categories, selectedCategoryIndex]);

  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
    setDropdownVisible(false);
    onClick?.(index);
  };

  return (
    <div className="w-full flex flex-col ">
      <button
        onClick={() => setDropdownVisible(!isDropdownVisible)}
        className="w-full "
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
        <div className="relative w-full">
          <div className="h-[50vh] w-full overflow-auto shadow-lg pt-[10px] rounded-[8px]  bg-white flex flex-col ">
            {categories.length > 0 ? (
              categories.map((category, i) => (
                <div
                  className="border-b-[0.5px] border-gray-200"
                  key={category.id}
                >
                  <CategoryItem
                    category={category.name}
                    index={i}
                    selectedCategoryIndex={selectedCategoryIndex}
                    onClick={() => handleCategoryClick(i)}
                  />
                </div>
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
