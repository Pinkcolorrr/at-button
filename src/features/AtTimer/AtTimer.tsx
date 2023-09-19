import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import { Timer } from "@shared/Timer";

export const AtTimer: FC = () => {
  const [time, setTime] = useState(DateTime.now().valueOf());

  useEffect(() => {
    const interval = setInterval(() => setTime(DateTime.now().valueOf()), 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <Timer time={time}/>
    </>
  )
}
