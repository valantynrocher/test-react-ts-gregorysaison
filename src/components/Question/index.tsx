import { QuestionProps } from "./props";
import "./question.scss";

const ContentQuestion = (props: QuestionProps) => {
  const { question } = props;
  return <span>{question}</span>;
};

export default ContentQuestion;
