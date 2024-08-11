import { configureStore } from "@reduxjs/toolkit";
import { devmode } from "../util/config";
import basketSlice from "./services/basket/basketSlice";
import favorite from "./services/favorite/favorite";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    favorite: favorite
  },
  devTools: devmode,
});

export default store