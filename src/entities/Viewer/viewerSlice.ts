import { createSlice } from "@reduxjs/toolkit";
import { authByEmailAndPassword } from "@entities/Viewer/viwerThunks";

interface Viewer {
  username: string|null;
  email: string|null;
}

const viewerInitialValue: Viewer = {
  username: null,
  email: null
};

const viewerSlice = createSlice({
  name: "viewer",
  initialState: viewerInitialValue,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(authByEmailAndPassword.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    });
  }
});

export const viewerReducer = viewerSlice.reducer;
export const viewerActions = viewerSlice.actions;
