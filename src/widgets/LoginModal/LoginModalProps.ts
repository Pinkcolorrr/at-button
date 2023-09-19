import { Dispatch, SetStateAction } from "react";

export interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
