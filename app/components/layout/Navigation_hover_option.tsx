import Sum from "../../icons/SumIcon";
type Option = {
  optionId: number | string;
  name: string;
};

type NavigationHoverOptionProps = {
  title?: string;
  options: Option[];
};

const Navigation_hover_option: React.FC<NavigationHoverOptionProps> = ({
  title,
  options,
}) => {
  return (
    <div className="relative group">
      <div className="flex gap-[8px] p-[8px] items-center cursor-pointer rounded-[12px] hover:bg-[#ECEBE3]">
        <div className="text-[15px] font-[500] text-[#333333] leading-[17.66px]">
          {title}
        </div>
        <Sum />
      </div>

      <div className="absolute top-[40px] bg-white shadow-md rounded-md h-0 group-hover:cursor-pointer group-hover:h-auto group-hover:p-[8px] overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <ul>
          {options.map((option) => (
            <a
              key={option.name + option.optionId}
              href={`${option.optionId}`}
            >
              <li className="rounded-[10px] p-[12px] text-[14px] font-[500] leading-[16.48px] text-[#666666] hover:text-[#333333] hover:bg-[#ECEBE3] whitespace-nowrap overflow-hidden text-ellipsis">
                {option.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation_hover_option;
