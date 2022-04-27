import "./answer.scss";
import { AnswerProps } from "./props";

const Answer = (props: AnswerProps) => {
  const { answer, isOpen } = props;
  return (
    <section className={isOpen ? "answer answer--open" : "answer"}>
      <h2 className="answer__title">{answer}</h2>
    </section>
  );
};

export default Answer;
