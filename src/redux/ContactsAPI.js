import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
    refetchOnMountOrArgChange: true,
  }),

  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contact'],
    }),

    getContact: builder.query({
      query: contactId => ({
        url: `/contacts/${contactId}`,
      }),
      providesTags: ['contact'],
    }),

    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),

    updateContact: builder.mutation({
      query: ({ contactId, ...rest }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['contact'],
    }),

    registration: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['contact'],
    }),

    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['contact'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),

    refreshUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  endpoints,
  reducer,
  useFetchContactsQuery,
  useGetContactQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useUpdateContactMutation,
  useRegistrationMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshUserQuery,
} = contactApi;
