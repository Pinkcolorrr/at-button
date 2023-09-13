import classes from './Home.module.scss'
import { FC } from "react";
import { AtTimer } from "@features/AtTimer/components/AtTimer";

export const Home: FC = () => {
  return (
    <div className={classes.home}>
      <AtTimer/>
    </div>
  );
}
