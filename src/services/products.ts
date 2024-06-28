import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductType } from "./types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://667c55163c30891b865c45f9.mockapi.io/api/v1/",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAll: builder.query<Array<ProductType>, void>({
      query: () => `products/`,
      providesTags: ["Product"],
    }),
    getById: builder.query<ProductType, string>({
      query: (id) => `products/${id}/`,
      providesTags: ["Product"],
    }),
    create: builder.mutation<ProductType, Partial<ProductType>>({
      query: (data) => ({
        url: `products/`,
        method: "POST",
        body: { ...data, quantity: 1 },
      }),
      invalidatesTags: ["Product"],
    }),
    update: builder.mutation<
      ProductType,
      Partial<ProductType> & Pick<ProductType, "id">
    >({
      query: ({ id, ...rest }) => ({
        url: `products/${id}/`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Product"],
    }),
    remove: builder.mutation<ProductType, number>({
      query: (id) => ({
        url: `products/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetByIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useRemoveMutation,
} = productsApi;
