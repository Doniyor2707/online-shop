import { configureStore } from "@reduxjs/toolkit";
import { devmode } from "../util/config";
import basketSlice from "./services/basket/basketSlice";
import favorite from "./services/favorite/favorite";
import { apiSlice } from "./services/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    basket: basketSlice,
    favorite: favorite,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: devmode,
});
setupListeners(store.dispatch);

export default store;
