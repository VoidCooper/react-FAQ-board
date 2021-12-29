import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import questionSlice from "./question-slice";

const store = configureStore({
  reducer: { auth: AuthSlice.reducer, question: questionSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
