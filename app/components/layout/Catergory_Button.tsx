import React from "react";

interface CategoryItemProps {
  category: string;
  index: number;
  selectedCategoryIndex: number;
  onClick: (index: number) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  index,
  selectedCategoryIndex,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`${
        selectedCategoryIndex === index ? "bg-[#DEFF94]" : ""
      } text-[#333] py-[20px] px-[24px] rounded-[12px] cursor-pointer`}
    >
      {category}
    </div>
  );
};

export default CategoryItem;
