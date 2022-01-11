import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/weatherAPI";

const rootReducer = combineReducers({
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
