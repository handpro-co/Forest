"use client";

import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { fetchNews } from "../components/data/fetchNews";

interface NewsDataType {
  id: number; // Added id to the interface
  date: string;
  title: string;
  intro: string;
  image: string;
}

const PhotoNews: React.FC = () => {
  const searchParams = useSearchParams(); // Get query params
  const newsId = searchParams.get("id"); // Extract 'id' query parameter

  const categoryId = 1013; // Set your category ID
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [currentNews, setCurrentNews] = useState<NewsDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch news for the category
  const fetchNewsForCategory = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const fetchedNews = await fetchNews({ id });
      const newsArray: NewsDataType[] = [];

      if (fetchedNews?.Value) {
        Object.values(fetchedNews.Value).forEach((newsItem: any) => {
          newsArray.push({
            id: newsItem.id,
            date: newsItem.c_date,
            title: newsItem.title,
            intro: newsItem.intro,
            image: newsItem.image,
          });
        });
      }

      setNewsData(newsArray);

      // If no id is provided, show the latest news
      if (!newsId) {
        setCurrentNews(newsArray[newsArray.length - 1] || null);
      } else {
        // Find the current news based on the query id
        const selectedNews = newsArray.find(
          (news) => news.id == Number(newsId)
        );
        
        
        setCurrentNews(selectedNews || null);
        console.log(currentNews);
        
      }
    } catch (error) {
      setError(
        "Error fetching news: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch news when the component mounts or newsId changes
  useEffect(() => {
    fetchNewsForCategory(categoryId);
  }, [categoryId, newsId]);

  // Filter related news
  const relatedNews = newsData.filter((news) => news.id !== currentNews?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[100%] lg:w-[80%]">
        {/* Render the current news */}
        {currentNews && (
          <>
            {currentNews.image && (
              <img
                className="w-full rounded-[16px] h-[50vh] object-cover"
                src={currentNews.image}
                alt="Banner"
              />
            )}
            <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px]">
                <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[#14B75F] text-[14px] font-500">
                      {currentNews.date}
                    </span>
                    <div className="flex flex-col gap-[2px] justify-center items-center">
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                    </div>
                    <span className="text-[#14B75F] text-[14px] font-500">
                      Зурагт мэдээ
                    </span>
                  </div>
                  <div className="flex gap-[12px]">
                    <div className="flex gap-[8px]">
                      <TbBrandFacebook style={{ color: "#666666" }} />
                      <span className="text-[14px] text-[#666666]">
                        Хуваалцах
                      </span>
                    </div>
                    <div className="flex gap-[8px]">
                      <LuPrinter style={{ color: "#666666" }} />
                      <span className="text-[14px] text-[#666666]">
                        Хуваалцах
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[32px] text-[#333333] font-700">
                  {currentNews.title}
                </div>
              </div>
              <div className="w-full flex flex-col gap-[48px]">
                <div className="text-[16px] text-[#666666]">
                  {currentNews.intro}
                </div>
                <div className="w-full flex flex-col gap-5">
                  <img
                    src={currentNews.image}
                    className="w-full rounded-[16px]"
                    alt={`news-${currentNews.title}`}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {/* Render Related News */}
        <div>
          <RelatedNews newsData={relatedNews} />
        </div>
      </div>
    </div>
  );
};

export default PhotoNews;
