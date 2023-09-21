import { ReactComponent as Cross } from "@assets/icons/cross.svg";
import { ReactComponent as EyeCross } from "@assets/icons/eye-cross.svg";
import { ReactComponent as Eye } from "@assets/icons/eye.svg";
import { forwardRef, HTMLInputTypeAttribute, SyntheticEvent, useEffect, useRef, useState } from "react";
import { InputProps, ErrorMessage, withNativeEvent } from "@shared/ui";
import classes from "./Input.module.scss";


export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {label, className, validationMessage, invalid, type, clearable, ...inputProps} = props;
  const [focusClass, setFocusClass] = useState<string>("");
  const [invalidClass, setInvalidClass] = useState<string>("");
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type);
  const [showClear, setShowClear] = useState<boolean>(!!props.value);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleInputType = (type: HTMLInputTypeAttribute) => () => setInputType(type);
  const toggleFocus = (v: boolean) => () => setFocusClass(v ? classes.focus : "");
  const changeShowCLear = (e: SyntheticEvent<HTMLInputElement, InputEvent>) => setShowClear(!!e.currentTarget.value);
  const clearInput = () => {
    if (inputRef.current) {
      const prototype = Object.getPrototypeOf(inputRef.current);
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(prototype, "value").set;
      nativeInputValueSetter.call(inputRef.current, "");
      const event = new InputEvent("input", {bubbles:true});
      inputRef.current!.dispatchEvent(event);
    }
  };
  const setRefs = () => el => {
    inputRef.current = el;

    if (ref) {
      if (typeof ref === "function") {
        ref(el);
      } else {
        ref.current = el;
      }
    }
  };

  useEffect(() => setInvalidClass(invalid ? classes.invalid : ""), [invalid]);

  return (
    <div className={`${classes.input} ${className}`}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={`${classes.inputContainer} ${focusClass} ${invalidClass}`}>
        <input {...inputProps}
               className={classes.inputElement}
               aria-invalid={invalid}
               type={inputType}
               ref={setRefs()}
               onChange={withNativeEvent(changeShowCLear, props.onChange)}
               onFocus={withNativeEvent(toggleFocus(true), props.onFocus)}
               onBlur={withNativeEvent(toggleFocus(false), props.onBlur)}
        />
        <div className={classes.inputIconContainer}>
          {showClear && clearable && <Cross onClick={clearInput}/>}
          {type === "password" && inputType === "password" && <Eye onClick={toggleInputType("text")}/>}
          {type === "password" && inputType === "text" && <EyeCross onClick={toggleInputType("password")}/>}
        </div>
      </div>
      <div className={classes.errorMessage}>
        {invalid && validationMessage && <ErrorMessage message={validationMessage}/>}
      </div>
    </div>
  );
});
