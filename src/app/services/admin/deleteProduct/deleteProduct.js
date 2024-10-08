import { products_api } from "../../api";
import { apiSlice } from "../../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    deleteProducts: build.mutation({
      query: (id) => ({
        url: products_api.productGetById(id),
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteProductsMutation } = authApi;
