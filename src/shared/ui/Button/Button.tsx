import { FC } from "react";
import { ButtonProps } from "@shared/ui/Button/ButtonProps";


export const Button: FC<ButtonProps> = (
  {
    title,
    onClick,
    disabled= false ,
    role = 'button',
    type = 'button'
  }) => {

  return (
    <button className="custom-button"
            disabled={disabled}
            role={role}
            type={type}
            onClick={onClick}>
      {title}
    </button>
  );
}
