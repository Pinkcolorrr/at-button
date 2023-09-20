import React  from "react";


export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string,
  validationMessage?: string;
  invalid?: boolean;
}
