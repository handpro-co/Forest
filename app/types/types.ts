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
