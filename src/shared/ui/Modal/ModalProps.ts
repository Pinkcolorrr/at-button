import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeOnBackdropClick?: boolean;
  width?: string;
  children?: ReactNode;
}
