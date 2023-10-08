import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react";
import classes from "./LoadingBubbles.module.scss";


export const LoadingBubblesComponent: FC<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLElement>> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <span className={`${className} ${classes.loadingContainer}`} {...otherProps}>
      <span className={classes.loadingEl}></span>
      <span className={classes.loadingEl}></span>
      <span className={classes.loadingEl}></span>
    </span>
  );
};

export const LoadingBubbles = memo(LoadingBubblesComponent);
