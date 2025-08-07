import type { ReactNode } from "react";
import "./Button.scss";

interface prop {
  children: ReactNode;
  variant: "contained" | "outlined";
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, variant, onClick, type }: prop) => {
  return (
    <button className={`button ${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
