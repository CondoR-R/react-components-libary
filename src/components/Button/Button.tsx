import type React from "react";

import style from "./Button.module.scss";

type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  bigPadding?: boolean;
  disabled?: boolean;
  dark?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  outline = false,
  bigPadding = false,
  disabled = false,
  dark = false,
}) => {
  const buttonClass: string = `${style.button} ${
    outline ? style.outline : ""
  } ${bigPadding ? style.bigPadding : ""} ${dark ? style.dark : ""}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
