import { baseApi } from "../../api/baseApi";

export const dueApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOverview: build.query({
      query: (data) => ({
        url: `/overview?${data}`,
      }),
      providesTags: ["due", "overview"],
    }),
    getDueTest: build.query({
      query: (query) => ({
        url: `/get-all-sample?${query}`,
      }),
      providesTags: ["due", "overview"],
    }),
    addDueTest: build.mutation({
      query: (data) => ({
        url: "/add-sample",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["due", "overview"],
    }),
    updateDueTest: build.mutation({
      query: (data) => ({
        url: "/update-sample",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["due"],
    }),
    deleteDueTest: build.mutation({
      query: (data) => ({
        url: `/delete-sample?${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["due", "overview"],
    }),
  }),
});

export const {
  useGetOverviewQuery,
  useGetDueTestQuery,
  useAddDueTestMutation,
  useDeleteDueTestMutation,
  useUpdateDueTestMutation,
} = dueApi;
