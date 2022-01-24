import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { weatherAPI } from "../API/weatherAPI";
import cityReducer from "./citySlice";

const rootReducer = combineReducers({
  cityReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

console.log("cityReducer.name", cityReducer.name);

const perisitConfig = {
  key: "root",
  storage,
  whitelist: ["cityReducer"],
};

const persisReducer = persistReducer(perisitConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persisReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(weatherAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
