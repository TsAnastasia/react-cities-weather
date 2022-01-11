import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  city: null as string | null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string | null>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
