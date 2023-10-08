import { ReactComponent as Cross } from "@assets/icons/cross.svg";
import { ReactComponent as EyeCross } from "@assets/icons/eye-cross.svg";
import { ReactComponent as Eye } from "@assets/icons/eye.svg";
import {
  forwardRef,
  HTMLInputTypeAttribute, memo,
  useEffect,
  useRef,
  useState
} from "react";
import { InputProps, ErrorMessage, useWithNativeEvent, IconButton } from "@shared/ui";
import classes from "./Input.module.scss";


const InputComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {label, className, validationMessage, invalid, type, clearable, disabled, ...inputProps} = props;
  const [focusClass, setFocusClass] = useState<string>("");
  const [invalidClass, setInvalidClass] = useState<string>("");
  const [disabledClass, setDisabledClass] = useState<string>("");
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type);
  const [showClear, setShowClear] = useState<boolean>(!!props.value);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setShowClearOnChange = useWithNativeEvent((e) => setShowClear(!!e.currentTarget.value), props.onChange);
  const setClassOnFocus = useWithNativeEvent(() => setFocusClass(classes.focus), props.onFocus);
  const setClassOnBlur =  useWithNativeEvent(() => setFocusClass(""), props.onBlur);

  const toggleInputType = (type: HTMLInputTypeAttribute) => () => setInputType(type);
  const clearInput = () => {
    if (inputRef.current) {
      const prototype = Object.getPrototypeOf(inputRef.current);
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
      nativeInputValueSetter?.call(inputRef.current, "");
      const event = new InputEvent("input", {bubbles:true});
      inputRef.current!.dispatchEvent(event);
    }
  };
  const setRefs = () => (el: HTMLInputElement | null) => {
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
  useEffect(() => setDisabledClass(disabled ? classes.disabled : ""), [disabled]);

  return (
    <div className={`${classes.input} ${className} ${disabledClass}`}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={`${classes.inputContainer} ${focusClass} ${invalidClass}`}>
        <input {...inputProps}
               className={classes.inputElement}
               aria-invalid={invalid}
               type={inputType}
               disabled={disabled}
               ref={setRefs()}
               onChange={setShowClearOnChange}
               onFocus={setClassOnFocus}
               onBlur={setClassOnBlur}
        />
        <div className={classes.inputIconContainer}>
          {showClear && clearable && <IconButton Icon={Cross} disabled={disabled} onClick={clearInput}/>}
          {type === "password" && inputType === "password" && <IconButton Icon={Eye} disabled={disabled} onClick={toggleInputType("text")}/>}
          {type === "password" && inputType === "text" && <IconButton Icon={EyeCross} disabled={disabled} onClick={toggleInputType("password")}/>}
        </div>
      </div>
      <div className={classes.errorMessage}>
        {invalid && validationMessage && <ErrorMessage message={validationMessage}/>}
      </div>
    </div>
  );
});

InputComponent.displayName = "Input";
export const Input = memo(InputComponent);
