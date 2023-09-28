import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi, AuthEmailDto } from "@shared/api";


export const authByEmailAndPassword = createAsyncThunk(
  "user/authByEmailAndPassword",
  async (authDto: AuthEmailDto) => AuthApi.authByEmail(authDto)
);
