import { FC } from "react";
import { AnimatedNavMenu } from "@widgets/AnimatedNavMenu";
import { TimerButton } from "@widgets/TimerButton";
import classes from './HomePage.module.scss'

export const HomePage: FC = () => {
  return (
    <div className={classes.home}>
      <TimerButton/>
      <div className={classes.navMenu}>
        <AnimatedNavMenu/>
      </div>
    </div>
  );
}
