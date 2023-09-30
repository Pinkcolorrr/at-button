import { EventHandler, SyntheticEvent } from "react";

type fn<T> = (e: T) => void;


export function withNativeEvent<T extends SyntheticEvent = SyntheticEvent>(callback: fn<T>, nativeEvent?: EventHandler<T>): EventHandler<T> {
  return (event) => {
    if (nativeEvent && typeof nativeEvent === "function") {
      nativeEvent(event);
    }

    callback(event);
  };
}
