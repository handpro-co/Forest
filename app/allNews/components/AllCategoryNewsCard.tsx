"use client";
import CategoryItem from "../../components/layout/Catergory_Button";
import React, { useEffect, useState } from "react";
import data from "../../components/data/news";
import ArrowRigth from "../../icons/ArrowRigth";
import NewsCard from "../../components/layout/NewsCard";
import Sum from "../../icons/SumIcon";

interface NewsDataType {
  date: string;
  title: string;
  image: string;
  category: string;
}

const AllNewsCards: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 16;

  useEffect(() => {
    setNewsData(data);
  }, []);

  const categories = [
    "Мэдээлэл",
    "Ойн мэдээллийн сан",
    "Арга хэмжээ",
    "Цахим сэтгүүл, тайлан",
    "Тусгай зөвшөөрөл",
    "Тарьц суулгацын нөөц",
  ];

  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
    setCurrentPage(1);
  };

  const filteredNews = newsData.filter(
    (news) => news.category === categories[selectedCategoryIndex]
  );

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div className="w-full h-auto flex flex-col gap-[50px]">
      <div className="w-full flex items-center justify-between px-4">
        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#F2F5EB] flex justify-center items-center cursor-pointer transform rotate-180">
          <ArrowRigth color="#333333" />
        </div>

        <div className="flex gap-[16px] flex-wrap justify-center lg:justify-start overflow-x-auto">
          {categories.map((category, i) => (
            <CategoryItem
              key={i}
              category={category}
              index={i}
              selectedCategoryIndex={selectedCategoryIndex}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#F2F5EB] flex justify-center items-center cursor-pointer">
          <ArrowRigth color="#333333" />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[50px]">
        {currentNews.map((news, i) => (
          <div key={i}>
            <NewsCard image={news.image} date={news.date} title={news.title} />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center lg:justify-end ">
        <div className="flex ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2  text-[#333333] rounded-md"
          >
            <div className="transform rotate-90">
              <Sum />
            </div>
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-[32px] h-[32px] flex justify-center items-center rounded-[50%] ${
                  currentPage === page
                    ? "bg-[#14B75F] text-[#fff] "
                    : "text-[#5E6775] hover:bg-[#F2F5EB]"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2  text-[#333333] rounded-md"
          >
            <div className="transform rotate-[-90deg]">
              <Sum />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllNewsCards;
