import {
  AuthState,
  LoginResponse,
  RestoreAuthPayload,
} from "@/features/auth/types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isHydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },

    restoreAuth(state, action: PayloadAction<RestoreAuthPayload>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.isHydrated = true;
    },

    setHydrated(state) {
      state.isHydrated = true;
    },

    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, restoreAuth, setHydrated, logout } =
  authSlice.actions;

export default authSlice.reducer;
