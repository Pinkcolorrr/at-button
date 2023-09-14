import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import { Timer } from "@shared/Timer";

export const AtTimer: FC = () => {
  const [time, setTime] = useState(DateTime.now().valueOf());

  useEffect(() => {
    setInterval(() => setTime(DateTime.now().valueOf()), 1000);
  }, []);

  return (
    <>
      <Timer time={time}/>
    </>
  )
}
