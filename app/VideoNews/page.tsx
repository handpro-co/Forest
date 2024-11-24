"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedVideoNews from "@/app/components/layout/RelatedVideoNews";
import { fetchNews } from "../components/data/fetchNews";

interface NewsDataType {
  id: number;
  date: string;
  title: string;
  intro: string;
  image: string;
}

const VideoNews: React.FC = () => {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

  const categoryId = 1014;
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [currentNews, setCurrentNews] = useState<NewsDataType | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
            image: newsItem.image || "",
          });
        });
      }

      setNewsData(newsArray);

      const selectedNews = newsId
        ? newsArray.find((news) => news.id == Number(newsId))
        : newsArray[newsArray.length - 1] || null;
      console.log(newsArray);

      console.log(selectedNews);
      console.log(Number(newsId));

      setCurrentNews(selectedNews);
    } catch (error) {
      setError(
        "Error fetching news: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsForCategory(categoryId);
  }, [categoryId, newsId]);

  const relatedNews = newsData.filter((news) => news.id !== currentNews?.id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[100%] lg:w-[80%]">
        {currentNews && (
          <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
            <div className="flex flex-col gap-[24px]">
              <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-[8px]">
                  <span className="text-[#14B75F] text-[14px] font-500">
                    {currentNews.date}
                  </span>
                  <div className="flex flex-col gap-[2px] items-center">
                    <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                    <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                    <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-full" />
                  </div>
                  <span className="text-[#14B75F] text-[14px] font-500">
                    Видео мэдээ
                  </span>
                </div>
                <div className="flex gap-[12px]">
                  <div className="flex gap-[8px] items-center">
                    <TbBrandFacebook className="text-[#666666]" />
                    <span className="text-sm font-medium text-[#666666]">
                      Хуваалцах
                    </span>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <LuPrinter className="text-[#666666]" />
                    <span className="text-sm font-medium text-[#666666]">
                      Хуваалцах
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold leading-[40.96px] text-[#333333]">
                {currentNews.title}
              </div>
            </div>

            <div className="w-full flex flex-col gap-[48px]">
              <div className="text-base leading-[22px] text-[#666666]">
                {currentNews.intro}
              </div>
              <div className="w-full">
                {currentNews.image ? (
                  <img
                    src={currentNews.image}
                    alt={currentNews.title}
                    className="w-full rounded-[16px] object-cover"
                  />
                ) : (
                  <div className="text-center text-red-500">
                    Image not available
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <RelatedVideoNews newsData={relatedNews} />
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
