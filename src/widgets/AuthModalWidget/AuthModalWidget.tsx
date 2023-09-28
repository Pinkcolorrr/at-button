import { FC, useState } from "react";
import { AuthModalWidgetProps } from "@widgets/AuthModalWidget/AuthModalWidgetProps";
import { Login } from "@features/Login";
import { RegisterForm } from "@entities/RegisterForm";
import { Button, Modal } from "@shared/ui";
import classes from "./AuthModalWidget.module.scss";

type loginModalFormType = "login" | "register";

export const AuthModalWidget: FC<AuthModalWidgetProps> = ({isOpen, setIsOpen}) => {
  const [formType, setFormType] = useState<loginModalFormType>("login");
  const getActiveClass = (type: loginModalFormType) => formType === type ? classes.active : "";
  const changeFormType = (type: loginModalFormType) => () => setFormType(type);
  const onAuth = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={classes.modal}>
        <header className={classes.modalHeader}>
          <Button
            className={`${classes.navButton} ${getActiveClass("login")}`}
            appearance={"ghost"}
            onClick={changeFormType("login")}>
            Log in
          </Button>
          <Button
            className={`${classes.navButton}
            ${getActiveClass("register")}`}
            appearance={"ghost"}
            onClick={changeFormType("register")}>
            Sign in
          </Button>
        </header>
        <div className={classes.modalBody}>
          {formType === "login" && <Login onLogin={onAuth} className={classes.modalForm}/>}
          {formType === "register" && <RegisterForm onSubmit={(e) => console.log(e)} htmlFormProps={{className: classes.modalForm}}/>}
        </div>
      </div>
    </Modal>
  );
};
