import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classes from "./ErrorMessage.module.scss";

interface ErrorMessageProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  const {message, ...otherProps} = props;
  return (<p className={classes.error} role="alert" {...otherProps}>{message}</p>);
};
