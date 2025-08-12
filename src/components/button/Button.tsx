import type { ReactNode } from "react";
import "./Button.scss";

interface prop {
  children: ReactNode;
  variant: "contained" | "outlined";
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
  title?: string | undefined;
  disabled?: boolean | undefined;
}

const Button = ({
  children,
  variant,
  onClick,
  type,
  title,
  disabled,
}: prop) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      type={type}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
