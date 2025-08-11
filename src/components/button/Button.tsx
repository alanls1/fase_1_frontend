import type { ReactNode } from "react";
import "./Button.scss";

interface prop {
  children: ReactNode;
  variant: "contained" | "outlined";
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
  title?: string | undefined;
}

const Button = ({ children, variant, onClick, type, title }: prop) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      type={type}
      title={title}>
      {children}
    </button>
  );
};

export default Button;
