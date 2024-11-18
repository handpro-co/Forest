"use client";
import CategoryItem from "../components/layout/Catergory_Button";
import React, { useEffect, useState } from "react";
import data from "../components/data/news";
import ArrowRigth from "../icons/ArrowRigth";
import NewsCard from "../components/layout/NewsCard";
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  category: string;
}

const NewsHome: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
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
  };

  const filteredNews = newsData.filter(
    (news) => news.category === categories[selectedCategoryIndex]
  );

  return (
    <div className="w-full h-auto">
      <div className="w-full flex items-center justify-between px-4">
        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#F2F5EB] flex justify-center items-center cursor-pointer transform rotate-180">
          <ArrowRigth color="#333333" />
        </div>

        <div className="flex gap-[16px] overflow-x-auto">
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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {filteredNews.map((news, i) => (
          <div key={i}>
            <NewsCard image={news.image} date={news.date} title={news.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
