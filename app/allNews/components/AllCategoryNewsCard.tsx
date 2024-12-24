"use client";

import CategoryItem from "../../components/layout/Catergory_Button";
import React, { useEffect, useState, useRef } from "react";
import ArrowRigth from "../../icons/ArrowRigth";
import NewsCard from "../../components/layout/NewsCard";
import Sum from "../../icons/SumIcon";
import { fetchCategories } from "@/app/components/data/fetchCategory";
import { fetchNews } from "@/app/components/data/fetchNews";
import CategoryDropdown from "./categoryDropDown";
import { useSearchParams } from "next/navigation";
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  body: string;
  intro: string;
  id: string;
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
  const [catchIndex, setCatchIndex] = useState<number>(0);
  // const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchParams = useSearchParams();
  const newsCategoryId = searchParams.get("id");
  const [catchCategory, setCatchCategory] = useState(1);
  // const [catchNewsId, setCatchNewsId] = useState<string>("");

  const categoryListRef = useRef<HTMLDivElement>(null); // Reference to category list

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

        if (categoriesArray.length > 0 && newsCategoryId === null) {
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
            id: newsItem.id,
            body: newsItem.body,
            intro: newsItem.intro,
          });
        });
      }

      setNewsData(newsArray);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsData([]);
    }
  };

  useEffect(() => {
    const propsCatchIdFetchData = (newsCategoryId: string | null) => {
      console.log(newsCategoryId);

      if (newsCategoryId) {
        const selectedCategoryIndex = categories.findIndex(
          (category, i) => Number(category.id) === Number(newsCategoryId)
        );
        const selectedCategory = categories.find(
          (category, i) => Number(category.id) === Number(newsCategoryId)
        );
        console.log(selectedCategory);

        if (
          selectedCategory !== undefined &&
          selectedCategoryIndex !== undefined
        ) {
          setSelectedCategoryIndex(selectedCategoryIndex);
          setCatchCategory(categories[selectedCategoryIndex].id);
          setCurrentPage(1);
          setCatchIndex(selectedCategoryIndex);
          fetchNewsForCategory(categories[selectedCategoryIndex].id);
        }
      }
    };

    propsCatchIdFetchData(newsCategoryId); // Call the function with the current newsCategoryId
  }, [newsCategoryId, categories]);

  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
    setCatchCategory(categories[index].id);
    setCurrentPage(1);
    setCatchIndex(index);
    fetchNewsForCategory(categories[index].id);

    if (categoryListRef.current) {
      const categoryItem = categoryListRef.current.children[
        index
      ] as HTMLElement;
      categoryItem?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handleNextCategory = () => {
    if (catchIndex < categories.length - 1) {
      setCatchIndex(catchIndex + 1);
      if (categoryListRef.current) {
        const categoryItem = categoryListRef.current.children[
          catchIndex + 1
        ] as HTMLElement;
        categoryItem?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const handlePrevCategory = () => {
    if (catchIndex > 0) {
      setCatchIndex(catchIndex - 1);
      if (categoryListRef.current) {
        const categoryItem = categoryListRef.current.children[
          catchIndex - 1
        ] as HTMLElement;
        categoryItem?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const jumpPage = ({ categoryData, newsData }: any): void => {
    const selectedPath = newsData?.id;
    if (selectedPath !== null) {
      switch (parseInt(categoryData, 10)) {
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
          window.location.href = `/News?id=${selectedPath}&categoryId=${categoryData}`;
          break;
      }
    } else {
      console.error("Invalid parameter for 'path':", selectedPath);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-[50px] mt-[50px]">
      <div className="w-full hidden items-center justify-between px-4 md:flex">
        <button
          onClick={handlePrevCategory}
          className="min-w-[40px] h-[40px] rounded-[50%] bg-[#F2F5EB] flex justify-center items-center cursor-pointer transform rotate-180"
        >
          <ArrowRigth color="#333333" />
        </button>

        <div
          ref={categoryListRef}
          className="flex gap-[16px] flex-nowrap justify-start overflow-x-auto  py-2 px-4 rounded-lg"
        >
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <CategoryItem
                key={category.id}
                category={category.name}
                index={i}
                selectedCategoryIndex={selectedCategoryIndex}
                onClick={handleCategoryClick}
              />
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>

        <button
          onClick={handleNextCategory}
          className="min-w-[40px] h-[40px] rounded-[50%] bg-[#F2F5EB] flex justify-center items-center cursor-pointer"
        >
          <ArrowRigth color="#333333" />
        </button>
      </div>
      <div className="w-full flex md:hidden ">
        <CategoryDropdown
          onClick={handleCategoryClick}
          categories={categories}
        />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-[4px] gap-y-[50px]">
        {currentNews.map((news, i) => (
          <a
            onClick={() => {
              jumpPage({
                newsData: news,
                categoryData: catchCategory,
              });
            }}
            key={i}
          >
            <NewsCard image={news.image} date={news.date} title={news.title} />
          </a>
        ))}
      </div>

      <div className="w-full flex justify-center lg:justify-end">
        <div className="flex">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-[#333333] rounded-md disabled:opacity-50"
          >
            <div className="transform rotate-90">
              <Sum />
            </div>
          </button>

          {/* Page Numbers */}
          {(() => {
            const maxVisiblePages = 5;
            let startPage = Math.max(
              1,
              Math.min(
                currentPage - Math.floor(maxVisiblePages / 2),
                totalPages - maxVisiblePages + 1
              )
            );
            const endPage = Math.min(
              startPage + maxVisiblePages - 1,
              totalPages
            );
            const pageNumbers = Array.from(
              { length: endPage - startPage + 1 },
              (_, index) => startPage + index
            );

            return pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-[32px] h-[32px] flex justify-center items-center rounded-[50%] ${
                  currentPage === page
                    ? "bg-[#14B75F] text-[#fff]"
                    : "text-[#5E6775] hover:bg-[#F2F5EB]"
                }`}
              >
                {page}
              </button>
            ));
          })()}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-[#333333] rounded-md disabled:opacity-50"
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
