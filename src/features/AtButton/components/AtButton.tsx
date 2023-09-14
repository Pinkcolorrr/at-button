import { FC } from "react";
import classes from "./AtButton.module.scss";

export const AtButton: FC = () => {
  return (
    <button
      className={classes.atButton}
      type="button"
      role="button"
      aria-pressed="false">
      <span className={classes.atButtonText}>click</span>
    </button>
  );
}
