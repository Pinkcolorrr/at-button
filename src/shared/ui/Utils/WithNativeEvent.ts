import { EventHandler } from "react";

export function withNativeEvent<T, R> (callback: (args?: unknown) => void, nativeEvent?: EventHandler<T>): EventHandler<R> {
  return (event: R) => {
    if (nativeEvent && typeof nativeEvent === "function") {
      nativeEvent(event);
    }

    callback(event);
  };
}
