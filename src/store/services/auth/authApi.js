import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    user: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["due","overview","phlebotomist"]
    }),
    logut: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags:["due","overview","phlebotomist"]
    }),
  }),
});

export const {useUserMutation, useLogutMutation}= authApi