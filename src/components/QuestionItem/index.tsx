import Answer from "components/Answer";
import Button from "components/Button";
import React from "react";
import "./element.scss";
import { QuestionItemProps } from "./props";

const QuestionItem = (props: QuestionItemProps) => {
  const { item, onClick, isOpen } = props;

  const handleButtonClick = () => onClick(item.id);

  return (
    <article className="content">
      <div className="content__header">
        <span>{item.question}</span>
        <Button isOpen={isOpen} onClick={handleButtonClick} />
      </div>
      <Answer isOpen={isOpen} answer={item.answer} />
    </article>
  );
};

export default QuestionItem;
