import { ReactNode } from "react";
export type NewsDataTyper = {
  c_date: string;
  title: string;
  image: string;
  body: string;
  intro: string;
  id: string;
};

export type NewsDataType = {
  date: string;
  title: string;
  image: string;
  body: string;
  intro: string | ReactNode;
  id: string;
};

export type CategoryType = {
  id: string;
  name: string;
};
export type DataItem = {
  bigTitle?: { mn: string; en: string };
  title?: { mn: string; en: string };
  text?: { mn: string; en: string };
  homeButton?: { mn: string; en: string };
};

export type DataWithItems = {
  items: {
    title: { mn: string; en: string };
    text: { mn: string; en: string };
  }[];
};
