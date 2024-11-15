import ArrowRigth from "../icons/ArrowRigth";
import BillionTree from "../ServiceIconPNG/billionTree.png";

const newsData = [
  {
    date: "2024-04-23",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
  },
  {
    date: "2024-04-22",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
  },
  {
    date: "2024-04-21",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
  },
  {
    date: "2024-04-20",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
  },
];

const News: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] h-[608px] flex flex-col items-center gap-[32px] p-[24px]">
      <div className="flex flex-col items-center gap-[24px]">
        <div className="font-700 text-[26px] text-[#333] leading-[31.43px]">
          Мэдээ мэдээлэл
        </div>
        <div className="w-auto flex gap-[12px]">
          <div className="bg-[#DEFF94] text-[#333] py-[20px] px-[24px] rounded-[12px]">
            Мэдээлэл
          </div>
          <div className="text-opacity py-[20px] px-[24px] rounded-[12px]">
            Цахим сэтгүүл, тайлан
          </div>
          <div className="text-opacity py-[20px] px-[24px] rounded-[12px]">
            Ойн мэдээллийн сан
          </div>
          <div className="text-opacity py-[20px] px-[24px] rounded-[12px]">
            Тусгай зөвшөөрөл
          </div>
          <div className="text-opacity py-[20px] px-[24px] rounded-[12px]">
            Тарьц суулгацын нөөц
          </div>
          <div className="text-opacity py-[20px] px-[24px] rounded-[12px]">
            Тарьц суулгацын нөөц
          </div>
        </div>
      </div>

      {/* Grid Layout for News Items */}
      <div className="w-full grid lg:grid-cols-4 gap-[24px]">
        {newsData.map((news, index) => (
          <div key={index} className="flex flex-col gap-[25px] p-[8px]">
            <img
              src={news.image}
              className="rounded-[16px]"
              alt="billion tree"
            />
            <div className="gap-[16px] flex flex-col pb-[12px] pl-[8px]">
              <div className="text-[#666] text-[14px]">{news.date}</div>
              <div className="flex gap-[12px] items-center justify-between">
                <div className="text-[#333] text-[16px] break-words max-w-[85%]">
                  {news.title}
                </div>
                <div className="w-[32px] h-[32px] bg-[#DEFF94] rounded-[50%] flex justify-center items-center">
                  <ArrowRigth color="#333" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="inline flex items-center gap-[16px] bg-[#ECEBE3] p-[16px] rounded-[50px]">
        <span className="text-[#333] font-500 text-[16px] leading-[18.83px]">
          Бүгдийн харах
        </span>
        <ArrowRigth color="#333" />
      </div>
    </div>
  );
};

export default News;
