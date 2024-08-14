import { createSlice } from "@reduxjs/toolkit";

// const products = JSON.parse(localStorage.getItem("favorite") || '[]')

const initialState = { 
  products : [],
}


const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, actions) => {
      state.products.push(actions.payload);
      // localStorage.setItem("favorite", JSON.stringify(state.products))
    },
    removeFavorite: (state, actions) => {
      state.products = state.products.filter(
        (product) => product.id !== actions.payload.productId
      );
    },
  },
});

// actions
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// default
export default favoritesSlice.reducer;

// selected
export const selectedFavoriteProducts = (state) => state.favorite.products;
export const selectedFavoriteProductsById = (state, productId) =>
  state.favorite.products.find((item) => item.id === productId);
