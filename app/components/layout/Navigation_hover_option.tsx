import Sum from "../../icons/SumIcon";

const Navigation_hover_option: React.FC = () => {
  return (
    <div className="relative  group">
      <div className="flex  gap-[8px] p-[8px] items-center cursor-pointer rounded-[12px] hover:bg-[#ECEBE3]">
        <div className="text-[15px] font-[500] text-[#333333] leading-[17.66px]">
          Ойн газар
        </div>
        <Sum />
      </div>

      <div className="absolute top-[40px]   bg-white shadow-md   rounded-md h-0 group-hover:cursor-pointer group-hover:h-[200px]  group-hover:p-[8px] overflow-hidden  transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <ul>
          <li className="rounded-[10px]   p-[12px] text-[14px] font-[500] leading-[16.48px] text-[#666666] hover:text-[#333333] hover:bg-[#ECEBE3]">
            Агентлагын бүтэц
          </li>
          <li className="rounded-[10px] p-[12px] text-[14px] font-[500] leading-[16.48px] text-[#666666] hover:text-[#333333] hover:bg-[#ECEBE3]">
            Эрхэм зорилго
          </li>
          <li className="rounded-[10px] p-[12px] text-[14px] font-[500] leading-[16.48px]  text-[#666666] hover:text-[#333333] hover:bg-[#ECEBE3]">
            Даргын мэдчилгээ
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation_hover_option;
