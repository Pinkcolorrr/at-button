import { forwardRef, memo } from "react";
import { IconButtonProps } from "@shared/ui/IconButton/IconButtonProps";
import classes from "./IconButton.module.scss";

const IconButtonComponent = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {Icon, size, className, ...buttonProps} = props;

  return (
    <button className={`${classes.iconButton} ${className}`}
            style={{width: `${size}px`, height: `${size}px`}}
            ref={ref}
            {...buttonProps}>
      <Icon/>
    </button>
  );
});

IconButtonComponent.displayName = "IconButton";
export const IconButton = memo(IconButtonComponent);
