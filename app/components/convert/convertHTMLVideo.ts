const convertOembedToIframe = (html: string): string => {
  return html.replace(
    /<oembed[^>]*url="(https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+).*?"[^>]*><\/oembed>/g,
    (match, url) => {
      return `<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
  );
};

export default convertOembedToIframe;
