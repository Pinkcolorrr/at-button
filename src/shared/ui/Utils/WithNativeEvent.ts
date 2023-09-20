import { EventHandler } from "react";

export function withNativeEvent<T, R> (callback: (args?: unknown) => R, nativeEvent?: EventHandler<T>): (e: Event) => void {
  return (event: Event) => {
    if (nativeEvent && typeof nativeEvent === "function") {
      nativeEvent(event);
    }

    callback();
  };
}
