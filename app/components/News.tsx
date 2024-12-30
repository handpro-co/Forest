"use client";
import CategoryItem from "./layout/Catergory_Button";
import React, { useEffect, useState, useRef } from "react";
import ArrowRight from "../icons/ArrowRigth";
import NewsCard from "./layout/NewsCard";
import { fetchCategories } from "@/app/components/data/fetchCategory";
import { fetchNews } from "@/app/components/data/fetchNews";
import Lottie from "lottie-react";
import loadingAnimation from "@/lotties/loading-icon.json";
import SkeletonLoaderNewsBox from "./skeleton/skeletonLoaderNewsBox";
import SkeletonLoaderCategory from "./skeleton/skeletonLoaderCategory";
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  category: number;
}

interface CategoryType {
  id: number;
  name: string;
}

const AllNewsCards: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 16;

  const [path, setPath] = useState<string | null>(null); // path should be a string or null
  const [categoryId, setCategoryId] = useState<number>(1);

  const categoryListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        const categoriesArray: CategoryType[] = [];

        if (fetchedCategories?.Value) {
          Object.values(fetchedCategories.Value).forEach((category: any) => {
            categoriesArray.push({
              id: category.id,
              name: category.name || "Unknown",
            });
          });
        }
        setCategories(categoriesArray);

        if (categoriesArray.length > 0) {
          fetchNewsForCategory(categoriesArray[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategories([]);
        setNewsData([]);
      }
    };

    fetchData();
  }, []);

  const fetchNewsForCategory = async (id: number) => {
    try {
      const fetchedNews = await fetchNews({ id });
      const newsArray: NewsDataType[] = [];

      if (fetchedNews?.Value) {
        Object.values(fetchedNews.Value).forEach((newsItem: any) => {
          newsArray.push({
            date: newsItem.c_date,
            title: newsItem.title,
            image: newsItem.image,
            category: newsItem.id || "Unknown",
          });
        });
      }

      setNewsData(newsArray);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsData([]);
    }
  };

  const handleCategoryClick = (index: number) => {
    setCategoryId(categories[index].id);
    setSelectedCategoryIndex(index);
    setCurrentPage(1);
    fetchNewsForCategory(categories[index].id);

    const selectedCategory = categories[index].id;

    if (categoryListRef.current) {
      const categoryItem = categoryListRef.current.children[
        index
      ] as HTMLElement;
      categoryItem?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const jumpPage = ({ categoryId, newsData }: any): void => {
    const selectedPath = newsData?.category || null; // Get the category or ID for the path

    if (selectedPath !== null) {
      setPath(selectedPath); // Set `path` to the proper value from `newsData`

      switch (parseInt(categoryId, 10)) {
        case 1014:
          window.location.href = `/VideoNews?id=${selectedPath}`;
          break;
        case 1013:
          window.location.href = `/PhotoNews?id=${selectedPath}`;
          break;
        case 2018:
          window.location.href = `/socialNews?id=${selectedPath}`;
          break;
        case 2022:
          window.location.href = `/imageOnly?id=${selectedPath}`;
          break;
        case 1:
          window.location.href = `/BasicNews?id=${selectedPath}`;
          break;
        default:
          window.location.href = `/News?id=${selectedPath}&categoryId=${categoryId}`;
          break;
      }
    } else {
      console.error("Invalid parameter for 'path':", selectedPath); // Added check for undefined or null path
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-[50px]">
      {/* Category Navigation */}
      <div className="w-full flex items-center  justify-center px-4">
        {/* Categories with smooth horizontal scroll */}
        <div
          className="flex gap-[16px] flex-nowrap justify-start overflow-x-auto  py-2 px-4 rounded-lg"
          ref={categoryListRef} // Attach ref to the scroll container
        >
          {categories.length > 0
            ? categories.map((category, i) => (
                <CategoryItem
                  key={category.id} // Use the unique id as the key
                  category={category.name} // Pass the category name as a prop
                  index={i}
                  selectedCategoryIndex={selectedCategoryIndex}
                  onClick={handleCategoryClick}
                />
              ))
            : Array.from({ length: 10 }, (_, index) => (
                <SkeletonLoaderCategory key={index} />
              ))}
        </div>
      </div>

      {/* News Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[4px]">
        {currentNews.length > 0
          ? currentNews.slice(0, 4).map((news, i) => (
              <a
                onClick={() => {
                  jumpPage({ categoryId: categoryId, newsData: news });
                }}
                key={i}
              >
                <NewsCard
                  image={news.image}
                  date={news.date}
                  title={news.title}
                />
              </a>
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoaderNewsBox key={index} />
            ))}
      </div>

      <div className="flex justify-center items-center">
        <a href="/allNews">
          <div className="inline-flex items-center gap-[16px] bg-[#ECEBE3] p-[16px] rounded-[50px] cursor-pointer mt-8">
            <span className="text-[#333] font-medium text-[16px]">
              Бүгдийн харах
            </span>
            <ArrowRight color="#333" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AllNewsCards;
