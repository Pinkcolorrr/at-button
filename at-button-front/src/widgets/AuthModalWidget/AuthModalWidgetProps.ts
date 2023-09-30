import { Dispatch, SetStateAction } from "react";

export interface AuthModalWidgetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
