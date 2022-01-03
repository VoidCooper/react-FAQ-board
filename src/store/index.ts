import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import loadingSlice from "./loading-slice";
import questionSlice from "./question-slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    question: questionSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
