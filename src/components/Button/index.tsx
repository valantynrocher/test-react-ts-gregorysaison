import "./button.scss";
import { ButtonProps } from "./props";

const Button = (props: ButtonProps) => {
  const { isOpen, onButtonClick } = props;

  return (
    <button
      type="button"
      className={isOpen ? "toggler toggler--open" : "toggler"}
      onClick={onButtonClick}
    >
      ▼
    </button>
  );
};

export default Button;
