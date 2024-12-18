import ForestLogo from "@/app/icons/ForestLogo";

const Logo: React.FC = () => {
  return (
    <div className="h-full w-[60%] flex items-center gap-[12px]">
      <div className="w-[42px]">
        <ForestLogo width="42px" height="42px" />
      </div>
      <div>
        <div className="flex flex-col">
          <span
            style={{ fontFamily: "Roboto" }}
            className="inline-block text-[14px] font-[500] leading-[16.41px]  text-[#18226B] whitespace-nowrap"
          >
            Засгийн газрын
          </span>
          <span
            style={{ fontFamily: "Roboto" }}
            className="inline-block text-[14px] font-[500] leading-[16.41px] text-[#18226B] whitespace-nowrap"
          >
            хэрэгжүүлэгч агегтлаг
          </span>
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-[14px] font-[500] leading-[16.41px] text-[#1A593B] whitespace-nowrap"
          >
            Ойн газар
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
