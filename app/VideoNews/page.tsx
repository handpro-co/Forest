import Image from "next/image"; // Use Next.js optimized Image component
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import Banner from "./components/photos/VideoNewsBanner.png";

const VideoNews: React.FC = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        {/* Optimized Image Component */}
        <Image
          src={Banner}
          alt="Banner"
          className="w-full rounded-[16px] h-[50vh] object-cover"
          priority // Ensures the image loads faster
        />

        <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[24px]">
            <div className="border-t border-[#94D1B0] border-dashed" />
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-[8px]">
                <span className="text-[#14B75F] text-sm font-medium leading-[16.48px]">
                  2024-08-28
                </span>
                <div className="flex flex-col gap-[2px] items-center">
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                </div>
                <span className="text-[#14B75F] text-sm font-medium leading-[16.48px]">
                  Зурагт мэдээ
                </span>
              </div>
              <div className="flex gap-[12px]">
                <div className="flex gap-[8px] items-center">
                  <TbBrandFacebook className="text-[#666666]" />
                  <span className="text-sm font-medium text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <LuPrinter className="text-[#666666]" />
                  <span className="text-sm font-medium text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold leading-[40.96px] text-[#333333]">
              БАЙГАЛЬ ОРЧНЫ ГАВЬЯАТ АЖИЛТАН, ДОКТОР, ПРОФЕССОР Д.ЭНХСАЙХАН
            </div>
          </div>

          <div className="w-full flex flex-col gap-[48px]">
            <div className="text-base leading-[22px] text-[#666666]">
              {`"Ойн салбарын" 100 жилийн ойд зориулсан зорилтот нэвтрүүлгийн
              дугаар-1 Ойн салбарын түүхэн хөгжил, ой гэх тодорхойлолт хэрхэн
              шинэчлэгдэх шаардлагатай талаар болон мод, сөөгийн онцлог, ялгаа
              гэсэн сэдвийн хүрээнд ахмад ойн аж ахуйн инженер, Байгаль орчны
              гавьяат ажилтан, доктор, профессор Д.Энхсайхан оролцлоо.`}
            </div>

            {/* Responsive YouTube Video */}
            <div className="w-full relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/8Qs9qzur53s"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <RelatedNews />
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
