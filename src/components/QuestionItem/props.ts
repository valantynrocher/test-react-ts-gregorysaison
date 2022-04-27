export type Item = {
  id: number;
  name: string;
  question: string;
  answer: string;
};

export type QuestionItemProps = {
  item: Item;
  isOpen: boolean;
  onClick: (id: number) => void;
};
