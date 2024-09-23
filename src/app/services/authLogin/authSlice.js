import { createApi,  } from "@reduxjs/toolkit/query/react";
import { auth_Url } from "../api";

// Define the API slice
export const authApi = createApi({
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
