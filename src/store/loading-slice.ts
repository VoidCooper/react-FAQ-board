import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  isLoading: boolean;
  loadingMessage: string;
}

const initialState = {
  isLoading: false,
  loadingMessage: "",
} as LoadingState;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading(state, action) {
      state.isLoading = true;
      state.loadingMessage = action.payload;
    },
    endLoading(state, action) {
      state.isLoading = false;
      state.loadingMessage = action.payload;
    },
    hideLoadModal(state) {
      state.loadingMessage = "";
    }
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
