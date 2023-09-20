import { RegisterOptions } from "react-hook-form";
import { LoginFormInputs } from "@entities/LoginForm/LoginFormProps";

export const LoginFormUsernameValidator: RegisterOptions<LoginFormInputs, "username"> = {
  required: { value: true, message: "Username is required"}
};

export const LoginFormPasswordValidator: RegisterOptions<LoginFormInputs, "password"> = {
  required: { value: true, message: "Password is required"},
  minLength: { value: 5, message: "Password must include at least 5 characters"}
};
