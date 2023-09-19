import { FC, MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "@shared/ui";
import classes from './Modal.module.scss';


const getModalNode = (toggleIsOpen: MouseEventHandler<HTMLDivElement>, children: ReactNode): ReactNode => (
  <div className={classes.modalContainer}>
    <div className={classes.modalBackdrop} onClick={toggleIsOpen}></div>
    <div className={classes.modal}>
      {children}
    </div>
  </div>
)

export const Modal: FC<ModalProps> = ({isOpen, setIsOpen, children}) => {

  const toggleIsOpen = () => setIsOpen(!isOpen)
  const modalNode = getModalNode(toggleIsOpen, children);

  return (
    <>
      {isOpen && createPortal(modalNode, document.body)}
    </>
  )
}
