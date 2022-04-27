import "./button.scss";
import { ButtonProps } from "./props";

const Button = (props: ButtonProps) => {
  const { isOpen, onClick } = props;

  return (
    <button
      type="button"
      className={isOpen ? "toggler toggler--open" : "toggler"}
      onClick={onClick}
    >
      ▼
    </button>
  );
};

export default Button;
