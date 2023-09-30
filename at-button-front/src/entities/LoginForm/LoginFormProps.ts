import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { SubmitHandler } from "react-hook-form";

export type LoginFormInputs = {
  usernameOrEmail: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormInputs>;
  loading?: boolean;
  htmlFormProps?: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
}
