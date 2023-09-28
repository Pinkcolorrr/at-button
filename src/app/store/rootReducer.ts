/** Root reducer, that combine all other reducers */
import { combineReducers } from "@reduxjs/toolkit";
import { viewerReducer } from "@entities/Viewer/viewerSlice";

export const rootReducer = combineReducers({
  viewer: viewerReducer
});

/** Type of store state */
export type RootState = ReturnType<typeof rootReducer>;
