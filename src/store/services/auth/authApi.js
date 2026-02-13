import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    user: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    logut: build.mutation({
      query: (data) => ({
        url: "/logout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useUserMutation, useLogutMutation}= authApi