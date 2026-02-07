import { baseApi } from "../../api/baseApi";

export const dueApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
      query: (id) => ({
        url: `/delete-sample?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["due", "overview"],
    }),
  }),
});

export const {
  useGetDueTestQuery,
  useAddDueTestMutation,
  useDeleteDueTestMutation,
  useUpdateDueTestMutation,
} = dueApi;
