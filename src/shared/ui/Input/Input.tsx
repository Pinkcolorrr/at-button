import { forwardRef, useEffect, useState } from "react";
import { InputProps, ErrorMessage, withNativeEvent } from "@shared/ui";
import classes from "./Input.module.scss";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [focusClass, setFocusClass] = useState<string>("");
  const [invalidClass, setInvalidClass] = useState<string>("");
  const {label, className, validationMessage, invalid, ...inputProps} = props;

  const toggleFocus = (v: boolean) => setFocusClass(v ? classes.focus : "");
  useEffect(() => setInvalidClass(invalid ? classes.invalid : ""), [invalid]);

  return (
    <div className={`${classes.input} ${className}`}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={`${classes.inputContainer} ${focusClass} ${invalidClass}`}>
        <input {...inputProps}
               className={classes.inputElement}
               aria-invalid={invalid}
               ref={ref}
               onFocus={withNativeEvent(toggleFocus.bind(this, true), props.onFocus)}
               onBlur={withNativeEvent(toggleFocus.bind(this, false), props.onBlur)}/>
      </div>
      <div className={classes.errorMessage}>{invalid && validationMessage && <ErrorMessage message={validationMessage}/>}</div>
    </div>
  );
});
