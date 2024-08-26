import { products_api } from "../api";
import { apiSlice } from "../apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get all
    getAllProducts: build.query({
      query: () => products_api.allProductsGet,
    }),

    // Get by id
    getProductById: build.query({
      query: (id) => products_api.productGetById(id),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;