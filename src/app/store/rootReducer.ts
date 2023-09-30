/** Root reducer, that combine all other reducers */
import { combineReducers } from "@reduxjs/toolkit";
import { viewerReducer, viewerSliceName } from "@entities/Viewer";

export const rootReducer = combineReducers({
  [viewerSliceName]: viewerReducer
});

/** Type of store state */
export type RootState = ReturnType<typeof rootReducer>;
