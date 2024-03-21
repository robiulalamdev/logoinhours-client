import { api } from "../../api/apiSlice";

const pagesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPages: builder.query({
      query: () => `/pages`,
      providesTags: ["pages"],
    }),

    getPage: builder.query({
      query: ({ id }) => `/pages/${id}`,
      providesTags: ["pages"],
    }),
  }),
});

export const { useGetPagesQuery, useGetPageQuery } = pagesApi;
