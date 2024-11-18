import ArrowRigth from "@/app/icons/ArrowRigth";
import NewsCard from "./NewsCard";
import Billiontree from "@/app/ServiceIconPNG/billionTree.png";
const ReletadNews: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px] mt-[100px]">
      <div className="font-700 text-[24px] leading-[29.02px] text-[#333333] ">
        Холбоотой мэдээлэл
      </div>
      <div className="flex gap-[16px]">
        <NewsCard
          image={Billiontree.src}
          date="2023-03-01 14:47:57"
          title="Монгол улсын эрүүл мэдээний газар"
        />
        <NewsCard
          image={Billiontree.src}
          date="2023-03-01 14:47:57"
          title="Монгол улсын эрүүл мэдээний газар"
        />
        <NewsCard
          image={Billiontree.src}
          date="2023-03-01 14:47:57"
          title="Монгол улсын эрүүл мэдээний газар"
        />
      </div>
      <div className="flex justify-end gap-[16px]">
        <div className="cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-[50%] transform rotate-180">
          <ArrowRigth color="#333333" />
        </div>
        <div className="cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-[50%]">
          <ArrowRigth color="#333333" />
        </div>
      </div>
    </div>
  );
};
export default ReletadNews;
