import { FC, useState } from "react";
import { AuthModalWidgetProps } from "@widgets/AuthModalWidget/AuthModalWidgetProps";
import { LoginForm } from "@entities/LoginForm";
import { Button, Modal } from "@shared/ui";
import { RegisterForm } from "@entities/RegisterForm";
import classes from "./AuthModalWidget.module.scss";

type loginModalFormType = "login" | "register";

export const AuthModalWidget: FC<AuthModalWidgetProps> = ({isOpen, setIsOpen}) => {
  const [formType, setFormType] = useState<loginModalFormType>("login");
  const getActiveClass = (type: loginModalFormType) => formType === type ? classes.active : "";
  const setFormTypeHandler = (type: loginModalFormType) => setFormType(type);
  const onSubmit = (v) => console.log(v);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={classes.modal}>
        <header className={classes.modalHeader}>
          <Button
            className={`${classes.navButton} ${getActiveClass("login")}`}
            appearance={"ghost"}
            onClick={setFormTypeHandler.bind(this, "login")}>
            Log in
          </Button>
          <Button
            className={`${classes.navButton}
            ${getActiveClass("register")}`}
            appearance={"ghost"}
            onClick={setFormTypeHandler.bind(this, "register")}>
            Sign in
          </Button>
        </header>
        <div className={classes.modalBody}>
          {formType === "login" && <LoginForm onSubmit={onSubmit} htmlFormProps={{className: classes.modalForm}}/>}
          {formType === "register" && <RegisterForm onSubmit={onSubmit} htmlFormProps={{className: classes.modalForm}}/>}
        </div>
      </div>
    </Modal>
  );
};
