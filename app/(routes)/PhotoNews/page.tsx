"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchNews } from "../../components/data/fetchNews";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import SkeletonLoader from "@/app/components/skeleton/skeletonLoader";
import { NewsDataType, NewsDataTyper } from "@/app/types/types";
import useExtractUrls from "@/app/components/changeUrl/extractUrl";
import parse from "html-react-parser";
const PhotoNews: React.FC = () => {
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

  const categoryId = 1013; // This is fixed, no need to include in dependency list
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [currentNews, setCurrentNews] = useState<NewsDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch news for a specific category
  const fetchNewsForCategory = async (id: number) => {
    setLoading(true);
    setError("");
    try {
      const fetchedNews = await fetchNews({ id });
      const newsArray: NewsDataType[] = [];

      if (fetchedNews?.Value) {
        (Object.values(fetchedNews.Value) as NewsDataTyper[]).forEach(
          (newsItem) => {
            newsArray.push({
              id: newsItem.id,
              date: newsItem.c_date,
              title: newsItem.title,
              intro: newsItem.intro,
              body: newsItem.body,
              image: newsItem.image,
            });
          }
        );
      }

      setNewsData(newsArray);

      if (!newsId) {
        setCurrentNews(newsArray[newsArray.length - 1] || null);
      } else {
        const selectedNews = newsArray.find((news) => news.id === newsId);
        setCurrentNews(selectedNews || null);
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

  const transformedBody = useExtractUrls(currentNews?.body || "");

  useEffect(() => {
    fetchNewsForCategory(categoryId);
  }, [categoryId]);
  useEffect(() => {
    if (currentNews && currentNews.body && !currentNews.body.includes("<")) {
      setCurrentNews({
        ...currentNews,
        body: parse(currentNews.body).toString(),
      });
    }
  }, [currentNews?.body]);

  const relatedNews = newsData.filter((news) => news.id !== currentNews?.id);

  if (loading || !currentNews) {
    return (
      <div className="w-[80%]">
        <SkeletonLoader />
      </div>
    );
  }
  const fl = false;
  if (fl) {
    console.log(error);
  }
  return (
    <div className="w-[100vw] px-[20px] flex flex-col items-center">
      <div className="w-[100%] lg:w-[80%]">
        {currentNews && (
          <>
            {currentNews.image && (
              <img
                className="w-full rounded-[16px] mt-[20px] h-[50vh] object-cover"
                src={currentNews.image}
                alt="Banner"
              />
            )}
            <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px]">
                <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
                <div className="flex flex-wrap gap-[14px] justify-between items-end">
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
                <div className=" text-[24px] md:text-[32px] text-[#333333] font-700">
                  {currentNews.title}
                </div>
              </div>
              <div className="w-full flex flex-col gap-[48px]">
                <div className=" text-[#666666]">{currentNews.intro}</div>
                <div className="w-full flex flex-col gap-5">
                  <img
                    src={currentNews.image}
                    className="w-full rounded-[16px]"
                    alt={`news-${currentNews.title}`}
                  />
                  <div
                    id="news-body"
                    className=" text-[#666666]"
                    dangerouslySetInnerHTML={{ __html: transformedBody }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div>
          <RelatedNews newsData={relatedNews} />
        </div>
      </div>
    </div>
  );
};
const Photo: React.FC = () => (
  <Suspense fallback={<SkeletonLoader />}>
    <PhotoNews />
  </Suspense>
);

export default Photo;
