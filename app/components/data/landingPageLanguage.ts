// data.ts

import { DataItem, DataWithItems } from "@/app/types/types";

export const data: (DataItem | DataWithItems)[] = [
  {
    bigTitle: {
      mn: "Амьдралын орчинг сайжруулна",
      en: "Improve the living environment",
    },
  },
  {
    items: [
      {
        title: { mn: "220 тэрбум", en: "220 billion" },
        text: {
          mn: "Монголын ойн сангийн нөөц",
          en: "Forest fund resources of Mongolia",
        },
      },
      {
        title: { mn: "640 сая", en: "640 million" },
        text: { mn: "Ургаа мод m³", en: "Growing trees m³" },
      },
      {
        title: { mn: "84 сая", en: "84 million" },
        text: {
          mn: "Мод Монгол улсад тарьж байна ",
          en: "Trees being planted in Mongolia",
        },
      },
    ],
  },
  { homeButton: { mn: "Үйлчилгээ авах", en: "Get service" } },
];
