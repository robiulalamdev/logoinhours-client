import { api } from "../../api/apiSlice";

const subPageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleSpBySlug: builder.query({
      query: (slug) => `/sp/single/${slug}`,
      providesTags: ["sp"],
    }),

    getAllSp: builder.query({
      query: () => `/sp`,
      providesTags: ["sp"],
    }),
  }),
});

export const { useGetSingleSpBySlugQuery, useGetAllSpQuery } = subPageApi;
