import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./api";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = "";
    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const apiSlice = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});