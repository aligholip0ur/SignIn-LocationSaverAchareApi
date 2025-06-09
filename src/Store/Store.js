import { configureStore } from "@reduxjs/toolkit";
import { AchareApi } from "../Api/Api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [AchareApi.reducerPath]: AchareApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AchareApi.middleware),
});

setupListeners(store.dispatch);


