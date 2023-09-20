import { FC } from "react";
import { AtButtonProps } from "@features/AtButton/AtButtonProps";
import classes from "./AtButton.module.scss";

export const AtButton: FC<AtButtonProps> = ({onClick}) => {
  return (
    <button
      className={classes.atButton}
      type="button"
      role="button"
      aria-pressed="false"
      onClick={onClick}>
      <span className={classes.atButtonText}>click</span>
    </button>
  );
};
