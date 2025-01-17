"use client";
import ArrowRigth from "../icons/ArrowRigth";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";

import HomeeText from "./layout/HomeeText";
import { useEffect, useState } from "react";
const data = [
  {
    title: "220 тэрбум",
    text: "Монголын ойн сангийн нөөц",
  },
  {
    title: "640 сая",
    text: "Ургаа мод m³",
  },
  {
    title: "80 сая",
    text: "2024 онд тарьсан мод",
  },
];

const Homee: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [mute, setMute] = useState<boolean>(true);
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

  return (
    <>
      {videoSrc && (
        <video
          autoPlay
          loop
          muted={mute}
          className="absolute top-0 left-0 w-full h-[100vh] object-cover z-[-1]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="flex relative flex-col justify-center items-center lg:items-start w-full h-[90vh] bg-cover bg-center rounded-[24px] px-[20px] md:px-[56px] py-6 md:py-12 md:px-12 gap-[72px] md:gap-12">
        <div className="text-center lg:text-left text-white font-bold text-[32px] md:text-[52px] lg:text-[48px] xl:text-[56px] w-full md:w-2/3 xl:w-2/5 2xl:w-2/5">
          Амьдралын орчинг сайжруулна
        </div>
        {/* bugtai baij boloh button */}
        <button
          onClick={() => {
            setMute(!mute);
          }}
          className="absolute flex items-center justify-center  right-[50px] h-[40px] w-[40px]  top-[830px] rounded-full scale-110 z-5"
        >
          {mute ? (
            <GiSoundOn className="text-white text-[40px]" />
          ) : (
            <GiSoundOff className="text-white text-[40px]" />
          )}
        </button>
        <div className="w-full flex flex-wrap items-start justify-center mt-6 gap-4 md:mt-8 md:flex-row md:flex-wrap md:justify-start">
          {data.map((item, index) => (
            <HomeeText key={index} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="mt-6">
          <button className="bg-[#14B75F] flex items-center justify-center px-6 py-2 rounded-full gap-4 shadow-md hover:bg-[#12a150] transition-all">
            <span className="text-white font-medium text-lg">
              Үйлчилгээ авах
            </span>
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center transform rotate-90">
              <ArrowRigth color="#333" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Homee;
