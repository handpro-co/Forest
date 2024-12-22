"use client";
import Banner from "./components/photos/Banner.png";
import { LuPrinter } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import RelatedNews from "@/app/components/layout/RelatedNews";
import { useEffect, useState } from "react";
import { fetchNews } from "../components/data/fetchNews";
import { useSearchParams } from "next/navigation";

// Define the shape of the fetched news data
interface NewsDataType {
  date: string;
  title: string;
  image: string;
  body: string;
  category: string;
}

const BasicNews: React.FC = () => {
  const searchParams = useSearchParams();
  const news_id = searchParams.get("id"); // Get the dynamic parameter from the URL

  const [newsData, setNewsData] = useState<NewsDataType[]>([]); // State to hold all news data
  const [currentNews, setCurrentNews] = useState<NewsDataType | null>(null); // State to hold the selected news item

  function convertHtmlEntities(str: string) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.body.textContent || ""; // Return decoded text
  }

  useEffect(() => {
    const fetchNewsForCategory = async (id: number) => {
      try {
        const fetchedNews = await fetchNews({ id }); // Fetch news for the category
        const newsArray: NewsDataType[] = [];

        if (fetchedNews?.Value) {
          Object.values(fetchedNews.Value).forEach((newsItem: any) => {
            newsArray.push({
              date: newsItem.c_date,
              title: newsItem.title,
              image: newsItem.image,
              body: newsItem.body,
              category: newsItem.id.toString(), // Ensure category is a string
            });
          });
        }

        // Set the full news data
        setNewsData(newsArray);

        // Find the current news based on the `news_id`
        const foundNews = newsArray.find((news) => news.category === news_id);

        if (foundNews) {
          // Check and log the body before and after conversion
          console.log("Before Conversion:", foundNews.body);

          const convertedBody = convertHtmlEntities(foundNews.body);

          // Log the converted body to check if it has been decoded properly
          console.log("After Conversion:", convertedBody);

          // Set the current news with the decoded body
          setCurrentNews({
            ...foundNews,
            body: convertedBody, // Update the body with the decoded content
          });
        } else {
          setCurrentNews(null);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]); // In case of error, reset the news data
      }
    };

    if (news_id) {
      fetchNewsForCategory(1); // Pass the default ID (or get from context)
    }
  }, [news_id]); // Dependency array makes sure it runs whenever `news_id` changes

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="w-[80%]">
        {/* Show Banner Image */}
        <img
          className="w-full rounded-[16px] h-[50vh] object-cover"
          src={currentNews?.image ? currentNews?.image : Banner.src} // Default to Banner if no image is available
          alt="Banner"
        />
        <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
          <div className="flex flex-col gap-[24px]">
            <div className="border-t-[1px] border-[#94D1B0] border-dashed" />
            <div className="flex justify-between items-end">
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
            <div className="text-[32px] text-[#333333] font-700">
              {currentNews?.title || "Loading title..."}
            </div>
          </div>
          <div className="w-full">
            <p
              className="font-400 text-[#666666]"
              dangerouslySetInnerHTML={{
                __html: currentNews?.body || "Loading content...",
              }}
            />
          </div>
        </div>
        <div>
          <RelatedNews newsData={newsData} />
        </div>
      </div>
    </div>
  );
};

export default BasicNews;
