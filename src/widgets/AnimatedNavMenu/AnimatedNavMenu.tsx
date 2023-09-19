import { FC } from "react";
import { AtNavMenu } from "@features/AtNavMenu/AtNavMenu";
import classes from './AnimatedNavMenu.module.scss';

export const AnimatedNavMenu: FC = () => {
  return (
    <div className={classes.animatedNavMenu}>
      <AtNavMenu/>
      <div></div>
    </div>
  );
}
