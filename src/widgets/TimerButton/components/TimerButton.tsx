import { FC } from "react";
import { AtButton } from "@features/AtButton/components/AtButton";
import { AtTimer } from "@features/AtTimer/components/AtTimer";
import classes from './TimerButton.module.scss';

export const TimerButton: FC = () => {
  return (
    <div className={classes.timerButton}>
      <div className={classes.atTimer}>
        <AtTimer></AtTimer>
      </div>
      <div className={classes.atButton}>
        <AtButton></AtButton>
      </div>
    </div>
  )
}
