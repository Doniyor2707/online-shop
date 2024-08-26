import { category_api } from "../api";
import { apiSlice } from "../apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get all
    getAllCategory: build.query({
      query: () => category_api.allCategory,
    }),

    // Get by item
    getCategoryItem: build.query({
      query: (item) => category_api.categoryItem(item),
    }),
  }),
});

export const { useGetAllCategoryQuery, useGetCategoryItemQuery } = categoryApi;
