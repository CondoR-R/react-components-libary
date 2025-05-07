import type React from "react";

import style from "./Button.module.scss";

type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  outline?: boolean;
  disabled?: boolean;
  dark?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  secondary = false,
  danger = false,
  outline = false,
  disabled = false,
  dark = false,
  className = "",
}) => {
  type Color = "primary" | "secondary" | "danger" | "light" | "dark";

  let bgColor: Color = "primary";
  let borderColor: Color = "primary";
  let color: Color = "light";

  if (secondary) {
    bgColor = "secondary";
    borderColor = "secondary";
  } else if (danger) {
    bgColor = "danger";
    borderColor = "danger";
  }

  if (outline) {
    bgColor = color;
    color = borderColor;
  }

  if (dark) {
    color = "dark";
  }

  const vars = {
    "--color": `var(--c-${color})`,
    "--bg-color": `var(--c-${bgColor})`,
    "--border-color": `var(--c-${borderColor})`,
  } as React.CSSProperties;

  const buttonClass: string = `${style.button} ${className}`;

  return (
    <button
      className={buttonClass}
      style={vars}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
