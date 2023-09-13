import { FC } from "react";
import { Timer } from "@shared/Timer";

export const AtTimer: FC = () => {
  return (
    <>
      <Timer hours={10} minutes={30} seconds={43}/>
    </>
  )
}
