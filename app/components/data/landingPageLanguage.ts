// data.ts

import { DataItem, DataWithItems } from "@/app/types/types";

export const data: (DataItem | DataWithItems)[] = [
  {
    bigTitle: {
      mn: "ОЙ-ИРЭЭДҮЙ ХОЙЧ ҮЕДЭЭ ҮЛДЭЭХ АМЬД ӨВ",
      en: "Improve the living environment",
    },
  },
  {
    items: [
      {
        title: { mn: "8.5 хувь", en: "8.45 percent" },
        text: {
          mn: "Ойгоор бүрхэгдсэн талбай",
          en: "Total forested area ",
        },
      },
      {
        title: { mn: "19 103 221 га", en: "19 103 221 m2" },
        text: {
          mn: "Монгол улсын ойн сангийн талбай",
          en: "Mongolian forest reserve area",
        },
      },
      {
        title: { mn: "84 сая", en: "84 million" },
        text: {
          mn: `${`"Тэрбум мод" үндэсний хөдөлгөөн`}`,
          en: "One billion tree national movement",
        },
      },
    ],
  },
  { homeButton: { mn: "Үйлчилгээ авах", en: "Get service" } },
];
