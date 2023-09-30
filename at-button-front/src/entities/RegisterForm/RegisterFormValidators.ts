import { RegisterOptions } from "react-hook-form";
import { RegisterFormInputs } from "@entities/RegisterForm/RegisterFormProps";


const isEmailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const hasSpacesRegex = /\s/g;

export const RegisterFormUsernameValidator: RegisterOptions<RegisterFormInputs, "username"> = {
  required: { value: true, message: "Username is required"},
  validate: (username) => hasSpacesRegex.test(username) ? "Wrong format" : true
};

export const RegisterFormEmailValidator: RegisterOptions<RegisterFormInputs, "email"> = {
  required: { value: true, message: "Email is required"},
  validate: (email) => hasSpacesRegex.test(email) || !isEmailRegex.test(email) ? "Wrong format" : true
};

export const RegisterFormPasswordValidator: RegisterOptions<RegisterFormInputs, "password"> = {
  required: { value: true, message: "Password is required"},
  minLength: { value: 4, message: "At least 4 characters"}
};

export const registerFormConfirmPasswordValidator = (password: string): RegisterOptions<RegisterFormInputs, "confirmPassword">  => {
  return {
    required: { value: true, message: "Confirm password is required"},
    validate: (val) => password !== val ? "Passwords are different" : true
  };
};
