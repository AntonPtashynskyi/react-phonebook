import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: 'users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const { endpoints, useRegisterQuery } = authApi;
