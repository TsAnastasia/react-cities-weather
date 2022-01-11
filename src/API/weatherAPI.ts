import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = process.env.REACT_APP_API;
console.log("BASE_URL", BASE_URL);
const API_KEY = process.env.REACT_APP_API_KEY;

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getWeatherByCity: build.query<any, string>({
      query: (city) => ({
        url: "weather",
        params: { q: city, appid: API_KEY, units: "metric" },
      }),
    }),
  }),
});
