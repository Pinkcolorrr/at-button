import { RegisterOptions } from "react-hook-form";
import { LoginFormInputs } from "@entities/LoginForm/LoginFormProps";

export const LoginFormUsernameValidator: RegisterOptions<LoginFormInputs, "username"> = {
  required: { value: true, message: "Username is required"},
  validate: (username) => /\s/g.test(username) ? "Wrong format" : true
};

export const LoginFormPasswordValidator: RegisterOptions<LoginFormInputs, "password"> = {
  required: { value: true, message: "Password is required"},
  minLength: { value: 4, message: "At least 4 characters"}
};
