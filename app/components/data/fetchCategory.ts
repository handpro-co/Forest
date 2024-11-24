// fetchCategory.ts
"use server";
export const fetchCategories = async () => {
  try {
    const res = await fetch("https://forest.gov.mn/api/forest/post_type", {
      method: "POST",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching categories: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
