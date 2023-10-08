import { FC, memo, MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "@shared/ui";
import classes from "./Modal.module.scss";


const getModalNode = (toggleIsOpen: MouseEventHandler<HTMLDivElement>, children: ReactNode): ReactNode => (
  <div className={classes.modalContainer}>
    <div className={classes.modalBackdrop} onClick={toggleIsOpen}></div>
    <div className={classes.modal}>
      {children}
    </div>
  </div>
);

export const ModalComponent: FC<ModalProps> = ({isOpen, setIsOpen, children, closeOnBackdropClick = true}) => {

  const toggleIsOpen = () => closeOnBackdropClick && setIsOpen(!isOpen);
  const modalNode = getModalNode(toggleIsOpen, children);

  return (
    <>
      {isOpen && createPortal(modalNode, document.body)}
    </>
  );
};

export const Modal = memo(ModalComponent);
