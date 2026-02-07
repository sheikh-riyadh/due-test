import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const imgbbApi = createApi({
  reducerPath: "imgbbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imageBB_api
    }`,
  }),
  endpoints: (build) => ({
    uploadImage: build.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = imgbbApi;
