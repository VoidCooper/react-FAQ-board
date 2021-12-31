// ToDo if using with real backend
// - Handle auth with JSON Web Token
// - Possible roles (admin, normal user)

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: localStorage.getItem("auth")?.startsWith("t"),
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("auth", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
