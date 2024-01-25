import { api } from "../../api/apiSlice";

const globalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    toggleGlobal: builder.mutation({
      query: ({ data }) => ({
        url: `/global/toggle`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["global"],
    }),

    getGlobal: builder.query({
      query: () => `/global`,
      providesTags: ["global"],
    }),

    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["global"],
    }),
  }),
});

export const {
  useToggleGlobalMutation,
  useGetGlobalQuery,
  useGetCategoriesQuery,
} = globalApi;
