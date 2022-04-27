import React, { useState } from "react";

import Button from "components/Button";
import Question from "components/Question";
import Answer from "components/Answer";

import "./element.scss";

import { ElementProps } from "./props";

const Element = (props: ElementProps) => {
  const { item } = props;
  const [isOpen, setOpen] = useState(false);

  const handleButtonClick = () => setOpen((open) => !open);

  return (
    <article className="content">
      <div className="content__header">
        <Question question={item.question} />
        <Button isOpen={isOpen} onButtonClick={handleButtonClick} />
      </div>
      <Answer isOpen={isOpen} answer={item.answer} />
    </article>
  );
};

export default Element;
