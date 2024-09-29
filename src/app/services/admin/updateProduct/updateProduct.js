import { products_api } from "../../api";
import { apiSlice } from "../../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    updateProducts: build.mutation({
      query: ({ id, body }) => ({
        url: products_api.productUpdate(id),
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useUpdateProductsMutation } = authApi;
