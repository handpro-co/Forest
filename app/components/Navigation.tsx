"use client";
import AssasstintLogo from "@/app/icons/AssasstintLogo.png";
import USALogo from "@/app/icons/USALogo.png";
import Logo from "./layout/Logo";
import Navigation_hover_option from "./layout/Navigation_hover_option";
import Navigation_contact_us_button from "./layout/Navigation_contact_us_button";
import navigation_options_data from "@/app/components/data/navigation_options_data";
import { useEffect, useState } from "react";

type Option = {
  optionId: number;
  name: string;
};

type MockData = {
  id: number;
  title: string;
  options: Option[];
};

const Navigation: React.FC = () => {
  const [datas, setDatas] = useState<MockData[]>([]);

  useEffect(() => {
    const data = navigation_options_data();
    setDatas(data);
  }, []);

  return (
    <div className="border-b-[1px] border-[#ECEBE3] h-[80px] w-full max-w-[1440px] fixed top-0 flex justify-between items-center px-[24px] py-[18px] bg-[#fff] z-[999]">
      <div className="h-[44px]  flex gap-[32px] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]">
        <Logo />
        <div className="h-[40px] flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center bg-[#ECEBE3]">
            <img
              className="w-[32px] h-[32px] object-contain"
              src={AssasstintLogo.src}
              alt="HumanLogo.png"
            />
          </div>
          <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center bg-[#ECEBE3]">
            <img
              className="w-[18px] h-[18px] object-contain"
              src={USALogo.src}
              alt="HumanLogo.png"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[16px]">
        <div className="flex gap-[8px] items-center">
          {datas.map((item) => (
            <div key={item.id}>
              <Navigation_hover_option
                title={item.title}
                options={item.options}
              />
            </div>
          ))}

          <div className="text-[15px] font-[500] text-[#333333] rounded-[12px] leading-[17.66px] items-center flex p-[8px] hover:bg-[#ECEBE3]">
            Холбоо барих
          </div>
        </div>
        <Navigation_contact_us_button />
      </div>
    </div>
  );
};

export default Navigation;
