import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AchareApi = createApi({
  reducerPath: "AchareApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stage.achareh.ir/api",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAddresses: builder.mutation({
      query: (data) => ({
        url: "/karfarmas/address",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useGetAddressesMutation } = AchareApi;
