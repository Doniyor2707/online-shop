import { category_api } from "../api";
import { apiSlice } from "../apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get all
    getAllCategory: build.query({
      query: () => category_api.allCategory,
    }),

    // Get by item
    getCategoryId: build.query({
      query: (id) => category_api.categoryId(id),
    }),

    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: category_api.updateCategory(id),
        method: "PUT",
        body,
      }),
    }),

    deleteCategoryItem: build.mutation({
      query: (id) => ({
        url: category_api.deleteCategory(id),
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryIdQuery,
  useDeleteCategoryItemMutation,
  useUpdateCategoryMutation,
} = categoryApi;
