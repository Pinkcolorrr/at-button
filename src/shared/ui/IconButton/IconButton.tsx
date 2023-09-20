import { forwardRef } from "react";
import { IconButtonProps } from "@shared/ui/IconButton/IconButtonProps";
import classes from "./IconButton.module.scss";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {Icon, ...buttonProps} = props;

  return (
    <button className={classes.iconButton}
            ref={ref}
            {...buttonProps}>
      <Icon/>
    </button>
  );
});
