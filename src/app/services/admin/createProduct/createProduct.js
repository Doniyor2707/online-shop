import { products_api } from "../../api";
import { apiSlice } from "../../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (body) => ({
        url: products_api.allProductsGet,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = authApi;
