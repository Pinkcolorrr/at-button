import { FC } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, RegisterFormProps } from "@entities/RegisterForm/RegisterFormProps";
import {
  registerFormConfirmPasswordValidator,
  RegisterFormEmailValidator, RegisterFormPasswordValidator,
  RegisterFormUsernameValidator
} from "@entities/RegisterForm/RegisterFormValidators";
import { Button, Input } from "@shared/ui";
import classes from "./RegisterForm.module.scss";

export const RegisterForm: FC<RegisterFormProps> = (props, context) => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormInputs, typeof context, RegisterFormInputs>();

  const registerUsername = register("username" as keyof RegisterFormInputs, RegisterFormUsernameValidator);
  const registerEmail = register("email" as keyof RegisterFormInputs, RegisterFormEmailValidator);
  const registerPassword = register("password" as keyof RegisterFormInputs, RegisterFormPasswordValidator);
  const registerConfirmPassword = register("confirmPassword" as keyof RegisterFormInputs, registerFormConfirmPasswordValidator(watch("password")));


  return (
    <form noValidate={true} onSubmit={handleSubmit(props.onSubmit)} {...props.htmlFormProps}>
      <Input
        className={classes.registerFormInput}
        type="text"
        label="username"
        placeholder="JohnSmith"
        invalid={!!errors.username}
        validationMessage={errors.username?.message}
        {...registerUsername}
      />

      <Input
        className={classes.registerFormInput}
        type="email"
        label="email"
        placeholder="john-smith@gmail.com"
        invalid={!!errors.email}
        validationMessage={errors.email?.message}
        {...registerEmail}
      />

      <Input
        className={classes.registerFormInput}
        type="password"
        label="password"
        placeholder="****"
        invalid={!!errors.password}
        validationMessage={errors.password?.message}
        {...registerPassword}
      />

      <Input
        className={classes.registerFormInput}
        type="password"
        label="confirm password"
        placeholder="****"
        invalid={!!errors.confirmPassword}
        validationMessage={errors.confirmPassword?.message}
        {...registerConfirmPassword}
      />

      <Button type="submit">SIGN UP</Button>
    </form>
  );
};
