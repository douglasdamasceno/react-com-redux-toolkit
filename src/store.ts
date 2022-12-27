import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./toolkit/features/counter/counter-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
