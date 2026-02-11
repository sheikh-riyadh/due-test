import { baseApi } from "../../api/baseApi";

export const phlebotomistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPhlebotomist: build.query({
      query: (query) => ({
        url: `/get-all-phlebotomist?${query}`,
      }),
      providesTags: ["phlebotomist"],
    }),
    addPhlebotomist: build.mutation({
      query: (data) => ({
        url: "/add-phlebotomist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["phlebotomist"],
    }),
    updatePhlebotomist: build.mutation({
      query: (data) => ({
        url: "/update-phlebotomist",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["phlebotomist"],
    }),
    deletePhlebotomist: build.mutation({
      query: (id) => ({
        url: `/delete-phlebotomist?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["phlebotomist"],
    }),
  }),
});

export const {
  useGetPhlebotomistQuery,
  useAddPhlebotomistMutation,
  useUpdatePhlebotomistMutation,
  useDeletePhlebotomistMutation
} = phlebotomistApi;
