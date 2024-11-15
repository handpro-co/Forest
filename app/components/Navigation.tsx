import AssasstintLogo from "@/app/icons/AssasstintLogo.png";
import USALogo from "@/app/icons/USALogo.png";
import Logo from "./layout/Logo";
import Navigation_hover_option from "./layout/Navigation_hover_option";
import Navigation_contact_us_button from "./layout/Navigation_contact_us_button";
const Navigation: React.FC = () => {
  return (
    <div className="border-b-[1px] border-[#ECEBE3] h-[80px] w-full fixed top-0 flex justify-between items-center px-[24px] py-[18px]">
      <div className="h-[44px]  flex gap-[32px] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]">
        <Logo />
        <div className="h-[40px] flex items-center gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center   bg-[#ECEBE3]">
            <img
              className="w-[32px] h-[32px] object-contain"
              src={AssasstintLogo.src}
              alt="HumanLogo.png"
            />
          </div>
          <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center   bg-[#ECEBE3]">
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
          <Navigation_hover_option />
          <Navigation_hover_option />
          <Navigation_hover_option />
          <Navigation_hover_option />
          <Navigation_hover_option />
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
