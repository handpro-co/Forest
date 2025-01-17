"use client";
import dynamic from "next/dynamic";
import animation from "./correct-icon.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Finish = () => {
  return (
    <>
      <div className="fixed w-full h-full bg-black/20 top-0 right-0 bottom-0 left-0 z-[490]"></div>
      <div className="fixed p-[20px] w-[80%] md:w-1/2 lg:w-1/2 xl:w-1/3  lg:auto lg:p-[50px]  rounded-[32px] top-1/2 left-1/2 -translate-y-1/2 bg-white -translate-x-1/2 flex flex-col items-center gap-[41.6px] z-[500] ">
        <div className="w-full ">
          <Lottie
            className=" h-[100px] md:h-[200px]"
            animationData={animation}
            loop={true}
          />
        </div>
        <div className="flex flex-col gap-[14.4px]">
          <span className="text-gray-700 text-[22px] md:text-[34px] font-[700] text-center">
            Таны хүсэлт амжилттай илгээгдлээ!
          </span>
          <span className="text-gray-500 text-[18px] md:text-[20px] font-[500] text-center">
            Баярлалаа! Таны хүсэлт дамжуулан үйлчилгээгээ сайжруулах болно.{" "}
          </span>
        </div>
        {/* <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="w-full rounded-[16px] font-[600] text-[18px] md:text-[20px] text-white bg-[#12B76A] px-[32px] py-[16px] duration-100 hover:scale-105"
        >
          Нүүр хуудас руу буцах
        </button> */}
      </div>
    </>
  );
};
export default Finish;
