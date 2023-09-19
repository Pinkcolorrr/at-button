import { AriaRole, MouseEventHandler } from "react";

export interface ButtonPropsBase {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean;
  role?: AriaRole;
  type?: 'submit' | 'reset' | 'button';
}
