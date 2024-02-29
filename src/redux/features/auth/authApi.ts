import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/v1/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    updateUser: builder.mutation({
      query: (updatedDonorsInfo) => ({
        url: `/api/auth/donors-user/${updatedDonorsInfo.email}`,
        method: "PUT",
        body: updatedDonorsInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useUpdateUserMutation } = authApi;
