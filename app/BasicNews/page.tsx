"use client";
import Banner from "./components/photos/Banner.png";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import newsData from "@/app/components/data/news";
import { useEffect, useState } from "react";

const BasicNews: React.FC = () => {
  const [goData, setGoData] = useState<any>([]);
  useEffect(() => {
    const data = newsData;
    setGoData(data);
  }, []);
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        <img
          className="w-full rounded-[16px] h-[50vh] object-cover  "
          src={Banner.src}
          alt="Banner"
        />
        <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[24px] ">
            <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-[8px]">
                <span className="flex items-center text-[#14B75F] text-[14px] font-500 ">
                  2024-08-28
                </span>
                <div className="flex flex-col gap-[2px] justify-center items-center">
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                </div>
                <span className="flex items-center text-[#14B75F] text-[14px] font-500 ">
                  Зурагт мэдээ
                </span>
              </div>
              <div className="flex gap-[12px]">
                <div className="flex gap-[8px]">
                  <TbBrandFacebook style={{ color: "#666666" }} />
                  <span className="text-[14px] font-500 text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
                <div className="flex gap-[8px]">
                  <LuPrinter style={{ color: "#666666" }} />
                  <span className="text-[14px] font-500  text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[32px]  text-[#333333] font-700">
              ДЭЛХИЙН БАНКНЫ ЗҮГЭЭС ТӨСӨЛ ХӨТӨЛБӨРӨӨР ДАМЖУУЛАН ХӨРӨНГӨ
              ОРУУЛАЛТЫГ НЭМЭГДҮҮЛЭХ БОЛОМЖ ИХ БУЙГ ОНЦЛОВ
            </div>
          </div>
          <div className="w-full  flex flex-col gap-[48px]">
            <p className="font-400  text-[#666666]">
              Монгол Улсын Их Хурлын чуулганы 2024 оны 01 дүгээр сарын 17-ны
              өдрийн нэгдсэн хуралдаанаар Хүүхдийн эрхийн тухай хуульд нэмэлт,
              өөрчлөлт оруулах тухай хуулийг хэлэлцэн баталсан. Хүүхдийн эрхийн
              тухай хуулийн 6.5-д “Хүүхдийн хөгжлийг дэмжих үйлчилгээ үзүүлэх
              байгууллага үйлчилгээний бодлого, хөтөлбөртэй байх бөгөөд эрх
              бүхий этгээдээс баталсан хүүхдийн хөгжлийг дэмжих үйлчилгээний
              стандартыг мөрдөж ажиллана.” гэж заасан. Иймд хуулийн хэрэгжилтийг
              хангах зорилгоор “Хүүхдийн хөгжлийг дэмжих үйлчилгээ, үйл
              ажиллагааны нийтлэг шаардлага” стандартын төслийг боловсрууллаа.
              <br />
              <br />
              Та бүхэн стандартын төсөлтэй танилцан саналаа тус яамны Гэр бүлийн
              бодлогын хэрэгжилтийг зохицуулах газарт baterdene@mflsp.gov.mn
              цахим хаягаар 2024 оны 09 дүгээр сарын 16-ны өдрийн дотор ирүүлнэ
              үү. Хавсралт хэсгээс стандартын төслийг бүрэн эхээр нь татаж авна
              уу.
              <br />
              <br />
              Монгол Улсын Их Хурлын чуулганы 2024 оны 01 дүгээр сарын 17-ны
              өдрийн нэгдсэн хуралдаанаар Хүүхдийн эрхийн тухай хуульд нэмэлт,
              өөрчлөлт оруулах тухай хуулийг хэлэлцэн баталсан. Хүүхдийн эрхийн
              тухай хуулийн 6.5-д “Хүүхдийн хөгжлийг дэмжих үйлчилгээ үзүүлэх
              байгууллага үйлчилгээний бодлого, хөтөлбөртэй байх бөгөөд эрх
              бүхий этгээдээс баталсан хүүхдийн хөгжлийг дэмжих үйлчилгээний
              стандартыг мөрдөж ажиллана.” гэж заасан. Иймд хуулийн хэрэгжилтийг
              хангах зорилгоор “Хүүхдийн хөгжлийг дэмжих үйлчилгээ, үйл
              ажиллагааны нийтлэг шаардлага” стандартын төслийг боловсрууллаа.
              <br />
              <br />
              Та бүхэн стандартын төсөлтэй танилцан саналаа тус яамны Гэр бүлийн
              бодлогын хэрэгжилтийг зохицуулах газарт baterdene@mflsp.gov.mn
              цахим хаягаар 2024 оны 09 дүгээр сарын 16-ны өдрийн дотор ирүүлнэ
              үү. Хавсралт хэсгээс стандартын төслийг бүрэн эхээр нь татаж авна
              уу. Монгол Улсын Их Хурлын чуулганы 2024 оны 01 дүгээр сарын 17-ны
              өдрийн нэгдсэн хуралдаанаар Хүүхдийн эрхийн тухай хуульд нэмэлт,
              өөрчлөлт оруулах тухай хуулийг хэлэлцэн баталсан. Хүүхдийн эрхийн
              тухай хуулийн 6.5-д “Хүүхдийн хөгжлийг дэмжих үйлчилгээ үзүүлэх
              байгууллага үйлчилгээний бодлого, хөтөлбөртэй байх бөгөөд эрх
              бүхий этгээдээс баталсан хүүхдийн хөгжлийг дэмжих үйлчилгээний
              стандартыг мөрдөж ажиллана.” гэж заасан. Иймд хуулийн хэрэгжилтийг
              хангах зорилгоор “Хүүхдийн хөгжлийг дэмжих үйлчилгээ, үйл
              ажиллагааны нийтлэг шаардлага” стандартын төслийг боловсрууллаа.
              <br />
              <br />
              Та бүхэн стандартын төсөлтэй танилцан саналаа тус яамны Гэр бүлийн
              бодлогын хэрэгжилтийг зохицуулах газарт baterdene@mflsp.gov.mn
              цахим хаягаар 2024 оны 09 дүгээр сарын 16-ны өдрийн дотор ирүүлнэ
              үү. Хавсралт хэсгээс стандартын төслийг бүрэн эхээр нь татаж авна
              уу.
              <br />
              <br />
              Монгол Улсын Их Хурлын чуулганы 2024 оны 01 дүгээр сарын 17-ны
              өдрийн нэгдсэн хуралдаанаар Хүүхдийн эрхийн тухай хуульд нэмэлт,
              өөрчлөлт оруулах тухай хуулийг хэлэлцэн баталсан. Хүүхдийн эрхийн
              тухай хуулийн 6.5-д “Хүүхдийн хөгжлийг дэмжих үйлчилгээ үзүүлэх
              байгууллага үйлчилгээний бодлого, хөтөлбөртэй байх бөгөөд эрх
              бүхий этгээдээс баталсан хүүхдийн хөгжлийг дэмжих үйлчилгээний
              стандартыг мөрдөж ажиллана.” гэж заасан. Иймд хуулийн хэрэгжилтийг
              хангах зорилгоор “Хүүхдийн хөгжлийг дэмжих үйлчилгээ, үйл
              ажиллагааны нийтлэг шаардлага” стандартын төслийг боловсрууллаа.
              <br />
              <br />
              Та бүхэн стандартын төсөлтэй танилцан саналаа тус яамны Гэр бүлийн
              бодлогын хэрэгжилтийг зохицуулах газарт baterdene@mflsp.gov.mn
              цахим хаягаар 2024 оны 09 дүгээр сарын 16-ны өдрийн дотор ирүүлнэ
              үү. Хавсралт хэсгээс стандартын төслийг бүрэн эхээр нь татаж авна
              уу.
            </p>
          </div>
        </div>
        <div>
          <RelatedNews newsData={goData} />
        </div>
      </div>
    </div>
  );
};
export default BasicNews;
