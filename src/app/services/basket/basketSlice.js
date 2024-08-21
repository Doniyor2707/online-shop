import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      state.products.push({ 
          ...actions.payload,
          amount: 1, 
        });
    },

    incBasketItem: (state, actions) => {
      const productId = actions.payload.productId;

      const index = state.products.findIndex((item) => item.id === productId);

      if (index === -1) return;

      state.products[index].amount += 1;
    },

    decBasketItem: (state, actions) => {
      const productId = actions.payload.productId;

      const index = state.products.findIndex((item) => item.id === productId);

      if (index === -1) return;
      // Check amount
      if (state.products[index].amount < 2) return;
      
      state.products[index].amount -= 1;
    },

    removeToBasket: (state, actions) => {
      state.products = state.products.filter(
        (product) => product.id !== actions.payload.productId
      );
    },
  },
});

// actions

export const { addToBasket, removeToBasket,incBasketItem,decBasketItem } = basketSlice.actions;

// default
export default basketSlice.reducer;

//selected

export const selectedBasketProducts = (state) => state.basket.products;

export const selectedBasketProductsById = (state, productId) =>
  state.basket.products.find((item) => item.id === productId);
