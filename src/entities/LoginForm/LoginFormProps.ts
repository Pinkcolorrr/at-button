import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { SubmitHandler } from "react-hook-form";

export type LoginFormInputs = {
  username: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormInputs>;
  htmlFormProps?: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
}
