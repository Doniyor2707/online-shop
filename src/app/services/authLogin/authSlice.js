import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth_Url, baseUrl } from "../api";

// Define the API slice
export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: auth_Url.authUrl,
        method: "POST",
        body: {
          username,
          password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
