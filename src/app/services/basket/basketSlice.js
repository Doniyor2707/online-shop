import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amout: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state) => {},
    removeToBasket: (state) => {},
  },
});

// actions

const { addToBasket, removeToBasket } = basketSlice.actions;

// default
export default basketSlice.reducer;

//selected
export const selectedBasketAmout = (state)=> state.basket.amout
