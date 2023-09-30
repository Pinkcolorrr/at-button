import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";


export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  Icon: FC;
  size?: number
}

