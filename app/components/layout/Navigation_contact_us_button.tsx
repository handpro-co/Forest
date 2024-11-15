import ArrowRigth from "@/app/icons/ArrowRigth";
const NavigationContactUsButton: React.FC = () => {
  return (
    <button className=" relative flex h-[44px] gap-[8px] text-[15px] font-[500] text-[#fff] bg-[#333333] rounded-[12px] leading-[17.66px] items-center flex p-[8px] hover:bg-[#14B75F]  hover:gap-[16px] transition-all duration-300">
      <div>Санал хүсэлт</div>
      <ArrowRigth />
    </button>
  );
};
export default NavigationContactUsButton;
