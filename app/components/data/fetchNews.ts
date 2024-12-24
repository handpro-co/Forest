// fetchNews.ts
"use server";
export const fetchNews = async ({ id }: { id: number }) => {
  const post_type = id;
  try {
    const res = await fetch(
      `https://forest.gov.mn/api/forest/news_list/${post_type}`,
      {
        method: "POST",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching News: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
