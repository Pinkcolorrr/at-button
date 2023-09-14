import { FC } from "react";
import { TimerButton } from "@widgets/TimerButton/components/TimerButton";
import classes from './Home.module.scss'

export const Home: FC = () => {
  return (
    <div className={classes.home}>
      <TimerButton/>
    </div>
  );
}
