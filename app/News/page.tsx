"use client";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import { fetchNews } from "../components/data/fetchNews";
import { fetchCategories } from "../components/data/fetchCategory";

import { useEffect, useState } from "react";
import convertHtml from "@/app/components/convert/convertHtml";
import loadingIcon from "@/lotties/loading-icon.json";
import Lottie from "lottie-react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import RelatedNewsNoPage from "../components/layout/RelatedNewsNoPage";
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  body: string;
  intro: string;
  id: string;
}
interface CategoryType {
  id: string;
  name: string;
}

const News: React.FC = () => {
  const [currentNews, setCurrentNews] = useState<NewsDataType | null>(null);
  const [sendRelatedNews, setSendRelatedNews] = useState<NewsDataType[]>([]);
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");
  const categoryId = searchParams.get("categoryId");
  const categoryConvertedId = Number(categoryId);
  const [currentCategory, setCurrentCategory] = useState<
    CategoryType | undefined
  >();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const handlePrint = () => {
    reactToPrintFn();
  };
  useEffect(() => {
    const fetchNewsData = async (categoryConvertedId: number) => {
      const fetchedNews = await fetchNews({ id: categoryConvertedId });
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

      const selectedNews = newsArray.find((news) => news.id === newsId);
      const toRelatedNews = newsArray.filter((news) => news.id !== newsId);
      setSendRelatedNews(toRelatedNews);
      if (selectedNews) {
        setCurrentNews({
          ...selectedNews,
          body: convertHtml(selectedNews.body),
        });
      }
    };

    fetchNewsData(categoryConvertedId);
  }, [categoryId, newsId]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        const categoriesArray: CategoryType[] = [];

        if (fetchedCategories?.Value) {
          Object.values(fetchedCategories.Value).forEach((category: any) => {
            categoriesArray.push({
              id: category.id,
              name: category.name,
            });
          });
        }
        if (categoriesArray.length > 0) {
          const currentCategoryData = categoriesArray.find((category) => {
            return category.id === categoryId;
          });
          setCurrentCategory(currentCategoryData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!currentNews) {
    return (
      <div className="w-[200px] h-[200px]">
        <Lottie animationData={loadingIcon} loop={true} />
      </div>
    );
  }

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        <img
          src={currentNews.image}
          alt="Banner"
          className="w-full rounded-[16px] h-[50vh] object-cover"
        />

        <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[24px]">
            <div className="border-t border-[#94D1B0] border-dashed" />
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-[8px]">
                <span className="text-[#14B75F] text-sm font-medium leading-[16.48px]">
                  {currentNews?.date}
                </span>
                <div className="flex flex-col gap-[2px] items-center">
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                </div>
                <span className="text-[#14B75F] text-sm font-medium leading-[16.48px]">
                  {currentCategory?.name}
                </span>
              </div>
              <div className="flex gap-[12px]">
                <div className="flex gap-[8px] items-center">
                  <TbBrandFacebook className="text-[#666666]" />
                  <span className="text-sm font-medium text-[#666666]">
                    Хуваалцах
                  </span>
                </div>
                <div
                  onClick={handlePrint}
                  className="flex gap-[8px] cursor-pointer items-center"
                >
                  <LuPrinter className="text-[#666666]" />
                  <span className="text-sm font-medium text-[#666666]">
                    Хэвлэх
                  </span>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#333333]">
              {currentNews?.title || "Title Not Found"}
            </div>
          </div>

          <div className="w-full flex flex-col gap-[48px]">
            <div
              ref={contentRef}
              className="w-full grid grid-cols-1 h-[500px] text-[#666666]"
              dangerouslySetInnerHTML={{
                __html: currentNews?.body || "",
              }}
            />
          </div>
        </div>

        <div>
          <RelatedNewsNoPage
            newsData={sendRelatedNews}
            categoryId={categoryId}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
