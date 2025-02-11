"use client";
import { TbBrightnessFilled } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { MdOutlineTextIncrease } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import USALogo from "@/app/icons/USALogo.png";
import MGLLogo from "@/app/icons/MGLLogo.png";
// import Logo from "./layout/Logo";
import Navigation_hover_option from "./layout/Navigation_hover_option";
import Navigation_contact_us_button from "./layout/Navigation_contact_us_button";
import navigation_options_data from "@/app/components/data/navigation_options_data";
import Navigation_click_option_screen from "./layout/Navigation_click_option_screen";
import { useEffect, useState } from "react";
import { CiLineHeight } from "react-icons/ci";
import { RxLetterSpacing } from "react-icons/rx";

import { IoAccessibility } from "react-icons/io5";
import { useAtom } from "jotai";
import {
  isAcc,
  isAccLetter,
  isAccLeading,
  isAccCursor,
  isAccLink,
  isInvert,
} from "./hook/accessibility";
import { translate } from "./hook/language";
import Frame from "../icons/Frame";

type Option = {
  optionId: number | string;
  name: string;
};

type MockData = {
  id: number;
  title?: { mn: string; en: string };
  options: Option[];
};

const a11y_Data = [
  { icon: TbBrightnessFilled, title: "Дэлгэцийн ялгарал" },
  { icon: IoIosLink, title: "Холбоос тодруулах" },
  { icon: BsCursor, title: "Хулганы хэмжээ томруулах" },
  { icon: MdOutlineTextIncrease, title: "Үсгийн хэмжээ томруулах" },
  { icon: CiLineHeight, title: "Мөр хоорондын зай нэмэх" },
  { icon: RxLetterSpacing, title: "Үсэг хоорондын зай нэмэх" },
];

