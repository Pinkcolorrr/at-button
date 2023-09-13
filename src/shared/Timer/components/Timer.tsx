import { FC } from "react";
import classes from "./Timer.module.scss";
import { TimerProps } from "@shared/Timer";

export const Timer: FC<TimerProps> = ({hours, minutes, seconds}) => {
  return (
    <div className={classes.timer}>
      <div className={classes.timeWrapper}>
        <span className={classes.hours}>{hours}</span>
        :
        <span className={classes.minutes}>{minutes}</span>
        :
        <span className={classes.seconds}>{seconds}</span>
      </div>
    </div>
  )
}
