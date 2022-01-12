import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  city: "Kiev" as string | null,
  latest: [] as { city: string; id: string }[],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string | null>) => {
      state.city = action.payload;
    },
    addLatest: (state, action: PayloadAction<{ city: string; id: string }>) => {
      if (state.latest.some((item) => item.city === action.payload.city)) {
        state.latest = state.latest.filter(
          (item) => item.city !== action.payload.city
        );
      }
      state.latest.push(action.payload);
    },
    deleteFromLatest: (state, action: PayloadAction<string>) => {
      state.latest = state.latest.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCity, addLatest, deleteFromLatest } = citySlice.actions;

export default citySlice.reducer;
