import Person from '@assets/icons/person.svg';
import { FC } from "react";
import { LoginModalProps } from "@widgets/LoginModal/LoginModalProps";
import { LoginForm } from "@entities/LoginForm";
import { Modal } from "@shared/ui";
import classes from './LoginModal.module.scss';

export const LoginModal: FC<LoginModalProps> = ({isOpen, setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={classes.modal}>
        <div className={classes.modalBody}>
          <div className={classes.personIcon}>
            <img src={Person} alt='person' style={{width: 80, height: 80}}/>
          </div>
          <LoginForm />
        </div>
        <footer className={classes.modalFooter}>asd</footer>
      </div>
    </Modal>
  );
}
