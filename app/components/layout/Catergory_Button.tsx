import React from "react";
import { ReactNode } from "react";
interface CategoryItemProps {
  category?: string | undefined;
  index?: number;
  selectedCategoryIndex?: number;
  onClick?: (index: number) => void;
  children?: ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  index,
  selectedCategoryIndex,
  onClick,
  children,
}) => {
  return (
    <div
      onClick={() => onClick?.(index ?? 0)} // Use optional chaining to safely call onClick
      className={`${
        selectedCategoryIndex === index ? "bg-[#DEFF94]" : ""
      } text-[#333] py-[20px] px-[24px] rounded-[12px] cursor-pointer   whitespace-nowrap hover:bg-[#ECEBE3] flex items-center justify-between`}
    >
      {category ? category : "Category not found"}
      {children ? children : null}
    </div>
  );
};

export default CategoryItem;
