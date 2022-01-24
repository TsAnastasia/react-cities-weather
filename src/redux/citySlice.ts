import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/weatherAPI";
import { ICity } from "../types/city";

const initialState = {
  city: "" as string | null,
  latest: [] as ICity[],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string | null>) => {
      state.city = action.payload;
    },
    addLatest: (state, action: PayloadAction<ICity>) => {
      state.latest = state.latest.filter(
        (city) => city.name !== action.payload.name
      );

      state.latest.push(action.payload);
    },
    deleteFromLatest: (state, action: PayloadAction<ICity>) => {
      state.latest = state.latest.filter(
        (city) => city.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      weatherAPI.endpoints.getWeatherByCity.matchFulfilled,
      (state, action) => {
        const city = `${action.payload.name}, ${action.payload.sys.country}`;
        state.latest = state.latest.filter((c) => c.name !== city);

        state.latest.push({ name: city, id: Date() });
      }
    );
  },
});

export const { setCity, addLatest, deleteFromLatest } = citySlice.actions;

export default citySlice.reducer;
