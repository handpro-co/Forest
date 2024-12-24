export default function convertHtmlEntities(str: string): string {
  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
}
