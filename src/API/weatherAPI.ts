import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWeather } from "../types/weather";

const BASE_URL = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getWeatherByCity: build.query<IWeather, string>({
      query: (city) => ({
        url: "weather",
        params: { q: city, appid: API_KEY, units: "metric" },
      }),
    }),
  }),
});
