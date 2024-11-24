"use client";
import React, { useState } from "react";
import FeedBackImage from "./components/photos/FeedBackPhoto.png";
import ArrowRigth from "../icons/ArrowRigth";
import badEmoji from "./components/photos/badEmoji.png";
import goodEmoji from "./components/photos/goodEmoji.png";
import normalEmoji from "./components/photos/normal.png";
import veryBadEmoji from "./components/photos/veryBadEmoji.png";
import veryGoodEmoji from "./components/photos/veryHappyEmoji.png";
import correctIcon from "./components/photos/correctIcon.png"; // Correct icon for the corner

const emojis = [
  { id: 1, src: veryBadEmoji.src, label: "Маш муу" },
  { id: 2, src: badEmoji.src, label: "Mуу" },
  { id: 3, src: normalEmoji.src, label: "Дундаж" },
  { id: 4, src: goodEmoji.src, label: "Сайн" },
  { id: 5, src: veryGoodEmoji.src, label: "Маш сайн" },
];

const FeedBack: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  const handleEmojiClick = (id: number) => {
    setSelectedEmoji(id);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-3/5 flex justify-center items-center p-4 lg:p-0">
        <div className="w-full lg:w-[60%] h-auto flex flex-col gap-[53px]">
          {/* Header */}
          <div className="flex flex-col gap-[16px]">
            {/* Back Button */}
            <div className="flex items-center gap-[16px] cursor-pointer">
              <div className="w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-full transform rotate-180">
                <ArrowRigth color="#333333" />
              </div>
              <div className="text-[#666666] font-medium text-[16px] leading-[18.83px]">
                Буцах
              </div>
            </div>
            {/* Title */}
            <div className="font-bold text-[20px] lg:text-[26px] leading-[28px] lg:leading-[33px] text-[#333333]">
              Хэрэглэгчийн сэтгэл ханамжийн судалгаа
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            {/* Question */}
            <div className="flex flex-col gap-[16px]">
              <div className="font-medium text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px] text-[#333333]">
                Ойн газрын үйл ажиллагаанд хэр сэтгэл ханамжтай байдаг вэ?
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                {emojis.map((emoji) => (
                  <div
                    key={emoji.id}
                    onClick={() => handleEmojiClick(emoji.id)}
                    className={`relative flex flex-col bg-[#F5F4F0] p-[16px] w-[100px] items-center gap-[16px] rounded-[16px] cursor-pointer ${
                      selectedEmoji === emoji.id
                        ? "border-[3px] border-[#14B75F]"
                        : ""
                    }`}
                  >
                    {/* Correct Icon */}
                    {selectedEmoji === emoji.id && (
                      <div className="absolute top-[-10px] right-[-10px]">
                        <img
                          src={correctIcon.src}
                          alt="Selected"
                          className="w-[20px] h-[20px] rounded-full border-[2px] border-white"
                        />
                      </div>
                    )}
                    <img
                      className="w-[40px] h-[40px]"
                      src={emoji.src}
                      alt={emoji.label}
                    />
                    <div className="text-[#666666] font-medium text-[13px] leading-[15.13px]">
                      {emoji.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="leading-[20px] font-500">
                Санал хүсэлтээ бичнэ үү.
              </div>
              <div className="flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[16px]">
                  <div className="">
                    <textarea
                      className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px]  h-[141px] resize-none"
                      name="Сэтгэгдэл үлдээх..."
                      id="feedback"
                      placeholder="Сэтгэгдэл үлдээх..."
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="w-[45%] flex flex-col  gap-[4px]">
                      <div>Нэр</div>
                      <input
                        className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px] h-[50px]  resize-none"
                        placeholder="Нэр"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-[45%] flex flex-col gap-[4px]">
                      <div>И-мэйл</div>
                      <input
                        className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px] h-[50px]  resize-none"
                        placeholder="И-мэйл"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <button className="w-full py-[18px] px-[16px] bg-[#14B75F] text-[#fff] rounded-[44px]">
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/5 flex justify-center items-center p-4 lg:p-0">
        <img
          src={FeedBackImage.src}
          alt="Feedback"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default FeedBack;
