import { FC, useState } from "react";
import { LoginModal } from "@widgets/LoginModal";
import { AtButton } from "@features/AtButton";
import { AtTimer } from "@features/AtTimer";
import classes from "./TimerButton.module.scss";

export const TimerButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.timerButton}>
      <div className={classes.atTimer}>
        <AtTimer></AtTimer>
      </div>
      <div className={classes.atButton}>
        <AtButton onClick={() => setIsOpen(!isOpen)}></AtButton>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
