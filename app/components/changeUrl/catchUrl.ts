const useIframeExtractUrls = (body: string) => {
  // Remove everything before the iframe tag and after
  const iframeRegex = /<iframe[^>]*src="([^"]+)"/; // Regex to match iframe and extract URL
  const iframeMatch = iframeRegex.exec(body);

  if (iframeMatch) {
    const iframeUrl = iframeMatch[1]; // Extract the URL from iframe src attribute
    return `<iframe src="${iframeUrl}" class="w-full rounded-[16px]" />`; // Return the iframe with the class
  }

  return ""; // If no iframe is found, return an empty string
};

export default useIframeExtractUrls;


