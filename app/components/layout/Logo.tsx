import ForestLogo from "@/app/icons/ForestLogo.png";

const Logo: React.FC = () => {
  return (
    <div className="h-full w-[60%] flex items-center gap-[12px]">
      <img
        className="w-[42px] h-[42px] object-contain"
        src={ForestLogo.src}
        alt="Logo.png"
      />

      <div>
        <div className="flex flex-col">
          <span className="inline-block text-[14px] font-[500] leading-[16.41px] text-[#18226B] whitespace-nowrap">
            Засгийн газрын
          </span>
          <span className="inline-block text-[14px] font-[500] leading-[16.41px] text-[#18226B] whitespace-nowrap">
            хэрэгжүүлэгч агегтлаг
          </span>
          <span className="text-[14px] font-[500] leading-[16.41px] text-[#1A593B] whitespace-nowrap">
            Ойн газар
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
