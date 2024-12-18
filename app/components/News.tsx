"use client";

import CategoryItem from "./layout/Catergory_Button";
import React, { useEffect, useState, useRef } from "react";
import ArrowRight from "../icons/ArrowRigth"; // Corrected typo (ArrowRigth -> ArrowRight)
import NewsCard from "./layout/NewsCard";
import { fetchCategories } from "@/app/components/data/fetchCategory";
import { fetchNews } from "@/app/components/data/fetchNews";

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
  const [newsData, setNewsData] = useState<NewsDataType[]>([]); // Store fetched news
  const [categories, setCategories] = useState<CategoryType[]>([]); // Store categories as objects
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 16;

  const [path, setPath] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>(1);

  const categoryListRef = useRef<HTMLDivElement>(null); // Reference to category list


  // Fetch categories and initial news (on load)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories(); // Fetch categories
        const categoriesArray: CategoryType[] = [];

        // Fetch and map categories
        if (fetchedCategories?.Value) {
          Object.values(fetchedCategories.Value).forEach((category: any) => {
            categoriesArray.push({
              id: category.id,
              name: category.name || "Unknown", // Default name if undefined
            });
          });
        }

        // Set categories
        setCategories(categoriesArray);

        // Fetch news for the first category by default
        if (categoriesArray.length > 0) {
          fetchNewsForCategory(categoriesArray[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategories([]); // Fallback to an empty array on error
        setNewsData([]); // Fallback to an empty array for news data
      }
    };

    fetchData();
  }, []);

  const fetchNewsForCategory = async (id: number) => {
    try {
      const fetchedNews = await fetchNews({ id }); // Pass category ID to fetch news
      const newsArray: NewsDataType[] = [];

      // Fetch and map news
      if (fetchedNews?.Value) {
        Object.values(fetchedNews.Value).forEach((newsItem: any) => {
          newsArray.push({
            date: newsItem.c_date,
            title: newsItem.title,
            image: newsItem.image,
            category: newsItem.id || "Unknown", // Default category name if undefined
          });
        });
      }

      // Set news data
      setNewsData(newsArray);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsData([]); // Fallback to an empty array on error
    }
  };

  // Handle category selection
  const handleCategoryClick = (index: number) => {
    setCategoryId(categories[index].id);
    setSelectedCategoryIndex(index);
    setCurrentPage(1); // Reset to the first page when switching categories
    fetchNewsForCategory(categories[index].id); // Fetch news for the selected category

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

  // Pagination logic
  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);
  console.log("currentNews", currentNews);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const jumpPage = ({ categoryId }: any, { p }: any): void => {
    if (p !== null && p !== undefined) {
      switch (parseInt(categoryId, 10)) {
        case 1014:
          window.location.href = `/VideoNews?id=${p}`;
          break;
        case 1013:
          window.location.href = `/PhotoNews?id=${p}`;
          break;
        case 2018:
          window.location.href = `/socialNews?id=${p}`;
          break;
        case 2022:
          window.location.href = `/imageOnly?id=${p}`;
          break;
        case 1:
          window.location.href = `/BasicNews?id=${p}`;
          break;
        default:
          console.error("Invalid category ID:", categoryId);
          break;
      }
    } else {
      console.error("Invalid parameter for 'p':", p);
    }
  };

  console.log("patj", categoryId);

  return (
    <div className="w-full h-auto flex flex-col gap-[50px]">
      {/* Category Navigation */}
      <div className="w-full flex items-center justify-between px-4">
        {/* Categories with smooth horizontal scroll */}
        <div
          className="flex gap-[16px] flex-nowrap justify-start overflow-x-auto scrollbar-thin scrollbar-thumb-[#ccc] scrollbar-track-[#f0f0f0] hover:scrollbar-thumb-[#aaa] py-2 px-4 rounded-lg"
          ref={categoryListRef} // Attach ref to the scroll container
        >
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <CategoryItem
                key={category.id} // Use the unique id as the key
                category={category.name} // Pass the category name as a prop
                index={i}
                selectedCategoryIndex={selectedCategoryIndex}
                onClick={handleCategoryClick}
              />
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>

      {/* News Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[50px]">
        {currentNews.slice(0, 4).map((news, i) => (
          <a
            onClick={() => {
              setPath(news.category);
              jumpPage(categoryId, path);
            }}
            key={i}
          >
            <NewsCard image={news.image} date={news.date} title={news.title} />
          </a>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <a href="/allNews">
          <div className="inline-flex items-center gap-[16px] bg-[#ECEBE3] p-[16px] rounded-[50px] cursor-pointer mt-8">
            <span className="text-[#333] font-medium text-[16px]">
              Бүгдийн харах
            </span>
            <ArrowRight color="#333" /> {/* Corrected typo here too */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default AllNewsCards;
