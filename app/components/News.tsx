"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "../components/layout/NewsCard";
import ArrowRigth from "../icons/ArrowRigth";
import CategoryItem from "./layout/Catergory_Button";
import data from "./data/news";
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  category: string;
}
const News: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  useEffect(() => {
    setNewsData(data);
  }, []);
  const categories = [
    "Мэдээлэл",
    "Цахим сэтгүүл, тайлан",
    "Ойн мэдээллийн сан",
    "Тусгай зөвшөөрөл",
    "Тарьц суулгацын нөөц",
  ];

  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const filteredNews = newsData.filter(
    (news) => news.category === categories[selectedCategoryIndex]
  );
  const last4News = filteredNews.slice(-4);
  return (
    <div className="w-full h-auto flex flex-col items-center gap-[32px] p-[24px]">
      <div className="w-full flex flex-col items-center gap-[24px] cursor-pointer">
        <div className="font-semibold text-[26px] text-[#333] leading-[31.43px]">
          Мэдээ мэдээлэл
        </div>
        <div className="w-auto flex flex-wrap gap-[12px] md:justify-center">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              index={index}
              selectedCategoryIndex={selectedCategoryIndex}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {last4News.map((news) => (
          <div key={`${news.title}-${news.date}`}>
            <NewsCard image={news.image} date={news.date} title={news.title} />
          </div>
        ))}
      </div>

      <Link href="/allNews">
        <div>
          <div className="inline-flex items-center gap-[16px] bg-[#ECEBE3] p-[16px] rounded-[50px] cursor-pointer">
            <span className="text-[#333] font-medium text-[16px] leading-[18.83px]">
              Бүгдийн харах
            </span>
            <ArrowRigth color="#333" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default News;
