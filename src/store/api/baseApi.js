import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeUser } from "../features/user/userSlice";



const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_api_url,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  // If unauthorized, clear user state
  if (result?.error && [401, 403].includes(result.error.status)) {
    api.dispatch(removeUser());
  }

  // If server 500, log to console for debugging
  if (result?.error && result.error.status === 500) {
    console.error("Server 500 error:", result.error);
  }

  return result;
};


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["due","overview","phlebotomist"],
  endpoints: () => ({}),
});
