import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface LoginProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
  onLogin: () => void,
}
