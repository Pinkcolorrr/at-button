import { forwardRef, useEffect, useState } from "react";
import { ButtonProps } from "@shared/ui/Button/ButtonProps";
import classes from "./Button.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {children, className, appearance, ...buttonProps} = props;
  const [buttonClasses, setButtonClasses] = useState<string>(`${classes.button} ${classes.filled}`);

  useEffect(() => {
    switch (appearance) {
      case "filled": return setButtonClasses(`${classes.button} ${classes.filled}`);
      case "stroked": return setButtonClasses(`${classes.button} ${classes.stroked}`);
      case "ghost": return setButtonClasses(`${classes.button} ${classes.ghost}`);
      default: setButtonClasses(`${classes.button} ${classes.filled}`);
    }
  }, [appearance]);

  return (
    <button className={`${className} ${buttonClasses}`}
            ref={ref}
            {...buttonProps}>
      {children}
    </button>
  );
});
