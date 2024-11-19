import { useState } from "react";
import Sum from "../../icons/SumIcon";
import Link from "next/link";
type Option = {
  optionId: string | number;
  name: string;
};

type NavigationClickOptionProps = {
  title: string;
  options: Option[];
};

const NavigationClickOption: React.FC<NavigationClickOptionProps> = ({
  title,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`flex flex-col  gap-[8px] items-center cursor-pointer border-b-[1px] border-[#ECEBE3] ${
          isOpen ? "text-[#fff]" : "text-[white"
        } ${isOpen ? "bg-[#14B75F]" : "bg-[#fff]"}`}
      >
        <div
          onClick={handleToggle}
          className="flex gap-[8px] p-[8px] items-center"
        >
          <div
            className={`text-[15px] font-[500]  leading-[17.66px] ${
              isOpen ? "text-[#fff]" : "text-[#333333]"
            }`}
          >
            {title}
          </div>
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <Sum color={isOpen ? "#fff" : undefined} />{" "}
          </div>
        </div>
        <div
          className={` w-full bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "h-auto opacity-100 p-[8px] translate-y-0"
              : "h-0 opacity-0 translate-y-4"
          }`}
        >
          <ul>
            {options.map((option) => (
              <Link
                key={option.name + option.optionId}
                href={`./${option.optionId}`}
              >
                <li className="rounded-[10px] p-[12px] text-[14px] font-[500] leading-[16.48px] text-[#666666] hover:text-[#333333] hover:bg-[#ECEBE3] whitespace-nowrap overflow-hidden text-ellipsis">
                  {option.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Conditional rendering based on the `isOpen` state */}
    </div>
  );
};

export default NavigationClickOption;
