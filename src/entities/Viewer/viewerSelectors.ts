import { RootState } from "@app/store";

export const selectViewerUsername = (state: RootState) => state.viewer.username;
export const selectViewerEmail = (state: RootState) => state.viewer.email;
