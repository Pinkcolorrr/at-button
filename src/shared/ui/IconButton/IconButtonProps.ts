import { FC } from "react";
import { ButtonPropsBase } from "@shared/ui/ButtonPropsBase";

export interface IconButtonProps extends ButtonPropsBase {
  Icon: FC;
  size?: number
}

