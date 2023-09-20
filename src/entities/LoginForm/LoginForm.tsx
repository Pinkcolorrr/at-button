import { FC } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs, LoginFormProps } from "@entities/LoginForm/LoginFormProps";
import { LoginFormPasswordValidator, LoginFormUsernameValidator } from "@entities/LoginForm/LoginFormValidators";
import { Button } from "@shared/ui";
import { Input } from "@shared/ui";
import classes from "./LoginForm.module.scss";

export const LoginForm: FC<LoginFormProps> = (props, context) => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs, typeof context, LoginFormInputs>();

  const registerUsername = register("username" as keyof LoginFormInputs, LoginFormUsernameValidator);
  const registerPassword = register("password" as keyof LoginFormInputs, LoginFormPasswordValidator);

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} {...props.htmlFormProps}>
      <Input
        className={classes.LoginFormUserNameInput}
        type="text"
        label="username"
        placeholder="Enter your  username or e-mail"
        invalid={!!errors.username}
        validationMessage={errors.username?.message}
        {...registerUsername}
      />

      <Input
        className={classes.LoginFormPasswordNameInput}
        type="password"
        label="password"
        placeholder="Enter the password"
        invalid={!!errors.password}
        validationMessage={errors.password?.message}
        {...registerPassword}
      />

      <Button type="submit">LOG IN</Button>
    </form>
  );
};
