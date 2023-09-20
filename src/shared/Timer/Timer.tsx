import { FC, useEffect, useState } from "react";
import { TimerProps } from "@shared/Timer/index";
import {
  getHoursFromTimestamp,
  getMinutesFromTimestamp,
  getSecondsFromTimestamp
} from "@shared/Timer/TimerUtils";
import classes from "./Timer.module.scss";

export const Timer: FC<TimerProps> = ({time}) => {
  const [hours, setHours] = useState(getHoursFromTimestamp(time));
  const [minutes, setMinutes] = useState(getMinutesFromTimestamp(time));
  const [seconds, setSeconds] = useState(getSecondsFromTimestamp(time));

  useEffect(() => {
    setHours(getHoursFromTimestamp(time));
    setMinutes(getMinutesFromTimestamp(time));
    setSeconds(getSecondsFromTimestamp(time));
  }, [time]);

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
  );
};
