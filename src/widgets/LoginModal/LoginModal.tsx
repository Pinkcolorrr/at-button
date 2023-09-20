import { FC } from "react";
import { LoginModalProps } from "@widgets/LoginModal/LoginModalProps";
import { LoginForm } from "@entities/LoginForm";
import { Modal } from "@shared/ui";
import classes from "./LoginModal.module.scss";

export const LoginModal: FC<LoginModalProps> = ({isOpen, setIsOpen}) => {

  const onSubmit = (v) => console.log(v);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={classes.modal}>
        <div className={classes.modalBody}>
          <LoginForm onSubmit={onSubmit} htmlFormProps={{className: classes.modalLoginForm}}/>
        </div>
      </div>
    </Modal>
  );
};
