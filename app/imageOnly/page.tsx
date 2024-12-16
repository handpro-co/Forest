"use client";
import React, { useState } from "react";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import ImageOnlyPhoto from "./components/Photos/ImageOnly.png";
import ArrowRigth from "../icons/ArrowRigth";

const ImageOnly: React.FC = () => {
  const images = [
    ImageOnlyPhoto.src,
    ImageOnlyPhoto.src,
    ImageOnlyPhoto.src,
    ImageOnlyPhoto.src,
    ImageOnlyPhoto.src,
    ImageOnlyPhoto.src,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[24px]">
            <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-[8px]">
                <span className="text-[#14B75F] text-[14px] font-medium">
                  2024-08-28
                </span>
                <div className="flex flex-col gap-[2px] items-center">
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                </div>
                <span className="text-[#14B75F] text-[14px] font-medium">
                  Зурагт мэдээ
                </span>
              </div>
              <div className="flex gap-[12px]">
                <div className="flex gap-[8px] items-center">
                  <TbBrandFacebook className="text-[#666666]" />
                  <span className="text-[14px] font-medium text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <LuPrinter className="text-[#666666]" />
                  <span className="text-[14px] font-medium text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[32px] leading-[40.96px] text-[#333333] font-bold">
              ДЭЛХИЙН БАНКНЫ ЗҮГЭЭС ТӨСӨЛ ХӨТӨЛБӨРӨӨР ДАМЖУУЛАН ХӨРӨНГӨ
              ОРУУЛАЛТЫГ НЭМЭГДҮҮЛЭХ БОЛОМЖ ИХ БУЙГ ОНЦЛОВ
            </div>
          </div>
          <div className="w-full flex flex-col gap-[48px]">
            <div className="w-full h-auto flex flex-col gap-[20px] overflow-hidden">
              <div className="w-full  h-auto flex justify-center gap-[10%]">
                <img
                  className="w-[45%] rounded-[12px]"
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                />
                <img
                  className="w-[45%] rounded-[12px]"
                  src={images[currentIndex + 1]}
                  alt={`Image ${currentIndex + 2}`}
                />
              </div>
              <div className="flex justify-end gap-[16px]">
                <div
                  onClick={handlePrevious}
                  className="cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-full transform rotate-180"
                >
                  <ArrowRigth color="#333333" />
                </div>

                <div
                  onClick={handleNext}
                  className="cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-full"
                >
                  <ArrowRigth color="#333333" />
                </div>
              </div>
            </div>
            <div className="font-normal  text-[#666666]">
              Монгол Улсын Их Хурлын чуулганы 2024 оны 01 дүгээр сарын 17-ны
              өдрийн нэгдсэн хуралдаанаар Хүүхдийн эрхийн тухай хуульд нэмэлт,
              өөрчлөлт оруулах тухай хуулийг хэлэлцэн баталсан...
            </div>
          </div>
        </div>
        <div>
          <RelatedNews newsData={null} />
        </div>
      </div>
    </div>
  );
};

export default ImageOnly;
