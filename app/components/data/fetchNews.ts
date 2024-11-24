// fetchNews.ts
"use server";

export const fetchNews = async ({ id }: { id: number }) => {
  const post_type = id;
  try {
    // Correct the URL by interpolating the post_type (category ID)
    const res = await fetch(
      `https://forest.gov.mn/api/forest/news_list/${post_type}`, // Use template literal for URL
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
    return []; // Return an empty array in case of error
  }
};