const Navigation: React.FC = () => {
  const [datas, setDatas] = useState<MockData[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showA11y, setShowA11y] = useState<boolean>(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const [isLink, setIsLink] = useAtom(isAccLink);
  const [screeenAcci, setScreeenAcci] = useAtom(isAcc);
  const [isLeading, setIsLeading] = useAtom(isAccLeading);
  const [isAccLetterSpace, setIsAccLetterSpace] = useAtom(isAccLetter);
  const [isCursor, setIsCursor] = useAtom(isAccCursor);
  const [isColorInvert, setIsColorInvert] = useAtom(isInvert);
  const [language, setLanguage] = useAtom(translate);
  useEffect(() => {
    const data = navigation_options_data();
    setDatas(data);
    // console.log(data);
  }, []);

  const showModal = () => setShowA11y(!showA11y);

  const handleItemClick = (index: number) => {
    setSelectedIndexes((prevSelectedIndexes) =>
      prevSelectedIndexes.includes(index)
        ? prevSelectedIndexes.filter((item) => item !== index)
        : [...prevSelectedIndexes, index]
    );

    switch (index) {
      case 0:
        setIsColorInvert((prevAcci) => !prevAcci);
        break;
      case 1:
        setIsLink((prevAcci) => !prevAcci);
        break;
      case 2:
        setIsCursor((prevAcci) => !prevAcci);
        break;
      case 3:
        setScreeenAcci((prevAcci) => !prevAcci);
        break;
      case 4:
        setIsLeading((prevAcci) => !prevAcci);
        break;
      case 5:
        setIsAccLetterSpace((prevAcci) => !prevAcci);
        break;
      default:
        console.log(
          isLink,
          screeenAcci,
          isLeading,
          isAccLetterSpace,
          isCursor,
          isColorInvert
        );
        break;
    }
  };

  return (
    <nav className="w-full h-[70px] border-b-[1px] border-[#ECEBE3] h-[80px] fixed top-0 flex justify-between items-center px-[24px] py-[18px] bg-[#fff] z-[999] ">
      <div className="h-[44px] flex gap-[32px] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]">
        <a href="./">
          {/* <Logo /> */}
          <img className="h-full" src="/icon/Oin-Gazriin-Logo.png" alt="" />{" "}
        </a>

        <div className="hidden md:flex h-[40px] items-center gap-[12px]">
          <button
            onClick={showModal}
            className={`w-[40px] h-[40px] rounded-[50%] overflow-hidden p-[8px] flex items-center justify-center cursor-pointer ${
              showA11y ? "bg-[#14B75F] text-[white]" : "bg-[#ECEBE3]"
            }`}
            aria-label="Toggle accessibility settings"
          >
            <IoAccessibility />
          </button>

          {showA11y && (
            <div className="p-[30px] flex flex-col gap-[24px] fixed top-[80px] left-[100px] bg-white z-50 rounded-[24px]">
              <div className="relative">
                <h2 className="text-center text-[18px] font-semibold">
                  Хүртээмжийн тохиргоо
                </h2>
                <button
                  onClick={showModal}
                  className="w-[24px] h-[24px] absolute top-[50%] -translate-y-1/2 right-2 hover:scale-110"
                >
                  <RiCloseLine className="w-full h-full hover:text-[#14B75F] hover:rotate-90  transition-all duration-300" />
                </button>
              </div>
              <div className="gap-[16px] grid grid-cols-1 md:grid-cols-2">
                {a11y_Data.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleItemClick(i)}
                    className={`w-[200px] h-[120px] px-[26px] flex flex-col items-center justify-center gap-[12px] rounded-[16px] border-[1px] hover:scale-105 custom-link ${
                      selectedIndexes.includes(i)
                        ? "bg-[#14B75F] text-[white]"
                        : "bg-[#fff] text-[#333]"
                    } border-[#94D1B0] cursor-pointer transition-all duration-300`}
                  >
                    <item.icon className="w-[24px] h-[24px]" />
                    <p className="text-center">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setLanguage(language === "en" ? "mn" : "en");
            }}
            className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center bg-[#ECEBE3]"
            aria-label="USA logo"
          >
            <img
              className="w-[18px] h-[18px] object-contain"
              src={language === "mn" ? USALogo.src : MGLLogo.src}
              alt="USA Logo"
            />
          </button>
        </div>
      </div>

      <ul className="flex gap-[16px]">
        <li className="h-auto hidden xl:flex gap-[8px] items-center">
          {datas.map((item) => (
            <Navigation_hover_option
              key={item.id}
              title={language === "mn" ? item.title?.mn : item.title?.en}
              options={item.options}
            />
          ))}
          <a
            href="https://forest.gov.mn/website/contact_us.aspx"
            className="text-[15px] font-[500] text-[#333333] rounded-[12px]  items-center flex p-[8px] hover:bg-[#ECEBE3]"
          >
            {language === "mn" ? "Холбоо барих" : "Contact"}
          </a>
        </li>

        <li className="xl:hidden flex items-center">
          <button
            className={`text-[#333] p-[8px] rounded-[12px] ${
              isMenuOpen ? "bg-[#ECEBE3]" : "bg-[#fff]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Frame />
          </button>

          {isMenuOpen && (
            <div className="absolute  top-[80px] max-h-[90vh] overflow-y-auto left-0 bg-[#fff] w-full shadow-md p-[16px] z-[1000]">
              {datas.map((item) => (
                <div key={item.id} className="mb-[8px]">
                  <Navigation_click_option_screen
                    title={language === "mn" ? item.title?.mn : item.title?.en}
                    options={item.options}
                  />
                </div>
              ))}
              <div className="w-full flex justify-center my-[5px]">
                <a
                  href="https://forest.gov.mn/website/contact_us.aspx"
                  className="w-full text-[15px] font-[500] text-[#333333] cursor-pointer  text-center p-[8px] hover:bg-[#ECEBE3]"
                >
                  {language === "mn" ? "Холбоо барих" : "Contact"}
                </a>
              </div>

              <a href="./Feedback">
                <div className="flex justify-center items-center md:hidden">
                  <Navigation_contact_us_button />
                </div>
              </a>
              <div className="w-full">
                {" "}
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "mn" : "en");
                  }}
                  className="mx-auto my-[5px] w-[40px] h-[40px] rounded-[50%] overflow-hidden flex items-center justify-center bg-[#ECEBE3]"
                  aria-label="USA logo"
                >
                  <img
                    className="w-[18px] h-[18px] object-contain"
                    src={language === "mn" ? USALogo.src : MGLLogo.src}
                    alt="USA Logo"
                  />
                </button>
              </div>
            </div>
          )}
        </li>
        <a href="./Feedback">
          <li className="hidden md:flex">
            <Navigation_contact_us_button />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
