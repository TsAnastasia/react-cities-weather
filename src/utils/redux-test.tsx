import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import { rootReducer, RootState } from "../redux/store";

export const renderWithRedux = (
  component: ReactElement,
  storeOptions?: { preloadedState: RootState; store?: any },
  renderOptions?: RenderOptions
) => {
  const testStore = storeOptions?.store
    ? storeOptions.store
    : configureStore({
        reducer: rootReducer,
        preloadedState: storeOptions?.preloadedState,
      });

  return render(
    <Provider store={testStore}>{component}</Provider>,
    renderOptions
  );
};
