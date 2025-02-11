// Homee.tsx

"use client";
import { DataItem, DataWithItems } from "@/app/types/types";

import { useAtom } from "jotai";
import ArrowRigth from "../icons/ArrowRigth";
import { isMute } from "./hook/accessibility";
import { translate } from "../components/hook/language";
import HomeeText from "./layout/HomeeText";
import { useEffect, useState } from "react";
import { data } from "../components/data/landingPageLanguage"; // Import data from data.ts

const Homee: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [language] = useAtom(translate); // Get the current language (mn/en)
  const [mute] = useAtom<boolean>(isMute);

  // Video selection logic based on time of day
  useEffect(() => {
    const getVideoByTime = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        return "/backgroundVideo/01.mp4";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "/backgroundVideo/02.mp4";
      } else {
        return "/backgroundVideo/03.mp4";
      }
    };

    setVideoSrc(getVideoByTime());
  }, []);

  // Helper function to get content based on the selected language
  const getLocalizedText = (key: { mn: string; en: string }) => {
    return language === "mn" ? key.mn : key.en;
  };

  // Helper function to safely get bigTitle from DataItem
  const getBigTitle = (dataItem: { bigTitle?: { mn: string; en: string } }) => {
    return dataItem.bigTitle ? getLocalizedText(dataItem.bigTitle) : "";
  };

  return (
    <>
      {videoSrc && (
        <video
          autoPlay
          loop
          controls={false}
          muted={mute}
          className="absolute top-0 left-0 w-full h-[100vh] object-cover z-[-1]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="flex flex-col justify-center items-center lg:items-start w-full h-[90vh] bg-cover bg-center rounded-[24px] px-[20px] md:px-[56px] py-6 md:py-12 md:px-12 gap-[72px] md:gap-12">
        {/* Title */}
        <div className="text-center lg:text-left text-[#14B75F] md:text-white font-bold text-[32px] md:text-[52px] lg:text-[48px] xl:text-[56px] w-full md:w-2/3 xl:w-2/5 2xl:w-2/5">
          {/* Ensure it's a DataItem */}
          {data[0] && "bigTitle" in data[0] && getBigTitle(data[0])}
        </div>

        {/* Items List */}
        <div className="w-full flex flex-wrap items-start justify-center mt-6 gap-4 md:mt-8 md:flex-row md:flex-wrap md:justify-start">
          {/* Type guard for DataWithItems */}
          {Array.isArray((data[1] as DataWithItems)?.items) && // Type guard check for `DataWithItems`
            (data[1] as DataWithItems).items.map((item, index) => (
              <HomeeText
                key={index}
                title={getLocalizedText(item.title)} // Mapping based on language
                text={getLocalizedText(item.text)} // Mapping based on language
              />
            ))}
        </div>

        {/* Service Button */}
        {language === "en" ? null : (
          <div className="mt-6">
            <button className="bg-[#14B75F] flex items-center justify-center px-6 py-2 rounded-full gap-4 shadow-md hover:bg-[#12a150] transition-all">
              <span className="text-white font-medium text-lg">
                {getLocalizedText((data[2] as DataItem).homeButton!)}{" "}
                {/* Mapping based on language */}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center transform rotate-90">
                <ArrowRigth color="#333" />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Homee;
