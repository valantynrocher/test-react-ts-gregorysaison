import { Item } from "components/QuestionItem/props";

export type QuestionGroupProps = {
  title: string;
  items: Item[];
  mode: "multiple" | "single";
};
