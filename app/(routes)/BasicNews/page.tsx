"use client";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import React, { Suspense, useEffect, useState } from "react";
import { fetchNews } from "../../components/data/fetchNews";
import { useSearchParams } from "next/navigation";
import SkeletonLoader from "../../components/skeleton/skeletonLoader";
import { NewsDataType, NewsDataTyper } from "@/app/types/types";
import useExtractUrls from "@/app/components/changeUrl/extractUrl";
const BasicNews: React.FC = () => {
  const searchParams = useSearchParams();
  const news_id = searchParams.get("id");
  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [currentNews, setCurrentNews] = useState<NewsDataType | null>(null);

  function convertHtmlEntities(str: string) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }

  useEffect(() => {
    const fetchNewsForCategory = async (id: number) => {
      try {
        const fetchedNews = await fetchNews({ id });
        const newsArray: NewsDataType[] = [];

        if (fetchedNews?.Value) {
          (Object.values(fetchedNews.Value) as NewsDataTyper[]).forEach(
            (newsItem) => {
              newsArray.push({
                date: newsItem.c_date,
                title: newsItem.title,
                image: newsItem.image,
                body: newsItem.body,
                intro: newsItem.intro,
                id: newsItem.id.toString(),
              });
            }
          );
        }

        setNewsData(newsArray);

        const foundNews = newsArray.find((news) => news.id === news_id);

        if (!news_id) {
          setCurrentNews(newsArray[newsArray.length - 1]);
        } else {
          if (foundNews) {
            const convertedBody = convertHtmlEntities(foundNews.body);
            const secondConvertedBody = convertHtmlEntities(convertedBody);
            setCurrentNews({
              ...foundNews,
              body: secondConvertedBody,
            });
          } else {
            setCurrentNews(null);
          }
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]);
      }
    };

    fetchNewsForCategory(1);
  }, [news_id]);
  const transformedBody = useExtractUrls(currentNews?.body || "");

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        {currentNews ? (
          <>
            {currentNews?.image && (
              <img
                className="w-full rounded-[16px] h-[50vh] object-cover"
                src={currentNews?.image}
                alt="Banner"
              />
            )}
            <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
              <div className="flex flex-col gap-[24px]">
                <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
                <div className="flex flex-wrap gap-[14px] justify-between items-end">
                  <div className="flex items-center gap-[8px]">
                    <span className="flex items-center text-[#14B75F] text-[14px] font-500">
                      {currentNews?.date || ""}
                    </span>
                    <div className="flex flex-col gap-[2px] justify-center items-center">
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                      <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                    </div>
                    <span className="flex items-center text-[#14B75F] text-[14px] font-500">
                      Агентлагын мэдээ
                    </span>
                  </div>
                  <div className="flex gap-[12px]">
                    <div className="flex gap-[8px]">
                      <TbBrandFacebook style={{ color: "#666666" }} />
                      <span className="text-[14px] font-500 text-[#666666]">
                        Хуваалцах
                      </span>
                    </div>
                    <div className="flex gap-[8px]">
                      <LuPrinter style={{ color: "#666666" }} />
                      <span className="text-[14px] font-500 text-[#666666]">
                        Хуваалцах
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[24px] md:text-[32px] text-[#333333] font-700">
                  {currentNews?.title}
                </div>
              </div>
              <div className="w-full">
                {currentNews?.body ? (
                  <p
                    className="font-normal text-[#666666]"
                    dangerouslySetInnerHTML={{ __html: transformedBody }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div>
              <RelatedNews newsData={newsData} />
            </div>
          </>
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
};
const BasicNewsWrapper: React.FC = () => (
  <Suspense fallback={<SkeletonLoader />}>
    <BasicNews />
  </Suspense>
);

export default BasicNewsWrapper;
