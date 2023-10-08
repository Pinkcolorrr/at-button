import { forwardRef, memo, useEffect, useState } from "react";
import { ButtonProps } from "@shared/ui/Button/ButtonProps";
import { LoadingBubbles } from "@shared/ui/LoadingBubbles/LoadingBubbles";
import classes from "./Button.module.scss";

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {children, className, appearance, loading, ...buttonProps} = props;
  const [appearanceClass, setAppearanceClass] = useState<string>(classes.filled);

  useEffect(() => {
    switch (appearance) {
      case "filled": return setAppearanceClass(`${classes.filled}`);
      case "stroked": return setAppearanceClass(`${classes.stroked}`);
      case "ghost": return setAppearanceClass(`${classes.ghost}`);
      default: setAppearanceClass(`${classes.filled}`);
    }
  }, [appearance]);

  return (
    <button className={`${className} ${classes.button} ${appearanceClass}`}
            ref={ref}
            {...buttonProps}>
      {loading ? <LoadingBubbles className={`${classes.buttonLoadingBubbles} ${appearanceClass}`}/> : children}
    </button>
  );
});

ButtonComponent.displayName = "Button";
export const Button = memo(ButtonComponent);
