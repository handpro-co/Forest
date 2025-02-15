import ForestLogo from "@/app/icons/ForestLogo";
import { translate } from "../hook/language";
import { useAtom } from "jotai";
const Logo: React.FC = () => {
  const [language] = useAtom(translate);

  return (
    <>
      {language === "mn" ? (
        <div className="h-full w-[60%] flex items-center gap-[12px]">
          <div className="w-[42px]">
            <ForestLogo width="42px" height="42px" />
          </div>
          <div >
            <div className="flex flex-col">
              <span
                style={{ fontFamily: "Roboto" }}
                className="inline-block text-[10px] font-[500] leading-[16.41px]  text-[#18226B] whitespace-nowrap"
              >
                Засгийн газрын
              </span>
              <span
                style={{ fontFamily: "Roboto" }}
                className="inline-block text-[10px] font-[500] leading-[16.41px] text-[#18226B] whitespace-nowrap"
              >
                хэрэгжүүлэгч агентлаг
              </span>
              <span
                style={{ fontFamily: "Roboto" }}
                className="text-[12px] font-[500] leading-[16.41px] text-[#1A593B] whitespace-nowrap"
              >
                Ойн газар
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-[60%] flex items-center gap-[12px]">
          <div className="w-[42px]">
            <ForestLogo width="42px" height="42px" />
          </div>
          <div>
            <div className="flex flex-col">
              {/* <span
                style={{ fontFamily: "Roboto" }}
                className="inline-block text-[14px] font-[500] leading-[16.41px]  text-[#18226B] whitespace-nowrap"
              ></span> */}
              <span
                style={{ fontFamily: "Roboto" }}
                className="inline-block text-[14px] font-[500] leading-[16.41px] text-[#18226B] whitespace-nowrap"
              >
                Forest Agency{" "}
              </span>
              <span
                style={{ fontFamily: "Roboto" }}
                className="text-[14px] font-[500] leading-[16.41px] text-[#1A593B] whitespace-nowrap"
              >
                of Mongolia{" "}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logo;
