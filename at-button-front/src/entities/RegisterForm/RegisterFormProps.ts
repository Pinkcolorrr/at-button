import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { SubmitHandler } from "react-hook-form";

export interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormProps {
  onSubmit: SubmitHandler<RegisterFormInputs>;
  htmlFormProps?: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
}
