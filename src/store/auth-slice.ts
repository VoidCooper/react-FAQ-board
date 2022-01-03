// ToDo if using with real backend
// - Handle auth with JSON Web Token
// - Possible roles (admin, normal user)

import { createSlice } from "@reduxjs/toolkit";
import delay from "delay";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "store";
import { loadingActions } from "./loading-slice";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: !!localStorage.getItem("auth")?.startsWith("t"),
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

export const login = async (dispatch: AppDispatch, navigate:NavigateFunction) => {
  dispatch(loadingActions.startLoading("Logging in!"));
  await delay.range(500, 3000);
  dispatch(loadingActions.endLoading("Logged in!"));
  dispatch(authSlice.actions.login());
  await delay(500);
  dispatch(loadingActions.hideLoadModal());
  navigate('/');
}

export const authActions = authSlice.actions;
export default authSlice;
