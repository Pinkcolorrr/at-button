import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authByEmailAndPassword } from "@entities/Viewer/viwerThunks";

export interface Viewer {
  username: string|null;
  email: string|null;
  loading: boolean;
}

const viewerInitialValue: Viewer = {
  username: null,
  email: null,
  loading: false
};

const viewerSlice = createSlice({
  name: "viewer",
  initialState: viewerInitialValue,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {...state, loading: action.payload};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authByEmailAndPassword.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    });
  }
});

export const viewerSliceName = viewerSlice.name;
export const viewerReducer = viewerSlice.reducer;
export const viewerActions = viewerSlice.actions;
