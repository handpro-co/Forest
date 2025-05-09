"use client";
import React, { useState } from "react";
import axios from "axios";
import FeedBackImage from "./components/photos/FeedBackPhoto.png";
import ArrowRigth from "../../icons/ArrowRigth";
import badEmoji from "./components/photos/badEmoji.png";
import goodEmoji from "./components/photos/goodEmoji.png";
import normalEmoji from "./components/photos/normal.png";
import veryBadEmoji from "./components/photos/veryBadEmoji.png";
import veryGoodEmoji from "./components/photos/veryHappyEmoji.png";
import correctIcon from "./components/photos/correctIcon.png"; // Correct icon for the corner
import { isPopShow } from "@/app/components/hook/accessibility";
import { useAtom } from "jotai";
const emojis = [
  { id: 1, src: veryBadEmoji.src, label: "Маш муу" },
  { id: 2, src: badEmoji.src, label: "Mуу" },
  { id: 3, src: normalEmoji.src, label: "Дундаж" },
  { id: 4, src: goodEmoji.src, label: "Сайн" },
  { id: 5, src: veryGoodEmoji.src, label: "Маш сайн" },
];

const FeedBack: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useAtom(isPopShow);
  const [showLengthError, setShowLengthError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const fl = false;
  if (fl) {
    console.log(showAlert);
  }
  const handleEmojiClick = (id: number) => {
    setSelectedEmoji(id);
  };

  const handleSubmit = async () => {
        // if () {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        // }
    // if (feedback.length > 10) {
    //   setShowLengthError(false);
    //   if (name.length > 3) {
    //     setShowNameError(false);
    //     if (email.length > 5) {
    //       setShowEmailError(false);

    //       if (phone.length >= 8) {
    //         setShowPhoneError(false);
    //         await axios
    //           .post("/api/feedback", {
    //             name,
    //             email,
    //             feedback,
    //             phone,
    //             emojiId: selectedEmoji,
    //           })
    //           .then((response) => {
            
    //           })
    //           .catch((error) => {
    //             console.error("Error submitting feedback:", error);
    //             alert("Error submitting feedback: " + error.message);
    //           });
    //       } else {
    //         setShowPhoneError(true);
    //       }
    //     } else {
    //       setShowEmailError(true);
    //     }
    //   } else {
    //     setShowNameError(true);
    //   }
    // } else {
    //   setShowLengthError(true);
    // }
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 flex justify-center items-center p-4 lg:p-0">
          <div className="w-full lg:w-[60%] h-auto flex flex-col gap-[53px]">
            {/* Header */}
            <div className="flex flex-col gap-[16px]">
              {/* Back Button */}
              <div className="flex items-center gap-[16px] cursor-pointer">
                <div
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-full transform rotate-180"
                >
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
                          ? "ring-4 ring-[#14B75F]"
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
                  Санал хүсэлтээ бичнэ үү.{" "}
                  <span className="text-[#FF0000]">
                    {" "}
                    {showLengthError ? "*санал хүсэлтээ оруулна уу" : null}
                  </span>
                </div>
                <div className="flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-[16px]">
                    <div className="">
                      <textarea
                        className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px]  h-[141px] resize-none"
                        name="Сэтгэгдэл үлдээх..."
                        id="feedback"
                        placeholder="Сэтгэгдэл үлдээх..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="w-[45%] flex flex-col  gap-[4px]">
                        <div>
                          Нэр{" "}
                          <span className="text-[#FF0000]">
                            {" "}
                            {showNameError ? "*нэр ээ оруулна уу" : null}
                          </span>
                        </div>
                        <input
                          className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px] h-[50px]  resize-none"
                          placeholder="Нэр"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="w-[45%] flex flex-col gap-[4px]">
                        <div>
                          И-мэйл{" "}
                          <span className="text-[#FF0000]">
                            {" "}
                            {showEmailError ? "*и-мэйл ээ оруулна уу" : null}
                          </span>
                        </div>
                        <input
                          className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px] h-[50px]  resize-none"
                          placeholder="И-мэйл"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-[4px]">
                      <div>
                        Утасны дугаар{" "}
                        <span className="text-[#FF0000]">
                          {" "}
                          {showPhoneError ? "*утасны дугаар оруулна уу" : null}
                        </span>
                      </div>
                      <input
                        className="w-full border-[#E2E2E2] bg-[#FBFBFB] border-[1px] rounded-[12px] py-[20px] px-[18px] h-[50px]  resize-none"
                        placeholder="Утасны дугаар"
                        value={phone}
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-[18px] px-[16px] bg-[#14B75F] text-[#fff] rounded-[44px]"
                  >
                    Илгээх
                  </button>
                  <span className="w-full text-center text-[#FF0000]">
                    {showLengthError ? "Та гүйцэд бөглөнө үү! " : ""}
                  </span>
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
    </>
  );
};

export default FeedBack;
