import { useState } from "react";
import ArrowRigth from "@/app/icons/ArrowRigth";
import NewsCard from "./NewsCard";

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
}

interface Props {
  newsData: NewsItem[] | null; // Allow `null` for newsData
}

const RelatedNews: React.FC<Props> = ({ newsData }) => {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0); // Current page index

  if (!newsData || newsData.length === 0) {
    return (
      <div className="w-[80%] flex flex-col gap-[24px] mt-[100px] text-center">
        <div className="font-700 text-[24px] leading-[29.02px] text-[#333333]">
          Холбоотой мэдээлэл
        </div>
        <div className="text-[#666666]">Мэдээлэл алга байна</div>
      </div>
    );
  }

  // Calculate the start and end indices for slicing the news data
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Paginated news items for the current page
  const paginatedNews = newsData.slice(startIndex, endIndex);

  // Determine if there are previous or next pages
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = endIndex < newsData.length;

  // Handlers for navigation
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
    <div className="w-[80%] flex flex-col gap-[24px] mt-[100px]">
      <div className="font-700 text-[24px] leading-[29.02px] text-[#333333]">
        Холбоотой мэдээлэл
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {paginatedNews.map((item, index) => (
          <div key={index}>
            <a href={`/PhotoNews/?id=${item.id}`}>
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

export default RelatedNews;
