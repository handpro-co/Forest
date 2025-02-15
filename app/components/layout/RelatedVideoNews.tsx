import { useState } from "react";
import ArrowRigth from "@/app/icons/ArrowRigth";
import NewsCard from "./NewsCard";
import { NewsDataType } from "@/app/types/types";

interface Props {
  newsData: NewsDataType[];
}

const RelatedVideoNews: React.FC<Props> = ({ newsData }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedNews = newsData.slice(startIndex, endIndex);

  const hasPreviousPage = currentPage > 0;
  const hasNextPage = endIndex < newsData.length;

  const goToPreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-[80%] flex flex-col gap-[24px] ">
      <div className="font-700 text-[24px] leading-[29.02px] text-[#333333]">
        Холбоотой мэдээлэл
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {paginatedNews.map((item) => (
          <div key={item.id}>
            <a href={`/VideoNews/?id=${item.id}`}>
              <NewsCard
                image={item.image}
                date={item.date}
                title={item.title}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-[16px]">
        <div
          onClick={goToPreviousPage}
          className={`cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-[50%] transform rotate-180 ${
            hasPreviousPage ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ArrowRigth color="#333333" />
        </div>

        <div
          onClick={goToNextPage}
          className={`cursor-pointer w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-[50%] ${
            hasNextPage ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
        >
          <ArrowRigth color="#333333" />
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoNews;
