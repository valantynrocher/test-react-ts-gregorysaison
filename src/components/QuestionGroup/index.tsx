import QuestionItem from "components/QuestionItem";
import React, { useState } from "react";
import { QuestionGroupProps } from "./props";

const QuestionGroup = (props: QuestionGroupProps) => {
  const { items, title, mode } = props;

  const [opened, setOpened] = useState<Record<number, boolean>>({});

  const handleOpen = (id: number) =>
    setOpened((prev) => {
      let next: typeof prev = {};

      if (mode === "multiple") {
        next = { ...prev };
        const isOpened = Boolean(next[id]);
        if (isOpened) {
          delete next[id];
        } else {
          next[id] = true;
        }
      }
      if (mode === "single") {
        next[id] = true;
      }
      return next;
    });

  return (
    <div>
      <p>{title}</p>
      {items.map((item) => (
        <QuestionItem
          key={item.name}
          item={item}
          isOpen={opened[item.id]}
          onClick={handleOpen}
        />
      ))}
    </div>
  );
};

export default QuestionGroup;
