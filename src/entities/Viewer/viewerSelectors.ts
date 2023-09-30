import { RootState } from "@app/store";


export const username = (state: RootState) => state.viewer.username;
export const email = (state: RootState) => state.viewer.email;
export const loading = (state: RootState) => state.viewer.loading;
