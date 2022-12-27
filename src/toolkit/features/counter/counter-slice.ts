import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

type CounterState = {
  value: number;
};
export const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, incrementAmount, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
