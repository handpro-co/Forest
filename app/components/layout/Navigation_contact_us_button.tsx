import ArrowRigth from "@/app/icons/ArrowRigth";
import { translate } from "../hook/language";
import { useAtom } from "jotai";
const NavigationContactUsButton: React.FC = () => {
  const [language] = useAtom(translate);
  return (
    <button className=" relative border-[0px] flex h-[44px] px-[18px] py-[14px] gap-[8px] text-[15px] font-[500] text-[#fff] bg-[#333333] rounded-[14px] leading-[17.66px] items-center flex  hover:bg-[#14B75F]  hover:scale-105 transition-all duration-300">
      <div>{language === "mn" ? "Санал хүсэлт" : "Feedback FAQ"}</div>
      <ArrowRigth color={"#fff"} />
    </button>
  );
};
export default NavigationContactUsButton;
