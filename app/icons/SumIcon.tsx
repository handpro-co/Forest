import React from "react";

interface SumProps {
  color?: string;
  width?: string;
  height?: string;
}

const Sum: React.FC<SumProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width ? width : "16px"}
      height={height ? height : "16px"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color || "#333"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sum;
