import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classes from "./LoadingBubbles.module.scss";


export const LoadingBubbles: FC<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLElement>> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <span className={`${className} ${classes.loadingContainer}`} {...otherProps}>
      <span className={classes.loadingEl}></span>
      <span className={classes.loadingEl}></span>
      <span className={classes.loadingEl}></span>
    </span>
  );
};
