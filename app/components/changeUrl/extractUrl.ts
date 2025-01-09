const useExtractUrls = (body: string) => {
  const updatedBody = body
    .replace(/\/images\//g, "https://forest.gov.mn/images/")
    .replace(/<figure[^>]*>/g, "")
    .replace(/<img/g, '<img class="w-full rounded-[16px] mt-[20px]"');

  return updatedBody;
};

export default useExtractUrls;
