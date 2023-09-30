import { FC, useState } from "react";
import { useTypedSelector } from "@app/store/hooks";
import { AuthModalWidgetProps } from "@widgets/AuthModalWidget/AuthModalWidgetProps";
import { Login } from "@features/Login";
import { RegisterForm } from "@entities/RegisterForm";
import { ViewerSelectors } from "@entities/Viewer";
import { Button, Modal } from "@shared/ui";
import classes from "./AuthModalWidget.module.scss";

type loginModalFormType = "login" | "register";

export const AuthModalWidget: FC<AuthModalWidgetProps> = ({isOpen, setIsOpen}) => {
  const [formType, setFormType] = useState<loginModalFormType>("login");
  const getActiveClass = (type: loginModalFormType) => formType === type ? classes.active : "";
  const changeFormType = (type: loginModalFormType) => () => setFormType(type);
  const onAuth = () => setIsOpen(false);
  const loading = useTypedSelector(ViewerSelectors.loading);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeOnBackdropClick={!loading}>
      <div className={classes.modal}>
        <header className={classes.modalHeader}>
          <Button
            className={`${classes.navButton} ${getActiveClass("login")}`}
            appearance={"ghost"}
            disabled={loading}
            onClick={changeFormType("login")}>
            Log in
          </Button>
          <Button
            className={`${classes.navButton}
            ${getActiveClass("register")}`}
            appearance={"ghost"}
            disabled={loading}
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
